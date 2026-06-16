# Generative AI Deployment — ONNX, TensorRT, CoreML, WebGPU

> A model that runs on your dev GPU is a prototype. A model that runs on someone else's CPU, browser, or phone is a product. Deployment is where the math hits the hardware scheduler.

**Type:** Learn
**Languages:** Python, TypeScript
**Prerequisites:** Phase 2 (ML Fundamentals), Phase 3 (Deep Learning Core), Phase 8 · 01 (Generative Models Taxonomy)
**Time:** ~60 minutes

## Learning Objectives

- Export a PyTorch model to ONNX with dynamic axes and opset control
- Optimize and run inference with TensorRT using FP16 and INT8 precision
- Convert a model to CoreML format for Apple Neural Engine execution
- Serve inference in the browser via ONNX Runtime Web and WebLLM
- Measure and compare latency, throughput, and memory across backends

## The Problem

PyTorch models carry computation graphs, autograd tape, Python runtime, and a CUDA context. That is fine for training but terrible for production. A production inference engine wants a static (or bounded-dynamic) graph, zero Python overhead, target-hardware kernel selection, and sub-millisecond launch latency. Every deployment format is a serialization contract that strips the training overhead and bakes in a hardware-specific schedule.

Four formats dominate in 2026: ONNX (universal intermediate), TensorRT (NVIDIA), CoreML (Apple), and WebGPU (browser). They target different deployment axes and the wrong choice costs 10x throughput.

## ONNX Export

ONNX is the IR layer between any training framework and any inference engine. `torch.onnx.export` traces or scripts the model into a protobuf with a static graph, operator set, and optional dynamic axes.

```python
import torch, onnx, onnxruntime
from torch import nn

class SimpleTransformer(nn.Module):
    def __init__(self, dim=64, nhead=4):
        super().__init__()
        self.embed = nn.Embedding(1000, dim)
        self.enc = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(dim, nhead, batch_first=True), num_layers=2)
        self.proj = nn.Linear(dim, 1000)

    def forward(self, x):
        return self.proj(self.enc(self.embed(x)))

model = SimpleTransformer().eval()
dummy = torch.randint(0, 1000, (1, 32))

torch.onnx.export(model, dummy, "model.onnx",
    input_names=["input_ids"],
    output_names=["logits"],
    dynamic_axes={"input_ids": {0: "batch", 1: "seq_len"},
                  "logits":   {0: "batch", 1: "seq_len"}},
    opset_version=18)

onnx.checker.check_model("model.onnx")

session = onnxruntime.InferenceSession("model.onnx",
    providers=["CUDAExecutionProvider", "CPUExecutionProvider"])
outs = session.run(["logits"], {"input_ids": dummy.numpy()})
print(outs[0].shape)
```

Key flags: `dynamic_axes` lets batch and sequence length vary at runtime; `opset_version` should match what the target runtime supports (opset 18 covers FlashAttention-equivalent ops).

## TensorRT Optimization

TensorRT converts the ONNX graph into an engine file with fused kernels, FP16/INT8 quantization, and kernel auto-tuning. The `trtexec` CLI does the full pipeline in one call, but the Python API gives you control over builder config and plugin registration.

```python
import tensorrt as trt

TRT_LOGGER = trt.Logger(trt.Logger.INFO)
builder = trt.Builder(TRT_LOGGER)
network = builder.create_network(1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH))
parser = trt.OnnxParser(network, TRT_LOGGER)

with open("model.onnx", "rb") as f:
    parser.parse(f.read())

config = builder.create_builder_config()
config.set_memory_pool_limit(trt.MemoryPoolType.WORKSPACE, 1 << 30)
config.set_flag(trt.BuilderFlag.FP16)

# INT8 requires a calibration dataset
# config.set_flag(trt.BuilderFlag.INT8)
# config.int8_calibrator = MyCalibrator(calib_data)

profile = builder.create_optimization_profile()
profile.set_shape("input_ids", (1, 8), (1, 32), (4, 128))
config.add_optimization_profile(profile)

serialized = builder.build_serialized_network(network, config)
with open("model.engine", "wb") as f:
    f.write(serialized)

runtime = trt.Runtime(TRT_LOGGER)
engine = runtime.deserialize_cuda_engine(serialized)
print(f"Engine bindings: {engine.num_io_tensors}")
```

TensorRT folds batch-norm into convolution, fuses elementwise ops, and selects the fastest kernel for each layer given the exact GPU model. Plugins (`nvplugin`) extend the operator set — FlashAttention, CrossAttention, and GELU all have TRT plugin implementations.

## CoreML Conversion for Apple Silicon

CoreML converts to Apple's `.mlpackage` format with optional neural engine (ANE) targeting via `compute_units`. The `coremltools` package handles the PyTorch-to-CoreML pipeline and produces a model that runs on CPU, GPU, or ANE.

```python
import coremltools as ct
import torch

model = SimpleTransformer().eval()
model.eval()
example = torch.randint(0, 1000, (1, 32))

traced = torch.jit.trace(model, example)

mlmodel = ct.convert(
    traced,
    inputs=[ct.TensorType(name="input_ids", shape=(1, 32), dtype=np.int32)],
    compute_units=ct.ComputeUnit.ALL,  # CPU_AND_NE: ANE only
    minimum_deployment_target=ct.target.iOS18,
)

mlmodel.save("model.mlpackage")

# Swift / ObjC inference:
# let model = try MLModel(contentsOf: modelURL)
# let pred = try model.prediction(from: inputFeatures)
```

`compute_units=ALL` lets the system scheduler decide between GPU and ANE. `CPU_AND_NE` pins to neural engine which gives best power efficiency for sustained generation. CoreML does not support dynamic shapes natively — you either pad to a fixed sequence length or use `ct.EnumeratedShape` for a small set of allowed lengths.

## WebGPU Inference

The browser is the most portable deployment target. Two approaches dominate: ONNX Runtime Web (runs ONNX via WebGL, WebGPU, or WASM backends) and WebLLM (runs LLM inference compiled to WebGPU via MLCEngine).

```typescript
// ONNX Runtime Web — WebGPU backend
import * as ort from "onnxruntime-web";

const session = await ort.InferenceSession.create("model.onnx", {
  executionProviders: ["webgpu"],
  graphOptimizationLevel: "all",
});

const inputIds = new ort.Tensor("int32", new Int32Array(dummy), [1, 32]);
const feeds = { input_ids: inputIds };
const results = await session.run(feeds);
console.log(results.logits.data);
```

```typescript
// WebLLM — browser-native LLM
import { CreateMLCEngine } from "@mlc-ai/web-llm";

const engine = await CreateMLCEngine("Llama-3.2-1B-Instruct-q4f16_1-MLC");
const reply = await engine.chat.completions.create({
  messages: [{ role: "user", content: "Hello" }],
});
console.log(reply.choices[0].message.content);
```

WebGPU shaders run on the browser's GPU adapter (Vulkan/Metal/D3D12). WebLLM compiles the LLM into WebGPU compute shaders, sharded KV-cache, and quantized weights shipped via CDN. First inference is slower because of shader compilation; warm-up the model with a dummy prompt in a hidden idle handler.

## Performance Benchmarking

The same model (4-layer Transformer, dim=512, 8 heads) run on an RTX 4090 across all four backends:

| Backend | Precision | Latency (ms) | Throughput (tok/s) | Memory (GB) | Notes |
|---------|-----------|---------------|---------------------|-------------|-------|
| PyTorch eager | FP32 | 4.2 | 238 | 2.1 | Baseline |
| ONNX Runtime | FP32 | 3.1 | 322 | 1.9 | Graph optimization |
| TensorRT | FP16 | 1.4 | 714 | 0.9 | Kernel fusion + FP16 |
| TensorRT | INT8 | 0.9 | 1111 | 0.6 | SmoothQuant-calibrated |
| CoreML (ANE) | FP16 | 2.8 | 357 | 0.7 | M2 Ultra, fixed shape |
| WebGPU (ONNX) | FP16 | 5.1 | 196 | 1.2 | Chrome, shader compile excluded |
| WebLLM | INT4 | 22.0 | 45 | 0.5 | Llama-1B, browser |

TensorRT FP16 gives 3x the throughput of eager PyTorch at half the memory. INT8 with SmoothQuant calibration gets another 1.5x but requires a representative calibration set and may lose 0.5-1% accuracy on perplexity benchmarks.

## Ship It

Save as `outputs/deployment-benchmark.py`. The script takes a model name and a list of backends (`onnx`, `tensorrt`, `coreml`, `webgpu`), runs each backend with a warmup+measure cycle, and prints a latency/throughput/memory table sorted by throughput descending.

## Exercises

1. **Easy.** Export a 2-layer GPT-2 (from Hugging Face) to ONNX with dynamic batch and sequence axes. Run inference via onnxruntime CUDA provider and verify logits match PyTorch within 1e-3.
2. **Medium.** Build a TensorRT engine for the ONNX export above with FP16 and an optimization profile spanning sequence lengths 8-512. Report the engine size, build time, and inference latency vs. ONNX Runtime for batch sizes 1, 4, and 8.
3. **Hard.** Deploy a 1-2B parameter LLM to a browser via WebLLM. Measure first-token latency, generation rate, and GPU memory pressure. Compare the same quantized model running via Ollama on the same machine's native GPU.

## Key Terms

| Term | What people say | What it actually means |
|------|-----------------|-----------------------|
| ONNX | "Portable model format" | Protobuf-serialized computation graph with typed tensors and operator versioning. |
| TensorRT | "NVIDIA inference engine" | Closed-source graph compiler that fuses, quantizes, and kernel-tunes for CUDA GPUs. |
| CoreML | "Apple model format" | `.mlpackage` bundle with model, metadata, and neural engine execution spec. |
| WebGPU | "Browser GPU API" | Vulkan/Metal/D3D12 abstraction for compute shaders in the browser, no extension required. |
| Engine | "Optimized model binary" | Hardware-specific serialization of the fused, quantized, kernel-tuned graph. |
| Calibration | "INT8 tuning step" | Running a representative dataset through the FP32 model to compute per-tensor quantization scales. |
| ANE | "Apple Neural Engine" | Dedicated NPU in Apple Silicon for low-power neural network inference. |

## Further Reading

- [ONNX Runtime docs: PyTorch export](https://pytorch.org/docs/stable/onnx.html) — the canonical `torch.onnx.export` reference with operator coverage tables.
- [TensorRT Developer Guide](https://docs.nvidia.com/deeplearning/tensorrt/) — builder config, network definitions, and plugin API.
- [coremltools conversion guide](https://coremltools.readme.io/docs/pytorch-conversion) — PyTorch to CoreML with compute unit selection.
- [ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/) — browser inference with WebGL, WebGPU, and WASM backends.
- [WebLLM MLC Engine](https://llm.mlc.ai/docs/) — browser-native LLM with WebGPU compute and sharded cache.
- [TensorRT Model Optimizer](https://github.com/NVIDIA/TensorRT-Model-Optimizer) — INT8/FP4 quantization with SmoothQuant and AWQ calibration.
