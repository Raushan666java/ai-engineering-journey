@extends('layouts.monitask')

@section('title', 'Dashboard - Monitask')

@section('content')
<div class="p-7">
    <!-- Welcome Section -->
    <div class="max-w-md mb-7">
        <h2 class="text-xl text-mainblue">
            Welcome back, <span class="font-semibold">{{ auth()->user()->name ?? 'User' }}!</span>
        </h2>
        <p class="text-sm text-slate-600">
            Track your time and manage your productivity efficiently
        </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <!-- Total Hours -->
        <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
            <div class="flex items-center justify-between mb-3">
                <div>
                    <h4 class="text-sm font-medium text-slate-700">Total Hours</h4>
                </div>
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="#8247FF" opacity="0.4"></path>
                        <path d="M12.75 7.5V12L16.5 14.25" stroke="#8247FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div>
                    <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        {{ $timeAnalytics['total_hours'] ?? '0.0' }}h
                    </h4>
                    <div class="flex items-center gap-1">
                        <span class="text-sm text-green-500">+12%</span>
                        <span class="text-sm text-slate-500">vs yesterday</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Billable Hours -->
        <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
            <div class="flex items-center justify-between mb-3">
                <div>
                    <h4 class="text-sm font-medium text-slate-700">Billable Hours</h4>
                </div>
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#10B981"></path>
                        <path d="M9 16L12 13L15 16M12 8V13" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div>
                    <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        {{ $timeAnalytics['billable_hours'] ?? '0.0' }}h
                    </h4>
                    <div class="flex items-center gap-1">
                        <span class="text-sm text-green-500">+5%</span>
                        <span class="text-sm text-slate-500">vs last week</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings -->
        <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
            <div class="flex items-center justify-between mb-3">
                <div>
                    <h4 class="text-sm font-medium text-slate-700">Earnings</h4>
                </div>
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3B82F6"></path>
                        <path d="M12 6V18M8 9L16 9M8 15L16 15" stroke="#3B82F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div>
                    <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        ${{ number_format($timeAnalytics['earnings'] ?? 0, 2) }}
                    </h4>
                    <div class="flex items-center gap-1">
                        <span class="text-sm text-blue-500">+8%</span>
                        <span class="text-sm text-slate-500">this month</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Productivity -->
        <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
            <div class="flex items-center justify-between mb-3">
                <div>
                    <h4 class="text-sm font-medium text-slate-700">Productivity</h4>
                </div>
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M3 13C3 7.477 7.477 3 13 3C18.523 3 23 7.477 23 13C23 18.523 18.523 23 13 23C7.477 23 3 18.523 3 13Z" fill="#F97316"></path>
                        <path d="M9 12L12 15L20 7" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div>
                    <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        {{ round($productivityData['productive']['percentage'] ?? 85) }}%
                    </h4>
                    <div class="flex items-center gap-1">
                        <span class="text-sm text-orange-500">Excellent</span>
                        <span class="text-sm text-slate-500">performance</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Active Timer Section -->
    @if($activeSession ?? false)
    <div class="mb-6">
        <div class="p-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6L21 12L8 18V6Z" fill="white"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold">{{ $activeSession->project->name ?? 'Current Project' }}</h3>
                        <p class="text-white/80">{{ $activeSession->task->title ?? 'General task' }}</p>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-2xl font-bold" id="activeTimer">00:00:00</div>
                    <button onclick="stopTimer()" class="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition">
                        Stop Timer
                    </button>
                </div>
            </div>
        </div>
    </div>
    @endif

    <!-- Main Content Area -->
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <!-- Recent Time Entries -->
        <div class="xl:col-span-2">
            <div class="p-6 bg-white rounded-lg">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-mainblue">Recent Time Sessions</h3>
                    <a href="{{ route('monitask.time-tracking') }}" class="text-primary hover:text-primary-dark">View All</a>
                </div>
                
                @if(isset($recentSessions) && count($recentSessions) > 0)
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="border-b border-slate-100">
                                    <th class="pb-3 text-left text-sm font-medium text-slate-600">Project</th>
                                    <th class="pb-3 text-left text-sm font-medium text-slate-600">Duration</th>
                                    <th class="pb-3 text-left text-sm font-medium text-slate-600">Date</th>
                                    <th class="pb-3 text-left text-sm font-medium text-slate-600">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($recentSessions as $session)
                                <tr class="border-b border-slate-50">
                                    <td class="py-3">
                                        <div class="flex items-center">
                                            <div class="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
                                                <span class="text-xs font-medium text-primary">{{ substr($session->project->name ?? 'P', 0, 1) }}</span>
                                            </div>
                                            <span class="font-medium text-slate-800">{{ $session->project->name ?? 'Project' }}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 font-medium text-slate-800">{{ number_format($session->duration / 3600, 2) }}h</td>
                                    <td class="py-3 text-slate-600">{{ $session->started_at->format('M j, g:i A') }}</td>
                                    <td class="py-3">
                                        @if($session->is_approved === null)
                                            <span class="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">Pending</span>
                                        @elseif($session->is_approved)
                                            <span class="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Approved</span>
                                        @else
                                            <span class="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">Rejected</span>
                                        @endif
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                @else
                    <div class="text-center py-8">
                        <div class="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="#94A3B8" opacity="0.4"></path>
                                <path d="M12.75 7.5V12L16.5 14.25" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <h4 class="text-slate-600 font-medium mb-2">No time sessions yet</h4>
                        <p class="text-slate-500 text-sm mb-4">Start tracking your time to see entries here</p>
                        <button onclick="showStartTimerModal()" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                            Start Tracking
                        </button>
                    </div>
                @endif
            </div>
        </div>

        <!-- Sidebar Content -->
        <div class="space-y-6">
            <!-- Quick Actions -->
            <div class="p-6 bg-white rounded-lg">
                <h3 class="text-lg font-semibold text-mainblue mb-4">Quick Actions</h3>
                <div class="space-y-3">
                    <button onclick="showStartTimerModal()" class="flex items-center justify-between w-full p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                        <span class="font-medium">Start Timer</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33333 6.66667L13.3333 10L8.33333 13.3333V6.66667Z" fill="white"></path>
                        </svg>
                    </button>
                    <button onclick="showManualEntryModal()" class="flex items-center justify-between w-full p-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition">
                        <span class="font-medium">Add Manual Entry</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <a href="{{ route('monitask.reports') }}" class="flex items-center justify-between p-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition">
                        <span class="font-medium">View Reports</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 7.5L10 12.5L17.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Productivity Breakdown -->
            <div class="p-6 bg-white rounded-lg">
                <h3 class="text-lg font-semibold text-mainblue mb-4">Productivity Breakdown</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <span class="text-slate-600">Productive Time</span>
                        <span class="font-semibold text-green-600">{{ $productivityData['productive']['duration_formatted'] ?? '0h 0m' }}</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: {{ $productivityData['productive']['percentage'] ?? 0 }}%"></div>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <span class="text-slate-600">Neutral Time</span>
                        <span class="font-semibold text-yellow-600">{{ $productivityData['neutral']['duration_formatted'] ?? '0h 0m' }}</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2">
                        <div class="bg-yellow-500 h-2 rounded-full" style="width: {{ $productivityData['neutral']['percentage'] ?? 0 }}%"></div>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <span class="text-slate-600">Unproductive Time</span>
                        <span class="font-semibold text-red-600">{{ $productivityData['unproductive']['duration_formatted'] ?? '0h 0m' }}</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2">
                        <div class="bg-red-500 h-2 rounded-full" style="width: {{ $productivityData['unproductive']['percentage'] ?? 0 }}%"></div>
                    </div>
                </div>
            </div>

            <!-- Pending Tasks -->
            <div class="p-6 bg-white rounded-lg">
                <h3 class="text-lg font-semibold text-mainblue mb-4">Pending Tasks</h3>
                <div class="space-y-3">
                    @forelse($pendingTasks ?? [] as $task)
                        <div class="p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-medium text-slate-800">{{ $task->name }}</h4>
                                <span class="px-2 py-1 text-xs font-medium rounded-full
                                    @if($task->priority === 'high') text-red-700 bg-red-100
                                    @elseif($task->priority === 'medium') text-yellow-700 bg-yellow-100
                                    @else text-green-700 bg-green-100 @endif">
                                    {{ ucfirst($task->priority ?? 'medium') }}
                                </span>
                            </div>
                            <p class="text-sm text-slate-600 mb-2">{{ $task->project->name ?? 'Project' }}</p>
                            <button onclick="startTimerForTask({{ $task->id }})" class="text-sm text-primary hover:text-primary-dark">
                                Start Timer →
                            </button>
                        </div>
                    @empty
                        <p class="text-slate-500 text-sm">No pending tasks</p>
                    @endforelse
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Start Timer Modal -->
<div class="modal fade" id="startTimerModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Start Timer</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form id="startTimerForm">
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Project *</label>
                        <select name="project_id" class="form-select" required>
                            <option value="">Select Project</option>
                            @foreach($projects as $project)
                                <option value="{{ $project->id }}">{{ $project->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Task (Optional)</label>
                        <select name="task_id" class="form-select">
                            <option value="">No specific task</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description (Optional)</label>
                        <input type="text" name="description" class="form-control" placeholder="What are you working on?">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-success">
                        <i class="fas fa-play"></i> Start Timer
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// Timer functionality
let timerInterval;
let startTime = @if($activeSession) new Date('{{ $activeSession->started_at->toISOString() }}') @else null @endif;

function updateTimer() {
    if (startTime) {
        const now = new Date();
        const diff = Math.floor((now - startTime) / 1000);
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        
        document.getElementById('activeTimer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

if (startTime) {
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}

// Start timer form
document.getElementById('startTimerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('{{ route("monitask.timer.start") }}', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}',
            'Accept': 'application/json',
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        } else {
            alert(data.error || 'Failed to start timer');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to start timer');
    });
});

function stopTimer() {
    fetch('{{ route("monitask.timer.stop") }}', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}',
            'Accept': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        } else {
            alert(data.error || 'Failed to stop timer');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to stop timer');
    });
}

function startTimerForTask(taskId) {
    // Implementation for starting timer for specific task
    document.querySelector('[name="task_id"]').value = taskId;
    new bootstrap.Modal(document.getElementById('startTimerModal')).show();
}

// Productivity Chart
const ctx = document.getElementById('productivityChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Productive', 'Neutral', 'Unproductive'],
        datasets: [{
            data: [
                {{ $productivityData['productive']['percentage'] }},
                {{ $productivityData['neutral']['percentage'] }},
                {{ $productivityData['unproductive']['percentage'] }}
            ],
            backgroundColor: [
                '#28a745',
                '#ffc107',
                '#dc3545'
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
</script>
@endpush
