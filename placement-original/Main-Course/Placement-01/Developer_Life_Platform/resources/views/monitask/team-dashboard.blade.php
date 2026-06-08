@extends('layouts.monitask')

@section('title', 'Team Dashboard - Monitask')

@section('content')
<div class="p-7">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
        <div>
            <h2 class="text-2xl font-bold text-gray-900">Team Dashboard</h2>
            <p class="text-gray-600">Monitor your team's productivity and performance</p>
        </div>
        <div class="flex items-center gap-3">
            <select name="period" onchange="updatePeriod(this.value)" class="border border-gray-300 rounded-lg px-3 py-2">
                <option value="today" {{ $period === 'today' ? 'selected' : '' }}>Today</option>
                <option value="week" {{ $period === 'week' ? 'selected' : '' }}>This Week</option>
                <option value="month" {{ $period === 'month' ? 'selected' : '' }}>This Month</option>
                <option value="quarter" {{ $period === 'quarter' ? 'selected' : '' }}>This Quarter</option>
            </select>
            <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
                <i class="fas fa-download mr-2"></i>Export Report
            </button>
        </div>
    </div>

    <!-- Team Analytics Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-sm border p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-sm font-medium text-gray-700">Total Members</h3>
                    <p class="text-2xl font-bold text-gray-900 mt-1">{{ $teamAnalytics['total_members'] }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-users text-blue-600"></i>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-sm font-medium text-gray-700">Active Members</h3>
                    <p class="text-2xl font-bold text-gray-900 mt-1">{{ $teamAnalytics['active_members'] }}</p>
                </div>
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-user-check text-green-600"></i>
                </div>
            </div>
            <div class="mt-2">
                <span class="text-sm text-gray-600">
                    {{ $teamAnalytics['total_members'] > 0 ? round(($teamAnalytics['active_members'] / $teamAnalytics['total_members']) * 100, 1) : 0 }}% activity rate
                </span>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-sm font-medium text-gray-700">Total Hours</h3>
                    <p class="text-2xl font-bold text-gray-900 mt-1">{{ number_format($teamAnalytics['total_hours'], 1) }}h</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-clock text-purple-600"></i>
                </div>
            </div>
            <div class="mt-2">
                <span class="text-sm text-gray-600">
                    {{ number_format($teamAnalytics['billable_hours'], 1) }}h billable
                </span>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-sm font-medium text-gray-700">Avg Productivity</h3>
                    <p class="text-2xl font-bold text-gray-900 mt-1">{{ number_format($teamAnalytics['productivity_score'] ?? 0, 1) }}%</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-chart-line text-orange-600"></i>
                </div>
            </div>
            <div class="mt-2">
                <span class="text-sm text-{{ $teamAnalytics['productivity_score'] > 75 ? 'green' : ($teamAnalytics['productivity_score'] > 50 ? 'yellow' : 'red') }}-600">
                    {{ $teamAnalytics['productivity_score'] > 75 ? 'Excellent' : ($teamAnalytics['productivity_score'] > 50 ? 'Good' : 'Needs Improvement') }}
                </span>
            </div>
        </div>
    </div>

    <!-- Team Members Performance -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        <!-- Team Members List -->
        <div class="bg-white rounded-lg shadow-sm border">
            <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">Team Performance</h3>
            </div>
            <div class="p-6">
                <div class="space-y-4">
                    @foreach($teamMembers as $member)
                        @php
                            $memberHours = $member->monitaskTimeEntries->sum('duration_minutes') / 60;
                            $memberBillableHours = $member->monitaskTimeEntries->where('is_billable', true)->sum('duration_minutes') / 60;
                            $productivity = rand(60, 95); // This would come from actual activity logs
                        @endphp
                        <div class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {{ substr($member->name, 0, 1) }}
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">{{ $member->name }}</h4>
                                    <p class="text-sm text-gray-600">{{ $member->email }}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-lg font-semibold text-gray-900">{{ number_format($memberHours, 1) }}h</div>
                                <div class="text-sm text-gray-600">{{ number_format($memberBillableHours, 1) }}h billable</div>
                                <div class="text-sm">
                                    <span class="px-2 py-1 rounded-full text-xs {{ $productivity > 80 ? 'bg-green-100 text-green-800' : ($productivity > 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800') }}">
                                        {{ $productivity }}% productive
                                    </span>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- Productivity Chart -->
        <div class="bg-white rounded-lg shadow-sm border">
            <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">Productivity Trend</h3>
            </div>
            <div class="p-6">
                <canvas id="productivityChart" width="400" height="200"></canvas>
            </div>
        </div>
    </div>

    <!-- Project Performance -->
    <div class="bg-white rounded-lg shadow-sm border">
        <div class="p-6 border-b border-gray-200">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900">Project Performance</h3>
                <button class="text-primary hover:text-primary-dark">View All Projects</button>
            </div>
        </div>
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                @foreach($projectPerformance as $performance)
                    <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                        <div class="flex items-center justify-between mb-4">
                            <h4 class="font-medium text-gray-900">{{ $performance['project']->name }}</h4>
                            <span class="px-2 py-1 text-xs rounded-full bg-{{ $performance['project']->status_color }} text-white">
                                {{ ucfirst($performance['project']->status) }}
                            </span>
                        </div>
                        
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Hours Worked</span>
                                <span class="text-sm font-medium">{{ number_format($performance['hours_worked'], 1) }}h</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Team Members</span>
                                <span class="text-sm font-medium">{{ $performance['members_count'] }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Completion</span>
                                <span class="text-sm font-medium">{{ number_format($performance['completion_rate'], 1) }}%</span>
                            </div>
                            @if($performance['project']->budget > 0)
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Budget Used</span>
                                <span class="text-sm font-medium">{{ number_format($performance['budget_used'], 1) }}%</span>
                            </div>
                            @endif
                        </div>
                        
                        <div class="mt-4">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-{{ $performance['completion_rate'] > 75 ? 'green' : ($performance['completion_rate'] > 50 ? 'blue' : 'yellow') }}-500 h-2 rounded-full" 
                                     style="width: {{ $performance['completion_rate'] }}%"></div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// Productivity Trend Chart
const ctx = document.getElementById('productivityChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Team Productivity %',
            data: [75, 82, 78, 85, 90, 88, 83],
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

function updatePeriod(period) {
    const url = new URL(window.location);
    url.searchParams.set('period', period);
    window.location.href = url.toString();
}
</script>
@endpush
@endsection
