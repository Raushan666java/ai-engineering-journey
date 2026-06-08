# Award Management System Documentation

## Overview
A complete award management system with admin panel and frontend display, allowing organizations to manage and showcase awards and achievements with year-wise organization.

## Features

### Admin Panel Features
- **Add Awards**: Create new awards with detailed information
- **Edit Awards**: Update existing award information
- **Delete Awards**: Remove awards from the system
- **View Awards**: Display award details with all metadata
- **Filter by Year**: Filter awards by year for easy management
- **Image Upload**: Upload and manage award images
- **Icon Support**: Add Font Awesome icons to awards
- **Status Control**: Activate/Deactivate awards
- **Sort Order**: Organize awards with custom sort order
- **Pagination**: Handle large numbers of awards with pagination

### Frontend Features
- **Award Listing**: Display all awards organized by year
- **Year Filter**: Filter awards by specific year
- **Award Details**: Full details page for each award
- **Related Awards**: Show related awards from the same year
- **Social Sharing**: Share awards on social media
- **Responsive Design**: Mobile-friendly interface
- **Landing Page Section**: Featured awards on homepage

## Database Structure

### Awards Table
```sql
CREATE TABLE awards (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    year YEAR NOT NULL,
    description LONGTEXT NULLABLE,
    image VARCHAR(255) NULLABLE,
    icon VARCHAR(100) NULLABLE,
    organization VARCHAR(255) NULLABLE,
    category VARCHAR(255) NULLABLE,
    status BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    INDEX(year),
    INDEX(status),
    INDEX(sort_order)
);
```

## Model: Award
**Location**: `app/Models/Award.php`

### Attributes
- `id`: Unique identifier
- `name`: Award name
- `year`: Year of award (e.g., 2024)
- `description`: Award details
- `image`: Award image path
- `icon`: Font Awesome icon class
- `organization`: Awarding organization
- `category`: Award category
- `status`: Active/Inactive flag
- `sort_order`: Display order

### Methods
- `scopeActive()`: Get only active awards
- `scopeByYear()`: Filter awards by year
- `scopeOrdered()`: Get awards in sorted order
- `getImageUrlAttribute()`: Get full image URL
- `getYearAttribute()`: Convert year to integer

## Controllers

### Admin: `app/Http/Controllers/Admin/AwardController.php`
**Methods**:
- `index()`: List all awards with year filter
- `create()`: Show award creation form
- `store()`: Save new award
- `show()`: Display award details
- `edit()`: Show award edit form
- `update()`: Update award
- `destroy()`: Delete award
- `filterByYear()`: Filter awards by year

### Frontend: `app/Http/Controllers/Frontend/AwardController.php`
**Methods**:
- `index()`: Display awards organized by year
- `show()`: Display single award details

## Routes

### Admin Routes
```
GET  /admin/awards              → index (List awards)
GET  /admin/awards/create       → create (Create form)
POST /admin/awards              → store (Save award)
GET  /admin/awards/{award}      → show (View award)
GET  /admin/awards/{award}/edit → edit (Edit form)
PUT  /admin/awards/{award}      → update (Update award)
DELETE /admin/awards/{award}    → destroy (Delete award)
GET  /admin/awards/filter/{year} → filterByYear (Filter by year)
```

### Frontend Routes
```
GET /awards              → index (Awards listing)
GET /awards/{award}      → show (Award details)
```

## Views

### Admin Views

#### Index View: `resources/views/admin/awards/index.blade.php`
- Display all awards in table format
- Show award image, name, year, organization, category, status
- Filter by year dropdown
- Action buttons (View, Edit, Delete)
- Pagination support

#### Create View: `resources/views/admin/awards/create.blade.php`
- Form for creating new award
- Fields: name, year, organization, category, description, image, icon, status
- Image preview on upload
- Font Awesome icon selector help

#### Edit View: `resources/views/admin/awards/edit.blade.php`
- Form for editing existing award
- Pre-filled fields with current award data
- Current and new image preview
- All fields from create view

#### Show View: `resources/views/admin/awards/show.blade.php`
- Display full award details
- Award image
- All metadata (name, year, organization, category, status)
- Created/Updated timestamps
- Edit and Delete buttons
- Metadata card with creation info

### Frontend Views

#### Index View: `resources/views/frontend/awards/index.blade.php`
- Awards organized by year
- Year-wise sections with elegant headers
- Award cards with:
  - Icon
  - Name
  - Organization
  - Category
  - Award link
- Year filter dropdown
- View All button

**Features**:
- Responsive grid layout (1-4 columns)
- Hover effects on cards
- Color-coded category badges
- Beautiful gradient headers for each year

#### Show View: `resources/views/frontend/awards/show.blade.php`
- Detailed award page
- Full award image display
- Award metadata (year, organization, category)
- Complete description
- Social sharing buttons (Facebook, Twitter, LinkedIn)
- Related awards sidebar
- Breadcrumb navigation
- Mobile responsive

#### Landing Page Section: Featured in `resources/views/frontend/index.blade.php`
- Section added between services and CTA sections
- Displays 4 featured awards
- Award cards with icons and details
- Link to full awards page
- Responsive design matching theme

## Styling

### Color Scheme
- Primary Color: `var(--theme-color)` (#1A685B)
- Secondary Color: `var(--theme-color2)` (#FFAC00)
- Background: Light gray (#f8fafc)
- Card Background: White with transparency

### Responsive Design
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns
- Touch-friendly buttons and controls

## Usage Guide

### Adding an Award (Admin)
1. Navigate to **Admin Panel → Awards**
2. Click **Add Award** button
3. Fill in the form:
   - Award Name (required)
   - Year (required)
   - Organization
   - Category
   - Description
   - Upload Image
   - Select Icon (Font Awesome)
   - Set Status (Active/Inactive)
   - Set Sort Order
4. Click **Save Award**

### Editing an Award (Admin)
1. Go to **Admin Panel → Awards**
2. Click **Edit** icon for the award
3. Update desired fields
4. Click **Update Award**

### Deleting an Award (Admin)
1. Go to **Admin Panel → Awards**
2. Click **Delete** icon (trash) or go to award details
3. Confirm deletion
4. Award will be permanently removed

### Viewing Awards (Frontend)
1. Navigate to **/awards** page
2. Browse awards organized by year
3. Use year filter to narrow down
4. Click on any award to view full details

## Caching

Frontend awards list is cached for **1 hour** (3600 seconds) for better performance.

To clear cache:
```bash
php artisan cache:forget awards_frontend
```

## File Structure
```
app/
├── Models/
│   └── Award.php
├── Http/Controllers/
│   ├── Admin/
│   │   └── AwardController.php
│   └── Frontend/
│       └── AwardController.php
│
database/
├── migrations/
│   └── 2024_10_18_create_awards_table.php
│
resources/views/
├── admin/awards/
│   ├── index.blade.php
│   ├── create.blade.php
│   ├── edit.blade.php
│   └── show.blade.php
├── frontend/awards/
│   ├── index.blade.php
│   └── show.blade.php
└── frontend/
    └── index.blade.php (updated with awards section)

routes/
├── admin.php (updated with award routes)
└── web.php (updated with award routes)
```

## API/URL Reference

### Admin URLs
- Awards Management: `http://localhost/aito_test/admin/awards`
- Create Award: `http://localhost/aito_test/admin/awards/create`
- Edit Award: `http://localhost/aito_test/admin/awards/{id}/edit`
- View Award: `http://localhost/aito_test/admin/awards/{id}`

### Frontend URLs
- Awards List: `http://localhost/aito_test/awards`
- Award Details: `http://localhost/aito_test/awards/{id}`
- Filter by Year: `http://localhost/aito_test/awards?year=2024`

## Validation Rules

### Award Creation/Update
```php
'name' => 'required|string|max:255',
'year' => 'required|integer|min:1900|max:2099',
'description' => 'nullable|string',
'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
'icon' => 'nullable|string|max:100',
'organization' => 'nullable|string|max:255',
'category' => 'nullable|string|max:255',
'status' => 'boolean',
'sort_order' => 'nullable|integer|min:0',
```

## Best Practices

1. **Image Optimization**: Use compressed images (max 2MB)
2. **Icon Selection**: Use Font Awesome classes (e.g., fas fa-trophy, fas fa-medal)
3. **Organization Names**: Keep concise (max 255 characters)
4. **Descriptions**: Use clear, descriptive text
5. **Years**: Use valid year values (1900-2099)
6. **Sort Order**: Use lower numbers for awards to display first

## Troubleshooting

### Images not displaying
- Check if image file exists in `/storage/awards/`
- Verify image path in database
- Ensure storage is properly linked

### Awards not showing on frontend
- Check award status is "Active"
- Verify award year is set correctly
- Clear cache: `php artisan cache:clear`

### Award page not found
- Ensure award exists and is active
- Check award ID in URL
- Verify route configuration

## Future Enhancements
- Award certificate generation
- Award search functionality
- Export awards to PDF
- Award gallery with carousel
- Comments and ratings
- Award statistics dashboard
