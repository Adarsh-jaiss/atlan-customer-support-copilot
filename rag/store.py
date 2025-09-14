

from typing import List
import chromadb
from chromadb.config import Settings
import logging
from rag.document_processor import  SimpleChunk
from configs.settings import CHROMA_DB_COLLECTION

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
