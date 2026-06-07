# Events in Laravel

Laravel's events provide a simple observer pattern implementation, allowing you to subscribe and listen for events in your application. Events serve as a great way to decouple various aspects of your application.

## Introduction to Events

Events in Laravel provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application. Event classes are typically stored in the `app/Events` directory, while their listeners are stored in `app/Listeners`.

## Registering Events & Listeners

### Event Service Provider

Events and listeners are registered in the `EventServiceProvider`:

```php
<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\OrderShipped;
use App\Listeners\SendShipmentNotification;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        OrderShipped::class => [
            SendShipmentNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }
    
    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
```

### Event Discovery

Laravel can automatically discover events and listeners by convention. To enable this, update the `shouldDiscoverEvents` method:

```php
/**
 * Determine if events and listeners should be automatically discovered.
 */
public function shouldDiscoverEvents(): bool
{
    return true;
}
```

With event discovery enabled, Laravel will automatically find and register events and listeners by scanning your application's `Listeners` directory. Listeners should use event class names with the `handle` method:

```php
class SendShipmentNotification
{
    /**
     * Handle the event.
     */
    public function handle(OrderShipped $event): void
    {
        // Handle the event
    }
}
```

## Generating Events & Listeners

You can use Artisan commands to generate events and listeners:

```bash
# Generate an event
php artisan make:event OrderShipped

# Generate a listener
php artisan make:listener SendShipmentNotification --event=OrderShipped

# Generate both at once
php artisan event:generate
```

## Defining Events

Events are simple classes that contain data about the event:

```php
<?php

namespace App\Events;

use App\Models\Order;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OrderShipped
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * The order instance.
     */
    public $order;

    /**
     * Create a new event instance.
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }
}
```

### Event Traits

- `Dispatchable`: Allows the event to be dispatched using the static `dispatch` method
- `InteractsWithSockets`: Used for broadcasting events
- `SerializesModels`: Serializes Eloquent models to prevent full database serialization

## Defining Listeners

Listeners handle events when they are dispatched:

```php
<?php

namespace App\Listeners;

use App\Events\OrderShipped;
use App\Services\Slack;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendShipmentNotification implements ShouldQueue
{
    use InteractsWithQueue;
    
    protected $slack;
    
    /**
     * Create the event listener.
     */
    public function __construct(Slack $slack)
    {
        $this->slack = $slack;
    }

    /**
     * Handle the event.
     */
    public function handle(OrderShipped $event): void
    {
        // Access the order using $event->order...
        $this->slack->send('An order has been shipped: ' . $event->order->id);
    }
}
```

### Queued Event Listeners

To queue a listener, implement the `ShouldQueue` interface:

```php
<?php

namespace App\Listeners;

use App\Events\OrderShipped;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendShipmentNotification implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * The time (seconds) before the job should be processed.
     */
    public $delay = 60;
    
    /**
     * The number of times the job may be attempted.
     */
    public $tries = 5;
    
    /**
     * Handle the event.
     */
    public function handle(OrderShipped $event): void
    {
        if (condition) {
            $this->release(30); // Release back to queue with delay
        }
        
        if (another_condition) {
            $this->delete(); // Delete the job
        }
        
        // Process the event...
    }
    
    /**
     * Handle a job failure.
     */
    public function failed(OrderShipped $event, $exception): void
    {
        // Handle failed job...
    }
}
```

## Dispatching Events

Events can be dispatched in several ways:

```php
<?php

namespace App\Http\Controllers;

use App\Events\OrderShipped;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Support\Facades\Event;

class OrderController extends Controller
{
    /**
     * Ship the given order.
     */
    public function ship(string $orderId): Response
    {
        $order = Order::findOrFail($orderId);
        
        // Order shipment logic...
        
        // Method 1: Using the Event facade
        Event::dispatch(new OrderShipped($order));
        
        // Method 2: Using the event's static dispatch method
        OrderShipped::dispatch($order);
        
        // Method 3: Using the global event() helper
        event(new OrderShipped($order));
        
        return response()->json(['message' => 'Order shipped']);
    }
}
```

## Event Subscribers

Event subscribers are classes that can subscribe to multiple events from within the class itself:

```php
<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Logout;

class UserEventSubscriber
{
    /**
     * Handle user login events.
     */
    public function handleUserLogin($event): void
    {
        // Handle the event...
    }

    /**
     * Handle user logout events.
     */
    public function handleUserLogout($event): void
    {
        // Handle the event...
    }

    /**
     * Register the listeners for the subscriber.
     */
    public function subscribe($events): array
    {
        return [
            Login::class => 'handleUserLogin',
            Logout::class => 'handleUserLogout',
        ];
    }
}
```

Register the subscriber in the `EventServiceProvider`:

```php
/**
 * The subscriber classes to register.
 *
 * @var array
 */
protected $subscribe = [
    \App\Listeners\UserEventSubscriber::class,
];
```

## Event Broadcasting

Event broadcasting allows your server-side Laravel events to be received by your client-side JavaScript application.

### Configuring Broadcasting

Configure broadcasting in `config/broadcasting.php`:

```php
'default' => env('BROADCAST_DRIVER', 'null'),

'connections' => [
    'pusher' => [
        'driver' => 'pusher',
        'key' => env('PUSHER_APP_KEY'),
        'secret' => env('PUSHER_APP_SECRET'),
        'app_id' => env('PUSHER_APP_ID'),
        'options' => [
            'cluster' => env('PUSHER_APP_CLUSTER'),
            'useTLS' => true,
        ],
    ],
    
    'ably' => [
        'driver' => 'ably',
        'key' => env('ABLY_KEY'),
    ],
    
    'redis' => [
        'driver' => 'redis',
        'connection' => 'default',
    ],
    
    'log' => [
        'driver' => 'log',
    ],
    
    'null' => [
        'driver' => 'null',
    ],
],
```

### Marking Events for Broadcasting

To broadcast an event, implement the `ShouldBroadcast` interface:

```php
<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ServerCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * The user that created the server.
     */
    public $user;

    /**
     * Create a new event instance.
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     */
    public function broadcastOn(): Channel
    {
        return new PrivateChannel('servers');
    }
    
    /**
     * The event's broadcast name.
     */
    public function broadcastAs(): string
    {
        return 'server.created';
    }
    
    /**
     * The data to broadcast.
     */
    public function broadcastWith(): array
    {
        return [
            'id' => $this->user->id,
            'name' => $this->user->name,
        ];
    }
}
```

### Authorizing Channels

Channel authorization is handled in the `routes/channels.php` file:

```php
use Illuminate\Support\Facades\Broadcast;
use App\Models\User;

// Public channel
Broadcast::channel('orders', function () {
    return true;
});

// Private channel
Broadcast::channel('orders.{orderId}', function (User $user, $orderId) {
    return $user->id === Order::findOrFail($orderId)->user_id;
});

// Presence channel
Broadcast::channel('chat.{roomId}', function (User $user, $roomId) {
    if ($user->canJoinRoom($roomId)) {
        return ['id' => $user->id, 'name' => $user->name];
    }
});
```

### Broadcasting to Clients

On the client side, you can listen for events using Laravel Echo:

```javascript
// Install Echo
// npm install --save laravel-echo pusher-js

// Initialize Echo
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});

// Listen for events on a public channel
window.Echo.channel('orders')
    .listen('OrderShipped', (e) => {
        console.log(e.order);
    });

// Listen for events on a private channel
window.Echo.private('orders.' + orderId)
    .listen('OrderShipped', (e) => {
        console.log(e.order);
    });

// Join a presence channel
window.Echo.join('chat.' + roomId)
    .here((users) => {
        // Users currently in the channel
    })
    .joining((user) => {
        // User joined the channel
    })
    .leaving((user) => {
        // User left the channel
    })
    .listen('NewMessage', (e) => {
        // New message received
    });
```

## Testing Events

### Fake Events

You can fake events in your tests to verify that certain events are dispatched:

```php
<?php

namespace Tests\Feature;

use App\Events\OrderShipped;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class OrderTest extends TestCase
{
    public function test_orders_can_be_shipped()
    {
        Event::fake();

        // Perform order shipping...
        $response = $this->post('/orders/1/ship');

        // Assert an event was dispatched...
        Event::assertDispatched(OrderShipped::class);

        // Assert an event was dispatched with specific data...
        Event::assertDispatched(OrderShipped::class, function ($event) {
            return $event->order->id === 1;
        });

        // Assert an event was dispatched twice...
        Event::assertDispatched(OrderShipped::class, 2);

        // Assert an event was not dispatched...
        Event::assertNotDispatched(OrderCancelled::class);
        
        // Assert nothing was dispatched...
        Event::assertNothingDispatched();
    }
}
```

### Fake Specific Events

```php
// Fake specific events
Event::fake([
    OrderShipped::class,
]);

// Fake all events except
Event::fake()->except([
    OrderShipped::class,
]);
```

### Faking and Allowing Events to Dispatch

```php
Event::fake([
    OrderShipped::class,
]);

// Dispatch events as normal
Event::dispatch(new OrderShipped($order));

// Assert events were dispatched
Event::assertDispatched(OrderShipped::class);
```

## Best Practices

1. **Keep events focused**: Each event should represent a single action or state change
2. **Use descriptive names**: Name events in past tense (e.g., `OrderShipped`, `UserRegistered`)
3. **Separate concerns**: Use events to decouple different parts of your application
4. **Consider queueing**: Queue listeners for performance-intensive operations
5. **Handle failures**: Implement proper error handling in listeners
6. **Test thoroughly**: Write tests to ensure events are dispatched and handled correctly
7. **Use event discovery**: Enable event discovery for simpler registration
8. **Document events**: Document the purpose and data structure of your events
9. **Be mindful of serialization**: Be careful with what data you include in events
10. **Consider broadcasting**: Use broadcasting for real-time features

## Common Use Cases

### User Registration

```php
// Event
class UserRegistered
{
    use Dispatchable, SerializesModels;

    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
}

// Listeners
class SendWelcomeEmail
{
    public function handle(UserRegistered $event)
    {
        Mail::to($event->user->email)->send(new WelcomeEmail($event->user));
    }
}

class SetupUserProfile
{
    public function handle(UserRegistered $event)
    {
        Profile::create(['user_id' => $event->user->id]);
    }
}

// Dispatching
UserRegistered::dispatch($user);
```

### Order Processing

```php
// Events
class OrderCreated { /* ... */ }
class OrderPaid { /* ... */ }
class OrderShipped { /* ... */ }

// Listeners
class ProcessPayment
{
    public function handle(OrderCreated $event)
    {
        // Process payment
        if ($payment->successful) {
            OrderPaid::dispatch($event->order);
        }
    }
}

class UpdateInventory
{
    public function handle(OrderPaid $event)
    {
        // Update inventory
    }
}

class SendShipmentNotification
{
    public function handle(OrderShipped $event)
    {
        // Send notification
    }
}
```

### Real-time Notifications

```php
// Event
class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $user;

    public function __construct(Message $message, User $user)
    {
        $this->message = $message;
        $this->user = $user;
    }

    public function broadcastOn()
    {
        return new PresenceChannel('chat.' . $this->message->room_id);
    }
}

// Dispatching
MessageSent::dispatch($message, $user);
```

## References

- [Laravel Events Documentation](https://laravel.com/docs/12.x/events)
- [Laravel Broadcasting Documentation](https://laravel.com/docs/12.x/broadcasting)
- [Laravel Echo Documentation](https://laravel.com/docs/12.x/broadcasting#receiving-broadcasts)