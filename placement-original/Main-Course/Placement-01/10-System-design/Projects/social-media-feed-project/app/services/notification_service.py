from typing import Dict, Set, Optional
import json
import structlog
from datetime import datetime

from app.database import redis_client

logger = structlog.get_logger()

class NotificationService:
    """Real-time notification service using Redis pub/sub"""

    def __init__(self):
        self.redis = redis_client
        self.active_connections: Dict[int, Set] = {}  # user_id -> set of connection_ids

    async def connect_user(self, user_id: int, connection_id: str):
        """Register user connection for real-time notifications"""

        if user_id not in self.active_connections:
            self.active_connections[user_id] = set()

        self.active_connections[user_id].add(connection_id)

        # Subscribe to user's notification channel
        await self.redis.subscribe(f"notifications:{user_id}")

        logger.info("User connected for notifications", user_id=user_id, connection_id=connection_id)

    async def disconnect_user(self, user_id: int, connection_id: str):
        """Remove user connection"""

        if user_id in self.active_connections:
            self.active_connections[user_id].discard(connection_id)

            if not self.active_connections[user_id]:
                del self.active_connections[user_id]

                # Unsubscribe from channel if no more connections
                await self.redis.unsubscribe(f"notifications:{user_id}")

        logger.info("User disconnected from notifications", user_id=user_id, connection_id=connection_id)

    async def send_notification(self, user_id: int, notification: dict):
        """Send notification to user"""

        # Add timestamp if not present
        if 'timestamp' not in notification:
            notification['timestamp'] = datetime.utcnow().isoformat()

        # Store notification for offline users
        await self._store_notification(user_id, notification)

        # Send real-time if user is online
        if user_id in self.active_connections:
            await self._send_realtime_notification(user_id, notification)
        else:
            logger.debug("User offline, notification stored", user_id=user_id)

    async def _send_realtime_notification(self, user_id: int, notification: dict):
        """Send real-time notification via Redis pub/sub"""

        try:
            channel = f"notifications:{user_id}"
            message = json.dumps(notification)

            await self.redis.publish(channel, message)

            logger.info("Real-time notification sent", user_id=user_id, type=notification.get('type'))

        except Exception as e:
            logger.error("Failed to send real-time notification",
                        user_id=user_id, error=str(e))

    async def _store_notification(self, user_id: int, notification: dict):
        """Store notification for offline delivery"""

        try:
            # Store in Redis list for recent notifications
            key = f"user:{user_id}:notifications"
            message = json.dumps(notification)

            # Keep only last 100 notifications
            await self.redis.lpush(key, message)
            await self.redis.ltrim(key, 0, 99)
            await self.redis.expire(key, 604800)  # 7 days

        except Exception as e:
            logger.error("Failed to store notification", user_id=user_id, error=str(e))

    async def get_recent_notifications(self, user_id: int, limit: int = 20) -> list:
        """Get recent notifications for user"""

        try:
            key = f"user:{user_id}:notifications"
            notifications = await self.redis.lrange(key, 0, limit - 1)

            return [json.loads(notif) for notif in notifications]

        except Exception as e:
            logger.error("Failed to get notifications", user_id=user_id, error=str(e))
            return []

    async def mark_notifications_read(self, user_id: int, notification_ids: list):
        """Mark notifications as read"""

        # This would require storing notifications in database
        # For now, just clear the Redis list
        try:
            key = f"user:{user_id}:notifications"
            await self.redis.delete(key)

            logger.info("Notifications marked as read", user_id=user_id)

        except Exception as e:
            logger.error("Failed to mark notifications read", user_id=user_id, error=str(e))

    # Notification type methods
    async def notify_post_liked(self, post_id: int, liker_id: int, post_owner_id: int):
        """Send notification when post is liked"""

        if liker_id == post_owner_id:
            return  # Don't notify self-likes

        liker = await self._get_user_info(liker_id)

        notification = {
            'type': 'post_liked',
            'post_id': post_id,
            'liker': {
                'id': liker_id,
                'username': liker.get('username'),
                'display_name': liker.get('display_name')
            },
            'message': f"{liker.get('display_name', liker.get('username'))} liked your post"
        }

        await self.send_notification(post_owner_id, notification)

    async def notify_post_reposted(self, post_id: int, reposter_id: int, post_owner_id: int):
        """Send notification when post is reposted"""

        if reposter_id == post_owner_id:
            return  # Don't notify self-reposts

        reposter = await self._get_user_info(reposter_id)

        notification = {
            'type': 'post_reposted',
            'post_id': post_id,
            'reposter': {
                'id': reposter_id,
                'username': reposter.get('username'),
                'display_name': reposter.get('display_name')
            },
            'message': f"{reposter.get('display_name', reposter.get('username'))} reposted your post"
        }

        await self.send_notification(post_owner_id, notification)

    async def notify_new_follower(self, follower_id: int, followee_id: int):
        """Send notification when user gets a new follower"""

        follower = await self._get_user_info(follower_id)

        notification = {
            'type': 'new_follower',
            'follower': {
                'id': follower_id,
                'username': follower.get('username'),
                'display_name': follower.get('display_name')
            },
            'message': f"{follower.get('display_name', follower.get('username'))} started following you"
        }

        await self.send_notification(followee_id, notification)

    async def notify_mention(self, post_id: int, mentioner_id: int, mentioned_user_id: int):
        """Send notification when user is mentioned"""

        if mentioner_id == mentioned_user_id:
            return  # Don't notify self-mentions

        mentioner = await self._get_user_info(mentioner_id)

        notification = {
            'type': 'mention',
            'post_id': post_id,
            'mentioner': {
                'id': mentioner_id,
                'username': mentioner.get('username'),
                'display_name': mentioner.get('display_name')
            },
            'message': f"{mentioner.get('display_name', mentioner.get('username'))} mentioned you"
        }

        await self.send_notification(mentioned_user_id, notification)

    async def _get_user_info(self, user_id: int) -> dict:
        """Get basic user info for notifications"""

        # In production, this would query the database or cache
        # For now, return minimal info
        return {
            'id': user_id,
            'username': f'user_{user_id}',
            'display_name': f'User {user_id}'
        }