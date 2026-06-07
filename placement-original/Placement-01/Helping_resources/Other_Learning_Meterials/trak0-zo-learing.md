# Trekzo Ride Booking System - Complete Learning Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Architecture Pattern](#architecture-pattern)
5. [Database Design](#database-design)
6. [Authentication & Authorization](#authentication--authorization)
7. [Core Features](#core-features)
8. [API Development](#api-development)
9. [Frontend Development](#frontend-development)
10. [Development Workflow](#development-workflow)
11. [Code Organization](#code-organization)
12. [Best Practices](#best-practices)
13. [Deployment Considerations](#deployment-considerations)

---

## Project Overview

**Trekzo** is a comprehensive ride-booking platform built on Laravel 8.x framework, similar to Uber/Ola, featuring:

- Multi-role user system (Admin, Fleet Manager, Driver, Rider)
- Real-time ride tracking with GPS coordinates
- Payment gateway integration (Stripe, Razorpay, PayPal, etc.)
- Push notifications (OneSignal & FCM)
- Seat-wise and cab-wise booking modes
- Rating & review system
- Wallet management
- Multi-language support

---

## Technology Stack

### Backend Framework
```php
// Laravel 8.x with PHP 7.3|8.0|8.1
"laravel/framework": "^8.75"
```

### Key Dependencies
```json
{
  "php": "^7.3|^8.0|^8.1",
  "laravel/framework": "^8.75",
  "laravel/sanctum": "^2.15",           // API Authentication
  "spatie/laravel-permission": "^5.5",   // Role & Permissions
  "spatie/laravel-medialibrary": "^9.12", // File Management
  "grimzy/laravel-mysql-spatial": "^5.0", // GPS Coordinates
  "yajra/laravel-datatables": "^1.5",    // Data Tables
  "php-mqtt/laravel-client": "^1.0"      // Real-time Communication
}
```

### Frontend Stack
```json
{
  "bootstrap": "^4.1.3",
  "jquery": "^3.5.1",
  "datatables": "^1.10.18",
  "apexcharts": "^3.24.0",
  "select2": "^4.0.13"
}
```

---

## Project Structure

### Core Directories
```
trekzo-v1/
├── app/
│   ├── Console/Commands/          # Custom Artisan Commands
│   ├── DataTables/               # Yajra DataTables
│   ├── Http/
│   │   ├── Controllers/          # Business Logic
│   │   ├── Middleware/           # Request Filtering
│   │   ├── Requests/             # Form Validation
│   │   └── Resources/            # API Response Formatting
│   ├── Models/                   # Eloquent Models
│   ├── Notifications/            # Push Notifications
│   └── Helpers/                  # Utility Functions
├── config/                       # Configuration Files
├── database/
│   ├── migrations/               # Database Schema
│   └── seeders/                  # Test Data
├── resources/
│   ├── views/                    # Blade Templates
│   ├── js/                       # Frontend JavaScript
│   └── sass/                     # CSS Styles
└── routes/                       # Route Definitions
```

---

## Architecture Pattern

### MVC (Model-View-Controller)

#### 1. Models (Data Layer)
```php
// Example: User Model
class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasRoles, InteractsWithMedia;
    
    protected $fillable = [
        'first_name', 'last_name', 'email', 'contact_number'
    ];
    
    // Relationships
    public function userDetail() {
        return $this->hasOne(UserDetail::class);
    }
    
    public function service() {
        return $this->belongsTo(Service::class);
    }
    
    // Scopes for filtering
    public function scopeGetUser($query, $user_type=null) {
        return $query->where('user_type', $user_type);
    }
}
```

#### 2. Controllers (Business Logic)
```php
// Example: ServiceController
class ServiceController extends Controller
{
    public function store(ServiceRequest $request)
    {
        $data = $request->validated();
        
        $service = Service::create($data);
        
        if ($request->has('seats_data')) {
            $this->processSeatConfiguration($service, $request->seats_data);
        }
        
        return response()->json(['message' => 'Service created successfully']);
    }
    
    private function processSeatConfiguration($service, $seatsData)
    {
        foreach ($seatsData as $seatData) {
            $service->seats()->create([
                'row_number' => $seatData['row'],
                'seat_number' => $seatData['number'],
                'pricing' => json_encode($seatData['pricing'])
            ]);
        }
    }
}
```

#### 3. Views (Presentation Layer)
```blade
{{-- Example: Blade Template --}}
@extends('layouts.master')

@section('content')
<div class="container">
    <h1>Services Management</h1>
    
    @include('services.form')
    
    {{ $dataTable->table() }}
</div>
@endsection

@push('scripts')
{{ $dataTable->scripts() }}
@endpush
```

---

## Database Design

### Key Tables & Relationships

#### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    user_type ENUM('admin', 'driver', 'rider', 'fleet'),
    fleet_id BIGINT NULL,
    service_id BIGINT NULL,
    latitude DECIMAL(10, 8) NULL,
    longitude DECIMAL(11, 8) NULL,
    is_online BOOLEAN DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active'
);
```

#### Services Table (Transportation Services)
```sql
CREATE TABLE services (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    capacity INTEGER NOT NULL,
    per_km_charges DECIMAL(8,2),
    base_fare DECIMAL(8,2),
    booking_mode ENUM('cab_wise', 'seat_wise') DEFAULT 'cab_wise',
    status ENUM('active', 'inactive') DEFAULT 'active'
);
```

#### Seats Table (For Seat-wise Booking)
```sql
CREATE TABLE seats (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    service_id BIGINT,
    row_number INTEGER,
    seat_number VARCHAR(10),
    status ENUM('available', 'booked', 'blocked') DEFAULT 'available',
    pricing JSON, -- {"base_fare": 100, "per_km": 5}
    FOREIGN KEY (service_id) REFERENCES services(id)
);
```

#### Ride Requests Table
```sql
CREATE TABLE ride_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    rider_id BIGINT,
    driver_id BIGINT NULL,
    service_id BIGINT,
    start_latitude DECIMAL(10, 8),
    start_longitude DECIMAL(11, 8),
    end_latitude DECIMAL(10, 8),
    end_longitude DECIMAL(11, 8),
    status ENUM('new_ride_requested', 'accepted', 'in_progress', 'completed', 'canceled'),
    total_amount DECIMAL(8,2),
    payment_status ENUM('pending', 'paid', 'failed')
);
```

### Spatial Data Support
```php
// Using grimzy/laravel-mysql-spatial for GPS coordinates
use Grimzy\LaravelMysqlSpatial\Eloquent\SpatialTrait;

class RideRequest extends Model
{
    use SpatialTrait;
    
    protected $spatialFields = [
        'start_point',
        'end_point'
    ];
}
```

---

## Authentication & Authorization

### 1. Multi-Authentication System
```php
// config/auth.php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
    'api' => [
        'driver' => 'sanctum',
        'provider' => 'users',
    ],
];
```

### 2. Role-Based Access Control (Spatie)
```php
// Roles & Permissions
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles;
}

// Assign roles
$user->assignRole('driver');
$user->assignRole(['fleet', 'admin']);

// Check permissions
if ($user->hasRole('admin')) {
    // Admin-specific logic
}
```

### 3. API Authentication (Laravel Sanctum)
```php
// API Routes protection
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::apiResource('services', ServiceController::class);
});

// Token generation for mobile apps
$token = $user->createToken('mobile-app')->plainTextToken;
```

---

## Core Features

### 1. Service Management (Seat-wise vs Cab-wise)

#### Service Model
```php
class Service extends Model
{
    protected $fillable = [
        'name', 'capacity', 'per_km_charges', 'base_fare', 'booking_mode'
    ];
    
    // Relationship with seats for seat-wise booking
    public function seats()
    {
        return $this->hasMany(Seat::class);
    }
    
    // Get available seats count
    public function getAvailableSeatsAttribute()
    {
        return $this->seats()->where('status', 'available')->count();
    }
    
    // Filter by booking mode
    public function scopeSeatWise($query)
    {
        return $query->where('booking_mode', 'seat_wise');
    }
}
```

#### Seat Model
```php
class Seat extends Model
{
    protected $fillable = [
        'service_id', 'row_number', 'seat_number', 'status', 'pricing'
    ];
    
    protected $casts = [
        'pricing' => 'array'
    ];
    
    // Check if seat has custom pricing
    public function hasPricing()
    {
        return !empty($this->pricing);
    }
    
    // Scopes for different seat statuses
    public function scopeAvailable($query)
    {
        return $query->where('status', 'available');
    }
}
```

### 2. Real-time Location Tracking

#### Driver Location Updates
```php
class LocationController extends Controller
{
    public function updateLocation(Request $request)
    {
        $driver = auth()->user();
        
        $driver->update([
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'last_location_update_at' => now()
        ]);
        
        // Broadcast to nearby riders via MQTT
        $this->broadcastLocationUpdate($driver);
    }
}
```

### 3. Payment Integration

#### Multiple Payment Gateways
```php
// config/constant.php
'PAYMENT_GATEWAY_SETTING' => [
    'stripe' => [ 'secret_key', 'publishable_key' ],
    'razorpay' => [ 'key_id', 'secret_id' ],
    'paystack' => [ 'public_key' ],
    'paypal' => [ 'tokenization_key' ],
]
```

#### Payment Processing
```php
class PaymentController extends Controller
{
    public function processPayment(Request $request)
    {
        $paymentGateway = $request->payment_method;
        
        switch ($paymentGateway) {
            case 'stripe':
                return $this->processStripePayment($request);
            case 'razorpay':
                return $this->processRazorpayPayment($request);
            default:
                throw new Exception('Unsupported payment gateway');
        }
    }
}
```

### 4. Notification System

#### Push Notifications (OneSignal & FCM)
```php
class RideNotification extends Notification
{
    use Queueable;
    
    public function via($notifiable)
    {
        return ['database', OneSignalChannel::class, FcmChannel::class];
    }
    
    public function toOneSignal($notifiable)
    {
        return OneSignalMessage::create()
            ->setSubject('New Ride Request')
            ->setBody('You have a new ride request');
    }
}
```

---

## API Development

### 1. RESTful API Structure
```php
// routes/api.php
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    Route::apiResource('services', Api\ServiceController::class);
    Route::post('rides/estimate', [Api\RideController::class, 'estimate']);
    Route::post('rides/book', [Api\RideController::class, 'book']);
});
```

### 2. API Resources (Response Formatting)
```php
class ServiceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'capacity' => $this->capacity,
            'base_fare' => $this->base_fare,
            'per_km_charges' => $this->per_km_charges,
            'booking_mode' => $this->booking_mode,
            'available_seats' => $this->when(
                $this->booking_mode === 'seat_wise',
                $this->available_seats
            ),
            'seats' => $this->when(
                $this->booking_mode === 'seat_wise',
                SeatResource::collection($this->seats)
            ),
        ];
    }
}
```

### 3. Request Validation
```php
class ServiceRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'booking_mode' => 'required|in:cab_wise,seat_wise',
            'seats_data' => 'required_if:booking_mode,seat_wise|array',
            'seats_data.*.row' => 'required_with:seats_data|integer',
            'seats_data.*.number' => 'required_with:seats_data|string',
            'seats_data.*.pricing' => 'nullable|array'
        ];
    }
}
```

---

## Frontend Development

### 1. Blade Templates with Components
```blade
{{-- layouts/master.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title', 'Trekzo Admin')</title>
    <link href="{{ asset('css/backend-bundle.min.css') }}" rel="stylesheet">
</head>
<body>
    @include('partials.sidebar')
    
    <div class="main-content">
        @yield('content')
    </div>
    
    <script src="{{ asset('js/backend-bundle.min.js') }}"></script>
    @stack('scripts')
</body>
</html>
```

### 2. DataTables Integration
```php
// DataTables for listing with server-side processing
class ServiceDataTable extends DataTable
{
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->addColumn('action', 'services.action')
            ->editColumn('status', function ($service) {
                return $service->status === 'active' 
                    ? '<span class="badge badge-success">Active</span>'
                    : '<span class="badge badge-danger">Inactive</span>';
            })
            ->rawColumns(['action', 'status']);
    }
    
    public function query(Service $model)
    {
        return $model->newQuery()->with('seats');
    }
}
```

### 3. JavaScript Components
```javascript
// Seat Selection Component
class SeatSelector {
    constructor(containerId, serviceId) {
        this.container = document.getElementById(containerId);
        this.serviceId = serviceId;
        this.selectedSeats = [];
        this.init();
    }
    
    init() {
        this.loadSeats();
        this.bindEvents();
    }
    
    loadSeats() {
        fetch(`/api/services/${this.serviceId}/seats`)
            .then(response => response.json())
            .then(data => this.renderSeats(data.seats));
    }
    
    renderSeats(seats) {
        let html = '';
        seats.forEach(seat => {
            html += `
                <div class="seat ${seat.status}" 
                     data-seat-id="${seat.id}"
                     data-row="${seat.row_number}"
                     data-number="${seat.seat_number}">
                    ${seat.seat_number}
                </div>
            `;
        });
        this.container.innerHTML = html;
    }
}
```

---

## Development Workflow

### 1. Environment Setup
```bash
# Clone repository
git clone <repository-url>
cd trekzo-v1

# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Environment configuration
cp .env.example .env
php artisan key:generate

# Database setup
php artisan migrate --seed

# Asset compilation
npm run dev
```

### 2. Common Artisan Commands
```bash
# Create new model with migration
php artisan make:model Service -m

# Create controller with resource methods
php artisan make:controller ServiceController --resource

# Create form request validation
php artisan make:request ServiceRequest

# Create API resource
php artisan make:resource ServiceResource

# Run migrations
php artisan migrate

# Seed database
php artisan db:seed

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear
```

### 3. Asset Compilation (Laravel Mix)
```javascript
// webpack.mix.js
const mix = require('laravel-mix');

mix.js('resources/js/backend-bundle.js', 'public/js/backend-bundle.min.js')
   .sass('resources/sass/backend-bundle.scss','public/css/backend-bundle.min.css')
   .options({
       processCssUrls: false
   });
```

---

## Code Organization

### 1. Service Layer Pattern
```php
// Example: Service class for business logic
class RideBookingService
{
    public function bookRide($riderData, $serviceId, $selectedSeats = [])
    {
        DB::transaction(function () use ($riderData, $serviceId, $selectedSeats) {
            $ride = $this->createRideRequest($riderData, $serviceId);
            
            if (!empty($selectedSeats)) {
                $this->reserveSeats($selectedSeats, $ride->id);
            }
            
            $this->notifyNearbyDrivers($ride);
            
            return $ride;
        });
    }
    
    private function createRideRequest($data, $serviceId)
    {
        return RideRequest::create([
            'rider_id' => auth()->id(),
            'service_id' => $serviceId,
            'start_latitude' => $data['start_lat'],
            'start_longitude' => $data['start_lng'],
            // ... other fields
        ]);
    }
}
```

### 2. Repository Pattern
```php
interface ServiceRepositoryInterface
{
    public function getAvailableServices();
    public function findWithSeats($id);
    public function create(array $data);
}

class ServiceRepository implements ServiceRepositoryInterface
{
    public function getAvailableServices()
    {
        return Service::where('status', 'active')
                     ->with('seats')
                     ->get();
    }
    
    public function findWithSeats($id)
    {
        return Service::with('seats.pricing')->findOrFail($id);
    }
}
```

### 3. Event-Driven Architecture
```php
// Events
class RideBooked
{
    public $ride;
    
    public function __construct(RideRequest $ride)
    {
        $this->ride = $ride;
    }
}

// Listeners
class NotifyDriver
{
    public function handle(RideBooked $event)
    {
        $nearbyDrivers = $this->findNearbyDrivers($event->ride);
        
        foreach ($nearbyDrivers as $driver) {
            $driver->notify(new NewRideNotification($event->ride));
        }
    }
}
```

---

## Best Practices

### 1. Database Best Practices
```php
// Use Eloquent relationships efficiently
class Service extends Model
{
    // Eager loading to prevent N+1 queries
    protected $with = ['seats'];
    
    // Use scopes for reusable query logic
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
    
    // Use accessors for computed attributes
    public function getFormattedPriceAttribute()
    {
        return '$' . number_format($this->base_fare, 2);
    }
}

// Optimize queries
$services = Service::with(['seats' => function ($query) {
    $query->where('status', 'available');
}])->active()->get();
```

### 2. Security Best Practices
```php
// Input validation
class ServiceRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|sanitize',
            'capacity' => 'required|integer|min:1|max:50',
            'coordinates' => 'required|array',
            'coordinates.*' => 'numeric|between:-180,180'
        ];
    }
}

// SQL injection prevention (Eloquent does this automatically)
$users = User::where('email', $request->email)->first();

// XSS prevention in Blade templates
{{ $user->name }} // Automatically escaped
{!! $htmlContent !!} // Use only for trusted content
```

### 3. Performance Optimization
```php
// Database indexing
Schema::table('ride_requests', function (Blueprint $table) {
    $table->index(['status', 'created_at']);
    $table->index(['rider_id', 'status']);
    $table->spatialIndex(['start_point', 'end_point']);
});

// Caching frequently accessed data
class ServiceRepository
{
    public function getActiveServices()
    {
        return Cache::remember('active_services', 3600, function () {
            return Service::with('seats')->active()->get();
        });
    }
}

// Queue heavy operations
class ProcessPayment implements ShouldQueue
{
    public function handle()
    {
        // Heavy payment processing logic
    }
}
```

---

## Deployment Considerations

### 1. Environment Configuration
```bash
# Production .env settings
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=your-db-host
DB_DATABASE=trekzo_production

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
```

### 2. Optimization Commands
```bash
# Production optimization
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

# Asset optimization
npm run production
```

### 3. Server Configuration
```nginx
# Nginx configuration example
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/trekzo-v1/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

---

## Learning Path Recommendations

### Beginner Level
1. **Laravel Fundamentals**
   - Routing, Controllers, Views
   - Eloquent ORM basics
   - Blade templating

2. **Database Concepts**
   - Migrations & Seeders
   - Model relationships
   - Query optimization

### Intermediate Level
1. **Advanced Laravel Features**
   - Authentication & Authorization
   - API development with Sanctum
   - Event & Listeners

2. **Frontend Integration**
   - Laravel Mix & Asset compilation
   - JavaScript components
   - AJAX & API consumption

### Advanced Level
1. **Architecture Patterns**
   - Service layer pattern
   - Repository pattern
   - Event-driven architecture

2. **Performance & Scalability**
   - Caching strategies
   - Queue management
   - Database optimization

3. **DevOps & Deployment**
   - Server configuration
   - CI/CD pipelines
   - Monitoring & logging

---

## Key Takeaways

1. **Laravel provides a robust foundation** for building complex applications with clean, maintainable code
2. **MVC architecture** keeps business logic, data, and presentation layers separated
3. **Eloquent ORM** simplifies database interactions while maintaining performance
4. **Middleware** and **Service Providers** enable clean request processing and dependency injection
5. **API Resources** and **Form Requests** standardize API responses and validation
6. **Event-driven architecture** enables loose coupling and scalable feature development

This guide covers the fundamental concepts used in the Trekzo ride-booking platform. Each section provides practical examples from the actual codebase, making it easier to understand how theory applies to real-world development.
