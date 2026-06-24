"""Phase 0.8 — API versioning strategies (URL prefix)"""
from fastapi import FastAPI, APIRouter, Query
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="API Versioning Demo")

router_v1 = APIRouter(prefix="/v1")
router_v2 = APIRouter(prefix="/v2")


# Shared models
class CollectionItem(BaseModel):
    id: int
    name: str


# V1 — returns all results
@router_v1.get("/collections")
async def list_collections_v1():
    return {
        "version": "v1",
        "collections": [
            CollectionItem(id=1, name="billing"),
            CollectionItem(id=2, name="membership"),
            CollectionItem(id=3, name="faq"),
        ],
    }


# V2 — paginated results (breaking change from V1)
@router_v2.get("/collections")
async def list_collections_v2(
    page: int = Query(1, ge=1),
    per_page: int = Query(2, ge=1, le=100),
):
    all_items = [
        CollectionItem(id=1, name="billing"),
        CollectionItem(id=2, name="membership"),
        CollectionItem(id=3, name="faq"),
        CollectionItem(id=4, name="pricing"),
        CollectionItem(id=5, name="support"),
    ]
    start = (page - 1) * per_page
    end = start + per_page
    return {
        "version": "v2",
        "collections": all_items[start:end],
        "page": page,
        "per_page": per_page,
        "total": len(all_items),
    }


# V1 query — simple
@router_v1.post("/query")
async def query_v1(query: str):
    return {"answer": f"v1: Result for '{query}'", "version": "v1"}


# V2 query — with top_k and filters (breaking change)
class QueryV2(BaseModel):
    query: str
    top_k: int = 3
    filter_tags: Optional[list[str]] = None


@router_v2.post("/query")
async def query_v2(req: QueryV2):
    return {
        "answer": f"v2: Result for '{req.query}'",
        "sources": [f"chunk_{i}" for i in range(req.top_k)],
        "version": "v2",
    }


app.include_router(router_v1)
app.include_router(router_v2)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8004)
