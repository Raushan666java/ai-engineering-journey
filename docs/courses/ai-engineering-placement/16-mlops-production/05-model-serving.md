# Model Serving

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand model serving architectures and deployment patterns |
| LO2 | Deploy models using FastAPI with Redis caching and batching |
| LO3 | Implement model version routing and A/B testing |
| LO4 | Set up autoscaling for serving infrastructure |
| LO5 | Optimize inference latency with quantization and ONNX |
| LO6 | Build a feature store integration for online predictions |

## Introduction

Understanding model serving is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering model serving.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Serving Architectures | REST, gRPC, streaming, batch inference |
| 5.2 | FastAPI Serving | Model endpoint with async inference |
| 5.3 | Caching & Batching | Redis cache, request batching |
| 5.4 | Version Routing | A/B testing, canary, shadow serving |
| 5.5 | Autoscaling | Horizontal pod autoscaling, request-based |
| 5.6 | Inference Optimization | ONNX, quantization, TensorRT |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Client Request] --> B[Load Balancer]
    B --> C[Model Router]
    C --> D{Version?}
    D -->|v1| E[Model v1]
    D -->|v2| F[Model v2]
    E --> G[Redis Cache]
    F --> G
    G --> H[Response]
    E --> I[Feature Store]
    F --> I
```text

## 5.1 Serving Architectures

Model serving is the process of making model predictions available to applications in real-time or batch mode. The choice of architecture depends on latency requirements, throughput needs, and cost constraints.

**Serving patterns**:

| Pattern | Latency | Use Case | Example |
|---------|---------|----------|---------|
| REST API | 50-500ms | Online real-time | Chatbot recommendations |
| gRPC | 10-100ms | High-throughput microservices | Feature store lookups |
| Streaming | <10ms per event | Real-time event processing | Fraud detection |
| Batch | Minutes-hours | Offline scoring | Daily customer churn prediction |

```python
## REST serving with FastAPI — the most common pattern
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import mlflow.pyfunc
import numpy as np
from typing import List, Optional
import time

app = FastAPI(title="Model Serving API", version="1.0.0")

## Model registry path
MODEL_URI = "models:/PricePredictor/Production"
model = mlflow.pyfunc.load_model(MODEL_URI)

class PredictionRequest(BaseModel):
    features: List[float] = Field(..., description="Feature vector")
    request_id: Optional[str] = None

class PredictionResponse(BaseModel):
    prediction: float
    confidence: Optional[float]
    model_version: str
    latency_ms: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    start = time.time()

    # Convert to numpy array
    features = np.array(request.features).reshape(1, -1)

    # Predict
    prediction = model.predict(features)[0]

    latency = (time.time() - start) * 1000

    return PredictionResponse(
        prediction=float(prediction),
        confidence=None,
        model_version="v2.1.0",
        latency_ms=round(latency, 2)
    )

@app.get("/health")
async def health():
    return {"status": "healthy", "model": "PricePredictor", "version": "v2.1.0"}
```text

**gRPC serving for high throughput**:

```python
## grpc_servicer.py — gRPC model serving
## import grpc
## from concurrent import futures
## import model_pb2
## import model_pb2_grpc
## import mlflow.pyfunc
## import numpy as np
#
## class ModelServicer(model_pb2_grpc.ModelServiceServicer):
##     def __init__(self):
##         self.model = mlflow.pyfunc.load_model("models:/PricePredictor/Production")
#
##     def Predict(self, request, context):
##         features = np.array(request.features).reshape(1, -1)
##         prediction = self.model.predict(features)[0]
##         return model_pb2.PredictResponse(prediction=float(prediction))
#
## server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
## model_pb2_grpc.add_ModelServiceServicer_to_server(ModelServicer(), server)
## server.add_insecure_port("[::]:50051")
## server.start()
```text

---

## 5.2 FastAPI Serving

FastAPI provides async inference capabilities, automatic OpenAPI docs, and Pydantic validation — making it ideal for model serving.

```python
## serving_app.py — Complete model serving application
from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mlflow.pyfunc
import numpy as np
import pandas as pd
import logging
import time
import json
from typing import List, Dict, Optional
from datetime import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

## Load model
MODEL_PATH = "model_artifacts/production_model"
try:
    model = mlflow.pyfunc.load_model(MODEL_PATH)
    logger.info(f"Model loaded from {MODEL_PATH}")
except Exception as e:
    logger.error(f"Failed to load model: {e}")
    model = None

class BatchRequest(BaseModel):
    instances: List[Dict[str, float]]

class BatchResponse(BaseModel):
    predictions: List[float]
    model_version: str
    num_predictions: int

@app.on_event("startup")
async def load_model_on_startup():
    """Reload model on startup to ensure fresh load."""
    global model
    model = mlflow.pyfunc.load_model(MODEL_PATH)
    logger.info("Model reloaded on startup")

@app.post("/v1/predict")
async def predict_single(features: Dict[str, float]):
    """Single prediction endpoint."""
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    start = time.time()
    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]

    logger.info(f"Prediction: {prediction:.4f}, latency: {(time.time()-start)*1000:.2f}ms")

    return {
        "prediction": float(prediction),
        "latency_ms": round((time.time() - start) * 1000, 2),
        "timestamp": datetime.utcnow().isoformat()
    }

@app.post("/v1/batch-predict", response_model=BatchResponse)
async def batch_predict(request: BatchRequest):
    """Batch prediction endpoint."""
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    df = pd.DataFrame(request.instances)
    predictions = model.predict(df)

    logger.info(f"Batch prediction: {len(predictions)} predictions")

    return BatchResponse(
        predictions=[float(p) for p in predictions],
        model_version="v2.1.0",
        num_predictions=len(predictions)
    )

## For running directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
```text

**Async inference with background tasks**:

```python
@app.post("/v1/async-predict")
async def async_predict(features: Dict[str, float], background_tasks: BackgroundTasks):
    """Async prediction that logs prediction to database in background."""
    if model is None:
        raise HTTPException(status_code=503)

    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]

    # Log prediction asynchronously
    background_tasks.add_task(log_prediction_to_db, features, float(prediction))

    return {
        "prediction": float(prediction),
        "logged": True
    }

async def log_prediction_to_db(features: dict, prediction: float):
    """Simulated async database logging."""
    # In production: await db.insert("predictions", {...})
    logger.info(f"Logged prediction: {prediction} for features: {features}")
```text

---

## 5.3 Caching & Batching

Caching repeated requests and batching concurrent requests significantly improve throughput.

```python
## caching.py — Redis-based prediction caching
import redis
import json
import hashlib
import numpy as np
from typing import Dict, Optional

class PredictionCache:
    def __init__(self, host="localhost", port=6379, ttl=3600):
        self.client = redis.Redis(host=host, port=port, decode_responses=True)
        self.ttl = ttl
        self.hits = 0
        self.misses = 0

    def _make_key(self, model_version: str, features: Dict) -> str:
        """Create deterministic cache key from features."""
        feature_str = json.dumps(features, sort_keys=True)
        hash_val = hashlib.sha256(feature_str.encode()).hexdigest()[:16]
        return f"pred:{model_version}:{hash_val}"

    def get(self, model_version: str, features: Dict) -> Optional[float]:
        """Get cached prediction if available."""
        key = self._make_key(model_version, features)
        result = self.client.get(key)
        if result is not None:
            self.hits += 1
            return float(result)
        self.misses += 1
        return None

    def set(self, model_version: str, features: Dict, prediction: float):
        """Cache a prediction."""
        key = self._make_key(model_version, features)
        self.client.setex(key, self.ttl, prediction)

    def stats(self) -> Dict:
        total = self.hits + self.misses
        hit_rate = self.hits / total if total > 0 else 0
        return {"hits": self.hits, "misses": self.misses, "hit_rate": hit_rate}

cache = PredictionCache()

## In prediction endpoint
@app.post("/v1/predict-with-cache")
async def predict_cached(features: Dict[str, float], model_version: str = "v2"):
    # Check cache first
    cached = cache.get(model_version, features)
    if cached is not None:
        return {"prediction": cached, "source": "cache"}

    # Compute prediction
    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]

    # Cache for future requests
    cache.set(model_version, features, float(prediction))

    return {"prediction": float(prediction), "source": "model"}
```text

**Request batching**:

```python
import asyncio
import numpy as np
from collections import deque
from typing import List, Callable, Awaitable

class RequestBatcher:
    """Aggregates concurrent requests into batches for efficient inference."""

    def __init__(self, model_fn: Callable, max_batch_size: int = 32, max_wait_ms: float = 10):
        self.model_fn = model_fn
        self.max_batch_size = max_batch_size
        self.max_wait = max_wait_ms / 1000
        self.queue = deque()
        self._lock = asyncio.Lock()

    async def predict(self, features: np.ndarray) -> np.ndarray:
        """Submit a single request and wait for batched result."""
        event = asyncio.Event()
        result = {}

        async with self._lock:
            self.queue.append((features, result, event))
            if len(self.queue) >= self.max_batch_size:
                asyncio.ensure_future(self._process_batch())

        await event.wait()
        return result["prediction"]

    async def _process_batch(self):
        """Process a batch of queued requests."""
        async with self._lock:
            batch = list(self.queue)
            self.queue.clear()

        if not batch:
            return

        # Stack features
        features_batch = np.vstack([item[0] for item in batch])
        predictions = await self.model_fn(features_batch)

        # Distribute results
        for i, (_, result, event) in enumerate(batch):
            result["prediction"] = predictions[i]
            event.set()

## Usage
batcher = RequestBatcher(
    model_fn=lambda x: asyncio.to_thread(model.predict, x),
    max_batch_size=32,
    max_wait_ms=10
)

@app.post("/v1/batched-predict")
async def batched_predict(features: Dict[str, float]):
    df = pd.DataFrame([features])
    prediction = await batcher.predict(df.values)
    return {"prediction": float(prediction[0])}
```text

---

## 5.4 Version Routing

A model router directs requests to different model versions based on routing rules.

```python
## model_router.py — Route requests to model versions
import mlflow.pyfunc
import random
import hashlib
from typing import Dict, Optional

class ModelRouter:
    def __init__(self):
        self.versions = {}
        self.default_version = None

    def load_version(self, version_tag: str, model_uri: str):
        """Load a model version from registry."""
        self.versions[version_tag] = mlflow.pyfunc.load_model(model_uri)
        if self.default_version is None:
            self.default_version = version_tag
        print(f"Loaded {version_tag} from {model_uri}")

    def set_routing(self, routing: Dict[str, float]):
        """Set traffic percentages per version (should sum to 100)."""
        self.routing = routing

    def route(self, features: Dict, user_id: Optional[str] = None) -> tuple:
        """Route request to appropriate model version."""
        if user_id:
            # Consistent hashing for A/B testing
            version = self._consistent_hash(user_id)
        elif hasattr(self, 'routing'):
            version = self._weighted_random()
        else:
            version = self.default_version

        model = self.versions[version]
        return model.predict(pd.DataFrame([features]))[0], version

    def _consistent_hash(self, user_id: str) -> str:
        """Deterministically assign user to version."""
        hash_val = int(hashlib.md5(user_id.encode()).hexdigest()[:8], 16)
        total = sum(self.routing.values())
        bucket = hash_val % total
        cumulative = 0
        for version, pct in self.routing.items():
            cumulative += pct
            if bucket < cumulative:
                return version
        return self.default_version

    def _weighted_random(self) -> str:
        """Random assignment by weight."""
        r = random.random() * 100
        cumulative = 0
        for version, pct in self.routing.items():
            cumulative += pct
            if r <= cumulative:
                return version
        return self.default_version

router = ModelRouter()
router.load_version("v1", "models:/PricePredictor/1")
router.load_version("v2", "models:/PricePredictor/2")
router.set_routing({"v1": 90, "v2": 10})

## FastAPI endpoint using router
@app.post("/v1/route")
async def routed_predict(features: Dict[str, float], user_id: str = None):
    prediction, version = router.route(features, user_id)
    return {"prediction": float(prediction), "model_version": version}
```text

---

## 5.5 Autoscaling

Autoscaling ensures serving infrastructure matches traffic demands without over-provisioning.

```python
## kubernetes_hpa.yaml — Horizontal Pod Autoscaler
## apiVersion: autoscaling/v2
## kind: HorizontalPodAutoscaler
## metadata:
##   name: model-serving-hpa
## spec:
##   scaleTargetRef:
##     apiVersion: apps/v1
##     kind: Deployment
##     name: price-predictor
##   minReplicas: 2
##   maxReplicas: 20
##   metrics:
##     - type: Resource
##       resource:
##         name: cpu
##         target:
##           type: Utilization
##           averageUtilization: 70
##     - type: Resource
##       resource:
##         name: memory
##         target:
##           type: Utilization
##           averageUtilization: 80
##     - type: Pods
##       pods:
##         metric:
##           name: prediction_latency_p95
##         target:
##           type: AverageValue
##           averageValue: 500m  # 500ms p95 latency
```text

```python
## custom_autoscaler.py — Python-based autoscaling logic
import time
import psutil
import subprocess
import json
from collections import deque

class CustomAutoscaler:
    def __init__(self, min_replicas=2, max_replicas=20, target_latency_ms=200):
        self.min_replicas = min_replicas
        self.max_replicas = max_replicas
        self.target_latency = target_latency_ms
        self.latency_history = deque(maxlen=60)  # 1 minute window
        self.current_replicas = min_replicas

    def record_latency(self, latency_ms: float):
        self.latency_history.append(latency_ms)

    def get_avg_latency(self) -> float:
        if not self.latency_history:
            return 0
        return sum(self.latency_history) / len(self.latency_history)

    def compute_desired_replicas(self) -> int:
        avg_latency = self.get_avg_latency()
        if avg_latency == 0:
            return self.current_replicas

        ratio = avg_latency / self.target_latency
        desired = int(self.current_replicas * ratio)

        return max(self.min_replicas, min(self.max_replicas, desired))

    def scale(self):
        """Kubernetes-style scaling decision."""
        desired = self.compute_desired_replicas()
        if desired != self.current_replicas:
            print(f"Scaling: {self.current_replicas} -> {desired} (avg latency: {self.get_avg_latency():.0f}ms)")
            # In real deployment: Kubernetes API call
            # subprocess.run(["kubectl", "scale", "deployment/price-predictor", "--replicas", str(desired)])
            self.current_replicas = desired
        else:
            print(f"No scaling needed ({self.current_replicas} replicas)")

scaler = CustomAutoscaler(min_replicas=2, max_replicas=20)

@app.post("/v1/predict")
async def predict_with_autoscaling(features: Dict[str, float]):
    start = time.time()
    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]
    latency = (time.time() - start) * 1000

    scaler.record_latency(latency)
    if random.random() < 0.1:  # Check every 10th request
        scaler.scale()

    return {"prediction": float(prediction), "latency_ms": round(latency, 2)}
```text

---

## 5.6 Inference Optimization

Optimize model inference for production with quantization, ONNX, and TensorRT.

```python
## optimize_model.py — Convert sklearn model to ONNX for faster inference
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType
import onnxruntime as ort
import numpy as np
import mlflow.sklearn
import time

def convert_to_onnx(model, input_dim: int, output_path: str = "model.onnx"):
    """Convert sklearn model to ONNX format."""
    initial_type = [("float_input", FloatTensorType([None, input_dim]))]
    onnx_model = convert_sklearn(model, initial_types=initial_type)
    with open(output_path, "wb") as f:
        f.write(onnx_model.SerializeToString())
    print(f"ONNX model saved to {output_path}")
    return output_path

class ONNXModelWrapper:
    """Wrapper for ONNX Runtime inference."""

    def __init__(self, onnx_path: str):
        self.session = ort.InferenceSession(onnx_path)
        self.input_name = self.session.get_inputs()[0].name

    def predict(self, X: np.ndarray) -> np.ndarray:
        # ONNX expects float32
        input_data = X.astype(np.float32)
        result = self.session.run(None, {self.input_name: input_data})
        return result[0]

## Load sklearn model, convert to ONNX, compare performance
rf_model = mlflow.sklearn.load_model("models:/PricePredictor/Production")
onnx_path = convert_to_onnx(rf_model, input_dim=10)

onnx_model = ONNXModelWrapper(onnx_path)

## Benchmark
X_test = np.random.randn(1000, 10).astype(np.float32)

## sklearn
start = time.time()
for _ in range(100):
    _ = rf_model.predict(X_test)
sklearn_time = time.time() - start

## ONNX
start = time.time()
for _ in range(100):
    _ = onnx_model.predict(X_test)
onnx_time = time.time() - start

print(f"sklearn: {sklearn_time:.3f}s, ONNX: {onnx_time:.3f}s")
print(f"Speedup: {sklearn_time/onnx_time:.1f}x")
```text

**Quantization for reduced latency**:

```python
def quantize_model(model_path: str, quantized_path: str):
    """Apply dynamic quantization to reduce model size and latency."""
    import torch
    import torch.nn as nn

    # Load model
    model = torch.load(model_path)
    model.eval()

    # Dynamic quantization
    quantized_model = torch.quantization.quantize_dynamic(
        model,
        {nn.Linear, nn.GRU},  # Quantize these layer types
        dtype=torch.qint8
    )

    torch.save(quantized_model, quantized_path)

    original_size = os.path.getsize(model_path) / 1e6
    quantized_size = os.path.getsize(quantized_path) / 1e6
    print(f"Original: {original_size:.1f}MB -> Quantized: {quantized_size:.1f}MB")
    print(f"Size reduction: {(1 - quantized_size/original_size)*100:.0f}%")

## quantize_model("model.pt", "model_quantized.pt")
```text

**Feature store integration**:

```python
class FeatureStoreClient:
    """Client for online feature store (e.g., Feast, Tecton)."""

    def __init__(self, feature_service_url: str):
        self.url = feature_service_url

    def get_features(self, entity_id: str, feature_refs: list) -> dict:
        """Fetch features from online store."""
        import requests
        response = requests.post(
            f"{self.url}/get-online-features",
            json={"entity_ids": [entity_id], "feature_refs": feature_refs}
        )
        return response.json()["features"][0]

feature_store = FeatureStoreClient("http://feast-serving:6566")

@app.post("/v1/predict-with-features")
async def predict_with_feature_store(entity_id: str):
    """Get features from store, then predict."""
    features = feature_store.get_features(entity_id, [
        "house_features:sqft",
        "house_features:bedrooms",
        "house_features:bathrooms",
        "house_features:year_built"
    ])
    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]
    return {"prediction": float(prediction), "entity_id": entity_id}
```text

---

## TypeScript Parallel

```typescript
// TypeScript model serving with routing
interface ModelVersion {
  version: string;
  predict: (features: Record<string, number>) => number;
}

class ModelRouter {
  private versions: Map<string, ModelVersion> = new Map();
  private routing: Record<string, number> = {};

  addVersion(version: ModelVersion): void {
    this.versions.set(version.version, version);
  }

  setRouting(routing: Record<string, number>): void {
    this.routing = routing;
  }

  predict(features: Record<string, number>): { prediction: number; version: string } {
    const r = Math.random() * 100;
    let cumulative = 0;
    for (const [version, pct] of Object.entries(this.routing)) {
      cumulative += pct;
      if (r <= cumulative) {
        const model = this.versions.get(version)!;
        return { prediction: model.predict(features), version };
      }
    }
    const defaultVersion = this.versions.values().next().value;
    return { prediction: defaultVersion.predict(features), version: defaultVersion.version };
  }
}
```text

---

## Summary

- Model serving architectures range from REST APIs (50-500ms) to batch inference (minutes-hours)
- FastAPI provides async inference, Pydantic validation, and automatic OpenAPI docs
- Redis caching reduces repeated inference calls and latency
- Request batching aggregates concurrent requests for GPU-efficient inference
- Model routing enables A/B testing, canary deployments, and consistent hashing
- Horizontal Pod Autoscaler in Kubernetes scales replicas based on CPU, memory, or custom metrics
- ONNX Runtime provides 2-5x speedups over native sklearn inference
- Dynamic quantization reduces model size by 50-75% with minimal accuracy loss
- Feature store integration separates feature computation from model serving
- Custom autoscalers can use prediction latency as a scaling metric

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Real-time serving | FastAPI REST endpoint with async | Synchronous blocking endpoints |
| Repeated predictions | Redis cache with TTL | Computing prediction every time |
| GPU inference | Request batching (32-64 per batch) | Single-request GPU inference |
| Traffic spikes | Horizontal Pod Autoscaler | Manual scaling |
| Latency reduction | ONNX Runtime or quantization | Optimizing at framework level only |
| Feature management | Feature store (Feast/Tecton) | Computing features in serving code |

## Interview Q&A

<details class="tp-qa-card" data-qid="mlops-s05-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What are the common model serving patterns?
  </summary>
  <div class="tp-qa-answer">
    <p>Four main patterns: (1) REST API — standard HTTP serving, best for most use cases, 50-500ms latency. (2) gRPC — high-throughput binary protocol, 10-100ms. (3) Streaming — event-driven processing for sub-10ms real-time needs. (4) Batch — periodic offline scoring jobs for non-real-time use cases. Each trades off latency, throughput, and complexity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does request batching improve inference throughput?
  </summary>
  <div class="tp-qa-answer">
    <p>Request batching aggregates multiple inference requests into one batch for GPU/TPU processing. GPUs are optimized for parallel computation: processing a batch of 32 takes only slightly longer than processing 1. With a max_wait threshold (e.g., 10ms), the server collects concurrent requests and processes them together, dramatically improving throughput without unacceptable latency increase.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How does Redis caching help model serving?
  </summary>
  <div class="tp-qa-answer">
    <p>Redis caches predictions keyed by a hash of the input features with a configurable TTL. If the same input is requested again within the TTL, the cached prediction is returned instantly without model inference. This reduces latency for repeated queries and protects the model from redundant computation, especially for popular or common inputs.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is consistent hashing for A/B testing models?
  </summary>
  <div class="tp-qa-answer">
    <p>Consistent hashing assigns users to model versions deterministically based on a hash of their user ID. The same user always gets the same model version, providing a consistent experience. The hash space is divided into buckets proportional to the traffic split (e.g., 90% for control, 10% for treatment). This enables fair A/B testing without session inconsistency.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How does ONNX improve inference performance?
  </summary>
  <div class="tp-qa-answer">
    <p>ONNX (Open Neural Network Exchange) provides a standardized model format with a runtime that optimizes computation graphs. It performs operator fusion, constant folding, and graph-level optimizations. ONNX Runtime also supports hardware-specific backends (CUDA, TensorRT, OpenVINO). Speedups of 2-5x over native sklearn inference are common.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is dynamic quantization in model optimization?
  </summary>
  <div class="tp-qa-answer">
    <p>Dynamic quantization reduces model precision from float32 to int8 for weights while keeping activations in float32. This reduces model size by ~75% and improves CPU inference speed by 2-4x with minimal accuracy loss (usually <1%). It's applied post-training without requiring retraining or calibration data, making it the easiest quantization method.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you implement autoscaling for model serving?
  </summary>
  <div class="tp-qa-answer">
    <p>Kubernetes HPA can scale based on CPU (e.g., target 70% utilization), memory, or custom metrics like p95 latency. A custom metric pipeline (Prometheus + custom metrics adapter) publishes per-pod latency metrics. The HPA computes desired replicas as current * (current_metric / target_metric). Minimum replicas ensure baseline capacity; maximum prevents runaway scaling.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is a feature store and why use it in serving?
  </summary>
  <div class="tp-qa-answer">
    <p>A feature store (Feast, Tecton) provides a centralized repository of pre-computed features with both offline (training) and online (serving) access. It ensures training/serving feature consistency, avoids feature recomputation at inference time, and handles point-in-time correct feature lookups. Online serving uses low-latency stores (Redis, DynamoDB) for millisecond feature retrieval.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle model versioning in serving?
  </summary>
  <div class="tp-qa-answer">
    <p>Load all active model versions into memory at startup. Use a ModelRouter with traffic percentage configuration per version. The router selects the version based on random weighted selection or consistent hashing by user ID. Shadow traffic sends copies of requests to new versions for evaluation without affecting responses. Canary routing exposes new versions to increasing traffic.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mlops-s05-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What metrics should you monitor for model serving?
  </summary>
  <div class="tp-qa-answer">
    <p>Essential metrics: (1) p50/p95/p99 latency — response time distribution, (2) requests per second (throughput), (3) error rate (4xx/5xx), (4) cache hit rate, (5) GPU utilization (if applicable), (6) model prediction distribution — detect if outputs shift suddenly, (7) memory and CPU usage per pod, (8) batch size distribution.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which serving pattern is best for real-time online predictions?
a) Batch inference
b) REST API
c) Streaming
d) File export

<details class="tp-qa-card" data-qid="mlops-s05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) REST API</strong></p><p>REST API (50-500ms) is the standard pattern for real-time online predictions.</p></div></details>

**Q2**: What is the primary benefit of request batching?
a) Lower individual request latency
b) Higher throughput on GPU
c) Simpler code
d) Lower memory usage

<details class="tp-qa-card" data-qid="mlops-s05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Higher throughput on GPU</strong></p><p>Batching leverages GPU parallelism to process multiple requests simultaneously, increasing throughput.</p></div></details>

**Q3**: How does consistent hashing work for A/B testing?
a) Randomly assigns users each request
b) Deterministically maps user IDs to model versions
c) Uses round-robin across versions
d) Routes based on request payload size

<details class="tp-qa-card" data-qid="mlops-s05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Deterministically maps user IDs to model versions</strong></p><p>Consistent hashing ensures the same user always gets the same model version for consistent experience.</p></div></details>

**Q4**: What format does ONNX Runtime use for optimized inference?
a) .pkl
b) .onnx
c) .pt
d) .h5

<details class="tp-qa-card" data-qid="mlops-s05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) .onnx</strong></p><p>ONNX uses the .onnx format with graph-level optimizations for faster inference.</p></div></details>

**Q5**: What is the key advantage of a feature store in production serving?
a) Reduces model size
b) Ensures training-serving feature consistency
c) Increases model accuracy
d) Eliminates need for data validation

<details class="tp-qa-card" data-qid="mlops-s05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Ensures training-serving feature consistency</strong></p><p>Feature stores provide the same features used in training for serving, preventing training-serving skew.</p></div></details>

## Exercises

**Easy** — Deploy a scikit-learn model as a FastAPI endpoint with `/predict` and `/health` routes.

**Medium** — Add Redis caching to a model serving endpoint with TTL-based expiration and cache hit/miss logging.

**Medium** — Implement a ModelRouter with consistent hashing that routes 80% of traffic to v1 and 20% to v2 based on user ID.

**Hard** — Convert a RandomForest model to ONNX, benchmark sklearn vs ONNX inference speed over 1000 requests, report the speedup.

**Hard** — Build a complete serving stack with FastAPI, Redis cache, request batching (32 max batch), and HPA-ready Dockerfile.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 16-mlops-production
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 16-mlops-production. When would you choose one approach over another?
2. Design a system that efficiently handles 16-mlops-production at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 16-mlops-production. What was your approach and what was the result?
2. How would you explain 16-mlops-production to a non-technical stakeholder?

#### Microsoft Style
1. How does 16-mlops-production integrate with enterprise systems and cloud architectures?
2. What are the security implications of 16-mlops-production?

#### NVIDIA Style
1. How would you optimize 16-mlops-production for GPU-accelerated computing?
2. What parallel processing patterns apply to 16-mlops-production?

#### AI Startup Style
1. How would you implement 16-mlops-production in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 16-mlops-production?

### Resume Tips
- **Technical Skills**: List 16-mlops-production under relevant technical skills
- **Project Description**: "Implemented 16-mlops-production to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 16-mlops-production in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 16-mlops-production
- [ ] Practice 3-5 problems related to 16-mlops-production
- [ ] Prepare 2 real-world examples of using 16-mlops-production
- [ ] Know the time/space complexity of common 16-mlops-production operations
- [ ] Have questions ready about how the company uses 16-mlops-production> **Next**: [06 — Drift Monitoring →](06-drift-monitoring.md)
