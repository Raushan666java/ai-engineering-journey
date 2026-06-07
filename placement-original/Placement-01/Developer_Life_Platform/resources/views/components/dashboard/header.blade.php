@props([
    'title' => 'Dashboard',
    'subtitle' => 'Welcome to your dashboard',
    'showCreateButton' => false,
    'createButtonText' => 'Create',
    'createButtonIcon' => 'plus',
    'createButtonUrl' => '#',
    'user' => null
])

<div class="row mb-4">
  <div class="col">
    <div class="d-flex align-items-center mb-2">
      <h1 class="h2 text-body-emphasis fw-bold mb-0">{{ $title }}</h1>
      @if($user || auth()->check())
        <div class="ms-3">
          <span class="badge bg-success-light text-success">
            <i class="fas fa-circle me-1" style="font-size: 0.5rem;"></i>
            Online
          </span>
        </div>
      @endif
    </div>
    <p class="text-body-tertiary lh-sm mb-0">{{ $subtitle }}</p>
    
    @if(auth()->check())
      <div class="d-flex align-items-center mt-2">
        <small class="text-body-secondary">
          <i class="fas fa-clock me-1"></i>
          Last updated: {{ now()->format('M d, Y - g:i A') }}
        </small>
        <div class="ms-3">
          <small class="text-body-secondary">
            <i class="fas fa-user me-1"></i>
            Welcome back, {{ auth()->user()->name ?? 'Developer' }}
          </small>
        </div>
      </div>
    @endif
  </div>
  
  @if($showCreateButton)
    <div class="col-auto">
      <div class="d-flex gap-2">
        <button class="btn btn-primary" onclick="location.href='{{ $createButtonUrl }}'">
          <i class="fas fa-{{ $createButtonIcon }} me-2"></i>
          {{ $createButtonText }}
        </button>
        
        <div class="dropdown">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            <i class="fas fa-ellipsis-h"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#"><i class="fas fa-download me-2"></i>Export Data</a></li>
            <li><a class="dropdown-item" href="#"><i class="fas fa-print me-2"></i>Print Report</a></li>
            <li><a class="dropdown-item" href="#"><i class="fas fa-share me-2"></i>Share Dashboard</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  @endif
</div>

<!-- Quick Actions Bar -->
<div class="row mb-4">
  <div class="col-12">
    <div class="card dashboard-card">
      <div class="card-body py-3">
        <div class="d-flex align-items-center justify-content-between flex-wrap">
          <div class="d-flex align-items-center gap-4">
            <a href="{{ route('learning.dashboard') }}" class="btn btn-sm btn-outline-primary">
              <i class="fas fa-book me-1"></i> Learning
            </a>
            <a href="{{ route('dsa.dashboard') }}" class="btn btn-sm btn-outline-success">
              <i class="fas fa-code me-1"></i> DSA Practice
            </a>
            <a href="{{ route('projects.index') }}" class="btn btn-sm btn-outline-info">
              <i class="fas fa-project-diagram me-1"></i> Projects
            </a>
            <a href="{{ route('community') }}" class="btn btn-sm btn-outline-warning">
              <i class="fas fa-users me-1"></i> Community
            </a>
          </div>
          
          <div class="d-flex align-items-center gap-3">
            <div class="text-center">
              <small class="text-body-secondary d-block">Study Streak</small>
              <span class="fw-bold text-primary">{{ auth()->user()->study_streak ?? 7 }} days</span>
            </div>
            <div class="text-center">
              <small class="text-body-secondary d-block">Total XP</small>
              <span class="fw-bold text-success">{{ number_format(auth()->user()->total_points ?? 1250) }}</span>
            </div>
            <div class="text-center">
              <small class="text-body-secondary d-block">Rank</small>
              <span class="fw-bold text-warning">#{{ auth()->user()->rank ?? 42 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
