{{-- filepath: c:\xampp\htdocs\Placement\Placement-01\Developer_Life_Platform\resources\views\ai-teacher\analytics.blade.php --}}
@extends('layouts.app')

@section('title', 'AI Learning Analytics')

@section('content')
<div class="container-fluid py-4">
    <div class="row mb-4">
        <div class="col">
            <h1 class="h3 text-primary">
                <i class="fas fa-chart-line me-2"></i>AI Learning Analytics
            </h1>
            <p class="text-muted">Detailed insights into your learning progress</p>
        </div>
    </div>

    <!-- Performance Overview -->
    <div class="row mb-4">
        <div class="col-lg-3 col-md-6">
            <div class="card bg-primary text-white">
                <div class="card-body">
                    <h4>{{ $performanceData['overall_score'] ?? 0 }}</h4>
                    <p class="mb-0">Overall Score</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card bg-success text-white">
                <div class="card-body">
                    <h4>{{ $performanceData['comparative_ranking']['percentile'] ?? 0 }}%</h4>
                    <p class="mb-0">Percentile Rank</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card bg-info text-white">
                <div class="card-body">
                    <h4>{{ $performanceData['weekly_progress']['problems_solved'] ?? 0 }}</h4>
                    <p class="mb-0">Problems This Week</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="card bg-warning text-white">
                <div class="card-body">
                    <h4>{{ $performanceData['weekly_progress']['study_hours'] ?? 0 }}h</h4>
                    <p class="mb-0">Study Hours</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Topic Mastery Chart -->
        <div class="col-lg-6 mb-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Topic Mastery</h5>
                </div>
                <div class="card-body">
                    <div id="topicMasteryChart" style="height: 300px;"></div>
                </div>
            </div>
        </div>

        <!-- Learning Trends -->
        <div class="col-lg-6 mb-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Learning Trends</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <h6>Trend: <span class="badge bg-success">{{ ucfirst($performanceData['learning_trends']['trend'] ?? 'Stable') }}</span></h6>
                        <h6>Velocity: <span class="badge bg-info">{{ ucfirst($performanceData['learning_trends']['velocity'] ?? 'Moderate') }}</span></h6>
                        <h6>Consistency: <span class="badge bg-warning">{{ ucfirst($performanceData['learning_trends']['consistency'] ?? 'Good') }}</span></h6>
                    </div>
                    <div id="trendsChart" style="height: 200px;"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Strengths & Weaknesses -->
        <div class="col-lg-6 mb-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Strengths & Areas for Improvement</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6 class="text-success">Strengths</h6>
                            <ul class="list-unstyled">
                                @foreach($performanceData['strength_areas'] ?? [] as $strength)
                                    <li><i class="fas fa-check text-success me-2"></i>{{ $strength }}</li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="col-6">
                            <h6 class="text-warning">Improvement Areas</h6>
                            <ul class="list-unstyled">
                                @foreach($performanceData['improvement_areas'] ?? [] as $area)
                                    <li><i class="fas fa-arrow-up text-warning me-2"></i>{{ $area }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Performance Prediction -->
        <div class="col-lg-6 mb-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Performance Prediction</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <h6>Next Month Success Rate</h6>
                        <div class="progress mb-2">
                            <div class="progress-bar" style="width: {{ $performanceData['performance_prediction']['next_month_success_rate'] ?? 0 }}%"></div>
                        </div>
                        <small class="text-muted">{{ $performanceData['performance_prediction']['next_month_success_rate'] ?? 0 }}%</small>
                    </div>
                    
                    <h6>Recommended Goals</h6>
                    <ul class="list-unstyled">
                        @foreach($performanceData['performance_prediction']['recommended_goals'] ?? [] as $goal)
                            <li><i class="fas fa-target text-primary me-2"></i>{{ $goal }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Milestone Progress -->
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Milestone Progress</h5>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h6>{{ $performanceData['milestone_progress']['current_milestone'] ?? 'Getting Started' }}</h6>
                            <small class="text-muted">Current Milestone</small>
                        </div>
                        <div class="text-end">
                            <h6>{{ $performanceData['milestone_progress']['next_milestone'] ?? 'Next Level' }}</h6>
                            <small class="text-muted">Next Milestone</small>
                        </div>
                    </div>
                    <div class="progress" style="height: 20px;">
                        <div class="progress-bar" style="width: {{ $performanceData['milestone_progress']['progress_percentage'] ?? 0 }}%">
                            {{ $performanceData['milestone_progress']['progress_percentage'] ?? 0 }}%
                        </div>
                    </div>
                    <small class="text-muted">Estimated completion: {{ $performanceData['milestone_progress']['estimated_completion'] ?? 'N/A' }}</small>
                </div>
            </div>
        </div>
    </div>
</div>

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Topic Mastery Chart
    const topicChart = echarts.init(document.getElementById('topicMasteryChart'));
    const topicData = @json($performanceData['topic_mastery'] ?? []);
    
    topicChart.setOption({
        title: { text: 'Mastery by Topic' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: Object.keys(topicData) },
        yAxis: { type: 'value', max: 100 },
        series: [{
            data: Object.values(topicData),
            type: 'bar',
            itemStyle: { color: '#007bff' }
        }]
    });

    // Trends Chart (Simple line chart)
    const trendsChart = echarts.init(document.getElementById('trendsChart'));
    trendsChart.setOption({
        title: { text: 'Weekly Progress' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
        yAxis: { type: 'value' },
        series: [{
            data: [65, 72, 78, 85],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#28a745' }
        }]
    });
});
</script>
@endpush
@endsection