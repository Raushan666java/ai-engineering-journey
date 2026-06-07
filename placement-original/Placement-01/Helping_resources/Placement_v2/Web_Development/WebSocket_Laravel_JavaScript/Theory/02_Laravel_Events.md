# Laravel Events

## Introduction
Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application.

## Key Topics
- Event & Listener basics
- Registering events & listeners
- Generating events & listeners
- Event discovery
- Queued event listeners
- Event subscribers
- Broadcasting events

---

## Details
- **Creating Events:** Use `php artisan make:event EventName`.
- **Listeners:** Use `php artisan make:listener ListenerName`.
- **Registering:** Register in `EventServiceProvider` or use auto-discovery.
- **Broadcasting:** Events can be broadcasted to clients using broadcasting drivers.
