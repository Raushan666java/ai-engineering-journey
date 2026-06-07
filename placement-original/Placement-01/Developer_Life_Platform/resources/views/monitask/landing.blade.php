@extends('layouts.monitask')

@section('title', 'Monitask - Employee Productivity Tracking')

@section('content')
<div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Hero Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
                    <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Best solution for remote teams
                </div>
                
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Employee Productivity Tracking and 
                    <span class="text-yellow-400">Workforce Analytics</span> Platform
                </h1>
                
                <p class="text-xl md:text-2xl mb-8 text-blue-100">
                    Employee monitoring software with screenshots
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <div class="flex items-center gap-2">
                        <input type="email" placeholder="Work e-mail" class="px-4 py-3 rounded-lg text-gray-900 w-64">
                        <button class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
                            Get Started Free
                        </button>
                    </div>
                </div>
                
                <p class="text-blue-200 mb-8">1 min setup. No credit card required.</p>
                
                <!-- Trust indicators -->
                <div class="flex items-center justify-center gap-8 text-blue-200">
                    <div class="flex items-center gap-2">
                        <span class="text-yellow-400 text-2xl">★★★★★</span>
                        <span>"best solution for remote teams"</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-yellow-400 text-2xl">★★★★★</span>
                        <span>"improves productivity!"</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-yellow-400 text-2xl">★★★★★</span>
                        <span>"so easy to use"</span>
                    </div>
                </div>
                
                <div class="mt-12 text-center">
                    <p class="text-lg font-semibold mb-4">1000+ clients worldwide increase workforce productivity with Monitask</p>
                    
                    <!-- Company logos placeholder -->
                    <div class="flex items-center justify-center gap-8 opacity-75">
                        <div class="w-24 h-8 bg-white/20 rounded"></div>
                        <div class="w-24 h-8 bg-white/20 rounded"></div>
                        <div class="w-24 h-8 bg-white/20 rounded"></div>
                        <div class="w-24 h-8 bg-white/20 rounded"></div>
                        <div class="w-24 h-8 bg-white/20 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Trusted by thousands of users</h2>
                <div class="flex items-center justify-center gap-12">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-600">1000+</div>
                        <div class="text-gray-600">Active Companies</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600">50K+</div>
                        <div class="text-gray-600">Users Worldwide</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-purple-600">98%</div>
                        <div class="text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <!-- Time Tracking with Screenshots -->
            <div class="max-w-6xl mx-auto mb-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            Time Tracking with Screenshots
                        </h2>
                        <p class="text-xl text-gray-600 mb-8">
                            Clear visibility and insights into how employees work. Even remotely
                        </p>
                        <p class="text-gray-700 mb-6">
                            Our computer monitoring software allows employees, field contractors, and freelancers to manually clock in when they begin working on an assignment. The application will take screenshots randomly or at set intervals, which allows employers to observe the work process.
                        </p>
                        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <p class="text-blue-800 font-medium">
                                The application only tracks activity when the employee is clocked in. No spying, only transparency.
                            </p>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div class="text-sm text-gray-500 ml-auto">Screenshot taken at 2:34 PM</div>
                            </div>
                            <div class="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-camera text-white text-2xl"></i>
                                    </div>
                                    <p class="text-gray-600">Screenshot Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View Apps Used -->
            <div class="max-w-6xl mx-auto mb-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="order-2 lg:order-1">
                        <div class="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
                            <div class="bg-white rounded-lg shadow-lg p-6">
                                <h3 class="text-lg font-semibold mb-4">Application Usage Today</h3>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                                <i class="fab fa-chrome text-white text-sm"></i>
                                            </div>
                                            <span>Google Chrome</span>
                                        </div>
                                        <span class="text-gray-600">4h 32m</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                                                <i class="fas fa-code text-white text-sm"></i>
                                            </div>
                                            <span>VS Code</span>
                                        </div>
                                        <span class="text-gray-600">3h 18m</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                                <i class="fab fa-slack text-white text-sm"></i>
                                            </div>
                                            <span>Slack</span>
                                        </div>
                                        <span class="text-gray-600">1h 45m</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 lg:order-2">
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            View Apps Used By Your Team
                        </h2>
                        <p class="text-gray-700 mb-6">
                            Use the employee time tracking features in Monitask to monitor the workload of your team and employees. The dashboards allow employers to observe the work process in real-time.
                        </p>
                        <p class="text-gray-700">
                            Our application tracks employees' web and application activity, it shows which tasks and projects are currently being worked on, and how long the workflow actually takes.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Remote Monitoring -->
            <div class="max-w-6xl mx-auto mb-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            Observe the working process remotely
                        </h2>
                        <p class="text-gray-700 mb-6">
                            Try the Monitask time tracking with screenshot feature, which helps you track employee and performance remotely. No spying – the screenshot taking option will allow you to get transparent information about what your employees and freelancers are really working on right now.
                        </p>
                        <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                            <p class="text-amber-800 font-medium">
                                The application tracks activity only while the user is manually clocked in.
                            </p>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                        <i class="fas fa-eye text-white"></i>
                                    </div>
                                    <p class="text-sm font-medium">Real-time View</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                        <i class="fas fa-chart-line text-white"></i>
                                    </div>
                                    <p class="text-sm font-medium">Analytics</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                        <i class="fas fa-shield-alt text-white"></i>
                                    </div>
                                    <p class="text-sm font-medium">Privacy Safe</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                        <i class="fas fa-clock text-white"></i>
                                    </div>
                                    <p class="text-sm font-medium">Time Tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Management -->
            <div class="max-w-6xl mx-auto mb-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="order-2 lg:order-1">
                        <div class="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
                            <div class="bg-white rounded-lg shadow-lg p-6">
                                <h3 class="text-lg font-semibold mb-4">Active Projects</h3>
                                <div class="space-y-4">
                                    <div class="border rounded-lg p-3">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="font-medium">E-commerce Platform</span>
                                            <span class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
                                        </div>
                                        <div class="text-sm text-gray-600 mt-1">75% Complete</div>
                                    </div>
                                    <div class="border rounded-lg p-3">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="font-medium">Mobile App Development</span>
                                            <span class="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-blue-500 h-2 rounded-full" style="width: 45%"></div>
                                        </div>
                                        <div class="text-sm text-gray-600 mt-1">45% Complete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 lg:order-2">
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            Create Projects For Your Team
                        </h2>
                        <p class="text-gray-700 mb-6">
                            Try Monitask's time tracking with the screenshot feature, which helps you track employees and their performance remotely. The screenshot-taking option allows you to get transparent information about what your employees and freelancers are really working on right now.
                        </p>
                        <p class="text-gray-700">
                            No spying – the application tracks activity only while the user is manually clocked in.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Reports & Statistics -->
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            View Statistics and Generate Reports
                        </h2>
                        <p class="text-gray-700 mb-6">
                            Monitask helps you get a clear picture of the time your team spends on each project through reports and statistics. This means you can determine how much each project has cost.
                        </p>
                        <p class="text-gray-700 mb-6">
                            The application allows you to analyze your employees' output to promote efficiency and help improve the way your business operates.
                        </p>
                        <p class="text-gray-700">
                            Your team members can create reports to view their work hours and use that information to create invoices. Simple and transparent.
                        </p>
                    </div>
                    <div class="bg-gradient-to-br from-teal-100 to-cyan-100 p-8 rounded-2xl">
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-lg font-semibold mb-4">Weekly Performance Report</h3>
                            <div class="space-y-4">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Total Hours Tracked</span>
                                    <span class="font-semibold">156.5h</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Billable Hours</span>
                                    <span class="font-semibold">142.3h</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Productivity Score</span>
                                    <span class="font-semibold text-green-600">87%</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Revenue Generated</span>
                                    <span class="font-semibold">$8,456</span>
                                </div>
                            </div>
                            <button class="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                Download Full Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Security Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">What about security?</h2>
                <p class="text-xl text-gray-600">100% secure and safe to use</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <i class="fas fa-lock text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">100% secure and safe to use</h3>
                    <p class="text-gray-600">Monitask encrypts all transmitted and stored data</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <i class="fas fa-shield-alt text-green-600 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">Attentive to confidential information</h3>
                    <p class="text-gray-600">You are in complete control of what's measured and tracked</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <i class="fas fa-keyboard text-purple-600 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">No record of keystrokes or sensitive data</h3>
                    <p class="text-gray-600">Monitask only captures the number of keystrokes and mouse movements</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <i class="fas fa-eye text-orange-600 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">No spying. Just transparency</h3>
                    <p class="text-gray-600">Monitask tracks activity only when an employee manually clocks in</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">What other customers have to say about us</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            J
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold">Joy</h4>
                            <p class="text-gray-600 text-sm">Social Media Manager</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">★★★★★</div>
                    <p class="text-gray-700">
                        "As an entrepreneur, I often feel guilt that I'm not spending 'enough' time working on various projects. Once I started using Monitask, everything became objective and my time has started to become more valuable."
                    </p>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                            S
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold">Shailendra B</h4>
                            <p class="text-gray-600 text-sm">Owner</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">★★★★★</div>
                    <p class="text-gray-700">
                        "Ease of use. Clean UI. Amazing support. Mobile friendly Dashboard. Affordable and provides features which are mostly in other softwares for $10+."
                    </p>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                            M
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold">Mai</h4>
                            <p class="text-gray-600 text-sm">Sales & Marketing Manager</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">★★★★★</div>
                    <p class="text-gray-700">
                        "I love the idea that the app is able to track the internet time and apps used by the user. It builds discipline and also shows your integrity for the client."
                    </p>
                </div>

                <!-- Testimonial 4 -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            V
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold">V S R</h4>
                            <p class="text-gray-600 text-sm">Head - Technology</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">★★★★★</div>
                    <p class="text-gray-700">
                        "It is a must-have tool for companies allowing remote work. 80% of our employees work from remote locations, and tracking their work efficiency was a big challenge for us."
                    </p>
                </div>

                <!-- Testimonial 5 -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                            L
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold">Lady R.</h4>
                            <p class="text-gray-600 text-sm">Sales & Marketing Manager</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">★★★★★</div>
                    <p class="text-gray-700">
                        "Monitask made it easy for me to monitor time and show my productivity thru their screenshot features. It helps me to gain the trust of my boss who is also checking my timeline."
                    </p>
                </div>

                <!-- Testimonial 6 -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            E
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold">Essence H.</h4>
                            <p class="text-gray-600 text-sm">Marketing Director</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">★★★★★</div>
                    <p class="text-gray-700">
                        "I used to use a time tracking software but it didn't take screenshots and remind me of idle time. I like both of the features because it gives some accountability."
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Having Doubts? Try it for free without limits</h2>
                <p class="text-xl text-gray-600">Monitask is suitable for</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <!-- Small Teams -->
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 text-center">
                    <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-users text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Small remote teams</h3>
                    <p class="text-gray-600 mb-6">IF YOU have a team of 5-20 peoples AND your team members can work remotely</p>
                    <p class="text-sm text-gray-700 mb-8">
                        Any remote teams requires the employee monitoring software. Monitask is ideal for managing small teams working remotely. It has everything you need to organize your workflow and monitor the work of remote employees.
                    </p>
                    <button class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
                        Start Free Trial
                    </button>
                </div>

                <!-- Medium Companies -->
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center">
                    <div class="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-building text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Medium companies</h3>
                    <p class="text-gray-600 mb-6">Perfect for growing businesses with 20-100 employees</p>
                    <p class="text-sm text-gray-700 mb-8">
                        Scale your monitoring capabilities with advanced features like team analytics, department-wise reporting, and comprehensive productivity insights. Ideal for companies with multiple projects and diverse teams.
                    </p>
                    <button class="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold">
                        Start Free Trial
                    </button>
                </div>

                <!-- Large Organizations -->
                <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8 text-center">
                    <div class="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-globe text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Large organisations</h3>
                    <p class="text-gray-600 mb-6">Enterprise solutions for 100+ employees worldwide</p>
                    <p class="text-sm text-gray-700 mb-8">
                        Enterprise-grade security, custom integrations, dedicated support, and advanced compliance features. Perfect for multinational companies with complex organizational structures and strict security requirements.
                    </p>
                    <button class="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition font-semibold">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to boost your team's productivity?</h2>
            <p class="text-xl mb-8 text-blue-100">Join thousands of companies already using Monitask</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input type="email" placeholder="Enter your work email" class="px-6 py-4 rounded-lg text-gray-900 w-80">
                <button class="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-bold text-lg transition">
                    Start Free Trial
                </button>
            </div>
            <p class="mt-4 text-blue-200">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
    </section>
</div>

@push('styles')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
@endpush
@endsection
