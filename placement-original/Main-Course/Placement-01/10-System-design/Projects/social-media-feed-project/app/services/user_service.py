from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, update
from sqlalchemy.orm import selectinload
from passlib.context import CryptContext
from typing import Optional, List
import structlog

from app.models.user import UserCreate, UserUpdate, UserResponse
from app.models.sqlalchemy_models import User, Follow

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

logger = structlog.get_logger()

class UserService:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_user(self, user_data: UserCreate) -> UserResponse:
        """Create a new user"""

        # Check if username or email already exists
        existing = await self.db.execute(
            select(User).where(
                (User.username == user_data.username) |
                (User.email == user_data.email)
            )
        )
        if existing.scalar_one_or_none():
            raise ValueError("Username or email already exists")

        # Hash password
        hashed_password = pwd_context.hash(user_data.password)

        # Create user
        user = User(
            username=user_data.username,
            email=user_data.email,
            password_hash=hashed_password,
            display_name=user_data.display_name,
            bio=user_data.bio
        )

        self.db.add(user)
        await self.db.commit()
        await self.db.refresh(user)

        logger.info("User created", user_id=user.id, username=user.username)

        return UserResponse.from_orm(user)

    async def get_user_by_id(self, user_id: int) -> Optional[UserResponse]:
        """Get user by ID with follower/following counts"""
        from app.database import Base

        # Get user with follower/following counts
        query = select(Base).where(Base.id == user_id)

        result = await self.db.execute(query)
        user = result.scalar_one_or_none()

        if not user:
            return None

        # Get follower and following counts
        follower_count = await self._get_follower_count(user_id)
        following_count = await self._get_following_count(user_id)

        user_response = UserResponse.from_orm(user)
        user_response.follower_count = follower_count
        user_response.following_count = following_count

        return user_response

    async def get_user_by_username(self, username: str) -> Optional[UserResponse]:
        """Get user by username"""
        from app.database import Base

        query = select(Base).where(Base.username == username)
        result = await self.db.execute(query)
        user = result.scalar_one_or_none()

        if not user:
            return None

        return await self.get_user_by_id(user.id)

    async def update_user(self, user_id: int, user_data: UserUpdate) -> Optional[UserResponse]:
        """Update user profile"""
        from app.database import Base

        # Update user
        update_data = user_data.dict(exclude_unset=True)
        await self.db.execute(
            update(Base).where(Base.id == user_id).values(**update_data)
        )
        await self.db.commit()

        logger.info("User updated", user_id=user_id)

        return await self.get_user_by_id(user_id)

    async def authenticate_user(self, username: str, password: str) -> Optional[UserResponse]:
        """Authenticate user with username/password"""
        from app.database import Base

        query = select(Base).where(Base.username == username)
        result = await self.db.execute(query)
        user = result.scalar_one_or_none()

        if not user or not pwd_context.verify(password, user.password_hash):
            return None

        return await self.get_user_by_id(user.id)

    async def follow_user(self, follower_id: int, followee_id: int) -> bool:
        """Follow a user"""
        from app.database import Follow

        if follower_id == followee_id:
            return False

        # Check if already following
        existing = await self.db.execute(
            select(Follow).where(
                (Follow.follower_id == follower_id) &
                (Follow.followee_id == followee_id)
            )
        )

        if existing.scalar_one_or_none():
            return False

        # Create follow relationship
        follow = Follow(follower_id=follower_id, followee_id=followee_id)
        self.db.add(follow)
        await self.db.commit()

        logger.info("User followed", follower_id=follower_id, followee_id=followee_id)

        return True

    async def unfollow_user(self, follower_id: int, followee_id: int) -> bool:
        """Unfollow a user"""
        from app.database import Follow

        result = await self.db.execute(
            select(Follow).where(
                (Follow.follower_id == follower_id) &
                (Follow.followee_id == followee_id)
            )
        )

        follow = result.scalar_one_or_none()
        if not follow:
            return False

        await self.db.delete(follow)
        await self.db.commit()

        logger.info("User unfollowed", follower_id=follower_id, followee_id=followee_id)

        return True

    async def get_followers(self, user_id: int, limit: int = 50) -> List[UserResponse]:
        """Get user's followers"""
        from app.database import Follow, Base

        query = (
            select(Base)
            .join(Follow, Base.id == Follow.follower_id)
            .where(Follow.followee_id == user_id)
            .limit(limit)
        )

        result = await self.db.execute(query)
        followers = result.scalars().all()

        return [await self.get_user_by_id(f.id) for f in followers]

    async def get_following(self, user_id: int, limit: int = 50) -> List[UserResponse]:
        """Get users that this user is following"""
        from app.database import Follow, Base

        query = (
            select(Base)
            .join(Follow, Base.id == Follow.followee_id)
            .where(Follow.follower_id == user_id)
            .limit(limit)
        )

        result = await self.db.execute(query)
        following = result.scalars().all()

        return [await self.get_user_by_id(f.id) for f in following]

    async def _get_follower_count(self, user_id: int) -> int:
        """Get follower count for user"""
        from app.database import Follow

        query = select(func.count()).select_from(Follow).where(Follow.followee_id == user_id)
        result = await self.db.execute(query)
        return result.scalar()

    async def _get_following_count(self, user_id: int) -> int:
        """Get following count for user"""
        from app.database import Follow

        query = select(func.count()).select_from(Follow).where(Follow.follower_id == user_id)
        result = await self.db.execute(query)
        return result.scalar()