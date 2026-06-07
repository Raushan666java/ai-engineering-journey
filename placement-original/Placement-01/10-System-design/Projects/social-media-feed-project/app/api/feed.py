from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.database import get_db
from app.models.post import PostResponse
from app.services.feed_service import FeedService
from app.utils.auth import get_current_user

router = APIRouter()

@router.get("/", response_model=List[PostResponse])
async def get_feed(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get personalized feed for current user"""
    feed_service = FeedService(db)
    posts = await feed_service.get_personalized_feed(current_user.id, skip, limit)
    return posts

@router.get("/trending", response_model=List[PostResponse])
async def get_trending_posts(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db)
):
    """Get trending posts based on engagement"""
    feed_service = FeedService(db)
    posts = await feed_service.get_trending_posts(skip, limit)
    return posts

@router.get("/discover", response_model=List[PostResponse])
async def get_discovery_feed(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get discovery feed with posts from users not followed"""
    feed_service = FeedService(db)
    posts = await feed_service.get_discovery_feed(current_user.id, skip, limit)
    return posts

@router.get("/following", response_model=List[PostResponse])
async def get_following_feed(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get posts from users the current user is following"""
    feed_service = FeedService(db)
    posts = await feed_service.get_following_feed(current_user.id, skip, limit)
    return posts

@router.get("/hashtag/{hashtag}", response_model=List[PostResponse])
async def get_posts_by_hashtag(
    hashtag: str,
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db)
):
    """Get posts containing a specific hashtag"""
    feed_service = FeedService(db)
    posts = await feed_service.get_posts_by_hashtag(hashtag, skip, limit)
    return posts

@router.get("/search", response_model=List[PostResponse])
async def search_posts(
    query: str = Query(..., min_length=1),
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db)
):
    """Search posts by content"""
    feed_service = FeedService(db)
    posts = await feed_service.search_posts(query, skip, limit)
    return posts

@router.get("/timeline/{user_id}", response_model=List[PostResponse])
async def get_user_timeline(
    user_id: int,
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get timeline for a specific user (their posts + reposts)"""
    feed_service = FeedService(db)
    posts = await feed_service.get_user_timeline(user_id, skip, limit)
    return posts