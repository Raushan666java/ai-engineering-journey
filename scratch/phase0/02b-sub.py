"""Subscriber for Redis Pub/Sub demo"""
import redis.asyncio as aioredis
import asyncio

async def main():
    r = await aioredis.from_url("redis://localhost:6379")
    pubsub = r.pubsub()
    await pubsub.subscribe("pipeline:events")
    print("Subscribed to pipeline:events. Waiting...")
    async for message in pubsub.listen():
        if message["type"] == "message":
            print(f"Received: {message['data']}")

asyncio.run(main())
