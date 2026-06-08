@extends('layouts.app')

@section('title', 'DSA Practice - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 class="h2">🔢 DSA Practice</h1>
                    <p class="text-muted">Solve problems and improve your algorithmic thinking</p>
                </div>
                <div>
                    <a href="{{ route('dsa.dsa.contests.index') }}" class="btn btn-warning me-2">
                        <i class="fas fa-trophy me-1"></i> Contests
                    </a>
                    <a href="{{ route('dsa.dashboard') }}" class="btn btn-outline-secondary">
                        <i class="fas fa-chart-bar me-1"></i> Dashboard
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Filters -->
    <div class="row mb-4">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <label class="form-label">Difficulty</label>
                            <select class="form-select">
                                <option value="">All Levels</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Category</label>
                            <select class="form-select">
                                <option value="">All Categories</option>
                                <option value="arrays">Arrays</option>
                                <option value="strings">Strings</option>
                                <option value="trees">Trees</option>
                                <option value="graphs">Graphs</option>
                                <option value="dp">Dynamic Programming</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Status</label>
                            <select class="form-select">
                                <option value="">All Problems</option>
                                <option value="solved">Solved</option>
                                <option value="attempted">Attempted</option>
                                <option value="todo">To Do</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">&nbsp;</label>
                            <div class="d-flex">
                                <button class="btn btn-primary me-2">Filter</button>
                                <button class="btn btn-outline-secondary">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Problem List -->
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Problem Set</h5>
                    <div>
                        <span class="badge bg-primary">{{ 156 }} Total Problems</span>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th style="width: 50px;">Status</th>
                                    <th>Problem</th>
                                    <th>Difficulty</th>
                                    <th>Category</th>
                                    <th>Acceptance</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fas fa-check-circle text-success fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">1. Two Sum</h6>
                                            <small class="text-muted">Find two numbers that add up to target</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success">Easy</span></td>
                                    <td><span class="badge bg-light text-dark">Arrays</span></td>
                                    <td>49.2%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-check-circle text-success fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">2. Add Two Numbers</h6>
                                            <small class="text-muted">Add two numbers represented as linked lists</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td><span class="badge bg-light text-dark">Linked List</span></td>
                                    <td>35.8%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-times-circle text-danger fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">3. Longest Substring Without Repeating Characters</h6>
                                            <small class="text-muted">Find the length of the longest substring</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td><span class="badge bg-light text-dark">Strings</span></td>
                                    <td>33.0%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-warning">Retry</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-circle text-muted fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">4. Median of Two Sorted Arrays</h6>
                                            <small class="text-muted">Find median of two sorted arrays</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-danger">Hard</span></td>
                                    <td><span class="badge bg-light text-dark">Arrays</span></td>
                                    <td>34.4%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-circle text-muted fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">5. Longest Palindromic Substring</h6>
                                            <small class="text-muted">Find the longest palindromic substring</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td><span class="badge bg-light text-dark">Strings</span></td>
                                    <td>32.1%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-check-circle text-success fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">6. Zigzag Conversion</h6>
                                            <small class="text-muted">Convert string in zigzag pattern</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td><span class="badge bg-light text-dark">Strings</span></td>
                                    <td>42.3%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-circle text-muted fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">7. Reverse Integer</h6>
                                            <small class="text-muted">Reverse digits of a 32-bit signed integer</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td><span class="badge bg-light text-dark">Math</span></td>
                                    <td>26.8%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-circle text-muted fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">8. String to Integer (atoi)</h6>
                                            <small class="text-muted">Convert string to 32-bit signed integer</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning">Medium</span></td>
                                    <td><span class="badge bg-light text-dark">Strings</span></td>
                                    <td>16.6%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-check-circle text-success fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">9. Palindrome Number</h6>
                                            <small class="text-muted">Determine if an integer is a palindrome</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success">Easy</span></td>
                                    <td><span class="badge bg-light text-dark">Math</span></td>
                                    <td>52.7%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-outline-primary">Solve</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-circle text-muted fa-lg"></i>
                                    </td>
                                    <td>
                                        <div>
                                            <h6 class="mb-0">10. Regular Expression Matching</h6>
                                            <small class="text-muted">Implement regular expression matching</small>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-danger">Hard</span></td>
                                    <td><span class="badge bg-light text-dark">Dynamic Programming</span></td>
                                    <td>27.8%</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-primary">Solve</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <nav>
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item disabled">
                                <span class="page-link">Previous</span>
                            </li>
                            <li class="page-item active">
                                <span class="page-link">1</span>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
