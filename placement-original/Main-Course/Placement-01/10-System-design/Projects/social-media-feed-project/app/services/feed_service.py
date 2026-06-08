from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional
import structlog
import time
from datetime import datetime, timedelta

from app.models.feed import FeedResponse, FeedItem
from app.models.post import PostWithUser
from app.services.user_service import UserService
from app.services.post_service import PostService
from app.services.cache_service import CacheService

logger = structlog.get_logger()

class FeedService:
    """Service for generating and managing user feeds"""

    def __init__(self, db: AsyncSession):
        self.db = db
        self.user_service = UserService(db)
        self.post_service = PostService(db)
        self.cache_service = CacheService()

    async def get_personalized_feed(self, user_id: int, limit: int = 20,
                                  cursor: Optional[str] = None) -> FeedResponse:
        """Get personalized feed for user"""

        # Try cache first
        cached_feed = await self.cache_service.get_feed(user_id, limit=limit)
        if cached_feed:
            logger.info("Feed cache hit", user_id=user_id)
            return FeedResponse(**cached_feed)

        # Generate feed
        feed_items = await self._generate_feed(user_id, limit, cursor)

        # Create response
        response = FeedResponse(
            items=feed_items,
            has_more=len(feed_items) == limit
        )

        # Cache feed
        await self.cache_service.set_feed(user_id, response.dict(), limit=limit)

        logger.info("Feed generated", user_id=user_id, item_count=len(feed_items))

        return response

    async def get_user_timeline(self, target_user_id: int, current_user_id: Optional[int] = None,
                              limit: int = 20, cursor: Optional[str] = None) -> FeedResponse:
        """Get timeline for a specific user"""

        # Get user's posts
        posts = await self.post_service.get_user_posts(target_user_id, limit=limit)

        # Convert to feed items
        feed_items = []
        for post in posts:
            user = await self.user_service.get_user_by_id(post.user_id)
            post_with_user = PostWithUser(**post.dict(), user=user)

            feed_item = FeedItem(
                post=post_with_user,
                rank_score=1.0  # All posts have equal weight in timeline
            )
            feed_items.append(feed_item)

        return FeedResponse(
            items=feed_items,
            has_more=len(feed_items) == limit
        )

    async def invalidate_user_feed(self, user_id: int):
        """Invalidate cached feed for user"""
        await self.cache_service.invalidate_user_feeds(user_id)
        logger.info("Feed invalidated", user_id=user_id)

    async def _generate_feed(self, user_id: int, limit: int, cursor: Optional[str]) -> List[FeedItem]:
        """Generate personalized feed"""

        # Get users that this user follows
        following_ids = await self._get_following_ids(user_id)
        if not following_ids:
            return []

        # Get recent posts from followed users
        posts = await self.post_service.get_posts_feed(following_ids, limit=limit * 2)

        # Rank and filter posts
        ranked_posts = await self._rank_posts(posts, user_id)

        # Sort by rank score and take top posts
        ranked_posts.sort(key=lambda x: x[1], reverse=True)
        top_posts = ranked_posts[:limit]

        # Convert to feed items
        feed_items = []
        for post, score in top_posts:
            feed_item = FeedItem(
                post=post,
                rank_score=score
            )
            feed_items.append(feed_item)

        return feed_items

    async def _get_following_ids(self, user_id: int) -> List[int]:
        """Get IDs of users that this user follows"""

        # Try cache first
        cached_following = await self.cache_service.get_user_following(user_id)
        if cached_following:
            return cached_following

        # Get from database
        following = await self.user_service.get_following(user_id, limit=1000)
        following_ids = [user.id for user in following]

        # Cache for 1 hour
        await self.cache_service.set_user_following(user_id, following_ids, ttl=3600)

        return following_ids

    async def _rank_posts(self, posts: List[PostWithUser], user_id: int) -> List[tuple]:
        """Rank posts based on relevance"""

        ranked_posts = []

        for post in posts:
            score = await self._calculate_post_score(post, user_id)
            ranked_posts.append((post, score))

        return ranked_posts

    async def _calculate_post_score(self, post: PostWithUser, user_id: int) -> float:
        """Calculate relevance score for a post"""

        base_score = 1.0

        # Recency factor (newer posts score higher)
        hours_old = (time.time() - post.created_at.timestamp()) / 3600
        recency_score = 1.0 / (1.0 + hours_old / 24)  # Half-life of 24 hours

        # Engagement factor
        engagement_score = min(10.0, (post.like_count + post.repost_count * 2) / 100)

        # Author authority (followers)
        author_score = min(5.0, post.user.follower_count / 10000)

        # Personalization (interaction history)
        interaction_score = await self._get_user_interaction_score(user_id, post.user.id)

        # Content relevance (future: based on user interests)
        content_score = 1.0

        total_score = (
            base_score * 0.2 +
            recency_score * 0.3 +
            engagement_score * 0.25 +
            author_score * 0.15 +
            interaction_score * 0.05 +
            content_score * 0.05
        )

        return total_score

    async def _get_user_interaction_score(self, user_id: int, author_id: int) -> float:
        """Calculate interaction score between user and author"""

        # This is a simplified implementation
        # In production, you'd track and analyze user interactions

        if user_id == author_id:
            return 2.0  # User's own posts get higher score

        # Check if user frequently interacts with this author
        # This would require additional tracking tables in production
        return 1.0

    async def refresh_feed_cache(self, user_id: int):
        """Force refresh of user's feed cache"""

        # Invalidate existing cache
        await self.invalidate_user_feed(user_id)

        # Generate new feed to warm cache
        await self.get_personalized_feed(user_id)

        logger.info("Feed cache refreshed", user_id=user_id)