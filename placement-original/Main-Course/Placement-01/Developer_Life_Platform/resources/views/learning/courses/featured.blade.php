@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h3 mb-0">Featured Courses</h1>
            </div>
            @if($featuredCourses->count() > 0)
                <div class="row">
                    @foreach($featuredCourses as $course)
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100 border-primary">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="card-title mb-0">
                                        <a href="{{ route('learning.courses.show', $course) }}" class="text-white text-decoration-none">
                                            <i class="fas fa-star me-1"></i> {{ $course->name }}
                                        </a>
                                    </h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{{ Str::limit($course->description, 100) }}</p>
                                    <div class="mb-3">
                                        <span class="text-muted">Category:</span>
                                        <span>{{ $course->category->name ?? 'N/A' }}</span>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">Level:</span>
                                        <span class="badge bg-info">{{ ucfirst($course->level) }}</span>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">Status:</span>
                                        <span class="badge bg-{{ $course->status == 'published' ? 'success' : 'secondary' }}">{{ ucfirst($course->status) }}</span>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <small class="text-muted">Last updated {{ $course->updated_at->diffForHumans() }}</small>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <!-- Pagination -->
                <div class="d-flex justify-content-center">
                    {{ $featuredCourses->withQueryString()->links() }}
                </div>
            @else
                <div class="text-center py-5">
                    <div class="mb-4">
                        <i class="fas fa-star fa-4x text-warning"></i>
                    </div>
                    <h4>No Featured Courses Found</h4>
                    <p class="text-muted">There are currently no featured courses available.</p>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
