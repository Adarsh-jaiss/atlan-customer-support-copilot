from dotenv import load_dotenv
load_dotenv(override=True)

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from lifespan import lifespan
from copilot.router import router
from copilot.main import agent_ctx

import logging
import sys

root_logger = logging.getLogger()
root_logger.setLevel(logging.INFO)
root_logger.handlers.clear()

formatter = logging.Formatter('%(asctime)s %(levelname)s %(name)s %(message)s')

console_handler = logging.StreamHandler(sys.stdout)
console_handler.setFormatter(formatter)
root_logger.addHandler(console_handler)

file_handler = logging.FileHandler('agent.log', mode='a')
file_handler.setFormatter(formatter)
root_logger.addHandler(file_handler)

app = FastAPI(lifespan=lifespan)
app.include_router(router)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.middleware("http")
async def agent_context_middleware(request: Request, call_next):
    agent = request.app.state.agent
    token = agent_ctx.set(agent)
    try:
        response = await call_next(request)
        return response
    except Exception as e:
        logging.error(f"Exception in agent_context_middleware: {e}", exc_info=True)
        return JSONResponse(
            status_code=500,
            content={"error": "Internal server error", "message": str(e)}
        )
    finally:
        agent_ctx.reset(token)


@app.get("/heartbeat")
async def heartbeat():
    return JSONResponse({"status": "ok", "version": "1.0.0"})