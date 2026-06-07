# URL Shortener Project

A complete URL shortening service built with Python, Flask, Redis, and PostgreSQL.

## Features

- ✅ URL shortening with custom aliases
- ✅ High-performance redirects with caching
- ✅ Click analytics and tracking
- ✅ Rate limiting and security
- ✅ RESTful API
- ✅ Docker containerization
- ✅ Comprehensive testing

## Tech Stack

- **Backend**: Python 3.9+, Flask
- **Database**: PostgreSQL
- **Cache**: Redis
- **Message Queue**: Redis (for analytics)
- **Container**: Docker & Docker Compose
- **Testing**: pytest, unittest

## Quick Start

```bash
# Clone and setup
git clone <repository>
cd url-shortener-project

# Start services
docker-compose up -d

# Run application
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

## API Usage

```bash
# Shorten URL
curl -X POST http://localhost:5000/api/v1/shorten \
  -H "Content-Type: application/json" \
  -d '{"original_url": "https://www.example.com"}'

# Redirect
curl -i http://localhost:5000/abc123

# Get analytics
curl http://localhost:5000/api/v1/analytics/abc123
```

## Project Structure

```
url-shortener-project/
├── app/
│   ├── __init__.py
│   ├── api/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── analytics.py
│   ├── core/
│   │   ├── __init__.py
│   │   ├── shortener.py
│   │   ├── cache.py
│   │   └── security.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── url.py
│   │   └── user.py
│   └── utils/
│       ├── __init__.py
│       └── validators.py
├── tests/
│   ├── __init__.py
│   ├── test_shortener.py
│   ├── test_api.py
│   └── test_analytics.py
├── migrations/
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
├── run.py
└── README.md
```