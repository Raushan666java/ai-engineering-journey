@extends('layouts.app')

@section('content')
<div class="container">
    <!-- Welcome Header -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card bg-primary text-white">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h2 class="mb-1">
                                <i class="fas fa-tachometer-alt me-2"></i>
                                Welcome back, {{ $contractor->name }}!
                            </h2>
                            <p class="mb-0 opacity-75">
                                Status: 
                                <span class="badge badge-{{ $contractor->status == 'active' ? 'success' : 'warning' }}">
                                    {{ ucfirst($contractor->status) }}
                                </span>
                                @if($contractor->status == 'pending_approval')
                                    - Your account is pending approval
                                @endif
                            </p>
                        </div>
                        <div class="col-md-4 text-end">
                            <i class="fas fa-user-tie fa-3x opacity-50"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Profile Overview -->
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-header">
                    <h5 class="mb-0">
                        <i class="fas fa-user me-2"></i>
                        Profile Overview
                    </h5>
                </div>
                <div class="card-body">
                    <div class="text-center mb-3">
                        <div class="avatar-placeholder bg-secondary rounded-circle mx-auto mb-2" style="width: 80px; height: 80px; line-height: 80px;">
                            <i class="fas fa-user fa-2x text-white"></i>
                        </div>
                        <h6>{{ $contractor->name }}</h6>
                        <small class="text-muted">{{ $contractor->experience_level }} Developer</small>
                    </div>

                    <hr>

                    <div class="mb-2">
                        <strong>Email:</strong><br>
                        <small>{{ $contractor->email }}</small>
                    </div>

                    @if($contractor->phone)
                    <div class="mb-2">
                        <strong>Phone:</strong><br>
                        <small>{{ $contractor->phone }}</small>
                    </div>
                    @endif

                    @if($contractor->company_name)
                    <div class="mb-2">
                        <strong>Company:</strong><br>
                        <small>{{ $contractor->company_name }}</small>
                    </div>
                    @endif

                    @if($contractor->hourly_rate)
                    <div class="mb-2">
                        <strong>Hourly Rate:</strong><br>
                        <small>${{ number_format($contractor->hourly_rate, 2) }}/hour</small>
                    </div>
                    @endif

                    <div class="mt-3">
                        <a href="{{ route('contractor.profile') }}" class="btn btn-outline-primary btn-sm w-100">
                            <i class="fas fa-edit me-1"></i>
                            Edit Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Statistics -->
        <div class="col-md-8 mb-4">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="fas fa-project-diagram fa-2x text-info mb-2"></i>
                            <h5 class="card-title">{{ $contractor->completed_projects ?? 0 }}</h5>
                            <p class="card-text">Completed Projects</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="fas fa-star fa-2x text-warning mb-2"></i>
                            <h5 class="card-title">{{ number_format($contractor->rating ?? 0, 1) }}</h5>
                            <p class="card-text">Average Rating</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="fas fa-dollar-sign fa-2x text-success mb-2"></i>
                            <h5 class="card-title">${{ number_format($contractor->total_earnings ?? 0, 2) }}</h5>
                            <p class="card-text">Total Earnings</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="card text-center">
                        <div class="card-body">
                            @if($contractor->is_available)
                                <i class="fas fa-check-circle fa-2x text-success mb-2"></i>
                                <h5 class="card-title text-success">Available</h5>
                            @else
                                <i class="fas fa-times-circle fa-2x text-danger mb-2"></i>
                                <h5 class="card-title text-danger">Unavailable</h5>
                            @endif
                            <p class="card-text">Availability Status</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Activity & Quick Actions -->
    <div class="row">
        <div class="col-md-8 mb-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">
                        <i class="fas fa-history me-2"></i>
                        Recent Activity
                    </h5>
                </div>
                <div class="card-body">
                    <div class="text-center text-muted py-4">
                        <i class="fas fa-inbox fa-3x mb-3"></i>
                        <p>No recent activity</p>
                        <small>Your recent project updates and notifications will appear here</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">
                        <i class="fas fa-bolt me-2"></i>
                        Quick Actions
                    </h5>
                </div>
                <div class="card-body">
                    <div class="d-grid gap-2">
                        <a href="{{ route('contractor.profile') }}" class="btn btn-outline-primary">
                            <i class="fas fa-user-edit me-2"></i>
                            Update Profile
                        </a>
                        
                        <button class="btn btn-outline-info" onclick="toggleAvailability()">
                            <i class="fas fa-toggle-{{ $contractor->is_available ? 'on' : 'off' }} me-2"></i>
                            {{ $contractor->is_available ? 'Set Unavailable' : 'Set Available' }}
                        </button>

                        <a href="#" class="btn btn-outline-success">
                            <i class="fas fa-search me-2"></i>
                            Browse Projects
                        </a>

                        <a href="#" class="btn btn-outline-warning">
                            <i class="fas fa-envelope me-2"></i>
                            Messages
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
function toggleAvailability() {
    if (confirm('Are you sure you want to change your availability status?')) {
        // Add AJAX call to toggle availability
        alert('Feature coming soon!');
    }
}
</script>
@endsection
