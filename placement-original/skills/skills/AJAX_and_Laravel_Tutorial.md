# AJAX & Laravel — Contractor Details (Practical Notes)

This short tutorial explains how to fetch contractor details from Laravel using AJAX, return a consistent JSON response, and populate a Bootstrap modal. It's practical and copy-pasteable for the project.

---

## 1) Recommended JSON response shape

Always return a consistent JSON shape from the controller so the frontend logic is simple and predictable.

Example:

{
"success": true,
"message": "Contractor loaded",
"data": { ... }
}

- success: boolean (true/false)
- message: human-friendly message
- data: the payload (object/array)

---

## 2) Route (add to `routes/admin.php` or `routes/web.php` where appropriate)

```php
use App\Http\Controllers\Admin\ContractorController;

Route::get('admin/contractors/{id}/details', [ContractorController::class, 'getDetails'])->name('admin.contractors.details');
```

---

## 3) Controller: return consistent JSON and eager load relations

Prefer using Eloquent relationships with `with()` to avoid N+1 problems and return an appropriate response shape.

```php
// app/Http/Controllers/Admin/ContractorController.php
public function getDetails($id)
{
    $contractor = Contractor::with(['bank_details', 'workers', 'project', 'company'])->find($id);

    if (! $contractor) {
        return response()->json([
            'success' => false,
            'message' => 'Contractor not found.',
        ], 404);
    }

    return response()->json([
        'success' => true,
        'message' => 'Contractor loaded successfully.',
        'data' => $contractor, // or new ContractorResource($contractor)
    ], 200);
}
```

---

## 4) Using API Resources (recommended)

Create a `ContractorResource` to only expose the fields you want and to transform relations.

```php
// app/Http/Resources/ContractorResource.php
public function toArray($request)
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'pan_no' => $this->pan_no,
        'address' => $this->address,
        'bank_details' => BankDetailResource::collection($this->whenLoaded('bank_details')),
        'workers' => WorkerResource::collection($this->whenLoaded('workers')),
    ];
}

// Controller usage:
return response()->json([
    'success' => true,
    'message' => 'Loaded',
    'data' => new ContractorResource($contractor),
]);
```

---

## 5) Frontend — AJAX call (jQuery example)

```js
function showContractorDetails(contractorId) {
    $("#contractorModal").modal("show");
    $("#modal-loading").show();
    $("#modal-content").hide();

    $.ajax({
        url: `{{ url('admin/contractors') }}/${contractorId}/details`,
        type: "GET",
        success: function (response) {
            console.log("AJAX response", response);
            if (response.success) {
                populateContractorModal(response.data);
                $("#modal-loading").hide();
                $("#modal-content").show();
            } else {
                showError(
                    response.message || "Failed to load contractor details.",
                );
                $("#modal-loading").hide();
            }
        },
        error: function (xhr) {
            showError(
                xhr.responseJSON?.message ||
                    "Failed to load contractor details.",
            );
            $("#modal-loading").hide();
        },
    });
}

function populateContractorModal(c) {
    $("#contractor-name").text(c.name || "N/A");
    $("#contractor-pan").text(c.pan_no || "N/A");

    const $list = $("#bank-details-list").empty();
    if (!c.bank_details || c.bank_details.length === 0) {
        $list.append('<div class="text-muted">No bank details available</div>');
    } else {
        c.bank_details.forEach((b) => {
            $list.append(`
        <div class="bank-row mb-2">
          <strong>${b.beneficiary_name || b.account_holder_name || "N/A"}</strong>
          <div class="text-muted">${b.bank_name || "N/A"} — ${b.account_no || "N/A"} (${b.ifsc_code || ""})</div>
        </div>
      `);
        });
    }
}
```

Notes:

- Use `console.log(response)` to inspect raw JSON while developing.
- For POST/PUT/DELETE, send CSRF token via headers: `headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}`.

---

## 6) Modal HTML (simple structure)

Add a modal partial or markup that the JS expects:

```html
<div class="modal" id="contractorModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div id="modal-loading" class="p-4 text-center">Loading...</div>
            <div id="modal-content" class="p-4 d-none">
                <h4 id="contractor-name"></h4>
                <div>
                    <strong>PAN:</strong> <span id="contractor-pan"></span>
                </div>

                <h5 class="mt-3">Bank Details</h5>
                <div id="bank-details-list"></div>
            </div>
        </div>
    </div>
</div>
```

---

## 7) Debugging tips

- Open the Network tab and inspect the response body and headers.
- If you get 500/403/401, inspect server logs (`storage/logs/laravel.log`).
- Validate your route exists (php artisan route:list) and that middlewares are correct.
- If frontend always sees `response.success` as undefined, check the JSON structure and absence of HTML errors (500 pages often return HTML).

---

## 8) Quick validation tests

- `curl -i "{{ url('admin/contractors') }}/3/details"` — check raw JSON.
- Use Postman or Insomnia for interactive testing.
- Add `console.log(response)` in success handler and `console.error` in error handler.

---

## 9) Next steps (optional improvements)

- Add `ContractorResource` + `BankDetailResource` (recommended).
- Add JS loading indicators and graceful empty-state UI.
- Add client-side validation for IFSC/account formatting.

---

If you'd like, I can implement a `ContractorResource` and update the controller and Blade modal now. Just tell me to proceed and I'll make the changes.
