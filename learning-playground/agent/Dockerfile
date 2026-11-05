FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

# Runs in offline mode (FakeLLM) unless OPENAI_API_KEY is provided at runtime.
CMD ["uvicorn", "agent.app:app", "--host", "0.0.0.0", "--port", "8000"]
