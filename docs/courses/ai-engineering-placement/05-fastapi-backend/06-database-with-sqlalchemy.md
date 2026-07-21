# Database with SQLAlchemy — ORM, Migrations, and Repository Pattern

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Set up SQLAlchemy with FastAPI using the async pattern |
| LO2 | Define ORM models with relationships, indexes, and constraints |
| LO3 | Implement CRUD operations with proper session management |
| LO4 | Use Alembic for database migrations and schema versioning |
| LO5 | Apply the repository pattern for data access abstraction |
| LO6 | Handle transactions, connection pooling, and query optimization |

## Introduction

05-fastapi-backend is a fundamental concept in AI engineering. This chapter covers the core principles, practical implementations, and interview preparation for mastering this topic.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures
## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | SQLAlchemy Setup | Engine, session, async vs sync |
| 6.2 | ORM Models | Declarative base, columns, relationships |
| 6.3 | CRUD Operations | Create, read, update, delete patterns |
| 6.4 | Relationships | One-to-many, many-to-many, lazy loading |
| 6.5 | Alembic Migrations | Schema versioning, auto-generation |
| 6.6 | Repository Pattern | Data access abstraction layer |
| 6.7 | Query Optimization | Eager loading, indexing, profiling |
| 6.8 | Transactions | Unit of work, rollback, nested transactions |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Engine Setup] --> B[ORM Models]
    B --> C[CRUD]
    C --> D[Relationships]
    D --> E[Migrations]
    E --> F[Repository Pattern]
    F --> G[Query Optimization]
    G --> H[Transactions]
```

## 6.1 SQLAlchemy Setup

SQLAlchemy is the most popular Python ORM. FastAPI works best with the async SQLAlchemy pattern.

```python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from typing import AsyncGenerator

DATABASE_URL = "postgresql+asyncpg://user:pass@localhost/dbname"

# Async engine
engine = create_async_engine(DATABASE_URL, echo=True, pool_size=5, max_overflow=10)

# Session factory
async_session_factory = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

# Base class for models
class Base(DeclarativeBase):
    pass

# Database dependency for FastAPI
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_factory() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()

# Application setup
from fastapi import FastAPI, Depends
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables on startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()

app = FastAPI(lifespan=lifespan)
```

**Sync alternative** (simpler for smaller projects):

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session

DATABASE_URL = "sqlite:///./app.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

## 6.2 ORM Models

Define database tables as Python classes.

```python
from sqlalchemy import (
    Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, Enum, Index
)
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
import enum

class UserRole(str, enum.Enum):
    ADMIN = "admin"
    USER = "user"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    email = Column(String(255), unique=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(100))
    role = Column(Enum(UserRole), default=UserRole.USER)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), onupdate=lambda: datetime.now(timezone.utc))

    # Relationships
    posts = relationship("Post", back_populates="author", cascade="all, delete-orphan")

    # Composite index
    __table_args__ = (
        Index("idx_users_active_role", "is_active", "role"),
    )

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    published = Column(Boolean, default=False)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    author = relationship("User", back_populates="posts")
```

**Column types**:

| Type | Python Type | Description |
|------|-------------|-------------|
| Integer | int | Integer value |
| String | str | Variable-length string |
| Text | str | Large text field |
| Float | float | Floating point number |
| Boolean | bool | True/False |
| DateTime | datetime | Date and time |
| Enum | enum.Enum | Enumeration values |
| JSON | dict/list | JSON data |
| UUID | uuid.UUID | UUID values |
| LargeBinary | bytes | Binary data |

## 6.3 CRUD Operations

```python
from sqlalchemy import select, update, delete
from sqlalchemy.ext.asyncio import AsyncSession

# CREATE
async def create_user(db: AsyncSession, user_data: dict) -> User:
    user = User(**user_data)
    db.add(user)
    await db.flush()  # Assigns ID without committing
    await db.refresh(user)  # Loads database-generated values
    return user

@app.post("/users", status_code=201)
async def create_user_endpoint(user: UserCreate, db: AsyncSession = Depends(get_db)):
    db_user = await create_user(db, user.model_dump())
    return db_user

# READ
async def get_user(db: AsyncSession, user_id: int) -> User | None:
    result = await db.execute(select(User).where(User.id == user_id))
    return result.scalar_one_or_none()

async def get_users(db: AsyncSession, skip: int = 0, limit: int = 100) -> list[User]:
    result = await db.execute(
        select(User).offset(skip).limit(limit).order_by(User.created_at.desc())
    )
    return result.scalars().all()

@app.get("/users/{user_id}")
async def get_user_endpoint(user_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# UPDATE
async def update_user(db: AsyncSession, user_id: int, update_data: dict) -> User | None:
    user = await get_user(db, user_id)
    if not user:
        return None
    for key, value in update_data.items():
        setattr(user, key, value)
    await db.flush()
    await db.refresh(user)
    return user

@app.patch("/users/{user_id}")
async def update_user_endpoint(user_id: int, update: UserUpdate, db: AsyncSession = Depends(get_db)):
    user = await update_user(db, user_id, update.model_dump(exclude_unset=True))
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# DELETE
async def delete_user(db: AsyncSession, user_id: int) -> bool:
    user = await get_user(db, user_id)
    if not user:
        return False
    await db.delete(user)
    await db.flush()
    return True

@app.delete("/users/{user_id}", status_code=204)
async def delete_user_endpoint(user_id: int, db: AsyncSession = Depends(get_db)):
    deleted = await delete_user(db, user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
```

## 6.4 Relationships

SQLAlchemy supports standard database relationships.

```python
from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.orm import relationship

# Many-to-many association table
post_tags = Table(
    "post_tags",
    Base.metadata,
    Column("post_id", Integer, ForeignKey("posts.id"), primary_key=True),
    Column("tag_id", Integer, ForeignKey("tags.id"), primary_key=True),
)

class Tag(Base):
    __tablename__ = "tags"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    posts = relationship("Post", secondary=post_tags, back_populates="tags")

# Update Post model to include tags
Post.tags = relationship("Tag", secondary=post_tags, back_populates="posts")

# Eager loading vs lazy loading
# Lazy (default) — loads on access, can cause N+1
@app.get("/posts")
async def list_posts_lazy(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Post))
    posts = result.scalars().all()

    for post in posts:
        # Each access triggers a new query — N+1 problem!
        print(post.author.username)
    return posts

# Eager loading — join in a single query
from sqlalchemy.orm import joinedload

@app.get("/posts")
async def list_posts_eager(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Post).options(joinedload(Post.author), joinedload(Post.tags))
    )
    posts = result.unique().scalars().all()
    # No additional queries — author and tags loaded in join
    return posts

# Subquery loading (separate query, but batched)
from sqlalchemy.orm import selectinload

@app.get("/posts")
async def list_posts_selectin(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Post).options(selectinload(Post.author))
    )
    posts = result.scalars().all()
    # Author loaded in second query with WHERE IN clause
    return posts
```

**Relationship loading strategies**:

| Strategy | Queries | Best For |
|----------|---------|----------|
| lazy | On access | Simple cases |
| joinedload | Single JOIN | Small datasets, few relations |
| selectinload | Separate SELECT IN | Large datasets, many relations |
| subqueryload | Subquery | Complex filtering |

## 6.5 Alembic Migrations

Alembic manages database schema changes over time.

```bash
# Installation
pip install alembic

# Initialize
alembic init alembic

# Configure alembic/env.py to use your models
# target_metadata = Base.metadata

# Auto-generate migration
alembic revision --autogenerate -m "create users table"

# Apply migration
alembic upgrade head

# Rollback
alembic downgrade -1

# View history
alembic history
```

**Migration file example**:

```python
"""Add user role column

Revision ID: abc123
Revises: def456
"""
from alembic import op
import sqlalchemy as sa

def upgrade():
    op.add_column("users", sa.Column("role", sa.String(20), server_default="user"))
    op.create_index("idx_users_role", "users", ["role"])

def downgrade():
    op.drop_index("idx_users_role")
    op.drop_column("users", "role")
```

**Migration best practices**:
- Always review auto-generated migrations before applying
- Test migrations on a staging database first
- Never edit existing migrations that have been applied to production
- Use `op.execute()` for data migrations or complex SQL
- Keep migrations small and focused on single changes

## 6.6 Repository Pattern

Abstract data access behind repository interfaces.

```python
from abc import ABC, abstractmethod
from sqlalchemy import select, delete as sa_delete
from sqlalchemy.ext.asyncio import AsyncSession

class BaseRepository(ABC):
    def __init__(self, db: AsyncSession):
        self.db = db

class UserRepository(BaseRepository):
    async def get_by_id(self, user_id: int) -> User | None:
        result = await self.db.execute(select(User).where(User.id == user_id))
        return result.scalar_one_or_none()

    async def get_by_username(self, username: str) -> User | None:
        result = await self.db.execute(select(User).where(User.username == username))
        return result.scalar_one_or_none()

    async def get_by_email(self, email: str) -> User | None:
        result = await self.db.execute(select(User).where(User.email == email))
        return result.scalar_one_or_none()

    async def list(self, skip: int = 0, limit: int = 100) -> list[User]:
        result = await self.db.execute(
            select(User).offset(skip).limit(limit).order_by(User.id)
        )
        return result.scalars().all()

    async def create(self, data: dict) -> User:
        user = User(**data)
        self.db.add(user)
        await self.db.flush()
        await self.db.refresh(user)
        return user

    async def update(self, user_id: int, data: dict) -> User | None:
        user = await self.get_by_id(user_id)
        if not user:
            return None
        for key, value in data.items():
            setattr(user, key, value)
        await self.db.flush()
        await self.db.refresh(user)
        return user

    async def delete(self, user_id: int) -> bool:
        user = await self.get_by_id(user_id)
        if not user:
            return False
        await self.db.delete(user)
        await self.db.flush()
        return True

# FastAPI integration — inject repository via dependency
async def get_user_repository(db: AsyncSession = Depends(get_db)) -> UserRepository:
    return UserRepository(db)

@app.get("/users/{user_id}")
async def get_user(user_id: int, repo: UserRepository = Depends(get_user_repository)):
    user = await repo.get_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

**Repository pattern benefits**: Testable (mock repository in tests), swappable (change ORM without changing business logic), consistent data access patterns.

## 6.7 Query Optimization

```python
from sqlalchemy import text, func, desc

# Raw SQL for complex queries
@app.get("/users/stats")
async def user_stats(db: AsyncSession = Depends(get_db)):
    result = await db.execute(text("""
        SELECT
            date_trunc('day', created_at) as day,
            COUNT(*) as user_count,
            COUNT(CASE WHEN is_active THEN 1 END) as active_count
        FROM users
        GROUP BY day
        ORDER BY day DESC
        LIMIT 30
    """))
    return [dict(row._mapping) for row in result]

# Aggregation with ORM
@app.get("/posts/analytics")
async def post_analytics(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(
            Post.author_id,
            func.count(Post.id).label("post_count"),
            func.avg(func.length(Post.content)).label("avg_length")
        ).group_by(Post.author_id)
    )
    return [dict(row._mapping) for row in result]

# Pagination with keyset pagination (cursor)
@app.get("/posts/cursor")
async def list_posts_cursor(
    cursor: Optional[int] = None,
    limit: int = 20,
    db: AsyncSession = Depends(get_db)
):
    query = select(Post).options(joinedload(Post.author)).order_by(Post.id)

    if cursor:
        query = query.where(Post.id > cursor)

    query = query.limit(limit + 1)
    result = await db.execute(query)
    posts = result.unique().scalars().all()

    has_more = len(posts) > limit
    posts = posts[:limit]
    next_cursor = posts[-1].id if has_more and posts else None

    return {"data": posts, "next_cursor": next_cursor, "has_more": has_more}
```

**Optimization tips**:
- Use `selectinload` instead of `joinedload` for collections
- Add database indexes on foreign keys and frequently queried columns
- Use `limit` and `offset` for pagination
- Avoid N+1 queries by eager loading relationships
- Use `text()` for complex, read-only SQL
- Profile queries with `EXPLAIN ANALYZE`

## 6.8 Transactions

```python
from sqlalchemy.ext.asyncio import AsyncSession

# Transaction via dependency — automatic commit/rollback
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_factory() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise

# Multiple operations in one transaction
async def transfer_funds(
    db: AsyncSession,
    from_user_id: int,
    to_user_id: int,
    amount: float
):
    from_account = await account_repo.get_by_user_id(db, from_user_id)
    to_account = await account_repo.get_by_user_id(db, to_user_id)

    if from_account.balance < amount:
        raise HTTPException(status_code=400, detail="Insufficient funds")

    from_account.balance -= amount
    to_account.balance += amount

    # Both updates are in the same transaction
    # If anything fails, both are rolled back
    await db.flush()

# Manual transaction management
async def create_order_with_items(
    db: AsyncSession,
    order_data: dict,
    items: list[dict]
):
    async with db.begin():  # Nested transaction
        order = Order(**order_data)
        db.add(order)
        await db.flush()

        for item_data in items:
            item = OrderItem(order_id=order.id, **item_data)
            db.add(item)

        await db.flush()
        await db.refresh(order)
        return order
```

---

## TypeScript Parallel

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Equivalent CRUD with Prisma ORM
async function createUser(data: { name: string; email: string }) {
  return prisma.user.create({ data });
}

async function getUser(id: number) {
  return prisma.user.findUnique({
    where: { id },
    include: { posts: true },
  });
}

async function listUsers(skip: number, limit: number) {
  return prisma.user.findMany({ skip, take: limit, orderBy: { createdAt: "desc" } });
}

// Repository pattern in TypeScript
class UserRepository {
  async findById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  async create(data: { name: string; email: string; password: string }) {
    return prisma.user.create({ data });
  }
}
```

---

## Summary

- SQLAlchemy provides async ORM support with asyncpg for PostgreSQL in FastAPI
- ORM models map Python classes to database tables with columns and relationships
- CRUD operations follow create/read/update/delete patterns with session management
- Relationships (one-to-many, many-to-many) model data associations with foreign keys
- Eager loading (joinedload, selectinload) prevents N+1 query problems
- Alembic manages database schema migrations with version control
- Repository pattern abstracts data access behind interfaces for testability
- Connection pooling and query optimization improve database performance
- Transactions ensure atomicity — all operations succeed or none do
- Always use async database drivers with FastAPI for non-blocking I/O

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Async API | asyncpg + AsyncSession | sync SQLite with asyncio |
| Queries | selectinload for collections | Eager loading everything |
| Migrations | Alembic auto-generate + review | Manual schema changes |
| Data access | Repository pattern | Raw SQL in route handlers |
| Performance | Indexes + query profiling | Ignoring slow queries |
| Relationships | Proper FK + relationship() | Manual join management |
| Transactions | Automatic commit/rollback | Manual transaction handling |

## Interview Q&A

<details class="tp-qa-card" data-qid="fastapi-s06-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q1: SQLAlchemy async vs sync — when to use which?</summary>
  <div class="tp-qa-answer"><p>Async SQLAlchemy with asyncpg is recommended for FastAPI applications because FastAPI is async-native. Async prevents database calls from blocking the event loop, improving concurrency. Sync SQLAlchemy works but blocks the event loop — use async for production FastAPI apps. Sync is acceptable for simple scripts or tools.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q2: What is the N+1 problem in ORMs?</summary>
  <div class="tp-qa-answer"><p>N+1 occurs when you query N parent records and each triggers an additional query for related data, totaling N+1 queries. Example: fetching 100 posts and then accessing each post's author triggers 101 queries. Solution: use eager loading (joinedload, selectinload) to fetch related data in fewer queries.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q3: How does Alembic detect schema changes?</summary>
  <div class="tp-qa-answer"><p>Alembic compares the current database state against the SQLAlchemy model metadata (Base.metadata). It detects added/removed tables, columns, indexes, and foreign keys. Auto-generated migrations should always be reviewed — Alembic may miss complex changes like rename operations or data migrations.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q4: What is the repository pattern and why use it?</summary>
  <div class="tp-qa-answer"><p>Repository pattern abstracts data access behind an interface. Benefits: separates business logic from ORM details, makes testing easier (mock repositories), enables database changes without affecting business code, and provides consistent data access patterns. Each entity typically has its own repository class.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q5: How do you handle database migrations in production?</summary>
  <div class="tp-qa-content"><p>Run migrations as part of deployment: alembic upgrade head before starting the new application version. Use zero-downtime patterns: add nullable columns first, backfill data, then add constraints. Always test migrations on staging first. Have a rollback plan (alembic downgrade).</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q6: How do you prevent SQL injection with SQLAlchemy?</summary>
  <div class="tp-qa-answer"><p>SQLAlchemy ORM queries are automatically parameterized — no SQL injection risk when using the ORM or SQLAlchemy Core with bind parameters. Only use text() for raw SQL and always pass parameters as bind arguments: text("SELECT * FROM users WHERE id = :id").bindparams(id=user_id). Never use string formatting with raw SQL.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q7: What is the difference between flush and commit?</summary>
  <div class="tp-qa-answer"><p>flush() synchronizes changes to the database within the current transaction — it assigns IDs and runs constraints but does NOT finalize the transaction. commit() finalizes the transaction (writes to disk). flush() is useful for getting generated IDs before commit. rollback() reverts all uncommitted changes.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q8: How do you optimize slow SQLAlchemy queries?</summary>
  <div class="tp-qa-answer"><p>Enable echo=True on engine to see queries. Use selectinload for collections, add indexes on foreign keys and WHERE columns, use limit/offset for pagination, avoid N+1 with eager loading, use raw SQL with text() for complex analytics, and profile with EXPLAIN ANALYZE.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q9: How do you model many-to-many relationships?</summary>
  <div class="tp-qa-answer"><p>Create an association table with foreign keys to both related tables. Define the relationship on both models with secondary= pointing to the association table. Example: Post and Tag with a post_tags table. Use selectinload(Post.tags) to eagerly load tags to avoid N+1.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="fastapi-s06-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span> Q10: How do you handle connection pooling in SQLAlchemy?</summary>
  <div class="tp-qa-answer"><p>Configure pool_size and max_overflow in create_engine. pool_size is the number of persistent connections, max_overflow is additional connections allowed under load. Monitor connection usage with database tools. Use pool_pre_ping=True to verify connections are alive before using them. Close sessions properly with the generator pattern.</p></div>
  <button class="tp-qa-mark-btn">&#x2705; Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">&#x1F516; Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which SQLAlchemy loading strategy prevents N+1 queries?

a) lazy
b) joinedload
c) dynamic
d) passive

<details class="tp-qa-card" data-qid="fastapi-s06-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) joinedload</strong></p></div></details>

**Q2**: What command applies Alembic migrations?

a) alembic migrate
b) alembic apply
c) alembic upgrade
d) alembic run

<details class="tp-qa-card" data-qid="fastapi-s06-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) alembic upgrade</strong></p></div></details>

**Q3**: What pattern abstracts data access behind an interface?

a) Factory
b) Singleton
c) Repository
d) Adapter

<details class="tp-qa-card" data-qid="fastapi-s06-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Repository</strong></p></div></details>

**Q4**: Which SQLAlchemy method assigns IDs without finalizing a transaction?

a) commit()
b) flush()
c) refresh()
d) save()

<details class="tp-qa-card" data-qid="fastapi-s06-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) flush()</strong></p></div></details>

**Q5**: What is the recommended async PostgreSQL driver for SQLAlchemy?

a) psycopg2
b) asyncpg
c) pg8000
d) sqlite

<details class="tp-qa-card" data-qid="fastapi-s06-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) asyncpg</strong></p></div></details>

## Exercises

**Easy** — Set up SQLAlchemy with SQLite. Define a User model with id, username, email, and created_at. Implement CRUD endpoints in FastAPI using the async pattern.

**Medium** — Create models for Blog with User, Post, and Comment. User has many Posts, Post has many Comments. Add proper relationships, foreign keys, and indexes. Implement endpoints that eager load related data.

**Medium** — Add Alembic migrations to the blog project. Create at least 3 migrations: initial schema, add a published_date column to posts, add a tags table with many-to-many relationship.

**Hard** — Implement the repository pattern for all models in the blog project. Create base repository with common methods, then specific repositories for User, Post, Comment, and Tag. Use dependency injection to provide repositories to endpoints.

**Hard** — Build a paginated search API with SQLAlchemy: implement cursor-based pagination, full-text search across posts and comments, filtering by date range and tags, and sorting by relevance or date. Optimize with proper indexes.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition
## Revision Notes

- Key concept 1: Core principle of 05-fastapi-backend
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding
## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 05-fastapi-backend. When would you choose one approach over another?
2. Design a system that efficiently handles 05-fastapi-backend at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 05-fastapi-backend. What was your approach and what was the result?
2. How would you explain 05-fastapi-backend to a non-technical stakeholder?

#### Microsoft Style
1. How does 05-fastapi-backend integrate with enterprise systems and cloud architectures?
2. What are the security implications of 05-fastapi-backend?

#### NVIDIA Style
1. How would you optimize 05-fastapi-backend for GPU-accelerated computing?
2. What parallel processing patterns apply to 05-fastapi-backend?

#### AI Startup Style
1. How would you implement 05-fastapi-backend in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 05-fastapi-backend?

### Resume Tips
- **Technical Skills**: List 05-fastapi-backend under relevant technical skills
- **Project Description**: "Implemented 05-fastapi-backend to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 05-fastapi-backend in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 05-fastapi-backend
- [ ] Practice 3-5 problems related to 05-fastapi-backend
- [ ] Prepare 2 real-world examples of using 05-fastapi-backend
- [ ] Know the time/space complexity of common 05-fastapi-backend operations
- [ ] Have questions ready about how the company uses 05-fastapi-backend> **Next**: [Async Patterns](07-async-patterns.md)
