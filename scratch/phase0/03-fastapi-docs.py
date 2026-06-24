"""Phase 0.3 — FastAPI + Pydantic model for OpenAPI docs demo"""
from pydantic import BaseModel, Field
from fastapi import FastAPI, status
from typing import Optional

app = FastAPI(title="RAG Demo API", version="1.0.0")


class QueryRequest(BaseModel):
    query: str = Field(
        ..., description="Natural language question",
        min_length=3, example="What is the gym membership fee?"
    )
    top_k: int = Field(
        5, description="Number of chunks to retrieve",
        ge=1, le=20, example=5
    )
    temperature: float = Field(
        0.7, description="LLM temperature",
        ge=0.0, le=2.0, example=0.7
    )
    tags: list[str] = Field(
        default_factory=list,
        description="Filter by tags",
        example=["billing", "membership"]
    )
    user_id: Optional[str] = Field(
        None, description="User ID for personalization",
        example="usr_abc123"
    )


class SourceChunk(BaseModel):
    text: str
    score: float = Field(..., ge=0.0, le=1.0)
    metadata: dict


class QueryResponse(BaseModel):
    answer: str
    sources: list[SourceChunk]


@app.post(
    "/query",
    response_model=QueryResponse,
    status_code=status.HTTP_200_OK,
    summary="Query the RAG system",
    description="Send a natural language query and get an answer with sources",
)
async def query(req: QueryRequest):
    return QueryResponse(
        answer=f"Answer for: {req.query}",
        sources=[
            SourceChunk(
                text=f"Relevant chunk about {req.query}...",
                score=0.95,
                metadata={"source": "faq.pdf", "page": 3},
            )
        ],
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
