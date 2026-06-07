import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession
import json

from app.main import app
from app.database import get_db
from app.services.user_service import UserService
from app.services.post_service import PostService

@pytest.fixture
async def client():
    """Test client fixture"""
    async with AsyncClient(app=app, base_url="http://testserver") as client:
        yield client

@pytest.fixture
async def db_session():
    """Database session fixture"""
    # This would need proper test database setup
    # For now, we'll use the main database
    from app.database import async_session
    async with async_session() as session:
        yield session

@pytest.fixture
async def test_user(db_session: AsyncSession):
    """Create a test user"""
    user_service = UserService(db_session)
    user_data = {
        "username": "testuser",
        "email": "test@example.com",
        "password": "testpass123",
        "full_name": "Test User"
    }
    user = await user_service.create_user(user_data)
    return user

@pytest.fixture
async def auth_token(client: AsyncClient, test_user):
    """Get authentication token for test user"""
    response = await client.post("/api/v1/users/login", json={
        "username": "testuser",
        "password": "testpass123"
    })
    assert response.status_code == 200
    return response.json()["access_token"]

class TestUserAPI:
    """Test user-related API endpoints"""

    @pytest.mark.asyncio
    async def test_create_user(self, client: AsyncClient):
        """Test user creation"""
        user_data = {
            "username": "newuser",
            "email": "new@example.com",
            "password": "password123",
            "full_name": "New User"
        }

        response = await client.post("/api/v1/users/", json=user_data)
        assert response.status_code == 201

        data = response.json()
        assert data["username"] == user_data["username"]
        assert data["email"] == user_data["email"]
        assert "id" in data

    @pytest.mark.asyncio
    async def test_login(self, client: AsyncClient, test_user):
        """Test user login"""
        response = await client.post("/api/v1/users/login", json={
            "username": "testuser",
            "password": "testpass123"
        })

        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["token_type"] == "bearer"

    @pytest.mark.asyncio
    async def test_get_user_profile(self, client: AsyncClient, auth_token, test_user):
        """Test getting user profile"""
        headers = {"Authorization": f"Bearer {auth_token}"}

        response = await client.get(f"/api/v1/users/{test_user.id}", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert data["id"] == test_user.id
        assert data["username"] == test_user.username

    @pytest.mark.asyncio
    async def test_follow_user(self, client: AsyncClient, auth_token, test_user, db_session):
        """Test following a user"""
        # Create another user to follow
        user_service = UserService(db_session)
        follow_user_data = {
            "username": "followuser",
            "email": "follow@example.com",
            "password": "password123",
            "full_name": "Follow User"
        }
        follow_user = await user_service.create_user(follow_user_data)

        headers = {"Authorization": f"Bearer {auth_token}"}

        response = await client.post(f"/api/v1/users/{follow_user.id}/follow", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert "message" in data

class TestPostAPI:
    """Test post-related API endpoints"""

    @pytest.mark.asyncio
    async def test_create_post(self, client: AsyncClient, auth_token):
        """Test post creation"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        post_data = {
            "content": "This is a test post",
            "hashtags": ["test", "social"]
        }

        response = await client.post("/api/v1/posts/", json=post_data, headers=headers)
        assert response.status_code == 201

        data = response.json()
        assert data["content"] == post_data["content"]
        assert data["hashtags"] == post_data["hashtags"]
        assert "id" in data

    @pytest.mark.asyncio
    async def test_get_post(self, client: AsyncClient, auth_token, db_session):
        """Test getting a specific post"""
        # Create a post first
        headers = {"Authorization": f"Bearer {auth_token}"}
        post_data = {"content": "Test post for retrieval"}

        create_response = await client.post("/api/v1/posts/", json=post_data, headers=headers)
        post_id = create_response.json()["id"]

        # Get the post
        response = await client.get(f"/api/v1/posts/{post_id}", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert data["id"] == post_id
        assert data["content"] == post_data["content"]

    @pytest.mark.asyncio
    async def test_like_post(self, client: AsyncClient, auth_token, db_session):
        """Test liking a post"""
        # Create a post first
        headers = {"Authorization": f"Bearer {auth_token}"}
        post_data = {"content": "Test post for liking"}

        create_response = await client.post("/api/v1/posts/", json=post_data, headers=headers)
        post_id = create_response.json()["id"]

        # Like the post
        response = await client.post(f"/api/v1/posts/{post_id}/like", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert "message" in data

    @pytest.mark.asyncio
    async def test_unlike_post(self, client: AsyncClient, auth_token, db_session):
        """Test unliking a post"""
        # Create and like a post first
        headers = {"Authorization": f"Bearer {auth_token}"}
        post_data = {"content": "Test post for unliking"}

        create_response = await client.post("/api/v1/posts/", json=post_data, headers=headers)
        post_id = create_response.json()["id"]

        await client.post(f"/api/v1/posts/{post_id}/like", headers=headers)

        # Unlike the post
        response = await client.delete(f"/api/v1/posts/{post_id}/like", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert "message" in data

class TestFeedAPI:
    """Test feed-related API endpoints"""

    @pytest.mark.asyncio
    async def test_get_feed(self, client: AsyncClient, auth_token):
        """Test getting personalized feed"""
        headers = {"Authorization": f"Bearer {auth_token}"}

        response = await client.get("/api/v1/feed/", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert isinstance(data, list)

    @pytest.mark.asyncio
    async def test_get_trending_posts(self, client: AsyncClient):
        """Test getting trending posts"""
        response = await client.get("/api/v1/feed/trending")
        assert response.status_code == 200

        data = response.json()
        assert isinstance(data, list)

    @pytest.mark.asyncio
    async def test_search_posts(self, client: AsyncClient, auth_token):
        """Test searching posts"""
        # Create a post to search for
        headers = {"Authorization": f"Bearer {auth_token}"}
        post_data = {"content": "Unique search content for testing"}

        await client.post("/api/v1/posts/", json=post_data, headers=headers)

        # Search for the post
        response = await client.get("/api/v1/feed/search?query=Unique+search+content", headers=headers)
        assert response.status_code == 200

        data = response.json()
        assert isinstance(data, list)
        assert len(data) > 0

class TestHealthCheck:
    """Test health check endpoint"""

    @pytest.mark.asyncio
    async def test_health_check(self, client: AsyncClient):
        """Test health check endpoint"""
        response = await client.get("/api/v1/health")
        assert response.status_code == 200

        data = response.json()
        assert data["status"] == "healthy"
        assert "service" in data

if __name__ == "__main__":
    pytest.main([__file__])