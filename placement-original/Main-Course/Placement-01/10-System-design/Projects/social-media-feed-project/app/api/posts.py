from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional

from app.database import get_db
from app.models.post import PostCreate, PostUpdate, PostResponse
from app.services.post_service import PostService
from app.services.user_service import UserService
from app.utils.auth import get_current_user

router = APIRouter()

@router.post("/", response_model=PostResponse, status_code=status.HTTP_201_CREATED)
async def create_post(
    post_data: PostCreate,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Create a new post"""
    post_service = PostService(db)
    post = await post_service.create_post(current_user.id, post_data)
    return post

@router.get("/{post_id}", response_model=PostResponse)
async def get_post(
    post_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get a specific post by ID"""
    post_service = PostService(db)
    post = await post_service.get_post_by_id(post_id)

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    return post

@router.put("/{post_id}", response_model=PostResponse)
async def update_post(
    post_id: int,
    post_data: PostUpdate,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Update a post"""
    post_service = PostService(db)
    post = await post_service.get_post_by_id(post_id)

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    if post.author_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to update this post")

    updated_post = await post_service.update_post(post_id, post_data)
    return updated_post

@router.delete("/{post_id}")
async def delete_post(
    post_id: int,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Delete a post"""
    post_service = PostService(db)
    post = await post_service.get_post_by_id(post_id)

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    if post.author_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this post")

    success = await post_service.delete_post(post_id)

    if not success:
        raise HTTPException(status_code=500, detail="Failed to delete post")

    return {"message": "Post deleted successfully"}

@router.get("/user/{user_id}", response_model=List[PostResponse])
async def get_user_posts(
    user_id: int,
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db)
):
    """Get posts by a specific user"""
    user_service = UserService(db)
    user = await user_service.get_user_by_id(user_id)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    post_service = PostService(db)
    posts = await post_service.get_posts_by_user(user_id, skip, limit)
    return posts

@router.post("/{post_id}/like")
async def like_post(
    post_id: int,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Like a post"""
    post_service = PostService(db)
    post = await post_service.get_post_by_id(post_id)

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    success = await post_service.like_post(current_user.id, post_id)

    if not success:
        raise HTTPException(status_code=400, detail="Already liked this post")

    return {"message": "Post liked successfully"}

@router.delete("/{post_id}/like")
async def unlike_post(
    post_id: int,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Unlike a post"""
    post_service = PostService(db)
    success = await post_service.unlike_post(current_user.id, post_id)

    if not success:
        raise HTTPException(status_code=400, detail="Post not liked yet")

    return {"message": "Post unliked successfully"}

@router.get("/{post_id}/likes/count")
async def get_post_likes_count(
    post_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get the number of likes for a post"""
    post_service = PostService(db)
    count = await post_service.get_post_likes_count(post_id)
    return {"likes_count": count}

@router.post("/{post_id}/repost")
async def repost_post(
    post_id: int,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Repost a post"""
    post_service = PostService(db)
    post = await post_service.get_post_by_id(post_id)

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    success = await post_service.repost_post(current_user.id, post_id)

    if not success:
        raise HTTPException(status_code=400, detail="Already reposted this post")

    return {"message": "Post reposted successfully"}

@router.delete("/{post_id}/repost")
async def unrepost_post(
    post_id: int,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Unrepost a post"""
    post_service = PostService(db)
    success = await post_service.unrepost_post(current_user.id, post_id)

    if not success:
        raise HTTPException(status_code=400, detail="Post not reposted yet")

    return {"message": "Post unreposted successfully"}

@router.get("/{post_id}/reposts/count")
async def get_post_reposts_count(
    post_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get the number of reposts for a post"""
    post_service = PostService(db)
    count = await post_service.get_post_reposts_count(post_id)
    return {"reposts_count": count}