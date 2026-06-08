<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\LearningCourse;
use App\Models\LearningCategory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class LearningPlatformTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate');
        Storage::fake('public');
    }

    /**
     * Test Case: LEARN-001
     * Feature: Course creation by instructor
     * Priority: High
     */
    public function test_instructor_can_create_course()
    {
        $instructor = User::factory()->create();
        $category = LearningCategory::factory()->create();
        
        $courseData = [
            'title' => 'Laravel Mastery Course',
            'description' => 'Complete guide to Laravel framework',
            'category_id' => $category->id,
            'level' => 'intermediate',
            'price' => 99.99,
            'duration_hours' => 40,
            'lessons_count' => 20,
            'language' => 'English',
            'requirements' => ['Basic PHP knowledge', 'HTML/CSS basics'],
            'outcomes' => ['Build web applications', 'Master Laravel'],
            'certificate_available' => true
        ];

        $response = $this->actingAs($instructor)
                         ->post(route('learning.courses.store'), $courseData);

        $response->assertRedirect();
        $this->assertDatabaseHas('learning_courses', [
            'title' => 'Laravel Mastery Course',
            'instructor_id' => $instructor->id,
            'category_id' => $category->id
        ]);
    }

    /**
     * Test Case: LEARN-002
     * Feature: Course validation
     * Priority: High
     */
    public function test_course_creation_requires_valid_data()
    {
        $instructor = User::factory()->create();
        
        $response = $this->actingAs($instructor)
                         ->post(route('learning.courses.store'), []);

        $response->assertSessionHasErrors([
            'title', 'description', 'category_id', 'level', 'price'
        ]);
    }

    /**
     * Test Case: LEARN-003
     * Feature: Course listing with filters
     * Priority: Medium
     */
    public function test_user_can_filter_courses_by_category()
    {
        $webCategory = LearningCategory::factory()->create(['name' => 'Web Development']);
        $mobileCategory = LearningCategory::factory()->create(['name' => 'Mobile Development']);
        
        $webCourse = LearningCourse::factory()->create([
            'category_id' => $webCategory->id,
            'is_published' => true
        ]);
        $mobileCourse = LearningCourse::factory()->create([
            'category_id' => $mobileCategory->id,
            'is_published' => true
        ]);

        $response = $this->get(route('learning.courses.index', ['category' => $webCategory->id]));

        $response->assertStatus(200);
        $response->assertViewHas('courses');
    }

    /**
     * Test Case: LEARN-004
     * Feature: Free course enrollment
     * Priority: High
     */
    public function test_user_can_enroll_in_free_course()
    {
        $user = User::factory()->create();
        $course = LearningCourse::factory()->create([
            'price' => 0,
            'is_published' => true
        ]);

        $response = $this->actingAs($user)
                         ->post(route('learning.courses.enroll', $course));

        $response->assertRedirect();
        $this->assertTrue($course->students()->where('user_id', $user->id)->exists());
    }

    /**
     * Test Case: LEARN-005
     * Feature: Paid course enrollment redirect
     * Priority: High
     */
    public function test_paid_course_redirects_to_payment()
    {
        $user = User::factory()->create();
        $course = LearningCourse::factory()->create([
            'price' => 99.99,
            'is_published' => true
        ]);

        $response = $this->actingAs($user)
                         ->post(route('learning.courses.enroll', $course));

        $response->assertRedirect(route('learning.courses.payment', $course));
    }

    /**
     * Test Case: LEARN-006
     * Feature: Course thumbnail upload
     * Priority: Medium
     */
    public function test_course_can_have_thumbnail_uploaded()
    {
        $instructor = User::factory()->create();
        $category = LearningCategory::factory()->create();
        $thumbnail = UploadedFile::fake()->image('course.jpg');
        
        $courseData = [
            'title' => 'React Course',
            'description' => 'Learn React from scratch',
            'thumbnail' => $thumbnail,
            'category_id' => $category->id,
            'level' => 'beginner',
            'price' => 0,
            'duration_hours' => 20,
            'lessons_count' => 15,
            'language' => 'English'
        ];

        $response = $this->actingAs($instructor)
                         ->post(route('learning.courses.store'), $courseData);

        $response->assertRedirect();
        
        $course = LearningCourse::where('title', 'React Course')->first();
        $this->assertNotNull($course->thumbnail);
        Storage::disk('public')->assertExists($course->thumbnail);
    }

    /**
     * Test Case: LEARN-007
     * Feature: Category hierarchy
     * Priority: Medium
     */
    public function test_category_can_have_parent_child_relationship()
    {
        $parent = LearningCategory::factory()->create(['name' => 'Programming']);
        $child = LearningCategory::factory()->create([
            'name' => 'Web Development',
            'parent_id' => $parent->id
        ]);

        $this->assertEquals($parent->id, $child->parent->id);
        $this->assertTrue($parent->children->contains($child));
        $this->assertTrue($child->isChild());
        $this->assertTrue($parent->isParent());
    }

    /**
     * Test Case: LEARN-008
     * Feature: Course price calculations
     * Priority: High
     */
    public function test_course_price_calculations()
    {
        $course = LearningCourse::factory()->create([
            'price' => 100.00,
            'discount_price' => 75.00
        ]);

        $this->assertEquals(75.00, $course->getEffectivePriceAttribute());
        $this->assertEquals(25, $course->getDiscountPercentageAttribute());
        $this->assertTrue($course->isDiscounted());
        $this->assertFalse($course->isFree());
    }

    /**
     * Test Case: LEARN-009
     * Feature: Free course identification
     * Priority: Medium
     */
    public function test_course_free_identification()
    {
        $freeCourse = LearningCourse::factory()->create(['price' => 0]);
        $freeDiscountedCourse = LearningCourse::factory()->create([
            'price' => 50.00,
            'discount_price' => 0
        ]);
        $paidCourse = LearningCourse::factory()->create(['price' => 99.99]);

        $this->assertTrue($freeCourse->isFree());
        $this->assertTrue($freeDiscountedCourse->isFree());
        $this->assertFalse($paidCourse->isFree());
    }

    /**
     * Test Case: LEARN-010
     * Feature: Course level filtering
     * Priority: Medium
     */
    public function test_user_can_filter_courses_by_level()
    {
        LearningCourse::factory()->create([
            'level' => 'beginner',
            'is_published' => true
        ]);
        LearningCourse::factory()->create([
            'level' => 'advanced',
            'is_published' => true
        ]);

        $response = $this->get(route('learning.courses.index', ['level' => 'beginner']));

        $response->assertStatus(200);
        $response->assertViewHas('courses');
    }

    /**
     * Test Case: LEARN-011
     * Feature: My Learning page
     * Priority: High
     */
    public function test_user_can_view_enrolled_courses()
    {
        $user = User::factory()->create();
        $course1 = LearningCourse::factory()->create(['is_published' => true]);
        $course2 = LearningCourse::factory()->create(['is_published' => true]);
        
        // Enroll user in courses
        $course1->students()->attach($user->id, ['enrolled_at' => now()]);
        $course2->students()->attach($user->id, ['enrolled_at' => now()]);

        $response = $this->actingAs($user)
                         ->get(route('learning.my-learning'));

        $response->assertStatus(200);
        $response->assertViewHas('enrolledCourses');
    }

    /**
     * Test Case: LEARN-012
     * Feature: Featured courses
     * Priority: Medium
     */
    public function test_featured_courses_page_shows_featured_courses()
    {
        $featuredCourse = LearningCourse::factory()->create([
            'is_featured' => true,
            'is_published' => true
        ]);
        $regularCourse = LearningCourse::factory()->create([
            'is_featured' => false,
            'is_published' => true
        ]);

        $response = $this->get(route('learning.featured'));

        $response->assertStatus(200);
        $response->assertViewHas('featuredCourses');
    }

    /**
     * Test Case: LEARN-013
     * Feature: Course search functionality
     * Priority: Medium
     */
    public function test_user_can_search_courses_by_title()
    {
        LearningCourse::factory()->create([
            'title' => 'Advanced React Course',
            'is_published' => true
        ]);
        LearningCourse::factory()->create([
            'title' => 'Vue.js Fundamentals',
            'is_published' => true
        ]);

        $response = $this->get(route('learning.courses.index', ['search' => 'React']));

        $response->assertStatus(200);
        $response->assertViewHas('courses');
    }

    /**
     * Test Case: LEARN-014
     * Feature: Course authorization
     * Priority: High
     */
    public function test_only_instructor_can_edit_their_course()
    {
        $instructor1 = User::factory()->create();
        $instructor2 = User::factory()->create();
        
        $course = LearningCourse::factory()->create([
            'instructor_id' => $instructor1->id
        ]);

        // Instructor 1 can edit
        $response = $this->actingAs($instructor1)
                         ->get(route('learning.courses.edit', $course));
        $response->assertStatus(200);

        // Instructor 2 cannot edit
        $response = $this->actingAs($instructor2)
                         ->get(route('learning.courses.edit', $course));
        $response->assertStatus(403);
    }

    /**
     * Test Case: LEARN-015
     * Feature: Course rating display
     * Priority: Low
     */
    public function test_course_rating_stars_display()
    {
        $course = LearningCourse::factory()->create(['rating' => 4.5]);

        $ratingStars = $course->getRatingStarsAttribute();
        
        // Should contain 4 full stars, 1 half star
        $this->assertStringContainsString('★★★★☆', $ratingStars);
    }

    /**
     * Test Case: LEARN-016
     * Feature: Course deletion with thumbnail cleanup
     * Priority: Medium
     */
    public function test_course_deletion_removes_thumbnail()
    {
        $instructor = User::factory()->create();
        $course = LearningCourse::factory()->create([
            'instructor_id' => $instructor->id,
            'thumbnail' => 'course-thumbnails/test.jpg'
        ]);

        // Create fake file
        Storage::disk('public')->put('course-thumbnails/test.jpg', 'fake content');

        $response = $this->actingAs($instructor)
                         ->delete(route('learning.courses.destroy', $course));

        $response->assertRedirect();
        $this->assertDatabaseMissing('learning_courses', ['id' => $course->id]);
        Storage::disk('public')->assertMissing('course-thumbnails/test.jpg');
    }

    /**
     * Test Case: LEARN-017
     * Feature: Published courses only in public listing
     * Priority: High
     */
    public function test_only_published_courses_shown_in_public_listing()
    {
        $publishedCourse = LearningCourse::factory()->create([
            'is_published' => true,
            'title' => 'Published Course'
        ]);
        $draftCourse = LearningCourse::factory()->create([
            'is_published' => false,
            'title' => 'Draft Course'
        ]);

        $response = $this->get(route('learning.courses.index'));

        $response->assertStatus(200);
        $response->assertSee('Published Course');
        $response->assertDontSee('Draft Course');
    }
}
