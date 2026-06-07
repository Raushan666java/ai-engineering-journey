@extends('layouts.monitask')

@section('title', 'Agent Management - Monitask')

@section('content')
<div class="p-7">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
        <div>
            <h2 class="text-2xl font-bold text-gray-900">Agent Management</h2>
            <p class="text-gray-600">Manage your desktop and mobile monitoring agents</p>
        </div>
        <div class="flex gap-3">
            <button onclick="refreshAgentStatus()" class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <i class="fas fa-sync-alt"></i>
                Refresh Status
            </button>
            <button onclick="showDownloadModal()" class="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-download"></i>
                Download Agent
            </button>
        </div>
    </div>

    <!-- Agent Status Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg p-6 shadow-sm border">
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-desktop text-green-600 text-xl"></i>
                </div>
                <span class="text-2xl font-bold text-gray-900" id="onlineAgentsCount">0</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Online Agents</h3>
            <p class="text-gray-600 text-sm">Currently active devices</p>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border">
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-eye text-blue-600 text-xl"></i>
                </div>
                <span class="text-2xl font-bold text-gray-900" id="monitoringAgentsCount">0</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
            <p class="text-gray-600 text-sm">Actively tracking time</p>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border">
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-user-secret text-purple-600 text-xl"></i>
                </div>
                <span class="text-2xl font-bold text-gray-900" id="stealthAgentsCount">0</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Stealth Mode</h3>
            <p class="text-gray-600 text-sm">Hidden monitoring</p>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border">
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                </div>
                <span class="text-2xl font-bold text-gray-900" id="offlineAgentsCount">0</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Offline</h3>
            <p class="text-gray-600 text-sm">Inactive devices</p>
        </div>
    </div>

    <!-- Agents Table -->
    <div class="bg-white rounded-lg shadow-sm border">
        <div class="p-6 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Registered Agents</h3>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full" id="agentsTable">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monitoring</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stealth</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200" id="agentsTableBody">
                    <!-- Dynamic content will be loaded here -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- Download Agent Modal -->
    <div class="modal fade" id="downloadAgentModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Download Monitoring Agent</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-6">
                        <div class="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-download text-blue-600 text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Choose Your Platform</h3>
                        <p class="text-gray-600">Download the appropriate agent for your device</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Windows Agent -->
                        <div class="border rounded-lg p-4 text-center hover:border-blue-500 transition cursor-pointer" onclick="downloadAgent('windows')">
                            <div class="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-lg flex items-center justify-center">
                                <i class="fab fa-windows text-blue-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold mb-2">Windows</h4>
                            <p class="text-sm text-gray-600 mb-3">Windows 10/11 (64-bit)</p>
                            <div class="text-xs text-gray-500">
                                <div>• Screen monitoring</div>
                                <div>• Activity tracking</div>
                                <div>• Stealth mode</div>
                            </div>
                        </div>

                        <!-- macOS Agent -->
                        <div class="border rounded-lg p-4 text-center hover:border-blue-500 transition cursor-pointer" onclick="downloadAgent('macos')">
                            <div class="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                                <i class="fab fa-apple text-gray-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold mb-2">macOS</h4>
                            <p class="text-sm text-gray-600 mb-3">macOS 10.15+ (Intel/M1)</p>
                            <div class="text-xs text-gray-500">
                                <div>• Screen monitoring</div>
                                <div>• Activity tracking</div>
                                <div>• Privacy compliant</div>
                            </div>
                        </div>

                        <!-- Mobile App -->
                        <div class="border rounded-lg p-4 text-center hover:border-blue-500 transition cursor-pointer" onclick="downloadAgent('mobile')">
                            <div class="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-mobile-alt text-green-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold mb-2">Mobile</h4>
                            <p class="text-sm text-gray-600 mb-3">Android/iOS App</p>
                            <div class="text-xs text-gray-500">
                                <div>• GPS tracking</div>
                                <div>• App usage logs</div>
                                <div>• Time tracking</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div class="flex items-start gap-3">
                            <i class="fas fa-info-circle text-amber-600 mt-1"></i>
                            <div class="text-sm">
                                <p class="font-medium text-amber-800 mb-1">Installation Instructions:</p>
                                <ul class="text-amber-700 space-y-1">
                                    <li>1. Download the agent for your platform</li>
                                    <li>2. Run the installer with administrator privileges</li>
                                    <li>3. Use your login credentials to authenticate</li>
                                    <li>4. Configure monitoring settings as needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Agent Settings Modal -->
    <div class="modal fade" id="agentSettingsModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Agent Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <form id="agentSettingsForm">
                    <div class="modal-body">
                        <input type="hidden" id="settingsAgentId" name="agent_id">
                        
                        <div class="mb-4">
                            <label class="flex items-center gap-3">
                                <input type="checkbox" id="stealthMode" name="stealth_mode" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                <div>
                                    <div class="font-medium">Stealth Mode</div>
                                    <div class="text-sm text-gray-600">Run agent invisibly without system tray icon</div>
                                </div>
                            </label>
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Screenshot Frequency</label>
                            <select name="screenshot_frequency" id="screenshotFrequency" class="form-select w-full">
                                <option value="60">Every minute</option>
                                <option value="300">Every 5 minutes</option>
                                <option value="600">Every 10 minutes</option>
                                <option value="900">Every 15 minutes</option>
                                <option value="1800">Every 30 minutes</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Activity Threshold (seconds)</label>
                            <input type="number" name="activity_threshold" id="activityThreshold" class="form-control" min="30" max="300" value="60">
                            <div class="text-sm text-gray-600 mt-1">Minimum activity required to consider user active</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Settings</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@push('scripts')
<script>
let agents = [];

// Load agents on page load
document.addEventListener('DOMContentLoaded', function() {
    loadAgentStatus();
    
    // Auto-refresh every 30 seconds
    setInterval(loadAgentStatus, 30000);
});

function loadAgentStatus() {
    fetch('{{ route("monitask.agents.status") }}', {
        headers: {
            'Accept': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            agents = data.agents;
            updateAgentCounts();
            renderAgentsTable();
        }
    })
    .catch(error => {
        console.error('Error loading agents:', error);
    });
}

function updateAgentCounts() {
    const online = agents.filter(a => a.status === 'monitoring' || a.status === 'idle').length;
    const monitoring = agents.filter(a => a.status === 'monitoring').length;
    const stealth = agents.filter(a => a.stealth_mode).length;
    const offline = agents.filter(a => a.status === 'offline').length;

    document.getElementById('onlineAgentsCount').textContent = online;
    document.getElementById('monitoringAgentsCount').textContent = monitoring;
    document.getElementById('stealthAgentsCount').textContent = stealth;
    document.getElementById('offlineAgentsCount').textContent = offline;
}

function renderAgentsTable() {
    const tbody = document.getElementById('agentsTableBody');
    
    if (agents.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="px-6 py-8 text-center text-gray-500">
                    <div class="flex flex-col items-center">
                        <i class="fas fa-desktop text-4xl text-gray-300 mb-4"></i>
                        <p class="text-lg font-medium mb-2">No agents registered</p>
                        <p class="text-sm">Download and install an agent to start monitoring</p>
                        <button onclick="showDownloadModal()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Download Agent
                        </button>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = agents.map(agent => `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                        <i class="fas fa-${getDeviceIcon(agent.device_type)} text-gray-600"></i>
                    </div>
                    <div>
                        <div class="text-sm font-medium text-gray-900">${agent.device_name}</div>
                        <div class="text-sm text-gray-500">ID: ${agent.id}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium rounded-full ${getDeviceTypeColor(agent.device_type)}">
                    ${agent.device_type.charAt(0).toUpperCase() + agent.device_type.slice(1)}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(agent.status)}">
                    ${getStatusText(agent.status)}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${agent.last_seen}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <label class="inline-flex items-center">
                    <input type="checkbox" ${agent.monitoring_enabled ? 'checked' : ''} 
                           onchange="toggleMonitoring(${agent.id}, this.checked)"
                           class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                </label>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                ${agent.stealth_mode ? '<i class="fas fa-eye-slash text-purple-600"></i>' : '<i class="fas fa-eye text-gray-400"></i>'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onclick="showAgentSettings(${agent.id})" class="text-blue-600 hover:text-blue-900 mr-3">
                    <i class="fas fa-cog"></i>
                </button>
                <button onclick="removeAgent(${agent.id})" class="text-red-600 hover:text-red-900">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function getDeviceIcon(type) {
    switch(type) {
        case 'desktop': return 'desktop';
        case 'mobile': return 'mobile-alt';
        case 'tablet': return 'tablet-alt';
        default: return 'laptop';
    }
}

function getDeviceTypeColor(type) {
    switch(type) {
        case 'desktop': return 'bg-blue-100 text-blue-800';
        case 'mobile': return 'bg-green-100 text-green-800';
        case 'tablet': return 'bg-purple-100 text-purple-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

function getStatusColor(status) {
    switch(status) {
        case 'monitoring': return 'bg-green-100 text-green-800';
        case 'idle': return 'bg-yellow-100 text-yellow-800';
        case 'offline': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'monitoring': return 'Monitoring';
        case 'idle': return 'Online';
        case 'offline': return 'Offline';
        default: return 'Unknown';
    }
}

function refreshAgentStatus() {
    loadAgentStatus();
}

function showDownloadModal() {
    new bootstrap.Modal(document.getElementById('downloadAgentModal')).show();
}

function downloadAgent(platform) {
    // In a real implementation, this would trigger actual downloads
    alert(`Downloading ${platform} agent... (Feature coming soon)`);
}

function toggleMonitoring(agentId, enabled) {
    const endpoint = enabled ? 'start' : 'stop';
    
    fetch(`{{ url('/monitask/agents') }}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: JSON.stringify({ agent_id: agentId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadAgentStatus();
        } else {
            alert('Failed to update monitoring status');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to update monitoring status');
    });
}

function showAgentSettings(agentId) {
    const agent = agents.find(a => a.id === agentId);
    if (!agent) return;

    document.getElementById('settingsAgentId').value = agentId;
    document.getElementById('stealthMode').checked = agent.stealth_mode;
    // Set other form values...

    new bootstrap.Modal(document.getElementById('agentSettingsModal')).show();
}

function removeAgent(agentId) {
    if (!confirm('Are you sure you want to remove this agent?')) return;

    // Implementation for removing agent
    alert('Remove agent feature coming soon');
}

// Handle agent settings form
document.getElementById('agentSettingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('{{ route("monitask.agents.settings") }}', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}',
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            bootstrap.Modal.getInstance(document.getElementById('agentSettingsModal')).hide();
            loadAgentStatus();
        } else {
            alert('Failed to update settings');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to update settings');
    });
});
</script>
@endpush
@endsection
