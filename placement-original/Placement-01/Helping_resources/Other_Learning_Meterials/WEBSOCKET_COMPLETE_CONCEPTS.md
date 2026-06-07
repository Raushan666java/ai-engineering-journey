# WebSocket Complete Concepts - All Related Technologies

## Table of Contents
1. [WebSocket Fundamentals](#1-websocket-fundamentals)
2. [Laravel Broadcasting System](#2-laravel-broadcasting-system)
3. [Laravel Reverb Server](#3-laravel-reverb-server)
4. [Laravel Echo Client](#4-laravel-echo-client)
5. [Pusher Protocol](#5-pusher-protocol)
6. [Socket.IO vs WebSocket](#6-socketio-vs-websocket)
7. [Real-time Communication Patterns](#7-real-time-communication-patterns)
8. [Event-Driven Architecture](#8-event-driven-architecture)
9. [Channel Types & Authorization](#9-channel-types--authorization)
10. [Message Queuing & Broadcasting](#10-message-queuing--broadcasting)
11. [Scaling & Load Balancing](#11-scaling--load-balancing)
12. [Security & Authentication](#12-security--authentication)
13. [Performance & Optimization](#13-performance--optimization)
14. [Alternative Technologies](#14-alternative-technologies)
15. [Production Deployment](#15-production-deployment)

---

## 1. WebSocket Fundamentals

### 1.1 What is WebSocket Protocol?
```
HTTP (Request-Response):
Client ──Request──> Server
Client <──Response── Server
Connection Closed ❌

WebSocket (Persistent Connection):
Client ══Handshake══> Server
Client <══════════════ Server (Bidirectional)
Connection Open ✅ (Until closed)
```

### 1.2 WebSocket Handshake Process
```http
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

### 1.3 WebSocket Frame Structure
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|     Extended payload length continued, if payload len == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |Masking-key, if MASK set to 1  |
+-------------------------------+-------------------------------+
| Masking-key (continued)       |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+
```

### 1.4 WebSocket States
```javascript
const WebSocket = {
    CONNECTING: 0, // Connection not yet open
    OPEN: 1,       // Connection open and ready
    CLOSING: 2,    // Connection in process of closing
    CLOSED: 3      // Connection closed or couldn't open
};

// Usage
const ws = new WebSocket('ws://localhost:6001');
console.log(ws.readyState); // 0 (CONNECTING)

ws.onopen = () => console.log(ws.readyState); // 1 (OPEN)
ws.onclose = () => console.log(ws.readyState); // 3 (CLOSED)
```

---

## 2. Laravel Broadcasting System

### 2.1 Broadcasting Architecture
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Laravel   │    │   Queue     │    │ Broadcast   │    │   Client    │
│   Event     │───>│   System    │───>│   Driver    │───>│   (Echo)    │
│             │    │             │    │  (Reverb)   │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 2.2 Broadcasting Drivers
```php
// config/broadcasting.php
'connections' => [
    'pusher' => [
        'driver' => 'pusher',
        'key' => env('PUSHER_APP_KEY'),
        'secret' => env('PUSHER_APP_SECRET'),
        'app_id' => env('PUSHER_APP_ID'),
    ],
    
    'reverb' => [
        'driver' => 'reverb',
        'key' => env('REVERB_APP_KEY'),
        'secret' => env('REVERB_APP_SECRET'),
        'app_id' => env('REVERB_APP_ID'),
    ],
    
    'redis' => [
        'driver' => 'redis',
        'connection' => 'default',
    ],
    
    'log' => [
        'driver' => 'log',
    ],
]
```

### 2.3 Event Broadcasting Interfaces
```php
// Immediate Broadcasting
interface ShouldBroadcastNow
{
    public function broadcastOn();
    public function broadcastWith();
    public function broadcastAs();
}

// Queued Broadcasting
interface ShouldBroadcast
{
    public function broadcastOn();
    public function broadcastWith();
    public function broadcastAs();
    public function broadcastQueue();
}

// Example Implementation
class MessageSent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    
    public $message;
    
    public function broadcastOn()
    {
        return new Channel('chat.' . $this->message->room_id);
    }
    
    public function broadcastWith()
    {
        return [
            'id' => $this->message->id,
            'text' => $this->message->text,
            'user' => $this->message->user->name,
            'timestamp' => $this->message->created_at->toISOString(),
        ];
    }
    
    public function broadcastAs()
    {
        return 'message.sent';
    }
}
```

---

## 3. Laravel Reverb Server

### 3.1 Reverb Architecture
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Laravel   │    │   Reverb    │    │   Client    │
│   App       │    │   Server    │    │  Browser    │
│             │    │             │    │             │
│ broadcast() │───>│ Port 6001   │<──>│ WebSocket   │
│             │    │ WebSocket   │    │ Connection  │
│             │    │ Server      │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 3.2 Reverb Configuration
```php
// config/reverb.php
return [
    'default' => env('REVERB_SERVER', 'reverb'),
    
    'servers' => [
        'reverb' => [
            'host' => env('REVERB_HOST', '0.0.0.0'),
            'port' => env('REVERB_PORT', 8080),
            'hostname' => env('REVERB_HOSTNAME'),
            'options' => [
                'tls' => [],
            ],
            'max_request_size' => env('REVERB_MAX_REQUEST_SIZE', 10_000),
            'scaling' => [
                'enabled' => env('REVERB_SCALING_ENABLED', false),
                'channel' => env('REVERB_SCALING_CHANNEL', 'reverb'),
                'server' => [
                    'url' => env('REDIS_URL'),
                    'host' => env('REDIS_HOST', '127.0.0.1'),
                    'port' => env('REDIS_PORT', '6379'),
                ],
            ],
            'pulse' => [
                'enabled' => env('REVERB_PULSE_ENABLED', true),
                'interval' => env('REVERB_PULSE_INTERVAL', 60),
            ],
        ],
    ],
    
    'apps' => [
        'provider' => 'config',
        'apps' => [
            [
                'id' => env('REVERB_APP_ID'),
                'key' => env('REVERB_APP_KEY'),
                'secret' => env('REVERB_APP_SECRET'),
                'capacity' => null,
                'allowed_origins' => ['*'],
                'ping_interval' => env('REVERB_PING_INTERVAL', 30),
                'activity_timeout' => env('REVERB_ACTIVITY_TIMEOUT', 30),
            ],
        ],
    ],
];
```

### 3.3 Reverb Commands
```bash
# Start Reverb server
php artisan reverb:start

# Start with debug output
php artisan reverb:start --debug

# Start on specific host/port
php artisan reverb:start --host=0.0.0.0 --port=6001

# Install Reverb
php artisan reverb:install

# Restart Reverb (if running as daemon)
php artisan reverb:restart
```

---

## 4. Laravel Echo Client

### 4.1 Echo Architecture
```javascript
// Echo Client Structure
window.Echo = new Echo({
    broadcaster: 'reverb',           // Driver type
    key: 'app-key',                 // App authentication
    host: 'localhost:6001',         // Reverb server
    transports: ['websocket'],      // Transport method
    auth: {                         // Authentication
        headers: {
            'Authorization': 'Bearer token'
        }
    }
});
```

### 4.2 Echo Channel Types
```javascript
// Public Channel (No authentication)
Echo.channel('public-channel')
    .listen('EventName', (e) => {
        console.log(e);
    });

// Private Channel (Requires authentication)
Echo.private('private-channel')
    .listen('EventName', (e) => {
        console.log(e);
    });

// Presence Channel (User tracking)
Echo.join('presence-channel')
    .here((users) => {
        console.log('Users currently in channel:', users);
    })
    .joining((user) => {
        console.log('User joined:', user);
    })
    .leaving((user) => {
        console.log('User left:', user);
    })
    .listen('EventName', (e) => {
        console.log(e);
    });
```

### 4.3 Echo Event Handling
```javascript
// Listen for specific events
Echo.channel('chat')
    .listen('.MessageSent', (e) => {
        console.log('Message:', e.message);
    })
    .listen('.UserTyping', (e) => {
        console.log('User typing:', e.user);
    })
    .listen('.UserStoppedTyping', (e) => {
        console.log('User stopped typing:', e.user);
    });

// Listen for all events on channel
Echo.channel('chat')
    .listenForWhisper('typing', (e) => {
        console.log('Whisper event:', e);
    });

// Error handling
Echo.channel('chat')
    .error((error) => {
        console.error('Channel error:', error);
    });

// Leave channel
Echo.leave('chat');
```

---

## 5. Pusher Protocol

### 5.1 Pusher Protocol Messages
```json
// Connection established
{
    "event": "pusher:connection_established",
    "data": {
        "socket_id": "123.456",
        "activity_timeout": 120
    }
}

// Subscribe to channel
{
    "event": "pusher:subscribe",
    "data": {
        "channel": "my-channel"
    }
}

// Subscription succeeded
{
    "event": "pusher_internal:subscription_succeeded",
    "channel": "my-channel",
    "data": {}
}

// Custom event
{
    "event": "my-event",
    "channel": "my-channel",
    "data": {
        "message": "Hello World"
    }
}
```

### 5.2 Pusher Authentication
```javascript
// Private channel authentication
Echo.private('private-channel')
    .listen('EventName', (e) => {
        // Automatically sends auth request to /broadcasting/auth
    });

// Custom auth endpoint
window.Echo = new Echo({
    broadcaster: 'pusher',
    authEndpoint: '/custom/broadcasting/auth',
    auth: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
    }
});
```

### 5.3 Pusher Channel States
```javascript
// Channel binding states
const channel = Echo.private('my-channel');

channel.bind('pusher:subscription_succeeded', () => {
    console.log('Successfully subscribed to channel');
});

channel.bind('pusher:subscription_error', (error) => {
    console.error('Subscription failed:', error);
});

channel.bind('pusher:member_added', (member) => {
    console.log('Member joined:', member);
});

channel.bind('pusher:member_removed', (member) => {
    console.log('Member left:', member);
});
```

---

## 6. Socket.IO vs WebSocket

### 6.1 Technology Comparison
```
┌─────────────────┬─────────────────┬─────────────────┐
│   Feature       │   WebSocket     │   Socket.IO     │
├─────────────────┼─────────────────┼─────────────────┤
│ Protocol        │ WebSocket       │ Custom Protocol │
│ Fallbacks       │ None            │ Polling, etc.   │
│ Reconnection    │ Manual          │ Automatic       │
│ Room Support    │ Manual          │ Built-in        │
│ Binary Data     │ Native          │ Supported       │
│ Size            │ Lightweight     │ Heavier         │
│ Browser Support │ Modern          │ All browsers    │
└─────────────────┴─────────────────┴─────────────────┘
```

### 6.2 WebSocket Implementation
```javascript
// Pure WebSocket
const ws = new WebSocket('ws://localhost:6001');

ws.onopen = () => {
    console.log('Connected');
    ws.send(JSON.stringify({
        event: 'message',
        data: { text: 'Hello' }
    }));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received:', data);
};

ws.onclose = () => {
    console.log('Disconnected');
    // Manual reconnection logic needed
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};
```

### 6.3 Socket.IO Implementation
```javascript
// Socket.IO
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected');
    socket.emit('message', { text: 'Hello' });
});

socket.on('message', (data) => {
    console.log('Received:', data);
});

socket.on('disconnect', () => {
    console.log('Disconnected');
    // Automatic reconnection handled
});

socket.on('error', (error) => {
    console.error('Socket.IO error:', error);
});

// Room support
socket.join('room1');
socket.to('room1').emit('message', { text: 'Hello room' });
```

---

## 7. Real-time Communication Patterns

### 7.1 Communication Patterns
```
1. Request-Response Pattern:
   Client ──Request──> Server
   Client <──Response── Server

2. Publish-Subscribe Pattern:
   Publisher ──Message──> Broker ──Message──> Subscriber

3. Observer Pattern:
   Subject ──Notify──> Observer1
           ──Notify──> Observer2
           ──Notify──> Observer3

4. Event-Driven Pattern:
   Event Source ──Event──> Event Handler
```

### 7.2 Broadcasting Patterns
```php
// 1. Broadcast to All
broadcast(new MessageSent($message));

// 2. Broadcast to Others (exclude sender)
broadcast(new MessageSent($message))->toOthers();

// 3. Broadcast to Specific Users
broadcast(new MessageSent($message))->to($user);

// 4. Broadcast to Channel
broadcast(new MessageSent($message))->on('channel-name');

// 5. Conditional Broadcasting
class MessageSent implements ShouldBroadcast
{
    public function broadcastWhen()
    {
        return $this->message->is_public;
    }
}
```

### 7.3 Message Delivery Patterns
```javascript
// 1. Fire and Forget
socket.emit('message', data);

// 2. Request-Response
socket.emit('message', data, (response) => {
    console.log('Server response:', response);
});

// 3. Acknowledgment
socket.emit('message', data);
socket.on('message-received', (ack) => {
    console.log('Message delivered');
});

// 4. Retry Pattern
function sendWithRetry(data, maxRetries = 3) {
    let retries = 0;
    
    function send() {
        socket.emit('message', data, (response) => {
            if (response.success) {
                console.log('Message sent successfully');
            } else if (retries < maxRetries) {
                retries++;
                setTimeout(send, 1000 * retries);
            } else {
                console.error('Failed to send after retries');
            }
        });
    }
    
    send();
}
```

---

## 8. Event-Driven Architecture

### 8.1 Event Flow
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Action    │    │    Event    │    │  Listener   │    │   Response  │
│             │───>│             │───>│             │───>│             │
│ User sends  │    │ MessageSent │    │ Broadcast   │    │ Real-time   │
│ message     │    │ event       │    │ to channel  │    │ update      │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 8.2 Event Listeners
```php
// Event Service Provider
class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        MessageSent::class => [
            SendMessageNotification::class,
            UpdateConversationTimestamp::class,
            LogMessageActivity::class,
        ],
        
        UserOnline::class => [
            BroadcastUserStatus::class,
            UpdateLastSeen::class,
        ],
    ];
}

// Event Listener
class SendMessageNotification
{
    public function handle(MessageSent $event)
    {
        $message = $event->message;
        $recipient = $message->conversation->otherUser($message->sender);
        
        // Send push notification
        $recipient->notify(new NewMessageNotification($message));
        
        // Send email if user is offline
        if (!$recipient->is_online) {
            Mail::to($recipient)->send(new NewMessageMail($message));
        }
    }
}
```

### 8.3 Event Sourcing Pattern
```php
// Event Store
class EventStore
{
    public function append(string $streamId, array $events)
    {
        foreach ($events as $event) {
            DB::table('event_store')->insert([
                'stream_id' => $streamId,
                'event_type' => get_class($event),
                'event_data' => json_encode($event),
                'version' => $this->getNextVersion($streamId),
                'created_at' => now(),
            ]);
        }
    }
    
    public function getEvents(string $streamId): Collection
    {
        return DB::table('event_store')
            ->where('stream_id', $streamId)
            ->orderBy('version')
            ->get()
            ->map(function ($row) {
                return unserialize($row->event_data);
            });
    }
}

// Aggregate Root
class Conversation
{
    private array $events = [];
    
    public function sendMessage(User $sender, string $content)
    {
        $message = new Message([
            'sender_id' => $sender->id,
            'content' => $content,
            'conversation_id' => $this->id,
        ]);
        
        $this->events[] = new MessageSent($message);
        
        return $message;
    }
    
    public function getUncommittedEvents(): array
    {
        return $this->events;
    }
    
    public function markEventsAsCommitted()
    {
        $this->events = [];
    }
}
```

---

## 9. Channel Types & Authorization

### 9.1 Channel Types
```php
// Public Channel - No authentication required
class PublicEvent implements ShouldBroadcast
{
    public function broadcastOn()
    {
        return new Channel('public-updates');
    }
}

// Private Channel - Authentication required
class PrivateEvent implements ShouldBroadcast
{
    public function broadcastOn()
    {
        return new PrivateChannel('user.' . $this->userId);
    }
}

// Presence Channel - User tracking
class PresenceEvent implements ShouldBroadcast
{
    public function broadcastOn()
    {
        return new PresenceChannel('chat-room.' . $this->roomId);
    }
}
```

### 9.2 Channel Authorization
```php
// routes/channels.php

// Private channel authorization
Broadcast::channel('user.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

// Conversation authorization
Broadcast::channel('conversation.{conversationId}', function ($user, $conversationId) {
    return Conversation::where('id', $conversationId)
        ->where(function ($query) use ($user) {
            $query->where('user1_id', $user->id)
                  ->orWhere('user2_id', $user->id);
        })
        ->exists();
});

// Presence channel with user info
Broadcast::channel('chat-room.{roomId}', function ($user, $roomId) {
    if ($user->canAccessRoom($roomId)) {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'avatar' => $user->avatar_url,
        ];
    }
});

// Role-based authorization
Broadcast::channel('admin-panel', function ($user) {
    return $user->hasRole('admin') ? $user->only('id', 'name') : false;
});
```

### 9.3 Custom Channel Classes
```php
// Custom Channel Class
class ConversationChannel extends PrivateChannel
{
    public function __construct($conversationId)
    {
        parent::__construct('conversation.' . $conversationId);
    }
}

// Usage in Event
class MessageSent implements ShouldBroadcast
{
    public function broadcastOn()
    {
        return new ConversationChannel($this->message->conversation_id);
    }
}
```

---

## 10. Message Queuing & Broadcasting

### 10.1 Queue Configuration
```php
// config/queue.php
'connections' => [
    'database' => [
        'driver' => 'database',
        'table' => 'jobs',
        'queue' => 'default',
        'retry_after' => 90,
    ],
    
    'redis' => [
        'driver' => 'redis',
        'connection' => 'default',
        'queue' => env('REDIS_QUEUE', 'default'),
        'retry_after' => 90,
        'block_for' => null,
    ],
];
```

### 10.2 Queued Broadcasting
```php
// Immediate Broadcasting
class MessageSent implements ShouldBroadcastNow
{
    // Broadcasts immediately, blocks request
}

// Queued Broadcasting
class MessageSent implements ShouldBroadcast
{
    // Broadcasts via queue, non-blocking
    
    public function broadcastQueue()
    {
        return 'broadcasts'; // Custom queue name
    }
    
    public function broadcastConnection()
    {
        return 'redis'; // Custom connection
    }
}

// Conditional Broadcasting
class MessageSent implements ShouldBroadcast
{
    public function broadcastWhen()
    {
        return $this->message->is_public && $this->message->approved;
    }
}
```

### 10.3 Queue Workers
```bash
# Start queue worker
php artisan queue:work

# Start with specific queue
php artisan queue:work --queue=broadcasts,default

# Start with memory limit
php artisan queue:work --memory=512

# Start with timeout
php artisan queue:work --timeout=60

# Restart workers
php artisan queue:restart

# Monitor failed jobs
php artisan queue:failed
php artisan queue:retry all
```

---

## 11. Scaling & Load Balancing

### 11.1 Horizontal Scaling
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Reverb    │    │   Reverb    │    │   Reverb    │
│  Server 1   │    │  Server 2   │    │  Server 3   │
│  Port 6001  │    │  Port 6002  │    │  Port 6003  │
└─────────────┘    └─────────────┘    └─────────────┘
       │                   │                   │
       └───────────────────┼───────────────────┘
                           │
                  ┌─────────────┐
                  │    Redis    │
                  │   Cluster   │
                  │ (Pub/Sub)   │
                  └─────────────┘
```

### 11.2 Redis Scaling Configuration
```php
// config/reverb.php
'scaling' => [
    'enabled' => env('REVERB_SCALING_ENABLED', true),
    'channel' => env('REVERB_SCALING_CHANNEL', 'reverb'),
    'server' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'port' => env('REDIS_PORT', '6379'),
        'password' => env('REDIS_PASSWORD'),
        'database' => env('REDIS_DB', 0),
    ],
],
```

### 11.3 Load Balancer Configuration
```nginx
# Nginx Load Balancer
upstream reverb_backend {
    server 127.0.0.1:6001;
    server 127.0.0.1:6002;
    server 127.0.0.1:6003;
}

server {
    listen 80;
    server_name websocket.example.com;
    
    location / {
        proxy_pass http://reverb_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 11.4 Clustering with Supervisor
```ini
; /etc/supervisor/conf.d/reverb.conf
[program:reverb-server-1]
command=php artisan reverb:start --host=0.0.0.0 --port=6001
directory=/var/www/html
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/var/log/reverb-1.log

[program:reverb-server-2]
command=php artisan reverb:start --host=0.0.0.0 --port=6002
directory=/var/www/html
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/var/log/reverb-2.log

[program:reverb-server-3]
command=php artisan reverb:start --host=0.0.0.0 --port=6003
directory=/var/www/html
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/var/log/reverb-3.log
```

---

## 12. Security & Authentication

### 12.1 Authentication Methods
```php
// Token-based Authentication
class AuthenticateWebSocket
{
    public function handle($request, Closure $next)
    {
        $token = $request->header('Authorization');
        
        if (!$token || !$user = $this->validateToken($token)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        $request->setUserResolver(function () use ($user) {
            return $user;
        });
        
        return $next($request);
    }
    
    private function validateToken($token)
    {
        return User::where('api_token', str_replace('Bearer ', '', $token))->first();
    }
}
```

### 12.2 Channel Security
```php
// Secure Channel Authorization
Broadcast::channel('private-chat.{userId1}.{userId2}', function ($user, $userId1, $userId2) {
    // Ensure user is part of the conversation
    $userIds = [(int) $userId1, (int) $userId2];
    
    if (!in_array($user->id, $userIds)) {
        return false;
    }
    
    // Check if users are allowed to chat
    return $user->canChatWith($userId1 === $user->id ? $userId2 : $userId1);
});

// Rate Limited Channel
Broadcast::channel('high-frequency.{id}', function ($user, $id) {
    $key = "channel_access:{$user->id}:{$id}";
    
    if (Cache::get($key, 0) > 100) { // 100 requests per minute
        return false;
    }
    
    Cache::increment($key, 1);
    Cache::expire($key, 60);
    
    return $user->id === (int) $id;
});
```

### 12.3 Message Encryption
```php
// Encrypted Message Broadcasting
class EncryptedMessageSent implements ShouldBroadcast
{
    use EncryptsData;
    
    public function broadcastWith()
    {
        return [
            'id' => $this->message->id,
            'content' => $this->encrypt($this->message->content),
            'sender_id' => $this->message->sender_id,
            'timestamp' => $this->message->created_at->toISOString(),
        ];
    }
}

// Client-side Decryption
Echo.private('encrypted-chat')
    .listen('.EncryptedMessageSent', (e) => {
        const decryptedContent = decrypt(e.content, sharedKey);
        displayMessage(decryptedContent);
    });
```

### 12.4 CORS Configuration
```php
// config/cors.php
return [
    'paths' => ['api/*', 'broadcasting/auth'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'https://yourdomain.com',
        'https://app.yourdomain.com',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

---

## 13. Performance & Optimization

### 13.1 Connection Optimization
```javascript
// Connection Pooling
class WebSocketPool {
    constructor(maxConnections = 5) {
        this.pool = [];
        this.maxConnections = maxConnections;
        this.currentIndex = 0;
    }
    
    getConnection() {
        if (this.pool.length < this.maxConnections) {
            const connection = new WebSocket('ws://localhost:6001');
            this.pool.push(connection);
            return connection;
        }
        
        // Round-robin selection
        const connection = this.pool[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.pool.length;
        return connection;
    }
}

// Lazy Connection
class LazyEcho {
    constructor(config) {
        this.config = config;
        this.echo = null;
    }
    
    getEcho() {
        if (!this.echo) {
            this.echo = new Echo(this.config);
        }
        return this.echo;
    }
    
    channel(name) {
        return this.getEcho().channel(name);
    }
}
```

### 13.2 Message Batching
```php
// Batch Broadcasting
class MessageBatch
{
    private array $messages = [];
    
    public function add(Message $message)
    {
        $this->messages[] = $message;
        
        if (count($this->messages) >= 10) {
            $this->flush();
        }
    }
    
    public function flush()
    {
        if (empty($this->messages)) {
            return;
        }
        
        broadcast(new MessagesBatchSent($this->messages));
        $this->messages = [];
    }
}

// Usage
$batch = new MessageBatch();
foreach ($messages as $message) {
    $batch->add($message);
}
$batch->flush(); // Send remaining messages
```

### 13.3 Memory Management
```php
// Memory-efficient Event
class OptimizedMessageSent implements ShouldBroadcast
{
    private int $messageId;
    
    public function __construct(int $messageId)
    {
        $this->messageId = $messageId;
    }
    
    public function broadcastWith()
    {
        // Load data only when broadcasting
        $message = Message::select('id', 'content', 'sender_id', 'created_at')
            ->with('sender:id,name')
            ->find($this->messageId);
            
        return [
            'id' => $message->id,
            'content' => $message->content,
            'sender' => $message->sender->name,
            'timestamp' => $message->created_at->toISOString(),
        ];
    }
}
```

### 13.4 Caching Strategies
```php
// Channel Caching
class CachedChannelAuthorization
{
    public function authorize($user, $channel)
    {
        $cacheKey = "channel_auth:{$user->id}:{$channel}";
        
        return Cache::remember($cacheKey, 300, function () use ($user, $channel) {
            return $this->performAuthorization($user, $channel);
        });
    }
}

// Message Caching
class MessageCache
{
    public function getRecentMessages($conversationId, $limit = 50)
    {
        $cacheKey = "messages:{$conversationId}:recent:{$limit}";
        
        return Cache::remember($cacheKey, 60, function () use ($conversationId, $limit) {
            return Message::where('conversation_id', $conversationId)
                ->latest()
                ->limit($limit)
                ->with('sender:id,name')
                ->get();
        });
    }
    
    public function invalidateConversation($conversationId)
    {
        $pattern = "messages:{$conversationId}:*";
        $keys = Cache::getRedis()->keys($pattern);
        
        if (!empty($keys)) {
            Cache::getRedis()->del($keys);
        }
    }
}
```

---

## 14. Alternative Technologies

### 14.1 Technology Comparison
```
┌─────────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│   Technology    │   Protocol  │   Scaling   │ Complexity  │   Use Case  │
├─────────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ Laravel Reverb  │ WebSocket   │ Redis       │ Low         │ Laravel Apps│
│ Pusher          │ WebSocket   │ Cloud       │ Very Low    │ Quick Setup │
│ Socket.IO       │ Custom      │ Redis       │ Medium      │ Node.js     │
│ Centrifugo      │ WebSocket   │ Built-in    │ Medium      │ Multi-lang  │
│ Apache Kafka    │ TCP         │ Partitions  │ High        │ Big Data    │
│ RabbitMQ        │ AMQP        │ Clustering  │ High        │ Enterprise  │
│ Redis Pub/Sub   │ TCP         │ Clustering  │ Low         │ Simple      │
│ Server-Sent     │ HTTP        │ Load Bal.   │ Very Low    │ One-way     │
│ WebRTC          │ P2P         │ Mesh/SFU    │ Very High   │ Real-time   │
└─────────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

### 14.2 Pusher Implementation
```javascript
// Pusher Client
import Pusher from 'pusher-js';

const pusher = new Pusher('app-key', {
    cluster: 'us2',
    encrypted: true,
    authEndpoint: '/broadcasting/auth',
    auth: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
    }
});

const channel = pusher.subscribe('private-chat.1');
channel.bind('message-sent', (data) => {
    console.log('Message received:', data);
});
```

### 14.3 Socket.IO Server
```javascript
// Socket.IO Server (Node.js)
const io = require('socket.io')(3000, {
    cors: {
        origin: "http://localhost:8000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-joined', socket.id);
    });
    
    socket.on('send-message', (data) => {
        socket.to(data.room).emit('message-received', {
            message: data.message,
            sender: socket.id,
            timestamp: new Date()
        });
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});
```

### 14.4 Server-Sent Events
```php
// Laravel SSE Controller
class SSEController extends Controller
{
    public function stream(Request $request)
    {
        return response()->stream(function () use ($request) {
            while (true) {
                // Get new data
                $data = $this->getNewData();
                
                if ($data) {
                    echo "data: " . json_encode($data) . "\n\n";
                    ob_flush();
                    flush();
                }
                
                sleep(1);
                
                // Check if client disconnected
                if (connection_aborted()) {
                    break;
                }
            }
        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache',
            'Connection' => 'keep-alive',
        ]);
    }
}
```

```javascript
// SSE Client
const eventSource = new EventSource('/sse/stream');

eventSource.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log('SSE data received:', data);
};

eventSource.onerror = function(event) {
    console.error('SSE error:', event);
};
```

---

## 15. Production Deployment

### 15.1 Docker Configuration
```dockerfile
# Dockerfile for Reverb
FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip pdo_mysql

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --optimize-autoloader

EXPOSE 6001

CMD ["php", "artisan", "reverb:start", "--host=0.0.0.0", "--port=6001"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DB_HOST=mysql
      - REDIS_HOST=redis
    depends_on:
      - mysql
      - redis
  
  reverb:
    build: .
    ports:
      - "6001:6001"
    command: php artisan reverb:start --host=0.0.0.0 --port=6001
    environment:
      - REDIS_HOST=redis
    depends_on:
      - redis
  
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: laravel
  
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
```

### 15.2 SSL/TLS Configuration
```nginx
# Nginx SSL Configuration
server {
    listen 443 ssl http2;
    server_name websocket.example.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    location / {
        proxy_pass http://127.0.0.1:6001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # WebSocket specific
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
    }
}
```

### 15.3 Process Management
```ini
# Supervisor Configuration
[program:reverb]
command=php /var/www/html/artisan reverb:start --host=0.0.0.0 --port=6001
directory=/var/www/html
autostart=true
autorestart=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/log/reverb.log
stopwaitsecs=3600

[program:queue-worker]
command=php /var/www/html/artisan queue:work --sleep=3 --tries=3 --max-time=3600
directory=/var/www/html
autostart=true
autorestart=true
user=www-data
numprocs=4
redirect_stderr=true
stdout_logfile=/var/log/queue-worker.log
```

### 15.4 Monitoring & Logging
```php
// Custom Reverb Monitor
class ReverbMonitor
{
    public function checkHealth()
    {
        try {
            $socket = @fsockopen('127.0.0.1', 6001, $errno, $errstr, 5);
            
            if ($socket) {
                fclose($socket);
                return ['status' => 'healthy', 'timestamp' => now()];
            }
            
            return ['status' => 'unhealthy', 'error' => $errstr, 'timestamp' => now()];
        } catch (Exception $e) {
            return ['status' => 'error', 'message' => $e->getMessage(), 'timestamp' => now()];
        }
    }
    
    public function getMetrics()
    {
        return [
            'active_connections' => $this->getActiveConnections(),
            'messages_per_second' => $this->getMessageRate(),
            'memory_usage' => memory_get_usage(true),
            'uptime' => $this->getUptime(),
        ];
    }
}

// Health Check Route
Route::get('/health/reverb', function () {
    $monitor = new ReverbMonitor();
    return response()->json($monitor->checkHealth());
});
```

### 15.5 Performance Monitoring
```javascript
// Client-side Performance Monitoring
class WebSocketMonitor {
    constructor() {
        this.metrics = {
            connectionTime: 0,
            messagesSent: 0,
            messagesReceived: 0,
            reconnections: 0,
            errors: 0
        };
        
        this.startTime = Date.now();
    }
    
    trackConnection() {
        this.metrics.connectionTime = Date.now() - this.startTime;
    }
    
    trackMessage(type) {
        if (type === 'sent') {
            this.metrics.messagesSent++;
        } else if (type === 'received') {
            this.metrics.messagesReceived++;
        }
    }
    
    trackReconnection() {
        this.metrics.reconnections++;
    }
    
    trackError() {
        this.metrics.errors++;
    }
    
    getMetrics() {
        return {
            ...this.metrics,
            uptime: Date.now() - this.startTime,
            messageRate: this.metrics.messagesReceived / ((Date.now() - this.startTime) / 1000)
        };
    }
    
    sendMetrics() {
        fetch('/api/websocket-metrics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.getMetrics())
        });
    }
}

// Usage
const monitor = new WebSocketMonitor();

Echo.connector.socket.on('connect', () => {
    monitor.trackConnection();
});

Echo.connector.socket.on('message', () => {
    monitor.trackMessage('received');
});

// Send metrics every 5 minutes
setInterval(() => {
    monitor.sendMetrics();
}, 300000);
```

---

## Summary

This comprehensive guide covers all WebSocket-related concepts and technologies:

### ✅ **Core Technologies Covered:**
- WebSocket Protocol & Handshake
- Laravel Broadcasting System
- Laravel Reverb Server
- Laravel Echo Client
- Pusher Protocol Implementation

### ✅ **Advanced Concepts:**
- Event-Driven Architecture
- Channel Authorization & Security
- Message Queuing & Broadcasting
- Scaling & Load Balancing
- Performance Optimization

### ✅ **Alternative Solutions:**
- Socket.IO vs WebSocket comparison
- Server-Sent Events (SSE)
- Pusher, Centrifugo, Kafka alternatives
- WebRTC for peer-to-peer communication

### ✅ **Production Ready:**
- Docker containerization
- SSL/TLS configuration
- Process management with Supervisor
- Monitoring & health checks
- Performance metrics tracking

This covers the complete ecosystem of real-time communication technologies and their implementation patterns! 🚀