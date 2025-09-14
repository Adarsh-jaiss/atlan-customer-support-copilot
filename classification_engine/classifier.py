import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from langchain_openai import ChatOpenAI
from classification_engine.prompt import TICKET_CLASSIFIER_PROMPT
from configs.settings import OPENAI_MODEL, OPENAI_API_KEY
from pydantic import BaseModel,Field
import logging
import json
from typing import List, Optional
from utils.read_write import write_into_file
from langchain_core.tools import tool
from pathlib import Path
import asyncio

logger = logging.getLogger(__name__)
logger.setLevel(logging.ERROR)

class Ticket(BaseModel):
    id :str = Field("id of the ticket. eg: TICKET-245")
    subject:str = Field("subject of the ticket (or ticket title)")
    body: str = Field("Detailed Ticket Description")

class ClassifySingleTicket(BaseModel):
    id :str = Field("id of the ticket. eg: TICKET-245")
    subject:str = Field("subject of the ticket (or ticket title)")
    body: str = Field("Detailed Ticket Description")
    reason: str = Field("Additional context for classification")

class TicketClassifierInput(BaseModel):
    tickets: List[Ticket] = Field("Array of tickets to classify")
    reason: str = Field("")
    
# class Reasoning(BaseModel):
#     topic_explaination:str
#     sentiment_explaination:str
#     priority_explaination :str
    
class ClassifiedTicket(BaseModel):
    ticket: Ticket
    topic: str
    sentiment: str
    priority: str
    reasoning: Optional[dict] = Field(default_factory=dict)

class TicketClassifierOutput(BaseModel):
    classified_tickets: List[ClassifiedTicket]
    total_processed: int
    processing_summary: Optional[dict] = Field(default_factory=dict)
    
@tool(args_schema=TicketClassifierInput,name_or_callable="tickets_classifier", response_format="content_and_artifact")
async def tickets_classifier(tickets:List[Ticket],reason: str ):
    """
    Classify an array of tickets according to the topic, sentiment, and priority
    
    Args:
        tickets: List of Ticket objects to classify
        reason: Additional context for classification
    
    """
    try:
        if not tickets:
            return {"error": "No tickets provided"}, "No tickets to process"
        llm = ChatOpenAI(model=OPENAI_MODEL,api_key=OPENAI_API_KEY, temperature=0.1 )
        tickets_json = [ticket.model_dump() for ticket in tickets]
        response = await llm.ainvoke(
            [("system", TICKET_CLASSIFIER_PROMPT.format(tickets=json.dumps(tickets_json, indent=2))), ("human", reason)],
        )
        raw_content = response.content.strip() 
        try:
            parsed_response = json.loads(raw_content)
        except json.JSONDecodeError as e:
            logger.error(f"Failed to parse LLM JSON response: {e}\nContent was: {raw_content}")
            return f"Failed to parse LLM response: {e}", None
        
        write_into_file(parsed_response,"json","classified_tickets.json")
        return parsed_response, None
        
    except Exception as e:
        logger.error(f"Error classifying tickets: {str(e)}")
        return f"Failed to classify tickets: {str(e)}", None


@tool(args_schema=ClassifySingleTicket ,name_or_callable="classify_single_ticket", response_format="content_and_artifact")
async def classify_single_ticket(id: str, subject: str, body: str, reason: str = ""):
    """
    Classify a single ticket according to the topic, sentiment, and priority
    
    Args:
        id: The ticket ID (e.g., TICKET-245)
        subject: The ticket subject/title
        body: The detailed ticket description
        reason: Additional context for classification (optional)
    """
    llm = ChatOpenAI(model=OPENAI_MODEL,api_key=OPENAI_API_KEY, temperature=0.1 )
    response = await llm.ainvoke(
            [("system", TICKET_CLASSIFIER_PROMPT.format(tickets=json.dumps([{"id": id, "subject": subject, "body": body}], indent=2))), ("human", reason)],
        )
    try:
        raw_content = response.content.strip() 
        try:
            parsed_response = json.loads(raw_content)
        except json.JSONDecodeError as e:
            logger.error(f"Failed to parse LLM JSON response: {e}\nContent was: {raw_content}")
            return f"Failed to parse LLM response: {e}", None
        return parsed_response, None
        
    except Exception as e:
        logger.error(f"Error classifying tickets: {str(e)}")
        return f"Failed to classify tickets: {str(e)}", None

    
async def main():
    TICKETS_FILE_PATH = Path("data/sample_tickets/tickets.json")
    if not TICKETS_FILE_PATH.exists():
        print(f"Tickets file not found: {TICKETS_FILE_PATH}")
        return

    with open(TICKETS_FILE_PATH, "r") as f:
        tickets_data = json.load(f)

    tickets: List[Ticket] = [Ticket(**t) for t in tickets_data]

    reason = "Classify these tickets based on topic, sentiment, and priority for customer support workflow."

    response = await tickets_classifier.ainvoke({
    "tickets": tickets,
    "reason": reason
    })

    if isinstance(response, tuple):
        result, error = response
    else:
        result, error = response, None

if __name__ == "__main__":
    asyncio.run(main())