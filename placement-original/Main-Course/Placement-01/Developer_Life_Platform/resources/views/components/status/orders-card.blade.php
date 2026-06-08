@props([
    'title' => 'Orders vs Last month',
    'period' => 'October 2023',
    'data' => []
])

<div class="col-12 col-xxl-9">
  <div class="card h-100">
    <div class="card-header d-flex flex-between-center bg-body-tertiary py-2">
      <h6 class="mb-0">{{ $title }}</h6>
      <div class="dropdown font-sans-serif btn-reveal-trigger">
        <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-orders-chart" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
          <span class="fas fa-ellipsis-h fs-11"></span>
        </button>
        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-orders-chart">
          <a class="dropdown-item" href="#!">View</a>
          <a class="dropdown-item" href="#!">Export</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="#!">Remove</a>
        </div>
      </div>
    </div>
    <div class="card-body py-2">
      <div class="row g-0">
        <div class="col-6 col-md-4 border-200 border-bottom border-end pb-4">
          <h6 class="pb-1 text-body-emphasis">Orders</h6>
          <p class="font-sans-serif lh-1 mb-1 fs-6">15,450</p>
          <div class="d-flex align-items-center">
            <h6 class="fs-9 text-success mb-0">13.6%</h6>
            <span class="me-1 fas fa-caret-up text-success"></span>
          </div>
        </div>
        <div class="col-6 col-md-4 border-200 border-md-200 border-bottom border-md-bottom-0 border-md-end pb-4 ps-3">
          <h6 class="pb-1 text-body-emphasis">Items sold</h6>
          <p class="font-sans-serif lh-1 mb-1 fs-6">1,054</p>
          <div class="d-flex align-items-center">
            <h6 class="fs-9 text-success mb-0">21.8%</h6>
            <span class="me-1 fas fa-caret-up text-success"></span>
          </div>
        </div>
        <div class="col-6 col-md-4 border-200 border-bottom border-bottom-md-0 border-end border-end-md-0 pb-4 pt-4 pt-md-0 ps-3 ps-md-0">
          <h6 class="pb-1 text-body-emphasis">Refunds</h6>
          <p class="font-sans-serif lh-1 mb-1 fs-6">$1,679</p>
          <div class="d-flex align-items-center">
            <h6 class="fs-9 text-danger mb-0">6.8%</h6>
            <span class="me-1 fas fa-caret-down text-danger"></span>
          </div>
        </div>
        <div class="col-6 col-md-4 border-200 border-bottom border-bottom-md-0 border-end-md pb-4 pt-4 ps-3">
          <h6 class="pb-1 text-body-emphasis">Gross sale</h6>
          <p class="font-sans-serif lh-1 mb-1 fs-6">$60,258</p>
          <div class="d-flex align-items-center">
            <h6 class="fs-9 text-success mb-0">11.9%</h6>
            <span class="me-1 fas fa-caret-up text-success"></span>
          </div>
        </div>
        <div class="col-6 col-md-4 border-end border-end-md-0 pb-4 pt-4 ps-3 ps-md-0">
          <h6 class="pb-1 text-body-emphasis">Shipping</h6>
          <p class="font-sans-serif lh-1 mb-1 fs-6">$2,058</p>
          <div class="d-flex align-items-center">
            <h6 class="fs-9 text-success mb-0">9.3%</h6>
            <span class="me-1 fas fa-caret-up text-success"></span>
          </div>
        </div>
        <div class="col-6 col-md-4 pb-4 pt-4 ps-3">
          <h6 class="pb-1 text-body-emphasis">Processing</h6>
          <p class="font-sans-serif lh-1 mb-1 fs-6">861</p>
          <div class="d-flex align-items-center">
            <h6 class="fs-9 text-danger mb-0">2.4%</h6>
            <span class="me-1 fas fa-caret-down text-danger"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer bg-body-tertiary py-2">
      <div class="row flex-between-center g-0">
        <div class="col-auto">
          <select class="form-select form-select-sm">
            <option>{{ $period }}</option>
            <option>November 2023</option>
            <option>December 2023</option>
          </select>
        </div>
        <div class="col-auto">
          <div class="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" id="navTab" role="tablist">
            <button class="btn btn-sm active" id="chart-tab" data-bs-toggle="pill" data-bs-target="#chart" type="button" role="tab" aria-controls="chart" aria-selected="true">Chart</button>
            <button class="btn btn-sm" id="table-tab" data-bs-toggle="pill" data-bs-target="#table" type="button" role="tab" aria-controls="table" aria-selected="false">Table</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
