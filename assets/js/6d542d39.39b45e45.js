"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6552],{

/***/ 46018
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_18_multimodal_ai_voice_03_image_segmentation_md_6d5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-18-multimodal-ai-voice-03-image-segmentation-md-6d5.json
const site_docs_courses_ai_engineering_placement_18_multimodal_ai_voice_03_image_segmentation_md_6d5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/multimodal-ai-voice/03-image-segmentation","title":"Image Segmentation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation.md","sourceDirName":"courses/ai-engineering-placement/18-multimodal-ai-voice","slug":"/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":230,"frontMatter":{"id":"03-image-segmentation","slug":"/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation","title":"Image Segmentation","sidebar_label":"Image Segmentation","sidebar_position":230},"sidebar":"placementSidebar","previous":{"title":"Object Detection","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/02-object-detection"},"next":{"title":"OCR & Document AI","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/04-ocr-and-document-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation.md


const frontMatter = {
	id: '03-image-segmentation',
	slug: '/ai-engineering-placement/18-multimodal-ai-voice/03-image-segmentation',
	title: 'Image Segmentation',
	sidebar_label: 'Image Segmentation',
	sidebar_position: 230
};
const contentTitle = 'Image Segmentation';

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
  "value": "3.1 Segmentation Types",
  "id": "31-segmentation-types",
  "level": 2
}, {
  "value": "3.2 U-Net Architecture",
  "id": "32-u-net-architecture",
  "level": 2
}, {
  "value": "3.3 Mask R-CNN",
  "id": "33-mask-r-cnn",
  "level": 2
}, {
  "value": "3.4 Panoptic Segmentation",
  "id": "34-panoptic-segmentation",
  "level": 2
}, {
  "value": "3.5 Evaluation Metrics",
  "id": "35-evaluation-metrics",
  "level": 2
}, {
  "value": "3.6 Applications &amp; Deployment",
  "id": "36-applications--deployment",
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
    mermaid: "mermaid",
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
        id: "image-segmentation",
        children: "Image Segmentation"
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
            children: "Understand semantic, instance, and panoptic segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement U-Net for biomedical image segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build Mask R-CNN for instance segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply panoptic segmentation with unified architectures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate segmentation with IoU, Dice, and pixel accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy segmentation models for real-world applications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI is moving beyond text. Computer vision, speech recognition, and multimodal models process images, audio, and video. This module covers the tools and techniques for building multimodal AI applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding image segmentation is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how image segmentation works in practice."
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic, instance, panoptic — what each predicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-decoder with skip connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoI Align, mask head, multi-task loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panoptic Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified thing + stuff prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IoU, Dice coefficient, pixel accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applications & Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical, autonomous driving, satellite imagery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Input Image] --> B[Backbone]\r\n    B --> C[Semantic Head]\r\n    B --> D[Instance Head]\r\n    C --> E[Pixel-wise Labels]\r\n    D --> F[Mask Proposals]\r\n    E --> G[Panoptic Fusion]\r\n    F --> G\r\n    G --> H[Panoptic Output]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-segmentation-types",
      children: "3.1 Segmentation Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Segmentation assigns a label to every pixel. Semantic segmentation groups pixels by class, instance segmentation separates individual objects, and panoptic segmentation combines both."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nimport torch\r\nimport torch.nn as nn\r\nimport torch.nn.functional as F\r\nfrom typing import List, Tuple, Optional, Dict, Any\r\n\r\nclass SegmentationVisualizer:\r\n    \"\"\"Utilities for visualizing segmentation masks.\"\"\"\r\n\r\n    def __init__(self, num_classes: int, colors: Optional[np.ndarray] = None):\r\n        self.num_classes = num_classes\r\n        self.colors = colors or np.random.randint(0, 255, (num_classes, 3), dtype=np.uint8)\r\n\r\n    def overlay_mask(self, image: np.ndarray, mask: np.ndarray,\r\n                     alpha: float = 0.5) -> np.ndarray:\r\n        \"\"\"Overlay a segmentation mask on an image.\"\"\"\r\n        overlay = image.copy()\r\n        for cls_id in range(self.num_classes):\r\n            mask_binary = (mask == cls_id)\r\n            overlay[mask_binary] = (overlay[mask_binary] * (1 - alpha)\r\n                                    + self.colors[cls_id] * alpha)\r\n        return overlay.astype(np.uint8)\r\n\r\n    def decode_semantic(self, logits: np.ndarray) -> np.ndarray:\r\n        \"\"\"Convert class logits to pixel-wise labels.\"\"\"\r\n        return logits.argmax(axis=0) if logits.ndim == 3 else logits\r\n\r\n    @staticmethod\r\n    def rle_encode(mask: np.ndarray) -> Dict[str, Any]:\r\n        \"\"\"Run-length encode a binary mask (COCO format).\"\"\"\r\n        pixels = mask.flatten(order='F')\r\n        pixels = np.concatenate([[0], pixels, [0]])\r\n        runs = np.where(pixels[1:] != pixels[:-1])[0] + 1\r\n        runs[1::2] -= runs[0::2]\r\n        return {'counts': ' '.join(str(r) for r in runs), 'size': list(mask.shape)}\r\n\r\n    @staticmethod\r\n    def rle_decode(rle: Dict[str, Any]) -> np.ndarray:\r\n        \"\"\"Decode run-length encoded mask.\"\"\"\r\n        s = rle['size']\r\n        counts = list(map(int, rle['counts'].split()))\r\n        mask = np.zeros(s[0] * s[1], dtype=np.uint8)\r\n        pos = 0\r\n        for i in range(0, len(counts), 2):\r\n            pos += counts[i]\r\n            mask[pos:pos + counts[i + 1]] = 1\r\n            pos += counts[i + 1]\r\n        return mask.reshape(s, order='F')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-u-net-architecture",
      children: "3.2 U-Net Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "U-Net is a symmetric encoder-decoder with skip connections that preserve spatial details, making it ideal for biomedical segmentation where precise localization is critical."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DoubleConv(nn.Module):\r\n    \"\"\"Two convolutional layers with batch norm and ReLU.\"\"\"\r\n\r\n    def __init__(self, in_channels: int, out_channels: int):\r\n        super().__init__()\r\n        self.double_conv = nn.Sequential(\r\n            nn.Conv2d(in_channels, out_channels, kernel_size=3, padding=1),\r\n            nn.BatchNorm2d(out_channels),\r\n            nn.ReLU(inplace=True),\r\n            nn.Conv2d(out_channels, out_channels, kernel_size=3, padding=1),\r\n            nn.BatchNorm2d(out_channels),\r\n            nn.ReLU(inplace=True),\r\n        )\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        return self.double_conv(x)\r\n\r\nclass Down(nn.Module):\r\n    \"\"\"Downsampling block: max pool + double conv.\"\"\"\r\n\r\n    def __init__(self, in_channels: int, out_channels: int):\r\n        super().__init__()\r\n        self.maxpool_conv = nn.Sequential(\r\n            nn.MaxPool2d(2),\r\n            DoubleConv(in_channels, out_channels),\r\n        )\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        return self.maxpool_conv(x)\r\n\r\nclass Up(nn.Module):\r\n    \"\"\"Upsampling block: transpose conv + skip connection + double conv.\"\"\"\r\n\r\n    def __init__(self, in_channels: int, out_channels: int, bilinear: bool = True):\r\n        super().__init__()\r\n        if bilinear:\r\n            self.up = nn.Upsample(scale_factor=2, mode='bilinear', align_corners=True)\r\n            self.conv = DoubleConv(in_channels, out_channels)\r\n        else:\r\n            self.up = nn.ConvTranspose2d(\r\n                in_channels, in_channels // 2, kernel_size=2, stride=2\r\n            )\r\n            self.conv = DoubleConv(in_channels, out_channels)\r\n\r\n    def forward(self, x1: torch.Tensor, x2: torch.Tensor) -> torch.Tensor:\r\n        x1 = self.up(x1)\r\n        diff_y = x2.size()[2] - x1.size()[2]\r\n        diff_x = x2.size()[3] - x1.size()[3]\r\n        x1 = F.pad(x1, [diff_x // 2, diff_x - diff_x // 2,\r\n                        diff_y // 2, diff_y - diff_y // 2])\r\n        x = torch.cat([x2, x1], dim=1)\r\n        return self.conv(x)\r\n\r\nclass OutConv(nn.Module):\r\n    \"\"\"Final 1x1 convolution to produce output channels.\"\"\"\r\n\r\n    def __init__(self, in_channels: int, out_channels: int):\r\n        super().__init__()\r\n        self.conv = nn.Conv2d(in_channels, out_channels, kernel_size=1)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        return self.conv(x)\r\n\r\nclass UNet(nn.Module):\r\n    \"\"\"U-Net for semantic segmentation.\"\"\"\r\n\r\n    def __init__(self, n_channels: int = 3, n_classes: int = 2,\r\n                 base_channels: int = 64, bilinear: bool = True):\r\n        super().__init__()\r\n        self.n_channels = n_channels\r\n        self.n_classes = n_classes\r\n        self.bilinear = bilinear\r\n\r\n        self.inc = DoubleConv(n_channels, base_channels)\r\n        self.down1 = Down(base_channels, base_channels * 2)\r\n        self.down2 = Down(base_channels * 2, base_channels * 4)\r\n        self.down3 = Down(base_channels * 4, base_channels * 8)\r\n        factor = 2 if bilinear else 1\r\n        self.down4 = Down(base_channels * 8, base_channels * 16 // factor)\r\n\r\n        self.up1 = Up(base_channels * 16, base_channels * 8 // factor, bilinear)\r\n        self.up2 = Up(base_channels * 8, base_channels * 4 // factor, bilinear)\r\n        self.up3 = Up(base_channels * 4, base_channels * 2 // factor, bilinear)\r\n        self.up4 = Up(base_channels * 2, base_channels, bilinear)\r\n\r\n        self.outc = OutConv(base_channels, n_classes)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x1 = self.inc(x)\r\n        x2 = self.down1(x1)\r\n        x3 = self.down2(x2)\r\n        x4 = self.down3(x3)\r\n        x5 = self.down4(x4)\r\n        x = self.up1(x5, x4)\r\n        x = self.up2(x, x3)\r\n        x = self.up3(x, x2)\r\n        x = self.up4(x, x1)\r\n        logits = self.outc(x)\r\n        return logits\r\n\r\nclass UNetPlusPlus(nn.Module):\r\n    \"\"\"U-Net++ with nested skip connections for better gradient flow.\"\"\"\r\n\r\n    def __init__(self, n_channels: int = 3, n_classes: int = 2,\r\n                 base_channels: int = 32):\r\n        super().__init__()\r\n        self.pool = nn.MaxPool2d(2)\r\n\r\n        self.conv0_0 = DoubleConv(n_channels, base_channels)\r\n        self.conv1_0 = DoubleConv(base_channels, base_channels * 2)\r\n        self.conv2_0 = DoubleConv(base_channels * 2, base_channels * 4)\r\n        self.conv3_0 = DoubleConv(base_channels * 4, base_channels * 8)\r\n        self.conv4_0 = DoubleConv(base_channels * 8, base_channels * 16)\r\n\r\n        self.conv0_1 = DoubleConv(base_channels + base_channels * 2, base_channels)\r\n        self.conv1_1 = DoubleConv(base_channels * 2 + base_channels * 4, base_channels * 2)\r\n        self.conv2_1 = DoubleConv(base_channels * 4 + base_channels * 8, base_channels * 4)\r\n        self.conv3_1 = DoubleConv(base_channels * 8 + base_channels * 16, base_channels * 8)\r\n\r\n        self.conv0_2 = DoubleConv(base_channels * 2 + base_channels * 2, base_channels)\r\n        self.conv1_2 = DoubleConv(base_channels * 4 + base_channels * 4, base_channels * 2)\r\n        self.conv2_2 = DoubleConv(base_channels * 8 + base_channels * 8, base_channels * 4)\r\n\r\n        self.conv0_3 = DoubleConv(base_channels * 3 + base_channels * 2, base_channels)\r\n        self.conv1_3 = DoubleConv(base_channels * 6 + base_channels * 4, base_channels * 2)\r\n\r\n        self.conv0_4 = DoubleConv(base_channels * 4 + base_channels * 2, base_channels)\r\n\r\n        self.final = nn.Conv2d(base_channels, n_classes, kernel_size=1)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x0_0 = self.conv0_0(x)\r\n        x1_0 = self.conv1_0(self.pool(x0_0))\r\n        x0_1 = self.conv0_1(torch.cat([x0_0, F.interpolate(x1_0, scale_factor=2)], dim=1))\r\n\r\n        x2_0 = self.conv2_0(self.pool(x1_0))\r\n        x1_1 = self.conv1_1(torch.cat([x1_0, F.interpolate(x2_0, scale_factor=2)], dim=1))\r\n        x0_2 = self.conv0_2(torch.cat([x0_0, x0_1, F.interpolate(x1_1, scale_factor=2)], dim=1))\r\n\r\n        x3_0 = self.conv3_0(self.pool(x2_0))\r\n        x2_1 = self.conv2_1(torch.cat([x2_0, F.interpolate(x3_0, scale_factor=2)], dim=1))\r\n        x1_2 = self.conv1_2(torch.cat([x1_0, x1_1, F.interpolate(x2_1, scale_factor=2)], dim=1))\r\n        x0_3 = self.conv0_3(torch.cat([x0_0, x0_1, x0_2, F.interpolate(x1_2, scale_factor=2)], dim=1))\r\n\r\n        x4_0 = self.conv4_0(self.pool(x3_0))\r\n        x3_1 = self.conv3_1(torch.cat([x3_0, F.interpolate(x4_0, scale_factor=2)], dim=1))\r\n        x2_2 = self.conv2_2(torch.cat([x2_0, x2_1, F.interpolate(x3_1, scale_factor=2)], dim=1))\r\n        x1_3 = self.conv1_3(torch.cat([x1_0, x1_1, x1_2, F.interpolate(x2_2, scale_factor=2)], dim=1))\r\n        x0_4 = self.conv0_4(torch.cat([x0_0, x0_1, x0_2, x0_3, F.interpolate(x1_3, scale_factor=2)], dim=1))\r\n\r\n        return self.final(x0_4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-mask-r-cnn",
      children: "3.3 Mask R-CNN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mask R-CNN extends Faster R-CNN with a mask head that predicts a binary mask for each RoI using RoI Align (pixel-perfect RoI pooling)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RoIAlign(nn.Module):\r\n    \"\"\"RoI Align with bilinear interpolation (no quantization).\"\"\"\r\n\r\n    def __init__(self, output_size: Tuple[int, int], spatial_scale: float = 1.0):\r\n        super().__init__()\r\n        self.output_size = output_size\r\n        self.spatial_scale = spatial_scale\r\n\r\n    def forward(self, features: torch.Tensor, rois: torch.Tensor) -> torch.Tensor:\r\n        \"\"\"Extract fixed-size feature maps for each RoI.\"\"\"\r\n        n_rois = rois.shape[0]\r\n        out_h, out_w = self.output_size\r\n        _, c, feat_h, feat_w = features.shape\r\n        output = torch.zeros(n_rois, c, out_h, out_w, device=features.device)\r\n\r\n        for i in range(n_rois):\r\n            x1, y1, x2, y2 = rois[i] * self.spatial_scale\r\n            x1 = x1.clamp(0, feat_w - 1)\r\n            y1 = y1.clamp(0, feat_h - 1)\r\n            x2 = x2.clamp(0, feat_w - 1)\r\n            y2 = y2.clamp(0, feat_h - 1)\r\n\r\n            for h in range(out_h):\r\n                for w in range(out_w):\r\n                    xs = x1 + (x2 - x1) * w / (out_w - 1) if out_w > 1 else x1\r\n                    ys = y1 + (y2 - y1) * h / (out_h - 1) if out_h > 1 else y1\r\n                    x0 = int(xs)\r\n                    y0 = int(ys)\r\n                    x1_frac = xs - x0\r\n                    y1_frac = ys - y0\r\n                    x1_clamp = min(x0 + 1, feat_w - 1)\r\n                    y1_clamp = min(y0 + 1, feat_h - 1)\r\n                    output[i, :, h, w] = (\r\n                        features[0, :, y0, x0] * (1 - x1_frac) * (1 - y1_frac)\r\n                        + features[0, :, y0, x1_clamp] * x1_frac * (1 - y1_frac)\r\n                        + features[0, :, y1_clamp, x0] * (1 - x1_frac) * y1_frac\r\n                        + features[0, :, y1_clamp, x1_clamp] * x1_frac * y1_frac\r\n                    )\r\n        return output\r\n\r\nclass MaskHead(nn.Module):\r\n    \"\"\"Mask prediction head for Mask R-CNN.\"\"\"\r\n\r\n    def __init__(self, in_channels: int, num_classes: int,\r\n                 mask_size: int = 28):\r\n        super().__init__()\r\n        self.mask_size = mask_size\r\n        self.convs = nn.Sequential(\r\n            nn.Conv2d(in_channels, 256, 3, padding=1),\r\n            nn.ReLU(inplace=True),\r\n            nn.Conv2d(256, 256, 3, padding=1),\r\n            nn.ReLU(inplace=True),\r\n            nn.Conv2d(256, 256, 3, padding=1),\r\n            nn.ReLU(inplace=True),\r\n            nn.Conv2d(256, 256, 3, padding=1),\r\n            nn.ReLU(inplace=True),\r\n            nn.ConvTranspose2d(256, 256, 2, stride=2),\r\n            nn.ReLU(inplace=True),\r\n        )\r\n        self.mask_pred = nn.Conv2d(256, num_classes, 1)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x = self.convs(x)\r\n        mask_logits = self.mask_pred(x)\r\n        return mask_logits\r\n\r\nclass MaskRCNN(nn.Module):\r\n    \"\"\"Simplified Mask R-CNN combining detection and segmentation.\"\"\"\r\n\r\n    def __init__(self, backbone: nn.Module, num_classes: int):\r\n        super().__init__()\r\n        self.backbone = backbone\r\n        self.rpn = nn.Conv2d(512, 9 * 4, 1)\r\n        self.rpn_cls = nn.Conv2d(512, 9 * 2, 1)\r\n        self.roi_align = RoIAlign((7, 7))\r\n        self.roi_align_mask = RoIAlign((14, 14))\r\n\r\n        self.classifier = nn.Sequential(\r\n            nn.Linear(512 * 7 * 7, 1024),\r\n            nn.ReLU(),\r\n            nn.Linear(1024, num_classes * 5),\r\n        )\r\n        self.mask_head = MaskHead(512, num_classes)\r\n\r\n    def forward(self, x: torch.Tensor,\r\n                proposals: Optional[torch.Tensor] = None) -> Dict[str, torch.Tensor]:\r\n        features = self.backbone(x)\r\n        rpn_reg = self.rpn(features)\r\n        rpn_cls = self.rpn_cls(features)\r\n\r\n        if proposals is None:\r\n            proposals = torch.randn(100, 4, device=x.device) * 100\r\n\r\n        roi_feats = self.roi_align(features, proposals)\r\n        roi_feats_flat = roi_feats.view(roi_feats.size(0), -1)\r\n        detections = self.classifier(roi_feats_flat)\r\n\r\n        mask_feats = self.roi_align_mask(features, proposals)\r\n        masks = self.mask_head(mask_feats)\r\n\r\n        return {\r\n            \"rpn_reg\": rpn_reg,\r\n            \"rpn_cls\": rpn_cls,\r\n            \"detections\": detections,\r\n            \"masks\": masks,\r\n        }\r\n\r\n    def extract_masks(self, mask_logits: torch.Tensor,\r\n                      class_ids: torch.Tensor, threshold: float = 0.5) -> torch.Tensor:\r\n        \"\"\"Extract binary masks for detected objects.\"\"\"\r\n        num_rois = mask_logits.shape[0]\r\n        masks = torch.sigmoid(mask_logits)\r\n        binary_masks = torch.zeros(num_rois, 1, self.mask_head.mask_size,\r\n                                   self.mask_head.mask_size, device=mask_logits.device)\r\n        for i in range(num_rois):\r\n            cls_id = class_ids[i].item()\r\n            binary_masks[i, 0] = (masks[i, cls_id] > threshold).float()\r\n        return binary_masks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-panoptic-segmentation",
      children: "3.4 Panoptic Segmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Panoptic segmentation fuses semantic (stuff: sky, road) and instance (things: car, person) predictions into a unified output."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PanopticSegmenter:\r\n    \"\"\"Combine semantic and instance predictions into panoptic output.\"\"\"\r\n\r\n    def __init__(self, thing_classes: List[int], stuff_classes: List[int],\r\n                 stuff_void_label: int = 255):\r\n        self.thing_classes = set(thing_classes)\r\n        self.stuff_classes = set(stuff_classes)\r\n        self.stuff_void_label = stuff_void_label\r\n\r\n    def fuse(self, semantic_mask: np.ndarray,\r\n             instance_masks: List[np.ndarray],\r\n             instance_scores: List[float],\r\n             instance_classes: List[int],\r\n             confidence_threshold: float = 0.5,\r\n             overlap_threshold: float = 0.5) -> np.ndarray:\r\n        \"\"\"Fuse semantic and instance predictions into panoptic segmentation.\r\n\r\n        Returns:\r\n            panoptic: (H, W) where each pixel has a unique instance ID.\r\n            The ID encoding: instance_id * 1000 + class_id.\r\n        \"\"\"\r\n        h, w = semantic_mask.shape\r\n        panoptic = np.full((h, w), self.stuff_void_label, dtype=np.int32)\r\n\r\n        for cls_id in self.stuff_classes:\r\n            panoptic[semantic_mask == cls_id] = cls_id\r\n\r\n        instance_id = 1\r\n        for mask, score, cls_id in sorted(\r\n            zip(instance_masks, instance_scores, instance_classes),\r\n            key=lambda x: x[1], reverse=True\r\n        ):\r\n            if score < confidence_threshold:\r\n                continue\r\n            if cls_id not in self.thing_classes:\r\n                continue\r\n            overlap = np.sum(mask & (panoptic != self.stuff_void_label))\r\n            mask_area = np.sum(mask)\r\n            if mask_area > 0 and overlap / mask_area > overlap_threshold:\r\n                continue\r\n            panoptic[mask] = instance_id * 1000 + cls_id\r\n            instance_id += 1\r\n\r\n        for cls_id in self.stuff_classes:\r\n            panoptic[semantic_mask == cls_id] = cls_id\r\n\r\n        return panoptic\r\n\r\n    def visualize_panoptic(self, panoptic: np.ndarray) -> np.ndarray:\r\n        \"\"\"Colorize panoptic segmentation for visualization.\"\"\"\r\n        h, w = panoptic.shape\r\n        vis = np.zeros((h, w, 3), dtype=np.uint8)\r\n        np.random.seed(42)\r\n        colors = np.random.randint(0, 255, (1000, 3), dtype=np.uint8)\r\n        unique_ids = np.unique(panoptic)\r\n        for uid in unique_ids:\r\n            if uid == self.stuff_void_label:\r\n                continue\r\n            vis[panoptic == uid] = colors[hash(uid) % 1000]\r\n        return vis\r\n\r\nclass PanopticFPN(nn.Module):\r\n    \"\"\"Panoptic FPN combining semantic and instance branches.\"\"\"\r\n\r\n    def __init__(self, backbone_channels: List[int], num_thing_classes: int,\r\n                 num_stuff_classes: int):\r\n        super().__init__()\r\n        total_stuff = num_stuff_classes + 1  # +1 for void\r\n\r\n        self.semantic_head = nn.Sequential(\r\n            nn.Conv2d(sum(backbone_channels), 256, 3, padding=1),\r\n            nn.ReLU(),\r\n            nn.Conv2d(256, 256, 3, padding=1),\r\n            nn.ReLU(),\r\n            nn.Conv2d(256, total_stuff, 1),\r\n        )\r\n        self.instance_head = nn.Sequential(\r\n            nn.Conv2d(sum(backbone_channels), 256, 3, padding=1),\r\n            nn.ReLU(),\r\n            nn.Conv2d(256, 256, 3, padding=1),\r\n            nn.ReLU(),\r\n            nn.Conv2d(256, num_thing_classes * 5, 1),\r\n        )\r\n\r\n    def forward(self, features: List[torch.Tensor]) -> Dict[str, torch.Tensor]:\r\n        \"\"\"Forward pass with multi-scale feature fusion.\"\"\"\r\n        resized = []\r\n        target_size = features[-1].shape[-2:]\r\n        for feat in features:\r\n            resized.append(F.interpolate(feat, size=target_size,\r\n                                         mode='bilinear', align_corners=False))\r\n        fused = torch.cat(resized, dim=1)\r\n        semantic = self.semantic_head(fused)\r\n        instance = self.instance_head(fused)\r\n        return {\"semantic\": semantic, \"instance\": instance}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-evaluation-metrics",
      children: "3.5 Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Segmentation evaluation uses pixel-level metrics. IoU (Jaccard Index) and Dice (F1) are the most common, with mean IoU being the standard benchmark metric."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SegmentationMetrics:\r\n    \"\"\"Compute segmentation metrics: IoU, Dice, pixel accuracy.\"\"\"\r\n\r\n    def __init__(self, num_classes: int, ignore_index: int = 255):\r\n        self.num_classes = num_classes\r\n        self.ignore_index = ignore_index\r\n\r\n    def compute_confusion_matrix(self, pred: np.ndarray,\r\n                                 target: np.ndarray) -> np.ndarray:\r\n        \"\"\"Compute confusion matrix for all classes.\"\"\"\r\n        mask = (target != self.ignore_index)\r\n        pred = pred[mask]\r\n        target = target[mask]\r\n        conf_matrix = np.zeros((self.num_classes, self.num_classes), dtype=np.int64)\r\n        for t, p in zip(target.flatten(), pred.flatten()):\r\n            if t < self.num_classes and p < self.num_classes:\r\n                conf_matrix[t, p] += 1\r\n        return conf_matrix\r\n\r\n    def iou_per_class(self, conf_matrix: np.ndarray) -> np.ndarray:\r\n        \"\"\"Compute IoU per class from confusion matrix.\"\"\"\r\n        tp = np.diag(conf_matrix)\r\n        fp = conf_matrix.sum(axis=0) - tp\r\n        fn = conf_matrix.sum(axis=1) - tp\r\n        union = tp + fp + fn\r\n        return np.where(union > 0, tp / union, 0.0)\r\n\r\n    def dice_per_class(self, conf_matrix: np.ndarray) -> np.ndarray:\r\n        \"\"\"Compute Dice coefficient per class.\"\"\"\r\n        tp = np.diag(conf_matrix)\r\n        fp = conf_matrix.sum(axis=0) - tp\r\n        fn = conf_matrix.sum(axis=1) - tp\r\n        denominator = 2 * tp + fp + fn\r\n        return np.where(denominator > 0, 2 * tp / denominator, 0.0)\r\n\r\n    def pixel_accuracy(self, conf_matrix: np.ndarray) -> float:\r\n        \"\"\"Global pixel accuracy.\"\"\"\r\n        return np.diag(conf_matrix).sum() / conf_matrix.sum()\r\n\r\n    def mean_iou(self, conf_matrix: np.ndarray) -> float:\r\n        \"\"\"Mean IoU across all classes.\"\"\"\r\n        return float(self.iou_per_class(conf_matrix).mean())\r\n\r\n    def mean_dice(self, conf_matrix: np.ndarray) -> float:\r\n        \"\"\"Mean Dice across all classes.\"\"\"\r\n        return float(self.dice_per_class(conf_matrix).mean())\r\n\r\n    def evaluate(self, pred: np.ndarray, target: np.ndarray) -> Dict[str, Any]:\r\n        \"\"\"Compute all metrics.\"\"\"\r\n        conf_matrix = self.compute_confusion_matrix(pred, target)\r\n        class_iou = self.iou_per_class(conf_matrix)\r\n        class_dice = self.dice_per_class(conf_matrix)\r\n        return {\r\n            \"confusion_matrix\": conf_matrix,\r\n            \"class_iou\": class_iou,\r\n            \"class_dice\": class_dice,\r\n            \"mean_iou\": self.mean_iou(conf_matrix),\r\n            \"mean_dice\": self.mean_dice(conf_matrix),\r\n            \"pixel_accuracy\": self.pixel_accuracy(conf_matrix),\r\n        }\r\n\r\nclass BoundaryMetrics:\r\n    \"\"\"Compute boundary-specific segmentation metrics.\"\"\"\r\n\r\n    @staticmethod\r\n    def contour_iou(pred_mask: np.ndarray, gt_mask: np.ndarray,\r\n                    distance_threshold: float = 2.0) -> float:\r\n        \"\"\"Compute IoU restricted to boundary regions.\"\"\"\r\n        from scipy.ndimage import binary_dilation, binary_erosion\r\n        pred_boundary = binary_dilation(pred_mask) ^ binary_erosion(pred_mask)\r\n        gt_boundary = binary_dilation(gt_mask) ^ binary_erosion(gt_mask)\r\n        pred_boundary = binary_dilation(pred_boundary, iterations=int(distance_threshold))\r\n        gt_boundary = binary_dilation(gt_boundary, iterations=int(distance_threshold))\r\n        intersection = np.sum(pred_boundary & gt_boundary)\r\n        union = np.sum(pred_boundary | gt_boundary)\r\n        return intersection / (union + 1e-16)\r\n\r\n    @staticmethod\r\n    def hausdorff_distance(pred_boundary: np.ndarray,\r\n                           gt_boundary: np.ndarray) -> float:\r\n        \"\"\"Compute Hausdorff distance between segmentation boundaries.\"\"\"\r\n        pred_points = np.argwhere(pred_boundary)\r\n        gt_points = np.argwhere(gt_boundary)\r\n        if len(pred_points) == 0 or len(gt_points) == 0:\r\n            return float('inf')\r\n        from scipy.spatial.distance import cdist\r\n        dists = cdist(pred_points.astype(float), gt_points.astype(float))\r\n        return max(dists.min(axis=1).max(), dists.min(axis=0).max())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-applications--deployment",
      children: "3.6 Applications & Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Segmentation powers medical diagnostics, autonomous driving, satellite imagery analysis, and industrial quality inspection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SegmentationTrainer:\r\n    \"\"\"Trainer for segmentation models with augmentation and logging.\"\"\"\r\n\r\n    def __init__(self, model: nn.Module, learning_rate: float = 1e-4,\r\n                 device: str = \"cuda\"):\r\n        self.model = model.to(device)\r\n        self.device = device\r\n        self.optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)\r\n        self.history: Dict[str, List[float]] = {\"train_loss\": [], \"val_miou\": []}\r\n\r\n    def dice_loss(self, pred: torch.Tensor, target: torch.Tensor,\r\n                  smooth: float = 1e-6) -> torch.Tensor:\r\n        \"\"\"Dice loss for imbalanced segmentation.\"\"\"\r\n        pred = torch.softmax(pred, dim=1)\r\n        target_one_hot = F.one_hot(target, num_classes=pred.shape[1])\r\n        target_one_hot = target_one_hot.permute(0, 3, 1, 2).float()\r\n        intersection = (pred * target_one_hot).sum(dim=(2, 3))\r\n        union = pred.sum(dim=(2, 3)) + target_one_hot.sum(dim=(2, 3))\r\n        dice = (2 * intersection + smooth) / (union + smooth)\r\n        return 1 - dice.mean()\r\n\r\n    def combined_loss(self, pred: torch.Tensor, target: torch.Tensor,\r\n                      ce_weight: float = 0.5, dice_weight: float = 0.5) -> torch.Tensor:\r\n        \"\"\"Combined cross-entropy and Dice loss.\"\"\"\r\n        ce = F.cross_entropy(pred, target)\r\n        dice = self.dice_loss(pred, target)\r\n        return ce_weight * ce + dice_weight * dice\r\n\r\n    def train_epoch(self, loader: torch.utils.data.DataLoader) -> float:\r\n        self.model.train()\r\n        total_loss = 0.0\r\n        for images, targets in loader:\r\n            images = images.to(self.device)\r\n            targets = targets.to(self.device)\r\n            self.optimizer.zero_grad()\r\n            preds = self.model(images)\r\n            loss = self.combined_loss(preds, targets)\r\n            loss.backward()\r\n            self.optimizer.step()\r\n            total_loss += loss.item()\r\n        return total_loss / len(loader)\r\n\r\n    @torch.no_grad()\r\n    def validate(self, loader: torch.utils.data.DataLoader) -> float:\r\n        self.model.eval()\r\n        metrics = SegmentationMetrics(loader.dataset.num_classes)\r\n        conf_matrix = np.zeros((loader.dataset.num_classes, loader.dataset.num_classes),\r\n                               dtype=np.int64)\r\n        for images, targets in loader:\r\n            images = images.to(self.device)\r\n            preds = self.model(images)\r\n            pred_labels = preds.argmax(dim=1).cpu().numpy()\r\n            for pred, target in zip(pred_labels, targets.numpy()):\r\n                conf_matrix += metrics.compute_confusion_matrix(pred, target)\r\n        return metrics.mean_iou(conf_matrix)\r\n\r\nclass MedicalSegmentationPipeline:\r\n    \"\"\"End-to-end segmentation pipeline for medical imaging.\"\"\"\r\n\r\n    def __init__(self, model_path: str, device: str = \"cpu\"):\r\n        self.model = torch.jit.load(model_path, map_location=device)\r\n        self.model.eval()\r\n        self.device = device\r\n\r\n    @torch.no_grad()\r\n    def segment(self, image: np.ndarray,\r\n                return_overlay: bool = True) -> Dict[str, Any]:\r\n        \"\"\"Segment a medical image.\"\"\"\r\n        tensor = self._preprocess(image).to(self.device)\r\n        logits = self.model(tensor)\r\n        mask = logits.argmax(dim=1).squeeze(0).cpu().numpy()\r\n\r\n        result = {\"mask\": mask, \"logits\": logits.cpu().numpy()}\r\n        if return_overlay:\r\n            vis = SegmentationVisualizer(logits.shape[1])\r\n            result[\"overlay\"] = vis.overlay_mask(image, mask)\r\n        return result\r\n\r\n    def _preprocess(self, image: np.ndarray) -> torch.Tensor:\r\n        if image.ndim == 2:\r\n            image = np.stack([image] * 3, axis=-1)\r\n        img = image.astype(np.float32) / 255.0\r\n        tensor = torch.from_numpy(img).permute(2, 0, 1).unsqueeze(0)\r\n        return tensor\r\n\r\n    def segment_batch(self, images: List[np.ndarray]) -> List[np.ndarray]:\r\n        \"\"\"Segment a batch of images.\"\"\"\r\n        tensors = torch.cat([self._preprocess(img) for img in images])\r\n        tensors = tensors.to(self.device)\r\n        logits = self.model(tensors)\r\n        masks = logits.argmax(dim=1).cpu().numpy()\r\n        return list(masks)\r\n\r\nclass AutonomousDrivingSegmenter:\r\n    \"\"\"Segmentation model for autonomous driving scenes.\"\"\"\r\n\r\n    def __init__(self, model: nn.Module):\r\n        self.model = model\r\n        self.cityscapes_colors = {\r\n            0: (128, 64, 128),   # road\r\n            1: (244, 35, 232),   # sidewalk\r\n            2: (70, 70, 70),     # building\r\n            3: (102, 102, 156),  # wall\r\n            4: (190, 153, 153),  # fence\r\n        }\r\n\r\n    @torch.no_grad()\r\n    def segment_driving_scene(self, image: np.ndarray) -> np.ndarray:\r\n        \"\"\"Segment a driving scene and colorize the output.\"\"\"\r\n        tensor = torch.from_numpy(image).float().permute(2, 0, 1).unsqueeze(0) / 255.0\r\n        logits = self.model(tensor)\r\n        mask = logits.argmax(dim=1).squeeze(0).cpu().numpy()\r\n        h, w = mask.shape\r\n        colorized = np.zeros((h, w, 3), dtype=np.uint8)\r\n        for cls_id, color in self.cityscapes_colors.items():\r\n            colorized[mask == cls_id] = color\r\n        return colorized\r\n\r\n    def compute_drivable_area(self, mask: np.ndarray) -> float:\r\n        \"\"\"Compute percentage of drivable area (road + sidewalk).\"\"\"\r\n        road_mask = (mask == 0)\r\n        sidewalk_mask = (mask == 1)\r\n        total_pixels = mask.shape[0] * mask.shape[1]\r\n        drivable_pixels = road_mask.sum() + sidewalk_mask.sum()\r\n        return drivable_pixels / total_pixels\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image segmentation assigns labels to every pixel, with three levels of granularity: semantic (class per pixel), instance (distinct object masks), and.\r\npanoptic (both). U-Net remains the go-to architecture for medical segmentation due to its efficient encoder-decoder design with skip connections. Mask R-CNN extends detection with a parallel mask head for.\r\ninstance segmentation. Panoptic FPN unifies both tasks. Evaluation relies on mean IoU and Dice coefficient, with boundary-aware metrics for finer assessment. Deploying segmentation models requires careful handling of memory-intensive mask outputs and.\r\napplication-specific post-processing."
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
            children: "Start with U-Net for any segmentation task"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use the provided ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNet"
            }), " class as a baseline"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combine Dice loss with cross-entropy for imbalanced classes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "combined_loss()"
            }), " with equal weights"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use RoI Align instead of RoI Pool for mask prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bilinear interpolation preserves spatial fidelity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate with mean IoU, not just pixel accuracy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SegmentationMetrics"
            }), " for per-class analysis"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-process masks with CRF refinement for sharper boundaries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pydensecrf"
            }), " Python package"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Export to ONNX with dynamic axes for variable input sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set dynamic_axes for height and width dimensions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between semantic segmentation, instance segmentation, and panoptic segmentation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Semantic segmentation assigns a class label to every pixel — all pixels belonging to \"car\" get the same label regardless of which car. Instance segmentation identifies individual object instances — each car gets a unique ID with its own mask..\nPanoptic segmentation unifies both: it assigns a class label to \"stuff\" (amorphous regions like sky,.\nroad) and a class+instance ID to \"things\" (countable objects like cars, people). Panoptic Quality (PQ) is the unified metric: PQ = Σ(tp) / (Σ(tp) + 0.5*Σ(fp) + 0.5*Σ(fn)),.\ncomputed per class and averaged. Panoptic FPN is a popular architecture that adds a panoptic head to the standard Mask R-CNN/Faster R-CNN framework."
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
      "data-qid": "mm03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does U-Net architecture work and why are skip connections critical?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "U-Net has a symmetric encoder-decoder structure. The encoder (contracting path) uses repeated convolutional + max-pooling layers to downsample and capture context. The decoder (expanding path) upsamples feature maps back to the original resolution. Skip connections concatenate feature maps from each.\nencoder level to the corresponding decoder level. This is critical because downsampling loses spatial detail needed for.\nprecise localization. Without skip connections, the decoder only has coarse, semantic information from the bottleneck, producing blurry segmentations. Skip connections give the decoder access to high-resolution spatial details (edges,.\ntexture) directly, enabling pixel-accurate masks. U-Net was designed for biomedical images with limited data, and its efficient use of parameters makes it highly effective."
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
      "data-qid": "mm03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the Dice loss and when would you use it over cross-entropy for segmentation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dice loss is based on the Dice coefficient (F1 score at the pixel level): Dice = 2*|A∩B| / (|A| + |B|). The loss is 1 - Dice. It directly optimizes the overlap between predicted and.\nground truth masks. Use Dice loss when: (1) Classes are highly imbalanced — cross-entropy can get stuck predicting only the background class. Dice loss naturally handles imbalance because it measures relative overlap regardless of absolute size. (2) You care about the region overlap metric (mIoU or.\nDice) as the final evaluation metric. (3) Small objects are critical — cross-entropy is dominated by large regions. In practice, many state-of-the-art models use a combined loss: 0.5*cross-entropy + 0.5*Dice loss,.\ngetting the benefits of both — cross-entropy for easy optimization and Dice for overlap focus."
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
      "data-qid": "mm03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does Mask R-CNN extend Faster R-CNN for instance segmentation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mask R-CNN adds a parallel mask prediction branch to Faster R-CNN. In addition to the classification head (class prediction) and box regression head (bounding box refinement),.\nMask R-CNN introduces a mask head that predicts a binary mask for each Region of Interest (RoI). The mask head is a small FCN applied to each RoI,.\noutputting a 28—28 binary mask. A key improvement is RoI Align, which replaces RoI Pool's quantization with bilinear interpolation, preserving sub-pixel spatial accuracy essential for.\nmasks. The overall loss becomes: L = L_cls + L_box + L_mask, where L_mask is the average binary cross-entropy loss per-pixel. The mask branch is only used during training;.\nat inference, masks are generated for the top-K detections after NMS."
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
      "data-qid": "mm03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is mean IoU and how is it computed for segmentation evaluation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mean Intersection over Union (mIoU) measures the overlap between predicted and ground truth segmentation masks. For each class, IoU = TP / (TP + FP + FN),.\nwhere TP are pixels correctly predicted as that class, FP are pixels incorrectly predicted as that class, and FN are pixels of that class missed. The \"mean\" averages IoU across all classes. Unlike pixel accuracy (which is dominated by majority classes),.\nmIoU treats each class equally, making it sensitive to rare class performance. For example, if the background is 95% of pixels and.\nthe model predicts all as background, pixel accuracy is 95% but mIoU is 50% or lower. mIoU is the standard metric for.\nsegmentation benchmarks like Cityscapes (19 classes) and ADE20K (150 classes)."
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
      "data-qid": "mm03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you handle class imbalance in segmentation datasets?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Class imbalance in segmentation is severe — background classes often dominate 90%+ of pixels. Strategies: (1) Weighted cross-entropy — assign weights inversely proportional to class frequency. Rare classes get higher weight. (2) Dice loss — naturally handles imbalance as it measures overlap ratio,.\nnot absolute pixel count. (3) Focal loss — down-weights well-classified pixels, forcing the model to focus on boundary regions and rare classes. (4) Patch-based sampling — crop training patches that contain rare classes with higher probability. (5) Class-balanced sampling — ensure each batch contains a minimum number of pixels for.\neach rare class. (6) Data augmentation — oversample images containing rare classes, copy-paste rare objects onto other images. A combined Dice + cross-entropy loss with class weights is the most common production approach."
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
      "data-qid": "mm03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What data augmentations are most effective for medical image segmentation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Medical segmentation benefits from: (1) Elastic deformations — simulate tissue deformation, crucial for organs that shift. (2) Random rotation and flipping — must be limited (90° increments) for.\nmedical images with anatomical orientation. (3) Intensity augmentations — random brightness, contrast, gamma, and Gaussian noise, because medical images vary by scanner settings. (4) Cutout — randomly mask square regions to improve robustness to artifacts. (5) Mixup — blend two images and.\ntheir masks to create realistic-looking training examples. (6) Histogram equalization — simulate different staining/contrast levels. All augmentations must be applied identically to the image and.\nmask. The nnU-Net framework automatically selects optimal augmentations based on dataset properties and has become the de facto standard."
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
      "data-qid": "mm03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does RoI Align work and why is it better than RoI Pooling for mask prediction?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RoI Pooling quantizes the RoI boundaries to integer coordinates and divides the RoI into fixed-size bins using max pooling within each bin. This quantization causes misalignment of up to 1 pixel,.\nwhich is tolerable for classification but fatal for pixel-accurate mask prediction. RoI Align avoids quantization by: (1) Keeping RoI coordinates as floating-point values. (2) Dividing the RoI into bins of equal size (e.g.,.\n7—7 or 14—14). (3) For each bin, sampling 4 regular points and computing their feature values via bilinear interpolation. (4) Using max or.\naverage of these 4 sampled values as the bin output. This preserves sub-pixel spatial accuracy, which is crucial since mask prediction requires precise pixel-level localization. RoI Align improved mask AP by 2-5 points over RoI Pooling in Mask R-CNN."
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
      "data-qid": "mm03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you deploy segmentation models on large images (e.g., satellite or pathology)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Large images (e.g., 10,000—10,000 pixels) exceed GPU memory. The approach is tiling: (1) Divide the large image into overlapping tiles (e.g.,.\n512—512 with 64-pixel overlap). (2) Run segmentation on each tile independently. (3) Reconstruct the full-resolution mask by combining tile predictions, using overlap averaging to smooth boundary artifacts. (4) For.\ntiles near the edge, mirror padding to maintain context. Optimizations: (1) Process tiles in batches for throughput. (2) Use a sliding window with stride to reduce redundant computations. (3) Cache intermediate features if multiple tiles share context. (4) For.\npathology, use multi-resolution tiling — downsample for context, upsample for detail. Tools like OpenSlide handle gigapixel pathology images efficiently."
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
      "data-qid": "mm03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you implement U-Net from scratch and verify the output shapes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function buildUNet(inChannels: number, outChannels: number, baseChannels: number = 64) {\n  // Encoder: double channels, halve spatial dims\n  const enc1 = convBlock(inChannels, baseChannels);      // 3→64, 256—256\n  const enc2 = convBlock(baseChannels, baseChannels * 2); // 64→128, 128—128\n  const enc3 = convBlock(baseChannels * 2, baseChannels * 4); // 128→256, 64—64\n  const bottleneck = convBlock(baseChannels * 4, baseChannels * 8); // 256→512, 32—32\n  // Decoder: halve channels, double spatial dims, then concatenate skip\n  const dec3 = upConvBlock(baseChannels * 8, baseChannels * 4); // 512→256+256=512, 64—64\n  const dec2 = upConvBlock(baseChannels * 4, baseChannels * 2); // 256→128+128=256, 128—128\n  const dec1 = upConvBlock(baseChannels * 2, baseChannels);     // 128→64+64=128, 256—256\n  const output = Conv2d(baseChannels, outChannels, 1);          // 64→numClasses\n  return { enc1, enc2, enc3, bottleneck, dec3, dec2, dec1, output };\n}"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A U-Net implementation follows the encoder-bottleneck-decoder pattern. The encoder halves spatial dimensions and doubles channels at each level using 3—3 convolutions followed by max-pooling. The decoder up-samples (using transposed convolutions or.\nbilinear upsampling + conv), concatenates the corresponding encoder feature map via skip connection, then applies 3—3 convolutions. The final layer is a 1—1 convolution to map to the desired number of output channels (classes). Verify shapes: input (1—3—256—256) → bottleneck.\n(1—512—32—32) → output (1—num_classes—256—256). Count parameters by summing all conv layers: each 3—3 conv contributes 9—C_in—C_out + C_out parameters."
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
        children: "Question 1 (mmai-s03-quiz1):"
      }), " What is the difference between semantic and instance segmentation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s03-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Semantic assigns class per pixel; instance separates individual objects"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Semantic segmentation labels all pixels of the same class identically. Instance segmentation assigns a unique ID per object instance even within the same class."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 2 (mmai-s03-quiz2):"
      }), " What architectural feature makes U-Net effective for segmentation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s03-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Skip connections between encoder and decoder"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Skip connections pass spatial information from encoder to decoder, preserving fine details needed for precise localization."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 3 (mmai-s03-quiz3):"
      }), " How does Mask R-CNN extend Faster R-CNN?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s03-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Adds a parallel mask head for binary segmentation per RoI"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Mask R-CNN adds a branch that predicts a binary mask for each RoI, running in parallel with the classification and bounding box regression heads."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 4 (mmai-s03-quiz4):"
      }), " What is panoptic segmentation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s03-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Unified prediction of both stuff (semantic) and things (instances)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Panoptic segmentation produces a single output where each pixel gets a class label and, for countable objects, a unique instance ID."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 5 (mmai-s03-quiz5):"
      }), " What metric is most commonly used for segmentation evaluation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s03-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Mean Intersection over Union (mIoU)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Mean IoU averages the per-class IoU scores, providing a balanced measure that handles class imbalance better than pixel accuracy."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qa",
      children: "Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s03-q1",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the role of skip connections in U-Net?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Architecture design in encoder-decoder networks."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skip connections concatenate feature maps from the encoder to corresponding decoder layers. This allows the decoder to access high-resolution spatial details that would otherwise be lost during downsampling. In U-Net, each decoder level receives both the upsampled feature map and the skip-connected encoder feature from the same level, enabling precise localization combined with semantic context."
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
      "data-qid": "mmai-s03-q2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How does RoI Align differ from RoI Pooling?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Precision of feature extraction for mask prediction."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RoI Pooling quantizes the region boundaries (floor/ceil) to integer coordinates, causing misalignment of up to 1 pixel. RoI Align avoids quantization by using bilinear interpolation to sample feature values at fractional coordinates. This preserves sub-pixel accuracy and is critical for mask prediction, where pixel-level precision directly impacts segmentation quality."
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
      "data-qid": "mmai-s03-q3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What loss functions are commonly used for segmentation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Choosing the right objective for pixel-wise prediction."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Common losses include: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cross-entropy"
          }), " — standard per-pixel classification loss. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dice loss"
          }), " — directly optimizes overlap, effective for imbalanced classes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Focal loss"
          }), " — down-weights easy pixels, useful for boundary regions. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Combined loss"
          }), " — cross-entropy + Dice (typically 0.5 each). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Boundary loss"
          }), " — penalizes errors near object boundaries using distance transforms."]
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
      "data-qid": "mmai-s03-q4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you handle class imbalance in segmentation datasets?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Dealing with rare classes and large background regions."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Strategies include: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Weighted cross-entropy"
          }), " — assign higher weight to rare classes based on inverse frequency. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dice loss"
          }), " — naturally handles imbalance by measuring overlap. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Focal loss"
          }), " — reduces contribution of well-classified pixels. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Oversampling"
          }), " — crop patches that contain rare classes. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Class-balanced sampling"
          }), " — ensure each batch has adequate representation of all classes."]
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
      "data-qid": "mmai-s03-q5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the difference between things and stuff in panoptic segmentation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Categorizing objects and regions."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Things"
          }), " are countable objects with well-defined shapes (e.g., person, car, dog). They are evaluated with instance-level metrics like AP. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stuff"
          }), " are amorphous regions without clear instances (e.g., sky, road, grass). They are evaluated with semantic metrics like mIoU. Panoptic segmentation computes a single PQ (Panoptic Quality) metric combining both: PQ = Σ(tp) / (Σ(tp) + 0.5 * Σ(fp) + 0.5 * Σ(fn))."]
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
      "data-qid": "mmai-s03-q6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you evaluate segmentation models on medical images?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Special considerations for medical imaging."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Medical segmentation evaluation uses: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dice coefficient"
          }), " — most common, measures overlap. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hausdorff distance"
          }), " — measures boundary agreement. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Volume similarity"
          }), " — compares predicted and ground truth volumes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lesion-wise detection rate"
          }), " — per-lesion true positive rate for small lesions. Cross-validation is standard due to small dataset sizes. Statistical significance (Wilcoxon signed-rank test) is reported when comparing methods."]
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
      "data-qid": "mmai-s03-q7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What data augmentations work well for segmentation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Improving generalization with limited data."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Effective augmentations include: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Geometric"
          }), " — random flip, rotation (90° increments for medical), elastic deformation, random crop. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Photometric"
          }), " — brightness, contrast, gamma adjustment. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Noise"
          }), " — Gaussian noise, blur. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cutout"
          }), " — randomly masking regions. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mixup"
          }), " — blending two images and their masks. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy-paste"
          }), " — pasting object instances from one image onto another. All augmentations must be applied consistently to both image and mask."]
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
      "data-qid": "mmai-s03-q8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you deploy segmentation models at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Production considerations for segmentation."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Key considerations: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model quantization"
          }), " — INT8 quantization can reduce size 4— with minimal mIoU drop. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tiling"
          }), " — process large images in overlapping tiles to fit GPU memory. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-GPU"
          }), " — shard tiles across GPUs. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Async I/O"
          }), " — overlap data loading with inference. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching"
          }), " — cache model outputs for identical inputs. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Post-processing"
          }), " — CRF, connected components, and hole-filling on CPU. (7) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " — track mIoU drift and data distribution shifts."]
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
      "data-qid": "mmai-s03-q9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What architectures work best for real-time segmentation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Speed-accuracy tradeoffs in segmentation."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Real-time architectures include: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ICNet"
          }), " — cascaded feature maps at multiple resolutions. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BiSeNet"
          }), " — separate spatial and context paths fused for fast inference. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SwiftNet"
          }), " — pyramid fusion with lightweight decoder. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "STDC"
          }), " — short-term dense concatenation modules. These achieve 30-100+ FPS on embedded devices while maintaining 70-80% mIoU on Cityscapes. The key is reducing decoder complexity and using lightweight backbones like MobileNet."]
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
      "data-qid": "mmai-s03-q10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you handle segmentation of 3D medical volumes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Extending segmentation to volumetric data."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Three approaches: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2D slice-by-slice"
          }), " — apply U-Net to each slice independently. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D convolutions"
          }), " — use 3D U-Net with volumetric kernels (memory-intensive). (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid"
          }), " — 2.5D by stacking adjacent slices as input channels. 3D U-Net variants (V-Net, nnU-Net) achieve state-of-the-art by using residual connections, deep supervision, and automatic configuration. Memory constraints are managed through patch-based training with large overlap."]
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
            children: "U-Net from Scratch"
          }), ": Implement U-Net with base_channels=32, n_classes=10. Create a random input of shape (1, 3, 256, 256). Forward pass and confirm output shape is (1, 10, 256, 256). Count total parameters."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Skip Connection Analysis"
          }), ": Modify U-Net to remove skip connections. Train both versions on a toy dataset (circles vs. background) for 10 epochs. Compare mIoU on validation. How much do skip connections help?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dice Loss Implementation"
          }), ": Implement Dice loss, Jaccard loss, and Tversky loss. Compare their gradients on a toy example where the prediction is all zeros but target has a small foreground region. Which loss produces the largest gradient?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mask R-CNN Forward Pass"
          }), ": Build Mask R-CNN with a ResNet-18 backbone. Create 50 random proposals. Run forward pass and verify the shapes of rpn_reg, rpn_cls, detections, and masks outputs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Panoptic Fusion"
          }), ": Given a semantic mask with 8 stuff classes and instance predictions for 3 thing classes, implement panoptic fusion. Handle overlaps by prioritizing higher-confidence instance predictions. Visualize the result."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "mIoU vs. Pixel Accuracy"
          }), ": Create an imbalanced segmentation scenario where class 0 has 90% of pixels. Predict all pixels as class 0. Compute pixel accuracy and mIoU. Why does mIoU better reflect the failure to predict minority classes?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Augmentation Pipeline"
          }), ": Build an augmentation pipeline using albumentations with: random crop (256—256), horizontal flip, brightness/contrast, elastic transform, and cutout. Apply to a sample image. Augmentations must preserve mask alignment."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Model Quantization for Segmentation"
          }), ": Train a small U-Net on a toy dataset. Apply dynamic and static quantization. Measure size reduction and mIoU drop. Which quantization method preserves accuracy better?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tiling Large Images"
          }), ": Write a tiling function that splits a 4000—4000 satellite image into 512—512 tiles with 64-pixel overlap. Segment each tile and reconstruct the full-resolution mask. Handle tile boundary artifacts by averaging overlapping predictions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-time Segmentation Pipeline"
          }), ": Build a webcam segmentation app using BiSeNet or a lightweight U-Net. Display the overlay at >30 FPS. Benchmark CPU vs. GPU performance. What is the bottleneck (preprocessing, inference, or post-pro"]
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
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
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
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
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
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
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
            children: "How does Image Segmentation behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Image Segmentation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Image Segmentation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Image Segmentation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Image Segmentation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Image Segmentation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Image Segmentation in production today?"
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
        }), " Image Segmentation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Image Segmentation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Image Segmentation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Image Segmentation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Image Segmentation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Image Segmentation is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Image Segmentation is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Image Segmentation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Image Segmentation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Image Segmentation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Image Segmentation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Image Segmentation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
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
            children: "Complete Medium exercises, explain Image Segmentation to someone else"
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
        children: "Always write a one-line example of Image Segmentation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Image Segmentation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Image Segmentation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Image Segmentation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Image Segmentation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Image Segmentation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Image Segmentation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Image Segmentation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Segmentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 18 — builds the foundation for 03 Image Segmentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Image Segmentation with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Image Segmentation fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Image Segmentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Image Segmentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Image Segmentation?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Image Segmentation?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Image Segmentation asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Image Segmentation?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image Segmentation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Image Segmentation."
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
        children: "Image Segmentation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Image Segmentation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Image Segmentation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Image Segmentation changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 Image Segmentation is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Image Segmentation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-03imagesegmentation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Image Segmentation in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-03imagesegmentation-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-03imagesegmentation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Image Segmentation approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-03imagesegmentation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Image Segmentation NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-03imagesegmentation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Image Segmentation applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Image Segmentation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Image Segmentation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Image Segmentation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Image Segmentation in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Segmentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 03 Image Segmentation pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Image Segmentation."
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
        children: "Tell me about a time you debugged a Image Segmentation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Image Segmentation is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_image_segmentation(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Image Segmentation.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Image Segmentation here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
            children: "Explain Image Segmentation without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/04-ocr-and-document-ai",
        children: "OCR & Document AI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image Segmentation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Image Segmentation depends on input size and distribution — always benchmark for your own data."
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