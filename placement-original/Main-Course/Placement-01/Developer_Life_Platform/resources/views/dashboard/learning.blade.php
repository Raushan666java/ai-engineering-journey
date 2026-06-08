@extends('layouts.app')

@section('title', 'Learning - Developer Life Platform')
@section('description', 'Explore our comprehensive learning subjects and courses to advance your skills.')

@section('content')
<div class="container py-4">
    <!-- Header Section -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="text-center">
                <h1 class="display-4 fw-bold text-dark mb-3">
                    <i class="fas fa-graduation-cap text-primary me-3"></i>
                    Learning Center
                </h1>
                <p class="lead text-muted mb-4">
                    Discover courses and subjects tailored to accelerate your software engineering journey
                </p>
            </div>
        </div>
    </div>

    <!-- Learning Statistics -->
    <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-book-open fa-3x text-primary"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $categories->sum('courses_count') ?? 50 }}</h3>
                    <p class="text-muted mb-0">Total Courses</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-users fa-3x text-success"></i>
                    </div>
                    <h3 class="h4 fw-bold">15000+</h3>
                    <p class="text-muted mb-0">Active Learners</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-star fa-3x text-warning"></i>
                    </div>
                    <h3 class="h4 fw-bold">4.8</h3>
                    <p class="text-muted mb-0">Average Rating</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-certificate fa-3x text-info"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ auth()->check() ? 5 : 0 }}</h3>
                    <p class="text-muted mb-0">Certificates Earned</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Learning Categories -->
    @forelse($categories as $category)
        <div class="mb-5">
            <div class="d-flex align-items-center mb-4">
                <h2 class="h3 fw-bold text-dark mb-0 me-3">
                    {{ $category->name }}
                </h2>
                <div class="flex-grow-1">
                    <hr class="my-0">
                </div>
                <span class="badge bg-primary">{{ $category->courses_count }} courses</span>
            </div>

            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border-0 shadow-sm h-100 hover-lift">
                        <div class="card-body p-4">
                            <div class="d-flex align-items-start mb-3">
                                <div class="me-3">
                                    <div class="rounded-circle p-3 d-inline-flex align-items-center justify-content-center" 
                                         style="background-color: {{ $category->color ?? '#007bff' }}20; color: {{ $category->color ?? '#007bff' }}; width: 60px; height: 60px;">
                                        <i class="{{ $category->icon ?? 'fas fa-book' }} fa-lg"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <h5 class="fw-bold mb-1">{{ $category->name }}</h5>
                                    <div class="d-flex align-items-center mb-2">
                                        <span class="badge bg-light text-dark me-2">
                                            {{ $category->is_active ? 'Active' : 'Inactive' }}
                                        </span>
                                        <small class="text-muted">
                                            <i class="fas fa-book me-1"></i>
                                            {{ $category->courses_count }} courses
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <p class="text-muted mb-3">{{ Str::limit($category->description ?? 'Explore courses in this category', 100) }}</p>

                            <div class="d-flex align-items-center justify-content-between">
                                <small class="text-muted">
                                    <i class="fas fa-graduation-cap me-1"></i>
                                    Learning Path Available
                                </small>
                                <a href="{{ route('learning.courses.index') }}?category={{ $category->id }}" class="btn btn-outline-primary btn-sm">
                                    <i class="fas fa-arrow-right me-1"></i>
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @empty
        <div class="text-center py-5">
            <div class="mb-4">
                <i class="fas fa-book-open fa-4x text-muted"></i>
            </div>
            <h3 class="h4 text-muted">No learning categories available</h3>
            <p class="text-muted">Check back soon for new learning content!</p>
        </div>
    @endforelse

    <!-- Call to Action -->
    <div class="row mt-5">
        <div class="col-12">
            <div class="card bg-gradient text-white text-center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                <div class="card-body py-5">
                    <h3 class="fw-bold mb-3">Ready to Start Learning?</h3>
                    <p class="lead mb-4">Join thousands of developers who are advancing their careers with our comprehensive courses.</p>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="{{ route('dashboard') }}" class="btn btn-light btn-lg">
                            <i class="fas fa-home me-2"></i>
                            Back to Dashboard
                        </a>
                        <a href="{{ route('dashboard.coding') }}" class="btn btn-outline-light btn-lg">
                            <i class="fas fa-code me-2"></i>
                            Practice Coding
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.hover-lift {
    transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
    transform: translateY(-5px);
}
</style>
@endsection
