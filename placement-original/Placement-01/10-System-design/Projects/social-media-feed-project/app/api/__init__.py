from fastapi import APIRouter
from app.api.users import router as users_router
from app.api.posts import router as posts_router
from app.api.feed import router as feed_router
from app.api.websocket import router as websocket_router

# Create main API router
api_router = APIRouter()

# Include all API routes
api_router.include_router(
    users_router,
    prefix="/users",
    tags=["users"]
)

api_router.include_router(
    posts_router,
    prefix="/posts",
    tags=["posts"]
)

api_router.include_router(
    feed_router,
    prefix="/feed",
    tags=["feed"]
)

api_router.include_router(
    websocket_router,
    prefix="/ws",
    tags=["websocket"]
)

# Health check endpoint
@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "social-media-feed-api"}