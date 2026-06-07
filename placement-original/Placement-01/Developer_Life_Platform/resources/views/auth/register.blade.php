@extends('auth.layouts.app')

@section('content')

<main>
    <section class="py-10 md:p-10 xl:p-36">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="w-full">
                <div class="flex flex-col lg:items-center lg:flex-row">
                    <div class="w-full p-5 lg:w-1/2 lg:p-10">
                        <div class="flex flex-col items-center text-center">
                            <img src="{{ asset('assets/img/Illustration.svg') }}" class="mb-8" alt="">
                            <h3 class="mb-4 text-2xl font-semibold sm:text-4xl text-slate-900">
                                Transform your Phone into <br>
                                a Classroom
                            </h3>
                            <p class="text-base leading-6 text-slate-700">
                                Seize the moment and help shape the future by starting
                                <br>
                                a career in blockchain now
                            </p>
                        </div>
                    </div>
                    <div class="w-full p-5 lg:w-1/2 lg:p-10">
                        <div>
                            <div class="text-center">
                                <h3 class="mb-4 text-2xl font-semibold sm:text-4xl text-slate-800">
                                    Sign Up
                                </h3>
                                <p class="text-base leading-6 text-slate-400">
                                    Create your account to get started!
                                </p>
                            </div>
                            <div class="mt-6">
                                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                    <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="flex items-center justify-center w-full gap-3 p-4 border rounded-lg border-slate-300 text-slate-400">
                                        <!-- Google SVG ... -->
                                        <span class="text-base font-medium leading-6">Sign Up With Google</span>
                                    </a>
                                    <a href="#" class="flex items-center justify-center w-full gap-3 p-4 border rounded-lg border-slate-300 text-slate-400">
                                        <!-- Apple SVG ... -->
                                        <span class="text-sm font-semibold leading-6">Sign Up With Apple</span>
                                    </a>
                                </div>
                                <div class="relative py-4">
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="w-full border-t border-slate-300"></div>
                                    </div>
                                    <div class="relative flex justify-center text-sm font-medium leading-6">
                                        <span class="px-6 text-gray-900 uppercase bg-white">OR</span>
                                    </div>
                                </div>
                            </div>
                            <form method="POST" action="{{ route('register') }}">
                                @csrf
                                <div class="grid gap-4">
                                    <div>
                                        <label for="name" class="block text-sm font-medium text-slate-800">Name</label>
                                        <div class="relative mt-1.5 rounded-md">
                                            <input type="text" name="name" id="name" class="block w-full p-4 pl-3 text-gray-800 border bg-slate-50 rounded-xl border-slate-300 placeholder:text-gray-400 sm:text-sm ring-0 focus:ring-0 focus:border-primary" placeholder="Your Name" required autofocus>
                                            @error('name')
                                                <span class="text-red-500 text-sm">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-slate-800">Email</label>
                                        <div class="relative mt-1.5 rounded-md">
                                            <input type="email" name="email" id="email" class="block w-full p-4 pl-3 text-gray-800 border bg-slate-50 rounded-xl border-slate-300 placeholder:text-gray-400 sm:text-sm ring-0 focus:ring-0 focus:border-primary" placeholder="Your Email" required>
                                            @error('email')
                                                <span class="text-red-500 text-sm">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div>
                                        <label for="password" class="block text-sm font-medium text-slate-800">Password</label>
                                        <div class="relative mt-1.5 rounded-md">
                                            <input type="password" name="password" id="password" class="block w-full p-4 pl-3 text-gray-800 border bg-slate-50 rounded-xl border-slate-300 placeholder:text-gray-400 sm:text-sm ring-0 focus:ring-0 focus:border-primary" placeholder="Your Password" required>
                                            @error('password')
                                                <span class="text-red-500 text-sm">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div>
                                        <label for="password_confirmation" class="block text-sm font-medium text-slate-800">Confirm Password</label>
                                        <div class="relative mt-1.5 rounded-md">
                                            <input type="password" name="password_confirmation" id="password_confirmation" class="block w-full p-4 pl-3 text-gray-800 border bg-slate-50 rounded-xl border-slate-300 placeholder:text-gray-400 sm:text-sm ring-0 focus:ring-0 focus:border-primary" placeholder="Confirm Password" required>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" class="flex justify-center w-full px-8 py-4 text-sm font-medium leading-6 text-white transition bg-primary rounded-xl hover:bg-violet-500">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p class="mt-4 text-sm leading-6 text-center text-gray-500">
                                Already have an account?
                                <a href="{{ route('login') }}" class="font-semibold text-primary hover:text-primary">Sign In</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center mt-8">
                <nav>
                    <ul class="flex flex-wrap justify-center gap-5 md:gap-10">
                        <li>
                            <a href="#" class="text-base text-slate-900">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" class="text-base text-slate-900">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="text-base text-slate-900">Help</a>
                        </li>
                        <li>
                            <a href="#" class="text-base text-slate-900">English</a>
                        </li>
                    </ul>
                </nav>
                <p class="mt-4 text-base text-slate-600">
                    &copy; 2023 Taildo, All Right Reserved.
                </p>
            </div>
        </div>
    </section>
</main>

@endsection