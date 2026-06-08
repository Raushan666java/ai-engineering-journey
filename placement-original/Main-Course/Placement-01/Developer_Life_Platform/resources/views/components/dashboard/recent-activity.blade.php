@props([
    'activityData' => [],
    'title' => 'Recent Activity'
])

@php
$defaultData = [
    'recent_activities' => [
        [
            'type' => 'learning',
            'icon' => 'fas fa-graduation-cap',
            'color' => 'primary',
            'action' => 'Completed Module',
            'details' => 'React Advanced Patterns',
            'time' => '2 minutes ago'
        ],
        [
            'type' => 'dsa',
            'icon' => 'fas fa-code',
            'color' => 'success',
            'action' => 'Solved Problem',
            'details' => 'Two Sum (Easy)',
            'time' => '15 minutes ago'
        ],
        [
            'type' => 'project',
            'icon' => 'fas fa-project-diagram',
            'color' => 'info',
            'action' => 'Updated Project',
            'details' => 'Task Management App - Added authentication',
            'time' => '1 hour ago'
        ],
        [
            'type' => 'community',
            'icon' => 'fas fa-comments',
            'color' => 'warning',
            'action' => 'Posted Question',
            'details' => 'How to optimize database queries?',
            'time' => '2 hours ago'
        ],
        [
            'type' => 'achievement',
            'icon' => 'fas fa-trophy',
            'color' => 'danger',
            'action' => 'Earned Badge',
            'details' => 'JavaScript Master - 100 problems solved',
            'time' => '1 day ago'
        ],
        [
            'type' => 'learning',
            'icon' => 'fas fa-book-open',
            'color' => 'secondary',
            'action' => 'Started Course',
            'details' => 'System Design Fundamentals',
            'time' => '2 days ago'
        ]
    ],
    'activity_summary' => [
        'total_activities' => 47,
        'learning_hours' => 12.5,
        'problems_solved' => 8,
        'projects_updated' => 2
    ]
];

$data = !empty($activityData) ? $activityData : $defaultData;
@endphp

<div class="col-lg-12">
  <div class="card dashboard-card">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-secondary" onclick="refreshActivity()">
            <i class="fas fa-sync-alt me-1"></i> Refresh
          </button>
          <a href="#" class="btn btn-sm btn-outline-primary">
            <i class="fas fa-history me-1"></i> View All
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- Activity Summary -->
      <div class="row mb-4">
        <div class="col-lg-3 col-6 text-center">
          <h5 class="text-primary mb-1">{{ $data['activity_summary']['total_activities'] }}</h5>
          <small class="text-body-secondary">Total Activities</small>
        </div>
        <div class="col-lg-3 col-6 text-center">
          <h5 class="text-success mb-1">{{ $data['activity_summary']['learning_hours'] }}h</h5>
          <small class="text-body-secondary">Learning Hours</small>
        </div>
        <div class="col-lg-3 col-6 text-center">
          <h5 class="text-info mb-1">{{ $data['activity_summary']['problems_solved'] }}</h5>
          <small class="text-body-secondary">Problems Solved</small>
        </div>
        <div class="col-lg-3 col-6 text-center">
          <h5 class="text-warning mb-1">{{ $data['activity_summary']['projects_updated'] }}</h5>
          <small class="text-body-secondary">Projects Updated</small>
        </div>
      </div>

      <!-- Activity Timeline -->
      <div class="dashboard-timeline">
        @foreach($data['recent_activities'] as $activity)
          <div class="dashboard-timeline-item">
            <div class="dashboard-timeline-icon bg-{{ $activity['color'] }}">
              <i class="{{ $activity['icon'] }}"></i>
            </div>
            <div class="dashboard-timeline-content">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <h6 class="mb-0 fw-semibold text-{{ $activity['color'] }}">{{ $activity['action'] }}</h6>
                <small class="text-body-secondary">{{ $activity['time'] }}</small>
              </div>
              <p class="mb-0 text-body-secondary">{{ $activity['details'] }}</p>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Activity Filters -->
      <div class="mt-4 pt-3 border-top">
        <div class="d-flex align-items-center justify-content-between">
          <span class="fw-semibold">Filter by:</span>
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-sm btn-outline-primary active" data-filter="all">All</button>
            <button class="btn btn-sm btn-outline-primary" data-filter="learning">Learning</button>
            <button class="btn btn-sm btn-outline-success" data-filter="dsa">DSA</button>
            <button class="btn btn-sm btn-outline-info" data-filter="project">Projects</button>
            <button class="btn btn-sm btn-outline-warning" data-filter="community">Community</button>
            <button class="btn btn-sm btn-outline-danger" data-filter="achievement">Achievements</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.dashboard-timeline {
  position: relative;
  padding: 1rem 0;
}

.dashboard-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--bs-border-color);
}

.dashboard-timeline-item {
  position: relative;
  display: flex;
  align-items-flex-start;
  margin-bottom: 1.5rem;
  padding-left: 0;
}

.dashboard-timeline-item:last-child {
  margin-bottom: 0;
}

.dashboard-timeline-icon {
  position: absolute;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  z-index: 2;
  border: 3px solid var(--bs-body-bg);
}

.dashboard-timeline-content {
  flex: 1;
  margin-left: 60px;
  padding: 0.75rem 1rem;
  background: var(--bs-gray-50);
  border-radius: 0.5rem;
  border-left: 3px solid var(--bs-border-color);
}

@media (max-width: 576px) {
  .dashboard-timeline-content {
    margin-left: 50px;
  }
  
  .dashboard-timeline-icon {
    width: 35px;
    height: 35px;
    font-size: 0.75rem;
  }
}
</style>

<script>
function refreshActivity() {
  // Add refresh functionality
  console.log('Refreshing activity feed...');
  // You can implement AJAX call here to refresh activity data
}

// Activity filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const timelineItems = document.querySelectorAll('.dashboard-timeline-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter timeline items
      timelineItems.forEach(item => {
        const icon = item.querySelector('.dashboard-timeline-icon i');
        let itemType = 'all';
        
        if (icon.classList.contains('fa-graduation-cap') || icon.classList.contains('fa-book-open')) {
          itemType = 'learning';
        } else if (icon.classList.contains('fa-code')) {
          itemType = 'dsa';
        } else if (icon.classList.contains('fa-project-diagram')) {
          itemType = 'project';
        } else if (icon.classList.contains('fa-comments')) {
          itemType = 'community';
        } else if (icon.classList.contains('fa-trophy')) {
          itemType = 'achievement';
        }
        
        if (filter === 'all' || filter === itemType) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
</script>
