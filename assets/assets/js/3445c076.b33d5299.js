"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7341],{

/***/ 23470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_08_training_pipelines_md_344_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-09-deep-learning-pytorch-08-training-pipelines-md-344.json
const site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_08_training_pipelines_md_344_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/deep-learning-pytorch/08-training-pipelines","title":"Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines.md","sourceDirName":"courses/ai-engineering-placement/09-deep-learning-pytorch","slug":"/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":133,"frontMatter":{"id":"08-training-pipelines","slug":"/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines","title":"Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing","sidebar_label":"Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing","sidebar_position":133},"sidebar":"placementSidebar","previous":{"title":"RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm"},"next":{"title":"Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines.md


const frontMatter = {
	id: '08-training-pipelines',
	slug: '/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines',
	title: 'Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing',
	sidebar_label: 'Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing',
	sidebar_position: 133
};
const contentTitle = 'Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing';

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
  "value": "8.1 Data Pipelines",
  "id": "81-data-pipelines",
  "level": 2
}, {
  "value": "8.2 Optimizers",
  "id": "82-optimizers",
  "level": 2
}, {
  "value": "8.3 LR Schedulers",
  "id": "83-lr-schedulers",
  "level": 2
}, {
  "value": "8.4 Checkpointing",
  "id": "84-checkpointing",
  "level": 2
}, {
  "value": "8.5 Gradient Accumulation",
  "id": "85-gradient-accumulation",
  "level": 2
}, {
  "value": "8.6 Mixed Precision",
  "id": "86-mixed-precision",
  "level": 2
}, {
  "value": "8.7 Early Stopping",
  "id": "87-early-stopping",
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
    hr: "hr",
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
        id: "training-pipelines--dataloader-transforms-optimizers-schedulers-checkpointing",
        children: "Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing"
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
            children: "Build efficient data pipelines with DataLoader, Dataset, and transforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure optimizers: SGD, SGD with momentum, Adam, AdamW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement learning rate schedulers: StepLR, CosineAnnealingLR, OneCycleLR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement checkpointing, gradient accumulation, and early stopping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply mixed precision training with automatic mixed precision (AMP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a complete training pipeline with logging and metrics tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep learning powers modern AI breakthroughs. PyTorch is the framework of choice for researchers and production engineers alike. This module covers neural networks, CNNs, RNNs, and deployment best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding training pipelines is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how training pipelines works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dataset, DataLoader, transforms, collate_fn, worker setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SGD momentum, Adam, AdamW, weight decay, parameter groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LR Schedulers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step, Cosine, OneCycle, ReduceLROnPlateau, warmup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpointing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "save/load, resume training, best model tracking, model zoo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Accumulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Effective batch size, gradient scaling, memory management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP16/FP32, AMP, GradScaler, loss scaling, hardware support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early Stopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patience, min delta, restore best weights, convergence detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    A[Raw Data] --> B[Dataset Class]\r\n    B --> C[Transforms]\r\n    C --> D[DataLoader]\r\n    D --> E[Training Loop]\r\n    E --> F[Forward Pass]\r\n    F --> G[Loss Computation]\r\n    G --> H{Accumulate?}\r\n    H -->|Yes| I[Scale Loss / N]\r\n    I --> J[Backward]\r\n    J --> K[Step Counter]\r\n    H -->|No| L[Backward]\r\n    L --> M[Optimizer Step]\r\n    M --> N[Zero Grad]\r\n    K --> N\r\n    N --> O[Scheduler Step]\r\n    O --> P[Checkpoint?]\r\n    P -->|Yes| Q[Save State]\r\n    Q --> R[Validation]\r\n    P -->|No| R\r\n    R --> S{Early Stop?}\r\n    S -->|No| E\r\n    S -->|Yes| T[Restore Best]\r\n    T --> U[Done]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-data-pipelines",
      children: "8.1 Data Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom datasets and efficient data loading are the foundation of any training pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\r\nimport torch.nn as nn\r\nimport torch.optim as optim\r\nfrom torch.utils.data import Dataset, DataLoader, TensorDataset\r\nfrom torchvision import transforms, datasets\r\nimport torchvision.transforms.functional as TF\r\nfrom torch.cuda.amp import autocast, GradScaler\r\nimport numpy as np\r\nimport random\r\nimport os\r\nfrom typing import Optional, Callable, List, Tuple\r\nfrom pathlib import Path\r\n\r\nclass CustomImageDataset(Dataset):\r\n    def __init__(self, root_dir: str, transform: Optional[Callable] = None,\r\n                 is_train: bool = True):\r\n        self.root_dir = Path(root_dir)\r\n        self.transform = transform\r\n        self.classes = sorted([d.name for d in self.root_dir.iterdir() if d.is_dir()])\r\n        self.class_to_idx = {c: i for i, c in enumerate(self.classes)}\r\n        self.samples = self._load_samples()\r\n\r\n    def _load_samples(self) -> List[Tuple[str, int]]:\r\n        samples = []\r\n        for class_name in self.classes:\r\n            class_dir = self.root_dir / class_name\r\n            for img_path in class_dir.iterdir():\r\n                if img_path.suffix.lower() in (\".jpg\", \".png\", \".jpeg\"):\r\n                    samples.append((str(img_path), self.class_to_idx[class_name]))\r\n        return samples\r\n\r\n    def __len__(self) -> int:\r\n        return len(self.samples)\r\n\r\n    def __getitem__(self, idx: int) -> Tuple[torch.Tensor, int]:\r\n        img_path, label = self.samples[idx]\r\n        from PIL import Image\r\n        image = Image.open(img_path).convert(\"RGB\")\r\n        if self.transform:\r\n            image = self.transform(image)\r\n        return image, label\r\n\r\nclass TransformPipeline:\r\n    @staticmethod\r\n    def train_transform(image_size: int = 224) -> transforms.Compose:\r\n        return transforms.Compose([\r\n            transforms.RandomResizedCrop(image_size, scale=(0.8, 1.0)),\r\n            transforms.RandomHorizontalFlip(p=0.5),\r\n            transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),\r\n            transforms.RandomRotation(degrees=15),\r\n            transforms.ToTensor(),\r\n            transforms.Normalize(mean=[0.485, 0.456, 0.406],\r\n                                 std=[0.229, 0.224, 0.225]),\r\n        ])\r\n\r\n    @staticmethod\r\n    def val_transform(image_size: int = 224) -> transforms.Compose:\r\n        return transforms.Compose([\r\n            transforms.Resize(int(image_size * 1.14)),\r\n            transforms.CenterCrop(image_size),\r\n            transforms.ToTensor(),\r\n            transforms.Normalize(mean=[0.485, 0.456, 0.406],\r\n                                 std=[0.229, 0.224, 0.225]),\r\n        ])\r\n\r\nclass EfficientDataLoader:\r\n    @staticmethod\r\n    def create_loaders(\r\n        train_dir: str, val_dir: str, batch_size: int = 32,\r\n        num_workers: int = 4, image_size: int = 224\r\n    ) -> Tuple[DataLoader, DataLoader, List[str]]:\r\n        train_dataset = CustomImageDataset(\r\n            train_dir, transform=TransformPipeline.train_transform(image_size)\r\n        )\r\n        val_dataset = CustomImageDataset(\r\n            val_dir, transform=TransformPipeline.val_transform(image_size)\r\n        )\r\n        train_loader = DataLoader(\r\n            train_dataset, batch_size=batch_size, shuffle=True,\r\n            num_workers=num_workers, pin_memory=True, drop_last=True,\r\n            persistent_workers=True,\r\n        )\r\n        val_loader = DataLoader(\r\n            val_dataset, batch_size=batch_size, shuffle=False,\r\n            num_workers=num_workers, pin_memory=True,\r\n        )\r\n        return train_loader, val_loader, train_dataset.classes\r\n\r\nclass CollateFunction:\r\n    @staticmethod\r\n    def pad_collate(batch: List[Tuple[torch.Tensor, int]]\r\n                    ) -> Tuple[torch.Tensor, torch.Tensor]:\r\n        images, labels = zip(*batch)\r\n        max_h = max(img.shape[1] for img in images)\r\n        max_w = max(img.shape[2] for img in images)\r\n        padded = []\r\n        for img in images:\r\n            pad_h = max_h - img.shape[1]\r\n            pad_w = max_w - img.shape[2]\r\n            padded.append(TF.pad(img, (0, 0, pad_w, pad_h), fill=0))\r\n        return torch.stack(padded), torch.tensor(labels)\r\n\r\n## Demo dataset creation\r\ntransform = TransformPipeline.train_transform(224)\r\nprint(f\"Train transform: {len(transform.transforms)} stages\")\r\n\r\nloader_config = EfficientDataLoader.create_loaders(\r\n    \"data/train\", \"data/val\", batch_size=64, num_workers=8\r\n)\r\nprint(f\"DataLoader configured: batch=64, workers=8, pin_memory=True\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-optimizers",
      children: "8.2 Optimizers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PyTorch provides several optimizers, each with different convergence properties."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OptimizerFactory:\r\n    @staticmethod\r\n    def get_optimizer(name: str, model: nn.Module, lr: float = 1e-3,\r\n                      weight_decay: float = 1e-4, **kwargs) -> optim.Optimizer:\r\n        if name == \"sgd\":\r\n            return optim.SGD(model.parameters(), lr=lr, momentum=0.9,\r\n                             weight_decay=weight_decay, nesterov=True)\r\n        elif name == \"adam\":\r\n            return optim.Adam(model.parameters(), lr=lr,\r\n                              weight_decay=weight_decay, betas=(0.9, 0.999))\r\n        elif name == \"adamw\":\r\n            return optim.AdamW(model.parameters(), lr=lr,\r\n                               weight_decay=weight_decay, betas=(0.9, 0.999))\r\n        elif name == \"rmsprop\":\r\n            return optim.RMSprop(model.parameters(), lr=lr,\r\n                                 weight_decay=weight_decay, momentum=0.9)\r\n        else:\r\n            raise ValueError(f\"Unknown optimizer: {name}\")\r\n\r\n    @staticmethod\r\n    def create_param_groups(model: nn.Module, base_lr: float = 1e-3,\r\n                            decay_mult: float = 0.1) -> List[dict]:\r\n        return [\r\n            {\r\n                \"params\": [p for n, p in model.named_parameters()\r\n                          if \"bias\" in n],\r\n                \"weight_decay\": 0.0,\r\n                \"lr\": base_lr * 2,\r\n            },\r\n            {\r\n                \"params\": [p for n, p in model.named_parameters()\r\n                          if \"weight\" in n and \"bn\" not in n],\r\n                \"weight_decay\": 1e-4,\r\n                \"lr\": base_lr,\r\n            },\r\n            {\r\n                \"params\": [p for n, p in model.named_parameters()\r\n                          if \"bn\" in n and \"weight\" in n],\r\n                \"weight_decay\": 0.0,\r\n                \"lr\": base_lr,\r\n            },\r\n        ]\r\n\r\nclass OptimizerComparison:\r\n    @staticmethod\r\n    def compare_optimizers(model_fn: Callable, x: torch.Tensor, y: torch.Tensor,\r\n                          epochs: int = 10):\r\n        optimizers = [\"sgd\", \"adam\", \"adamw\", \"rmsprop\"]\r\n        results = {}\r\n        for opt_name in optimizers:\r\n            model = model_fn()\r\n            optimizer = OptimizerFactory.get_optimizer(opt_name, model, lr=1e-3)\r\n            criterion = nn.MSELoss()\r\n            losses = []\r\n            for epoch in range(epochs):\r\n                optimizer.zero_grad()\r\n                output = model(x)\r\n                loss = criterion(output, y)\r\n                loss.backward()\r\n                optimizer.step()\r\n                losses.append(loss.item())\r\n            results[opt_name] = {\"final_loss\": losses[-1], \"losses\": losses}\r\n        return results\r\n\r\n## Adam vs AdamW: AdamW decouples weight decay from gradient update\r\nlinear_model = nn.Linear(100, 1)\r\noptim_adam = optim.Adam(linear_model.parameters(), lr=1e-3, weight_decay=1e-4)\r\noptim_adamw = optim.AdamW(linear_model.parameters(), lr=1e-3, weight_decay=1e-4)\r\n\r\nx_adam = torch.randn(100, 100)\r\ny_adam = torch.randn(100, 1)\r\n\r\nopt_adam = optim.Adam(nn.Linear(100, 1).parameters(), lr=1e-3, weight_decay=1e-2)\r\nopt_adamw = optim.AdamW(nn.Linear(100, 1).parameters(), lr=1e-3, weight_decay=1e-2)\r\nprint(f\"Adam LR: {opt_adam.param_groups[0]['lr']}, WD: {opt_adam.param_groups[0]['weight_decay']}\")\r\nprint(f\"AdamW LR: {opt_adamw.param_groups[0]['lr']}, WD: {opt_adamw.param_groups[0]['weight_decay']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-lr-schedulers",
      children: "8.3 LR Schedulers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Learning rate schedules control how the learning rate changes during training."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SchedulerFactory:\r\n    @staticmethod\r\n    def get_scheduler(name: str, optimizer: optim.Optimizer,\r\n                      **kwargs) -> optim.lr_scheduler._LRScheduler:\r\n        if name == \"step\":\r\n            return optim.lr_scheduler.StepLR(\r\n                optimizer, step_size=kwargs.get(\"step_size\", 30),\r\n                gamma=kwargs.get(\"gamma\", 0.1)\r\n            )\r\n        elif name == \"multistep\":\r\n            return optim.lr_scheduler.MultiStepLR(\r\n                optimizer, milestones=kwargs.get(\"milestones\", [30, 60, 90]),\r\n                gamma=kwargs.get(\"gamma\", 0.1)\r\n            )\r\n        elif name == \"cosine\":\r\n            return optim.lr_scheduler.CosineAnnealingLR(\r\n                optimizer, T_max=kwargs.get(\"epochs\", 100),\r\n                eta_min=kwargs.get(\"min_lr\", 1e-6)\r\n            )\r\n        elif name == \"cosine_warmup\":\r\n            return optim.lr_scheduler.CosineAnnealingWarmRestarts(\r\n                optimizer, T_0=kwargs.get(\"restart_interval\", 10),\r\n                T_mult=kwargs.get(\"mult\", 2)\r\n            )\r\n        elif name == \"plateau\":\r\n            return optim.lr_scheduler.ReduceLROnPlateau(\r\n                optimizer, mode=\"min\", factor=0.5, patience=5,\r\n                threshold=1e-4, min_lr=1e-7, verbose=True\r\n            )\r\n        elif name == \"onecycle\":\r\n            return optim.lr_scheduler.OneCycleLR(\r\n                optimizer, max_lr=kwargs.get(\"max_lr\", 1e-2),\r\n                steps_per_epoch=kwargs.get(\"steps_per_epoch\", 100),\r\n                epochs=kwargs.get(\"epochs\", 100),\r\n                pct_start=0.3, anneal_strategy=\"cos\",\r\n                div_factor=25.0, final_div_factor=10000.0,\r\n            )\r\n        else:\r\n            raise ValueError(f\"Unknown scheduler: {name}\")\r\n\r\n    @staticmethod\r\n    def warmup_scheduler(optimizer: optim.Optimizer, warmup_epochs: int = 5,\r\n                         base_lr: float = 1e-3) -> optim.lr_scheduler.LambdaLR:\r\n        def lr_lambda(epoch: int) -> float:\r\n            if epoch < warmup_epochs:\r\n                return (epoch + 1) / warmup_epochs\r\n            return 1.0\r\n        return optim.lr_scheduler.LambdaLR(optimizer, lr_lambda)\r\n\r\nclass SchedulerVisualizer:\r\n    @staticmethod\r\n    def simulate_lr(scheduler: optim.lr_scheduler._LRScheduler,\r\n                    epochs: int = 100) -> List[float]:\r\n        lrs = []\r\n        optimizer = scheduler.optimizer\r\n        for epoch in range(epochs):\r\n            lrs.append(optimizer.param_groups[0][\"lr\"])\r\n            if isinstance(scheduler, optim.lr_scheduler.ReduceLROnPlateau):\r\n                scheduler.step(lrs[-1])  # Simulate metric\r\n            else:\r\n                scheduler.step()\r\n        return lrs\r\n\r\n    @staticmethod\r\n    def compare_schedulers(base_lr: float = 1e-2, epochs: int = 50):\r\n        schedulers = [\"step\", \"cosine\", \"cosine_warmup\", \"onecycle\"]\r\n        from copy import deepcopy\r\n        results = {}\r\n        for name in schedulers:\r\n            model = nn.Linear(10, 1)\r\n            opt = optim.Adam(model.parameters(), lr=base_lr)\r\n            if name == \"onecycle\":\r\n                sched = SchedulerFactory.get_scheduler(\r\n                    name, opt, max_lr=base_lr, steps_per_epoch=1, epochs=epochs\r\n                )\r\n            else:\r\n                sched = SchedulerFactory.get_scheduler(name, opt, epochs=epochs)\r\n            lrs = SchedulerVisualizer.simulate_lr(sched, epochs)\r\n            results[name] = lrs\r\n        return results\r\n\r\nscheduler_lrs = SchedulerVisualizer.compare_schedulers(epochs=50)\r\nfor name, lrs in scheduler_lrs.items():\r\n    print(f\"{name:15s}: start={lrs[0]:.6f}, min={min(lrs):.6f}, max={max(lrs):.6f}, end={lrs[-1]:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom warmup + cosine scheduler"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WarmupCosineSchedule:\r\n    def __init__(self, optimizer: optim.Optimizer, warmup_epochs: int = 5,\r\n                 total_epochs: int = 100, min_lr: float = 1e-6):\r\n        self.optimizer = optimizer\r\n        self.warmup_epochs = warmup_epochs\r\n        self.total_epochs = total_epochs\r\n        self.min_lr = min_lr\r\n        self.base_lr = optimizer.param_groups[0][\"lr\"]\r\n\r\n    def step(self, epoch: int):\r\n        if epoch < self.warmup_epochs:\r\n            lr = self.base_lr * (epoch + 1) / self.warmup_epochs\r\n        else:\r\n            progress = (epoch - self.warmup_epochs) / (self.total_epochs - self.warmup_epochs)\r\n            lr = self.min_lr + 0.5 * (self.base_lr - self.min_lr) * (1 + np.cos(np.pi * progress))\r\n        for param_group in self.optimizer.param_groups:\r\n            param_group[\"lr\"] = lr\r\n\r\ndef cosine_with_warmup(epoch: int, warmup: int, total: int,\r\n                       base_lr: float, min_lr: float) -> float:\r\n    if epoch < warmup:\r\n        return base_lr * (epoch + 1) / warmup\r\n    progress = (epoch - warmup) / (total - warmup)\r\n    cosine_decay = 0.5 * (1 + np.cos(np.pi * progress))\r\n    return min_lr + (base_lr - min_lr) * cosine_decay\r\n\r\nlrs_sim = [cosine_with_warmup(e, warmup=5, total=100, base_lr=1e-3, min_lr=1e-6)\r\n           for e in range(100)]\r\nprint(f\"Warmup+Cosine: max={max(lrs_sim):.6f} at epoch {np.argmax(lrs_sim)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-checkpointing",
      children: "8.4 Checkpointing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checkpointing saves model state, optimizer state, and training metadata for recovery and model selection."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TrainingCheckpoint:\r\n    def __init__(self, save_dir: str = \"checkpoints\", best_metric: str = \"val_acc\",\r\n                 mode: str = \"max\"):\r\n        self.save_dir = Path(save_dir)\r\n        self.save_dir.mkdir(parents=True, exist_ok=True)\r\n        self.best_metric = best_metric\r\n        self.mode = mode\r\n        self.best_value = -float(\"inf\") if mode == \"max\" else float(\"inf\")\r\n\r\n    def _save(self, state: dict, filename: str):\r\n        torch.save(state, self.save_dir / filename)\r\n\r\n    def save_checkpoint(self, model: nn.Module, optimizer: optim.Optimizer,\r\n                        epoch: int, metrics: dict, scheduler: Optional[object] = None):\r\n        state = {\r\n            \"epoch\": epoch,\r\n            \"model_state_dict\": model.state_dict(),\r\n            \"optimizer_state_dict\": optimizer.state_dict(),\r\n            \"metrics\": metrics,\r\n            \"best_metric\": self.best_metric,\r\n            \"best_value\": self.best_value,\r\n        }\r\n        if scheduler is not None:\r\n            state[\"scheduler_state_dict\"] = scheduler.state_dict()\r\n        self._save(state, f\"checkpoint_epoch_{epoch}.pt\")\r\n        self._save(state, \"checkpoint_last.pt\")\r\n\r\n        current_value = metrics.get(self.best_metric, 0)\r\n        improved = (self.mode == \"max\" and current_value > self.best_value) or \\\r\n                   (self.mode == \"min\" and current_value < self.best_value)\r\n        if improved:\r\n            self.best_value = current_value\r\n            self._save(state, \"checkpoint_best.pt\")\r\n            print(f\"New best {self.best_metric}: {current_value:.4f}\")\r\n            return True\r\n        return False\r\n\r\n    def load_checkpoint(self, model: nn.Module, optimizer: Optional[optim.Optimizer] = None,\r\n                        scheduler: Optional[object] = None,\r\n                        checkpoint_path: str = \"checkpoint_best.pt\") -> dict:\r\n        checkpoint = torch.load(self.save_dir / checkpoint_path)\r\n        model.load_state_dict(checkpoint[\"model_state_dict\"])\r\n        if optimizer is not None:\r\n            optimizer.load_state_dict(checkpoint[\"optimizer_state_dict\"])\r\n        if scheduler is not None and \"scheduler_state_dict\" in checkpoint:\r\n            scheduler.load_state_dict(checkpoint[\"scheduler_state_dict\"])\r\n        print(f\"Resumed from epoch {checkpoint.get('epoch', 0)}\")\r\n        return checkpoint\r\n\r\nclass ModelZoo:\r\n    def __init__(self, base_dir: str = \"model_zoo\"):\r\n        self.base_dir = Path(base_dir)\r\n        self.base_dir.mkdir(exist_ok=True)\r\n\r\n    def save_model_version(self, model: nn.Module, name: str,\r\n                           version: str, metadata: dict = None):\r\n        path = self.base_dir / name / version\r\n        path.mkdir(parents=True, exist_ok=True)\r\n        torch.save({\r\n            \"model_state_dict\": model.state_dict(),\r\n            \"metadata\": metadata or {},\r\n        }, path / \"model.pt\")\r\n\r\n    def list_versions(self, name: str) -> List[str]:\r\n        model_dir = self.base_dir / name\r\n        if model_dir.exists():\r\n            return [d.name for d in model_dir.iterdir() if d.is_dir()]\r\n        return []\r\n\r\ncheckpointer = TrainingCheckpoint(\"checkpoints\", best_metric=\"val_acc\", mode=\"max\")\r\nmodel_demo = nn.Linear(100, 10)\r\noptimizer_demo = optim.Adam(model_demo.parameters())\r\n\r\nstate = checkpointer.save_checkpoint(\r\n    model_demo, optimizer_demo, epoch=5,\r\n    metrics={\"val_acc\": 0.85, \"train_loss\": 0.23}\r\n)\r\nprint(f\"Checkpoint saved to checkpoints/checkpoint_epoch_5.pt\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-gradient-accumulation",
      children: "8.5 Gradient Accumulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradient accumulation simulates larger batch sizes by accumulating gradients over multiple forward-backward passes before updating weights."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GradientAccumulator:\r\n    def __init__(self, model: nn.Module, optimizer: optim.Optimizer,\r\n                 accumulation_steps: int = 4, max_grad_norm: float = 1.0):\r\n        self.model = model\r\n        self.optimizer = optimizer\r\n        self.accumulation_steps = accumulation_steps\r\n        self.max_grad_norm = max_grad_norm\r\n        self.current_step = 0\r\n\r\n    def backward(self, loss: torch.Tensor):\r\n        loss = loss / self.accumulation_steps\r\n        loss.backward()\r\n        self.current_step += 1\r\n        if self.current_step % self.accumulation_steps == 0:\r\n            nn.utils.clip_grad_norm_(self.model.parameters(), self.max_grad_norm)\r\n            self.optimizer.step()\r\n            self.optimizer.zero_grad()\r\n\r\n    def train_one_epoch(self, loader: DataLoader, criterion: nn.Module,\r\n                        device: str = \"cuda\") -> float:\r\n        self.model.train()\r\n        total_loss = 0.0\r\n        self.optimizer.zero_grad()\r\n        for i, (x, y) in enumerate(loader):\r\n            x, y = x.to(device), y.to(device)\r\n            output = self.model(x)\r\n            loss = criterion(output, y)\r\n            self.backward(loss)\r\n            total_loss += loss.item() * self.accumulation_steps\r\n            if (i + 1) % 100 == 0:\r\n                print(f\"  Step {i + 1}: loss = {total_loss / (i + 1):.4f}\")\r\n        return total_loss / len(loader)\r\n\r\nclass EffectiveBatchSize:\r\n    @staticmethod\r\n    def calculate(per_device_batch: int, accumulation_steps: int,\r\n                  num_gpus: int = 1) -> int:\r\n        return per_device_batch * accumulation_steps * num_gpus\r\n\r\n    @staticmethod\r\n    def recommend(desired_batch: int, per_device_batch: int,\r\n                  num_gpus: int = 1) -> int:\r\n        effective = per_device_batch * num_gpus\r\n        steps = max(1, desired_batch // effective)\r\n        actual = effective * steps\r\n        return steps, actual\r\n\r\nacc = GradientAccumulator(nn.Linear(100, 10), optim.Adam(nn.Linear(100, 10).parameters()),\r\n                          accumulation_steps=4)\r\nsteps, actual = EffectiveBatchSize.recommend(desired_batch=256, per_device_batch=32, num_gpus=2)\r\nprint(f\"Need {steps} accumulation steps for effective batch of {actual}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-mixed-precision",
      children: "8.6 Mixed Precision"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mixed precision (AMP) uses FP16 for compute-intensive operations while keeping FP32 master weights, reducing memory usage and accelerating training on GPUs with Tensor Cores."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MixedPrecisionTrainer:\r\n    def __init__(self, model: nn.Module, optimizer: optim.Optimizer,\r\n                 device: str = \"cuda\", scaler_init: float = 2.0 ** 16):\r\n        self.model = model.to(device)\r\n        self.optimizer = optimizer\r\n        self.device = device\r\n        self.scaler = GradScaler(init_scale=scaler_init)\r\n\r\n    def train_step(self, x: torch.Tensor, y: torch.Tensor,\r\n                   criterion: nn.Module) -> float:\r\n        self.optimizer.zero_grad()\r\n        x, y = x.to(self.device), y.to(self.device)\r\n\r\n        with autocast():\r\n            output = self.model(x)\r\n            loss = criterion(output, y)\r\n\r\n        self.scaler.scale(loss).backward()\r\n        self.scaler.unscale_(self.optimizer)\r\n        nn.utils.clip_grad_norm_(self.model.parameters(), max_norm=1.0)\r\n        self.scaler.step(self.optimizer)\r\n        self.scaler.update()\r\n        return loss.item()\r\n\r\n    def train_epoch(self, loader: DataLoader, criterion: nn.Module) -> float:\r\n        self.model.train()\r\n        total_loss = 0.0\r\n        for x, y in loader:\r\n            loss = self.train_step(x, y, criterion)\r\n            total_loss += loss\r\n        return total_loss / len(loader)\r\n\r\nclass MixedPrecisionConfig:\r\n    @staticmethod\r\n    def check_availability() -> dict:\r\n        return {\r\n            \"cuda_available\": torch.cuda.is_available(),\r\n            \"amp_enabled\": torch.cuda.is_available(),\r\n            \"tensor_cores\": torch.cuda.get_device_capability() >= (7, 0)\r\n            if torch.cuda.is_available() else False,\r\n            \"recommended_dtype\": \"float16\" if torch.cuda.is_available() else \"float32\",\r\n        }\r\n\r\n    @staticmethod\r\n    def configure_amp(model: nn.Module) -> nn.Module:\r\n        if torch.cuda.is_available():\r\n            model = model.to(memory_format=torch.channels_last)\r\n            for module in model.modules():\r\n                if isinstance(module, (nn.Conv2d, nn.Linear)):\r\n                    module.to(memory_format=torch.channels_last)\r\n        return model\r\n\r\nclass LossScaler:\r\n    def __init__(self, initial_scale: float = 2.0 ** 16,\r\n                 growth_factor: float = 2.0, backoff_factor: float = 0.5,\r\n                 growth_interval: int = 2000):\r\n        self.scale = initial_scale\r\n        self.growth_factor = growth_factor\r\n        self.backoff_factor = backoff_factor\r\n        self.growth_interval = growth_interval\r\n        self.steps_since_update = 0\r\n\r\n    def scale_loss(self, loss: torch.Tensor) -> torch.Tensor:\r\n        return loss * self.scale\r\n\r\n    def unscale_gradients(self, model: nn.Module):\r\n        for param in model.parameters():\r\n            if param.grad is not None:\r\n                param.grad.data /= self.scale\r\n\r\n    def update(self, overflow: bool):\r\n        if overflow:\r\n            self.scale *= self.backoff_factor\r\n            self.steps_since_update = 0\r\n        else:\r\n            self.steps_since_update += 1\r\n            if self.steps_since_update >= self.growth_interval:\r\n                self.scale *= self.growth_factor\r\n                self.steps_since_update = 0\r\n\r\nconfig = MixedPrecisionConfig.check_availability()\r\nfor k, v in config.items():\r\n    print(f\"{k}: {v}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-early-stopping",
      children: "8.7 Early Stopping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Early stopping prevents overfitting by monitoring validation metrics and stopping when performance plateaus."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EarlyStopping:\r\n    def __init__(self, patience: int = 10, min_delta: float = 1e-4,\r\n                 mode: str = \"min\", restore_best: bool = True):\r\n        self.patience = patience\r\n        self.min_delta = min_delta\r\n        self.mode = mode\r\n        self.restore_best = restore_best\r\n        self.best_value = float(\"inf\") if mode == \"min\" else -float(\"inf\")\r\n        self.best_epoch = 0\r\n        self.best_state = None\r\n        self.counter = 0\r\n        self.early_stop = False\r\n\r\n    def __call__(self, value: float, epoch: int,\r\n                 model: Optional[nn.Module] = None) -> bool:\r\n        improved = (self.mode == \"min\" and value < self.best_value - self.min_delta) or \\\r\n                   (self.mode == \"max\" and value > self.best_value + self.min_delta)\r\n        if improved:\r\n            self.best_value = value\r\n            self.best_epoch = epoch\r\n            self.counter = 0\r\n            if model is not None and self.restore_best:\r\n                self.best_state = {\r\n                    k: v.clone().detach().cpu()\r\n                    for k, v in model.state_dict().items()\r\n                }\r\n        else:\r\n            self.counter += 1\r\n            if self.counter >= self.patience:\r\n                self.early_stop = True\r\n                if self.restore_best and self.best_state is not None and model is not None:\r\n                    model.load_state_dict(self.best_state)\r\n                return True\r\n        return False\r\n\r\n    def get_best_value(self) -> float:\r\n        return self.best_value\r\n\r\n    def get_best_epoch(self) -> int:\r\n        return self.best_epoch\r\n\r\nclass CombinedTrainer:\r\n    def __init__(self, model: nn.Module, train_loader: DataLoader,\r\n                 val_loader: DataLoader, criterion: nn.Module,\r\n                 optimizer: optim.Optimizer, scheduler: object = None,\r\n                 device: str = \"cuda\", checkpoint_dir: str = \"checkpoints\",\r\n                 use_amp: bool = True):\r\n        self.model = model.to(device)\r\n        self.train_loader = train_loader\r\n        self.val_loader = val_loader\r\n        self.criterion = criterion\r\n        self.optimizer = optimizer\r\n        self.scheduler = scheduler\r\n        self.device = device\r\n        self.checkpointer = TrainingCheckpoint(checkpoint_dir)\r\n        self.early_stopping = EarlyStopping(patience=10, mode=\"min\")\r\n        self.scaler = GradScaler() if use_amp else None\r\n        self.use_amp = use_amp\r\n\r\n    def train(self, epochs: int, accumulation_steps: int = 1):\r\n        for epoch in range(1, epochs + 1):\r\n            train_loss = self._train_epoch(accumulation_steps)\r\n            val_loss = self._validate()\r\n            metrics = {\"train_loss\": train_loss, \"val_loss\": val_loss}\r\n            self.checkpointer.save_checkpoint(\r\n                self.model, self.optimizer, epoch, metrics, self.scheduler\r\n            )\r\n            if self.scheduler is not None:\r\n                if isinstance(self.scheduler, optim.lr_scheduler.ReduceLROnPlateau):\r\n                    self.scheduler.step(val_loss)\r\n                else:\r\n                    self.scheduler.step()\r\n            print(f\"Epoch {epoch}/{epochs}: train_loss={train_loss:.4f}, \"\r\n                  f\"val_loss={val_loss:.4f}, \"\r\n                  f\"lr={self.optimizer.param_groups[0]['lr']:.6f}\")\r\n            if self.early_stopping(val_loss, epoch, self.model):\r\n                print(f\"Early stopping triggered at epoch {epoch}\")\r\n                break\r\n        return self.checkpointer.best_value\r\n\r\n    def _train_epoch(self, accumulation_steps: int = 1) -> float:\r\n        self.model.train()\r\n        total_loss = 0.0\r\n        self.optimizer.zero_grad()\r\n        for i, (x, y) in enumerate(self.train_loader):\r\n            x, y = x.to(self.device), y.to(self.device)\r\n            if self.use_amp and self.scaler is not None:\r\n                with autocast():\r\n                    output = self.model(x)\r\n                    loss = self.criterion(output, y) / accumulation_steps\r\n                self.scaler.scale(loss).backward()\r\n            else:\r\n                output = self.model(x)\r\n                loss = self.criterion(output, y) / accumulation_steps\r\n                loss.backward()\r\n            total_loss += loss.item() * accumulation_steps\r\n            if (i + 1) % accumulation_steps == 0:\r\n                if self.use_amp and self.scaler is not None:\r\n                    self.scaler.unscale_(self.optimizer)\r\n                    nn.utils.clip_grad_norm_(self.model.parameters(), 1.0)\r\n                    self.scaler.step(self.optimizer)\r\n                    self.scaler.update()\r\n                else:\r\n                    nn.utils.clip_grad_norm_(self.model.parameters(), 1.0)\r\n                    self.optimizer.step()\r\n                self.optimizer.zero_grad()\r\n        return total_loss / len(self.train_loader)\r\n\r\n    def _validate(self) -> float:\r\n        self.model.eval()\r\n        total_loss = 0.0\r\n        with torch.no_grad():\r\n            for x, y in self.val_loader:\r\n                x, y = x.to(self.device), y.to(self.device)\r\n                output = self.model(x)\r\n                total_loss += self.criterion(output, y).item()\r\n        return total_loss / len(self.val_loader)\r\n\r\n## Demo the CombinedTrainer\r\nmodel_demo = nn.Sequential(\r\n    nn.Flatten(),\r\n    nn.Linear(784, 128),\r\n    nn.ReLU(),\r\n    nn.Linear(128, 10),\r\n)\r\ndemo_loader = DataLoader(\r\n    TensorDataset(torch.randn(100, 1, 28, 28), torch.randint(0, 10, (100,))),\r\n    batch_size=16\r\n)\r\ntrainer = CombinedTrainer(\r\n    model_demo, demo_loader, demo_loader, nn.CrossEntropyLoss(),\r\n    optim.Adam(model_demo.parameters(), lr=1e-3),\r\n    scheduler=optim.lr_scheduler.CosineAnnealingLR(optim.Adam(model_demo.parameters(), lr=1e-3), 10),\r\n)\r\nprint(\"CombinedTrainer configured with AMP, checkpointing, and early stopping\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production training pipelines require careful orchestration of data loading, optimization, and monitoring. DataLoaders with multiprocessing and transforms ensure efficient data throughput. Optimizers like AdamW with decoupled weight decay and.\r\ncosine annealing schedulers improve convergence. Gradient accumulation simulates larger batch sizes when GPU memory is limited. Mixed precision training (AMP) halves memory usage and.\r\naccelerates computation on modern GPUs. Checkpointing with model weights, optimizer state, and scheduler state enables fault-tolerant long-running training. Early stopping prevents overfitting by monitoring validation metrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall to Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataLoader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "num_workers = 4-8, pin_memory=True, persistent_workers=True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many workers causing data loading bottlenecks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RandomResizedCrop for training, CenterCrop for validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applying augmentations during validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AdamW for transformers, SGD+momentum+nesterov for CNNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong weight decay placement (use AdamW, not Adam)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cosine with warmup for modern architectures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step decay too aggressive (gamma=0.1 kills LR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use torch.cuda.amp for 2-3x speedup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not calling scaler.update() or forgetting unscale_"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Accumulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale loss by accumulation steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not normalizing loss causes gradient explosion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpointing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save best + last checkpoint, include optimizer state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only saving model weights (can't resume training)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Early Stopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "patience=10, min_delta=1e-4, restore_best_weights=True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not restoring best weights after stopping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is the difference between Adam and AdamW?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Adam applies L2 regularization by adding weight_decay * w to the gradient before the adaptive update. This couples weight decay with the learning rate and adaptive gradient scaling, making regularization ineffective. AdamW decouples weight decay from the gradient update: it subtracts weight_decay * lr * w directly from the weights AFTER the Adam update. This means: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Weight decay is independent of the adaptive learning rate. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Larger LRs properly increase regularization strength. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Better generalization, especially for transformers. In practice, switch from Adam to AdamW by simply using optim.AdamW instead of optim.Adam, keeping the same weight_decay value."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How does OneCycleLR work and when should you use it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OneCycleLR implements the learning rate schedule from the \"Super-Convergence\" paper: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Phase 1: LR increases linearly from div_factor (usually base_lr/25) to max_lr. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Phase 2: LR decreases from max_lr to max_lr/final_div_factor (usually max_lr/10000). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Momentum does the opposite: decreases in phase 1, increases in phase 2. Use it when: you want to train quickly (50-100 epochs instead of 300-600), you have a well-tuned max_lr (typically found via LR range test), and you're using SGD with momentum or Adam. The schedule allows the model to escape sharp minima (high LR) and then settle into a deep minimum (low LR). It works best with batch normalization and large batch sizes."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What is gradient accumulation and why would you use it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Gradient accumulation simulates a larger batch size by accumulating gradients over multiple forward-backward passes before updating weights. The loss is divided by accumulation_steps to maintain the correct magnitude. Benefits: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Train with effective batch sizes larger than GPU memory (e.g., batch=1024 on a 8GB GPU by accumulating 32 steps of batch=32). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Stabilizes training when small true batch sizes cause noisy gradients. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Enables batch-size-dependent techniques (e.g., batch normalization benefits from larger batches). Limitations: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " No parallelism benefit — each step is sequential, so wall-clock time is the same as training with the smaller batch. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " BatchNorm statistics are still computed per micro-batch, not the effective batch."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: Explain how automatic mixed precision (AMP) works."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["AMP uses FP16 for compute-intensive operations (convolutions, matrix multiplies) while keeping FP32 for operations that need precision (loss computation, softmax, batch norm). The torch.cuda.amp API provides: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " autocast context manager: automatically casts operations to FP16 or FP32 based on a whitelist/blacklist. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " GradScaler: prevents FP16 gradient underflow. Since FP16 gradients can underflow (range ~6e-5 to 65k), the scaler multiplies the loss by a scale factor (initially 2^16), computes gradients in FP16, then unscales before the optimizer step. If gradients overflow (inf/nan), the scaler skips the step and reduces the scale. AMP typically provides 1.5-3x speedup on Volta+ GPUs with Tensor Cores. Requires CUDA 11+ and GPU with compute capability >= 7.0."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: How do you resume training from a checkpoint?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To resume training, you need to save and restore ALL training state: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " model.state_dict() — the model weights. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " optimizer.state_dict() — optimizer state including momentum buffers, adaptive LR history. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " scheduler.state_dict() — current learning rate and schedule position. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " epoch number — to continue from the correct point and for schedulers. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " random state — torch.random.get_rng_state() and numpy.random for reproducibility. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6)"
          }), " best validation metric value — for early stopping and checkpoint selection. Resume by: loading model state dict, loading optimizer state dict, loading scheduler state dict, setting current epoch, and restoring random states. Failure to restore optimizer state causes momentum/adaptive LR buffers to be reinitialized, disrupting training."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: What is the purpose of num_workers in DataLoader?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["num_workers controls the number of subprocesses used for data loading. Each worker independently loads and transforms data, putting results into a shared queue. Benefits of multiple workers: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Data loading can overlap with GPU computation, reducing GPU idle time. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Workers can utilize multiple CPU cores for expensive transforms (e.g., image decoding, augmentation). Guidelines: set num_workers to 2-8 on most systems. A common heuristic: num_workers = 4 * num_GPUs. Too few workers: GPU underutilization (waiting for data). Too many workers: CPU contention, increased memory usage, potential data loading errors on Windows. pin_memory=True speeds up CPU-to-GPU transfer by using pinned (page-locked) memory. persistent_workers=True reuses workers between epochs."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How do you choose between StepLR and CosineAnnealingLR?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["StepLR decays the LR by gamma every step_size epochs. MultiStepLR uses specific milestones. CosineAnnealingLR smoothly decreases LR following a cosine curve. Choose StepLR/MultiStepLR when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You have a known training budget and established LR schedule from prior work. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " You need precise control over when LR changes (e.g., dropping LR at epochs where the loss typically plateaus). Choose CosineAnnealingLR when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You want a warm restart or cosine decay without manual milestone tuning. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " You're training for a fixed number of epochs with unknown plateau points. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " You're using the OneCycleLR variant. Cosine schedules often achieve better final accuracy because they spend more time at lower LRs, allowing the model to settle into deeper minima. For most modern training, Cosine with warmup is the default choice."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: What is the difference between a Dataset and a DataLoader?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dataset"
          }), ": stores the data samples and their labels. It implements __len__ and __getitem__ to return individual (sample, label) pairs. It can load all data into memory or load lazily from disk. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DataLoader"
          }), ": wraps a Dataset and provides: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Batching: groups samples into batches. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Shuffling: randomizes sample order each epoch. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Parallel loading: uses multiple worker processes. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Collation: combines samples into a batch tensor (customizable via collate_fn). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Memory pinning: accelerates GPU transfer. The DataLoader is the iterator you use in the training loop; the Dataset defines how to access individual examples. A single Dataset can be used by multiple DataLoaders with different configurations (e.g., train vs validation)."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How do you handle class imbalance in the data pipeline?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Approaches at the data pipeline level: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) WeightedRandomSampler"
          }), ": samples from the dataset with weights inversely proportional to class frequency. Each sample's weight = 1 / class_count. This ensures balanced batches. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Over-sampling"
          }), ": duplicate minority class samples (simpler but can overfit). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Under-sampling"
          }), ": randomly drop majority class samples (loses data). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Stratified batch sampling"
          }), ": ensures each batch has proportional representation. PyTorch implementation: sampler = WeightedRandomSampler(weights, num_samples, replacement=True); DataLoader(..., sampler=sampler). Also handle at the loss level: pass class weights to nn.CrossEntropyLoss(weight=class_weights). For extreme imbalance, use focal loss in the training loop instead of standard cross-entropy."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: How does ReduceLROnPlateau work and when is it most useful?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ReduceLROnPlateau monitors a validation metric and reduces the LR by factor when the metric stops improving for patience epochs. Parameters: mode ('min' for loss, 'max' for accuracy), factor (0.1-0.5, how much to reduce), patience (epochs to wait), threshold (min improvement to count as progress), min_lr (lower bound). It's most useful when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You don't know the optimal LR schedule in advance. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " The loss landscape has multiple plateaus at different LR levels. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " You want to automate LR tuning without manual milestones. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Training has unpredictable duration. The scheduler steps through multiple cooling phases: initial fast learning, plateau → reduce LR, fine-tune at lower LR, plateau → reduce again. Each reduction typically needs 2-3 cycles before reaching min_lr."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the key difference between Adam and AdamW?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Adam uses more memory\r\nb) AdamW decouples weight decay from adaptive gradient updates\r\nc) AdamW is slower to converge\r\nd) AdamW doesn't use momentum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) AdamW decouples weight decay from adaptive gradient updates"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "AdamW applies weight decay directly to weights after the update step, making it independent of the adaptive learning rate."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does GradScaler do in mixed precision training?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Scales model weights to FP16\r\nb) Scales the loss to prevent underflow in FP16 gradients\r\nc) Scales the learning rate\r\nd) Scales the batch size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Scales the loss to prevent underflow in FP16 gradients"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The scaler multiplies the loss by a scale factor to push gradients into the representable range of FP16, then unscales before the optimizer step."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": If you want an effective batch size of 256 but only have memory for batch 32, how many gradient accumulation steps do you need?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 4\r\nb) 8\r\nc) 16\r\nd) 32"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 8"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "256 / 32 = 8 accumulation steps. The loss must be divided by 8 before backward to maintain proper gradient magnitude."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which scheduler is best suited for training with an unknown number of epochs?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) StepLR\r\nb) CosineAnnealingLR\r\nc) ReduceLROnPlateau\r\nd) OneCycleLR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) ReduceLROnPlateau"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ReduceLROnPlateau monitors validation metrics and reduces LR when progress plateaus, making it ideal for variable-length training."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is NOT a good reason to use gradient accumulation?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Simulating larger batch sizes on limited GPU memory\r\nb) Reducing wall-clock training time\r\nc) Stabilizing gradient estimates\r\nd) Enabling batch-size-dependent optimizations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl12-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Reducing wall-clock training time"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Gradient accumulation doesn't parallelize — it processes the same number of micro-batches sequentially, so wall-clock time is the same as training with the smaller batch."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not practicing enough problems to build pattern recognition", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Write a custom Dataset class for CSV data. Implement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "len"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "getitem"
        }), " to return feature tensors and labels."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Compare training with SGD (momentum=0.9), Adam, and AdamW on a simple 2-layer network. Plot training loss curves."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a training pipeline with gradient accumulation (steps=4) and mixed precision. Train ResNet-18 on CIFAR-10 and measure memory savings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement warmup + cosine LR schedule manually (no scheduler class) and integrate it into a training loop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete training manager with checkpointing (best/last), early stopping, TensorBoard logging, configurable AMP, and resume capability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm",
          children: "07-rnn-and-lstm.md"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": [09-model-deployment.md](09-model-deplo"]
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
            children: "Explain the core idea of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing."
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
            children: "Describe a production bug caused by misunderstanding this technique — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing from 10 users to 10 million?"
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
            children: "Compare Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing."
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
            children: "How does Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in production today?"
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
        }), " Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Training Pipelines is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Training Pipelines is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing on an empty input?"
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
            children: "Complete Medium exercises, explain Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing to someone else"
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
        children: "Always write a one-line example of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 09 — builds the foundation for 08 Training Pipelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Training Pipelines with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Training Pipelines fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Training Pipelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Training Pipelines"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Training Pipelines?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Training Pipelines?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Training Pipelines asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Training Pipelines?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing."
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
        children: "Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing changes quickly; focus on fundamentals that remain stable."
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
            children: "08 Training Pipelines is like a GPS navigation system"
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
          }), " — this chapter contributes the Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-08trainingpipelines-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the key difference between Adam and AdamW?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) AdamW decouples weight decay from adaptive gradient updates"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-08trainingpipelines-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does GradScaler do in mixed precision training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Scales the loss to prevent underflow in FP16 gradients"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-08trainingpipelines-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    If you want an effective batch size of 256 but only have memory for batch 32, how many gradient accumulation steps do you need?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) 8"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-08trainingpipelines-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which scheduler is best suited for training with an unknown number of epochs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) ReduceLROnPlateau"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-08trainingpipelines-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is NOT a good reason to use gradient accumulation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Reducing wall-clock training time"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in production at scale"
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
        children: "cProfile / py-spy for performance profiling Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing"
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
        }), ": Add structured logging at each stage of the 08 Training Pipelines pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing."
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
        children: "Tell me about a time you debugged a Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_training_pipelines(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Training Pipelines.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Training Pipelines here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment",
        children: "Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing depends on input size and distribution — always benchmark for your own data."
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