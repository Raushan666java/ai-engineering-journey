"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[48835],{

/***/ 79657
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_06_queues_notifications_md_0f9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-06-queues-notifications-md-0f9.json
const site_docs_courses_laravel_06_queues_notifications_md_0f9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/06-queues-notifications","title":"Chapter 6: Queues, Jobs, Notifications & Mail","description":"Previous API Development & Integration","source":"@site/docs/courses/laravel/06-queues-notifications.md","sourceDirName":"courses/laravel","slug":"/laravel/06-queues-notifications","permalink":"/ai-engineering-journey/laravel/06-queues-notifications","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-queues-notifications","slug":"/laravel/06-queues-notifications","title":"Chapter 6: Queues, Jobs, Notifications & Mail","sidebar_label":"Chapter 6: Queues, Jobs, Notifications & Mail","sidebar_position":6},"sidebar":"course-laravel","previous":{"title":"Chapter 5: Authentication, Authorization & Security","permalink":"/ai-engineering-journey/laravel/05-auth-security"},"next":{"title":"Chapter 7: API Development & Integration","permalink":"/ai-engineering-journey/laravel/07-api-development"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/06-queues-notifications.md


const frontMatter = {
	id: '06-queues-notifications',
	slug: '/laravel/06-queues-notifications',
	title: 'Chapter 6: Queues, Jobs, Notifications & Mail',
	sidebar_label: 'Chapter 6: Queues, Jobs, Notifications & Mail',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Queues, Jobs, Notifications & Mail';

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
  "value": "Queue Drivers",
  "id": "queue-drivers",
  "level": 3
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 4
}, {
  "value": "Database Queue Setup",
  "id": "database-queue-setup",
  "level": 4
}, {
  "value": "Jobs",
  "id": "jobs",
  "level": 3
}, {
  "value": "Creating a Job",
  "id": "creating-a-job",
  "level": 4
}, {
  "value": "Dispatching Jobs",
  "id": "dispatching-jobs",
  "level": 4
}, {
  "value": "Job Chaining",
  "id": "job-chaining",
  "level": 4
}, {
  "value": "Job Batching",
  "id": "job-batching",
  "level": 4
}, {
  "value": "Batch Table",
  "id": "batch-table",
  "level": 4
}, {
  "value": "Unique Jobs",
  "id": "unique-jobs",
  "level": 4
}, {
  "value": "Job Middleware",
  "id": "job-middleware",
  "level": 4
}, {
  "value": "Rate-Limited Jobs",
  "id": "rate-limited-jobs",
  "level": 4
}, {
  "value": "Job Events",
  "id": "job-events",
  "level": 4
}, {
  "value": "Queue Routing (Laravel 13)",
  "id": "queue-routing-laravel-13",
  "level": 3
}, {
  "value": "PHP Attributes for Jobs",
  "id": "php-attributes-for-jobs",
  "level": 3
}, {
  "value": "Queue Workers",
  "id": "queue-workers",
  "level": 3
}, {
  "value": "Supervisor Configuration",
  "id": "supervisor-configuration",
  "level": 4
}, {
  "value": "Queue Priority",
  "id": "queue-priority",
  "level": 4
}, {
  "value": "Laravel Horizon",
  "id": "laravel-horizon",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 4
}, {
  "value": "Configuration",
  "id": "configuration-1",
  "level": 4
}, {
  "value": "Running Horizon",
  "id": "running-horizon",
  "level": 4
}, {
  "value": "Horizon Dashboard",
  "id": "horizon-dashboard",
  "level": 4
}, {
  "value": "Balancing Strategies",
  "id": "balancing-strategies",
  "level": 4
}, {
  "value": "Notifications",
  "id": "notifications",
  "level": 4
}, {
  "value": "Notifications",
  "id": "notifications-1",
  "level": 3
}, {
  "value": "Creating Notifications",
  "id": "creating-notifications",
  "level": 4
}, {
  "value": "Sending Notifications",
  "id": "sending-notifications",
  "level": 4
}, {
  "value": "Notification Events",
  "id": "notification-events",
  "level": 4
}, {
  "value": "Mail",
  "id": "mail",
  "level": 3
}, {
  "value": "Creating Mailables",
  "id": "creating-mailables",
  "level": 4
}, {
  "value": "Markdown Mail Templates",
  "id": "markdown-mail-templates",
  "level": 4
}, {
  "value": "Sending Mail",
  "id": "sending-mail",
  "level": 4
}, {
  "value": "Mail Drivers",
  "id": "mail-drivers",
  "level": 4
}, {
  "value": "Mail Preview in Browser",
  "id": "mail-preview-in-browser",
  "level": 4
}, {
  "value": "Mail Events",
  "id": "mail-events",
  "level": 4
}, {
  "value": "Events &amp; Listeners",
  "id": "events--listeners",
  "level": 3
}, {
  "value": "Creating Events and Listeners",
  "id": "creating-events-and-listeners",
  "level": 4
}, {
  "value": "Event Service Provider Registration",
  "id": "event-service-provider-registration",
  "level": 4
}, {
  "value": "Dispatching Events",
  "id": "dispatching-events",
  "level": 4
}, {
  "value": "Queued Event Listeners",
  "id": "queued-event-listeners",
  "level": 4
}, {
  "value": "Event Subscribers",
  "id": "event-subscribers",
  "level": 4
}, {
  "value": "Example: Order Processing Pipeline",
  "id": "example-order-processing-pipeline",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Queue Artisan Commands",
  "id": "quick-reference--queue-artisan-commands",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
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
        id: "chapter-6-queues-jobs-notifications--mail",
        children: "Chapter 6: Queues, Jobs, Notifications & Mail"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./05-auth-security",
          children: "Authentication, Authorization & Security"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./07-api-development",
          children: "API Development & Integration"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure and switch between queue drivers for different environments and scaling needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and dispatch jobs with chaining, batching, and unique locking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control queue worker behavior using PHP attributes and middleware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor queue performance using Laravel Horizon"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build multi-channel notifications with mail, database, broadcast, and Slack delivery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design event-driven architectures with queued listeners and subscribers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Drivers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sync, database, redis, sqs, beanstalkd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating, dispatching, chaining, batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Job Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP attributes, middleware, unique jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizon, supervisor, balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-channel delivery, via() method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mailables, markdown templates, attachments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events & Listeners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event system, queued listeners, subscribers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Queue Drivers] --> B[Jobs & Dispatching]\n    B --> C[Job Chaining]\n    B --> D[Job Batching]\n    B --> E[Job Middleware]\n    C --> F[Queue Workers & Horizon]\n    D --> F\n    E --> G[Notifications]\n    G --> H[Mail]\n    G --> I[Events & Listeners]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel's queue system provides a unified API across multiple backends, enabling asynchronous job processing at any scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/06-queues-notifications.png",
        alt: "Queues, Jobs & Notifications Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queue-drivers",
      children: "Queue Drivers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Queue drivers abstract job processing across backends from sync (testing) through redis (production) to sqs (AWS-native scaling)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel's queue system provides a unified API across multiple backends. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "QUEUE_CONNECTION"
      }), " environment variable selects the active driver."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/queue.php\n\n'default' => env('QUEUE_CONNECTION', 'sync'),\n\n'connections' => [\n    'sync' => [\n        'driver' => 'sync',\n        // Processes jobs synchronously in the same request.\n        // Useful for testing; zero configuration.\n    ],\n\n    'database' => [\n        'driver' => 'database',\n        'table' => 'jobs',\n        'queue' => 'default',\n        'retry_after' => 90,\n        // Uses the database as a queue backend.\n        // Good for small apps without Redis.\n    ],\n\n    'redis' => [\n        'driver' => 'redis',\n        'connection' => 'default',\n        'queue' => 'default',\n        'retry_after' => 90,\n        'block_for' => null,\n        // Fast, production-ready. Works with Horizon.\n    ],\n\n    'sqs' => [\n        'driver' => 'sqs',\n        'key' => env('AWS_ACCESS_KEY_ID'),\n        'secret' => env('AWS_SECRET_ACCESS_KEY'),\n        'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account'),\n        'queue' => env('SQS_QUEUE', 'default'),\n        'suffix' => env('SQS_SUFFIX'),\n        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),\n        // Fully managed queue service on AWS.\n    ],\n\n    'beanstalkd' => [\n        'driver' => 'beanstalkd',\n        'host' => 'localhost',\n        'queue' => 'default',\n        'retry_after' => 90,\n        // Legacy driver. Prefer Redis or SQS.\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-queue-setup",
      children: "Database Queue Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan queue:table\nphp artisan migrate\n\n// Creates a `jobs` table with:\n// - id (bigIncrements)\n// - queue (string)\n// - payload (text - serialized job)\n// - attempts (tinyInteger)\n// - reserved_at (nullable timestamp)\n// - available_at (timestamp)\n// - created_at (timestamp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jobs",
      children: "Jobs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Jobs encapsulate discrete tasks that can be dispatched immediately, with delay, chained sequentially, or batched for parallel execution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jobs encapsulate tasks you want to run outside the current request lifecycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-a-job",
      children: "Creating a Job"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:job ProcessPodcast\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Podcast;\nuse App\\Models\\User;\nuse App\\Notifications\\PodcastProcessed;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass ProcessPodcast implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, SerializesModels;\n\n    // Eloquent models are serialized and re-retrieved from the DB\n    public function __construct(\n        public Podcast $podcast,\n        public User $user\n    ) {}\n\n    public function handle(): void\n    {\n        // Process the podcast (transcoding, metadata extraction, etc.)\n        $this->podcast->update([\n            'status' => 'processing',\n        ]);\n\n        // Simulate processing\n        $duration = $this->transcode($this->podcast->file_path);\n\n        $this->podcast->update([\n            'status' => 'processed',\n            'duration' => $duration,\n        ]);\n\n        // Notify the user\n        $this->user->notify(new PodcastProcessed($this->podcast));\n    }\n\n    protected function transcode(string $path): int\n    {\n        // Actual transcoding logic\n        return 1800; // Duration in seconds\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dispatching-jobs",
      children: "Dispatching Jobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Using the dispatch helper\ndispatch(new ProcessPodcast($podcast, $user));\n\n// Conditional dispatching\ndispatch_if($podcast->needsProcessing(), new ProcessPodcast($podcast, $user));\ndispatch_unless($podcast->isProcessed(), new ProcessPodcast($podcast, $user));\n\n// Using the Dispatchable trait's static method\nProcessPodcast::dispatch($podcast, $user);\n\n// Dispatch after the response is sent to the browser\nProcessPodcast::dispatchAfterResponse($podcast, $user);\n\n// Synchronous dispatch (bypass queue)\nProcessPodcast::dispatchSync($podcast, $user);\n\n// Delayed dispatch (Laravel 10+)\nProcessPodcast::dispatch($podcast, $user)->delay(now()->addMinutes(10));\n\n// Dispatch on a specific queue\nProcessPodcast::dispatch($podcast, $user)->onQueue('processing');\n\n// Dispatch to a specific connection\nProcessPodcast::dispatch($podcast, $user)->onConnection('sqs');\n\n// Dispatch with a custom ID for unique jobs (Laravel 11+)\nProcessPodcast::dispatch($podcast, $user)->withJobId(\"podcast-{$podcast->id}\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "job-chaining",
      children: "Job Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chaining runs jobs sequentially; if one fails, subsequent jobs do not run."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Chain using the Bus facade\nuse Illuminate\\Support\\Facades\\Bus;\n\nBus::chain([\n    new ProcessPodcast($podcast, $user),\n    new OptimizePodcast($podcast),\n    new NotifySubscribers($podcast),\n])->catch(function (Throwable $e) {\n    // Handle failure of any job in the chain\n    Log::error('Podcast processing chain failed', [\n        'podcast_id' => $podcast->id,\n        'error' => $e->getMessage(),\n    ]);\n})->dispatch();\n\n// Chain with onConnection and onQueue\nBus::chain([\n    new ProcessPodcast($podcast, $user),\n    new OptimizePodcast($podcast),\n])->onConnection('redis')->onQueue('processing')->dispatch();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "job-batching",
      children: "Job Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batching allows you to execute a group of jobs in parallel and track progress."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Bus\\Batch;\nuse Illuminate\\Support\\Facades\\Bus;\n\n$batch = Bus::batch([\n    new ProcessPodcast($podcast1, $user),\n    new ProcessPodcast($podcast2, $user),\n    new ProcessPodcast($podcast3, $user),\n])->then(function (Batch $batch) {\n    // All jobs completed successfully\n    Log::info('Batch completed: ' . $batch->id);\n})->catch(function (Batch $batch, Throwable $e) {\n    // First job failure detected\n    Log::error('Batch failed: ' . $e->getMessage());\n})->finally(function (Batch $batch) {\n    // Always runs (success or failure)\n    Cache::forget('processing_batches');\n})->dispatch();\n\n// Tracking batch progress\n$batchId = $batch->id;\n\n// In a controller\n$batch = Bus::findBatch($batchId);\nreturn response()->json([\n    'progress' => $batch->progress(),\n    'total' => $batch->totalJobs,\n    'pending' => $batch->pendingJobs,\n    'failed' => $batch->failedJobs,\n]);\n\n// Batch with conditions\nBus::batch([\n    // Dynamic batch size\n    ...collect($videos)->map(fn ($video) => new TranscodeVideo($video)),\n])->name('transcode-batch')->dispatch();\n\n// Batch with queue\nBus::batch([...])\n    ->onConnection('redis')\n    ->onQueue('transcoding')\n    ->dispatch();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "batch-table",
      children: "Batch Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan queue:batches-table\nphp artisan migrate\n\n// Creates job_batches table with:\n// - id (string - UUID)\n// - name (string)\n// - total_jobs (int)\n// - pending_jobs (int)\n// - failed_jobs (int)\n// - failed_job_ids (text - JSON array)\n// - options (text - JSON)\n// - cancelled_at (nullable timestamp)\n// - created_at (timestamp)\n// - finished_at (nullable timestamp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "unique-jobs",
      children: "Unique Jobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unique jobs prevent a job from being dispatched if another instance exists on the queue with the same unique key."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse Illuminate\\Contracts\\Queue\\ShouldBeUnique;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\nclass ProcessPodcast implements ShouldQueue, ShouldBeUnique\n{\n    use Dispatchable, InteractsWithQueue;\n\n    // Default: keep unique for 60 seconds\n    public $uniqueFor = 120;\n\n    public function __construct(\n        public Podcast $podcast,\n        public string $action\n    ) {}\n\n    // Define the unique key\n    public function uniqueId(): string\n\n> **Pro Tip:** Always implement `ShouldBeUnique` for jobs that process the same resource (e.g., transcoding a video, generating a report). Without it, duplicate jobs can flood the queue and waste processing capacity.\n    {\n        return $this->podcast->id . '-' . $this->action;\n    }\n\n    public function handle(): void\n    {\n        // Only one instance of this job per uniqueId can exist\n    }\n\n    // Handle duplicate attempts\n    public function uniqueVia(): \\Illuminate\\Support\\Testing\\Fakes\\QueueFake\n    {\n        return Cache::driver('redis'); // Use Redis for uniqueness lock\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "job-middleware",
      children: "Job Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs\\Middleware;\n\nuse Illuminate\\Support\\Facades\\Redis;\n\nclass RateLimited\n{\n    public function handle(object $job, \\Closure $next): void\n    {\n        Redis::throttle('key')\n            ->block(0)->allow(10)->every(60)\n            ->then(function () use ($job, $next) {\n                $next($job);\n            }, function () use ($job) {\n                $job->release(10); // Release back after 10 seconds\n            });\n    }\n}\n\n// Apply middleware in the job\nclass ProcessPodcast implements ShouldQueue\n{\n    public function middleware(): array\n    {\n        return [\n            new RateLimited,\n            // Built-in middleware:\n            new \\Illuminate\\Queue\\Middleware\\WithoutOverlapping($this->podcast->id),\n            // Prevent overlaps - release after 5 seconds\n            new \\Illuminate\\Queue\\Middleware\\WithoutOverlapping($this->podcast->id, 5),\n            // Throttle exceptions\n            new \\Illuminate\\Queue\\Middleware\\ThrottlesExceptions(10, 5),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rate-limited-jobs",
      children: "Rate-Limited Jobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond middleware, Laravel provides first-class rate limiting for jobs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/queue.php\n'rate_limit' => [\n    'api' => 100, // 100 jobs per minute\n    'email' => 10,\n],\n\n// In AppServiceProvider\nuse Illuminate\\Cache\\RateLimiting\\Limit;\nuse Illuminate\\Support\\Facades\\RateLimiter;\n\nRateLimiter::for('email', function (object $job) {\n    return Limit::perMinute(10)\n        ->by(get_class($job)); // Per-job class\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "job-events",
      children: "Job Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Queue;\n\n// Registered in AppServiceProvider\npublic function boot(): void\n{\n    Queue::before(function (\\Illuminate\\Queue\\Events\\JobProcessing $event) {\n        Log::info('Processing job: ' . $event->job->payload()['displayName']);\n    });\n\n    Queue::after(function (\\Illuminate\\Queue\\Events\\JobProcessed $event) {\n        Log::info('Job processed: ' . $event->job->getJobId());\n    });\n\n    Queue::failing(function (\\Illuminate\\Queue\\Events\\JobFailed $event) {\n        Log::error('Job failed: ' . $event->job->payload()['displayName'], [\n            'exception' => $event->exception->getMessage(),\n        ]);\n\n        Notification::route('slack', config('services.slack.job_webhook'))\n            ->notify(new JobFailedNotification($event));\n    });\n\n    Queue::looping(function () {\n        // Runs before the worker fetches the next job\n        if (Cache::has('maintenance_mode')) {\n            die('Maintenance mode active');\n        }\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queue-routing-laravel-13",
      children: "Queue Routing (Laravel 13)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel 13 introduced centralized queue routing via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Queue::route()"
      }), " method, allowing you to define which queue and connection each job class should use, instead of scattering ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onQueue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onConnection"
      }), " calls across the codebase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Jobs\\ProcessPodcast;\nuse App\\Jobs\\SendWelcomeEmail;\nuse App\\Jobs\\GenerateReport;\nuse Illuminate\\Queue\\QueueManager;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AppServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        Queue::route(function (QueueManager $router) {\n            // Route by job class\n            $router->route(ProcessPodcast::class, 'processing', 'redis');\n            $router->route(SendWelcomeEmail::class, 'email', 'sqs');\n            $router->route(GenerateReport::class, 'reports', 'redis');\n        });\n\n        // Or use class-based routing with route patterns\n        Queue::route(function (QueueManager $router) {\n            // All jobs matching a pattern can be routed\n            $router->route('/^.*Report$/', 'reports', 'redis');\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This approach centralizes queue topology decisions, making it trivial to re-route jobs without touching individual job classes or dispatch sites."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "php-attributes-for-jobs",
      children: "PHP Attributes for Jobs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel 11+ supports using PHP 8 attributes directly on job classes to replace traditional ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$tries"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$backoff"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$timeout"
      }), " properties."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\Attributes\\Backoff;\nuse Illuminate\\Queue\\Attributes\\FailOnTimeout;\nuse Illuminate\\Queue\\Attributes\\Timeout;\nuse Illuminate\\Queue\\Attributes\\Tries;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\n#[Tries(3)]\n#[Backoff([2, 5, 10])] // Waits: 2s, 5s, then 10s between retries\n#[Timeout(120)]         // Max execution time: 120 seconds\n#[FailOnTimeout]        // Treat timeout as a failure (do not retry)\nclass ProcessPodcast implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue;\n\n    // Without attributes (traditional):\n    // public $tries = 3;\n    // public $backoff = [2, 5, 10];\n    // public $timeout = 120;\n    // public $failOnTimeout = true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queue-workers",
      children: "Queue Workers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The queue worker listens for and processes jobs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Basic worker\nphp artisan queue:work\n\n// Listen (new process per job - slower, but avoids memory leaks)\nphp artisan queue:listen\n\n// Using a specific connection\nphp artisan queue:work redis\n\n// Using a specific queue\nphp artisan queue:work redis --queue=processing,default\n\n// Worker options\nphp artisan queue:work \\\n    --tries=3 \\           // Max attempts before marking as failed\n    --backoff=5 \\         // Seconds to wait between retries\n    --timeout=30 \\        // Max seconds per job (PHP max_execution_time is ignored)\n    --sleep=3 \\           // Seconds to pause if no job is available\n    --max-jobs=100 \\      // Process 100 jobs then restart\n    --max-time=3600 \\     // Restart after 1 hour\n    --rest=5 \\            // Cooldown seconds between jobs\n    --stop-when-empty     // Process all available jobs then exit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supervisor-configuration",
      children: "Supervisor Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In production, a process monitor keeps the worker running:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "[program:laravel-worker]\nprocess_name=%(program_name)s_%(process_num)02d\ncommand=php /var/www/html/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600\nautostart=true\nautorestart=true\nstopasgroup=true\nkillasgroup=true\nuser=forge\nnumprocs=8\nredirect_stderr=true\nstdout_logfile=/var/www/html/worker.log\nstopwaitsecs=3600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Graceful shutdown (SIGTERM processed after current job)\nphp artisan queue:restart\n// All workers will restart after finishing their current job\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "queue-priority",
      children: "Queue Priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Process 'high' queue items first, then 'default'\nphp artisan queue:work --queue=high,default\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "laravel-horizon",
      children: "Laravel Horizon"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Horizon provides a Redis-powered dashboard with auto-balancing, failure monitoring, job tagging, and per-queue configuration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizon provides a beautiful dashboard and Redis-driven configuration for Laravel queues."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "composer require laravel/horizon\n\nphp artisan horizon:install\n// Publishes config/horizon.php and HorizonServiceProvider\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuration-1",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/horizon.php\n\n'environments' => [\n    'production' => [\n        'supervisor-1' => [\n            'connection' => 'redis',\n            'queue' => ['high', 'default'],\n            'balance' => 'auto',\n            'maxProcesses' => 10,\n            'maxTime' => 3600,\n            'maxJobs' => 100,\n            'memory' => 128,\n            'tries' => 3,\n            'timeout' => 60,\n            'nice' => 0,\n        ],\n        'supervisor-2' => [\n            'connection' => 'redis',\n            'queue' => ['reports', 'exports'],\n            'balance' => 'auto',\n            'maxProcesses' => 5,\n            'minProcesses' => 1,\n            'tries' => 1, // Different config per queue\n        ],\n    ],\n    'local' => [\n        'supervisor-1' => [\n            'connection' => 'redis',\n            'balance' => 'simple', // Round-robin\n            'queue' => ['default'],\n            'maxProcesses' => 3,\n        ],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "running-horizon",
      children: "Running Horizon"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan horizon           // Start Horizon\nphp artisan horizon:pause     // Pause processing\nphp artisan horizon:continue  // Resume processing\nphp artisan horizon:terminate // Graceful shutdown\nphp artisan horizon:snapshot  // Manual metrics snapshot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "horizon-dashboard",
      children: "Horizon Dashboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Horizon provides a real-time dashboard at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/horizon"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Job metrics"
        }), ": processed count, failed count, average runtime per queue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failed jobs"
        }), ": list of failed jobs with exception details, retry button"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags"
        }), ": jobs can be tagged for search and filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Balancing"
        }), ": auto-balancing adjusts worker distribution across queues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Tagging jobs\nclass ProcessPodcast implements ShouldQueue\n{\n    public function tags(): array\n    {\n        return ['podcast', 'podcast:' . $this->podcast->id, 'user:' . $this->podcast->user_id];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "balancing-strategies",
      children: "Balancing Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'balance' => 'auto',      // Default: Horizon adjusts workers based on queue needs\n'balance' => 'simple',    // Round-robin across queues\n'balance' => false,       // Fixed allocation per supervisor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "notifications",
      children: "Notifications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The notification system delivers messages across mail, database, broadcast, Slack, SMS, and custom channels with a single via() method. for Failed Jobs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan horizon:failed-notify // Send notification about recent failures\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notifications-1",
      children: "Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's notification system sends messages across multiple channels with a single, unified API."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-notifications",
      children: "Creating Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:notification OrderShipped\n\n> **Remember:** Implement `ShouldQueue` on notification classes that send mail — otherwise the email is sent synchronously during the HTTP request, increasing response time by hundreds of milliseconds.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Notifications;\n\nuse App\\Models\\Order;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Notifications\\Messages\\MailMessage;\nuse Illuminate\\Notifications\\Messages\\SlackMessage;\nuse Illuminate\\Notifications\\Notification;\n\nclass OrderShipped extends Notification implements ShouldQueue\n{\n    use Queueable;\n\n    public function __construct(\n        public Order $order\n    ) {}\n\n    // Define which channels the notification will be sent through\n    public function via(object $notifiable): array\n    {\n        $channels = ['mail'];\n\n        if ($notifiable->prefers_database) {\n            $channels[] = 'database';\n        }\n\n        if ($notifiable->slack_webhook_url) {\n            $channels[] = 'slack';\n        }\n\n        return $channels;\n    }\n\n    // Mail channel\n    public function toMail(object $notifiable): MailMessage\n    {\n        return (new MailMessage)\n            ->greeting(\"Hello {$notifiable->name}!\")\n            ->subject(\"Order #{$this->order->id} Shipped\")\n            ->line('Your order has been shipped!')\n            ->line(\"Tracking: {$this->order->tracking_number}\")\n            ->action('Track Order', url(\"/orders/{$this->order->id}\"))\n            ->line('Thank you for your business!')\n            ->attach(public_path('invoices/' . $this->order->invoice_path));\n    }\n\n    // Database channel (stored in notifications table)\n    public function toDatabase(object $notifiable): array\n    {\n        return [\n            'order_id' => $this->order->id,\n            'tracking' => $this->order->tracking_number,\n            'type' => 'order_shipped',\n        ];\n    }\n\n    // Broadcast channel (pushes to Pusher/WebSocket)\n    public function toBroadcast(object $notifiable): BroadcastMessage\n    {\n        return new BroadcastMessage([\n            'order_id' => $this->order->id,\n            'message' => 'Your order has shipped!',\n        ]);\n    }\n\n    // Slack channel\n    public function toSlack(object $notifiable): SlackMessage\n    {\n        return (new SlackMessage)\n            ->success()\n            ->content(\"Order #{$this->order->id} has been shipped!\")\n            ->attachment(function ($attachment) {\n                $attachment->title('Order Details', url(\"/orders/{$this->order->id}\"))\n                    ->fields([\n                        'Order' => '#' . $this->order->id,\n                        'Total' => $this->order->total,\n                        'Tracking' => $this->order->tracking_number,\n                    ]);\n            });\n    }\n\n    // Vonage (SMS) channel\n    public function toVonage(object $notifiable): VonageMessage\n    {\n        return (new VonageMessage)\n            ->content(\"Your order #{$this->order->id} has shipped!\")\n            ->unicode();\n    }\n\n    // Determine if notification should be sent\n    public function shouldSend(object $notifiable, string $channel): bool\n    {\n        return $this->order->status === 'shipped';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sending-notifications",
      children: "Sending Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Via the Notifiable trait\n$user->notify(new OrderShipped($order));\n\n// Via the Notification facade\nNotification::send($users, new OrderShipped($order));\n\n// Immediate delivery (without queue)\n$user->notifyNow(new OrderShipped($order)); // Useful when ShouldQueue is set\n\n// On-demand notifications (no User model needed)\nNotification::route('mail', 'guest@example.com')\n    ->route('slack', config('services.slack.webhook'))\n    ->notify(new OrderShipped($order));\n\n// Locale override\n$user->notify((new OrderShipped($order))->locale('fr'));\n\n// Delay notifications\n$user->notify((new OrderShipped($order))->delay([\n    'mail' => now()->addMinutes(5),\n    'slack' => now()->addMinutes(1),\n]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "notification-events",
      children: "Notification Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Notification;\n\nNotification::sending(function (\\Illuminate\\Notifications\\Events\\NotificationSending $event) {\n    if ($event->notification->order->amount > 1000) {\n        Log::warning('Large order notification', ['order' => $event->notification->order->id]);\n    }\n});\n\nNotification::sent(function (\\Illuminate\\Notifications\\Events\\NotificationSent $event) {\n    Log::info(\"Notification sent via {$event->channel}\", [\n        'notification' => get_class($event->notification),\n    ]);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mail",
      children: "Mail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Mailables use Envelope, Content, and Attachment objects with Markdown templates for responsive, branded email delivery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel provides a clean API over the SwiftMailer (pre-11) or Symfony Mailer (11+) library."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-mailables",
      children: "Creating Mailables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:mail OrderConfirmation --markdown=emails.orders.confirmed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Mail;\n\nuse App\\Models\\Order;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Mail\\Mailable;\nuse Illuminate\\Mail\\Mailables\\Attachment;\nuse Illuminate\\Mail\\Mailables\\Content;\nuse Illuminate\\Mail\\Mailables\\Envelope;\n\nclass OrderConfirmation extends Mailable implements ShouldQueue\n{\n    use Queueable;\n\n    public function __construct(\n        public Order $order\n    ) {}\n\n    // Email envelope (sender, subject)\n    public function envelope(): Envelope\n    {\n        return new Envelope(\n            from: new Address(config('mail.from.address'), config('mail.from.name')),\n            replyTo: [new Address('support@example.com', 'Support')],\n            subject: \"Order Confirmation - #{$this->order->id}\",\n            tags: ['order-confirmation'],\n            metadata: ['order_id' => (string) $this->order->id],\n        );\n    }\n\n    // Email content\n    public function content(): Content\n    {\n        return new Content(\n            markdown: 'emails.orders.confirmed',\n            with: [\n                'order' => $this->order,\n                'total' => number_format($this->order->total, 2),\n                'items' => $this->order->items,\n            ],\n        );\n    }\n\n    // Attachments\n    public function attachments(): array\n    {\n        return [\n            Attachment::fromPath(public_path('invoices/order-' . $this->order->id . '.pdf'))\n                ->as('invoice.pdf')\n                ->withMime('application/pdf'),\n\n            Attachment::fromStorageDisk('s3', \"receipts/{$this->order->id}.pdf\"),\n\n            // In-memory attachment\n            Attachment::fromData(fn () => $this->generateReceiptPdf(), 'receipt.pdf'),\n        ];\n    }\n\n    protected function generateReceiptPdf(): string\n    {\n        // Generate PDF content\n        return PDF::loadView('pdf.receipt', ['order' => $this->order])->output();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "markdown-mail-templates",
      children: "Markdown Mail Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- resources/views/emails/orders/confirmed.blade.php --}}\n<x-mail::message>\n# Order Confirmed, {{ $order->user->name }}!\n\nYour order **#{{ $order->id }}** has been confirmed.\n\n<x-mail::panel>\n**Order Total:** ${{ $total }}\n**Items:** {{ $items->count() }}\n</x-mail::panel>\n\n<x-mail::table>\n| Product | Quantity | Price |\n|:--------|:--------:|------:|\n@foreach ($items as $item)\n| {{ $item->name }} | {{ $item->quantity }} | ${{ $item->price }} |\n@endforeach\n</x-mail::table>\n\n<x-mail::button :url=\"url('/orders/' . $order->id)\">\nView Order\n</x-mail::button>\n\nThanks,<br>\n{{ config('app.name') }}\n\n<x-mail::subcopy>\nIf you're having trouble clicking the \"View Order\" button, copy and paste this URL into your browser: {{ url('/orders/' . $order->id) }}\n</x-mail::subcopy>\n</x-mail::message>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sending-mail",
      children: "Sending Mail"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Mail\\OrderConfirmation;\nuse Illuminate\\Support\\Facades\\Mail;\n\n// Send\nMail::to($user->email)->send(new OrderConfirmation($order));\n\n// Queue\nMail::to($user->email)->queue(new OrderConfirmation($order));\n\n// Queue with delay\nMail::to($user->email)->later(now()->addMinutes(15), new OrderConfirmation($order));\n\n// CC and BCC\nMail::to($user->email)\n    ->cc($manager->email)\n    ->bcc('archive@example.com')\n    ->queue(new OrderConfirmation($order));\n\n// Send to multiple\nMail::to($users->pluck('email'))->send(new Newsletter($issue));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mail-drivers",
      children: "Mail Drivers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/mail.php\n'default' => env('MAIL_MAILER', 'log'),\n\n'mailers' => [\n    'smtp' => [\n        'transport' => 'smtp',\n        'host' => env('MAIL_HOST', 'smtp.mailgun.org'),\n        'port' => env('MAIL_PORT', 587),\n        'encryption' => env('MAIL_ENCRYPTION', 'tls'),\n        'username' => env('MAIL_USERNAME'),\n        'password' => env('MAIL_PASSWORD'),\n        'timeout' => null,\n    ],\n\n    'ses' => [\n        'transport' => 'ses',\n        // AWS SES - requires AWS SDK\n    ],\n\n    'mailgun' => [\n        'transport' => 'mailgun',\n        'domain' => env('MAILGUN_DOMAIN'),\n        'secret' => env('MAILGUN_SECRET'),\n    ],\n\n    'postmark' => [\n        'transport' => 'postmark',\n        'token' => env('POSTMARK_TOKEN'),\n    ],\n\n    'log' => [\n        'transport' => 'log',\n        'channel' => env('MAIL_LOG_CHANNEL'),\n        // Writes to log file instead of sending (useful for development)\n    ],\n\n    'array' => [\n        'transport' => 'array',\n        // Stores in memory array (for testing)\n    ],\n\n    'failover' => [\n        'transport' => 'failover',\n        'mailers' => [\n            'ses',\n            'postmark',\n        ],\n        // Falls back to Postmark if SES fails\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mail-preview-in-browser",
      children: "Mail Preview in Browser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Register a mail preview route\nRoute::get('/mail/preview/{order}', function (Order $order) {\n    return new App\\Mail\\OrderConfirmation($order);\n});\n\n// Or with artisan (no server needed)\nphp artisan tmp:mail OrderConfirmation --order=1\n// Opens the rendered email in your browser\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mail-events",
      children: "Mail Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Mail;\n\nMail::sending(function (\\Illuminate\\Mail\\Events\\MessageSending $event) {\n    if ($event->message->getSubject() === 'Password Reset') {\n        Log::info('Password reset email sent');\n    }\n});\n\nMail::sent(function (\\Illuminate\\Mail\\Events\\MessageSent $event) {\n    // After email has been sent\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "events--listeners",
      children: "Events & Listeners"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Events decouple business logic; queued listeners via ShouldQueue prevent slow operations from blocking the HTTP response."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Events provide a clean way to decouple various parts of your application."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-events-and-listeners",
      children: "Creating Events and Listeners"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "php artisan make:event OrderPlaced\nphp artisan make:listener SendOrderConfirmation --event=OrderPlaced\nphp artisan make:listener UpdateInventory --event=OrderPlaced\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Events;\n\nuse App\\Models\\Order;\nuse Illuminate\\Broadcasting\\InteractsWithSockets;\nuse Illuminate\\Foundation\\Events\\Dispatchable;\nuse Illuminate\\Queue\\SerializesModels;\n\nclass OrderPlaced\n{\n    use Dispatchable, InteractsWithSockets, SerializesModels;\n\n    public function __construct(\n        public Order $order\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\OrderPlaced;\nuse App\\Mail\\OrderConfirmation;\nuse App\\Notifications\\OrderShipped;\nuse Illuminate\\Support\\Facades\\Mail;\n\nclass SendOrderConfirmation\n{\n    public function handle(OrderPlaced $event): void\n    {\n        // Send email\n        Mail::to($event->order->user->email)\n            ->queue(new OrderConfirmation($event->order));\n\n        // Send notification\n        $event->order->user->notify(new OrderShipped($event->order));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-service-provider-registration",
      children: "Event Service Provider Registration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Providers;\n\nuse App\\Events\\OrderPlaced;\nuse App\\Listeners\\SendOrderConfirmation;\nuse App\\Listeners\\UpdateInventory;\nuse Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;\n\nclass EventServiceProvider extends ServiceProvider\n{\n    protected $listen = [\n        OrderPlaced::class => [\n            SendOrderConfirmation::class,\n            UpdateInventory::class,\n        ],\n        Registered::class => [\n            SendEmailVerificationNotification::class,\n        ],\n    ];\n\n    // Model observers\n    protected $observers = [\n        Product::class => [ProductObserver::class],\n    ];\n\n    // Discover events automatically (Laravel 10+)\n    public function shouldDiscoverEvents(): bool\n    {\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dispatching-events",
      children: "Dispatching Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Using the helper\nevent(new OrderPlaced($order));\n\n// Using the trait\nOrderPlaced::dispatch($order);\n\n// Conditional dispatch\nEvent::dispatchIf(\n\n> **Warning:** When using job batching, ensure your batch callback closures don't capture heavy objects. Only capture IDs and re-query inside the callback to avoid serialization issues.$order->total > 0, new OrderPlaced($order));\nEvent::dispatchUnless($order->isCancelled(), new OrderPlaced($order));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "queued-event-listeners",
      children: "Queued Event Listeners"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nuse App\\Events\\OrderPlaced;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Contracts\\Queue\\ShouldBeUnique;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\nclass UpdateInventory implements ShouldQueue, ShouldBeUnique\n{\n    use InteractsWithQueue;\n\n    public $queue = 'inventory'; // Custom queue\n    public $tries = 3;\n\n    // Unique until the job finishes\n    public function uniqueId(): string\n    {\n        return 'inventory-update-' . $this->order->id;\n    }\n\n    public function handle(OrderPlaced $event): void\n    {\n        foreach ($event->order->items as $item) {\n            $item->product->decrement('stock', $item->quantity);\n        }\n    }\n\n    public function failed(OrderPlaced $event, \\Throwable $e): void\n    {\n        Log::critical('Inventory update failed', [\n            'order' => $event->order->id,\n            'error' => $e->getMessage(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-subscribers",
      children: "Event Subscribers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subscribers allow you to group multiple event handlers in one class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Listeners;\n\nclass OrderEventSubscriber\n{\n    public function handleOrderPlaced($event): void\n    {\n        // Handle order placed\n    }\n\n    public function handleOrderCancelled($event): void\n    {\n        // Handle order cancelled\n    }\n\n    public function handleOrderShipped($event): void\n    {\n        // Handle order shipped\n    }\n\n    // Register all event handlers\n    public function subscribe(\\Illuminate\\Events\\Dispatcher $events): void\n    {\n        $events->listen(\n            'App\\Events\\OrderPlaced',\n            [self::class, 'handleOrderPlaced']\n        );\n\n        $events->listen(\n            'App\\Events\\OrderCancelled',\n            [self::class, 'handleOrderCancelled']\n        );\n\n        $events->listen(\n            'App\\Events\\OrderShipped',\n            [self::class, 'handleOrderShipped']\n        );\n    }\n}\n\n// Registration\nprotected $subscribe = [\n    OrderEventSubscriber::class,\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-order-processing-pipeline",
      children: "Example: Order Processing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is a realistic order processing pipeline that ties together queues, jobs, notifications, mail, and events."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// 1. Controller dispatches the order\nclass OrderController extends Controller\n{\n    public function store(StoreOrderRequest $request)\n    {\n        $order = DB::transaction(function () use ($request) {\n            $order = Order::create($request->validated());\n            $order->items()->createMany($request->input('items'));\n            return $order;\n        });\n\n        // Dispatch the order processing pipeline\n        ProcessOrder::dispatch($order)\n            ->onQueue('processing')\n            ->chain([\n                new ChargePayment($order),\n                new UpdateInventory($order),\n            ]);\n\n        // Dispatch the email notification batch\n        Bus::batch([\n            new SendOrderConfirmationEmail($order),\n            new SendMerchantNotification($order),\n            new SendShippingPartnerRequest($order),\n        ])->then(function (Batch $batch) use ($order) {\n            // Update order status to confirmed after all notifications sent\n            $order->update(['status' => 'confirmed', 'confirmed_at' => now()]);\n        })->catch(function (Batch $batch, Throwable $e) use ($order) {\n            // Escalate to manual review\n            dispatch(new EscalateFailedOrder($order));\n        })->name(\"order-{$order->id}-notifications\")\n          ->onConnection('sqs')\n          ->dispatch();\n\n        OrderPlaced::dispatch($order);\n\n        return redirect()->route('orders.show', $order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Order;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\Attributes\\Backoff;\nuse Illuminate\\Queue\\Attributes\\Tries;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\n#[Tries(5)]\n#[Backoff([5, 15, 30, 60])]\nclass ProcessOrder implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue;\n\n    public function __construct(\n        public Order $order\n    ) {}\n\n    public function handle(): void\n    {\n        // Validate inventory, reserve items, mark as processing\n        $this->order->update(['status' => 'processing']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Jobs;\n\nuse App\\Models\\Order;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Foundation\\Bus\\Dispatchable;\nuse Illuminate\\Queue\\Attributes\\Tries;\nuse Illuminate\\Queue\\InteractsWithQueue;\n\n#[Tries(3)]\nclass ChargePayment implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue;\n\n    public function __construct(\n        public Order $order\n    ) {}\n\n    public function handle(): void\n    {\n        // Process payment\n        $charge = PaymentGateway::charge(\n            $this->order->total,\n            $this->order->payment_token\n        );\n\n        $this->order->update([\n            'payment_id' => $charge->id,\n            'status' => 'paid',\n        ]);\n    }\n\n    public function failed(\\Throwable $e): void\n    {\n        $this->order->update(['status' => 'payment_failed']);\n        Notification::route('slack', config('services.slack.billing'))\n            ->notify(new PaymentFailed($this->order));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Job Chaining"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Job Batching"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential (one after another)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel (all at once)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain stops on failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracks per-job failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "catch() on chain failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "then(), catch(), finally()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment \\u2192 Ship \\u2192 Notify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process multiple uploads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict order guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering guarantee"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--queue-artisan-commands",
      children: "Quick Reference — Queue Artisan Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:job ProcessPodcast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a job class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan queue:work redis --tries=3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start a queue worker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan queue:restart"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gracefully restart all workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan horizon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start Horizon dashboard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:notification OrderShipped"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:mail OrderConfirmation --markdown=emails.orders.confirmed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create mailable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SaaS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redis (single)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sqs + redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redis (multiple queues)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High Priority Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription billing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batched Jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image thumbnailing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk order import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSV user import"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notified Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email + database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email + SMS + Slack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email + Slack + Webhook"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Horizon Supervisors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (payments, email, default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 per service tier"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which interface prevents duplicate instances of the same job on the queue?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) ShouldQueue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) ShouldBeUnique"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) ShouldBeEncrypted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) UniqueJob"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What does Bus::chain() do?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Runs all jobs in parallel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Runs jobs sequentially, stopping on failure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Groups jobs for batch tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Distributes jobs across workers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Which method on a notification class determines which channels to send through?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) channels()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) via()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) to()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) send()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What is the purpose of Laravel Horizon?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) A debugging toolbar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) A Redis queue dashboard with auto-balancing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) A testing framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) A mail preview tool"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-b, 2-b, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Queue drivers abstract job processing across backends; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sync"
        }), " is for testing, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "database"
        }), " for small apps, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "redis"
        }), " for production with Horizon, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sqs"
        }), " for AWS-native scaling"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jobs encapsulate discrete tasks; they can be dispatched immediately, after the response, with delay, chained sequentially, or batched for parallel execution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel 13 introduces centralized queue routing via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Queue::route()"
        }), ", allowing queue topology configuration in one place"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PHP attributes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[Tries]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[Backoff]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[Timeout]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[FailOnTimeout]"
        }), ") replace traditional public properties for job configuration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel Horizon provides a Redis-powered dashboard with auto-balancing, failure monitoring, and job tagging"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Notifications deliver messages across mail, database, broadcast, Slack, SMS, and custom channels with a single ", (0,jsx_runtime.jsx)(_components.code, {
          children: "via()"
        }), " method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mailables use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Envelope"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Content"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Attachment"
        }), " objects; Markdown mail templates provide responsive, branded emails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Events and listeners decouple business logic; queued listeners via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ShouldQueue"
        }), " prevent slow operations from blocking the response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Job batching with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "then"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finally"
        }), " callbacks enables complex, observable workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sync"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "database"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "redis"
          }), " queue drivers. When would you use each in a production environment?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between job chaining and job batching? When would you use one over the other?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ShouldBeUnique"
          }), " interface prevent duplicate jobs? What role does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "uniqueFor"
          }), " property play?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain how Laravel Horizon's auto-balancing strategy works. How does it distribute workers across different queues?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "via()"
          }), " method in notifications? How does it enable multi-channel delivery from a single notification class?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a Video Processing Pipeline"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a job chain for video processing that: validates the uploaded file, transcodes the video to three resolutions (720p, 1080p, 4K), generates thumbnails, and updates the video model status through each stage. Include a catch handler that sends a Slack notification if any step fails. Use PHP attributes for try counts and backoff intervals."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Channel Notification System"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AccountSuspended"
          }), " notification that sends via email (with a reason and reactivation link), database (for an in-app notification center), and Slack (#compliance channel for amounts > $1000). Use conditional ", (0,jsx_runtime.jsx)(_components.code, {
            children: "via()"
          }), " logic based on user preferences. Demonstrate sending to both a model and an on-demand recipient."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event-Driven Order Processing with Observability"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderShipped"
          }), " event with two listeners: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UpdateShipmentTracking"
          }), " (queued, updates tracking table) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NotifyCustomer"
          }), " (queued, sends multi-channel notification). Add a subscriber class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MetricsSubscriber"
          }), " that listens to all order lifecycle events (", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderPlaced"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderShipped"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderDelivered"
          }), ") and increments corresponding metrics counters. Show the full registration in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EventServiceProvider"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build a Complete E-Commerce Backend with Queues, Notifications, and Events"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a production-ready e-commerce order system that implements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Three job classes: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidateOrder"
        }), " (inventory checks, fraud scoring), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProcessPayment"
        }), " (payment gateway integration with 5 retries, exponential backoff), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FulfillOrder"
        }), " (warehouse integration, tracking number generation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All three jobs chained sequentially; if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProcessPayment"
        }), " fails, the chain stops and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RefundOrder"
        }), " job is dispatched as a compensating action"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OrderCreated"
        }), " event with listeners: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SendOrderConfirmation"
        }), " (Mail + Database notification queued), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SendOrderToERP"
        }), " (dispatched to a separate SQS queue), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UpdateCustomerLifetimeValue"
        }), " (queued, unique by customer ID)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OrderBatchProcessingCommand"
        }), " that: takes a CSV of 100+ orders, dispatches each as an individual batch, tracks batch progress via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Bus::findBatch()"
        }), ", and exposes a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/batches/{id}"
        }), " endpoint returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ progress, total, failed, pending }"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Horizon configuration for three supervisors: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "high"
        }), " (payments, 8 processes, auto-balance), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), " (fulfillment, 4 processes, auto-balance), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batch"
        }), " (batch imports, 2 processes, simple balance). All tagged by order ID for dashboard filtering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Centralized queue routing via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Queue::route()"
        }), ": payment jobs route to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "high"
        }), " queue on Redis, ERP jobs route to the SQS connection, email jobs route to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), " queue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PHP attributes for all jobs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[Tries]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[Backoff]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[Timeout]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#[FailOnTimeout]"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A notification after a batch completes with a summary email containing total orders, total revenue, and failure count"
      }), "\n"]
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