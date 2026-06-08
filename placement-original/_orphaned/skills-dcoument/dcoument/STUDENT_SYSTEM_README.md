# Student Management System

## Overview
The Student Management System provides a complete solution for managing student registrations, enrollments, and student portals. It includes both frontend student-facing features and backend admin management tools.

## Features

### Frontend Features
- **Student Registration**: Complete registration form with personal, academic, and document upload
- **Student Login**: Secure login using Student ID and email
- **Student Dashboard**: Personalized dashboard with student information and quick actions
- **Document Management**: Upload and manage student documents (ID proof, certificates, etc.)
- **Profile Management**: View and manage student profile information

### Admin Features
- **Student Management**: Complete CRUD operations for students
- **Bulk Actions**: Approve, reject, activate, or delete multiple students
- **Status Management**: Manage student enrollment status (pending, approved, active, rejected)
- **Advanced Filtering**: Filter students by status, course, and search functionality
- **Document Review**: View and download student documents

## Routes

### Public Student Routes
- `GET /student/register` - Student registration form
- `POST /student/register` - Process student registration
- `GET /student/registration-success` - Registration success page
- `GET /student/login` - Student login form
- `POST /student/login` - Process student login
- `POST /student/logout` - Student logout

### Protected Student Routes (Requires Authentication)
- `GET /student/dashboard` - Student dashboard

### Admin Routes
- `GET /admin/students` - List all students
- `GET /admin/students/create` - Create new student form
- `POST /admin/students` - Store new student
- `GET /admin/students/{student}` - View student details
- `GET /admin/students/{student}/edit` - Edit student form
- `PUT /admin/students/{student}` - Update student
- `DELETE /admin/students/{student}` - Delete student
- `PATCH /admin/students/{student}/approve` - Approve student
- `PATCH /admin/students/{student}/reject` - Reject student
- `PATCH /admin/students/{student}/activate` - Activate student
- `POST /admin/students/bulk-action` - Bulk actions on students

## Database Structure

### Students Table
- `id` - Primary key
- `student_id` - Unique student identifier (auto-generated)
- `name` - Student full name
- `email` - Student email address
- `phone` - Contact phone number
- `date_of_birth` - Date of birth
- `gender` - Gender (male/female/other)
- `address` - Complete address
- `country_id` - Foreign key to countries table
- `state_id` - Foreign key to states table
- `district_id` - Foreign key to districts table
- `course` - Course name (B.Tech, MCA, BCA, etc.)
- `year` - Academic year
- `semester` - Current semester
- `enrollment_status` - Status (pending/approved/active/rejected)
- `profile_picture` - Profile picture path
- `documents` - JSON array of document paths
- `notes` - Admin notes
- `enrolled_at` - Enrollment timestamp
- `created_at` - Record creation timestamp
- `updated_at` - Record update timestamp

## Usage Instructions

### For Students
1. **Registration**: Visit `/student/register` to fill out the registration form
2. **Login**: Use Student ID and email to login at `/student/login`
3. **Dashboard**: Access personal dashboard at `/student/dashboard` after login

### For Administrators
1. **Access**: Login to admin panel and navigate to Students section
2. **Manage Students**: View, edit, approve, reject, or delete student records
3. **Bulk Operations**: Select multiple students for bulk approve/reject/activate/delete

## Sample Data

The system includes sample student data that can be seeded using:
```bash
php artisan db:seed --class=StudentSeeder
```

Sample login credentials:
- Student ID: STD2025001, Email: rahul.sharma@example.com
- Student ID: STD2025002, Email: priya.singh@example.com
- Student ID: STD2025003, Email: amit.kumar@example.com
- Student ID: STD2025004, Email: sneha.patel@example.com
- Student ID: STD2025005, Email: vikram.joshi@example.com

## File Uploads

### Profile Pictures
- Location: `storage/app/public/students/profiles/`
- Max size: 2MB
- Allowed formats: JPG, PNG, JPEG

### Documents
- Location: `storage/app/public/students/documents/`
- Max size: 5MB per file
- Allowed formats: PDF, DOC, DOCX, JPG, JPEG, PNG
- Multiple files allowed

## Security Features

- **Session-based Authentication**: Secure student login sessions
- **CSRF Protection**: All forms protected against CSRF attacks
- **File Validation**: Strict file upload validation
- **Input Sanitization**: All inputs are validated and sanitized
- **Role-based Access**: Separate student and admin access levels

## Navigation

Student links have been added to the main navigation menu:
- **Students** dropdown with:
  - Student Registration
  - Student Login

## Future Enhancements

Potential features for future development:
- Email notifications for status updates
- Student fee management
- Course and subject management
- Attendance tracking
- Grade/result management
- Student progress reports
- Parent portal
- Mobile app integration

## Support

For technical support or questions about the Student Management System, please contact the development team.
