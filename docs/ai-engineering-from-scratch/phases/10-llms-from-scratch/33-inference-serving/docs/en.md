# Inference Serving -- TensorRT-LLM, Triton Inference Server

> A trained LLM is not a product. It is a lump of weights on a disk. Inference serving is the layer that turns those weights into a reliable, low-latency API.

**Type:** Learn
**Languages:** Python
**Prerequisites:** Phase 10 . 11 (Quantization), Phase 10 . 12 (Inference Optimization), Phase 10 . 31 (Continuous Batching), Phase 10 . 27 (Tensor Parallelism)
**Time:** ~50 minutes

## Learning Objectives

- Diagram the production inference stack from GPU to HTTP response
- Build a TensorRT-LLM engine from a HuggingFace checkpoint with quantization
- Configure Triton Inference Server for streaming LLM inference
- Serve a model behind an OpenAI-compatible API endpoint
- Choose a scaling strategy for throughput and latency targets

## The Problem

A single GPU serving one LLM request wastes 90+ percent of compute cycles waiting on memory bandwidth during decode. The production stack solves three subproblems: (1) batching across concurrent requests to amortize memory reads, (2) managing the KV cache as a finite fragmented heap, and (3) exposing this through an OpenAI-compatible API so the rest of the stack treats the server as a drop-in replacement.

## The Concept

The stack has four layers:

```
HTTP client (OpenAI SDK, curl, LangChain)
    |
OpenAI-compatible API adapter (Triton Python backend)
    |
Triton Inference Server (model repository, scheduler, instances)
    |
TensorRT-LLM runtime (engine, inflight batching, KV cache manager, plugins)
    |
GPU(s) -- tensor-parallel across devices
```

**TensorRT-LLM** converts a trained model into an engine file: a serialized CUDA kernel plan with fused layer boundaries and baked-in quantization scales. The builder runs once offline. **Triton Inference Server** owns the request lifecycle; its decoupled backend API makes streaming work by sending tokens asynchronously while holding the HTTP connection open. **Inflight batching** preempts finished sequences mid-step and inserts new ones, eliminating idle GPU cycles. The **KV cache manager** allocates blocks from a shared pool with paged KV cache (virtual pages mapped to physical blocks). The **plugin system** registers custom CUDA kernels (flash attention, fused MoE, quantized gemm) at engine-build time.

## Build It

```python
# Step 1 -- build a TensorRT-LLM engine (run once offline).
import tensorrt_llm
from tensorrt_llm.builder import Builder, BuildConfig
from tensorrt_llm.quantization import QuantConfig
builder = Builder()
build_config = BuildConfig(
    max_input_len=4096, max_output_len=2048,
    max_batch_size=64, tensor_parallel=1,
    dtype="bfloat16",
    quant_config=QuantConfig(quant_algo="FP8"),
    plugins=["flash_attention", "gemm_plugin"],
    use_paged_kv_cache=True, kv_cache_block_size=128,
)
builder.build(model_dir="meta-llama/Llama-3.1-8B",
              build_config=build_config, output_dir="engines/llama-8b")

# Step 2 -- Triton config.pbtxt (config in model_repository/trtllm_llama/1/).
# name: "trtllm_llama"  backend: "tensorrtllm"  max_batch_size: 64
# instance_group [ { count: 2  kind: KIND_GPU  gpus: [0, 1] } ]
# parameters [
#   { key: "gpt_model_type"            value: { string_value: "inflight_batching" }},
#   { key: "gpt_model_path"            value: { string_value: "/models/llama-8b" }},
#   { key: "gpt_enable_kv_cache_reuse" value: { string_value: "true" }},
# ]
# input  [ { name: "input_ids"  data_type: TYPE_INT32  dims: [-1] },
#          { name: "input_lengths" data_type: TYPE_INT32 dims: [1] },
#          { name: "request_output_len" data_type: TYPE_INT32 dims: [1] } ]
# output [ { name: "output_ids" data_type: TYPE_INT32 dims: [-1, -1] } ]

# Step 3 -- decoupled Python backend for streaming.
import triton_python_backend_utils as pb_utils
class TritonPythonModel:
    def initialize(self, args):
        self.model_name = "trtllm_llama"
    def execute(self, requests):
        for request in requests:
            input_text = pb_utils.get_input_tensor_by_name(request, "text").as_numpy()[0].decode()
            infer_request = pb_utils.InferenceRequest(
                model_name=self.model_name,
                inputs=[pb_utils.Tensor("input_ids", [101, 2054, ...]),
                        pb_utils.Tensor("input_lengths", [4]),
                        pb_utils.Tensor("request_output_len", [2048])],
            )
            infer_response = infer_request.exec(decoupled=True)
            for token_id in self._decode_stream(infer_response):
                resp = pb_utils.InferenceResponse(
                    output_tensors=[pb_utils.Tensor("token", [token_id])])
                request.send_response(resp, flags=False)
            request.send_response(None, flags=True)
    def _decode_stream(self, response):
        while True:
            result = response.get_stream_data()
            if result.is_final:
                break
            for token in result.output_ids[0]:
                yield token
```

## Use It

```python
from openai import OpenAI
client = OpenAI(base_url="http://inference-cluster:8000/v1", api_key="not-used")
stream = client.chat.completions.create(
    model="trtllm_llama",
    messages=[{"role": "user", "content": "Explain KV cache."}],
    max_tokens=512, temperature=0.7, stream=True)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")
```

The `/v1` adapter translates OpenAI schema to Triton's Tensor format so agents work without changes.

## Ship It

| Decision | Options | Trade-off |
|----------|---------|-----------|
| Instances | One large GPU vs N smaller | N smaller: better utilization under spiky load, more network overhead. |
| GPU sched | Triton instance_group count | Two instances on one GPU share memory but compete for compute. |
| Batching | Static vs inflight | Inflight is strictly better for LLM decode. |
| KV cache | Paged, block 64 or 128 | Larger blocks: less fragmentation but waste on short sequences. |
| Autoscale | HPA on GPU util vs queue depth | Queue depth is leading. Target 2-4 enqueued per replica. |

**Critical metric: ITL (inter-token latency).** If ITL exceeds 50ms the UX feels choppy. Find the batch size that keeps ITL under 50ms at P99.

## Exercises

1. **Easy.** L40S GPU (48 GB), 7B model FP8 (14 GB). How many concurrent 4096-token sequences fit with 128-token block KV cache (64 bytes per key-value per layer)? State the bottleneck.
2. **Medium.** Triton reports 35 percent GPU utilization with 8 sequences in flight. Propose three changes to increase utilization and state which metric degrades as secondary effect.
3. **Hard.** Design multi-region Triton failover with zero client-visible state loss for in-flight streaming. What must the adapter and KV cache proxy do?

## Key Terms

| Term | What it actually means |
|------|------------------------|
| Engine | Serialized CUDA kernel plan with fused layers and baked-in quantization. |
| Inflight batching | Preempt finished sequences mid-step; no wait for full batch completion. |
| Decoupled API | Backend emits multiple responses per request; HTTP stays open. |
| Paged KV cache | Blocks indexed by page table; fragmentation-free allocation. |
| ITL | Wall-clock delay between consecutive decode tokens; the streaming UX metric. |

## Further Reading

- [TensorRT-LLM documentation](https://nvidia.github.io/TensorRT-LLM/) -- architecture guide, plugin catalog, tuning recipes.
- [Triton Inference Server documentation](https://github.com/triton-inference-server/server) -- model repository format, backends, metrics.
- [Kwon et al. (2023). Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180) -- the paged KV cache paper.
- [Yu et al. (2022). Orca: A Distributed Serving System for Transformer-Based Generative Models](https://www.usenix.org/conference/osdi22/presentation/yu) -- original inflight batching paper.
- [Zhong et al. (2024). DistServe: Disaggregating Prefill and Decode for Better](https://arxiv.org/abs/2401.09670) -- separating prefill and decode onto different GPU pools.
