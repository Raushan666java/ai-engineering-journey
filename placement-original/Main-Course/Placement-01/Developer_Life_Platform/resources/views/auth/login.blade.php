@extends('auth.layouts.app')

@section('content')
<main>
    <section class="py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-4 mb-lg-0 text-center">
                    <img src="{{ asset('assets/img/Illustration.svg') }}" class="mb-4 img-fluid" alt="">
                    <h3 class="mb-3 fw-bold text-primary">
                        Transform your Phone into <br>
                        a Classroom
                    </h3>
                    <p class="text-muted">
                        Seize the moment and help shape the future by starting
                        <br>
                        a career in blockchain now
                    </p>
                </div>
                <div class="col-lg-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="mb-3 fw-bold text-center text-primary">Sign In</h3>
                            <p class="text-center text-muted mb-4">Welcome back, you’ve been missed!</p>
                            <div class="mb-3 d-flex gap-2">
                                <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="btn btn-outline-danger w-50">
                                    <i class="fab fa-google me-2"></i> Google
                                </a>
                                <a href="#" class="btn btn-outline-dark w-50">
                                    <i class="fab fa-apple me-2"></i> Apple
                                </a>
                            </div>
                            <div class="text-center my-3">
                                <span class="text-muted">OR</span>
                            </div>
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Your Email" required autofocus>
                                    @error('email')
                                        <span class="text-danger small">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" name="password" id="password" class="form-control" placeholder="Your Password" required>
                                    @error('password')
                                        <span class="text-danger small">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3 d-flex justify-content-between align-items-center">
                                    <div class="form-check">
                                        <input id="remember" name="remember" type="checkbox" class="form-check-input">
                                        <label for="remember" class="form-check-label">Remember me</label>
                                    </div>
                                    <a href="{{ route('password.request') }}" class="text-primary">Forgot password?</a>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Sign In</button>
                            </form>
                            <p class="mt-3 text-center text-muted">
                                Don't have an account yet?
                                <a href="{{ route('register') }}" class="text-primary fw-bold">Sign Up</a>
                            </p>
                        </div>
                    </div>
                    <nav class="mt-4 text-center">
                        <a href="#" class="mx-2 text-muted">Terms & Conditions</a>
                        <a href="#" class="mx-2 text-muted">Privacy Policy</a>
                        <a href="#" class="mx-2 text-muted">Help</a>
                        <a href="#" class="mx-2 text-muted">English</a>
                    </nav>
                    <p class="mt-2 text-center text-muted">&copy; 2023 Taildo, All Right Reserved.</p>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection