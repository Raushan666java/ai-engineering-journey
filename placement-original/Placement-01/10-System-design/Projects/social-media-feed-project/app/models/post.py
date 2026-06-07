from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class PostBase(BaseModel):
    content: str = Field(..., max_length=280)
    media_urls: Optional[List[str]] = []

class PostCreate(PostBase):
    pass

class PostUpdate(BaseModel):
    content: Optional[str] = Field(None, max_length=280)
    media_urls: Optional[List[str]] = []

class PostResponse(PostBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime]
    like_count: int = 0
    repost_count: int = 0
    reply_count: int = 0

    class Config:
        from_attributes = True

class PostWithUser(PostResponse):
    user: 'UserResponse'

class FeedItem(BaseModel):
    post: PostWithUser
    rank_score: float = 0.0

class FeedResponse(BaseModel):
    items: List[FeedItem]
    next_cursor: Optional[str]
    has_more: bool = False

# Forward reference for UserResponse
from app.models.user import UserResponse
PostWithUser.update_forward_refs()