@props([
    'platformData' => [],
    'title' => 'Platform Overview'
])

@php
$defaultData = [
    'platform_stats' => [
        'total_users' => 15247,
        'active_courses' => 45,
        'total_problems' => 1250,
        'success_rate' => 87.5
    ],
    'featured_courses' => [
        [
            'name' => 'Complete JavaScript Mastery',
            'enrolled' => 1247,
            'rating' => 4.8,
            'duration' => '40 hours',
            'level' => 'Intermediate',
            'image' => 'javascript-course.jpg'
        ],
        [
            'name' => 'React Advanced Patterns',
            'enrolled' => 892,
            'rating' => 4.9,
            'duration' => '25 hours',
            'level' => 'Advanced',
            'image' => 'react-course.jpg'
        ],
        [
            'name' => 'System Design Fundamentals',
            'enrolled' => 1156,
            'rating' => 4.7,
            'duration' => '30 hours',
            'level' => 'Intermediate',
            'image' => 'system-design-course.jpg'
        ]
    ],
    'quick_links' => [
        ['name' => 'Course Catalog', 'url' => 'courses.index', 'icon' => 'fas fa-book', 'color' => 'primary'],
  ['name' => 'Practice Problems', 'url' => 'dsa.problems.index', 'icon' => 'fas fa-code', 'color' => 'success'],
  ['name' => 'Job Board', 'url' => '#', 'icon' => 'fas fa-briefcase', 'color' => 'info'],
        ['name' => 'Community Forum', 'url' => 'community.index', 'icon' => 'fas fa-users', 'color' => 'warning'],
        ['name' => 'Interview Prep', 'url' => 'interview.index', 'icon' => 'fas fa-microphone', 'color' => 'danger'],
        ['name' => 'Resources', 'url' => 'resources.index', 'icon' => 'fas fa-file-alt', 'color' => 'secondary']
    ],
    'announcements' => [
        [
            'title' => 'New Course: Advanced React Patterns',
            'content' => 'Learn advanced React patterns and best practices with real-world projects.',
            'date' => '2 days ago',
            'type' => 'course'
        ],
        [
            'title' => 'Weekly Coding Challenge',
            'content' => 'Join our weekly coding challenge and compete with developers worldwide.',
            'date' => '5 days ago',
            'type' => 'challenge'
        ]
    ]
];

$data = !empty($platformData) ? $platformData : $defaultData;
@endphp

<div class="col-lg-12">
  <div class="card dashboard-card">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-primary" onclick="refreshPlatformData()">
            <i class="fas fa-sync-alt me-1"></i> Refresh
          </button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- Platform Statistics -->
      <div class="row mb-4">
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="text-center p-3 bg-primary bg-opacity-10 rounded">
            <i class="fas fa-users fa-2x text-primary mb-2"></i>
            <h4 class="text-primary mb-1">{{ number_format($data['platform_stats']['total_users']) }}</h4>
            <small class="text-body-secondary">Total Users</small>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="text-center p-3 bg-success bg-opacity-10 rounded">
            <i class="fas fa-graduation-cap fa-2x text-success mb-2"></i>
            <h4 class="text-success mb-1">{{ $data['platform_stats']['active_courses'] }}</h4>
            <small class="text-body-secondary">Active Courses</small>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="text-center p-3 bg-info bg-opacity-10 rounded">
            <i class="fas fa-code fa-2x text-info mb-2"></i>
            <h4 class="text-info mb-1">{{ number_format($data['platform_stats']['total_problems']) }}</h4>
            <small class="text-body-secondary">Total Problems</small>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="text-center p-3 bg-warning bg-opacity-10 rounded">
            <i class="fas fa-chart-line fa-2x text-warning mb-2"></i>
            <h4 class="text-warning mb-1">{{ $data['platform_stats']['success_rate'] }}%</h4>
            <small class="text-body-secondary">Success Rate</small>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Quick Links -->
        <div class="col-md-6 mb-4">
          <h6 class="fw-semibold mb-3">Quick Access</h6>
          <div class="row">
            @foreach($data['quick_links'] as $link)
              <div class="col-6 mb-2">
                {{-- <a href="{{ route($link['url']) ?? '#' }}" class="btn btn-outline-{{ $link['color'] }} btn-sm w-100">
                  <i class="{{ $link['icon'] }} me-2"></i>{{ $link['name'] }}
                </a> --}}
              </div>
            @endforeach
          </div>
        </div>

        <!-- Announcements -->
        <div class="col-md-6 mb-4">
          <h6 class="fw-semibold mb-3">Announcements</h6>
          @foreach($data['announcements'] as $announcement)
            <div class="dashboard-activity-item">
              <div class="d-flex align-items-start">
                <div class="me-3">
                  @if($announcement['type'] === 'course')
                    <i class="fas fa-graduation-cap text-primary"></i>
                  @else
                    <i class="fas fa-trophy text-warning"></i>
                  @endif
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1 fw-semibold">{{ $announcement['title'] }}</h6>
                  <p class="mb-1 text-body-secondary small">{{ $announcement['content'] }}</p>
                  <small class="text-body-secondary">{{ $announcement['date'] }}</small>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>

      <!-- Featured Courses -->
      <div class="mb-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h6 class="fw-semibold mb-0">Featured Courses</h6>
          <a href="{{ route('courses.index') ?? '#' }}" class="btn btn-sm btn-outline-primary">
            <i class="fas fa-external-link-alt me-1"></i> View All
          </a>
        </div>
        <div class="row">
          @foreach($data['featured_courses'] as $course)
            <div class="col-md-4 mb-3">
              <div class="card border">
                <div class="card-body p-3">
                  <h6 class="card-title fw-semibold">{{ $course['name'] }}</h6>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="badge bg-light text-dark">{{ $course['level'] }}</span>
                    <div class="d-flex align-items-center">
                      <i class="fas fa-star text-warning me-1"></i>
                      <small>{{ $course['rating'] }}</small>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between text-body-secondary small">
                    <span><i class="fas fa-clock me-1"></i>{{ $course['duration'] }}</span>
                    <span><i class="fas fa-users me-1"></i>{{ number_format($course['enrolled']) }}</span>
                  </div>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>

      <!-- Platform Health -->
      <div class="mb-3">
        <h6 class="fw-semibold mb-3">Platform Health</h6>
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span>Server Performance</span>
              <span class="text-success fw-bold">99.9%</span>
            </div>
            <div class="dashboard-progress-bar">
              <div class="dashboard-progress-fill bg-success" style="width: 99.9%"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span>User Satisfaction</span>
              <span class="text-primary fw-bold">94.2%</span>
            </div>
            <div class="dashboard-progress-bar">
              <div class="dashboard-progress-fill bg-primary" style="width: 94.2%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function refreshPlatformData() {
  console.log('Refreshing platform data...');
  // You can implement AJAX call here to refresh platform data
}
</script>
