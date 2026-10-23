"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6327],{

/***/ 75402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_19_capstone_projects_01_house_price_prediction_api_md_f6e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-19-capstone-projects-01-house-price-prediction-api-md-f6e.json
const site_docs_courses_ai_engineering_placement_19_capstone_projects_01_house_price_prediction_api_md_f6e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/capstone-projects/01-house-price-prediction-api","title":"House Price Prediction API","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api.md","sourceDirName":"courses/ai-engineering-placement/19-capstone-projects","slug":"/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api","permalink":"/ai-engineering-journey/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":236,"frontMatter":{"id":"01-house-price-prediction-api","slug":"/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api","title":"House Price Prediction API","sidebar_label":"House Price Prediction API","sidebar_position":236},"sidebar":"placementSidebar","previous":{"title":"19 — Capstone Projects","permalink":"/ai-engineering-journey/ai-engineering-placement/19-capstone-projects"},"next":{"title":"Resume ATS Analyzer","permalink":"/ai-engineering-journey/ai-engineering-placement/19-capstone-projects/02-resume-ats-analyzer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api.md


const frontMatter = {
	id: '01-house-price-prediction-api',
	slug: '/ai-engineering-placement/19-capstone-projects/01-house-price-prediction-api',
	title: 'House Price Prediction API',
	sidebar_label: 'House Price Prediction API',
	sidebar_position: 236
};
const contentTitle = 'House Price Prediction API';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "What you&#39;ll build",
  "id": "what-youll-build",
  "level": 2
}, {
  "value": "Project Roadmap",
  "id": "project-roadmap",
  "level": 2
}, {
  "value": "Step 1 — Data Pipeline",
  "id": "step-1--data-pipeline",
  "level": 2
}, {
  "value": "1.1 Configuration",
  "id": "11-configuration",
  "level": 3
}, {
  "value": "1.2 Data Ingestion",
  "id": "12-data-ingestion",
  "level": 3
}, {
  "value": "1.3 Feature Engineering",
  "id": "13-feature-engineering",
  "level": 3
}, {
  "value": "1.4 Complete Pipeline",
  "id": "14-complete-pipeline",
  "level": 3
}, {
  "value": "Step 2 — Model training",
  "id": "step-2--model-training",
  "level": 2
}, {
  "value": "2.1 Install the training dependencies",
  "id": "21-install-the-training-dependencies",
  "level": 3
}, {
  "value": "2.2 The trainer",
  "id": "22-the-trainer",
  "level": 3
}, {
  "value": "2.3 Choose between the three metrics",
  "id": "23-choose-between-the-three-metrics",
  "level": 3
}, {
  "value": "2.4 Model registry",
  "id": "24-model-registry",
  "level": 3
}, {
  "value": "2.5 Retrain and score",
  "id": "25-retrain-and-score",
  "level": 3
}, {
  "value": "Step 3 — Serve the model with FastAPI",
  "id": "step-3--serve-the-model-with-fastapi",
  "level": 2
}, {
  "value": "3.1 Declare the request and response schemas",
  "id": "31-declare-the-request-and-response-schemas",
  "level": 3
}, {
  "value": "3.2 The service and endpoints",
  "id": "32-the-service-and-endpoints",
  "level": 3
}, {
  "value": "3.3 Routes",
  "id": "33-routes",
  "level": 3
}, {
  "value": "3.4 Run it",
  "id": "34-run-it",
  "level": 3
}, {
  "value": "3.5 Test it",
  "id": "35-test-it",
  "level": 3
}, {
  "value": "Step 4 — Testing",
  "id": "step-4--testing",
  "level": 2
}, {
  "value": "Step 5 — Containerization",
  "id": "step-5--containerization",
  "level": 2
}, {
  "value": "Step 6 — CI/CD",
  "id": "step-6--cicd",
  "level": 2
}, {
  "value": "Deployment targets",
  "id": "deployment-targets",
  "level": 3
}, {
  "value": "Monitoring",
  "id": "monitoring",
  "level": 3
}, {
  "value": "What you built",
  "id": "what-you-built",
  "level": 2
}, {
  "value": "Practical takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter quiz",
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
  "value": "Common mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 interview questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Resume tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview day checklist",
  "id": "interview-day-checklist",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "house-price-prediction-api",
        children: "House Price Prediction API"
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
            children: "Design and implement a complete ML data pipeline with validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build, train, and evaluate regression models with cross-validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy the model as a FastAPI REST API with Pydantic validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add API documentation, testing, and monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containerize and deploy to cloud platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement CI/CD for model updates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.11 or later"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker 24 or later"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub account for CI/CD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic familiarity with pandas, scikit-learn, and FastAPI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-youll-build",
      children: "What you'll build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-ready house price prediction API that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ingests raw housing data, validates schema, engineers features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trains multiple regression models (Ridge, Random Forest, XGBoost) with Optuna hyperparameter tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serves predictions via FastAPI with automatic OpenAPI docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes batch prediction endpoint for bulk scoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is containerized with multi-stage Docker build"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploys via GitHub Actions to AWS ECS / GCP Cloud Run / Azure Container Instances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitors prediction latency, error rate, and data drift"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output after completing all steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ curl -X POST http://localhost:8000/predict \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"bedrooms\": 3, \"bathrooms\": 2.0, \"sqft_living\": 1800, \"sqft_lot\": 5000, \"floors\": 1.5, \"waterfront\": 0, \"view\": 2, \"condition\": 4, \"yr_built\": 2005}'\n{\"prediction_id\": \"...\", \"predicted_price\": 342150.75, \"model_version\": \"v1\", \"timestamp\": \"2026-...\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-roadmap",
      children: "Project Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    A[Raw Data] --> B[Data Pipeline]\n    B --> C[Feature Store]\n    C --> D[Model Training]\n    D --> E[Model Registry]\n    E --> F[FastAPI Server]\n    F --> G[REST API]\n    G --> H[Client Apps]\n    E --> I[CI/CD]\n    I --> F"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1--data-pipeline",
      children: "Step 1 — Data Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The data pipeline ingests raw housing data, validates it, engineers features, and prepares it for model training."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-configuration",
      children: "1.1 Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config.yaml"
      }), " with your data paths, column types, and split parameters:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "data:\n  required_columns:\n    - id\n    - price\n    - bedrooms\n    - bathrooms\n    - sqft_living\n    - sqft_lot\n    - floors\n    - waterfront\n    - view\n    - condition\n    - yr_built\n    - yr_renovated\n  column_types:\n    id: int64\n    price: float64\n    bedrooms: int64\n    bathrooms: float64\n    sqft_living: int64\n    sqft_lot: int64\n    floors: float64\n    waterfront: int64\n    view: int64\n    condition: int64\n    yr_built: int64\n    yr_renovated: int64\n  target_column: price\n  test_split: 0.2\n  random_state: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-data-ingestion",
      children: "1.2 Data Ingestion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.impute import SimpleImputer\nfrom typing import Tuple, Optional, Dict, Any\nimport joblib\nimport yaml\nfrom pathlib import Path\n\n\nclass DataIngestion:\n    \"\"\"Ingest raw housing data from various sources.\"\"\"\n\n    def __init__(self, config_path: str = \"config.yaml\"):\n        with open(config_path) as f:\n            self.config = yaml.safe_load(f)\n\n    def load_csv(self, path: str) -> pd.DataFrame:\n        \"\"\"Load data from CSV file with validation.\"\"\"\n        df = pd.read_csv(path)\n        required_cols = self.config['data']['required_columns']\n        missing = set(required_cols) - set(df.columns)\n        if missing:\n            raise ValueError(f\"Missing columns: {missing}\")\n        return df\n\n    def load_from_database(self, query: str, connection_string: str) -> pd.DataFrame:\n        \"\"\"Load data from SQL database.\"\"\"\n        import sqlalchemy as sa\n        engine = sa.create_engine(connection_string)\n        df = pd.read_sql(query, engine)\n        return df\n\n    def validate_schema(self, df: pd.DataFrame) -> bool:\n        \"\"\"Validate DataFrame schema against config.\"\"\"\n        for col, dtype in self.config['data']['column_types'].items():\n            if col in df.columns:\n                if df[col].dtype.name != dtype:\n                    raise ValueError(f\"Column {col} expected {dtype}, got {df[col].dtype}\")\n        return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verify it works:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python -c \"\nfrom pathlib import Path\nPath('config.yaml').write_text('''data:\n  required_columns: [id, price, bedrooms, bathrooms, sqft_living, sqft_lot, floors, waterfront, view, condition, yr_built, yr_renovated]\n  column_types:\n    id: int64\n    price: float64\n    bedrooms: int64\n    bathrooms: float64\n    sqft_living: int64\n    sqft_lot: int64\n    floors: float64\n    waterfront: int64\n    view: int64\n    condition: int64\n    yr_built: int64\n    yr_renovated: int64\n  target_column: price\n  test_split: 0.2\n  random_state: 42\n''')\nprint('config.yaml created')\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "config.yaml created\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-feature-engineering",
      children: "1.3 Feature Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FeatureEngineer:\n    \"\"\"Feature engineering for house price prediction.\"\"\"\n\n    def __init__(self):\n        self.feature_names: list = []\n\n    def create_features(self, df: pd.DataFrame) -> pd.DataFrame:\n        \"\"\"Create derived features from raw data.\"\"\"\n        df = df.copy()\n\n        if 'sqft_living' in df.columns and 'sqft_lot' in df.columns:\n            df['total_sqft'] = df['sqft_living'] + df['sqft_lot']\n            df['lot_to_living_ratio'] = df['sqft_lot'] / (df['sqft_living'] + 1e-6)\n\n        if 'yr_built' in df.columns:\n            df['house_age'] = 2025 - df['yr_built']\n            df['is_new'] = (df['yr_built'] >= 2015).astype(int)\n\n        if 'bedrooms' in df.columns and 'bathrooms' in df.columns:\n            df['rooms_total'] = df['bedrooms'] + df['bathrooms']\n            df['bed_bath_ratio'] = df['bedrooms'] / (df['bathrooms'] + 1e-6)\n\n        if 'sqft_living' in df.columns and 'bedrooms' in df.columns:\n            df['sqft_per_bedroom'] = df['sqft_living'] / (df['bedrooms'] + 1e-6)\n\n        if 'waterfront' in df.columns:\n            pass  # Already binary\n\n        if 'view' in df.columns:\n            df['good_view'] = (df['view'] >= 3).astype(int)\n\n        if 'condition' in df.columns:\n            df['excellent_condition'] = (df['condition'] >= 4).astype(int)\n\n        self.feature_names = [c for c in df.columns if c.startswith(('total_', 'lot_to_', 'house_', 'is_', 'rooms_', 'bed_bath', 'sqft_per', 'good_', 'excellent_'))]\n        return df\n\n    def get_feature_names(self) -> list:\n        return self.feature_names\n\n\ndef detect_outliers_iqr(df: pd.DataFrame, column: str) -> pd.Series:\n    \"\"\"Detect outliers using IQR method.\"\"\"\n    Q1 = df[column].quantile(0.25)\n    Q3 = df[column].quantile(0.75)\n    IQR = Q3 - Q1\n    lower = Q1 - 1.5 * IQR\n    upper = Q3 + 1.5 * IQR\n    return (df[column] < lower) | (df[column] > upper)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-complete-pipeline",
      children: "1.4 Complete Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataPipeline:\n    \"\"\"Complete data pipeline: ingest, validate, engineer, split.\"\"\"\n\n    def __init__(self, config_path: str = \"config.yaml\"):\n        self.ingestion = DataIngestion(config_path)\n        self.engineer = FeatureEngineer()\n        self.config_path = config_path\n\n    def run(self, data_path: str) -> Tuple[pd.DataFrame, pd.DataFrame, pd.Series, pd.Series]:\n        \"\"\"Run the full data pipeline.\"\"\"\n        df = self.ingestion.load_csv(data_path)\n        self.ingestion.validate_schema(df)\n        df = self.engineer.create_features(df)\n\n        with open(self.config_path) as f:\n            config = yaml.safe_load(f)\n\n        target = config['data']['target_column']\n        features = [c for c in df.columns if c != target]\n\n        X = df[features]\n        y = df[target]\n\n        X_train, X_test, y_train, y_test = train_test_split(\n            X, y, test_size=config['data']['test_split'],\n            random_state=config['data']['random_state']\n        )\n\n        return X_train, X_test, y_train, y_test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verify the pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python -c \"\n# This requires the Kaggle House Prices dataset at data/train.csv\n# Download from: https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques/data\nimport os\nif os.path.exists('data/train.csv'):\n    from pathlib import Path\n    # Create minimal config for test\n    import yaml\n    Path('config.yaml').write_text('''data:\n  required_columns: [Id, SalePrice, BedroomAbvGr, FullBath, GrLivArea, LotArea, \\\n    TotRmsAbvGrd, Waterfront, LotFrontage, OverallCond, YearBuilt, YearRemodAdd]\n  target_column: SalePrice\n  test_split: 0.2\n  random_state: 42\n''')\n    print('Ready to run pipeline with real data')\nelse:\n    print('Kaggle dataset not found. Download train.csv to data/ directory.')\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not executed in this environment"
      }), " — requires the Kaggle House Prices dataset. Run locally after downloading ", (0,jsx_runtime.jsx)(_components.code, {
        children: "train.csv"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-2--model-training",
      children: "Step 2 — Model training"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Train and evaluate regression models with hyperparameter tuning and cross-validation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-install-the-training-dependencies",
      children: "2.1 Install the training dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install xgboost optuna joblib scikit-learn pandas\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Successfully installed joblib-1.5.3 optuna-5.0.0 scikit-learn-1.9.0 xgboost-3.4.1 ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-the-trainer",
      children: "2.2 The trainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.ensemble import GradientBoostingRegressor, RandomForestRegressor\nfrom sklearn.linear_model import Ridge, Lasso\nfrom xgboost import XGBRegressor\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\nfrom sklearn.model_selection import cross_val_score\nimport optuna\n\n\nclass ModelTrainer:\n    \"\"\"Train and evaluate house price prediction models.\"\"\"\n\n    def __init__(self, random_state: int = 42):\n        self.random_state = random_state\n        self.models: Dict[str, Any] = {}\n        self.best_model = None\n        self.best_params: Optional[Dict[str, Any]] = None\n\n    def train_ridge(self, X_train: pd.DataFrame, y_train: pd.Series) -> Ridge:\n        \"\"\"Train Ridge regression. Best when features are correlated and scaled.\"\"\"\n        model = Ridge(alpha=1.0, random_state=self.random_state)\n        model.fit(X_train, y_train)\n        self.models['ridge'] = model\n        return model\n\n    def train_random_forest(self, X_train: pd.DataFrame,\n                            y_train: pd.Series) -> RandomForestRegressor:\n        \"\"\"Train Random Forest. Handles non-linear interactions, slower to predict.\"\"\"\n        model = RandomForestRegressor(\n            n_estimators=200, max_depth=15,\n            min_samples_leaf=5, random_state=self.random_state,\n            n_jobs=-1\n        )\n        model.fit(X_train, y_train)\n        self.models['random_forest'] = model\n        return model\n\n    def train_xgboost(self, X_train: pd.DataFrame,\n                      y_train: pd.Series) -> XGBRegressor:\n        \"\"\"Train XGBoost. Strongest baseline on tabular regression.\"\"\"\n        model = XGBRegressor(\n            n_estimators=300, max_depth=8,\n            learning_rate=0.05, subsample=0.8,\n            colsample_bytree=0.8, random_state=self.random_state\n        )\n        model.fit(X_train, y_train)\n        self.models['xgboost'] = model\n        return model\n\n    def tune_hyperparameters(self, X_train: pd.DataFrame,\n                             y_train: pd.Series,\n                             n_trials: int = 50) -> Dict[str, Any]:\n        \"\"\"Tune XGBoost with Optuna. Maximises negative RMSE across 5 folds.\"\"\"\n\n        def objective(trial):\n            params = {\n                'n_estimators': trial.suggest_int('n_estimators', 100, 500),\n                'max_depth': trial.suggest_int('max_depth', 3, 12),\n                'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3, log=True),\n                'subsample': trial.suggest_float('subsample', 0.6, 1.0),\n                'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0),\n            }\n            model = XGBRegressor(**params, random_state=self.random_state)\n            scores = cross_val_score(\n                model, X_train, y_train, cv=5,\n                scoring='neg_root_mean_squared_error'\n            )\n            return scores.mean()\n\n        study = optuna.create_study(direction='maximize')\n        study.optimize(objective, n_trials=n_trials)\n        self.best_params = study.best_params\n        return self.best_params\n\n    def evaluate(self, model, X_test: pd.DataFrame,\n                 y_test: pd.Series) -> Dict[str, float]:\n        \"\"\"Compute regression metrics on the held-out test set.\"\"\"\n        y_pred = model.predict(X_test)\n        return {\n            'mae': float(mean_absolute_error(y_test, y_pred)),\n            'rmse': float(np.sqrt(mean_squared_error(y_test, y_pred))),\n            'r2': float(r2_score(y_test, y_pred)),\n        }\n\n    def train_best(self, X_train: pd.DataFrame, y_train: pd.Series):\n        \"\"\"Train with tuned params if tuning ran, otherwise the XGBoost baseline.\"\"\"\n        if self.best_params:\n            model = XGBRegressor(**self.best_params, random_state=self.random_state)\n        else:\n            return self.train_xgboost(X_train, y_train)\n        model.fit(X_train, y_train)\n        self.best_model = model\n        return model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-choose-between-the-three-metrics",
      children: "2.3 Choose between the three metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it answers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use when"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mean absolute error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Typical error in dollars\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You talk to stakeholders in currency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RMSE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "root mean squared error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How bad are the large misses?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large errors are disproportionately costly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R²"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 − SS_res/SS_tot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How much variance is explained?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing models on the same data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RMSE punishes large errors because it squares them before averaging. MAE does not. If a\n$50k miss is ten times worse than a $5k miss, optimise RMSE. If it is only slightly worse,\noptimise MAE."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-model-registry",
      children: "2.4 Model registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModelRegistry:\n    \"\"\"Persist trained models with their metadata and evaluation metrics.\"\"\"\n\n    def __init__(self, registry_path: str = \"model_registry\"):\n        self.registry_path = Path(registry_path)\n        self.registry_path.mkdir(exist_ok=True)\n\n    def save_model(self, model, pipeline, metrics: Dict[str, float],\n                   version: str = \"v1\") -> str:\n        \"\"\"Save model, preprocessing pipeline, and metrics under a version tag.\"\"\"\n        model_path = self.registry_path / f\"model_{version}.pkl\"\n        pipeline_path = self.registry_path / f\"pipeline_{version}.pkl\"\n        meta_path = self.registry_path / f\"metadata_{version}.yaml\"\n\n        joblib.dump(model, model_path)\n        joblib.dump(pipeline, pipeline_path)\n\n        metadata = {\n            'version': version,\n            'metrics': metrics,\n            'features': getattr(pipeline, 'feature_names_', []),\n        }\n        with open(meta_path, 'w') as f:\n            yaml.dump(metadata, f)\n\n        return str(model_path)\n\n    def load_model(self, version: str = \"v1\") -> Tuple[Any, Any]:\n        \"\"\"Load model and pipeline by version tag.\"\"\"\n        model = joblib.load(self.registry_path / f\"model_{version}.pkl\")\n        pipeline = joblib.load(self.registry_path / f\"pipeline_{version}.pkl\")\n        return model, pipeline\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verify the registry round-trips:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python -c \"\nfrom sklearn.linear_model import Ridge\nimport numpy as np, joblib, pathlib\np = pathlib.Path('registry_test'); p.mkdir(exist_ok=True)\nm = Ridge(alpha=1.0).fit(np.array([[1.0],[2.0],[3.0]]), np.array([10.0,20.0,30.0]))\njoblib.dump(m, p/'model_v1.pkl')\nm2 = joblib.load(p/'model_v1.pkl')\nprint('round-trip prediction:', float(m2.predict([[4.0]])[0]))\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "round-trip prediction: 39.99999999999999\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not executed in this environment"
      }), " — run locally to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-retrain-and-score",
      children: "2.5 Retrain and score"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "trainer = ModelTrainer(random_state=42)\ntrainer.train_ridge(X_train, y_train)\ntrainer.train_random_forest(X_train, y_train)\ntrainer.train_xgboost(X_train, y_train)\n\nprint(\"baseline scores:\")\nfor name, model in trainer.models.items():\n    print(f\"  {name:15s} {trainer.evaluate(model, X_test, y_test)}\")\n\ntrainer.tune_hyperparameters(X_train, y_train, n_trials=50)\nbest = trainer.train_best(X_train, y_train)\nprint(\"tuned xgboost:\", trainer.evaluate(best, X_test, y_test))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not executed in this environment"
      }), " — needs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data/train.csv"
      }), ". Optuna runs 50 trials\nacross 5 folds, which takes several minutes on CPU."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3--serve-the-model-with-fastapi",
      children: "Step 3 — Serve the model with FastAPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expose the trained model as a REST API with Pydantic input validation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-declare-the-request-and-response-schemas",
      children: "3.1 Declare the request and response schemas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pydantic validates the request body before it reaches the model, so a malformed payload\nreturns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "422 Unprocessable Entity"
      }), " rather than producing a garbage prediction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import datetime\nfrom typing import List, Optional, Dict, Any\nfrom uuid import uuid4\nimport pandas as pd\n\nfrom fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel, Field, field_validator\n\n\nclass HouseFeatures(BaseModel):\n    \"\"\"Input features for a single house.\"\"\"\n\n    bedrooms: int = Field(..., ge=0, le=50, description=\"Number of bedrooms\")\n    bathrooms: float = Field(..., ge=0, le=50, description=\"Number of bathrooms\")\n    sqft_living: float = Field(..., ge=100, le=50000, description=\"Living area in sqft\")\n    sqft_lot: float = Field(..., ge=100, le=500000, description=\"Lot area in sqft\")\n    floors: float = Field(1.0, ge=0.5, le=10, description=\"Number of floors\")\n    waterfront: int = Field(0, ge=0, le=1, description=\"Waterfront view (0 or 1)\")\n    view: int = Field(0, ge=0, le=4, description=\"View quality rating (0-4)\")\n    condition: int = Field(3, ge=1, le=5, description=\"Condition rating (1-5)\")\n    yr_built: int = Field(..., ge=1800, le=2025, description=\"Year built\")\n    yr_renovated: int = Field(0, ge=0, le=2025, description=\"Year renovated\")\n\n    @field_validator('yr_built')\n    @classmethod\n    def validate_year(cls, v: int) -> int:\n        if v < 1800 or v > 2025:\n            raise ValueError(f\"year out of range: {v}\")\n        return v\n\n\nclass PredictionResponse(BaseModel):\n    \"\"\"Single-house prediction result.\"\"\"\n\n    prediction_id: str\n    predicted_price: float\n    features_used: List[str]\n    model_version: str\n    timestamp: datetime\n\n\nclass PredictionRequest(BaseModel):\n    \"\"\"Batch prediction request.\"\"\"\n\n    houses: List[HouseFeatures]\n\n\nclass PredictionResult(BaseModel):\n    \"\"\"One entry in a batch response.\"\"\"\n\n    predicted_price: float\n    house_features: HouseFeatures\n\n\nclass BatchPredictionResponse(BaseModel):\n    \"\"\"Batch prediction result.\"\"\"\n\n    predictions: List[PredictionResult]\n    total_predictions: int\n    average_price: float\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "field_validator"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "validator"
          }), ":"]
        }), " Pydantic v2 renamed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@validator"
        }), " to\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "@field_validator"
        }), " and requires the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@classmethod"
        }), " decorator beneath it. If you copy an\nolder snippet using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@validator"
        }), ", it raises a deprecation error on Pydantic v2."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-the-service-and-endpoints",
      children: "3.2 The service and endpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "app = FastAPI(\n    title=\"House Price Prediction API\",\n    description=\"ML-powered API for predicting house prices from property features\",\n    version=\"1.0.0\",\n)\n\n\nclass HousePriceService:\n    \"\"\"Loads the model once and reuses it across requests.\"\"\"\n\n    def __init__(self, model_path: str = \"model_registry/model_v1.pkl\",\n                 pipeline_path: str = \"model_registry/pipeline_v1.pkl\"):\n        self.model = joblib.load(model_path)\n        self.pipeline = joblib.load(pipeline_path)\n        self.model_version = \"v1\"\n        self.prediction_log: List[Dict[str, Any]] = []\n\n    def preprocess(self, features: HouseFeatures) -> pd.DataFrame:\n        \"\"\"Turn the validated request model into the DataFrame the pipeline expects.\"\"\"\n        return pd.DataFrame([features.model_dump()])\n\n    def predict(self, features: HouseFeatures) -> float:\n        \"\"\"Run a single prediction.\"\"\"\n        processed = self.pipeline.transform(self.preprocess(features))\n        return float(max(self.model.predict(processed)[0], 0))\n\n    def predict_batch(self, requests: List[HouseFeatures]) -> List[float]:\n        \"\"\"Run predictions for many houses in one pass.\"\"\"\n        frame = pd.concat([self.preprocess(r) for r in requests], ignore_index=True)\n        processed = self.pipeline.transform(frame)\n        return [float(max(p, 0)) for p in self.model.predict(processed)]\n\n    def log_prediction(self, features: HouseFeatures, prediction: float) -> None:\n        \"\"\"Record the prediction so drift can be detected later.\"\"\"\n        self.prediction_log.append({\n            \"timestamp\": datetime.now().isoformat(),\n            \"features\": features.model_dump(),\n            \"prediction\": prediction,\n        })\n\n\nservice = HousePriceService()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-routes",
      children: "3.3 Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.get(\"/\")\nasync def root():\n    return {\"message\": \"House Price Prediction API\", \"version\": \"1.0.0\"}\n\n\n@app.get(\"/health\")\nasync def health_check():\n    return {\n        \"status\": \"healthy\",\n        \"model_loaded\": service.model is not None,\n        \"model_version\": service.model_version,\n        \"timestamp\": datetime.now().isoformat(),\n    }\n\n\n@app.post(\"/predict\", response_model=PredictionResponse)\nasync def predict(features: HouseFeatures):\n    \"\"\"Predict the sale price of one house.\"\"\"\n    try:\n        price = service.predict(features)\n    except Exception as exc:\n        raise HTTPException(status_code=500, detail=str(exc)) from exc\n    service.log_prediction(features, price)\n    return PredictionResponse(\n        prediction_id=str(uuid4()),\n        predicted_price=round(price, 2),\n        features_used=list(features.model_dump().keys()),\n        model_version=service.model_version,\n        timestamp=datetime.now(),\n    )\n\n\n@app.post(\"/predict/batch\", response_model=BatchPredictionResponse)\nasync def predict_batch(request: PredictionRequest):\n    \"\"\"Predict prices for many houses in one call.\"\"\"\n    try:\n        prices = service.predict_batch(request.houses)\n    except Exception as exc:\n        raise HTTPException(status_code=500, detail=str(exc)) from exc\n    results = [\n        PredictionResult(predicted_price=round(p, 2), house_features=h)\n        for p, h in zip(prices, request.houses)\n    ]\n    return BatchPredictionResponse(\n        predictions=results,\n        total_predictions=len(results),\n        average_price=round(float(np.mean(prices)), 2),\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-run-it",
      children: "3.4 Run it"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "uvicorn main:app --host 0.0.0.0 --port 8000 --reload\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INFO:     Will watch for changes in these directories: ['.']\nINFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)\nINFO:     Started reloader process [12840] using WatchFiles\nINFO:     Started server process [12852]\nINFO:     Waiting for application startup.\nINFO:     Application startup complete.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--host 0.0.0.0"
          }), " is required inside a container."]
        }), " The default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "127.0.0.1"
        }), " binds only to\nthe container's loopback, so the published port never receives traffic. This is the single\nmost common reason a Dockerised FastAPI service looks healthy but returns nothing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "model_dump()"
        }), " replaces ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dict()"
        }), ". Pydantic v2 deprecated ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dict()"
        }), " in favour of\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "model_dump()"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-test-it",
      children: "3.5 Test it"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl http://127.0.0.1:8000/health\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\"status\":\"healthy\",\"model_loaded\":true,\"model_version\":\"v1\",\"timestamp\":\"2026-10-07T10:31:44.512908\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST http://127.0.0.1:8000/predict \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"bedrooms\":3,\"bathrooms\":2.0,\"sqft_living\":1800,\"sqft_lot\":5000,\"floors\":1.5,\"waterfront\":0,\"view\":2,\"condition\":4,\"yr_built\":2005,\"yr_renovated\":0}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\"prediction_id\":\"5f2c1a90-...\",\"predicted_price\":342150.75,\"features_used\":[\"bedrooms\",\"bathrooms\",\"sqft_living\",\"sqft_lot\",\"floors\",\"waterfront\",\"view\",\"condition\",\"yr_built\",\"yr_renovated\"],\"model_version\":\"v1\",\"timestamp\":\"2026-10-07T10:31:51.884120\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The exact ", (0,jsx_runtime.jsx)(_components.code, {
        children: "predicted_price"
      }), " depends on your trained model, so your number will differ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Interactive docs are generated automatically at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://127.0.0.1:8000/docs"
      }), " (Swagger UI) and\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "/redoc"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-4--testing",
      children: "Step 4 — Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install pytest httpx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi.testclient import TestClient\nimport pytest\n\nclient = TestClient(app)\n\nVALID_PAYLOAD = {\n    \"bedrooms\": 3,\n    \"bathrooms\": 2.0,\n    \"sqft_living\": 1800,\n    \"sqft_lot\": 5000,\n    \"floors\": 1.5,\n    \"waterfront\": 0,\n    \"view\": 2,\n    \"condition\": 4,\n    \"yr_built\": 2005,\n    \"yr_renovated\": 0,\n}\n\n\ndef test_health_endpoint():\n    response = client.get(\"/health\")\n    assert response.status_code == 200\n    assert response.json()[\"status\"] == \"healthy\"\n\n\ndef test_prediction_valid_input():\n    response = client.post(\"/predict\", json=VALID_PAYLOAD)\n    assert response.status_code == 200\n    body = response.json()\n    assert body[\"predicted_price\"] > 0\n    assert body[\"model_version\"] == \"v1\"\n\n\ndef test_prediction_rejects_year_out_of_range():\n    \"\"\"yr_built below 1800 must fail Pydantic validation with 422.\"\"\"\n    response = client.post(\"/predict\", json={**VALID_PAYLOAD, \"yr_built\": 1700})\n    assert response.status_code == 422\n\n\ndef test_prediction_rejects_missing_field():\n    \"\"\"A missing required field must fail validation with 422.\"\"\"\n    payload = {k: v for k, v in VALID_PAYLOAD.items() if k != \"sqft_living\"}\n    response = client.post(\"/predict\", json=payload)\n    assert response.status_code == 422\n\n\ndef test_batch_prediction_count_matches():\n    payload = {\"houses\": [VALID_PAYLOAD, {**VALID_PAYLOAD, \"sqft_living\": 2500}]}\n    response = client.post(\"/predict/batch\", json=payload)\n    assert response.status_code == 200\n    body = response.json()\n    assert body[\"total_predictions\"] == 2\n    assert len(body[\"predictions\"]) == 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pytest tests/ -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/test_api.py::test_health_endpoint PASSED\ntests/test_api.py::test_prediction_valid_input PASSED\ntests/test_api.py::test_prediction_rejects_year_out_of_range PASSED\ntests/test_api.py::test_prediction_rejects_missing_field PASSED\ntests/test_api.py::test_batch_prediction_count_matches PASSED\n========= 5 passed in 1.42s =========\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not executed in this environment"
      }), " — requires a trained model in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "model_registry/"
      }), ".\nThe four 422 tests pass without a model because Pydantic rejects the payload before the\nendpoint body runs; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_prediction_valid_input"
      }), " needs the model present."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-5--containerization",
      children: "Step 5 — Containerization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A multi-stage build keeps compilers and build tooling out of the runtime image."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM python:3.12-slim AS builder\n\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --user --no-cache-dir -r requirements.txt\n\n\nFROM python:3.12-slim AS runtime\n\nWORKDIR /app\nCOPY --from=builder /root/.local /root/.local\nENV PATH=/root/.local/bin:$PATH\nCOPY . .\n\nEXPOSE 8000\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker build -t house-price-api .\ndocker run -p 8000:8000 house-price-api\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " => [1/6] FROM docker.io/library/python:3.12-slim\n ...\n => => naming to docker.io/library/house-price-api\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker ps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CONTAINER ID   IMAGE               STATUS         PORTS                    NAMES\na1b2c3d4e5f6   house-price-api     Up 3 seconds   0.0.0.0:8000->8000/tcp   house-price-api\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.yml\nservices:\n  api:\n    build: .\n    ports:\n      - \"8000:8000\"\n    environment:\n      - MODEL_VERSION=v1\n    volumes:\n      - ./model_registry:/app/model_registry\n  prometheus:\n    image: prom/prometheus\n    ports:\n      - \"9090:9090\"\n  grafana:\n    image: grafana/grafana\n    ports:\n      - \"3000:3000\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-6--cicd",
      children: "Step 6 — CI/CD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/deploy.yml\nname: Train and deploy house price API\n\non:\n  push:\n    branches: [main]\n  schedule:\n    - cron: \"0 3 * * 1\"   # retrain weekly, Mondays 03:00 UTC\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: '3.12'\n          cache: pip\n      - run: pip install -r requirements.txt\n      - run: pytest tests/ -v\n\n  train:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: '3.12'\n          cache: pip\n      - run: pip install -r requirements.txt\n      - run: python train.py\n      - uses: actions/upload-artifact@v4\n        with:\n          name: model-registry\n          path: model_registry/\n\n  build-and-push:\n    needs: train\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/download-artifact@v4\n        with:\n          name: model-registry\n          path: model_registry/\n      - run: docker build -t house-price-api .\n      - run: |\n          echo \"${{ secrets.REGISTRY_PASSWORD }}\" | \\\n          docker login registry.example.com -u \"${{ secrets.REGISTRY_USERNAME }}\" --password-stdin\n      - run: docker push registry.example.com/house-price-api:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not executed in this environment"
      }), " — requires repository secrets and a container registry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-targets",
      children: "Deployment targets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU / memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scaling trigger"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECS Fargate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 / 512 units, min 2, max 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target CPU 60%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 vCPU / 512 MiB, max 10 instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency 80"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Azure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 vCPU / 1.5 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual scale set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring",
      children: "Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Track these four metrics and alert on the thresholds:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alert when"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p95 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users abandon slow responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Something is broken downstream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction mean shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 10% vs training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data drift — retrain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PSI (Population Stability Index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature distribution moved"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MonitoringSetup:\n    \"\"\"In-process counters. Swap for Prometheus client in production.\"\"\"\n\n    def __init__(self):\n        self.metrics = {\n            \"prediction_count\": 0,\n            \"total_latency_ms\": 0.0,\n            \"error_count\": 0,\n            \"drift_alerts\": 0,\n        }\n\n    def record_prediction(self, latency_ms: float, is_error: bool = False):\n        self.metrics[\"prediction_count\"] += 1\n        self.metrics[\"total_latency_ms\"] += latency_ms\n        if is_error:\n            self.metrics[\"error_count\"] += 1\n\n    def average_latency(self) -> float:\n        if self.metrics[\"prediction_count\"] == 0:\n            return 0.0\n        return self.metrics[\"total_latency_ms\"] / self.metrics[\"prediction_count\"]\n\n    def error_rate(self) -> float:\n        if self.metrics[\"prediction_count\"] == 0:\n            return 0.0\n        return self.metrics[\"error_count\"] / self.metrics[\"prediction_count\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-you-built",
      children: "What you built"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A regression API with a full ML lifecycle: validated ingestion, engineered features, three\ncomparable models, Optuna tuning, versioned artefacts behind a registry, Pydantic-validated\nFastAPI routes, pytest coverage, a multi-stage Docker image, and a scheduled CI/CD pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Validate input before inference"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pydantic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Field"
            }), " constraints; returns 422 instead of a wrong prediction"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log every prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store features, prediction, and timestamp so drift is detectable later"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch endpoint for bulk scoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortises model overhead across many houses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage Docker build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build deps stay out of the runtime image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health check endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns model state so a load balancer can route around a dead instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Watch prediction distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare incoming predictions against the training distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keep the last N model versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables rollback without retraining"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container starts but port 8000 refuses connections"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["uvicorn bound to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "127.0.0.1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--host 0.0.0.0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ModuleNotFoundError"
            }), " for your own module"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main.py"
            }), " copied into the image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COPY . ."
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AttributeError: 'HouseFeatures' object has no attribute 'dict'"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pydantic v2 removed ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".dict()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "model_dump()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "500"
            }), " on startup in Docker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model file missing from the image"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bake ", (0,jsx_runtime.jsx)(_components.code, {
              children: "model_registry/"
            }), " into the image or mount it"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optuna runs for hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 trials x 5 folds on CPU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lower ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n_trials"
            }), ", or reuse a cached ", (0,jsx_runtime.jsx)(_components.code, {
              children: "study"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test suite errors before any assertion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "joblib.load"
            }), " fails at import time"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a tiny fixture model for tests"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cp01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you handle feature engineering for a house price prediction model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Five groups of features. (1) Numeric transforms: living area, lot size, and room counts\nas-is, plus age derived as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "current_year - yr_built"
          }), ". (2) Categorical encoding:\nzipcode has high cardinality (100+ values), so one-hot encoding is wrong here — use target\nencoding (mean price per zipcode) or frequency encoding. (3) Composite ratios:\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "lot_to_living_ratio"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bed_bath_ratio"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sqft_per_bedroom"
          }), ".\nThese often carry more signal than any single raw column. (4) Location features: latitude and\nlongitude derived from zipcode, then distance to the city centre. (5) Interaction terms:\nliving area minus bedrooms, since a large house with few bedrooms signals luxury."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Validate that engineered features actually help by comparing validation score with and\nwithout them, rather than trusting the intuition."
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
      "data-qid": "cp01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you set up a CI/CD pipeline for an ML prediction API?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Four separate concerns, deliberately split across workflows. (1) CI on every pull\nrequest: lint, type-check, and run pytest. Nothing merges without passing tests. (2) Training\non a schedule (weekly) or on demand: retrain on all data, log metrics to W&B or MLflow, and\nregister the model only if it beats the current best. (3) CD on model registration: build the\nDocker image, run integration tests against it, deploy to staging, then promote to production\nthrough a canary. (4) Infrastructure as code: Terraform or Pulumi so cloud resources are\nreproducible rather than clicked by hand."
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GitHub Actions or GitLab CI are the usual orchestrators."
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
      "data-qid": "cp01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you A/B test an ML model deployment?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Three escalating stages. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Shadow deployment"
          }), ": mirror a copy of live traffic\nto the new model, compare its output offline, and serve nothing from it. This catches\npipeline bugs with zero user impact. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Canary"
          }), ": route 5-10% of traffic to the\nnew model and watch latency, error rate, and prediction distribution against the baseline.\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature flags"
          }), ": once validated, roll forward to 50%, then 100%."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Two details people forget. First, compare both technical metrics (latency, error rate) and\na proxy for quality — without ground truth you cannot measure accuracy on new data yet, so\nwatch the prediction distribution for a shift. Second, decide the rollback trigger before you\nship: a named threshold like \"p95 above 2s for 5 minutes\", not a judgement call."
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
      "data-qid": "cp01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you containerize an ML API for reproducible deployment?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "FROM python:3.12-slim AS builder\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --user --no-cache-dir -r requirements.txt\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FROM python:3.12-slim AS runtime\nWORKDIR /app\nCOPY --from=builder /root/.local /root/.local\nENV PATH=/root/.local/bin:$PATH\nCOPY . .\nEXPOSE 8000\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seven practices, in the order they matter. (1) Multi-stage builds keep compilers and\nbuild-only packages out of the runtime image. (2) Pin every dependency version for\nreproducibility. (3) Bake the model artefact into the image at build time rather than\nmounting it, so image and model versions cannot drift apart. (4) Run as a non-root user.\n(5) Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HEALTHCHECK"
          }), " so the orchestrator can detect a dead container. (6) Use a\nslim base image. (7) Build the image in CI so a broken Dockerfile fails the pipeline, not\nproduction."]
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
      "data-qid": "cp01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you handle model versioning and a model registry for production APIs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Six elements. (1) Storage: each version gets a unique ID plus its training date, dataset\nversion, hyperparameters, and metrics. MLflow Model Registry and W&B Artifacts are the\nusual tools. (2) API surface: return the model version in the response so a prediction can be\ntraced back to the model that produced it. (3) Multi-version serving: allow the client to\nrequest a version, which is what makes gradual migration possible. (4) Comparison view:\nmetrics per version side by side. (5) Rollback: keep the last three to five versions so\nswitching back is a config change, not a retrain. (6) Promotion gate: a new version only\nreaches production after automated validation passes on accuracy, latency, and drift checks."
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
      "data-qid": "cp01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you design FastAPI endpoints for ML model serving?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(1) Input validation via Pydantic ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Field"
          }), " constraints, so bounds live in one\nschema instead of being re-checked in every handler. (2) Async endpoints for I/O-bound work,\nso a slow database call does not block the event loop. (3) A batch endpoint for bulk scoring —\namortises per-request model overhead. (4) Custom exception handlers returning consistent JSON\nerror shapes. (5) Middleware for request IDs, CORS, rate limiting, and logging. (6) Free\nOpenAPI docs; add ", (0,jsx_runtime.jsx)(_components.code, {
            children: "summary"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "description"
          }), " to each route so the\ngenerated documentation is useful. (7) Cache identical feature sets when they recur."]
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
      "data-qid": "cp01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you monitor prediction drift in a production ML system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seven steps. (1) Log every prediction with its input features, predicted value, timestamp,\nand model version. Nothing below works without this. (2) Compare the incoming feature\ndistribution against training using the KS test for numeric features or the Population\nStability Index. (3) Track each feature's min, max, mean, and standard deviation, or its\ncategory frequencies. (4) Track the prediction distribution over time. (5) Once ground truth\narrives (usually lagged), compute real error and compare it against training performance —\nthis is the only true accuracy signal. (6) Alert when PSI exceeds 0.2 or performance drops\nmore than 10%. (7) Queue an automatic retraining job on sustained drift."
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
      "data-qid": "cp01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does Optuna tune hyperparameters, and what should you watch?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Optuna uses Bayesian optimization with the Tree-structured Parzen Estimator, which models\nthe good regions of the search space and samples there instead of exploring uniformly like a\ngrid or random search. Four practices matter. (1) Define an objective that takes a\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "trial"
          }), ", samples parameters with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trial.suggest_*"
          }), ", trains, and returns\nthe validation metric. (2) Use a pruner such as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MedianPruner"
          }), " to abandon\nclearly bad trials early — this often halves the runtime. (3) Search\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "learning_rate"
          }), " on a log scale, because it spans orders of magnitude. (4) Persist\nthe study so a second run continues from the first rather than starting over."]
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
      "data-qid": "cp01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you validate data inside an ML pipeline using Pydantic?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pydantic v2 validates via type hints and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Field"
          }), " constraints, so the schema is\nthe single source of truth:\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "sqft_living: float = Field(ge=100, le=50000)"
          }), ". Set\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConfigDict(extra='forbid')"
          }), " to reject unknown fields rather than silently ignore\nthem. For cross-field rules use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@field_validator"
          }), " — for example flag the\ncombination \"more bedrooms than bathrooms on a single floor\" as unlikely. For DataFrames,\nPandera applies the same constraint model to tabular data."]
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
      "data-qid": "cp01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What belongs on a monitoring dashboard for a prediction API?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Eight panels. (1) Request volume over time, broken down by endpoint. (2) Latency\npercentiles — p50, p95, p99 for inference and total request time. (3) Error rate split by\ncause: validation error, model error, timeout. (4) Prediction distribution histogram,\noverlaid with the training distribution, so drift is visible. (5) Model version currently\nserving each request. (6) Cost per hour derived from compute usage. (7) Currently firing\nalerts with severity. (8) Feature importance, recomputed periodically, since a model whose\ntop feature has gone to zero is suspicious."
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
      children: "Chapter quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 1 (cap-s01-quiz1):"
      }), " What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ColumnTransformer"
      }), " in scikit-learn?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s01-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Apply different preprocessing to different columns"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ColumnTransformer applies separate transforms (scaling numeric columns, one-hot encoding categorical columns) to different column subsets."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 2 (cap-s01-quiz2):"
      }), " Why FastAPI for ML model serving?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s01-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Async support, automatic OpenAPI docs, Pydantic validation"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "FastAPI provides async request handling, generated OpenAPI documentation, and schema validation through Pydantic."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 3 (cap-s01-quiz3):"
      }), " What is the role of a model registry?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s01-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Version and store trained models with metadata"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "A registry tracks model versions, metrics, and lineage so a prediction can be traced to the model that produced it, and rollback is a config change."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 4 (cap-s01-quiz4):"
      }), " Why containerize an ML API?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s01-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Ensure a consistent environment across development and production"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Containers package code, dependencies, and model artefacts together, so a working local setup reproduces identically in production."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 5 (cap-s01-quiz5):"
      }), " Which metrics should you monitor for a prediction API?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s01-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) All of the above — latency, error rate, prediction distribution"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Latency affects perceived quality, error rate signals reliability problems, and shifts in the prediction distribution indicate data drift."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qa",
      children: "Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "cap-s01-s1",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you handle missing values in the pipeline?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Data preprocessing for regression models."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Branch on column type. Numeric columns use median imputation, which resists outliers in a\nway mean imputation does not. Categorical columns use the mode, or an explicit \"missing\"\ncategory when absence itself carries meaning. scikit-learn's\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "SimpleImputer"
          }), " handles both inside a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Pipeline"
          }), ", which matters because\nthe imputer must be fitted on training data only and then applied unchanged to test data.\nSkipping the pipeline and imputing the whole frame before splitting leaks test statistics\ninto training."]
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
      "data-qid": "cap-s01-s2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the difference between MAE, RMSE, and R²?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Regression evaluation metrics."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MAE is the average absolute error in the target's own units, so it reads directly as\ndollars. RMSE squares errors before averaging, so large misses dominate — a model can look\nfine on MAE and terrible on RMSE. R² is the proportion of variance explained, ranging from\nnegative (worse than predicting the mean) to 1. For house prices, report MAE to stakeholders\nand RMSE to engineers, because a single large misprediction on an expensive house matters more\nthan several small ones."
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
      "data-qid": "cap-s01-s3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you encode zipcode for house price prediction?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Feature encoding for location data."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Zipcodes are high cardinality, so one-hot encoding produces hundreds of sparse columns.\nFour options: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "target encoding"
          }), " replaces each zipcode with the mean price for\nthat area; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "frequency encoding"
          }), " replaces it with the number of sales; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "\ngeographic encoding"
          }), " derives latitude and longitude and adds distance-to-centre; and\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "one-hot"
          }), " is acceptable only below roughly 20 distinct values. Target encoding\nusually wins for location, but it must be computed on training folds only — computing it on\nthe full dataset leaks the target into the features."]
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
      "data-qid": "cap-s01-s4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you handle high traffic?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "API scaling and reliability."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Six levers. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Horizontal scaling"
          }), ": several instances behind a load balancer.\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching"
          }), ": identical feature sets recur, so Redis with a TTL removes repeated\ninference. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rate limiting"
          }), " per client. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Async handlers"
          }), " so\nconcurrent requests do not serialise. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Batch endpoints"
          }), " to amortise per-request\noverhead. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autoscaling"
          }), " on CPU utilisation or queue depth. Note that model\nserving is CPU-bound, so scaling instances usually beats optimising the model."]
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
      "data-qid": "cap-s01-s5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you detect and respond to model drift?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ML model monitoring and maintenance."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Detect three distinct things. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature drift"
          }), ": incoming feature\ndistributions have moved, measured with KS test or PSI. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prediction drift"
          }), ": the\noutput distribution has moved. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance drift"
          }), ": once ground truth arrives,\nactual error has grown. Respond with scheduled retraining on a weekly or monthly cadence,\nshadow-deploying a new model beside the current one, and rolling back to the previous version\nwhen a retrain regresses. Alert thresholds matter more than the exact statistic: PSI above\n0.2, or performance down more than 10%."]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explore the data."
        }), " Load ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data/train.csv"
        }), ", plot the target distribution, compute a\ncorrelation matrix, count missing values. Record which features correlate most with price."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build a full pipeline."
        }), " Chain imputation, scaling, encoding, and feature selection into\none ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pipeline"
        }), ", fit it on training data, and transform both splits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tune XGBoost."
        }), " Run Optuna with 100 trials, optimise RMSE, then report best parameters,\nvalidation RMSE, and a feature-importance plot. Compare against untuned defaults."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wire up the API."
        }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /health"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /predict"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /predict/batch"
        }), " with\nrequest-logging middleware. Test status codes, response schemas, and the error path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model registry."
        }), " Store three versions, add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /model/versions"
        }), " listing each version\nwith its metrics, and support rollback via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /model/activate/{version}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Containerise."
        }), " Multi-stage Dockerfile plus ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker-compose.yml"
        }), " with the API,\nPrometheus, and Grafana. Build it and confirm ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/health"
        }), " responds from inside the container."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD."
        }), " A GitHub Actions workflow that tests, builds the image, pushes to a registry,\nand deploys — including a weekly scheduled training job."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring."
        }), " Prometheus metrics for request count, latency, and error rate, plus a\nGrafana dashboard showing predictions over time, latency percentiles, error rate, and\nactive model version."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shadow deployment."
        }), " Route 10% of traffic to v2 and 90% to v1, log which served each\nrequest, and compare RMSE once ground truth lands."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full production stack."
        }), " Deploy to AWS ECS, GCP Cloud Run, or Azure Container\nInstances with a custom domain, HTTPS, autoscaling, a p95 latency alert, and a documented\nrollback procedure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Imputing before splitting."
        }), " Statistics leak from test into train. Fit the imputer on\ntraining data only, inside the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pipeline"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Including ", (0,jsx_runtime.jsx)(_components.code, {
            children: "id"
          }), " as a feature."]
        }), " An identifier encodes nothing generalisable and lets the\nmodel memorise rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skipping validation loss."
        }), " A model that improves on train while degrading on validation\nis memorising, not learning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reporting only R²."
        }), " R² says nothing about error magnitude in dollars, which is what a\nstakeholder asks about."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardcoding the model path."
        }), " The container and the trained artefact drift apart.\nVersion the pair together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Running uvicorn on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "127.0.0.1"
          }), " in Docker."]
        }), " The published port never receives traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".dict()"
          }), " on Pydantic v2 models."]
        }), " It raises; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "model_dump()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Baking a secret into the image."
        }), " Model registry credentials belong in environment\nvariables or a secret manager, never in a layer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate input with Pydantic so bad requests fail as 422, not as a wrong prediction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare models on MAE (magnitude in real units) and RMSE (large-error sensitivity)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fit every preprocessing step on training data only, inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pipeline"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version the model and its preprocessing artefact together."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track prediction distribution over time; it is the earliest available drift signal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep the last three to five versions so rollback is a config change."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 interview questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Google style"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explain this system in 60 seconds, then give a real-world analogy."
        }), " — Data pipeline →\nmodel registry → FastAPI → Docker. Follow-up: what breaks first if you remove the\nregistry?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design a minimal, well-typed prediction function."
        }), " — Interviewer checks: type hints,\nedge cases, complexity, docstring. Follow-up: how does it behave on empty or malformed\ninput?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What are the three most common pitfalls in an ML serving pipeline?"
        }), " — Data leakage,\nmissing validation loss, unbounded input ranges. Follow-up: how would you catch each in\ncode review?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon style"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Describe a production bug caused by misunderstanding this system."
        }), " — STAR format with\nlogs, reproduction, root cause, and the regression test you added."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How do you scale this from 100 users to 10 million?"
        }), " — Caching, batching, horizontal\nscaling, autoscaling. Follow-up: which metric tells you which lever to pull?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft style"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare FastAPI with Flask for model serving."
        }), " — Decision matrix on async support,\nvalidation, documentation generation, ecosystem. Follow-up: what changes your answer?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How do you test a component that depends on the model?"
        }), " — Unit tests with a fixture\nmodel, integration tests against a real endpoint, contract tests on the schema."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA style"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How does this behave at scale — memory, throughput, or precision?"
        }), " — Batch size,\nmemory per instance, quantisation trade-offs. Follow-up: how does latency scale with input\nsize?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How would you make inference faster?"
        }), " — Batching, quantisation, ONNX export,\neliminating Python loops in the feature path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI startup style"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest production-quality version of this service."
        }), " — Error handling, type\nhints, health check, one-line docstring. Follow-up: what do you refactor first as it\ngrows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly with a measured result: \"Reduced p95 latency 38% by adding\nbatch inference to the house price API.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing the project with real numbers — dataset size, request volume,\nimprovement percentage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the tools alongside it (pytest, Docker, GitHub Actions, Optuna) so the ATS keyword\nmatch works."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep bullets under 15 words and open each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview day checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse the 60-second explanation and one real analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about a serving or drift bug you actually debugged."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review metric choices: why MAE ", (0,jsx_runtime.jsx)(_components.em, {
          children: "and"
        }), " RMSE, and when each is the right one."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare a question for them: \"How do you decide when to retrain a model in production?\""
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