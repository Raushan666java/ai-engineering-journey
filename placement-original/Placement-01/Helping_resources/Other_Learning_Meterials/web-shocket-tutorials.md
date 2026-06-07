# Laravel WebSocket (Reverb) Complete Tutorial

## Table of Contents
1. Introduction to WebSockets
2. Laravel Reverb Overview
3. Environment & Setup
4. Backend: Broadcasting Events
5. File Uploads & Real-Time Images
6. Frontend: Echo & Real-Time UI
7. Debugging & Troubleshooting
8. Common Issues & Solutions
9. Best Practices & Security

---

## 1. Introduction to WebSockets
- WebSockets enable real-time, two-way communication between client and server.
- Unlike HTTP, WebSockets keep a persistent connection open, allowing instant data push.
- Use cases: chat, notifications, live updates, collaborative apps.

## 2. Laravel Reverb Overview
- Laravel Reverb is Laravel's official WebSocket server.
- It integrates with Laravel's broadcasting system for real-time events.
- Works with Laravel Echo (JS client) for frontend real-time features.

## 3. Environment & Setup
### .env
```
BROADCAST_DRIVER=reverb
REVERB_APP_ID=your-app-id
REVERB_APP_KEY=your-app-key
REVERB_APP_SECRET=your-app-secret
REVERB_HOST=127.0.0.1
REVERB_PORT=6001
REVERB_SCHEME=http
```
### Install & Start
```
composer require pusher/pusher-php-server
npm install --save laravel-echo socket.io-client
php artisan reverb:start
```

## 4. Backend: Broadcasting Events
### Event Example
```php
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class MessageBroadcasted implements ShouldBroadcastNow {
    public $message;
    public function __construct($message) { $this->message = $message; }
    public function broadcastOn() { return new Channel('conversation.' . $this->message->conversation_id); }
    public function broadcastAs() { return 'MessageBroadcasted'; }
    public function broadcastWith() { return [
        'id' => $this->message->id,
        'content' => $this->message->content,
        'message_type' => $this->message->message_type,
        'file_path' => $this->message->file_path,
        'sender_id' => $this->message->sender_id,
        'created_at' => $this->message->created_at->toISOString(),
    ]; }
}
```
### Controller Logic
- Validate request, save message, handle file upload, broadcast event.

## 5. File Uploads & Real-Time Images
### File Upload (Controller/Service)
```php
$destinationPath = public_path('uploads/messages');
if (!file_exists($destinationPath)) mkdir($destinationPath, 0777, true);
$fileName = uniqid('msg_') . '_' . $file->getClientOriginalName();
$file->move($destinationPath, $fileName);
// Save 'uploads/messages/'.$fileName in DB
```
### Event Data
- Always return the relative path (e.g. `uploads/messages/filename.jpg`).

## 6. Frontend: Echo & Real-Time UI
### Echo Setup
```js
window.Echo = new window.Echo({
  broadcaster: 'reverb',
  host: window.location.hostname + ':6001',
  transports: ['websocket'],
});
```
### Listen for Events
```js
Echo.channel(`conversation.${conversationId}`)
  .listen('.MessageBroadcasted', (e) => {
    let eventData = e;
    if (typeof eventData === 'string') { try { eventData = JSON.parse(eventData); } catch {} }
    if (eventData && typeof eventData.data === 'string') { try { eventData = JSON.parse(eventData.data); } catch {} }
    // Show image
    if (eventData.message_type === 'image') {
      const imageUrl = `${baseUrl}/${eventData.file_path}`;
      // Render <img src="imageUrl">
    }
  });
```
### Sending Messages
- Use FormData for file uploads.
- On success, append message to chat.

## 7. Debugging & Troubleshooting
- Check browser console for WebSocket connection and event logs.
- Use Laravel logs (`storage/logs/laravel.log`) for backend errors.
- Use `.listen('.EventName', ...)` for public channels.
- Always use the same file path format in Blade and JS (`url($file_path)` in Blade, `${baseUrl}/${file_path}` in JS).

## 8. Common Issues & Solutions
- **Image not loading in real-time:** Use full URL, add cache-busting (`?v=${Date.now()}`) if needed.
- **File not found:** Ensure file is saved to `public/uploads/messages` and path is correct.
- **Event not received:** Check channel/event name, use dot prefix, check Reverb server.
- **Path mismatch on refresh:** Use `url($file_path)` in Blade, not `asset()`.

## 9. Best Practices & Security
- Validate file types and sizes on upload.
- Store only relative paths in DB.
- Use proper permissions for upload folders.
- For private chats, use private channels and authorize in `routes/channels.php`.
- Sanitize all user input.

---

**This tutorial covers all steps for real-time chat, file upload, and debugging with Laravel, Reverb, and Echo.**
