{{-- filepath: c:\xampp\htdocs\Placement\Placement-01\Developer_Life_Platform\resources\views\ai-teacher\assessment.blade.php --}}
@extends('layouts.app')

@section('title', 'AI Learning Assessment')

@section('content')
<div class="container-fluid py-4">
    <div class="row mb-4">
        <div class="col">
            <h1 class="h3 text-primary">
                <i class="fas fa-brain me-2"></i>AI Learning Assessment
            </h1>
            <p class="text-muted">Help us understand your learning style and skill level</p>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Personalized Learning Assessment</h5>
                    <p class="text-muted mb-0">This assessment will help create your personalized learning profile</p>
                </div>
                <div class="card-body">
                    <form id="assessment-form">
                        @csrf
                        <div id="assessment-questions">
                            @foreach($assessmentQuestions as $index => $question)
                                <div class="question-container mb-4 p-3 border rounded" data-question="{{ $question['id'] }}">
                                    <h6 class="fw-bold">{{ $index + 1 }}. {{ $question['question'] }}</h6>
                                    
                                    @if($question['type'] === 'multiple_choice')
                                        <div class="mt-3">
                                            @foreach($question['options'] as $option)
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" type="radio" 
                                                           name="answers[{{ $question['id'] }}]" 
                                                           value="{{ $option }}" 
                                                           id="q{{ $question['id'] }}_{{ $loop->index }}">
                                                    <label class="form-check-label" for="q{{ $question['id'] }}_{{ $loop->index }}">
                                                        {{ $option }}
                                                    </label>
                                                </div>
                                            @endforeach
                                        @endif
                                        
                                        @if(in_array($question['type'], ['learning_style', 'motivation']))
                                            <div class="mt-3">
                                                @foreach($question['options'] as $option)
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input" type="radio" 
                                                               name="answers[{{ $question['id'] }}]" 
                                                               value="{{ $option }}" 
                                                               id="q{{ $question['id'] }}_{{ $loop->index }}">
                                                        <label class="form-check-label" for="q{{ $question['id'] }}_{{ $loop->index }}">
                                                            {{ $option }}
                                                        </label>
                                                    </div>
                                                @endforeach
                                            </div>
                                        @endif
                                        
                                        @if(isset($question['topic']))
                                            <small class="text-muted">Topic: {{ $question['topic'] }}</small>
                                        @endif
                                        @if(isset($question['difficulty']))
                                            <span class="badge bg-{{ $question['difficulty'] === 'easy' ? 'success' : ($question['difficulty'] === 'medium' ? 'warning' : 'danger') }} ms-2">
                                                {{ ucfirst($question['difficulty']) }}
                                            </span>
                                        @endif
                                </div>
                            @endforeach
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center mt-4">
                            <div>
                                <small class="text-muted">Time taken: <span id="timer">00:00</span></small>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-check me-2"></i>Complete Assessment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Results Modal -->
<div class="modal fade" id="resultsModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Assessment Results</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body" id="assessment-results">
                <!-- Results will be loaded here -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="{{ route('ai-teacher.index') }}" class="btn btn-primary">Go to Dashboard</a>
            </div>
        </div>
    </div>
</div>

@push('scripts')
<script>
let startTime = Date.now();
let timerInterval;

document.addEventListener('DOMContentLoaded', function() {
    startTimer();
    
    document.getElementById('assessment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitAssessment();
    });
});

function startTimer() {
    timerInterval = setInterval(function() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// function submitAssessment() {
//     const form = document.getElementById('assessment-form');
//     const formData = new FormData(form);
//     const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
//     clearInterval(timerInterval);
    
//     const answers = {};
//     formData.getAll('answers').forEach((value, index) => {
//         // This is a simplified approach - you might need to adjust based on your form structure
//         const questionId = index + 1;
//         answers[questionId] = value;
//     });
    
//     fetch('{{ route("ai-teacher.submit-assessment") }}', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRF-TOKEN': '{{ csrf_token() }}'
//         },
//         body: JSON.stringify({
//             answers: answers,
//             time_taken: timeTaken
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             displayResults(data.results, data.learning_profile, data.recommendations);
//         } else {
//             alert('Error submitting assessment. Please try again.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Error submitting assessment. Please try again.');
//     });
// }


function submitAssessment() {
    const form = document.getElementById('assessment-form');
    const formData = new FormData(form);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
    clearInterval(timerInterval);
    
    // Fix: Properly collect answers from form
    const answers = {};
    const radioInputs = form.querySelectorAll('input[type="radio"]:checked');
    
    radioInputs.forEach(input => {
        // Extract question ID from input name: answers[1] -> 1
        const match = input.name.match(/answers\[(\d+)\]/);
        if (match) {
            const questionId = match[1];
            answers[questionId] = input.value;
        }
    });
    
    console.log('Collected answers:', answers); // Debug log
    
    fetch('{{ route("ai-teacher.submit-assessment") }}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}',
            'Accept': 'application/json' // Add this to ensure JSON response
        },
        body: JSON.stringify({
            answers: answers,
            time_taken: timeTaken
        })
    })
    .then(response => {
        console.log('Response status:', response.status); // Debug log
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // First get as text to see what we're receiving
    })
    .then(text => {
        console.log('Response text:', text); // Debug log
        try {
            const data = JSON.parse(text);
            if (data.success) {
                displayResults(data.results, data.learning_profile, data.recommendations);
            } else {
                alert('Error submitting assessment: ' + (data.message || 'Unknown error'));
            }
        } catch (e) {
            console.error('JSON parse error:', e);
            console.error('Received text:', text);
            alert('Server returned invalid response. Please check the console for details.');
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        alert('Error submitting assessment. Please try again.');
    });
}

function displayResults(results, profile, recommendations) {
    const resultsHtml = `
        <div class="row">
            <div class="col-md-6">
                <h6>Assessment Score</h6>
                <div class="d-flex align-items-center mb-3">
                    <div class="progress flex-grow-1 me-3" style="height: 20px;">
                        <div class="progress-bar" style="width: ${results.percentage}%"></div>
                    </div>
                    <span class="fw-bold">${results.percentage}%</span>
                </div>
                
                <h6>Difficulty Level</h6>
                <span class="badge bg-${results.difficulty_level === 'beginner' ? 'success' : (results.difficulty_level === 'intermediate' ? 'warning' : 'danger')} mb-3">
                    ${results.difficulty_level.charAt(0).toUpperCase() + results.difficulty_level.slice(1)}
                </span>
                
                <h6>Learning Style</h6>
                <p class="text-muted">${results.learning_style_preference || 'Balanced'}</p>
                
                <h6>Motivation Profile</h6>
                <p class="text-muted">${results.motivation_profile || 'Achievement-oriented'}</p>
            </div>
            <div class="col-md-6">
                <h6>Strong Areas</h6>
                <ul class="list-unstyled">
                    ${results.strong_areas?.map(area => `<li><i class="fas fa-check text-success me-2"></i>${area}</li>`).join('') || '<li>Complete more assessments to identify strengths</li>'}
                </ul>
                
                <h6>Areas for Improvement</h6>
                <ul class="list-unstyled">
                    ${results.weak_areas?.map(area => `<li><i class="fas fa-arrow-up text-warning me-2"></i>${area}</li>`).join('') || '<li>Keep practicing to identify improvement areas</li>'}
                </ul>
                
                <h6>Recommendations</h6>
                <ul class="list-unstyled">
                    ${results.recommendations?.map(rec => `<li><i class="fas fa-lightbulb text-info me-2"></i>${rec}</li>`).join('') || '<li>Continue learning consistently</li>'}
                </ul>
            </div>
        </div>
    `;
    
    document.getElementById('assessment-results').innerHTML = resultsHtml;
    new bootstrap.Modal(document.getElementById('resultsModal')).show();
}
</script>
@endpush
@endsection