<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Contractor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    /**
     * Redirect to social provider
     */
    public function redirectToProvider($provider, Request $request)
    {
        $this->validateProvider($provider);
      

        // Get user type from request (user or contractor)
        $type = $request->get('type', 'user');
        session(['social_auth_type' => $type]);
         
        // Clear any existing session data for this provider
        session()->forget(['_token', "socialite_{$provider}_state"]);
         
        try {
            return Socialite::driver($provider)->redirect();
        } catch (\Exception $e) {
            Log::error("Social redirect error for {$provider}: " . $e->getMessage());
            $redirectRoute = $type === 'contractor' ? 'contractor.login' : 'login';
            return redirect()->route($redirectRoute)->with('error', 'Unable to connect to ' . ucfirst($provider) . '. Please try again.');
        }
    }

    /**
     * Handle social provider callback
     */
    public function handleProviderCallback($provider)
    {
        
        $this->validateProvider($provider);
        
        $type = session('social_auth_type', 'user');

        try {
           // dd('hello');
            // Get user from social provider
            $socialUser = Socialite::driver($provider)->user();
            
            if (!$socialUser || !$socialUser->getEmail()) {
                Log::warning("Social auth failed - no user data or email from {$provider}");
                $redirectRoute = $type === 'contractor' ? 'contractor.login' : 'login';
                return redirect()->route($redirectRoute)->with('error', 'Unable to get your information from ' . ucfirst($provider) . '. Please try again.');
            }
            // dd($socialUser);
            // Handle based on type
            if ($type === 'contractor') {
                return $this->handleContractorAuth($socialUser, $provider);
            } else {
                return $this->handleUserAuth($socialUser, $provider);
            }

        } catch (\Laravel\Socialite\Two\InvalidStateException $e) {
            Log::warning("OAuth InvalidStateException for {$provider}: " . $e->getMessage());
            
            // Clear all session data and try redirecting again
            session()->flush();
            $redirectRoute = $type === 'contractor' ? 'contractor.login' : 'login';
            return redirect()->route($redirectRoute)->with('error', 'Authentication session expired. Please try logging in again.');
            
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            Log::error("OAuth ClientException for {$provider}: " . $e->getMessage());
            $redirectRoute = $type === 'contractor' ? 'contractor.login' : 'login';
            return redirect()->route($redirectRoute)->with('error', 'Authentication failed. Please check your ' . ucfirst($provider) . ' permissions and try again.');
            
        } catch (\Exception $e) {
            Log::error("Social auth error for {$provider}: " . $e->getMessage(), [
                'exception' => $e,
                'request_data' => request()->all()
            ]);
            $redirectRoute = $type === 'contractor' ? 'contractor.login' : 'login';
            return redirect()->route($redirectRoute)->with('error', 'Authentication failed. Please try again.');
        }
    }

    /**
     * Handle user authentication via social login
     */
    private function handleUserAuth($socialUser, $provider)
    {
        // Check if user already exists with this provider
        $existingUser = User::where('provider', $provider)
                           ->where('provider_id', $socialUser->getId())
                           ->first();

        if ($existingUser) {
            // Update existing user info
            $this->updateUserFromSocial($existingUser, $socialUser, $provider);
            Auth::login($existingUser);
            
            return redirect()->intended('/dashboard')->with('success', 'Successfully logged in with ' . ucfirst($provider));
        }

        // Check if user exists with same email
        $existingEmailUser = User::where('email', $socialUser->getEmail())->first();

        if ($existingEmailUser) {
            // Link social account to existing user
            $this->linkSocialAccount($existingEmailUser, $socialUser, $provider);
            Auth::login($existingEmailUser);
            
            return redirect()->intended('/dashboard')->with('success', 'Social account linked successfully');
        }

        // Create new user
        $user = $this->createUserFromSocial($socialUser, $provider);
        Auth::login($user);

        return redirect()->intended('/dashboard')->with('success', 'Account created successfully with ' . ucfirst($provider));
    }

    /**
     * Handle contractor authentication via social login
     */
    private function handleContractorAuth($socialUser, $provider)
    {
        // Check if contractor already exists with this provider
        $existingContractor = Contractor::where('provider', $provider)
                                      ->where('provider_id', $socialUser->getId())
                                      ->first();

        if ($existingContractor) {
            // Update existing contractor info
            $this->updateContractorFromSocial($existingContractor, $socialUser, $provider);
            Auth::guard('contractor')->login($existingContractor);
            
            return redirect()->intended('/contractor/dashboard')->with('success', 'Successfully logged in with ' . ucfirst($provider));
        }

        // Check if contractor exists with same email
        $existingEmailContractor = Contractor::where('email', $socialUser->getEmail())->first();

        if ($existingEmailContractor) {
            // Link social account to existing contractor
            $this->linkSocialAccountToContractor($existingEmailContractor, $socialUser, $provider);
            Auth::guard('contractor')->login($existingEmailContractor);
            
            return redirect()->intended('/contractor/dashboard')->with('success', 'Social account linked successfully');
        }

        // Create new contractor
        $contractor = $this->createContractorFromSocial($socialUser, $provider);
        Auth::guard('contractor')->login($contractor);

        return redirect()->intended('/contractor/dashboard')->with('success', 'Contractor account created successfully with ' . ucfirst($provider));
    }

    /**
     * Unlink social account
     */
    public function unlinkProvider(Request $request, $provider)
    {
        $this->validateProvider($provider);
        
        $user = Auth::user();
        
        // Don't allow unlinking if it's the only login method and no password set
        if (!$user->password && $this->isOnlySocialProvider($user, $provider)) {
            return back()->with('error', 'Cannot unlink the only login method. Please set a password first.');
        }

        $user->update([
            'provider' => null,
            'provider_id' => null,
            'provider_token' => null,
            'provider_refresh_token' => null,
        ]);

        return back()->with('success', ucfirst($provider) . ' account unlinked successfully.');
    }

    /**
     * Link additional social account
     */
    public function linkProvider($provider)
    {
        $this->validateProvider($provider);
        
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle linking callback
     */
    public function handleLinkCallback($provider)
    {
        $this->validateProvider($provider);

        try {
            $socialUser = Socialite::driver($provider)->user();
            $user = Auth::user();

            // Check if this social account is already linked to another user
            $existingUser = User::where('provider', $provider)
                               ->where('provider_id', $socialUser->getId())
                               ->where('id', '!=', $user->id)
                               ->first();

            if ($existingUser) {
                return redirect('/profile/social')->with('error', 'This ' . ucfirst($provider) . ' account is already linked to another user.');
            }

            $this->linkSocialAccount($user, $socialUser, $provider);

            return redirect('/profile/social')->with('success', ucfirst($provider) . ' account linked successfully.');

        } catch (\Exception $e) {
            return redirect('/profile/social')->with('error', 'Failed to link ' . ucfirst($provider) . ' account.');
        }
    }

    /**
     * Create user from social provider data
     */
    private function createUserFromSocial($socialUser, $provider)
    {
        $userData = [
            'name' => $socialUser->getName() ?: $socialUser->getNickname() ?: 'User',
            'email' => $socialUser->getEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make(Str::random(32)), // Generate random password for social users
            'provider' => $provider,
            'provider_id' => $socialUser->getId(),
            'provider_token' => $socialUser->token,
            'avatar' => $socialUser->getAvatar(),
            'last_login_at' => now(),
            'last_login_ip' => request()->ip(),
            'last_login_device' => request()->userAgent(),
            'total_login_count' => 1,
        ];

        // Add provider-specific data
        switch ($provider) {
            case 'github':
                $userData['github_username'] = $socialUser->getNickname();
                $userData['website'] = $socialUser->user['blog'] ?? null;
                $userData['location'] = $socialUser->user['location'] ?? null;
                $userData['company'] = $socialUser->user['company'] ?? null;
                break;
                
            case 'linkedin':
                $userData['job_title'] = $socialUser->user['headline'] ?? null;
                $userData['linkedin_url'] = $socialUser->user['publicProfileUrl'] ?? null;
                break;
                
            case 'google':
                // Google provides limited public profile info
                break;
                
            case 'facebook':
                $userData['location'] = $socialUser->user['location']['name'] ?? null;
                break;
        }

        // Handle refresh token if available
        if (isset($socialUser->refreshToken)) {
            $userData['provider_refresh_token'] = $socialUser->refreshToken;
        }

        return User::create($userData);
    }

    /**
     * Create contractor from social provider data
     */
    private function createContractorFromSocial($socialUser, $provider)
    {
        $contractorData = [
            'name' => $socialUser->getName() ?: $socialUser->getNickname() ?: 'Contractor',
            'email' => $socialUser->getEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make(Str::random(32)), // Generate random password for social users
            'provider' => $provider,
            'provider_id' => $socialUser->getId(),
            'provider_token' => $socialUser->token,
            'profile_picture' => $socialUser->getAvatar(),
            'status' => 'active',
            'hourly_rate' => 0.00,
            'experience_level' => 'beginner',
            'last_login_at' => now(),
            'last_login_ip' => request()->ip(),
            'last_login_device' => request()->userAgent(),
            'total_login_count' => 1,
        ];

        // Add provider-specific data
        switch ($provider) {
            case 'github':
                $contractorData['github_username'] = $socialUser->getNickname();
                $contractorData['website'] = $socialUser->user['blog'] ?? null;
                $contractorData['location'] = $socialUser->user['location'] ?? null;
                $contractorData['company'] = $socialUser->user['company'] ?? null;
                break;
                
            case 'linkedin':
                $contractorData['job_title'] = $socialUser->user['headline'] ?? null;
                $contractorData['linkedin_url'] = $socialUser->user['publicProfileUrl'] ?? null;
                break;
        }

        // Handle refresh token if available
        if (isset($socialUser->refreshToken)) {
            $contractorData['provider_refresh_token'] = $socialUser->refreshToken;
        }

        return Contractor::create($contractorData);
    }

    /**
     * Update existing contractor with social data
     */
    private function updateContractorFromSocial($contractor, $socialUser, $provider)
    {
        $updateData = [
            'provider_token' => $socialUser->token,
            'last_login_at' => now(),
            'last_login_ip' => request()->ip(),
            'last_login_device' => request()->userAgent(),
        ];

        // Update profile picture if not set
        if (!$contractor->profile_picture && $socialUser->getAvatar()) {
            $updateData['profile_picture'] = $socialUser->getAvatar();
        }

        // Handle refresh token
        if (isset($socialUser->refreshToken)) {
            $updateData['provider_refresh_token'] = $socialUser->refreshToken;
        }

        $contractor->increment('total_login_count');
        $contractor->update($updateData);

        return $contractor;
    }

    /**
     * Link social account to existing contractor
     */
    private function linkSocialAccountToContractor($contractor, $socialUser, $provider)
    {
        $linkData = [
            'provider' => $provider,
            'provider_id' => $socialUser->getId(),
            'provider_token' => $socialUser->token,
            'last_login_at' => now(),
            'last_login_ip' => request()->ip(),
            'last_login_device' => request()->userAgent(),
        ];

        // Update profile picture if not set
        if (!$contractor->profile_picture && $socialUser->getAvatar()) {
            $linkData['profile_picture'] = $socialUser->getAvatar();
        }

        // Handle refresh token
        if (isset($socialUser->refreshToken)) {
            $linkData['provider_refresh_token'] = $socialUser->refreshToken;
        }

        // Add provider-specific data if not already set
        switch ($provider) {
            case 'github':
                if (!$contractor->github_username) {
                    $linkData['github_username'] = $socialUser->getNickname();
                }
                if (!$contractor->website && isset($socialUser->user['blog'])) {
                    $linkData['website'] = $socialUser->user['blog'];
                }
                if (!$contractor->location && isset($socialUser->user['location'])) {
                    $linkData['location'] = $socialUser->user['location'];
                }
                break;
                
            case 'linkedin':
                if (!$contractor->linkedin_url && isset($socialUser->user['publicProfileUrl'])) {
                    $linkData['linkedin_url'] = $socialUser->user['publicProfileUrl'];
                }
                if (!$contractor->job_title && isset($socialUser->user['headline'])) {
                    $linkData['job_title'] = $socialUser->user['headline'];
                }
                break;
        }

        $contractor->increment('total_login_count');
        $contractor->update($linkData);

        return $contractor;
    }

    /**
     * Update existing user with social data
     */
    private function updateUserFromSocial($user, $socialUser, $provider)
    {
        $updateData = [
            'provider_token' => $socialUser->token,
            'last_login_at' => now(),
            'last_login_ip' => request()->ip(),
            'last_login_device' => request()->userAgent(),
        ];

        // Update avatar if not set
        if (!$user->avatar && $socialUser->getAvatar()) {
            $updateData['avatar'] = $socialUser->getAvatar();
        }

        // Handle refresh token
        if (isset($socialUser->refreshToken)) {
            $updateData['provider_refresh_token'] = $socialUser->refreshToken;
        }

        $user->increment('total_login_count');
        $user->update($updateData);

        return $user;
    }

    /**
     * Link social account to existing user
     */
    private function linkSocialAccount($user, $socialUser, $provider)
    {
        $linkData = [
            'provider' => $provider,
            'provider_id' => $socialUser->getId(),
            'provider_token' => $socialUser->token,
            'last_login_at' => now(),
            'last_login_ip' => request()->ip(),
            'last_login_device' => request()->userAgent(),
        ];

        // Update avatar if not set
        if (!$user->avatar && $socialUser->getAvatar()) {
            $linkData['avatar'] = $socialUser->getAvatar();
        }

        // Handle refresh token
        if (isset($socialUser->refreshToken)) {
            $linkData['provider_refresh_token'] = $socialUser->refreshToken;
        }

        // Add provider-specific data if not already set
        switch ($provider) {
            case 'github':
                if (!$user->github_username) {
                    $linkData['github_username'] = $socialUser->getNickname();
                }
                if (!$user->website && isset($socialUser->user['blog'])) {
                    $linkData['website'] = $socialUser->user['blog'];
                }
                if (!$user->location && isset($socialUser->user['location'])) {
                    $linkData['location'] = $socialUser->user['location'];
                }
                break;
                
            case 'linkedin':
                if (!$user->linkedin_url && isset($socialUser->user['publicProfileUrl'])) {
                    $linkData['linkedin_url'] = $socialUser->user['publicProfileUrl'];
                }
                if (!$user->job_title && isset($socialUser->user['headline'])) {
                    $linkData['job_title'] = $socialUser->user['headline'];
                }
                break;
        }

        $user->increment('total_login_count');
        $user->update($linkData);

        return $user;
    }

    /**
     * Validate social provider
     */
    private function validateProvider($provider)
    {
        // dd($provider);
        $allowedProviders = ['google', 'facebook', 'github', 'linkedin'];
        
        if (!in_array($provider, $allowedProviders)) {
            abort(404, 'Social provider not supported');
        }
    }

    /**
     * Check if this is the only social provider for user
     */
    private function isOnlySocialProvider($user, $provider)
    {
        return $user->provider === $provider && !$user->password;
    }

    /**
     * Get user's connected social accounts
     */
    public function getConnectedAccounts()
    {
        $user = Auth::user();
        
        $connectedAccounts = [];
        $availableProviders = ['google', 'facebook', 'github', 'linkedin'];
        
        foreach ($availableProviders as $provider) {
            $connectedAccounts[$provider] = [
                'connected' => $user->provider === $provider,
                'provider_data' => $user->provider === $provider ? [
                    'provider_id' => $user->provider_id,
                    'name' => $user->name,
                    'avatar' => $user->avatar,
                ] : null
            ];
        }
        
        return response()->json($connectedAccounts);
    }
}
