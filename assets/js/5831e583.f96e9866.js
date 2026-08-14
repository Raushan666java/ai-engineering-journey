"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[12953],{

/***/ 76035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_21_interview_preparation_17_ood_design_md_583_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-21-interview-preparation-17-ood-design-md-583.json
const site_docs_courses_ai_engineering_placement_21_interview_preparation_17_ood_design_md_583_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/interview-preparation/17-ood-design","title":"Low-Level and OOD Design","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/21-interview-preparation/17-ood-design.md","sourceDirName":"courses/ai-engineering-placement/21-interview-preparation","slug":"/ai-engineering-placement/21-interview-preparation/17-ood-design","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/17-ood-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":246,"frontMatter":{"id":"17-ood-design","slug":"/ai-engineering-placement/21-interview-preparation/17-ood-design","title":"Low-Level and OOD Design","sidebar_label":"Low-Level and OOD Design","sidebar_position":246},"sidebar":"placementSidebar","previous":{"title":"DSA Problem Bank: 100+ Curated Problems","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/16-dsa-problem-bank"},"next":{"title":"Debugging and Code Review","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/18-debugging-code-review"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/21-interview-preparation/17-ood-design.md


const frontMatter = {
	id: '17-ood-design',
	slug: '/ai-engineering-placement/21-interview-preparation/17-ood-design',
	title: 'Low-Level and OOD Design',
	sidebar_label: 'Low-Level and OOD Design',
	sidebar_position: 246
};
const contentTitle = 'Low-Level and OOD Design';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "What OOD Interviews Test",
  "id": "what-ood-interviews-test",
  "level": 3
}, {
  "value": "Common Entities in OOD Problems",
  "id": "common-entities-in-ood-problems",
  "level": 3
}, {
  "value": "Concurrency in OOD",
  "id": "concurrency-in-ood",
  "level": 3
}, {
  "value": "Design Patterns in OOD",
  "id": "design-patterns-in-ood",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Problem 1: Parking Lot",
  "id": "problem-1-parking-lot",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Entities",
  "id": "entities",
  "level": 3
}, {
  "value": "Discussion Points",
  "id": "discussion-points",
  "level": 3
}, {
  "value": "Problem 2: Design a Logger",
  "id": "problem-2-design-a-logger",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-1",
  "level": 3
}, {
  "value": "Design",
  "id": "design",
  "level": 3
}, {
  "value": "Discussion Points",
  "id": "discussion-points-1",
  "level": 3
}, {
  "value": "Problem 3: Design a Rate Limiter Library",
  "id": "problem-3-design-a-rate-limiter-library",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-2",
  "level": 3
}, {
  "value": "Design",
  "id": "design-1",
  "level": 3
}, {
  "value": "Discussion Points",
  "id": "discussion-points-2",
  "level": 3
}, {
  "value": "Problem 4: Design a Vending Machine",
  "id": "problem-4-design-a-vending-machine",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-3",
  "level": 3
}, {
  "value": "Design",
  "id": "design-2",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "low-level-and-ood-design",
        children: "Low-Level and OOD Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this chapter you will be able to design class hierarchies for common interview problems, apply SOLID principles to object-oriented design, handle concurrency and edge cases in design, and communicate tradeoffs during object-oriented design (OOD) rounds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Requirements] --> B[Identify Entities]\n    B --> C[Define Relationships]\n    C --> D[Class Hierarchy]\n    D --> E[Interfaces]\n    E --> F[Edge Cases]\n    F --> G[Concurrency]\n    G --> H{Tradeoffs}\n    H -->|Refine| B\n    H -->|Done| I[Code]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-ood-interviews-test",
      children: "What OOD Interviews Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OOD rounds assess your ability to model real-world systems with clean abstractions. Unlike system design (distributed, high-scale), OOD focuses on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class hierarchy and inheritance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulation and interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design patterns application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relationship modeling (has-a, is-a)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tradeoff reasoning between approaches"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard framework:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarify requirements and scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify core entities and their relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define interfaces and abstract classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle edge cases and concurrency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss extensibility and tradeoffs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-entities-in-ood-problems",
      children: "Common Entities in OOD Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most OOD problems share entity types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core domain objects (ParkingSpot, Vehicle, Ticket)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Managers or controllers (ParkingLot, ElevatorController)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enums for types and statuses (SpotSize, Direction, State)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategies for algorithms (PricingStrategy, SchedulingStrategy)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concurrency-in-ood",
      children: "Concurrency in OOD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For multi-user systems (parking lot, library, restaurant), consider thread safety:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "synchronized blocks for critical sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConcurrentHashMap or explicit locks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomic counters for unique IDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReadWriteLock for read-heavy workloads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-patterns-in-ood",
      children: "Design Patterns in OOD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common patterns used in OOD solutions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategy: interchangeable algorithms (pricing, parking spot assignment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Factory: creating objects of different types (VehicleFactory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Singleton: one instance of the system manager (controversial, use dependency injection instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observer: notification systems (available spot, order ready)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Command: queuing operations (elevator requests)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State: object behaves differently based on internal state (elevator moving/idle)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-parking-lot",
      children: "Problem 1: Parking Lot"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a parking lot with multiple levels. Each level has spots of different sizes (small, medium, large). The system should assign the nearest available spot, handle different vehicle types (motorcycle, car, truck), track payment by hour, and support disabled spots."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entities",
      children: "Entities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum SpotSize { SMALL, MEDIUM, LARGE, DISABLED }\n\nenum VehicleType { MOTORCYCLE, CAR, TRUCK }\n\nclass ParkingSpot {\n    id: string\n    level: number\n    size: SpotSize\n    isOccupied: boolean\n    occupiedBy: string | null\n    isDisabled: boolean\n\n    canFit(vehicle: Vehicle): boolean {\n        if (this.isOccupied) return false\n        if (vehicle.type === VehicleType.MOTORCYCLE) return true\n        if (vehicle.type === VehicleType.CAR) return this.size >= SpotSize.MEDIUM\n        if (vehicle.type === VehicleType.TRUCK) return this.size === SpotSize.LARGE\n        return false\n    }\n\n    assign(vehicleId: string): void {\n        this.isOccupied = true\n        this.occupiedBy = vehicleId\n    }\n\n    release(): void {\n        this.isOccupied = false\n        this.occupiedBy = null\n    }\n}\n\nclass Vehicle {\n    id: string\n    licensePlate: string\n    type: VehicleType\n    isDisabledDriver: boolean\n}\n\nclass Ticket {\n    id: string\n    vehicleId: string\n    spotId: string\n    entryTime: Date\n    exitTime: Date | null\n    amount: number\n\n    calculateFee(ratePerHour: number): number {\n        if (!this.exitTime) this.exitTime = new Date()\n        const hours = (this.exitTime.getTime() - this.entryTime.getTime()) / (1000 * 3600)\n        return Math.ceil(hours) * ratePerHour\n    }\n}\n\nclass ParkingLevel {\n    level: number\n    spots: ParkingSpot[] = []\n\n    constructor(level: number, small: number, medium: number, large: number, disabled: number) {\n        this.level = level\n        let id = 0\n        for (let i = 0; i < small; i++) spots.push({ id: `S${id++}`, level, size: SpotSize.SMALL, ... } as ParkingSpot)\n        for (let i = 0; i < medium; i++) spots.push({ id: `M${id++}`, level, size: SpotSize.MEDIUM, ... } as ParkingSpot)\n        for (let i = 0; i < large; i++) spots.push({ id: `L${id++}`, level, size: SpotSize.LARGE, ... } as ParkingSpot)\n        for (let i = 0; i < disabled; i++) spots.push({ id: `D${id++}`, level, size: SpotSize.DISABLED, ... } as ParkingSpot)\n    }\n}\n\nclass ParkingLot {\n    levels: ParkingLevel[] = []\n    tickets: Map<string, Ticket> = new Map()\n    vehicleSpotMap: Map<string, string> = new Map()\n\n    addLevel(level: ParkingLevel): void {\n        this.levels.push(level)\n    }\n\n    findSpot(vehicle: Vehicle): ParkingSpot | null {\n        const nearestFirst = true\n        if (nearestFirst) {\n            for (const level of this.levels) {\n                for (const spot of level.spots) {\n                    if (spot.canFit(vehicle) && !spot.isOccupied) {\n                        return spot\n                    }\n                }\n            }\n        }\n        return null\n    }\n\n    park(vehicle: Vehicle): Ticket {\n        const spot = this.findSpot(vehicle)\n        if (!spot) throw new Error(\"No available spot\")\n        spot.assign(vehicle.id)\n        const ticket = new Ticket()\n        ticket.id = `T${Date.now()}`\n        ticket.vehicleId = vehicle.id\n        ticket.spotId = spot.id\n        ticket.entryTime = new Date()\n        this.tickets.set(ticket.id, ticket)\n        this.vehicleSpotMap.set(vehicle.id, spot.id)\n        return ticket\n    }\n\n    exit(ticketId: string): number {\n        const ticket = this.tickets.get(ticketId)\n        if (!ticket) throw new Error(\"Ticket not found\")\n        ticket.exitTime = new Date()\n        const fee = ticket.calculateFee(10)\n        const spot = this.findSpotById(ticket.spotId)\n        if (spot) spot.release()\n        this.vehicleSpotMap.delete(ticket.vehicleId)\n        return fee\n    }\n\n    private findSpotById(spotId: string): ParkingSpot | undefined {\n        for (const level of this.levels) {\n            for (const spot of level.spots) {\n                if (spot.id === spotId) return spot\n            }\n        }\n        return undefined\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discussion-points",
      children: "Discussion Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nearest spot vs efficiency: scanning all levels can be optimized by maintaining available spot queues per level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate strategy: hourly rate could vary by level, spot size, or time of day (Strategy pattern)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single entry/exit vs multiple: concurrent access requires thread-safe spot allocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Electric vehicle charging spots: subclass ParkingSpot with charger capability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation: license plate uniqueness, maximum stay duration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-2-design-a-logger",
      children: "Problem 2: Design a Logger"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-1",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a library that supports multiple log levels (DEBUG, INFO, WARN, ERROR), multiple outputs (console, file, network), configurable formatting (timestamp, level, message), and performance logging with configurable sampling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design",
      children: "Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum LogLevel {\n    DEBUG = 0, INFO = 1, WARN = 2, ERROR = 3\n}\n\nclass LogMessage {\n    timestamp: Date\n    level: LogLevel\n    source: string\n    message: string\n    metadata: Record<string, unknown>\n\n    constructor(level: LogLevel, source: string, message: string, metadata: Record<string, unknown> = {}) {\n        this.timestamp = new Date()\n        this.level = level\n        this.source = source\n        this.message = message\n        this.metadata = metadata\n    }\n\n    format(): string {\n        return `[${this.timestamp.toISOString()}] [${LogLevel[this.level]}] [${this.source}] ${this.message}`\n    }\n}\n\ninterface LogAppender {\n    append(message: LogMessage): void\n}\n\nclass ConsoleAppender implements LogAppender {\n    append(message: LogMessage): void {\n        console.log(message.format())\n    }\n}\n\nclass FileAppender implements LogAppender {\n    private filePath: string\n\n    constructor(filePath: string) {\n        this.filePath = filePath\n    }\n\n    append(message: LogMessage): void {\n        // In real implementation: fs.appendFileSync(this.filePath, message.format() + '\\n')\n        console.log(`[File: ${this.filePath}] ${message.format()}`)\n    }\n}\n\nclass NetworkAppender implements LogAppender {\n    private endpoint: string\n\n    constructor(endpoint: string) {\n        this.endpoint = endpoint\n    }\n\n    append(message: LogMessage): void {\n        // In real implementation: POST to endpoint\n        console.log(`[Network: ${this.endpoint}] ${message.format()}`)\n    }\n}\n\nclass LoggerConfig {\n    level: LogLevel = LogLevel.INFO\n    appenders: LogAppender[] = [new ConsoleAppender()]\n    samplingRate: number = 1.0\n\n    setLevel(level: LogLevel): void {\n        this.level = level\n    }\n\n    addAppender(appender: LogAppender): void {\n        this.appenders.push(appender)\n    }\n\n    setSamplingRate(rate: number): void {\n        this.samplingRate = Math.max(0, Math.min(1, rate))\n    }\n}\n\nclass Logger {\n    private config: LoggerConfig\n    private source: string\n\n    constructor(source: string, config: LoggerConfig) {\n        this.source = source\n        this.config = config\n    }\n\n    private log(level: LogLevel, message: string, metadata: Record<string, unknown> = {}): void {\n        if (level < this.config.level) return\n        if (Math.random() > this.config.samplingRate) return\n\n        const logMessage = new LogMessage(level, this.source, message, metadata)\n        for (const appender of this.config.appenders) {\n            try {\n                appender.append(logMessage)\n            } catch (error) {\n                console.error(`Appender failed: ${error}`)\n            }\n        }\n    }\n\n    debug(message: string, metadata?: Record<string, unknown>): void {\n        this.log(LogLevel.DEBUG, message, metadata)\n    }\n\n    info(message: string, metadata?: Record<string, unknown>): void {\n        this.log(LogLevel.INFO, message, metadata)\n    }\n\n    warn(message: string, metadata?: Record<string, unknown>): void {\n        this.log(LogLevel.WARN, message, metadata)\n    }\n\n    error(message: string, metadata?: Record<string, unknown>): void {\n        this.log(LogLevel.ERROR, message, metadata)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discussion-points-1",
      children: "Discussion Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Async logging: log calls should not block the application. Use a background queue or ring buffer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration from file: load LoggerConfig from YAML/JSON at startup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic level changes: support runtime log level changes without restart"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured logging: JSON format for log aggregation systems (ELK, Datadog)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sampling strategy: rate limiting per source, adaptive sampling during high traffic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-3-design-a-rate-limiter-library",
      children: "Problem 3: Design a Rate Limiter Library"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-2",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a reusable rate limiter that supports token bucket, sliding window, and fixed window algorithms. It should be configurable per client, thread-safe, support distributed deployment via Redis, and emit metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-1",
      children: "Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RateLimiter {\n    isAllowed(clientId: string): boolean\n    getRemainingTokens(clientId: string): number\n    reset(clientId: string): void\n}\n\nclass TokenBucketRateLimiter implements RateLimiter {\n    private buckets: Map<string, { tokens: number; lastRefill: number }> = new Map()\n    private maxTokens: number\n    private refillRate: number\n    private refillIntervalMs: number\n\n    constructor(maxTokens: number, refillRate: number, refillIntervalMs: number = 1000) {\n        this.maxTokens = maxTokens\n        this.refillRate = refillRate\n        this.refillIntervalMs = refillIntervalMs\n    }\n\n    isAllowed(clientId: string): boolean {\n        this.refill(clientId)\n        const bucket = this.buckets.get(clientId)!\n        if (bucket.tokens >= 1) {\n            bucket.tokens--\n            return true\n        }\n        return false\n    }\n\n    private refill(clientId: string): void {\n        const now = Date.now()\n        if (!this.buckets.has(clientId)) {\n            this.buckets.set(clientId, { tokens: this.maxTokens, lastRefill: now })\n            return\n        }\n        const bucket = this.buckets.get(clientId)!\n        const elapsed = now - bucket.lastRefill\n        const tokensToAdd = Math.floor(elapsed / this.refillIntervalMs) * this.refillRate\n        if (tokensToAdd > 0) {\n            bucket.tokens = Math.min(this.maxTokens, bucket.tokens + tokensToAdd)\n            bucket.lastRefill = now\n        }\n    }\n\n    getRemainingTokens(clientId: string): number {\n        this.refill(clientId)\n        return this.buckets.get(clientId)?.tokens ?? this.maxTokens\n    }\n\n    reset(clientId: string): void {\n        this.buckets.delete(clientId)\n    }\n}\n\nclass SlidingWindowRateLimiter implements RateLimiter {\n    private windows: Map<string, number[]> = new Map()\n    private maxRequests: number\n    private windowSizeMs: number\n\n    constructor(maxRequests: number, windowSizeMs: number = 60000) {\n        this.maxRequests = maxRequests\n        this.windowSizeMs = windowSizeMs\n    }\n\n    isAllowed(clientId: string): boolean {\n        const now = Date.now()\n        if (!this.windows.has(clientId)) {\n            this.windows.set(clientId, [now])\n            return true\n        }\n        const timestamps = this.windows.get(clientId)!\n        const cutoff = now - this.windowSizeMs\n        while (timestamps.length > 0 && timestamps[0] < cutoff) {\n            timestamps.shift()\n        }\n        if (timestamps.length >= this.maxRequests) return false\n        timestamps.push(now)\n        return true\n    }\n\n    getRemainingTokens(clientId: string): number {\n        const now = Date.now()\n        const timestamps = this.windows.get(clientId) || []\n        const cutoff = now - this.windowSizeMs\n        const active = timestamps.filter((t) => t >= cutoff)\n        return this.maxRequests - active.length\n    }\n\n    reset(clientId: string): void {\n        this.windows.delete(clientId)\n    }\n}\n\nclass RateLimiterFactory {\n    static createTokenBucket(maxTokens: number, refillRate: number): RateLimiter {\n        return new TokenBucketRateLimiter(maxTokens, refillRate)\n    }\n\n    static createSlidingWindow(maxRequests: number, windowMs: number): RateLimiter {\n        return new SlidingWindowRateLimiter(maxRequests, windowMs)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discussion-points-2",
      children: "Discussion Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed rate limiting: use Redis with Lua scripts for atomic token operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics: track allowed/blocked counts per client, emit via StatsD or Prometheus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-tier rate limiting: global + per-client + per-endpoint limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backpressure: HTTP 429 with Retry-After header"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Race conditions: use atomic operations (CAS, Redis Lua) for concurrent safety"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-4-design-a-vending-machine",
      children: "Problem 4: Design a Vending Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-3",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a vending machine that supports multiple product types, different payment methods (cash, card), inventory tracking, change calculation, and state machine for operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-2",
      children: "Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "States: Idle, Selecting, Dispensing, OutOfStock, Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum ProductType { DRINK, SNACK, CANDY }\nenum PaymentMethod { CASH, CARD }\nenum VendingState { IDLE, SELECTING, DISPENSING, OUT_OF_STOCK, MAINTENANCE }\n\nclass Product {\n    id: string\n    name: string\n    price: number\n    type: ProductType\n}\n\nclass InventorySlot {\n    product: Product\n    quantity: number\n    capacity: number\n\n    isAvailable(): boolean {\n        return this.quantity > 0\n    }\n\n    dispense(): void {\n        if (this.quantity <= 0) throw new Error(\"Out of stock\")\n        this.quantity--\n    }\n\n    restock(amount: number): void {\n        this.quantity = Math.min(this.capacity, this.quantity + amount)\n    }\n}\n\nclass VendingMachine {\n    private state: VendingState = VendingState.IDLE\n    private slots: Map<string, InventorySlot> = new Map()\n    private balance: number = 0\n    private selectedProduct: string | null = null\n\n    displayProducts(): { id: string; name: string; price: number; available: boolean }[] {\n        const result: { id: string; name: string; price: number; available: boolean }[] = []\n        for (const [id, slot] of this.slots) {\n            result.push({\n                id,\n                name: slot.product.name,\n                price: slot.product.price,\n                available: slot.isAvailable(),\n            })\n        }\n        return result\n    }\n\n    selectProduct(productId: string): string {\n        const slot = this.slots.get(productId)\n        if (!slot) return \"Invalid product\"\n        if (!slot.isAvailable()) return \"Out of stock\"\n        this.selectedProduct = productId\n        this.state = VendingState.SELECTING\n        return `Selected ${slot.product.name}. Price: $${slot.product.price}. Insert payment.`\n    }\n\n    insertCash(amount: number): string {\n        if (this.state !== VendingState.SELECTING || !this.selectedProduct) {\n            return \"Select a product first\"\n        }\n        const slot = this.slots.get(this.selectedProduct)!\n        this.balance += amount\n        if (this.balance >= slot.product.price) {\n            return this.dispense()\n        }\n        return `Inserted $${amount}. Need $${(slot.product.price - this.balance).toFixed(2)} more.`\n    }\n\n    private dispense(): string {\n        const slot = this.slots.get(this.selectedProduct!)!\n        slot.dispense()\n        const change = this.balance - slot.product.price\n        this.balance = 0\n        this.state = VendingState.IDLE\n        this.selectedProduct = null\n        if (change > 0) {\n            return `Dispensed ${slot.product.name}. Change: $${change.toFixed(2)}`\n        }\n        return `Dispensed ${slot.product.name}.`\n    }\n\n    refund(): string {\n        const amount = this.balance\n        this.balance = 0\n        this.selectedProduct = null\n        this.state = VendingState.IDLE\n        return `Refunded $${amount.toFixed(2)}`\n    }\n\n    restock(productId: string, amount: number): void {\n        const slot = this.slots.get(productId)\n        if (slot) slot.restock(amount)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OOD interviews test your ability to translate real-world systems into clean, extensible code. Follow the framework: clarify requirements, identify entities, define interfaces,.\nimplement core logic, discuss tradeoffs. Always consider concurrency, extensibility, and edge cases. Use design patterns appropriately but do not force them. Practice with the four problems in this chapter (parking lot,.\nlogger, rate limiter, vending machine) and extend them with new features."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always start by clarifying scope: what is in and out of scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write clean interfaces first, then implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider thread safety early if multiple users access the system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use composition over inheritance for flexible designs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle errors gracefully: throw specific exceptions, validate inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss tradeoffs: simplicity vs features, performance vs readability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Practice with a whiteboard or plain text editor (no IDE autocomplete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s17-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What framework do you follow when given an OOD problem in an interview?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Five steps: clarify requirements and scope (ask what is in and out of scope); identify core entities and their relationships (ParkingSpot, Vehicle, Ticket for a parking lot); define interfaces and abstract classes before implementations; handle edge cases and concurrency (multiple users, thread safety, invalid input); discuss extensibility and tradeoffs."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "OOD rounds differ from system design — they test class hierarchy, encapsulation, pattern application, and relationship modeling on a single machine, not distributed scale. The chapter's flowchart runs requirements to entities to hierarchy to interfaces to edge cases to concurrency to tradeoffs, looping back to refine."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": When should you stop adding abstractions and just write the class?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s17-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Design a parking lot. Walk through entities, spot assignment, and the key tradeoffs.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Entities: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ParkingSpot"
          }), " (id, level, size, occupancy), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Vehicle"
          }), " (type, disabled flag), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Ticket"
          }), " (entry/exit time, fee), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ParkingLevel"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ParkingLot"
          }), " orchestrating. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "canFit()"
          }), " encodes size rules: motorcycles fit anywhere, cars need medium or larger, trucks need large; disabled spots reserve priority. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "park()"
          }), " finds the nearest available spot, issues a ticket, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "exit()"
          }), " computes a ceil-to-hour fee."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tradeoffs to discuss: nearest-spot scanning is O(spots) — optimize with per-level available queues; hourly rate could vary by level, size, or time via the Strategy pattern; concurrent entry requires thread-safe allocation; EV charging extends ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ParkingSpot"
          }), " with a charger capability."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How does the design change if a vehicle can reserve a spot in advance?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s17-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Design a logger library. How do you keep it extensible and non-blocking?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Core pieces: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogLevel"
          }), " enum, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogMessage"
          }), " (timestamp, level, source, message, metadata) with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "format()"
          }), " method, a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogAppender"
          }), " interface implemented by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConsoleAppender"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FileAppender"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NetworkAppender"
          }), ", a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoggerConfig"
          }), " (level filter, appender list, sampling rate), and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Logger"
          }), " that filters, samples, and fans out to appenders, catching per-appender failures."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Extensibility: adding an appender never touches the logger — it implements ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogAppender"
          }), ". Production considerations: async logging with a background queue so log calls never block the application, config from YAML/JSON, dynamic level changes, JSON structured output for ELK/Datadog, and adaptive sampling during high traffic."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Where does the background logging queue live, and what happens when it fills?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s17-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Compare token bucket and sliding window rate limiters. Which do you deploy and why?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Token bucket: each client has a bucket refilled at a fixed rate up to a cap; a request consumes a token. It allows short bursts up to the bucket size while capping the sustained rate — the chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TokenBucketRateLimiter"
          }), " tracks tokens and lastRefill timestamps. Sliding window: keeps a timestamp list per client and trims entries older than the window; it enforces a strict per-window count at the cost of O(maxRequests) space per client."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Deployment: a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RateLimiterFactory"
          }), " constructs the algorithm per config. For distributed systems, move state to Redis with Lua scripts for atomic token operations, return HTTP 429 with Retry-After for backpressure, and emit allowed/blocked metrics via Prometheus."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What is the worst-case space complexity of the sliding window limiter per client?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s17-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Design a vending machine. Why is a state machine the right model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Operations depend on the current state — you cannot insert payment before selecting a product, and you cannot dispense before payment. The chapter models states as an enum (IDLE, SELECTING, DISPENSING, OUT_OF_STOCK, MAINTENANCE) and guards every method: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "insertCash()"
          }), " returns an error unless state is SELECTING, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dispense()"
          }), " transitions back to IDLE with change computed from the balance."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This is the State pattern: behavior varies with internal state. Entities: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Product"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InventorySlot"
          }), " (quantity, capacity, restock clamp), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VendingMachine"
          }), " orchestrating. Tradeoffs: exact change handling, refund on cancel, payment failure handling (card declined must restore state), and maintenance-mode locking."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What happens to the balance if payment fails after insertion?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s17-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you handle concurrency in OOD systems, and which primitives do you reach for?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-user OOD problems (parking lot, library, restaurant) need thread safety. Options: synchronized blocks for critical sections; ConcurrentHashMap or explicit locks for shared maps; atomic counters for unique ID generation; ReadWriteLock for read-heavy workloads where readers do not block each other."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The chapter's quiz asks exactly this: ReadWriteLock wins for read-heavy systems because multiple readers proceed concurrently while writes still serialize. Race conditions in spot allocation are prevented by making check-and-assign atomic, and the rate limiter discussion covers CAS and Redis Lua for distributed atomicity."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What happens to throughput if you use a single global lock instead of per-shard locks?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a parking lot design, which pattern is useful for different pricing strategies?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Singleton"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Strategy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Observer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Factory\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A LogAppender interface in the logger design represents which principle?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Liskov Substitution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Open/Closed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Dependency Inversion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Single Responsibility\n// correct: C"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The sliding window rate limiter stores timestamps per client. The space complexity per client is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) O(maxRequests)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) O(windowSize)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) O(n) where n is total requests\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the vending machine, what design pattern does the state variable represent?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Strategy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) State"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Command"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Observer\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which concurrency primitive is best for a read-heavy OOD system?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) synchronized blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ReadWriteLock"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) AtomicInteger"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Volatile\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a basic ood design example that demonstrates the core concept."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a more complex implementation that handles edge cases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design an optimized solution for large-scale ood design scenarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition# Exercises"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extend the parking lot design to support electric vehicle charging spots with hourly energy cost."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add a CompositeAppender to the logger that fans out log messages to multiple appenders simultaneously."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a distributed version of the rate limiter using Redis-style commands (simulate with a shared Map)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add a credit card payment processor to the vending machine and handle payment failure gracefully."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a restaurant reservation system: table management, booking time slots, waitlist, and cance"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the time and space trade-offs of 21-interview-preparation. When would you choose one approach over another?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a system that efficiently handles 21-interview-preparation at scale (millions of requests/second)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you had to optimize a system related to 21-interview-preparation. What was your approach and what was the result?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain 21-interview-preparation to a non-technical stakeholder?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does 21-interview-preparation integrate with enterprise systems and cloud architectures?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the security implications of 21-interview-preparation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize 21-interview-preparation for GPU-accelerated computing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What parallel processing patterns apply to 21-interview-preparation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement 21-interview-preparation in a cost-effective, scalable way for a startup?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the fastest way to prototype a solution using 21-interview-preparation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List 21-interview-preparation under relevant technical skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented 21-interview-preparation to [specific outcome], reducing [metric] by [X]%\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Include 21-interview-preparation in your skills section for ATS optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review core concepts of 21-interview-preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice 3-5 problems related to 21-interview-preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare 2 real-world examples of using 21-interview-preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know the time/space complexity of common 21-interview-preparation operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have questions ready about how the company uses 21-interview-preparationllation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Low-Level and OOD Design builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Low-Level and OOD Design before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Low-Level and OOD Design is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Low-Level and OOD Design in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Low-Level and OOD Design chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Low-Level and OOD Design is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Low-Level and OOD Design is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Low-Level and OOD Design is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Low-Level and OOD Design issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Low-Level and OOD Design in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Low-Level and OOD Design that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Low-Level and OOD Design is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Low-Level and OOD Design in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Low-Level and OOD Design and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Low-Level and OOD Design on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Intermediate\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 30-45 minutes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Complete understanding of previous modules recommended"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Start with the basics — understand the fundamental concepts before moving to advanced topics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Practice actively — don't just read, implement the code examples yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Connect to prior knowledge — relate new concepts to what you learned in previous modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Focus on understanding, not memorizing — understand why things work, not just how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Review regularly — revisit key concepts after a few days to reinforce learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym Method"
        }), ": Create acronyms for lists of concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        }), ": Draw diagrams to visualize abstract concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach someone else"
        }), ": Explaining concepts to others reinforces your understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to real-world"
        }), ": Relate technical concepts to everyday experiences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking"
        }), ": Break complex topics into smaller, manageable pieces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation and language specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"System Design Interview\" by Alex Xu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"AI Engineering\" by Chip Huyen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers and blog posts from leading AI labs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How this connects to Interview Preparation fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prerequisites for advanced topics in this module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications in AI engineering systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview questions that test deep understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How long does it take to master ood design?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: Do I need to memorize all the details?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Focus on understanding the core principles. Details can be looked up, but understanding cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: What's the best way to practice?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement the code examples, then modify them to solve different problems. Build small projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How often should I review this material?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Review after 1 day, 3 days, 1 week, and 1 month for long-term retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Understanding the fundamentals is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Don't skip the exercises — they reinforce critical concepts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This topic frequently appears in technical interviews at top companies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": In real systems, these concepts are used daily by AI engineers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Evolution of this technology reflects decades of research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the evolution of ood design helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Validation"
        }), ": Always validate and sanitize inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Don't expose internal details in error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Limits"
        }), ": Set appropriate limits to prevent denial of service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Ensure proper authentication and authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Protection"
        }), ": Handle sensitive data according to security best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering, understanding ood design at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of ood design like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply ood design concepts in a mini-project\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Build a small application that demonstrates understanding of core principles\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), ": 2-4 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Working implementation with documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 1"
      }), ": What is the core concept of ood design?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply ood design in real systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": When building production AI systems that require reliability, scalability, and maintainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 3"
      }), ": What are the common pitfalls to avoid?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Over-engineering, ignoring edge cases, and not considering production requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Academic papers and conference proceedings (NeurIPS, ICML, ICLR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry whitepapers from leading AI companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical blogs from Google, Meta, OpenAI, Anthropic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source implementations and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), ": Framework for building LLM-powered applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), ": Data framework for connecting LLMs with external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face Transformers"
        }), ": State-of-the-art ML models and datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights & Biases"
        }), ": Experiment tracking and model evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), ": Open-source platform for ML lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus + Grafana"
        }), ": Monitoring and observability stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Issues"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check input validation and data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify API keys and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor resource usage (CPU, memory, GPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs for stack traces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the issue with minimal input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add logging at key points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check external dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with known-good inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Low-Level and OOD Design in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Low-Level and OOD Design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Low-Level and OOD Design problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Low-Level and OOD Design is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Low-Level and OOD Design."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Low-Level and OOD Design logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy, Precision, Recall, F1-Score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLEU, ROUGE for text generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency, Throughput, Cost per inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate and availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource utilization (CPU, memory, GPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google: Search ranking, translation, autocomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon: Product recommendations, Alexa, fraud detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix: Content recommendations, personalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla: Autonomous driving, computer vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI: ChatGPT, DALL-E, Codex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After mastering Interview Preparation, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique."
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