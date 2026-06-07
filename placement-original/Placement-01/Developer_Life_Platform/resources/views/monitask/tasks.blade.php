@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h3 mb-0">Task Management</h1>
                <button class="btn btn-primary" onclick="showCreateTaskModal()">
                    <i class="fas fa-plus"></i> New Task
                </button>
            </div>

            <!-- Task Statistics -->
            <div class="row mb-4">
                <div class="col-lg-3 col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="text-muted mb-1">Total Tasks</h6>
                                    <h3 class="mb-0">{{ $taskStats['total'] ?? 0 }}</h3>
                                    <small class="text-muted">{{ $taskStats['this_week'] ?? 0 }} this week</small>
                                </div>
                                <div class="text-primary">
                                    <i class="fas fa-tasks fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="text-muted mb-1">Pending</h6>
                                    <h3 class="mb-0">{{ $taskStats['pending'] ?? 0 }}</h3>
                                    <small class="text-warning">{{ $taskStats['overdue'] ?? 0 }} overdue</small>
                                </div>
                                <div class="text-warning">
                                    <i class="fas fa-clock fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="text-muted mb-1">In Progress</h6>
                                    <h3 class="mb-0">{{ $taskStats['in_progress'] ?? 0 }}</h3>
                                    <small class="text-info">{{ round(($taskStats['in_progress'] ?? 0) / max($taskStats['total'] ?? 1, 1) * 100) }}% of total</small>
                                </div>
                                <div class="text-info">
                                    <i class="fas fa-spinner fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="text-muted mb-1">Completed</h6>
                                    <h3 class="mb-0">{{ $taskStats['completed'] ?? 0 }}</h3>
                                    <small class="text-success">{{ round(($taskStats['completed'] ?? 0) / max($taskStats['total'] ?? 1, 1) * 100) }}% completion rate</small>
                                </div>
                                <div class="text-success">
                                    <i class="fas fa-check-circle fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Filters -->
            <div class="card mb-4">
                <div class="card-body">
                    <form method="GET" class="row g-3">
                        <div class="col-md-3">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-select" id="status" name="status">
                                <option value="">All Status</option>
                                <option value="pending" {{ request('status') == 'pending' ? 'selected' : '' }}>Pending</option>
                                <option value="in_progress" {{ request('status') == 'in_progress' ? 'selected' : '' }}>In Progress</option>
                                <option value="completed" {{ request('status') == 'completed' ? 'selected' : '' }}>Completed</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="priority" class="form-label">Priority</label>
                            <select class="form-select" id="priority" name="priority">
                                <option value="">All Priorities</option>
                                <option value="low" {{ request('priority') == 'low' ? 'selected' : '' }}>Low</option>
                                <option value="medium" {{ request('priority') == 'medium' ? 'selected' : '' }}>Medium</option>
                                <option value="high" {{ request('priority') == 'high' ? 'selected' : '' }}>High</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="project_id" class="form-label">Project</label>
                            <select class="form-select" id="project_id" name="project_id">
                                <option value="">All Projects</option>
                                @foreach($projects ?? [] as $project)
                                    @if($project && isset($project->id) && isset($project->name))
                                        <option value="{{ $project->id }}" {{ request('project_id') == $project->id ? 'selected' : '' }}>
                                            {{ $project->name }}
                                        </option>
                                    @endif
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-2 d-flex align-items-end">
                            <button type="submit" class="btn btn-outline-primary me-2">Filter</button>
                            <a href="{{ route('monitask.tasks') }}" class="btn btn-outline-secondary">Clear</a>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Tasks Table -->
            <div class="card">
                <div class="card-body">
                    @if($tasks && $tasks->count() > 0)
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Task</th>
                                        <th>Project</th>
                                        <th>Priority</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($tasks as $task)
                                        @if($task && isset($task->id))
                                        <tr>
                                            <td>
                                                <div>
                                                    <h6 class="mb-1">{{ $task->title ?? 'Untitled Task' }}</h6>
                                                    @if(isset($task->description) && $task->description)
                                                        <small class="text-muted">{{ Str::limit($task->description, 50) }}</small>
                                                    @endif
                                                </div>
                                            </td>
                                            <td>
                                                @if(isset($task->project) && $task->project && isset($task->project->name))
                                                    <span class="badge bg-light text-dark">{{ $task->project->name }}</span>
                                                @else
                                                    <span class="text-muted">No Project</span>
                                                @endif
                                            </td>
                                            <td>
                                                @php
                                                    $priority = $task->priority ?? 'medium';
                                                    $priorityClass = $priority === 'high' ? 'danger' : ($priority === 'medium' ? 'warning' : 'success');
                                                @endphp
                                                <span class="badge bg-{{ $priorityClass }}">{{ ucfirst($priority) }}</span>
                                            </td>
                                            <td>
                                                @if(isset($task->due_date) && $task->due_date)
                                                    <div>{{ $task->due_date->format('M d, Y') }}</div>
                                                    @if(method_exists($task->due_date, 'isPast') && $task->due_date->isPast() && ($task->status ?? '') !== 'completed')
                                                        <small class="text-danger">Overdue</small>
                                                    @endif
                                                @else
                                                    <span class="text-muted">No due date</span>
                                                @endif
                                            </td>
                                            <td>
                                                @php
                                                    $status = $task->status ?? 'pending';
                                                    $statusClass = $status === 'completed' ? 'success' : ($status === 'in_progress' ? 'primary' : 'warning');
                                                @endphp
                                                <span class="badge bg-{{ $statusClass }}">{{ ucfirst(str_replace('_', ' ', $status)) }}</span>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group">
                                                    <button type="button" class="btn btn-sm btn-outline-primary" onclick="startTimerForTask({{ $task->id }})" title="Start Timer">
                                                        <i class="fas fa-play"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="editTask({{ $task->id }})" title="Edit">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteTask({{ $task->id }})" title="Delete">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        @endif
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        
                        <!-- Pagination -->
                        <div class="d-flex justify-content-center mt-4">
                            {{ $tasks->withQueryString()->links() }}
                        </div>
                    @else
                        <div class="text-center py-5">
                            <i class="fas fa-tasks fa-4x text-muted mb-3"></i>
                            <h4>No Tasks Found</h4>
                            <p class="text-muted">You don't have any tasks assigned to you yet.</p>
                            <button class="btn btn-primary" onclick="showCreateTaskModal()">
                                <i class="fas fa-plus"></i> Create Your First Task
                            </button>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

<script>
function showCreateTaskModal() {
    alert('Create task functionality would be implemented here');
}

function startTimerForTask(taskId) {
    alert('Start timer for task ' + taskId);
}

function editTask(taskId) {
    alert('Edit task ' + taskId);
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        alert('Delete task ' + taskId);
    }
}

function toggleTaskComplete(taskId) {
    alert('Toggle complete for task ' + taskId);
}
</script>
@endsection
                                        </div>
                                        @if(isset($task->description) && $task->description)
                                            <div class="text-sm text-slate-500 truncate max-w-xs">{{ $task->description }}</div>
                                        @endif
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="w-6 h-6 rounded bg-primary/10 flex items-center justify-center mr-2">
                                        <span class="text-xs font-medium text-primary">{{ (isset($task->project) && $task->project && isset($task->project->name)) ? substr($task->project->name, 0, 1) : 'P' }}</span>
                                    </div>
                                    <span class="text-sm text-slate-800">{{ (isset($task->project) && $task->project && isset($task->project->name)) ? $task->project->name : 'Project' }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                    @if(isset($task->priority) && $task->priority === 'high') bg-red-100 text-red-800
                                    @elseif(isset($task->priority) && $task->priority === 'medium') bg-yellow-100 text-yellow-800
                                    @else bg-green-100 text-green-800 @endif">
                                    {{ isset($task->priority) ? ucfirst($task->priority) : 'Medium' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                @if(isset($task->due_date) && $task->due_date)
                                    <div class="text-sm text-slate-800">{{ $task->due_date->format('M j, Y') }}</div>
                                    @if(method_exists($task->due_date, 'isPast') && $task->due_date->isPast() && (isset($task->status) && $task->status !== 'completed'))
                                        <div class="text-xs text-red-600">Overdue</div>
                                    @elseif(method_exists($task->due_date, 'diffInDays') && $task->due_date->diffInDays() <= 3 && (isset($task->status) && $task->status !== 'completed'))
                                        <div class="text-xs text-yellow-600">Due soon</div>
                                    @endif
                                @else
                                    <span class="text-sm text-slate-400">No due date</span>
                                @endif
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                    @if(isset($task->status) && $task->status === 'completed') bg-green-100 text-green-800
                                    @elseif(isset($task->status) && $task->status === 'in_progress') bg-blue-100 text-blue-800
                                    @else bg-yellow-100 text-yellow-800 @endif">
                                    {{ isset($task->status) ? ucfirst(str_replace('_', ' ', $task->status)) : 'Pending' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-slate-800">{{ isset($task->time_spent) ? $task->time_spent : '0h 0m' }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center gap-2">
                                    <button onclick="startTimerForTask({{ isset($task->id) ? $task->id : 0 }})" class="text-primary hover:text-primary-dark" title="Start Timer">
                                    <button onclick="editTask({{ isset($task->id) ? $task->id : 0 }})" class="text-slate-600 hover:text-slate-800" title="Edit">
                                    <button onclick="deleteTask({{ isset($task->id) ? $task->id : 0 }})" class="text-red-600 hover:text-red-800" title="Delete">
                                </div>
                            </td>
                        </tr>
                        @endif
                    @empty
                        <tr>
                            <td colspan="7" class="text-center py-5 text-slate-400">No tasks found.</td>
                        </tr>
                    @endforelse
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Total Tasks</h4>
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83333 10L8.33333 12.5L14.1667 6.66667M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#3B82F6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $taskStats['total'] ?? 0 }}</h3>
            <p class="text-sm text-slate-500">{{ $taskStats['this_week'] ?? 0 }} this week</p>
        </div>

        <!-- Pending Tasks -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Pending</h4>
                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="7.5" stroke="#F59E0B" stroke-width="1.25"></circle>
                        <path d="M10 6.66667V10L12.5 12.5" stroke="#F59E0B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $taskStats['pending'] ?? 0 }}</h3>
            <p class="text-sm text-yellow-600">{{ $taskStats['overdue'] ?? 0 }} overdue</p>
        </div>

        <!-- In Progress -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">In Progress</h4>
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667ZM10 5.83333V10L13.3333 13.3333" stroke="#3B82F6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $taskStats['in_progress'] ?? 0 }}</h3>
            <p class="text-sm text-blue-600">{{ round(($taskStats['in_progress'] ?? 0) / max($taskStats['total'] ?? 1, 1) * 100) }}% of total</p>
        </div>

        <!-- Completed -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Completed</h4>
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10B981" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $taskStats['completed'] ?? 0 }}</h3>
            <p class="text-sm text-green-600">{{ round(($taskStats['completed'] ?? 0) / max($taskStats['total'] ?? 1, 1) * 100) }}% completion rate</p>
        </div>
    </div>

    <!-- List View -->
    <div id="listView" class="bg-white rounded-lg">
        <div class="p-6 border-b border-slate-100">
            <div class="flex flex-col md:flex-row md:items-center justify-between">
                <h3 class="text-lg font-semibold text-mainblue mb-4 md:mb-0">Task List</h3>
                <div class="flex items-center gap-3">
                    <div class="relative">
                        <input type="text" placeholder="Search tasks..." class="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                            <path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <select class="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option>Sort by: Due Date</option>
                        <option>Sort by: Priority</option>
                        <option>Sort by: Project</option>
                        <option>Sort by: Status</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-slate-50">
                    <tr>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Task</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Project</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Due Date</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time Spent</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-slate-100">
                    @forelse($tasks ?? [] as $task)
                        <tr class="hover:bg-slate-50 transition">
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <input type="checkbox" class="mr-3 rounded border-slate-300 text-primary focus:ring-primary" 
                                           {{ ($task->status ?? '') === 'completed' ? 'checked' : '' }}
                                           onchange="toggleTaskComplete({{ $task->id ?? 0 }})">
                                    <div>
                                        <div class="font-medium text-slate-800 {{ ($task->status ?? '') === 'completed' ? 'line-through text-slate-500' : '' }}">
                                            {{ $task->title ?? 'Task Title' }}
                                        </div>
                                        @if(isset($task->description) && $task->description)
                                            <div class="text-sm text-slate-500 truncate max-w-xs">{{ $task->description }}</div>
                                        @endif
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="w-6 h-6 rounded bg-primary/10 flex items-center justify-center mr-2">
                                        <span class="text-xs font-medium text-primary">{{ substr($task->project->name ?? 'P', 0, 1) }}</span>
                                    </div>
                                    <span class="text-sm text-slate-800">{{ $task->project->name ?? 'Project' }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                    @if(($task->priority ?? 'medium') === 'high') bg-red-100 text-red-800
                                    @elseif(($task->priority ?? 'medium') === 'medium') bg-yellow-100 text-yellow-800
                                    @else bg-green-100 text-green-800 @endif">
                                    {{ ucfirst($task->priority ?? 'medium') }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                @if(isset($task->due_date) && $task->due_date)
                                    <div class="text-sm text-slate-800">{{ $task->due_date->format('M j, Y') }}</div>
                                    @if($task->due_date->isPast() && ($task->status ?? '') !== 'completed')
                                        <div class="text-xs text-red-600">Overdue</div>
                                    @elseif($task->due_date->diffInDays() <= 3 && ($task->status ?? '') !== 'completed')
                                        <div class="text-xs text-yellow-600">Due soon</div>
                                    @endif
                                @else
                                    <span class="text-sm text-slate-400">No due date</span>
                                @endif
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                    @if(($task->status ?? 'pending') === 'completed') bg-green-100 text-green-800
                                    @elseif(($task->status ?? 'pending') === 'in_progress') bg-blue-100 text-blue-800
                                    @else bg-yellow-100 text-yellow-800 @endif">
                                    {{ ucfirst(str_replace('_', ' ', $task->status ?? 'pending')) }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-slate-800">{{ $task->time_spent ?? '0h 0m' }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center gap-2">
                                    <button onclick="startTimerForTask({{ $task->id ?? 0 }})" class="text-primary hover:text-primary-dark" title="Start Timer">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.33333 4L10.6667 8L5.33333 12V4Z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                    <button onclick="editTask({{ $task->id ?? 0 }})" class="text-slate-600 hover:text-slate-800" title="Edit">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.333 2.667H2.667c-.737 0-1.334.597-1.334 1.333v9.333c0 .737.597 1.334 1.334 1.334h9.333c.736 0 1.333-.597 1.333-1.334V8" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M12.333 1.667a1.414 1.414 0 1 1 2 2L8 10l-2.667.667L6 8l6.333-6.333Z" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <button onclick="deleteTask({{ $task->id ?? 0 }})" class="text-red-600 hover:text-red-800" title="Delete">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 4h12M5.333 4V2.667c0-.737.597-1.334 1.334-1.334h2.666c.737 0 1.334.597 1.334 1.334V4m2 0v9.333c0 .737-.597 1.334-1.334 1.334H4.667c-.737 0-1.334-.597-1.334-1.334V4h8.667Z" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7" class="px-6 py-12 text-center">
                                <div class="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <h4 class="text-slate-600 font-medium mb-2">No tasks found</h4>
                                <p class="text-slate-500 text-sm mb-4">Create your first task to get started</p>
                                <button onclick="showCreateTaskModal()" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                                    Create First Task
                                </button>
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

    <!-- Board View (Hidden by default) -->
    <div id="boardView" class="hidden">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <!-- Pending Column -->
            <div class="bg-slate-50 rounded-lg p-4">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-slate-800">Pending</h3>
                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">{{ $taskStats['pending'] ?? 0 }}</span>
                </div>
                <div class="space-y-3" id="pendingTasks">
                    <!-- Tasks will be populated here -->
                </div>
            </div>

            <!-- In Progress Column -->
            <div class="bg-slate-50 rounded-lg p-4">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-slate-800">In Progress</h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">{{ $taskStats['in_progress'] ?? 0 }}</span>
                </div>
                <div class="space-y-3" id="inProgressTasks">
                    <!-- Tasks will be populated here -->
                </div>
            </div>

            <!-- Completed Column -->
            <div class="bg-slate-50 rounded-lg p-4">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-slate-800">Completed</h3>
                    <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">{{ $taskStats['completed'] ?? 0 }}</span>
                </div>
                <div class="space-y-3" id="completedTasks">
                    <!-- Tasks will be populated here -->
                </div>
            </div>
        </div>
    </div>

    <!-- Pagination -->
    @if(isset($tasks) && $tasks->hasPages())
        <div class="mt-8">
            {{ $tasks->links() }}
        </div>
    @endif
</div>

<script>
    let currentView = 'list';
    
    function setView(view) {
        currentView = view;
        const listView = document.getElementById('listView');
        const boardView = document.getElementById('boardView');
        const listBtn = document.getElementById('listViewBtn');
        const boardBtn = document.getElementById('boardViewBtn');
        
        if (view === 'list') {
            listView.classList.remove('hidden');
            boardView.classList.add('hidden');
            listBtn.classList.add('bg-primary', 'text-white');
            listBtn.classList.remove('text-slate-600');
            boardBtn.classList.remove('bg-primary', 'text-white');
            boardBtn.classList.add('text-slate-600');
        } else {
            listView.classList.add('hidden');
            boardView.classList.remove('hidden');
            boardBtn.classList.add('bg-primary', 'text-white');
            boardBtn.classList.remove('text-slate-600');
            listBtn.classList.remove('bg-primary', 'text-white');
            listBtn.classList.add('text-slate-600');
            populateBoardView();
        }
    }
    
    function populateBoardView() {
        // This would populate the board view with tasks from the backend
        // For now, this is a placeholder
    }
    
    function filterByStatus(status) {
        const url = new URL(window.location);
        if (status) {
            url.searchParams.set('status', status);
        } else {
            url.searchParams.delete('status');
        }
        window.location = url;
    }
    
    function filterByProject(projectId) {
        const url = new URL(window.location);
        if (projectId) {
            url.searchParams.set('project_id', projectId);
        } else {
            url.searchParams.delete('project_id');
        }
        window.location = url;
    }
    
    function showCreateTaskModal() {
        alert('Create task modal will be implemented');
    }
    
    function toggleTaskComplete(taskId) {
        alert('Toggle task completion for task ' + taskId);
    }
    
    function startTimerForTask(taskId) {
        alert('Start timer for task ' + taskId);
    }
    
    function editTask(taskId) {
        alert('Edit task ' + taskId);
    }
    
    function deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            alert('Delete task ' + taskId);
        }
    }
</script>
@endsection
