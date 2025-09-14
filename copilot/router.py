import logging

from fastapi import APIRouter
from fastapi.responses import JSONResponse, StreamingResponse
from copilot.models import ChatInput
from copilot.main import stream, invoke
from classification_engine.classifier import classify_single_ticket, Ticket
from utils.load_tickets import load_sample_tickets, solve_sample_tickets, load_classified_tickets

router = APIRouter()
logger = logging.getLogger(__name__)


@router.get("/discovery")
def discovery():
    """Return the discovery of the agent"""
    return JSONResponse({"name": "Customer Support Copilot","slug": "customer-support-copilot",})


@router.post("/invoke")
async def invoke_route(body: ChatInput):
    """Return the complete data after it is generated without steps and reasoning, to be used by other agents"""
    response = await invoke(body.prompt, body.session, body.user_id, body.organization_id)
    return JSONResponse(response)


@router.post("/stream")
async def stream_route(body: ChatInput):
    """Will stream the values when calling the agent directly with reasoning and everything"""

    logger.info(f"Invoking streaming response for {body}")
    response =  stream(body.prompt, body.session, body.user_id, body.organization_id) if isinstance(body.prompt, str)  else invoke(body.prompt, body.session, body.user_id, body.organization_id)
    return StreamingResponse(response, media_type="text/event-stream")

@router.post("/classify")
async def classify_tickets(body: Ticket):
    """Classify a single ticket using the classification engine"""
    logger.info(f"Classifying ticket: {body.id}")
    
    try:
        # Call the LangChain tool properly using ainvoke
        response = await classify_single_ticket.ainvoke({
            "id": body.id,
            "subject": body.subject,
            "body": body.body,
            "reason": "To understand the ticket and classify it"
        })
        
        if isinstance(response, str) and "error" in response.lower():
            logger.error(f"Classification error: {response}")
            return JSONResponse({"error": response}, status_code=400)
        
        return JSONResponse(response)
    
    except Exception as e:
        logger.error(f"Failed to classify ticket {body.id}: {e}")
        return JSONResponse({"error": f"Classification failed: {str(e)}"}, status_code=500)


@router.get("/load-sample-tickets")
async def load_tickets():
    """Load sample tickets from the data directory"""
    logger.info("Loading sample tickets")
    tickets = load_sample_tickets()
    return JSONResponse(tickets)


@router.get("/solve-sample-tickets")
async def solve_sample_tickets():
    """Solve the sample tickets"""
    logger.info(f"Solving sample tickets")
    response = await solve_sample_tickets()
    return JSONResponse(response)


@router.get("/load-classified-tickets")
async def classified_tickets():
    """Load classified tickets from the data directory"""
    logger.info(f"Loading classified tickets")
    response = await load_classified_tickets()
    return JSONResponse(response)