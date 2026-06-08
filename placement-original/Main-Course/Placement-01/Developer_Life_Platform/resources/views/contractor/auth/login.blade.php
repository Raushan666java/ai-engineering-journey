@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h4 class="mb-0">
                        <i class="fas fa-user-tie me-2"></i>
                        Contractor Login
                    </h4>
                </div>

                <div class="card-body">
                    <!-- Social Login Buttons -->
                    <div class="mb-4">
                        <div class="row g-2">
                            <div class="col-6">
                                <a href="{{ url('/login/google?type=contractor') }}" class="btn btn-outline-danger w-100">
                                    <i class="fab fa-google me-2"></i>
                                    Google
                                </a>
                            </div>
                            <div class="col-6">
                                <a href="{{ url('/login/github?type=contractor') }}" class="btn btn-outline-dark w-100">
                                    <i class="fab fa-github me-2"></i>
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div class="row g-2 mt-2">
                            <div class="col-6">
                                <a href="{{ url('/login/linkedin?type=contractor') }}" class="btn btn-outline-primary w-100">
                                    <i class="fab fa-linkedin me-2"></i>
                                    LinkedIn
                                </a>
                            </div>
                            <div class="col-6">
                                <a href="{{ url('/login/facebook?type=contractor') }}" class="btn btn-outline-info w-100">
                                    <i class="fab fa-facebook me-2"></i>
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="divider text-center mb-4">
                        <span class="text-muted small">OR</span>
                        <hr class="my-2">
                    </div>

                    <form method="POST" action="{{ route('contractor.login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-sign-in-alt me-1"></i>
                                    {{ __('Login as Contractor') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('contractor.register') }}">
                                    {{ __('New contractor? Register here') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="text-center mt-3">
                <a href="{{ route('login') }}" class="text-muted">
                    <i class="fas fa-arrow-left me-1"></i>
                    Back to User Login
                </a>
            </div>
        </div>
    </div>
</div>
@endsection
