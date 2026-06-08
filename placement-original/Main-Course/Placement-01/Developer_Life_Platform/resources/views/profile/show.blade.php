@extends('layouts.app')

@section('title', 'Profile - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <!-- Profile Card -->
            <div class="card">
                <div class="card-body text-center">
                    <div class="profile-avatar mb-3">
                        @if(Auth::user()->avatar)
                            <img src="{{ Auth::user()->avatar }}" alt="Avatar" class="rounded-circle" width="120" height="120">
                        @else
                            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto" style="width: 120px; height: 120px;">
                                <span class="text-white h1 mb-0">{{ strtoupper(substr(Auth::user()->name, 0, 1)) }}</span>
                            </div>
                        @endif
                    </div>
                    <h4 class="mb-1">{{ Auth::user()->name }}</h4>
                    <p class="text-muted mb-3">{{ Auth::user()->email }}</p>
                    
                    @if(Auth::user()->bio)
                        <p class="text-muted">{{ Auth::user()->bio }}</p>
                    @endif

                    <div class="d-flex justify-content-around text-center mt-4">
                        <div>
                            <h5 class="mb-0">{{ Auth::user()->problems_solved ?? 0 }}</h5>
                            <small class="text-muted">Problems Solved</small>
                        </div>
                        <div>
                            <h5 class="mb-0">{{ Auth::user()->study_streak ?? 0 }}</h5>
                            <small class="text-muted">Day Streak</small>
                        </div>
                        <div>
                            <h5 class="mb-0">{{ Auth::user()->points ?? 0 }}</h5>
                            <small class="text-muted">Points</small>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="#" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editProfileModal">
                            <i class="fas fa-edit me-1"></i> Edit Profile
                        </a>
                    </div>
                </div>
            </div>

            <!-- Skills Card -->
            <div class="card mt-4">
                <div class="card-header">
                    <h6 class="mb-0">Skills & Technologies</h6>
                </div>
                <div class="card-body">
                    <div class="skills-list">
                        @php
                            $skills = ['JavaScript', 'Python', 'Java', 'React', 'Laravel', 'MySQL', 'Git'];
                        @endphp
                        @foreach($skills as $skill)
                            <span class="badge bg-primary me-1 mb-1">{{ $skill }}</span>
                        @endforeach
                    </div>
                    <button class="btn btn-outline-primary btn-sm mt-2" onclick="editSkills()">
                        <i class="fas fa-plus me-1"></i> Add Skills
                    </button>
                </div>
            </div>

            <!-- Social Links -->
            <div class="card mt-4">
                <div class="card-header">
                    <h6 class="mb-0">Social Links</h6>
                </div>
                <div class="card-body">
                    <div class="social-links">
                        <a href="#" class="text-decoration-none d-block mb-2">
                            <i class="fab fa-github me-2"></i> GitHub
                        </a>
                        <a href="#" class="text-decoration-none d-block mb-2">
                            <i class="fab fa-linkedin me-2"></i> LinkedIn
                        </a>
                        <a href="#" class="text-decoration-none d-block mb-2">
                            <i class="fab fa-twitter me-2"></i> Twitter
                        </a>
                        <a href="#" class="text-decoration-none d-block">
                            <i class="fas fa-globe me-2"></i> Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Navigation Tabs -->
            <div class="card">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs" id="profileTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button" role="tab">
                                <i class="fas fa-chart-line me-1"></i> Activity
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="achievements-tab" data-bs-toggle="tab" data-bs-target="#achievements" type="button" role="tab">
                                <i class="fas fa-trophy me-1"></i> Achievements
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab">
                                <i class="fas fa-code me-1"></i> Projects
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="courses-tab" data-bs-toggle="tab" data-bs-target="#courses" type="button" role="tab">
                                <i class="fas fa-book me-1"></i> Courses
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content" id="profileTabsContent">
                        <!-- Activity Tab -->
                        <div class="tab-pane fade show active" id="activity" role="tabpanel">
                            <h6 class="mb-3">Recent Activity</h6>
                            <div class="activity-timeline">
                                <div class="activity-item d-flex mb-3">
                                    <div class="activity-icon me-3">
                                        <i class="fas fa-code text-primary"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h6 class="mb-1">Solved "Binary Search" Problem</h6>
                                        <small class="text-muted">2 hours ago</small>
                                        <p class="mb-0 mt-1 text-muted">Difficulty: Medium • Time: 15 minutes</p>
                                    </div>
                                </div>
                                <div class="activity-item d-flex mb-3">
                                    <div class="activity-icon me-3">
                                        <i class="fas fa-book text-success"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h6 class="mb-1">Completed "React Fundamentals" Module</h6>
                                        <small class="text-muted">1 day ago</small>
                                        <p class="mb-0 mt-1 text-muted">Progress: 100% • Duration: 3 hours</p>
                                    </div>
                                </div>
                                <div class="activity-item d-flex mb-3">
                                    <div class="activity-icon me-3">
                                        <i class="fas fa-trophy text-warning"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h6 class="mb-1">Earned "Problem Solver" Badge</h6>
                                        <small class="text-muted">2 days ago</small>
                                        <p class="mb-0 mt-1 text-muted">Solved 10 consecutive problems</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Achievements Tab -->
                        <div class="tab-pane fade" id="achievements" role="tabpanel">
                            <h6 class="mb-3">Badges & Achievements</h6>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="achievement-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="achievement-icon me-3">
                                                <i class="fas fa-fire text-danger fa-2x"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1">Streak Master</h6>
                                                <small class="text-muted">7-day coding streak</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="achievement-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="achievement-icon me-3">
                                                <i class="fas fa-puzzle-piece text-primary fa-2x"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1">Problem Solver</h6>
                                                <small class="text-muted">Solved 50+ problems</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="achievement-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="achievement-icon me-3">
                                                <i class="fas fa-graduation-cap text-success fa-2x"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1">Course Completionist</h6>
                                                <small class="text-muted">Completed 5 courses</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="achievement-card p-3 border rounded">
                                        <div class="d-flex align-items-center">
                                            <div class="achievement-icon me-3">
                                                <i class="fas fa-clock text-info fa-2x"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1">Time Tracker</h6>
                                                <small class="text-muted">100+ hours tracked</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Projects Tab -->
                        <div class="tab-pane fade" id="projects" role="tabpanel">
                            <h6 class="mb-3">My Projects</h6>
                            <div class="project-list">
                                <div class="project-item border rounded p-3 mb-3">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="mb-1">E-commerce Platform</h6>
                                            <p class="text-muted mb-2">Full-stack web application with Laravel & React</p>
                                            <div class="project-tech">
                                                <span class="badge bg-light text-dark me-1">Laravel</span>
                                                <span class="badge bg-light text-dark me-1">React</span>
                                                <span class="badge bg-light text-dark me-1">MySQL</span>
                                            </div>
                                        </div>
                                        <div class="project-status">
                                            <span class="badge bg-success">Completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item border rounded p-3 mb-3">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="mb-1">Task Management App</h6>
                                            <p class="text-muted mb-2">Team collaboration and project tracking tool</p>
                                            <div class="project-tech">
                                                <span class="badge bg-light text-dark me-1">Vue.js</span>
                                                <span class="badge bg-light text-dark me-1">Node.js</span>
                                                <span class="badge bg-light text-dark me-1">MongoDB</span>
                                            </div>
                                        </div>
                                        <div class="project-status">
                                            <span class="badge bg-warning">In Progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Courses Tab -->
                        <div class="tab-pane fade" id="courses" role="tabpanel">
                            <h6 class="mb-3">Enrolled Courses</h6>
                            <div class="course-list">
                                <div class="course-item d-flex border rounded p-3 mb-3">
                                    <div class="course-thumb me-3">
                                        <div class="bg-primary rounded d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                            <i class="fas fa-code text-white"></i>
                                        </div>
                                    </div>
                                    <div class="course-details flex-grow-1">
                                        <h6 class="mb-1">Advanced JavaScript Concepts</h6>
                                        <p class="text-muted mb-2">Master closures, prototypes, and async programming</p>
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-primary" style="width: 75%"></div>
                                        </div>
                                        <small class="text-muted">75% Complete</small>
                                    </div>
                                </div>
                                <div class="course-item d-flex border rounded p-3 mb-3">
                                    <div class="course-thumb me-3">
                                        <div class="bg-success rounded d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                            <i class="fas fa-database text-white"></i>
                                        </div>
                                    </div>
                                    <div class="course-details flex-grow-1">
                                        <h6 class="mb-1">Database Design & SQL</h6>
                                        <p class="text-muted mb-2">Learn database normalization and advanced SQL queries</p>
                                        <div class="progress" style="height: 8px;">
                                            <div class="progress-bar bg-success" style="width: 100%"></div>
                                        </div>
                                        <small class="text-success">Completed</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Edit Profile Modal -->
<div class="modal fade" id="editProfileModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="name" value="{{ Auth::user()->name }}">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" value="{{ Auth::user()->email }}">
                    </div>
                    <div class="mb-3">
                        <label for="bio" class="form-label">Bio</label>
                        <textarea class="form-control" id="bio" rows="3" placeholder="Tell us about yourself...">{{ Auth::user()->bio ?? '' }}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="location" class="form-label">Location</label>
                        <input type="text" class="form-control" id="location" placeholder="City, Country">
                    </div>
                    <div class="mb-3">
                        <label for="website" class="form-label">Website</label>
                        <input type="url" class="form-control" id="website" placeholder="https://your-website.com">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Save Changes</button>
            </div>
        </div>
    </div>
</div>

<style>
.activity-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 50%;
}

.achievement-card {
    transition: all 0.3s ease;
}

.achievement-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.project-item {
    transition: all 0.3s ease;
}

.project-item:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.course-item {
    transition: all 0.3s ease;
}

.course-item:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.nav-tabs .nav-link {
    border: none;
    color: #666;
}

.nav-tabs .nav-link.active {
    background: none;
    border-bottom: 2px solid #007bff;
    color: #007bff;
}
</style>

<script>
function editSkills() {
    // Add functionality to edit skills
    alert('Skill editing functionality would be implemented here');
}
</script>
@endsection
