@props([
    'icon' => 'trending-up',
    'title' => 'Total Revenue',
    'value' => '$0',
    'change' => '+0%',
    'period' => 'than last week',
    'positive' => true,
    'badge' => null,
    'color' => 'primary'
])

<div class="col-12 col-xxl-3">
  <div class="card h-100">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <h5 class="mb-1 text-body-emphasis">{{ $title }}</h5>
          <h6 class="fs-7 text-body-tertiary">{{ $period }}</h6>
        </div>
        <h4 class="text-{{ $color }} fs-8">{{ $value }}</h4>
      </div>
      
      <div class="d-flex justify-content-center py-6">
        <div class="echart-total-revenue" style="height:90px;width:100%;" 
             data-echarts='{"series":[{"type":"line","data":[55, 60, 40, 50, 60, 50, 70],"symbolSize":0,"lineStyle":{"color":"#2c7be5","width":5},"itemStyle":{"color":"#2c7be5","borderColor":"#2c7be5","borderWidth":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
             data-echart-responsive="true">
        </div>
      </div>
      
      <div class="mt-auto d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <span data-feather="{{ $icon }}" class="text-{{ $positive ? 'success' : 'danger' }}"></span>
          <span class="fs-9 ps-1 text-{{ $positive ? 'success' : 'danger' }} fw-semi-bold">{{ $change }}</span>
          <span class="fs-9 ps-1">{{ $period }}</span>
        </div>
        @if($badge)
          <span class="badge badge-phoenix fs-10 badge-phoenix-{{ $color }}">{{ $badge }}</span>
        @endif
      </div>
    </div>
  </div>
</div>
