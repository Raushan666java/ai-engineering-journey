from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.database import get_db
from app.models.user import UserCreate, UserUpdate, UserResponse, UserLogin, Token
from app.services.user_service import UserService
from app.utils.auth import create_access_token, get_current_user

router = APIRouter()

@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(
    user_data: UserCreate,
    db: AsyncSession = Depends(get_db)
):
    """Create a new user account"""
    try:
        user_service = UserService(db)
        user = await user_service.create_user(user_data)
        return user
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/me", response_model=UserResponse)
async def get_current_user_profile(
    current_user: UserResponse = Depends(get_current_user)
):
    """Get current user's profile"""
    return current_user

@router.get("/{user_id}", response_model=UserResponse)
async def get_user_profile(
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get user profile by ID"""
    user_service = UserService(db)
    user = await user_service.get_user_by_id(user_id)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user

@router.put("/{user_id}", response_model=UserResponse)
async def update_user_profile(
    user_id: int,
    user_data: UserUpdate,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Update user profile"""
    if current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Not authorized to update this profile")

    user_service = UserService(db)
    updated_user = await user_service.update_user(user_id, user_data)

    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")

    return updated_user

@router.post("/login", response_model=Token)
async def login(
    login_data: UserLogin,
    db: AsyncSession = Depends(get_db)
):
    """Authenticate user and return access token"""
    user_service = UserService(db)
    user = await user_service.authenticate_user(login_data.username, login_data.password)

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"}
        )

    access_token = create_access_token(data={"user_id": user.id})
    return Token(access_token=access_token, token_type="bearer")

@router.post("/{user_id}/follow")
async def follow_user(
    user_id: int,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Follow a user"""
    if current_user.id == user_id:
        raise HTTPException(status_code=400, detail="Cannot follow yourself")

    user_service = UserService(db)
    success = await user_service.follow_user(current_user.id, user_id)

    if not success:
        raise HTTPException(status_code=400, detail="Already following this user")

    return {"message": "Successfully followed user"}

@router.delete("/{user_id}/follow")
async def unfollow_user(
    user_id: int,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Unfollow a user"""
    user_service = UserService(db)
    success = await user_service.unfollow_user(current_user.id, user_id)

    if not success:
        raise HTTPException(status_code=400, detail="Not following this user")

    return {"message": "Successfully unfollowed user"}

@router.get("/{user_id}/followers", response_model=List[UserResponse])
async def get_user_followers(
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get user's followers"""
    user_service = UserService(db)
    followers = await user_service.get_followers(user_id)
    return followers

@router.get("/{user_id}/following", response_model=List[UserResponse])
async def get_user_following(
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Get users that this user is following"""
    user_service = UserService(db)
    following = await user_service.get_following(user_id)
    return following