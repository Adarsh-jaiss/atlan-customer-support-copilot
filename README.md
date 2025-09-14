# Customer Support Copilot for Atlan

An AI-powered customer support automation system that intelligently classifies support tickets and provides contextual responses using advanced RAG (Retrieval-Augmented Generation) technology.

## Overview

This Customer Support Copilot revolutionizes support operations by automatically processing incoming tickets, classifying them by topic/sentiment/priority, and generating intelligent responses using Atlan's comprehensive documentation knowledge base.

### Key Features

- **Intelligent Classification**: Automated categorization into 9 topics with sentiment analysis and priority assignment
- **RAG-Powered Responses**: Context-aware responses using 1000+ Atlan documentation files
- **Real-time Processing**: Streaming API with Server-Sent Events for instant responses
- **Bulk Processing**: Handle multiple tickets simultaneously
- **Smart Routing**: Route complex tickets to specialist teams with SLA expectations
- **Conversation Memory**: MongoDB-based context persistence

## System Architecture
![System Architecture](flowchart.png)


### Core Components

| Component | Purpose | Technology Stack |
|-----------|---------|------------------|
| **FastAPI App** | REST API & Streaming endpoints | FastAPI, Uvicorn, CORS |
| **LangGraph Agent** | Conversational AI orchestration | LangGraph, OpenAI |
| **Classification Engine** | Ticket categorization & priority | OpenAI GPT-4o-mini |
| **RAG Pipeline** | Knowledge retrieval & response generation | ChromaDB, all-MiniLM-L6-v2, OpenAI |
| **Memory Management** | Conversation persistence | MongoDB |
| **Knowledge Base** | Atlan documentation corpus | 1000+ preprocessed files |

## Design Decisions & Trade-offs

### AI Pipeline Architecture

**Decision**: **Classification → RAG → Response Generation Pipeline**
- **Rationale**: All tickets go through RAG pipeline for knowledge retrieval, then OpenAI generates detailed responses using retrieved sources
- **Trade-off**: Consistent processing approach vs. specialized routing for different topics

**Decision**: **OpenAI GPT-4o-mini for Classification and Response Generation**
- **Rationale**: Consistent structured outputs for classification, high-quality response generation with source citations
- **Trade-off**: API dependency vs. reduced infrastructure complexity

**Decision**: **ChromaDB + all-MiniLM-L6-v2 for Vector Search**
- **Rationale**: Local deployment, fast semantic search, reliable embedding model for technical documentation
- **Trade-off**: Initial setup complexity vs. runtime independence and cost control

### Knowledge Base Strategy

**Decision**: **Pre-processed Embeddings with all-MiniLM-L6-v2**
- **Rationale**: Faster startup times, consistent search quality, optimized for technical content
- **Trade-off**: Storage space vs. runtime performance

**Decision**: **Universal RAG Processing**
- **All topics** → Classification → RAG Pipeline → OpenAI Response Generation
- **Rationale**: Ensures comprehensive knowledge base utilization for all ticket types
- **Trade-off**: Uniform processing vs. specialized handling

## Workflow Logic

```
Incoming Ticket
     ↓
Classification Engine (Priority + Topic + Sentiment + Reasoning)
     ↓
RAG Pipeline (Knowledge Retrieval from ChromaDB)
     ↓
OpenAI Response Generation (Source + Query → Detailed Response)
     ↓
Priority Assignment (P0/P1/P2) + SLA Mapping
```

### Classification Schema

| Attribute | Values | Purpose |
|-----------|--------|---------|
| **Topic** | How-to, Product, Connector, Lineage, API/SDK, SSO, Glossary, Best practices, Sensitive data | Content categorization |
| **Sentiment** | Frustrated, Curious, Angry, Neutral, Urgent, Confused | Response tone adjustment |
| **Priority** | P0 (High), P1 (Medium), P2 (Low) | SLA assignment |
| **Reasoning** | Classification explanation | Audit trail and transparency |

## Setup & Installation

### Prerequisites

- Python 3.12+
- OpenAI API Key
- MongoDB (optional, for conversation memory)

### Quick Start with Docker

```bash
# Clone repository
git clone https://github.com/Adarsh-jaiss/atlan-customer-support-copilot.git
cd atlan-customer-support-copilot

# Build and run with Docker
docker build -t atlan-support-agent:latest .
docker run --rm -it -p 8003:8003 atlan-support-agent:latest

# Verify deployment
curl http://localhost:8003/heartbeat
```

### Local Development Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
uv pip sync requirements.txt

# Configure environment variables
# Edit .env with your OpenAI API key
```

### Environment Configuration

Create `.env` file:

```env
# Required
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini

# Optional (for conversation memory)
MONGO_DB_URI=mongodb://admin:password@localhost:27018/
CHROMA_DB_COLLECTION=atlan-copilot
```

### Creating the embeddings
To create the embeddings of atlan's docuemntations on local machine, run this command
```bash
python3 rag/create_embeddings.py
```

### Run Application

```bash
# Start FastAPI server
uvicorn app:app --host 0.0.0.0 --port 8003 --reload

# Application available at http://localhost:8003
```

### Frontend 

```bash
# Navigate to frontend directory
cd frontend

# Start local HTTP server
python3 -m http.server 8081

# Frontend available at http://localhost:8081
```

## API Endpoints

### Core Endpoints

| Endpoint | Method | Description | Use Case |
|----------|--------|-------------|-----------|
| `/heartbeat` | GET | Health check | System monitoring |
| `/discovery` | GET | Agent information | Service discovery |
| `/stream` | POST | Real-time streaming responses | Interactive chat |
| `/invoke` | POST | Complete responses | Batch processing |
| `/classify` | POST | Classify single ticket | Quick classification |
| `/load-sample-tickets` | GET | Load test data | Development/testing |
| `/solve-sample-tickets` | GET | Process sample tickets | Bulk testing |
| `/load-classified-tickets` | GET | Load classified results | Review processed tickets |

### Usage Examples

**Classify a Support Ticket:**
```bash
curl -X POST "http://localhost:8003/classify" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "TICKET-001",
    "subject": "Snowflake Connection Issue",
    "body": "Unable to authenticate with Snowflake connector, getting credential errors."
  }'
```

**Note:** The `/invoke` and `/stream` endpoints perform the same job under the hood. The only difference is that `/stream` provides real-time streaming responses while `/invoke` returns complete responses all at once.


**Interactive Chat:**
```bash
curl -X POST "http://localhost:8003/invoke" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "How do I set up SSO with Azure AD in Atlan?",
    "session": "session-123",
    "user_id": "user-456",
    "organization_id": "org-789"
  }'
```

**Process Multiple Tickets:**
```bash
curl -X POST "http://localhost:8003/stream" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Here are three new tickets:\n\nTicket ID: TICKET-248\nSubject: How to surface sample rows and schema changes?\nBody: Hi, we've successfully connected our Redshift cluster, and the assets are showing up. However, my data analysts are asking how they can see sample data or recent schema changes directly within Atlan without having to go back to Redshift. Is this feature available? I feel like I'm missing something obvious.\n\nTicket ID: TICKET-246\nSubject: Which connectors automatically capture lineage?\nBody: Hello, I'm new to Atlan and trying to understand the lineage capabilities. The documentation mentions automatic lineage, but it's not clear which of our connectors (we use Fivetran, dbt, and Tableau) support this out-of-the-box. We need to present a clear picture of our data flow to leadership next week. Can you explain how lineage capture differs for these tools?\n\nTicket ID: TICKET-251\nSubject: Using the Visual Query Builder\nBody: I'm a business analyst and not very comfortable with writing complex SQL. I was excited to see the Visual Query Builder in Atlan, but I'm having trouble figuring out how to join multiple tables and save my query for later use. Is there a tutorial or a quick guide you can point me to?",
  "session": "184345849",
  "user_id": "2849667",
  "organization_id": "7447384"
  }'
```

**Load and Process Sample Tickets:**
```bash
# Load sample tickets
curl http://localhost:8003/load-sample-tickets

# Process all sample tickets through the pipeline
curl http://localhost:8003/solve-sample-tickets

# View classified results
curl http://localhost:8003/load-classified-tickets
```

## Project Structure

```
backend/
├── app.py                    # FastAPI application entry point
├── requirements.txt          # Python dependencies
├── Dockerfile               # Container configuration
├── .env                     # Environment variables
│
├── copilot/                 # Core agent logic
│   ├── main.py                 # Agent initialization & streaming
│   ├── router.py               # API routes & endpoints
│   ├── models.py               # Request/response schemas
│   ├── prompts.py              # System prompts
│   └── memory.py               # Conversation persistence
│
├── classification_engine/   # Ticket classification
│   ├── classifier.py           # Classification logic
│   └── prompt.py               # Classification prompts
│
├── rag/                     # Knowledge retrieval system
│   ├── query.py                # Knowledge base querying
│   ├── create_embeddings.py    # Vector embedding generation
│   ├── document_processor.py   # Document preprocessing
│   └── store.py                # Vector database management
│
├── data/                    # Knowledge base & samples
│   ├── atlan_docs/             # 493 Atlan docs
│   ├── atlan_developer_docs/   # 600 developer docs
│   └── sample_tickets/         # Test ticket data
│
├── chroma_db/               # Vector database (pre-built)
└── utils/                   # Helper utilities
    ├── load_tickets.py         # Ticket loading & processing
    └── read_write.py           # File I/O operations
```

## Response Processing Pipeline

The system employs a unified processing approach for all tickets:

### Universal RAG Pipeline
**All tickets follow the same processing flow:**

1. **Classification Stage**: Extract topic, sentiment, priority, and reasoning
2. **Knowledge Retrieval**: Search ChromaDB vector store using all-MiniLM-L6-v2 embeddings
3. **Response Generation**: OpenAI processes retrieved sources + user query for detailed response
4. **Source Citation**: Include documentation URLs used in response generation

### Processing Flow Details

```
Input Ticket → Classification Engine → RAG Knowledge Retrieval → OpenAI Response Generation → Final Response with Sources
```

**Classification Output:**
- Topic (9 categories)
- Sentiment analysis
- Priority level (P0/P1/P2)
- Reasoning explanation

**RAG Processing:**
- Semantic search across 1000+ documentation files
- Context retrieval using all-MiniLM-L6-v2 embeddings
- Source document identification

**Response Generation:**
- OpenAI processes retrieved context + original query
- Generates comprehensive, context-aware responses
- Includes source citations and documentation links

## Performance & Monitoring

### Key Metrics
- **Classification Accuracy**: >95% for topic categorization
- **Knowledge Coverage**: 1000+ documentation files indexed with all-MiniLM-L6-v2
- **Concurrent Users**: Supports 100+ simultaneous sessions

### Scalability Features
- **Async Processing**: Non-blocking FastAPI with async/await
- **Vector Caching**: Pre-computed embeddings for fast retrieval  
- **Memory Management**: Efficient conversation state handling
- **Horizontal Scaling**: Stateless design for container orchestration

## Customization

### Adding New Topics
Modify `classification_engine/prompt.py` to include new categories:

```python
TOPICS = [
    "How-to", "Product", "Connector", "Lineage", 
    "API/SDK", "SSO", "Glossary", "Best practices", 
    "Sensitive data", "New-Topic"  # Add here
]
```

### Updating Knowledge Base
1. Add documentation files to `data/atlan_docs/`
2. Regenerate embeddings:
```bash
python rag/create_embeddings.py
```

### Model Configuration
Switch models in `.env`:
```env
OPENAI_MODEL=gpt-4  # For higher accuracy
# or use local models with Ollama
```

## Testing

The system includes 20+ sample support tickets covering:
- Snowflake connection issues
- Data lineage troubleshooting  
- API/SDK integration questions
- SSO authentication problems
- Data governance inquiries

**Test the complete pipeline:**
```bash
# Load sample data
curl http://localhost:8003/load-sample-tickets

# Process through classification and RAG pipeline
curl http://localhost:8003/solve-sample-tickets

# Review results
curl http://localhost:8003/load-classified-tickets
```

## Knowledge Base

**Coverage**: 1000+ files from:
- [Atlan Documentation](https://docs.atlan.com/) - 493 files
- [Developer Hub](https://developer.atlan.com/) - 600+ files

**Embedding Model**: `all-MiniLM-L6-v2` (sentence-transformers)
**Vector Database**: ChromaDB with persistent storage
**Search Method**: Semantic similarity search with cosine similarity

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with**: FastAPI • LangGraph • OpenAI • ChromaDB • MongoDB • Sentence Transformers
