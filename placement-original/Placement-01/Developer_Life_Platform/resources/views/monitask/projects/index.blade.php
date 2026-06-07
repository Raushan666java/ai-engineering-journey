@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h3 mb-0">Project Management</h1>
                <a href="{{ route('monitask.projects.create') }}" class="btn btn-primary">
                    <i class="fas fa-plus"></i> New Project
                </a>
            </div>

            <!-- Filters and Search -->
            <div class="card mb-4">
                <div class="card-body">
                    <form method="GET" class="row g-3">
                        <div class="col-md-3">
                            <label for="search" class="form-label">Search Projects</label>
                            <input type="text" class="form-control" id="search" name="search" 
                                   value="{{ request('search') }}" placeholder="Project name...">
                        </div>
                        
                        <div class="col-md-2">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-select" id="status" name="status">
                                <option value="">All Status</option>
                                @foreach($statuses as $status)
                                    <option value="{{ $status }}" {{ request('status') == $status ? 'selected' : '' }}>
                                        {{ ucfirst($status) }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        
                        <div class="col-md-2">
                            <label for="priority" class="form-label">Priority</label>
                            <select class="form-select" id="priority" name="priority">
                                <option value="">All Priorities</option>
                                @foreach($priorities as $priority)
                                    <option value="{{ $priority }}" {{ request('priority') == $priority ? 'selected' : '' }}>
                                        {{ ucfirst($priority) }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        
                        <div class="col-md-3">
                            <label for="client" class="form-label">Client</label>
                            <select class="form-select" id="client" name="client">
                                <option value="">All Clients</option>
                                @foreach($clients as $client)
                                    <option value="{{ $client->id }}" {{ request('client') == $client->id ? 'selected' : '' }}>
                                        {{ $client->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        
                        <div class="col-md-2 d-flex align-items-end">
                            <button type="submit" class="btn btn-outline-primary me-2">Filter</button>
                            <a href="{{ route('monitask.projects.index') }}" class="btn btn-outline-secondary">Clear</a>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Projects Grid -->
            @if($projects->count() > 0)
                <div class="row">
                    @foreach($projects as $project)
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h5 class="card-title mb-0">
                                        <a href="{{ route('monitask.projects.show', $project) }}" class="text-decoration-none">
                                            {{ $project->name }}
                                        </a>
                                    </h5>
                                    <div class="dropdown">
                                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" 
                                                data-bs-toggle="dropdown">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="{{ route('monitask.projects.show', $project) }}">
                                                <i class="fas fa-eye"></i> View
                                            </a></li>
                                            <li><a class="dropdown-item" href="{{ route('monitask.projects.edit', $project) }}">
                                                <i class="fas fa-edit"></i> Edit
                                            </a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li>
                                                <form action="{{ route('monitask.projects.destroy', $project) }}" method="POST" 
                                                      onsubmit="return confirm('Are you sure you want to delete this project?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="dropdown-item text-danger">
                                                        <i class="fas fa-trash"></i> Delete
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="card-body">
                                    <p class="card-text">{{ Str::limit($project->description, 100) }}</p>
                                    
                                    <div class="mb-3">
                                        <div class="row text-sm">
                                            <div class="col-6">
                                                <span class="text-muted">Status:</span><br>
                                                <span class="badge bg-{{ $project->status == 'active' ? 'success' : ($project->status == 'completed' ? 'primary' : ($project->status == 'on_hold' ? 'warning' : 'secondary')) }}">
                                                    {{ ucfirst($project->status) }}
                                                </span>
                                            </div>
                                            <div class="col-6">
                                                <span class="text-muted">Priority:</span><br>
                                                <span class="badge bg-{{ $project->priority == 'high' ? 'danger' : ($project->priority == 'medium' ? 'warning' : 'info') }}">
                                                    {{ ucfirst($project->priority) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <div class="row text-sm">
                                            <div class="col-6">
                                                <span class="text-muted">Client:</span><br>
                                                <span>{{ $project->client->name ?? 'N/A' }}</span>
                                            </div>
                                            <div class="col-6">
                                                <span class="text-muted">Owner:</span><br>
                                                <span>{{ $project->owner->name ?? 'N/A' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    @if($project->deadline)
                                        <div class="mb-3">
                                            <span class="text-muted">Deadline:</span><br>
                                            <span class="text-{{ $project->deadline < now() ? 'danger' : 'success' }}">
                                                {{ $project->deadline->format('M d, Y') }}
                                            </span>
                                        </div>
                                    @endif
                                    
                                    @if($project->budget)
                                        <div class="mb-3">
                                            <span class="text-muted">Budget:</span><br>
                                            <span class="fw-bold">${{ number_format($project->budget, 2) }}</span>
                                        </div>
                                    @endif
                                    
                                    <!-- Progress Bar -->
                                    @php
                                        $totalTasks = $project->tasks->count();
                                        $completedTasks = $project->tasks->where('status', 'completed')->count();
                                        $progress = $totalTasks > 0 ? ($completedTasks / $totalTasks) * 100 : 0;
                                    @endphp
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between align-items-center mb-1">
                                            <span class="text-muted small">Progress:</span>
                                            <span class="small">{{ $completedTasks }}/{{ $totalTasks }} tasks</span>
                                        </div>
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar" role="progressbar" style="width: {{ $progress }}%"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- Team Members -->
                                    @if($project->members->count() > 0)
                                        <div class="mb-3">
                                            <span class="text-muted small">Team:</span><br>
                                            <div class="d-flex flex-wrap gap-1 mt-1">
                                                @foreach($project->members->take(3) as $member)
                                                    <span class="badge bg-light text-dark">{{ $member->name }}</span>
                                                @endforeach
                                                @if($project->members->count() > 3)
                                                    <span class="badge bg-secondary">+{{ $project->members->count() - 3 }} more</span>
                                                @endif
                                            </div>
                                        </div>
                                    @endif
                                </div>
                                
                                <div class="card-footer bg-transparent">
                                    <small class="text-muted">
                                        Created {{ $project->created_at->diffForHumans() }}
                                    </small>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                
                <!-- Pagination -->
                <div class="d-flex justify-content-center">
                    {{ $projects->withQueryString()->links() }}
                </div>
            @else
                <div class="text-center py-5">
                    <div class="mb-4">
                        <i class="fas fa-project-diagram fa-4x text-muted"></i>
                    </div>
                    <h4>No Projects Found</h4>
                    <p class="text-muted">
                        @if(request()->hasAny(['search', 'status', 'priority', 'client']))
                            No projects match your current filters. Try adjusting your search criteria.
                        @else
                            You haven't created any projects yet. Start by creating your first project.
                        @endif
                    </p>
                    <a href="{{ route('monitask.projects.create') }}" class="btn btn-primary">
                        <i class="fas fa-plus"></i> Create First Project
                    </a>
                </div>
            @endif
        </div>
    </div>
</div>

<style>
.text-sm {
    font-size: 0.875rem;
}

.card-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.progress {
    background-color: #e9ecef;
}

.badge {
    font-size: 0.75rem;
}
</style>
@endsection
