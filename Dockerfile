FROM python:3.12-slim

WORKDIR /app

# Install dependencies first
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the whole project
COPY . .

# Run embeddings script during build
RUN python rag/create_embeddings.py

EXPOSE 8003

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8003", "--timeout-keep-alive", "1800"]
