# Laravel Reverb Chat System Setup Guide

## Overview
This is a complete real-time chat system implementation using Laravel Reverb and Laravel Echo. The system includes:

- Real-time messaging with text, images, and documents
- Online/offline status indicators
- Message delivery and read receipts
- Typing indicators
- File upload support
- Responsive UI with conversation list

## Backend Components

### Controllers
- `MessageController`: Handles message sending, reading, and typing status
- `ConversationController`: Manages chat conversations between users
- `UserStatusController`: Manages user online/offline status

### Models
- `Message`: Stores chat messages with relationships to users and conversations
- `Conversation`: Manages chat conversations between users
- `User`: Extended with online status and chat capabilities

### Events
- `MessageSent`: Broadcasted when a message is sent
- `MessageDelivered`: Broadcasted when a message is delivered
- `MessageRead`: Broadcasted when a message is read
- `UserTyping`: Broadcasted when a user is typing
- `UserOnlineStatusChanged`: Broadcasted when user status changes

### Routes
- `/conversations` - List all conversations (GET)
- `/conversations/{id}` - Show specific conversation (GET)
- `/messages/conversation/{id}` - Send message (POST)
- `/messages/read/{id}` - Mark messages as read (POST)
- `/messages/typing/{id}` - Send typing status (POST)
- `/status` - Update user online status (POST)

## Setup Instructions

### 1. Install Laravel Reverb
```bash
composer require laravel/reverb
php artisan reverb:install
```

### 2. Configure Environment
Add these variables to your `.env` file:
```
BROADCAST_DRIVER=reverb
REVERB_APP_ID=your-app-id
REVERB_APP_KEY=your-app-key
REVERB_APP_SECRET=your-app-secret
REVERB_HOST=127.0.0.1
REVERB_PORT=6001
REVERB_SCHEME=http
QUEUE_CONNECTION=database
```

### 3. Create Queue Tables
```bash
php artisan queue:table
php artisan migrate
```

### 4. Setup File Storage
```bash
php artisan storage:link
```

### 5. Start Services
```bash
# Terminal 1: Start Reverb server
php artisan reverb:start

# Terminal 2: Process queue jobs
php artisan queue:work

# Terminal 3: Start Laravel server
php artisan serve
```

## Frontend Components

### JavaScript Features
- Real-time message sending and receiving
- File upload with preview (images and documents)
- Typing indicators with automatic timeout
- Message status updates (sent, delivered, read)
- User online status updates
- Auto-scroll to bottom on new messages
- Responsive design for mobile and desktop

### UI Components
- Conversation list with unread counts
- Message bubbles with timestamps
- File preview before sending
- Typing indicator animation
- Online status indicators
- Day separators for messages

## File Structure

```
resources/views/chat/
├── conversations/
│   ├── index.blade.php    # Conversation list page
│   └── show.blade.php     # Chat interface page
```

## Usage

### Starting a Conversation
Conversations are created automatically when users send their first message to each other.

### Sending Messages
1. Type text message and press Enter or click Send
2. Use attachment button to send images or documents
3. Files are uploaded and stored in `storage/app/public/uploads/messages/`

### Real-time Features
- Messages appear instantly for both users
- Typing indicators show when someone is typing
- Online status updates in real-time
- Message read receipts update automatically

## Browser Support
- Modern browsers with WebSocket support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers on iOS and Android

## Security Features
- CSRF protection on all forms
- File upload validation
- User authentication required
- Private channels for conversations
- XSS protection with HTML escaping

## Customization

### Styling
The chat interface uses Bootstrap 5 with custom CSS. You can modify the styles in the `@push('styles')` section of the Blade templates.

### Adding Features
- Extend the `Message` model to add more message types
- Add emoji support by including an emoji picker library
- Implement message deletion or editing
- Add voice message support
- Create group chat functionality

## Troubleshooting

### Common Issues
1. **Messages not appearing in real-time**
   - Check if Reverb server is running
   - Verify queue worker is processing jobs
   - Check browser console for WebSocket errors

2. **File uploads not working**
   - Ensure storage link is created
   - Check file permissions on storage directory
   - Verify file size limits in php.ini

3. **Typing indicators not working**
   - Check WebSocket connection
   - Verify CSRF token is being sent
   - Check network requests in browser dev tools

### Debug Mode
Enable debug mode in `.env`:
```
APP_DEBUG=true
```

Check logs in `storage/logs/laravel.log` for detailed error information.

## Performance Considerations

### Database Optimization
- Index conversation participants
- Paginate message history
- Archive old conversations
- Use database cleanup jobs

### Caching
- Cache user online status
- Cache conversation lists
- Use Redis for session storage

### Scaling
- Use Redis for broadcasting driver in production
- Implement horizontal scaling for Reverb
- Use CDN for file uploads
- Consider message archiving strategy

## Production Deployment

### SSL Configuration
For production, update the Echo configuration to use WSS:
```javascript
window.Echo = new window.Echo({
    broadcaster: 'reverb',
    key: null,
    host: 'your-domain.com:6001',
    forceTLS: true,
    transports: ['websocket'],
});
```

### Environment Variables
```
REVERB_SCHEME=https
REVERB_HOST=your-domain.com
REVERB_PORT=6001
```

### Server Requirements
- WebSocket support
- SSL certificate
- Process manager (Supervisor) for queue workers
- Redis for caching and sessions
