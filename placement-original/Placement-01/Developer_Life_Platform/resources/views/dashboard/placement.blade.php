@extends('layouts.app')

@section('title', 'Placement Preparation - Developer Life Platform')
@section('description', 'Prepare for technical interviews, track applications, and accelerate your job search.')

@section('content')
<div class="container py-4">
    <!-- Header Section -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="text-center">
                <h1 class="display-4 fw-bold text-dark mb-3">
                    <i class="fas fa-briefcase text-success me-3"></i>
                    Placement Preparation
                </h1>
                <p class="lead text-muted mb-4">
                    Master technical interviews, track applications, and land your dream job
                </p>
            </div>
        </div>
    </div>

    <!-- Placement Statistics -->
    <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-calendar-check fa-3x text-primary"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $placementStats['interviews_attended'] }}</h3>
                    <p class="text-muted mb-0">Interviews Attended</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-handshake fa-3x text-success"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $placementStats['offers_received'] }}</h3>
                    <p class="text-muted mb-0">Offers Received</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-building fa-3x text-warning"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $placementStats['companies_applied'] }}</h3>
                    <p class="text-muted mb-0">Companies Applied</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="fas fa-chart-line fa-3x text-info"></i>
                    </div>
                    <h3 class="h4 fw-bold">{{ $placementStats['preparation_score'] }}%</h3>
                    <p class="text-muted mb-0">Preparation Score</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <h5 class="fw-bold mb-4">
                        <i class="fas fa-bolt text-warning me-2"></i>
                        Quick Actions
                    </h5>
                    <div class="row g-3">
                        <div class="col-md-3">
                            <a href="#" class="btn btn-primary w-100 py-3">
                                <i class="fas fa-plus mb-2 d-block"></i>
                                Add Application
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-success w-100 py-3">
                                <i class="fas fa-calendar mb-2 d-block"></i>
                                Schedule Interview
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-info w-100 py-3">
                                <i class="fas fa-file-pdf mb-2 d-block"></i>
                                Update Resume
                            </a>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-warning w-100 py-3">
                                <i class="fas fa-chart-bar mb-2 d-block"></i>
                                View Analytics
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Interview Preparation Sections -->
    <div class="row g-4 mb-5">
        <div class="col-lg-4">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-code fa-3x text-primary"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Technical Questions</h5>
                    <p class="text-muted mb-4">
                        Practice coding problems and system design questions
                    </p>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <small>Progress</small>
                            <small>75%</small>
                        </div>
                        <div class="progress" style="height: 6px;">
                            <div class="progress-bar bg-primary" style="width: 75%"></div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-primary">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-comments fa-3x text-success"></i>
                    </div>
                    <h5 class="fw-bold mb-3">Behavioral Questions</h5>
                    <p class="text-muted mb-4">
                        Prepare for HR and behavioral interview scenarios
                    </p>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <small>Progress</small>
                            <small>60%</small>
                        </div>
                        <div class="progress" style="height: 6px;">
                            <div class="progress-bar bg-success" style="width: 60%"></div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-success">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card border-0 shadow-sm h-100 hover-lift">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        <i class="fas fa-project-diagram fa-3x text-warning"></i>
                    </div>
                    <h5 class="fw-bold mb-3">System Design</h5>
                    <p class="text-muted mb-4">
                        Learn to design scalable systems and architectures
                    </p>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <small>Progress</small>
                            <small>45%</small>
                        </div>
                        <div class="progress" style="height: 6px;">
                            <div class="progress-bar bg-warning" style="width: 45%"></div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-warning">
                        <i class="fas fa-arrow-right me-1"></i>
                        Practice Now
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Application Tracker -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mb-0">
                            <i class="fas fa-clipboard-list text-primary me-2"></i>
                            Application Tracker
                        </h5>
                        <a href="#" class="btn btn-sm btn-outline-primary">
                            <i class="fas fa-plus me-1"></i>
                            Add Application
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <thead>
                                <tr class="text-muted">
                                    <th>Company</th>
                                    <th>Position</th>
                                    <th>Applied Date</th>
                                    <th>Status</th>
                                    <th>Next Step</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <div class="bg-primary text-white rounded d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                                    G
                                                </div>
                                            </div>
                                            <div>
                                                <div class="fw-medium">Google</div>
                                                <small class="text-muted">Mountain View, CA</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="fw-medium">Software Engineer</div>
                                        <small class="text-muted">Full-time</small>
                                    </td>
                                    <td>Jan 15, 2025</td>
                                    <td><span class="badge bg-warning text-dark">Interview</span></td>
                                    <td>Technical Round</td>
                                    <td>
                                        <div class="btn-group btn-group-sm">
                                            <button class="btn btn-outline-primary">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="btn btn-outline-secondary">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <div class="bg-info text-white rounded d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                                    M
                                                </div>
                                            </div>
                                            <div>
                                                <div class="fw-medium">Microsoft</div>
                                                <small class="text-muted">Seattle, WA</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="fw-medium">Frontend Developer</div>
                                        <small class="text-muted">Full-time</small>
                                    </td>
                                    <td>Jan 12, 2025</td>
                                    <td><span class="badge bg-success">Offer</span></td>
                                    <td>Negotiate Salary</td>
                                    <td>
                                        <div class="btn-group btn-group-sm">
                                            <button class="btn btn-outline-primary">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="btn btn-outline-secondary">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <div class="bg-secondary text-white rounded d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                                    A
                                                </div>
                                            </div>
                                            <div>
                                                <div class="fw-medium">Amazon</div>
                                                <small class="text-muted">Austin, TX</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="fw-medium">Backend Engineer</div>
                                        <small class="text-muted">Full-time</small>
                                    </td>
                                    <td>Jan 10, 2025</td>
                                    <td><span class="badge bg-primary">Applied</span></td>
                                    <td>Wait for Response</td>
                                    <td>
                                        <div class="btn-group btn-group-sm">
                                            <button class="btn btn-outline-primary">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="btn btn-outline-secondary">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Interview Calendar -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="fw-bold mb-0">
                        <i class="fas fa-calendar-alt text-primary me-2"></i>
                        Upcoming Interviews
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card border border-primary">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h6 class="fw-bold mb-1">Google - Technical Round</h6>
                                            <small class="text-muted">Software Engineer Position</small>
                                        </div>
                                        <span class="badge bg-primary">Tomorrow</span>
                                    </div>
                                    <div class="mb-2">
                                        <i class="fas fa-clock me-2 text-muted"></i>
                                        <small>2:00 PM - 3:30 PM PST</small>
                                    </div>
                                    <div class="mb-2">
                                        <i class="fas fa-video me-2 text-muted"></i>
                                        <small>Google Meet</small>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <a href="#" class="btn btn-sm btn-primary">Join Meeting</a>
                                        <a href="#" class="btn btn-sm btn-outline-primary">Prepare</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card border border-info">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h6 class="fw-bold mb-1">Startup XYZ - Final Round</h6>
                                            <small class="text-muted">Full Stack Developer</small>
                                        </div>
                                        <span class="badge bg-info">Friday</span>
                                    </div>
                                    <div class="mb-2">
                                        <i class="fas fa-clock me-2 text-muted"></i>
                                        <small>10:00 AM - 11:00 AM EST</small>
                                    </div>
                                    <div class="mb-2">
                                        <i class="fas fa-map-marker-alt me-2 text-muted"></i>
                                        <small>On-site Interview</small>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <a href="#" class="btn btn-sm btn-info">Get Directions</a>
                                        <a href="#" class="btn btn-sm btn-outline-info">Prepare</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Resources Section -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-transparent border-0 pb-0">
                    <h5 class="fw-bold mb-0">
                        <i class="fas fa-book text-primary me-2"></i>
                        Interview Resources
                    </h5>
                </div>
                <div class="card-body">
                    <div class="row g-4">
                        <div class="col-md-3">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-question-circle fa-2x text-primary"></i>
                                </div>
                                <h6 class="fw-bold">Common Questions</h6>
                                <p class="text-muted mb-3">500+ curated questions</p>
                                <a href="#" class="btn btn-sm btn-outline-primary">Browse</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-file-pdf fa-2x text-success"></i>
                                </div>
                                <h6 class="fw-bold">Resume Templates</h6>
                                <p class="text-muted mb-3">Professional templates</p>
                                <a href="#" class="btn btn-sm btn-outline-success">Download</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-lightbulb fa-2x text-warning"></i>
                                </div>
                                <h6 class="fw-bold">Interview Tips</h6>
                                <p class="text-muted mb-3">Expert advice & guides</p>
                                <a href="#" class="btn btn-sm btn-outline-warning">Read</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center p-3 border rounded hover-lift">
                                <div class="mb-3">
                                    <i class="fas fa-users fa-2x text-info"></i>
                                </div>
                                <h6 class="fw-bold">Mock Interviews</h6>
                                <p class="text-muted mb-3">Practice with peers</p>
                                <a href="#" class="btn btn-sm btn-outline-info">Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="row">
        <div class="col-12">
            <div class="card bg-gradient text-white text-center" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                <div class="card-body py-5">
                    <h3 class="fw-bold mb-3">Ready to Land Your Dream Job?</h3>
                    <p class="lead mb-4">Prepare systematically, track your applications, and ace every interview with confidence.</p>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="#" class="btn btn-light btn-lg">
                            <i class="fas fa-rocket me-2"></i>
                            Start Preparation
                        </a>
                        <a href="{{ route('dashboard') }}" class="btn btn-outline-light btn-lg">
                            <i class="fas fa-home me-2"></i>
                            Back to Dashboard
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
    transform: translateY(-2px);
}
</style>
@endsection
