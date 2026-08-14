"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[41742],{

/***/ 5893
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_11_serverless_lambda_md_7df_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-11-serverless-lambda-md-7df.json
const site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_11_serverless_lambda_md_7df_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/11-serverless-lambda","title":"Serverless & AWS Lambda — Event-Driven ML Inference","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":91,"frontMatter":{"id":"11-serverless-lambda","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda","title":"Serverless & AWS Lambda — Event-Driven ML Inference","sidebar_label":"Serverless & AWS Lambda — Event-Driven ML Inference","sidebar_position":91},"sidebar":"placementSidebar","previous":{"title":"CI/CD Pipelines — Continuous Integration and Delivery","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/10-ci-cd-pipelines"},"next":{"title":"Azure AI Services — Cognitive Services, Azure ML, OpenAI Service","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/12-azure-ai-services"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda.md


const frontMatter = {
	id: '11-serverless-lambda',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda',
	title: 'Serverless & AWS Lambda — Event-Driven ML Inference',
	sidebar_label: 'Serverless & AWS Lambda — Event-Driven ML Inference',
	sidebar_position: 91
};
const contentTitle = 'Serverless & AWS Lambda — Event-Driven ML Inference';

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
  "value": "Serverless Architecture Overview",
  "id": "serverless-architecture-overview",
  "level": 3
}, {
  "value": "Serverless Pros and Cons",
  "id": "serverless-pros-and-cons",
  "level": 3
}, {
  "value": "AWS Lambda Deep Dive",
  "id": "aws-lambda-deep-dive",
  "level": 3
}, {
  "value": "Lambda Cold Starts",
  "id": "lambda-cold-starts",
  "level": 3
}, {
  "value": "Lambda Triggers and Event Sources",
  "id": "lambda-triggers-and-event-sources",
  "level": 3
}, {
  "value": "Lambda + API Gateway for ML Inference",
  "id": "lambda--api-gateway-for-ml-inference",
  "level": 3
}, {
  "value": "Serverless ML Inference Pipeline",
  "id": "serverless-ml-inference-pipeline",
  "level": 3
}, {
  "value": "Multi-Cloud Serverless Comparison",
  "id": "multi-cloud-serverless-comparison",
  "level": 3
}, {
  "value": "Serverless Limitations for ML",
  "id": "serverless-limitations-for-ml",
  "level": 3
}, {
  "value": "Visual Explanation",
  "id": "visual-explanation",
  "level": 2
}, {
  "value": "Real Example",
  "id": "real-example",
  "level": 2
}, {
  "value": "Code Example",
  "id": "code-example",
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
        id: "serverless--aws-lambda--event-driven-ml-inference",
        children: "Serverless & AWS Lambda — Event-Driven ML Inference"
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
            children: "Understand serverless architecture trade-offs vs traditional compute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build and deploy AWS Lambda functions with triggers and layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle Lambda cold starts with optimization strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Lambda + API Gateway for ML model inference endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare AWS Lambda, Azure Functions, and Google Cloud Functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement serverless ML inference pipelines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Serverless computing lets you run code without managing servers. AWS Lambda, Azure Functions, and Google Cloud Functions execute code in response to events. AI engineers use serverless for model inference, data preprocessing, and event-driven ML pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of cloud computing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with REST APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python or Node.js programming"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverless-architecture-overview",
      children: "Serverless Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Event Sources\n        A[HTTP API Gateway]\n        B[S3 Bucket Events]\n        C[DynamoDB Streams]\n        D[SQS Queue]\n        E[CloudWatch Events]\n        F[Kinesis Streams]\n    end\n\n    subgraph Compute\n        G[AWS Lambda Function]\n        H[Azure Function]\n        I[GCP Cloud Function]\n    end\n\n    subgraph Integrations\n        J[API Gateway]\n        K[Step Functions]\n        L[EventBridge]\n    end\n\n    subgraph AI/ML Services\n        M[SageMaker/Sagemaker]\n        N[Rekognition/Comprehend]\n        O[Bedrock/Vertex AI]\n    end\n\n    A & B & C & D & E & F --> G\n    G --> J & K & L\n    G --> M & N & O\n    G --> P[(DynamoDB/RDS)]\n    G --> Q[S3 Output]\n\n    style G fill:#4a90d9,color:#fff\n    style H fill:#50b86c,color:#fff\n    style I fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverless-pros-and-cons",
      children: "Serverless Pros and Cons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No server management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cold starts (latency spikes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scales to zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-minute execution limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512MB-10GB memory limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in high availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1MB request/response payload limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No persistent local storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aws-lambda-deep-dive",
      children: "AWS Lambda Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda execution model"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "1. Event source triggers Lambda\n2. AWS creates a new execution environment (container)\n3. Lambda runtime loads your code (init phase)\n4. Handler function executes with event data\n5. Response returned (synchronous) or sent to destination\n6. Environment frozen for ~5-15 minutes (keep warm)\n7. Environment recycled after idle timeout\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda function basics"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport os\nimport boto3\n\ndef lambda_handler(event, context):\n    \"\"\"Primary Lambda entry point\"\"\"\n    print(f\"Event: {json.dumps(event, default=str)[:500]}\")\n    print(f\"Remaining time: {context.get_remaining_time_in_millis()}ms\")\n\n    # Extract request info\n    http_method = event.get(\"httpMethod\", \"GET\")\n    path = event.get(\"path\", \"/\")\n    query_params = event.get(\"queryStringParameters\", {}) or {}\n    body = event.get(\"body\", \"{}\")\n\n    # Process based on route\n    if path == \"/health\":\n        return {\"statusCode\": 200, \"body\": json.dumps({\"status\": \"healthy\"})}\n\n    if path == \"/predict\" and http_method == \"POST\":\n        payload = json.loads(body)\n        result = predict(payload)\n        return {\"statusCode\": 200, \"body\": json.dumps(result)}\n\n    return {\"statusCode\": 404, \"body\": json.dumps({\"error\": \"Not found\"})}\n\ndef predict(data):\n    \"\"\"Mock prediction function\"\"\"\n    features = data.get(\"features\", [])\n    # In production: load model from S3 or EFS\n    prediction = {\"class\": \"positive\", \"confidence\": 0.95, \"features\": features}\n    return prediction\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda with API Gateway"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport boto3\nimport os\n\ndynamodb = boto3.resource(\"dynamodb\")\ntable_name = os.environ.get(\"TABLE_NAME\", \"inference-results\")\ntable = dynamodb.Table(table_name)\n\ndef lambda_handler(event, context):\n    \"\"\"API Gateway proxy integration\"\"\"\n    try:\n        # Parse API Gateway event\n        body = json.loads(event.get(\"body\", \"{}\"))\n        model_input = body.get(\"input\")\n        model_version = body.get(\"version\", \"v1\")\n\n        if not model_input:\n            return api_response(400, {\"error\": \"Missing 'input' field\"})\n\n        # Call SageMaker endpoint for inference\n        sagemaker = boto3.client(\"sagemaker-runtime\")\n        response = sagemaker.invoke_endpoint(\n            EndpointName=f\"my-model-{model_version}\",\n            ContentType=\"application/json\",\n            Body=json.dumps({\"instances\": [model_input]}),\n        )\n\n        # Parse result\n        result = json.loads(response[\"Body\"].read().decode())\n\n        # Log to DynamoDB\n        table.put_item(Item={\n            \"request_id\": context.aws_request_id,\n            \"input\": str(model_input)[:500],\n            \"output\": str(result)[:500],\n            \"timestamp\": context.aws_request_id,\n        })\n\n        return api_response(200, {\n            \"prediction\": result,\n            \"model_version\": model_version,\n            \"request_id\": context.aws_request_id,\n        })\n\n    except Exception as e:\n        print(f\"Error: {str(e)}\")\n        return api_response(500, {\"error\": \"Internal server error\"})\n\ndef api_response(status_code, body):\n    return {\n        \"statusCode\": status_code,\n        \"headers\": {\n            \"Content-Type\": \"application/json\",\n            \"Access-Control-Allow-Origin\": \"*\",\n        },\n        \"body\": json.dumps(body),\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda Layers"
      }), " (share dependencies across functions):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create layer directory structure\nmkdir -p python/lib/python3.9/site-packages/\n\n# Install packages\npip install -t python/lib/python3.9/site-packages/ \\\n    scikit-learn==1.3.0 \\\n    pandas==2.0.3 \\\n    numpy==1.24.3 \\\n    joblib==1.3.2 \\\n    requests==2.31.0\n\n# Package layer\nzip -r9 sklearn-layer.zip python/\n\n# Publish layer\naws lambda publish-layer-version \\\n    --layer-name sklearn-layer \\\n    --zip-file fileb://sklearn-layer.zip \\\n    --compatible-runtimes python3.9 python3.10 \\\n    --description \"Scikit-learn ML dependencies\"\n\n# Attach to function\naws lambda update-function-configuration \\\n    --function-name my-ml-function \\\n    --layers arn:aws:lambda:us-east-1:123456789012:layer:sklearn-layer:1\n\n# In your function code, import normally:\nimport numpy as np\nimport joblib\n\ndef lambda_handler(event, context):\n    model = joblib.load('/opt/model.pkl')  # Load from /opt\n    ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda Environment Variables and Secrets"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nimport boto3\nfrom aws_lambda_powertools import Logger\n\nlogger = Logger()\n\ndef lambda_handler(event, context):\n    # Environment variables (set during deployment)\n    model_bucket = os.environ[\"MODEL_BUCKET\"]\n    model_key = os.environ.get(\"MODEL_KEY\", \"models/latest.pkl\")\n    endpoint_name = os.environ[\"ENDPOINT_NAME\"]\n\n    # Get secrets from AWS Secrets Manager\n    secrets_client = boto3.client(\"secretsmanager\")\n    secret = secrets_client.get_secret_value(SecretId=\"ml/db-credentials\")\n    credentials = json.loads(secret[\"SecretString\"])\n\n    logger.info(f\"Loading model from s3://{model_bucket}/{model_key}\")\n    # ... inference logic\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-cold-starts",
      children: "Lambda Cold Starts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cold start happens when AWS initializes a new execution environment."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Request] --> B{Cold Start?}\n    B -->|Yes| C[Download Code]\n    C --> D[Initialize Runtime]\n    D --> E[Load Dependencies]\n    E --> F[Init Handler]\n    F --> G[Execute Handler]\n    B -->|No - Warm| G\n    G --> H[Return Response]\n    H --> I[Environment Frozen]\n    I --> J{Next Request < 15 min?}\n    J -->|Yes| G\n    J -->|No| K[Environment Recycled]\n\n    style A fill:#4a90d9,color:#fff\n    style C fill:#e85d75,color:#fff\n    style D fill:#e85d75,color:#fff\n    style G fill:#50b86c,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cold start optimization strategies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 1. Keep warm with CloudWatch Events\n# Scheduled event every 5 minutes pings the function\n\n# 2. Use Provisioned Concurrency\n# aws lambda put-provisioned-concurrency-config \\\n#     --function-name my-function \\\n#     --qualifier prod \\\n#     --provisioned-concurrent-executions 5\n\n# 3. Minimize deployment package size\n# Use layers for dependencies\n# Keep code under 3MB\n\n# 4. Use AWS Graviton (ARM) for better cold start\n\n# 5. Lazy load heavy dependencies\nimport importlib\n\n_MODEL = None\n\ndef load_model():\n    global _MODEL\n    if _MODEL is None:\n        import joblib  # Import inside handler\n        import boto3\n        s3 = boto3.client(\"s3\")\n        response = s3.get_object(Bucket=\"models\", Key=\"model.pkl\")\n        _MODEL = joblib.load(response[\"Body\"])\n    return _MODEL\n\ndef lambda_handler(event, context):\n    model = load_model()  # Lazy load\n    # ... inference\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cold start times by runtime"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cold Start (p50)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cold Start (p99)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150-400ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-1.5s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500ms-1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-10s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".NET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500ms-1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Go"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-300ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500ms-1s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom (Rust)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-500ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-triggers-and-event-sources",
      children: "Lambda Triggers and Event Sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 trigger (file processing)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport boto3\nimport urllib.parse\n\ns3 = boto3.client(\"s3\")\nrekognition = boto3.client(\"rekognition\")\ndynamodb = boto3.resource(\"dynamodb\")\ntable = dynamodb.Table(\"image-metadata\")\n\ndef lambda_handler(event, context):\n    \"\"\"Process S3 upload events\"\"\"\n    for record in event[\"Records\"]:\n        bucket = record[\"s3\"][\"bucket\"][\"name\"]\n        key = urllib.parse.unquote_plus(record[\"s3\"][\"object\"][\"key\"])\n        size = record[\"s3\"][\"object\"][\"size\"]\n\n        print(f\"Processing s3://{bucket}/{key} ({size} bytes)\")\n\n        # Call Rekognition for image analysis\n        response = rekognition.detect_labels(\n            Image={\"S3Object\": {\"Bucket\": bucket, \"Name\": key}},\n            MaxLabels=10,\n        )\n\n        labels = [label[\"Name\"] for label in response[\"Labels\"]]\n        print(f\"Detected labels: {labels}\")\n\n        # Store metadata\n        table.put_item(Item={\n            \"image_key\": key,\n            \"bucket\": bucket,\n            \"size_bytes\": size,\n            \"labels\": labels,\n            \"processed_at\": context.aws_request_id,\n        })\n\n    return {\"statusCode\": 200, \"processed\": len(event[\"Records\"])}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQS trigger (async processing)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport base64\n\ndef lambda_handler(event, context):\n    \"\"\"Process SQS queue messages\"\"\"\n    for record in event[\"Records\"]:\n        # Decode message body\n        body = json.loads(record[\"body\"])\n        receipt_handle = record[\"receiptHandle\"]\n        message_id = record[\"messageId\"]\n\n        print(f\"Processing {message_id}\")\n\n        # Process inference request\n        try:\n            result = process_inference(body)\n            print(f\"Success: {message_id}\")\n        except Exception as e:\n            print(f\"Failed: {message_id} - {str(e)}\")\n            # If we raise, Lambda will retry based on SQS redrive policy\n            raise\n\n    return {\"statusCode\": 200}\n\ndef process_inference(request):\n    \"\"\"Mock inference processing\"\"\"\n    features = request.get(\"features\", [])\n    model_id = request.get(\"model_id\", \"default\")\n\n    # In production, call SageMaker or local model\n    prediction = sum(features) > 0.5\n    return {\"model_id\": model_id, \"prediction\": prediction}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DynamoDB Streams trigger"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport boto3\n\ndef lambda_handler(event, context):\n    \"\"\"React to DynamoDB table changes\"\"\"\n    for record in event[\"Records\"]:\n        event_name = record[\"eventName\"]  # INSERT, MODIFY, REMOVE\n        new_image = record.get(\"dynamodb\", {}).get(\"NewImage\", {})\n        old_image = record.get(\"dynamodb\", {}).get(\"OldImage\", {})\n\n        user_id = new_image.get(\"userId\", {}).get(\"S\")\n\n        if event_name == \"INSERT\":\n            print(f\"New user registered: {user_id}\")\n            # Send welcome email, start onboarding\n        elif event_name == \"MODIFY\":\n            print(f\"User updated: {user_id}\")\n            # Update ML model features\n        elif event_name == \"REMOVE\":\n            print(f\"User deleted: {user_id}\")\n            # Clean up user data\n\n    return {\"statusCode\": 200}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda--api-gateway-for-ml-inference",
      children: "Lambda + API Gateway for ML Inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# template.yaml (AWS SAM)\nAWSTemplateFormatVersion: '2010-09-09'\nTransform: AWS::Serverless-2016-10-31\n\nGlobals:\n  Function:\n    Timeout: 30\n    MemorySize: 1024\n    Runtime: python3.10\n    Environment:\n      Variables:\n        MODEL_BUCKET: !Ref ModelBucket\n        TABLE_NAME: !Ref InferenceTable\n\nResources:\n  InferenceAPI:\n    Type: AWS::Serverless::Api\n    Properties:\n      StageName: prod\n      TracingEnabled: true\n      Throttle:\n        BurstLimit: 100\n        RateLimit: 50\n\n  InferenceFunction:\n    Type: AWS::Serverless::Function\n    Properties:\n      CodeUri: src/\n      Handler: inference.lambda_handler\n      Layers:\n        - !Ref MLDependenciesLayer\n      Policies:\n        - S3ReadPolicy:\n            BucketName: !Ref ModelBucket\n        - DynamoDBCrudPolicy:\n            TableName: !Ref InferenceTable\n      Events:\n        PredictEndpoint:\n          Type: Api\n          Properties:\n            RestApiId: !Ref InferenceAPI\n            Path: /predict\n            Method: POST\n        HealthEndpoint:\n          Type: Api\n          Properties:\n            RestApiId: !Ref InferenceAPI\n            Path: /health\n            Method: GET\n      AutoPublishAlias: live\n      ProvisionedConcurrencyConfig:\n        ProvisionedConcurrentExecutions: 5\n\n  MLDependenciesLayer:\n    Type: AWS::Serverless::LayerVersion\n    Properties:\n      LayerName: ml-dependencies\n      ContentUri: layers/ml/\n      CompatibleRuntimes:\n        - python3.10\n      RetentionPolicy: Retain\n\n  ModelBucket:\n    Type: AWS::S3::Bucket\n\n  InferenceTable:\n    Type: AWS::DynamoDB::Table\n    Properties:\n      AttributeDefinitions:\n        - AttributeName: request_id\n          AttributeType: S\n      KeySchema:\n        - AttributeName: request_id\n          KeyType: HASH\n      BillingMode: PAY_PER_REQUEST\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deploy with SAM"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build the application\nsam build\n\n# Deploy to AWS\nsam deploy --guided\n\n# Invoke locally for testing\nsam local invoke InferenceFunction --event test-event.json\n\n# Start local API Gateway\nsam local start-api\n\n# View logs\nsam logs --stack-name my-ml-app --tail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverless-ml-inference-pipeline",
      children: "Serverless ML Inference Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport boto3\nimport os\nimport time\nfrom datetime import datetime\n\ns3 = boto3.client(\"s3\")\nsagemaker = boto3.client(\"sagemaker-runtime\")\ndynamodb = boto3.resource(\"dynamodb\")\ntable = dynamodb.Table(os.environ[\"TABLE_NAME\"])\n\ndef lambda_handler(event, context):\n    \"\"\"\n    Serverless ML inference pipeline:\n    1. Receive request via API Gateway\n    2. Preprocess data\n    3. Call SageMaker endpoint\n    4. Postprocess result\n    5. Store in DynamoDB\n    6. Return response\n    \"\"\"\n    start_time = time.time()\n\n    # 1. Parse request\n    body = json.loads(event.get(\"body\", \"{}\"))\n    request_id = context.aws_request_id\n    user_id = body.get(\"user_id\", \"anonymous\")\n    features = body.get(\"features\", [])\n\n    if not features:\n        return respond(400, {\"error\": \"No features provided\"})\n\n    # 2. Preprocess\n    processed = preprocess(features)\n    payload = json.dumps({\"instances\": [processed]})\n\n    # 3. Call SageMaker\n    model_endpoint = os.environ.get(\"MODEL_ENDPOINT\", \"my-model-v1\")\n    sagemaker_response = sagemaker.invoke_endpoint(\n        EndpointName=model_endpoint,\n        ContentType=\"application/json\",\n        Accept=\"application/json\",\n        Body=payload,\n    )\n    raw_prediction = json.loads(sagemaker_response[\"Body\"].read())\n\n    # 4. Postprocess\n    prediction = postprocess(raw_prediction)\n\n    # 5. Store result\n    inference_time = time.time() - start_time\n    table.put_item(Item={\n        \"request_id\": request_id,\n        \"user_id\": user_id,\n        \"input_features\": str(features)[:500],\n        \"prediction\": prediction[\"class\"],\n        \"confidence\": str(prediction[\"confidence\"]),\n        \"inference_time_ms\": int(inference_time * 1000),\n        \"timestamp\": datetime.utcnow().isoformat(),\n    })\n\n    # 6. Return response\n    return respond(200, {\n        \"prediction\": prediction,\n        \"request_id\": request_id,\n        \"latency_ms\": int(inference_time * 1000),\n    })\n\ndef preprocess(features):\n    \"\"\"Scale and transform features\"\"\"\n    import numpy as np\n    arr = np.array(features, dtype=float)\n    # Simple normalization\n    mean = np.mean(arr)\n    std = np.std(arr) + 1e-8\n    normalized = ((arr - mean) / std).tolist()\n    return normalized\n\ndef postprocess(raw):\n    \"\"\"Convert model output to prediction\"\"\"\n    if isinstance(raw, dict) and \"predictions\" in raw:\n        probs = raw[\"predictions\"][0]\n    else:\n        probs = raw[0] if isinstance(raw, list) else raw\n\n    if isinstance(probs, list):\n        class_idx = probs.index(max(probs))\n        confidence = max(probs)\n        classes = [\"negative\", \"neutral\", \"positive\"]\n        predicted_class = classes[class_idx] if class_idx < len(classes) else \"unknown\"\n    else:\n        predicted_class = \"positive\" if probs > 0.5 else \"negative\"\n        confidence = probs if probs > 0.5 else 1 - probs\n\n    return {\"class\": predicted_class, \"confidence\": round(confidence, 4)}\n\ndef respond(status_code, body):\n    return {\n        \"statusCode\": status_code,\n        \"headers\": {\n            \"Content-Type\": \"application/json\",\n            \"Access-Control-Allow-Origin\": \"*\",\n        },\n        \"body\": json.dumps(body, default=str),\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-cloud-serverless-comparison",
      children: "Multi-Cloud Serverless Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Lambda"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Azure Functions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google Cloud Functions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 min (260 min premium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 min (60 min Gen2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,240 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,536 MB (14 GB premium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 GB (Gen2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max ephemeral storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent executions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000 (soft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 (soft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supported runtimes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, Node, Java, Go, Ruby, .NET, Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, Node, Java, .NET, Go, PowerShell, Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, Node, Go, Java, .NET, Ruby, PHP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cold start (avg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300-600ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-400ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provisioned concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Premium plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Gen2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Price (per 1M invocations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serverless-limitations-for-ml",
      children: "Serverless Limitations for ML"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Workarounds for common serverless ML limitations\n\n# 1. Model loading time - use EFS or S3 with caching\nimport tempfile\nimport joblib\n\ndef load_model_from_efs():\n    \"\"\"Load model from EFS mount\"\"\"\n    import joblib\n    model_path = \"/mnt/ml/models/production/model.pkl\"\n    return joblib.load(model_path)\n\ndef load_model_from_s3():\n    \"\"\"Load model from S3 with local caching\"\"\"\n    import os\n    import joblib\n    import boto3\n\n    cache_path = \"/tmp/model.pkl\"\n    bucket = os.environ[\"MODEL_BUCKET\"]\n    key = os.environ[\"MODEL_KEY\"]\n\n    # Check cache\n    if not os.path.exists(cache_path):\n        s3 = boto3.client(\"s3\")\n        s3.download_file(bucket, key, cache_path)\n\n    return joblib.load(cache_path)\n\n# 2. Large response handling - use S3 presigned URLs\ndef generate_presigned_url(bucket, key, expiration=3600):\n    s3 = boto3.client(\"s3\")\n    url = s3.generate_presigned_url(\n        \"get_object\",\n        Params={\"Bucket\": bucket, \"Key\": key},\n        ExpiresIn=expiration,\n    )\n    return url\n\n# 3. Long-running inference - use Step Functions\n# Lambda starts async inference, Step Functions polls for completion\n\n# 4. Batch processing - use S3 event to trigger per-file processing\n# Each file upload triggers a separate Lambda invocation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Client\n        A[Mobile App]\n        B[Web App]\n        C[IoT Device]\n    end\n\n    subgraph API Layer\n        D[API Gateway]\n        E[CloudFront/CDN]\n    end\n\n    subgraph Lambda Functions\n        F[Inference Function]\n        G[Preprocess Function]\n        H[Postprocess Function]\n        I[Batch Processing]\n    end\n\n    subgraph Storage\n        J[(DynamoDB)]\n        K[S3 Bucket]\n        L[EFS - Models]\n    end\n\n    subgraph ML Services\n        M[SageMaker Endpoint]\n        N[Rekognition/Comprehend]\n        O[Bedrock Foundation Models]\n    end\n\n    subgraph Events\n        P[SQS Queue]\n        Q[Kinesis Stream]\n        R[EventBridge]\n    end\n\n    A & B & C --> D\n    D --> F & G & H\n    F --> M & N & O\n    F --> J & K\n    G --> L\n    H --> K\n    I --> P\n    P --> F\n    Q --> I\n    R --> F\n\n    style F fill:#4a90d9,color:#fff\n    style D fill:#e85d75,color:#fff\n    style M fill:#50b86c,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of serverless like a food delivery service. You (the developer) provide the recipe (code). The restaurant (AWS Lambda) cooks it when an order arrives (event). You don't manage the kitchen — you just write recipes. If no orders come in, no food is cooked (scale to zero). If 10,000 orders arrive suddenly, dozens of chefs start cooking simultaneously (auto-scale). However, each chef needs time to read the recipe and gather ingredients (cold start). To reduce wait time, keep one chef always at the prep station (provisioned concurrency). API Gateway is like the counter where orders are placed and dishes handed out."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"Serverless sentiment analysis inference with AWS Lambda\"\"\"\n\nimport json\nimport os\nimport time\nimport boto3\nfrom typing import Dict, List, Any\n\n# Lazy-loaded model\n_MODEL = None\n_MODEL_META = None\n\ndynamodb = boto3.resource(\"dynamodb\")\ntable = dynamodb.Table(os.environ.get(\"TABLE_NAME\", \"sentiment-results\"))\n\ndef load_model():\n    \"\"\"Lazy load model from S3 with caching\"\"\"\n    global _MODEL, _MODEL_META\n    if _MODEL is None:\n        import joblib\n        s3 = boto3.client(\"s3\")\n        bucket = os.environ[\"MODEL_BUCKET\"]\n        key = os.environ.get(\"MODEL_KEY\", \"models/sentiment-v1.pkl\")\n        meta_key = key.replace(\".pkl\", \"-meta.json\")\n\n        download_start = time.time()\n        model_path = f\"/tmp/{os.path.basename(key)}\"\n        meta_path = f\"/tmp/{os.path.basename(meta_key)}\"\n\n        if not os.path.exists(model_path):\n            s3.download_file(bucket, key, model_path)\n            s3.download_file(bucket, meta_key, meta_path)\n\n        _MODEL = joblib.load(model_path)\n        with open(meta_path) as f:\n            _MODEL_META = json.load(f)\n\n        download_time = time.time() - download_start\n        print(f\"Model loaded in {download_time:.2f}s (version: {_MODEL_META.get('version', 'unknown')})\")\n\n    return _MODEL, _MODEL_META\n\ndef preprocess_text(text: str) -> List[float]:\n    \"\"\"Simple bag-of-words preprocessing\"\"\"\n    import numpy as np\n    from sklearn.feature_extraction.text import CountVectorizer\n\n    words = text.lower().split()\n    word_set = set(_MODEL_META.get(\"vocabulary\", []))\n    features = np.zeros(len(word_set))\n    word_list = list(word_set)\n\n    for word in words:\n        if word in word_set:\n            idx = word_list.index(word)\n            features[idx] += 1\n\n    return features.tolist()\n\ndef lambda_handler(event: Dict[str, Any], context: Any) -> Dict:\n    \"\"\"Serverless sentiment analysis handler\"\"\"\n    start_time = time.time()\n\n    # Parse request\n    body = json.loads(event.get(\"body\", \"{}\"))\n    text = body.get(\"text\", \"\")\n    request_id = context.aws_request_id\n\n    if not text.strip():\n        return respond(400, {\"error\": \"No text provided\"})\n\n    # Load model (lazy, cached across invocations in warm container)\n    model, meta = load_model()\n\n    # Preprocess\n    features = preprocess_text(text)\n\n    # Predict\n    import numpy as np\n    features_arr = np.array(features).reshape(1, -1)\n    prediction = model.predict(features_arr)[0]\n    probabilities = model.predict_proba(features_arr)[0]\n\n    sentiment_map = {0: \"negative\", 1: \"neutral\", 2: \"positive\"}\n    sentiment = sentiment_map.get(int(prediction), \"unknown\")\n    confidence = float(max(probabilities))\n\n    # Store result\n    total_time = time.time() - start_time\n    try:\n        table.put_item(Item={\n            \"request_id\": request_id,\n            \"text\": text[:1000],\n            \"sentiment\": sentiment,\n            \"confidence\": str(round(confidence, 4)),\n            \"latency_ms\": int(total_time * 1000),\n            \"model_version\": meta.get(\"version\", \"unknown\"),\n            \"timestamp\": int(time.time()),\n        })\n    except Exception as e:\n        print(f\"DynamoDB write failed: {e}\")\n\n    return respond(200, {\n        \"sentiment\": sentiment,\n        \"confidence\": round(confidence, 4),\n        \"model_version\": meta.get(\"version\"),\n        \"latency_ms\": int(total_time * 1000),\n        \"request_id\": request_id,\n    })\n\ndef respond(status_code: int, body: Dict) -> Dict:\n    return {\n        \"statusCode\": status_code,\n        \"headers\": {\n            \"Content-Type\": \"application/json\",\n            \"Access-Control-Allow-Origin\": \"*\",\n        },\n        \"body\": json.dumps(body, default=str),\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"sentiment\": \"positive\",\n  \"confidence\": 0.9723,\n  \"model_version\": \"1.2.0\",\n  \"latency_ms\": 245,\n  \"request_id\": \"a1b2c3d4-e5f6-7890-abcd-ef1234567890\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Serverless computing runs code in response to events without managing servers, with AWS Lambda, Azure Functions, and Google Cloud Functions as the three main platforms. AWS Lambda executes a handler function in a fresh execution environment per invocation, triggered by sources like API Gateway, S3 events, SQS queues, DynamoDB Streams, and CloudWatch events. Its constraints are hard limits: 15-minute execution, 10GB memory, 250MB deployment package, 1MB request/response payload, stateless /tmp storage, and no GPU. Cold starts add 200ms-5s of latency when AWS initializes a new environment, mitigated by Provisioned Concurrency, SnapStart, lazy loading, smaller packages, and Graviton. For ML inference, Lambda typically loads a model from S3 or EFS, calls a SageMaker endpoint, or runs lightweight scikit-learn models, with results stored in DynamoDB. Serverless fits sporadic, event-driven inference and preprocessing; it is the wrong choice for GPU workloads, sub-10ms latency, long-running inference, or steady high throughput, which belong on Fargate, EKS, or SageMaker."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lambda limits: 15-min timeout, 10GB memory, 250MB package, 1MB payload, no GPU."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cold starts cost 200ms-5s; mitigate with Provisioned Concurrency, SnapStart, lazy loading, Graviton."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layers share dependencies across functions and mount at /opt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQS buffers events to prevent 429 throttling at high concurrency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EFS mounts GB-scale models; /tmp (10GB) caches models across warm invocations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Fargate/EKS for GPU, persistent serving, or steady high throughput."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cold starts"
        }), ": Use Provisioned Concurrency for latency-sensitive endpoints and keep deployment packages under 3MB with dependencies in layers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lazy loading"
        }), ": Load models inside the handler with a module-level cache, not at global scope, so warm containers reuse the loaded model across invocations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model size"
        }), ": For models over 250MB, mount EFS, download from S3 into /tmp with caching, or call a SageMaker endpoint instead of bundling the model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limits"
        }), ": Respect the 15-minute timeout and 1MB payload limit; use S3 presigned URLs for large data and Step Functions for long-running workflows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layers"
        }), ": Package scikit-learn, pandas, numpy, joblib into a Lambda Layer mounted at /opt to shrink deployment packages and speed cold starts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throttling"
        }), ": Place an SQS queue between API Gateway and Lambda so burst traffic is buffered instead of dropped with 429 errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Costs"
        }), ": Right-size memory (GB-seconds pricing) and prefer Graviton (20% cheaper); avoid Lambda for steady-state high throughput where containers win."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is a Lambda cold start and how do you mitigate it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cold start occurs when Lambda creates a new execution environment — downloading code, initializing runtime, loading dependencies before handler execution. Causes 200ms-5s latency spike. Mitigations: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Provisioned Concurrency"
          }), " — keep N environments warm. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Smaller deployment"
          }), " — use layers, minimize package size under 3MB. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Lazy loading"
          }), " — load heavy dependencies inside handler, not globally. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Choose faster runtime"
          }), " — Python/Node/Go over Java/.NET. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Keep warm"
          }), " — schedule pings every 5 minutes (costs money). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) SnapStart"
          }), " — Java only, takes snapshot of initialized environment. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) ARM/Graviton"
          }), " — faster cold start than x86."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How would you deploy a large ML model (500MB+) with Lambda?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Lambda has a 250MB deployment package limit (including layers). For large models: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Amazon EFS"
          }), " — mount EFS file system to Lambda. Model stored on EFS, loaded at runtime. Best for large models (GBs). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) S3 + Caching"
          }), " — download model from S3 to /tmp on cold start, cache for subsequent invocations. /tmp is 10GB max. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) SageMaker"
          }), " — Lambda calls SageMaker endpoint for inference. Model stays on SageMaker, Lambda just passes data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Container images"
          }), " — up to 10GB container image. Use ECR-hosted Lambda with image containing model. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) AWS Marketplace"
          }), " — pre-built ML containers from AWS Marketplace."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: When should you NOT use serverless for ML inference?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Avoid serverless when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Low latency required"
          }), " — cold starts add unpredictable latency. Use always-on SageMaker or EKS for sub-10ms p99. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) GPU inference"
          }), " — Lambda doesn't support GPU. Use SageMaker or ECS with GPU. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Long-running inference"
          }), " — 15-minute timeout limit. For complex models (LLMs), use SageMaker or ECS. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Steady high throughput"
          }), " — Lambda becomes expensive at >100 req/s constant. Provisioned compute saves cost. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Large payloads"
          }), " — 1MB request/response limit. Use S3 presigned URLs for large data. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Stateful workloads"
          }), " — Lambda is stateless by design. Use ECS/EKS for sticky sessions."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain Lambda concurrency limits and how to handle scale.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["AWS Lambda has a regional concurrency limit (default 1000 per region). When exceeded, requests are throttled (429 error). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reserved concurrency"
          }), ": guarantee N concurrent executions for a function (subtracts from account limit). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Provisioned concurrency"
          }), ": keep N environments initialized and warm. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Burst concurrency"
          }), ": Lambda scales quickly but has burst limits (500-3000 per region). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Handling throttles"
          }), ": Use SQS as a buffer between API Gateway and Lambda. SQS queues the request, Lambda processes at its own pace. For extreme scale, use Kinesis or EventBridge with retry and DLQ patterns."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does Lambda pricing work and how do you estimate costs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Lambda pricing = ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "request count"
          }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "compute duration"
          }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "data transfer"
          }), ". Requests: $0.20 per 1M requests. Duration: $0.0000166667 per GB-second (for x86). Free tier: 1M requests/month + 400,000 GB-seconds. Example: a 1GB Lambda running 200ms for 1M requests/month costs ~$3.50. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost optimization"
          }), ": Right-size memory (more memory = faster execution = less duration cost), use Graviton (20% cheaper), minimize cold starts (provisioned concurrency costs extra), use reserved concurrency to limit runaway scaling, clean up /tmp between invocations to avoid storage costs."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: Design a serverless ML inference pipeline for a mobile app.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) API Gateway"
          }), " — HTTPS endpoint with throttling (burst=100, rate=50). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Lambda inference"
          }), " — loads model from EFS (to avoid cold start model loading). Uses Python runtime. Provisioned concurrency of 10 for consistent latency. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) DynamoDB"
          }), " — stores inference results and request metadata. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) S3"
          }), " — stores uploaded images/videos for vision models. Generates presigned URLs for client upload. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Step Functions"
          }), " — orchestrates multi-step pipelines (preprocess, inference, postprocess). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) CloudFront"
          }), " — CDN for static assets and API caching. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) CloudWatch + X-Ray"
          }), " — monitoring and tracing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) Cost"
          }), ": ~$10/month for 100K requests at 500ms each."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the difference between Lambda and Fargate (serverless containers)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lambda"
          }), ": Function-as-a-Service. Runs for max 15 min. Max 10GB memory. No GPU. Stateless. Event-driven. Pay per execution + duration. Cold starts. Best for short, event-driven ML tasks (preprocessing, lightweight inference, data transformation). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fargate"
          }), ": Serverless container compute. Runs indefinitely. Up to 120GB memory. GPU support (via ECS). Stateful. Pay per running time (per second). No cold starts. Best for long-running ML workloads (model training, real-time inference servers, batch processing). Choose Lambda for sporadic, event-driven inference. Choose Fargate for persistent model serving or GPU workloads."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How would you process 10,000 CSV files uploaded to S3 with Lambda?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) S3 event notification"
          }), " — each file upload triggers a Lambda. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) SQS queue"
          }), " — buffer between S3 and Lambda to handle throttling. Configure S3 to send events to SQS, Lambda polls SQS. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Batch window"
          }), " — batch up to 10 files per Lambda invocation (reduce number of invocations). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Parallel processing"
          }), " — Lambda scales up to 1000 concurrent executions, limited only by account concurrency. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Chunking"
          }), " — for large CSVs (1GB+), use Lambda to split into chunks, process each chunk separately. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Step Functions"
          }), " — orchestrate: validate, process, aggregate, store results. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Error handling"
          }), " — DLQ for failed files with retry logic. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) Cost"
          }), ": processing 10K files at ~5s each ~= $1.50."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What are Lambda Layers and how do you use them for ML dependencies?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Lambda Layers are ZIP archives containing libraries, custom runtimes, or data files. They mount at /opt in the Lambda execution environment. Multiple layers can be attached to a function (up to 5 layers, 250MB total). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "For ML"
          }), ": package scikit-learn, pandas, numpy, joblib, requests into a layer. Then all functions using that layer can import these libraries without bundling in the deployment package. Layers are versioned and shared across accounts. Benefits: smaller deployment packages (faster cold start), centralized dependency management, and separate code from dependencies for easier updates."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: Compare AWS Lambda, Azure Functions, and Google Cloud Functions for ML inference.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS Lambda"
          }), ": Most mature. Best ecosystem (SageMaker, Rekognition, Bedrock). Largest community. Supports EFS for large models. Provisioned concurrency for predictable latency. 15-min timeout, 10GB memory. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Azure Functions"
          }), ": Strong enterprise integration (Active Directory, Azure DevOps). Premium plan for no cold starts and VNET integration. 10-min timeout (260-min premium). 14GB memory premium. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GCP Cloud Functions"
          }), ": Gen2 supports 32GB memory and 60-min timeout. Best integration with Vertex AI and BigQuery. Lower maximum concurrent executions. All three support Python, Node, Go. For ML inference, Lambda is the most capable due to EFS and provisioned concurrency. GCP Gen2 is catching up with higher memory limits."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is Lambda's maximum execution timeout?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 5 minutes\nb) 15 minutes\nc) 30 minutes\nd) 1 hour"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 15 minutes"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Lambda functions can run up to 15 minutes (900 seconds). For longer workloads use ECS or Step Functions."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which service buffers requests to Lambda to prevent throttling?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) API Gateway\nb) SQS\nc) SNS\nd) EventBridge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) SQS"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SQS queues messages and Lambda polls at its own pace, acting as a buffer against throttling."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the maximum Lambda deployment package size?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 50 MB\nb) 250 MB\nc) 500 MB\nd) 1 GB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 250 MB"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Lambda deployment package (including layers) max is 250 MB. Container images can be up to 10 GB."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which feature keeps Lambda environments initialized to avoid cold starts?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Reserved concurrency\nb) Provisioned concurrency\nc) SnapStart\nd) Both b and c"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) Both b and c"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Provisioned concurrency keeps N environments warm. SnapStart (Java) takes a snapshot of initialized environment. Reserved concurrency only guarantees capacity, not warm environments."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What storage option is best for loading a 2GB ML model in Lambda?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) /tmp directory\nb) EFS\nc) S3\nd) DynamoDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dcs11-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) EFS"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "EFS mounts to Lambda and can hold GBs of model data. /tmp is 10GB but ephemeral. S3 requires network calls to load. DynamoDB is for structured data."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a Lambda function that responds to API Gateway with \"Hello from Lambda\". Test with curl."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Add a Lambda layer with the requests library. Update your function to use it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a Lambda function that resizes images uploaded to S3. Generate thumbnail and store in a different bucket."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a serverless ML inference endpoint: Lambda loads a scikit-learn model from S3, accepts JSON input via API Gateway, returns predictions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a serverless ML pipeline: S3 upload triggers Lambda preprocessing, sends to SageMaker for inference, stores results in DynamoDB, and sends notification via SNS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Putting heavy model loading in global scope (outside handler) — increases cold start time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not setting memory appropriately — too low causes timeouts, too high wastes money"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting Lambda statelessness — /tmp is not shared between invocations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not handling Lambda throttling — 429 errors crash clients without retry logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using Lambda for GPU inference — Lambda doesn't support GPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lambda: max 15 min, 10GB memory, 250MB package, 1MB payload, stateless"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cold starts: 200ms-5s; mitigate with Provisioned Concurrency, SnapStart, warm pings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layers: share dependencies across functions, mount at /opt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EFS: mount file system for large models (2GB+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQS buffer: prevent throttling at high concurrency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API Gateway: REST/HTTP API, throttling, auth (Cognito/IAM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless pros: no infra management, auto-scale, pay-per-use"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless cons: cold starts, 15-min limit, no GPU, 1MB payload limit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-cloud: Lambda most mature, GCP Gen2 has highest memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For steady-state high throughput: use containers (Fargate/EKS) instead"
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
            children: "Explain the core idea of Serverless & AWS Lambda — Event-Driven ML Inference in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Serverless & AWS Lambda — Event-Driven ML Inference."
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
            children: "Describe a production bug caused by misunderstanding Serverless & AWS Lambda — Event-Driven ML Inference. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Serverless & AWS Lambda — Event-Driven ML Inference from 10 users to 10 million?"
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
            children: "Compare Serverless & AWS Lambda — Event-Driven ML Inference with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Serverless & AWS Lambda — Event-Driven ML Inference."
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
            children: "How does Serverless & AWS Lambda — Event-Driven ML Inference behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Serverless & AWS Lambda — Event-Driven ML Inference run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Serverless & AWS Lambda — Event-Driven ML Inference that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Serverless & AWS Lambda — Event-Driven ML Inference explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Serverless & AWS Lambda — Event-Driven ML Inference\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Serverless & AWS Lambda — Event-Driven ML Inference to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Serverless & AWS Lambda — Event-Driven ML Inference (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Serverless & AWS Lambda — Event-Driven ML Inference and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Serverless & AWS Lambda — Event-Driven ML Inference-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Serverless & AWS Lambda — Event-Driven ML Inference interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Serverless & AWS Lambda — Event-Driven ML Inference in production today?"
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
        }), " Serverless & AWS Lambda — Event-Driven ML Inference builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Serverless & AWS Lambda — Event-Driven ML Inference before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Serverless & AWS Lambda — Event-Driven ML Inference is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Serverless & AWS Lambda — Event-Driven ML Inference in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Serverless & AWS Lambda — Event-Driven ML Inference chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Serverless & AWS Lambda — Event-Driven ML Inference is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Serverless & AWS Lambda — Event-Driven ML Inference is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Serverless & AWS Lambda — Event-Driven ML Inference is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Serverless & AWS Lambda — Event-Driven ML Inference issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Serverless & AWS Lambda — Event-Driven ML Inference in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Serverless & AWS Lambda — Event-Driven ML Inference that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Serverless & AWS Lambda — Event-Driven ML Inference is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Serverless & AWS Lambda — Event-Driven ML Inference in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Serverless & AWS Lambda — Event-Driven ML Inference and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Serverless & AWS Lambda — Event-Driven ML Inference on an empty input?"
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
            children: "Complete Medium exercises, explain Serverless & AWS Lambda — Event-Driven ML Inference to someone else"
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
        children: "Always write a one-line example of Serverless & AWS Lambda — Event-Driven ML Inference from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Serverless & AWS Lambda — Event-Driven ML Inference when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Serverless & AWS Lambda — Event-Driven ML Inference twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Serverless & AWS Lambda — Event-Driven ML Inference snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Serverless & AWS Lambda — Event-Driven ML Inference listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Serverless & AWS Lambda — Event-Driven ML Inference to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Serverless & AWS Lambda — Event-Driven ML Inference by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Serverless & AWS Lambda — Event-Driven ML Inference to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Serverless & AWS Lambda — Event-Driven ML Inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Serverless & AWS Lambda — Event-Driven ML Inference (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Serverless & AWS Lambda — Event-Driven ML Inference problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Serverless & AWS Lambda — Event-Driven ML Inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Serverless & AWS Lambda — Event-Driven ML Inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Serverless & AWS Lambda — Event-Driven ML Inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Serverless & AWS Lambda — Event-Driven ML Inference fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Serverless & AWS Lambda — Event-Driven ML Inference is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Serverless & AWS Lambda — Event-Driven ML Inference is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Serverless & AWS Lambda — Event-Driven ML Inference, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Serverless & AWS Lambda — Event-Driven ML Inference asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless & AWS Lambda — Event-Driven ML Inference is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Serverless & AWS Lambda — Event-Driven ML Inference."
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
        children: "Serverless & AWS Lambda — Event-Driven ML Inference emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Serverless & AWS Lambda — Event-Driven ML Inference today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Serverless & AWS Lambda — Event-Driven ML Inference — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Serverless & AWS Lambda — Event-Driven ML Inference changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Serverless & AWS Lambda — Event-Driven ML Inference."
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
        children: "Serverless & AWS Lambda — Event-Driven ML Inference appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Serverless & AWS Lambda — Event-Driven ML Inference helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Serverless & AWS Lambda — Event-Driven ML Inference concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Serverless & AWS Lambda — Event-Driven ML Inference skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Serverless & AWS Lambda — Event-Driven ML Inference to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serverless & AWS Lambda — Event-Driven ML Inference is like a recipe"
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
        }), " — this chapter contributes the Serverless & AWS Lambda — Event-Driven ML Inference skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-11serverlesslambda-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is Lambda's maximum execution timeout?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) 15 minutes"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-11serverlesslambda-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which service buffers requests to Lambda to prevent throttling?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) SQS"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-11serverlesslambda-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the maximum Lambda deployment package size?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) 250 MB"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-11serverlesslambda-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which feature keeps Lambda environments initialized to avoid cold starts?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "d) Both b and c"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "06dockerkubernetescloud-11serverlesslambda-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What storage option is best for loading a 2GB ML model in Lambda?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) EFS"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Serverless & AWS Lambda — Event-Driven ML Inference (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Serverless & AWS Lambda — Event-Driven ML Inference (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Serverless & AWS Lambda — Event-Driven ML Inference-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Serverless & AWS Lambda — Event-Driven ML Inference in production at scale"
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
        children: "Testing: pytest for unit tests of Serverless & AWS Lambda — Event-Driven ML Inference code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Serverless & AWS Lambda — Event-Driven ML Inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Serverless & AWS Lambda — Event-Driven ML Inference code."]
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
        }), " or your IDE's debugger to step through the Serverless & AWS Lambda — Event-Driven ML Inference example code."]
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
        children: "Explain Serverless & AWS Lambda — Event-Driven ML Inference in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Serverless & AWS Lambda — Event-Driven ML Inference."
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
        children: "Tell me about a time you debugged a Serverless & AWS Lambda — Event-Driven ML Inference problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Serverless & AWS Lambda — Event-Driven ML Inference is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Serverless & AWS Lambda — Event-Driven ML Inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Serverless & AWS Lambda — Event-Driven ML Inference logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Serverless & AWS Lambda — Event-Driven ML Inference without notes"
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
        }), ": a small team uses Serverless & AWS Lambda — Event-Driven ML Inference daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Serverless & AWS Lambda — Event-Driven ML Inference patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Serverless & AWS Lambda — Event-Driven ML Inference principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Serverless & AWS Lambda — Event-Driven ML Inference shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Serverless & AWS Lambda — Event-Driven ML Inference to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/12-azure-ai-services",
        children: "Azure AI Services — Cognitive Services, Azure ML, OpenAI Service"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless & AWS Lambda — Event-Driven ML Inference, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Serverless & AWS Lambda — Event-Driven ML Inference depends on input size and distribution — always benchmark for your own data."
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