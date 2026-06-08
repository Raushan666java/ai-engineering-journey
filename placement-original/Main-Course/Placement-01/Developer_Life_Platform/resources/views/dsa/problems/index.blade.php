@extends('layouts.app')

@section('title', 'DSA Problems')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-3">
            <!-- Filters Sidebar -->
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Filters</h5>
                </div>
                <div class="card-body">
                    <form method="GET" action="{{ route('dsa.dsa.problems.index') }}">
                        <!-- Search -->
                        <div class="mb-3">
                            <label class="form-label">Search</label>
                            <input type="text" name="search" class="form-control" 
                                   value="{{ request('search') }}" placeholder="Search problems...">
                        </div>

                        <!-- Difficulty -->
                        <div class="mb-3">
                            <label class="form-label">Difficulty</label>
                            <select name="difficulty" class="form-select">
                                <option value="">All Difficulties</option>
                                @foreach($difficulties as $difficulty)
                                    <option value="{{ $difficulty }}" 
                                            {{ request('difficulty') == $difficulty ? 'selected' : '' }}>
                                        {{ $difficulty }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Company -->
                        <div class="mb-3">
                            <label class="form-label">Company</label>
                            <select name="company" class="form-select">
                                <option value="">All Companies</option>
                                @foreach($allCompanies as $company)
                                    <option value="{{ $company }}" 
                                            {{ request('company') == $company ? 'selected' : '' }}>
                                        {{ $company }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Topic -->
                        <div class="mb-3">
                            <label class="form-label">Topic</label>
                            <select name="topic" class="form-select">
                                <option value="">All Topics</option>
                                @foreach($allTags as $tag)
                                    <option value="{{ $tag }}" 
                                            {{ request('topic') == $tag ? 'selected' : '' }}>
                                        {{ $tag }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary">Apply Filters</button>
                            <a href="{{ route('dsa.dsa.problems.index') }}" class="btn btn-outline-secondary">Reset</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="col-lg-9">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2>DSA Problems</h2>
                    <p class="text-muted">Practice coding problems to improve your skills</p>
                </div>
                <a href="{{ route('dsa.dsa.problems.create') }}" class="btn btn-success">
                    <i class="fas fa-plus"></i> Add Problem
                </a>
            </div>

            <!-- Sort Options -->
            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="d-flex align-items-center">
                        <label class="form-label me-2 mb-0">Sort by:</label>
                        <select class="form-select form-select-sm" style="width: auto;" onchange="window.location.href=this.value">
                            <option value="{{ route('dsa.dsa.problems.index', array_merge(request()->all(), ['sort' => 'created_at', 'order' => 'desc'])) }}" 
                                    {{ request('sort') == 'created_at' ? 'selected' : '' }}>Newest First</option>
                            <option value="{{ route('dsa.dsa.problems.index', array_merge(request()->all(), ['sort' => 'title', 'order' => 'asc'])) }}" 
                                    {{ request('sort') == 'title' ? 'selected' : '' }}>Title A-Z</option>
                            <option value="{{ route('dsa.dsa.problems.index', array_merge(request()->all(), ['sort' => 'difficulty', 'order' => 'asc'])) }}" 
                                    {{ request('sort') == 'difficulty' ? 'selected' : '' }}>Difficulty</option>
                            <option value="{{ route('dsa.dsa.problems.index', array_merge(request()->all(), ['sort' => 'acceptance_rate', 'order' => 'desc'])) }}" 
                                    {{ request('sort') == 'acceptance_rate' ? 'selected' : '' }}>Acceptance Rate</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6 text-end">
                    <span class="text-muted">{{ $problems->total() }} problems found</span>
                </div>
            </div>

            <!-- Problems List -->
            <div class="row">
                @forelse($problems as $problem)
                    <div class="col-12 mb-3">
                        <div class="card problem-card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <h5 class="card-title mb-1">
                                            <a href="{{ route('dsa.dsa.problems.show', $problem) }}" 
                                               class="text-decoration-none">
                                                {{ $problem->title }}
                                            </a>
                                        </h5>
                                        <p class="card-text text-muted small mb-2">
                                            {{ Str::limit($problem->description, 150) }}
                                        </p>
                                        <div class="d-flex flex-wrap gap-1">
                                            @if($problem->tags)
                                                @foreach(array_slice($problem->tags, 0, 3) as $tag)
                                                    <span class="badge bg-light text-dark">{{ $tag }}</span>
                                                @endforeach
                                                @if(count($problem->tags) > 3)
                                                    <span class="badge bg-light text-dark">+{{ count($problem->tags) - 3 }} more</span>
                                                @endif
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-center">
                                        <span class="badge bg-{{ $problem->difficulty_color }} fs-6 mb-2">
                                            {{ $problem->difficulty }}
                                        </span>
                                        <div class="text-muted small">
                                            Acceptance: {{ $problem->formatted_acceptance_rate }}%
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-end">
                                        <div class="d-flex flex-column gap-2">
                                            <a href="{{ route('dsa.dsa.problems.show', $problem) }}" 
                                               class="btn btn-primary btn-sm">
                                                <i class="fas fa-code"></i> Solve
                                            </a>
                                            <a href="{{ route('dsa.dsa.problems.leaderboard', $problem) }}" 
                                               class="btn btn-outline-secondary btn-sm">
                                                <i class="fas fa-trophy"></i> Leaderboard
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @empty
                    <div class="col-12">
                        <div class="text-center py-5">
                            <i class="fas fa-search fa-3x text-muted mb-3"></i>
                            <h4>No problems found</h4>
                            <p class="text-muted">Try adjusting your filters or search terms.</p>
                            <a href="{{ route('dsa.dsa.problems.index') }}" class="btn btn-primary">View All Problems</a>
                        </div>
                    </div>
                @endforelse
            </div>

            <!-- Pagination -->
            <div class="d-flex justify-content-center">
                {{ $problems->withQueryString()->links() }}
            </div>
        </div>
    </div>
</div>

<style>
.problem-card {
    transition: all 0.3s ease;
    border: 1px solid #e3e6f0;
}

.problem-card:hover {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
    transform: translateY(-2px);
}

.badge.bg-success { background-color: #1cc88a !important; }
.badge.bg-warning { background-color: #f6c23e !important; }
.badge.bg-danger { background-color: #e74a3b !important; }
</style>
@endsection

@push('scripts')
<script>
// Auto-submit form when filters change
document.querySelectorAll('select[name="difficulty"], select[name="company"], select[name="topic"]').forEach(function(select) {
    select.addEventListener('change', function() {
        this.form.submit();
    });
});

// Search with debounce
let searchTimeout;
document.querySelector('input[name="search"]').addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        this.form.submit();
    }, 500);
});
</script>
@endpush
