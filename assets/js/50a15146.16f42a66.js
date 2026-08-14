"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[21122],{

/***/ 67905
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_18_multimodal_ai_voice_02_object_detection_md_50a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-18-multimodal-ai-voice-02-object-detection-md-50a.json
const site_docs_courses_ai_engineering_placement_18_multimodal_ai_voice_02_object_detection_md_50a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/multimodal-ai-voice/02-object-detection","title":"Object Detection","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection.md","sourceDirName":"courses/ai-engineering-placement/18-multimodal-ai-voice","slug":"/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":229,"frontMatter":{"id":"02-object-detection","slug":"/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection","title":"Object Detection","sidebar_label":"Object Detection","sidebar_position":229},"sidebar":"placementSidebar","previous":{"title":"Computer Vision Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/01-computer-vision-basics"},"next":{"title":"Image Segmentation","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection.md


const frontMatter = {
	id: '02-object-detection',
	slug: '/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection',
	title: 'Object Detection',
	sidebar_label: 'Object Detection',
	sidebar_position: 229
};
const contentTitle = 'Object Detection';

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
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "2.1 Detection Fundamentals",
  "id": "21-detection-fundamentals",
  "level": 2
}, {
  "value": "2.2 Anchor Boxes &amp; IoU",
  "id": "22-anchor-boxes--iou",
  "level": 2
}, {
  "value": "2.3 Non-Max Suppression",
  "id": "23-non-max-suppression",
  "level": 2
}, {
  "value": "2.4 R-CNN Family",
  "id": "24-r-cnn-family",
  "level": 2
}, {
  "value": "2.5 YOLO Architecture",
  "id": "25-yolo-architecture",
  "level": 2
}, {
  "value": "2.6 SSD &amp; RetinaNet",
  "id": "26-ssd--retinanet",
  "level": 2
}, {
  "value": "2.7 Evaluation Metrics",
  "id": "27-evaluation-metrics",
  "level": 2
}, {
  "value": "2.8 Deployment",
  "id": "28-deployment",
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
    em: "em",
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
        id: "object-detection",
        children: "Object Detection"
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
            children: "Understand object detection fundamentals and bounding box regression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement anchor boxes and non-max suppression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build two-stage detectors (R-CNN, Fast R-CNN, Faster R-CNN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement one-stage detectors (YOLO, SSD)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate detection models with mAP, IoU, and precision-recall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy object detection models for real-time inference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI is moving beyond text. Computer vision, speech recognition, and multimodal models process images, audio, and video. This module covers the tools and techniques for building multimodal AI applications."
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
      children: "Understanding object detection is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how object detection works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Detection Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounding boxes, class scores, regression targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anchor Boxes & IoU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior boxes, intersection over union, matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-Max Suppression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score thresholding, greedy suppression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R-CNN Family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective search, RoI pooling, RPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid cells, single-shot prediction, loss function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD & RetinaNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-scale feature maps, focal loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mAP, precision-recall curve, COCO metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT, ONNX, edge deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Input\n        A[Input Image] --> B[Backbone CNN]\n    end\n    subgraph Two-Stage\n        B --> C[Region Proposal Network]\n        C --> D[RoI Align]\n        D --> E[Classifier + Regressor]\n    end\n    subgraph One-Stage\n        B --> F[Grid Predictions]\n        F --> G[Class + Box per Cell]\n    end\n    E --> H[NMS]\n    G --> H\n    H --> I[Final Detections]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-detection-fundamentals",
      children: "2.1 Detection Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object detection extends classification by localizing objects within an image. Each detection includes a bounding box (x, y, w, h) and a class label with confidence."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nimport torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nfrom typing import List, Tuple, Optional, Dict, Any\n\nclass BoundingBox:\n    \"\"\"Represents a detected object with bounding box.\"\"\"\n\n    def __init__(self, x1: float, y1: float, x2: float, y2: float,\n                 score: float, class_id: int, class_name: str = \"\"):\n        self.x1 = x1\n        self.y1 = y1\n        self.x2 = x2\n        self.y2 = y2\n        self.score = score\n        self.class_id = class_id\n        self.class_name = class_name\n\n    @property\n    def width(self) -> float:\n        return self.x2 - self.x1\n\n    @property\n    def height(self) -> float:\n        return self.y2 - self.y1\n\n    @property\n    def center(self) -> Tuple[float, float]:\n        return ((self.x1 + self.x2) / 2, (self.y1 + self.y2) / 2)\n\n    @property\n    def area(self) -> float:\n        return self.width * self.height\n\n    def to_xywh(self) -> Tuple[float, float, float, float]:\n        cx = (self.x1 + self.x2) / 2\n        cy = (self.y1 + self.y2) / 2\n        return (cx, cy, self.width, self.height)\n\n    @staticmethod\n    def from_xywh(cx: float, cy: float, w: float, h: float,\n                  score: float = 1.0, class_id: int = 0) -> \"BoundingBox\":\n        x1 = cx - w / 2\n        y1 = cy - h / 2\n        x2 = cx + w / 2\n        y2 = cy + h / 2\n        return BoundingBox(x1, y1, x2, y2, score, class_id)\n\n    def __repr__(self) -> str:\n        return (f\"BBox({self.class_name or self.class_id}, \"\n                f\"score={self.score:.3f}, [{self.x1:.1f}, {self.y1:.1f}, \"\n                f\"{self.x2:.1f}, {self.y2:.1f}])\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-anchor-boxes--iou",
      children: "2.2 Anchor Boxes & IoU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anchor boxes (prior boxes) are pre-defined bounding boxes of various scales and aspect ratios. Each grid cell predicts offsets relative to these anchors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AnchorGenerator:\n    \"\"\"Generates anchor boxes for a feature map.\"\"\"\n\n    def __init__(self, scales: List[float] = (0.5, 1.0, 2.0),\n                 aspect_ratios: List[float] = (0.5, 1.0, 2.0),\n                 base_size: int = 16):\n        self.scales = scales\n        self.aspect_ratios = aspect_ratios\n        self.base_size = base_size\n\n    def generate(self, grid_size: Tuple[int, int]) -> np.ndarray:\n        \"\"\"Generate anchor boxes for a grid of given size.\"\"\"\n        h, w = grid_size\n        anchors = []\n        for i in range(h):\n            for j in range(w):\n                cx = (j + 0.5) * self.base_size\n                cy = (i + 0.5) * self.base_size\n                for scale in self.scales:\n                    for ar in self.aspect_ratios:\n                        a_w = self.base_size * scale * np.sqrt(ar)\n                        a_h = self.base_size * scale / np.sqrt(ar)\n                        anchors.append([cx - a_w / 2, cy - a_h / 2,\n                                        cx + a_w / 2, cy + a_h / 2])\n        return np.array(anchors, dtype=np.float32)\n\ndef compute_iou(box1: np.ndarray, box2: np.ndarray) -> float:\n    \"\"\"Compute Intersection over Union between two boxes.\"\"\"\n    x1 = max(box1[0], box2[0])\n    y1 = max(box1[1], box2[1])\n    x2 = min(box1[2], box2[2])\n    y2 = min(box1[3], box2[3])\n    inter = max(0, x2 - x1) * max(0, y2 - y1)\n    area1 = (box1[2] - box1[0]) * (box1[3] - box1[1])\n    area2 = (box2[2] - box2[0]) * (box2[3] - box2[1])\n    union = area1 + area2 - inter\n    return inter / union if union > 0 else 0.0\n\ndef match_anchors(anchors: np.ndarray, gt_boxes: np.ndarray,\n                  iou_threshold: float = 0.5) -> Tuple[np.ndarray, np.ndarray]:\n    \"\"\"Match ground truth boxes to anchors based on IoU.\"\"\"\n    n_anchors = len(anchors)\n    n_gt = len(gt_boxes)\n    iou_matrix = np.zeros((n_anchors, n_gt), dtype=np.float32)\n    for i in range(n_anchors):\n        for j in range(n_gt):\n            iou_matrix[i, j] = compute_iou(anchors[i], gt_boxes[j])\n\n    best_gt = iou_matrix.argmax(axis=1)\n    best_iou = iou_matrix.max(axis=1)\n    matched = best_iou >= iou_threshold\n    return best_gt, matched\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-non-max-suppression",
      children: "2.3 Non-Max Suppression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NMS removes duplicate detections by greedily selecting the highest-scoring box and suppressing overlapping boxes below an IoU threshold."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def nms(boxes: List[BoundingBox], iou_threshold: float = 0.5) -> List[BoundingBox]:\n    \"\"\"Non-Maximum Suppression to remove duplicate detections.\"\"\"\n    if not boxes:\n        return []\n\n    boxes = sorted(boxes, key=lambda b: b.score, reverse=True)\n    keep = []\n\n    while boxes:\n        best = boxes.pop(0)\n        keep.append(best)\n        boxes = [\n            b for b in boxes\n            if b.class_id != best.class_id\n            or compute_iou(\n                np.array([best.x1, best.y1, best.x2, best.y2]),\n                np.array([b.x1, b.y1, b.x2, b.y2])\n            ) < iou_threshold\n        ]\n\n    return keep\n\ndef soft_nms(boxes: List[BoundingBox], iou_threshold: float = 0.5,\n             sigma: float = 0.5, score_threshold: float = 0.1) -> List[BoundingBox]:\n    \"\"\"Soft-NMS decays scores instead of removing boxes.\"\"\"\n    detections = [(b, b.score) for b in boxes]\n    detections.sort(key=lambda x: x[1], reverse=True)\n    keep = []\n\n    while detections:\n        best_box, best_score = detections.pop(0)\n        keep.append(best_box)\n\n        remaining = []\n        for box, score in detections:\n            if box.class_id != best_box.class_id:\n                remaining.append((box, score))\n                continue\n            iou = compute_iou(\n                np.array([best_box.x1, best_box.y1, best_box.x2, best_box.y2]),\n                np.array([box.x1, box.y1, box.x2, box.y2])\n            )\n            penalty = np.exp(-(iou ** 2) / sigma)\n            new_score = score * penalty\n            if new_score > score_threshold:\n                remaining.append((box, new_score))\n\n        detections = sorted(remaining, key=lambda x: x[1], reverse=True)\n\n    return keep\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-r-cnn-family",
      children: "2.4 R-CNN Family"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Region-based CNN methods evolved from selective search (R-CNN) to fully trainable region proposal networks (Faster R-CNN)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SelectiveSearch:\n    \"\"\"Simplified selective search for generating region proposals.\"\"\"\n\n    def __init__(self, min_size: int = 100, max_size: int = 500):\n        self.min_size = min_size\n        self.max_size = max_size\n\n    def generate_proposals(self, image: np.ndarray) -> np.ndarray:\n        \"\"\"Generate candidate region proposals.\"\"\"\n        h, w = image.shape[:2]\n        proposals = []\n        strides = [8, 16, 32, 64]\n        for stride in strides:\n            for y in range(0, h - self.min_size, stride):\n                for x in range(0, w - self.min_size, stride):\n                    box_h = min(np.random.randint(self.min_size, h - y), self.max_size)\n                    box_w = min(np.random.randint(self.min_size, w - x), self.max_size)\n                    proposals.append([x, y, x + box_w, y + box_h])\n        return np.array(proposals[:2000], dtype=np.float32)\n\nclass RoIPool(nn.Module):\n    \"\"\"Region of Interest Pooling layer.\"\"\"\n\n    def __init__(self, output_size: Tuple[int, int]):\n        super().__init__()\n        self.output_size = output_size\n\n    def forward(self, features: torch.Tensor, rois: torch.Tensor) -> torch.Tensor:\n        \"\"\"Pool features from each RoI to fixed size.\"\"\"\n        n_rois = rois.shape[0]\n        output = torch.zeros(n_rois, features.shape[1],\n                             self.output_size[0], self.output_size[1])\n        for i in range(n_rois):\n            x1, y1, x2, y2 = rois[i].int().tolist()\n            roi_feat = features[:, :, y1:y2+1, x1:x2+1]\n            output[i] = F.interpolate(roi_feat,\n                                      size=self.output_size,\n                                      mode='bilinear',\n                                      align_corners=False).squeeze(0)\n        return output\n\nclass FasterRCNN(nn.Module):\n    \"\"\"Simplified Faster R-CNN with Region Proposal Network.\"\"\"\n\n    def __init__(self, backbone: nn.Module, num_classes: int):\n        super().__init__()\n        self.backbone = backbone\n        self.rpn = nn.Sequential(\n            nn.Conv2d(512, 512, 3, padding=1),\n            nn.ReLU(),\n            nn.Conv2d(512, 9 * 4, 1),  # 9 anchors * 4 box deltas\n        )\n        self.rpn_cls = nn.Conv2d(512, 9 * 2, 1)  # 9 anchors * 2 (bg/fg)\n        self.roi_pool = RoIPool((7, 7))\n        self.classifier = nn.Sequential(\n            nn.Linear(512 * 7 * 7, 1024),\n            nn.ReLU(),\n            nn.Dropout(0.5),\n            nn.Linear(1024, 1024),\n            nn.ReLU(),\n            nn.Dropout(0.5),\n            nn.Linear(1024, num_classes * 5),  # class + 4 box deltas\n        )\n\n    def forward(self, x: torch.Tensor, proposals: Optional[torch.Tensor] = None\n                ) -> Dict[str, torch.Tensor]:\n        features = self.backbone(x)\n        rpn_reg = self.rpn(features)\n        rpn_cls = self.rpn_cls(features)\n\n        if proposals is None:\n            batch_size = x.shape[0]\n            proposals = self._generate_proposals(rpn_reg, rpn_cls, batch_size)\n\n        pooled = self.roi_pool(features, proposals)\n        pooled = pooled.view(pooled.size(0), -1)\n        outputs = self.classifier(pooled)\n        return {\"rpn_reg\": rpn_reg, \"rpn_cls\": rpn_cls,\n                \"detections\": outputs}\n\n    def _generate_proposals(self, rpn_reg: torch.Tensor,\n                            rpn_cls: torch.Tensor,\n                            batch_size: int) -> torch.Tensor:\n        \"\"\"Convert RPN outputs to box proposals.\"\"\"\n        return torch.randn(100, 4)  # Placeholder for demonstration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-yolo-architecture",
      children: "2.5 YOLO Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YOLO (You Only Look Once) treats detection as a single regression problem, predicting bounding boxes and class probabilities directly from grid cells."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class YOLOLoss(nn.Module):\n    \"\"\"YOLO loss function with localization, confidence, and class terms.\"\"\"\n\n    def __init__(self, num_classes: int, coord_scale: float = 5.0,\n                 noobj_scale: float = 0.5):\n        super().__init__()\n        self.num_classes = num_classes\n        self.coord_scale = coord_scale\n        self.noobj_scale = noobj_scale\n\n    def forward(self, predictions: torch.Tensor, targets: torch.Tensor) -> Dict[str, torch.Tensor]:\n        \"\"\"Compute YOLO loss components.\"\"\"\n        pred_boxes = predictions[..., :4]\n        pred_conf = predictions[..., 4:5]\n        pred_cls = predictions[..., 5:]\n\n        target_boxes = targets[..., :4]\n        target_conf = targets[..., 4:5]\n        target_cls = targets[..., 5:]\n\n        obj_mask = target_conf > 0\n        noobj_mask = ~obj_mask\n\n        coord_loss = self.coord_scale * F.mse_loss(\n            pred_boxes[obj_mask.expand_as(pred_boxes)].view(-1, 4),\n            target_boxes[obj_mask.expand_as(target_boxes)].view(-1, 4),\n            reduction='sum'\n        ) if obj_mask.any() else torch.tensor(0.0)\n\n        conf_loss = F.mse_loss(\n            pred_conf[obj_mask],\n            target_conf[obj_mask],\n            reduction='sum'\n        ) if obj_mask.any() else torch.tensor(0.0)\n\n        noobj_loss = self.noobj_scale * F.mse_loss(\n            pred_conf[noobj_mask],\n            target_conf[noobj_mask],\n            reduction='sum'\n        ) if noobj_mask.any() else torch.tensor(0.0)\n\n        cls_loss = F.binary_cross_entropy_with_logits(\n            pred_cls[obj_mask.expand_as(pred_cls)].view(-1, self.num_classes),\n            target_cls[obj_mask.expand_as(target_cls)].view(-1, self.num_classes),\n            reduction='sum'\n        ) if obj_mask.any() else torch.tensor(0.0)\n\n        total = coord_loss + conf_loss + noobj_loss + cls_loss\n        return {\n            \"total\": total,\n            \"coord\": coord_loss,\n            \"conf\": conf_loss,\n            \"noobj\": noobj_loss,\n            \"cls\": cls_loss\n        }\n\nclass YOLOv1(nn.Module):\n    \"\"\"Simplified YOLOv1 implementation.\"\"\"\n\n    def __init__(self, num_classes: int = 20, grid_size: int = 7,\n                 num_boxes: int = 2):\n        super().__init__()\n        self.num_classes = num_classes\n        self.grid_size = grid_size\n        self.num_boxes = num_boxes\n        self.output_size = grid_size * grid_size * (5 * num_boxes + num_classes)\n\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 64, 7, stride=2, padding=3),\n            nn.LeakyReLU(0.1),\n            nn.MaxPool2d(2),\n            nn.Conv2d(64, 192, 3, padding=1),\n            nn.LeakyReLU(0.1),\n            nn.MaxPool2d(2),\n            nn.Conv2d(192, 128, 1),\n            nn.LeakyReLU(0.1),\n            nn.Conv2d(128, 256, 3, padding=1),\n            nn.LeakyReLU(0.1),\n            nn.Conv2d(256, 256, 1),\n            nn.LeakyReLU(0.1),\n            nn.Conv2d(256, 512, 3, padding=1),\n            nn.LeakyReLU(0.1),\n            nn.MaxPool2d(2),\n        )\n\n        self.classifier = nn.Sequential(\n            nn.Flatten(),\n            nn.Linear(512 * grid_size * grid_size, 4096),\n            nn.LeakyReLU(0.1),\n            nn.Dropout(0.5),\n            nn.Linear(4096, self.output_size),\n        )\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        x = self.features(x)\n        x = self.classifier(x)\n        batch_size = x.shape[0]\n        x = x.view(batch_size, self.grid_size, self.grid_size,\n                   self.num_boxes * 5 + self.num_classes)\n        return x\n\n    def decode_predictions(self, raw: torch.Tensor, image_size: Tuple[int, int],\n                           conf_threshold: float = 0.5) -> List[List[BoundingBox]]:\n        \"\"\"Decode raw network output into bounding boxes.\"\"\"\n        batch_size = raw.shape[0]\n        h_img, w_img = image_size\n        cell_w = w_img / self.grid_size\n        cell_h = h_img / self.grid_size\n        results = []\n\n        for b in range(batch_size):\n            boxes = []\n            for i in range(self.grid_size):\n                for j in range(self.grid_size):\n                    for k in range(self.num_boxes):\n                        offset = k * 5\n                        box_data = raw[b, i, j, offset:offset + 5]\n                        cx = (j + torch.sigmoid(box_data[0])) * cell_w\n                        cy = (i + torch.sigmoid(box_data[1])) * cell_h\n                        w = torch.exp(box_data[2]) * cell_w\n                        h = torch.exp(box_data[3]) * cell_h\n                        conf = torch.sigmoid(box_data[4])\n\n                        cls_start = self.num_boxes * 5\n                        cls_probs = torch.softmax(raw[b, i, j, cls_start:], dim=0)\n                        best_cls = torch.argmax(cls_probs).item()\n                        cls_conf = cls_probs[best_cls].item()\n                        final_conf = conf.item() * cls_conf\n\n                        if final_conf > conf_threshold:\n                            box = BoundingBox(\n                                x1=max(0, cx.item() - w.item() / 2),\n                                y1=max(0, cy.item() - h.item() / 2),\n                                x2=min(w_img, cx.item() + w.item() / 2),\n                                y2=min(h_img, cy.item() + h.item() / 2),\n                                score=final_conf,\n                                class_id=best_cls,\n                            )\n                            boxes.append(box)\n\n            results.append(nms(boxes))\n\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-ssd--retinanet",
      children: "2.6 SSD & RetinaNet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSD uses multi-scale feature maps for detecting objects at different scales. RetinaNet introduces focal loss to address class imbalance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SSDLoss(nn.Module):\n    \"\"\"SSD loss combining localization and confidence terms.\"\"\"\n\n    def __init__(self, num_classes: int, alpha: float = 1.0):\n        super().__init__()\n        self.num_classes = num_classes\n        self.alpha = alpha\n\n    def forward(self, loc_preds: torch.Tensor, conf_preds: torch.Tensor,\n                loc_targets: torch.Tensor, conf_targets: torch.Tensor,\n                pos_mask: torch.Tensor) -> Dict[str, torch.Tensor]:\n        \"\"\"Compute SSD loss.\"\"\"\n        n_pos = pos_mask.sum().clamp(min=1)\n\n        loc_loss = F.smooth_l1_loss(\n            loc_preds[pos_mask.expand_as(loc_preds)].view(-1, 4),\n            loc_targets[pos_mask.expand_as(loc_targets)].view(-1, 4),\n            reduction='sum'\n        ) / n_pos\n\n        conf_loss = F.cross_entropy(\n            conf_preds.view(-1, self.num_classes),\n            conf_targets.view(-1),\n            reduction='sum'\n        ) / n_pos\n\n        total = loc_loss + self.alpha * conf_loss\n        return {\"total\": total, \"loc\": loc_loss, \"conf\": conf_loss}\n\nclass FocalLoss(nn.Module):\n    \"\"\"Focal Loss for dense object detection (RetinaNet).\"\"\"\n\n    def __init__(self, alpha: float = 0.25, gamma: float = 2.0):\n        super().__init__()\n        self.alpha = alpha\n        self.gamma = gamma\n\n    def forward(self, inputs: torch.Tensor, targets: torch.Tensor) -> torch.Tensor:\n        \"\"\"Compute focal loss.\"\"\"\n        ce_loss = F.binary_cross_entropy_with_logits(inputs, targets, reduction='none')\n        pt = torch.exp(-ce_loss)\n        focal_loss = self.alpha * (1 - pt) ** self.gamma * ce_loss\n        return focal_loss.mean()\n\nclass MultiBoxDetector(nn.Module):\n    \"\"\"Multi-scale detection head similar to SSD.\"\"\"\n\n    def __init__(self, num_classes: int, anchor_configs: List[Dict[str, Any]]):\n        super().__init__()\n        self.num_classes = num_classes\n        self.anchor_configs = anchor_configs\n        self.loc_layers = nn.ModuleList()\n        self.conf_layers = nn.ModuleList()\n\n        for config in anchor_configs:\n            in_channels = config['in_channels']\n            n_anchors = config['n_anchors']\n            self.loc_layers.append(\n                nn.Conv2d(in_channels, n_anchors * 4, kernel_size=3, padding=1)\n            )\n            self.conf_layers.append(\n                nn.Conv2d(in_channels, n_anchors * num_classes, kernel_size=3, padding=1)\n            )\n\n    def forward(self, feature_maps: List[torch.Tensor]) -> Tuple[torch.Tensor, torch.Tensor]:\n        \"\"\"Predict locations and confidences from multi-scale features.\"\"\"\n        loc_preds = []\n        conf_preds = []\n\n        for features, loc_layer, conf_layer in zip(\n                feature_maps, self.loc_layers, self.conf_layers):\n            loc_preds.append(loc_layer(features).permute(0, 2, 3, 1).contiguous())\n            conf_preds.append(conf_layer(features).permute(0, 2, 3, 1).contiguous())\n\n        loc_preds = torch.cat([p.view(p.size(0), -1, 4) for p in loc_preds], dim=1)\n        conf_preds = torch.cat([c.view(c.size(0), -1, self.num_classes)\n                                for c in conf_preds], dim=1)\n\n        return loc_preds, conf_preds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-evaluation-metrics",
      children: "2.7 Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mean Average Precision (mAP) is the primary metric for object detection. It computes the area under the precision-recall curve for each class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DetectionEvaluator:\n    \"\"\"Evaluates object detection performance using COCO-style metrics.\"\"\"\n\n    def __init__(self, iou_thresholds: List[float] = None):\n        self.iou_thresholds = iou_thresholds or [0.5, 0.75]\n        self.predictions: List[Tuple[BoundingBox, int]] = []  # (box, image_id)\n        self.ground_truths: Dict[int, List[BoundingBox]] = {}\n\n    def add_prediction(self, box: BoundingBox, image_id: int):\n        self.predictions.append((box, image_id))\n\n    def add_ground_truth(self, box: BoundingBox, image_id: int):\n        if image_id not in self.ground_truths:\n            self.ground_truths[image_id] = []\n        self.ground_truths[image_id].append(box)\n\n    def compute_precision_recall(self, class_id: int,\n                                 iou_threshold: float = 0.5) -> Tuple[np.ndarray, np.ndarray]:\n        \"\"\"Compute precision-recall curve for a given class.\"\"\"\n        class_preds = [\n            (box, img_id) for box, img_id in self.predictions\n            if box.class_id == class_id\n        ]\n        class_preds.sort(key=lambda x: x[0].score, reverse=True)\n\n        n_gt = sum(\n            1 for boxes in self.ground_truths.values()\n            for box in boxes if box.class_id == class_id\n        )\n\n        tp = np.zeros(len(class_preds))\n        fp = np.zeros(len(class_preds))\n\n        matched_gt = set()\n\n        for i, (box, img_id) in enumerate(class_preds):\n            gt_boxes = self.ground_truths.get(img_id, [])\n            matched = False\n\n            for gt_idx, gt_box in enumerate(gt_boxes):\n                if gt_box.class_id != class_id:\n                    continue\n                if (img_id, gt_idx) in matched_gt:\n                    continue\n\n                iou = compute_iou(\n                    np.array([box.x1, box.y1, box.x2, box.y2]),\n                    np.array([gt_box.x1, gt_box.y1, gt_box.x2, gt_box.y2])\n                )\n\n                if iou >= iou_threshold:\n                    tp[i] = 1\n                    matched_gt.add((img_id, gt_idx))\n                    matched = True\n                    break\n\n            if not matched:\n                fp[i] = 1\n\n        tp_cumsum = np.cumsum(tp)\n        fp_cumsum = np.cumsum(fp)\n\n        precision = tp_cumsum / (tp_cumsum + fp_cumsum + 1e-16)\n        recall = tp_cumsum / (n_gt + 1e-16)\n\n        return precision, recall\n\n    def compute_ap(self, precision: np.ndarray, recall: np.ndarray) -> float:\n        \"\"\"Compute Average Precision using 11-point interpolation.\"\"\"\n        ap = 0.0\n        for t in np.linspace(0, 1, 11):\n            p = precision[recall >= t]\n            if len(p) > 0:\n                ap += p.max() / 11\n        return ap\n\n    def compute_map(self, num_classes: int) -> Dict[str, float]:\n        \"\"\"Compute mean Average Precision across all IoU thresholds.\"\"\"\n        results = {}\n        for iou_th in self.iou_thresholds:\n            aps = []\n            for c in range(num_classes):\n                prec, rec = self.compute_precision_recall(c, iou_th)\n                ap = self.compute_ap(prec, rec)\n                aps.append(ap)\n            results[f\"mAP@{iou_th}\"] = float(np.mean(aps))\n        results[\"mAP\"] = float(np.mean([\n            results[f\"mAP@{iou_th}\"] for iou_th in self.iou_thresholds\n        ]))\n        return results\n\nclass COCOMetrics:\n    \"\"\"COCO-style evaluation metrics.\"\"\"\n\n    @staticmethod\n    def compute_ap_at_iou_ranges(predictions: List[BoundingBox],\n                                  ground_truths: List[BoundingBox],\n                                  iou_range: List[float] = None) -> Dict[str, float]:\n        \"\"\"Compute AP at small, medium, and large object scales.\"\"\"\n        iou_range = iou_range or [0.5, 0.75, 0.95]\n        area_ranges = {\n            'small': (0, 32 ** 2),\n            'medium': (32 ** 2, 96 ** 2),\n            'large': (96 ** 2, float('inf')),\n        }\n\n        results = {}\n        for area_name, (min_area, max_area) in area_ranges.items():\n            filtered_gt = [\n                box for box in ground_truths\n                if min_area <= box.area < max_area\n            ]\n            if filtered_gt:\n                ap_values = []\n                for iou_th in iou_range:\n                    tp = 0\n                    fp = 0\n                    for pred in predictions:\n                        best_iou = 0\n                        for gt in filtered_gt:\n                            iou = compute_iou(\n                                np.array([pred.x1, pred.y1, pred.x2, pred.y2]),\n                                np.array([gt.x1, gt.y1, gt.x2, gt.y2])\n                            )\n                            best_iou = max(best_iou, iou)\n                        if best_iou >= iou_th:\n                            tp += 1\n                        else:\n                            fp += 1\n                    ap_values.append(tp / (tp + fp + 1e-16) if (tp + fp) > 0 else 0.0)\n                results[f\"AP_{area_name}\"] = float(np.mean(ap_values))\n\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-deployment",
      children: "2.8 Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimizing detection models for inference requires quantization, TensorRT acceleration, and careful batching strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DetectionModelExporter:\n    \"\"\"Export detection models for deployment.\"\"\"\n\n    def __init__(self, model: nn.Module, model_path: str = \"detection_model\"):\n        self.model = model\n        self.model_path = model_path\n\n    def export_onnx(self, dummy_input: torch.Tensor,\n                    opset_version: int = 11) -> str:\n        \"\"\"Export model to ONNX format.\"\"\"\n        torch.onnx.export(\n            self.model,\n            dummy_input,\n            f\"{self.model_path}.onnx\",\n            export_params=True,\n            opset_version=opset_version,\n            do_constant_folding=True,\n            input_names=[\"input\"],\n            output_names=[\"boxes\", \"scores\", \"labels\"],\n            dynamic_axes={\n                \"input\": {0: \"batch_size\"},\n                \"boxes\": {0: \"batch_size\"},\n                \"scores\": {0: \"batch_size\"},\n                \"labels\": {0: \"batch_size\"},\n            }\n        )\n        return f\"{self.model_path}.onnx\"\n\n    def quantize_model(self, calib_loader: torch.utils.data.DataLoader) -> nn.Module:\n        \"\"\"Apply post-training quantization.\"\"\"\n        self.model.eval()\n        self.model.qconfig = torch.ao.quantization.default_qconfig\n        torch.ao.quantization.prepare(self.model, inplace=True)\n\n        with torch.no_grad():\n            for images, _ in calib_loader:\n                self.model(images)\n\n        torch.ao.quantization.convert(self.model, inplace=True)\n        return self.model\n\n    def optimize_for_trt(self) -> str:\n        \"\"\"Generate TensorRT engine from ONNX model.\"\"\"\n        trt_path = f\"{self.model_path}.trt\"\n        print(f\"TensorRT engine would be saved to {trt_path}\")\n        print(\"Run: trtexec --onnx={self_model_path}.onnx --saveEngine={trt_path}\")\n        return trt_path\n\nclass DetectionPipeline:\n    \"\"\"End-to-end detection inference pipeline.\"\"\"\n\n    def __init__(self, model: nn.Module, device: str = \"cpu\",\n                 conf_threshold: float = 0.5, iou_threshold: float = 0.5):\n        self.model = model.to(device)\n        self.device = device\n        self.conf_threshold = conf_threshold\n        self.iou_threshold = iou_threshold\n\n    @torch.no_grad()\n    def process_image(self, image: np.ndarray) -> np.ndarray:\n        \"\"\"Run detection on a single image and return annotated image.\"\"\"\n        tensor = self._preprocess(image).to(self.device)\n        raw_output = self.model(tensor)\n        boxes = self._postprocess(raw_output, image.shape[:2])\n        return self._draw_boxes(image, boxes)\n\n    def _preprocess(self, image: np.ndarray,\n                    target_size: Tuple[int, int] = (416, 416)) -> torch.Tensor:\n        \"\"\"Resize and normalize input image.\"\"\"\n        from PIL import Image\n        img = Image.fromarray(image).resize(target_size)\n        tensor = torch.from_numpy(np.array(img)).float()\n        tensor = tensor.permute(2, 0, 1) / 255.0\n        tensor = tensor.unsqueeze(0)\n        return tensor\n\n    def _postprocess(self, raw: torch.Tensor,\n                     orig_size: Tuple[int, int]) -> List[BoundingBox]:\n        \"\"\"Decode raw model output to bounding boxes.\"\"\"\n        boxes = []\n        if hasattr(self.model, 'decode_predictions'):\n            boxes = self.model.decode_predictions(\n                raw, orig_size, self.conf_threshold\n            )[0]\n        return nms(boxes, self.iou_threshold)\n\n    def _draw_boxes(self, image: np.ndarray,\n                    boxes: List[BoundingBox]) -> np.ndarray:\n        \"\"\"Draw bounding boxes on image.\"\"\"\n        import cv2\n        colors = [(255, 0, 0), (0, 255, 0), (0, 0, 255),\n                  (255, 255, 0), (255, 0, 255), (0, 255, 255)]\n        result = image.copy()\n        for box in boxes:\n            color = colors[box.class_id % len(colors)]\n            cv2.rectangle(\n                result,\n                (int(box.x1), int(box.y1)),\n                (int(box.x2), int(box.y2)),\n                color, 2\n            )\n            label = f\"{box.class_name or box.class_id}: {box.score:.2f}\"\n            cv2.putText(result, label, (int(box.x1), int(box.y1) - 5),\n                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)\n        return result\n\n    def process_batch(self, images: List[np.ndarray],\n                      batch_size: int = 8) -> List[np.ndarray]:\n        \"\"\"Process multiple images with batching.\"\"\"\n        results = []\n        for i in range(0, len(images), batch_size):\n            batch = images[i:i + batch_size]\n            tensors = torch.cat([\n                self._preprocess(img) for img in batch\n            ]).to(self.device)\n            raw_outputs = self.model(tensors)\n            for j, raw in enumerate(raw_outputs):\n                boxes = self._postprocess(raw.unsqueeze(0), batch[j].shape[:2])\n                results.append(self._draw_boxes(batch[j], boxes))\n        return results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object detection is a foundational computer vision task that combines classification with localization. Two-stage detectors (R-CNN family) offer high accuracy by first proposing regions then classifying them,.\nwhile one-stage detectors (YOLO, SSD) prioritize speed by predicting all boxes in a single pass. Anchor boxes, IoU matching, and NMS are core mechanisms shared across architectures. Evaluation relies on mAP across IoU thresholds and.\nobject scales. Deployment optimization through ONNX, TensorRT, and quantization enables real-time inference on edge devices."
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
            children: "Start with pre-trained detection models for new tasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use torchvision's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fasterrcnn_resnet50_fpn"
            }), " or YOLOv5 from ultralytics"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always tune IoU and confidence thresholds per dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate on a held-out set using mAP curves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use NMS variants (Soft-NMS, DIoU-NMS) for crowded scenes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft-NMS decays scores instead of hard-thresholding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor per-class AP, not just mAP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DetectionEvaluator.compute_ap()"
            }), " per class"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantize to FP16/INT8 before edge deployment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "torch.ao.quantization"
            }), " or TensorRT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Augment training data with mosaic, mixup, cutout"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "albumentations"
            }), " library's advanced transforms"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Explain the difference between one-stage and two-stage object detectors. When would you choose one over the other?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Two-stage detectors (Faster R-CNN, Mask R-CNN) first generate region proposals via a Region Proposal Network (RPN), then classify and refine each proposal. One-stage detectors (YOLO,.\nSSD, RetinaNet) directly predict bounding boxes and class probabilities from grid cells in a single pass. Two-stage detectors are generally more accurate (higher mAP at high IoU thresholds) because the two-stage refinement allows better localization. One-stage detectors are faster,.\nmaking them suitable for real-time applications (30+ FPS). Choose two-stage for accuracy-critical applications where latency isn't the primary concern (e.g., medical imaging),.\nand one-stage for real-time systems (e.g., autonomous driving, video surveillance)."
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
      "data-qid": "mm02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does Non-Maximum Suppression (NMS) work and what are its limitations?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NMS greedily selects the highest-scoring detection box, removes all other boxes with IoU above a threshold (typically 0.5), and repeats until all boxes are processed. Limitations: (1) It can suppress true positives in crowded scenes where multiple objects overlap heavily..\n(2) The IoU threshold is a hyperparameter that's hard to tune — too low misses overlapping objects,.\ntoo high lets through false positives. (3) It is not differentiable, preventing end-to-end training. Variants address these: Soft-NMS decays scores of overlapping boxes instead of removing them,.\nDIoU-NMS considers both IoU and center distance, and Adaptive NMS adjusts the threshold based on object density."
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
      "data-qid": "mm02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What are anchor boxes and how are they designed for a specific dataset?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Anchor boxes are pre-defined bounding boxes of various scales and aspect ratios placed at each grid cell. The network predicts offsets to adjust these anchors rather than predicting absolute coordinates. To design anchors for.\na dataset: (1) Run k-means clustering on all ground truth box dimensions (width, height) in the training set. (2) Choose k cluster centers as the anchor.\ndimensions — typically 3-9 anchors depending on the feature map. (3) Align anchor scales with the feature map's receptive field. (4) Use anchors at multiple scales across feature pyramid levels. YOLOv5 uses 9 anchors from k-means clustering: 3 scales — 3 aspect ratios (e.g.,.\n(10,13), (16,30), (33,23), (30,61), (62,45), (59,119), (116,90), (156,198), (373,326))."
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
      "data-qid": "mm02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How is mean Average Precision (mAP) calculated in COCO evaluation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "COCO mAP is computed by: (1) For each class, compute the precision-recall curve by ranking detections by confidence and computing precision/recall at each rank. (2) Average Precision (AP) is the area under the precision-recall curve,.\nusing 101-point interpolation. (3) This AP is computed at 10 IoU thresholds from 0.50 to 0.95 in steps of 0.05. (4) The final AP (called AP@[.5:.95]) is the mean across all 10 IoU thresholds and.\nall 80 COCO classes. This strict evaluation penalizes detectors that only perform well at low IoU thresholds. COCO also reports AP@0.5 (standard PASCAL VOC metric) and.\nAP@0.75 (stricter), plus AP_S, AP_M, AP_L for small, medium, and large objects separately."
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
      "data-qid": "mm02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does Feature Pyramid Network (FPN) improve object detection across scales?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FPN addresses the problem that objects appear at different scales. Standard CNNs lose spatial resolution in deeper layers, making it hard to detect small objects. FPN creates a feature pyramid with strong semantic features at all scales by: (1) Bottom-up.\npathway — standard CNN forward pass produces feature maps at multiple scales. (2) Top-down pathway — upsampling higher-level features to match lower-level resolution. (3) Lateral connections — adding 1—1 convolutions to merge bottom-up and.\ntop-down features at each level. The result is a set of feature maps (P2, P3, P4, P5) where each level has both high resolution (for.\nsmall objects) and strong semantics (for accurate classification). Each level is assigned to detect objects of a specific size range."
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
      "data-qid": "mm02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does the YOLO loss function balance localization and classification objectives?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "YOLO loss has four components: (1) Coordinate loss — MSE between predicted and ground truth box center (x, y) and dimensions (w,.\nh). This is weighted higher (λ_coord = 5) to emphasize accurate localization. (2) Object confidence loss — MSE for cells containing objects. (3) No-object confidence loss — MSE for.\nempty cells, weighted lower (λ_noobj = 0.5) since most cells don't contain objects. (4) Classification loss — cross-entropy for class predictions. The total loss is the sum: L = λ_coord * L_coord + L_obj + λ_noobj * L_noobj + L_cls..\nThe weighting ensures the model prioritizes getting box coordinates right and.\nbalancing the extreme class imbalance between object-containing and empty cells."
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
      "data-qid": "mm02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you deploy an object detection model to production with real-time requirements?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production deployment steps: (1) Model optimization — convert to ONNX for framework interoperability, then optimize with TensorRT using FP16 or INT8 quantization. (2) Inference server — wrap the optimized model in a FastAPI or.\nTriton Inference Server with batching support. (3) Pre/post-processing pipeline — resize, normalize, run NMS on the server side. (4) Pipeline parallelism — overlap data loading,.\npreprocessing, inference, and post-processing across CPU and GPU. (5) Edge deployment — for embedded devices, use NVIDIA Jetson with TensorRT or.\nApple Core ML. (6) Monitoring — track inference latency, throughput, and per-class AP drift over time. A well-optimized YOLOv8 model can achieve 2-5ms inference on a modern GPU."
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
      "data-qid": "mm02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does focal loss address the class imbalance problem in one-stage detectors?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "One-stage detectors face extreme class imbalance because the grid generates thousands of anchor boxes, most of which are background (negative examples). Standard cross-entropy loss is dominated by easy negative examples. Focal loss reshapes the loss to down-weight well-classified examples: FL(p_t) = -(1 - p_t)^γ * log(p_t). With γ = 2,.\nan example classified with p_t = 0.9 contributes 100— less loss than one with p_t = 0.5. This forces the model to focus on the rare hard examples (mostly objects). RetinaNet showed that focal loss allows one-stage detectors to match the accuracy of two-stage detectors for.\nthe first time, achieving COCO AP of 39.1 with ResNet-101-FPN backbone."
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
      "data-qid": "mm02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What techniques improve detection of small objects in images?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Small object detection (objects under 32—32 pixels) is challenging because they have few pixels and limited feature information. Techniques: (1) Feature Pyramid Networks (FPN) — uses high-resolution feature maps for.\nsmall object detection. (2) Image pyramids — test at multiple resolutions; small objects become larger at higher resolution. (3) Copy-paste augmentation — paste small object instances onto other images during training. (4) Mosaic augmentation — combine 4 images into one,.\nincreasing small object density. (5) Attention mechanisms — transformer-based detectors (DETR, Deformable DETR) handle scale variation better. (6) Avoiding aggressive downsampling — use stride-1 convolutions in early layers to preserve spatial resolution for.\nsmall objects."
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
      "data-qid": "mm02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does the IoU matching strategy work during training of object detectors?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function matchAnchorsToGroundTruth(\n  anchors: Box[], groundTruth: Box[], iouThreshold: number\n): Map<number, number> {\n  const iouMatrix = computeIoUMatrix(anchors, groundTruth);\n  const matches = new Map<number, number>();\n  // For each ground truth, find the best anchor\n  for (let gtIdx = 0; gtIdx < groundTruth.length; gtIdx++) {\n    let bestAnchor = 0, bestIou = 0;\n    for (let aIdx = 0; aIdx < anchors.length; aIdx++) {\n      if (iouMatrix[aIdx][gtIdx] > bestIou) {\n        bestIou = iouMatrix[aIdx][gtIdx];\n        bestAnchor = aIdx;\n      }\n    }\n    if (bestIou >= iouThreshold) matches.set(gtIdx, bestAnchor);\n  }\n  return matches;\n}"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IoU matching assigns anchor boxes to ground truth objects during training. For each ground truth box, the anchor with the highest IoU is assigned as a positive match (if IoU exceeds threshold,.\ntypically 0.5). Anchors with IoU below 0.4 are negative (background). Anchors with IoU between 0.4 and 0.5 are ignored during training. This ensures each ground truth is matched to at least one anchor,.\nand multiple anchors can match the same ground truth, providing redundancy that improves recall. The matching is done per feature pyramid level so that objects of different sizes match to appropriate scale levels."
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
        children: "Question 1 (mmai-s02-quiz1):"
      }), " What does mAP measure in object detection?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s02-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Mean Average Precision across all classes"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "mAP averages the per-class Average Precision (area under precision-recall curve)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 2 (mmai-s02-quiz2):"
      }), " What is the role of Non-Max Suppression (NMS)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s02-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Remove duplicate detections for the same object"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "NMS greedily selects the highest-scoring box and suppresses others with high IoU overlap."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 3 (mmai-s02-quiz3):"
      }), " How does YOLO differ from Faster R-CNN?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s02-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) YOLO predicts all boxes in one pass, Faster R-CNN uses region proposals first"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "YOLO is one-stage; Faster R-CNN is two-stage with a separate region proposal network."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 4 (mmai-s02-quiz4):"
      }), " What is an anchor box?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s02-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) A pre-defined box of a specific scale and aspect ratio"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Anchors serve as reference boxes; the network predicts offsets to adjust them."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 5 (mmai-s02-quiz5):"
      }), " What does IoU threshold control in evaluation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s02-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) How much overlap is required for a detection to count as true positive"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "A prediction is a true positive if its IoU with a ground truth box exceeds the threshold."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qa",
      children: "Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s02-q1",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the difference between classification and object detection?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Fundamental concepts in computer vision tasks."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Classification"
          }), " assigns a single label to the entire image. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Object detection"
          }), " identifies multiple objects and their locations via bounding boxes. Detection involves both classification (what object) and regression (where it is)."]
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
      "data-qid": "mmai-s02-q2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How does the R-CNN family of detectors work?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Two-stage detection architectures."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "R-CNN"
          }), " uses selective search for region proposals, then classifies each with a CNN. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fast R-CNN"
          }), " shares computation via RoI pooling on a single feature map. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Faster R-CNN"
          }), " replaces selective search with a learned Region Proposal Network (RPN), making the entire pipeline trainable end-to-end."]
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
      "data-qid": "mmai-s02-q3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the YOLO loss function composed of?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Loss components in single-shot detectors."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["YOLO loss has four terms: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "coordinate loss"
          }), " (MSE on box center and dimensions), ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "confidence loss"
          }), " (MSE on objectness score for cells with objects), ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "no-object loss"
          }), " (confidence loss for cells without objects, down-weighted), and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "classification loss"
          }), " (cross-entropy on class probabilities)."]
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
      "data-qid": "mmai-s02-q4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the purpose of anchor boxes in object detection?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Design choices for handling varying object shapes."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Anchor boxes are pre-defined bounding boxes of various scales and aspect ratios placed at each grid cell. The network predicts ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "offsets"
          }), " relative to these anchors rather than absolute coordinates. This simplifies learning by starting from a reasonable prior shape. Common anchor configurations include 3 scales — 3 aspect ratios = 9 anchors per cell."]
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
      "data-qid": "mmai-s02-q5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How is mean Average Precision (mAP) calculated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard object detection evaluation metric."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "mAP is computed by: (1) Calculate precision-recall curve per class. (2) Compute Average Precision (AP) as the area under the curve, often using 11-point interpolation. (3) Average AP across all classes. COCO mAP further averages across IoU thresholds from 0.50 to 0.95 in 0.05 steps."
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
      "data-qid": "mmai-s02-q6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What techniques improve detection of small objects?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Addressing scale variance in detection."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Techniques include: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature Pyramid Networks (FPN)"
          }), " — multi-scale feature maps for detecting objects at different scales. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Image pyramids"
          }), " — testing at multiple input resolutions. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Small-object-specific anchors"
          }), ". (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data augmentation"
          }), " — copy-paste, mosaic, and oversampling of images with small objects. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Higher-resolution input"
          }), "."]
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
      "data-qid": "mmai-s02-q7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the difference between one-stage and two-stage detectors?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Architecture paradigms in detection."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Two-stage detectors"
          }), " (e.g., Faster R-CNN) first generate region proposals, then classify and refine each proposal. They are generally more accurate but slower. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "One-stage detectors"
          }), " (e.g., YOLO, SSD) predict boxes and classes directly from grid cells in a single pass. They are faster and better suited for real-time applications, though historically less accurate at high IoU thresholds."]
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
      "data-qid": "mmai-s02-q8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How does focal loss address class imbalance in RetinaNet?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Handling foreground-background imbalance."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Focal loss down-weights well-classified examples (mostly background) and focuses on hard, misclassified examples. It adds a modulating factor ", (0,jsx_runtime.jsx)(_components.em, {
            children: "(1 - pt)^γ"
          }), " to the standard cross-entropy loss. With γ = 2, an example classified with 0.9 confidence gets 100— lower loss contribution than one classified at 0.1, preventing the vast number of background anchors from overwhelming training."]
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
      "data-qid": "mmai-s02-q9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the role of the Region Proposal Network in Faster R-CNN?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Key innovation in Faster R-CNN."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Region Proposal Network (RPN) is a fully convolutional network that shares convolutional features with the detection network. It slides a small network over the feature map and at each window outputs: (1) objectness score for each anchor (foreground vs. background), and (2) box regression deltas for refining anchor coordinates. The RPN replaces the slow selective search from earlier R-CNN variants."
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
      "data-qid": "mmai-s02-q10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you deploy an object detection model to production?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Production deployment considerations."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Steps include: (1) Export to ONNX for framework interoperability. (2) Optimize with TensorRT (FP16/INT8 quantization). (3) Set up a REST API with FastAPI wrapping the optimized model. (4) Use batch processing for throughput. (5) Implement NMS on the server side. (6) Monitor per-class AP drift over time. (7) A/B test new model versions against traffic shadowing."
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
            children: "Anchor Visualization"
          }), ": Generate anchors for a 7—7 grid with 3 scales and 3 aspect ratios. Visualize them on a blank 224—224 image. Count how many anchors are generated and note the coverage pattern."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IoU Computation"
          }), ": Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "batch_iou(boxes1, boxes2)"
          }), " that computes pairwise IoU between two sets of boxes. Test it with 5 ground truth boxes and 10 predicted boxes. What is the shape of the resulting matrix?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NMS Implementation"
          }), ": Implement standard NMS with IoU threshold 0.5. Test on 20 overlapping detections for \"person\" class. Compare with Soft-NMS at sigma=0.5. How many boxes survive with each approach?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "YOLO Decoding"
          }), ": Given raw YOLO output tensor of shape (1, 7, 7, 30), write a decoder that extracts all boxes above 0.3 confidence. Apply NMS and return the final detections. Test on a random tensor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "mAP Calculation"
          }), ": Create a small evaluation with 3 classes, 10 images, 5 ground truth boxes per image, and 10 predictions per image. Compute per-class AP and overall mAP@0.5. Which class performs best?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Anchor Matching"
          }), ": Given anchors at 2 scales and 2 aspect ratios (4 anchors/cell) on a 4—4 grid, implement the matching logic. For 3 ground truth boxes, determine which anchors are positive (IoU ≥ 0.5). How many positive anchors result?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Faster R-CNN Forward Pass"
          }), ": Implement a simplified Faster R-CNN forward pass: backbone → RPN → RoI pooling → classifier head. Use random data of shape (2, 3, 224, 224). Verify the output shapes at each stage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSD Multi-Scale Detection"
          }), ": Create an SSD-style model with 3 feature map scales (38—38, 19—19, 10—10). Configure 4 anchors per scale. Compute the total number of predictions. How does multi-scale help with detecting objects of different sizes?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Export and Quantize"
          }), ": Take a pre-trained detection model (e.g., torchvision's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fasterrcnn_resnet50_fpn"
          }), "), export it to ONNX, and apply dynamic quantization. Compare the model size and inference speed before and after quantization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Live Detection Pipeline"
          }), ": Build a webcam-based object detection pipeline using a YOLO model. Display FPS and detection overlay in real-time. Measure throughput with and without batching. What is the maximum FPS you can achieve on your"]
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
            children: "Explain the core idea of Object Detection in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Object Detection."
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
            children: "Describe a production bug caused by misunderstanding Object Detection. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Object Detection from 10 users to 10 million?"
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
            children: "Compare Object Detection with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Object Detection."
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
            children: "How does Object Detection behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Object Detection run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Object Detection that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Object Detection explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Object Detection\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Object Detection to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Object Detection (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Object Detection and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Object Detection-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Object Detection interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Object Detection in production today?"
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
        }), " Object Detection builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Object Detection before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Object Detection is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Object Detection in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Object Detection chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Object Detection is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Object Detection is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Object Detection is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Object Detection issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Object Detection in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Object Detection that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Object Detection is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Object Detection in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Object Detection and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Object Detection on an empty input?"
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
            children: "Complete Medium exercises, explain Object Detection to someone else"
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
        children: "Always write a one-line example of Object Detection from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Object Detection when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Object Detection twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Object Detection snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Object Detection listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Object Detection to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Object Detection by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Object Detection to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Object Detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Object Detection (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Object Detection problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Object Detection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Object Detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Object Detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Object Detection fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Object Detection is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Object Detection is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Object Detection, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Object Detection asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object Detection is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Object Detection."
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
        children: "Object Detection emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Object Detection today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Object Detection — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Object Detection changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Object Detection."
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
        children: "Object Detection appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Object Detection helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Object Detection concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Object Detection skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Object Detection to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Detection is like a recipe"
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
        }), " — this chapter contributes the Object Detection skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-02objectdetection-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Object Detection in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-02objectdetection-flash2",
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
      "data-qid": "18multimodalaivoice-02objectdetection-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Object Detection approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-02objectdetection-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Object Detection NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-02objectdetection-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Object Detection applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Object Detection (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Object Detection (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Object Detection-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Object Detection in production at scale"
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
        children: "Testing: pytest for unit tests of Object Detection code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Object Detection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Object Detection code."]
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
        }), " or your IDE's debugger to step through the Object Detection example code."]
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
        children: "Explain Object Detection in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Object Detection."
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
        children: "Tell me about a time you debugged a Object Detection problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Object Detection is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Object Detection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Object Detection logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Object Detection without notes"
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
        }), ": a small team uses Object Detection daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Object Detection patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Object Detection principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Object Detection shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Object Detection to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation",
        children: "Image Segmentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object Detection, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Object Detection depends on input size and distribution — always benchmark for your own data."
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