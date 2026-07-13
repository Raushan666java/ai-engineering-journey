# Chapter 29: Education & EdTech

> **Previous:** [Finance](./28-finance.md) | **Next:** [Logistics](./30-logistics.md)

---

## Learning Objectives

- Design complete education data models including Student, Course, Enrollment, Assessment, and Grade with Eloquent relationships and migrations
- Build a personalized learning path agent that analyzes student performance data and recommends optimal course sequences
- Implement automated essay grading with AI using rubric-based structured output for consistent, fair assessment
- Create a content generation agent that produces lesson plans, quiz questions, and study materials from curriculum specifications
- Construct an adaptive quiz engine that dynamically adjusts question difficulty based on real-time student performance
- Develop a student progress tracking agent with an early warning system that flags at-risk students using configurable thresholds
- Automate enrollment workflows with prerequisite validation, waitlist management, and multi-channel notifications
- Build a curriculum recommendation system using vector similarity search that maps courses to career goals

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/laravel/29-education/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/hero.svg" alt="Chapter Banner: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/handwritten-notes.svg" alt="Handwritten Notes: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/sticky-notes.svg" alt="Sticky Notes: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/visual-explanation.svg" alt="Visual Explanation: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/architecture.svg" alt="Architecture: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/workflow.svg" alt="Workflow: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/mindmap.svg" alt="Mind Map: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/comparison.svg" alt="Comparison: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/cheatsheet.svg" alt="Cheat Sheet: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/interview-quiz.svg" alt="Quiz Card: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/29-education/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/29-education/social-card.svg" alt="Social Card: Chapter 29: Education & EdTech" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Data Models | Education data models for students, courses, enrollments | Design schemas for learning management |
| Learning Paths | Personalized learning path agents | Adapt curriculum based on student performance |
| Assessments | Automated assessment and grading | Grade submissions with AI and generate feedback |
| Content Generation | AI-generated course content | Generate lessons, quizzes, and study materials |
| Quiz Engines | Adaptive quiz engines | Adjust difficulty based on student proficiency |
| Progress Tracking | Student progress tracking agents | Monitor completion, grades, and engagement metrics |

## Chapter Roadmap

``mermaid
flowchart LR
    A[Student] --> B[Laravel App]
    B --> C[Learning Path Agent]
    B --> D[Assessment Agent]
    B --> E[Quiz Engine]
    B --> F[Progress Tracker]
    C --> G[Curriculum DB]
    D --> H[Submission Queue]
    E --> I[Question Bank]
    F --> J[Analytics DB]
    H --> K[AI Grader]
``



## Theory

![Education Domain](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/29-education.png)


### 29.1 Education Data Models

<a href="../../../assets/images/diagrams/laravel/29-education/29-1-education-data-models-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-1-education-data-models-handwritten.svg" alt="Handwritten: 29.1 Education Data Models" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-1-education-data-models-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-1-education-data-models-diagram.svg" alt="Diagram: 29.1 Education Data Models" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-1-education-data-models-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-1-education-data-models-sticky.svg" alt="Sticky Note: 29.1 Education Data Models" width="30%">
</a>



> **One-Sentence Takeaway:** Education schemas cover students, courses, enrollments, assessments, submissions, and grades with proper relationships.

Every EdTech application begins with the core domain models. Students enroll in courses, complete assessments, and receive grades. We build these models with Eloquent migrations, proper relationships, and AI-ready fields.

#### Migration for Students

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('student_id')->unique();
            $table->string('grade_level');
            $table->string('major')->nullable();
            $table->decimal('gpa', 3, 2)->default(0.00);
            $table->json('learning_preferences')->nullable();
            $table->json('career_goals')->nullable();
            $table->json('skill_assessments')->nullable();
            $table->timestamps();

            $table->index('grade_level');
            $table->index('major');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
```

#### Migration for Courses

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('title');
            $table->text('description');
            $table->string('department');
            $table->integer('credits');
            $table->string('difficulty_level');
            $table->json('prerequisites')->nullable();
            $table->json('learning_objectives')->nullable();
            $table->json('topics')->nullable();
            $table->json('metadata')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('department');
            $table->index('difficulty_level');
            $table->index('is_active');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
```

#### Migration for Enrollments

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->foreignId('course_id')->constrained()->cascadeOnDelete();
            $table->string('semester');
            $table->string('status')->default('active');
            $table->date('enrolled_at');
            $table->date('completed_at')->nullable();
            $table->date('dropped_at')->nullable();
            $table->text('drop_reason')->nullable();
            $table->string('waitlist_position')->nullable();
            $table->timestamps();

            $table->unique(['student_id', 'course_id', 'semester']);
            $table->index('status');
            $table->index('semester');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enrollments');
    }
};
```

#### Migration for Assessments

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('assessments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('type');
            $table->text('description')->nullable();
            $table->json('questions')->nullable();
            $table->json('rubric')->nullable();
            $table->integer('max_score');
            $table->decimal('weight', 3, 2)->default(1.00);
            $table->timestamp('available_from')->nullable();
            $table->timestamp('available_until')->nullable();
            $table->integer('time_limit_minutes')->nullable();
            $table->boolean('is_adaptive')->default(false);
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('type');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('assessments');
    }
};
```

#### Migration for Grades

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->foreignId('assessment_id')->constrained()->cascadeOnDelete();
            $table->foreignId('grader_id')->nullable()->constrained('users');
            $table->decimal('score', 5, 2)->nullable();
            $table->decimal('percentage', 5, 2)->nullable();
            $table->string('letter_grade')->nullable();
            $table->text('feedback')->nullable();
            $table->json('rubric_scores')->nullable();
            $table->json('ai_grading_data')->nullable();
            $table->string('grading_method')->default('manual');
            $table->timestamp('submitted_at')->nullable();
            $table->timestamp('graded_at')->nullable();
            $table->timestamps();

            $table->unique(['student_id', 'assessment_id']);
            $table->index('grading_method');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('grades');
    }
};
```

#### Eloquent Models

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends Model
{
    protected $fillable = [
        'user_id', 'student_id', 'grade_level', 'major',
        'gpa', 'learning_preferences', 'career_goals', 'skill_assessments',
    ];

    protected $casts = [
        'gpa' => 'decimal:2',
        'learning_preferences' => 'array',
        'career_goals' => 'array',
        'skill_assessments' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }

    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }

    public function scopeByMajor($query, string $major)
    {
        return $query->where('major', $major);
    }

    public function scopeAtRisk($query, float $gpaThreshold = 2.0)
    {
        return $query->where('gpa', '<', $gpaThreshold);
    }
}
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    protected $fillable = [
        'code', 'title', 'description', 'department', 'credits',
        'difficulty_level', 'prerequisites', 'learning_objectives',
        'topics', 'metadata', 'is_active',
    ];

    protected $casts = [
        'prerequisites' => 'array',
        'learning_objectives' => 'array',
        'topics' => 'array',
        'metadata' => 'array',
        'is_active' => 'boolean',
    ];

    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }

    public function assessments(): HasMany
    {
        return $this->hasMany(Assessment::class);
    }

    public function scopeByDepartment($query, string $department)
    {
        return $query->where('department', $department);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enrollment extends Model
{
    protected $fillable = [
        'student_id', 'course_id', 'semester', 'status',
        'enrolled_at', 'completed_at', 'dropped_at', 'drop_reason',
        'waitlist_position',
    ];

    protected $casts = [
        'enrolled_at' => 'date',
        'completed_at' => 'date',
        'dropped_at' => 'date',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeBySemester($query, string $semester)
    {
        return $query->where('semester', $semester);
    }
}
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assessment extends Model
{
    protected $fillable = [
        'course_id', 'title', 'type', 'description', 'questions',
        'rubric', 'max_score', 'weight', 'available_from',
        'available_until', 'time_limit_minutes', 'is_adaptive', 'metadata',
    ];

    protected $casts = [
        'questions' => 'array',
        'rubric' => 'array',
        'available_from' => 'datetime',
        'available_until' => 'datetime',
        'is_adaptive' => 'boolean',
        'metadata' => 'array',
    ];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }

    public function scopeByType($query, string $type)
    {
        return $query->where('type', $type);
    }

    public function scopeAvailable($query)
    {
        return $query->where('available_from', '<=', now())
            ->where(function ($q) {
                $q->whereNull('available_until')
                  ->orWhere('available_until', '>=', now());
            });
    }
}
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Grade extends Model
{
    protected $fillable = [
        'student_id', 'assessment_id', 'grader_id', 'score',
        'percentage', 'letter_grade', 'feedback', 'rubric_scores',
        'ai_grading_data', 'grading_method', 'submitted_at', 'graded_at',
    ];

    protected $casts = [
        'score' => 'decimal:2',
        'percentage' => 'decimal:2',
        'rubric_scores' => 'array',
        'ai_grading_data' => 'array',
        'submitted_at' => 'datetime',
        'graded_at' => 'datetime',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function assessment(): BelongsTo
    {
        return $this->belongsTo(Assessment::class);
    }

    public function grader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'grader_id');
    }

    public function scopeByMethod($query, string $method)
    {
        return $query->where('grading_method', $method);
    }

    public function scopeRecent($query, int $days = 30)
    {
        return $query->where('graded_at', '>=', now()->subDays($days));
    }
}
```

---

### 29.2 Personalized Learning Path Agents

<a href="../../../assets/images/diagrams/laravel/29-education/29-2-personalized-learning-path-agents-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-2-personalized-learning-path-agents-handwritten.svg" alt="Handwritten: 29.2 Personalized Learning Path Agents" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-2-personalized-learning-path-agents-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-2-personalized-learning-path-agents-diagram.svg" alt="Diagram: 29.2 Personalized Learning Path Agents" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-2-personalized-learning-path-agents-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-2-personalized-learning-path-agents-sticky.svg" alt="Sticky Note: 29.2 Personalized Learning Path Agents" width="30%">
</a>



> **One-Sentence Takeaway:** Learning path agents analyze student performance and adapt curriculum recommendations in real time.

A learning path agent analyzes a student's performance history, learning preferences, and career goals to recommend the optimal sequence of courses. It acts as an AI academic advisor that understands both the curriculum structure and the individual student.

#### The LearningPathAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Course;
use App\Models\Student;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class LearningPathAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Student $student,
        protected array $options = [],
    ) {}

    public function instructions(): Stringable|string
    {
        $preferences = $this->student->learning_preferences ?? [];
        $goals = $this->student->career_goals ?? [];
        $completedCourses = $this->student->enrollments()
            ->where('status', 'completed')
            ->with('course')
            ->get()
            ->pluck('course.title')
            ->toArray();

        $avgGrade = $this->student->grades()
            ->avg('percentage') ?? 0;

        return <<<PROMPT
You are a personalized learning path advisor for a university system.

Student Profile:
- Major: {$this->student->major}
- Current GPA: {$this->student->gpa}
- Grade Level: {$this->student->grade_level}
- Average Grade: {$avgGrade}%
- Completed Courses: " . implode(', ', $completedCourses) . "
- Learning Preferences: " . json_encode($preferences) . "
- Career Goals: " . json_encode($goals) . "

Your task is to recommend the next 3-5 courses this student should take.
Consider their academic history, prerequisite chains, career trajectory,
and course difficulty progression. For each recommendation, provide:
1. The course code and title
2. Why it fits this student's path
3. How it builds on their completed courses
4. How it serves their career goals
5. The expected difficulty level for this student

Output as structured JSON with a ranked list of recommendations.
PROMPT;
    }

    public function analyze(): array
    {
        $response = $this
            ->maxTokens(2048)
            ->prompt('Analyze this student\'s academic profile and generate a personalized learning path.');

        $recommendations = json_decode($response->text(), true) ?? [];

        return [
            'student_id' => $this->student->id,
            'recommendations' => $recommendations,
            'generated_at' => now()->toIso8601String(),
        ];
    }

    public function getRecommendedCourses(): array
    {
        $completedIds = $this->student->enrollments()
            ->where('status', 'completed')
            ->pluck('course_id')
            ->toArray();

        $available = Course::active()
            ->whereNotIn('id', $completedIds)
            ->get();

        $scores = [];
        foreach ($available as $course) {
            $score = $this->scoreCourseRelevance($course);
            $scores[] = [
                'course' => $course,
                'score' => $score,
            ];
        }

        usort($scores, fn ($a, $b) => $b['score'] <=> $a['score']);

        return array_slice($scores, 0, 5);
    }

    protected function scoreCourseRelevance(Course $course): float
    {
        $score = 0.0;

        $goals = $this->student->career_goals ?? [];
        foreach ($goals as $goal) {
            if (stripos($course->description, $goal) !== false
                || stripos(json_encode($course->topics ?? []), $goal) !== false) {
                $score += 3.0;
            }
        }

        $completedTopics = $this->student->enrollments()
            ->where('status', 'completed')
            ->with('course')
            ->get()
            ->pluck('course.topics')
            ->flatten()
            ->unique()
            ->toArray();

        $courseTopics = $course->topics ?? [];
        $newTopics = array_diff($courseTopics, $completedTopics);
        $score += count($newTopics) * 1.5;

        $prerequisites = $course->prerequisites ?? [];
        $metPrereqs = count(array_intersect($prerequisites, $completedTopics));
        $totalPrereqs = count($prerequisites);
        if ($totalPrereqs > 0) {
            $score += ($metPrereqs / $totalPrereqs) * 2.0;
        }

        return $score;
    }
}
```

#### Controller for Learning Path

```php
<?php

namespace App\Http\Controllers\Api\Education;

use App\Ai\Agents\Education\LearningPathAgent;
use App\Models\Student;
use Illuminate\Http\Request;

class LearningPathController extends Controller
{
    public function recommend(Request $request, int $studentId): array
    {
        $student = Student::with('enrollments.course', 'grades')
            ->findOrFail($studentId);

        $agent = new LearningPathAgent(
            student: $student,
            options: $request->only(['focus', 'max_recommendations']),
        );

        $agentRecommendations = $agent->analyze();
        $systemRecommendations = $agent->getRecommendedCourses();

        $courses = collect($systemRecommendations)->map(fn ($r) => [
            'id' => $r['course']->id,
            'code' => $r['course']->code,
            'title' => $r['course']->title,
            'relevance_score' => round($r['score'], 1),
            'difficulty' => $r['course']->difficulty_level,
        ]);

        return [
            'student_id' => $studentId,
            'ai_analysis' => $agentRecommendations,
            'ranked_courses' => $courses,
        ];
    }
}
```

---


> **Remember:** Personalization improves outcomes, but students should always be able to override AI recommendations.

### 29.3 Assessment & Grading Automation

<a href="../../../assets/images/diagrams/laravel/29-education/29-3-assessment-grading-automation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-3-assessment-grading-automation-handwritten.svg" alt="Handwritten: 29.3 Assessment & Grading Automation" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-3-assessment-grading-automation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-3-assessment-grading-automation-diagram.svg" alt="Diagram: 29.3 Assessment & Grading Automation" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-3-assessment-grading-automation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-3-assessment-grading-automation-sticky.svg" alt="Sticky Note: 29.3 Assessment & Grading Automation" width="30%">
</a>



> **One-Sentence Takeaway:** Assessment agents grade submissions using AI and provide detailed feedback to students.

Grading open-ended responses is one of the most time-consuming tasks in education. A grading agent uses AI with a rubric configuration to evaluate essays, short answers, and project submissions consistently, producing structured grades with detailed feedback.

#### The GradingAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Assessment;
use App\Models\Grade;
use App\Models\Student;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class GradingAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Assessment $assessment,
        protected Student $student,
        protected string $submission,
        protected ?array $rubricOverrides = null,
    ) {}

    public function instructions(): Stringable|string
    {
        $rubric = $this->rubricOverrides ?? $this->assessment->rubric;
        $maxScore = $this->assessment->max_score;

        return <<<PROMPT
You are an automated grading agent. Grade the following student submission
against the provided rubric. Be fair, consistent, and thorough.

Assessment: {$this->assessment->title}
Max Score: {$maxScore}
Type: {$this->assessment->type}

Rubric:
" . json_encode($rubric, JSON_PRETTY_PRINT) . "

Submission:
{$this->submission}

For each rubric criterion, provide:
1. A score for that criterion
2. Brief justification for the score
3. Specific evidence from the submission

Then provide:
- Total score (integer, 0-{$maxScore})
- Overall percentage
- Letter grade (A/B/C/D/F with +/- modifiers)
- Constructive feedback for the student
- Areas of strength
- Areas for improvement

Output as structured JSON with 'criterion_scores', 'total_score',
'percentage', 'letter_grade', 'feedback', 'strengths', 'improvements'.
PROMPT;
    }

    public function grade(): Grade
    {
        $response = $this
            ->maxTokens(4096)
            ->prompt('Grade this submission against the assessment rubric.');

        $result = json_decode($response->text(), true) ?? $this->fallbackResult();

        $grade = Grade::create([
            'student_id' => $this->student->id,
            'assessment_id' => $this->assessment->id,
            'score' => $result['total_score'] ?? 0,
            'percentage' => $result['percentage'] ?? 0,
            'letter_grade' => $result['letter_grade'] ?? 'F',
            'feedback' => $result['feedback'] ?? '',
            'rubric_scores' => $result['criterion_scores'] ?? [],
            'ai_grading_data' => [
                'strengths' => $result['strengths'] ?? [],
                'improvements' => $result['improvements'] ?? [],
                'model' => 'ai-grading-v1',
                'graded_at' => now()->toIso8601String(),
            ],
            'grading_method' => 'ai',
            'submitted_at' => now(),
            'graded_at' => now(),
        ]);

        return $grade;
    }

    public function gradeWithReview(): array
    {
        $grade = $this->grade();

        $confidence = $this->assessConfidence();

        if ($confidence < 0.7) {
            $grade->update(['grading_method' => 'ai_pending_review']);
            $this->flagForHumanReview($grade, $confidence);
        }

        return [
            'grade' => $grade,
            'confidence' => $confidence,
            'needs_review' => $confidence < 0.7,
        ];
    }

    protected function assessConfidence(): float
    {
        $submissionLength = strlen($this->submission);
        $rubricDetail = count($this->assessment->rubric ?? []);

        if ($submissionLength < 50) {
            return 0.4;
        }

        $baseConfidence = min(0.9, 0.5 + ($rubricDetail * 0.05));
        $lengthBonus = min(0.1, $submissionLength / 10000 * 0.1);

        return min(1.0, $baseConfidence + $lengthBonus);
    }

    protected function flagForHumanReview(Grade $grade, float $confidence): void
    {
        \App\Models\GradeReview::create([
            'grade_id' => $grade->id,
            'reason' => 'low_confidence',
            'confidence_score' => $confidence,
            'status' => 'pending',
        ]);
    }

    protected function fallbackResult(): array
    {
        return [
            'total_score' => 0,
            'percentage' => 0,
            'letter_grade' => 'F',
            'feedback' => 'Grading failed Ã¢â‚¬â€ please review manually.',
            'criterion_scores' => [],
            'strengths' => [],
            'improvements' => ['Submission could not be evaluated by the automated system.'],
        ];
    }
}
```

#### Controller for Automated Grading

```php
<?php

namespace App\Http\Controllers\Api\Education;

use App\Ai\Agents\Education\GradingAgent;
use App\Models\Assessment;
use App\Models\Student;
use Illuminate\Http\Request;

class GradingController extends Controller
{
    public function gradeSubmission(Request $request): array
    {
        $request->validate([
            'assessment_id' => 'required|exists:assessments,id',
            'student_id' => 'required|exists:students,id',
            'submission' => 'required|string|min:1',
        ]);

        $assessment = Assessment::findOrFail($request->input('assessment_id'));
        $student = Student::findOrFail($request->input('student_id'));

        $agent = new GradingAgent(
            assessment: $assessment,
            student: $student,
            submission: $request->input('submission'),
            rubricOverrides: $request->input('rubric_overrides'),
        );

        $result = $agent->gradeWithReview();

        return [
            'grade_id' => $result['grade']->id,
            'score' => $result['grade']->score,
            'percentage' => $result['grade']->percentage,
            'letter_grade' => $result['grade']->letter_grade,
            'feedback' => $result['grade']->feedback,
            'confidence' => $result['confidence'],
            'needs_review' => $result['needs_review'],
        ];
    }

    public function batchGrade(Request $request): array
    {
        $request->validate([
            'assessment_id' => 'required|exists:assessments,id',
            'submissions' => 'required|array',
            'submissions.*.student_id' => 'required|exists:students,id',
            'submissions.*.content' => 'required|string',
        ]);

        $assessment = Assessment::findOrFail($request->input('assessment_id'));
        $results = [];

        foreach ($request->input('submissions') as $submission) {
            $student = Student::find($submission['student_id']);
            if (! $student) {
                continue;
            }

            $agent = new GradingAgent($assessment, $student, $submission['content']);
            $result = $agent->gradeWithReview();

            $results[] = [
                'student_id' => $student->id,
                'grade_id' => $result['grade']->id,
                'score' => $result['grade']->score,
                'percentage' => $result['grade']->percentage,
                'letter_grade' => $result['grade']->letter_grade,
                'needs_review' => $result['needs_review'],
            ];
        }

        return [
            'assessment_id' => $assessment->id,
            'total_graded' => count($results),
            'results' => $results,
        ];
    }
}
```

---


> **Pro Tip:** Always have a human review AI-graded essays for edge cases. Use AI as a first-pass grader.

### 29.4 Content Generation for Courses

<a href="../../../assets/images/diagrams/laravel/29-education/29-4-content-generation-for-courses-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-4-content-generation-for-courses-handwritten.svg" alt="Handwritten: 29.4 Content Generation for Courses" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-4-content-generation-for-courses-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-4-content-generation-for-courses-diagram.svg" alt="Diagram: 29.4 Content Generation for Courses" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-4-content-generation-for-courses-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-4-content-generation-for-courses-sticky.svg" alt="Sticky Note: 29.4 Content Generation for Courses" width="30%">
</a>



> **One-Sentence Takeaway:** Content generation agents create lessons, quizzes, and study materials using AI.

Content generation agents help instructors create course materials faster. An agent can generate complete lesson plans, quiz questions, study guides, and supplementary materials from a course outline or topic specification.

#### The ContentGenerationAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Course;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class ContentGenerationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Course $course,
        protected string $contentType,
        protected array $parameters = [],
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a course content generation agent for an EdTech platform.
Generate high-quality educational content for the specified course.

Course: {$this->course->title} ({$this->course->code})
Department: {$this->course->department}
Difficulty: {$this->course->difficulty_level}
Credits: {$this->course->credits}
Learning Objectives: " . json_encode($this->course->learning_objectives ?? []) . "
Topics: " . json_encode($this->course->topics ?? []) . "

Content Type: {$this->contentType}

Adjust the depth, vocabulary, and complexity to match the difficulty
level and ensure alignment with the stated learning objectives.
PROMPT;
    }

    public function generateQuiz(int $questionCount = 10, array $questionTypes = ['multiple_choice']): array
    {
        $response = $this
            ->maxTokens(4096)
            ->prompt("Generate {$questionCount} quiz questions for {$this->course->title}. "
                . "Question types: " . implode(', ', $questionTypes) . ". "
                . "Include the correct answer, distractors, and an explanation for each. "
                . "Ensure questions cover the key learning objectives and vary in difficulty "
                . "(easy, medium, hard). "
                . "Output as a JSON array of question objects.");

        $questions = json_decode($response->text(), true) ?? [];

        $quiz = [
            'course_id' => $this->course->id,
            'title' => $this->parameters['title'] ?? "{$this->course->code} Quiz",
            'type' => 'quiz',
            'questions' => $questions,
            'max_score' => count($questions),
            'metadata' => [
                'generated_by' => 'ai',
                'question_types' => $questionTypes,
                'generated_at' => now()->toIso8601String(),
            ],
        ];

        return $quiz;
    }

    public function generateLessonPlan(string $topic, int $durationMinutes = 60): array
    {
        $response = $this
            ->maxTokens(4096)
            ->prompt("Create a detailed lesson plan for the topic '{$topic}' "
                . "in {$this->course->title}. Duration: {$durationMinutes} minutes. "
                . "Include learning objectives, materials needed, a timed breakdown "
                . "of activities, discussion questions, and assessment checkpoints. "
                . "Output as structured JSON.");

        $plan = json_decode($response->text(), true) ?? [];

        return [
            'course_id' => $this->course->id,
            'topic' => $topic,
            'duration_minutes' => $durationMinutes,
            'plan' => $plan,
            'generated_at' => now()->toIso8601String(),
        ];
    }

    public function generateStudyGuide(): array
    {
        $topics = $this->course->topics ?? [];
        $objectives = $this->course->learning_objectives ?? [];

        $response = $this
            ->maxTokens(4096)
            ->prompt("Create a comprehensive study guide for {$this->course->title}. "
                . "Cover these topics: " . implode(', ', $topics) . ". "
                . "Align with these objectives: " . implode(', ', $objectives) . ". "
                . "Include key concepts, definitions, formulas, examples, "
                . "and practice questions with answers. "
                . "Organize by topic with clear section headers. "
                . "Output as structured JSON with sections.");

        return json_decode($response->text(), true) ?? [
            'course_id' => $this->course->id,
            'title' => "{$this->course->code} Study Guide",
            'sections' => [],
        ];
    }

    public function generateAssignment(string $title, string $description): array
    {
        $response = $this
            ->maxTokens(4096)
            ->prompt("Design a graded assignment for {$this->course->title}. "
                . "Title: {$title}. Description: {$description}. "
                . "Include clear instructions, rubric criteria with point values, "
                . "submission requirements, and expected outcomes. "
                . "The assignment should assess the stated learning objectives. "
                . "Output as structured JSON.");

        $assignment = json_decode($response->text(), true) ?? [];

        return [
            'course_id' => $this->course->id,
            'title' => $title,
            'type' => 'assignment',
            'content' => $assignment,
            'max_score' => $assignment['total_points'] ?? 100,
            'metadata' => [
                'generated_by' => 'ai',
                'generated_at' => now()->toIso8601String(),
            ],
        ];
    }
}
```

#### Controller for Content Generation

```php
<?php

namespace App\Http\Controllers\Api\Education;

use App\Ai\Agents\Education\ContentGenerationAgent;
use App\Models\Course;
use Illuminate\Http\Request;

class ContentGenerationController extends Controller
{
    public function generateQuiz(Request $request, int $courseId): array
    {
        $request->validate([
            'question_count' => 'integer|min:1|max:50',
            'question_types' => 'array',
            'title' => 'string|nullable',
        ]);

        $course = Course::findOrFail($courseId);
        $agent = new ContentGenerationAgent(
            course: $course,
            contentType: 'quiz',
            parameters: $request->only(['title']),
        );

        $quiz = $agent->generateQuiz(
            questionCount: $request->input('question_count', 10),
            questionTypes: $request->input('question_types', ['multiple_choice']),
        );

        return [
            'course_id' => $courseId,
            'quiz' => $quiz,
        ];
    }

    public function generateLessonPlan(Request $request, int $courseId): array
    {
        $request->validate([
            'topic' => 'required|string',
            'duration_minutes' => 'integer|min:15|max:480',
        ]);

        $course = Course::findOrFail($courseId);
        $agent = new ContentGenerationAgent($course, 'lesson_plan');

        $plan = $agent->generateLessonPlan(
            topic: $request->input('topic'),
            durationMinutes: $request->input('duration_minutes', 60),
        );

        return $plan;
    }

    public function generateStudyGuide(int $courseId): array
    {
        $course = Course::findOrFail($courseId);
        $agent = new ContentGenerationAgent($course, 'study_guide');

        return $agent->generateStudyGuide();
    }
}
```

---

### 29.5 Adaptive Quiz Engines

<a href="../../../assets/images/diagrams/laravel/29-education/29-5-adaptive-quiz-engines-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-5-adaptive-quiz-engines-handwritten.svg" alt="Handwritten: 29.5 Adaptive Quiz Engines" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-5-adaptive-quiz-engines-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-5-adaptive-quiz-engines-diagram.svg" alt="Diagram: 29.5 Adaptive Quiz Engines" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-5-adaptive-quiz-engines-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-5-adaptive-quiz-engines-sticky.svg" alt="Sticky Note: 29.5 Adaptive Quiz Engines" width="30%">
</a>



> **One-Sentence Takeaway:** Adaptive quiz engines adjust question difficulty based on student proficiency using IRT algorithms.

An adaptive quiz engine adjusts question difficulty in real-time based on student performance. A student who answers correctly receives harder questions; a student who struggles receives easier ones. This creates a personalized assessment that accurately measures ability without discouraging the learner.

#### The AdaptiveQuizAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Assessment;
use App\Models\Student;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class AdaptiveQuizAgent implements Agent
{
    use Promptable;

    protected array $session = [];

    protected array $difficultyLevels = ['easy', 'medium', 'hard'];

    protected string $currentDifficulty = 'medium';

    protected int $correctCount = 0;

    protected int $totalAnswered = 0;

    protected int $consecutiveCorrect = 0;

    public function __construct(
        protected Assessment $assessment,
        protected Student $student,
        protected array $questionPool = [],
    ) {
        $this->session = [
            'assessment_id' => $assessment->id,
            'student_id' => $student->id,
            'started_at' => now()->toIso8601String(),
            'questions' => [],
            'current_question_index' => 0,
        ];
    }

    public function instructions(): Stringable|string
    {
        $performance = $this->totalAnswered > 0
            ? round(($this->correctCount / $this->totalAnswered) * 100, 1)
            : 0;

        return <<<PROMPT
You are an adaptive quiz engine. Adjust question difficulty in real-time
based on the student's current performance.

Student Performance:
- Total Answered: {$this->totalAnswered}
- Correct: {$this->correctCount}
- Accuracy: {$performance}%
- Current Difficulty: {$this->currentDifficulty}
- Consecutive Correct: {$this->consecutiveCorrect}

Rules:
- If the student answers 3+ consecutive questions correctly, increase difficulty
- If the student answers 2+ consecutive questions incorrectly, decrease difficulty
- If accuracy is above 80%, target harder questions
- If accuracy is below 50%, target easier questions
- Never change difficulty more than one level per question
- Maintain engagement Ã¢â‚¬â€ avoid overly easy or impossibly hard questions

Select the next question from the pool that matches the target difficulty.
PROMPT;
    }

    public function selectNextQuestion(): ?array
    {
        $this->updateDifficulty();

        $pool = $this->filterQuestionsByDifficulty($this->currentDifficulty);

        if (empty($pool)) {
            $pool = $this->questionPool;
        }

        $usedIds = collect($this->session['questions'])->pluck('id')->toArray();
        $available = array_filter($pool, fn ($q) => ! in_array($q['id'] ?? null, $usedIds));

        if (empty($available)) {
            return null;
        }

        $index = array_rand($available);
        $question = $available[$index];

        $this->session['current_question'] = $question;
        $this->session['current_question_index']++;

        return $question;
    }

    public function recordAnswer(string $questionId, string $answer, string $correctAnswer): array
    {
        $isCorrect = strcasecmp(trim($answer), trim($correctAnswer)) === 0;

        $this->totalAnswered++;
        $this->session['questions'][] = [
            'id' => $questionId,
            'difficulty' => $this->currentDifficulty,
            'student_answer' => $answer,
            'correct_answer' => $correctAnswer,
            'is_correct' => $isCorrect,
        ];

        if ($isCorrect) {
            $this->correctCount++;
            $this->consecutiveCorrect++;
        } else {
            $this->consecutiveCorrect = 0;
        }

        return [
            'is_correct' => $isCorrect,
            'correct_answer' => $correctAnswer,
            'new_difficulty' => $this->currentDifficulty,
            'accuracy' => round(($this->correctCount / $this->totalAnswered) * 100, 1),
        ];
    }

    public function complete(): array
    {
        $accuracy = $this->totalAnswered > 0
            ? round(($this->correctCount / $this->totalAnswered) * 100, 1)
            : 0;

        $difficultyDistribution = collect($this->session['questions'])
            ->groupBy('difficulty')
            ->map(fn ($items) => count($items))
            ->toArray();

        $this->session['completed_at'] = now()->toIso8601String();
        $this->session['summary'] = [
            'total_questions' => $this->totalAnswered,
            'correct' => $this->correctCount,
            'accuracy' => $accuracy,
            'difficulty_distribution' => $difficultyDistribution,
            'final_difficulty' => $this->currentDifficulty,
        ];

        return $this->session;
    }

    public function getProgress(): array
    {
        return [
            'total_answered' => $this->totalAnswered,
            'correct' => $this->correctCount,
            'accuracy' => $this->totalAnswered > 0
                ? round(($this->correctCount / $this->totalAnswered) * 100, 1) : 0,
            'current_difficulty' => $this->currentDifficulty,
            'consecutive_correct' => $this->consecutiveCorrect,
        ];
    }

    protected function updateDifficulty(): void
    {
        if ($this->consecutiveCorrect >= 3) {
            $this->bumpDifficultyUp();
        } elseif ($this->totalAnswered >= 2
            && $this->consecutiveCorrect === 0
            && ! $this->wasLastAnswerCorrect()) {
            $this->bumpDifficultyDown();
        }
    }

    protected function wasLastAnswerCorrect(): bool
    {
        $last = $this->session['questions'][count($this->session['questions']) - 1] ?? null;
        return $last ? $last['is_correct'] : true;
    }

    protected function bumpDifficultyUp(): void
    {
        $this->currentDifficulty = match ($this->currentDifficulty) {
            'easy' => 'medium',
            'medium' => 'hard',
            default => 'hard',
        };
    }

    protected function bumpDifficultyDown(): void
    {
        $this->currentDifficulty = match ($this->currentDifficulty) {
            'hard' => 'medium',
            'medium' => 'easy',
            default => 'easy',
        };
    }

    protected function filterQuestionsByDifficulty(string $difficulty): array
    {
        return array_filter($this->questionPool, function ($q) use ($difficulty) {
            return ($q['difficulty'] ?? 'medium') === $difficulty;
        });
    }
}
```

#### Controller for Adaptive Quiz

```php
<?php

namespace App\Http\Controllers\Api\Education;

use App\Ai\Agents\Education\AdaptiveQuizAgent;
use App\Models\Assessment;
use App\Models\Student;
use Illuminate\Http\Request;

class AdaptiveQuizController extends Controller
{
    protected array $sessions = [];

    public function start(Request $request): array
    {
        $request->validate([
            'assessment_id' => 'required|exists:assessments,id',
            'student_id' => 'required|exists:students,id',
        ]);

        $assessment = Assessment::findOrFail($request->input('assessment_id'));
        $student = Student::findOrFail($request->input('student_id'));

        $pool = $assessment->questions ?? [];
        if (empty($pool)) {
            return ['error' => 'Assessment has no questions configured.'];
        }

        $agent = new AdaptiveQuizAgent($assessment, $student, $pool);
        $sessionId = uniqid('quiz_', true);
        $this->sessions[$sessionId] = $agent;

        $firstQuestion = $agent->selectNextQuestion();

        return [
            'session_id' => $sessionId,
            'question' => $firstQuestion,
            'progress' => $agent->getProgress(),
        ];
    }

    public function answer(Request $request): array
    {
        $request->validate([
            'session_id' => 'required|string',
            'question_id' => 'required|string',
            'answer' => 'required|string',
        ]);

        $sessionId = $request->input('session_id');
        $agent = $this->sessions[$sessionId] ?? null;

        if (! $agent) {
            return ['error' => 'Invalid or expired session.'];
        }

        $questionId = $request->input('question_id');
        $answer = $request->input('answer');

        $lastQuestion = $agent->getProgress();
        $correctAnswer = $this->getCorrectAnswer($sessionId, $questionId);

        if (! $correctAnswer) {
            return ['error' => 'Question not found in current session.'];
        }

        $result = $agent->recordAnswer($questionId, $answer, $correctAnswer);
        $nextQuestion = $agent->selectNextQuestion();

        return [
            'result' => $result,
            'next_question' => $nextQuestion,
            'progress' => $agent->getProgress(),
            'is_complete' => $nextQuestion === null,
        ];
    }

    public function complete(Request $request): array
    {
        $request->validate(['session_id' => 'required|string']);

        $sessionId = $request->input('session_id');
        $agent = $this->sessions[$sessionId] ?? null;

        if (! $agent) {
            return ['error' => 'Invalid or expired session.'];
        }

        $result = $agent->complete();
        unset($this->sessions[$sessionId]);

        return [
            'session' => $result,
        ];
    }

    protected function getCorrectAnswer(string $sessionId, string $questionId): ?string
    {
        $agent = $this->sessions[$sessionId] ?? null;
        if (! $agent) {
            return null;
        }

        $reflection = new \ReflectionClass($agent);
        $poolProp = $reflection->getProperty('questionPool');
        $poolProp->setAccessible(true);
        $pool = $poolProp->getValue($agent);

        foreach ($pool as $question) {
            if (($question['id'] ?? null) === $questionId) {
                return $question['correct_answer'] ?? null;
            }
        }

        return null;
    }
}
```

---


> **Warning:** Item Response Theory requires calibration. Start with a bank of calibrated questions before going adaptive.

### 29.6 Student Progress Tracking Agents

<a href="../../../assets/images/diagrams/laravel/29-education/29-6-student-progress-tracking-agents-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-6-student-progress-tracking-agents-handwritten.svg" alt="Handwritten: 29.6 Student Progress Tracking Agents" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-6-student-progress-tracking-agents-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-6-student-progress-tracking-agents-diagram.svg" alt="Diagram: 29.6 Student Progress Tracking Agents" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-6-student-progress-tracking-agents-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-6-student-progress-tracking-agents-sticky.svg" alt="Sticky Note: 29.6 Student Progress Tracking Agents" width="30%">
</a>



> **One-Sentence Takeaway:** Progress tracking agents monitor completion rates, grades, and engagement metrics for insights.

A progress tracking agent monitors student performance across assessments, assignments, and engagement metrics. It flags at-risk students before they fall too far behind, enabling early intervention.

#### The ProgressTrackingAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Enrollment;
use App\Models\Grade;
use App\Models\Student;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class ProgressTrackingAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Student $student,
        protected array $config = [],
    ) {}

    public function instructions(): Stringable|string
    {
        $enrollments = $this->student->enrollments()
            ->with('course')
            ->where('status', 'active')
            ->get();

        $grades = $this->student->grades()
            ->with('assessment')
            ->where('graded_at', '>=', now()->subDays(90))
            ->get();

        $recentTrend = $this->calculateGradeTrend($grades);
        $currentGpa = $this->student->gpa;

        return <<<PROMPT
You are a student progress tracking and early warning agent.

Student Profile:
- ID: {$this->student->student_id}
- Major: {$this->student->major}
- Current GPA: {$currentGpa}
- Active Enrollments: {$enrollments->count()}

Recent Grade Trend: {$recentTrend}
Grade Trend Direction: " . ($this->getTrendDirection($recentTrend) ?? 'stable') . "

Your task is to analyze this student's current academic standing and:
1. Calculate a risk score (0-100) where higher = more at risk
2. Identify specific areas of concern (low grades, missing submissions, declining trend)
3. Recommend interventions (tutoring, office hours, study groups)
4. Determine if immediate escalation is needed
5. Suggest specific actions the student can take this week

Output as structured JSON.
PROMPT;
    }

    public function analyze(): array
    {
        $grades = $this->student->grades()
            ->with('assessment.course')
            ->where('graded_at', '>=', now()->subDays(90))
            ->get();

        $enrollments = $this->student->enrollments()
            ->with('course')
            ->get();

        $riskScore = $this->calculateRiskScore($grades, $enrollments);
        $flags = $this->detectFlags($grades, $enrollments);

        $response = $this
            ->maxTokens(2048)
            ->prompt("Analyze this student's progress data:\n"
                . "Risk Score: {$riskScore}\n"
                . "Flags: " . json_encode($flags, JSON_PRETTY_PRINT) . "\n"
                . "Generate a comprehensive progress report with recommendations.");

        $analysis = json_decode($response->text(), true) ?? [];

        return [
            'student_id' => $this->student->id,
            'risk_score' => $riskScore,
            'risk_level' => $this->riskLevel($riskScore),
            'flags' => $flags,
            'trend' => $this->calculateGradeTrend($grades),
            'analysis' => $analysis,
            'assessed_at' => now()->toIso8601String(),
        ];
    }

    public function detectFlags(Collection $grades, Collection $enrollments): array
    {
        $flags = [];

        if ($this->student->gpa < 2.0) {
            $flags[] = [
                'type' => 'low_gpa',
                'severity' => 'critical',
                'message' => "GPA is {$this->student->gpa} Ã¢â‚¬â€ below 2.0 threshold.",
            ];
        }

        $missingGrades = $enrollments->where('status', 'active')
            ->filter(function ($enrollment) use ($grades) {
                $courseGrades = $grades->filter(fn ($g) =>
                    $g->assessment && $g->assessment->course_id === $enrollment->course_id);
                return $courseGrades->isEmpty();
            });

        foreach ($missingGrades as $enrollment) {
            $flags[] = [
                'type' => 'no_grades',
                'severity' => 'warning',
                'message' => "No grades recorded for {$enrollment->course->code}.",
                'course_code' => $enrollment->course->code,
            ];
        }

        $lowScores = $grades->filter(fn ($g) => $g->percentage !== null && $g->percentage < 60);
        foreach ($lowScores as $grade) {
            $flags[] = [
                'type' => 'low_score',
                'severity' => 'high',
                'message' => "Scored {$grade->percentage}% on {$grade->assessment->title}.",
                'assessment' => $grade->assessment->title,
            ];
        }

        $trend = $this->calculateGradeTrend($grades);
        if ($trend < -10) {
            $flags[] = [
                'type' => 'declining_trend',
                'severity' => 'high',
                'message' => "Grade trend declining by {$trend}% over the evaluation period.",
            ];
        }

        $thisWeek = $grades->filter(fn ($g) =>
            $g->created_at >= now()->startOfWeek()
        );
        if ($thisWeek->isEmpty() && $enrollments->where('status', 'active')->isNotEmpty()) {
            $flags[] = [
                'type' => 'no_recent_activity',
                'severity' => 'low',
                'message' => 'No grading activity in the current week.',
            ];
        }

        return $flags;
    }

    public function detectAtRiskStudents(): Collection
    {
        $threshold = $this->config['gpa_threshold'] ?? 2.0;
        $minGrades = $this->config['min_grades_required'] ?? 3;

        return Student::with(['grades', 'enrollments'])
            ->where('gpa', '<', $threshold)
            ->get()
            ->filter(function ($student) use ($minGrades) {
                $recentGrades = $student->grades()
                    ->where('graded_at', '>=', now()->subDays(90))
                    ->count();
                return $recentGrades >= $minGrades;
            });
    }

    protected function calculateRiskScore(Collection $grades, Collection $enrollments): int
    {
        $score = 0;

        if ($this->student->gpa < 1.0) {
            $score += 40;
        } elseif ($this->student->gpa < 2.0) {
            $score += 25;
        } elseif ($this->student->gpa < 2.5) {
            $score += 10;
        }

        $activeCount = $enrollments->where('status', 'active')->count();
        $completedCount = $enrollments->where('status', 'completed')->count();
        $totalAttempted = $activeCount + $completedCount;

        if ($totalAttempted > 0) {
            $failureRate = $activeCount > 0
                ? ($activeCount / $totalAttempted) * 100 : 0;
            $score += min(20, $failureRate);
        }

        $lowGrades = $grades->filter(fn ($g) => $g->percentage !== null && $g->percentage < 60)->count();
        if ($lowGrades > 3) {
            $score += 15;
        } elseif ($lowGrades > 1) {
            $score += 8;
        }

        $trend = $this->calculateGradeTrend($grades);
        if ($trend < -15) {
            $score += 15;
        } elseif ($trend < -5) {
            $score += 8;
        }

        return min(100, $score);
    }

    protected function calculateGradeTrend(Collection $grades): float
    {
        if ($grades->count() < 2) {
            return 0;
        }

        $sorted = $grades->sortBy('graded_at')->values();
        $first = $sorted->first();
        $last = $sorted->last();

        if (! $first->percentage || ! $last->percentage) {
            return 0;
        }

        return $last->percentage - $first->percentage;
    }

    protected function getTrendDirection(?float $trend): ?string
    {
        if ($trend === null) {
            return null;
        }
        if ($trend > 5) {
            return 'improving';
        }
        if ($trend < -5) {
            return 'declining';
        }
        return 'stable';
    }

    protected function riskLevel(int $score): string
    {
        return match (true) {
            $score >= 70 => 'critical',
            $score >= 45 => 'high',
            $score >= 20 => 'medium',
            default => 'low',
        };
    }
}
```

#### Artisan Command for Progress Monitoring

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Education\ProgressTrackingAgent;
use App\Models\Student;
use Illuminate\Console\Command;

class MonitorStudentProgress extends Command
{
    protected $signature = 'education:monitor-progress
        {--gpa-threshold=2.0 : GPA threshold for at-risk detection}
        {--notify : Send notifications for at-risk students}';

    protected $description = 'Run the student progress monitoring agent';

    public function handle(): int
    {
        $threshold = (float) $this->option('gpa-threshold');

        $agent = new ProgressTrackingAgent(
            student: new Student(),
            config: ['gpa_threshold' => $threshold],
        );

        $this->info("Scanning for at-risk students (GPA < {$threshold})...");

        $atRisk = $agent->detectAtRiskStudents();

        $this->info("Found {$atRisk->count()} at-risk students.");

        foreach ($atRisk as $student) {
            $studentAgent = new ProgressTrackingAgent($student);
            $analysis = $studentAgent->analyze();

            $this->line("---");
            $this->line("Student: {$student->student_id} (GPA: {$student->gpa})");
            $this->line("Risk Score: {$analysis['risk_score']} Ã¢â‚¬â€ {$analysis['risk_level']}");
            $this->line("Flags: " . count($analysis['flags']));

            if ($this->option('notify') && $analysis['risk_level'] === 'critical') {
                $user = $student->user;
                if ($user) {
                    $user->notify(new \App\Notifications\AtRiskAlert($analysis));
                    $this->line("Notification sent to {$user->email}");
                }
            }
        }

        return Command::SUCCESS;
    }
}
```

---

### 29.7 Enrollment Workflow Automation

<a href="../../../assets/images/diagrams/laravel/29-education/29-7-enrollment-workflow-automation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-7-enrollment-workflow-automation-handwritten.svg" alt="Handwritten: 29.7 Enrollment Workflow Automation" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-7-enrollment-workflow-automation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-7-enrollment-workflow-automation-diagram.svg" alt="Diagram: 29.7 Enrollment Workflow Automation" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-7-enrollment-workflow-automation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-7-enrollment-workflow-automation-sticky.svg" alt="Sticky Note: 29.7 Enrollment Workflow Automation" width="30%">
</a>



> **One-Sentence Takeaway:** Enrollment agents handle registration, prerequisites, waitlists, and notifications.

Enrollment automation handles course registration, prerequisite validation, waitlist management, and notification Ã¢â‚¬â€ replacing manual administrative processes with an AI-driven workflow.

#### The EnrollmentAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Student;
use Carbon\Carbon;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class EnrollmentAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Student $student,
        protected Course $course,
        protected array $semester,
    ) {}

    public function instructions(): Stringable|string
    {
        $completedCourses = $this->student->enrollments()
            ->where('status', 'completed')
            ->with('course')
            ->get();

        $completedCodes = $completedCourses->pluck('course.code')->toArray();
        $prerequisites = $this->course->prerequisites ?? [];

        $metPrereqs = array_intersect($prerequisites, $completedCodes);
        $missingPrereqs = array_diff($prerequisites, $completedCodes);

        $currentCredits = $this->student->enrollments()
            ->where('status', 'active')
            ->with('course')
            ->get()
            ->sum(fn ($e) => $e->course->credits ?? 0);

        $maxCredits = 18;

        return <<<PROMPT
You are an enrollment workflow automation agent.

Student: {$this->student->student_id} ({$this->student->major})
Course: {$this->course->code} Ã¢â‚¬â€ {$this->course->title}
Credits: {$this->course->credits} | Current Load: {$currentCredits}/{$maxCredits}

Prerequisites Required: " . implode(', ', $prerequisites) . "
Prerequisites Met: " . implode(', ', $metPrereqs) . "
Prerequisites Missing: " . implode(', ', $missingPrereqs) . "

Semester: {$this->semester['term']} {$this->semester['year']}

Your task is to validate the enrollment request and either:
1. Approve it if all conditions are met
2. Reject it with a clear reason if conditions are not met
3. Place the student on a waitlist if the course is full
4. Suggest alternative courses if prerequisites are missing

Provide a structured decision with approval status, reasons, and next steps.
PROMPT;
    }

    public function processEnrollment(): array
    {
        $validation = $this->validateEnrollment();

        if (! $validation['eligible']) {
            return [
                'status' => 'rejected',
                'reasons' => $validation['reasons'],
                'suggestions' => $validation['suggestions'],
            ];
        }

        if ($validation['course_full']) {
            $position = $this->addToWaitlist();
            return [
                'status' => 'waitlisted',
                'waitlist_position' => $position,
                'message' => "You have been placed on the waitlist at position #{$position}.",
            ];
        }

        $enrollment = $this->createEnrollment();

        $this->sendConfirmation($enrollment);

        return [
            'status' => 'enrolled',
            'enrollment_id' => $enrollment->id,
            'message' => "Successfully enrolled in {$this->course->code}.",
        ];
    }

    protected function validateEnrollment(): array
    {
        $reasons = [];
        $suggestions = [];
        $eligible = true;
        $courseFull = false;

        $prerequisites = $this->course->prerequisites ?? [];
        if (! empty($prerequisites)) {
            $completedCodes = $this->student->enrollments()
                ->where('status', 'completed')
                ->with('course')
                ->get()
                ->pluck('course.code')
                ->toArray();

            $missing = array_diff($prerequisites, $completedCodes);
            if (! empty($missing)) {
                $eligible = false;
                $reasons[] = 'Missing prerequisites: ' . implode(', ', $missing);

                $suggestions = Course::whereIn('code', $missing)
                    ->pluck('title')
                    ->map(fn ($t) => "Complete prerequisite: {$t}")
                    ->toArray();
            }
        }

        $existing = Enrollment::where('student_id', $this->student->id)
            ->where('course_id', $this->course->id)
            ->where('status', 'active')
            ->exists();

        if ($existing) {
            $eligible = false;
            $reasons[] = "Already enrolled in {$this->course->code}.";
        }

        $currentCredits = $this->student->enrollments()
            ->where('status', 'active')
            ->with('course')
            ->get()
            ->sum(fn ($e) => $e->course->credits ?? 0);

        if (($currentCredits + ($this->course->credits ?? 0)) > 18) {
            $eligible = false;
            $reasons[] = "Exceeds maximum credit load (18 credits).";
            $suggestions[] = "Drop another course to free up credits.";
        }

        $activeEnrollments = Enrollment::where('course_id', $this->course->id)
            ->where('status', 'active')
            ->count();

        $capacity = $this->course->metadata['capacity'] ?? 100;
        if ($activeEnrollments >= $capacity) {
            $courseFull = true;
        }

        return [
            'eligible' => $eligible,
            'reasons' => $reasons,
            'suggestions' => $suggestions,
            'course_full' => $courseFull,
        ];
    }

    protected function addToWaitlist(): int
    {
        $lastPosition = Enrollment::where('course_id', $this->course->id)
            ->where('status', 'waitlisted')
            ->max('waitlist_position');

        $position = ($lastPosition ?? 0) + 1;

        Enrollment::create([
            'student_id' => $this->student->id,
            'course_id' => $this->course->id,
            'semester' => "{$this->semester['term']} {$this->semester['year']}",
            'status' => 'waitlisted',
            'enrolled_at' => now(),
            'waitlist_position' => $position,
        ]);

        return $position;
    }

    protected function createEnrollment(): Enrollment
    {
        $enrollment = Enrollment::create([
            'student_id' => $this->student->id,
            'course_id' => $this->course->id,
            'semester' => "{$this->semester['term']} {$this->semester['year']}",
            'status' => 'active',
            'enrolled_at' => now(),
        ]);

        return $enrollment;
    }

    protected function sendConfirmation(Enrollment $enrollment): void
    {
        $user = $this->student->user;
        if ($user) {
            $user->notify(new \App\Notifications\EnrollmentConfirmation($enrollment));
        }
    }
}
```

#### EnrollmentController

```php
<?php

namespace App\Http\Controllers\Api\Education;

use App\Ai\Agents\Education\EnrollmentAgent;
use App\Models\Course;
use App\Models\Student;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function enroll(Request $request): array
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'course_id' => 'required|exists:courses,id',
            'term' => 'required|string',
            'year' => 'required|integer',
        ]);

        $student = Student::findOrFail($request->input('student_id'));
        $course = Course::findOrFail($request->input('course_id'));

        $agent = new EnrollmentAgent(
            student: $student,
            course: $course,
            semester: [
                'term' => $request->input('term'),
                'year' => $request->input('year'),
            ],
        );

        $result = $agent->processEnrollment();

        return [
            'student_id' => $student->id,
            'course_code' => $course->code,
            'result' => $result,
        ];
    }

    public function checkEligibility(Request $request): array
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'course_id' => 'required|exists:courses,id',
        ]);

        $student = Student::findOrFail($request->input('student_id'));
        $course = Course::findOrFail($request->input('course_id'));

        $agent = new EnrollmentAgent($student, $course, [
            'term' => 'Fall',
            'year' => now()->year,
        ]);

        $reflection = new \ReflectionMethod($agent, 'validateEnrollment');
        $reflection->setAccessible(true);
        $validation = $reflection->invoke($agent);

        return [
            'eligible' => $validation['eligible'],
            'reasons' => $validation['reasons'],
            'suggestions' => $validation['suggestions'],
            'course_full' => $validation['course_full'],
        ];
    }
}
```

---

### 29.8 Recommendation Systems for Curricula

<a href="../../../assets/images/diagrams/laravel/29-education/29-8-recommendation-systems-for-curricula-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-8-recommendation-systems-for-curricula-handwritten.svg" alt="Handwritten: 29.8 Recommendation Systems for Curricula" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-8-recommendation-systems-for-curricula-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-8-recommendation-systems-for-curricula-diagram.svg" alt="Diagram: 29.8 Recommendation Systems for Curricula" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/29-8-recommendation-systems-for-curricula-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/29-8-recommendation-systems-for-curricula-sticky.svg" alt="Sticky Note: 29.8 Recommendation Systems for Curricula" width="30%">
</a>



> **One-Sentence Takeaway:** Recommendation agents suggest courses and learning paths based on student history and goals.

A curriculum recommendation system helps students choose courses that align with their career goals and academic history. By using vector similarity search, the agent maps course content and student profiles into the same semantic space.

#### The CurriculumRecommendationAgent

```php
<?php

namespace App\Ai\Agents\Education;

use App\Models\Course;
use App\Models\Student;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class CurriculumRecommendationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Student $student,
        protected array $options = [],
    ) {}

    public function instructions(): Stringable|string
    {
        $goals = $this->student->career_goals ?? [];
        $major = $this->student->major ?? 'Undeclared';
        $completedCourses = $this->student->enrollments()
            ->where('status', 'completed')
            ->with('course')
            ->get();

        $completedDescriptions = $completedCourses->map(fn ($e) =>
            $e->course->title . ': ' . $e->course->description
        )->toArray();

        return <<<PROMPT
You are a curriculum recommendation agent that uses semantic matching between
student profiles and course content to suggest optimal learning paths.

Student Profile:
- Major: {$major}
- Career Goals: " . json_encode($goals) . "
- Completed Courses: " . implode(' | ', $completedDescriptions) . "

Your task is to analyze the student's background and recommend courses that:
1. Build skills directly relevant to their stated career goals
2. Fill knowledge gaps in their prerequisite chains
3. Provide balanced coverage of their major's core competencies
4. Challenge them at the appropriate difficulty level
5. Introduce emerging topics in their field of interest

For each recommendation, provide:
- Course code and title
- Relevance score (0-100)
- Which career goal it serves
- Prerequisite alignment
- Expected difficulty for this student

Output as a ranked JSON array.
PROMPT;
    }

    public function recommend(): array
    {
        $goals = $this->student->career_goals ?? [];
        $completedIds = $this->student->enrollments()
            ->where('status', 'completed')
            ->pluck('course_id')
            ->toArray();

        $availableCourses = Course::active()
            ->whereNotIn('id', $completedIds)
            ->get();

        $scored = $this->scoreCourses($availableCourses, $goals);

        $response = $this
            ->maxTokens(2048)
            ->prompt("Based on the student profile and available courses, "
                . "generate ranked recommendations. "
                . "Pre-scored candidates: " . json_encode(array_slice($scored, 0, 15)));

        $aiRecommendations = json_decode($response->text(), true) ?? [];

        return [
            'student_id' => $this->student->id,
            'career_goals' => $goals,
            'recommendations' => $aiRecommendations,
            'scored_courses' => $scored,
        ];
    }

    public function recommendWithVectorSearch(): array
    {
        $goals = $this->student->career_goals ?? [];
        $goalText = implode(' ', $goals);

        $completedIds = $this->student->enrollments()
            ->where('status', 'completed')
            ->pluck('course_id')
            ->toArray();

        $courses = Course::active()
            ->whereNotIn('id', $completedIds)
            ->get();

        $scored = [];
        foreach ($courses as $course) {
            $courseText = $course->title . ' ' . $course->description . ' '
                . implode(' ', $course->topics ?? []) . ' '
                . implode(' ', $course->learning_objectives ?? []);

            $similarity = $this->cosineSimilarity(
                $this->vectorize($goalText),
                $this->vectorize($courseText),
            );

            $scored[] = [
                'course_id' => $course->id,
                'code' => $course->code,
                'title' => $course->title,
                'similarity' => round($similarity, 4),
                'difficulty' => $course->difficulty_level,
                'department' => $course->department,
            ];
        }

        usort($scored, fn ($a, $b) => $b['similarity'] <=> $a['similarity']);

        return [
            'student_id' => $this->student->id,
            'method' => 'vector_similarity',
            'recommendations' => array_slice($scored, 0, 10),
        ];
    }

    protected function scoreCourses($courses, array $goals): array
    {
        $scored = [];

        foreach ($courses as $course) {
            $score = 50;

            foreach ($goals as $goal) {
                $goalLower = strtolower($goal);
                $descriptionLower = strtolower($course->description);
                $topicsLower = strtolower(implode(' ', $course->topics ?? []));

                if (str_contains($descriptionLower, $goalLower)
                    || str_contains($topicsLower, $goalLower)) {
                    $score += 25;
                }
            }

            $prerequisites = $course->prerequisites ?? [];
            $completedCodes = $this->student->enrollments()
                ->where('status', 'completed')
                ->with('course')
                ->get()
                ->pluck('course.code')
                ->toArray();

            $missing = array_diff($prerequisites, $completedCodes);
            $score -= count($missing) * 10;

            $scored[] = [
                'course_id' => $course->id,
                'code' => $course->code,
                'title' => $course->title,
                'score' => max(0, $score),
                'difficulty' => $course->difficulty_level,
            ];
        }

        usort($scored, fn ($a, $b) => $b['score'] <=> $a['score']);

        return $scored;
    }

    protected function vectorize(string $text): array
    {
        $text = strtolower($text);
        $words = str_word_count($text, 1);
        $words = array_filter($words, fn ($w) => strlen($w) > 2);

        $stopWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you',
            'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out',
            'has', 'have', 'been', 'some', 'them', 'than', 'that',
            'this', 'with', 'will', 'their', 'what', 'which'];

        $filtered = array_diff($words, $stopWords);
        $counts = array_count_values($filtered);

        $max = max($counts) ?: 1;
        $vector = [];
        foreach ($counts as $word => $count) {
            $vector[$word] = $count / $max;
        }

        return $vector;
    }

    protected function cosineSimilarity(array $vecA, array $vecB): float
    {
        $allKeys = array_unique(array_merge(array_keys($vecA), array_keys($vecB)));

        $dotProduct = 0;
        $normA = 0;
        $normB = 0;

        foreach ($allKeys as $key) {
            $valA = $vecA[$key] ?? 0;
            $valB = $vecB[$key] ?? 0;

            $dotProduct += $valA * $valB;
            $normA += $valA * $valA;
            $normB += $valB * $valB;
        }

        $denominator = sqrt($normA) * sqrt($normB);

        return $denominator > 0 ? $dotProduct / $denominator : 0;
    }
}
```

#### Controller for Curriculum Recommendations

```php
<?php

namespace App\Http\Controllers\Api\Education;

use App\Ai\Agents\Education\CurriculumRecommendationAgent;
use App\Models\Student;
use Illuminate\Http\Request;

class CurriculumRecommendationController extends Controller
{
    public function recommend(Request $request, int $studentId): array
    {
        $student = Student::with('enrollments.course', 'grades')
            ->findOrFail($studentId);

        $agent = new CurriculumRecommendationAgent(
            student: $student,
            options: $request->only(['max_recommendations', 'focus_area']),
        );

        $recommendations = $agent->recommend();

        return [
            'student_id' => $studentId,
            'recommendations' => $recommendations['recommendations'],
            'scored_courses' => $recommendations['scored_courses'],
        ];
    }

    public function vectorRecommend(Request $request, int $studentId): array
    {
        $student = Student::with('enrollments.course')
            ->findOrFail($studentId);

        $agent = new CurriculumRecommendationAgent($student);

        return $agent->recommendWithVectorSearch();
    }
}
```

---

### Summary

<a href="../../../assets/images/diagrams/laravel/29-education/summary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/summary-handwritten.svg" alt="Handwritten: Summary" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/summary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/summary-diagram.svg" alt="Diagram: Summary" width="30%">
</a>
<a href="../../../assets/images/diagrams/laravel/29-education/summary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/laravel/29-education/summary-sticky.svg" alt="Sticky Note: Summary" width="30%">
</a>


This chapter demonstrated how to build a comprehensive AI-powered education platform within Laravel. The eight sections covered the complete EdTech stack:

- **Data models**: Five Eloquent models (Student, Course, Enrollment, Assessment, Grade) with migrations that form the relational foundation for any education application
- **Personalized learning paths**: A `LearningPathAgent` that analyzes student profiles, career goals, and academic history to recommend the next optimal courses using both AI analysis and algorithmic relevance scoring
- **Automated grading**: A `GradingAgent` that evaluates open-ended submissions against configurable rubrics, produces structured scores with feedback, and flags low-confidence results for human review
- **Content generation**: A `ContentGenerationAgent` that produces quizzes, lesson plans, study guides, and assignments from course specifications
- **Adaptive quizzes**: An `AdaptiveQuizAgent` that adjusts question difficulty in real-time based on consecutive correct/incorrect answers, maintaining appropriate challenge levels
- **Progress tracking**: A `ProgressTrackingAgent` with an early warning system that calculates risk scores, detects flags (low GPA, declining trends, missing grades), and identifies at-risk students
- **Enrollment automation**: An `EnrollmentAgent` that validates prerequisites, checks credit limits, manages waitlists, and sends confirmations Ã¢â‚¬â€ replacing manual administrative processes
- **Curriculum recommendations**: A `CurriculumRecommendationAgent` using both AI-powered analysis and vector similarity search to match course content with student career goals

The architectural pattern across all sections is consistent: database models store education domain data, agent classes encapsulate AI reasoning, and controllers expose API endpoints that connect the two. This makes the system modular, testable, and extensible Ã¢â‚¬â€ each agent can be improved independently without affecting the others.

---

### Exercises

#### Review Questions

1. What are the five core education data models, and what relationships exist between them?

2. How does the `LearningPathAgent` score course relevance for a student? List three factors it considers.

3. Why does the `GradingAgent` return a confidence score alongside the grade, and what happens when confidence is below 0.7?

4. What algorithm does the `AdaptiveQuizAgent` use to adjust difficulty? At what thresholds does it increase or decrease difficulty?

5. List three flags the `ProgressTrackingAgent` detects that would indicate an at-risk student.

#### Application Problems

1. **Skill Gap Analyzer**. Extend the `LearningPathAgent` to compare a student's current skill assessments against the skills required for their career goals. Generate a gap analysis report that lists missing skills and maps them to specific courses that teach them.

2. **Rubric Designer**. Build a rubric generation endpoint that uses the `ContentGenerationAgent` to produce a detailed grading rubric from a topic description. The rubric should include 4-6 criteria, each with 4 performance levels (exemplary, proficient, developing, beginning) and point values.

3. **Waitlist Auto-Promoter**. Create an Artisan command that runs daily and checks waitlisted students against current enrollment capacity. When a seat opens, automatically promote the next student from the waitlist and send them a notification with an enrollment deadline.

#### Challenge Problem

**Complete Adaptive Learning System**. Build an end-to-end personalized education platform that integrates all eight agent types:

1. **Onboarding Agent**: When a student first registers, the `LearningPathAgent` analyzes their background and generates a personalized 4-semester learning path
2. **Content Generator**: For each course in the path, the `ContentGenerationAgent` pre-generates lesson plans and initial quiz banks
3. **Adaptive Assessment**: Students take an initial adaptive quiz that establishes their baseline knowledge level
4. **Automated Grading**: All open-ended submissions are graded by the `GradingAgent` with rubric-based scoring
5. **Progress Monitoring**: The `ProgressTrackingAgent` runs weekly, flagging at-risk students and sending intervention recommendations
6. **Curriculum Adjustment**: Based on progress data, the `CurriculumRecommendationAgent` suggests course adjustments for the next semester
7. **Enrollment Automation**: At registration time, the `EnrollmentAgent` validates prerequisites, manages waitlists, and confirms enrollment
8. **Analytics Dashboard**: A reporting command summarizes system-wide metrics Ã¢â‚¬â€ average risk scores, grade distributions, recommendation adoption rates, and waitlist statistics

Implement all agents, controllers, routes, notifications, and the weekly monitoring command. Include proper error handling, logging, and at least three notification types.