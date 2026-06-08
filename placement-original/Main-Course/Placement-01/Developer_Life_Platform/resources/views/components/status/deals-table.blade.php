@props([
    'title' => 'Latest Deals',
    'data' => []
])

<div class="col-xl-12">
  <div class="card">
    <div class="card-header pb-0">
      <h6 class="mb-0 mt-2 mb-3">{{ $title }}</h6>
    </div>
    <div class="card-body pt-0">
      <div class="table-responsive scrollbar">
        <table class="table table-bordered table-striped fs-10 mb-0">
          <thead class="bg-200">
            <tr>
              <th class="text-900 sort" data-sort="company">Company</th>
              <th class="text-900 sort" data-sort="representative">Representative</th>
              <th class="text-900 sort" data-sort="country">Country</th>
              <th class="text-900 sort" data-sort="status">Status</th>
              <th class="text-900 sort" data-sort="date">Date</th>
              <th class="text-900 no-sort pe-1 align-middle data-table-row-action">Action</th>
            </tr>
          </thead>
          <tbody class="list" id="table-latest-deals-body">
            <tr class="btn-reveal-trigger">
              <td class="company py-2 align-middle white-space-nowrap">
                <div class="d-flex align-items-center">
                  <img src="{{ asset('assets/img/logos/tesla.png') }}" alt="" width="24">
                  <h6 class="mb-0 ms-2 text-900">Tesla</h6>
                </div>
              </td>
              <td class="representative py-2 align-middle white-space-nowrap">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-s">
                    <img class="rounded-circle" src="{{ asset('assets/img/team/32.webp') }}" alt="">
                  </div>
                  <h6 class="mb-0 ms-2 text-900">Carry Anna</h6>
                </div>
              </td>
              <td class="country py-2 align-middle white-space-nowrap text-900 fw-semi-bold">
                <div class="d-flex align-items-center">
                  <img src="{{ asset('assets/img/country/usa.png') }}" alt="" width="16">
                  <span class="ms-2">USA</span>
                </div>
              </td>
              <td class="status py-2 align-middle text-center fs-9 white-space-nowrap">
                <span class="badge badge-phoenix fs-10 badge-phoenix-success">Won</span>
              </td>
              <td class="date py-2 align-middle white-space-nowrap text-body fs-9 ps-4 text-900">15/12/2023</td>
              <td class="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                <div class="font-sans-serif btn-reveal-trigger position-static">
                  <button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                    <span class="fas fa-ellipsis-h fs-10"></span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end py-2">
                    <a class="dropdown-item" href="#!">View</a>
                    <a class="dropdown-item" href="#!">Export</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr class="btn-reveal-trigger">
              <td class="company py-2 align-middle white-space-nowrap">
                <div class="d-flex align-items-center">
                  <img src="{{ asset('assets/img/logos/apple.png') }}" alt="" width="24">
                  <h6 class="mb-0 ms-2 text-900">Apple</h6>
                </div>
              </td>
              <td class="representative py-2 align-middle white-space-nowrap">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-s">
                    <img class="rounded-circle" src="{{ asset('assets/img/team/33.webp') }}" alt="">
                  </div>
                  <h6 class="mb-0 ms-2 text-900">Milind Mikuja</h6>
                </div>
              </td>
              <td class="country py-2 align-middle white-space-nowrap text-900 fw-semi-bold">
                <div class="d-flex align-items-center">
                  <img src="{{ asset('assets/img/country/canada.png') }}" alt="" width="16">
                  <span class="ms-2">Canada</span>
                </div>
              </td>
              <td class="status py-2 align-middle text-center fs-9 white-space-nowrap">
                <span class="badge badge-phoenix fs-10 badge-phoenix-warning">Pending</span>
              </td>
              <td class="date py-2 align-middle white-space-nowrap text-body fs-9 ps-4 text-900">20/12/2023</td>
              <td class="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                <div class="font-sans-serif btn-reveal-trigger position-static">
                  <button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                    <span class="fas fa-ellipsis-h fs-10"></span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end py-2">
                    <a class="dropdown-item" href="#!">View</a>
                    <a class="dropdown-item" href="#!">Export</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr class="btn-reveal-trigger">
              <td class="company py-2 align-middle white-space-nowrap">
                <div class="d-flex align-items-center">
                  <img src="{{ asset('assets/img/logos/microsoft.png') }}" alt="" width="24">
                  <h6 class="mb-0 ms-2 text-900">Microsoft</h6>
                </div>
              </td>
              <td class="representative py-2 align-middle white-space-nowrap">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-s">
                    <img class="rounded-circle" src="{{ asset('assets/img/team/34.webp') }}" alt="">
                  </div>
                  <h6 class="mb-0 ms-2 text-900">Stanly Drinkwater</h6>
                </div>
              </td>
              <td class="country py-2 align-middle white-space-nowrap text-900 fw-semi-bold">
                <div class="d-flex align-items-center">
                  <img src="{{ asset('assets/img/country/spain.png') }}" alt="" width="16">
                  <span class="ms-2">Spain</span>
                </div>
              </td>
              <td class="status py-2 align-middle text-center fs-9 white-space-nowrap">
                <span class="badge badge-phoenix fs-10 badge-phoenix-info">Qualified</span>
              </td>
              <td class="date py-2 align-middle white-space-nowrap text-body fs-9 ps-4 text-900">27/12/2023</td>
              <td class="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                <div class="font-sans-serif btn-reveal-trigger position-static">
                  <button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                    <span class="fas fa-ellipsis-h fs-10"></span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end py-2">
                    <a class="dropdown-item" href="#!">View</a>
                    <a class="dropdown-item" href="#!">Export</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex align-items-center justify-content-center pt-3">
        <div class="pagination">
          <span class="page-link border-0 rounded-1 px-3 py-2 fs-9">Previous</span>
          <span class="page-link border-0 rounded-1 px-3 py-2 fs-9 active">1</span>
          <span class="page-link border-0 rounded-1 px-3 py-2 fs-9">2</span>
          <span class="page-link border-0 rounded-1 px-3 py-2 fs-9">3</span>
          <span class="page-link border-0 rounded-1 px-3 py-2 fs-9">Next</span>
        </div>
      </div>
    </div>
  </div>
</div>
