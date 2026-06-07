{{-- filepath: c:\xampp\htdocs\Placement\Placement-01\Developer_Life_Platform\resources\views\ai-teacher\chat.blade.php --}}

@extends('layouts.app')
@section('title', 'AI Tutor Chat')

@section('content')
<div class="container-fluid h-100">
    <div class="row h-100">
        <!-- Chat Sidebar -->
        <div class="col-md-3 bg-light border-end p-0">
            <div class="chat-sidebar h-100">
                <!-- Sidebar Header -->
                <div class="sidebar-header bg-primary text-white p-3">
                    <div class="d-flex align-items-center">
                        <div class="ai-avatar me-3">
                            <i class="fas fa-robot fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-0">AI Tutor</h5>
                            <small class="opacity-75">
                                <i class="fas fa-circle text-success me-1" style="font-size: 8px;"></i>
                                Online & Ready to Help
                            </small>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="quick-actions p-3 border-bottom">
                    <h6 class="text-muted mb-2">Quick Actions</h6>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary btn-sm" onclick="sendQuickMessage('Explain arrays in simple terms')">
                            <i class="fas fa-question-circle me-1"></i>
                            Ask about Arrays
                        </button>
                        <button class="btn btn-outline-info btn-sm" onclick="sendQuickMessage('Give me a coding challenge')">
                            <i class="fas fa-code me-1"></i>
                            Get Practice Problem
                        </button>
                        <button class="btn btn-outline-success btn-sm" onclick="sendQuickMessage('Review my learning progress')">
                            <i class="fas fa-chart-line me-1"></i>
                            Progress Review
                        </button>
                        <button class="btn btn-outline-warning btn-sm" onclick="sendQuickMessage('What should I learn next?')">
                            <i class="fas fa-route me-1"></i>
                            Learning Path
                        </button>
                    </div>
                </div>

                <!-- Suggested Topics -->
                <div class="suggested-topics p-3 border-bottom">
                    <h6 class="text-muted mb-2">Suggested Topics</h6>
                    <div class="topic-list">
                        <div class="topic-item mb-2" onclick="sendQuickMessage('Explain binary search algorithm')">
                            <i class="fas fa-search text-primary me-2"></i>
                            <small>Binary Search</small>
                        </div>
                        <div class="topic-item mb-2" onclick="sendQuickMessage('How do linked lists work?')">
                            <i class="fas fa-link text-info me-2"></i>
                            <small>Linked Lists</small>
                        </div>
                        <div class="topic-item mb-2" onclick="sendQuickMessage('Explain recursion with examples')">
                            <i class="fas fa-repeat text-success me-2"></i>
                            <small>Recursion</small>
                        </div>
                        <div class="topic-item mb-2" onclick="sendQuickMessage('Time complexity analysis')">
                            <i class="fas fa-clock text-warning me-2"></i>
                            <small>Big O Notation</small>
                        </div>
                        <div class="topic-item mb-2" onclick="sendQuickMessage('Dynamic programming basics')">
                            <i class="fas fa-layer-group text-danger me-2"></i>
                            <small>Dynamic Programming</small>
                        </div>
                    </div>
                </div>

                <!-- Learning Stats -->
                <div class="learning-stats p-3">
                    <h6 class="text-muted mb-2">Today's Progress</h6>
                    <div class="stat-item d-flex justify-content-between mb-2">
                        <small>Questions Asked:</small>
                        <span class="badge bg-primary" id="questionsCount">0</span>
                    </div>
                    <div class="stat-item d-flex justify-content-between mb-2">
                        <small>Topics Explored:</small>
                        <span class="badge bg-info" id="topicsCount">0</span>
                    </div>
                    <div class="stat-item d-flex justify-content-between">
                        <small>Study Time:</small>
                        <span class="badge bg-success" id="studyTime">0 min</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Chat Area -->
        <div class="col-md-9 p-0 d-flex flex-column">
            <!-- Chat Header -->
            <div class="chat-header bg-white border-bottom p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="mb-0">
                            <i class="fas fa-comments text-primary me-2"></i>
                            AI Tutor Chat
                        </h4>
                        <small class="text-muted">Get instant help with your programming questions</small>
                    </div>
                    <div class="chat-actions">
                        <button class="btn btn-outline-secondary btn-sm me-2" onclick="clearChat()">
                            <i class="fas fa-trash me-1"></i>
                            Clear Chat
                        </button>
                        <button class="btn btn-outline-info btn-sm me-2" onclick="exportChat()">
                            <i class="fas fa-download me-1"></i>
                            Export
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="toggleSidebar()">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Chat Messages Container -->
            <div class="chat-messages flex-grow-1 p-3" id="chatMessages">
                <!-- Welcome Message -->
                <div class="message ai-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-bubble">
                            <div class="message-header">
                                <strong>AI Tutor</strong>
                                <small class="text-muted ms-2">{{ now()->format('H:i') }}</small>
                            </div>
                            <div class="message-text">
                                <p>👋 Hello! I'm your AI programming tutor. I'm here to help you learn and understand programming concepts.</p>
                                <p>You can ask me about:</p>
                                <ul>
                                    <li>📚 Programming concepts and algorithms</li>
                                    <li>🔍 Code explanations and debugging</li>
                                    <li>🎯 Learning recommendations</li>
                                    <li>📈 Study strategies and best practices</li>
                                </ul>
                                <p><strong>What would you like to learn today?</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Loading Message Template (Hidden) -->
                <div class="message ai-message d-none" id="loadingMessage">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-bubble">
                            <div class="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chat Input Area -->
            <div class="chat-input bg-white border-top p-3">
                <form id="chatForm" class="d-flex align-items-end">
                    <div class="flex-grow-1 me-3">
                        <div class="input-group">
                            <textarea 
                                id="messageInput" 
                                class="form-control" 
                                placeholder="Ask me anything about programming..."
                                rows="1"
                                style="resize: none; min-height: 40px; max-height: 120px;"
                            ></textarea>
                            <button type="button" class="btn btn-outline-secondary" onclick="toggleVoiceInput()">
                                <i class="fas fa-microphone" id="micIcon"></i>
                            </button>
                        </div>
                        <small class="text-muted">Press Enter to send, Shift+Enter for new line</small>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary" id="sendButton">
                            <i class="fas fa-paper-plane me-1"></i>
                            Send
                        </button>
                    </div>
                </form>

                <!-- Quick Response Buttons -->
                <div class="quick-responses mt-2" id="quickResponses" style="display: none;">
                    <small class="text-muted">Quick responses:</small>
                    <div class="mt-1">
                        <button class="btn btn-outline-primary btn-sm me-1 mb-1" onclick="sendQuickMessage('Can you explain that in simpler terms?')">
                            Explain Simply
                        </button>
                        <button class="btn btn-outline-info btn-sm me-1 mb-1" onclick="sendQuickMessage('Can you give me an example?')">
                            Give Example
                        </button>
                        <button class="btn btn-outline-success btn-sm me-1 mb-1" onclick="sendQuickMessage('What are the next steps?')">
                            Next Steps
                        </button>
                        <button class="btn btn-outline-warning btn-sm me-1 mb-1" onclick="sendQuickMessage('I need more practice on this topic')">
                            More Practice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Code Example Modal -->
<div class="modal fade" id="codeExampleModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-code me-2"></i>
                    Code Example
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <pre><code id="codeContent" class="language-javascript"></code></pre>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="copyCode()">
                    <i class="fas fa-copy me-1"></i>
                    Copy Code
                </button>
            </div>
        </div>
    </div>
</div>
@endsection

@push('styles')
<style>
/* Chat Layout */
.container-fluid {
    height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
}

/* Sidebar Styles */
.chat-sidebar {
    background: #f8f9fa;
    overflow-y: auto;
}

.ai-avatar {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.topic-item {
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background-color 0.2s;
}

.topic-item:hover {
    background-color: rgba(0, 123, 255, 0.1);
}

/* Chat Messages */
.chat-messages {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    overflow-y: auto;
    height: 100%;
}

.message {
    display: flex;
    margin-bottom: 20px;
    animation: fadeInUp 0.3s ease;
}

.message-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-right: 12px;
    flex-shrink: 0;
}

.ai-message .message-avatar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.user-message {
    flex-direction: row-reverse;
}

.user-message .message-avatar {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    margin-right: 0;
    margin-left: 12px;
}

.message-content {
    flex: 1;
    max-width: 70%;
}

.user-message .message-content {
    text-align: right;
}

.message-bubble {
    background: white;
    border-radius: 18px;
    padding: 12px 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;
}

.user-message .message-bubble {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.message-header {
    margin-bottom: 8px;
}

.message-text {
    line-height: 1.5;
}

.message-text ul {
    margin: 8px 0;
    padding-left: 20px;
}

.message-text p:last-child {
    margin-bottom: 0;
}

/* Typing Indicator */
.typing-indicator {
    display: flex;
    align-items: center;
}

.typing-indicator span {
    height: 8px;
    width: 8px;
    background: #999;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
    0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
    40% { transform: scale(1); opacity: 1; }
}

/* Chat Input */
.chat-input {
    border-top: 2px solid #e9ecef;
}

#messageInput {
    border: 2px solid #e9ecef;
    border-radius: 20px;
    padding: 12px 16px;
    transition: border-color 0.2s;
}

#messageInput:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Code Blocks */
.message-text pre {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 12px;
    margin: 8px 0;
    overflow-x: auto;
    border-left: 4px solid #007bff;
}

.message-text code {
    background: #f8f9fa;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
}

/* Responsive Design */
@media (max-width: 768px) {
    .col-md-3 {
        position: fixed;
        left: -100%;
        transition: left 0.3s ease;
        z-index: 1000;
        height: 100%;
    }
    
    .col-md-3.show {
        left: 0;
    }
    
    .col-md-9 {
        width: 100%;
    }
    
    .message-content {
        max-width: 85%;
    }
}

/* Quick Response Buttons */
.quick-responses .btn {
    font-size: 0.8rem;
}

/* Scrollbar Styling */
.chat-messages::-webkit-scrollbar {
    width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.chat-messages::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>
@endpush

@push('scripts')
<script>
let questionCount = 0;
let topicCount = 0;
let startTime = Date.now();
let messageHistory = [];

document.addEventListener('DOMContentLoaded', function() {
    // Auto-resize textarea
    const messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Handle Enter key
    messageInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Update study time every minute
    setInterval(updateStudyTime, 60000);

    // Auto-scroll to bottom
    scrollToBottom();
});

// Handle form submission
document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    sendMessage();
});

// Send message function
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input and reset height
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Send to AI
    sendToAI(message);
    
    // Update stats
    questionCount++;
    updateStats();
}

// Send quick message
function sendQuickMessage(message) {
    document.getElementById('messageInput').value = message;
    sendMessage();
}

// Add message to chat
function addMessage(text, sender, isHTML = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const avatar = sender === 'user' ? 'fa-user' : 'fa-robot';
    const senderName = sender === 'user' ? 'You' : 'AI Tutor';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas ${avatar}"></i>
        </div>
        <div class="message-content">
            <div class="message-bubble">
                <div class="message-header">
                    <strong>${senderName}</strong>
                    <small class="text-muted ms-2">${timestamp}</small>
                </div>
                <div class="message-text">
                    ${isHTML ? text : escapeHtml(text)}
                </div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
    
    // Store in history
    messageHistory.push({
        text: text,
        sender: sender,
        timestamp: timestamp
    });
    
    // Show quick responses after AI message
    if (sender === 'ai') {
        showQuickResponses();
    }
}

// Show typing indicator
function showTypingIndicator() {
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.classList.remove('d-none');
    scrollToBottom();
}

// Hide typing indicator
function hideTypingIndicator() {
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.classList.add('d-none');
}

// Send message to AI
function sendToAI(message) {
    // Rate limiting check
    const now = Date.now();
    const lastRequest = localStorage.getItem('lastAIRequest');
    if (lastRequest && (now - parseInt(lastRequest)) < 2000) {
        addMessage('Please wait a moment before sending another message.', 'ai');
        return;
    }
    localStorage.setItem('lastAIRequest', now.toString());
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    fetch('{{ route("ai-teacher.process-chat") }}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({
            message: message.substring(0, 1000), // Limit message length
            context: getRecentContext()
        }),
        signal: controller.signal
    })
    .then(response => {
        clearTimeout(timeoutId);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    })
    .then(data => {
        hideTypingIndicator();
        
        if (data.success) {
            const aiResponse = formatAIResponse(data.response);
            addMessage(aiResponse, 'ai', true);
            
            if (data.response.relevant_concepts) {
                topicCount += Math.min(data.response.relevant_concepts.length, 5);
                updateStats();
            }
        } else {
            addMessage('Sorry, I encountered an error. Please try again.', 'ai');
        }
    })
    .catch(error => {
        clearTimeout(timeoutId);
        hideTypingIndicator();
        if (error.name === 'AbortError') {
            addMessage('Request timed out. Please try again.', 'ai');
        } else {
            addMessage('Connection error. Please try again.', 'ai');
        }
        console.error('Chat error:', error);
    });
}

// Format AI response with rich content
function formatAIResponse(response) {
    let html = `<p>${escapeHtml(response.text)}</p>`;
    
    if (response.learning_guidance) {
        html += `
            <div class="alert alert-info mt-3 mb-3">
                <strong><i class="fas fa-lightbulb me-1"></i> Learning Tip:</strong><br>
                ${escapeHtml(response.learning_guidance)}
            </div>
        `;
    }
    
    if (response.suggested_actions && response.suggested_actions.length > 0) {
        html += `
            <div class="mt-3">
                <strong>Suggested Actions:</strong>
                <ul class="mt-2">
                    ${response.suggested_actions.map(action => `<li>${escapeHtml(action)}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (response.relevant_concepts && response.relevant_concepts.length > 0) {
        html += `
            <div class="mt-3">
                <strong>Related Concepts:</strong>
                <div class="mt-2">
                    ${response.relevant_concepts.map(concept => 
                        `<span class="badge bg-primary me-1 mb-1">${escapeHtml(concept)}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    return html;
}

// Get recent conversation context
function getRecentContext() {
    return messageHistory.slice(-6).map(msg => `${msg.sender}: ${msg.text}`).join('\n');
}

// Update statistics
function updateStats() {
    document.getElementById('questionsCount').textContent = questionCount;
    document.getElementById('topicsCount').textContent = topicCount;
}

// Update study time
function updateStudyTime() {
    const minutes = Math.floor((Date.now() - startTime) / 60000);
    document.getElementById('studyTime').textContent = `${minutes} min`;
}

// Show quick responses
function showQuickResponses() {
    const quickResponses = document.getElementById('quickResponses');
    quickResponses.style.display = 'block';
    
    // Hide after 10 seconds
    setTimeout(() => {
        quickResponses.style.display = 'none';
    }, 10000);
}

// Scroll to bottom of chat
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Clear chat
function clearChat() {
    if (confirm('Are you sure you want to clear the chat history?')) {
        const chatMessages = document.getElementById('chatMessages');
        // Keep only the welcome message
        const welcomeMessage = chatMessages.querySelector('.ai-message');
        chatMessages.innerHTML = '';
        chatMessages.appendChild(welcomeMessage);
        
        // Reset stats
        questionCount = 0;
        topicCount = 0;
        messageHistory = [];
        updateStats();
        
        // Hide quick responses
        document.getElementById('quickResponses').style.display = 'none';
    }
}

// Export chat
function exportChat() {
    const chatContent = messageHistory.map(msg => 
        `[${msg.timestamp}] ${msg.sender === 'user' ? 'You' : 'AI Tutor'}: ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-tutor-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.col-md-3');
    sidebar.classList.toggle('show');
}

// Voice input (placeholder for future implementation)
function toggleVoiceInput() {
    const micIcon = document.getElementById('micIcon');
    const messageInput = document.getElementById('messageInput');
    
    // Toggle mic icon
    micIcon.classList.toggle('fa-microphone');
    micIcon.classList.toggle('fa-microphone-slash');
    micIcon.classList.toggle('text-danger');
    
    // Placeholder for voice recognition
    if ('webkitSpeechRecognition' in window) {
        // Implement speech recognition here
        alert('Voice input will be implemented in a future update!');
    } else {
        alert('Voice input is not supported in your browser.');
    }
}

// Copy code function
function copyCode() {
    const codeContent = document.getElementById('codeContent').textContent;
    navigator.clipboard.writeText(codeContent).then(() => {
        alert('Code copied to clipboard!');
    });
}

// Escape HTML for security
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Handle code examples in messages
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'CODE' && e.target.textContent.length > 50) {
        document.getElementById('codeContent').textContent = e.target.textContent;
        const modal = new bootstrap.Modal(document.getElementById('codeExampleModal'));
        modal.show();
    }
});
</script>
@endpush