# Laravel Migration Generator Script
# This file contains all the core database structure for the Developer Life Platform

# Core Learning System
php artisan make:migration create_coding_problems_table
php artisan make:migration create_submissions_table
php artisan make:migration create_user_progress_table
php artisan make:migration create_enrollments_table

# Goal and Project Management
php artisan make:migration create_goals_table
php artisan make:migration create_projects_table
php artisan make:migration create_project_tasks_table

# Analytics and Tracking
php artisan make:migration create_activities_table
php artisan make:migration create_learning_sessions_table
php artisan make:migration create_achievements_table

# Career and Placement
php artisan make:migration create_companies_table
php artisan make:migration create_job_applications_table
php artisan make:migration create_interview_experiences_table

# Advanced Features
php artisan make:migration create_skill_assessments_table
php artisan make:migration create_recommendations_table
php artisan make:migration create_notifications_table
