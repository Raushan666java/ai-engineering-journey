@props([
    'communityData' => [],
    'title' => 'Community Engagement'
])

@php
$defaultData = [
    'total_members' => 1247,
    'active_discussions' => 34,
    'recent_posts' => 128,
    'weekly_growth' => 12.5,
    'recent_activities' => [
        ['user' => 'Alex Johnson', 'action' => 'started a discussion', 'topic' => 'React Best Practices', 'time' => '2m ago'],
        ['user' => 'Sarah Chen', 'action' => 'solved a problem', 'topic' => 'Binary Tree Traversal', 'time' => '15m ago'],
        ['user' => 'Mike Rodriguez', 'action' => 'shared a project', 'topic' => 'Full-Stack Blog App', 'time' => '1h ago'],
        ['user' => 'Emily Davis', 'action' => 'answered a question', 'topic' => 'Database Optimization', 'time' => '2h ago']
    ],
    'trending_topics' => [
        ['topic' => 'React Hooks', 'posts' => 23, 'trend' => 'up'],
        ['topic' => 'System Design', 'posts' => 19, 'trend' => 'up'],
        ['topic' => 'DSA Practice', 'posts' => 16, 'trend' => 'stable'],
        ['topic' => 'Career Advice', 'posts' => 12, 'trend' => 'down']
    ]
];

// Merge communityData with defaults to ensure all keys exist
$data = array_merge($defaultData, is_array($communityData) ? $communityData : []);
$data['recent_activities'] = $data['recent_activities'] ?? $defaultData['recent_activities'];
$data['trending_topics'] = $data['trending_topics'] ?? $defaultData['trending_topics'];
@endphp

<div class="col-xxl-6">
  <div class="card dashboard-card h-100">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
        <a href="{{ route('community') }}" class="btn btn-sm btn-outline-success">
          <i class="fas fa-users me-1"></i> Join Community
        </a>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- Community Stats -->
      <div class="row mb-4">
        <div class="col-6 text-center">
          <h4 class="text-success mb-1">{{ number_format($data['total_members']) }}</h4>
          <small class="text-body-secondary">Members</small>
          <div class="d-flex align-items-center justify-content-center mt-1">
            <i class="fas fa-arrow-up text-success me-1"></i>
            <small class="text-success">+{{ $data['weekly_growth'] }}%</small>
          </div>
        </div>
        <div class="col-6 text-center">
          <h4 class="text-info mb-1">{{ $data['active_discussions'] }}</h4>
          <small class="text-body-secondary">Active Discussions</small>
          <div class="d-flex align-items-center justify-content-center mt-1">
            <i class="fas fa-comments text-info me-1"></i>
            <small class="text-body-secondary">{{ $data['recent_posts'] }} posts today</small>
          </div>
        </div>
      </div>

      <!-- Recent Community Activity -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Recent Activity</h6>
        @foreach($data['recent_activities'] as $activity)
          @php
            $user = $activity['user'] ?? '';
            $action = $activity['action'] ?? '';
            $topic = $activity['topic'] ?? '';
            $time = $activity['time'] ?? '';
          @endphp
          <div class="dashboard-activity-item">
            <div class="d-flex align-items-start">
              <div class="avatar-sm bg-light rounded-circle d-flex align-items-center justify-content-center me-3">
                <i class="fas fa-user text-muted"></i>
              </div>
              <div class="flex-grow-1">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="mb-1 fw-semibold">{{ $user }}</h6>
                  <small class="text-body-secondary">{{ $time }}</small>
                </div>
                <p class="mb-1 text-body-secondary">
                  {{ $action }} "<span class="text-primary">{{ $topic }}</span>"
                </p>
              </div>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Trending Topics -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Trending Topics</h6>
        @foreach($data['trending_topics'] as $topic)
          @php
            $topicName = $topic['topic'] ?? '';
            $posts = $topic['posts'] ?? 0;
            $trend = $topic['trend'] ?? 'stable';
          @endphp
          <div class="d-flex align-items-center justify-content-between mb-2">
            <div class="d-flex align-items-center">
              <span class="fw-medium">{{ $topicName }}</span>
              <span class="badge bg-light text-dark ms-2">{{ $posts }}</span>
            </div>
            <div class="d-flex align-items-center">
              @if($trend === 'up')
                <i class="fas fa-arrow-up text-success"></i>
              @elseif($trend === 'down')
                <i class="fas fa-arrow-down text-danger"></i>
              @else
                <i class="fas fa-minus text-muted"></i>
              @endif
            </div>
          </div>
        @endforeach
      </div>

      <!-- Community Engagement Chart -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Weekly Engagement</h6>
        <div class="echart-community-engagement" style="height: 120px;"
             data-chart-config='{"tooltip":{"trigger":"axis"},"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"axisLabel":{"color":"#6c757d"}},"yAxis":{"type":"value","axisLabel":{"color":"#6c757d"}},"series":[{"name":"Posts","type":"line","data":[12,19,23,17,25,21,18],"smooth":true,"lineStyle":{"color":"#00d27a"},"areaStyle":{"color":"rgba(0, 210, 122, 0.1)"}}]}'>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="d-flex gap-2 flex-wrap">
        <a href="{{ route('community') }}" class="btn btn-sm btn-success">
          <i class="fas fa-plus me-1"></i> Start Discussion
        </a>
        <a href="{{ route('community') }}" class="btn btn-sm btn-outline-secondary">
          <i class="fas fa-eye me-1"></i> Browse
        </a>
      </div>
    </div>
  </div>
</div>