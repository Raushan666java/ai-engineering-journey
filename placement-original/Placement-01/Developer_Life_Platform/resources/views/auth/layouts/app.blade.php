<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/css/output.css') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/favicon.ico') }}">
    {{-- @include('partials.head') --}}
    @stack('styles')
  </head>
  <body>
    @yield('content')
    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../node_modules/preline/dist/preline.js"></script>
    @include('partials.scripts')
    @stack('scripts')
  </body>
</html>