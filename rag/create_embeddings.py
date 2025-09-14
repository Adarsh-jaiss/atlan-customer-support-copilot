import openai
from typing import List, Dict, Any
import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import chromadb
import logging
from rag.document_processor import process_directory, SimpleChunk
from configs.settings import OPEN_AI_EMBEDDING_MODEL, EMBEDDING_MODEL
from rag.store import initialize_chromadb, store_chunks_in_chromadb
from configs.settings import CHROMA_DB_COLLECTION
from sentence_transformers import SentenceTransformer

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

_sentence_model = SentenceTransformer(EMBEDDING_MODEL)

def create_embeddings_with_openai(texts: List[str]) -> List[List[float]]:
    """Create embeddings for a list of texts using OpenAI"""
    try:
        response = openai.embeddings.create(
            model=OPEN_AI_EMBEDDING_MODEL,
            input=texts
        )
        return [embedding.embedding for embedding in response.data]
    except Exception as e:
        logger.error(f"Error creating embeddings: {e}")
        raise
    
def create_embeddings(texts: List[str]) -> List[List[float]]:
    """Create embeddings for a list of texts using SentenceTransformers (offline & free)."""
    try:
        embeddings = _sentence_model.encode(texts, convert_to_numpy=True).tolist()
        return embeddings
    except Exception as e:
        logger.error(f"Error creating embeddings: {e}")
        raise

def create_embeddings_batch(chunks: List[SimpleChunk], batch_size: int = 100) -> List[List[float]]:
    """Create embeddings for chunks in batches"""
    all_embeddings = []
    
    for i in range(0, len(chunks), batch_size):
        batch_chunks = chunks[i:i + batch_size]
        batch_texts = [chunk.content for chunk in batch_chunks]
        
        logger.info(f"Creating embeddings for batch {i//batch_size + 1}/{(len(chunks)-1)//batch_size + 1}")
        
        try:
            batch_embeddings = create_embeddings(batch_texts)
            all_embeddings.extend(batch_embeddings)
        except Exception as e:
            logger.error(f"Failed to create embeddings for batch {i//batch_size + 1}: {e}")
            # Add empty embeddings as placeholder
            all_embeddings.extend([[] for _ in batch_chunks])
    
    return all_embeddings


def build_knowledge_base(docs_directory,chunk_size: int = 1000, chunk_overlap: int = 200):
    try:
        """Complete pipeline to build knowledge base from documents"""
        logger.info("Starting knowledge base construction...")
    
        chunks = process_directory(docs_directory, chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    
        if not chunks:
            raise ValueError(":No chunks created from documents")
    
        logger.info("Creating embeddings...")
        embeddings = create_embeddings_batch(chunks)
    
        # Step 3: Initialize ChromaDB
        collection = initialize_chromadb()
    
        # Step 4: Store in ChromaDB
        store_chunks_in_chromadb(chunks, embeddings, collection)
        logger.info("Knowledge base construction completed!")
    except Exception as e:
        logger.error(f"Error constucting knowledge base {e}")
        return f"failed to construct knowledge base:{e}"

        
    

# Usage Example
if __name__ == "__main__":  
    # Build knowledge base (run once)
    print("Knowldege base creating in progress....")
    collection = build_knowledge_base("data/")
    print("Knowldege base created....")
    
    # Query the knowledge base
    # result = query_knowledge_base("How do I connect to Snowflake?", collection)
    # print(result["rag_response"]["answer"])
    
    