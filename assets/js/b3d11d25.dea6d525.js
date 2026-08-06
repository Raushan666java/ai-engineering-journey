"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87567],{

/***/ 39321
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_08_broadcasting_realtime_md_b3d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-08-broadcasting-realtime-md-b3d.json
const site_docs_courses_laravel_08_broadcasting_realtime_md_b3d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/08-broadcasting-realtime","title":"Chapter 8: Broadcasting, Events & Real-Time Features","description":"Previous Service Container, Facades & Package Development","source":"@site/docs/courses/laravel/08-broadcasting-realtime.md","sourceDirName":"courses/laravel","slug":"/laravel/08-broadcasting-realtime","permalink":"/ai-engineering-journey/laravel/08-broadcasting-realtime","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-broadcasting-realtime","slug":"/laravel/08-broadcasting-realtime","title":"Chapter 8: Broadcasting, Events & Real-Time Features","sidebar_label":"Chapter 8: Broadcasting, Events & Real-Time Features","sidebar_position":8},"sidebar":"coursesSidebar","previous":{"title":"Chapter 7: API Development & Integration","permalink":"/ai-engineering-journey/laravel/07-api-development"},"next":{"title":"Chapter 9: Service Container, Facades & Package Development","permalink":"/ai-engineering-journey/laravel/09-container-packages"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/08-broadcasting-realtime.md


const frontMatter = {
	id: '08-broadcasting-realtime',
	slug: '/laravel/08-broadcasting-realtime',
	title: 'Chapter 8: Broadcasting, Events & Real-Time Features',
	sidebar_label: 'Chapter 8: Broadcasting, Events & Real-Time Features',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Broadcasting, Events & Real-Time Features';

const assets = {

};

/*End Image Gallery*/


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
  "value": "Event System Deep Dive",
  "id": "event-system-deep-dive",
  "level": 3
}, {
  "value": "Laravel Reverb",
  "id": "laravel-reverb",
  "level": 3
}, {
  "value": "Broadcasting",
  "id": "broadcasting",
  "level": 3
}, {
  "value": "Pusher Integration",
  "id": "pusher-integration",
  "level": 3
}, {
  "value": "Echo Client Library",
  "id": "echo-client-library",
  "level": 3
}, {
  "value": "Presence Channels",
  "id": "presence-channels",
  "level": 3
}, {
  "value": "Server-Sent Events",
  "id": "server-sent-events",
  "level": 3
}, {
  "value": "Notification Events",
  "id": "notification-events",
  "level": 3
}, {
  "value": "Queueing Events",
  "id": "queueing-events",
  "level": 3
}, {
  "value": "Example: Real-Time Chat Application",
  "id": "example-real-time-chat-application",
  "level": 3
}, {
  "value": "Example: Real-Time Notification System",
  "id": "example-real-time-notification-system",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Broadcasting Artisan Commands",
  "id": "quick-reference--broadcasting-artisan-commands",
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
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-8-broadcasting-events--real-time-features",
        children: "Chapter 8: Broadcasting, Events & Real-Time Features"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./07-api-development",
          children: "API Development & Integration"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./09-container-packages",
          children: "Service Container, Facades & Package Development"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement an event-driven architecture using Laravel's event system and contracts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and configure Laravel Reverb as a first-party WebSocket server for real-time communication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement public, private, and presence channels with proper authorization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate the Echo client library to subscribe to channels and listen for broadcast events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build real-time notification delivery using the broadcast notification channel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct complex real-time applications including chat systems and live notification feeds"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/08-broadcasting-realtime/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/08-broadcasting-realtime/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/08-broadcasting-realtime/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/08-broadcasting-realtime/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/08-broadcasting-realtime/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/08-broadcasting-realtime/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Event System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event classes, listeners, contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Reverb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-party WebSocket server, configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public, private, presence, authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Echo Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Channel subscription, event listening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presence Channels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online users, joining/leaving events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-Sent Events for unidirectional streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notification Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast notification channel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Event System] --> B[Laravel Reverb]\n    B --> C[Broadcasting Channels]\n    C --> D[Public Channels]\n    C --> E[Private Channels]\n    C --> F[Presence Channels]\n    D --> G[Echo Client]\n    E --> G\n    F --> G\n    G --> H[Real-Time Chat]\n    G --> I[Notifications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel's event system with broadcasting enables real-time server-to-client communication through WebSockets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/08-broadcasting-realtime.png",
        alt: "Broadcasting and Realtime"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-system-deep-dive",
      children: "Event System Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Events are lightweight data carriers while listeners contain business logic; ShouldBroadcast pushes events to WebSocket clients."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's event system provides a clean observer pattern implementation. Events are lightweight data carriers; listeners contain the business logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App\\Providers\\EventServiceProvider\nprotected $listen = [\n    OrderShipped::class => [SendShipmentNotification::class],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An event class holds data:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class OrderShipped\n{\n    use Dispatchable;\n\n    public function __construct(public readonly Order $order) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A listener handles the event:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SendShipmentNotification\n{\n    public function handle(OrderShipped $event): void\n    {\n        Notification::send($event->order->user, new ShipmentConfirmed($event->order));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event contracts:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ShouldBroadcast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast the event to WebSocket clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ShouldQueue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue the listener's handle method for async"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ShouldQueue"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ShouldBeUnique"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent duplicate queued listeners"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An event implementing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ShouldBroadcast"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MessageSent implements ShouldBroadcast\n{\n    use Dispatchable, InteractsWithSockets, SerializesModels;\n\n    public function __construct(public readonly Message $message) {}\n\n    public function broadcastOn(): array\n    {\n        return [new PrivateChannel(\"chat.{$this->message->chat_id}\")];\n    }\n\n    public function broadcastAs(): string\n    {\n        return 'message.sent';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "laravel-reverb",
      children: "Laravel Reverb"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Reverb is a first-party Laravel WebSocket server that scales horizontally with Redis, eliminating the need for third-party services like Pusher."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverb is a first-party WebSocket server for Laravel."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/reverb\nphp artisan vendor:publish --tag=reverb-config\nphp artisan reverb:generate-keys\nphp artisan reverb:start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configuration in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/reverb.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'apps' => [\n    [\n        'app_id' => env('REVERB_APP_ID'),\n        'app_key' => env('REVERB_APP_KEY'),\n        'app_secret' => env('REVERB_APP_SECRET'),\n        'app_host' => env('REVERB_HOST', 'localhost'),\n        'app_port' => env('REVERB_PORT', 8080),\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production, use Supervisor:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "[program:reverb]\ncommand=php /var/www/html/artisan reverb:start\nnumprocs=1\nautostart=true\nautorestart=true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scaling"
      }), " across servers uses Redis:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'scaling' => [\n    'enabled' => env('REVERB_SCALING_ENABLED', true),\n    'channel' => 'reverb',\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "broadcasting",
      children: "Broadcasting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Channels come in three types: public (no auth), private (user authorization), and presence (with visible connected member list)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Broadcasting pushes events from server to WebSocket clients."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), " is defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes/channels.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Broadcast::channel('chat.{chatId}', function (User $user, int $chatId) {\n    return $user->chats()->where('chat_id', $chatId)->exists();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For presence channels, return user metadata:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Broadcast::channel('game.{gameId}', function (User $user, int $gameId) {\n    if ($user->games()->where('game_id', $gameId)->exists()) {\n        return ['id' => $user->id, 'name' => $user->name];\n\n> **Remember:** Presence channel authorization callbacks must return an associative array of user data (not just true/false). The array is sent to all connected clients so they can display online user information.\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Channel classes"
      }), " for complex authorization:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan make:channel ChatChannel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ChatChannel\n{\n    public function join(User $user, Chat $chat): array|bool\n    {\n        if (!$chat->participants()->where('user_id', $user->id)->exists()) {\n            return false;\n        }\n        return ['id' => $user->id, 'name' => $user->name, 'is_moderator' => $chat->moderators()->where('user_id', $user->id)->exists()];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Channel types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private-"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorized users only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "presence-"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows connected users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "new Channel('announcements');          // Public\nnew PrivateChannel('order.'.$id);      // Private\nnew PresenceChannel('game.'.$id);      // Presence\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pusher-integration",
      children: "Pusher Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/broadcasting.php"
      }), " for the Pusher service:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'pusher' => [\n    'driver' => 'pusher',\n    'key' => env('PUSHER_APP_KEY'),\n    'secret' => env('PUSHER_APP_SECRET'),\n    'app_id' => env('PUSHER_APP_ID'),\n    'options' => ['cluster' => env('PUSHER_APP_CLUSTER'), 'useTLS' => true],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "echo-client-library",
      children: "Echo Client Library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Echo subscribes to channels using .listen(), .notification(), .whisper(), and presence methods like .here(), .joining(), .leaving()."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install laravel-echo pusher-js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Reverb:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "window.Echo = new Echo({\n    broadcaster: 'reverb',\n    key: import.meta.env.VITE_REVERB_APP_KEY,\n    wsHost: import.meta.env.VITE_REVERB_HOST,\n    wsPort: import.meta.env.VITE_REVERB_PORT,\n    forceTLS: import.meta.env.VITE_REVERB_SCHEME === 'https',\n    enabledTransports: ['ws', 'wss'],\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Pusher:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "window.Echo = new Echo({\n    broadcaster: 'pusher',\n    key: import.meta.env.VITE_PUSHER_APP_KEY,\n    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,\n    forceTLS: true,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listening to channels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Echo.channel('announcements')\n    .listen('AnnouncementCreated', (e) => { /* ... */ });\n\nEcho.private('order.1')\n    .listen('OrderShipped', (e) => { /* ... */ })\n    .notification((notification) => { /* ... */ });\n\nEcho.join('game.1')\n    .here((users) => { /* current members */ })\n    .joining((user) => { /* user joined */ })\n    .leaving((user) => { /* user left */ });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Whisper events"
      }), " (client-to-client):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Send\nEcho.private('chat.1').whisper('typing', { name: user.name });\n\n// Listen\nEcho.private('chat.1').listenForWhisper('typing', (e) => { /* ... */ });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Leaving channels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Echo.leave('chat.1');\nEcho.leaveChannel('private-chat.1');\nEcho.leaveAll();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "presence-channels",
      children: "Presence Channels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Presence channels expose real-time user awareness — showing who is online, joining, or leaving a specific channel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Presence channels expose connected users. Backend event:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PlayerJoined implements ShouldBroadcast\n{\n    public function broadcastOn(): array\n    {\n        return [new PresenceChannel('game.'.$this->game->id)];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Client side:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Echo.join('game.1')\n    .here((users) => { this.players = users; })\n    .joining((user) => { this.players.push(user); })\n    .leaving((user) => { this.players = this.players.filter(p => p.id !== user.id); });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access users server-side:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$users = Broadcast::getChannelUsers('presence-game.1');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-sent-events",
      children: "Server-Sent Events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SSE provides a simpler WebSocket alternative for unidirectional server-to-client streaming over plain HTTP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSE provides unidirectional server-to-client real-time communication over standard HTTP:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/events/stream', function () {\n    return response()->eventStream(function () {\n        $notifications = Notification::where('user_id', auth()->id())\n            ->whereNull('read_at')->get();\n\n        if ($notifications->isNotEmpty()) {\n            yield 'notifications' => $notifications;\n        }\n        yield 'heartbeat' => ['timestamp' => now()->toISOString()];\n    });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Client side:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const source = new EventSource('/stream/notifications');\nsource.addEventListener('notification', (e) => {\n    console.log(JSON.parse(e.data));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-events",
      children: "Notification Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The broadcast channel sends notifications to connected clients:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class NewComment extends Notification implements ShouldBroadcast\n{\n    public function via(object $notifiable): array\n    {\n        return ['broadcast', 'database'];\n    }\n\n    public function toBroadcast(object $notifiable): array\n    {\n        return [\n            'message' => \"{$this->comment->author->name} commented on your post\",\n            'post_id' => $this->comment->post_id,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Customize the notification route:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function receivesBroadcastNotificationsOn(): string\n{\n    return 'user.'.$this->id;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queueing-events",
      children: "Queueing Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SendOrderConfirmation implements ShouldQueue\n{\n    public string $queue = 'notifications';\n    public int $delay = 10;\n    public int $tries = 3;\n    public bool $deleteWhenMissingModels = true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prevent duplicate queued listeners:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SyncOrderToWarehouse implements ShouldQueue, ShouldBeUnique\n{\n    public function uniqueId(OrderShipped $event): string\n    {\n        return 'warehouse-sync:'.$event->order->id;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-real-time-chat-application",
      children: "Example: Real-Time Chat Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ChatMessageSent implements ShouldBroadcast\n{\n    public function __construct(public readonly ChatMessage $message) {}\n\n    public function broadcastOn(): array\n    {\n        return [new PresenceChannel('chat.'.$this->message->chat_id)];\n    }\n\n    public function broadcastAs(): string\n    {\n        return 'message.sent';\n    }\n\n    public function broadcastWith(): array\n    {\n        return [\n            'id' => $this->message->id,\n            'user' => ['id' => $this->message->user->id, 'name' => $this->message->user->name],\n            'body' => $this->message->body,\n            'sent_at' => $this->message->created_at->toISOString(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Controller:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ChatMessageController extends Controller\n{\n    public function store(Request $request, Chat $chat): JsonResponse\n    {\n        $this->authorize('send', $chat);\n\n        $message = $chat->messages()->create([\n            'user_id' => $request->user()->id,\n            'body' => $request->validate(['body' => 'required|string|max:5000'])['body'],\n\n> **Pro Tip:** Always use `broadcast(new Event)->toOthers()` when the sending user should not see their own event. This prevents double-rendering in chat applications where the sender already optimistically inserted their message.\n        ]);\n\n        $message->load('user');\n        broadcast(new ChatMessageSent($message))->toOthers();\n\n        return response()->json(['message' => $message], 201);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Channel authorization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Broadcast::channel('chat.{chatId}', function (User $user, int $chatId) {\n    $chat = Chat::find($chatId);\n    if (!$chat || !$chat->participants()->where('user_id', $user->id)->exists()) {\n        return false;\n    }\n    return ['id' => $user->id, 'name' => $user->name];\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frontend:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const channel = Echo.join(`chat.${chatId}`);\n\n> **Warning:** Echo channel names must match the backend channel name exactly. For private channels, the JavaScript side must prefix with `private-` (Echo.private() handles this automatically). For presence channels, Echo.join() adds the `presence-` prefix.\n\nchannel.here((users) => { this.onlineUsers = users; });\nchannel.joining((user) => { this.onlineUsers.push(user); });\nchannel.leaving((user) => { this.onlineUsers = this.onlineUsers.filter(u => u.id !== user.id); });\nchannel.listen('.message.sent', (e) => { this.messages.push(e); });\nchannel.listenForWhisper('typing', (e) => { this.showTypingIndicator(e.name); });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-real-time-notification-system",
      children: "Example: Real-Time Notification System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Send notification on comment:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$post->user->notify(new PostCommented($comment));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Listen client-side:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Echo.private(`App.Models.User.${userId}`)\n    .notification((notification) => {\n        addToNotificationDropdown(notification);\n        updateBadgeCount();\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WebSockets (Reverb/Pusher)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server-Sent Events"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server \\u2192 Client only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket (WS/WSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal (EventSource API)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (handshake, reconnection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (simple HTTP stream)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat, collaboration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications, status updates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--broadcasting-artisan-commands",
      children: "Quick Reference — Broadcasting Artisan Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "composer require laravel/reverb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install Reverb"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan reverb:start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start Reverb server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "php artisan make:channel ChatChannel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create channel class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "npm install laravel-echo pusher-js"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install Echo client"
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
            children: "Chat App"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collaboration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Live Dashboard"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Channel Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private (per-document)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public (announcements)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events per Second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-200 (cursor moves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 (periodic refresh)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whisper Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typing indicators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor positions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Presence Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Editors per document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active viewers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis for multi-server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis for multi-server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single server sufficient"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which interface must an event implement to be broadcast to WebSocket clients?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) ShouldQueue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) ShouldBroadcast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) ShouldBeUnique"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) ShouldDispatch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What is the difference between Echo.private() and Echo.join()?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) private() is for authenticated users, join() is for guests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) private() subscribes to private channels, join() subscribes to presence channels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) join() requires a callback, private() does not"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) There is no difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What does broadcastAs() method define on a broadcast event?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) The channel name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) The event name for client-side listening"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) The queue connection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) The authorization logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which type of channel exposes here(), joining(), and leaving() events?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Public"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Private"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Presence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Mixed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-b, 2-b, 3-b, 4-c"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel's event system provides an observer pattern using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EventServiceProvider"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ShouldBroadcast"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ShouldQueue"
        }), " contracts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel Reverb is a first-party WebSocket server that scales horizontally with Redis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Channels come in three types: public (no auth), private (user authorization), presence (with visible member list)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Echo subscribes to channels using ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".listen()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".notification()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".whisper()"
        }), ", and presence methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Presence channels expose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "here"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "joining"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "leaving"
        }), " events for real-time user awareness"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSE provides a simpler alternative to WebSockets for unidirectional server-to-client data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The broadcast notification channel pushes notifications to connected clients in real time"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Queued event listeners with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ShouldBeUnique"
        }), " prevent duplicate jobs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Laravel Reverb and Pusher as broadcasting drivers. What are the trade-offs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between public, private, and presence channels with use cases."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ShouldBroadcast"
        }), " transform a standard event into one that pushes to WebSocket clients?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the Echo ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".whisper()"
        }), " method for, and why use it instead of server-broadcast events?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "broadcastAs()"
        }), " do and how does it affect the event name Echo listens for?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Typing Indicator"
          }), ": Extend the chat example with a typing indicator that clears after 3 seconds of inactivity using Echo whisper events."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Moderated Chat"
          }), ": Build a chat where moderators can delete messages in real time. Broadcast a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MessageDeleted"
          }), " event and remove it from the UI."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Server Reverb"
          }), ": Configure Reverb with Redis scaling and demonstrate connections reach all participants across servers."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-Time Collaboration Platform"
      }), ": Build a real-time document collaboration platform with Reverb + Redis scaling, presence channels per document, cursor position sharing via whisper events, debounced broadcast events for content changes, private notifications for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@username"
      }), " mentions, SSE fallback for restricted networks, user online/offline status across all presence channels, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ShouldBeUnique"
      }), " queueing to prevent duplicate save events."]
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