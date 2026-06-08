@props([
    'stats' => []
])

@php
$defaultStats = [
    [
        'title' => 'Learning Progress',
        'value' => '73%',
        'change' => '+12%',
        'period' => 'this month',
        'icon' => 'graduation-cap',
        'color' => 'primary',
        'positive' => true
    ],
    [
        'title' => 'DSA Problems Solved',
        'value' => '247',
        'change' => '+18',
        'period' => 'this week',
        'icon' => 'code',
        'color' => 'success',
        'positive' => true
    ],
    [
        'title' => 'Projects Completed',
        'value' => '12',
        'change' => '+3',
        'period' => 'this month',
        'icon' => 'project-diagram',
        'color' => 'info',
        'positive' => true
    ],
    [
        'title' => 'Community Score',
        'value' => '1,247',
        'change' => '+89',
        'period' => 'this week',
        'icon' => 'users',
        'color' => 'warning',
        'positive' => true
    ]
];

$displayStats = (is_array($stats) && count($stats) > 0) ? $stats : $defaultStats;
@endphp

<div class="row mb-4 gy-3">
  @if(is_array($displayStats) && count($displayStats) > 0)
    @foreach($displayStats as $stat)
      @if(is_array($stat))
        @php
          // Ensure all expected keys exist to prevent undefined array key errors
          $stat = array_merge([
            'title' => '',
            'value' => '',
            'change' => '',
            'period' => '',
            'icon' => '',
            'color' => 'primary',
            'positive' => true
          ], $stat);
        @endphp
        <div class="col-6 col-lg-3">
          <div class="card dashboard-card h-100">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between mb-3">
                <div class="dashboard-metric-icon bg-{{ $stat['color'] }}-light text-{{ $stat['color'] }}">
                  <i class="fas fa-{{ $stat['icon'] }}"></i>
                </div>
                <span class="badge dashboard-badge dashboard-badge-{{ $stat['positive'] ? 'success' : 'danger' }}">
                  <i class="fas fa-{{ $stat['positive'] ? 'arrow-up' : 'arrow-down' }} me-1"></i>
                  {{ $stat['change'] }}
                </span>
              </div>
              <div class="mb-2">
                <h3 class="text-body-emphasis fw-bold mb-1" data-stat="{{ strtolower(str_replace(' ', '_', $stat['title'])) }}">
                  {{ $stat['value'] }}
                </h3>
                <h6 class="text-body-secondary mb-0 fw-medium">{{ $stat['title'] }}</h6>
              </div>
              <div class="d-flex align-items-center text-body-tertiary">
                <i class="fas fa-clock me-1 fs-9"></i>
                <span class="fs-9">{{ $stat['period'] }}</span>
              </div>
              <!-- Progress indicator for learning-related stats -->
              @if(in_array($stat['icon'], ['graduation-cap', 'code', 'project-diagram']))
                <div class="dashboard-progress-bar mt-3">
                  <div class="dashboard-progress-fill" style="width: {{ rand(60, 95) }}%"></div>
                </div>
              @endif
            </div>
          </div>
        </div>
      @endif
    @endforeach
  @endif
</div>

<!-- Weekly Overview Chart -->
<div class="row mb-4">
  <div class="col-12">
    <div class="card dashboard-card">
      <div class="card-header bg-transparent border-0 pt-4">
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="mb-0 fw-bold">Weekly Activity Overview</h5>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary active" data-period="week">Week</button>
            <button class="btn btn-sm btn-outline-secondary" data-period="month">Month</button>
            <button class="btn btn-sm btn-outline-secondary" data-period="year">Year</button>
          </div>
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="echart-dashboard-analytics" 
             data-chart-config='{"tooltip":{"trigger":"axis","backgroundColor":"rgba(255,255,255,0.95)","border":"1px solid #ddd","textStyle":{"color":"#333"}},"legend":{"data":["Learning Hours","Problems Solved","Projects"],"bottom":0},"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"axisLine":{"lineStyle":{"color":"#e6ecf5"}}},"yAxis":{"type":"value","axisLine":{"show":false},"splitLine":{"lineStyle":{"color":"#f0f0f0"}}},"series":[{"name":"Learning Hours","type":"bar","data":[3,4,2,5,3,6,4],"itemStyle":{"color":"#2c7be5"}},{"name":"Problems Solved","type":"line","data":[8,12,6,15,10,18,14],"lineStyle":{"color":"#00d27a","width":3},"itemStyle":{"color":"#00d27a"}},{"name":"Projects","type":"bar","data":[1,0,2,1,0,1,1],"itemStyle":{"color":"#f5803e"}}],"grid":{"top":"10%","left":"3%","right":"4%","bottom":"15%","containLabel":true}}'>
        </div>
      </div>
    </div>
  </div>
</div>