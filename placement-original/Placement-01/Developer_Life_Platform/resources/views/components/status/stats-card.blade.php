@props([
    'icon' => 'user',
    'title' => 'Total Customers',
    'value' => '0',
    'change' => '+0%',
    'period' => 'than last week',
    'positive' => true,
    'size' => 'md'
])

<div class="col-6 col-xl-3">
  <div class="card h-100">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <span class="text-{{ $positive ? 'success' : 'danger' }} fs-5" data-feather="{{ $icon }}"></span>
          <h6 class="text-body mt-2">{{ $title }}</h6>
        </div>
        <span class="badge badge-phoenix fs-10 badge-phoenix-{{ $positive ? 'success' : 'danger' }}">{{ $change }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <h2 class="text-body-emphasis">{{ $value }}</h2>
        <span class="fs-9">{{ $period }}</span>
      </div>
    </div>
  </div>
</div>
