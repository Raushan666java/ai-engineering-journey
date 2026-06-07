# Practice: JavaScript Core & WebSockets

## 1. DOM Manipulation
- Create a button and handle click events.

## 2. Fetch API
- Fetch data from a public API and display it.

## 3. WebSocket
- Connect to a WebSocket server:
```js
const ws = new WebSocket('ws://localhost:6001');
ws.onmessage = (event) => console.log(event.data);
```
- Send and receive messages.
