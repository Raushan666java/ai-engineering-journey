@props([
    'title' => 'Deals by Stage',
    'data' => []
])

<div class="col-xxl-6 col-xl-12">
  <div class="card h-100">
    <div class="card-header pb-0">
      <h6 class="mb-0 mt-2 mb-3">{{ $title }}</h6>
    </div>
    <div class="card-body">
      <div class="echart-deals-by-stage h-100" 
           data-echart-responsive="true"
           data-options='{"color":["#2c7be5","#00d27a","#27bcfd","#f5803e","#a04be7","#51d28c"],"tooltip":{"trigger":"item","padding":[7,10],"backgroundColor":"rgba(255,255,255,0.95)","border":"1px solid #ddd","color":"#333","borderRadius":"2px","formatter":"{a}<br />{b}: {c} ({d}%)"},"legend":{"orient":"vertical","left":"left","fontSize":"14px","fontFamily":"nunito","fontWeight":"600","formatter":function(name){return name},"textStyle":{"color":"rgba(91, 109, 119, 1)"}},"series":[{"name":"Deals","type":"pie","radius":["30%","60%"],"data":[{"value":335,"name":"Proposal"},{"value":310,"name":"Negotiation"},{"value":234,"name":"Closed Won"},{"value":135,"name":"Qualified"}],"emphasis":{"itemStyle":{"shadowBlur":10,"shadowOffsetX":0,"shadowColor":"rgba(0, 0, 0, 0.5)"}},"labelLine":{"show":false},"itemStyle":{"borderWidth":"2px","borderColor":"#fff"}}],"grid":{"containLabel":true}}'
           style="height: 300px;">
      </div>
    </div>
  </div>
</div>
