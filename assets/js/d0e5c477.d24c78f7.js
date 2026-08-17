"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[71030],{

/***/ 35047
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_29_education_md_d0e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-29-education-md-d0e.json
const site_docs_courses_laravel_29_education_md_d0e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/29-education","title":"Chapter 29: Education & EdTech","description":"Previous Logistics","source":"@site/docs/courses/laravel/29-education.md","sourceDirName":"courses/laravel","slug":"/laravel/29-education","permalink":"/ai-engineering-journey/laravel/29-education","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"id":"29-education","slug":"/laravel/29-education","title":"Chapter 29: Education & EdTech","sidebar_label":"Chapter 29: Education & EdTech","sidebar_position":29},"sidebar":"course-laravel","previous":{"title":"Chapter 28: Finance & FinTech Agents","permalink":"/ai-engineering-journey/laravel/28-finance"},"next":{"title":"Chapter 30: Logistics & Supply Chain Agents","permalink":"/ai-engineering-journey/laravel/30-logistics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/29-education.md


const frontMatter = {
	id: '29-education',
	slug: '/laravel/29-education',
	title: 'Chapter 29: Education & EdTech',
	sidebar_label: 'Chapter 29: Education & EdTech',
	sidebar_position: 29
};
const contentTitle = 'Chapter 29: Education & EdTech';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "29.1 Education Data Models",
  "id": "291-education-data-models",
  "level": 3
}, {
  "value": "Migration for Students",
  "id": "migration-for-students",
  "level": 4
}, {
  "value": "Migration for Courses",
  "id": "migration-for-courses",
  "level": 4
}, {
  "value": "Migration for Enrollments",
  "id": "migration-for-enrollments",
  "level": 4
}, {
  "value": "Migration for Assessments",
  "id": "migration-for-assessments",
  "level": 4
}, {
  "value": "Migration for Grades",
  "id": "migration-for-grades",
  "level": 4
}, {
  "value": "Eloquent Models",
  "id": "eloquent-models",
  "level": 4
}, {
  "value": "29.2 Personalized Learning Path Agents",
  "id": "292-personalized-learning-path-agents",
  "level": 3
}, {
  "value": "The LearningPathAgent",
  "id": "the-learningpathagent",
  "level": 4
}, {
  "value": "Controller for Learning Path",
  "id": "controller-for-learning-path",
  "level": 4
}, {
  "value": "29.3 Assessment &amp; Grading Automation",
  "id": "293-assessment--grading-automation",
  "level": 3
}, {
  "value": "The GradingAgent",
  "id": "the-gradingagent",
  "level": 4
}, {
  "value": "Controller for Automated Grading",
  "id": "controller-for-automated-grading",
  "level": 4
}, {
  "value": "29.4 Content Generation for Courses",
  "id": "294-content-generation-for-courses",
  "level": 3
}, {
  "value": "The ContentGenerationAgent",
  "id": "the-contentgenerationagent",
  "level": 4
}, {
  "value": "Controller for Content Generation",
  "id": "controller-for-content-generation",
  "level": 4
}, {
  "value": "29.5 Adaptive Quiz Engines",
  "id": "295-adaptive-quiz-engines",
  "level": 3
}, {
  "value": "The AdaptiveQuizAgent",
  "id": "the-adaptivequizagent",
  "level": 4
}, {
  "value": "Controller for Adaptive Quiz",
  "id": "controller-for-adaptive-quiz",
  "level": 4
}, {
  "value": "29.6 Student Progress Tracking Agents",
  "id": "296-student-progress-tracking-agents",
  "level": 3
}, {
  "value": "The ProgressTrackingAgent",
  "id": "the-progresstrackingagent",
  "level": 4
}, {
  "value": "Artisan Command for Progress Monitoring",
  "id": "artisan-command-for-progress-monitoring",
  "level": 4
}, {
  "value": "29.7 Enrollment Workflow Automation",
  "id": "297-enrollment-workflow-automation",
  "level": 3
}, {
  "value": "The EnrollmentAgent",
  "id": "the-enrollmentagent",
  "level": 4
}, {
  "value": "EnrollmentController",
  "id": "enrollmentcontroller",
  "level": 4
}, {
  "value": "29.8 Recommendation Systems for Curricula",
  "id": "298-recommendation-systems-for-curricula",
  "level": 3
}, {
  "value": "The CurriculumRecommendationAgent",
  "id": "the-curriculumrecommendationagent",
  "level": 4
}, {
  "value": "Controller for Curriculum Recommendations",
  "id": "controller-for-curriculum-recommendations",
  "level": 4
}, {
  "value": "Summary",
  "id": "summary",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 3
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 4
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 4
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-29-education--edtech",
        children: "Chapter 29: Education & EdTech"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/28-finance",
          children: "Finance"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/30-logistics",
          children: "Logistics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design complete education data models including Student, Course, Enrollment, Assessment, and Grade with Eloquent relationships and migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a personalized learning path agent that analyzes student performance data and recommends optimal course sequences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement automated essay grading with AI using rubric-based structured output for consistent, fair assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a content generation agent that produces lesson plans, quiz questions, and study materials from curriculum specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct an adaptive quiz engine that dynamically adjusts question difficulty based on real-time student performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop a student progress tracking agent with an early warning system that flags at-risk students using configurable thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate enrollment workflows with prerequisite validation, waitlist management, and multi-channel notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a curriculum recommendation system using vector similarity search that maps courses to career goals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Education data models for students, courses, enrollments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design schemas for learning management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning Paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personalized learning path agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapt curriculum based on student performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assessments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated assessment and grading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grade submissions with AI and generate feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI-generated course content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate lessons, quizzes, and study materials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quiz Engines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive quiz engines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust difficulty based on student proficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Progress Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Student progress tracking agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor completion, grades, and engagement metrics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Student] --> B[Laravel App]     B --> C[Learning Path Agent]     B --> D[Assessment Agent]     B --> E[Quiz Engine]     B --> F[Progress Tracker]     C --> G[Curriculum DB]     D --> H[Submission Queue]     E --> I[Question Bank]     F --> J[Analytics DB]     H --> K[AI Grader] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/29-education.png",
        alt: "Education Domain"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "291-education-data-models",
      children: "29.1 Education Data Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Education schemas cover students, courses, enrollments, assessments, submissions, and grades with proper relationships."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every EdTech application begins with the core domain models. Students enroll in courses, complete assessments, and receive grades. We build these models with Eloquent migrations, proper relationships, and AI-ready fields."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-students",
      children: "Migration for Students"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('students', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('user_id')->constrained()->cascadeOnDelete();\n            $table->string('student_id')->unique();\n            $table->string('grade_level');\n            $table->string('major')->nullable();\n            $table->decimal('gpa', 3, 2)->default(0.00);\n            $table->json('learning_preferences')->nullable();\n            $table->json('career_goals')->nullable();\n            $table->json('skill_assessments')->nullable();\n            $table->timestamps();\n\n            $table->index('grade_level');\n            $table->index('major');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('students');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-courses",
      children: "Migration for Courses"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('courses', function (Blueprint $table) {\n            $table->id();\n            $table->string('code')->unique();\n            $table->string('title');\n            $table->text('description');\n            $table->string('department');\n            $table->integer('credits');\n            $table->string('difficulty_level');\n            $table->json('prerequisites')->nullable();\n            $table->json('learning_objectives')->nullable();\n            $table->json('topics')->nullable();\n            $table->json('metadata')->nullable();\n            $table->boolean('is_active')->default(true);\n            $table->timestamps();\n\n            $table->index('department');\n            $table->index('difficulty_level');\n            $table->index('is_active');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('courses');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-enrollments",
      children: "Migration for Enrollments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('enrollments', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('student_id')->constrained()->cascadeOnDelete();\n            $table->foreignId('course_id')->constrained()->cascadeOnDelete();\n            $table->string('semester');\n            $table->string('status')->default('active');\n            $table->date('enrolled_at');\n            $table->date('completed_at')->nullable();\n            $table->date('dropped_at')->nullable();\n            $table->text('drop_reason')->nullable();\n            $table->string('waitlist_position')->nullable();\n            $table->timestamps();\n\n            $table->unique(['student_id', 'course_id', 'semester']);\n            $table->index('status');\n            $table->index('semester');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('enrollments');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-assessments",
      children: "Migration for Assessments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('assessments', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('course_id')->constrained()->cascadeOnDelete();\n            $table->string('title');\n            $table->string('type');\n            $table->text('description')->nullable();\n            $table->json('questions')->nullable();\n            $table->json('rubric')->nullable();\n            $table->integer('max_score');\n            $table->decimal('weight', 3, 2)->default(1.00);\n            $table->timestamp('available_from')->nullable();\n            $table->timestamp('available_until')->nullable();\n            $table->integer('time_limit_minutes')->nullable();\n            $table->boolean('is_adaptive')->default(false);\n            $table->json('metadata')->nullable();\n            $table->timestamps();\n\n            $table->index('type');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('assessments');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "migration-for-grades",
      children: "Migration for Grades"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('grades', function (Blueprint $table) {\n            $table->id();\n            $table->foreignId('student_id')->constrained()->cascadeOnDelete();\n            $table->foreignId('assessment_id')->constrained()->cascadeOnDelete();\n            $table->foreignId('grader_id')->nullable()->constrained('users');\n            $table->decimal('score', 5, 2)->nullable();\n            $table->decimal('percentage', 5, 2)->nullable();\n            $table->string('letter_grade')->nullable();\n            $table->text('feedback')->nullable();\n            $table->json('rubric_scores')->nullable();\n            $table->json('ai_grading_data')->nullable();\n            $table->string('grading_method')->default('manual');\n            $table->timestamp('submitted_at')->nullable();\n            $table->timestamp('graded_at')->nullable();\n            $table->timestamps();\n\n            $table->unique(['student_id', 'assessment_id']);\n            $table->index('grading_method');\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('grades');\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "eloquent-models",
      children: "Eloquent Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass Student extends Model\n{\n    protected $fillable = [\n        'user_id', 'student_id', 'grade_level', 'major',\n        'gpa', 'learning_preferences', 'career_goals', 'skill_assessments',\n    ];\n\n    protected $casts = [\n        'gpa' => 'decimal:2',\n        'learning_preferences' => 'array',\n        'career_goals' => 'array',\n        'skill_assessments' => 'array',\n    ];\n\n    public function user(): BelongsTo\n    {\n        return $this->belongsTo(User::class);\n    }\n\n    public function enrollments(): HasMany\n    {\n        return $this->hasMany(Enrollment::class);\n    }\n\n    public function grades(): HasMany\n    {\n        return $this->hasMany(Grade::class);\n    }\n\n    public function scopeByMajor($query, string $major)\n    {\n        return $query->where('major', $major);\n    }\n\n    public function scopeAtRisk($query, float $gpaThreshold = 2.0)\n    {\n        return $query->where('gpa', '<', $gpaThreshold);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass Course extends Model\n{\n    protected $fillable = [\n        'code', 'title', 'description', 'department', 'credits',\n        'difficulty_level', 'prerequisites', 'learning_objectives',\n        'topics', 'metadata', 'is_active',\n    ];\n\n    protected $casts = [\n        'prerequisites' => 'array',\n        'learning_objectives' => 'array',\n        'topics' => 'array',\n        'metadata' => 'array',\n        'is_active' => 'boolean',\n    ];\n\n    public function enrollments(): HasMany\n    {\n        return $this->hasMany(Enrollment::class);\n    }\n\n    public function assessments(): HasMany\n    {\n        return $this->hasMany(Assessment::class);\n    }\n\n    public function scopeByDepartment($query, string $department)\n    {\n        return $query->where('department', $department);\n    }\n\n    public function scopeActive($query)\n    {\n        return $query->where('is_active', true);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass Enrollment extends Model\n{\n    protected $fillable = [\n        'student_id', 'course_id', 'semester', 'status',\n        'enrolled_at', 'completed_at', 'dropped_at', 'drop_reason',\n        'waitlist_position',\n    ];\n\n    protected $casts = [\n        'enrolled_at' => 'date',\n        'completed_at' => 'date',\n        'dropped_at' => 'date',\n    ];\n\n    public function student(): BelongsTo\n    {\n        return $this->belongsTo(Student::class);\n    }\n\n    public function course(): BelongsTo\n    {\n        return $this->belongsTo(Course::class);\n    }\n\n    public function scopeActive($query)\n    {\n        return $query->where('status', 'active');\n    }\n\n    public function scopeBySemester($query, string $semester)\n    {\n        return $query->where('semester', $semester);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\HasMany;\n\nclass Assessment extends Model\n{\n    protected $fillable = [\n        'course_id', 'title', 'type', 'description', 'questions',\n        'rubric', 'max_score', 'weight', 'available_from',\n        'available_until', 'time_limit_minutes', 'is_adaptive', 'metadata',\n    ];\n\n    protected $casts = [\n        'questions' => 'array',\n        'rubric' => 'array',\n        'available_from' => 'datetime',\n        'available_until' => 'datetime',\n        'is_adaptive' => 'boolean',\n        'metadata' => 'array',\n    ];\n\n    public function course(): BelongsTo\n    {\n        return $this->belongsTo(Course::class);\n    }\n\n    public function grades(): HasMany\n    {\n        return $this->hasMany(Grade::class);\n    }\n\n    public function scopeByType($query, string $type)\n    {\n        return $query->where('type', $type);\n    }\n\n    public function scopeAvailable($query)\n    {\n        return $query->where('available_from', '<=', now())\n            ->where(function ($q) {\n                $q->whereNull('available_until')\n                  ->orWhere('available_until', '>=', now());\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass Grade extends Model\n{\n    protected $fillable = [\n        'student_id', 'assessment_id', 'grader_id', 'score',\n        'percentage', 'letter_grade', 'feedback', 'rubric_scores',\n        'ai_grading_data', 'grading_method', 'submitted_at', 'graded_at',\n    ];\n\n    protected $casts = [\n        'score' => 'decimal:2',\n        'percentage' => 'decimal:2',\n        'rubric_scores' => 'array',\n        'ai_grading_data' => 'array',\n        'submitted_at' => 'datetime',\n        'graded_at' => 'datetime',\n    ];\n\n    public function student(): BelongsTo\n    {\n        return $this->belongsTo(Student::class);\n    }\n\n    public function assessment(): BelongsTo\n    {\n        return $this->belongsTo(Assessment::class);\n    }\n\n    public function grader(): BelongsTo\n    {\n        return $this->belongsTo(User::class, 'grader_id');\n    }\n\n    public function scopeByMethod($query, string $method)\n    {\n        return $query->where('grading_method', $method);\n    }\n\n    public function scopeRecent($query, int $days = 30)\n    {\n        return $query->where('graded_at', '>=', now()->subDays($days));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "292-personalized-learning-path-agents",
      children: "29.2 Personalized Learning Path Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Learning path agents analyze student performance and adapt curriculum recommendations in real time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A learning path agent analyzes a student's performance history, learning preferences, and career goals to recommend the optimal sequence of courses. It acts as an AI academic advisor that understands both the curriculum structure and the individual student."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-learningpathagent",
      children: "The LearningPathAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Course;\nuse App\\Models\\Student;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass LearningPathAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Student $student,\n        protected array $options = [],\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $preferences = $this->student->learning_preferences ?? [];\n        $goals = $this->student->career_goals ?? [];\n        $completedCourses = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->with('course')\n            ->get()\n            ->pluck('course.title')\n            ->toArray();\n\n        $avgGrade = $this->student->grades()\n            ->avg('percentage') ?? 0;\n\n        return <<<PROMPT\nYou are a personalized learning path advisor for a university system.\n\nStudent Profile:\n- Major: {$this->student->major}\n- Current GPA: {$this->student->gpa}\n- Grade Level: {$this->student->grade_level}\n- Average Grade: {$avgGrade}%\n- Completed Courses: \" . implode(', ', $completedCourses) . \"\n- Learning Preferences: \" . json_encode($preferences) . \"\n- Career Goals: \" . json_encode($goals) . \"\n\nYour task is to recommend the next 3-5 courses this student should take.\nConsider their academic history, prerequisite chains, career trajectory,\nand course difficulty progression. For each recommendation, provide:\n1. The course code and title\n2. Why it fits this student's path\n3. How it builds on their completed courses\n4. How it serves their career goals\n5. The expected difficulty level for this student\n\nOutput as structured JSON with a ranked list of recommendations.\nPROMPT;\n    }\n\n    public function analyze(): array\n    {\n        $response = $this\n            ->maxTokens(2048)\n            ->prompt('Analyze this student\\'s academic profile and generate a personalized learning path.');\n\n        $recommendations = json_decode($response->text(), true) ?? [];\n\n        return [\n            'student_id' => $this->student->id,\n            'recommendations' => $recommendations,\n            'generated_at' => now()->toIso8601String(),\n        ];\n    }\n\n    public function getRecommendedCourses(): array\n    {\n        $completedIds = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->pluck('course_id')\n            ->toArray();\n\n        $available = Course::active()\n            ->whereNotIn('id', $completedIds)\n            ->get();\n\n        $scores = [];\n        foreach ($available as $course) {\n            $score = $this->scoreCourseRelevance($course);\n            $scores[] = [\n                'course' => $course,\n                'score' => $score,\n            ];\n        }\n\n        usort($scores, fn ($a, $b) => $b['score'] <=> $a['score']);\n\n        return array_slice($scores, 0, 5);\n    }\n\n    protected function scoreCourseRelevance(Course $course): float\n    {\n        $score = 0.0;\n\n        $goals = $this->student->career_goals ?? [];\n        foreach ($goals as $goal) {\n            if (stripos($course->description, $goal) !== false\n                || stripos(json_encode($course->topics ?? []), $goal) !== false) {\n                $score += 3.0;\n            }\n        }\n\n        $completedTopics = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->with('course')\n            ->get()\n            ->pluck('course.topics')\n            ->flatten()\n            ->unique()\n            ->toArray();\n\n        $courseTopics = $course->topics ?? [];\n        $newTopics = array_diff($courseTopics, $completedTopics);\n        $score += count($newTopics) * 1.5;\n\n        $prerequisites = $course->prerequisites ?? [];\n        $metPrereqs = count(array_intersect($prerequisites, $completedTopics));\n        $totalPrereqs = count($prerequisites);\n        if ($totalPrereqs > 0) {\n            $score += ($metPrereqs / $totalPrereqs) * 2.0;\n        }\n\n        return $score;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "controller-for-learning-path",
      children: "Controller for Learning Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api\\Education;\n\nuse App\\Ai\\Agents\\Education\\LearningPathAgent;\nuse App\\Models\\Student;\nuse Illuminate\\Http\\Request;\n\nclass LearningPathController extends Controller\n{\n    public function recommend(Request $request, int $studentId): array\n    {\n        $student = Student::with('enrollments.course', 'grades')\n            ->findOrFail($studentId);\n\n        $agent = new LearningPathAgent(\n            student: $student,\n            options: $request->only(['focus', 'max_recommendations']),\n        );\n\n        $agentRecommendations = $agent->analyze();\n        $systemRecommendations = $agent->getRecommendedCourses();\n\n        $courses = collect($systemRecommendations)->map(fn ($r) => [\n            'id' => $r['course']->id,\n            'code' => $r['course']->code,\n            'title' => $r['course']->title,\n            'relevance_score' => round($r['score'], 1),\n            'difficulty' => $r['course']->difficulty_level,\n        ]);\n\n        return [\n            'student_id' => $studentId,\n            'ai_analysis' => $agentRecommendations,\n            'ranked_courses' => $courses,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Personalization improves outcomes, but students should always be able to override AI recommendations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "293-assessment--grading-automation",
      children: "29.3 Assessment & Grading Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Assessment agents grade submissions using AI and provide detailed feedback to students."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grading open-ended responses is one of the most time-consuming tasks in education. A grading agent uses AI with a rubric configuration to evaluate essays, short answers, and project submissions consistently, producing structured grades with detailed feedback."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-gradingagent",
      children: "The GradingAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Assessment;\nuse App\\Models\\Grade;\nuse App\\Models\\Student;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass GradingAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Assessment $assessment,\n        protected Student $student,\n        protected string $submission,\n        protected ?array $rubricOverrides = null,\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $rubric = $this->rubricOverrides ?? $this->assessment->rubric;\n        $maxScore = $this->assessment->max_score;\n\n        return <<<PROMPT\nYou are an automated grading agent. Grade the following student submission\nagainst the provided rubric. Be fair, consistent, and thorough.\n\nAssessment: {$this->assessment->title}\nMax Score: {$maxScore}\nType: {$this->assessment->type}\n\nRubric:\n\" . json_encode($rubric, JSON_PRETTY_PRINT) . \"\n\nSubmission:\n{$this->submission}\n\nFor each rubric criterion, provide:\n1. A score for that criterion\n2. Brief justification for the score\n3. Specific evidence from the submission\n\nThen provide:\n- Total score (integer, 0-{$maxScore})\n- Overall percentage\n- Letter grade (A/B/C/D/F with +/- modifiers)\n- Constructive feedback for the student\n- Areas of strength\n- Areas for improvement\n\nOutput as structured JSON with 'criterion_scores', 'total_score',\n'percentage', 'letter_grade', 'feedback', 'strengths', 'improvements'.\nPROMPT;\n    }\n\n    public function grade(): Grade\n    {\n        $response = $this\n            ->maxTokens(4096)\n            ->prompt('Grade this submission against the assessment rubric.');\n\n        $result = json_decode($response->text(), true) ?? $this->fallbackResult();\n\n        $grade = Grade::create([\n            'student_id' => $this->student->id,\n            'assessment_id' => $this->assessment->id,\n            'score' => $result['total_score'] ?? 0,\n            'percentage' => $result['percentage'] ?? 0,\n            'letter_grade' => $result['letter_grade'] ?? 'F',\n            'feedback' => $result['feedback'] ?? '',\n            'rubric_scores' => $result['criterion_scores'] ?? [],\n            'ai_grading_data' => [\n                'strengths' => $result['strengths'] ?? [],\n                'improvements' => $result['improvements'] ?? [],\n                'model' => 'ai-grading-v1',\n                'graded_at' => now()->toIso8601String(),\n            ],\n            'grading_method' => 'ai',\n            'submitted_at' => now(),\n            'graded_at' => now(),\n        ]);\n\n        return $grade;\n    }\n\n    public function gradeWithReview(): array\n    {\n        $grade = $this->grade();\n\n        $confidence = $this->assessConfidence();\n\n        if ($confidence < 0.7) {\n            $grade->update(['grading_method' => 'ai_pending_review']);\n            $this->flagForHumanReview($grade, $confidence);\n        }\n\n        return [\n            'grade' => $grade,\n            'confidence' => $confidence,\n            'needs_review' => $confidence < 0.7,\n        ];\n    }\n\n    protected function assessConfidence(): float\n    {\n        $submissionLength = strlen($this->submission);\n        $rubricDetail = count($this->assessment->rubric ?? []);\n\n        if ($submissionLength < 50) {\n            return 0.4;\n        }\n\n        $baseConfidence = min(0.9, 0.5 + ($rubricDetail * 0.05));\n        $lengthBonus = min(0.1, $submissionLength / 10000 * 0.1);\n\n        return min(1.0, $baseConfidence + $lengthBonus);\n    }\n\n    protected function flagForHumanReview(Grade $grade, float $confidence): void\n    {\n        \\App\\Models\\GradeReview::create([\n            'grade_id' => $grade->id,\n            'reason' => 'low_confidence',\n            'confidence_score' => $confidence,\n            'status' => 'pending',\n        ]);\n    }\n\n    protected function fallbackResult(): array\n    {\n        return [\n            'total_score' => 0,\n            'percentage' => 0,\n            'letter_grade' => 'F',\n            'feedback' => 'Grading failed — please review manually.',\n            'criterion_scores' => [],\n            'strengths' => [],\n            'improvements' => ['Submission could not be evaluated by the automated system.'],\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "controller-for-automated-grading",
      children: "Controller for Automated Grading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api\\Education;\n\nuse App\\Ai\\Agents\\Education\\GradingAgent;\nuse App\\Models\\Assessment;\nuse App\\Models\\Student;\nuse Illuminate\\Http\\Request;\n\nclass GradingController extends Controller\n{\n    public function gradeSubmission(Request $request): array\n    {\n        $request->validate([\n            'assessment_id' => 'required|exists:assessments,id',\n            'student_id' => 'required|exists:students,id',\n            'submission' => 'required|string|min:1',\n        ]);\n\n        $assessment = Assessment::findOrFail($request->input('assessment_id'));\n        $student = Student::findOrFail($request->input('student_id'));\n\n        $agent = new GradingAgent(\n            assessment: $assessment,\n            student: $student,\n            submission: $request->input('submission'),\n            rubricOverrides: $request->input('rubric_overrides'),\n        );\n\n        $result = $agent->gradeWithReview();\n\n        return [\n            'grade_id' => $result['grade']->id,\n            'score' => $result['grade']->score,\n            'percentage' => $result['grade']->percentage,\n            'letter_grade' => $result['grade']->letter_grade,\n            'feedback' => $result['grade']->feedback,\n            'confidence' => $result['confidence'],\n            'needs_review' => $result['needs_review'],\n        ];\n    }\n\n    public function batchGrade(Request $request): array\n    {\n        $request->validate([\n            'assessment_id' => 'required|exists:assessments,id',\n            'submissions' => 'required|array',\n            'submissions.*.student_id' => 'required|exists:students,id',\n            'submissions.*.content' => 'required|string',\n        ]);\n\n        $assessment = Assessment::findOrFail($request->input('assessment_id'));\n        $results = [];\n\n        foreach ($request->input('submissions') as $submission) {\n            $student = Student::find($submission['student_id']);\n            if (! $student) {\n                continue;\n            }\n\n            $agent = new GradingAgent($assessment, $student, $submission['content']);\n            $result = $agent->gradeWithReview();\n\n            $results[] = [\n                'student_id' => $student->id,\n                'grade_id' => $result['grade']->id,\n                'score' => $result['grade']->score,\n                'percentage' => $result['grade']->percentage,\n                'letter_grade' => $result['grade']->letter_grade,\n                'needs_review' => $result['needs_review'],\n            ];\n        }\n\n        return [\n            'assessment_id' => $assessment->id,\n            'total_graded' => count($results),\n            'results' => $results,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always have a human review AI-graded essays for edge cases. Use AI as a first-pass grader."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "294-content-generation-for-courses",
      children: "29.4 Content Generation for Courses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Content generation agents create lessons, quizzes, and study materials using AI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content generation agents help instructors create course materials faster. An agent can generate complete lesson plans, quiz questions, study guides, and supplementary materials from a course outline or topic specification."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-contentgenerationagent",
      children: "The ContentGenerationAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Course;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass ContentGenerationAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Course $course,\n        protected string $contentType,\n        protected array $parameters = [],\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        return <<<PROMPT\nYou are a course content generation agent for an EdTech platform.\nGenerate high-quality educational content for the specified course.\n\nCourse: {$this->course->title} ({$this->course->code})\nDepartment: {$this->course->department}\nDifficulty: {$this->course->difficulty_level}\nCredits: {$this->course->credits}\nLearning Objectives: \" . json_encode($this->course->learning_objectives ?? []) . \"\nTopics: \" . json_encode($this->course->topics ?? []) . \"\n\nContent Type: {$this->contentType}\n\nAdjust the depth, vocabulary, and complexity to match the difficulty\nlevel and ensure alignment with the stated learning objectives.\nPROMPT;\n    }\n\n    public function generateQuiz(int $questionCount = 10, array $questionTypes = ['multiple_choice']): array\n    {\n        $response = $this\n            ->maxTokens(4096)\n            ->prompt(\"Generate {$questionCount} quiz questions for {$this->course->title}. \"\n                . \"Question types: \" . implode(', ', $questionTypes) . \". \"\n                . \"Include the correct answer, distractors, and an explanation for each. \"\n                . \"Ensure questions cover the key learning objectives and vary in difficulty \"\n                . \"(easy, medium, hard). \"\n                . \"Output as a JSON array of question objects.\");\n\n        $questions = json_decode($response->text(), true) ?? [];\n\n        $quiz = [\n            'course_id' => $this->course->id,\n            'title' => $this->parameters['title'] ?? \"{$this->course->code} Quiz\",\n            'type' => 'quiz',\n            'questions' => $questions,\n            'max_score' => count($questions),\n            'metadata' => [\n                'generated_by' => 'ai',\n                'question_types' => $questionTypes,\n                'generated_at' => now()->toIso8601String(),\n            ],\n        ];\n\n        return $quiz;\n    }\n\n    public function generateLessonPlan(string $topic, int $durationMinutes = 60): array\n    {\n        $response = $this\n            ->maxTokens(4096)\n            ->prompt(\"Create a detailed lesson plan for the topic '{$topic}' \"\n                . \"in {$this->course->title}. Duration: {$durationMinutes} minutes. \"\n                . \"Include learning objectives, materials needed, a timed breakdown \"\n                . \"of activities, discussion questions, and assessment checkpoints. \"\n                . \"Output as structured JSON.\");\n\n        $plan = json_decode($response->text(), true) ?? [];\n\n        return [\n            'course_id' => $this->course->id,\n            'topic' => $topic,\n            'duration_minutes' => $durationMinutes,\n            'plan' => $plan,\n            'generated_at' => now()->toIso8601String(),\n        ];\n    }\n\n    public function generateStudyGuide(): array\n    {\n        $topics = $this->course->topics ?? [];\n        $objectives = $this->course->learning_objectives ?? [];\n\n        $response = $this\n            ->maxTokens(4096)\n            ->prompt(\"Create a comprehensive study guide for {$this->course->title}. \"\n                . \"Cover these topics: \" . implode(', ', $topics) . \". \"\n                . \"Align with these objectives: \" . implode(', ', $objectives) . \". \"\n                . \"Include key concepts, definitions, formulas, examples, \"\n                . \"and practice questions with answers. \"\n                . \"Organize by topic with clear section headers. \"\n                . \"Output as structured JSON with sections.\");\n\n        return json_decode($response->text(), true) ?? [\n            'course_id' => $this->course->id,\n            'title' => \"{$this->course->code} Study Guide\",\n            'sections' => [],\n        ];\n    }\n\n    public function generateAssignment(string $title, string $description): array\n    {\n        $response = $this\n            ->maxTokens(4096)\n            ->prompt(\"Design a graded assignment for {$this->course->title}. \"\n                . \"Title: {$title}. Description: {$description}. \"\n                . \"Include clear instructions, rubric criteria with point values, \"\n                . \"submission requirements, and expected outcomes. \"\n                . \"The assignment should assess the stated learning objectives. \"\n                . \"Output as structured JSON.\");\n\n        $assignment = json_decode($response->text(), true) ?? [];\n\n        return [\n            'course_id' => $this->course->id,\n            'title' => $title,\n            'type' => 'assignment',\n            'content' => $assignment,\n            'max_score' => $assignment['total_points'] ?? 100,\n            'metadata' => [\n                'generated_by' => 'ai',\n                'generated_at' => now()->toIso8601String(),\n            ],\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "controller-for-content-generation",
      children: "Controller for Content Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api\\Education;\n\nuse App\\Ai\\Agents\\Education\\ContentGenerationAgent;\nuse App\\Models\\Course;\nuse Illuminate\\Http\\Request;\n\nclass ContentGenerationController extends Controller\n{\n    public function generateQuiz(Request $request, int $courseId): array\n    {\n        $request->validate([\n            'question_count' => 'integer|min:1|max:50',\n            'question_types' => 'array',\n            'title' => 'string|nullable',\n        ]);\n\n        $course = Course::findOrFail($courseId);\n        $agent = new ContentGenerationAgent(\n            course: $course,\n            contentType: 'quiz',\n            parameters: $request->only(['title']),\n        );\n\n        $quiz = $agent->generateQuiz(\n            questionCount: $request->input('question_count', 10),\n            questionTypes: $request->input('question_types', ['multiple_choice']),\n        );\n\n        return [\n            'course_id' => $courseId,\n            'quiz' => $quiz,\n        ];\n    }\n\n    public function generateLessonPlan(Request $request, int $courseId): array\n    {\n        $request->validate([\n            'topic' => 'required|string',\n            'duration_minutes' => 'integer|min:15|max:480',\n        ]);\n\n        $course = Course::findOrFail($courseId);\n        $agent = new ContentGenerationAgent($course, 'lesson_plan');\n\n        $plan = $agent->generateLessonPlan(\n            topic: $request->input('topic'),\n            durationMinutes: $request->input('duration_minutes', 60),\n        );\n\n        return $plan;\n    }\n\n    public function generateStudyGuide(int $courseId): array\n    {\n        $course = Course::findOrFail($courseId);\n        $agent = new ContentGenerationAgent($course, 'study_guide');\n\n        return $agent->generateStudyGuide();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "295-adaptive-quiz-engines",
      children: "29.5 Adaptive Quiz Engines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Adaptive quiz engines adjust question difficulty based on student proficiency using IRT algorithms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An adaptive quiz engine adjusts question difficulty in real-time based on student performance. A student who answers correctly receives harder questions; a student who struggles receives easier ones. This creates a personalized assessment that accurately measures ability without discouraging the learner."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-adaptivequizagent",
      children: "The AdaptiveQuizAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Assessment;\nuse App\\Models\\Student;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass AdaptiveQuizAgent implements Agent\n{\n    use Promptable;\n\n    protected array $session = [];\n\n    protected array $difficultyLevels = ['easy', 'medium', 'hard'];\n\n    protected string $currentDifficulty = 'medium';\n\n    protected int $correctCount = 0;\n\n    protected int $totalAnswered = 0;\n\n    protected int $consecutiveCorrect = 0;\n\n    public function __construct(\n        protected Assessment $assessment,\n        protected Student $student,\n        protected array $questionPool = [],\n    ) {\n        $this->session = [\n            'assessment_id' => $assessment->id,\n            'student_id' => $student->id,\n            'started_at' => now()->toIso8601String(),\n            'questions' => [],\n            'current_question_index' => 0,\n        ];\n    }\n\n    public function instructions(): Stringable|string\n    {\n        $performance = $this->totalAnswered > 0\n            ? round(($this->correctCount / $this->totalAnswered) * 100, 1)\n            : 0;\n\n        return <<<PROMPT\nYou are an adaptive quiz engine. Adjust question difficulty in real-time\nbased on the student's current performance.\n\nStudent Performance:\n- Total Answered: {$this->totalAnswered}\n- Correct: {$this->correctCount}\n- Accuracy: {$performance}%\n- Current Difficulty: {$this->currentDifficulty}\n- Consecutive Correct: {$this->consecutiveCorrect}\n\nRules:\n- If the student answers 3+ consecutive questions correctly, increase difficulty\n- If the student answers 2+ consecutive questions incorrectly, decrease difficulty\n- If accuracy is above 80%, target harder questions\n- If accuracy is below 50%, target easier questions\n- Never change difficulty more than one level per question\n- Maintain engagement — avoid overly easy or impossibly hard questions\n\nSelect the next question from the pool that matches the target difficulty.\nPROMPT;\n    }\n\n    public function selectNextQuestion(): ?array\n    {\n        $this->updateDifficulty();\n\n        $pool = $this->filterQuestionsByDifficulty($this->currentDifficulty);\n\n        if (empty($pool)) {\n            $pool = $this->questionPool;\n        }\n\n        $usedIds = collect($this->session['questions'])->pluck('id')->toArray();\n        $available = array_filter($pool, fn ($q) => ! in_array($q['id'] ?? null, $usedIds));\n\n        if (empty($available)) {\n            return null;\n        }\n\n        $index = array_rand($available);\n        $question = $available[$index];\n\n        $this->session['current_question'] = $question;\n        $this->session['current_question_index']++;\n\n        return $question;\n    }\n\n    public function recordAnswer(string $questionId, string $answer, string $correctAnswer): array\n    {\n        $isCorrect = strcasecmp(trim($answer), trim($correctAnswer)) === 0;\n\n        $this->totalAnswered++;\n        $this->session['questions'][] = [\n            'id' => $questionId,\n            'difficulty' => $this->currentDifficulty,\n            'student_answer' => $answer,\n            'correct_answer' => $correctAnswer,\n            'is_correct' => $isCorrect,\n        ];\n\n        if ($isCorrect) {\n            $this->correctCount++;\n            $this->consecutiveCorrect++;\n        } else {\n            $this->consecutiveCorrect = 0;\n        }\n\n        return [\n            'is_correct' => $isCorrect,\n            'correct_answer' => $correctAnswer,\n            'new_difficulty' => $this->currentDifficulty,\n            'accuracy' => round(($this->correctCount / $this->totalAnswered) * 100, 1),\n        ];\n    }\n\n    public function complete(): array\n    {\n        $accuracy = $this->totalAnswered > 0\n            ? round(($this->correctCount / $this->totalAnswered) * 100, 1)\n            : 0;\n\n        $difficultyDistribution = collect($this->session['questions'])\n            ->groupBy('difficulty')\n            ->map(fn ($items) => count($items))\n            ->toArray();\n\n        $this->session['completed_at'] = now()->toIso8601String();\n        $this->session['summary'] = [\n            'total_questions' => $this->totalAnswered,\n            'correct' => $this->correctCount,\n            'accuracy' => $accuracy,\n            'difficulty_distribution' => $difficultyDistribution,\n            'final_difficulty' => $this->currentDifficulty,\n        ];\n\n        return $this->session;\n    }\n\n    public function getProgress(): array\n    {\n        return [\n            'total_answered' => $this->totalAnswered,\n            'correct' => $this->correctCount,\n            'accuracy' => $this->totalAnswered > 0\n                ? round(($this->correctCount / $this->totalAnswered) * 100, 1) : 0,\n            'current_difficulty' => $this->currentDifficulty,\n            'consecutive_correct' => $this->consecutiveCorrect,\n        ];\n    }\n\n    protected function updateDifficulty(): void\n    {\n        if ($this->consecutiveCorrect >= 3) {\n            $this->bumpDifficultyUp();\n        } elseif ($this->totalAnswered >= 2\n            && $this->consecutiveCorrect === 0\n            && ! $this->wasLastAnswerCorrect()) {\n            $this->bumpDifficultyDown();\n        }\n    }\n\n    protected function wasLastAnswerCorrect(): bool\n    {\n        $last = $this->session['questions'][count($this->session['questions']) - 1] ?? null;\n        return $last ? $last['is_correct'] : true;\n    }\n\n    protected function bumpDifficultyUp(): void\n    {\n        $this->currentDifficulty = match ($this->currentDifficulty) {\n            'easy' => 'medium',\n            'medium' => 'hard',\n            default => 'hard',\n        };\n    }\n\n    protected function bumpDifficultyDown(): void\n    {\n        $this->currentDifficulty = match ($this->currentDifficulty) {\n            'hard' => 'medium',\n            'medium' => 'easy',\n            default => 'easy',\n        };\n    }\n\n    protected function filterQuestionsByDifficulty(string $difficulty): array\n    {\n        return array_filter($this->questionPool, function ($q) use ($difficulty) {\n            return ($q['difficulty'] ?? 'medium') === $difficulty;\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "controller-for-adaptive-quiz",
      children: "Controller for Adaptive Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api\\Education;\n\nuse App\\Ai\\Agents\\Education\\AdaptiveQuizAgent;\nuse App\\Models\\Assessment;\nuse App\\Models\\Student;\nuse Illuminate\\Http\\Request;\n\nclass AdaptiveQuizController extends Controller\n{\n    protected array $sessions = [];\n\n    public function start(Request $request): array\n    {\n        $request->validate([\n            'assessment_id' => 'required|exists:assessments,id',\n            'student_id' => 'required|exists:students,id',\n        ]);\n\n        $assessment = Assessment::findOrFail($request->input('assessment_id'));\n        $student = Student::findOrFail($request->input('student_id'));\n\n        $pool = $assessment->questions ?? [];\n        if (empty($pool)) {\n            return ['error' => 'Assessment has no questions configured.'];\n        }\n\n        $agent = new AdaptiveQuizAgent($assessment, $student, $pool);\n        $sessionId = uniqid('quiz_', true);\n        $this->sessions[$sessionId] = $agent;\n\n        $firstQuestion = $agent->selectNextQuestion();\n\n        return [\n            'session_id' => $sessionId,\n            'question' => $firstQuestion,\n            'progress' => $agent->getProgress(),\n        ];\n    }\n\n    public function answer(Request $request): array\n    {\n        $request->validate([\n            'session_id' => 'required|string',\n            'question_id' => 'required|string',\n            'answer' => 'required|string',\n        ]);\n\n        $sessionId = $request->input('session_id');\n        $agent = $this->sessions[$sessionId] ?? null;\n\n        if (! $agent) {\n            return ['error' => 'Invalid or expired session.'];\n        }\n\n        $questionId = $request->input('question_id');\n        $answer = $request->input('answer');\n\n        $lastQuestion = $agent->getProgress();\n        $correctAnswer = $this->getCorrectAnswer($sessionId, $questionId);\n\n        if (! $correctAnswer) {\n            return ['error' => 'Question not found in current session.'];\n        }\n\n        $result = $agent->recordAnswer($questionId, $answer, $correctAnswer);\n        $nextQuestion = $agent->selectNextQuestion();\n\n        return [\n            'result' => $result,\n            'next_question' => $nextQuestion,\n            'progress' => $agent->getProgress(),\n            'is_complete' => $nextQuestion === null,\n        ];\n    }\n\n    public function complete(Request $request): array\n    {\n        $request->validate(['session_id' => 'required|string']);\n\n        $sessionId = $request->input('session_id');\n        $agent = $this->sessions[$sessionId] ?? null;\n\n        if (! $agent) {\n            return ['error' => 'Invalid or expired session.'];\n        }\n\n        $result = $agent->complete();\n        unset($this->sessions[$sessionId]);\n\n        return [\n            'session' => $result,\n        ];\n    }\n\n    protected function getCorrectAnswer(string $sessionId, string $questionId): ?string\n    {\n        $agent = $this->sessions[$sessionId] ?? null;\n        if (! $agent) {\n            return null;\n        }\n\n        $reflection = new \\ReflectionClass($agent);\n        $poolProp = $reflection->getProperty('questionPool');\n        $poolProp->setAccessible(true);\n        $pool = $poolProp->getValue($agent);\n\n        foreach ($pool as $question) {\n            if (($question['id'] ?? null) === $questionId) {\n                return $question['correct_answer'] ?? null;\n            }\n        }\n\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Item Response Theory requires calibration. Start with a bank of calibrated questions before going adaptive."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "296-student-progress-tracking-agents",
      children: "29.6 Student Progress Tracking Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Progress tracking agents monitor completion rates, grades, and engagement metrics for insights."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A progress tracking agent monitors student performance across assessments, assignments, and engagement metrics. It flags at-risk students before they fall too far behind, enabling early intervention."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-progresstrackingagent",
      children: "The ProgressTrackingAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Enrollment;\nuse App\\Models\\Grade;\nuse App\\Models\\Student;\nuse Carbon\\Carbon;\nuse Illuminate\\Support\\Collection;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass ProgressTrackingAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Student $student,\n        protected array $config = [],\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $enrollments = $this->student->enrollments()\n            ->with('course')\n            ->where('status', 'active')\n            ->get();\n\n        $grades = $this->student->grades()\n            ->with('assessment')\n            ->where('graded_at', '>=', now()->subDays(90))\n            ->get();\n\n        $recentTrend = $this->calculateGradeTrend($grades);\n        $currentGpa = $this->student->gpa;\n\n        return <<<PROMPT\nYou are a student progress tracking and early warning agent.\n\nStudent Profile:\n- ID: {$this->student->student_id}\n- Major: {$this->student->major}\n- Current GPA: {$currentGpa}\n- Active Enrollments: {$enrollments->count()}\n\nRecent Grade Trend: {$recentTrend}\nGrade Trend Direction: \" . ($this->getTrendDirection($recentTrend) ?? 'stable') . \"\n\nYour task is to analyze this student's current academic standing and:\n1. Calculate a risk score (0-100) where higher = more at risk\n2. Identify specific areas of concern (low grades, missing submissions, declining trend)\n3. Recommend interventions (tutoring, office hours, study groups)\n4. Determine if immediate escalation is needed\n5. Suggest specific actions the student can take this week\n\nOutput as structured JSON.\nPROMPT;\n    }\n\n    public function analyze(): array\n    {\n        $grades = $this->student->grades()\n            ->with('assessment.course')\n            ->where('graded_at', '>=', now()->subDays(90))\n            ->get();\n\n        $enrollments = $this->student->enrollments()\n            ->with('course')\n            ->get();\n\n        $riskScore = $this->calculateRiskScore($grades, $enrollments);\n        $flags = $this->detectFlags($grades, $enrollments);\n\n        $response = $this\n            ->maxTokens(2048)\n            ->prompt(\"Analyze this student's progress data:\\n\"\n                . \"Risk Score: {$riskScore}\\n\"\n                . \"Flags: \" . json_encode($flags, JSON_PRETTY_PRINT) . \"\\n\"\n                . \"Generate a comprehensive progress report with recommendations.\");\n\n        $analysis = json_decode($response->text(), true) ?? [];\n\n        return [\n            'student_id' => $this->student->id,\n            'risk_score' => $riskScore,\n            'risk_level' => $this->riskLevel($riskScore),\n            'flags' => $flags,\n            'trend' => $this->calculateGradeTrend($grades),\n            'analysis' => $analysis,\n            'assessed_at' => now()->toIso8601String(),\n        ];\n    }\n\n    public function detectFlags(Collection $grades, Collection $enrollments): array\n    {\n        $flags = [];\n\n        if ($this->student->gpa < 2.0) {\n            $flags[] = [\n                'type' => 'low_gpa',\n                'severity' => 'critical',\n                'message' => \"GPA is {$this->student->gpa} — below 2.0 threshold.\",\n            ];\n        }\n\n        $missingGrades = $enrollments->where('status', 'active')\n            ->filter(function ($enrollment) use ($grades) {\n                $courseGrades = $grades->filter(fn ($g) =>\n                    $g->assessment && $g->assessment->course_id === $enrollment->course_id);\n                return $courseGrades->isEmpty();\n            });\n\n        foreach ($missingGrades as $enrollment) {\n            $flags[] = [\n                'type' => 'no_grades',\n                'severity' => 'warning',\n                'message' => \"No grades recorded for {$enrollment->course->code}.\",\n                'course_code' => $enrollment->course->code,\n            ];\n        }\n\n        $lowScores = $grades->filter(fn ($g) => $g->percentage !== null && $g->percentage < 60);\n        foreach ($lowScores as $grade) {\n            $flags[] = [\n                'type' => 'low_score',\n                'severity' => 'high',\n                'message' => \"Scored {$grade->percentage}% on {$grade->assessment->title}.\",\n                'assessment' => $grade->assessment->title,\n            ];\n        }\n\n        $trend = $this->calculateGradeTrend($grades);\n        if ($trend < -10) {\n            $flags[] = [\n                'type' => 'declining_trend',\n                'severity' => 'high',\n                'message' => \"Grade trend declining by {$trend}% over the evaluation period.\",\n            ];\n        }\n\n        $thisWeek = $grades->filter(fn ($g) =>\n            $g->created_at >= now()->startOfWeek()\n        );\n        if ($thisWeek->isEmpty() && $enrollments->where('status', 'active')->isNotEmpty()) {\n            $flags[] = [\n                'type' => 'no_recent_activity',\n                'severity' => 'low',\n                'message' => 'No grading activity in the current week.',\n            ];\n        }\n\n        return $flags;\n    }\n\n    public function detectAtRiskStudents(): Collection\n    {\n        $threshold = $this->config['gpa_threshold'] ?? 2.0;\n        $minGrades = $this->config['min_grades_required'] ?? 3;\n\n        return Student::with(['grades', 'enrollments'])\n            ->where('gpa', '<', $threshold)\n            ->get()\n            ->filter(function ($student) use ($minGrades) {\n                $recentGrades = $student->grades()\n                    ->where('graded_at', '>=', now()->subDays(90))\n                    ->count();\n                return $recentGrades >= $minGrades;\n            });\n    }\n\n    protected function calculateRiskScore(Collection $grades, Collection $enrollments): int\n    {\n        $score = 0;\n\n        if ($this->student->gpa < 1.0) {\n            $score += 40;\n        } elseif ($this->student->gpa < 2.0) {\n            $score += 25;\n        } elseif ($this->student->gpa < 2.5) {\n            $score += 10;\n        }\n\n        $activeCount = $enrollments->where('status', 'active')->count();\n        $completedCount = $enrollments->where('status', 'completed')->count();\n        $totalAttempted = $activeCount + $completedCount;\n\n        if ($totalAttempted > 0) {\n            $failureRate = $activeCount > 0\n                ? ($activeCount / $totalAttempted) * 100 : 0;\n            $score += min(20, $failureRate);\n        }\n\n        $lowGrades = $grades->filter(fn ($g) => $g->percentage !== null && $g->percentage < 60)->count();\n        if ($lowGrades > 3) {\n            $score += 15;\n        } elseif ($lowGrades > 1) {\n            $score += 8;\n        }\n\n        $trend = $this->calculateGradeTrend($grades);\n        if ($trend < -15) {\n            $score += 15;\n        } elseif ($trend < -5) {\n            $score += 8;\n        }\n\n        return min(100, $score);\n    }\n\n    protected function calculateGradeTrend(Collection $grades): float\n    {\n        if ($grades->count() < 2) {\n            return 0;\n        }\n\n        $sorted = $grades->sortBy('graded_at')->values();\n        $first = $sorted->first();\n        $last = $sorted->last();\n\n        if (! $first->percentage || ! $last->percentage) {\n            return 0;\n        }\n\n        return $last->percentage - $first->percentage;\n    }\n\n    protected function getTrendDirection(?float $trend): ?string\n    {\n        if ($trend === null) {\n            return null;\n        }\n        if ($trend > 5) {\n            return 'improving';\n        }\n        if ($trend < -5) {\n            return 'declining';\n        }\n        return 'stable';\n    }\n\n    protected function riskLevel(int $score): string\n    {\n        return match (true) {\n            $score >= 70 => 'critical',\n            $score >= 45 => 'high',\n            $score >= 20 => 'medium',\n            default => 'low',\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "artisan-command-for-progress-monitoring",
      children: "Artisan Command for Progress Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\Ai\\Agents\\Education\\ProgressTrackingAgent;\nuse App\\Models\\Student;\nuse Illuminate\\Console\\Command;\n\nclass MonitorStudentProgress extends Command\n{\n    protected $signature = 'education:monitor-progress\n        {--gpa-threshold=2.0 : GPA threshold for at-risk detection}\n        {--notify : Send notifications for at-risk students}';\n\n    protected $description = 'Run the student progress monitoring agent';\n\n    public function handle(): int\n    {\n        $threshold = (float) $this->option('gpa-threshold');\n\n        $agent = new ProgressTrackingAgent(\n            student: new Student(),\n            config: ['gpa_threshold' => $threshold],\n        );\n\n        $this->info(\"Scanning for at-risk students (GPA < {$threshold})...\");\n\n        $atRisk = $agent->detectAtRiskStudents();\n\n        $this->info(\"Found {$atRisk->count()} at-risk students.\");\n\n        foreach ($atRisk as $student) {\n            $studentAgent = new ProgressTrackingAgent($student);\n            $analysis = $studentAgent->analyze();\n\n            $this->line(\"---\");\n            $this->line(\"Student: {$student->student_id} (GPA: {$student->gpa})\");\n            $this->line(\"Risk Score: {$analysis['risk_score']} — {$analysis['risk_level']}\");\n            $this->line(\"Flags: \" . count($analysis['flags']));\n\n            if ($this->option('notify') && $analysis['risk_level'] === 'critical') {\n                $user = $student->user;\n                if ($user) {\n                    $user->notify(new \\App\\Notifications\\AtRiskAlert($analysis));\n                    $this->line(\"Notification sent to {$user->email}\");\n                }\n            }\n        }\n\n        return Command::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "297-enrollment-workflow-automation",
      children: "29.7 Enrollment Workflow Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Enrollment agents handle registration, prerequisites, waitlists, and notifications."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enrollment automation handles course registration, prerequisite validation, waitlist management, and notification — replacing manual administrative processes with an AI-driven workflow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-enrollmentagent",
      children: "The EnrollmentAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Course;\nuse App\\Models\\Enrollment;\nuse App\\Models\\Student;\nuse Carbon\\Carbon;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass EnrollmentAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Student $student,\n        protected Course $course,\n        protected array $semester,\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $completedCourses = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->with('course')\n            ->get();\n\n        $completedCodes = $completedCourses->pluck('course.code')->toArray();\n        $prerequisites = $this->course->prerequisites ?? [];\n\n        $metPrereqs = array_intersect($prerequisites, $completedCodes);\n        $missingPrereqs = array_diff($prerequisites, $completedCodes);\n\n        $currentCredits = $this->student->enrollments()\n            ->where('status', 'active')\n            ->with('course')\n            ->get()\n            ->sum(fn ($e) => $e->course->credits ?? 0);\n\n        $maxCredits = 18;\n\n        return <<<PROMPT\nYou are an enrollment workflow automation agent.\n\nStudent: {$this->student->student_id} ({$this->student->major})\nCourse: {$this->course->code} — {$this->course->title}\nCredits: {$this->course->credits} | Current Load: {$currentCredits}/{$maxCredits}\n\nPrerequisites Required: \" . implode(', ', $prerequisites) . \"\nPrerequisites Met: \" . implode(', ', $metPrereqs) . \"\nPrerequisites Missing: \" . implode(', ', $missingPrereqs) . \"\n\nSemester: {$this->semester['term']} {$this->semester['year']}\n\nYour task is to validate the enrollment request and either:\n1. Approve it if all conditions are met\n2. Reject it with a clear reason if conditions are not met\n3. Place the student on a waitlist if the course is full\n4. Suggest alternative courses if prerequisites are missing\n\nProvide a structured decision with approval status, reasons, and next steps.\nPROMPT;\n    }\n\n    public function processEnrollment(): array\n    {\n        $validation = $this->validateEnrollment();\n\n        if (! $validation['eligible']) {\n            return [\n                'status' => 'rejected',\n                'reasons' => $validation['reasons'],\n                'suggestions' => $validation['suggestions'],\n            ];\n        }\n\n        if ($validation['course_full']) {\n            $position = $this->addToWaitlist();\n            return [\n                'status' => 'waitlisted',\n                'waitlist_position' => $position,\n                'message' => \"You have been placed on the waitlist at position #{$position}.\",\n            ];\n        }\n\n        $enrollment = $this->createEnrollment();\n\n        $this->sendConfirmation($enrollment);\n\n        return [\n            'status' => 'enrolled',\n            'enrollment_id' => $enrollment->id,\n            'message' => \"Successfully enrolled in {$this->course->code}.\",\n        ];\n    }\n\n    protected function validateEnrollment(): array\n    {\n        $reasons = [];\n        $suggestions = [];\n        $eligible = true;\n        $courseFull = false;\n\n        $prerequisites = $this->course->prerequisites ?? [];\n        if (! empty($prerequisites)) {\n            $completedCodes = $this->student->enrollments()\n                ->where('status', 'completed')\n                ->with('course')\n                ->get()\n                ->pluck('course.code')\n                ->toArray();\n\n            $missing = array_diff($prerequisites, $completedCodes);\n            if (! empty($missing)) {\n                $eligible = false;\n                $reasons[] = 'Missing prerequisites: ' . implode(', ', $missing);\n\n                $suggestions = Course::whereIn('code', $missing)\n                    ->pluck('title')\n                    ->map(fn ($t) => \"Complete prerequisite: {$t}\")\n                    ->toArray();\n            }\n        }\n\n        $existing = Enrollment::where('student_id', $this->student->id)\n            ->where('course_id', $this->course->id)\n            ->where('status', 'active')\n            ->exists();\n\n        if ($existing) {\n            $eligible = false;\n            $reasons[] = \"Already enrolled in {$this->course->code}.\";\n        }\n\n        $currentCredits = $this->student->enrollments()\n            ->where('status', 'active')\n            ->with('course')\n            ->get()\n            ->sum(fn ($e) => $e->course->credits ?? 0);\n\n        if (($currentCredits + ($this->course->credits ?? 0)) > 18) {\n            $eligible = false;\n            $reasons[] = \"Exceeds maximum credit load (18 credits).\";\n            $suggestions[] = \"Drop another course to free up credits.\";\n        }\n\n        $activeEnrollments = Enrollment::where('course_id', $this->course->id)\n            ->where('status', 'active')\n            ->count();\n\n        $capacity = $this->course->metadata['capacity'] ?? 100;\n        if ($activeEnrollments >= $capacity) {\n            $courseFull = true;\n        }\n\n        return [\n            'eligible' => $eligible,\n            'reasons' => $reasons,\n            'suggestions' => $suggestions,\n            'course_full' => $courseFull,\n        ];\n    }\n\n    protected function addToWaitlist(): int\n    {\n        $lastPosition = Enrollment::where('course_id', $this->course->id)\n            ->where('status', 'waitlisted')\n            ->max('waitlist_position');\n\n        $position = ($lastPosition ?? 0) + 1;\n\n        Enrollment::create([\n            'student_id' => $this->student->id,\n            'course_id' => $this->course->id,\n            'semester' => \"{$this->semester['term']} {$this->semester['year']}\",\n            'status' => 'waitlisted',\n            'enrolled_at' => now(),\n            'waitlist_position' => $position,\n        ]);\n\n        return $position;\n    }\n\n    protected function createEnrollment(): Enrollment\n    {\n        $enrollment = Enrollment::create([\n            'student_id' => $this->student->id,\n            'course_id' => $this->course->id,\n            'semester' => \"{$this->semester['term']} {$this->semester['year']}\",\n            'status' => 'active',\n            'enrolled_at' => now(),\n        ]);\n\n        return $enrollment;\n    }\n\n    protected function sendConfirmation(Enrollment $enrollment): void\n    {\n        $user = $this->student->user;\n        if ($user) {\n            $user->notify(new \\App\\Notifications\\EnrollmentConfirmation($enrollment));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "enrollmentcontroller",
      children: "EnrollmentController"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api\\Education;\n\nuse App\\Ai\\Agents\\Education\\EnrollmentAgent;\nuse App\\Models\\Course;\nuse App\\Models\\Student;\nuse Illuminate\\Http\\Request;\n\nclass EnrollmentController extends Controller\n{\n    public function enroll(Request $request): array\n    {\n        $request->validate([\n            'student_id' => 'required|exists:students,id',\n            'course_id' => 'required|exists:courses,id',\n            'term' => 'required|string',\n            'year' => 'required|integer',\n        ]);\n\n        $student = Student::findOrFail($request->input('student_id'));\n        $course = Course::findOrFail($request->input('course_id'));\n\n        $agent = new EnrollmentAgent(\n            student: $student,\n            course: $course,\n            semester: [\n                'term' => $request->input('term'),\n                'year' => $request->input('year'),\n            ],\n        );\n\n        $result = $agent->processEnrollment();\n\n        return [\n            'student_id' => $student->id,\n            'course_code' => $course->code,\n            'result' => $result,\n        ];\n    }\n\n    public function checkEligibility(Request $request): array\n    {\n        $request->validate([\n            'student_id' => 'required|exists:students,id',\n            'course_id' => 'required|exists:courses,id',\n        ]);\n\n        $student = Student::findOrFail($request->input('student_id'));\n        $course = Course::findOrFail($request->input('course_id'));\n\n        $agent = new EnrollmentAgent($student, $course, [\n            'term' => 'Fall',\n            'year' => now()->year,\n        ]);\n\n        $reflection = new \\ReflectionMethod($agent, 'validateEnrollment');\n        $reflection->setAccessible(true);\n        $validation = $reflection->invoke($agent);\n\n        return [\n            'eligible' => $validation['eligible'],\n            'reasons' => $validation['reasons'],\n            'suggestions' => $validation['suggestions'],\n            'course_full' => $validation['course_full'],\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "298-recommendation-systems-for-curricula",
      children: "29.8 Recommendation Systems for Curricula"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Recommendation agents suggest courses and learning paths based on student history and goals."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A curriculum recommendation system helps students choose courses that align with their career goals and academic history. By using vector similarity search, the agent maps course content and student profiles into the same semantic space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-curriculumrecommendationagent",
      children: "The CurriculumRecommendationAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Ai\\Agents\\Education;\n\nuse App\\Models\\Course;\nuse App\\Models\\Student;\nuse Laravel\\Ai\\Contracts\\Agent;\nuse Laravel\\Ai\\Promptable;\nuse Stringable;\n\nclass CurriculumRecommendationAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Student $student,\n        protected array $options = [],\n    ) {}\n\n    public function instructions(): Stringable|string\n    {\n        $goals = $this->student->career_goals ?? [];\n        $major = $this->student->major ?? 'Undeclared';\n        $completedCourses = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->with('course')\n            ->get();\n\n        $completedDescriptions = $completedCourses->map(fn ($e) =>\n            $e->course->title . ': ' . $e->course->description\n        )->toArray();\n\n        return <<<PROMPT\nYou are a curriculum recommendation agent that uses semantic matching between\nstudent profiles and course content to suggest optimal learning paths.\n\nStudent Profile:\n- Major: {$major}\n- Career Goals: \" . json_encode($goals) . \"\n- Completed Courses: \" . implode(' | ', $completedDescriptions) . \"\n\nYour task is to analyze the student's background and recommend courses that:\n1. Build skills directly relevant to their stated career goals\n2. Fill knowledge gaps in their prerequisite chains\n3. Provide balanced coverage of their major's core competencies\n4. Challenge them at the appropriate difficulty level\n5. Introduce emerging topics in their field of interest\n\nFor each recommendation, provide:\n- Course code and title\n- Relevance score (0-100)\n- Which career goal it serves\n- Prerequisite alignment\n- Expected difficulty for this student\n\nOutput as a ranked JSON array.\nPROMPT;\n    }\n\n    public function recommend(): array\n    {\n        $goals = $this->student->career_goals ?? [];\n        $completedIds = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->pluck('course_id')\n            ->toArray();\n\n        $availableCourses = Course::active()\n            ->whereNotIn('id', $completedIds)\n            ->get();\n\n        $scored = $this->scoreCourses($availableCourses, $goals);\n\n        $response = $this\n            ->maxTokens(2048)\n            ->prompt(\"Based on the student profile and available courses, \"\n                . \"generate ranked recommendations. \"\n                . \"Pre-scored candidates: \" . json_encode(array_slice($scored, 0, 15)));\n\n        $aiRecommendations = json_decode($response->text(), true) ?? [];\n\n        return [\n            'student_id' => $this->student->id,\n            'career_goals' => $goals,\n            'recommendations' => $aiRecommendations,\n            'scored_courses' => $scored,\n        ];\n    }\n\n    public function recommendWithVectorSearch(): array\n    {\n        $goals = $this->student->career_goals ?? [];\n        $goalText = implode(' ', $goals);\n\n        $completedIds = $this->student->enrollments()\n            ->where('status', 'completed')\n            ->pluck('course_id')\n            ->toArray();\n\n        $courses = Course::active()\n            ->whereNotIn('id', $completedIds)\n            ->get();\n\n        $scored = [];\n        foreach ($courses as $course) {\n            $courseText = $course->title . ' ' . $course->description . ' '\n                . implode(' ', $course->topics ?? []) . ' '\n                . implode(' ', $course->learning_objectives ?? []);\n\n            $similarity = $this->cosineSimilarity(\n                $this->vectorize($goalText),\n                $this->vectorize($courseText),\n            );\n\n            $scored[] = [\n                'course_id' => $course->id,\n                'code' => $course->code,\n                'title' => $course->title,\n                'similarity' => round($similarity, 4),\n                'difficulty' => $course->difficulty_level,\n                'department' => $course->department,\n            ];\n        }\n\n        usort($scored, fn ($a, $b) => $b['similarity'] <=> $a['similarity']);\n\n        return [\n            'student_id' => $this->student->id,\n            'method' => 'vector_similarity',\n            'recommendations' => array_slice($scored, 0, 10),\n        ];\n    }\n\n    protected function scoreCourses($courses, array $goals): array\n    {\n        $scored = [];\n\n        foreach ($courses as $course) {\n            $score = 50;\n\n            foreach ($goals as $goal) {\n                $goalLower = strtolower($goal);\n                $descriptionLower = strtolower($course->description);\n                $topicsLower = strtolower(implode(' ', $course->topics ?? []));\n\n                if (str_contains($descriptionLower, $goalLower)\n                    || str_contains($topicsLower, $goalLower)) {\n                    $score += 25;\n                }\n            }\n\n            $prerequisites = $course->prerequisites ?? [];\n            $completedCodes = $this->student->enrollments()\n                ->where('status', 'completed')\n                ->with('course')\n                ->get()\n                ->pluck('course.code')\n                ->toArray();\n\n            $missing = array_diff($prerequisites, $completedCodes);\n            $score -= count($missing) * 10;\n\n            $scored[] = [\n                'course_id' => $course->id,\n                'code' => $course->code,\n                'title' => $course->title,\n                'score' => max(0, $score),\n                'difficulty' => $course->difficulty_level,\n            ];\n        }\n\n        usort($scored, fn ($a, $b) => $b['score'] <=> $a['score']);\n\n        return $scored;\n    }\n\n    protected function vectorize(string $text): array\n    {\n        $text = strtolower($text);\n        $words = str_word_count($text, 1);\n        $words = array_filter($words, fn ($w) => strlen($w) > 2);\n\n        $stopWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you',\n            'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out',\n            'has', 'have', 'been', 'some', 'them', 'than', 'that',\n            'this', 'with', 'will', 'their', 'what', 'which'];\n\n        $filtered = array_diff($words, $stopWords);\n        $counts = array_count_values($filtered);\n\n        $max = max($counts) ?: 1;\n        $vector = [];\n        foreach ($counts as $word => $count) {\n            $vector[$word] = $count / $max;\n        }\n\n        return $vector;\n    }\n\n    protected function cosineSimilarity(array $vecA, array $vecB): float\n    {\n        $allKeys = array_unique(array_merge(array_keys($vecA), array_keys($vecB)));\n\n        $dotProduct = 0;\n        $normA = 0;\n        $normB = 0;\n\n        foreach ($allKeys as $key) {\n            $valA = $vecA[$key] ?? 0;\n            $valB = $vecB[$key] ?? 0;\n\n            $dotProduct += $valA * $valB;\n            $normA += $valA * $valA;\n            $normB += $valB * $valB;\n        }\n\n        $denominator = sqrt($normA) * sqrt($normB);\n\n        return $denominator > 0 ? $dotProduct / $denominator : 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "controller-for-curriculum-recommendations",
      children: "Controller for Curriculum Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api\\Education;\n\nuse App\\Ai\\Agents\\Education\\CurriculumRecommendationAgent;\nuse App\\Models\\Student;\nuse Illuminate\\Http\\Request;\n\nclass CurriculumRecommendationController extends Controller\n{\n    public function recommend(Request $request, int $studentId): array\n    {\n        $student = Student::with('enrollments.course', 'grades')\n            ->findOrFail($studentId);\n\n        $agent = new CurriculumRecommendationAgent(\n            student: $student,\n            options: $request->only(['max_recommendations', 'focus_area']),\n        );\n\n        $recommendations = $agent->recommend();\n\n        return [\n            'student_id' => $studentId,\n            'recommendations' => $recommendations['recommendations'],\n            'scored_courses' => $recommendations['scored_courses'],\n        ];\n    }\n\n    public function vectorRecommend(Request $request, int $studentId): array\n    {\n        $student = Student::with('enrollments.course')\n            ->findOrFail($studentId);\n\n        $agent = new CurriculumRecommendationAgent($student);\n\n        return $agent->recommendWithVectorSearch();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter demonstrated how to build a comprehensive AI-powered education platform within Laravel. The eight sections covered the complete EdTech stack:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data models"
        }), ": Five Eloquent models (Student, Course, Enrollment, Assessment, Grade) with migrations that form the relational foundation for any education application"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Personalized learning paths"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LearningPathAgent"
        }), " that analyzes student profiles, career goals, and academic history to recommend the next optimal courses using both AI analysis and algorithmic relevance scoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated grading"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GradingAgent"
        }), " that evaluates open-ended submissions against configurable rubrics, produces structured scores with feedback, and flags low-confidence results for human review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content generation"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ContentGenerationAgent"
        }), " that produces quizzes, lesson plans, study guides, and assignments from course specifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive quizzes"
        }), ": An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AdaptiveQuizAgent"
        }), " that adjusts question difficulty in real-time based on consecutive correct/incorrect answers, maintaining appropriate challenge levels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress tracking"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProgressTrackingAgent"
        }), " with an early warning system that calculates risk scores, detects flags (low GPA, declining trends, missing grades), and identifies at-risk students"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enrollment automation"
        }), ": An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EnrollmentAgent"
        }), " that validates prerequisites, checks credit limits, manages waitlists, and sends confirmations — replacing manual administrative processes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Curriculum recommendations"
        }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CurriculumRecommendationAgent"
        }), " using both AI-powered analysis and vector similarity search to match course content with student career goals"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The architectural pattern across all sections is consistent: database models store education domain data, agent classes encapsulate AI reasoning, and controllers expose API endpoints that connect the two. This makes the system modular, testable, and extensible — each agent can be improved independently without affecting the others."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the five core education data models, and what relationships exist between them?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LearningPathAgent"
          }), " score course relevance for a student? List three factors it considers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GradingAgent"
          }), " return a confidence score alongside the grade, and what happens when confidence is below 0.7?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What algorithm does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AdaptiveQuizAgent"
          }), " use to adjust difficulty? At what thresholds does it increase or decrease difficulty?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["List three flags the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProgressTrackingAgent"
          }), " detects that would indicate an at-risk student."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Skill Gap Analyzer"
          }), ". Extend the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LearningPathAgent"
          }), " to compare a student's current skill assessments against the skills required for their career goals. Generate a gap analysis report that lists missing skills and maps them to specific courses that teach them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rubric Designer"
          }), ". Build a rubric generation endpoint that uses the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ContentGenerationAgent"
          }), " to produce a detailed grading rubric from a topic description. The rubric should include 4-6 criteria, each with 4 performance levels (exemplary, proficient, developing, beginning) and point values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Waitlist Auto-Promoter"
          }), ". Create an Artisan command that runs daily and checks waitlisted students against current enrollment capacity. When a seat opens, automatically promote the next student from the waitlist and send them a notification with an enrollment deadline."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Adaptive Learning System"
      }), ". Build an end-to-end personalized education platform that integrates all eight agent types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Onboarding Agent"
        }), ": When a student first registers, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LearningPathAgent"
        }), " analyzes their background and generates a personalized 4-semester learning path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content Generator"
        }), ": For each course in the path, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ContentGenerationAgent"
        }), " pre-generates lesson plans and initial quiz banks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive Assessment"
        }), ": Students take an initial adaptive quiz that establishes their baseline knowledge level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Grading"
        }), ": All open-ended submissions are graded by the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GradingAgent"
        }), " with rubric-based scoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Monitoring"
        }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProgressTrackingAgent"
        }), " runs weekly, flagging at-risk students and sending intervention recommendations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Curriculum Adjustment"
        }), ": Based on progress data, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CurriculumRecommendationAgent"
        }), " suggests course adjustments for the next semester"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enrollment Automation"
        }), ": At registration time, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EnrollmentAgent"
        }), " validates prerequisites, manages waitlists, and confirms enrollment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analytics Dashboard"
        }), ": A reporting command summarizes system-wide metrics — average risk scores, grade distributions, recommendation adoption rates, and waitlist statistics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement all agents, controllers, routes, notifications, and the weekly monitoring command. Include proper error handling, logging, and at least three notification types."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);