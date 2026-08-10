"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[11471],{

/***/ 71091
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_applied_ai_04_generative_ai_md_047_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-applied-ai-04-generative-ai-md-047.json
const site_docs_courses_applied_ai_04_generative_ai_md_047_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/applied-ai/04-generative-ai","title":"Chapter 4: Generative AI","description":"Prerequisite: 03 - OpenCV & Computer Vision","source":"@site/docs/courses/applied-ai/04-generative-ai.md","sourceDirName":"courses/applied-ai","slug":"/applied-ai/04-generative-ai","permalink":"/ai-engineering-journey/applied-ai/04-generative-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-generative-ai","slug":"/applied-ai/04-generative-ai","title":"Chapter 4: Generative AI","sidebar_label":"Chapter 4: Generative AI","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: OpenCV & Computer Vision","permalink":"/ai-engineering-journey/applied-ai/03-opencv"},"next":{"title":"Banking Technology & Digital Banking","permalink":"/ai-engineering-journey/banking-technology"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/applied-ai/04-generative-ai.md


const frontMatter = {
	id: '04-generative-ai',
	slug: '/applied-ai/04-generative-ai',
	title: 'Chapter 4: Generative AI',
	sidebar_label: 'Chapter 4: Generative AI',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Generative AI';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Generative AI Matters",
  "id": "why-generative-ai-matters",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "4.1 Overview of Generative Models",
  "id": "41-overview-of-generative-models",
  "level": 2
}, {
  "value": "The Generative Family Tree",
  "id": "the-generative-family-tree",
  "level": 3
}, {
  "value": "Mathematical Intuition",
  "id": "mathematical-intuition",
  "level": 3
}, {
  "value": "4.2 Generative Adversarial Networks (GANs)",
  "id": "42-generative-adversarial-networks-gans",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 3
}, {
  "value": "How GANs Work (Step by Step)",
  "id": "how-gans-work-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table",
  "level": 3
}, {
  "value": "Python Implementation (PyTorch)",
  "id": "python-implementation-pytorch",
  "level": 3
}, {
  "value": "Generating Samples",
  "id": "generating-samples",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "4.3 Variational Autoencoders (VAEs)",
  "id": "43-variational-autoencoders-vaes",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture-1",
  "level": 3
}, {
  "value": "How VAEs Work (Step by Step)",
  "id": "how-vaes-work-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table-1",
  "level": 3
}, {
  "value": "Python Implementation (PyTorch)",
  "id": "python-implementation-pytorch-1",
  "level": 3
}, {
  "value": "Latent Space Interpolation",
  "id": "latent-space-interpolation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "4.4 Diffusion Models",
  "id": "44-diffusion-models",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture-2",
  "level": 3
}, {
  "value": "How Diffusion Models Work (Step by Step)",
  "id": "how-diffusion-models-work-step-by-step",
  "level": 3
}, {
  "value": "Forward Process (Fixed, No Learning)",
  "id": "forward-process-fixed-no-learning",
  "level": 4
}, {
  "value": "Reverse Process (Learned)",
  "id": "reverse-process-learned",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table-2",
  "level": 3
}, {
  "value": "Python Implementation (Stable Diffusion with Diffusers)",
  "id": "python-implementation-stable-diffusion-with-diffusers",
  "level": 3
}, {
  "value": "Text-to-Image Generation",
  "id": "text-to-image-generation",
  "level": 3
}, {
  "value": "Image-to-Image (Img2Img)",
  "id": "image-to-image-img2img",
  "level": 3
}, {
  "value": "Inpainting",
  "id": "inpainting",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "4.5 Transformers for Generation",
  "id": "45-transformers-for-generation",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture-3",
  "level": 3
}, {
  "value": "How Autoregressive Generation Works (Step by Step)",
  "id": "how-autoregressive-generation-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table-3",
  "level": 3
}, {
  "value": "Python Implementation (HuggingFace Transformers)",
  "id": "python-implementation-huggingface-transformers",
  "level": 3
}, {
  "value": "KV-Cache Optimization (Production Critical)",
  "id": "kv-cache-optimization-production-critical",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "4.6 Prompt Engineering",
  "id": "46-prompt-engineering",
  "level": 2
}, {
  "value": "Prompt Structure (SCEQ Framework)",
  "id": "prompt-structure-sceq-framework",
  "level": 3
}, {
  "value": "How Prompt Engineering Works (Step by Step)",
  "id": "how-prompt-engineering-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table-4",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "4.7 Fine-Tuning (LoRA, DreamBooth)",
  "id": "47-fine-tuning-lora-dreambooth",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "How LoRA Works (Step by Step)",
  "id": "how-lora-works-step-by-step",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table-5",
  "level": 3
}, {
  "value": "Python Implementation (LoRA with Diffusers)",
  "id": "python-implementation-lora-with-diffusers",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "4.8 Retrieval-Augmented Generation (RAG)",
  "id": "48-retrieval-augmented-generation-rag",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture-4",
  "level": 3
}, {
  "value": "How RAG Works (Step by Step)",
  "id": "how-rag-works-step-by-step",
  "level": 3
}, {
  "value": "Indexing Phase (One-Time Setup)",
  "id": "indexing-phase-one-time-setup",
  "level": 4
}, {
  "value": "Query Phase (At Runtime)",
  "id": "query-phase-at-runtime",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run (Trace Table)",
  "id": "step-by-step-dry-run-trace-table-6",
  "level": 3
}, {
  "value": "Python Implementation (RAG with LangChain + Chroma)",
  "id": "python-implementation-rag-with-langchain--chroma",
  "level": 3
}, {
  "value": "Advanced: Hybrid Search (Dense + Sparse)",
  "id": "advanced-hybrid-search-dense--sparse",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "4.9 GAN vs VAE vs Diffusion — Comparison Table",
  "id": "49-gan-vs-vae-vs-diffusion--comparison-table",
  "level": 2
}, {
  "value": "When to Choose What",
  "id": "when-to-choose-what",
  "level": 3
}, {
  "value": "4.10 Interview Corner",
  "id": "410-interview-corner",
  "level": 2
}, {
  "value": "Prompt Engineering Tips",
  "id": "prompt-engineering-tips",
  "level": 3
}, {
  "value": "Fine-Tuning vs RAG",
  "id": "fine-tuning-vs-rag",
  "level": 3
}, {
  "value": "Safety and Responsibility",
  "id": "safety-and-responsibility",
  "level": 3
}, {
  "value": "Common Interview Questions",
  "id": "common-interview-questions",
  "level": 3
}, {
  "value": "4.11 Applications in Real Systems",
  "id": "411-applications-in-real-systems",
  "level": 2
}, {
  "value": "DALL·E 3 (OpenAI)",
  "id": "dalle-3-openai",
  "level": 3
}, {
  "value": "ChatGPT / GPT-4 (OpenAI)",
  "id": "chatgpt--gpt-4-openai",
  "level": 3
}, {
  "value": "Midjourney",
  "id": "midjourney",
  "level": 3
}, {
  "value": "GitHub Copilot",
  "id": "github-copilot",
  "level": 3
}, {
  "value": "Stable Diffusion (Stability AI)",
  "id": "stable-diffusion-stability-ai",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "4.12 Evaluation of Generative Models",
  "id": "412-evaluation-of-generative-models",
  "level": 2
}, {
  "value": "4.12.1 FID Score (Fréchet Inception Distance)",
  "id": "4121-fid-score-fréchet-inception-distance",
  "level": 3
}, {
  "value": "Other Metrics",
  "id": "other-metrics",
  "level": 3
}, {
  "value": "4.13 Responsible Generative AI",
  "id": "413-responsible-generative-ai",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    em: "em",
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
    section: "section",
    span: "span",
    strong: "strong",
    summary: "summary",
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
        id: "chapter-4-generative-ai",
        children: "Chapter 4: Generative AI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisite:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/applied-ai/03-opencv",
          children: "03 - OpenCV & Computer Vision"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Chapter:"
        }), " Course Complete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the architecture of GANs, VAEs, and diffusion models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate images with GANs and Stable Diffusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a text-to-image pipeline with HuggingFace diffusers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply style transfer and image-to-image generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand prompt engineering principles for generative models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement fine-tuning with LoRA and DreamBooth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build RAG pipelines for knowledge-grounded generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate and deploy generative models responsibly"
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
        href: "../../assets/images/lessons/applied-ai/04-generative-ai/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/applied-ai/04-generative-ai/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/applied-ai/04-generative-ai/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/applied-ai/04-generative-ai/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/applied-ai/04-generative-ai/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/applied-ai/04-generative-ai/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-generative-ai-matters",
      children: "Why Generative AI Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine a master artist who has studied 100,000 paintings — landscapes, portraits, abstracts. After years of training, she can paint a brand-new artwork in any style on any subject you describe. She can even take your rough sketch and turn it into a finished oil painting, or fill in missing parts of a damaged fresco. She doesn't just memorize and copy; she ", (0,jsx_runtime.jsx)(_components.em, {
          children: "understands"
        }), " the patterns of light, color, composition, and texture, and composes something original from them. This is exactly what generative AI does — it learns the hidden distribution of data (images, text, music, code) and samples novel outputs that feel authentic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generative AI has moved from research curiosity to production infrastructure in just a few years. It powers tools used by millions daily — DALL·E, ChatGPT, Midjourney, GitHub Copilot, Stable Diffusion. Understanding how these models work under the hood (not just how to call an API) is essential for any AI engineer building modern applications."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "What Traditional AI Does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Generative AI Does"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classifies or predicts a label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates new data from scratch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Answers \"Is this a cat or dog?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answers \"Draw me a cat playing chess\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maps input → decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps noise/condition → novel sample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discriminative boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full probability distribution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Overview of Generative Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GANs, VAEs, and diffusion models use different strategies to learn data distributions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose diffusion for quality, VAE for interpolation, GAN for speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generator vs discriminator adversarial training produces sharp images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BCELoss and alternating training steps for stable GAN training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VAEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-decoder with probabilistic latent space enables smooth interpolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL divergence + reconstruction loss balances fidelity and regularization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative denoising from random noise produces state-of-the-art results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DPMSolverMultistepScheduler to reduce inference steps from 50 to 25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformers for Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive next-token prediction scales to billions of parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix tuning and KV-cache optimization are critical for production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt structure (subject + context + style + quality) determines output quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include a negative prompt to suppress common artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter-efficient methods (LoRA) adapt large models without full retraining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA rank 8-64 balances quality and storage cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval-Augmented Generation grounds outputs in external knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk size 256-512 tokens with overlap is the industry standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsible GenAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Watermarking, safety filters, and bias auditing are production essentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log every generation request with prompt, user, and timestamp for audit trails"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Why Gen AI Matters] --> B[Overview of Gen Models]\n    B --> C[GANs]\n    C --> D[VAEs]\n    D --> E[Diffusion Models]\n    E --> F[Transformers for Generation]\n    F --> G[Prompt Engineering]\n    G --> H[Fine-Tuning]\n    H --> I[RAG]\n    I --> J[GAN vs VAE vs Diffusion]\n    J --> K[Interview Corner]\n    K --> L[Real-World Applications]\n    L --> M[Responsible GenAI]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-overview-of-generative-models",
      children: "4.1 Overview of Generative Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generative models learn the probability distribution $$P(X)$$ of training data and sample new data from it. Unlike discriminative models that learn $$P(Y|X)$$ (decision boundaries), generative models can produce entirely new data points that resemble the training distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-generative-family-tree",
      children: "The Generative Family Tree"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sampling Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Quality"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GAN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial game between generator and discriminator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discriminator loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1 forward pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharp, high-freq detail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VAE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variational inference with encoder-decoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ELBO (recon + KL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1 forward pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth, slightly blurry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diffusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative denoising of Gaussian noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise prediction MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (10-100 steps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autoregressive (GPT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next-token prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-entropy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential per token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent text, variable image"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mathematical-intuition",
      children: "Mathematical Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Maximum Likelihood:  argmax_θ  E_{x~P_data}[log P_θ(x)]\nGAN:                min_G max_D  E[log D(x)] + E[log(1 - D(G(z)))]\nVAE:                max  E[log P(x|z)] - KL(Q(z|x) || P(z))\nDiffusion:          min E[ || ε - ε_θ(x_t, t) ||² ]\nAutoregressive:     max  Σ log P(x_i | x_<i)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Think of these four families as four different artists. GAN is like a forger who gets better by arguing with a detective. VAE is like a sketch artist who draws a blurry outline then fills details. Diffusion is like a sculptor who starts with a block of noise and chips away until the image appears. GPT is like a writer who predicts the next word one at a time — everything builds on what came before."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Four generative model families — GAN, VAE, Diffusion, Autoregressive — each trade off quality, speed, stability, and control differently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-generative-adversarial-networks-gans",
      children: "4.2 Generative Adversarial Networks (GANs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A forger (Generator) tries to create fake paintings that look real, while an art detective (Discriminator) tries to spot the fakes. Each time the detective catches a fake, the forger improves. Each time a fake slips through, the detective gets sharper. After thousands of rounds, the forger becomes so good that even an expert cannot distinguish the fakes from real paintings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A GAN consists of two neural networks competing in a zero-sum game:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator (G):"
        }), " Takes random noise $$z$$ and produces a fake sample $$G(z)$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discriminator (D):"
        }), " Takes a sample $$x$$ and outputs probability $$D(x)$$ that it is real"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Random Noise (z) ──→ Generator ──→ Fake Image (G(z))\n                                        │\n                   Real Image (x) ──→ Discriminator ──→ Real/Fake?\n                                        ↑\n                                   Fake Image ─────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-gans-work-step-by-step",
      children: "How GANs Work (Step by Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample noise:"
        }), " Draw a random latent vector $$z$$ from a simple distribution (e.g., uniform or normal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate fake:"
        }), " Pass $$z$$ through the Generator to produce a fake image $$G(z)$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample real:"
        }), " Draw a batch of real images from the training dataset"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discriminate real:"
        }), " Pass real images through D, compute loss $$-\\log D(x)$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discriminate fake:"
        }), " Pass fake images through D, compute loss $$-\\log(1 - D(G(z)))$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update D:"
        }), " Backpropagate combined D loss to improve discriminator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate new fakes:"
        }), " Pass fresh noise through G (detached from D)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fool D:"
        }), " Compute G loss $$-\\log D(G(z))$$ (the generator wants D to be wrong)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update G:"
        }), " Backpropagate G loss to improve generator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Alternate steps 2-9 until equilibrium (D cannot distinguish)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION train_gan(G, D, dataset, epochs, batch_size, z_dim):\n    FOR epoch = 1 TO epochs:\n        FOR batch IN dataset:\n            // ── Train Discriminator ──\n            real_images = batch\n            real_labels = ONES(batch_size, 1)\n            fake_labels = ZEROS(batch_size, 1)\n\n            D_real_loss = BCELoss(D(real_images), real_labels)\n\n            z = sample_noise(batch_size, z_dim)\n            fake_images = G(z)\n            D_fake_loss = BCELoss(D(fake_images), fake_labels)\n\n            D_loss = D_real_loss + D_fake_loss\n            D_loss.backward()\n            D_optimizer.step()\n\n            // ── Train Generator ──\n            z = sample_noise(batch_size, z_dim)\n            fake_images = G(z)\n            G_loss = BCELoss(D(fake_images), real_labels)  // Fool D!\n\n            G_loss.backward()\n            G_optimizer.step()\n\n        PRINT(\"Epoch\", epoch, \"D loss:\", D_loss, \"G loss:\", G_loss)\n    RETURN G, D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " z_dim=2, image=4 pixels, batch_size=2, epochs=1"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer Activations (G)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z₁=[0.2,-0.7], z₂=[-0.5,0.3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G(z) forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z₁,z₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fake₁=[0.3,0.8,-0.2,0.1], fake₂=[-0.1,0.5,0.7,-0.3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z→Linear→ReLU→Linear→Tanh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample real"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "real₁=[0.9,0.7,-0.4,0.2], real₂=[-0.8,0.1,0.6,0.4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(real)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "real₁,real₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(real₁)=0.85, D(real₂)=0.92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear→LReLU→Linear→Sigmoid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_real_loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(real), [1,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-(log0.85+log0.92)=0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(fake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fake₁,fake₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(fake₁)=0.12, D(fake₂)=0.32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_fake_loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(fake), [0,0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-(log0.88+log0.68)=0.38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total D loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25+0.38=0.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D backprop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradients flow through D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample fresh z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z₃=[0.9,0.1], z₄=[-0.3,-0.6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G(z) forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z₃,z₄"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fake₃=[0.4,0.6,-0.1,0.3], fake₄=[-0.2,0.3,0.5,-0.1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(fake)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fake₃,fake₄"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(fake₃)=0.45, D(fake₄)=0.28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discriminator output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G_loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(fake), [1,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-(log0.45+log0.28)=1.35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G backprop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradients flow through G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adam(lr=0.0002)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated G weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adam(lr=0.0002)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated D weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After many epochs: D(G(z)) ≈ 0.5 (D cannot tell real from fake → Nash equilibrium)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-pytorch",
      children: "Python Implementation (PyTorch)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom torchvision import datasets, transforms\nfrom torch.utils.data import DataLoader\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# ── Hyperparameters ──\nZ_DIM = 100\nBATCH_SIZE = 64\nEPOCHS = 50\nLR = 0.0002\nIMG_DIM = 784  # 28×28\n\n# ── Generator ──\nclass Generator(nn.Module):\n    def __init__(self, z_dim=Z_DIM, img_dim=IMG_DIM):\n        super().__init__()\n        self.net = nn.Sequential(\n            nn.Linear(z_dim, 256),\n            nn.BatchNorm1d(256),\n            nn.ReLU(),\n            nn.Linear(256, 512),\n            nn.BatchNorm1d(512),\n            nn.ReLU(),\n            nn.Linear(512, img_dim),\n            nn.Tanh(),\n        )\n\n    def forward(self, z):\n        return self.net(z)\n\n# ── Discriminator ──\nclass Discriminator(nn.Module):\n    def __init__(self, img_dim=IMG_DIM):\n        super().__init__()\n        self.net = nn.Sequential(\n            nn.Linear(img_dim, 512),\n            nn.LeakyReLU(0.2),\n            nn.Dropout(0.3),\n            nn.Linear(512, 256),\n            nn.LeakyReLU(0.2),\n            nn.Dropout(0.3),\n            nn.Linear(256, 1),\n            nn.Sigmoid(),\n        )\n\n    def forward(self, x):\n        return self.net(x)\n\n# ── Initialize ──\ndevice = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\nG = Generator().to(device)\nD = Discriminator().to(device)\ng_opt = optim.Adam(G.parameters(), lr=LR, betas=(0.5, 0.999))\nd_opt = optim.Adam(D.parameters(), lr=LR, betas=(0.5, 0.999))\ncriterion = nn.BCELoss()\n\n# ── Data ──\ntransform = transforms.Compose([\n    transforms.ToTensor(),\n    transforms.Normalize((0.5,), (0.5,)),\n])\ndataset = datasets.MNIST(root=\"data\", transform=transform, download=True)\nloader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True, drop_last=True)\n\n# ── Training ──\ndef train_step(real_images):\n    batch = real_images.view(real_images.size(0), -1)\n    batch_size = batch.size(0)\n    real_labels = torch.ones(batch_size, 1, device=device)\n    fake_labels = torch.zeros(batch_size, 1, device=device)\n\n    # Train Discriminator\n    d_opt.zero_grad()\n    d_real = D(batch)\n    d_real_loss = criterion(d_real, real_labels)\n\n    z = torch.randn(batch_size, Z_DIM, device=device)\n    fake_images = G(z)\n    d_fake = D(fake_images.detach())\n    d_fake_loss = criterion(d_fake, fake_labels)\n\n    d_loss = d_real_loss + d_fake_loss\n    d_loss.backward()\n    d_opt.step()\n\n    # Train Generator\n    g_opt.zero_grad()\n    z = torch.randn(batch_size, Z_DIM, device=device)\n    fake_images = G(z)\n    d_fake = D(fake_images)\n    g_loss = criterion(d_fake, real_labels)\n\n    g_loss.backward()\n    g_opt.step()\n\n    return d_loss.item(), g_loss.item()\n\nfor epoch in range(EPOCHS):\n    for batch_idx, (real_images, _) in enumerate(loader):\n        d_loss, g_loss = train_step(real_images.to(device))\n        if batch_idx % 200 == 0:\n            print(f\"Epoch {epoch:3d} [{batch_idx:4d}/{len(loader)}] \"\n                  f\"D: {d_loss:.4f} G: {g_loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generating-samples",
      children: "Generating Samples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def generate_samples(generator, n_samples=16):\n    z = torch.randn(n_samples, Z_DIM, device=device)\n    with torch.no_grad():\n        samples = generator(z).cpu().view(-1, 1, 28, 28)\n    return samples\n\nsamples = generate_samples(G, 16)\nprint(f\"Generated {samples.shape[0]} images of shape {samples.shape[1:]}\")\n\n# Visualize\nfig, axes = plt.subplots(4, 4, figsize=(8, 8))\nfor i, ax in enumerate(axes.flat):\n    ax.imshow(samples[i].squeeze(), cmap=\"gray\")\n    ax.axis(\"off\")\nplt.savefig(\"output/gan_samples.png\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training (per step)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O((G_{params} + D_{params}) \\cdot B)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O((G_{params} + D_{params}) \\cdot 2)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both networks forward+backward every step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference (per sample)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(G_{params})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(G_{params})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only generator forward pass needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Convergence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(N_{epochs} \\cdot N_{batches})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training is notoriously slow to converge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why?"
      }), " GAN training requires alternating updates of two networks, doubling compute per step. The generator alone is small compared to diffusion models, making inference fast. However, the adversarial training often needs 10-100K iterations to converge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast inference (single forward pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unstable training (oscillating loss)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharp, high-frequency detail in images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode collapse (generator produces limited variety)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No Markov chain — direct sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No tractable likelihood or latent space inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can generate in any resolution (conditional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely sensitive to hyperparameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial framework is general (text, audio)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation is difficult (no inherent metric)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art in super-resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training requires careful balancing of G/D"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mode Collapse:"
          }), " The generator finds a few \"tricks\" that fool the discriminator and produces nearly identical outputs regardless of input noise. Mitigation: minibatch discrimination, unrolled GANs, or spectral normalization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-Convergence:"
          }), " The discriminator reaches zero loss (perfect discrimination), stopping the generator from learning. Mitigation: label smoothing (use 0.9/0.1 instead of 1.0/0.0), reduce discriminator capacity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vanishing Gradients:"
          }), " When the discriminator is too strong, generator gradients vanish. Mitigation: use Wasserstein loss (WGAN) instead of BCE, add gradient penalty."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Imbalance:"
          }), " GANs trained on datasets with class imbalance generate fewer samples of rare classes. Mitigation: class-conditional GANs with weighted sampling."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Latent Space Discontinuity:"
          }), " Nearby points in $$z$$-space can produce very different outputs. Mitigation: use VAEs for smoother latent spaces instead."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠️ Warning:"
        }), " GAN training is notoriously unstable. Monitor the D/G loss ratio: if D loss drops to 0, the discriminator is too strong. If G loss dominates and outputs are repetitive, mode collapse is likely. Use label smoothing (0.9/0.1) and gradient penalties for stability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " GANs pit a generator against a discriminator in a zero-sum game, producing sharp images through adversarial training that is powerful but fragile."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-variational-autoencoders-vaes",
      children: "4.3 Variational Autoencoders (VAEs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine an architect who designs buildings. She encodes the essence of each building she sees into a compact blueprint (latent space). She doesn't memorize exact dimensions — she captures the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "style"
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: "proportions"
        }), ", and ", (0,jsx_runtime.jsx)(_components.em, {
          children: "features"
        }), " as a probability distribution. When she wants to design something new, she picks a point in this blueprint-space and decodes it into a full design. Two nearby blueprint points produce similar buildings — allowing her to smoothly morph a Gothic cathedral into a modernist skyscraper."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-1",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VAEs learn a probabilistic latent representation using an encoder-decoder structure with variational inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input Image (x) ──→ Encoder ──→ μ, log(σ²) ──→ Sample z ~ N(μ, σ²) ──→ Decoder ──→ Reconstructed (x')\n                    (q_φ(z|x))                     (reparameterize)                  (p_θ(x|z))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-vaes-work-step-by-step",
      children: "How VAEs Work (Step by Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encode:"
        }), " Pass input $$x$$ through encoder to produce latent distribution parameters $$\\mu$$ and $$\\log\\sigma^2$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reparameterize:"
        }), " Sample $$\\epsilon \\sim N(0, I)$$ and compute $$z = \\mu + \\sigma \\cdot \\epsilon$$ (this trick keeps gradients flowing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decode:"
        }), " Pass $$z$$ through decoder to produce reconstruction $$\\hat{x}$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute reconstruction loss:"
        }), " Measure how well $$\\hat{x}$$ matches $$x$$ (MSE or BCE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute KL loss:"
        }), " Measure how far $$N(\\mu, \\sigma^2)$$ is from $$N(0, I)$$ — this regularizes the latent space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine:"
        }), " Total loss = reconstruction loss + $$\\beta \\cdot$$ KL loss ($$\\beta$$ controls the tradeoff)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backpropagate:"
        }), " Update encoder and decoder jointly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate:"
        }), " To create new samples, skip the encoder — just sample $$z \\sim N(0, I)$$ and decode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION train_vae(encoder, decoder, dataset, epochs, latent_dim):\n    FOR epoch = 1 TO epochs:\n        FOR batch IN dataset:\n            // ── Encode ──\n            h = encoder(batch)\n            mu = linear_mu(h)\n            logvar = linear_logvar(h)\n\n            // ── Reparameterize ──\n            std = exp(0.5 * logvar)\n            eps = randn_like(std)\n            z = mu + eps * std\n\n            // ── Decode ──\n            recon = decoder(z)\n\n            // ── Loss ──\n            recon_loss = MSE(recon, batch)           // or BCE\n            kl_loss = -0.5 * sum(1 + logvar - mu² - exp(logvar))\n            total_loss = recon_loss + beta * kl_loss\n\n            // ── Update ──\n            total_loss.backward()\n            optimizer.step()\n    RETURN encoder, decoder\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table-1",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " input_dim=4, latent_dim=2, batch_size=1"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Values"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x = [0.9, 0.1, 0.7, 0.3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h = [0.5, 0.8, -0.2, 0.6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h = ReLU(W_e · x + b_e)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute μ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "μ = [0.4, -0.3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "μ = W_μ · h + b_μ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute log(σ²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logvar = [-1.2, -0.8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logvar = W_logvar · h + b_logvar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reparameterize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "μ, logvar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ = [0.55, 0.67], ε = [0.3, -0.9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ = exp(0.5·logvar)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "μ, σ, ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z = [0.4+0.55·0.3, -0.3+0.67·(-0.9)] = [0.565, -0.903]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z = μ + σ·ε"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoder forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ĥ = [0.7, -0.4, 0.2, 0.9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ĥ = ReLU(W_d · z + b_d)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ĥ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x̂ = [0.85, 0.15, 0.68, 0.28]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x̂ = Sigmoid(W_out · ĥ + b_out)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recon loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x̂, x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE = (0.05² + 0.05² + 0.02² + 0.02²)/4 = 0.00145"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "μ, logvar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL = -0.5·(1+(-1.2)-0.4²-exp(-1.2) + 1+(-0.8)-(-0.3)²-exp(-0.8))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL loss calculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL = -0.5·[(-0.2-0.16-0.301) + (0.2-0.09-0.449)] = -0.5·[-1.0] = 0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full KL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β=1: total = 0.00145 + 0.5 = 0.501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backprop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "total loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradients flow through decoder → z → encoder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder and decoder weights updated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After training: the latent space becomes smooth and continuous. Interpolating between any two points produces meaningful intermediate samples."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-pytorch-1",
      children: "Python Implementation (PyTorch)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom torchvision import datasets, transforms\nfrom torch.utils.data import DataLoader\n\n# ── Hyperparameters ──\nINPUT_DIM = 784\nLATENT_DIM = 20\nHIDDEN_DIM = 400\nEPOCHS = 30\nBATCH_SIZE = 128\nLR = 1e-3\nBETA = 1.0  # Weight for KL divergence\n\n# ── VAE Model ──\nclass VAE(nn.Module):\n    def __init__(self, input_dim=INPUT_DIM, latent_dim=LATENT_DIM):\n        super().__init__()\n        self.encoder = nn.Sequential(\n            nn.Linear(input_dim, HIDDEN_DIM),\n            nn.ReLU(),\n        )\n        self.mu_layer = nn.Linear(HIDDEN_DIM, latent_dim)\n        self.logvar_layer = nn.Linear(HIDDEN_DIM, latent_dim)\n        self.decoder = nn.Sequential(\n            nn.Linear(latent_dim, HIDDEN_DIM),\n            nn.ReLU(),\n            nn.Linear(HIDDEN_DIM, input_dim),\n            nn.Sigmoid(),\n        )\n\n    def encode(self, x):\n        h = self.encoder(x)\n        return self.mu_layer(h), self.logvar_layer(h)\n\n    def reparameterize(self, mu, logvar):\n        std = torch.exp(0.5 * logvar)\n        eps = torch.randn_like(std)\n        return mu + eps * std\n\n    def decode(self, z):\n        return self.decoder(z)\n\n    def forward(self, x):\n        mu, logvar = self.encode(x)\n        z = self.reparameterize(mu, logvar)\n        recon = self.decode(z)\n        return recon, mu, logvar\n\n# ── Loss ──\ndef vae_loss(recon_x, x, mu, logvar):\n    recon_loss = nn.functional.binary_cross_entropy(\n        recon_x, x, reduction=\"sum\"\n    ) / x.size(0)  # Average over batch\n    kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp()) / x.size(0)\n    return recon_loss + BETA * kl_loss\n\n# ── Data ──\ntransform = transforms.Compose([\n    transforms.ToTensor(),\n    transforms.Lambda(lambda x: x.view(-1)),\n])\ndataset = datasets.MNIST(root=\"data\", train=True, transform=transform, download=True)\nloader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True)\n\n# ── Training ──\ndevice = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\nvae = VAE().to(device)\noptimizer = optim.Adam(vae.parameters(), lr=LR)\n\nfor epoch in range(EPOCHS):\n    total_loss = 0\n    for batch_idx, (x, _) in enumerate(loader):\n        x = x.to(device)\n        optimizer.zero_grad()\n        recon_x, mu, logvar = vae(x)\n        loss = vae_loss(recon_x, x, mu, logvar)\n        loss.backward()\n        optimizer.step()\n        total_loss += loss.item()\n    avg_loss = total_loss / len(loader)\n    print(f\"Epoch {epoch:3d} | Avg Loss: {avg_loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "latent-space-interpolation",
      children: "Latent Space Interpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "vae.eval()\nwith torch.no_grad():\n    # Encode two images\n    x1 = dataset[0][0].unsqueeze(0).to(device)\n    x2 = dataset[15][0].unsqueeze(0).to(device)\n    mu1, _ = vae.encode(x1)\n    mu2, _ = vae.encode(x2)\n\n    # Interpolate\n    alphas = torch.linspace(0, 1, 10)\n    interpolated = []\n    for alpha in alphas:\n        z = (1 - alpha) * mu1 + alpha * mu2\n        recon = vae.decode(z)\n        interpolated.append(recon.cpu().view(28, 28))\n\nprint(f\"Generated {len(interpolated)} interpolated frames\")\n# Visualize in a row\nimport matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 10, figsize=(15, 3))\nfor i, ax in enumerate(axes.flat):\n    ax.imshow(interpolated[i], cmap=\"gray\")\n    ax.axis(\"off\")\nplt.savefig(\"output/vae_interpolation.png\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training (per step)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O((E_{params} + D_{params}) \\cdot B)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O((E_{params} + D_{params}) \\cdot 2)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single forward + backward through encoder and decoder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference (per sample)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(D_{params})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(D_{params})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only decoder — sample z directly from N(0, I)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encode (per sample)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(E_{params})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(E_{params})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder forward pass only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why?"
      }), " VAE training is a single objective (ELBO) unlike GAN's two-player game, making it more stable. Inference is extremely fast — just a decoder pass. The latent dimension is user-controlled, typically 20-200."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable training (single objective)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blurry samples compared to GANs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth, structured latent space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixel-level detail is often lost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can compute likelihood estimates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KL term can overpower reconstruction (posterior collapse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables interpolation and morphing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed latent prior (N(0,I)) may not match data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well for anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated images lack high-frequency detail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to train (no adversarial dynamics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles with complex, high-dimensional data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Posterior Collapse:"
          }), " The KL term dominates and the latent variable becomes independent of the input (z carries no information). Mitigation: KL annealing (gradually increase β from 0 to 1), use free bits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blurry Outputs:"
          }), " The decoder averages over multiple plausible outputs, producing blurry results. Mitigation: use perceptual losses, VQ-VAE (discrete latent space), or adversarial training (VAE-GAN hybrids)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Latent Space Gaps:"
          }), " If KL weight is too low, the latent space has holes where decoding produces garbage. Mitigation: increase β, use more expressive priors (VampPrior)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reconstruction Fidelity vs Generation Quality Tradeoff:"
          }), " A low β gives good reconstructions but poor interpolation; high β gives smooth sampling but poor reconstructions. Mitigation: β-VAE (tune β for the task)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The latent dimension size is a critical hyperparameter. Too small (< 10) loses detail; too large (> 100) defeats regularization. Start with 20-50 and monitor reconstruction quality vs generated sample diversity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " VAEs learn a smooth, continuous latent space where interpolating between points produces meaningful intermediate samples — ideal for morphing and anomaly detection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-diffusion-models",
      children: "4.4 Diffusion Models"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine a sculptor starting with a rough block of marble (pure noise). They don't carve the final statue in one go. Instead, they have step-by-step instructions: \"At step 50, you see a vague human shape. At step 40, the head is distinguishable. At step 30, facial features emerge. At step 10, details like eye color appear.\" Each step removes a small amount of randomness, gradually revealing the final image. This is the diffusion process — reverse a gradual noising process one tiny step at a time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-2",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Diffusion models define a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forward process"
      }), " that gradually adds Gaussian noise to data over $$T$$ timesteps, and learn a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reverse process"
      }), " that denoises from pure noise back to data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Forward (q):  x₀ → x₁ → x₂ → ... → x_T (pure noise)\n                   ↓      ↓      ↓\n              Learn:  ε_θ(x_t, t)  →  predict noise to remove\n\nReverse (p):  x_T → x_{T-1} → ... → x₁ → x₀ (generated sample)\n              p_θ(x_{t-1}|x_t)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-diffusion-models-work-step-by-step",
      children: "How Diffusion Models Work (Step by Step)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "forward-process-fixed-no-learning",
      children: "Forward Process (Fixed, No Learning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start:"
        }), " Take a real image $$x_0$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add noise:"
        }), " For each timestep $$t=1$$ to $$T$$, compute $$x_t = \\sqrt{1-\\beta_t} \\cdot x_{t-1} + \\sqrt{\\beta_t} \\cdot \\epsilon_{t}$$ where $$\\epsilon_t \\sim N(0, I)$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Closed form:"
        }), " Directly compute $$x_t = \\sqrt{\\bar{\\alpha}_t} \\cdot x_0 + \\sqrt{1-\\bar{\\alpha}_t} \\cdot \\epsilon$$ where $$\\bar{\\alpha}", (0,jsx_runtime.jsx)(_components.em, {
          children: "t = \\prod"
        }), "{s=1}^{t}(1-\\beta_s)$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " After $$T$$ steps (typically 1000), $$x_T \\approx N(0, I)$$ (pure noise)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reverse-process-learned",
      children: "Reverse Process (Learned)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start noise:"
        }), " Sample $$x_T \\sim N(0, I)$$ at inference time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predict noise:"
        }), " At step $$t$$, feed $$x_t$$ and timestep $$t$$ to a U-Net $$\\epsilon_\\theta(x_t, t)$$ to predict the noise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denoise:"
        }), " Compute $$x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}", (0,jsx_runtime.jsx)(_components.em, {
          children: "t}}\\epsilon"
        }), "\\theta) + \\sigma_t \\cdot z$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Step 6-7 from $$t=T$$ down to $$t=1$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final:"
        }), " $$x_0$$ is the generated image"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text conditioning:"
        }), " For text-to-image, the U-Net also receives text embeddings via cross-attention layers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION train_diffusion(unet, dataset, T=1000):\n    FOR epoch = 1 TO epochs:\n        FOR batch IN dataset:\n            x_0 = batch_images\n            t = randint(1, T)                     // Random timestep\n            noise = randn_like(x_0)                // Sample noise\n            alpha_bar_t = cumprod(1 - beta)[t]    // Precomputed schedule\n\n            // Forward: noised image at step t\n            x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * noise\n\n            // Predict noise\n            noise_pred = unet(x_t, t, conditioning)  // U-Net with cross-attention\n\n            // Loss: MSE between actual and predicted noise\n            loss = MSE(noise, noise_pred)\n\n            loss.backward()\n            optimizer.step()\n    RETURN unet\n\nFUNCTION sample_diffusion(unet, prompt_embeds, T=1000, scheduler):\n    x_T = randn(3, H, W)                         // Pure noise\n\n    FOR t = T DOWN TO 1:\n        noise_pred = unet(x_t, t, prompt_embeds) // Predict noise\n        x_{t-1} = scheduler.step(noise_pred, t, x_t)  // Denoise one step\n\n    RETURN x_0                                   // Generated image\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table-2",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " 4-pixel image, T=4 timesteps (simplified — real models use T=1000), β schedule = [0.1, 0.2, 0.3, 0.4]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward Process — Training:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "t"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "α_t=1-β_t"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ᾱ_t = ∏α_i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x_t = √ᾱ_t·x₀ + √(1-ᾱ_t)·ε"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Noise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₀ = [0.8, 0.3, 0.6, 0.1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₁ = √0.9·x₀ + √0.1·ε = [0.76, 0.35, 0.57, 0.13] + [0.06, -0.03, 0.02, -0.09] = [0.82, 0.32, 0.59, 0.04]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε=[0.2,-0.1,0.07,-0.3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₂ = √0.72·x₀ + √0.28·ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε=[-0.4,0.5,0.1,-0.2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₃ = √0.504·x₀ + √0.496·ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε=[0.3,0.2,-0.5,0.6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₄ = √0.302·x₀ + √0.698·ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε=[-0.1,-0.4,0.3,-0.2]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse Process (Inference — Denoising):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step t"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x_t"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Predicted ε_θ(x_t, t)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x_{t-1} after denoise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₄≈N(0,I)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε_pred₄ = U-Net(x₄, 4, \"cat\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₃ = x₄ denoised with ε_pred₄"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₃ from above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε_pred₃ = U-Net(x₃, 3, \"cat\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₂ = x₃ denoised with ε_pred₃"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₂ from above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε_pred₂ = U-Net(x₂, 2, \"cat\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₁ = x₂ denoised with ε_pred₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₁ from above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε_pred₁ = U-Net(x₁, 1, \"cat\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x₀ = FINAL IMAGE!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After training, the U-Net learns to predict the noise at each step. Starting from random noise and iteratively denoising produces a coherent image matching the prompt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-stable-diffusion-with-diffusers",
      children: "Python Implementation (Stable Diffusion with Diffusers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler\nimport torch\nfrom PIL import Image\n\n# ── Load Pipeline ──\nmodel_id = \"runwayml/stable-diffusion-v1-5\"\n\npipe = StableDiffusionPipeline.from_pretrained(\n    model_id,\n    torch_dtype=torch.float16,\n    safety_checker=None,          # Disable in dev; enable in production\n    requires_safety_checker=False,\n)\npipe.scheduler = DPMSolverMultistepScheduler.from_config(\n    pipe.scheduler.config,\n    use_karras_sigmas=True,\n)\npipe = pipe.to(\"cuda\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text-to-image-generation",
      children: "Text-to-Image Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "prompt = (\n    \"A serene mountain lake at sunset, \"\n    \"digital art, highly detailed, volumetric lighting\"\n)\nnegative_prompt = \"blurry, low quality, distorted, ugly, extra limbs\"\n\nimage = pipe(\n    prompt=prompt,\n    negative_prompt=negative_prompt,\n    num_inference_steps=25,\n    guidance_scale=7.5,\n    width=512,\n    height=512,\n    generator=torch.Generator(device=\"cuda\").manual_seed(42),\n).images[0]\n\nimage.save(\"output/mountain_lake.png\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image-to-image-img2img",
      children: "Image-to-Image (Img2Img)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from diffusers import StableDiffusionImg2ImgPipeline\n\npipe = StableDiffusionImg2ImgPipeline.from_pretrained(\n    \"runwayml/stable-diffusion-v1-5\",\n    torch_dtype=torch.float16,\n).to(\"cuda\")\n\ninit_image = Image.open(\"input/sketch.png\").resize((512, 512))\n\nresult = pipe(\n    prompt=\"A professional photograph of this sketch, realistic textures, 4K quality\",\n    image=init_image,\n    strength=0.75,          # 0 = no change, 1 = completely new\n    num_inference_steps=30,\n    guidance_scale=7.5,\n).images[0]\n\nresult.save(\"output/sketch_to_photo.png\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inpainting",
      children: "Inpainting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from diffusers import StableDiffusionInpaintPipeline\nimport numpy as np\n\npipe = StableDiffusionInpaintPipeline.from_pretrained(\n    \"runwayml/stable-diffusion-inpainting\",\n    torch_dtype=torch.float16,\n).to(\"cuda\")\n\nimg = Image.open(\"input/photo_with_object.png\").resize((512, 512))\nmask = Image.open(\"input/mask.png\").resize((512, 512))  # White = area to fill\n\nresult = pipe(\n    prompt=\"Seamless texture matching the surrounding area\",\n    image=img,\n    mask_image=mask,\n    num_inference_steps=20,\n    guidance_scale=7.5,\n).images[0]\n\nresult.save(\"output/inpainted.png\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training (per step)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(UNet_{params} \\cdot B)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(UNet_{params} \\cdot 2)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single U-Net forward+backward, but trained on random timesteps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference (T steps)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(UNet_{params} \\cdot T)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(UNet_{params} \\cdot 2)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T successive forward passes (T=25-1000)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduler overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(T)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(1)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-step scheduler math is negligible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why training is relatively cheap per step:"
      }), " The U-Net is trained on random timesteps — you don't run all T steps per training step. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why inference is expensive:"
      }), " You must run T sequential denoising steps. Modern schedulers (DDIM, DPM++) reduce T from 1000 to 25-50 with minimal quality loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art image quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow inference (25-100 sequential steps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No mode collapse (stable training)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High VRAM requirement (4-12GB for inference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible conditioning (text, image, mask)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for real-time applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong theoretical foundations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot interpolate in latent space like VAEs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent diversity in outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training from scratch is extremely expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to control (guidance scale, negative prompts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex scheduler and sampling ecosystem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hallucination:"
          }), " The model generates objects or details not implied by the prompt, especially with high guidance scales. Mitigation: reduce guidance_scale (5-7.5 range), use more inference steps."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Catastrophic Neglect:"
          }), " Important prompt elements are ignored, especially when the prompt is long. Mitigation: use attention weighting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(important:1.3)"
          }), ", keep prompts focused (under 77 tokens)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exposure Bias:"
          }), " At inference time, the model sees its own predictions as input (accumulating errors), but during training it always sees clean ground-truth noised images. Mitigation: use sampling noise tricks, DDIM inversion."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt Adherence Failure:"
          }), " The image ignores the text prompt entirely (especially with high CFG or wrong guidance_scale). Mitigation: set guidance_scale between 7-12, use classifier-free guidance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Background Bleeding:"
          }), " The subject blends into the background. Mitigation: use strong negative prompts, ControlNet for structure preservation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠️ Warning:"
        }), " Diffusion models are computationally expensive. On a consumer GPU (8GB VRAM), use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "torch.float16"
        }), " and a memory-efficient scheduler (DPMSolverMultistepScheduler). For CPU inference, expect 2-5 minutes per image."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Diffusion models reverse a gradual noising process to generate high-quality images from text prompts, with img2img and inpainting as powerful variants."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-transformers-for-generation",
      children: "4.5 Transformers for Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine an extremely well-read author who has memorized billions of sentences. When you give them a starting phrase (\"Once upon a time...\"), they predict the next most natural word, one at a time. Each new word becomes part of the context for predicting the next. Unlike our GAN/VAE artist who paints the whole image at once, this author writes sequentially — and the result can be novels, code, poems, or even musical scores depending on the training data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-3",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transformers for generation use the decoder-only architecture: a stack of self-attention + feed-forward layers that predict the next token given all previous tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input:  \"The cat sat on the\"\n          │      │      │      │\n          ▼      ▼      ▼      ▼\n     [Token] [Token] [Token] [Token]\n          │      │      │      │\n          ▼      ▼      ▼      ▼\n     ┌─────────────────────────────────┐\n     │      Masked Self-Attention      │\n     │   (each token attends only to   │\n     │    previous tokens + itself)    │\n     └─────────────────────────────────┘\n                     │\n                     ▼\n     ┌─────────────────────────────────┐\n     │      Feed-Forward Network       │\n     └─────────────────────────────────┘\n                     │\n                     ▼\n              Output:  \"mat\"\n              (next token prediction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-autoregressive-generation-works-step-by-step",
      children: "How Autoregressive Generation Works (Step by Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokenize:"
        }), " Convert input text to token IDs using a vocabulary (e.g., GPT-2 has ~50K tokens)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embed:"
        }), " Map each token ID to a dense vector + add positional encoding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-attention:"
        }), " Each token attends to itself and all previous tokens (masked attention prevents \"cheating\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feed-forward:"
        }), " Apply MLP to each position independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output projection:"
        }), " Produce a probability distribution over the vocabulary for the next token"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sample:"
        }), " Draw the next token from this distribution (or take the argmax for greedy decoding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Append:"
        }), " Add the new token to the input sequence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat:"
        }), " Steps 2-7 until an end token is produced or a length limit is reached"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detokenize:"
        }), " Convert the output token sequence back to text"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION generate(model, prompt, max_tokens, temperature):\n    tokens = tokenize(prompt)\n\n    FOR step = 1 TO max_tokens:\n        // Forward pass through all decoder layers\n        logits = model(tokens)\n\n        // Get next-token distribution (last position only)\n        next_token_logits = logits[-1, :]\n\n        // Apply temperature scaling\n        scaled_logits = next_token_logits / temperature\n\n        // Convert to probabilities\n        probs = softmax(scaled_logits)\n\n        // Sample from distribution (or top-k / top-p filtering)\n        if temperature == 0:\n            next_token = argmax(probs)   // Greedy\n        else:\n            next_token = sample(probs)   // Stochastic\n\n        tokens.append(next_token)\n\n        IF next_token == EOS_TOKEN:\n            BREAK\n\n    RETURN detokenize(tokens)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table-3",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Tiny transformer, vocab={the(0), cat(1), sat(2), on(3), mat(4), .(5)}, prompt=\"The cat\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input Tokens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attn Weights (last token)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logits (vocab)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sampled"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[the(0), cat(1)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cat→the:0.3, cat→cat:0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.1, 0.2, 0.8, 0.3, 0.1, 0.05]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sat(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"sat\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[the, cat, sat]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sat→the:0.2, sat→cat:0.5, sat→sat:0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.05, 0.1, 0.1, 0.7, 0.3, 0.05]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"on\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[the, cat, sat, on]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on→the:0.1, on→cat:0.2, on→sat:0.3, on→on:0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.05, 0.05, 0.05, 0.1, 0.8, 0.1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mat(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"mat\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[the, cat, sat, on, mat]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mat→the:0.1, mat→cat:0.1, mat→sat:0.2, mat→on:0.2, mat→mat:0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.02, 0.02, 0.02, 0.02, 0.02, 0.9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\".\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[the, cat, sat, on, mat, .]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".→all: even"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.1, 0.1, 0.1, 0.1, 0.1, 0.1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STOP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The attention weights show how the model learns that \"cat\" is the subject, \"sat\" is the action, \"on\" introduces the location, etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-huggingface-transformers",
      children: "Python Implementation (HuggingFace Transformers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from transformers import AutoModelForCausalLM, AutoTokenizer\n\n# ── Load Model ──\nmodel_name = \"gpt2\"  # 124M parameters — good for learning\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForCausalLM.from_pretrained(model_name)\n\n# ── Text Generation ──\nprompt = \"Once upon a time\"\n\ninputs = tokenizer(prompt, return_tensors=\"pt\")\noutputs = model.generate(\n    **inputs,\n    max_new_tokens=50,\n    temperature=0.7,\n    top_p=0.9,\n    do_sample=True,\n    pad_token_id=tokenizer.eos_token_id,\n)\n\ngenerated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)\nprint(generated_text)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kv-cache-optimization-production-critical",
      children: "KV-Cache Optimization (Production Critical)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Without KV cache: re-compute all keys/values for every new token\n# With KV cache: cache keys and values from previous steps\n# This changes inference from O(n²) to O(n) per step\n\nclass CausalLMWithCache:\n    def __init__(self, model):\n        self.model = model\n        self.past_key_values = None\n\n    def generate(self, input_ids, max_new_tokens=100):\n        for _ in range(max_new_tokens):\n            outputs = self.model(\n                input_ids=input_ids,\n                past_key_values=self.past_key_values,\n                use_cache=True,\n            )\n            self.past_key_values = outputs.past_key_values\n            next_token = outputs.logits[:, -1, :].argmax(dim=-1)\n            input_ids = next_token.unsqueeze(0)\n            yield next_token.item()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training (per token)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L^2 \\cdot d)$$ per layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L^2 + L \\cdot d)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-attention is quadratic in sequence length L"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference (per token, no cache)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L^2 \\cdot d)$$ per layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L^2 + L \\cdot d)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must recompute all previous attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference (per token, KV cache)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L \\cdot d)$$ per layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L \\cdot d \\cdot n_{layers})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in current sequence length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KV cache memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(2 \\cdot n_{layers} \\cdot n_{heads} \\cdot L \\cdot d_{head})$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored key/value projections"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why generation is slow for long sequences:"
      }), " Each new token must attend to all previous tokens. The KV cache helps by storing computed keys/values, but memory grows linearly with sequence length."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single architecture for text, code, audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic attention cost limits context length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent at capturing long-range dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential generation is inherently slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Massive scaling works (compute → quality)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training requires enormous datasets and compute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible prompting and in-context learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination (confidently wrong answers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rich ecosystem (HuggingFace, vLLM, TGI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive error accumulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KV-cache and speculative decoding optimizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in source attribution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Repetition:"
          }), " The model gets stuck in repetitive loops (\"I like apples. I like apples. I like apples...\"). Mitigation: repetition_penalty (1.1-1.2), top-k sampling with k=40."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hallucination:"
          }), " The model generates plausible-sounding but false information. Mitigation: RAG (ground in external knowledge), lower temperature (0.1-0.3) for factual tasks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context Length Overflow:"
          }), " The input exceeds the model's maximum context (e.g., 2048 tokens for GPT-2). Mitigation: truncate middle context, use sliding window attention, or chunk-summarize."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exposure Bias:"
          }), " During training, the model always sees ground-truth tokens; during inference, it sees its own potentially incorrect predictions. Mitigation: scheduled sampling, beam search with diverse penalty."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Toxicity and Bias:"
          }), " Pre-trained models reflect biases in their training data. Mitigation: RLHF, content filtering, prompt engineering with guardrails."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Autoregressive transformers generate text one token at a time by attending to all prior context, achieving remarkable quality at the cost of sequential inference and quadratic attention."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-prompt-engineering",
      children: "4.6 Prompt Engineering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Giving a prompt to a generative model is like giving instructions to a very literal, hyper-competent chef. If you say \"make food,\" you get something edible but random. If you say \"pan-seared salmon with lemon-dill sauce, crispy skin, served on a bed of wild rice, plated on a white ceramic dish, photographed with a 50mm lens,\" you get exactly what you envisioned. The model has the skill — it just needs precise direction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prompt-structure-sceq-framework",
      children: "Prompt Structure (SCEQ Framework)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard prompt formula for text-to-image:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Subject] + [Context/Action] + [Environment] + [Style/Medium] + [Quality]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bad:     \"a dog\"\nGood:    \"A golden retriever puppy running through a field of wildflowers, \"\n         \"golden hour lighting, photorealistic, 8K, shallow depth of field\"\n\nNegative: \"blurry, low quality, distorted, ugly, extra limbs, bad anatomy\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-prompt-engineering-works-step-by-step",
      children: "How Prompt Engineering Works (Step by Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define subject:"
        }), " Start with the main object, person, or scene"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add context:"
        }), " What is the subject doing? What's the situation?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set environment:"
        }), " Where does the scene take place? What's the lighting?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose style:"
        }), " Photography, oil painting, 3D render, anime, sketch?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specify quality:"
        }), " Resolution tags (4K, 8K), technical quality (sharp focus, detailed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Craft negative prompt:"
        }), " List everything you DON'T want (blurry, distorted, extra limbs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add weights:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(keyword:weight)"
        }), " syntax to emphasize or de-emphasize elements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test and iterate:"
        }), " Generate, evaluate, refine — repeat"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION build_prompt(subject, context, environment, style, quality):\n    positive = f\"{subject}, {context}, {environment}, {style}, {quality}\"\n    negative = \"blurry, lowres, bad anatomy, extra limbs, ugly, deformed\"\n\n    IF any_weights:\n        FOR each keyword, weight:\n            keyword = f\"({keyword}:{weight})\"\n\n    RETURN positive, negative\n\nFUNCTION generate_with_prompt(pipe, positive, negative, steps, guidance):\n    image = pipe(\n        prompt=positive,\n        negative_prompt=negative,\n        num_inference_steps=steps,\n        guidance_scale=guidance,\n    )\n    RETURN image\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table-4",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attempt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prompt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a cat\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blurry shape, no detail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too vague, no context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add specifics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"a gray cat sitting on a chair, digital art\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cat shape but 3 legs, weird face"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing quality tags + no negative prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add quality + negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"gray cat sitting on a chair, digital art, sharp focus, detailed\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better but still some artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor prompt structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SCEQ framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"gray tabby cat sitting on a wooden chair, cozy living room, digital art, sharp focus, 4K\" + negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean image, one good result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good! Now test variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterate style"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"gray tabby cat sitting on a wooden chair, cozy living room, (oil painting:1.2), (impasto:1.1), sharp focus\" + negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oil painting style achieved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use this formula"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def generate_with_prompt(\n    pipe,\n    subject,\n    context=\"\",\n    environment=\"\",\n    style=\"photorealistic\",\n    quality=\"8K, highly detailed, sharp focus\",\n    negative=\"blurry, low quality, distorted, ugly, bad anatomy, \"\n             \"extra limbs, watermark, text, signature\",\n    weights=None,\n    num_steps=25,\n    guidance=7.5,\n):\n    # Build positive prompt\n    parts = [subject]\n    if context:\n        parts.append(context)\n    if environment:\n        parts.append(environment)\n    parts.append(style)\n    parts.append(quality)\n    positive = \", \".join(parts)\n\n    # Apply weights\n    if weights:\n        for keyword, weight in weights.items():\n            if keyword in positive:\n                positive = positive.replace(\n                    keyword, f\"({keyword}:{weight})\"\n                )\n\n    # Generate\n    image = pipe(\n        prompt=positive,\n        negative_prompt=negative,\n        num_inference_steps=num_steps,\n        guidance_scale=guidance,\n    ).images[0]\n\n    return image, positive, negative\n\n# Usage\nimage, pos, neg = generate_with_prompt(\n    pipe,\n    subject=\"a golden retriever puppy\",\n    context=\"running joyfully, tongue out\",\n    environment=\"sunny meadow, wildflowers, golden hour\",\n    style=\"photorealistic\",\n    quality=\"8K, shallow depth of field, detailed fur texture\",\n    weights={\"golden retriever\": 1.2, \"wildflowers\": 1.1},\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prompt parsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in prompt length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt engineering adds no model cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iteration cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(N_{attempts} \\cdot inference_cost)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each generation attempt costs full inference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why prompt engineering is free computationally:"
      }), " The prompt just changes the conditioning input — same model, same architecture, no training needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No training required — works with any model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Results are inconsistent across seeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instant results — iterate in minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires trial and error to get right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full creative control over output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge cutoff — limited to model's training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative prompts remove artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long prompts get truncated (77 token limit in SD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted prompts focus generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot teach the model new concepts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Token Limit Exceeded:"
          }), " Stable Diffusion clips prompts beyond 77 tokens. Mitigation: use the most important words first, compress phrases."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Concept Bleed:"
          }), " \"Red apple and green apple\" may produce a single apple that is both red and green. Mitigation: use AND operator in advanced prompts, generate separately and composite."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Negative Prompt Overreach:"
          }), " Too many negative tags can degrade quality or suppress the subject. Mitigation: keep negative prompts focused on 5-8 common artifacts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Style Interference:"
          }), " Specifying multiple conflicting styles produces muddy results. Mitigation: pick one dominant style, weight it higher."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always include a negative prompt. Common artifacts (blurry, distorted hands, extra limbs) can be dramatically reduced with a well-crafted negative prompt, often more effectively than tweaking the positive prompt."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Effective prompt engineering follows a five-part formula — subject, context, environment, style, quality — and pairs positive prompts with explicit negative prompts to remove artifacts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-fine-tuning-lora-dreambooth",
      children: "4.7 Fine-Tuning (LoRA, DreamBooth)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine you have a chef who can cook any cuisine, but you want them to specialize in your grandmother's secret pasta recipe. Instead of sending them to culinary school for 3 years (full retraining), you give them a small notebook with just the key adjustments: \"use San Marzano tomatoes, cook exactly 11 minutes, add basil at the end.\" This notebook is LoRA — a tiny set of task-specific modifications that adapts a large general model without retraining everything."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage Overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Fine-Tune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates all model weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full model (2-7GB per variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10K+ images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LoRA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds small rank-decomposition matrices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-50MB per adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-200 images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DreamBooth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binds a new concept to a unique token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-200MB (usually combined with LoRA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-20 images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Textual Inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learns new embedding tokens only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100KB per concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adapter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds small bottleneck layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-20MB per adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000 images"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-lora-works-step-by-step",
      children: "How LoRA Works (Step by Step)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Freeze base model:"
        }), " All original weights are frozen — no gradients computed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inject adapters:"
        }), " For each weight matrix $$W \\in \\mathbb{R}^{d \\times k}$$, add a low-rank decomposition $$W' = W + BA$$ where $$B \\in \\mathbb{R}^{d \\times r}$$, $$A \\in \\mathbb{R}^{r \\times k}$$, and $$r \\ll \\min(d, k)$$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Train only adapters:"
        }), " Only $$A$$ and $$B$$ are updated during training (typically rank $$r = 8$$ to $$64$$)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge or keep separate:"
        }), " At inference, either merge $$BA$$ into $$W$$ (no speed cost) or keep separate (swap adapters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply:"
        }), " Use the adapted model for generation in the target domain"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original:         y = Wx\nWith LoRA:        y = Wx + BAx\n                   └── only BA is trained ──┘\n                   └── W is frozen ──────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION train_lora(base_model, dataset, rank=8, epochs=100, lr=1e-4):\n    // Freeze base model\n    FOR param IN base_model.parameters():\n        param.requires_grad = False\n\n    // Inject LoRA layers into attention projections\n    FOR name, module IN base_model.attention_modules():\n        module.q_proj.lora = LoRALayer(module.q_proj.in_features,\n                                        module.q_proj.out_features, rank)\n        module.v_proj.lora = LoRALayer(module.v_proj.in_features,\n                                        module.v_proj.out_features, rank)\n        // Only LoRA params are trainable\n\n    optimizer = Adam(lora_params, lr=lr)\n\n    FOR epoch = 1 TO epochs:\n        FOR batch IN dataset:\n            prompt = batch[\"prompt\"]\n            target_image = batch[\"image\"]\n\n            noise = add_noise(target_image)\n            noise_pred = base_model(noise, prompt)  // Uses LoRA adapters\n            loss = MSE(noise, noise_pred)\n\n            loss.backward()\n            optimizer.step()\n\n    // Save only LoRA weights (~5MB)\n    save_lora_weights(\"my_style_lora.safetensors\")\n    RETURN base_model  // Now adapted\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table-5",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Fine-tuning Stable Diffusion to generate in \"Van Gogh style\", rank=4, 20 training images"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight Update"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze base model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full model (1.7GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All params frozen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add LoRA to q_proj (dim=1024, r=4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × 1024×4 = 8192 params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+32KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unfrozen A, B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add LoRA to v_proj (dim=1024, r=4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × 1024×4 = 8192 params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+32KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unfrozen A, B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward pass with LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full model + LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W' = W + BA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradients for A, B only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frozen W unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adam step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A: += 1e-4 * grad_A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA weights update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat for 100 epochs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA converges to \"Van Gogh\" distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inference: merge or keep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BA merged into W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No speed change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"A cat in Van Gogh style\" works"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why LoRA saves so much memory:"
      }), " Instead of updating 1.7 billion parameters, you update only ~100K parameters. One adapter file is ~5MB instead of ~7GB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-lora-with-diffusers",
      children: "Python Implementation (LoRA with Diffusers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from diffusers import StableDiffusionPipeline, UNet2DConditionModel\nfrom diffusers.loaders import AttnProcsLayers\nfrom diffusers.models.attention_processor import LoRAAttnProcessor\nimport torch\n\n# ── Load base model ──\npipe = StableDiffusionPipeline.from_pretrained(\n    \"runwayml/stable-diffusion-v1-5\",\n    torch_dtype=torch.float16,\n).to(\"cuda\")\n\n# ── Inject LoRA ──\nunet = pipe.unet\nlora_attn_procs = {}\nfor name in unet.attn_processors.keys():\n    if \"attn1\" in name:  # Self-attention\n        lora_attn_procs[name] = LoRAAttnProcessor(\n            hidden_size=unet.config.cross_attention_dim,\n            rank=4,\n        )\n    elif \"attn2\" in name:  # Cross-attention (text → image)\n        lora_attn_procs[name] = LoRAAttnProcessor(\n            hidden_size=unet.config.cross_attention_dim,\n            rank=4,\n        )\nunet.set_attn_processor(lora_attn_procs)\n\n# ── Only LoRA params require gradients ──\nlora_layers = AttnProcsLayers(unet.attn_processors)\noptimizer = torch.optim.AdamW(lora_layers.parameters(), lr=1e-4)\n\n# ── Training loop (simplified) ──\nfor step, batch in enumerate(train_dataloader):\n    latents = batch[\"latents\"].to(\"cuda\")\n    noise = torch.randn_like(latents)\n    timesteps = torch.randint(0, 1000, (latents.shape[0],), device=\"cuda\")\n\n    noisy_latents = noise_scheduler.add_noise(latents, noise, timesteps)\n    noise_pred = unet(noisy_latents, timesteps, batch[\"embeds\"]).sample\n    loss = torch.nn.functional.mse_loss(noise_pred, noise)\n\n    loss.backward()\n    optimizer.step()\n    optimizer.zero_grad()\n\n# ── Save LoRA weights ──\ntorch.save(lora_layers.state_dict(), \"my_style_lora.safetensors\")\nprint(f\"LoRA weights saved (~5MB) — {lora_layers.num_parameters():,} params trainable\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trainable Params"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full fine-tune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.7B (100%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA (r=4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.2M (0.01%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-5MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base (merged)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA (r=64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3M (0.18%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base (merged)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DreamBooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as LoRA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly higher (prior preservation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Textual Inversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.0005M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-60 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drastically reduces storage (GB → MB per variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low rank may not capture complex concepts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast training (hours vs days)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot fundamentally change model behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No inference latency increase (when merged)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful hyperparameter tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple adapters can be composed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting risk with very small datasets (< 5 images)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works across modalities (image, text, audio)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA on all layers increases adapter size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Overfitting:"
          }), " With too few images (3-5), the model memorizes rather than learns the concept. Mitigation: use regularization (prior preservation loss in DreamBooth), data augmentation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Catastrophic Forgetting:"
          }), " Full fine-tuning can cause the model to forget how to generate general concepts. Mitigation: use LoRA instead of full fine-tune, mix domain data with general data."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Concept Entanglement:"
          }), " With multiple LoRA adapters stacked, concepts can blend in unintended ways. Mitigation: use separate adapter files and only load one at a time, or use weight blending."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolution Mismatch:"
          }), " Fine-tuning on low-resolution images degrades high-resolution generation. Mitigation: resize all training images to the model's native resolution (typically 512×512)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger Token Conflict:"
          }), " The chosen trigger word (e.g., \"sks\") may already have meaning in the model. Mitigation: use rare token combinations, verify the trigger is not already strongly associated."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " LoRA adapts large generative models to new domains by training tiny rank-decomposition matrices while freezing the base model — enabling custom variants that are 1000× smaller than full copies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-retrieval-augmented-generation-rag",
      children: "4.8 Retrieval-Augmented Generation (RAG)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Imagine a brilliant but extremely forgetful professor. He knows a vast amount of general knowledge, but he can't remember specific details from his own recent lectures or private documents. If you ask him a question, he may confidently make up an incorrect answer (hallucination). The solution: give him an open-book exam. Whenever you ask a question, he first looks up relevant passages in his personal notebook (retrieval), reads them, and then answers based on what he found. Now his answers are always grounded in facts. This is RAG."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-4",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG combines a retrieval system (search over a knowledge base) with a generative model (LLM) to produce grounded, up-to-date answers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User Query\n    │\n    ▼\n┌─────────────────────┐    ┌───────────────────┐\n│   Embedding Model   │───→│  Vector Database   │\n│   (e.g., text-      │    │  (e.g., Pinecone,  │\n│    embedding-ada)   │    │   Chroma, FAISS)   │\n└─────────────────────┘    └───────────────────┘\n                                   │\n                           Retrieved Chunks\n                                   │\n                                   ▼\n┌─────────────────────────────────────────┐\n│           Prompt Constructor            │\n│  \"Answer based on: [chunks]...[query]\"  │\n└─────────────────────────────────────────┘\n                   │\n                   ▼\n┌─────────────────────────────────────────┐\n│         LLM (GPT-4, Claude, etc.)       │\n│  Generates answer grounded in chunks    │\n└─────────────────────────────────────────┘\n                   │\n                   ▼\n            Grounded Answer + Citations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-rag-works-step-by-step",
      children: "How RAG Works (Step by Step)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "indexing-phase-one-time-setup",
      children: "Indexing Phase (One-Time Setup)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunk documents:"
        }), " Split knowledge base documents into chunks (typically 256-1024 tokens each with overlap)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate embeddings:"
        }), " Pass each chunk through an embedding model to get a dense vector representation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Store vectors:"
        }), " Insert all embeddings into a vector database with the chunk text as metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build index:"
        }), " Create an approximate nearest neighbor (ANN) index for fast retrieval at query time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "query-phase-at-runtime",
      children: "Query Phase (At Runtime)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embed query:"
        }), " Convert the user's question into an embedding using the same embedding model"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieve:"
        }), " Query the vector database for the top-K most similar chunks (K = 3-10 typically)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Construct prompt:"
        }), " Build a prompt that includes the retrieved chunks as context + the user's question"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate:"
        }), " Pass the augmented prompt to the LLM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return:"
        }), " Return the LLM's response, optionally with citations to retrieved documents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ── INDEXING ──\nFUNCTION index_documents(documents, embed_model, vector_db):\n    FOR doc IN documents:\n        chunks = split_into_chunks(doc, chunk_size=512, overlap=64)\n        FOR chunk IN chunks:\n            embedding = embed_model.encode(chunk)\n            vector_db.insert(embedding, metadata={\"text\": chunk, \"source\": doc.name})\n    RETURN vector_db\n\n// ── QUERY ──\nFUNCTION rag_query(query, embed_model, vector_db, llm, top_k=5):\n    // Retrieve\n    query_embedding = embed_model.encode(query)\n    results = vector_db.search(query_embedding, top_k)\n\n    // Augment\n    context = \"\"\n    FOR result IN results:\n        context += f\"[Source {result.id}]\\n{result.text}\\n\\n\"\n\n    prompt = f\"\"\"You are a helpful assistant. Answer the question based ONLY on the\n    provided context. If the context does not contain enough information, say so.\n\n    CONTEXT:\n    {context}\n\n    QUESTION: {query}\n\n    ANSWER:\"\"\"\n\n    // Generate\n    answer = llm.generate(prompt)\n\n    RETURN answer, [r.source for r in results]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-trace-table-6",
      children: "Step-by-Step Dry Run (Trace Table)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Vector DB with 3 chunks about AI, embedding dim=4 (simplified), query=\"What is a transformer?\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc: \"Transformers use attention. CNNs use convolution.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk 1: \"Transformers use attention\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk 2: \"CNNs use convolution for vision\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk 3: \"Attention mechanisms weigh input importance\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed chunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "embed(\"Transformers use attention\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.2, 0.8, 0.3, 0.1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed chunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "embed(\"CNNs use convolution for vision\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.9, 0.1, 0.7, 0.5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed chunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "embed(\"Attention mechanisms weigh...\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.3, 0.7, 0.2, 0.2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store in DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vectors + text stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "embed(\"What is a transformer?\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0.25, 0.75, 0.28, 0.15]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosine sim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk 1: 0.99, Chunk 2: 0.45, Chunk 3: 0.92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-2: Chunk 1, Chunk 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Answer: [Chunk1][Chunk3] Q: What is a transformer?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Augmented prompt ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM generate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"A transformer is an architecture that uses attention...\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grounded answer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response + citations [Chunk1, Chunk3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-rag-with-langchain--chroma",
      children: "Python Implementation (RAG with LangChain + Chroma)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from langchain.embeddings import HuggingFaceEmbeddings\nfrom langchain.vectorstores import Chroma\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\nfrom langchain.llms import HuggingFacePipeline\nfrom langchain.chains import RetrievalQA\nfrom langchain.document_loaders import TextLoader\nimport torch\n\n# ── 1. Load and Chunk Documents ──\nloader = TextLoader(\"knowledge_base.txt\")\ndocuments = loader.load()\n\ntext_splitter = RecursiveCharacterTextSplitter(\n    chunk_size=512,\n    chunk_overlap=64,\n    separators=[\"\\n\\n\", \"\\n\", \".\", \" \", \"\"],\n)\nchunks = text_splitter.split_documents(documents)\nprint(f\"Created {len(chunks)} chunks\")\n\n# ── 2. Create Embeddings and Vector Store ──\nembedding_model = HuggingFaceEmbeddings(\n    model_name=\"sentence-transformers/all-MiniLM-L6-v2\",\n)\nvectorstore = Chroma.from_documents(\n    documents=chunks,\n    embedding=embedding_model,\n    persist_directory=\"./chroma_db\",\n)\n\n# ── 3. Create RAG Chain ──\nllm = HuggingFacePipeline.from_model_id(\n    model_id=\"microsoft/phi-2\",\n    task=\"text-generation\",\n    pipeline_kwargs={\n        \"max_new_tokens\": 256,\n        \"temperature\": 0.3,\n        \"do_sample\": False,\n    },\n)\n\nqa_chain = RetrievalQA.from_chain_type(\n    llm=llm,\n    chain_type=\"stuff\",  # \"stuff\", \"map_reduce\", \"refine\", \"map_rerank\"\n    retriever=vectorstore.as_retriever(search_kwargs={\"k\": 4}),\n    return_source_documents=True,\n)\n\n# ── 4. Query ──\nquery = \"What is the transformer architecture?\"\nresult = qa_chain({\"query\": query})\n\nprint(f\"Answer: {result['result']}\")\nprint(f\"Sources: {[d.metadata['source'] for d in result['source_documents']]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-hybrid-search-dense--sparse",
      children: "Advanced: Hybrid Search (Dense + Sparse)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# BM25 (lexical) + Dense (semantic) hybrid retrieval\nfrom langchain.retrievers import EnsembleRetriever\nfrom langchain.retrievers import BM25Retriever\n\nbm25_retriever = BM25Retriever.from_documents(chunks)\nbm25_retriever.k = 4\n\ndense_retriever = vectorstore.as_retriever(\n    search_kwargs={\"k\": 4}\n)\n\nhybrid_retriever = EnsembleRetriever(\n    retrievers=[bm25_retriever, dense_retriever],\n    weights=[0.3, 0.7],  # Weighted combination\n)\n\nresults = hybrid_retriever.get_relevant_documents(query)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(N \\cdot d \\cdot L)$$ per doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(N \\cdot d)$$ for vectors + $$O(N \\cdot L)$$ for text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embed each chunk through transformer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Retrieval (ANN)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(d \\cdot \\log N)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(N \\cdot d)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate Nearest Neighbor: logarithmic in corpus size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L^2)$$ per token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(L^2)$$ for attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as base LLM cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(d \\cdot \\log N + N_{terms} \\cdot \\log N)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$O(N \\cdot d + N \\cdot vocab)$$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both indexes maintained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why RAG is efficient:"
      }), " Retrieval scales logarithmically with corpus size (ANN indexing), and only the top-K chunks are fed to the LLM, so generation cost is constant regardless of total knowledge base size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge is always up-to-date (update index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval quality depends on chunking strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grounded answers with citations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additional infrastructure (vector DB, embed model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No retraining needed for new knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful prompt construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with proprietary/private documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure cascade: bad retrieval → bad answer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces hallucination significantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding dimension mismatch between models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable to millions of documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longer context = higher cost + latency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lost in the Middle:"
          }), " When many chunks are retrieved, the LLM focuses on the first and last chunks, ignoring the middle. Mitigation: re-rank retrieved chunks, use fewer (3-5) but higher-quality chunks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Irrelevant Retrieval:"
          }), " The embedding model retrieves chunks that are semantically similar but not actually helpful. Mitigation: use hybrid search (BM25 + dense), add metadata filtering."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stale Index:"
          }), " Documents are updated but the vector index is not rebuilt. Mitigation: incremental indexing, timestamp-based invalidation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context Window Overflow:"
          }), " Retrieved chunks + query exceed the LLM's context limit. Mitigation: smaller chunk sizes, more aggressive chunk selection, dynamic truncation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chunk Boundary Cutoff:"
          }), " Important information is split across chunks. Mitigation: use overlapping chunks (overlap = 10-20% of chunk size), sliding window chunking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " RAG grounds LLM outputs in retrieved external knowledge, dramatically reducing hallucination while keeping knowledge fresh without model retraining."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-gan-vs-vae-vs-diffusion--comparison-table",
      children: "4.9 GAN vs VAE vs Diffusion — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VAE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diffusion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core Idea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial game (G vs D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variational inference (ELBO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative denoising"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training Stability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — oscillating loss, mode collapse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — single objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High — simple MSE loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output Quality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharp, realistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blurry, smooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output Diversity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (mode collapse risk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (smooth latent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1 forward pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1 forward pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (25-1000 steps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latent Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discontinuous, hard to interpret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth, well-structured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No compact latent space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor — mode hopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent — smooth morphing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor — no meaningful interpolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (large U-Net)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Likelihood Estimates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (ELBO bound)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text Conditioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (needs auxiliary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (CVAE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural (cross-attention)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Super-resolution, real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly detection, morphing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-image, inpainting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode collapse, non-convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blurry outputs, posterior collapse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow sampling, hallucination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parameter Efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (small models)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (large U-Net)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maturity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (2014)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (2013)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recent (2020-2022)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-choose-what",
      children: "When to Choose What"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Your Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Photorealistic text-to-image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best quality, best text conditioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time generation on edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest inference by far"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth morphing between images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best latent space structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly detection on images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstruction loss as anomaly score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Super-resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharp upscaling (ESRGAN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diverse creative exploration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest diversity per prompt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreting latent factors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disentangled representations (β-VAE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limited GPU budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VAE or GAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller models, lower compute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410-interview-corner",
      children: "4.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prompt-engineering-tips",
      children: "Prompt Engineering Tips"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How do you write effective prompts for text-to-image models?"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use the SCEQ framework: Subject + Context + Environment + Style + Quality. Always pair with a negative prompt removing common artifacts (blurry, distorted, extra limbs). Use weight syntax ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(keyword:1.2)"
            }), " to emphasize critical elements. Iterate — rarely does the first prompt give the perfect result."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What is a negative prompt and why is it important?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A negative prompt tells the model what NOT to generate. Without it, common artifacts like distorted hands, bad anatomy, and blurry regions appear frequently. A well-crafted negative prompt is often more effective than tweaking the positive prompt."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How do you handle the 77-token limit in Stable Diffusion prompts?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritize the most critical information first. Use compressed phrases (\"golden hour lighting\" instead of \"lighting that occurs during the golden hour\"). For complex scenes, use regional prompting or generate multiple images and composite."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What is classifier-free guidance (CFG)?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG controls how strongly the model adheres to the prompt. Scale 1.0 = no conditioning (ignores prompt), 7-12 = standard, >15 = overly saturated, unnatural results. Lower CFG gives more creative freedom; higher CFG gives stricter adherence."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How does temperature affect LLM text generation?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temperature controls randomness. Low temperature (0.0-0.3) = deterministic, factual, repetitive. Medium (0.5-0.7) = balanced creativity. High (0.8-1.5) = creative, diverse, sometimes incoherent. For factual tasks, use low temperature. For creative writing, use higher temperature."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fine-tuning-vs-rag",
      children: "Fine-Tuning vs RAG"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fine-Tuning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hybrid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What it modifies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model weights (permanent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model input (dynamic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Knowledge freshness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale after training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always current"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always current"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data requirement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-10K examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documents + examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infrastructure cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training GPU + storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector DB + embed model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Style/tone adaptation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factual knowledge retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex production systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hallucination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significantly reduced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (rhythm, tone, style)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (model stays the same)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrain entire model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-index documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-index only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (merged weights)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+50-200ms (retrieval)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+50-200ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Answer Framework:"
      }), "\n\"When should you use fine-tuning vs RAG? Fine-tuning is best for adapting behavior, style, or output format — for example, making a model speak like Shakespeare or generate code in your company's style. RAG is best for grounding answers in factual knowledge that changes frequently — like a customer support bot that needs to reference the latest product documentation. In production, the best systems often combine both: fine-tune for tone and style, RAG for knowledge.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safety-and-responsibility",
      children: "Safety and Responsibility"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What safety measures do generative models need in production?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1) NSFW content filtering on all outputs, (2) Rate limiting to prevent abuse, (3) Usage logging with prompt, user, timestamp for audit trails, (4) Watermarking generated content, (5) Bias auditing across demographic groups, (6) Prompt injection protections for LLMs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What is model bias in generative AI?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models reflect biases in their training data. If a model is trained mostly on Western faces, it will generate poorer results for non-Western features. Mitigation: curate diverse training data, test prompts across demographics, use debiasing techniques."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How do you detect AI-generated content?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical detectors (GPTZero, Originality.ai), watermarking (latent watermarks in diffusion outputs), metadata analysis, and human review. No method is perfect — detection is an arms race."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What is prompt injection and how do you prevent it?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt injection is when a user tricks an LLM into ignoring its system prompt or performing unauthorized actions. Prevention: input sanitization, delimiter-based separation of user input, least-privilege system prompts, output filtering."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How do you handle copyright concerns with generative AI?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use licensed training data, implement style blockers (prevent mimicking living artists), add invisible watermarks, have a takedown process, and follow platform terms of service. The legal landscape is still evolving."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-questions",
      children: "Common Interview Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Explain the difference between GANs, VAEs, and diffusion models in one sentence each."
      }), "\nA: GANs pit two networks against each other for sharp outputs; VAEs learn smooth latent spaces via probabilistic encoding; diffusion models iteratively denoise random noise for state-of-the-art quality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: What is mode collapse and how do you fix it?"
      }), "\nA: Mode collapse is when a GAN generator produces limited varieties of outputs (only one \"mode\" of the data distribution). Fixes: mini-batch discrimination, spectral normalization, unrolled GANs, or Wasserstein loss."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Why are diffusion models slow at inference and how do you speed them up?"
      }), "\nA: They require 25-1000 sequential denoising passes. Speed-ups: use DPM++ or DDIM schedulers to reduce steps from 1000 to 25-50, use LCM-LoRA for 1-4 step generation, or distill into a student model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: What is the reparameterization trick and why is it needed?"
      }), "\nA: In VAEs, we sample $$z \\sim N(\\mu, \\sigma^2)$$ which is non-differentiable. The reparameterization trick rewrites this as $$z = \\mu + \\sigma \\cdot \\epsilon$$ where $$\\epsilon \\sim N(0, I)$$ — now gradients can flow through $$\\mu$$ and $$\\sigma$$ because the randomness is isolated in $$\\epsilon$$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: How would you build a production text-to-image service?"
      }), "\nA: (1) Load base diffusion model with fp16, (2) Add LoRA adapters for custom styles, (3) Use DPMSolver scheduler for faster inference, (4) Queue requests with a task broker (Redis), (5) Run multiple GPU workers, (6) Apply NSFW filter before returning, (7) Cache common prompts, (8) Log everything for audit and improvement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "411-applications-in-real-systems",
      children: "4.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dalle-3-openai",
      children: "DALL·E 3 (OpenAI)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under the hood:"
        }), " Diffusion model (unconfirmed details — likely a latent diffusion model with transformer text encoder)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key innovation:"
        }), " Tight text-image alignment via image captioning during training"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API access:"
        }), " Via OpenAI API (", (0,jsx_runtime.jsx)(_components.code, {
          children: "dalle-3"
        }), " model), integrates into ChatGPT Plus"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique features:"
        }), " Precise text rendering, strong prompt adherence, automatic prompt refinement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use cases:"
        }), " Marketing materials, concept art, product design, education"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chatgpt--gpt-4-openai",
      children: "ChatGPT / GPT-4 (OpenAI)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under the hood:"
        }), " Decoder-only transformer with RLHF (Reinforcement Learning from Human Feedback)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key innovation:"
        }), " Instruction-following, multi-turn conversation, tool use (code interpreter, browsing, DALL·E)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API access:"
        }), " Via OpenAI API, Azure OpenAI Service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique features:"
        }), " Massive world knowledge, code generation and execution, multimodal (GPT-4V)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use cases:"
        }), " Programming assistance, writing, analysis, customer support, tutoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "midjourney",
      children: "Midjourney"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under the hood:"
        }), " Modified diffusion model with proprietary architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key innovation:"
        }), " Aesthetic quality optimization — outputs are consistently more \"artistic\" than competitors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API access:"
        }), " Discord-based, standalone web app (alpha)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique features:"
        }), " Style consistency across generations, strong community, upscaling, variations, inpainting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use cases:"
        }), " Concept art, game design, architectural visualization, branding"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-copilot",
      children: "GitHub Copilot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under the hood:"
        }), " Codex model (GPT architecture fine-tuned on public code repositories)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key innovation:"
        }), " Fill-in-the-middle (FIM) training — predicts code in the middle of a file given surrounding context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API access:"
        }), " IDE extensions (VS Code, JetBrains, Neovim) and Copilot Chat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique features:"
        }), " Real-time code completion, multi-line suggestions, context-aware, supports 100+ languages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use cases:"
        }), " Software development, code generation, test writing, documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stable-diffusion-stability-ai",
      children: "Stable Diffusion (Stability AI)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Under the hood:"
        }), " Latent Diffusion Model (LDM) — diffusion in a compressed latent space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key innovation:"
        }), " Open-source, runs on consumer GPUs, highly extensible (LoRA, ControlNet, DreamBooth)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API access:"
        }), " HuggingFace Diffusers, Replicate, Stability AI API, local inference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique features:"
        }), " Full model access, fine-tuning, community ecosystem (CivitAI, automatic1111 webui)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use cases:"
        }), " Custom image generation, research, creative tools, game assets"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaknesses"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DALL·E 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best prompt following"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less creative freedom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ChatGPT/GPT-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer (decoder)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multimodal, tool use, coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prone to hallucination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$-$$$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Midjourney"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artistic quality, style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less controllable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Copilot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer (FIM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-specific, IDE integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latent Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully customizable, open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires setup, lower default quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (self-host)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "412-evaluation-of-generative-models",
      children: "4.12 Evaluation of Generative Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4121-fid-score-fréchet-inception-distance",
      children: "4.12.1 FID Score (Fréchet Inception Distance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FID measures the distance between real and generated image distributions using Inception features. Lower is better."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Conceptual FID calculation\nimport numpy as np\nfrom scipy import linalg\n\ndef calculate_fid(real_features: np.ndarray, gen_features: np.ndarray) -> float:\n    mu1, sigma1 = real_features.mean(axis=0), np.cov(real_features, rowvar=False)\n    mu2, sigma2 = gen_features.mean(axis=0), np.cov(gen_features, rowvar=False)\n\n    diff = mu1 - mu2\n    covmean, _ = linalg.sqrtm(sigma1.dot(sigma2), disp=False)\n    if np.iscomplexobj(covmean):\n        covmean = covmean.real\n\n    return diff.dot(diff) + np.trace(sigma1 + sigma2 - 2 * covmean)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-metrics",
      children: "Other Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Measures"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution similarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-∞ (lower = better)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image quality and diversity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IS (Inception Score)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classifiability + diversity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-∞ (higher = better)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAN evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLIP Score"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-image alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-100 (higher = better)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-image faithfulness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perplexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-∞ (lower = better)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BLEU / ROUGE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-gram overlap with reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1 (higher = better)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translation, summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human Evaluation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subjective quality rating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 Likert scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gold standard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠️ Warning:"
        }), " FID requires a large sample size (5,000-50,000 images) for stable results. Small sample sizes produce noisy, unreliable scores. Always report the sample size alongside the FID value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " FID score quantifies the similarity between real and generated image distributions, with lower values indicating higher quality generations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "413-responsible-generative-ai",
      children: "4.13 Responsible Generative AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "guidelines = {\n    \"Watermarking\": \"Add invisible watermarks to all generated images\",\n    \"Content safety\": \"Apply NSFW filters before returning results\",\n    \"Bias auditing\": \"Test prompts across demographics to check for bias\",\n    \"Usage logging\": \"Log all generation requests (prompt, user, timestamp)\",\n    \"Rate limiting\": \"Prevent abuse with per-user rate limits\",\n    \"Prompt injection protection\": \"Sanitize user inputs for LLM applications\",\n    \"Copyright compliance\": \"Implement style blockers and takedown processes\",\n    \"Human oversight\": \"Review flagged content before public release\",\n    \"Transparency\": \"Clearly label AI-generated content for end users\",\n}\n\nfor rule, desc in guidelines.items():\n    print(f\"{rule}: {desc}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠️ Warning:"
        }), " Generative models can amplify societal biases present in training data. Always audit outputs across demographic groups and apply content safety filters before returning results to users."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Responsible generative AI requires watermarking, NSFW filtering, bias auditing, usage logging, and rate limiting as fundamental production safeguards."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GAN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial training with generator and discriminator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharp outputs, unstable training, mode collapse risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time image synthesis, super-resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VAE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic encoder-decoder with KL regularization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth latent space, blurry outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly detection, latent space exploration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diffusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative denoising from random noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest quality, slow inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-image, inpainting, image editing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transformer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoregressive next-token prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential generation, quadratic attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text, code, music generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prompt Engineering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crafting inputs for generative models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structure determines output quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlling composition, style, and details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LoRA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-rank adaptation for fine-tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny adapter files (MB vs GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customizing models without full retrain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval-Augmented Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge-grounded outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Question answering, customer support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FID Score"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution distance between real and generated images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantitative quality metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model comparison, training monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Img2Img"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generating images from an initial image + prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strength parameter controls deviation from input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Style transfer, sketch-to-photo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Tool / Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAN Training"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "torch.nn.BCELoss"
            }), ", alternating D/G updates, Adam (lr=0.0002), label smoothing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder → mu/logvar → reparameterize → decoder + KL loss + MSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-Image"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "StableDiffusionPipeline.from_pretrained"
            }), " with DPMSolver"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image-to-Image"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "StableDiffusionImg2ImgPipeline"
            }), " with strength parameter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inpainting"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "StableDiffusionInpaintPipeline"
            }), " with mask image"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze base → inject rank-4 matrices → train adapters only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk → Embed → Store → Retrieve → Augment → Generate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subject + Context + Environment + Style + Quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FID score, CLIP score, human evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSFW filter, watermarking, rate limiting, audit logging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GANs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data augmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synthetic data generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic content creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generative modeling research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VAEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dimensionality reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Representation learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diffusion Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text-to-image pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scientific image generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marketing content creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical imaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transformers for Gen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation (Copilot)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chatbots, writing tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM architecture research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Experiment design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-facing generators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled generation studies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA Fine-Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom model deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain adaptation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Style customization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient transfer learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge-grounded AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document Q&A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer support bots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grounded generation research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Img2Img"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Style transfer services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data enrichment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Photo editing apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Art restoration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inpainting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content removal tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data cleaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image repair features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archaeological reconstruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FID Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality benchmarking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A/B testing pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paper comparisons"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GANs"
        }), " use adversarial training (generator vs discriminator) for sharp image synthesis but are hard to train with mode collapse risks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VAEs"
        }), " provide stable training and smooth latent spaces suitable for interpolation and anomaly detection, though outputs are blurrier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diffusion models"
        }), " (Stable Diffusion) produce state-of-the-art results with flexible text conditioning but require 25-1000 sequential denoising steps at inference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transformers"
        }), " (GPT, Codex) generate text and code auto-regressively — one token at a time — enabling flexible generation across domains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prompt engineering"
        }), " is critical: structure prompts as subject + context + environment + style + quality, and always include a negative prompt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LoRA"
        }), " adapts large models efficiently by training tiny rank-decomposition matrices (MB vs GB per variant)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAG"
        }), " reduces hallucination by grounding LLM outputs in retrieved external knowledge."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate generative models with FID, CLIP score, and human evaluation; always apply safety filters in production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ecosystem (HuggingFace Diffusers, LoRA, ControlNet, DreamBooth, LangChain) enables building production systems with custom domains."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the main advantage of diffusion models over GANs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Diffusion models train faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Diffusion models produce higher-quality, more diverse images with better text conditioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Diffusion models do not require GPUs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Diffusion models always produce the same output for a given prompt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B."
          }), " Diffusion models produce state-of-the-art quality with greater diversity and flexible text conditioning, though they are slower at inference time than GANs."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " In the VAE loss function, what does the KL divergence term do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Measures how well the decoder reconstructs the input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Regularizes the latent distribution toward a standard normal, enabling smooth interpolation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Penalizes the discriminator for incorrect classifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Measures image sharpness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B."
          }), " The KL divergence term encourages the encoded latent distribution to be close to a standard normal, which regularizes the latent space and enables meaningful interpolation."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which of the following is NOT one of the five prompt components recommended for effective text-to-image prompts?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Subject"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Price"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "C."
          }), " The five recommended components are Subject, Action/Context, Environment, Style/Medium, and Quality — \"price\" is not a prompt component."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What does the reparameterization trick enable in VAEs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Faster training through batch normalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Gradient flow through the random sampling operation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Adversarial training without mode collapse"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Text conditioning for image generation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B."
          }), " The reparameterization trick rewrites z = μ + σ·ε so that gradients can flow through μ and σ while the randomness is isolated in ε ∼ N(0, I)."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the primary benefit of using LoRA over full fine-tuning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Higher quality results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Storage is 1000× smaller (MB vs GB) and training is faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. LoRA models do not need GPUs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. LoRA works without any training data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B."
          }), " LoRA trains only tiny rank-decomposition matrices (∼0.01% of total parameters), reducing storage from GB to MB and training from days to hours."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " In a RAG pipeline, what is the main reason for chunking documents?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. To compress the documents for storage efficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. To fit relevant context within the LLM's context window limit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. To encrypt the documents for security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. To improve the embedding model's accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "B."
          }), " Chunking splits documents into segments small enough to fit within the LLM's context window (along with the query) while ensuring retrieval granularity is appropriate."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trains a DCGAN on CIFAR-10"
          }), " (32×32 color images) for 100 epochs. Generate and save 16 sample images per epoch to visualize training progress. Monitor the D/G loss ratio and note when mode collapse occurs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a VAE for anomaly detection:"
          }), " Train on normal MNIST digits, encode/decode test images, and flag those with high reconstruction loss (>95th percentile). Compare performance with a simple autoencoder."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Stable Diffusion with a LoRA adapter"
          }), " to generate images in a specific artistic style (e.g., Van Gogh, anime, cyberpunk). Train the LoRA on 20-30 images and compare quality vs. prompt-only style specification."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a RAG pipeline:"
          }), " Create a knowledge base from 10 technical documents. Implement chunking (256, 512, 1024 token chunks) and compare retrieval quality. Measure answer accuracy with and without RAG for 20 factual questions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deploy a text-to-image service"
          }), " with FastAPI + Stable Diffusion + NSFW filter. Support both sync (wait for result) and async (return task ID, poll for result) endpoints. Add rate limiting and usage logging."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare prompt strategies:"
          }), " Generate the same subject with 5 different prompt structures (no prompt, subject-only, full SCEQ, SCEQ+negative, SCEQ+negative+weights). Rate quality and document findings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement the KV cache"
          }), " optimization for a small transformer model. Compare generation speed with and without caching for sequences of length 50, 100, 200, and 500 tokens. Plot the speedup curve."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fine-tune vs RAG comparison:"
          }), " For a customer support dataset, implement both approaches:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fine-tune a small LLM (Phi-2) on Q&A pairs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Build a RAG pipeline over the same data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare response quality, latency, training cost, and maintenance overhead"
          }), "\n"]
        }), "\n"]
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