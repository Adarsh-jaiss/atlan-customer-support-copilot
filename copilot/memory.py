from pymongo import AsyncMongoClient
from langgraph.checkpoint.mongodb.aio import AsyncMongoDBSaver
from configs.settings import MONGO_DB_URI
import logging

logger = logging.getLogger(__name__)

async def create_checkpointer():
    mongodb =  AsyncMongoClient(MONGO_DB_URI)
    checkpointer = AsyncMongoDBSaver(client=mongodb, db_name="atlan", checkpoint_collection_name="copilot-memory",writes_collection_name="copilot-memory-writes")
    return checkpointer

async def create_memory_store():
    return None


async def save_to_mongo(db_name: str, db_coll: str, data):
    mongodb = AsyncMongoClient(MONGO_DB_URI)
    db = mongodb[db_name]
    collection = db[db_coll]
    result = await collection.insert_many(data)
    return result.inserted_id
    
async def fetch_tickets_from_mongo(filters):
    mongodb = AsyncMongoClient(MONGO_DB_URI)
    db = mongodb["atlan"]
    collection = db["tickets"]
    results = await collection.find()
    return results