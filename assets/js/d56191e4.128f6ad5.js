"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[18424],{

/***/ 61780
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_19_capstone_projects_02_resume_ats_analyzer_md_d56_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-19-capstone-projects-02-resume-ats-analyzer-md-d56.json
const site_docs_courses_ai_engineering_placement_19_capstone_projects_02_resume_ats_analyzer_md_d56_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/capstone-projects/02-resume-ats-analyzer","title":"Resume ATS Analyzer","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer.md","sourceDirName":"courses/ai-engineering-placement/19-capstone-projects","slug":"/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer","permalink":"/ai-engineering-journey/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":218,"frontMatter":{"id":"02-resume-ats-analyzer","slug":"/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer","title":"Resume ATS Analyzer","sidebar_label":"Resume ATS Analyzer","sidebar_position":218},"sidebar":"coursesSidebar","previous":{"title":"House Price Prediction API","permalink":"/ai-engineering-journey/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api"},"next":{"title":"Enterprise RAG Platform","permalink":"/ai-engineering-journey/ai-engineering-placement/19-capstone-projects/03-enterprise-rag-platform"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer.md


const frontMatter = {
	id: '02-resume-ats-analyzer',
	slug: '/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer',
	title: 'Resume ATS Analyzer',
	sidebar_label: 'Resume ATS Analyzer',
	sidebar_position: 218
};
const contentTitle = 'Resume ATS Analyzer';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Project Roadmap",
  "id": "project-roadmap",
  "level": 2
}, {
  "value": "2.1 Resume Parsing",
  "id": "21-resume-parsing",
  "level": 2
}, {
  "value": "2.2 LLM Analysis",
  "id": "22-llm-analysis",
  "level": 2
}, {
  "value": "2.3 Scoring System",
  "id": "23-scoring-system",
  "level": 2
}, {
  "value": "2.4 Web UI &amp; Deployment",
  "id": "24-web-ui--deployment",
  "level": 2
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
  "value": "Q&amp;A",
  "id": "qa",
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
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "resume-ats-analyzer",
        children: "Resume ATS Analyzer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse PDF and DOCX resumes into structured text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract key sections: education, experience, skills, projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze resume against job descriptions using LLM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement scoring and feedback generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a web UI with FastAPI + Jinja2 templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy the resume analyzer as a SaaS application"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capstone projects prove you can build complete AI systems. From prediction APIs to enterprise RAG platforms, these projects demonstrate end-to-end skills. This module guides you through 5 portfolio-worthy projects."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding resume ats analyzer is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how resume ats analyzer works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resume Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDF/DOCX extraction, section detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Education, experience, skills, projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match scoring, keyword extraction, gap analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scoring System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATS compatibility, keyword match, format score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actionable suggestions, bullet point rewrites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web UI & Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FastAPI + Jinja2, file upload, PDF report"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-roadmap",
      children: "Project Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Resume Upload] --> B[PDF/DOCX Parser]\n    B --> C[Section Extractor]\n    C --> D[LLM Analyzer]\n    D --> E[Scoring Engine]\n    D --> F[Feedback Generator]\n    E --> G[Web Dashboard]\n    F --> G\n    G --> H[PDF Report]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-resume-parsing",
      children: "2.1 Resume Parsing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse resumes from PDF and DOCX formats, extracting raw text while preserving layout information for section detection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\nimport json\nfrom typing import List, Optional, Dict, Any, Tuple\nfrom dataclasses import dataclass, field\nfrom enum import Enum\n\nclass SectionType(Enum):\n    SUMMARY = \"summary\"\n    EDUCATION = \"education\"\n    EXPERIENCE = \"experience\"\n    SKILLS = \"skills\"\n    PROJECTS = \"projects\"\n    CERTIFICATIONS = \"certifications\"\n    PUBLICATIONS = \"publications\"\n    OTHER = \"other\"\n\n@dataclass\nclass ResumeSection:\n    \"\"\"A parsed section from a resume.\"\"\"\n    section_type: SectionType\n    title: str\n    content: str\n    items: List[Dict[str, Any]] = field(default_factory=list)\n    confidence: float = 1.0\n\n@dataclass\nclass ParsedResume:\n    \"\"\"Complete parsed resume data.\"\"\"\n    raw_text: str\n    sections: List[ResumeSection]\n    email: Optional[str] = None\n    phone: Optional[str] = None\n    linkedin: Optional[str] = None\n    github: Optional[str] = None\n    name: Optional[str] = None\n\nclass ResumeParser:\n    \"\"\"Parse resumes from different file formats.\"\"\"\n\n    @staticmethod\n    def parse_pdf(file_path: str) -> str:\n        \"\"\"Extract text from PDF file.\"\"\"\n        try:\n            import PyPDF2\n            with open(file_path, 'rb') as f:\n                reader = PyPDF2.PdfReader(f)\n                text = \"\\n\".join(page.extract_text() for page in reader.pages)\n            return text\n        except ImportError:\n            try:\n                import pdfminer\n                from pdfminer.high_level import extract_text\n                return extract_text(file_path)\n            except ImportError:\n                raise ImportError(\"Install PyPDF2 or pdfminer.six for PDF parsing\")\n\n    @staticmethod\n    def parse_docx(file_path: str) -> str:\n        \"\"\"Extract text from DOCX file.\"\"\"\n        from docx import Document\n        doc = Document(file_path)\n        return \"\\n\".join(p.text for p in doc.paragraphs)\n\n    @staticmethod\n    def extract_contact_info(text: str) -> Dict[str, Optional[str]]:\n        \"\"\"Extract email, phone, LinkedIn, and GitHub from text.\"\"\"\n        info = {\"email\": None, \"phone\": None, \"linkedin\": None, \"github\": None}\n\n        email_pattern = r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b'\n        emails = re.findall(email_pattern, text)\n        if emails:\n            info[\"email\"] = emails[0]\n\n        phone_pattern = r'(\\+?\\d{1,3}[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}'\n        phones = re.findall(phone_pattern, text)\n        if phones:\n            info[\"phone\"] = phones[0]\n\n        linkedin_pattern = r'(?:https?://)?(?:www\\.)?linkedin\\.com/in/[\\w-]+/?'\n        linkedin = re.findall(linkedin_pattern, text)\n        if linkedin:\n            info[\"linkedin\"] = linkedin[0]\n\n        github_pattern = r'(?:https?://)?(?:www\\.)?github\\.com/[\\w-]+/?'\n        github = re.findall(github_pattern, text)\n        if github:\n            info[\"github\"] = github[0]\n\n        return info\n\nclass SectionDetector:\n    \"\"\"Detect and extract sections from resume text.\"\"\"\n\n    SECTION_PATTERNS = {\n        SectionType.SUMMARY: [\n            r'(?i)(professional\\s+)?summary',\n            r'(?i)profile',\n            r'(?i)objective',\n            r'(?i)about\\s+me',\n        ],\n        SectionType.EDUCATION: [\n            r'(?i)education',\n            r'(?i)academic\\s+background',\n            r'(?i)qualifications',\n        ],\n        SectionType.EXPERIENCE: [\n            r'(?i)experience',\n            r'(?i)work\\s+history',\n            r'(?i)employment',\n            r'(?i)professional\\s+experience',\n        ],\n        SectionType.SKILLS: [\n            r'(?i)skills',\n            r'(?i)technical\\s+skills',\n            r'(?i)competencies',\n            r'(?i)technologies',\n        ],\n        SectionType.PROJECTS: [\n            r'(?i)projects',\n            r'(?i)key\\s+projects',\n            r'(?i)personal\\s+projects',\n        ],\n        SectionType.CERTIFICATIONS: [\n            r'(?i)certifications?',\n            r'(?i)licenses?',\n            r'(?i)credentials?',\n        ],\n        SectionType.PUBLICATIONS: [\n            r'(?i)publications?',\n            r'(?i)papers?',\n            r'(?i)research',\n        ],\n    }\n\n    def detect_sections(self, text: str) -> List[ResumeSection]:\n        \"\"\"Detect and extract sections from resume text.\"\"\"\n        lines = text.split('\\n')\n        sections = []\n        current_section = None\n        current_content = []\n\n        for line in lines:\n            section_type = self._match_section(line.strip())\n            if section_type:\n                if current_section and current_content:\n                    sections.append(ResumeSection(\n                        section_type=current_section,\n                        title=current_section.value.title(),\n                        content='\\n'.join(current_content).strip(),\n                    ))\n                current_section = section_type\n                current_content = []\n            elif current_section:\n                current_content.append(line)\n\n        if current_section and current_content:\n            sections.append(ResumeSection(\n                section_type=current_section,\n                title=current_section.value.title(),\n                content='\\n'.join(current_content).strip(),\n            ))\n\n        return sections\n\n    def _match_section(self, line: str) -> Optional[SectionType]:\n        for section_type, patterns in self.SECTION_PATTERNS.items():\n            for pattern in patterns:\n                if re.match(pattern, line.strip()):\n                    return section_type\n        return None\n\nclass ExperienceParser:\n    \"\"\"Parse individual experience entries from section text.\"\"\"\n\n    @staticmethod\n    def parse_experience_block(text: str) -> List[Dict[str, Any]]:\n        \"\"\"Parse experience section into individual job entries.\"\"\"\n        entries = []\n        blocks = re.split(r'\\n\\s*\\n', text)\n\n        for block in blocks:\n            lines = [l.strip() for l in block.split('\\n') if l.strip()]\n            if len(lines) < 2:\n                continue\n\n            entry = {\n                \"title\": lines[0],\n                \"organization\": lines[1] if len(lines) > 1 else \"\",\n                \"dates\": \"\",\n                \"description\": [],\n            }\n\n            for line in lines[2:]:\n                date_pattern = r'\\b(19|20)\\d{2}\\s*(?:-|–|to)\\s*(?:present|(?:19|20)\\d{2})\\b'\n                if re.match(date_pattern, line, re.IGNORECASE):\n                    entry[\"dates\"] = line\n                elif line.startswith(('•', '-', '*', '→')):\n                    entry[\"description\"].append(line.lstrip('•-*→ '))\n                else:\n                    entry[\"description\"].append(line)\n\n            entries.append(entry)\n\n        return entries\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-llm-analysis",
      children: "2.2 LLM Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use LLM to analyze resume against job description, extracting matching skills, experience gaps, and improvement suggestions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ResumeAnalyzer:\n    \"\"\"Analyze resume against job description using LLM.\"\"\"\n\n    def __init__(self, llm_api_func=None):\n        self.llm = llm_api_func or self._mock_llm\n\n    def _mock_llm(self, prompt: str, model: str = \"gpt-3.5-turbo\") -> str:\n        return json.dumps({\n            \"match_score\": 75,\n            \"matching_skills\": [\"Python\", \"FastAPI\", \"Machine Learning\"],\n            \"missing_skills\": [\"Docker\", \"Kubernetes\"],\n            \"experience_gaps\": [\"No cloud deployment experience mentioned\"],\n            \"suggestions\": [\"Add cloud certifications\", \"Quantify achievements\"],\n        })\n\n    def analyze_match(self, resume_text: str, jd_text: str) -> Dict[str, Any]:\n        \"\"\"Analyze resume match against job description.\"\"\"\n        prompt = f\"\"\"\n        Analyze this resume against the job description.\n        Return JSON with: match_score (0-100), matching_skills, missing_skills,\n        experience_gaps, suggestions.\n\n        Job Description:\n        {jd_text}\n\n        Resume:\n        {resume_text}\n        \"\"\"\n        response = self.llm(prompt)\n        try:\n            return json.loads(response)\n        except json.JSONDecodeError:\n            return {\"match_score\": 0, \"error\": \"Failed to parse LLM response\"}\n\n    def extract_keywords(self, text: str) -> List[str]:\n        \"\"\"Extract key technical keywords from text.\"\"\"\n        prompt = f\"Extract all technical keywords from this text. Return as JSON list:\\n\\n{text}\"\n        response = self.llm(prompt)\n        try:\n            return json.loads(response)\n        except json.JSONDecodeError:\n            return []\n\n    def generate_feedback(self, resume_text: str, jd_text: str) -> Dict[str, Any]:\n        \"\"\"Generate detailed actionable feedback.\"\"\"\n        prompt = f\"\"\"\n        Provide detailed resume improvement suggestions based on this JD.\n        Focus on: bullet point rewriting, missing keywords, formatting issues,\n        quantified achievements. Return as JSON.\n\n        Resume: {resume_text}\n        Job Description: {jd_text}\n        \"\"\"\n        response = self.llm(prompt)\n        try:\n            return json.loads(response)\n        except json.JSONDecodeError:\n            return {\"suggestions\": [], \"rewrites\": []}\n\nclass KeywordMatcher:\n    \"\"\"Keyword-based matching between resume and job description.\"\"\"\n\n    def __init__(self):\n        self.skill_synonyms = {\n            \"python\": [\"python\", \"python3\", \"cpython\"],\n            \"machine learning\": [\"ml\", \"machine learning\", \"deep learning\", \"ai\"],\n            \"docker\": [\"docker\", \"containerization\", \"containers\"],\n            \"kubernetes\": [\"kubernetes\", \"k8s\", \"orchestration\"],\n            \"sql\": [\"sql\", \"mysql\", \"postgresql\", \"postgres\", \"database\"],\n            \"aws\": [\"aws\", \"amazon web services\", \"ec2\", \"s3\", \"lambda\"],\n            \"fastapi\": [\"fastapi\", \"fast api\", \"starlette\"],\n        }\n\n    def compute_keyword_match(self, resume_text: str, jd_text: str) -> Dict[str, Any]:\n        \"\"\"Compute keyword-based match score between resume and JD.\"\"\"\n        jd_lower = jd_text.lower()\n        resume_lower = resume_text.lower()\n\n        jd_keywords = set()\n        for skill, synonyms in self.skill_synonyms.items():\n            if any(syn in jd_lower for syn in synonyms):\n                jd_keywords.add(skill)\n\n        matched = []\n        missing = []\n        for keyword in jd_keywords:\n            synonyms = self.skill_synonyms.get(keyword, [keyword])\n            if any(syn in resume_lower for syn in synonyms):\n                matched.append(keyword)\n            else:\n                missing.append(keyword)\n\n        score = len(matched) / len(jd_keywords) * 100 if jd_keywords else 0\n\n        return {\n            \"keyword_score\": round(score, 1),\n            \"matched_keywords\": matched,\n            \"missing_keywords\": missing,\n            \"total_jd_keywords\": len(jd_keywords),\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-scoring-system",
      children: "2.3 Scoring System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Score resumes across multiple dimensions: ATS compatibility, keyword match, formatting quality, and section completeness."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ATSScorer:\n    \"\"\"Compute ATS compatibility score for a resume.\"\"\"\n\n    def __init__(self):\n        self.ats_rules = {\n            \"has_email\": 5,\n            \"has_phone\": 5,\n            \"has_linkedin\": 5,\n            \"has_education_section\": 10,\n            \"has_experience_section\": 15,\n            \"has_skills_section\": 15,\n            \"has_projects_section\": 10,\n            \"uses_bullet_points\": 10,\n            \"has_quantified_achievements\": 15,\n            \"length_appropriate\": 5,\n            \"no_tables\": 5,\n        }\n\n    def score_format(self, parsed: ParsedResume) -> Dict[str, Any]:\n        \"\"\"Score resume format for ATS compatibility.\"\"\"\n        scores = {}\n        text = parsed.raw_text\n\n        scores[\"has_email\"] = self.ats_rules[\"has_email\"] if parsed.email else 0\n        scores[\"has_phone\"] = self.ats_rules[\"has_phone\"] if parsed.phone else 0\n        scores[\"has_linkedin\"] = self.ats_rules[\"has_linkedin\"] if parsed.linkedin else 0\n\n        section_types = {s.section_type for s in parsed.sections}\n        scores[\"has_education_section\"] = self.ats_rules[\"has_education_section\"] if SectionType.EDUCATION in section_types else 0\n        scores[\"has_experience_section\"] = self.ats_rules[\"has_experience_section\"] if SectionType.EXPERIENCE in section_types else 0\n        scores[\"has_skills_section\"] = self.ats_rules[\"has_skills_section\"] if SectionType.SKILLS in section_types else 0\n        scores[\"has_projects_section\"] = self.ats_rules[\"has_projects_section\"] if SectionType.PROJECTS in section_types else 0\n\n        bullet_count = len(re.findall(r'^[•\\-*→]', text, re.MULTILINE))\n        scores[\"uses_bullet_points\"] = min(self.ats_rules[\"uses_bullet_points\"], bullet_count // 2)\n\n        number_patterns = re.findall(r'\\b\\d+[%x]\\b|\\b\\d+\\.?\\d*\\s*(?:%|users|customers|revenue|orders|requests|times|fold)\\b', text, re.IGNORECASE)\n        scores[\"has_quantified_achievements\"] = min(self.ats_rules[\"has_quantified_achievements\"], len(number_patterns) * 3)\n\n        word_count = len(text.split())\n        scores[\"length_appropriate\"] = self.ats_rules[\"length_appropriate\"] if 300 <= word_count <= 800 else 0\n\n        has_tables = bool(re.search(r'\\|.*\\|.*\\|', text))\n        scores[\"no_tables\"] = self.ats_rules[\"no_tables\"] if not has_tables else 0\n\n        total = sum(scores.values())\n        max_score = sum(self.ats_rules.values())\n\n        return {\n            \"format_score\": round(total / max_score * 100, 1),\n            \"breakdown\": scores,\n            \"max_possible\": max_score,\n        }\n\n    def suggest_improvements(self, scores: Dict[str, int]) -> List[str]:\n        \"\"\"Generate improvement suggestions based on score breakdown.\"\"\"\n        suggestions = []\n        zero_score_items = [k for k, v in scores.items() if v == 0]\n        for item in zero_score_items:\n            suggestion_map = {\n                \"has_email\": \"Add your email address to the resume header\",\n                \"has_phone\": \"Include a contact phone number\",\n                \"has_linkedin\": \"Add your LinkedIn profile URL\",\n                \"has_education_section\": \"Add an Education section\",\n                \"has_experience_section\": \"Include a Work Experience section\",\n                \"has_skills_section\": \"Add a Skills section with technical keywords\",\n                \"has_projects_section\": \"Include a Projects section to showcase work\",\n                \"uses_bullet_points\": \"Use bullet points instead of paragraphs\",\n                \"has_quantified_achievements\": \"Add quantified achievements (%, \\$, counts)\",\n                \"length_appropriate\": f\"Adjust resume length (300-800 words recommended)\",\n                \"no_tables\": \"Remove table formatting — ATS cannot parse it\",\n            }\n            suggestions.append(suggestion_map.get(item, f\"Improve: {item}\"))\n        return suggestions\n\nclass CompleteScoringEngine:\n    \"\"\"Combined scoring engine for resume analysis.\"\"\"\n\n    def __init__(self):\n        self.ats_scorer = ATSScorer()\n        self.keyword_matcher = KeywordMatcher()\n\n    def score(self, parsed: ParsedResume, jd_text: str) -> Dict[str, Any]:\n        \"\"\"Compute comprehensive resume score.\"\"\"\n        format_score = self.ats_scorer.score_format(parsed)\n        keyword_match = self.keyword_matcher.compute_keyword_match(parsed.raw_text, jd_text)\n\n        sections_count = len(parsed.sections)\n        completeness_score = min(sections_count / 5 * 100, 100)\n\n        weighted_score = (\n            format_score[\"format_score\"] * 0.25 +\n            keyword_match[\"keyword_score\"] * 0.40 +\n            completeness_score * 0.15 +\n            0.20  # LLM score placeholder\n        )\n\n        return {\n            \"overall_score\": round(weighted_score, 1),\n            \"format_score\": format_score[\"format_score\"],\n            \"keyword_match_score\": keyword_match[\"keyword_score\"],\n            \"completeness_score\": completeness_score,\n            \"format_breakdown\": format_score[\"breakdown\"],\n            \"keyword_details\": keyword_match,\n            \"suggestions\": self.ats_scorer.suggest_improvements(format_score[\"breakdown\"]),\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-web-ui--deployment",
      children: "2.4 Web UI & Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a web application with file upload, analysis display, and PDF report generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI, UploadFile, File, Form, HTTPException\nfrom fastapi.responses import HTMLResponse, FileResponse\nfrom fastapi.staticfiles import StaticFiles\nfrom fastapi.templating import Jinja2Templates\nfrom starlette.requests import Request\nimport tempfile\nimport os\n\napp = FastAPI(title=\"Resume ATS Analyzer\", version=\"1.0.0\")\ntemplates = Jinja2Templates(directory=\"templates\")\napp.mount(\"/static\", StaticFiles(directory=\"static\"), name=\"static\")\n\nclass ResumeAnalyzerApp:\n    \"\"\"Web application for resume analysis.\"\"\"\n\n    def __init__(self):\n        self.parser = ResumeParser()\n        self.section_detector = SectionDetector()\n        self.analyzer = ResumeAnalyzer()\n        self.scorer = CompleteScoringEngine()\n        self.analysis_history: List[Dict[str, Any]] = []\n\n    async def process_resume(self, file: UploadFile, jd_text: str) -> Dict[str, Any]:\n        \"\"\"Process uploaded resume and return analysis.\"\"\"\n        suffix = os.path.splitext(file.filename)[1].lower()\n        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:\n            content = await file.read()\n            tmp.write(content)\n            tmp_path = tmp.name\n\n        try:\n            if suffix == '.pdf':\n                raw_text = ResumeParser.parse_pdf(tmp_path)\n            elif suffix == '.docx':\n                raw_text = ResumeParser.parse_docx(tmp_path)\n            else:\n                raw_text = content.decode('utf-8')\n        except Exception as e:\n            raise HTTPException(400, f\"Failed to parse file: {e}\")\n        finally:\n            os.unlink(tmp_path)\n\n        contact_info = ResumeParser.extract_contact_info(raw_text)\n        sections = self.section_detector.detect_sections(raw_text)\n\n        parsed = ParsedResume(\n            raw_text=raw_text,\n            sections=sections,\n            **contact_info,\n        )\n\n        analysis = self.analyzer.analyze_match(raw_text, jd_text)\n        scores = self.scorer.score(parsed, jd_text)\n\n        result = {\n            \"filename\": file.filename,\n            \"contact\": contact_info,\n            \"sections\": [{\"type\": s.section_type.value, \"length\": len(s.content)} for s in sections],\n            \"analysis\": analysis,\n            \"scores\": scores,\n            \"section_count\": len(sections),\n            \"word_count\": len(raw_text.split()),\n        }\n\n        self.analysis_history.append(result)\n        return result\n\n    def get_history(self) -> List[Dict[str, Any]]:\n        return self.analysis_history[-10:]\n\nanalyzer_app = ResumeAnalyzerApp()\n\n@app.get(\"/\", response_class=HTMLResponse)\nasync def home(request: Request):\n    return templates.TemplateResponse(\"index.html\", {\"request\": request})\n\n@app.post(\"/analyze\")\nasync def analyze_resume(\n    request: Request,\n    file: UploadFile = File(...),\n    job_description: str = Form(...),\n):\n    result = await analyzer_app.process_resume(file, job_description)\n    return templates.TemplateResponse(\n        \"results.html\",\n        {\"request\": request, \"result\": result},\n    )\n\n@app.get(\"/api/analyze\")\nasync def analyze_resume_api(file: UploadFile = File(...),\n                              job_description: str = Form(...)):\n    result = await analyzer_app.process_resume(file, job_description)\n    return result\n\nclass PDFReportGenerator:\n    \"\"\"Generate PDF report of resume analysis.\"\"\"\n\n    def __init__(self):\n        pass\n\n    def generate_report(self, result: Dict[str, Any]) -> bytes:\n        \"\"\"Generate a downloadable PDF report.\"\"\"\n        try:\n            from reportlab.lib.pagesizes import A4\n            from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table\n            from reportlab.lib.styles import getSampleStyleSheet\n            from io import BytesIO\n\n            buffer = BytesIO()\n            doc = SimpleDocTemplate(buffer, pagesize=A4)\n            styles = getSampleStyleSheet()\n            elements = []\n\n            elements.append(Paragraph(\"Resume ATS Analysis Report\", styles['Title']))\n            elements.append(Spacer(1, 20))\n\n            scores = result.get(\"scores\", {})\n            elements.append(Paragraph(f\"Overall Score: {scores.get('overall_score', 'N/A')}%\", styles['Heading2']))\n            elements.append(Paragraph(f\"Format Score: {scores.get('format_score', 'N/A')}%\", styles['Normal']))\n            elements.append(Paragraph(f\"Keyword Match: {scores.get('keyword_match_score', 'N/A')}%\", styles['Normal']))\n\n            elements.append(Spacer(1, 20))\n            elements.append(Paragraph(\"Improvement Suggestions\", styles['Heading2']))\n            for suggestion in scores.get(\"suggestions\", []):\n                elements.append(Paragraph(f\"• {suggestion}\", styles['Normal']))\n\n            doc.build(elements)\n            buffer.seek(0)\n            return buffer.getvalue()\n        except ImportError:\n            return json.dumps(result, indent=2).encode('utf-8')\n\nclass BatchAnalyzer:\n    \"\"\"Analyze multiple resumes against a single JD.\"\"\"\n\n    def __init__(self):\n        self.analyzer = ResumeAnalyzerApp()\n\n    async def batch_analyze(self, files: List[UploadFile], jd_text: str) -> List[Dict[str, Any]]:\n        \"\"\"Process multiple resumes and rank them.\"\"\"\n        results = []\n        for file in files:\n            result = await self.analyzer.process_resume(file, jd_text)\n            results.append(result)\n\n        results.sort(key=lambda r: r.get(\"scores\", {}).get(\"overall_score\", 0), reverse=True)\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Resume ATS Analyzer project implements a complete resume evaluation system. PDF and DOCX parsing extract text while preserving section structure. The LLM-based analyzer compares resumes against job descriptions,.\nidentifying matching and missing skills. The scoring engine evaluates ATS compatibility, keyword matching, and section completeness. The web UI provides an intuitive interface for.\nuploading, analyzing, and reviewing results. This project demonstrates full-stack AI development with document parsing, LLM integration, and web deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handle multiple file formats with fallback parsers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try PyPDF2 first, fall back to pdfminer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache LLM responses for identical resume+JD pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Redis or in-memory cache with checksums"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Score on multiple dimensions, not just keyword match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine format, keyword, and LLM scores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate PDF reports for download"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ReportLab with styled templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch processing for multi-resume comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by overall score and highlight top matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always show actionable suggestions, not just scores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tell users exactly what to change and why"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you parse different resume formats (PDF, DOCX) while preserving section structure?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Resume parsing requires format-specific handling: (1) PDF — use PyPDF2 or pdfminer.six for text extraction. Pdfminer provides layout analysis (character positions,.\nfont sizes) which helps detect section headers by font size changes. For scanned PDFs (images), use OCR with Tesseract (pytesseract) or.\nAWS Textract. (2) DOCX — use python-docx which natively parses paragraphs, runs, and styles. Section headers are detectable by style name (\"Heading 1\",.\n\"Heading 2\") or font properties (bold, larger font size). (3) Fallback chain — try python-docx first for DOCX, then PyPDF2 for.\nPDF, then pdfminer for PDF with layout, then OCR as last resort. (4) Section detection — use regex patterns for standard headers (\"Education\",.\n\"Experience\", \"Skills\", \"Projects\") plus font/size heuristics for non-standard formats."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you calculate ATS compatibility score for a resume?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ATS compatibility scoring across dimensions: (1) Format score (30%) — check for tables (negative), images (negative), columns (negative), standard section headers (positive),.\nappropriate length (300-800 words, positive). (2) Keyword score (40%) — compare resume against target job description: % of JD keywords present in resume,.\nweighted by keyword importance (skills > soft skills). Use TF-IDF or embedding similarity. (3) Section completeness (15%) — presence of Education,.\nExperience, Skills, Projects, Certifications sections with appropriate content. (4) Quantification score (10%) — presence of metrics (%, $, numbers) in experience bullets. (5) Formatting score (5%) — consistent date formats,.\nbullet style, font usage. The total score is a weighted sum (0-100), with >80 being excellent ATS compatibility. Provide specific recommendations for.\neach low-scoring area."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you use LLMs to compare a resume against a job description effectively?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM-based resume-JD comparison: (1) Prompt engineering — provide the job description, resume text (with section labels), and ask the LLM to: identify matching skills,.\nidentify missing skills, evaluate overall fit (Strong/Moderate/Weak), and suggest specific improvements. (2) Structured output — request JSON format: `{\"matching_skills\": [...], \"missing_skills\": [...],.\n\"fit_score\": \"Strong\", \"suggestions\": [...]}`. (3) Semantic matching — the LLM understands synonyms and context: \"led team of 5 engineers\" matches \"team leadership\" requirement even without the exact phrase. (4) Multi-angle evaluation — have the LLM evaluate separately for.\nhard skills, soft skills, and experience level, then aggregate. (5) Cost optimization — use GPT-3.5-turbo for initial screening, GPT-4 for detailed analysis of shortlisted candidates. Cache results for.\nidentical job descriptions."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you generate actionable improvement suggestions for resume optimization?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Actionable suggestions should be specific and prioritized: (1) Missing keywords — \"Add these 7 skills from the JD that are missing: Python,.\nPyTorch, AWS, Docker, PostgreSQL, GraphQL, Redis.\" (2) Weak bullet points — rewrite weak bullets using the STAR format with metrics. Original: \"Responsible for.\nimproving system performance.\" → Improved: \"Optimized database queries reducing API latency by 40%, serving 100K+ daily requests.\" (3) Section gaps — \"Add a Projects section showcasing 2-3 relevant projects with tech stack and.\nimpact.\" (4) Format issues — \"Your resume uses a two-column layout which ATS systems cannot parse. Convert to a single-column format.\" (5) Quantification opportunities — \"Add metrics to 3 experience bullets that lack numbers.\" Score each suggestion by impact (high/medium/low) to help the user prioritize changes."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you prevent bias in AI-powered resume screening?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bias prevention strategies: (1) PII redaction — automatically remove name, gender indicators, age (graduation dates), ethnicity indicators, and even university names from the resume before analysis. (2) Balanced evaluation — if using an LLM,.\nexplicitly instruct it to evaluate skills and experience only, ignoring any demographic signals. (3) Multiple evaluators — use multiple LLM models and.\naverage scores to reduce individual model biases. (4) Regular auditing — track score distributions across demographic groups if possible. Flag if certain groups receive systematically lower scores. (5) Transparency — show candidates which factors influenced their score. (6) Human oversight — flag resume-score anomalies (e.g.,.\nhigh-skills candidate with low score) for manual review. (7) Diverse training — ensure evaluation models are fine-tuned on diverse examples. Bias in hiring AI is a regulatory risk under EEOC guidelines."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you scale resume analysis for enterprise-level batch processing?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enterprise scaling: (1) Async processing — use Celery or Redis Queue for background job processing. When a user uploads a resume,.\nthe request returns immediately with a job ID, and the results are fetched asynchronously. (2) Batch LLM calls — group multiple resume analyses into one API call with a prompt that lists multiple resumes + one JD,.\ncomparing all at once. (3) Caching — cache LLM results for identical JD+resume pairs using content hash keys. (4) Cost management — use GPT-3.5-turbo for.\ninitial screening (cost ~$0.001/resume), escalate to GPT-4 only for shortlisted candidates ($0.03/resume). (5) Parallel processing — process multiple resumes in parallel using concurrent.futures or.\nasyncio with rate limiting. (6) Horizontal scaling — add more worker instances based on queue depth. Target: 1000+ resumes processed per hour at <$10/hour cost."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle encrypted or password-protected PDF resumes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Handling encrypted PDFs: (1) Detection — use PyPDF2's `PdfReader.is_encrypted` property. (2) Automatic decryption — try common empty passwords (\"\"), then \"password\",.\nthen the filename without extension. (3) User prompt — if automatic decryption fails, return a clear error asking the user to upload an unencrypted version. (4) Alternative — if the file cannot be decrypted,.\nconvert PDF pages to images using pdf2image and run OCR. This bypasses encryption but loses formatting information. (5) Security — never store the password;.\ndecrypt only in memory. (6) Fallback for scanned PDFs — even unencrypted scanned PDFs need OCR because they contain images, not text. Use pytesseract (Tesseract OCR) or.\ncloud OCR APIs (Google Vision, AWS Textract). Provide feedback on which parser succeeded and how confident the extraction is."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you implement a web UI that provides real-time resume analysis feedback?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Real-time feedback UI: (1) Drag-and-drop upload area with file validation (max 5MB, PDF/DOCX only, visual feedback on valid/invalid). (2) Job description text area with paste functionality and.\ncharacter count. (3) Analysis state management — show upload progress → \"Parsing resume\" spinner → \"Analyzing with AI\" progress bar → results. (4) Results dashboard — section-by-section analysis with score gauges (0-100%),.\nmissing keywords highlighted in red, matching keywords in green. (5) Interactive suggestions — clickable suggestion cards that expand with before/after examples. (6) Download report — generate a styled PDF report using ReportLab with the analysis summary. (7) History — save past analyses and.\nallow comparison side-by-side. Use React/Vue for frontend with WebSocket for real-time updates from the backend during long LLM analyses."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you implement keyword matching with synonyms for skill detection?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skill synonym matching: (1) Build a skill taxonomy with canonical names and synonym lists: `{\"python\": [\"python\", \"python3\", \"python 3.x\", \"cpython\"], \"machine_learning\": [\"machine learning\",.\n\"ml\", \"predictive modeling\", \"statistical modeling\", \"supervised learning\"]}`. (2) For each JD skill, search the resume text with all synonyms using case-insensitive regex. (3) Use embedding similarity for.\nfuzzy matching — precompute embeddings for all skills and synonyms, then match skills whose embedding cosine similarity exceeds 0.85 threshold. This catches typos (e.g.,.\n\"PyTorch\" → \"Pytorch\") and related terms. (4) Categorize matches: \"exact match\" (canonical name found), \"synonym match\" (synonym found), \"related match\" (embedding similarity only). (5) Track match confidence and.\nreport to the user. This approach typically increases keyword detection recall by 30-50% compared to exact string matching."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you generate PDF reports with styled charts for resume analysis results?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function generateReport(data: AnalysisResult): Buffer {\n  const doc = new PDFDocument({ size: 'A4', margins: { top: 50, bottom: 50, left: 50, right: 50 } });\n  doc.fontSize(20).text('Resume ATS Analysis Report', { align: 'center' });\n  doc.moveDown();\n  // Overall score gauge\n  doc.roundedRect(50, 120, 500, 30, 15).stroke('#ddd');\n  doc.roundedRect(50, 120, 500 * data.overallScore / 100, 30, 15).fill('#4CAF50');\n  doc.fontSize(12).text(`${data.overallScore}/100`, 270, 125);\n  // Section scores\n  data.sections.forEach(s => {\n    doc.moveDown(0.5);\n    doc.fontSize(14).text(s.name);\n    doc.fontSize(10).text(`Score: ${s.score}/100  -  ${s.issues.length} issues found`);\n  });\n  return doc.end();\n}"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PDF report generation typically uses ReportLab (Python) or PDFKit/PDFDocument (Node.js). Design: (1) Cover page with candidate name and overall score as a large gauge. (2) Section-by-section breakdown with score bars and.\ncolor coding (green >80%, yellow 60-80%, red <60%). (3) Keyword match visualization — word cloud or bar chart of matched vs. missing keywords. (4) Improvement suggestions — prioritized list with before/after examples. (5) Skills radar chart — comparing resume skills against JD requirements across categories (technical,.\ndomain, soft skills). (6) Action items — top 3-5 changes with expected impact score. The report should be both machine-readable (structured data) and.\nhuman-readable for sharing with users."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 1 (cap-s02-quiz1):"
      }), " Why do ATS systems struggle with table-formatted resumes?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Tables break text extraction order in PDFs"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Tables are read left-to-right across columns, producing nonsensical text that ATS cannot parse into sections."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 2 (cap-s02-quiz2):"
      }), " What is the most ATS-friendly format for a resume?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) DOCX with standard section headers"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "DOCX files are natively text-based and easier for ATS to parse than scanned PDFs or formatted PDFs."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 3 (cap-s02-quiz3):"
      }), " What role does the LLM play in resume analysis?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Match resume against job description and generate suggestions"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "LLMs understand semantic matching between resume experience and JD requirements, going beyond simple keyword matching."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 4 (cap-s02-quiz4):"
      }), " Why should achievements be quantified on a resume?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Both ATS and recruiters prioritize measurable impact"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Quantified achievements (%, revenue, users) score higher in ATS ranking and catch recruiter attention."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 5 (cap-s02-quiz5):"
      }), " What is the ideal resume length for ATS processing?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 300-800 words (1-2 pages)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Resumes under 300 words lack substance; over 800 words get truncated by many ATS systems."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qa",
      children: "Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-q1",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you extract sections from a resume without standard formatting?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Handling diverse resume formats."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The section detector uses regex patterns for common headers. For non-standard formats, consider: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Heuristic detection"
          }), " — font size/spacing changes (requires PDF layout analysis with pdfminer). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ML-based detection"
          }), " — fine-tune LayoutLM on annotated resumes for header classification. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "LLM-based parsing"
          }), " — prompt the LLM to extract sections from raw text. The heuristic + regex approach works for ~85% of resumes; LLM fallback handles the rest."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-q2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you handle encrypted or scanned PDF resumes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Dealing with non-extractable PDFs."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Scanned PDFs contain images, not text. Solutions: (1) Use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OCR"
          }), " with Tesseract or AWS Textract to extract text from images. (2) For encrypted PDFs, attempt decryption with common passwords or suggest the user upload an unencrypted version. (3) Use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "pdf2image"
          }), " to convert PDF pages to images, then run OCR. (4) For DOCX files, python-docx handles both text and formatting natively. Always provide clear error messages when parsing fails."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-q3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What metrics matter most for ATS compatibility?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ATS ranking factors."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Key ATS metrics: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keyword density"
          }), " — percentage of JD keywords appearing in the resume (target >70%). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Section completeness"
          }), " — presence of all key sections (education, experience, skills, projects). (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Format compatibility"
          }), " — no tables, images, or columns. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "File format"
          }), " — DOCX ranks higher than PDF. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Job title match"
          }), " — exact match between resume title and target role. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Date format consistency"
          }), " — uniform date formats across experience entries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-q4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you prevent bias in LLM-based resume scoring?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Fairness in AI-powered recruiting tools."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Mitigation strategies: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Redact PII"
          }), " — remove name, gender indicators, age, and ethnicity before LLM analysis. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Diverse training data"
          }), " — ensure the LLM's training data includes diverse demographics. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiple evaluators"
          }), " — use multiple LLM calls and average results. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Human oversight"
          }), " — flag resume-score anomalies for manual review. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Regular audits"
          }), " — audit scores across demographic groups to detect systematic bias. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Transparency"
          }), " — show candidates exactly how they were scored."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s02-q5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you scale resume analysis for enterprise use?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "High-volume resume processing."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Scaling considerations: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Async batch processing"
          }), " — use Celery for background job processing. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "LLM caching"
          }), " — cache analysis results for similar JD+resume pairs. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Distributed parsing"
          }), " — use SQS queues to distribute parsing across workers. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost management"
          }), " — use cheaper models (GPT-3.5) for initial screening, GPT-4 only for detailed analysis. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deduplication"
          }), " — detect duplicate resumes from the same candidate. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rate limiting"
          }), " — limit API calls per user to prevent abuse and control costs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Not practicing enough problems to build pattern recognition1. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Resume Parser"
          }), ": Build a parser that extracts text from PDF and DOCX. Handle 5 different resume formats. Report parsing success rate and common failure patterns (e.g., scanned PDFs, column layouts)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Section Detector"
          }), ": Implement section detection using regex patterns. Test on 20 resumes. Measure precision and recall for each section type (education, experience, skills, projects). Which section is hardest to detect?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Keyword Matcher"
          }), ": Build a keyword matching system with 50+ technical skills and their synonyms. Test on 10 resume+JD pairs. Compute precision and recall against manual annotation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ATS Scorer"
          }), ": Implement the ATS format scoring system. Score 10 resumes. Correlate scores with human expert ratings (1-10). What is the Pearson correlation?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LLM Analysis Integration"
          }), ": Integrate with OpenAI API for match analysis. Test on 5 resume+JD pairs. Compare LLM-based scoring with keyword-based scoring. Which approach correlates better with human judgment?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Web UI"
          }), ": Build a Jinja2-based web interface with: file upload with drag-and-drop, JD text input, loading spinner, and results dashboard. Include section-by-section analysis visualization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PDF Report Generation"
          }), ": Implement PDF report generation using ReportLab. Include: overall score gauge chart, section scores table, keyword match visualization, and improvement suggestions list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Batch Processing"
          }), ": Implement batch upload for 10+ resumes. Compare against one JD. Rank by overall score. Generate a comparison table showing strengths and weaknesses of each resume."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Feedback Generation"
          }), ": Build a suggestion generator that produces specific, actionable advice: reword bullet points to be more impactful, add missing keywords, fix formatting issues. Show before/after examples for 5 resumes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Full Deployment"
          }), ": Deploy the complete app to Render or Railway. Set up: file upload validation (5MB limit, PDF/DOCX only), HTTPS, logging, and usage analytics. Monitor average response time and er"]
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Resume ATS Analyzer in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Resume ATS Analyzer."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding Resume ATS Analyzer. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Resume ATS Analyzer from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Resume ATS Analyzer with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Resume ATS Analyzer."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Resume ATS Analyzer behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Resume ATS Analyzer run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of Resume ATS Analyzer that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Resume ATS Analyzer explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Resume ATS Analyzer\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Resume ATS Analyzer to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Resume ATS Analyzer (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Resume ATS Analyzer and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Resume ATS Analyzer-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Resume ATS Analyzer interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Resume ATS Analyzer in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Resume ATS Analyzer builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Resume ATS Analyzer before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Resume ATS Analyzer is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Resume ATS Analyzer in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Resume ATS Analyzer chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Resume ATS Analyzer is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Resume ATS Analyzer is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Resume ATS Analyzer is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Resume ATS Analyzer issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Resume ATS Analyzer in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Resume ATS Analyzer that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Resume ATS Analyzer is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Resume ATS Analyzer in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Resume ATS Analyzer and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Resume ATS Analyzer on an empty input?"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Resume ATS Analyzer to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Resume ATS Analyzer from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Resume ATS Analyzer when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Resume ATS Analyzer twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Resume ATS Analyzer snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Resume ATS Analyzer listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Resume ATS Analyzer to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Resume ATS Analyzer by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Resume ATS Analyzer to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Resume ATS Analyzer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Resume ATS Analyzer (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Resume ATS Analyzer problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Resume ATS Analyzer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Resume ATS Analyzer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Resume ATS Analyzer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Resume ATS Analyzer fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Resume ATS Analyzer is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Resume ATS Analyzer is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Resume ATS Analyzer, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Resume ATS Analyzer asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resume ATS Analyzer is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Resume ATS Analyzer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resume ATS Analyzer emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Resume ATS Analyzer today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Resume ATS Analyzer — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Resume ATS Analyzer changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Resume ATS Analyzer."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resume ATS Analyzer appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Resume ATS Analyzer helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Resume ATS Analyzer concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Resume ATS Analyzer skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Resume ATS Analyzer to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resume ATS Analyzer is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Resume ATS Analyzer skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "19capstoneprojects-02resumeatsanalyzer-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Resume ATS Analyzer in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "19capstoneprojects-02resumeatsanalyzer-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "19capstoneprojects-02resumeatsanalyzer-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Resume ATS Analyzer approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "19capstoneprojects-02resumeatsanalyzer-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Resume ATS Analyzer NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "19capstoneprojects-02resumeatsanalyzer-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Resume ATS Analyzer applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Real-World Examples section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Resume ATS Analyzer (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Resume ATS Analyzer (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Resume ATS Analyzer-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Resume ATS Analyzer in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Resume ATS Analyzer code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Resume ATS Analyzer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Resume ATS Analyzer code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Resume ATS Analyzer example code."]
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
        children: "Explain Resume ATS Analyzer in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Resume ATS Analyzer."
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
        children: "Tell me about a time you debugged a Resume ATS Analyzer problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Resume ATS Analyzer is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Resume ATS Analyzer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Resume ATS Analyzer logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Resume ATS Analyzer without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Resume ATS Analyzer daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Resume ATS Analyzer patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Resume ATS Analyzer principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Resume ATS Analyzer shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Resume ATS Analyzer to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/19-capstone-projects/03-enterprise-rag-platform",
        children: "Enterprise RAG Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resume ATS Analyzer, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Resume ATS Analyzer depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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