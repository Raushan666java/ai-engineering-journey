# Practice: Laravel Broadcasting

## 1. Setup Broadcasting
- Configure broadcasting in `config/broadcasting.php`.
- Set up Reverb or Pusher as the driver.

## 2. Create a Broadcast Event
- `php artisan make:event MessageSent`
- Add `implements ShouldBroadcast` to the event.

## 3. Listen on Client
- Install Laravel Echo and configure it in JavaScript.
- Listen for the event in your JS app.

## 4. Test
- Trigger the event and verify real-time updates in the browser.
