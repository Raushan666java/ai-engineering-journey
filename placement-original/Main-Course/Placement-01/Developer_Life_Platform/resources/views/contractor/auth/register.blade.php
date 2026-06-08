@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">
                    <h4 class="mb-0">
                        <i class="fas fa-user-plus me-2"></i>
                        Contractor Registration
                    </h4>
                    <small class="text-muted">Join our platform as a skilled contractor</small>
                </div>

                <div class="card-body">
                    <!-- Social Registration Buttons -->
                    <div class="mb-4">
                        <div class="text-center mb-3">
                            <h6 class="text-muted">Quick Registration with Social Media</h6>
                        </div>
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
                        <span class="text-muted small">OR REGISTER MANUALLY</span>
                        <hr class="my-2">
                    </div>

                    <form method="POST" action="{{ route('contractor.register') }}">
                        @csrf

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="name" class="form-label">{{ __('Full Name') }}</label>
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">{{ __('Email Address') }}</label>
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="phone" class="form-label">{{ __('Phone Number') }}</label>
                                    <input id="phone" type="text" class="form-control @error('phone') is-invalid @enderror" name="phone" value="{{ old('phone') }}">

                                    @error('phone')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="company_name" class="form-label">{{ __('Company Name') }} <small class="text-muted">(Optional)</small></label>
                                    <input id="company_name" type="text" class="form-control @error('company_name') is-invalid @enderror" name="company_name" value="{{ old('company_name') }}">

                                    @error('company_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="experience_level" class="form-label">{{ __('Experience Level') }}</label>
                                    <select id="experience_level" class="form-select @error('experience_level') is-invalid @enderror" name="experience_level" required>
                                        <option value="">Choose your experience level</option>
                                        <option value="junior" {{ old('experience_level') == 'junior' ? 'selected' : '' }}>Junior (0-2 years)</option>
                                        <option value="mid" {{ old('experience_level') == 'mid' ? 'selected' : '' }}>Mid-Level (2-5 years)</option>
                                        <option value="senior" {{ old('experience_level') == 'senior' ? 'selected' : '' }}>Senior (5+ years)</option>
                                        <option value="expert" {{ old('experience_level') == 'expert' ? 'selected' : '' }}>Expert (10+ years)</option>
                                    </select>

                                    @error('experience_level')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="hourly_rate" class="form-label">{{ __('Hourly Rate') }} <small class="text-muted">(USD)</small></label>
                                    <div class="input-group">
                                        <span class="input-group-text">$</span>
                                        <input id="hourly_rate" type="number" step="0.01" min="0" class="form-control @error('hourly_rate') is-invalid @enderror" name="hourly_rate" value="{{ old('hourly_rate') }}">
                                    </div>

                                    @error('hourly_rate')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="password" class="form-label">{{ __('Password') }}</label>
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="password-confirm" class="form-label">{{ __('Confirm Password') }}</label>
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" id="terms" required>
                                    <label class="form-check-label" for="terms">
                                        I agree to the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-lg">
                                    <i class="fas fa-user-plus me-1"></i>
                                    {{ __('Register as Contractor') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('contractor.login') }}">
                                    {{ __('Already have an account? Login here') }}
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
