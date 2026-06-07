@props([
    'title' => 'Projection vs Actual',
    'period' => 'January 1 - July 31, 2023'
])

<div class="col-xxl-8">
  <div class="card h-100">
    <div class="card-header pb-0">
      <h6 class="mb-0 mt-2 mb-3">{{ $title }}</h6>
    </div>
    <div class="card-body">
      <div class="d-flex flex-wrap">
        <div class="d-flex align-items-center mb-2 me-3">
          <span class="dot bg-primary me-2"></span>
          <span class="fw-semi-bold text-900">Projection</span>
          <span class="ms-1 text-700">($855k)</span>
        </div>
        <div class="d-flex align-items-center mb-2">
          <span class="dot bg-primary-lighter me-2"></span>
          <span class="fw-semi-bold text-900">Actual</span>
          <span class="ms-1 text-700">($712k)</span>
        </div>
      </div>
      
      <div class="echart-projection-actual" 
           style="height:300px;width:100%;" 
           data-echart-responsive="true"
           data-options='{"color":["#2c7be5","#a7c8f7"],"tooltip":{"trigger":"axis","padding":[7,10],"backgroundColor":"rgba(255,255,255,0.95)","border":"1px solid #ddd","color":"#333"},"legend":{"data":["Projection","Actual"],"left":"left","itemWidth":10,"itemHeight":10,"borderRadius":0,"icon":"rect","inactiveColor":"#8392a5","textStyle":{"color":"rgba(91, 109, 119, 1)"}},"xAxis":{"type":"category","axisLine":{"lineStyle":{"color":"rgba(200, 200, 200, 0.8)"}},"axisLabel":{"color":"rgba(91, 109, 119, 1)","margin":15},"axisTick":{"show":false},"splitLine":{"show":false},"data":["Jan","Feb","Mar","Apr","May","Jun","Jul"]},"yAxis":{"type":"value","axisLabel":{"color":"rgba(91, 109, 119, 1)","margin":15},"splitLine":{"lineStyle":{"color":"rgba(200, 200, 200, 0.8)"}},"axisLine":{"show":false},"axisTick":{"show":false},"min":600},"series":[{"name":"Projection","type":"line","data":[855,845,875,890,920,940,960],"lineStyle":{"width":2},"itemStyle":{"color":"#2c7be5","borderColor":"#2c7be5","borderWidth":3},"symbol":"circle","symbolSize":8},{"name":"Actual","type":"line","data":[855,820,780,790,850,880,920],"lineStyle":{"width":2},"itemStyle":{"color":"#a7c8f7","borderColor":"#a7c8f7","borderWidth":3},"symbol":"circle","symbolSize":8}],"grid":{"right":"10px","left":"5px","bottom":"5px","top":"8%","containLabel":true}}'>
      </div>
    </div>
  </div>
</div>
