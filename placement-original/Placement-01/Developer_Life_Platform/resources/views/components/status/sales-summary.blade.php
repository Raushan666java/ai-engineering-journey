@props([
    'title' => 'Total Sales',
    'value' => '$45,070.00',
    'change' => '+13.6%',
    'period' => 'than last month',
    'chart' => true
])

<div class="col-xxl-4">
  <div class="row g-3">
    <div class="col-12">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h5 class="mb-1 text-body-emphasis">{{ $title }}</h5>
              <h6 class="fs-7 text-body-tertiary">Payment received</h6>
            </div>
            <h4 class="text-primary fs-8">{{ $value }}</h4>
          </div>
          <div class="d-flex justify-content-center pt-3">
            <div class="echarts-total-sales-chart" 
                 style="height:85px;width:100%;" 
                 data-echarts='{"series":[{"type":"line","data":[60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],"symbolSize":0,"lineStyle":{"color":"#00d27a","width":3},"itemStyle":{"color":"#00d27a","borderColor":"#00d27a","borderWidth":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
                 data-echart-responsive="true">
            </div>
          </div>
          <div class="mt-2">
            <div class="d-flex align-items-center mb-2">
              <div class="bullet-item bg-primary me-2"></div>
              <h6 class="text-body fw-semi-bold flex-1 mb-0">Completed</h6>
              <h6 class="text-body fw-semi-bold mb-0">52%</h6>
            </div>
            <div class="d-flex align-items-center">
              <div class="bullet-item bg-primary-lighter me-2"></div>
              <h6 class="text-body fw-semi-bold flex-1 mb-0">Cash Payment</h6>
              <h6 class="text-body fw-semi-bold mb-0">48%</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <span class="fs-5 lh-1 uil uil-users-alt text-success-emphasis"></span>
            <div class="ms-2">
              <div class="d-flex align-items-end">
                <h4 class="mb-0 me-2">5,745</h4>
                <span class="fs-9 mb-1 text-700">(14.01%)</span>
              </div>
              <p class="fs-9 mb-0 text-700">Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <span class="fs-5 lh-1 uil uil-monitor text-warning-emphasis"></span>
            <div class="ms-2">
              <div class="d-flex align-items-end">
                <h4 class="mb-0 me-2">1,869</h4>
                <span class="fs-9 mb-1 text-700">(21.45%)</span>
              </div>
              <p class="fs-9 mb-0 text-700">Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
