@props([
    'achievementData' => [],
    'title' => 'Achievements & Progress'
])

@php
$defaultData = [
    'total_badges' => 15,
    'total_points' => 2847,
    'current_streak' => 12,
    'rank' => 'Advanced Developer',
    'recent_achievements' => [
        [
            'name' => 'JavaScript Master',
            'description' => 'Solved 100+ JavaScript problems',
            'icon' => 'fas fa-star',
            'color' => 'warning',
            'earned_date' => '2 days ago',
            'points' => 250
        ],
        [
            'name' => 'React Expert',
            'description' => 'Completed Advanced React Course',
            'icon' => 'fas fa-trophy',
            'color' => 'success',
            'earned_date' => '1 week ago',
            'points' => 300
        ],
        [
            'name' => 'Problem Solver',
            'description' => 'Solved 50 DSA problems',
            'icon' => 'fas fa-puzzle-piece',
            'color' => 'info',
            'earned_date' => '2 weeks ago',
            'points' => 200
        ]
    ],
    'progress_bars' => [
        [
            'name' => 'Next Rank',
            'current' => 2847,
            'target' => 3500,
            'color' => 'primary',
            'percentage' => 81
        ],
        [
            'name' => 'Monthly Goal',
            'current' => 18,
            'target' => 25,
            'color' => 'success',
            'percentage' => 72
        ]
    ],
    'upcoming_milestones' => [
        ['name' => 'Algorithm Expert', 'required' => 150, 'current' => 127, 'type' => 'problems'],
        ['name' => 'Full Stack Pro', 'required' => 5, 'current' => 3, 'type' => 'projects'],
        ['name' => 'Community Helper', 'required' => 20, 'current' => 15, 'type' => 'answers']
    ]
];

$data = !empty($achievementData) ? $achievementData : $defaultData;
@endphp

<div class="col-xxl-6">
  <div class="card dashboard-card h-100">
    <div class="card-header bg-transparent border-0 pt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 fw-bold">{{ $title }}</h5>
  <a href="{{ route('achievements') ?? '#' }}" class="btn btn-sm btn-outline-warning">
          <i class="fas fa-trophy me-1"></i> View All
        </a>
      </div>
    </div>
    <div class="card-body pt-0">
      <!-- Achievement Stats -->
      <div class="row mb-4">
        <div class="col-6 text-center">
          <div class="d-flex align-items-center justify-content-center mb-2">
            <div class="achievement-icon bg-warning">
              <i class="fas fa-trophy"></i>
            </div>
          </div>
          <h4 class="text-warning mb-1">{{ $data['total_badges'] }}</h4>
          <small class="text-body-secondary">Badges Earned</small>
        </div>
        <div class="col-6 text-center">
          <div class="d-flex align-items-center justify-content-center mb-2">
            <div class="achievement-icon bg-primary">
              <i class="fas fa-star"></i>
            </div>
          </div>
          <h4 class="text-primary mb-1">{{ number_format($data['total_points']) }}</h4>
          <small class="text-body-secondary">Total Points</small>
        </div>
      </div>

      <!-- Current Rank & Streak -->
      <div class="text-center mb-4 p-3 bg-light rounded">
        <div class="row">
          <div class="col-6">
            <h6 class="fw-bold text-success mb-1">{{ $data['rank'] }}</h6>
            <small class="text-body-secondary">Current Rank</small>
          </div>
          <div class="col-6">
            <h6 class="fw-bold text-danger mb-1">{{ $data['current_streak'] }} days</h6>
            <small class="text-body-secondary">Current Streak</small>
          </div>
        </div>
      </div>

      <!-- Progress Bars -->
      <div class="mb-4">
        @foreach($data['progress_bars'] as $progress)
          <div class="mb-3">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="fw-semibold">{{ $progress['name'] }}</span>
              <span class="text-{{ $progress['color'] }}">{{ $progress['current'] }}/{{ $progress['target'] }}</span>
            </div>
            <div class="dashboard-progress-bar">
              <div class="dashboard-progress-fill bg-{{ $progress['color'] }}" style="width: {{ $progress['percentage'] }}%"></div>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Recent Achievements -->
      <div class="mb-4">
        <h6 class="fw-semibold mb-3">Recent Achievements</h6>
        @foreach($data['recent_achievements'] as $achievement)
          <div class="dashboard-activity-item">
            <div class="d-flex align-items-center">
              <div class="achievement-icon bg-{{ $achievement['color'] }} me-3">
                <i class="{{ $achievement['icon'] }}"></i>
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1 fw-semibold">{{ $achievement['name'] }}</h6>
                <p class="mb-1 text-body-secondary small">{{ $achievement['description'] }}</p>
                <div class="d-flex align-items-center justify-content-between">
                  <small class="text-body-secondary">{{ $achievement['earned_date'] }}</small>
                  <span class="badge bg-{{ $achievement['color'] }}">+{{ $achievement['points'] }} pts</span>
                </div>
              </div>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Upcoming Milestones -->
      <div class="mb-3">
        <h6 class="fw-semibold mb-3">Upcoming Milestones</h6>
        @foreach($data['upcoming_milestones'] as $milestone)
          @php
            $percentage = ($milestone['current'] / $milestone['required']) * 100;
          @endphp
          <div class="mb-3">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <span class="fw-medium">{{ $milestone['name'] }}</span>
              <small class="text-body-secondary">{{ $milestone['current'] }}/{{ $milestone['required'] }} {{ $milestone['type'] }}</small>
            </div>
            <div class="dashboard-progress-bar">
              <div class="dashboard-progress-fill" style="width: {{ $percentage }}%"></div>
            </div>
          </div>
        @endforeach
      </div>

      <!-- Quick Actions -->
      <div class="d-flex gap-2 flex-wrap">
  <a href="{{ route('achievements') ?? '#' }}" class="btn btn-sm btn-warning">
          <i class="fas fa-trophy me-1"></i> View Badges
        </a>
  <a href="{{ route('leaderboard') ?? '#' }}" class="btn btn-sm btn-outline-secondary">
          <i class="fas fa-chart-line me-1"></i> Leaderboard
        </a>
      </div>
    </div>
  </div>
</div>

<style>
.achievement-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
}
</style>
