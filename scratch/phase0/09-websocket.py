"""Phase 0.9 — WebSocket echo server with broadcast to all clients"""
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import asyncio
import json

app = FastAPI(title="WebSocket Demo")

# Track all connected clients
connected_clients: set[WebSocket] = set()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.add(websocket)
    print(f"Client connected. Total: {len(connected_clients)}")
    try:
        while True:
            data = await websocket.receive_text()
            # Echo back to sender
            await websocket.send_text(f"Echo: {data}")

            # Broadcast to ALL other connected clients
            for client in connected_clients:
                if client != websocket:
                    try:
                        await client.send_text(f"Broadcast from another client: {data}")
                    except Exception:
                        pass
    except WebSocketDisconnect:
        print("Client disconnected")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        connected_clients.discard(websocket)
        print(f"Client removed. Total: {len(connected_clients)}")


@app.get("/status")
async def status():
    return {
        "connected_clients": len(connected_clients),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8005)
