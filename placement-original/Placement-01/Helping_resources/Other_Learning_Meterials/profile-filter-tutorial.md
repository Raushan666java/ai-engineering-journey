# Laravel AJAX Profile Filtering – Complete Step-by-Step Tutorial

This tutorial will guide you through building a robust, scalable profile filtering system in Laravel using AJAX and JavaScript. You’ll learn how to structure your backend query, create a flexible controller, and implement a dynamic frontend with real-time updates.

---

## 1. Backend: Controller & Query

**Create a dedicated controller for filtering (e.g., `FilterController`).**

```php
// app/Http/Controllers/Frontend/FilterController.php
namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function filterProfiles(Request $request)
    {
        $user = auth()->user();

        $query = User::where('gender', $user->seeking)
            ->where('id', '!=', $user->id)
            ->where('status', 'active');

        // Apply filters dynamically
        if ($request->filled('plan')) {
            $query->where('user_type', $request->input('plan'));
        }
        if ($request->filled('age')) {
            [$min, $max] = explode(' to ', $request->input('age'));
            $query->whereBetween('age', [(int)$min, (int)$max]);
        }
        if ($request->filled('religion')) {
            $query->where('religion', $request->input('religion'));
        }
        if ($request->filled('city_id')) {
            $query->where('city_id', $request->input('city_id'));
        }

        $profiles = $query->orderBy('created_at', 'desc')->paginate(10);

        // Return only necessary fields for performance
        $profiles->getCollection()->transform(function ($profile) {
            return [
                'id' => $profile->id,
                'name' => $profile->name,
                'image' => $profile->image ? asset($profile->image) : asset('dummy-                 image.jpg'),
                'your_education' => $profile->your_education,
                'profession' => $profile->profession,
                'age' => $profile->age,
                'height' => $profile->height,
                'is_online' => $profile->is_online,
            ];
        });

        return response()->json([
            'status' => 'success',
            'filteredProfiles' => $profiles->items(),
            'pagination' => $profiles->links()->toHtml(),
        ]);
    }
}
```

---

## 2. Backend: Route

```php
// routes/web.php
Route::get('/filter-profiles', [\App\Http\Controllers\Frontend\FilterController::class, 'filterProfiles'])->name('filter-profiles');
```

---

## 3. Frontend: Blade Markup

Add your filter form and profiles list container:

```blade
<!-- Filter Form Example -->
<select class="chosen-select" name="age">
    <option value="">Select age</option>
    <option value="18 to 30">18 to 30</option>
    <option value="31 to 40">31 to 40</option>
    <!-- ... -->
</select>
<select class="chosen-select" name="religion">
    <option value="">Any</option>
    @foreach ($religions as $religion)
        <option value="{{ $religion->value }}">{{ $religion->display_text }}</option>
    @endforeach
</select>
<select class="chosen-select" name="city_id">
    <option value="">Select City</option>
    @foreach ($cities as $city)
        <option value="{{ $city->id }}">{{ $city->city }}</option>
    @endforeach
</select>
@foreach ($plans as $plan)
    <input type="radio" value="{{ $plan->name }}" name="plan" id="plan{{ $plan->id }}">
    <label for="plan{{ $plan->id }}">{{ $plan->name }}</label>
@endforeach

<!-- Profiles List -->
<ul class="profiles-list"></ul>
<div class="pagination"></div>
```

---

## 4. Frontend: JavaScript (AJAX Filtering)

```javascript
<script>
$(document).ready(function() {
    function loadProfiles(page = 1) {
        let plan = $('input[name="plan"]:checked').val() || '';
        let age = $('select[name="age"]').val() || '';
        let religion = $('select[name="religion"]').val() || '';
        let city_id = $('select[name="city_id"]').val() || '';

        $.ajax({
            url: "{{ route('filter-profiles') }}",
            type: 'GET',
            data: {
                plan: plan,
                age: age,
                religion: religion,
                city_id: city_id,
                page: page
            },
            success: function(response) {
                if (response.status === 'success') {
                    let html = '';
                    response.filteredProfiles.forEach(profile => {
                        html += `
                        <li>
                            <div class="all-pro-box">
                                <div class="pro-img">
                                    <img src="${profile.image}" alt="${profile.name}">
                                </div>
                                <div class="pro-detail">
                                    <h4>${profile.name}</h4>
                                    <div class="pro-bio">
                                        <span>${profile.your_education || ''}</span>
                                        <span>${profile.profession || ''}</span>
                                        <span>${profile.age} years old</span>
                                        <span>Height: ${profile.height || ''} CMS</span>
                                    </div>
                                </div>
                            </div>
                        </li>`;
                    });
                    $('ul.profiles-list').html(html);
                    $('.pagination').html(response.pagination);
                } else {
                    $('ul.profiles-list').html('<li>No profiles found</li>');
                    $('.pagination').empty();
                }
            },
            error: function(xhr) {
                $('ul.profiles-list').html('<li>Error loading profiles</li>');
                $('.pagination').empty();
            }
        });
    }

    // Initial load
    loadProfiles();

    // Filter change events
    $('input[name="plan"], select[name="age"], select[name="religion"], select[name="city_id"]').on('change', function() {
        loadProfiles();
    });

    // Pagination click event
    $(document).on('click', '.pagination a', function(e) {
        e.preventDefault();
        const page = $(this).attr('href').split('page=')[1];
        loadProfiles(page);
    });
});
</script>
```

---

## 5. Tips & Best Practices

- **Validate** all filter inputs in your controller.
- **Return only needed fields** for performance.
- **Show a loading spinner** while fetching data.
- **Handle empty results** gracefully.
- **Use asset() or url()** for image paths to avoid broken images.
- **Paginate** results for better UX and performance.

---

**You now have a complete, scalable AJAX filter system for your Laravel profiles page!**
