<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Monitask - Time Tracking Platform')</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#8247FF',
                        'primary-light': '#9D5CFF',
                        'primary-dark': '#6B39E5',
                        mainblue: '#1E293B',
                        mainblack: '#0F172A',
                        'violet-50': '#F3F0FF',
                        'violet-100': '#E6DBFF',
                        'violet-200': '#D4C4FF'
                    }
                }
            }
        }
    </script>
    
    @stack('styles')
</head>
<body class="overflow-x-hidden bg-slate-50">
    <!-- Layout wrapper -->
    <div class="w-full layout-wrapper active">
        <div class="relative w-full sm:flex">
            
            <!-- Sidebar -->
            @include('layouts.partials.sidebar')
            
            <!-- Main Content Area -->
            <div class="flex-1 min-h-screen overflow-x-hidden body-wrapper bg-slate-50">
                
                <!-- Header -->
                @include('layouts.partials.header')
                
                <!-- Main Content -->
                <main class="w-full">
                    @yield('content')
                </main>
                
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        // Sidebar toggle functionality
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar-wrapper');
            const overlay = document.querySelector('.aside-overlay');
            
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                overlay.classList.add('hidden');
            } else {
                sidebar.classList.add('active');
                overlay.classList.remove('hidden');
            }
        }

        // Notification dropdown
        function notificationAction() {
            const notificationBox = document.getElementById('notification-box');
            const notificationOutside = document.getElementById('noti-outside');
            
            notificationBox.classList.toggle('hidden');
            notificationOutside.classList.toggle('hidden');
        }

        // Profile dropdown
        function profileAction() {
            const profileBox = document.querySelector('.profile-box');
            const profileOutside = document.querySelector('.profile-outside');
            
            profileBox.classList.toggle('hidden');
            profileOutside.classList.toggle('hidden');
        }

        // Timer functionality
        let timer = null;
        let seconds = 0;
        let isRunning = false;

        function updateTimerDisplay() {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            
            const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            const timerElement = document.getElementById('timer-display');
            if (timerElement) {
                timerElement.textContent = display;
            }
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    seconds++;
                    updateTimerDisplay();
                }, 1000);
                
                document.getElementById('start-btn').classList.add('hidden');
                document.getElementById('stop-btn').classList.remove('hidden');
            }
        }

        function stopTimer() {
            if (isRunning) {
                isRunning = false;
                clearInterval(timer);
                
                document.getElementById('start-btn').classList.remove('hidden');
                document.getElementById('stop-btn').classList.add('hidden');
                
                // Here you can add AJAX call to save time session
                saveTimeSession();
            }
        }

        function saveTimeSession() {
            // Implementation for saving time session
            console.log('Saving time session...');
        }

        // Initialize timer display
        document.addEventListener('DOMContentLoaded', function() {
            updateTimerDisplay();
        });
    </script>
    
    @stack('scripts')
</body>
</html>
