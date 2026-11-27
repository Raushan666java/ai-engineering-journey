"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["87812"], {
20555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  M: () => (profile),
  n: () => (proof)
});
/**
 * Single source of truth for who this site belongs to.
 *
 * Fill in `email` and `linkedin` before sharing the link with a recruiter.
 * Any field left as an empty string is simply not rendered, so the page can
 * never ship a broken mailto: or a 404 social profile.
 */ const profile = {
    name: 'Raushan Kumar',
    role: 'Backend engineer building measured LLM systems',
    location: 'Patna, Bihar, India',
    openTo: 'AI engineering, LLM application and backend roles',
    relocation: 'Bengaluru, Hyderabad, Pune, Delhi NCR, or remote',
    experienceYears: 3,
    github: 'https://github.com/Raushan666java',
    githubHandle: 'Raushan666java',
    // TODO: fill these two in. Nothing renders until you do.
    email: '',
    linkedin: '',
    resume: 'https://github.com/Raushan666java/ai-engineering-journey'
};
const proof = [
    {
        value: '0.93',
        label: 'Recall@4',
        detail: 'Evaluated retrieval pipeline, 35 passing tests'
    },
    {
        value: '0.89',
        label: 'MRR',
        detail: 'Ranked retrieval, measured not guessed'
    },
    {
        value: '37x',
        label: 'cost reduction',
        detail: 'Per-conversation LLM spend, state machine rewrite'
    },
    {
        // Filled at render time from the measured corpus size (see ProofStrip).
        value: '',
        label: 'chapters',
        detail: 'Written while learning, published here'
    }
];


},
86526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 78 modules
var Layout = __webpack_require__(15571);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(95310);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(55916);
;// CONCATENATED MODULE: ./src/pages/about.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const about_module = ({"page":"page_q0wb","hero":"hero_M7Tc","eyebrow":"eyebrow_La_K","name":"name_vgpv","role":"role_m0LQ","location":"location_G9pu","section":"section_y05o","statGrid":"statGrid_q2Tf","stat":"stat_FDko","statValue":"statValue_L6BJ","statLabel":"statLabel_vNX9","statDetail":"statDetail_isFr","contactCard":"contactCard_QvUX","contactRow":"contactRow_iR4o","contactLabel":"contactLabel_Yi6R"});
// EXTERNAL MODULE: ./src/data/profile.ts
var profile = __webpack_require__(20555);
;// CONCATENATED MODULE: ./src/pages/about.tsx







function ContactRow({ label, value, href }) {
    if (!value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: about_module.contactRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: about_module.contactLabel,
                children: label
            }),
            href ? /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                children: value
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: value
            })
        ]
    });
}
function About() {
    // The navbar's "Hire me" button and the footer's "Contact" item both point at
    // /about#contact, and so did 1,421 other pages through the shared layout.
    // Docusaurus collects anchors from markdown headings automatically, but a
    // React page has to declare its own - otherwise every one of those links is
    // reported as a broken anchor (the checker treats "page collected no anchors"
    // as "anchor is broken"), and a real broken anchor would be lost in 1,400
    // warnings.
    (0,useBrokenLinks/* ["default"] */.A)().collectAnchor('contact');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* ["default"] */.A, {
        title: "About Raushan Kumar",
        description: `${profile/* .profile.name */.M.name} - ${profile/* .profile.role */.M.role}. Three years of production backend engineering, now building and measuring LLM systems.`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
            className: about_module.page,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                    className: about_module.hero,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: about_module.eyebrow,
                            children: "About"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: about_module.name,
                            children: profile/* .profile.name */.M.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: about_module.role,
                            children: profile/* .profile.role */.M.role
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: about_module.location,
                            children: [
                                profile/* .profile.location */.M.location,
                                " \xb7 open to ",
                                profile/* .profile.relocation */.M.relocation
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: about_module.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: "What I actually do"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                "I have spent ",
                                profile/* .profile.experienceYears */.M.experienceYears,
                                " years writing production PHP and Laravel at a small product company in Patna — payment integrations, WhatsApp Business APIs, queue workers, MySQL that had to stay fast under real traffic."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "Then I started building LLM systems, and the interesting part was not the prompt. It was the engineering around it: chunking that survives contact with a real document, retrieval you can measure, refusal behaviour when the context does not contain the answer, and a cost number per conversation that a finance team would accept."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                "That is the work I want to be hired for — not “I used an LLM”, but ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("em", {
                                    children: "I built one, measured it, and can tell you what it costs"
                                }),
                                "."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: about_module.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: "Numbers, because claims are cheap"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: about_module.statGrid,
                            children: profile/* .proof.map */.n.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: about_module.stat,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: about_module.statValue,
                                            children: item.value
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: about_module.statLabel,
                                            children: item.label
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: about_module.statDetail,
                                            children: item.detail
                                        })
                                    ]
                                }, item.label))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: about_module.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: "Why this site exists"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "Every chapter here was written while learning the thing it explains. Nothing was generated and left unchecked — the chapters carry worked examples, quizzes and exercises because that is how the material survived in my own head."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "It started as private notes for a placement switch and turned into 59 courses covering core CS, Python, SQL, machine learning, RAG, LLM applications, agents and system design. If it helps you get an offer, that is the point."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                    to: "/ai-engineering-placement",
                                    children: "Start with the placement course"
                                }),
                                ' ',
                                "or",
                                ' ',
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                                    to: "/courses",
                                    children: "browse all 59 courses"
                                }),
                                "."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: about_module.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: "What I am looking for"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                profile/* .profile.openTo */.M.openTo,
                                " at product companies, BFSI technology teams or bank GCCs. Relocation: ",
                                profile/* .profile.relocation */.M.relocation,
                                ". Available immediately."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: about_module.section,
                    id: "contact",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: "Contact"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "The fastest route is GitHub — every project mentioned above is public and runnable."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: about_module.contactCard,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactRow, {
                                    label: "GitHub",
                                    value: `github.com/${profile/* .profile.githubHandle */.M.githubHandle}`,
                                    href: profile/* .profile.github */.M.github
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactRow, {
                                    label: "Email",
                                    value: profile/* .profile.email */.M.email,
                                    href: profile/* .profile.email */.M.email ? `mailto:${profile/* .profile.email */.M.email}` : undefined
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactRow, {
                                    label: "LinkedIn",
                                    value: profile/* .profile.linkedin */.M.linkedin?.replace('https://www.', ''),
                                    href: profile/* .profile.linkedin */.M.linkedin || undefined
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactRow, {
                                    label: "Location",
                                    value: profile/* .profile.location */.M.location
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


},

}]);