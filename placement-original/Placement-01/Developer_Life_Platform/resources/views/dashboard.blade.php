@extends('layouts.app')

@section('title', 'Developer Dashboard - Your Learning Hub')
@section('description', 'Track your progress, view analytics, and manage your learning journey on the Developer Life Platform.')

@section('content')
<div class="pb-9">
  <!-- Dashboard Header -->
  <x-dashboard.header 
    title="Developer Life Platform Dashboard" 
    subtitle="Welcome back! Here's your learning progress and platform overview."
    :showCreateButton="true"
    createButtonText="Create Report"
    createButtonIcon="plus" />

  <!-- Quick Stats Overview -->
  <x-dashboard.quick-stats :stats="(is_array($quickStats) && count($quickStats) > 0) ? $quickStats : []" />

  <!-- Learning & Progress Analytics -->
  <div class="row mb-4 gy-4">
    <x-dashboard.learning-progress 
      :progressData="(is_array($learningProgress) && count($learningProgress) > 0) ? $learningProgress : []" 
      title="Learning Progress" />
    
    <x-dashboard.dsa-analytics 
      :dsaData="(is_array($dsaStats) && count($dsaStats) > 0) ? $dsaStats : []" 
      title="DSA Practice Analytics" />
  </div>

  <!-- Project & Community Analytics -->
  <div class="row mb-4 gy-4">
    <x-dashboard.project-overview 
      :projectData="(is_array($projectStats) && count($projectStats) > 0) ? $projectStats : []" 
      title="Project Analytics" />
    
    <x-dashboard.community-stats 
      :communityData="(is_array($communityStats) && count($communityStats) > 0) ? $communityStats : []" 
      title="Community Engagement" />
  </div>

  <!-- Recent Activity & Achievements -->
  <div class="row mb-4 gy-4">
    <x-dashboard.recent-activity 
      :activities="(is_array($recentActivities) && count($recentActivities) > 0) ? $recentActivities : []" 
      title="Recent Activity" />
    
    <x-dashboard.achievements-preview 
      :achievements="(is_array($achievements) && count($achievements) > 0) ? $achievements : []" 
      title="Latest Achievements" />
  </div>

  <!-- Platform Overview Tables -->
  <div class="row">
    <x-dashboard.platform-overview 
      :overviewData="(is_array($platformOverview) && count($platformOverview) > 0) ? $platformOverview : []" 
      title="Platform Overview" />
  </div>
</div>
@endsection

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dashboard analytics
  initializeDashboard();
  
  // Initialize charts
  if (typeof echarts !== 'undefined') {
    initializeCharts();
  }
  
  // Initialize real-time updates
  initializeRealTimeUpdates();
});

function initializeDashboard() {
  // Dashboard specific functionality
  console.log('Dashboard initialized');
}

function initializeCharts() {
  const chartElements = document.querySelectorAll('[data-echarts], [data-chart-config]');
  chartElements.forEach(function(element) {
    try {
      const config = element.getAttribute('data-echarts') || element.getAttribute('data-chart-config');
      if (config) {
        const chart = echarts.init(element);
        const option = JSON.parse(config);
        chart.setOption(option);
        
        // Handle responsiveness
        window.addEventListener('resize', function() {
          chart.resize();
        });
      }
    } catch (error) {
      console.warn('Chart initialization failed:', error);
    }
  });
}

function initializeRealTimeUpdates() {
  // Set up real-time updates for dashboard metrics
  setInterval(function() {
    updateDashboardMetrics();
  }, 30000); // Update every 30 seconds
}

function updateDashboardMetrics() {
  // Fetch and update dashboard metrics
  fetch('/api/dashboard/metrics')
    .then(response => response.json())
    .then(data => {
      updateStatsCards(data.stats);
      updateProgressBars(data.progress);
    })
    .catch(error => console.warn('Failed to update metrics:', error));
}

function updateStatsCards(stats) {
  // Update stat cards with new data
  stats.forEach(stat => {
    const element = document.querySelector(`[data-stat="${stat.key}"]`);
    if (element) {
      element.textContent = stat.value;
    }
  });
}

function updateProgressBars(progress) {
  // Update progress bars
  progress.forEach(item => {
    const progressBar = document.querySelector(`[data-progress="${item.key}"] .progress-bar`);
    if (progressBar) {
      progressBar.style.width = item.percentage + '%';
      progressBar.textContent = item.percentage + '%';
    }
  });
}
</script>
@endpush

@push('styles')
<style>
:root {
  --dashboard-primary: #2c7be5;
  --dashboard-success: #00d27a;
  --dashboard-warning: #f5803e;
  --dashboard-danger: #e63757;
  --dashboard-info: #27bcfd;
  --dashboard-light: #f9fafd;
  --dashboard-dark: #1e2139;
  --dashboard-border: #e6ecf5;
  --dashboard-shadow: 0 0.5rem 1.125rem rgba(75, 70, 92, 0.1);
  --dashboard-radius: 0.75rem;
  --dashboard-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dashboard specific styles */
.dashboard-card {
  border: none;
  border-radius: var(--dashboard-radius);
  box-shadow: var(--dashboard-shadow);
  transition: var(--dashboard-transition);
  background: white;
}

.dashboard-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.75rem 1.5rem rgba(75, 70, 92, 0.15);
}

.dashboard-stat-card {
  background: linear-gradient(135deg, var(--dashboard-primary) 0%, var(--dashboard-info) 100%);
  color: white;
  border-radius: var(--dashboard-radius);
  transition: var(--dashboard-transition);
}

.dashboard-stat-card:hover {
  transform: translateY(-3px) scale(1.02);
}

.dashboard-chart-container {
  position: relative;
  border-radius: var(--dashboard-radius);
  background: white;
  padding: 1.5rem;
}

.dashboard-progress-bar {
  height: 8px;
  border-radius: 4px;
  background: var(--dashboard-light);
  overflow: hidden;
}

.dashboard-progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: var(--dashboard-transition);
  background: linear-gradient(90deg, var(--dashboard-success) 0%, var(--dashboard-primary) 100%);
}

.dashboard-metric-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.dashboard-activity-item {
  padding: 1rem;
  border-radius: var(--dashboard-radius);
  border-left: 4px solid var(--dashboard-primary);
  background: var(--dashboard-light);
  margin-bottom: 0.75rem;
  transition: var(--dashboard-transition);
}

.dashboard-activity-item:hover {
  background: white;
  box-shadow: var(--dashboard-shadow);
}

/* Responsive design */
@media (max-width: 768px) {
  .dashboard-card {
    margin-bottom: 1rem;
  }
  
  .dashboard-stat-card {
    text-align: center;
  }
  
  .dashboard-chart-container {
    padding: 1rem;
  }
}

/* Loading animations */
@keyframes dashboardPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.dashboard-loading {
  animation: dashboardPulse 2s infinite;
}

/* Chart specific styles */
.echart-dashboard-revenue,
.echart-dashboard-progress,
.echart-dashboard-analytics {
  min-height: 200px;
  border-radius: var(--dashboard-radius);
}

/* Table improvements */
.dashboard-table {
  border-radius: var(--dashboard-radius);
  overflow: hidden;
  box-shadow: var(--dashboard-shadow);
}

.dashboard-table th {
  background: var(--dashboard-light);
  border: none;
  font-weight: 600;
  padding: 1rem;
}

.dashboard-table td {
  border: none;
  padding: 1rem;
  vertical-align: middle;
}

/* Badge improvements */
.dashboard-badge {
  border-radius: 6px;
  font-weight: 500;
  padding: 0.375rem 0.75rem;
}

.dashboard-badge-success {
  background: rgba(0, 210, 122, 0.1);
  color: var(--dashboard-success);
}

.dashboard-badge-warning {
  background: rgba(245, 128, 62, 0.1);
  color: var(--dashboard-warning);
}

.dashboard-badge-danger {
  background: rgba(230, 55, 87, 0.1);
  color: var(--dashboard-danger);
}
</style>
@endpush
