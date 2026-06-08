@extends('layouts.app')

@section('title', 'Community - Developer Life Platform')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="text-center mb-5">
                <h1 class="display-4">Developer Community</h1>
                <p class="lead text-muted">Connect, learn, and grow with fellow developers</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
            <!-- Community Feed -->
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Community Feed</h5>
                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#newPostModal">
                        <i class="fas fa-plus me-1"></i> New Post
                    </button>
                </div>
                <div class="card-body">
                    <!-- Post 1 -->
                    <div class="post-item border-bottom pb-3 mb-3">
                        <div class="d-flex align-items-start">
                            <div class="avatar me-3">
                                <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                    <span class="text-white">JD</span>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center mb-2">
                                    <h6 class="mb-0 me-2">John Doe</h6>
                                    <small class="text-muted">2 hours ago</small>
                                </div>
                                <p class="mb-2">Just solved the "Longest Palindromic Substring" problem! The dynamic programming approach was tricky but satisfying once I got it working. 🎉</p>
                                <div class="post-tags mb-2">
                                    <span class="badge bg-light text-dark me-1">#DSA</span>
                                    <span class="badge bg-light text-dark me-1">#DynamicProgramming</span>
                                    <span class="badge bg-light text-dark">#Achievement</span>
                                </div>
                                <div class="post-actions">
                                    <button class="btn btn-sm btn-outline-primary me-2">
                                        <i class="fas fa-thumbs-up me-1"></i> Like (12)
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary me-2">
                                        <i class="fas fa-comment me-1"></i> Comment (3)
                                    </button>
                                    <button class="btn btn-sm btn-outline-info">
                                        <i class="fas fa-share me-1"></i> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Post 2 -->
                    <div class="post-item border-bottom pb-3 mb-3">
                        <div class="d-flex align-items-start">
                            <div class="avatar me-3">
                                <div class="bg-success rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                    <span class="text-white">AS</span>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center mb-2">
                                    <h6 class="mb-0 me-2">Alice Smith</h6>
                                    <small class="text-muted">4 hours ago</small>
                                </div>
                                <p class="mb-2">Looking for study partners for the upcoming React Advanced course. Anyone interested in forming a study group? 📚</p>
                                <div class="post-tags mb-2">
                                    <span class="badge bg-light text-dark me-1">#StudyGroup</span>
                                    <span class="badge bg-light text-dark me-1">#React</span>
                                    <span class="badge bg-light text-dark">#Learning</span>
                                </div>
                                <div class="post-actions">
                                    <button class="btn btn-sm btn-outline-primary me-2">
                                        <i class="fas fa-thumbs-up me-1"></i> Like (8)
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary me-2">
                                        <i class="fas fa-comment me-1"></i> Comment (5)
                                    </button>
                                    <button class="btn btn-sm btn-outline-info">
                                        <i class="fas fa-share me-1"></i> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Post 3 -->
                    <div class="post-item">
                        <div class="d-flex align-items-start">
                            <div class="avatar me-3">
                                <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                    <span class="text-white">MT</span>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center mb-2">
                                    <h6 class="mb-0 me-2">Mike Tech</h6>
                                    <small class="text-muted">6 hours ago</small>
                                </div>
                                <p class="mb-2">Just completed my first full-stack project using Laravel and Vue.js! It's a task management app with real-time notifications. Thanks to everyone who helped in the forums! 🚀</p>
                                <div class="post-image mb-2">
                                    <img src="https://via.placeholder.com/500x200/007bff/ffffff?text=Project+Screenshot" class="img-fluid rounded" alt="Project Screenshot">
                                </div>
                                <div class="post-tags mb-2">
                                    <span class="badge bg-light text-dark me-1">#Laravel</span>
                                    <span class="badge bg-light text-dark me-1">#VueJS</span>
                                    <span class="badge bg-light text-dark me-1">#FullStack</span>
                                    <span class="badge bg-light text-dark">#ProjectComplete</span>
                                </div>
                                <div class="post-actions">
                                    <button class="btn btn-sm btn-outline-primary me-2">
                                        <i class="fas fa-thumbs-up me-1"></i> Like (24)
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary me-2">
                                        <i class="fas fa-comment me-1"></i> Comment (7)
                                    </button>
                                    <button class="btn btn-sm btn-outline-info">
                                        <i class="fas fa-share me-1"></i> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <!-- Community Stats -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">Community Stats</h6>
                </div>
                <div class="card-body">
                    <div class="stat-item d-flex justify-content-between mb-2">
                        <span>Total Members</span>
                        <strong>2,847</strong>
                    </div>
                    <div class="stat-item d-flex justify-content-between mb-2">
                        <span>Active Today</span>
                        <strong>156</strong>
                    </div>
                    <div class="stat-item d-flex justify-content-between mb-2">
                        <span>Posts This Week</span>
                        <strong>89</strong>
                    </div>
                    <div class="stat-item d-flex justify-content-between">
                        <span>Problems Solved</span>
                        <strong>12,341</strong>
                    </div>
                </div>
            </div>

            <!-- Active Users -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">Active Members</h6>
                </div>
                <div class="card-body">
                    <div class="user-item d-flex align-items-center mb-3">
                        <div class="avatar me-3">
                            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                <span class="text-white small">SR</span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-0">Sarah Rodriguez</h6>
                            <small class="text-success">Online now</small>
                        </div>
                    </div>
                    <div class="user-item d-flex align-items-center mb-3">
                        <div class="avatar me-3">
                            <div class="bg-success rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                <span class="text-white small">DJ</span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-0">David Johnson</h6>
                            <small class="text-success">Online now</small>
                        </div>
                    </div>
                    <div class="user-item d-flex align-items-center mb-3">
                        <div class="avatar me-3">
                            <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                <span class="text-white small">EB</span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-0">Emily Brown</h6>
                            <small class="text-muted">2 min ago</small>
                        </div>
                    </div>
                    <div class="user-item d-flex align-items-center">
                        <div class="avatar me-3">
                            <div class="bg-info rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                                <span class="text-white small">CW</span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-0">Chris Wilson</h6>
                            <small class="text-muted">5 min ago</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Popular Topics -->
            <div class="card mb-4">
                <div class="card-header">
                    <h6 class="mb-0">Trending Topics</h6>
                </div>
                <div class="card-body">
                    <div class="topic-item mb-2">
                        <span class="badge bg-primary me-2">#React</span>
                        <small class="text-muted">127 posts</small>
                    </div>
                    <div class="topic-item mb-2">
                        <span class="badge bg-success me-2">#DSA</span>
                        <small class="text-muted">95 posts</small>
                    </div>
                    <div class="topic-item mb-2">
                        <span class="badge bg-warning me-2">#Laravel</span>
                        <small class="text-muted">73 posts</small>
                    </div>
                    <div class="topic-item mb-2">
                        <span class="badge bg-info me-2">#JavaScript</span>
                        <small class="text-muted">68 posts</small>
                    </div>
                    <div class="topic-item">
                        <span class="badge bg-secondary me-2">#StudyGroup</span>
                        <small class="text-muted">42 posts</small>
                    </div>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="card">
                <div class="card-header">
                    <h6 class="mb-0">Quick Links</h6>
                </div>
                <div class="card-body">
                    <div class="d-grid gap-2">
                        <a href="#" class="btn btn-outline-primary btn-sm">
                            <i class="fas fa-users me-2"></i>Find Study Groups
                        </a>
                        <a href="#" class="btn btn-outline-success btn-sm">
                            <i class="fas fa-trophy me-2"></i>Leaderboard
                        </a>
                        <a href="#" class="btn btn-outline-info btn-sm">
                            <i class="fas fa-calendar me-2"></i>Events
                        </a>
                        <a href="#" class="btn btn-outline-warning btn-sm">
                            <i class="fas fa-question me-2"></i>Q&A Forum
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- New Post Modal -->
<div class="modal fade" id="newPostModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create New Post</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="postContent" class="form-label">What's on your mind?</label>
                        <textarea class="form-control" id="postContent" rows="4" placeholder="Share your thoughts, achievements, or ask for help..."></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="postTags" class="form-label">Tags</label>
                        <input type="text" class="form-control" id="postTags" placeholder="#javascript #react #help">
                        <small class="form-text text-muted">Add relevant tags to help others find your post</small>
                    </div>
                    <div class="mb-3">
                        <label for="postImage" class="form-label">Attach Image (optional)</label>
                        <input type="file" class="form-control" id="postImage" accept="image/*">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Post</button>
            </div>
        </div>
    </div>
</div>
@endsection
