"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[34583],{

/***/ 36204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m6: () => (/* binding */ coursesByCategory)
/* harmony export */ });
/* unused harmony export categories */
const courses=[{name:'AI Engineering Placement',slug:'ai-engineering-placement',category:'Core'},{name:'Machine Learning',slug:'machine-learning',category:'AI/ML'},{name:'Modern AI Engineering',slug:'modern-ai-engineering',category:'AI/ML'},{name:'Applied AI',slug:'applied-ai',category:'AI/ML'},{name:'Artificial Intelligence',slug:'artificial-intelligence',category:'AI/ML'},{name:'AI Agent Engineer',slug:'ai-agent-engineer',category:'AI/ML'},{name:'Big Data',slug:'big-data',category:'AI/ML'},{name:'Data Analysis & Interpretation',slug:'data-analysis-interpretation',category:'AI/ML'},{name:'Learning Course',slug:'learning-course',category:'AI/ML'},{name:'Data Structures',slug:'data-structures',category:'CS Core'},{name:'Algorithms',slug:'algorithms',category:'CS Core'},{name:'System Design',slug:'system-design',category:'CS Core'},{name:'Database Management Systems',slug:'database-management-systems',category:'CS Core'},{name:'Computer Networks',slug:'computer-networks',category:'CS Core'},{name:'Operating Systems',slug:'operating-systems',category:'CS Core'},{name:'Computer Architecture',slug:'computer-architecture',category:'CS Core'},{name:'Compiler Design',slug:'compiler-design',category:'CS Core'},{name:'Theory of Computation',slug:'theory-of-computation',category:'CS Core'},{name:'Discrete Mathematics',slug:'discrete-mathematics',category:'CS Core'},{name:'Digital Logic',slug:'digital-logic',category:'CS Core'},{name:'Python Programming',slug:'python-programming',category:'Programming'},{name:'Java',slug:'java',category:'Programming'},{name:'C Programming',slug:'c-programming',category:'Programming'},{name:'C++ (OOP)',slug:'oop-cpp',category:'Programming'},{name:'Laravel',slug:'laravel',category:'Programming'},{name:'Software Engineering',slug:'software-engineering',category:'Programming'},{name:'Web Development',slug:'web-development',category:'Programming'},{name:'Cloud Computing',slug:'cloud-computing',category:'DevOps'},{name:'DevOps',slug:'devops',category:'DevOps'},{name:'Cyber Security',slug:'cyber-security',category:'Security'},{name:'Information Security',slug:'information-security',category:'Security'},{name:'Blockchain',slug:'blockchain',category:'Security'},{name:'Engineering Mathematics',slug:'engineering-mathematics',category:'Aptitude'},{name:'Quantitative Aptitude',slug:'quantitative-aptitude',category:'Aptitude'},{name:'Reasoning Ability',slug:'reasoning-ability',category:'Aptitude'},{name:'General Aptitude',slug:'general-aptitude',category:'Aptitude'},{name:'English Language',slug:'english-language',category:'Aptitude'},{name:'Hindi Language',slug:'hindi-language',category:'Aptitude'},{name:'Marketing Aptitude',slug:'marketing-aptitude',category:'Aptitude'},{name:'Banking Financial Awareness',slug:'banking-financial-awareness',category:'Aptitude'},{name:'Banking Technology',slug:'banking-technology',category:'Aptitude'},{name:'General Awareness',slug:'general-awareness',category:'Aptitude'},{name:'Professional Knowledge',slug:'professional-knowledge',category:'Placement'},{name:'Interview Preparation',slug:'interview-preparation',category:'Placement'},{name:'Job Preparation',slug:'job-preparation',category:'Placement'},{name:'Placement Preparation',slug:'placement-preparation',category:'Placement'},{name:'Mock Tests',slug:'mock-tests',category:'Placement'},{name:'Coding Problems',slug:'coding-problems',category:'Placement'},{name:'Speed Drills',slug:'speed-drills',category:'Placement'},{name:'Government Exams',slug:'government-exams',category:'Placement'},{name:'Government PYQs',slug:'government-pyqs',category:'Placement'},{name:'GATE CS Preparation',slug:'gate-cs-preparation',category:'Placement'},{name:'Loop Engineering',slug:'loop-engineering',category:'Meta'},{name:'Learning How to Learn',slug:'learning-how-to-learn',category:'Meta'},{name:'Learning How to Learn (Practical)',slug:'learning-how-to-learn-practical',category:'Meta'},{name:'AI-Powered Learning',slug:'ai-powered-learning',category:'Meta'},{name:'Vigyan Bhairav Tantra',slug:'vigyan-bhairav-tantra',category:'Meta'},{name:'Geeta Darshan',slug:'geeta-darshan',category:'Meta'}];const categories=[...new Set(courses.map(c=>c.category))];const categoryColors={Core:'#059669','AI/ML':'#7c3aed','CS Core':'#2563eb',Programming:'#d97706',DevOps:'#0891b2',Security:'#dc2626',Aptitude:'#4f46e5',Placement:'#ea580c',Meta:'#64748b'};function coursesByCategory(){return categories.map(category=>({category,items:courses.filter(c=>c.category===category)}));}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "DH", 0, /* binding */ courses,
/* harmony export */   "NS", 0, /* binding */ categoryColors
/* harmony export */ ]);


/***/ },

/***/ 68198
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(21656);
;// ./src/pages/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"heroBanner":"heroBanner_qdFl","buttons":"buttons_AeoN","features":"features_cAfv"});
// EXTERNAL MODULE: ./src/data/courses.ts
var courses = __webpack_require__(36204);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/pages/index.tsx
const features=[{title:'Complete Curriculum',description:'56 courses covering Core CS, Python, ML, Deep Learning, LLMs, RAG, AI Agents, System Design, and more.',link:'/courses'},{title:'Placement Focused',description:'2,440+ interview Q&A, 975+ quiz questions, mock interviews, and FAANG company deep dives.',link:'/ai-engineering-placement'},{title:'Learn by Doing',description:'Hands-on projects, code examples, capstone projects, and portfolio building guidance.',link:'/courses'}];function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:(0,clsx/* default */.A)('hero hero--primary',index_module.heroBanner),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"hero__title",children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.buttons,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary button--lg",to:"/ai-engineering-placement",children:"Start Learning"})})]})});}function Feature({title,description,link}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col col--4'),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text--center padding-horiz--md padding-vert--md",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--primary button--sm",to:link,children:"Explore"})]})});}function AllCoursesSection(){const grouped=(0,courses/* coursesByCategory */.m6)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{style:{padding:'2rem 0',maxWidth:1100,margin:'0 auto'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{textAlign:'center',marginBottom:'0.5rem'},children:"All Courses"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{textAlign:'center'},className:"course-page-subtitle",children:[courses/* courses */.DH.length," courses across ",grouped.length," categories"]}),grouped.map(({category,items})=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"course-section",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:"course-category-title",children:category}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"course-grid",children:items.map(course=>/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:`/${course.slug}`,className:"course-card",onMouseEnter:e=>{e.currentTarget.style.borderColor=courses/* categoryColors */.NS[category]||'var(--ifm-color-primary)';},onMouseLeave:e=>{e.currentTarget.style.borderColor='var(--ifm-color-emphasis-300)';},children:course.name},course.slug))})]},category))]});}function Home(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Home",description:"AI Engineering Placement Course - Complete Preparation",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:index_module.features,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:features.map((props,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Feature,{...props},idx))})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(AllCoursesSection,{})]})]});}

/***/ }

}]);