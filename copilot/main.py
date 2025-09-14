import logging
import contextvars

from datetime import datetime
from langchain_openai import ChatOpenAI
from langgraph.types import Command
from copilot.prompts import SYSTEM_PROMPT
from copilot.utils import StreamHandler
from copilot.memory import create_checkpointer
from langgraph.prebuilt import create_react_agent
from classification_engine.classifier import tickets_classifier, classify_single_ticket
from rag.query import query_knowledge_base
from configs.settings import OPENAI_MODEL, OLLAMA_MODEL, OLLAMA_HOST
from langchain_ollama.chat_models import ChatOllama

logger = logging.getLogger(__name__)
agent_ctx = contextvars.ContextVar("agent")

async def initialize():
    """Initialize the agent in the context of the app. Returns the agent."""
    try:
        tools = [
            classify_single_ticket,
            query_knowledge_base
        ]

        checkpointer = await create_checkpointer()
        llm = ChatOpenAI(model=OPENAI_MODEL, temperature=0.3, streaming=True)
        # llm = ChatOllama(model=OLLAMA_MODEL, base_url=OLLAMA_HOST,temperature=0.3,streaming=True, )
        agent = create_react_agent(
            model=llm.bind_tools(tools, parallel_tool_calls=False), 
            tools=tools, 
            prompt=SYSTEM_PROMPT, 
            checkpointer=checkpointer
        )
        
        logger.info("Agent initialized successfully")
        return agent
        
    except Exception as e:
        logger.error(f"Failed to initialize agent: {e}")
        raise    
    


async def stream(prompt: str, session: str, user_id: str, organization_id: str):
    """Stream the agent with the given prompt and session. Returns a stream of chunks from the agent."""

    index = 0
    agent = agent_ctx.get()
    stream_handler = StreamHandler()

    start_time = datetime.now()
    logger.info(f"Started receiving streaming result at {start_time}")

    try:
        result = agent.astream(
            input={"messages": [{"role": "user", "content": prompt}]},
            config={
                "configurable": {
                    "thread_id": session, 
                    "user_id": user_id, 
                    "organization_id": organization_id
                },
                "callbacks": []
            },
            stream_mode=["updates", "messages"]
        )

        async for chunk in result:
            try:
                for processed in stream_handler.process_chunk(chunk):
                    yield f"id: {str(index)}\ndata: {processed}\n\n"
                    index += 1
            except Exception as chunk_error:
                logger.error(f"Error processing chunk {index}: {chunk_error}")
                continue
                
    except Exception as e:
        logger.error(f"Error in streaming: {e}")
        yield f"id: {index}\ndata: {{\"error\": \"Streaming error occurred\"}}\n\n"
        
    end_time = datetime.now()
    logger.info(f"Finished receiving streaming result at {end_time}. Chunks received: {index}. Time taken: {end_time - start_time}")



async def invoke(prompt: str, session: str, user_id: str, organization_id: str):
    """Invoke the agent with the given prompt and session. Returns the final response from the agent as a string."""
    
    start_time = datetime.now()
    logger.info(f"Invoke started at {start_time}")
    agent = agent_ctx.get()

    try:
        result = await agent.ainvoke(
            {"messages": [{"role": "user", "content": prompt}]},
            config={
                "configurable": {
                    "thread_id": session, 
                    "user_id": user_id, 
                    "organization_id": organization_id
                },
                "callbacks": []  # Ensure callbacks are properly initialized
            }
        )

        end_time = datetime.now()
        logger.info(f"Invoke finished at {end_time}. Time taken: {end_time - start_time}")

        return {
            "message": result.get("messages")[-1].content
        }
        
    except Exception as e:
        logger.error(f"Error in invoke: {e}")
        return {
            "message": "An error occurred while processing your request. Please try again."
        }

