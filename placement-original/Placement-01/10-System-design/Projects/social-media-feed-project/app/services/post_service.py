from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, update, desc
from typing import Optional, List
import structlog

from app.models.post import PostCreate, PostUpdate, PostResponse, PostWithUser
from app.models.sqlalchemy_models import Post, Like, Repost
from app.services.user_service import UserService

logger = structlog.get_logger()

class PostService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.user_service = UserService(db)

    async def create_post(self, user_id: int, post_data: PostCreate) -> PostResponse:
        """Create a new post"""

        # Create post
        post = Post(
            user_id=user_id,
            content=post_data.content,
            media_urls=post_data.media_urls or []
        )

        self.db.add(post)
        await self.db.commit()
        await self.db.refresh(post)

        logger.info("Post created", post_id=post.id, user_id=user_id)

        return await self._post_to_response(post)

    async def get_post_by_id(self, post_id: int) -> Optional[PostWithUser]:
        """Get post by ID with user information"""

        query = select(Post).where(Post.id == post_id)
        result = await self.db.execute(query)
        post = result.scalar_one_or_none()

        if not post:
            return None

        return await self._post_with_user_to_response(post)

    async def update_post(self, post_id: int, user_id: int, post_data: PostUpdate) -> Optional[PostResponse]:
        """Update a post (only by owner)"""

        # Get post
        query = select(Post).where(Post.id == post_id)
        result = await self.db.execute(query)
        post = result.scalar_one_or_none()

        if not post or post.user_id != user_id:
            return None

        # Update post
        update_data = post_data.dict(exclude_unset=True)
        if update_data:
            await self.db.execute(
                update(Post).where(Post.id == post_id).values(**update_data)
            )
            await self.db.commit()

            # Refresh post
            await self.db.refresh(post)

        logger.info("Post updated", post_id=post_id, user_id=user_id)

        return await self._post_to_response(post)

    async def delete_post(self, post_id: int, user_id: int) -> bool:
        """Delete a post (only by owner)"""

        # Get post
        query = select(Post).where(Post.id == post_id)
        result = await self.db.execute(query)
        post = result.scalar_one_or_none()

        if not post or post.user_id != user_id:
            return False

        await self.db.delete(post)
        await self.db.commit()

        logger.info("Post deleted", post_id=post_id, user_id=user_id)

        return True

    async def get_user_posts(self, user_id: int, limit: int = 20, offset: int = 0) -> List[PostResponse]:
        """Get posts by a specific user"""

        query = (
            select(Post)
            .where(Post.user_id == user_id)
            .order_by(desc(Post.created_at))
            .limit(limit)
            .offset(offset)
        )

        result = await self.db.execute(query)
        posts = result.scalars().all()

        return [await self._post_to_response(post) for post in posts]

    async def like_post(self, post_id: int, user_id: int) -> bool:
        """Like a post"""

        # Check if already liked
        existing = await self.db.execute(
            select(Like).where(
                (Like.post_id == post_id) & (Like.user_id == user_id)
            )
        )

        if existing.scalar_one_or_none():
            return False

        # Create like
        like = Like(post_id=post_id, user_id=user_id)
        self.db.add(like)
        await self.db.commit()

        logger.info("Post liked", post_id=post_id, user_id=user_id)

        return True

    async def unlike_post(self, post_id: int, user_id: int) -> bool:
        """Unlike a post"""

        result = await self.db.execute(
            select(Like).where(
                (Like.post_id == post_id) & (Like.user_id == user_id)
            )
        )

        like = result.scalar_one_or_none()
        if not like:
            return False

        await self.db.delete(like)
        await self.db.commit()

        logger.info("Post unliked", post_id=post_id, user_id=user_id)

        return True

    async def repost_post(self, post_id: int, user_id: int) -> bool:
        """Repost a post"""

        # Check if already reposted
        existing = await self.db.execute(
            select(Repost).where(
                (Repost.post_id == post_id) & (Repost.user_id == user_id)
            )
        )

        if existing.scalar_one_or_none():
            return False

        # Create repost
        repost = Repost(post_id=post_id, user_id=user_id)
        self.db.add(repost)
        await self.db.commit()

        logger.info("Post reposted", post_id=post_id, user_id=user_id)

        return True

    async def get_posts_feed(self, user_ids: List[int], limit: int = 20,
                           offset: int = 0) -> List[PostWithUser]:
        """Get posts from multiple users (for feed generation)"""

        query = (
            select(Post)
            .where(Post.user_id.in_(user_ids))
            .order_by(desc(Post.created_at))
            .limit(limit)
            .offset(offset)
        )

        result = await self.db.execute(query)
        posts = result.scalars().all()

        return [await self._post_with_user_to_response(post) for post in posts]

    async def _post_to_response(self, post: Post) -> PostResponse:
        """Convert Post model to PostResponse"""

        # Get engagement counts
        like_count = await self._get_like_count(post.id)
        repost_count = await self._get_repost_count(post.id)

        response = PostResponse.from_orm(post)
        response.like_count = like_count
        response.repost_count = repost_count

        return response

    async def _post_with_user_to_response(self, post: Post) -> PostWithUser:
        """Convert Post model to PostWithUser"""

        post_response = await self._post_to_response(post)
        user_response = await self.user_service.get_user_by_id(post.user_id)

        return PostWithUser(
            **post_response.dict(),
            user=user_response
        )

    async def _get_like_count(self, post_id: int) -> int:
        """Get like count for post"""
        query = select(func.count()).select_from(Like).where(Like.post_id == post_id)
        result = await self.db.execute(query)
        return result.scalar()

    async def _get_repost_count(self, post_id: int) -> int:
        """Get repost count for post"""
        query = select(func.count()).select_from(Repost).where(Repost.post_id == post_id)
        result = await self.db.execute(query)
        return result.scalar()