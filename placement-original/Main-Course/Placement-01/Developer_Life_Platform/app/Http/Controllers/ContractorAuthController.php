<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\Contractor;

class ContractorAuthController extends Controller
{
    // Show contractor login form
    public function showLoginForm()
    {
        return view('contractor.auth.login');
    }

    // Handle contractor login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $contractor = Contractor::where('email', $request->email)->first();

        if (!$contractor || !Hash::check($request->password, $contractor->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        Auth::guard('contractor')->login($contractor, $request->boolean('remember'));

        $request->session()->regenerate();

        return redirect()->intended('/contractor/dashboard');
    }

    // Show contractor registration form
    public function showRegistrationForm()
    {
        return view('contractor.auth.register');
    }

    // Handle contractor registration
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:contractors',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'nullable|string|max:20',
            'company_name' => 'nullable|string|max:255',
            'experience_level' => 'required|in:junior,mid,senior,expert',
            'hourly_rate' => 'nullable|numeric|min:0',
        ]);

        $contractor = Contractor::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'company_name' => $request->company_name,
            'experience_level' => $request->experience_level,
            'hourly_rate' => $request->hourly_rate,
            'status' => 'pending_approval',
            'is_available' => true,
        ]);

        Auth::guard('contractor')->login($contractor);

        return redirect('/contractor/dashboard')->with('success', 'Registration successful! Your account is pending approval.');
    }

    // Show contractor dashboard
    public function dashboard()
    {
        $contractor = Auth::guard('contractor')->user();
        
        return view('contractor.dashboard', compact('contractor'));
    }

    // Handle contractor logout
    public function logout(Request $request)
    {
        Auth::guard('contractor')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/contractor/login');
    }

    // Show contractor profile
    public function profile()
    {
        $contractor = Auth::guard('contractor')->user();
        
        return view('contractor.profile', compact('contractor'));
    }

    // Update contractor profile
    public function updateProfile(Request $request)
    {
        $contractor = Auth::guard('contractor')->user();

        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'company_name' => 'nullable|string|max:255',
            'bio' => 'nullable|string|max:1000',
            'experience_level' => 'required|in:junior,mid,senior,expert',
            'hourly_rate' => 'nullable|numeric|min:0',
            'skills' => 'nullable|array',
        ]);

        $contractor->update($request->only([
            'name', 'phone', 'company_name', 'bio', 
            'experience_level', 'hourly_rate', 'skills'
        ]));

        return back()->with('success', 'Profile updated successfully!');
    }
}
