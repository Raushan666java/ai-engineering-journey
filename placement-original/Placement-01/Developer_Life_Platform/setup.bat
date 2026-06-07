@echo off
title Developer Life Platform - Quick Setup
color 0A

echo ============================================================================
echo                  DEVELOPER LIFE PLATFORM - QUICK SETUP
echo ============================================================================
echo.
echo This script will help you set up the optimized Developer Life Platform
echo Please ensure you have the following installed:
echo - PHP 8.3+
echo - Composer
echo - MySQL 8.0+
echo - Git
echo.
pause

echo.
echo ============================================================================
echo                             STEP 1: DEPENDENCIES
echo ============================================================================
echo Installing Composer dependencies...
call composer install
if %errorlevel% neq 0 (
    echo ERROR: Composer install failed!
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully!

echo.
echo ============================================================================
echo                          STEP 2: ENVIRONMENT SETUP
echo ============================================================================
echo Setting up environment configuration...
if not exist .env (
    copy .env.example .env
    echo ✓ Environment file created
) else (
    echo ✓ Environment file already exists
)

echo Generating application key...
call php artisan key:generate
echo ✓ Application key generated!

echo.
echo ============================================================================
echo                         STEP 3: DATABASE SETUP
echo ============================================================================
echo.
echo Please ensure your MySQL server is running and accessible
echo.
set /p db_name="Enter database name (default: Developer_Life_Platform): " || set db_name=Developer_Life_Platform
set /p db_user="Enter database username (default: root): " || set db_user=root
set /p db_pass="Enter database password: "

echo.
echo Updating .env file with database credentials...
powershell -Command "(Get-Content .env) -replace 'DB_DATABASE=.*', 'DB_DATABASE=%db_name%' | Set-Content .env"
powershell -Command "(Get-Content .env) -replace 'DB_USERNAME=.*', 'DB_USERNAME=%db_user%' | Set-Content .env"
powershell -Command "(Get-Content .env) -replace 'DB_PASSWORD=.*', 'DB_PASSWORD=%db_pass%' | Set-Content .env"
echo ✓ Database configuration updated!

echo.
echo ============================================================================
echo                        STEP 4: DATABASE MIGRATION
echo ============================================================================
echo Running database migrations and seeders...
call php artisan migrate:fresh --seed
if %errorlevel% neq 0 (
    echo ERROR: Database migration failed!
    echo Please check your database connection and try again.
    pause
    exit /b 1
)
echo ✓ Database setup completed with sample data!

echo.
echo ============================================================================
echo                          STEP 5: FINAL SETUP
echo ============================================================================
echo Clearing application cache...
call php artisan config:clear
call php artisan cache:clear
call php artisan view:clear
echo ✓ Cache cleared!

echo.
echo Creating storage links...
call php artisan storage:link
echo ✓ Storage links created!

echo.
echo ============================================================================
echo                            SETUP COMPLETE!
echo ============================================================================
echo.
echo Your Developer Life Platform is ready to use!
echo.
echo Demo Account:
echo - Email: demo@developer.com
echo - Password: password123
echo.
echo To start the development server, run:
echo   php artisan serve
echo.
echo Then visit: http://127.0.0.1:8000
echo.
echo ============================================================================
echo                         QUICK START COMMANDS
echo ============================================================================
echo.
set /p start_server="Start development server now? (y/n): "
if /i "%start_server%"=="y" (
    echo Starting Laravel development server...
    echo.
    echo Server will be available at: http://127.0.0.1:8000
    echo Press Ctrl+C to stop the server
    echo.
    call php artisan serve
) else (
    echo.
    echo To start the server later, run: php artisan serve
    echo.
    pause
)
