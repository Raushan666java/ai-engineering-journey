@extends('layouts.app')

@section('title', 'Help & Support - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="text-center mb-5">
                <h1 class="display-4">Help & Support</h1>
                <p class="lead text-muted">Find answers to common questions and get help with your account</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
            <!-- FAQ Section -->
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Frequently Asked Questions</h5>
                </div>
                <div class="card-body">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    How do I get started with the platform?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Welcome to Developer Life Platform! Start by exploring our three main sections:
                                    <ul class="mt-2">
                                        <li><strong>DSA Practice:</strong> Solve coding problems and participate in contests</li>
                                        <li><strong>Learning:</strong> Enroll in courses to expand your knowledge</li>
                                        <li><strong>MONITASK:</strong> Manage projects and track your development time</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                    How do I track my coding progress?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Your progress is automatically tracked across all platforms:
                                    <ul class="mt-2">
                                        <li>Problems solved in DSA Practice</li>
                                        <li>Course completion percentage</li>
                                        <li>Time spent on projects in MONITASK</li>
                                        <li>Daily coding streaks and achievements</li>
                                    </ul>
                                    Check your dashboard for a comprehensive overview of your progress.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                    Can I work on team projects?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Yes! MONITASK supports team collaboration:
                                    <ul class="mt-2">
                                        <li>Create projects and invite team members</li>
                                        <li>Assign tasks and track individual contributions</li>
                                        <li>Monitor team productivity with detailed reports</li>
                                        <li>Use time tracking to measure project efficiency</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                    How do I reset my password?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    To reset your password:
                                    <ol class="mt-2">
                                        <li>Go to the login page and click "Forgot Password"</li>
                                        <li>Enter your email address</li>
                                        <li>Check your email for a reset link</li>
                                        <li>Follow the link and create a new password</li>
                                    </ol>
                                    If you don't receive the email, check your spam folder or contact support.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                    Are there mobile apps available?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Currently, Developer Life Platform is web-based and responsive, working great on mobile browsers. 
                                    Native mobile apps for iOS and Android are in development and will be available soon!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Support -->
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Contact Support</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted mb-4">Can't find what you're looking for? Send us a message and we'll get back to you.</p>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="supportName" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="supportName" value="{{ Auth::user()->name ?? '' }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="supportEmail" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="supportEmail" value="{{ Auth::user()->email ?? '' }}">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="supportCategory" class="form-label">Category</label>
                            <select class="form-select" id="supportCategory">
                                <option>General Question</option>
                                <option>Technical Issue</option>
                                <option>Account Problem</option>
                                <option>Feature Request</option>
                                <option>Bug Report</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="supportSubject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="supportSubject" placeholder="Brief description of your issue">
                        </div>
                        <div class="mb-3">
                            <label for="supportMessage" class="form-label">Message</label>
                            <textarea class="form-control" id="supportMessage" rows="5" placeholder="Please describe your issue in detail..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane me-2"></i>Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <!-- Quick Help -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">Quick Help</h6>
                </div>
                <div class="card-body">
                    <div class="help-item mb-3">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-book text-primary me-3"></i>
                            <div>
                                <h6 class="mb-1">Documentation</h6>
                                <small class="text-muted">Comprehensive guides and tutorials</small>
                            </div>
                        </div>
                    </div>
                    <div class="help-item mb-3">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-video text-success me-3"></i>
                            <div>
                                <h6 class="mb-1">Video Tutorials</h6>
                                <small class="text-muted">Step-by-step video guides</small>
                            </div>
                        </div>
                    </div>
                    <div class="help-item mb-3">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-users text-info me-3"></i>
                            <div>
                                <h6 class="mb-1">Community Forum</h6>
                                <small class="text-muted">Get help from other users</small>
                            </div>
                        </div>
                    </div>
                    <div class="help-item">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-life-ring text-warning me-3"></i>
                            <div>
                                <h6 class="mb-1">Live Chat</h6>
                                <small class="text-muted">Chat with support agents</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- System Status -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">System Status</h6>
                </div>
                <div class="card-body">
                    <div class="status-item d-flex align-items-center justify-content-between mb-2">
                        <span>Platform Status</span>
                        <span class="badge bg-success">Operational</span>
                    </div>
                    <div class="status-item d-flex align-items-center justify-content-between mb-2">
                        <span>DSA Practice</span>
                        <span class="badge bg-success">Operational</span>
                    </div>
                    <div class="status-item d-flex align-items-center justify-content-between mb-2">
                        <span>Learning Platform</span>
                        <span class="badge bg-success">Operational</span>
                    </div>
                    <div class="status-item d-flex align-items-center justify-content-between">
                        <span>MONITASK</span>
                        <span class="badge bg-success">Operational</span>
                    </div>
                </div>
            </div>

            <!-- Contact Info -->
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Contact Information</h6>
                </div>
                <div class="card-body">
                    <div class="contact-item mb-3">
                        <i class="fas fa-envelope text-primary me-2"></i>
                        <a href="mailto:support@developerlife.com" class="text-decoration-none">support@developerlife.com</a>
                    </div>
                    <div class="contact-item mb-3">
                        <i class="fas fa-phone text-success me-2"></i>
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div class="contact-item mb-3">
                        <i class="fas fa-clock text-info me-2"></i>
                        <span>Mon-Fri, 9 AM - 6 PM EST</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt text-warning me-2"></i>
                        <span>Remote Support Team</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
