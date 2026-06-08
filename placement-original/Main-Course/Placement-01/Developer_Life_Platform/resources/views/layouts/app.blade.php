<!DOCTYPE html>
<html lang="en-US" dir="ltr" data-navigation-type="default" data-navbar-horizontal-shape="default" data-bs-theme="light">
<head>
    @include('partials.head')
</head>
<body>
    <main class="main" id="top">
        @include('partials.sidebar')
        @include('partials.navbar')
        
        <div class="content">
            @yield('content')
            
            <footer class="footer position-absolute">
                <div class="row g-0 justify-content-between align-items-center h-100">
                    <div class="col-12 col-sm-auto text-center">
                        <p class="mb-0 mt-2 mt-sm-0 text-body">Thank you for creating with Phoenix 
                            <span class="d-none d-sm-inline-block"></span>
                            <span class="d-none d-sm-inline-block mx-1">|</span>
                            <br class="d-sm-none">
                            {{ date('Y') }} &copy; 
                            <a class="mx-1" href="{{ url('/') }}">{{ config('app.name', 'Phoenix') }}</a>
                        </p>
                    </div>
                    <div class="col-12 col-sm-auto text-center">
                        <p class="mb-0 text-body-tertiary text-opacity-85">v{{ config('app.version', '1.18.0') }}</p>
                    </div>
                </div>
            </footer>
        </div>
    </main>
    
    @include('partials.scripts')
    @stack('scripts')
</body>
</html>