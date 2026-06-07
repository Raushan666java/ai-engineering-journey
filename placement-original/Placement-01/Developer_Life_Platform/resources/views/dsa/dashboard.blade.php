@extends('layouts.app')

@section('title', 'DSA Dashboard - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 class="h2">🔢 DSA Practice Dashboard</h1>
                    <p class="text-muted">Master Data Structures and Algorithms</p>
                </div>
                <div>
                    <a href="{{ route('dsa.practice') }}" class="btn btn-primary">
                        <i class="fas fa-code me-1"></i> Start Practice
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Progress Overview -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card bg-primary text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-code fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->problems_solved ?? 67 }}</h4>
                            <p class="mb-0">Problems Solved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-success text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-check-circle fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->accuracy ?? 86 }}%</h4>
                            <p class="mb-0">Accuracy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-warning text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-fire fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">{{ Auth::user()->study_streak ?? 7 }}</h4>
                            <p class="mb-0">Day Streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-info text-white">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="fas fa-trophy fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-0">#{{ Auth::user()->rank ?? 12 }}</h4>
                            <p class="mb-0">Global Rank</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Problem Categories -->
    <div class="row mb-4">
        <div class="col-12">
            <h3>Problem Categories</h3>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="fas fa-sitemap text-primary me-2"></i>
                        Arrays & Strings
                    </h5>
                    <p class="card-text">Fundamental data structures and string manipulation</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-success">25/40 Solved</span>
                        <a href="#" class="btn btn-outline-primary btn-sm">Practice</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="fas fa-code-branch text-success me-2"></i>
                        Trees & Graphs
                    </h5>
                    <p class="card-text">Hierarchical and network data structures</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-warning">15/35 Solved</span>
                        <a href="#" class="btn btn-outline-primary btn-sm">Practice</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="fas fa-calculator text-warning me-2"></i>
                        Dynamic Programming
                    </h5>
                    <p class="card-text">Optimization and memoization techniques</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-danger">8/30 Solved</span>
                        <a href="#" class="btn btn-outline-primary btn-sm">Practice</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Activity -->
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Recent Problems</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Problem</th>
                                    <th>Difficulty</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Two Sum</td>
                                    <td><span class="badge bg-success">Easy</span></td>
                                    <td>Arrays</td>
                                    <td><i class="fas fa-check text-success"></i> Solved</td>
                                    <td><a href="#" class="btn btn-sm btn-outline-primary">View</a></td>
                                </tr>
                                <tr>
                                    <td>Binary Tree Inorder</td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td>Trees</td>
                                    <td><i class="fas fa-check text-success"></i> Solved</td>
                                    <td><a href="#" class="btn btn-sm btn-outline-primary">View</a></td>
                                </tr>
                                <tr>
                                    <td>Longest Palindrome</td>
                                    <td><span class="badge bg-danger">Hard</span></td>
                                    <td>Strings</td>
                                    <td><i class="fas fa-times text-danger"></i> Attempted</td>
                                    <td><a href="#" class="btn btn-sm btn-outline-primary">Retry</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-header">
                    <h6 class="mb-0">Daily Challenge</h6>
                </div>
                <div class="card-body">
                    <h6>Merge Two Sorted Lists</h6>
                    <p class="small text-muted">Merge two sorted linked lists and return it as a sorted list.</p>
                    <span class="badge bg-warning mb-2">Medium</span>
                    <div class="d-grid">
                        <a href="#" class="btn btn-primary btn-sm">Start Challenge</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Learning Path</h6>
                </div>
                <div class="card-body">
                    <div class="progress mb-2">
                        <div class="progress-bar" style="width: 65%">65%</div>
                    </div>
                    <small class="text-muted">Beginner DSA Track</small>
                    <p class="small mt-2">Next: Learn about Hash Tables</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
