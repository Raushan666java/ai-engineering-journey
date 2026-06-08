@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h3 mb-0">All Learning Courses</h1>
                <a href="{{ route('learning.courses.create') }}" class="btn btn-primary">
                    <i class="fas fa-plus"></i> New Course
                </a>
            </div>

            <!-- Filters and Search -->
            <div class="card mb-4">
                <div class="card-body">
                    <form method="GET" class="row g-3">
                        <div class="col-md-4">
                            <label for="search" class="form-label">Search Courses</label>
                            <input type="text" class="form-control" id="search" name="search" value="{{ request('search') }}" placeholder="Course name...">
                        </div>
                        <div class="col-md-3">
                            <label for="category" class="form-label">Category</label>
                            <select class="form-select" id="category" name="category">
                                <option value="">All Categories</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}" {{ request('category') == $category->id ? 'selected' : '' }}>{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-select" id="status" name="status">
                                <option value="">All Status</option>
                                <option value="published" {{ request('status') == 'published' ? 'selected' : '' }}>Published</option>
                                <option value="draft" {{ request('status') == 'draft' ? 'selected' : '' }}>Draft</option>
                            </select>
                        </div>
                        <div class="col-md-2 d-flex align-items-end">
                            <button type="submit" class="btn btn-outline-primary me-2">Filter</button>
                            <a href="{{ route('learning.courses.index') }}" class="btn btn-outline-secondary">Clear</a>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Courses Grid -->
            @if($courses->count() > 0)
                <div class="row">
                    @foreach($courses as $course)
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h5 class="card-title mb-0">
                                        <a href="{{ route('learning.courses.show', $course) }}" class="text-decoration-none">
                                            {{ $course->name }}
                                        </a>
                                    </h5>
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="{{ route('learning.courses.show', $course) }}">
                                                <i class="fas fa-eye"></i> View
                                            </a></li>
                                            <li><a class="dropdown-item" href="{{ route('learning.courses.edit', $course) }}">
                                                <i class="fas fa-edit"></i> Edit
                                            </a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li>
                                                <form action="{{ route('learning.courses.destroy', $course) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this course?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="dropdown-item text-danger">
                                                        <i class="fas fa-trash"></i> Delete
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{{ Str::limit($course->description, 100) }}</p>
                                    <div class="mb-3">
                                        <span class="text-muted">Category:</span>
                                        <span>{{ $course->category->name ?? 'N/A' }}</span>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">Status:</span>
                                        <span class="badge bg-{{ $course->status == 'published' ? 'success' : 'secondary' }}">{{ ucfirst($course->status) }}</span>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">Created:</span>
                                        <span>{{ $course->created_at->format('M d, Y') }}</span>
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
                    {{ $courses->withQueryString()->links() }}
                </div>
            @else
                <div class="text-center py-5">
                    <div class="mb-4">
                        <i class="fas fa-book fa-4x text-muted"></i>
                    </div>
                    <h4>No Courses Found</h4>
                    <p class="text-muted">
                        @if(request()->hasAny(['search', 'category', 'status']))
                            No courses match your current filters. Try adjusting your search criteria.
                        @else
                            You haven't created any courses yet. Start by creating your first course.
                        @endif
                    </p>
                    <a href="{{ route('learning.courses.create') }}" class="btn btn-primary">
                        <i class="fas fa-plus"></i> Create First Course
                    </a>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
