# Week 4: Advanced Python + Project

**Duration:** June 29 - July 5, 2026 | **Hours:** 35

---

## Day 1-2: Decorators & Generators

```python
# Decorator
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__}: {time.time()-start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)

# Generator
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b
```

## Day 3-4: Testing & Docker

```python
# test_app.py
def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello"}
```

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
```

## Day 5-7: Project 1 — WhatsApp Message Analyzer

Build a complete FastAPI app that:
1. Accepts exported WhatsApp chat (text file)
2. Parses and analyzes messages
3. Returns statistics (most active time, top words, etc.)
4. Has JWT auth
5. Is Dockerized

```bash
# Test
python -m pytest tests/ -v

# Docker
docker build -t whatsapp-analyzer .
docker run -p 8000:8000 whatsapp-analyzer
```

**Deliverable:** GitHub repo with README, tests, Dockerfile
