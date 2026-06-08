@extends('layouts.app')

@section('content')
<div style="display: flex; min-height: 100vh;">
    @include('layouts.partials.sidebar')
    
    <main class="main-content">
        <div class="legendary-card animate-fade-in">
            <div style="text-align: center; margin-bottom: 32px;">
                <div class="icon" style="font-size: 2.5em;">⚙️</div>
                <h1 class="page-title">Legendary Settings</h1>
                <p class="page-subtitle">Manage your account settings with style!</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                <!-- Profile Settings Card -->
                <div class="legendary-card">
                    <h3>👤 Profile Information</h3>
                    <form class="legendary-form" style="margin: 0; max-width: none;">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" value="{{ Auth::user()->name ?? '' }}" placeholder="Enter your full name">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" value="{{ Auth::user()->email ?? '' }}" placeholder="Enter your email">
                        </div>
                        
                        <div class="form-group">
                            <label for="bio">Bio</label>
                            <textarea id="bio" name="bio" placeholder="Tell us about yourself..." rows="4"></textarea>
                        </div>
                        
                        <button type="submit" class="legendary-btn" style="width: 100%;">Save Profile</button>
                    </form>
                </div>

                <!-- Security Settings Card -->
                <div class="legendary-card">
                    <h3>🔒 Security Settings</h3>
                    <form class="legendary-form" style="margin: 0; max-width: none;">
                        <div class="form-group">
                            <label for="current_password">Current Password</label>
                            <input type="password" id="current_password" name="current_password" placeholder="Enter current password">
                        </div>
                        
                        <div class="form-group">
                            <label for="password">New Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter new password">
                        </div>
                        
                        <div class="form-group">
                            <label for="password_confirmation">Confirm Password</label>
                            <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm new password">
                        </div>
                        
                        <button type="submit" class="legendary-btn" style="width: 100%;">Update Password</button>
                    </form>
                </div>

                <!-- Notification Settings Card -->
                <div class="legendary-card">
                    <h3>🔔 Notifications</h3>
                    <div style="margin-top: 20px;">
                        <div style="margin-bottom: 16px;">
                            <label style="display: flex; align-items: center; gap: 8px; color: var(--text-light);">
                                <input type="checkbox" checked> Course updates and announcements
                            </label>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <label style="display: flex; align-items: center; gap: 8px; color: var(--text-light);">
                                <input type="checkbox" checked> Project deadline reminders
                            </label>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <label style="display: flex; align-items: center; gap: 8px; color: var(--text-light);">
                                <input type="checkbox"> Weekly progress summary
                            </label>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <label style="display: flex; align-items: center; gap: 8px; color: var(--text-light);">
                                <input type="checkbox" checked> Achievement notifications
                            </label>
                        </div>
                        <button type="submit" class="legendary-btn" style="width: 100%;">Save Preferences</button>
                    </div>
                </div>

                <!-- Connected Accounts Card -->
                <div class="legendary-card">
                    <h3>🔗 Connected Accounts</h3>
                    <div style="margin-top: 20px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border-radius: 8px; background: var(--glass-bg); margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 1.5em;">🔗</span>
                                <div>
                                    <div style="color: #fff; font-weight: bold;">Google</div>
                                    <div style="color: var(--text-muted); font-size: 0.9em;">Connected</div>
                                </div>
                            </div>
                            <button class="legendary-btn-outline" style="padding: 6px 12px; font-size: 0.9em;">Disconnect</button>
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border-radius: 8px; background: var(--glass-bg); margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 1.5em;">🐙</span>
                                <div>
                                    <div style="color: #fff; font-weight: bold;">GitHub</div>
                                    <div style="color: var(--text-muted); font-size: 0.9em;">Not connected</div>
                                </div>
                            </div>
                            <button class="legendary-btn" style="padding: 6px 12px; font-size: 0.9em;">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
@endsection
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <!-- Settings Navigation -->
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Settings</h6>
                </div>
                <div class="list-group list-group-flush">
                    <a href="#profile" class="list-group-item list-group-item-action active" data-bs-toggle="tab">
                        <i class="fas fa-user me-2"></i> Profile Settings
                    </a>
                    <a href="#account" class="list-group-item list-group-item-action" data-bs-toggle="tab">
                        <i class="fas fa-cog me-2"></i> Account Settings
                    </a>
                    <a href="#privacy" class="list-group-item list-group-item-action" data-bs-toggle="tab">
                        <i class="fas fa-shield-alt me-2"></i> Privacy & Security
                    </a>
                    <a href="#notifications" class="list-group-item list-group-item-action" data-bs-toggle="tab">
                        <i class="fas fa-bell me-2"></i> Notifications
                    </a>
                    <a href="#integrations" class="list-group-item list-group-item-action" data-bs-toggle="tab">
                        <i class="fas fa-plug me-2"></i> Integrations
                    </a>
                </div>
            </div>
        </div>

        <div class="col-md-9">
            <div class="tab-content">
                <!-- Profile Settings -->
                <div class="tab-pane fade show active" id="profile">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Profile Information</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="firstName" value="{{ explode(' ', Auth::user()->name)[0] ?? '' }}">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" value="{{ explode(' ', Auth::user()->name)[1] ?? '' }}">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" value="{{ Auth::user()->email }}">
                                </div>
                                <div class="mb-3">
                                    <label for="bio" class="form-label">Bio</label>
                                    <textarea class="form-control" id="bio" rows="4" placeholder="Tell us about yourself..."></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="location" class="form-label">Location</label>
                                        <input type="text" class="form-control" id="location" placeholder="City, Country">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="timezone" class="form-label">Timezone</label>
                                        <select class="form-select" id="timezone">
                                            <option>UTC-08:00 (Pacific Time)</option>
                                            <option>UTC-05:00 (Eastern Time)</option>
                                            <option>UTC+00:00 (Greenwich Time)</option>
                                            <option>UTC+05:30 (India Standard Time)</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Account Settings -->
                <div class="tab-pane fade" id="account">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Account Settings</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-4">
                                <h6>Change Password</h6>
                                <form>
                                    <div class="mb-3">
                                        <label for="currentPassword" class="form-label">Current Password</label>
                                        <input type="password" class="form-control" id="currentPassword">
                                    </div>
                                    <div class="mb-3">
                                        <label for="newPassword" class="form-label">New Password</label>
                                        <input type="password" class="form-control" id="newPassword">
                                    </div>
                                    <div class="mb-3">
                                        <label for="confirmPassword" class="form-label">Confirm New Password</label>
                                        <input type="password" class="form-control" id="confirmPassword">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Update Password</button>
                                </form>
                            </div>
                            
                            <hr>
                            
                            <div class="mb-4">
                                <h6>Account Preferences</h6>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="publicProfile" checked>
                                    <label class="form-check-label" for="publicProfile">
                                        Make my profile public
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="showActivity" checked>
                                    <label class="form-check-label" for="showActivity">
                                        Show my activity on leaderboards
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="allowMessages">
                                    <label class="form-check-label" for="allowMessages">
                                        Allow messages from other users
                                    </label>
                                </div>
                            </div>
                            
                            <hr>
                            
                            <div class="danger-zone">
                                <h6 class="text-danger">Danger Zone</h6>
                                <p class="text-muted">Once you delete your account, there is no going back. Please be certain.</p>
                                <button class="btn btn-outline-danger">Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Privacy & Security -->
                <div class="tab-pane fade" id="privacy">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Privacy & Security</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-4">
                                <h6>Two-Factor Authentication</h6>
                                <p class="text-muted">Add an extra layer of security to your account</p>
                                <div class="d-flex align-items-center">
                                    <span class="badge bg-danger me-3">Disabled</span>
                                    <button class="btn btn-outline-primary btn-sm">Enable 2FA</button>
                                </div>
                            </div>
                            
                            <hr>
                            
                            <div class="mb-4">
                                <h6>Connected Accounts</h6>
                                <div class="connected-account d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <i class="fab fa-google fa-2x text-danger me-3"></i>
                                        <div>
                                            <h6 class="mb-0">Google</h6>
                                            <small class="text-muted">Connected</small>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-danger btn-sm">Disconnect</button>
                                </div>
                                <div class="connected-account d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <i class="fab fa-github fa-2x me-3"></i>
                                        <div>
                                            <h6 class="mb-0">GitHub</h6>
                                            <small class="text-muted">Not connected</small>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-primary btn-sm">Connect</button>
                                </div>
                            </div>
                            
                            <hr>
                            
                            <div class="mb-4">
                                <h6>Login Sessions</h6>
                                <div class="session-item border rounded p-3 mb-3">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="mb-1">Current Session</h6>
                                            <p class="text-muted mb-1">Windows 11 • Chrome 120.0</p>
                                            <small class="text-success">Active now</small>
                                        </div>
                                        <span class="badge bg-success">Current</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Notifications -->
                <div class="tab-pane fade" id="notifications">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Notification Preferences</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-4">
                                <h6>Email Notifications</h6>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="emailCourses" checked>
                                    <label class="form-check-label" for="emailCourses">
                                        Course updates and announcements
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="emailProjects" checked>
                                    <label class="form-check-label" for="emailProjects">
                                        Project deadline reminders
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="emailAchievements" checked>
                                    <label class="form-check-label" for="emailAchievements">
                                        Achievement notifications
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="emailWeekly">
                                    <label class="form-check-label" for="emailWeekly">
                                        Weekly progress summary
                                    </label>
                                </div>
                            </div>
                            
                            <hr>
                            
                            <div class="mb-4">
                                <h6>Push Notifications</h6>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="pushReminders" checked>
                                    <label class="form-check-label" for="pushReminders">
                                        Daily coding reminders
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="pushDeadlines" checked>
                                    <label class="form-check-label" for="pushDeadlines">
                                        Task and project deadlines
                                    </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="pushMentions">
                                    <label class="form-check-label" for="pushMentions">
                                        When someone mentions me
                                    </label>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Save Preferences</button>
                        </div>
                    </div>
                </div>

                <!-- Integrations -->
                <div class="tab-pane fade" id="integrations">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Integrations</h5>
                        </div>
                        <div class="card-body">
                            <div class="integration-item border rounded p-3 mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <i class="fab fa-slack fa-2x text-primary me-3"></i>
                                        <div>
                                            <h6 class="mb-1">Slack</h6>
                                            <p class="text-muted mb-0">Get notifications in your Slack workspace</p>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-primary">Connect</button>
                                </div>
                            </div>
                            <div class="integration-item border rounded p-3 mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <i class="fab fa-discord fa-2x text-primary me-3"></i>
                                        <div>
                                            <h6 class="mb-1">Discord</h6>
                                            <p class="text-muted mb-0">Share achievements with your Discord server</p>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-primary">Connect</button>
                                </div>
                            </div>
                            <div class="integration-item border rounded p-3 mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <i class="fab fa-trello fa-2x text-primary me-3"></i>
                                        <div>
                                            <h6 class="mb-1">Trello</h6>
                                            <p class="text-muted mb-0">Sync your learning progress with Trello boards</p>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-primary">Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
