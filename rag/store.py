
from pinecone import Pinecone, ServerlessSpec
from typing import List
import chromadb
from chromadb.config import Settings
import logging
from rag.document_processor import  SimpleChunk
from configs.settings import CHROMA_DB_COLLECTION, PINECONE_INDEX_NAME, PINECONE_API_KEY, PINECONE_ENVIRONMENT,PINECONE_CLOUD

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def initialize_chromadb(persist_directory: str = "./chroma_db") -> chromadb.Collection:
    """Initialize ChromaDB client and collection"""
    try:
        client = chromadb.PersistentClient(path=persist_directory)
        
        # try:
        #     client.delete_collection(name=CHROMA_DB_COLLECTION)
        # except ValueError:
        #     pass  # Collection doesn't exist
        
        collection = client.create_collection(
            name=CHROMA_DB_COLLECTION,
            metadata={"hnsw:space": "cosine"}
        )
        
        logger.info(f"Initialized ChromaDB collection: {CHROMA_DB_COLLECTION}")
        return collection
    
    except Exception as e:
        logger.error(f"Error initializing ChromaDB: {e}")
        raise
    
def store_chunks_in_chromadb(chunks: List[SimpleChunk], embeddings: List[List[float]], 
                            collection: chromadb.Collection) -> None:
    """Store chunks and embeddings in ChromaDB"""
    try:
        ids = [chunk.id for chunk in chunks]
        documents = [chunk.content for chunk in chunks]
        metadatas = [chunk.metadata or {} for chunk in chunks]
        
        # Filter out chunks with empty embeddings
        valid_data = [(i, chunk, emb) for i, (chunk, emb) in enumerate(zip(chunks, embeddings)) if emb]
        
        if not valid_data:
            logger.warning("No valid embeddings to store")
            return
        
        valid_ids = [chunk.id for _, chunk, _ in valid_data]
        valid_documents = [chunk.content for _, chunk, _ in valid_data]
        valid_metadatas = [chunk.metadata or {} for _, chunk, _ in valid_data]
        valid_embeddings = [emb for _, _, emb in valid_data]
        
        # Store in batches
        batch_size = 500
        for i in range(0, len(valid_ids), batch_size):
            batch_ids = valid_ids[i:i + batch_size]
            batch_documents = valid_documents[i:i + batch_size]
            batch_metadatas = valid_metadatas[i:i + batch_size]
            batch_embeddings = valid_embeddings[i:i + batch_size]
            
            collection.add(
                ids=batch_ids,
                documents=batch_documents,
                metadatas=batch_metadatas,
                embeddings=batch_embeddings
            )
            
            logger.info(f"Stored batch {i//batch_size + 1}/{(len(valid_ids)-1)//batch_size + 1}")
        
        logger.info(f"Successfully stored {len(valid_ids)} chunks in ChromaDB")
    
    except Exception as e:
        logger.error(f"Error storing chunks in ChromaDB: {e}")
        raise


def initialize_pinecone_client():
    """Create a Pinecone client and return client with configuration."""
    pinecone_client = Pinecone(api_key=PINECONE_API_KEY)
    pinecone_index_name = PINECONE_INDEX_NAME
    pinecone_cloud = PINECONE_CLOUD
    pinecone_environment = PINECONE_ENVIRONMENT
    return pinecone_client, pinecone_index_name, pinecone_cloud, pinecone_environment

def get_or_create_pinecone_index(dimension: int = 384, metric: str = "cosine"):
    """Get or create a Pinecone index with proper serverless specification."""
    try:
        pinecone_client, index_name, cloud, region = initialize_pinecone_client()
        
        # Check if index exists
        if pinecone_client.has_index(index_name):
            # Get existing index info to check dimension
            index_info = pinecone_client.describe_index(index_name)
            existing_dimension = index_info.dimension
            
            if existing_dimension != dimension:
                logger.warning(f"Existing index has dimension {existing_dimension}, but need {dimension}. Deleting and recreating...")
                pinecone_client.delete_index(index_name)
                # Wait a moment for deletion to complete
                import time
                time.sleep(5)
                
                logger.info(f"Creating new Pinecone index: {index_name} with dimension {dimension}")
                pinecone_client.create_index(
                    name=index_name, 
                    dimension=dimension, 
                    metric=metric,
                    spec=ServerlessSpec(
                        cloud=cloud,
                        region=region
                    )
                )
                logger.info("Index created successfully")
            else:
                logger.info(f"Using existing Pinecone index: {index_name} with correct dimension {dimension}")
        else:
            logger.info(f"Creating new Pinecone index: {index_name} with dimension {dimension}")
            pinecone_client.create_index(
                name=index_name, 
                dimension=dimension, 
                metric=metric,
                spec=ServerlessSpec(
                    cloud=cloud,
                    region=region
                )
            )
            logger.info("Index created successfully")
        
        return pinecone_client.Index(index_name)
    
    except Exception as e:
        logger.error(f"Error with Pinecone index: {e}")
        raise

def store_chunks_in_pinecone(
    chunks: List,
    embeddings: List[List[float]],
    index_or_name
):
    """
    Store precomputed embeddings for chunks in Pinecone.

    Args:
        chunks: List of chunk objects (must have .id, .content, .metadata)
        embeddings: List of embeddings corresponding to chunks
        index_or_name: Either a Pinecone Index instance OR index name (str)
    """
    try:
        # Ensure we have an Index object
        if isinstance(index_or_name, str):
            # Use get_or_create_pinecone_index to ensure index exists
            index = get_or_create_pinecone_index()
        else:
            index = index_or_name

        # Pair chunks with embeddings, ignoring invalid ones
        valid_data = [
            {
                "id": chunk.id,
                "values": emb,
                "metadata": chunk.metadata or {"content": chunk.content}
            }
            for chunk, emb in zip(chunks, embeddings) if emb
        ]

        if not valid_data:
            logger.warning("No valid embeddings to store in Pinecone")
            return

        # Upsert in batches
        batch_size = 500
        for i in range(0, len(valid_data), batch_size):
            batch = valid_data[i:i + batch_size]
            index.upsert(vectors=batch)
            logger.info(
                f"Stored batch {i//batch_size + 1}/{(len(valid_data)-1)//batch_size + 1}"
            )

        logger.info(f"Successfully stored {len(valid_data)} chunks in Pinecone")

    except Exception as e:
        logger.error(f"Error storing chunks in Pinecone: {e}")
        raise