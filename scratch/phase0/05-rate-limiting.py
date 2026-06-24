"""Phase 0.5 — Rate limiting: token bucket (slowapi) demo"""
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi import FastAPI

limiter = Limiter(key_func=get_remote_address)

app = FastAPI(title="Rate Limiting Demo")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


@app.get("/expensive")
@limiter.limit("10/minute")
async def expensive():
    """Token bucket rate limiter — allows bursts up to bucket size.
    'slowapi' uses token bucket by default.
    """
    return {"data": "slow down, cowboy", "note": "10 requests per minute allowed"}


@app.get("/login")
@limiter.limit("5/minute")
async def login_endpoint():
    """Stricter limit for auth endpoints (sliding window would be better here)."""
    return {"data": "login endpoint", "note": "5 requests per minute"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
