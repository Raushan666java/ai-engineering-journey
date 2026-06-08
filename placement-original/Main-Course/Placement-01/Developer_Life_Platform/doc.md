# Developer Life Platform - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Installation Guide](#installation-guide)
4. [Database Schema](#database-schema)
5. [API Documentation](#api-documentation)
6. [Platform Modules](#platform-modules)
7. [Features & Functionality](#features--functionality)
8. [Testing Guide](#testing-guide)
9. [Deployment Guide](#deployment-guide)
10. [Troubleshooting](#troubleshooting)

---

## 🚀 Project Overview

**Developer Life Platform** is a comprehensive web application built with Laravel that integrates three powerful platforms:

### 🎯 Core Platforms
- **DSA Platform** - Data Structures & Algorithms practice and contests
- **Learning Platform** - Course management and educational content
- **MONITASK Platform** - Employee productivity tracking and time management

### 🛠 Technology Stack
- **Backend**: Laravel 12.x (PHP 8.2+)
- **Frontend**: Blade Templates, Bootstrap 5, JavaScript
- **Database**: MySQL 8.0+
- **Authentication**: Laravel Sanctum + Social Login (Google, GitHub, Facebook, LinkedIn)
- **Server**: Apache/Nginx + PHP-FPM
- **Development**: XAMPP/LAMP Stack

---

## 🏗 System Architecture

### MVC Architecture
```
├── app/
│   ├── Http/Controllers/
│   │   ├── DsaProblemController.php
│   │   ├── LearningCourseController.php
│   │   ├── MonitaskProjectController.php
│   │   └── Auth/SocialAuthController.php
│   ├── Models/
│   │   ├── DsaProblem.php
│   │   ├── LearningCourse.php
│   │   ├── MonitaskProject.php
│   │   └── User.php
│   └── Policies/
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
├── resources/
│   ├── views/
│   │   ├── dsa/
│   │   ├── learning/
│   │   └── monitask/
│   └── js/
└── routes/
    ├── web.php
    └── api.php
```

### Database Architecture
```sql
-- Core Tables
users (authentication & profiles)
user_profiles (extended user data)
companies (organization management)

-- DSA Platform
dsa_problems (coding challenges)
dsa_submissions (user solutions)
dsa_contests (competitive programming)

-- Learning Platform
learning_categories (course categories)
learning_courses (educational content)
lessons (course modules)

-- MONITASK Platform
monitask_projects (project management)
monitask_tasks (task tracking)
monitask_time_entries (time tracking)
monitask_screenshots (activity monitoring)
monitask_agents (desktop/mobile apps)
```

---

## 📦 Installation Guide

### Prerequisites
- PHP 8.2 or higher
- Composer
- MySQL 8.0+
- Node.js & NPM
- XAMPP/LAMP Stack

### Step 1: Clone Repository
```bash
git clone [repository-url]
cd Developer_Life_Platform
```

### Step 2: Install Dependencies
```bash
composer install
npm install
```

### Step 3: Environment Configuration
```bash
cp .env.example .env
php artisan key:generate
```

### Step 4: Database Configuration
Edit `.env` file:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=developer_life_platform
DB_USERNAME=root
DB_PASSWORD=

# Social Authentication
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=http://localhost:8000/auth/google/callback
```

### Step 5: Database Migration
```bash
php artisan migrate
php artisan db:seed
```

### Step 6: Storage Setup
```bash
php artisan storage:link
```

### Step 7: Start Development Server
```bash
php artisan serve
# Access: http://localhost:8000
```

---

## 🗄 Database Schema

### Core Tables

#### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
    provider VARCHAR(50),
    provider_id VARCHAR(255),
    provider_token TEXT,
    avatar VARCHAR(500),
    email_verified_at TIMESTAMP NULL,
    last_login_at TIMESTAMP NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### DSA Platform Tables

#### DSA Problems
```sql
CREATE TABLE dsa_problems (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    difficulty ENUM('easy', 'medium', 'hard'),
    category VARCHAR(100),
    input_format TEXT,
    output_format TEXT,
    constraints TEXT,
    sample_input TEXT,
    sample_output TEXT,
    time_limit INT DEFAULT 1000,
    memory_limit INT DEFAULT 256,
    tags JSON,
    is_active BOOLEAN DEFAULT true,
    created_by BIGINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    INDEX idx_difficulty (difficulty),
    INDEX idx_category (category),
    FOREIGN KEY (created_by) REFERENCES users(id)
);
```

### Learning Platform Tables

#### Learning Courses
```sql
CREATE TABLE learning_courses (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    thumbnail VARCHAR(500),
    category_id BIGINT,
    instructor_id BIGINT NOT NULL,
    level ENUM('beginner', 'intermediate', 'advanced'),
    status ENUM('draft', 'published', 'archived'),
    duration_hours DECIMAL(5,2),
    price DECIMAL(10,2) DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    enrollment_count INT DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_category (category_id),
    INDEX idx_featured (is_featured),
    FOREIGN KEY (category_id) REFERENCES learning_categories(id),
    FOREIGN KEY (instructor_id) REFERENCES users(id)
);
```

### MONITASK Platform Tables

#### Monitask Projects
```sql
CREATE TABLE monitask_projects (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    owner_id BIGINT NOT NULL,
    client_id BIGINT,
    status ENUM('active', 'completed', 'on_hold', 'cancelled'),
    priority ENUM('low', 'medium', 'high', 'urgent'),
    budget DECIMAL(12,2),
    hourly_rate DECIMAL(8,2),
    start_date DATE,
    end_date DATE,
    deadline DATE,
    progress TINYINT DEFAULT 0,
    is_billable BOOLEAN DEFAULT true,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_owner (owner_id),
    INDEX idx_client (client_id),
    FOREIGN KEY (owner_id) REFERENCES users(id),
    FOREIGN KEY (client_id) REFERENCES users(id)
);
```

---

## 🔌 API Documentation

### Authentication Endpoints

#### Social Login
```http
GET /auth/{provider}
GET /auth/{provider}/callback
```
**Supported Providers**: google, github, facebook, linkedin

#### Standard Authentication
```http
POST /login
POST /register
POST /logout
```

### DSA Platform API

#### Problems Management
```http
GET /api/dsa/problems
POST /api/dsa/problems
GET /api/dsa/problems/{id}
PUT /api/dsa/problems/{id}
DELETE /api/dsa/problems/{id}
```

#### Submissions
```http
POST /api/dsa/problems/{id}/submit
GET /api/dsa/submissions
GET /api/dsa/submissions/{id}
```

### Learning Platform API

#### Courses Management
```http
GET /api/learning/courses
POST /api/learning/courses
GET /api/learning/courses/{id}
PUT /api/learning/courses/{id}
DELETE /api/learning/courses/{id}
```

#### Enrollments
```http
POST /api/learning/courses/{id}/enroll
GET /api/learning/my-courses
```

### MONITASK Platform API

#### Projects Management
```http
GET /api/monitask/projects
POST /api/monitask/projects
GET /api/monitask/projects/{id}
PUT /api/monitask/projects/{id}
DELETE /api/monitask/projects/{id}
```

#### Time Tracking
```http
POST /api/monitask/time-entries
PUT /api/monitask/time-entries/{id}/stop
GET /api/monitask/time-entries
```

#### Agent Endpoints
```http
POST /api/monitask/agent/register
POST /api/monitask/agent/heartbeat
POST /api/monitask/agent/screenshot
POST /api/monitask/agent/activity
```

---

## 📚 Platform Modules

### 1. DSA Platform

#### Features
- **Problem Management**: Create, edit, and organize coding problems
- **Contest System**: Timed programming competitions
- **Submission System**: Code submission and evaluation
- **Leaderboards**: User rankings and achievements
- **Practice Dashboard**: Personal progress tracking

#### Key Components
- **DsaProblemController**: Problem CRUD operations
- **DsaContestController**: Contest management
- **DsaSubmissionController**: Code submission handling
- **Problem Categories**: Easy, Medium, Hard difficulty levels
- **Code Evaluation**: Automated testing system

### 2. Learning Platform

#### Features
- **Course Management**: Comprehensive course creation and management
- **Category System**: Organized course categorization
- **Enrollment System**: Student course enrollment
- **Progress Tracking**: Learning progress monitoring
- **Instructor Dashboard**: Course analytics and management

#### Key Components
- **LearningCourseController**: Course CRUD operations
- **LearningCategoryController**: Category management
- **Enrollment System**: Student-course relationships
- **Content Management**: Lessons and materials
- **Assessment System**: Quizzes and evaluations

### 3. MONITASK Platform

#### Features
- **Project Management**: Comprehensive project lifecycle management
- **Time Tracking**: Accurate time logging with screenshots
- **Team Management**: Multi-user project collaboration
- **Activity Monitoring**: Desktop and mobile app tracking
- **Productivity Analytics**: Detailed productivity insights
- **Client Management**: Client-project relationships

#### Key Components
- **MonitaskProjectController**: Project management
- **MonitaskTaskController**: Task management
- **MonitaskTimeController**: Time tracking
- **AgentController**: Desktop/mobile agent communication
- **ReportController**: Analytics and reporting
- **Screenshot System**: Activity verification

### Desktop Agent Features
```javascript
// Desktop Agent Capabilities
- Real-time activity tracking
- Screenshot capture (configurable intervals)
- Application usage monitoring
- Stealth mode operation
- Mouse jiggler detection
- Automatic time calculation
- Offline data storage
- Secure data transmission
```

### Mobile Agent Features
```javascript
// Mobile Agent Capabilities
- GPS location tracking
- App usage monitoring
- Photo-based check-ins
- Time tracking with geofencing
- Offline capability
- Battery optimization
- Push notifications
- Cross-platform support
```

---

## ⚡ Features & Functionality

### Core Features

#### User Management
- **Multi-role Authentication**: Admin, Manager, Employee, Student
- **Social Login Integration**: Google, GitHub, Facebook, LinkedIn
- **Profile Management**: Extended user profiles with skills and preferences
- **Company Management**: Multi-tenant organization support

#### Dashboard Features
- **Unified Dashboard**: Single interface for all three platforms
- **Role-based Access**: Different views based on user roles
- **Real-time Updates**: Live data updates using WebSockets
- **Customizable Widgets**: Personalized dashboard components

#### Security Features
- **CSRF Protection**: Built-in CSRF token validation
- **SQL Injection Prevention**: Eloquent ORM protection
- **XSS Protection**: Input sanitization and output encoding
- **Rate Limiting**: API and route rate limiting
- **Data Encryption**: AES-256 encryption for sensitive data

### Advanced Features

#### Analytics & Reporting
```php
// Productivity Analytics
- Work time distribution
- Application usage patterns
- Website visit analytics
- Team productivity comparisons
- Project profitability analysis
- Time tracking accuracy reports
```

#### Integration Capabilities
```php
// Third-party Integrations
- Slack notifications
- Email automation
- Calendar synchronization
- Payment gateway integration
- Cloud storage integration
- API webhooks
```

---

## 🧪 Testing Guide

### Running Tests
```bash
# Run all tests
php artisan test

# Run specific test suite
php artisan test --testsuite=Feature

# Run with coverage
php artisan test --coverage

# Run specific test file
php artisan test tests/Feature/DSAPlatformTest.php
```

### Test Structure
```
tests/
├── Feature/
│   ├── DSAPlatformTest.php
│   ├── LearningPlatformTest.php
│   ├── MonitaskPlatformTest.php
│   └── AuthenticationTest.php
├── Unit/
│   ├── Models/
│   └── Services/
└── TestCase.php
```

### Sample Test Cases

#### DSA Platform Tests
```php
public function test_can_create_dsa_problem()
public function test_can_submit_solution()
public function test_contest_management()
public function test_leaderboard_calculation()
```

#### Learning Platform Tests
```php
public function test_course_creation()
public function test_student_enrollment()
public function test_progress_tracking()
public function test_instructor_dashboard()
```

#### MONITASK Platform Tests
```php
public function test_project_management()
public function test_time_tracking()
public function test_screenshot_capture()
public function test_productivity_analytics()
```

---

## 🚀 Deployment Guide

### Production Requirements
- **PHP**: 8.2+ with required extensions
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **Database**: MySQL 8.0+ or MariaDB 10.6+
- **SSL Certificate**: HTTPS enabled
- **Memory**: 2GB+ RAM
- **Storage**: 10GB+ SSD

### Deployment Steps

#### 1. Server Preparation
```bash
# Install dependencies
sudo apt update
sudo apt install php8.2 php8.2-fpm php8.2-mysql php8.2-xml php8.2-curl
sudo apt install mysql-server nginx
```

#### 2. Application Deployment
```bash
# Upload files
git clone [repository] /var/www/developer-life-platform
cd /var/www/developer-life-platform

# Install dependencies
composer install --optimize-autoloader --no-dev
npm install
npm run build
```

#### 3. Environment Configuration
```bash
# Copy environment file
cp .env.production .env

# Generate application key
php artisan key:generate

# Run migrations
php artisan migrate --force

# Cache optimization
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

#### 4. Web Server Configuration

##### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/developer-life-platform/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

#### 5. SSL Setup
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com
```

### Production Optimization

#### Performance Tuning
```bash
# OPcache configuration
echo "opcache.enable=1" >> /etc/php/8.2/fpm/php.ini
echo "opcache.memory_consumption=256" >> /etc/php/8.2/fpm/php.ini

# Queue workers
php artisan queue:work --daemon

# Task scheduling
* * * * * cd /var/www/developer-life-platform && php artisan schedule:run
```

#### Monitoring Setup
```bash
# Install monitoring tools
sudo apt install htop iotop netstat

# Application monitoring
php artisan monitor:start
```

---

## 🔧 Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check MySQL service
sudo systemctl status mysql

# Check database configuration
php artisan config:show database

# Test database connection
php artisan migrate:status
```

#### Permission Issues
```bash
# Fix storage permissions
sudo chown -R www-data:www-data storage/
sudo chmod -R 775 storage/

# Fix bootstrap cache permissions
sudo chown -R www-data:www-data bootstrap/cache/
sudo chmod -R 775 bootstrap/cache/
```

#### Social Authentication Issues
```bash
# Clear configuration cache
php artisan config:clear

# Check environment variables
php artisan config:show services

# Verify OAuth callbacks
php artisan route:list | grep auth
```

#### MONITASK Agent Issues
```bash
# Check agent connectivity
curl -X POST http://your-domain.com/api/monitask/agent/heartbeat

# Verify agent registration
php artisan monitask:agents

# Check screenshot uploads
php artisan monitask:screenshots
```

### Performance Issues

#### Slow Page Load
```bash
# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Optimize for production
php artisan optimize
```

#### Database Performance
```sql
-- Check slow queries
SHOW PROCESSLIST;

-- Optimize tables
OPTIMIZE TABLE dsa_problems, learning_courses, monitask_projects;

-- Add missing indexes
CREATE INDEX idx_created_at ON monitask_time_entries(created_at);
```

### Logs & Debugging

#### Application Logs
```bash
# View Laravel logs
tail -f storage/logs/laravel.log

# View web server logs
tail -f /var/log/nginx/error.log
tail -f /var/log/apache2/error.log

# View system logs
journalctl -f
```

#### Debug Mode
```bash
# Enable debug mode (development only)
APP_DEBUG=true

# Log database queries
DB_LOG_QUERIES=true

# Enable verbose error reporting
LOG_LEVEL=debug
```

---

## 📞 Support & Maintenance

### Regular Maintenance Tasks
```bash
# Daily
php artisan cache:clear
php artisan queue:restart

# Weekly
php artisan storage:cleanup
composer update

# Monthly
php artisan backup:run
mysql_secure_installation
```

### Backup Strategy
```bash
# Database backup
mysqldump -u root -p developer_life_platform > backup.sql

# Application backup
tar -czf app-backup.tar.gz /var/www/developer-life-platform

# Automated backup script
php artisan backup:run --only-db
```

### Security Updates
```bash
# Update dependencies
composer update
npm audit fix

# Security patches
php artisan security:check

# Update system packages
sudo apt update && sudo apt upgrade
```

---

## 📈 Future Enhancements

### Planned Features
- **Mobile Apps**: Native iOS and Android applications
- **AI Integration**: Code review and productivity suggestions
- **Advanced Analytics**: Machine learning insights
- **Video Conferencing**: Integrated meeting capabilities
- **Blockchain Integration**: Skill certification system

### Scalability Improvements
- **Microservices Architecture**: Platform separation
- **Container Deployment**: Docker and Kubernetes
- **CDN Integration**: Global content delivery
- **Database Clustering**: High availability setup

---

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Implement changes
4. Write/update tests
5. Submit pull request

### Code Standards
- PSR-12 coding standards
- Laravel best practices
- Comprehensive documentation
- Unit test coverage >80%

---

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

---

## 📞 Contact & Support

- **Documentation**: [GitHub Wiki]
- **Issues**: [GitHub Issues]
- **Support**: support@developerlife.com
- **Website**: https://developerlife.com

---

*Last Updated: August 21, 2025*
*Version: 1.0.0*