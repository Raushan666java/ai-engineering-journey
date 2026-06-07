@extends('layouts.app')

@section('content')
<div style="display: flex; min-height: 100vh;">
    @include('layouts.partials.sidebar')
    
    <main class="main-content">
        <div class="legendary-card animate-fade-in">
            <div style="text-align: center; margin-bottom: 32px;">
                <div class="icon" style="font-size: 2.5em;">📈</div>
                <h1 class="page-title">Legendary Reports</h1>
                <p class="page-subtitle">Track your progress and achievements!</p>
            </div>
            
            <div class="feature-grid">
                <div class="feature-card animate-fade-in">
                    <div class="icon">📊</div>
                    <h3>Learning Progress</h3>
                    <p>View your course completion and skill development.</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                    <p style="margin-top: 8px; color: var(--text-muted);">75% Complete</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="icon">🎯</div>
                    <h3>Goals Achievement</h3>
                    <p>Track your daily, weekly, and monthly goals.</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 60%;"></div>
                    </div>
                    <p style="margin-top: 8px; color: var(--text-muted);">60% Complete</p>
                </div>
                
                <div class="feature-card animate-fade-in">
                    <div class="icon">🏆</div>
                    <h3>Achievements</h3>
                    <p>Your earned badges and accomplishments.</p>
                    <div style="margin-top: 16px;">
                        <span style="background: var(--primary-gradient); padding: 4px 8px; border-radius: 4px; margin-right: 8px; font-size: 0.9em;">🥇 Problem Solver</span>
                        <span style="background: var(--primary-gradient); padding: 4px 8px; border-radius: 4px; margin-right: 8px; font-size: 0.9em;">📚 Quick Learner</span>
                    </div>
                </div>
            </div>
            
            <div class="legendary-card animate-fade-in" style="margin-top: 24px;">
                <h3>📅 Weekly Activity</h3>
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-top: 16px;">
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Mon</div>
                        <div style="color: var(--text-muted);">2h</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Tue</div>
                        <div style="color: var(--text-muted);">3h</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Wed</div>
                        <div style="color: var(--text-muted);">1h</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Thu</div>
                        <div style="color: var(--text-muted);">4h</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Fri</div>
                        <div style="color: var(--text-muted);">2h</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Sat</div>
                        <div style="color: var(--text-muted);">5h</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: var(--glass-bg); border-radius: 8px;">
                        <div style="font-weight: bold; color: #fff;">Sun</div>
                        <div style="color: var(--text-muted);">3h</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
@endsection
