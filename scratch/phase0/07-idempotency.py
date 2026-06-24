"""Phase 0.7 — Idempotency keys for payment/webhook endpoints"""
import hashlib
import time
from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Idempotency Demo")

# In production: Redis with 24h TTL
processed: dict[str, float] = {}
payments: list[dict] = []


class StripeEvent(BaseModel):
    event_id: str
    event_type: str
    amount: Optional[float] = None
    user_id: Optional[str] = None


@app.post("/stripe-webhook")
async def stripe_webhook(
    body: StripeEvent,
    idempotency_key: str = Header(alias="Idempotency-Key"),
):
    key_hash = hashlib.sha256(idempotency_key.encode()).hexdigest()

    # Check if already processed
    if key_hash in processed:
        return {
            "status": "already_processed",
            "original_processed_at": processed[key_hash],
        }

    # Process payment
    payments.append({
        "event_id": body.event_id,
        "event_type": body.event_type,
        "amount": body.amount,
        "user_id": body.user_id,
    })

    # Mark as processed (24h TTL in production)
    processed[key_hash] = time.time()
    return {"status": "success", "payment_id": body.event_id}


@app.get("/payments")
async def list_payments():
    return {"payments": payments, "processed_keys": len(processed)}


@app.post("/simulate/webhook-no-idempotency")
async def simulate_no_idempotency(body: StripeEvent):
    """Simulate what happens WITHOUT idempotency — double processing"""
    # No check — always processes (BAD!)
    payments.append({
        "event_id": body.event_id,
        "event_type": body.event_type,
        "amount": body.amount,
        "user_id": body.user_id,
    })
    return {"status": "processed"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)
