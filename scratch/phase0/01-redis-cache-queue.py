"""Phase 0.1 — Redis as cache vs Redis as queue/broker"""
import time
from redis import Redis
from rq import Queue

r = Redis()

# === Cache demo: SETEX with TTL ===
r.setex("demo_key", 60, "cached_value")
print(f"From cache: {r.get('demo_key')}")

# Verify TTL is set
ttl = r.ttl("demo_key")
print(f"TTL remaining: {ttl}s")

# === Queue demo: RQ with Redis broker ===
queue = Queue(connection=r)

def my_job(name):
    return f"Hello, {name}"

job = queue.enqueue(my_job, "World")
print(f"\nJob ID: {job.id}")
print(f"Job enqueued, waiting for result...")

# Wait for worker to process
time.sleep(2)
print(f"Job result: {job.result}")
print(f"Job status: {job.get_status()}")
