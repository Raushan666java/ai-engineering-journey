"""WebSocket agent streaming simulation — demonstrates how to stream
LLM tokens, tool calls, and completion status over WebSocket.

This simulates what LangGraph's astream_events does in production.
"""
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import asyncio
import json

app = FastAPI(title="Agent Streaming Demo")


@app.websocket("/agent/run")
async def agent_stream(websocket: WebSocket):
    await websocket.accept()

    try:
        user_input = await websocket.receive_text()
        print(f"Agent received: {user_input}")

        # Simulate agent pipeline events
        # Step 1: Thinking
        await websocket.send_json({
            "type": "status",
            "content": "Analyzing your query...",
        })
        await asyncio.sleep(0.3)

        # Step 2: Tool call
        await websocket.send_json({
            "type": "tool_call",
            "tool": "search_documents",
            "arguments": json.dumps({"query": user_input, "top_k": 3}),
        })
        await asyncio.sleep(0.5)

        # Step 3: Streaming tokens
        response = f"I found information about '{user_input}'. "
        response += "Here's what you need to know based on the documents."

        for word in response.split(" "):
            await websocket.send_json({
                "type": "token",
                "content": word + " ",
            })
            await asyncio.sleep(0.05)  # Simulate LLM generation speed

        # Step 4: Done
        await websocket.send_json({
            "type": "done",
            "content": "Response complete",
        })

    except WebSocketDisconnect:
        print("Client disconnected from agent stream")
    finally:
        await websocket.close()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8006)
