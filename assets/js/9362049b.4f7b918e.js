"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["65771"], {
48116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  DH: () => (courses),
  m6: () => (coursesByCategory)
});
const courses = [
    {
        name: 'AI Engineering Placement',
        slug: 'ai-engineering-placement',
        category: 'Core'
    },
    {
        name: 'Machine Learning',
        slug: 'machine-learning',
        category: 'AI/ML'
    },
    {
        name: 'Modern AI Engineering',
        slug: 'modern-ai-engineering',
        category: 'AI/ML'
    },
    {
        name: 'Applied AI',
        slug: 'applied-ai',
        category: 'AI/ML'
    },
    {
        name: 'Artificial Intelligence',
        slug: 'artificial-intelligence',
        category: 'AI/ML'
    },
    {
        name: 'AI Agent Engineer',
        slug: 'ai-agent-engineer',
        category: 'AI/ML'
    },
    {
        name: 'Big Data',
        slug: 'big-data',
        category: 'AI/ML'
    },
    {
        name: 'Data Analysis & Interpretation',
        slug: 'data-analysis-interpretation',
        category: 'AI/ML'
    },
    {
        name: 'Learning Course',
        slug: 'learning-course',
        category: 'AI/ML'
    },
    {
        name: 'Data Structures',
        slug: 'data-structures',
        category: 'CS Core'
    },
    {
        name: 'Algorithms',
        slug: 'algorithms',
        category: 'CS Core'
    },
    {
        name: 'System Design',
        slug: 'system-design',
        category: 'CS Core'
    },
    {
        name: 'Database Management Systems',
        slug: 'database-management-systems',
        category: 'CS Core'
    },
    {
        name: 'Computer Networks',
        slug: 'computer-networks',
        category: 'CS Core'
    },
    {
        name: 'Operating Systems',
        slug: 'operating-systems',
        category: 'CS Core'
    },
    {
        name: 'Computer Architecture',
        slug: 'computer-architecture',
        category: 'CS Core'
    },
    {
        name: 'Compiler Design',
        slug: 'compiler-design',
        category: 'CS Core'
    },
    {
        name: 'Theory of Computation',
        slug: 'theory-of-computation',
        category: 'CS Core'
    },
    {
        name: 'Discrete Mathematics',
        slug: 'discrete-mathematics',
        category: 'CS Core'
    },
    {
        name: 'Digital Logic',
        slug: 'digital-logic',
        category: 'CS Core'
    },
    {
        name: 'Python Programming',
        slug: 'python-programming',
        category: 'Programming'
    },
    {
        name: 'Java',
        slug: 'java',
        category: 'Programming'
    },
    {
        name: 'C Programming',
        slug: 'c-programming',
        category: 'Programming'
    },
    {
        name: 'C++ (OOP)',
        slug: 'oop-cpp',
        category: 'Programming'
    },
    {
        name: 'Laravel',
        slug: 'laravel',
        category: 'Programming'
    },
    {
        name: 'Software Engineering',
        slug: 'software-engineering',
        category: 'Programming'
    },
    {
        name: 'Web Development',
        slug: 'web-development',
        category: 'Programming'
    },
    {
        name: 'Cloud Computing',
        slug: 'cloud-computing',
        category: 'DevOps'
    },
    {
        name: 'DevOps',
        slug: 'devops',
        category: 'DevOps'
    },
    {
        name: 'Cyber Security',
        slug: 'cyber-security',
        category: 'Security'
    },
    {
        name: 'Information Security',
        slug: 'information-security',
        category: 'Security'
    },
    {
        name: 'Blockchain',
        slug: 'blockchain',
        category: 'Security'
    },
    {
        name: 'Engineering Mathematics',
        slug: 'engineering-mathematics',
        category: 'Aptitude'
    },
    {
        name: 'Quantitative Aptitude',
        slug: 'quantitative-aptitude',
        category: 'Aptitude'
    },
    {
        name: 'Reasoning Ability',
        slug: 'reasoning-ability',
        category: 'Aptitude'
    },
    {
        name: 'General Aptitude',
        slug: 'general-aptitude',
        category: 'Aptitude'
    },
    {
        name: 'English Language',
        slug: 'english-language',
        category: 'Aptitude'
    },
    {
        name: 'Hindi Language',
        slug: 'hindi-language',
        category: 'Aptitude'
    },
    {
        name: 'Marketing Aptitude',
        slug: 'marketing-aptitude',
        category: 'Aptitude'
    },
    {
        name: 'Digital Marketing',
        slug: 'digital-marketing',
        category: 'Marketing'
    },
    {
        name: 'Banking Financial Awareness',
        slug: 'banking-financial-awareness',
        category: 'Aptitude'
    },
    {
        name: 'Banking Technology',
        slug: 'banking-technology',
        category: 'Aptitude'
    },
    {
        name: 'General Awareness',
        slug: 'general-awareness',
        category: 'Aptitude'
    },
    {
        name: 'Professional Knowledge',
        slug: 'professional-knowledge',
        category: 'Placement'
    },
    {
        name: 'Interview Preparation',
        slug: 'interview-preparation',
        category: 'Placement'
    },
    {
        name: 'Job Preparation',
        slug: 'job-preparation',
        category: 'Placement'
    },
    {
        name: 'Placement Preparation',
        slug: 'placement-preparation',
        category: 'Placement'
    },
    {
        name: 'Mock Tests',
        slug: 'mock-tests',
        category: 'Placement'
    },
    {
        name: 'Coding Problems',
        slug: 'coding-problems',
        category: 'Placement'
    },
    {
        name: 'Speed Drills',
        slug: 'speed-drills',
        category: 'Placement'
    },
    {
        name: 'Government Exams',
        slug: 'government-exams',
        category: 'Placement'
    },
    {
        name: 'Government PYQs',
        slug: 'government-pyqs',
        category: 'Placement'
    },
    {
        name: 'GATE CS Preparation',
        slug: 'gate-cs-preparation',
        category: 'Placement'
    },
    {
        name: 'Loop Engineering',
        slug: 'loop-engineering',
        category: 'Meta'
    },
    {
        name: 'Learning How to Learn',
        slug: 'learning-how-to-learn',
        category: 'Meta'
    },
    {
        name: 'Learning How to Learn (Practical)',
        slug: 'learning-how-to-learn-practical',
        category: 'Meta'
    },
    {
        name: 'AI-Powered Learning',
        slug: 'ai-powered-learning',
        category: 'Meta'
    },
    {
        name: 'Vigyan Bhairav Tantra',
        slug: 'vigyan-bhairav-tantra',
        category: 'Meta'
    },
    {
        name: 'Geeta Darshan',
        slug: 'geeta-darshan',
        category: 'Meta'
    },
    {
        name: 'The Complete Bhagavad Gita',
        slug: 'bhagavad-gita',
        category: 'Meta'
    }
];
const categories = [
    ...new Set(courses.map((c)=>c.category))
];
const categoryColors = (/* unused pure expression or super */ null && ({
    Core: '#059669',
    'AI/ML': '#7c3aed',
    'CS Core': '#2563eb',
    Programming: '#d97706',
    DevOps: '#0891b2',
    Security: '#dc2626',
    Aptitude: '#4f46e5',
    Marketing: '#0d9488',
    Placement: '#ea580c',
    Meta: '#64748b'
}));
function coursesByCategory() {
    return categories.map((category)=>({
            category,
            items: courses.filter((c)=>c.category === category)
        }));
}


},
5478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (NotFound)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _theme_Layout__rspack_import_3 = __webpack_require__(15571);
/* import */ var _data_courses__rspack_import_4 = __webpack_require__(48116);





/**
 * 404 page.
 *
 * The stock Docusaurus 404 is a dead end: one line of text and no way forward.
 * Every route on this site is a document, so the useful thing to offer is the
 * four entry points that most links actually target, plus a sample of course
 * roots — plus the note that the navbar search covers the full text of all
 * 1,419 pages.
 */ const ENTRIES = [
    {
        to: '/ai-engineering-placement/',
        title: 'Placement Course',
        detail: '24 modules, 224 chapters, interview drills'
    },
    {
        to: '/courses/',
        title: 'All Courses',
        detail: 'Every course on the site, grouped by category'
    },
    {
        to: '/',
        title: 'Home',
        detail: 'What this site is and where to start'
    },
    {
        to: '/about/',
        title: 'About',
        detail: 'Who maintains this and how to reach him'
    }
];
const POPULAR = [
    'ai-engineering-placement',
    'machine-learning',
    'artificial-intelligence',
    'data-structures',
    'algorithms',
    'system-design',
    'database-management-systems',
    'computer-networks'
];
function NotFound() {
    const bySlug = new Map(_data_courses__rspack_import_4/* .courses.map */.DH.map((c)=>[
            c.slug,
            c
        ]));
    const popular = POPULAR.map((slug)=>bySlug.get(slug)).filter((course)=>Boolean(course));
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_3/* ["default"] */.A, {
        title: "Page not found",
        description: "This URL does not exist. Here are the entry points that do.",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("main", {
            style: {
                maxWidth: 880,
                margin: '0 auto',
                padding: '3rem 1.25rem 4rem'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                    style: {
                        fontFamily: 'var(--ifm-font-family-monospace)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        color: 'var(--ifm-color-emphasis-600)',
                        marginBottom: '0.5rem'
                    },
                    children: "404"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                    style: {
                        marginBottom: '0.75rem'
                    },
                    children: "That page is not here"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                    style: {
                        fontSize: '1.05rem',
                        color: 'var(--ifm-color-emphasis-800)'
                    },
                    children: [
                        "The URL may have changed when the site was reorganised. Every chapter now lives under its course route, for example",
                        ' ',
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                            children: "/ai-engineering-placement/03-data-structures-algorithms/…"
                        }),
                        "."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                    style: {
                        color: 'var(--ifm-color-emphasis-700)'
                    },
                    children: [
                        "Press ",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("kbd", {
                            children: "Ctrl"
                        }),
                        " + ",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("kbd", {
                            children: "K"
                        }),
                        " (or click the search box in the navbar) to search the full text of all ",
                        _data_courses__rspack_import_4/* .courses.length */.DH.length,
                        " courses."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                    style: {
                        marginTop: '2.5rem',
                        fontSize: '1.15rem'
                    },
                    children: "Start from a known page"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                        gap: '0.75rem',
                        marginTop: '1rem'
                    },
                    children: ENTRIES.map((entry)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            to: entry.to,
                            style: {
                                display: 'block',
                                padding: '0.9rem 1rem',
                                border: '1px solid var(--ifm-color-emphasis-300)',
                                borderRadius: 8,
                                textDecoration: 'none',
                                color: 'inherit'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                    style: {
                                        display: 'block',
                                        color: 'var(--ifm-color-primary)'
                                    },
                                    children: entry.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    style: {
                                        fontSize: '0.85rem',
                                        color: 'var(--ifm-color-emphasis-700)'
                                    },
                                    children: entry.detail
                                })
                            ]
                        }, entry.to))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                    style: {
                        marginTop: '2.5rem',
                        fontSize: '1.15rem'
                    },
                    children: "Popular courses"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                    style: {
                        columns: '2 220px',
                        marginTop: '0.75rem'
                    },
                    children: popular.map((course)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                            style: {
                                marginBottom: '0.35rem'
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                to: `/${course.slug}/`,
                                children: course.name
                            })
                        }, course.slug))
                })
            ]
        })
    });
}


},

}]);