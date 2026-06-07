@props([
    'projectData' => [],
    'title' => 'Project Analytics'
])

@php
$defaultData = [
    'total_projects' => 12,
    'completed_projects' => 8,
    'active_projects' => 3,
    'pending_projects' => 1,
    'recent_projects' => [
        ['name' => 'E-commerce Platform', 'status' => 'completed', 'progress' => 100, 'tech' => 'React, Node.js', 'updated' => '2 days ago'],
        ['name' => 'Task Management App', 'status' => 'active', 'progress' => 75, 'tech' => 'Vue.js, Laravel', 'updated' => '1 hour ago'],
        ['name' => 'Weather Dashboard', 'status' => 'active', 'progress' => 45, 'tech' => 'React, API', 'updated' => '3 hours ago']
    ],
    'tech_stack' => [
        'React' => 5,
        'Node.js' => 4,
        'Laravel' => 3,
        'Vue.js' => 2,
        'Python' => 2
    ]
];

// Merge projectData with defaults to ensure all keys exist
$data = array_merge($defaultData, is_array($projectData) ? $projectData : []);
$data['recent_projects'] = $data['recent_projects'] ?? $defaultData['recent_projects'];
$data['tech_stack'] = $data['tech_stack'] ?? $defaultData['tech_stack'];
@endphp

<div class="col-xxl-6">
  <div class="card dashboard-card h-100">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
        <a href="{{ route('projects.index') }}" class="btn btn-sm btn-outline-info">
          <i class="fas fa-external-link-alt me-1"></i> View All
        </a>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- Project Stats -->
      <div class="row mb-4">
        <div class="col-3 text-center">
          <h4 class="text-info mb-1">{{ $data['total_projects'] }}</h4>
          <small class="text-body-secondary">Total</small>
        </div>
        <div class="col-3 text-center">
          <h4 class="text-success mb-1">{{ $data['completed_projects'] }}</h4>
          <small class="text-body-secondary">Completed</small>
        </div>
        <div class="col-3 text-center">
          <h4 class="text-primary mb-1">{{ $data['active_projects'] }}</h4>
          <small class="text-body-secondary">Active</small>
        </div>
        <div class="col-3 text-center">
          <h4 class="text-warning mb-1">{{ $data['pending_projects'] }}</h4>
          <small class="text-body-secondary">Pending</small>
        </div>
      </div>

      <!-- Project Progress Chart -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Project Completion Rate</h6>
        <div class="echart-dashboard-progress" style="height: 120px;"
             data-chart-config='{"tooltip":{"trigger":"item","formatter":"{a}<br/>{b}: {c} ({d}%)"},"series":[{"name":"Projects","type":"pie","radius":["40%","70%"],"data":[{"value":{{ $data['completed_projects'] }},"name":"Completed","itemStyle":{"color":"#00d27a"}},{"value":{{ $data['active_projects'] }},"name":"Active","itemStyle":{"color":"#2c7be5"}},{"value":{{ $data['pending_projects'] }},"name":"Pending","itemStyle":{"color":"#f5803e"}}],"label":{"show":false},"emphasis":{"itemStyle":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}}}]}'>
        </div>
      </div>

      <!-- Recent Projects -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Recent Projects</h6>
        @foreach($data['recent_projects'] as $project)
          @php
            $name = $project['name'] ?? '';
            $status = $project['status'] ?? '';
            $progress = $project['progress'] ?? 0;
            $tech = $project['tech'] ?? '';
            $updated = $project['updated'] ?? '';
          @endphp
          <div class="dashboard-activity-item">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h6 class="mb-1 fw-semibold">{{ $name }}</h6>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span class="badge dashboard-badge dashboard-badge-{{ 
                    $status === 'completed' ? 'success' : 
                    ($status === 'active' ? 'primary' : 'warning') 
                  }}">
                    {{ ucfirst($status) }}
                  </span>
                  <small class="text-body-secondary">{{ $tech }}</small>
                </div>
                <div class="dashboard-progress-bar" style="height: 6px;">
                  <div class="dashboard-progress-fill" style="width: {{ $progress }}%"></div>
                </div>
              </div>
              <div class="col-md-5 text-end">
                <div class="fw-bold text-primary mb-1">{{ $progress }}%</div>
                <small class="text-body-secondary">Updated {{ $updated }}</small>
              </div>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Tech Stack Usage -->
      <div class="mb-3">
        <h6 class="fw-semibold mb-3">Popular Tech Stack</h6>
        <div class="row">
          @foreach($data['tech_stack'] as $tech => $count)
            <div class="col-6 mb-2">
              <div class="d-flex align-items-center justify-content-between">
                <span class="fw-medium">{{ $tech }}</span>
                <span class="badge bg-light text-dark">{{ $count }}</span>
              </div>
            </div>
          @endforeach
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="d-flex gap-2 flex-wrap">
        <a href="{{ route('monitask.projects.create') ?? '#' }}" class="btn btn-sm btn-info">
          <i class="fas fa-plus me-1"></i> New Project
        </a>
        <a href="{{ route('projects.index') }}" class="btn btn-sm btn-outline-secondary">
          <i class="fas fa-folder-open me-1"></i> Browse
        </a>
      </div>
    </div>
  </div>
</div>