import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import chromadb
from rag.create_embeddings import create_embeddings
import logging
from typing import Dict,Any
from configs.settings import OPENAI_MODEL,OPENAI_API_KEY, CHROMA_DB_COLLECTION, OPEN_AI_EMBEDDING_MODEL, OLLAMA_HOST,OLLAMA_MODEL
from langchain_openai import ChatOpenAI
from langchain_ollama.chat_models import ChatOllama
import asyncio
from utils.read_write import read_from_file
from langchain_core.tools import tool
from pydantic import BaseModel, Field
from typing import Optional


client = chromadb.PersistentClient(path="chroma_db")
CHROMA_DB_COLL = client.get_or_create_collection(CHROMA_DB_COLLECTION)
# print(CHROMA_DB_COLL)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

URL_LIST = read_from_file("data/urls.txt")

GET_ENHANCED_SOLUTION_USING_RAG_RESPONSES_PROMPT = f"""You are a helpful customer support assistant for Atlan. Use the following documentation context to answer the user's question. 
        
Be specific and provide actionable information. If the context doesn't contain enough information to fully answer the question, say so. Make sure to Include source citations (check the markdown file names and find the matching url's so that user can directly navigate to the documentation.)

Url lists:
{URL_LIST}

Context from Atlan documentation:
{{context}}

User Question: {{query}}

Make sure to give a detailed answer to the user's question along with the source citations, but make sure to give the detailed and complete answer not give any other output by yourself.

Answer:"""


def search_similar_chunks(query: str, collection: chromadb.Collection, 
                         n_results: int = 5) -> Dict[str, Any]:
    """Search for similar chunks using semantic similarity"""
    try:
        # Create embedding for query
        query_embedding = create_embeddings([query])[0]
        
        # Search in ChromaDB
        results = collection.query(
            query_embeddings=[query_embedding],
            n_results=n_results,
            include=["documents", "metadatas", "distances"]
        )
        
        # Format results
        formatted_results = []
        for i in range(len(results["ids"][0])):
            formatted_results.append({
                "id": results["ids"][0][i],
                "content": results["documents"][0][i],
                "metadata": results["metadatas"][0][i],
                "similarity_score": 1 - results["distances"][0][i]  # Convert distance to similarity
            })
        
        return {
            "query": query,
            "results": formatted_results,
            "total_results": len(formatted_results)
        }
    
    except Exception as e:
        logger.error(f"Error searching chunks: {e}")
        raise


async def generate_rag_response(query: str, search_results: Dict[str, Any], 
                         model: str = OPENAI_MODEL) -> Dict[str, Any]:
    """Generate response using RAG with search results"""
    try:
        # Extract relevant context from search results
        context_chunks = []
        sources = []
        
        for result in search_results["results"][:5]:  # Use top 5 results
            context_chunks.append(result["content"])
            if "source_file" in result["metadata"]:
                sources.append(result["metadata"]["source_file"])
        
        context = "\n\n".join(context_chunks)
        
        llm = ChatOpenAI(model=OPENAI_MODEL, api_key=OPENAI_API_KEY,temperature=0.1)
        # llm = ChatOllama(model=OLLAMA_MODEL, base_url=OLLAMA_HOST,temperature=0.3 )
        response = await llm.ainvoke(
            [("system", GET_ENHANCED_SOLUTION_USING_RAG_RESPONSES_PROMPT.format(context=context,query= query)), ("human", "give me the best possible solution in reference to docs, don't give any other output by yourself.")],
        )
        return response.content
    except Exception as e:
        logger.error(f"Error generating RAG response: {e}")
        raise

class QueryKnowledgeBaseInput(BaseModel):
    query: str = Field("The query to search the knowledge base for")
    topic: Optional[str] = Field(None, description="The topic of the query (only if query is a ticket)")


@tool(args_schema=QueryKnowledgeBaseInput, name_or_callable="query_knowledge_base", response_format="content_and_artifact")
async def query_knowledge_base(query: str, topic: Optional[str] = None):
    """Query the knowledge base and generate a response

    Args:
        query: The query to search the knowledge base for
        topic: The topic of the query (only if query is a ticket), can be None if query is not a ticket but a question
    """
    if topic and topic not in ["How-to", "Product", "Best practices", "API/SDK", "SSO"]:
        return f"This ticket has been classified as a '{topic}' issue and routed to the appropriate team.You will hear from the appropriate team soon.", None

    search_results = search_similar_chunks(query, CHROMA_DB_COLL)
    result = {
        "query": query,
        "search_results": search_results
    }
    if not search_results["results"]:
        return f"No results found", None
    
    rag_response = await generate_rag_response(query, search_results)
    result["rag_response"] = rag_response
    return result["rag_response"], None

# if __name__ == "__main__":
#     res = asyncio.run(query_knowledge_base("Hi team, we're trying to set up our primary Snowflake production database as a new source in Atlan, but the connection keeps failing. We've tried using our standard service account, but it's not working. Our entire BI team is blocked on this integration for a major upcoming project, so it's quite urgent. Could you please provide a definitive list of the exact permissions and credentials needed on the Snowflake side to get this working? Thanks."))
#     print(res)