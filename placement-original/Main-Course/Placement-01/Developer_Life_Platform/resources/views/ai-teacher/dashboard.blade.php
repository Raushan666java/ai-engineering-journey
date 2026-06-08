@extends('layouts.app')

@section('title', 'AI Teacher - Developer Life Platform')

@section('content')
<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 col-lg-2 sidebar">
            <div class="position-sticky pt-3">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>AI Teacher</span>
                </h6>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ route('ai-teacher.dashboard') }}">
                            <i class="fas fa-robot"></i> AI Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('ai-teacher.chat') }}">
                            <i class="fas fa-comments"></i> AI Chat
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('ai-teacher.recommendations') }}">
                            <i class="fas fa-lightbulb"></i> Recommendations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('ai-teacher.assessments') }}">
                            <i class="fas fa-clipboard-check"></i> Assessments
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('ai-teacher.learning-paths') }}">
                            <i class="fas fa-route"></i> Learning Paths
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Main content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">
                    <i class="fas fa-robot text-primary"></i> AI Teacher Dashboard
                </h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="refreshRecommendations()">
                            <i class="fas fa-sync-alt"></i> Refresh
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="exportProgress()">
                            <i class="fas fa-download"></i> Export
                        </button>
                    </div>
                    <button type="button" class="btn btn-sm btn-primary" onclick="startAIChat()">
                        <i class="fas fa-comments"></i> Chat with AI
                    </button>
                </div>
            </div>

            <!-- AI Teacher Overview Cards -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        AI Interactions
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $stats['total_interactions'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Recommendations Followed
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ $stats['recommendations_followed'] ?? 0 }}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-check-circle fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Learning Accuracy
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format($stats['learning_accuracy'] ?? 0, 1) }}%</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-bullseye fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        AI Study Hours
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format($stats['ai_study_hours'] ?? 0, 1) }}h</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-clock fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI Recommendations Section -->
            <div class="row mb-4">
                <div class="col-lg-8">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Personalized AI Recommendations</h6>
                            <button class="btn btn-sm btn-primary" onclick="getNewRecommendations()">
                                <i class="fas fa-magic"></i> Generate New
                            </button>
                        </div>
                        <div class="card-body">
                            <div id="aiRecommendations">
                                <div class="text-center py-4">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading AI recommendations...</span>
                                    </div>
                                    <p class="mt-2 text-muted">AI is analyzing your learning patterns...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Learning Progress</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span class="small font-weight-bold">DSA Progress</span>
                                    <span class="small font-weight-bold">{{ $progress['dsa'] ?? 0 }}%</span>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: {{ $progress['dsa'] ?? 0 }}%"></div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span class="small font-weight-bold">Web Development</span>
                                    <span class="small font-weight-bold">{{ $progress['web_dev'] ?? 0 }}%</span>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: {{ $progress['web_dev'] ?? 0 }}%"></div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span class="small font-weight-bold">AI/ML</span>
                                    <span class="small font-weight-bold">{{ $progress['ai_ml'] ?? 0 }}%</span>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: {{ $progress['ai_ml'] ?? 0 }}%"></div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span class="small font-weight-bold">System Design</span>
                                    <span class="small font-weight-bold">{{ $progress['system_design'] ?? 0 }}%</span>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: {{ $progress['system_design'] ?? 0 }}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI Chat Interface -->
            <div class="row mb-4">
                <div class="col-12">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Quick AI Chat</h6>
                        </div>
                        <div class="card-body">
                            <div id="chatContainer" class="chat-container mb-3" style="height: 300px; overflow-y: auto; border: 1px solid #e3e6f0; border-radius: 0.35rem; padding: 1rem;">
                                <div class="text-center text-muted py-4">
                                    <i class="fas fa-robot fa-3x mb-3"></i>
                                    <p>Start a conversation with your AI teacher!</p>
                                </div>
                            </div>
                            <div class="input-group">
                                <input type="text" id="chatInput" class="form-control" placeholder="Ask your AI teacher anything..." onkeypress="handleChatKeyPress(event)">
                                <button class="btn btn-primary" type="button" onclick="sendMessage()">
                                    <i class="fas fa-paper-plane"></i> Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Learning Analytics -->
            <div class="row mb-4">
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">AI Learning Analytics</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="learningAnalyticsChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Recommendation Success Rate</h6>
                        </div>
                        <div class="card-body">
                            <canvas id="recommendationChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent AI Activities -->
            <div class="row">
                <div class="col-12">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Recent AI Activities</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Activity</th>
                                            <th>Type</th>
                                            <th>Result</th>
                                            <th>Time</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if(isset($recentActivities) && count($recentActivities) > 0)
                                            @foreach($recentActivities as $activity)
                                            <tr>
                                                <td>{{ $activity->description }}</td>
                                                <td>
                                                    <span class="badge bg-{{ $activity->type === 'recommendation' ? 'primary' : ($activity->type === 'assessment' ? 'success' : 'info') }}">
                                                        {{ ucfirst($activity->type) }}
                                                    </span>
                                                </td>
                                                <td>{{ $activity->result }}</td>
                                                <td>{{ \Carbon\Carbon::parse($activity->created_at)->diffForHumans() }}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-outline-primary" onclick="viewActivity({{ $activity->id }})">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            @endforeach
                                        @else
                                            <tr>
                                                <td colspan="5" class="text-center text-muted">
                                                    No recent AI activities. Start interacting with your AI teacher!
                                                </td>
                                            </tr>
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
let chatHistory = [];

$(document).ready(function() {
    // Initialize charts
    initializeCharts();
    
    // Load initial recommendations
    loadRecommendations();
    
    // Initialize chat
    initializeChat();
});

function initializeCharts() {
    // Learning Analytics Chart
    const ctx1 = document.getElementById('learningAnalyticsChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Learning Efficiency',
                data: [65, 75, 80, 85],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Recommendation Success Chart
    const ctx2 = document.getElementById('recommendationChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Successful', 'Partially Successful', 'Not Followed'],
            datasets: [{
                data: [70, 20, 10],
                backgroundColor: [
                    '#1cc88a',
                    '#f6c23e',
                    '#e74a3b'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function loadRecommendations() {
    fetch('{{ route("ai-teacher.get-recommendations") }}')
        .then(response => response.json())
        .then(data => {
            displayRecommendations(data.recommendations);
        })
        .catch(error => {
            console.error('Error loading recommendations:', error);
            document.getElementById('aiRecommendations').innerHTML = 
                '<p class="text-danger">Failed to load recommendations. Please try again.</p>';
        });
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('aiRecommendations');
    container.innerHTML = '';
    
    if (recommendations && recommendations.length > 0) {
        recommendations.forEach((rec, index) => {
            const recElement = document.createElement('div');
            recElement.className = 'recommendation-card mb-3 p-3 border rounded';
            recElement.innerHTML = `
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <h6 class="fw-bold mb-2">
                            <i class="fas fa-lightbulb text-warning me-2"></i>
                            ${rec.title}
                        </h6>
                        <p class="mb-2 text-muted">${rec.description}</p>
                        <div class="d-flex align-items-center gap-3">
                            <small class="text-primary">
                                <i class="fas fa-flag"></i> Priority: ${rec.priority}
                            </small>
                            <small class="text-info">
                                <i class="fas fa-clock"></i> Est. Time: ${rec.estimated_time || 'N/A'}
                            </small>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                        <button class="btn btn-sm btn-success me-2" onclick="acceptRecommendation(${index})">
                            <i class="fas fa-check"></i> Accept
                        </button>
                        <button class="btn btn-sm btn-outline-secondary" onclick="dismissRecommendation(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(recElement);
        });
    } else {
        container.innerHTML = '<p class="text-muted">No recommendations available at the moment.</p>';
    }
}

function getNewRecommendations() {
    const container = document.getElementById('aiRecommendations');
    container.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Generating new recommendations...</span>
            </div>
            <p class="mt-2 text-muted">AI is analyzing your latest progress...</p>
        </div>
    `;
    
    fetch('{{ route("ai-teacher.generate-recommendations") }}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        }
    })
    .then(response => response.json())
    .then(data => {
        displayRecommendations(data.recommendations);
    })
    .catch(error => {
        console.error('Error generating recommendations:', error);
        container.innerHTML = '<p class="text-danger">Failed to generate recommendations. Please try again.</p>';
    });
}

function acceptRecommendation(index) {
    // Handle recommendation acceptance
    console.log('Accepting recommendation:', index);
    // Send to backend
}

function dismissRecommendation(index) {
    // Handle recommendation dismissal
    console.log('Dismissing recommendation:', index);
    // Remove from UI and send to backend
}

function initializeChat() {
    // Initialize chat interface
    const chatContainer = document.getElementById('chatContainer');
    
    // Add welcome message
    addChatMessage('ai', 'Hello! I\'m your AI teacher. How can I help you today?');
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        addChatMessage('user', message);
        input.value = '';
        
        // Show typing indicator
        addTypingIndicator();
        
        // Send to AI backend
        fetch('{{ route("ai-teacher.chat") }}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            removeTypingIndicator();
            addChatMessage('ai', data.response);
        })
        .catch(error => {
            removeTypingIndicator();
            addChatMessage('ai', 'Sorry, I encountered an error. Please try again.');
            console.error('Chat error:', error);
        });
    }
}

function addChatMessage(sender, message) {
    const chatContainer = document.getElementById('chatContainer');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message mb-3 ${sender}`;
    
    messageElement.innerHTML = `
        <div class="d-flex ${sender === 'user' ? 'justify-content-end' : ''}">
            <div class="message-bubble p-3 rounded ${sender === 'user' ? 'bg-primary text-white' : 'bg-light'}">
                ${sender === 'ai' ? '<i class="fas fa-robot me-2"></i>' : ''}
                ${message}
            </div>
        </div>
    `;
    
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addTypingIndicator() {
    const chatContainer = document.getElementById('chatContainer');
    const typingElement = document.createElement('div');
    typingElement.id = 'typingIndicator';
    typingElement.className = 'chat-message mb-3 ai';
    typingElement.innerHTML = `
        <div class="d-flex">
            <div class="message-bubble p-3 rounded bg-light">
                <i class="fas fa-robot me-2"></i>
                <span class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </div>
    `;
    
    chatContainer.appendChild(typingElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function startAIChat() {
    // Focus on chat input
    document.getElementById('chatInput').focus();
}

function refreshRecommendations() {
    loadRecommendations();
}

function exportProgress() {
    // Export AI learning progress
    window.open('{{ route("ai-teacher.export") }}', '_blank');
}

function viewActivity(activityId) {
    // View specific AI activity details
    console.log('Viewing activity:', activityId);
}
</script>
@endsection

@section('styles')
<style>
.sidebar {
    background-color: #f8f9fc;
    border-right: 1px solid #e3e6f0;
    min-height: 100vh;
}

.sidebar .nav-link {
    color: #5a5c69;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
}

.sidebar .nav-link:hover {
    color: #5a5c69;
    background-color: #eaecf4;
}

.sidebar .nav-link.active {
    color: #3a3b45;
    background-color: #e2e6ea;
}

.sidebar .nav-link i {
    margin-right: 0.5rem;
}

.recommendation-card {
    background: linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%);
    border: 1px solid #e3e6f0;
    transition: all 0.3s ease;
}

.recommendation-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.chat-container {
    background: #f8f9fc;
}

.message-bubble {
    max-width: 80%;
    word-wrap: break-word;
}

.typing-dots {
    display: inline-block;
}

.typing-dots span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #999;
    margin: 0 1px;
    animation: typing 1.5s infinite;
}

.typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {
    0%, 60%, 100% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(-10px);
    }
}

.border-left-primary {
    border-left: 0.25rem solid #4e73df !important;
}

.border-left-success {
    border-left: 0.25rem solid #1cc88a !important;
}

.border-left-info {
    border-left: 0.25rem solid #36b9cc !important;
}

.border-left-warning {
    border-left: 0.25rem solid #f6c23e !important;
}

.text-gray-800 {
    color: #5a5c69 !important;
}

.text-gray-300 {
    color: #dddfeb !important;
}

.progress-sm {
    height: 0.5rem;
}

#learningAnalyticsChart, #recommendationChart {
    height: 250px !important;
}
</style>
@endsection
