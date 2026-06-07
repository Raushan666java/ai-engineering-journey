<?php

use Illuminate\Support\Facades\Route;

// Simple authentication routes using closures for now
Route::middleware('guest')->group(function () {
    Route::get('register', function () {
        return view('auth.register');
    })->name('register');

    Route::post('register', function () {
        // Registration logic will be handled by our existing controller
        return redirect()->route('dashboard');
    });

    Route::get('login', function () {
        return view('auth.login');
    })->name('login');

    Route::post('login', function () {
        // Login logic will be handled by our existing controller
        return redirect()->route('dashboard');
    });

    Route::get('forgot-password', function () {
        return view('auth.forgot-password');
    })->name('password.request');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', function () {
        auth()->logout();
        return redirect()->route('login');
    })->name('logout');
});
