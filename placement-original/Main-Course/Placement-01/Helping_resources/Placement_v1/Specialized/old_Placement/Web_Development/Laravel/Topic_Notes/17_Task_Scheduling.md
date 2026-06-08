# Task Scheduling in Laravel

Laravel's task scheduler provides a clean, expressive API for scheduling tasks that would otherwise need to be configured through cron entries. The scheduler allows you to define your command schedule within Laravel itself, and only a single cron entry is needed on your server.

## Introduction to Task Scheduling

In the past, developers needed to generate a cron entry for each task they needed to schedule. However, this can be cumbersome and difficult to maintain. Laravel's command scheduler allows you to fluently and expressively define your command schedule within Laravel itself.

The scheduler is powered by the `schedule:run` Artisan command, which examines all of your scheduled tasks and determines if they need to be run based on the current time.

## Scheduling Setup

To use Laravel's task scheduler, you only need to add a single cron entry to your server:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

This cron entry will call the Laravel command scheduler every minute. When the `schedule:run` command is executed, Laravel will evaluate your scheduled tasks and run the tasks that are due.

## Defining Schedules

All scheduled tasks are defined in the `schedule` method of the `App\Console\Kernel` class:

```php
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // Schedule an Artisan command
        $schedule->command('emails:send')
                ->daily()
                ->at('13:00');

        // Schedule a job
        $schedule->job(new ProcessPodcast)
                ->everyTwoHours();

        // Schedule a shell command
        $schedule->exec('node /home/forge/script.js')
                ->daily();

        // Schedule an invokable class
        $schedule->call(new ProcessPodcast)
                ->hourly();

        // Schedule a closure
        $schedule->call(function () {
            DB::table('recent_users')->delete();
        })->daily();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
```

## Schedule Frequency Options

Laravel provides a variety of schedule frequency options:

```php
// Run once per minute (default)
$schedule->command('emails:send')->everyMinute();

// Run once every specified number of minutes
$schedule->command('emails:send')->everyTwoMinutes();
$schedule->command('emails:send')->everyThreeMinutes();
$schedule->command('emails:send')->everyFourMinutes();
$schedule->command('emails:send')->everyFiveMinutes();
$schedule->command('emails:send')->everyTenMinutes();
$schedule->command('emails:send')->everyFifteenMinutes();
$schedule->command('emails:send')->everyThirtyMinutes();

// Run once per hour
$schedule->command('emails:send')->hourly();

// Run once every specified number of hours
$schedule->command('emails:send')->everyTwoHours();
$schedule->command('emails:send')->everyThreeHours();
$schedule->command('emails:send')->everyFourHours();
$schedule->command('emails:send')->everySixHours();

// Run once per day
$schedule->command('emails:send')->daily();

// Run once per day at a specific time (24 hour time)
$schedule->command('emails:send')->dailyAt('13:00');

// Run once per day at specific times
$schedule->command('emails:send')->twiceDaily(1, 13);

// Run once per weekday
$schedule->command('emails:send')->weekdays();

// Run once per weekend day
$schedule->command('emails:send')->weekends();

// Run once per week
$schedule->command('emails:send')->weekly();

// Run once per week on a specific day and time
$schedule->command('emails:send')->weeklyOn(1, '8:00'); // Monday at 8:00

// Run once per month
$schedule->command('emails:send')->monthly();

// Run once per month on a specific day
$schedule->command('emails:send')->monthlyOn(4, '15:00'); // 4th day at 15:00

// Run once per quarter
$schedule->command('emails:send')->quarterly();

// Run once per year
$schedule->command('emails:send')->yearly();

// Run at specific times using cron expressions
$schedule->command('emails:send')->cron('0 * * * *'); // Run once per hour
```

## Timezone

By default, scheduled tasks will use the timezone defined in your `config/app.php` file. You can also specify a custom timezone for a specific scheduled task:

```php
$schedule->command('emails:send')
        ->dailyAt('13:00')
        ->timezone('America/New_York');
```

## Preventing Task Overlaps

By default, scheduled tasks will be run even if the previous instance of the task is still running. To prevent this, you can use the `withoutOverlapping` method:

```php
$schedule->command('emails:send')->withoutOverlapping();
```

You can also specify how many minutes the "without overlapping" lock should be held:

```php
$schedule->command('emails:send')->withoutOverlapping(10);
```

## Running Tasks on One Server

If your application runs on multiple servers, you may want to limit a scheduled task to only execute on a single server. You can use the `onOneServer` method to accomplish this:

```php
$schedule->command('emails:send')
        ->daily()
        ->onOneServer();
```

This requires your application to be using the `memcached` or `redis` cache driver, which are used to store a distributed lock.

## Background Tasks

By default, tasks are run synchronously. If you want to run a task in the background, you can use the `runInBackground` method:

```php
$schedule->command('emails:send')
        ->daily()
        ->runInBackground();
```

## Maintenance Mode

Laravel's scheduled tasks will not run when the application is in maintenance mode. If you would like to force a task to run even in maintenance mode, you can use the `evenInMaintenanceMode` method:

```php
$schedule->command('emails:send')
        ->daily()
        ->evenInMaintenanceMode();
```

## Task Output

### Sending Output to a File

You can send the output of a scheduled task to a file:

```php
$schedule->command('emails:send')
        ->daily()
        ->sendOutputTo($filePath);
```

### Appending Output to a File

You can append the output of a scheduled task to a file:

```php
$schedule->command('emails:send')
        ->daily()
        ->appendOutputTo($filePath);
```

### Sending Output via Email

You can email the output of a scheduled task:

```php
$schedule->command('emails:send')
        ->daily()
        ->sendOutputTo($filePath)
        ->emailOutputTo('admin@example.com');
```

You can also only email the output if the command fails:

```php
$schedule->command('emails:send')
        ->daily()
        ->sendOutputTo($filePath)
        ->emailOutputOnFailure('admin@example.com');
```

## Task Hooks

### Before and After Hooks

You can register callbacks to be run before and after a scheduled task is executed:

```php
$schedule->command('emails:send')
        ->daily()
        ->before(function () {
            // Task is about to start...
        })
        ->after(function () {
            // Task is complete...
        });
```

### On Success and On Failure Hooks

You can register callbacks to be run if a scheduled task succeeds or fails:

```php
$schedule->command('emails:send')
        ->daily()
        ->onSuccess(function () {
            // Task succeeded...
        })
        ->onFailure(function () {
            // Task failed...
        });
```

## Conditional Scheduling

### Truth Test Scheduling

You can schedule a task to run only when a given truth test passes:

```php
$schedule->command('emails:send')
        ->daily()
        ->when(function () {
            return true; // Run the task
        });

$schedule->command('emails:send')
        ->daily()
        ->skip(function () {
            return true; // Skip the task
        });
```

### Environment Constraints

You can schedule a task to run only on specific environments:

```php
$schedule->command('emails:send')
        ->daily()
        ->environments(['staging', 'production']);
```

### Time Constraints

You can limit the execution of a task to a specific time window:

```php
$schedule->command('emails:send')
        ->daily()
        ->between('8:00', '17:00');

$schedule->command('emails:send')
        ->daily()
        ->unlessBetween('23:00', '4:00');
```

### Day Constraints

You can limit the execution of a task to specific days:

```php
$schedule->command('emails:send')
        ->daily()
        ->days([0, 3]); // Sunday and Wednesday

$schedule->command('emails:send')
        ->daily()
        ->mondays();

$schedule->command('emails:send')
        ->daily()
        ->tuesdays();

$schedule->command('emails:send')
        ->daily()
        ->wednesdays();

$schedule->command('emails:send')
        ->daily()
        ->thursdays();

$schedule->command('emails:send')
        ->daily()
        ->fridays();

$schedule->command('emails:send')
        ->daily()
        ->saturdays();

$schedule->command('emails:send')
        ->daily()
        ->sundays();

$schedule->command('emails:send')
        ->daily()
        ->weekdays();

$schedule->command('emails:send')
        ->daily()
        ->weekends();
```

## Events

The scheduler dispatches events before and after tasks are executed:

```php
// In a service provider
use Illuminate\Console\Events\ScheduledTaskStarting;
use Illuminate\Console\Events\ScheduledTaskFinished;
use Illuminate\Console\Events\ScheduledTaskSkipped;
use Illuminate\Console\Events\ScheduledBackgroundTaskFinished;
use Illuminate\Support\Facades\Event;

Event::listen(ScheduledTaskStarting::class, function (ScheduledTaskStarting $event) {
    // Task is about to start...
});

Event::listen(ScheduledTaskFinished::class, function (ScheduledTaskFinished $event) {
    // Task is complete...
});

Event::listen(ScheduledTaskSkipped::class, function (ScheduledTaskSkipped $event) {
    // Task was skipped...
});

Event::listen(ScheduledBackgroundTaskFinished::class, function (ScheduledBackgroundTaskFinished $event) {
    // Background task is complete...
});
```

## Testing Scheduled Tasks

Laravel provides a convenient way to test your scheduled tasks:

```php
use Illuminate\Support\Facades\Schedule;

// Test if a task is scheduled
$this->assertCount(1, Schedule::dueEvents($app));

// Test if a specific command is scheduled
$this->assertTrue(Schedule::isScheduled('emails:send'));
```

## Best Practices

1. **Use descriptive command names**: Make it clear what each scheduled task does
2. **Prevent task overlaps**: Use `withoutOverlapping` for long-running tasks
3. **Handle errors gracefully**: Use try-catch blocks in your commands
4. **Log task execution**: Use the output methods to log task execution
5. **Monitor task execution**: Set up monitoring for your scheduled tasks
6. **Use task hooks**: Use before and after hooks for setup and cleanup
7. **Run tasks on one server**: Use `onOneServer` for tasks that should only run once
8. **Test your scheduled tasks**: Write tests to ensure your tasks are scheduled correctly
9. **Use conditional scheduling**: Only run tasks when necessary
10. **Document your scheduled tasks**: Keep track of what tasks are scheduled and when they run

## Common Scheduling Patterns

### Daily Backup

```php
$schedule->command('backup:run')
        ->daily()
        ->at('01:00')
        ->onOneServer()
        ->emailOutputOnFailure('admin@example.com');
```

### Weekly Report

```php
$schedule->command('reports:generate --type=weekly')
        ->weekly()
        ->mondays()
        ->at('8:00')
        ->onOneServer();
```

### Queue Worker Monitoring

```php
$schedule->command('queue:restart')
        ->hourly();

$schedule->command('queue:work --stop-when-empty')
        ->everyMinute()
        ->withoutOverlapping();
```

### Database Maintenance

```php
$schedule->command('db:backup')
        ->daily()
        ->at('01:00')
        ->onOneServer();

$schedule->command('db:clean')
        ->weekly()
        ->sundays()
        ->at('02:00')
        ->onOneServer();
```

### Cache Clearing

```php
$schedule->command('cache:clear')
        ->daily()
        ->at('00:00');
```

## References

- [Laravel Task Scheduling Documentation](https://laravel.com/docs/12.x/scheduling)
- [Laravel Artisan Console Documentation](https://laravel.com/docs/12.x/artisan)
- [Laravel Queue Documentation](https://laravel.com/docs/12.x/queues)