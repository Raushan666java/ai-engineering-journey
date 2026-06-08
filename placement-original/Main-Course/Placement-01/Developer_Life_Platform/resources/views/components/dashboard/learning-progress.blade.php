@props([
    'progressData' => [],
    'title' => 'Learning Progress'
])

@php
$defaultData = [
    'current_course' => 'Full Stack Development',
    'completion_percentage' => 73,
    'hours_this_week' => 18,
    'courses_completed' => 5,
    'active_courses' => 3,
    'recent_courses' => [
        ['name' => 'React Fundamentals', 'progress' => 100, 'completed_at' => '2 days ago'],
        ['name' => 'Node.js Backend', 'progress' => 85, 'completed_at' => null],
        ['name' => 'Database Design', 'progress' => 45, 'completed_at' => null]
    ]
];
$data = array_merge($defaultData, is_array($progressData) ? $progressData : []);
@endphp
<div class="col-xxl-8">
  <div class="card dashboard-card h-100">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
        <a href="{{ route('learning.dashboard') }}" class="btn btn-sm btn-outline-primary">
          <i class="fas fa-external-link-alt me-1"></i> View All
        </a>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- Current Course Progress -->
      <div class="row mb-4">
        <div class="col-md-8">
          <div class="mb-3">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="mb-0 fw-semibold">Current Focus: {{ $data['current_course'] }}</h6>
              <span class="text-primary fw-bold">{{ $data['completion_percentage'] }}%</span>
            </div>
            <div class="dashboard-progress-bar" style="height: 12px;">
              <div class="dashboard-progress-fill" style="width: {{ $data['completion_percentage'] }}%"></div>
            </div>
            <small class="text-body-secondary mt-1 d-block">
              {{ 100 - $data['completion_percentage'] }}% remaining • Estimated completion: 3 weeks
            </small>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row text-center">
            <div class="col-6">
              <h4 class="text-primary mb-0">{{ $data['hours_this_week'] }}</h4>
              <small class="text-body-secondary">Hours this week</small>
            </div>
            <div class="col-6">
              <h4 class="text-success mb-0">{{ $data['courses_completed'] }}</h4>
              <small class="text-body-secondary">Completed</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Learning Chart -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Learning Activity (Last 30 Days)</h6>
        <div class="echart-dashboard-progress" 
             data-chart-config='{"tooltip":{"trigger":"axis","backgroundColor":"rgba(255,255,255,0.95)"},"xAxis":{"type":"category","data":["Week 1","Week 2","Week 3","Week 4"],"axisLine":{"lineStyle":{"color":"#e6ecf5"}}},"yAxis":{"type":"value","name":"Hours","axisLine":{"show":false}},"series":[{"name":"Study Hours","type":"bar","data":[12,15,18,22],"itemStyle":{"color":"#2c7be5","borderRadius":[4,4,0,0]}},{"name":"Practice Hours","type":"bar","data":[8,10,12,14],"itemStyle":{"color":"#00d27a","borderRadius":[4,4,0,0]}}],"grid":{"top":"10%","left":"3%","right":"4%","bottom":"3%","containLabel":true}}'>
        </div>
      </div>

      <!-- Recent Courses -->
      <div class="mb-3">
        <h6 class="fw-semibold mb-3">Recent Courses</h6>
        <div class="row">
          @foreach($data['recent_courses'] as $course)
            <div class="col-md-4 mb-3">
              <div class="card border-0 bg-light">
                <div class="card-body p-3">
                  <h6 class="card-title mb-2 fw-semibold">{{ $course['name'] }}</h6>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="text-body-secondary small">Progress</span>
                    <span class="fw-bold text-{{ $course['progress'] == 100 ? 'success' : 'primary' }}">
                      {{ $course['progress'] }}%
                    </span>
                  </div>
                  <div class="dashboard-progress-bar" style="height: 6px;">
                    <div class="dashboard-progress-fill" style="width: {{ $course['progress'] }}%"></div>
                  </div>
                  @if($course['completed_at'])
                    <small class="text-success d-block mt-2">
                      <i class="fas fa-check-circle me-1"></i>Completed {{ $course['completed_at'] }}
                    </small>
                  @else
                    <small class="text-body-secondary d-block mt-2">
                      <i class="fas fa-clock me-1"></i>In Progress
                    </small>
                  @endif
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="d-flex gap-2 flex-wrap">
        <a href="{{ route('learning.courses.index') }}" class="btn btn-sm btn-primary">
          <i class="fas fa-plus me-1"></i> Enroll Course
        </a>
        <a href="{{ route('learning.my-learning') }}" class="btn btn-sm btn-outline-secondary">
          <i class="fas fa-book-open me-1"></i> Continue Learning
        </a>
        <a href="{{ route('progress.index') }}" class="btn btn-sm btn-outline-info">
          <i class="fas fa-chart-line me-1"></i> View Progress
        </a>
      </div>
    </div>
  </div>
</div>
