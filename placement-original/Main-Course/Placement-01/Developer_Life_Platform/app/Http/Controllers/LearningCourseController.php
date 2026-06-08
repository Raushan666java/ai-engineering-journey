<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\LearningCourse;
use App\Models\LearningCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class LearningCourseController extends Controller
{
    public function index(Request $request): View
    {
        $query = LearningCourse::with(['instructor', 'category'])->where('status', 'published');

        // Filter by category
        if ($request->filled('category')) {
            $query->where('category_id', $request->category);
        }

        // Filter by level
        if ($request->filled('level')) {
            $query->where('level', $request->level);
        }

        // Filter by price range
        if ($request->filled('price_range')) {
            switch ($request->price_range) {
                case 'free':
                    $query->where(function($q) {
                        $q->where('price', 0)->orWhere('discount_price', 0);
                    });
                    break;
                case 'paid':
                    $query->where(function($q) {
                        $q->where('price', '>', 0)->where(function($sq) {
                            $sq->whereNull('discount_price')->orWhere('discount_price', '>', 0);
                        });
                    });
                    break;
                case 'under_50':
                    $query->where(function($q) {
                        $q->where('price', '<=', 50)->orWhere('discount_price', '<=', 50);
                    });
                    break;
            }
        }

        // Search by title
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Sort options
        $sortBy = $request->get('sort', 'created_at');
        $sortOrder = $request->get('order', 'desc');
        
        $allowedSorts = ['title', 'price', 'rating', 'students_count', 'created_at'];
        if (in_array($sortBy, $allowedSorts)) {
            $query->orderBy($sortBy, $sortOrder);
        }

        $courses = $query->paginate(12);
        
        // Get filter options
        $categories = LearningCategory::where('is_active', true)->orderBy('name')->get();
        $levels = ['beginner', 'intermediate', 'advanced'];

        return view('learning.courses.index', compact('courses', 'categories', 'levels'));
    }

    public function show(LearningCourse $learningCourse): View
    {
        $learningCourse->load(['instructor', 'category', 'reviews.user']);
        
        $isEnrolled = false;
        $progress = 0;
        
        if (auth()->check()) {
            $enrollment = $learningCourse->enrollments()
                                       ->where('user_id', auth()->id())
                                       ->first();
            if ($enrollment) {
                $isEnrolled = true;
                $progress = $enrollment->progress ?? 0;
            }
        }

        $relatedCourses = LearningCourse::where('category_id', $learningCourse->category_id)
                                      ->where('id', '!=', $learningCourse->id)
                                      ->where('status', 'published')
                                      ->limit(4)
                                      ->get();

        return view('learning.courses.show', compact('learningCourse', 'isEnrolled', 'progress', 'relatedCourses'));
    }

    public function create(): View
    {
        $categories = LearningCategory::where('is_active', true)->orderBy('name')->get();
        return view('learning.courses.create', compact('categories'));
    }

    public function store(Request $request): RedirectResponse
    {
                $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'short_description' => 'required|string|max:500',
            'thumbnail' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'trailer_video' => 'nullable|url',
            'category_id' => 'required|exists:learning_categories,id',
            'level' => 'required|in:beginner,intermediate,advanced',
            'status' => 'required|in:draft,published,archived',
            'price' => 'required|numeric|min:0',
            'discounted_price' => 'nullable|numeric|min:0|lt:price',
            'tags' => 'required|array',
            'learning_outcomes' => 'required|array',
            'requirements' => 'nullable|array',
            'duration_hours' => 'required|integer|min:1',
            'languages' => 'nullable|array',
            'is_featured' => 'boolean',
            'has_certificate' => 'boolean',
            'certificate_threshold' => 'required_if:has_certificate,true|integer|min:50|max:100'
        ]);

        $validated['instructor_id'] = auth()->id();
        $validated['slug'] = Str::slug($validated['title']);

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('course-thumbnails', 'public');
        }

        $course = LearningCourse::create($validated);

        return redirect()->route('learning.courses.show', $course)
                        ->with('success', 'Course created successfully!');
    }

    public function edit(LearningCourse $learningCourse): View
    {
        $this->authorize('update', $learningCourse);
        
        $categories = LearningCategory::where('is_active', true)->orderBy('name')->get();
        return view('learning.courses.edit', compact('learningCourse', 'categories'));
    }

    public function update(Request $request, LearningCourse $learningCourse): RedirectResponse
    {
        $this->authorize('update', $learningCourse);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'thumbnail' => 'nullable|image|max:2048',
            'category_id' => 'required|exists:learning_categories,id',
            'level' => 'required|in:beginner,intermediate,advanced',
            'price' => 'required|numeric|min:0',
            'discount_price' => 'nullable|numeric|min:0|lt:price',
            'duration_hours' => 'required|integer|min:1',
            'lessons_count' => 'required|integer|min:1',
            'language' => 'required|string|max:50',
            'requirements' => 'array',
            'outcomes' => 'array',
            'is_published' => 'boolean',
            'certificate_available' => 'boolean',
        ]);

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail
            if ($learningCourse->thumbnail) {
                Storage::disk('public')->delete($learningCourse->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')->store('course-thumbnails', 'public');
        }

        $learningCourse->update($validated);

        return redirect()->route('learning.courses.show', $learningCourse)
                        ->with('success', 'Course updated successfully!');
    }

    public function destroy(LearningCourse $learningCourse): RedirectResponse
    {
        $this->authorize('delete', $learningCourse);

        // Delete thumbnail
        if ($learningCourse->thumbnail) {
            Storage::disk('public')->delete($learningCourse->thumbnail);
        }

        $learningCourse->delete();

        return redirect()->route('learning.courses.index')
                        ->with('success', 'Course deleted successfully!');
    }

    public function enroll(LearningCourse $learningCourse): RedirectResponse
    {
        $user = auth()->user();
        
        if ($learningCourse->students()->where('user_id', $user->id)->exists()) {
            return back()->with('info', 'You are already enrolled in this course.');
        }

        // For free courses, auto-enroll
        if ($learningCourse->isFree()) {
            $learningCourse->students()->attach($user->id, [
                'enrolled_at' => now(),
                'progress' => 0
            ]);

            return back()->with('success', 'Successfully enrolled in the course!');
        }

        // For paid courses, redirect to payment
        return redirect()->route('learning.courses.payment', $learningCourse);
    }

    public function myLearning(): View
    {
        $enrolledCourses = auth()->user()->enrolledCourses()
                                        ->with(['instructor', 'category'])
                                        ->paginate(12);

        return view('learning.my-learning', compact('enrolledCourses'));
    }

    public function featured(): View
    {
        $featuredCourses = LearningCourse::where('is_featured', 1)
                                       ->where('status', 'published')
                                       ->with(['instructor', 'category'])
                                       ->orderBy('enrolled_count', 'desc')
                                       ->paginate(12);

        return view('learning.courses.featured', compact('featuredCourses'));
    }
}
