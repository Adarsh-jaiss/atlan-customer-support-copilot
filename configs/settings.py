import os
from dotenv import load_dotenv
import logging

load_dotenv()
logger = logging.getLogger(__name__)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPEN_AI_EMBEDDING_MODEL = os.getenv("OPEN_AI_EMBEDDING_MODEL","text-embedding-3-small")
MONGO_DB_URI = os.getenv("MONGO_DB_URI", "mongodb://admin:password@localhost:27018/")

# Redis Configuration
CHROMA_DB_COLLECTION = os.getenv("CHROMA_DB_COLLECTION","atlan-copilot")

# MongoDB Collection Configuration
# MONGO_DATABASE_NAME = os.getenv("MONGO_DATABASE_NAME", "")
# MONGO_COLLECTION_NAME = os.getenv("MONGO_COLLECTION_NAME", "")

# Ollama
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")
OLLAMA_MODEL="llama2"
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

# logger.info(f"MONGO_DB_URI: {MONGO_DB_URI}")

