docs\Placement\Placement-01\Developer_Life_Platform\resources\views\partials\navbar.blade.php
<nav class="navbar navbar-top fixed-top navbar-expand" id="navbarDefault" style="display:none;">
    <div class="collapse navbar-collapse justify-content-between">
        <div class="navbar-logo">
            @include('partials.navbar-brand')
        </div>
        
        @include('partials.search-box')
        
        <ul class="navbar-nav navbar-nav-icons flex-row">
            @include('partials.navbar-icons')
        </ul>
    </div>
</nav>