"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[34583],{

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
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/pages/index.tsx
const features=[{title:'Complete Curriculum',description:'55 courses covering Core CS, Python, ML, Deep Learning, LLMs, RAG, AI Agents, System Design, and more.',link:'/courses'},{title:'Placement Focused',description:'2,440+ interview Q&A, 975+ quiz questions, mock interviews, and FAANG company deep dives.',link:'/ai-engineering-placement'},{title:'Learn by Doing',description:'Hands-on projects, code examples, capstone projects, and portfolio building guidance.',link:'/courses'}];const featuredCourses=[{name:'Python Programming',slug:'python-programming'},{name:'Machine Learning',slug:'machine-learning'},{name:'Applied AI',slug:'applied-ai'},{name:'LLMs & RAG',slug:'modern-ai-engineering'},{name:'System Design',slug:'system-design'},{name:'Data Structures',slug:'data-structures'},{name:'Interview Prep',slug:'interview-preparation'},{name:'AI Agent Engineer',slug:'ai-agent-engineer'}];function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:(0,clsx/* default */.A)('hero hero--primary',index_module.heroBanner),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"hero__title",children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.buttons,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary button--lg",to:"/ai-engineering-placement",children:"Start Learning"})})]})});}function Feature({title,description,link}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col col--4'),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text--center padding-horiz--md padding-vert--md",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--primary button--sm",to:link,children:"Explore"})]})});}function Home(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Home",description:"AI Engineering Placement Course - Complete Preparation",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:index_module.features,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:features.map((props,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Feature,{...props},idx))})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{style:{padding:'2rem 0',maxWidth:1000,margin:'0 auto'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{textAlign:'center',marginBottom:'1rem'},children:"Featured Courses"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))',gap:'0.75rem',padding:'0 1rem'},children:featuredCourses.map(course=>/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:`/${course.slug}`,style:{display:'block',padding:'1rem',border:'1px solid #e2e8f0',borderRadius:'8px',textDecoration:'none',color:'#1a1a1a',transition:'border-color 0.2s, box-shadow 0.2s'},onMouseEnter:e=>{e.target.style.borderColor='#059669';e.target.style.boxShadow='0 2px 8px rgba(5,150,105,0.15)';},onMouseLeave:e=>{e.target.style.borderColor='#e2e8f0';e.target.style.boxShadow='none';},children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:course.name})},course.slug))}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textAlign:'center',marginTop:'1.5rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--primary button--lg",to:"/courses",children:"Browse All 55 Courses"})})]})]})]});}

/***/ }

}]);