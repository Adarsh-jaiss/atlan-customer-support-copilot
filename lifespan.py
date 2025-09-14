from fastapi import FastAPI
from contextlib import asynccontextmanager
from copilot.main import initialize

import logging

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting application initialization...")
    agent = await initialize()
    app.state.agent = agent
    logger.info("Agent initialized successfully")

    yield


