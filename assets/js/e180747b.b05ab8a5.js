"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7911],{

/***/ 73170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_06_alerting_and_incident_response_md_e18_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-15-ai-evaluation-observability-06-alerting-and-incident-response-md-e18.json
const site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_06_alerting_and_incident_response_md_e18_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-evaluation-observability/06-alerting-and-incident-response","title":"Alerting & Incident Response","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response.md","sourceDirName":"courses/ai-engineering-placement/15-ai-evaluation-observability","slug":"/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":203,"frontMatter":{"id":"06-alerting-and-incident-response","slug":"/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response","title":"Alerting & Incident Response","sidebar_label":"Alerting & Incident Response","sidebar_position":203},"sidebar":"placementSidebar","previous":{"title":"Tracing & Monitoring","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/05-tracing-and-monitoring"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response.md


const frontMatter = {
	id: '06-alerting-and-incident-response',
	slug: '/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response',
	title: 'Alerting & Incident Response',
	sidebar_label: 'Alerting & Incident Response',
	sidebar_position: 203
};
const contentTitle = 'Alerting & Incident Response';

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
  "value": "6.1 Alerting Strategy",
  "id": "61-alerting-strategy",
  "level": 2
}, {
  "value": "6.1.1 Alert Manager",
  "id": "611-alert-manager",
  "level": 3
}, {
  "value": "6.1.2 Notification Channels",
  "id": "612-notification-channels",
  "level": 3
}, {
  "value": "6.2 Drift Alerts",
  "id": "62-drift-alerts",
  "level": 2
}, {
  "value": "6.2.1 Data Drift Detector",
  "id": "621-data-drift-detector",
  "level": 3
}, {
  "value": "6.2.2 Model Drift Detection",
  "id": "622-model-drift-detection",
  "level": 3
}, {
  "value": "6.3 Performance Alerts",
  "id": "63-performance-alerts",
  "level": 2
}, {
  "value": "6.3.1 Performance Thresholds",
  "id": "631-performance-thresholds",
  "level": 3
}, {
  "value": "6.3.2 Error Rate Monitoring",
  "id": "632-error-rate-monitoring",
  "level": 3
}, {
  "value": "6.4 Incident Response",
  "id": "64-incident-response",
  "level": 2
}, {
  "value": "6.4.1 Incident Manager",
  "id": "641-incident-manager",
  "level": 3
}, {
  "value": "6.4.2 Severity Classification",
  "id": "642-severity-classification",
  "level": 3
}, {
  "value": "6.5 Rollback",
  "id": "65-rollback",
  "level": 2
}, {
  "value": "6.5.1 Rollback Manager",
  "id": "651-rollback-manager",
  "level": 3
}, {
  "value": "6.5.2 Canary Rollback",
  "id": "652-canary-rollback",
  "level": 3
}, {
  "value": "6.6 Postmortem",
  "id": "66-postmortem",
  "level": 2
}, {
  "value": "6.6.1 Postmortem Template",
  "id": "661-postmortem-template",
  "level": 3
}, {
  "value": "6.6.2 Action Item Tracker",
  "id": "662-action-item-tracker",
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
        id: "alerting--incident-response",
        children: "Alerting & Incident Response"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Design alerting rules for production AI systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement drift, performance, and error alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build incident response runbooks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish rollback procedures and postmortem culture"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You cannot improve what you cannot measure. Evaluation metrics, LLM-as-judge, and observability tools help you monitor and improve AI systems in production. This module covers the full evaluation stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding alerting and incident response is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how alerting and incident response works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alerting Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thresholds, severity levels, notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift Alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data drift, model drift, concept drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, throughput, error rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severity classification, runbooks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model rollback, data rollback, version revert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postmortem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless culture, action items"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Detection\r\n        D[Drift Detected]\r\n        P[Performance Degraded]\r\n        E[Error Spike]\r\n    end\r\n    subgraph Response\r\n        S[Severity Assessment]\r\n        R[Runbook Execution]\r\n        L[Rollback if Needed]\r\n    end\r\n    subgraph Learning\r\n        PM[Postmortem]\r\n        AI[Action Items]\r\n    end\r\n    D & P & E --> S --> R --> L --> PM --> AI\r\n    AI -->|Implement Fix| D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-alerting-strategy",
      children: "6.1 Alerting Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-alert-manager",
      children: "6.1.1 Alert Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\nfrom typing import List, Dict, Optional, Callable\r\nimport time\r\nimport json\r\nfrom enum import Enum\r\n\r\nclass Severity(Enum):\r\n    CRITICAL = \"critical\"\r\n    HIGH = \"high\"\r\n    MEDIUM = \"medium\"\r\n    LOW = \"low\"\r\n    INFO = \"info\"\r\n\r\n@dataclass\r\nclass AlertConfig:\r\n    name: str\r\n    metric: str\r\n    condition: str  # >, <, >=, <=, ==\r\n    threshold: float\r\n    severity: Severity = Severity.MEDIUM\r\n    window_seconds: int = 60\r\n    cooldown_seconds: int = 300\r\n    channels: List[str] = None\r\n\r\nclass AlertManager:\r\n    def __init__(self):\r\n        self.rules: List[AlertConfig] = []\r\n        self.alert_history: List[Dict] = []\r\n        self.last_alert_time: Dict[str, float] = {}\r\n\r\n    def add_rule(self, rule: AlertConfig):\r\n        self.rules.append(rule)\r\n\r\n    def evaluate(self, metric_values: Dict[str, float]) -> List[Dict]:\r\n        fired = []\r\n\r\n        for rule in self.rules:\r\n            value = metric_values.get(rule.metric)\r\n            if value is None:\r\n                continue\r\n\r\n            triggered = self._check_condition(value, rule.condition, rule.threshold)\r\n            if not triggered:\r\n                continue\r\n\r\n            last_time = self.last_alert_time.get(rule.name, 0)\r\n            if time.time() - last_time < rule.cooldown_seconds:\r\n                continue\r\n\r\n            alert = {\r\n                \"name\": rule.name,\r\n                \"metric\": rule.metric,\r\n                \"value\": value,\r\n                \"threshold\": rule.threshold,\r\n                \"severity\": rule.severity.value,\r\n                \"timestamp\": time.time(),\r\n            }\r\n\r\n            self.alert_history.append(alert)\r\n            self.last_alert_time[rule.name] = time.time()\r\n            fired.append(alert)\r\n\r\n        return fired\r\n\r\n    def _check_condition(self, value: float, condition: str,\r\n                          threshold: float) -> bool:\r\n        if condition == \">\":\r\n            return value > threshold\r\n        elif condition == \"<\":\r\n            return value < threshold\r\n        elif condition == \">=\":\r\n            return value >= threshold\r\n        elif condition == \"<=\":\r\n            return value <= threshold\r\n        elif condition == \"==\":\r\n            return value == threshold\r\n        return False\r\n\r\n    def get_history(self, severity: str = None, limit: int = 10) -> List[Dict]:\r\n        alerts = self.alert_history\r\n        if severity:\r\n            alerts = [a for a in alerts if a[\"severity\"] == severity]\r\n        return alerts[-limit:]\r\n\r\n    def summary(self) -> Dict:\r\n        counts = {}\r\n        for alert in self.alert_history:\r\n            sev = alert[\"severity\"]\r\n            counts[sev] = counts.get(sev, 0) + 1\r\n        return {\r\n            \"total_alerts\": len(self.alert_history),\r\n            \"by_severity\": counts,\r\n            \"active_rules\": len(self.rules),\r\n        }\r\n\r\nam = AlertManager()\r\nam.add_rule(AlertConfig(\"High P95 Latency\", \"p95_latency\", \">\", 2000, Severity.HIGH, 60, 300))\r\nam.add_rule(AlertConfig(\"Error Rate\", \"error_rate\", \">\", 0.05, Severity.CRITICAL, 60, 120))\r\nfired = am.evaluate({\"p95_latency\": 2500, \"error_rate\": 0.08})\r\nprint(f\"Fired alerts: {[a['name'] for a in fired]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "612-notification-channels",
      children: "6.1.2 Notification Channels"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class NotificationChannel:\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.message_count = 0\r\n\r\n    def send(self, alert: Dict) -> bool:\r\n        self.message_count += 1\r\n        print(f\"[{self.name}] {alert['severity']}: {alert['name']} = {alert['value']}\")\r\n        return True\r\n\r\nclass NotificationManager:\r\n    def __init__(self):\r\n        self.channels: Dict[str, NotificationChannel] = {}\r\n\r\n    def add_channel(self, channel: NotificationChannel):\r\n        self.channels[channel.name] = channel\r\n\r\n    def notify(self, alert: Dict, channels: List[str] = None):\r\n        targets = channels or list(self.channels.keys())\r\n        for name in targets:\r\n            if name in self.channels:\r\n                self.channels[name].send(alert)\r\n\r\n    def notify_severity(self, alert: Dict):\r\n        severity_channels = {\r\n            \"critical\": [\"pagerduty\", \"slack\", \"email\"],\r\n            \"high\": [\"slack\", \"email\"],\r\n            \"medium\": [\"slack\"],\r\n            \"low\": [\"email\"],\r\n            \"info\": [],\r\n        }\r\n        channels = severity_channels.get(alert[\"severity\"], [])\r\n        self.notify(alert, channels)\r\n\r\nnm = NotificationManager()\r\nnm.add_channel(NotificationChannel(\"slack\"))\r\nnm.add_channel(NotificationChannel(\"email\"))\r\nalert = {\"name\": \"High Error Rate\", \"severity\": \"critical\", \"value\": 0.12}\r\nnm.notify_severity(alert)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-drift-alerts",
      children: "6.2 Drift Alerts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-data-drift-detector",
      children: "6.2.1 Data Drift Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataDriftDetector:\r\n    def __init__(self, reference_distribution: Dict[str, Dict]):\r\n        self.reference = reference_distribution\r\n\r\n    def detect(self, current_data: List[Dict]) -> Dict:\r\n        if not current_data:\r\n            return {\"drift_detected\": False, \"message\": \"No data\"}\r\n\r\n        drift_results = {}\r\n\r\n        for feature, ref_stats in self.reference.items():\r\n            current_values = [d.get(feature) for d in current_data if d.get(feature) is not None]\r\n            if not current_values:\r\n                continue\r\n\r\n            current_mean = np.mean(current_values)\r\n            ref_mean = ref_stats.get(\"mean\", 0)\r\n            ref_std = ref_stats.get(\"std\", 1)\r\n\r\n            ps_value = abs(current_mean - ref_mean) / max(ref_std, 0.001)\r\n\r\n            drift_results[feature] = {\r\n                \"ref_mean\": round(ref_mean, 2),\r\n                \"current_mean\": round(current_mean, 2),\r\n                \"ps_value\": round(ps_value, 3),\r\n                \"drifted\": ps_value > 0.5,\r\n            }\r\n\r\n        drifted_features = [f for f, r in drift_results.items() if r[\"drifted\"]]\r\n        return {\r\n            \"drift_detected\": len(drifted_features) > 0,\r\n            \"drifted_features\": drifted_features,\r\n            \"feature_results\": drift_results,\r\n        }\r\n\r\nref = {\"input_length\": {\"mean\": 150, \"std\": 50}, \"sentiment\": {\"mean\": 0.5, \"std\": 0.3}}\r\ndetector = DataDriftDetector(ref)\r\ncurrent = [{\"input_length\": 300, \"sentiment\": 0.8} for _ in range(20)]\r\nprint(f\"Drift detected: {detector.detect(current)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-model-drift-detection",
      children: "6.2.2 Model Drift Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModelDriftDetector:\r\n    def __init__(self, baseline_accuracy: float):\r\n        self.baseline = baseline_accuracy\r\n        self.accuracy_history: List[float] = []\r\n\r\n    def update(self, accuracy: float):\r\n        self.accuracy_history.append(accuracy)\r\n\r\n    def detect_drift(self, window: int = 10, threshold: float = 0.05) -> Dict:\r\n        if len(self.accuracy_history) < window:\r\n            return {\"drift_detected\": False, \"message\": f\"Need {window} samples, have {len(self.accuracy_history)}\"}\r\n\r\n        recent = self.accuracy_history[-window:]\r\n        recent_avg = np.mean(recent)\r\n        drift = self.baseline - recent_avg\r\n\r\n        return {\r\n            \"drift_detected\": drift > threshold,\r\n            \"baseline_accuracy\": round(self.baseline, 3),\r\n            \"recent_avg_accuracy\": round(recent_avg, 3),\r\n            \"drift\": round(drift, 3),\r\n            \"threshold\": threshold,\r\n            \"alert\": drift > threshold,\r\n        }\r\n\r\nmdd = ModelDriftDetector(baseline_accuracy=0.92)\r\nfor _ in range(15):\r\n    mdd.update(np.random.normal(0.90, 0.03))\r\nprint(f\"Model drift: {mdd.detect_drift(window=10)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-performance-alerts",
      children: "6.3 Performance Alerts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-performance-thresholds",
      children: "6.3.1 Performance Thresholds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PerformanceThresholds:\r\n    def __init__(self):\r\n        self.thresholds = {\r\n            \"p95_latency_ms\": {\"warning\": 1000, \"critical\": 3000},\r\n            \"error_rate\": {\"warning\": 0.01, \"critical\": 0.05},\r\n            \"throughput_rps\": {\"warning\": 50, \"critical\": 10},\r\n            \"cost_per_request\": {\"warning\": 0.01, \"critical\": 0.05},\r\n        }\r\n\r\n    def check(self, metrics: Dict[str, float]) -> List[Dict]:\r\n        alerts = []\r\n        for metric, value in metrics.items():\r\n            if metric not in self.thresholds:\r\n                continue\r\n            limits = self.thresholds[metric]\r\n            if value >= limits[\"critical\"]:\r\n                alerts.append({\"metric\": metric, \"value\": value, \"severity\": \"critical\", \"limit\": limits[\"critical\"]})\r\n            elif value >= limits[\"warning\"]:\r\n                alerts.append({\"metric\": metric, \"value\": value, \"severity\": \"warning\", \"limit\": limits[\"warning\"]})\r\n        return alerts\r\n\r\n    def update_threshold(self, metric: str, level: str, value: float):\r\n        if metric in self.thresholds and level in (\"warning\", \"critical\"):\r\n            self.thresholds[metric][level] = value\r\n\r\npt = PerformanceThresholds()\r\nalerts = pt.check({\"p95_latency_ms\": 2500, \"error_rate\": 0.03})\r\nprint(f\"Performance alerts: {alerts}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-error-rate-monitoring",
      children: "6.3.2 Error Rate Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ErrorRateMonitor:\r\n    def __init__(self, window: int = 100):\r\n        self.window = window\r\n        self.results: List[bool] = []\r\n\r\n    def record(self, success: bool):\r\n        self.results.append(success)\r\n        if len(self.results) > self.window * 10:\r\n            self.results = self.results[-self.window:]\r\n\r\n    def error_rate(self) -> float:\r\n        if not self.results:\r\n            return 0.0\r\n        recent = self.results[-self.window:]\r\n        return sum(1 for r in recent if not r) / len(recent)\r\n\r\n    def is_degraded(self, threshold: float = 0.05) -> Dict:\r\n        rate = self.error_rate()\r\n        return {\r\n            \"error_rate\": round(rate, 4),\r\n            \"sample_size\": min(len(self.results), self.window),\r\n            \"degraded\": rate > threshold,\r\n        }\r\n\r\n    def error_categories(self, errors: List[Dict]) -> Dict:\r\n        from collections import Counter\r\n        categories = Counter(e.get(\"type\", \"unknown\") for e in errors)\r\n        return {\r\n            \"total\": len(errors),\r\n            \"categories\": dict(categories),\r\n            \"primary\": categories.most_common(1)[0][0] if categories else \"\",\r\n        }\r\n\r\nerm = ErrorRateMonitor()\r\nfor _ in range(200):\r\n    erm.record(np.random.random() > 0.03)\r\nprint(f\"Error rate: {erm.is_degraded(0.05)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-incident-response",
      children: "6.4 Incident Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "641-incident-manager",
      children: "6.4.1 Incident Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass Incident:\r\n    id: str\r\n    title: str\r\n    severity: Severity\r\n    description: str\r\n    detected_at: float\r\n    acknowledged_at: Optional[float] = None\r\n    resolved_at: Optional[float] = None\r\n    assigned_to: Optional[str] = None\r\n    runbook: Optional[str] = None\r\n\r\nclass IncidentManager:\r\n    def __init__(self):\r\n        self.incidents: List[Incident] = []\r\n        self.runbooks: Dict[str, List[str]] = {}\r\n        self.oncall: List[str] = []\r\n\r\n    def create_incident(self, title: str, severity: Severity,\r\n                         description: str, runbook: str = None) -> str:\r\n        inc = Incident(\r\n            id=f\"INC-{len(self.incidents) + 1:04d}\",\r\n            title=title,\r\n            severity=severity,\r\n            description=description,\r\n            detected_at=time.time(),\r\n            runbook=runbook,\r\n        )\r\n        self.incidents.append(inc)\r\n        self._assign(inc)\r\n        return inc.id\r\n\r\n    def _assign(self, incident: Incident):\r\n        if self.oncall:\r\n            incident.assigned_to = self.oncall[0]\r\n            self.oncall = self.oncall[1:] + [self.oncall[0]]\r\n\r\n    def acknowledge(self, incident_id: str, responder: str):\r\n        for inc in self.incidents:\r\n            if inc.id == incident_id:\r\n                inc.acknowledged_at = time.time()\r\n                inc.assigned_to = responder\r\n                break\r\n\r\n    def resolve(self, incident_id: str):\r\n        for inc in self.incidents:\r\n            if inc.id == incident_id:\r\n                inc.resolved_at = time.time()\r\n                break\r\n\r\n    def register_runbook(self, name: str, steps: List[str]):\r\n        self.runbooks[name] = steps\r\n\r\n    def get_runbook(self, name: str) -> List[str]:\r\n        return self.runbooks.get(name, [\"No runbook defined\"])\r\n\r\n    def open_incidents(self) -> List[Incident]:\r\n        return [i for i in self.incidents if i.resolved_at is None]\r\n\r\n    def stats(self) -> Dict:\r\n        total = len(self.incidents)\r\n        open_inc = len(self.open_incidents())\r\n        return {\r\n            \"total_incidents\": total,\r\n            \"open\": open_inc,\r\n            \"resolved\": total - open_inc,\r\n        }\r\n\r\nim = IncidentManager()\r\nim.register_runbook(\"high_latency\", [\r\n    \"1. Check P95 latency dashboard\",\r\n    \"2. Identify slowest component from traces\",\r\n    \"3. Check if model version recently changed\",\r\n    \"4. Rollback if regression from new deployment\",\r\n    \"5. Scale up if traffic surge\",\r\n])\r\ninc_id = im.create_incident(\"P95 latency spike\", Severity.HIGH, \"P95 went from 500ms to 3s\", \"high_latency\")\r\nprint(f\"Incident: {inc_id}\")\r\nprint(f\"Runbook: {im.get_runbook('high_latency')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "642-severity-classification",
      children: "6.4.2 Severity Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SeverityClassifier:\r\n    def classify(self, impact: str, urgency: str,\r\n                 affected_users_pct: float) -> Severity:\r\n        if impact == \"outage\" or affected_users_pct > 0.5:\r\n            return Severity.CRITICAL\r\n        elif urgency == \"high\" or affected_users_pct > 0.2:\r\n            return Severity.HIGH\r\n        elif impact == \"partial\" or affected_users_pct > 0.05:\r\n            return Severity.MEDIUM\r\n        else:\r\n            return Severity.LOW\r\n\r\n    def response_time(self, severity: Severity) -> int:\r\n        times = {\r\n            Severity.CRITICAL: 5,\r\n            Severity.HIGH: 15,\r\n            Severity.MEDIUM: 60,\r\n            Severity.LOW: 240,\r\n            Severity.INFO: 1440,\r\n        }\r\n        return times.get(severity, 60)\r\n\r\n    def description(self, severity: Severity) -> str:\r\n        descs = {\r\n            Severity.CRITICAL: \"Complete outage or data loss. Immediate response.\",\r\n            Severity.HIGH: \"Major feature degradation. Respond within 15 min.\",\r\n            Severity.MEDIUM: \"Partial impact. Respond within 1 hour.\",\r\n            Severity.LOW: \"Minor issue. Respond within 4 hours.\",\r\n            Severity.INFO: \"Informational. No response needed.\",\r\n        }\r\n        return descs.get(severity, \"Unknown\")\r\n\r\nsc = SeverityClassifier()\r\nsev = sc.classify(\"outage\", \"high\", 0.8)\r\nprint(f\"Severity: {sev.value}, Response: {sc.response_time(sev)} min\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-rollback",
      children: "6.5 Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-rollback-manager",
      children: "6.5.1 Rollback Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RollbackManager:\r\n    def __init__(self):\r\n        self.deployments: List[Dict] = []\r\n        self.current_version: Optional[str] = None\r\n        self.rollback_history: List[Dict] = []\r\n\r\n    def record_deployment(self, version: str, model_uri: str,\r\n                           config: Dict = None):\r\n        self.deployments.append({\r\n            \"version\": version,\r\n            \"model_uri\": model_uri,\r\n            \"config\": config or {},\r\n            \"deployed_at\": time.time(),\r\n            \"rollback_count\": 0,\r\n        })\r\n        self.current_version = version\r\n\r\n    def rollback(self, target_version: str = None) -> Dict:\r\n        if len(self.deployments) < 2 and not target_version:\r\n            return {\"success\": False, \"error\": \"No previous version to rollback to\"}\r\n\r\n        if target_version:\r\n            target = next((d for d in self.deployments if d[\"version\"] == target_version), None)\r\n            if not target:\r\n                return {\"success\": False, \"error\": f\"Version {target_version} not found\"}\r\n        else:\r\n            target = self.deployments[-2]\r\n\r\n        rollback = {\r\n            \"from_version\": self.current_version,\r\n            \"to_version\": target[\"version\"],\r\n            \"model_uri\": target[\"model_uri\"],\r\n            \"rolled_back_at\": time.time(),\r\n            \"reason\": \"\",\r\n        }\r\n\r\n        self.rollback_history.append(rollback)\r\n        self.current_version = target[\"version\"]\r\n        target[\"rollback_count\"] = target.get(\"rollback_count\", 0) + 1\r\n\r\n        return {\r\n            \"success\": True,\r\n            \"rollback\": rollback,\r\n            \"current_version\": self.current_version,\r\n        }\r\n\r\n    def rollback_stats(self) -> Dict:\r\n        return {\r\n            \"current_version\": self.current_version,\r\n            \"total_deployments\": len(self.deployments),\r\n            \"total_rollbacks\": len(self.rollback_history),\r\n            \"last_rollback\": self.rollback_history[-1] if self.rollback_history else None,\r\n        }\r\n\r\nrbm = RollbackManager()\r\nrbm.record_deployment(\"v1.0\", \"models/v1/\")\r\nrbm.record_deployment(\"v2.0\", \"models/v2/\")\r\nresult = rbm.rollback()\r\nprint(f\"Rollback: {result['success']} to {result['current_version']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-canary-rollback",
      children: "6.5.2 Canary Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CanaryRollback:\r\n    def __init__(self):\r\n        self.canary_pct = 5\r\n        self.healthy = True\r\n\r\n    def deploy_canary(self, new_version: str, traffic_pct: int = 5):\r\n        self.canary_pct = traffic_pct\r\n        print(f\"Deploying {new_version} to {traffic_pct}% of traffic\")\r\n\r\n    def monitor_canary(self, error_rate: float, latency_p95: float,\r\n                        thresholds: Dict) -> bool:\r\n        healthy = True\r\n\r\n        if error_rate > thresholds.get(\"error_rate\", 0.05):\r\n            healthy = False\r\n        if latency_p95 > thresholds.get(\"latency_p95\", 2000):\r\n            healthy = False\r\n\r\n        self.healthy = healthy\r\n        return healthy\r\n\r\n    def rollback_canary(self, new_version: str) -> Dict:\r\n        if not self.healthy:\r\n            return {\r\n                \"action\": \"rollback\",\r\n                \"version\": new_version,\r\n                \"reason\": \"Canary health checks failed\",\r\n                \"rolled_back\": True,\r\n            }\r\n        return {\r\n            \"action\": \"promote\",\r\n            \"version\": new_version,\r\n            \"reason\": \"Canary healthy\",\r\n            \"rolled_back\": False,\r\n        }\r\n\r\ncanary = CanaryRollback()\r\ncanary.deploy_canary(\"v2.1\", 5)\r\nhealthy = canary.monitor_canary(0.08, 2500, {\"error_rate\": 0.03, \"latency_p95\": 2000})\r\nprint(f\"Canary healthy: {healthy}\")\r\nprint(f\"Action: {canary.rollback_canary('v2.1')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-postmortem",
      children: "6.6 Postmortem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "661-postmortem-template",
      children: "6.6.1 Postmortem Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Postmortem:\r\n    def __init__(self, incident_id: str, title: str):\r\n        self.incident_id = incident_id\r\n        self.title = title\r\n        self.date = time.time()\r\n        self.summary = \"\"\r\n        self.timeline: List[Dict] = []\r\n        self.root_cause = \"\"\r\n        self.impact = \"\"\r\n        self.action_items: List[Dict] = []\r\n        self.lessons: List[str] = []\r\n\r\n    def add_timeline_event(self, time_str: str, event: str):\r\n        self.timeline.append({\"time\": time_str, \"event\": event})\r\n\r\n    def add_action_item(self, description: str, owner: str,\r\n                         priority: str = \"medium\", due_date: str = \"\"):\r\n        self.action_items.append({\r\n            \"description\": description,\r\n            \"owner\": owner,\r\n            \"priority\": priority,\r\n            \"due_date\": due_date,\r\n            \"status\": \"open\",\r\n        })\r\n\r\n    def generate(self) -> Dict:\r\n        return {\r\n            \"incident_id\": self.incident_id,\r\n            \"title\": self.title,\r\n            \"date\": self.date,\r\n            \"summary\": self.summary,\r\n            \"timeline\": self.timeline,\r\n            \"root_cause\": self.root_cause,\r\n            \"impact\": self.impact,\r\n            \"action_items\": self.action_items,\r\n            \"lessons\": self.lessons,\r\n            \"completed\": all(a[\"status\"] == \"closed\" for a in self.action_items),\r\n        }\r\n\r\npm = Postmortem(\"INC-0001\", \"P95 latency spike on 2024-01-15\")\r\npm.summary = \"P95 latency increased from 500ms to 3s due to model version rollout\"\r\npm.add_timeline_event(\"14:00\", \"Deployed v2.1 model\")\r\npm.add_timeline_event(\"14:05\", \"P95 latency alert fired\")\r\npm.add_timeline_event(\"14:06\", \"Incident created\")\r\npm.add_timeline_event(\"14:10\", \"Rollback initiated\")\r\npm.add_timeline_event(\"14:12\", \"Latency returned to baseline\")\r\npm.root_cause = \"v2.1 model had an extra attention layer causing 6x compute\"\r\npm.add_action_item(\"Add pre-deployment latency benchmark\", \"ML team\", \"high\")\r\nprint(f\"Postmortem generated: {len(pm.action_items)} action items\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "662-action-item-tracker",
      children: "6.6.2 Action Item Tracker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ActionItemTracker:\r\n    def __init__(self):\r\n        self.items: List[Dict] = []\r\n\r\n    def add(self, item: Dict):\r\n        self.items.append(item)\r\n\r\n    def close(self, description: str):\r\n        for item in self.items:\r\n            if item[\"description\"] == description:\r\n                item[\"status\"] = \"closed\"\r\n                item[\"closed_at\"] = time.time()\r\n\r\n    def open_items(self) -> List[Dict]:\r\n        return [i for i in self.items if i.get(\"status\") == \"open\"]\r\n\r\n    def completion_rate(self) -> float:\r\n        if not self.items:\r\n            return 1.0\r\n        closed = sum(1 for i in self.items if i.get(\"status\") == \"closed\")\r\n        return closed / len(self.items)\r\n\r\n    def report(self) -> Dict:\r\n        return {\r\n            \"total\": len(self.items),\r\n            \"open\": len(self.open_items()),\r\n            \"closed\": len(self.items) - len(self.open_items()),\r\n            \"completion_rate\": round(self.completion_rate() * 100, 1),\r\n        }\r\n\r\nait = ActionItemTracker()\r\nait.add({\"description\": \"Add pre-deployment benchmarking\", \"priority\": \"high\", \"status\": \"open\"})\r\nait.add({\"description\": \"Update monitoring thresholds\", \"priority\": \"medium\", \"status\": \"open\"})\r\nait.close(\"Update monitoring thresholds\")\r\nprint(f\"Action item report: {ait.report()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alerting and incident response for AI systems requires a structured approach: define alert rules with appropriate severity (critical/high/medium/low) and cooldown periods to prevent alert fatigue. Drift alerts detect data distribution shifts (PSI > 0.5),.\r\nmodel accuracy degradation (drop > 5%), and concept drift. Performance alerts trigger on P95 latency, error rate, throughput, and cost thresholds. Incident response follows severity-based runbooks with clear escalation paths. Rollback procedures include canary deployments (start with 5% traffic) and.\r\nautomated rollback when health checks fail. Postmortems create a blameless culture focused on learning — documenting timelines, root causes, action items with owners,.\r\nand tracking completion rates."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set cooldown on alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents notification storms from repeated violations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use canary deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test changes on 5% traffic before full rollout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automate rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health check failure should trigger immediate rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document runbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every alert type needs a clear response procedure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blameless postmortems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Focus on systems, not people"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Track action items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completion rate indicates organizational learning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ev06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you design effective alert rules for an AI system without causing alert fatigue?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Effective alert rules follow the \"keep signals high, noise low\" principle. Key practices: (1) Use cooldown periods — after an alert fires,.\nwait at least 5 minutes before firing again for the same condition. (2) Require sustained violation — alert only when the condition persists for.\nN consecutive evaluation windows (e.g., P95 > 2s for 5 minutes). (3) Set appropriate severity levels — critical for user-facing issues (error.\nrate > 5%), high for degradation (latency > 1s for 10 min), medium for warnings (cost spike), low for informational. (4) Use relative thresholds — \"latency is 3— higher than the same time yesterday\" is more robust than absolute thresholds. (5) Regularly review and.\ntune alert rules based on false positive rates; retire rules with >90% false positive rate."
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
      "data-qid": "ev06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is a canary deployment and how does it reduce deployment risk for AI models?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A canary deployment rolls out a new model version to a small percentage of traffic (typically 5-10%) before full deployment. For.\nAI models, this is critical because offline metrics often don't predict online behavior — a model with better offline F1 might produce worse user experience due to latency,.\nverbosity, or unexpected outputs. The canary runs for a validation period (hours to days) during which metrics (latency, error rate, user engagement,.\nquality scores) are compared between the canary and the baseline. If metrics are stable or better, traffic is gradually increased (25% → 50% → 100%). If metrics degrade,.\nthe canary is automatically rolled back. This technique catches about 60% of production issues before full rollout."
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
      "data-qid": "ev06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you write an effective incident response runbook for an AI system failure?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A runbook should contain: (1) Alert description — what triggered the alert and what it means. (2) Severity classification — critical (users impacted),.\nhigh (partial degradation), medium (potential issue), low (informational). (3) Immediate mitigation steps — \"Rollback to previous model version\", \"Increase rate limit\",.\n\"Failover to backup provider\". (4) Investigation steps — check dashboard X, review recent deployments, inspect error logs for pattern. (5) Escalation path — who to contact if initial mitigation fails,.\nincluding names and phone numbers. (6) Post-mitigation steps — document what happened, update the runbook. Runbooks should be tested in game days — simulated incidents where the on-call engineer follows the runbook without preparation."
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
      "data-qid": "ev06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you implement automated rollback for a degraded AI model in production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Automated rollback requires: (1) Health check endpoint — returns model status (healthy/unhealthy) with the last successful prediction time and current error.\nrate. (2) Health check criteria — rollback if error rate > 5% sustained for 2 minutes, or latency P95 > 3s for.\n3 minutes, or prediction drift > 2 standard deviations from baseline. (3) Rollback mechanism — the deployment system (Kubernetes, CI/CD pipeline) automatically reverts to the previous stable version. (4) Traffic drain — stop sending new traffic to the bad deployment and.\nlet in-flight requests complete. (5) Notification — alert the on-call engineer that an automatic rollback occurred with the reason and metrics. (6) Post-rollback validation — verify the rollback resolved the issue and.\nthe system is stable."
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
      "data-qid": "ev06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you detect data drift in production AI systems?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Data drift detection monitors the distribution of incoming features and predictions. Methods: (1) Population Stability Index (PSI) — measures how much a distribution has shifted;.\nPSI > 0.25 indicates significant drift. (2) Kolmogorov-Smirnov test — non-parametric test comparing reference and current distributions. (3) Jensen-Shannon divergence — symmetric measure of distribution difference. (4) Feature-level monitoring — track min,.\nmax, mean, std for each numeric feature; frequency for categorical features. (5) Prediction drift — monitor the distribution of model predictions over time. Set up alerts when drift exceeds thresholds (e.g.,.\nPSI > 0.2 for any feature). When drift is detected, trigger retraining on recent data or investigate the cause of the shift."
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
      "data-qid": "ev06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is a blameless postmortem and how do you write one effectively?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A blameless postmortem focuses on understanding what happened and preventing recurrence, not on who caused it. Structure: (1) Incident summary — what happened,.\nwhen, impact (users affected, downtime duration). (2) Timeline — chronologically ordered events from detection to resolution. (3) Root cause — the technical failure that triggered the incident (e.g.,.\n\"rate limit not configured on new endpoint\"). (4) Contributing factors — conditions that made the incident worse (e.g., \"alert was silenced during maintenance\"). (5) Action items — specific,.\nowner-assigned tasks to prevent recurrence, with deadlines. (6) Blameless culture statement — explicitly state that the goal is learning, not blame. Effective postmortems lead to systemic improvements,.\nnot punitive actions."
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
      "data-qid": "ev06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you set up a severity classification system for AI incidents?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SEV1 (Critical) — complete service outage, incorrect predictions causing financial/harm, data breach. Response: page on-call immediately, 15-minute response time. SEV2 (High) — partial degradation (P95 latency > 3s),.\nelevated error rate (>5%), feature unavailable for subset of users. Response: page on-call, 30-minute response. SEV3 (Medium) — non-critical bugs, cosmetic issues,.\nsingle-user problems. Response: next business day ticket. SEV4 (Low) — minor issues, feature requests. Response: backlog. Each severity level has defined: response time,.\ncommunication channels (SEV1 gets company-wide Slack alert, SEV4 gets a Jira ticket), and escalation paths. Regular incident reviews ensure severity classifications are applied consistently."
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
      "data-qid": "ev06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you handle concept drift specifically in LLM-based applications?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Concept drift in LLM apps occurs when the relationship between input queries and expected outputs changes. Detection approaches: (1) User behavior.\ndrift — monitor changes in query patterns, conversation lengths, and topic distributions. (2) LLM provider drift — models get updated without notice,.\nchanging output style and quality. (3) Knowledge drift — the underlying facts change (e.g., a company policy update that makes old answers incorrect). (4) Evaluation score drift — LLM-as-Judge scores trending downward over time. Mitigations: (1) Continuous evaluation — run.\ndaily evaluation on production samples against golden dataset. (2) Feedback loop analysis — track user satisfaction trends. (3) Scheduled model comparisons — periodically compare current vs. previous model versions. (4) Knowledge base refresh — keep RAG knowledge bases up to.\ndate."
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
      "data-qid": "ev06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you implement a notification strategy that avoids pager fatigue?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pager fatigue prevention: (1) Severity-based routing — critical alerts page the on-call engineer, high alerts go to Slack, medium/low become Jira tickets. (2) Alert deduplication — if multiple alerts fire for.\nthe same root cause (e.g., \"LLM API error\" plus \"latency spike\"), group them into one notification. (3) On-call schedules — rotating shifts with clear handoff procedures. (4) Escalation policies — primary on-call gets first page,.\nsecondary if no response in 10 minutes, manager after 20 minutes. (5) Silent hours — suppress non-critical notifications during nights/weekends, but.\nallow critical ones through. (6) Alert fatigue metrics — track notification volume per person per shift and aim for fewer than 5 pages per shift. (7) Regular review — retire alerts with >90% false positive rate."
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
      "data-qid": "ev06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you implement an alert rule with cooldown and sustained violation detection?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class AlertRule {\n  private lastFired: number = 0;\n  private consecutiveViolations: number = 0;\n  constructor(private condition: () => boolean, private cooldownMs: number,\n    private requiredConsecutive: number, private severity: string) {}\n  evaluate(): Alert | null {\n    const now = Date.now();\n    if (this.condition()) {\n      this.consecutiveViolations++;\n      if (this.consecutiveViolations >= this.requiredConsecutive\n          && now - this.lastFired > this.cooldownMs) {\n        this.lastFired = now;\n        this.consecutiveViolations = 0;\n        return { severity: this.severity, firedAt: now };\n      }\n    } else { this.consecutiveViolations = 0; }\n    return null;\n  }\n}"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The AlertRule class tracks consecutive violation counts and a cooldown timer. An alert fires only after the condition has been true for.\nN consecutive evaluations (e.g., 3 checks at 1-minute intervals = 3 minutes of sustained violation). After firing, the cooldown prevents re-firing until the cooldown period expires. This eliminates alert storms from transient spikes while catching genuine sustained issues. The rule evaluates periodically (e.g.,.\nevery 60 seconds) and clears the consecutive counter when the condition is no longer met. Adjust required_consecutive based on how quickly you need to detect real issues vs. how much noise you can tolerate."
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "eval-s6-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Why use cooldown periods on alerts?"]
      }), "\nA. To save costs\nB. To prevent alert fatigue from repeated notifications\nC. To reduce system load\nD. To comply with regulations\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "eval-s6-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is a canary deployment?"]
      }), "\nA. Deploying to all users at once\nB. Rolling out to a small percentage first\nC. Using a different model\nD. Testing in production\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "eval-s6-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What triggers a model drift alert?"]
      }), "\nA. Increased traffic\nB. Model accuracy drops below baseline by threshold amount\nC. New model version\nD. Cost increase\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "eval-s6-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the primary goal of a postmortem?"]
      }), "\nA. Assign blame\nB. Learn from incidents and prevent recurrence\nC. Document errors\nD. Reward the responder\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "eval-s6-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What should happen when a canary health check fails?"]
      }), "\nA. Ignore it\nB. Automatically rollback the canary\nC. Promote to full deployment\nD. Retry the deployment\nAnswer: B\n"]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Build an alert manager with 5 rules (latency, error rate, drift, throughput, cost), cooldown periods, and severity levels. Simulate metric values and report fired alerts."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a data drift detector using PSI (population stability index). Create a reference distribution and test with current data that has shifted by 0.3, 0.5, and 1.0 standard deviations."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an incident management system with severity classification, runbook execution, and acknowledgment tracking. Simulate 3 incidents at different severities."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a rollback manager that supports version recording, rollback to N-1, canary deployment with health monitoring, and automatic rollback on threshold breach."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a postmortem generator for an incident. Include timeline, root cause, impact assessment, and 5 action items with owners and priorities. Track complet"
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
            children: "How does Alerting & Incident Response behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Alerting & Incident Response\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Alerting & Incident Response to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Alerting & Incident Response (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Alerting & Incident Response and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Alerting & Incident Response-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Alerting & Incident Response in production today?"
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
        }), " Alerting & Incident Response builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Alerting & Incident Response before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Alerting & Incident Response is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Alerting & Incident Response in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Alerting & Incident Response is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 06 Alerting And Incident Response is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Alerting And Incident Response is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Alerting & Incident Response issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Alerting & Incident Response in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Alerting & Incident Response that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Alerting & Incident Response in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Alerting & Incident Response and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Alerting & Incident Response to someone else"
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
        children: "Always write a one-line example of Alerting & Incident Response from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Alerting & Incident Response when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Alerting & Incident Response twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Alerting & Incident Response snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Alerting & Incident Response listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Alerting & Incident Response to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Alerting & Incident Response by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Alerting & Incident Response to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations & Incident Response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 15 — builds the foundation for 06 Alerting And Incident Response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Alerting And Incident Response with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Alerting And Incident Response fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Alerting And Incident Response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Alerting And Incident Response"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Alerting And Incident Response?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Alerting And Incident Response?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Alerting And Incident Response asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Alerting And Incident Response?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alerting & Incident Response is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Alerting & Incident Response."
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
        children: "Alerting & Incident Response emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Alerting & Incident Response today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Alerting & Incident Response — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Alerting & Incident Response changes quickly; focus on fundamentals that remain stable."
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
            children: "06 Alerting And Incident Response is like a GPS navigation system"
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
          }), " — this chapter contributes the Alerting & Incident Response skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "15aievaluationobservability-06alertingandincidentresponse-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Alerting & Incident Response in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "15aievaluationobservability-06alertingandincidentresponse-flash2",
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
      "data-qid": "15aievaluationobservability-06alertingandincidentresponse-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Alerting & Incident Response approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "15aievaluationobservability-06alertingandincidentresponse-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Alerting & Incident Response NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "15aievaluationobservability-06alertingandincidentresponse-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Alerting & Incident Response applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Alerting & Incident Response (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Alerting & Incident Response (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Alerting & Incident Response-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Alerting & Incident Response in production at scale"
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
        children: "cProfile / py-spy for performance profiling & Incident Response"
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
        }), ": Add structured logging at each stage of the 06 Alerting And Incident Response pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Alerting & Incident Response."
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
        children: "Tell me about a time you debugged a Alerting & Incident Response problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Alerting & Incident Response is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_alerting_and_incident_response(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Alerting And Incident Response.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Alerting And Incident Response here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Alerting & Incident Response without notes"
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
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alerting & Incident Response, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Alerting & Incident Response depends on input size and distribution — always benchmark for your own data."
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