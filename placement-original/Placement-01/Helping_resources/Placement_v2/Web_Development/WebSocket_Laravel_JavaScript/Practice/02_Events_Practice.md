# Practice: Laravel Events

## 1. Create Event & Listener
- `php artisan make:event UserRegistered`
- `php artisan make:listener SendWelcomeEmail`

## 2. Register Listener
- Add to `EventServiceProvider`.

## 3. Fire Event
- Trigger event in controller or service.

## 4. Test
- Check if listener logic executes (e.g., email sent).
