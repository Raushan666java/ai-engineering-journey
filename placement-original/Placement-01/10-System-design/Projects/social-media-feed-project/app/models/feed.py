from pydantic import BaseModel
from typing import Optional, List
from app.models.post import FeedItem

class FeedRequest(BaseModel):
    cursor: Optional[str] = None
    limit: int = 20

class FeedResponse(BaseModel):
    items: List[FeedItem]
    next_cursor: Optional[str] = None
    has_more: bool = False

class TimelineRequest(BaseModel):
    user_id: int
    cursor: Optional[str] = None
    limit: int = 20

class TimelineResponse(BaseModel):
    items: List[FeedItem]
    next_cursor: Optional[str] = None
    has_more: bool = False