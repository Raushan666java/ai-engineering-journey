@extends('layouts.app')

@section('content')
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow-lg">
                <div class="card-header bg-light">
                    <h4 class="mb-0">🤖 AI Tutor Chat</h4>
                </div>
                <div class="card-body" style="min-height: 350px;">
                    <div id="chat-history">
                        @forelse($chatHistory ?? [] as $chat)
                            <div class="mb-3">
                                <div class="fw-bold">{{ $chat['role'] === 'user' ? 'You' : 'AI Teacher' }}</div>
                                <div>{{ $chat['message'] }}</div>
                                <small class="text-muted">{{ $chat['timestamp'] ?? '' }}</small>
                            </div>
                        @empty
                            <div class="text-muted">No chat history yet. Start a conversation below!</div>
                        @endforelse
                    </div>
                    <form method="POST" action="{{ route('ai-teacher.chat') }}" class="mt-4">
                        @csrf
                        <div class="input-group">
                            <input type="text" name="message" class="form-control" placeholder="Type your question..." required maxlength="1000">
                            <button class="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection