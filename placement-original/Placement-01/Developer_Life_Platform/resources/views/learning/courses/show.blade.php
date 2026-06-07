@extends('layouts.app')

@section('content')
<div class="container py-5">
    <div class="row">
        <div class="col-lg-8">
            <div class="mb-4">
                <h2 class="fw-bold">{{ $learningCourse->title }}</h2>
                <p class="text-muted">{{ $learningCourse->category->name ?? '' }}</p>
                <div class="mb-2">
                    <span class="badge bg-primary">{{ $learningCourse->level ?? 'Beginner' }}</span>
                    <span class="ms-2 text-success fw-semibold">{{ $learningCourse->price > 0 ? 'Paid' : 'Free' }}</span>
                </div>
                <p>{{ $learningCourse->description }}</p>
            </div>
            <div class="mb-4">
                <h5 class="fw-semibold">Course Content</h5>
                <ul class="list-group">
                    @foreach($learningCourse->lessons as $lesson)
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            {{ $lesson->title }}
                            <span class="badge bg-secondary">{{ $lesson->duration ?? 'N/A' }} min</span>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="mb-4">
                <h5 class="fw-semibold">About Instructor</h5>
                <div class="d-flex align-items-center">
                    <img src="{{ $learningCourse->instructor->avatar ?? asset('assets/img/default-avatar.png') }}" alt="Instructor" class="rounded-circle me-3" width="48" height="48">
                    <div>
                        <div class="fw-bold">{{ $learningCourse->instructor->name ?? 'Instructor' }}</div>
                        <div class="text-muted">{{ $learningCourse->instructor->bio ?? '' }}</div>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <h5 class="fw-semibold">Reviews</h5>
                @forelse($learningCourse->reviews as $review)
                    <div class="border rounded p-3 mb-2">
                        <div class="d-flex align-items-center mb-1">
                            <strong>{{ $review->user->name }}</strong>
                            <span class="ms-2 text-warning">
                                @for($i = 1; $i <= 5; $i++)
                                    <i class="fas fa-star{{ $i <= $review->rating ? '' : '-o' }}"></i>
                                @endfor
                            </span>
                        </div>
                        <div class="text-muted small mb-1">{{ $review->created_at->diffForHumans() }}</div>
                        <div>{{ $review->comment }}</div>
                    </div>
                @empty
                    <p class="text-muted">No reviews yet.</p>
                @endforelse
            </div>
            <div class="mb-4">
                <h5 class="fw-semibold">Related Courses</h5>
                <div class="row">
                    @forelse($relatedCourses as $related)
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h6 class="fw-bold mb-1">{{ $related->title }}</h6>
                                    <p class="text-muted mb-2">{{ $related->category->name ?? '' }}</p>
                                    <a href="{{ route('learning.courses.show', $related->id) }}" class="btn btn-outline-primary btn-sm">View Course</a>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="col-12">
                            <p class="text-muted">No related courses found.</p>
                        </div>
                    @endforelse
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="fw-bold mb-3">Course Actions</h5>
                    @auth
                        @if($isEnrolled)
                            <button class="btn btn-success w-100 mb-2" disabled>
                                Enrolled ({{ $progress }}% complete)
                            </button>
                        @else
                           <form method="POST" action="{{ route('learning.courses.enroll', $learningCourse->id) }}">
                                @csrf
                                <button type="submit" class="btn btn-success w-100 mb-2">
                                    Enroll Now
                                </button>
                            </form>
                        @endif
                    @else
                        <a href="{{ route('login') }}" class="btn btn-primary w-100 mb-2">Sign in to Enroll</a>
                    @endauth
                    <a href="{{ route('learning.courses.index') }}" class="btn btn-outline-secondary w-100">Back to Courses</a>
                </div>
            </div>
            <div class="card shadow-sm">
                <div class="card-body">
                    <h6 class="fw-semibold mb-2">Course Details</h6>
                    <ul class="list-unstyled mb-0">
                        <li><strong>Lessons:</strong> {{ $learningCourse->lessons->count() }}</li>
                        <li><strong>Duration:</strong> {{ $learningCourse->lessons->sum('duration') }} min</li>
                        <li><strong>Level:</strong> {{ $learningCourse->level ?? 'Beginner' }}</li>
                        <li><strong>Price:</strong> {{ $learningCourse->price > 0 ? '₹' . $learningCourse->price : 'Free' }}</li>
                        <li><strong>Enrolled:</strong> {{ $learningCourse->enrollments->count() }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection