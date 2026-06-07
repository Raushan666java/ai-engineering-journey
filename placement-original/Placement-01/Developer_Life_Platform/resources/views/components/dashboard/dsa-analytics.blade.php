@props([
    'dsaData' => [],
    'title' => 'DSA Practice Analytics'
])

@php
$defaultData = [
    'problems_solved' => 247,
    'daily_goal' => 5,
    'problems_today' => 3,
    'streak' => 12,
    'accuracy' => 78,
    'difficulty_breakdown' => [
        'easy' => ['solved' => 120, 'total' => 150],
        'medium' => ['solved' => 95, 'total' => 200],
        'hard' => ['solved' => 32, 'total' => 100]
    ],
    'recent_submissions' => [
        ['problem' => 'Two Sum', 'difficulty' => 'Easy', 'status' => 'Accepted', 'time' => '2 hours ago'],
        ['problem' => 'Binary Tree Traversal', 'difficulty' => 'Medium', 'status' => 'Accepted', 'time' => '5 hours ago'],
        ['problem' => 'Longest Palindrome', 'difficulty' => 'Hard', 'status' => 'Wrong Answer', 'time' => '1 day ago']
    ]
];

// Merge dsaData with defaults to ensure all keys exist
$data = array_merge($defaultData, is_array($dsaData) ? $dsaData : []);
// Ensure nested arrays also have expected keys
$data['difficulty_breakdown'] = array_merge($defaultData['difficulty_breakdown'], $data['difficulty_breakdown'] ?? []);
$data['recent_submissions'] = $data['recent_submissions'] ?? $defaultData['recent_submissions'];
@endphp

<div class="col-xxl-4">
  <div class="card dashboard-card h-100">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
        <a href="{{ route('dsa.dashboard') }}" class="btn btn-sm btn-outline-success">
          <i class="fas fa-external-link-alt me-1"></i> Practice
        </a>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- DSA Stats Grid -->
      <div class="row mb-4">
        <div class="col-6 text-center">
          <h3 class="text-success mb-1">{{ $data['problems_solved'] }}</h3>
          <small class="text-body-secondary">Problems Solved</small>
        </div>
        <div class="col-6 text-center">
          <h3 class="text-primary mb-1">{{ $data['streak'] }}</h3>
          <small class="text-body-secondary">Day Streak</small>
        </div>
      </div>

      <!-- Daily Progress -->
      <div class="mb-4">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <h6 class="mb-0 fw-semibold">Today's Progress</h6>
          <span class="text-primary fw-bold">{{ $data['problems_today'] }}/{{ $data['daily_goal'] }}</span>
        </div>
        <div class="dashboard-progress-bar" style="height: 10px;">
          <div class="dashboard-progress-fill" style="width: {{ ($data['daily_goal'] > 0) ? ($data['problems_today'] / $data['daily_goal'] * 100) : 0 }}%"></div>
        </div>
        <small class="text-body-secondary mt-1 d-block">
          {{ $data['daily_goal'] - $data['problems_today'] }} problems to reach daily goal
        </small>
      </div>

      <!-- Difficulty Breakdown -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Difficulty Breakdown</h6>
        @foreach($data['difficulty_breakdown'] as $difficulty => $stats)
          @php
            $solved = $stats['solved'] ?? 0;
            $total = $stats['total'] ?? 1;
            $percent = $total > 0 ? ($solved / $total) * 100 : 0;
          @endphp
          <div class="mb-3">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <span class="text-capitalize fw-medium 
                {{ $difficulty === 'easy' ? 'text-success' : ($difficulty === 'medium' ? 'text-warning' : 'text-danger') }}">
                {{ ucfirst($difficulty) }}
              </span>
              <span class="small">{{ $solved }}/{{ $total }}</span>
            </div>
            <div class="dashboard-progress-bar" style="height: 6px;">
              <div class="dashboard-progress-fill 
                {{ $difficulty === 'easy' ? 'bg-success' : ($difficulty === 'medium' ? 'bg-warning' : 'bg-danger') }}" 
                style="width: {{ $percent }}%; background: var(--dashboard-{{ $difficulty === 'easy' ? 'success' : ($difficulty === 'medium' ? 'warning' : 'danger') }}) !important;"></div>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Accuracy Chart -->
      <div class="mb-4">
        <div class="text-center p-3 bg-light rounded">
          <h4 class="text-info mb-1">{{ $data['accuracy'] }}%</h4>
          <small class="text-body-secondary">Overall Accuracy</small>
          <div class="mt-2">
            <div class="echart-dashboard-revenue" style="height: 80px;"
                 data-chart-config='{"series":[{"type":"gauge","startAngle":180,"endAngle":0,"min":0,"max":100,"radius":"90%","data":[{"value":{{ $data['accuracy'] }},"name":"Accuracy"}],"axisLine":{"lineStyle":{"width":10,"color":[[0.6,"#e63757"],[0.8,"#f5803e"],[1,"#00d27a"]]}},"axisLabel":{"show":false},"axisTick":{"show":false},"splitLine":{"show":false},"pointer":{"show":false},"title":{"show":false},"detail":{"show":false}}]}'>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Submissions -->
      <div class="mb-3">
        <h6 class="fw-semibold mb-3">Recent Submissions</h6>
        @foreach($data['recent_submissions'] as $submission)
          @php
            $problem = $submission['problem'] ?? '';
            $difficulty = $submission['difficulty'] ?? '';
            $status = $submission['status'] ?? '';
            $time = $submission['time'] ?? '';
          @endphp
          <div class="dashboard-activity-item">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <h6 class="mb-1 fw-semibold">{{ $problem }}</h6>
                <div class="d-flex align-items-center gap-2">
                  <span class="badge badge-sm 
                    {{ $difficulty === 'Easy' ? 'bg-success' : ($difficulty === 'Medium' ? 'bg-warning' : 'bg-danger') }}">
                    {{ $difficulty }}
                  </span>
                  <span class="badge badge-sm 
                    {{ $status === 'Accepted' ? 'bg-success' : 'bg-danger' }}">
                    {{ $status }}
                  </span>
                </div>
              </div>
              <small class="text-body-secondary">{{ $time }}</small>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Quick Actions -->
      <div class="d-flex gap-2 flex-wrap">
        <a href="{{ route('dsa.problems.index') }}" class="btn btn-sm btn-success">
          <i class="fas fa-code me-1"></i> Solve Problems
        </a>
        <a href="{{ route('dsa.dsa.contests.index') }}" class="btn btn-sm btn-outline-primary">
          <i class="fas fa-trophy me-1"></i> Contests
        </a>
      </div>
    </div>
  </div>
</div>