@extends('layouts.monitask')

@section('title', 'Projects')

@section('content')
<div class="p-7">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-7">
        <div class="max-w-md mb-4 md:mb-0">
            <h2 class="text-xl text-mainblue font-semibold">
                Projects
            </h2>
            <p class="text-sm text-slate-600">
                Manage your projects, track progress, and organize your work
            </p>
        </div>
        
        <div class="flex items-center gap-3">
            <!-- Filter Controls -->
            <div class="flex items-center gap-2">
                <select class="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" onchange="filterByStatus(this.value)">
                    <option value="">All Status</option>
                    <option value="active" {{ request('status') == 'active' ? 'selected' : '' }}>Active</option>
                    <option value="completed" {{ request('status') == 'completed' ? 'selected' : '' }}>Completed</option>
                    <option value="on_hold" {{ request('status') == 'on_hold' ? 'selected' : '' }}>On Hold</option>
                </select>
                
                <select class="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" onchange="filterByClient(this.value)">
                    <option value="">All Clients</option>
                    @foreach($clients ?? [] as $client)
                        <option value="{{ $client->id }}" {{ request('client_id') == $client->id ? 'selected' : '' }}>
                            {{ $client->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            
            <!-- Action Buttons -->
            <button onclick="showCreateProjectModal()" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-medium">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                    <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                New Project
            </button>
        </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Total Projects -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Total Projects</h4>
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 6.25H17.5M2.5 10H17.5M2.5 13.75H17.5" stroke="#3B82F6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $projectStats['total'] ?? 0 }}</h3>
            <p class="text-sm text-slate-500">{{ $projectStats['this_month'] ?? 0 }} this month</p>
        </div>

        <!-- Active Projects -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Active Projects</h4>
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="7.5" stroke="#10B981" stroke-width="1.25"></circle>
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="#10B981" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $projectStats['active'] ?? 0 }}</h3>
            <p class="text-sm text-green-600">{{ round(($projectStats['active'] ?? 0) / max($projectStats['total'] ?? 1, 1) * 100) }}% of total</p>
        </div>

        <!-- Total Hours -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Total Hours</h4>
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="7.5" stroke="#8B5CF6" stroke-width="1.25"></circle>
                        <path d="M10 5.83333V10L12.5 12.5" stroke="#8B5CF6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">{{ $projectStats['total_hours'] ?? '0.0' }}h</h3>
            <p class="text-sm text-slate-500">Across all projects</p>
        </div>

        <!-- Revenue -->
        <div class="p-5 bg-white rounded-lg">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-slate-700">Total Revenue</h4>
                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="7.5" stroke="#F97316" stroke-width="1.25"></circle>
                        <path d="M10 5.83333V14.1667M7.5 7.5H11.25C11.913 7.5 12.5 8.08696 12.5 8.75C12.5 9.41304 11.913 10 11.25 10H8.75C8.08696 10 7.5 10.587 7.5 11.25C7.5 11.913 8.08696 12.5 8.75 12.5H12.5" stroke="#F97316" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-mainblack">${{ number_format($projectStats['total_revenue'] ?? 0, 0) }}</h3>
            <p class="text-sm text-orange-600">${{ number_format($projectStats['avg_project_value'] ?? 0, 0) }} avg per project</p>
        </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        @forelse($projects ?? [] as $project)
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <!-- Project Header -->
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-3"
                             style="background: {{ $project->color ?? '#8247FF' }}20">
                            <span class="text-lg font-semibold" style="color: {{ $project->color ?? '#8247FF' }}">
                                {{ substr($project->name, 0, 1) }}
                            </span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-slate-800 truncate">{{ $project->name }}</h3>
                            <p class="text-sm text-slate-500">{{ $project->client->name ?? 'No client' }}</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <!-- Status Badge -->
                        <span class="px-2 py-1 text-xs font-medium rounded-full
                            @if($project->status === 'active') bg-green-100 text-green-800
                            @elseif($project->status === 'completed') bg-blue-100 text-blue-800
                            @elseif($project->status === 'on_hold') bg-yellow-100 text-yellow-800
                            @else bg-slate-100 text-slate-800 @endif">
                            {{ ucfirst(str_replace('_', ' ', $project->status ?? 'active')) }}
                        </span>
                        
                        <!-- Actions Dropdown -->
                        <div class="relative">
                            <button onclick="toggleDropdown('project-{{ $project->id }}')" class="p-1 hover:bg-slate-100 rounded">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4.66667C8.36819 4.66667 8.66667 4.36819 8.66667 4C8.66667 3.63181 8.36819 3.33333 8 3.33333C7.63181 3.33333 7.33333 3.63181 7.33333 4C7.33333 4.36819 7.63181 4.66667 8 4.66667Z" fill="#64748B"></path>
                                    <path d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z" fill="#64748B"></path>
                                    <path d="M8 12.6667C8.36819 12.6667 8.66667 12.3682 8.66667 12C8.66667 11.6318 8.36819 11.3333 8 11.3333C7.63181 11.3333 7.33333 11.6318 7.33333 12C7.33333 12.3682 7.63181 12.6667 8 12.6667Z" fill="#64748B"></path>
                                </svg>
                            </button>
                            <div id="project-{{ $project->id }}" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 z-10">
                                <a href="{{ route('monitask.projects.show', $project) }}" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">View Details</a>
                                <a href="{{ route('monitask.projects.edit', $project) }}" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Edit Project</a>
                                <button onclick="startTimerForProject({{ $project->id }})" class="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Start Timer</button>
                                <hr class="my-1">
                                <button onclick="archiveProject({{ $project->id }})" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Archive</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project Description -->
                @if($project->description)
                    <p class="text-sm text-slate-600 mb-4 line-clamp-2">{{ $project->description }}</p>
                @endif

                <!-- Project Stats -->
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <h4 class="text-xs font-medium text-slate-500 uppercase mb-1">Total Hours</h4>
                        <p class="text-lg font-semibold text-slate-800">{{ $project->total_hours ?? '0.0' }}h</p>
                    </div>
                    <div>
                        <h4 class="text-xs font-medium text-slate-500 uppercase mb-1">Revenue</h4>
                        <p class="text-lg font-semibold text-slate-800">${{ number_format($project->total_revenue ?? 0, 0) }}</p>
                    </div>
                </div>

                <!-- Progress Bar -->
                @if(isset($project->progress))
                    <div class="mb-4">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs font-medium text-slate-500">Progress</span>
                            <span class="text-xs font-medium text-slate-700">{{ $project->progress }}%</span>
                        </div>
                        <div class="w-full bg-slate-200 rounded-full h-2">
                            <div class="h-2 rounded-full transition-all duration-300" 
                                 style="width: {{ $project->progress }}%; background: {{ $project->color ?? '#8247FF' }}"></div>
                        </div>
                    </div>
                @endif

                <!-- Project Team -->
                @if(isset($project->team_members) && count($project->team_members) > 0)
                    <div class="mb-4">
                        <h4 class="text-xs font-medium text-slate-500 uppercase mb-2">Team</h4>
                        <div class="flex -space-x-2">
                            @foreach($project->team_members as $member)
                                <div class="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center">
                                    @if($member->avatar)
                                        <img src="{{ $member->avatar }}" alt="{{ $member->name }}" class="w-full h-full rounded-full object-cover">
                                    @else
                                        <span class="text-xs font-medium text-slate-600">{{ substr($member->name, 0, 1) }}</span>
                                    @endif
                                </div>
                            @endforeach
                        </div>
                    </div>
                @endif

                <!-- Due Date -->
                @if($project->due_date)
                    <div class="mb-4">
                        <div class="flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0833 2.33333H2.91667C2.27233 2.33333 1.75 2.85566 1.75 3.5V11.6667C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6667V3.5C12.25 2.85566 11.7277 2.33333 11.0833 2.33333Z" stroke="#64748B" stroke-width="1.17" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.33333 1.16667V3.5M4.66667 1.16667V3.5M1.75 5.83333H12.25" stroke="#64748B" stroke-width="1.17" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span class="text-sm text-slate-600">
                                Due {{ $project->due_date->format('M j, Y') }}
                                @if($project->due_date->isPast())
                                    <span class="text-red-600 font-medium">(Overdue)</span>
                                @elseif($project->due_date->diffInDays() <= 7)
                                    <span class="text-yellow-600 font-medium">(Due soon)</span>
                                @endif
                            </span>
                        </div>
                    </div>
                @endif

                <!-- Quick Actions -->
                <div class="flex gap-2">
                    <button onclick="startTimerForProject({{ $project->id }})" class="flex-1 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition text-sm font-medium">
                        Start Timer
                    </button>
                    <a href="{{ route('monitask.projects.show', $project) }}" class="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition text-sm font-medium text-center">
                        View Details
                    </a>
                </div>
            </div>
        @empty
            <div class="col-span-full">
                <div class="text-center py-12">
                    <div class="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" fill="#94A3B8" opacity="0.4"></path>
                            <path d="M8 9H16M8 13H12" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <h4 class="text-slate-600 font-medium mb-2">No projects found</h4>
                    <p class="text-slate-500 text-sm mb-4">Create your first project to get started</p>
                    <button onclick="showCreateProjectModal()" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                        Create First Project
                    </button>
                </div>
            </div>
        @endforelse
    </div>

    <!-- Pagination -->
    @if(isset($projects) && $projects->hasPages())
        <div class="mt-8">
            {{ $projects->links() }}
        </div>
    @endif
</div>

<script>
    function filterByStatus(status) {
        const url = new URL(window.location);
        if (status) {
            url.searchParams.set('status', status);
        } else {
            url.searchParams.delete('status');
        }
        window.location = url;
    }
    
    function filterByClient(clientId) {
        const url = new URL(window.location);
        if (clientId) {
            url.searchParams.set('client_id', clientId);
        } else {
            url.searchParams.delete('client_id');
        }
        window.location = url;
    }
    
    function toggleDropdown(dropdownId) {
        // Close all other dropdowns
        document.querySelectorAll('[id^="project-"]').forEach(dropdown => {
            if (dropdown.id !== dropdownId) {
                dropdown.classList.add('hidden');
            }
        });
        
        // Toggle current dropdown
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('hidden');
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.relative')) {
            document.querySelectorAll('[id^="project-"]').forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });
    
    function showCreateProjectModal() {
        alert('Create project modal will be implemented');
    }
    
    function startTimerForProject(projectId) {
        alert('Start timer for project ' + projectId);
    }
    
    function archiveProject(projectId) {
        if (confirm('Are you sure you want to archive this project?')) {
            alert('Archive project ' + projectId);
        }
    }
</script>
@endsection
