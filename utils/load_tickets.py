from utils.read_write import read_from_file
from rag.query import query_knowledge_base
from utils.read_write import write_into_file
from classification_engine.classifier import ClassifiedTicket

def load_sample_tickets():
    """Load sample tickets from the data directory"""
    tickets = read_from_file("data/sample_tickets/tickets.json")
    return tickets

async def solve_sample_tickets():
    """Solve the sample tickets"""
    tickets = load_sample_tickets()
    responses = []
    for ticket in tickets["classified_tickets"]:
        if ticket["topic"] in ["How-to", "Product", "Best practices", "API/SDK", "SSO"]:
            response = await query_knowledge_base(ticket["ticket"]["body"])
            responses.append({
                "ticket_id": ticket["ticket"]["id"],
                "ticket_subject": ticket["ticket"]["subject"],
                "ticket_body": ticket["ticket"]["body"],
                "topic": ticket["topic"],
                "sentiment": ticket["sentiment"],
                "priority": ticket["priority"],
                "reasoning": ticket["reasoning"],
                "response": response
            })
    return responses

async def load_classified_tickets():
    """Load classified tickets from the data directory"""
    tickets = read_from_file("output/classified_tickets.json")
    return tickets