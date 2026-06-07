from fastapi import APIRouter, Depends, WebSocket, WebSocketDisconnect
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Dict, Set
import json

from app.database import get_db
from app.services.notification_service import NotificationService
from app.utils.auth import get_current_user_ws

router = APIRouter()

# Global connection manager for WebSocket connections
class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[int, Set[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, user_id: int):
        await websocket.accept()
        if user_id not in self.active_connections:
            self.active_connections[user_id] = set()
        self.active_connections[user_id].add(websocket)

    def disconnect(self, websocket: WebSocket, user_id: int):
        if user_id in self.active_connections:
            self.active_connections[user_id].discard(websocket)
            if not self.active_connections[user_id]:
                del self.active_connections[user_id]

    async def send_personal_message(self, message: dict, user_id: int):
        """Send message to specific user"""
        if user_id in self.active_connections:
            for connection in self.active_connections[user_id]:
                try:
                    await connection.send_json(message)
                except Exception:
                    # Remove dead connections
                    self.active_connections[user_id].discard(connection)

    async def broadcast_to_followers(self, message: dict, user_id: int, db: AsyncSession):
        """Broadcast message to all followers of a user"""
        # This would need to be implemented with follower lookup
        # For now, just send to the user themselves
        await self.send_personal_message(message, user_id)

manager = ConnectionManager()

@router.websocket("/ws/{user_id}")
async def websocket_endpoint(
    websocket: WebSocket,
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    """WebSocket endpoint for real-time notifications and updates"""
    try:
        # Verify user exists (basic validation)
        await manager.connect(websocket, user_id)

        # Send welcome message
        await websocket.send_json({
            "type": "connection_established",
            "message": f"Connected as user {user_id}",
            "timestamp": None
        })

        while True:
            try:
                # Receive message from client
                data = await websocket.receive_json()

                # Handle different message types
                message_type = data.get("type")

                if message_type == "ping":
                    # Respond to ping with pong
                    await websocket.send_json({
                        "type": "pong",
                        "timestamp": None
                    })

                elif message_type == "subscribe_feed":
                    # Subscribe to real-time feed updates
                    await websocket.send_json({
                        "type": "subscription_confirmed",
                        "feed_type": "personal",
                        "message": "Subscribed to feed updates",
                        "timestamp": None
                    })

                elif message_type == "typing_indicator":
                    # Handle typing indicators (could broadcast to followers)
                    pass

                else:
                    # Unknown message type
                    await websocket.send_json({
                        "type": "error",
                        "message": f"Unknown message type: {message_type}",
                        "timestamp": None
                    })

            except json.JSONDecodeError:
                await websocket.send_json({
                    "type": "error",
                    "message": "Invalid JSON format",
                    "timestamp": None
                })

    except WebSocketDisconnect:
        manager.disconnect(websocket, user_id)
    except Exception as e:
        manager.disconnect(websocket, user_id)
        print(f"WebSocket error for user {user_id}: {e}")

@router.websocket("/ws/notifications/{user_id}")
async def notification_websocket(
    websocket: WebSocket,
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Dedicated WebSocket for notifications"""
    notification_service = NotificationService(db)

    try:
        await manager.connect(websocket, user_id)

        # Send recent notifications on connect
        recent_notifications = await notification_service.get_recent_notifications(user_id, limit=10)

        for notification in recent_notifications:
            await websocket.send_json({
                "type": "notification",
                "notification": {
                    "id": notification.id,
                    "type": notification.type,
                    "message": notification.message,
                    "data": notification.data,
                    "created_at": notification.created_at.isoformat(),
                    "read": notification.read
                }
            })

        # Mark notifications as delivered
        await notification_service.mark_notifications_delivered(user_id)

        while True:
            # Keep connection alive and wait for client messages
            data = await websocket.receive_json()

            if data.get("type") == "mark_read":
                notification_ids = data.get("notification_ids", [])
                if notification_ids:
                    await notification_service.mark_notifications_read(user_id, notification_ids)
                    await websocket.send_json({
                        "type": "notifications_marked_read",
                        "notification_ids": notification_ids
                    })

    except WebSocketDisconnect:
        manager.disconnect(websocket, user_id)
    except Exception as e:
        manager.disconnect(websocket, user_id)
        print(f"Notification WebSocket error for user {user_id}: {e}")

# Function to send notifications from other parts of the application
async def send_notification_to_user(user_id: int, notification_data: dict):
    """Send notification to user via WebSocket"""
    await manager.send_personal_message({
        "type": "notification",
        **notification_data
    }, user_id)

async def broadcast_feed_update(user_id: int, post_data: dict):
    """Broadcast feed update to user's followers"""
    # This would need follower lookup implementation
    await manager.send_personal_message({
        "type": "feed_update",
        "post": post_data
    }, user_id)