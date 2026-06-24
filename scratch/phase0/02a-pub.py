"""Publisher for Redis Pub/Sub demo"""
import redis.asyncio as aioredis
import asyncio

async def main():
    r = await aioredis.from_url("redis://localhost:6379")
    await r.publish("pipeline:events", '{"stage": "lyrics_generated", "duration": 12.4}')
    print("Published: pipeline:events")
    await r.publish("pipeline:events", '{"stage": "embedding_done", "duration": 3.1}')
    print("Published: pipeline:events")
    await r.aclose()

asyncio.run(main())
