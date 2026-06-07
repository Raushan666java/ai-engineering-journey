@extends('layouts.monitask')

@section('title', 'Screenshots - Monitask')

@section('content')
<div class="p-7">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
        <div>
            <h2 class="text-2xl font-bold text-gray-900">Screenshots</h2>
            <p class="text-gray-600">View captured screenshots and activity monitoring</p>
        </div>
        <div class="flex items-center gap-3">
            <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
                <i class="fas fa-download mr-2"></i>
                Export Screenshots
            </button>
        </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <form method="GET" class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" name="date" value="{{ $date }}" class="w-full border border-gray-300 rounded-lg px-3 py-2">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Project</label>
                <select name="project_id" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option value="">All Projects</option>
                    @foreach($projects as $project)
                        <option value="{{ $project->id }}" {{ $projectId == $project->id ? 'selected' : '' }}>
                            {{ $project->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            @if($teamMembers->isNotEmpty())
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Team Member</label>
                <select name="user_id" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option value="">All Members</option>
                    @foreach($teamMembers as $member)
                        <option value="{{ $member->id }}" {{ $userId == $member->id ? 'selected' : '' }}>
                            {{ $member->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            @endif
            <div class="flex items-end">
                <button type="submit" class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">
                    <i class="fas fa-filter mr-2"></i>Apply Filters
                </button>
            </div>
        </form>
    </div>

    <!-- Screenshots Grid -->
    @if($screenshots->count() > 0)
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @foreach($screenshots as $screenshot)
                <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <!-- Screenshot Image -->
                    <div class="aspect-video bg-gray-100 relative group cursor-pointer" onclick="openScreenshotModal({{ $screenshot->id }})">
                        @if($screenshot->file_path)
                            <img src="{{ $screenshot->screenshot_url }}" alt="Screenshot" class="w-full h-full object-cover">
                        @else
                            <div class="w-full h-full flex items-center justify-center">
                                <i class="fas fa-image text-gray-400 text-3xl"></i>
                            </div>
                        @endif
                        
                        <!-- Overlay on hover -->
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <i class="fas fa-search-plus text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        </div>
                        
                        <!-- Activity Score Badge -->
                        <div class="absolute top-2 right-2">
                            <span class="px-2 py-1 text-xs font-medium rounded-full bg-{{ $screenshot->activity_color }} text-white">
                                {{ $screenshot->activity_level }}
                            </span>
                        </div>
                    </div>
                    
                    <!-- Screenshot Info -->
                    <div class="p-4">
                        <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-gray-900 truncate">{{ $screenshot->project->name }}</h4>
                            <span class="text-xs text-gray-500">{{ $screenshot->captured_at->format('g:i A') }}</span>
                        </div>
                        
                        <div class="flex items-center justify-between text-sm text-gray-600">
                            <span>{{ $screenshot->user->name }}</span>
                            @if($screenshot->is_approved === null)
                                <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                            @elseif($screenshot->is_approved)
                                <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Approved</span>
                            @else
                                <span class="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Rejected</span>
                            @endif
                        </div>
                        
                        @if($screenshot->notes)
                            <p class="text-xs text-gray-500 mt-2 truncate">{{ $screenshot->notes }}</p>
                        @endif
                        
                        <!-- Actions -->
                        <div class="flex items-center gap-2 mt-3">
                            <button onclick="approveScreenshot({{ $screenshot->id }})" class="flex-1 bg-green-50 text-green-700 px-3 py-1 rounded text-xs hover:bg-green-100 transition">
                                <i class="fas fa-check mr-1"></i>Approve
                            </button>
                            <button onclick="rejectScreenshot({{ $screenshot->id }})" class="flex-1 bg-red-50 text-red-700 px-3 py-1 rounded text-xs hover:bg-red-100 transition">
                                <i class="fas fa-times mr-1"></i>Reject
                            </button>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        
        <!-- Pagination -->
        <div class="mt-8">
            {{ $screenshots->links() }}
        </div>
    @else
        <div class="bg-white rounded-lg shadow-sm border p-12 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-camera text-gray-400 text-2xl"></i>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No screenshots found</h3>
            <p class="text-gray-600 mb-6">No screenshots were captured for the selected date and filters.</p>
            <button onclick="refreshScreenshots()" class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">
                <i class="fas fa-refresh mr-2"></i>Refresh
            </button>
        </div>
    @endif
</div>

<!-- Screenshot Modal -->
<div id="screenshotModal" class="fixed inset-0 bg-black bg-opacity-75 hidden z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
        <div class="flex items-center justify-between p-4 border-b">
            <h3 class="text-lg font-semibold">Screenshot Details</h3>
            <button onclick="closeScreenshotModal()" class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>
        
        <div id="screenshotModalContent" class="p-6">
            <!-- Content will be loaded dynamically -->
        </div>
    </div>
</div>

@push('scripts')
<script>
function openScreenshotModal(screenshotId) {
    document.getElementById('screenshotModal').classList.remove('hidden');
    
    // Load screenshot details via AJAX
    fetch(`/monitask/screenshots/${screenshotId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('screenshotModalContent').innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <img src="${data.screenshot_url}" alt="Screenshot" class="w-full rounded-lg shadow-lg">
                    </div>
                    <div>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Project</label>
                                <p class="text-gray-900">${data.project.name}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">User</label>
                                <p class="text-gray-900">${data.user.name}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Captured At</label>
                                <p class="text-gray-900">${new Date(data.captured_at).toLocaleString()}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Activity Level</label>
                                <span class="px-3 py-1 text-sm rounded-full bg-${data.activity_color} text-white">${data.activity_level}</span>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Status</label>
                                <span class="px-3 py-1 text-sm rounded-full ${data.is_approved === null ? 'bg-yellow-100 text-yellow-800' : data.is_approved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                    ${data.is_approved === null ? 'Pending' : data.is_approved ? 'Approved' : 'Rejected'}
                                </span>
                            </div>
                            ${data.notes ? `
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Notes</label>
                                    <p class="text-gray-900">${data.notes}</p>
                                </div>
                            ` : ''}
                            <div class="flex gap-3 pt-4">
                                <button onclick="approveScreenshot(${data.id})" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                                    <i class="fas fa-check mr-2"></i>Approve
                                </button>
                                <button onclick="rejectScreenshot(${data.id})" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                    <i class="fas fa-times mr-2"></i>Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error loading screenshot details:', error);
            document.getElementById('screenshotModalContent').innerHTML = '<p class="text-red-600">Error loading screenshot details.</p>';
        });
}

function closeScreenshotModal() {
    document.getElementById('screenshotModal').classList.add('hidden');
}

function approveScreenshot(screenshotId) {
    updateScreenshotStatus(screenshotId, true);
}

function rejectScreenshot(screenshotId) {
    updateScreenshotStatus(screenshotId, false);
}

function updateScreenshotStatus(screenshotId, isApproved) {
    fetch(`/monitask/screenshots/${screenshotId}/status`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: JSON.stringify({
            is_approved: isApproved
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        } else {
            alert(data.message || 'Failed to update screenshot status');
        }
    })
    .catch(error => {
        console.error('Error updating screenshot status:', error);
        alert('Failed to update screenshot status');
    });
}

function refreshScreenshots() {
    location.reload();
}

// Close modal when clicking outside
document.getElementById('screenshotModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeScreenshotModal();
    }
});
</script>
@endpush
@endsection
