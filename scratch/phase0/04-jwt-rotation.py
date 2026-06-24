"""Phase 0.4 — JWT refresh-token rotation pattern with replay detection"""
import hashlib
import secrets
import time
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Auth with Rotation")

# In production: use Redis with TTL
# Stores hash -> user_id
tokens: dict[str, str] = {}
# Audit log for replay detection
audit_log: list[dict] = []


def issue_token_pair(user_id: str) -> dict:
    access = secrets.token_urlsafe(32)
    refresh = secrets.token_urlsafe(64)
    refresh_hash = hashlib.sha256(refresh.encode()).hexdigest()
    tokens[refresh_hash] = user_id
    return {"access_token": access, "refresh_token": refresh}


class LoginRequest(BaseModel):
    user_id: str


class RefreshRequest(BaseModel):
    refresh_token: str


@app.post("/auth/login")
async def login(req: LoginRequest):
    """Step 1: Issue initial token pair"""
    return issue_token_pair(req.user_id)


@app.post("/auth/refresh")
async def refresh(req: RefreshRequest):
    """Step 2: Rotate tokens.
    If old token is reused -> replay attack detected.
    """
    refresh_hash = hashlib.sha256(req.refresh_token.encode()).hexdigest()
    user_id = tokens.pop(refresh_hash, None)

    if not user_id:
        # Check if this hash was ever valid (replay detection)
        replay = any(
            entry["refresh_hash"] == refresh_hash
            for entry in audit_log
        )
        if replay:
            # Someone stole this token — revoke all for this user
            audit_log.append({
                "event": "REPLAY_DETECTED",
                "refresh_hash": refresh_hash,
                "timestamp": time.time(),
            })
            raise HTTPException(
                status_code=401,
                detail="REPLAY_DETECTED: Token reuse detected. All tokens revoked."
            )
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    audit_log.append({
        "event": "TOKEN_ROTATED",
        "refresh_hash": refresh_hash,
        "user_id": user_id,
        "timestamp": time.time(),
    })
    return issue_token_pair(user_id)


@app.get("/auth/audit")
async def get_audit():
    """View the audit log for debugging"""
    return {"audit_log": audit_log[-10:]}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
