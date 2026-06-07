# Social Media Feed System

A scalable social media feed implementation with real-time updates, caching, and message queues.

## Features

- ✅ User management and social graph
- ✅ Post creation and timeline generation
- ✅ Multi-level caching (Redis + in-memory)
- ✅ Real-time notifications (WebSocket)
- ✅ Message queue for async processing
- ✅ Feed ranking algorithm
- ✅ Rate limiting and security
- ✅ Docker containerization
- ✅ Comprehensive testing

## Tech Stack

- **Backend**: Python 3.9+, FastAPI, WebSocket
- **Database**: PostgreSQL (users/social graph), Redis (cache/feeds)
- **Message Queue**: Redis (pub/sub for notifications)
- **Cache**: Redis Cluster
- **WebSocket**: FastAPI WebSocket support
- **Testing**: pytest, pytest-asyncio
- **Container**: Docker & Docker Compose

## Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Web App   │────│   API       │────│  Feed       │
│             │    │  Gateway    │    │  Service    │
└─────────────┘    └─────────────┘    └─────────────┘
                        │                    │
                ┌───────┼───────┐    ┌───────┼───────┐
                │       │       │    │       │       │
        ┌───────▼──┐ ┌──▼──┐ ┌──▼──┐ ┌──────▼──┐ ┌──▼──┐
        │  Auth   │ │ User│ │ Post│ │   Cache  │ │ Notif│
        │ Service │ │Svc  │ │Svc  │ │  Service │ │Svc  │
        └─────────┘ └─────┘ └─────┘ └──────────┘ └─────┘
                │       │       │           │       │
        ┌───────┼───────┼───────┼───────────┼───────┼───────┐
        │       │       │       │           │       │       │
┌───────▼──┐ ┌──▼──┐ ┌──▼──┐ ┌──▼──┐ ┌────▼──┐ ┌──▼──┐
│ Postgres │ │Redis│ │Kafka│ │Redis │ │  Redis │ │Redis │
│ (Users)  │ │(Feed)│ │(MQ) │ │(Cache)│ │ (Cache)│ │(PubSub)
└──────────┘ └─────┘ └─────┘ └───────┘ └───────┘ └─────┘
```

## Quick Start

```bash
# Setup
git clone <repository>
cd social-media-feed-project

# Start services
docker-compose up -d

# Install dependencies
pip install -r requirements.txt

# Run application
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

## API Endpoints

```bash
# User management
POST /api/v1/users/                    # Create user
GET  /api/v1/users/{user_id}           # Get user profile
POST /api/v1/users/{user_id}/follow    # Follow user
DELETE /api/v1/users/{user_id}/follow  # Unfollow user

# Posts
POST /api/v1/posts/                    # Create post
GET  /api/v1/posts/{post_id}           # Get post
GET  /api/v1/posts/                    # Get user's posts

# Feed
GET  /api/v1/feed/                     # Get personalized feed
GET  /api/v1/feed/{user_id}            # Get user's timeline

# Real-time
WS   /ws/notifications/{user_id}       # WebSocket notifications
```

## Project Structure

```
social-media-feed-project/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI application
│   ├── config.py               # Configuration
│   ├── database.py             # Database connections
│   ├── models/                 # Pydantic models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── post.py
│   │   └── feed.py
│   ├── services/               # Business logic
│   │   ├── __init__.py
│   │   ├── user_service.py
│   │   ├── post_service.py
│   │   ├── feed_service.py
│   │   ├── cache_service.py
│   │   └── notification_service.py
│   ├── api/                    # API routes
│   │   ├── __init__.py
│   │   ├── users.py
│   │   ├── posts.py
│   │   ├── feed.py
│   │   └── websocket.py
│   └── utils/                  # Utilities
│       ├── __init__.py
│       ├── auth.py
│       ├── rate_limiter.py
│       └── validators.py
├── tests/
│   ├── __init__.py
│   ├── test_users.py
│   ├── test_posts.py
│   ├── test_feed.py
│   ├── test_cache.py
│   └── test_websocket.py
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
├── pytest.ini
└── README.md
```

## Development Setup

### Prerequisites

- Python 3.9+
- Docker & Docker Compose
- PostgreSQL
- Redis

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd social-media-feed-project
   ```

2. **Start infrastructure services**
   ```bash
   docker-compose up -d postgres redis
   ```

3. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Set environment variables**
   ```bash
   export DATABASE_URL="postgresql+asyncpg://user:password@localhost:5432/social_feed"
   export REDIS_URL="redis://localhost:6379"
   export SECRET_KEY="your-secret-key-here"
   ```

6. **Run database migrations**
   ```bash
   # The application will auto-create tables on startup
   # Or run manually if needed
   python -c "from app.database import init_db; import asyncio; asyncio.run(init_db())"
   ```

7. **Start the application**
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```

8. **Access the API**
   - API Documentation: http://localhost:8000/docs
   - Health Check: http://localhost:8000/api/v1/health

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app --cov-report=html

# Run specific test file
pytest tests/test_users.py

# Run async tests
pytest -k "async"
```

## Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in background
docker-compose up -d --build

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

## API Usage Examples

### User Registration and Authentication

```python
import httpx

# Register user
async with httpx.AsyncClient() as client:
    response = await client.post("http://localhost:8000/api/v1/users/", json={
        "username": "johndoe",
        "email": "john@example.com",
        "password": "securepassword",
        "full_name": "John Doe"
    })
    print(response.json())

# Login
async with httpx.AsyncClient() as client:
    response = await client.post("http://localhost:8000/api/v1/users/login", json={
        "username": "johndoe",
        "password": "securepassword"
    })
    token = response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
```

### Creating and Managing Posts

```python
# Create post
response = await client.post("http://localhost:8000/api/v1/posts/", json={
    "content": "Hello, world! #firstpost",
    "hashtags": ["firstpost"]
}, headers=headers)

# Get feed
response = await client.get("http://localhost:8000/api/v1/feed/", headers=headers)
posts = response.json()
```

### Real-time Notifications

```javascript
// WebSocket connection for notifications
const ws = new WebSocket('ws://localhost:8000/ws/notifications/1');

ws.onmessage = function(event) {
    const notification = JSON.parse(event.data);
    console.log('New notification:', notification);
};

ws.onopen = function(event) {
    console.log('Connected to notifications');
};
```

## Performance Considerations

- **Database Indexing**: Proper indexes on frequently queried columns
- **Caching Strategy**: Multi-level caching (Redis + in-memory)
- **Feed Generation**: Async feed generation with pagination
- **Rate Limiting**: API rate limiting to prevent abuse
- **Connection Pooling**: Database and Redis connection pooling

## Security Features

- JWT authentication with refresh tokens
- Password hashing with bcrypt
- CORS protection
- Rate limiting
- Input validation and sanitization
- SQL injection prevention with SQLAlchemy

## Monitoring and Logging

- Structured logging with JSON output
- Request/response logging middleware
- Health check endpoints
- Performance monitoring hooks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.