@props([
    'title' => 'Top Regions',
    'data' => [],
    'showMap' => true
])

<div class="col-xxl-6 col-xl-12">
  <div class="card py-3 mb-3">
    <div class="card-header py-3">
      <div class="row align-items-center">
        <div class="col">
          <h6 class="mb-0">{{ $title }}</h6>
        </div>
        <div class="col-auto">
          <div class="dropdown font-sans-serif btn-reveal-trigger">
            <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="viewport">
              <span class="fas fa-ellipsis-h fs-11"></span>
            </button>
            <div class="dropdown-menu dropdown-menu-end border py-2">
              <a class="dropdown-item" href="#!">View</a>
              <a class="dropdown-item" href="#!">Export</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#!">Remove</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body py-0">
      @if($showMap)
      <div id="world-map-regions" style="height:230px;width:100%;" 
           data-echart-responsive="true"
           data-options='{"tooltip":{"trigger":"item","formatter":"{a}<br />{b}: {c} ({d}%)","textStyle":{"fontSize":13,"fontFamily":"Nunito Sans, sans-serif"}},"series":[{"name":"Regions","type":"map","map":"world","emphasis":{"itemStyle":{"areaColor":"#4F6492","borderColor":"#fff","borderWidth":2}},"itemStyle":{"normal":{"areaColor":"#e1ecf4","borderColor":"#fff","borderWidth":1}}}]}'>
      </div>
      @endif
      
      <div class="mt-3">
        <div class="d-flex align-items-end justify-content-between pt-3">
          <div class="d-flex align-items-center">
            <span class="dot bg-primary"></span>
            <span class="fw-semi-bold">New York</span>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-2 text-body">72k</span>
            <span class="badge badge-phoenix fs-11 badge-phoenix-warning">
              <span class="fas fa-caret-up me-1"></span>12.1%
            </span>
          </div>
        </div>
        
        <div class="d-flex align-items-end justify-content-between pt-3">
          <div class="d-flex align-items-center">
            <span class="dot bg-primary-lighter"></span>
            <span class="fw-semi-bold">San Francisco</span>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-2 text-body">39k</span>
            <span class="badge badge-phoenix fs-11 badge-phoenix-success">
              <span class="fas fa-caret-up me-1"></span>21.8%
            </span>
          </div>
        </div>
        
        <div class="d-flex align-items-end justify-content-between pt-3">
          <div class="d-flex align-items-center">
            <span class="dot bg-info-light"></span>
            <span class="fw-semi-bold">Boston</span>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-2 text-body">25k</span>
            <span class="badge badge-phoenix fs-11 badge-phoenix-danger">
              <span class="fas fa-caret-down me-1"></span>9.3%
            </span>
          </div>
        </div>
        
        <div class="d-flex align-items-end justify-content-between pt-3">
          <div class="d-flex align-items-center">
            <span class="dot bg-warning-light"></span>
            <span class="fw-semi-bold">Philadelphia</span>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-2 text-body">12k</span>
            <span class="badge badge-phoenix fs-11 badge-phoenix-primary">
              <span class="fas fa-caret-up me-1"></span>16.2%
            </span>
          </div>
        </div>
        
        <div class="d-flex align-items-end justify-content-between pt-3 pb-2">
          <div class="d-flex align-items-center">
            <span class="dot bg-danger-light"></span>
            <span class="fw-semi-bold">Manhattan</span>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-2 text-body">8k</span>
            <span class="badge badge-phoenix fs-11 badge-phoenix-secondary">
              <span class="fas fa-caret-down me-1"></span>2.1%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
