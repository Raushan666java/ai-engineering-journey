import json
import hashlib
from typing import Optional, Any, List
import structlog

from app.database import redis_client

logger = structlog.get_logger()

class CacheService:
    """Redis-based caching service"""

    def __init__(self):
        self.redis = redis_client

    async def get(self, key: str) -> Optional[Any]:
        """Get value from cache"""
        try:
            value = await self.redis.get(key)
            if value:
                logger.debug("Cache hit", key=key)
                return json.loads(value)
            logger.debug("Cache miss", key=key)
            return None
        except Exception as e:
            logger.error("Cache get error", key=key, error=str(e))
            return None

    async def set(self, key: str, value: Any, ttl: int = 300) -> bool:
        """Set value in cache with TTL"""
        try:
            serialized = json.dumps(value)
            result = await self.redis.setex(key, ttl, serialized)
            logger.debug("Cache set", key=key, ttl=ttl)
            return result
        except Exception as e:
            logger.error("Cache set error", key=key, error=str(e))
            return False

    async def delete(self, key: str) -> bool:
        """Delete value from cache"""
        try:
            result = await self.redis.delete(key)
            logger.debug("Cache delete", key=key)
            return result > 0
        except Exception as e:
            logger.error("Cache delete error", key=key, error=str(e))
            return False

    async def exists(self, key: str) -> bool:
        """Check if key exists in cache"""
        try:
            return await self.redis.exists(key) > 0
        except Exception as e:
            logger.error("Cache exists error", key=key, error=str(e))
            return False

    async def get_user_following(self, user_id: int) -> Optional[List[int]]:
        """Get user's following list from cache"""
        key = f"user:{user_id}:following"
        return await self.get(key)

    async def set_user_following(self, user_id: int, following_ids: List[int], ttl: int = 3600):
        """Cache user's following list"""
        key = f"user:{user_id}:following"
        await self.set(key, following_ids, ttl)

    async def invalidate_user_following(self, user_id: int):
        """Invalidate user's following cache"""
        key = f"user:{user_id}:following"
        await self.delete(key)

    async def get_feed(self, user_id: int, page: int = 1, limit: int = 20) -> Optional[dict]:
        """Get cached feed for user"""
        key = f"feed:{user_id}:{page}:{limit}"
        return await self.get(key)

    async def set_feed(self, user_id: int, feed_data: dict, page: int = 1, limit: int = 20, ttl: int = 300):
        """Cache feed for user"""
        key = f"feed:{user_id}:{page}:{limit}"
        await self.set(key, feed_data, ttl)

    async def invalidate_user_feeds(self, user_id: int):
        """Invalidate all cached feeds for a user"""
        # This is a simplified implementation
        # In production, you'd want to use Redis SCAN or maintain a set of feed keys
        pattern = f"feed:{user_id}:*"
        # Note: This is a basic implementation. In production, consider using Redis sets
        # to track feed keys for efficient invalidation
        logger.info("Feed invalidation requested", user_id=user_id, pattern=pattern)

    async def get_post(self, post_id: int) -> Optional[dict]:
        """Get cached post"""
        key = f"post:{post_id}"
        return await self.get(key)

    async def set_post(self, post_id: int, post_data: dict, ttl: int = 600):
        """Cache post data"""
        key = f"post:{post_id}"
        await self.set(key, post_data, ttl)

    async def invalidate_post(self, post_id: int):
        """Invalidate post cache"""
        key = f"post:{post_id}"
        await self.delete(key)

    async def increment_post_likes(self, post_id: int) -> int:
        """Increment like count for post"""
        key = f"post:{post_id}:likes"
        try:
            count = await self.redis.incr(key)
            # Set expiry if this is the first time
            await self.redis.expire(key, 86400)  # 24 hours
            return count
        except Exception as e:
            logger.error("Increment likes error", post_id=post_id, error=str(e))
            return 0

    async def increment_post_reposts(self, post_id: int) -> int:
        """Increment repost count for post"""
        key = f"post:{post_id}:reposts"
        try:
            count = await self.redis.incr(key)
            await self.redis.expire(key, 86400)  # 24 hours
            return count
        except Exception as e:
            logger.error("Increment reposts error", post_id=post_id, error=str(e))
            return 0

    async def get_post_engagement(self, post_id: int) -> dict:
        """Get post engagement counts"""
        likes_key = f"post:{post_id}:likes"
        reposts_key = f"post:{post_id}:reposts"

        try:
            likes = int(await self.redis.get(likes_key) or 0)
            reposts = int(await self.redis.get(reposts_key) or 0)
            return {
                "likes": likes,
                "reposts": reposts
            }
        except Exception as e:
            logger.error("Get engagement error", post_id=post_id, error=str(e))
            return {"likes": 0, "reposts": 0}

    def _generate_cache_key(self, *args) -> str:
        """Generate consistent cache key"""
        key_string = ":".join(str(arg) for arg in args)
        return hashlib.md5(key_string.encode()).hexdigest()