# Chapter 1: Introduction to Applied AI

## Learning Objectives

After completing this chapter, you will be able to:
- Distinguish between theoretical ML and production AI engineering
- Choose the right tool (LangChain, OpenCV, GenAI) for a given problem
- Set up a Python environment for applied AI development
- Understand the production AI stack from data ingestion to deployment
- Follow responsible AI best practices

## 1.1 Theoretical ML vs Applied AI

Academic ML focuses on model architecture, loss functions, and benchmark scores. Applied AI focuses on:

```python
applied_ai_concerns = [
    "Latency: model must respond in <200ms",
    "Cost: inference budget of $0.001 per prediction",
    "Data: training data is noisy, sparse, and shifts over time",
    "Monitoring: accuracy drops 5% per month without retraining",
    "Integration: model output must feed into a REST API or Kafka topic",
]
```

The difference is the same as designing a jet engine vs flying a commercial airline. Applied AI engineers make models work reliably in production, at scale, under real-world constraints.

## 1.2 The Production AI Stack

![Production AI Stack](../assets/images/diagrams/applied-ai/ch01-production-ai-stack.png)

## 1.3 When to Use Which Tool

![Tool Selection Flowchart](../assets/images/diagrams/applied-ai/ch01-tool-selection.png)

```python
def recommend_tool(problem_description: str) -> str:
    keywords = {
        "langchain": ["LLM", "RAG", "agent", "chain", "OpenAI", "GPT",
                      "conversation", "document QA", "chatbot"],
        "opencv": ["image", "video", "face", "object detection",
                   "camera", "frame", "pixel"],
        "generative": ["GAN", "diffusion", "image generation",
                       "style transfer", "text-to-image"],
    }

    for tool, signals in keywords.items():
        if any(s.lower() in problem_description.lower() for s in signals):
            return tool
    return "sklearn / XGBoost / standard ML"

tests = [
    "Build a chatbot that answers questions from our knowledge base",
    "Detect faces in real-time video from security cameras",
    "Generate product images from text descriptions",
]
for t in tests:
    print(f"{t} → {recommend_tool(t)}")
```

## 1.4 Environment Setup

```bash
# Conda environment for applied AI
conda create -n applied-ai python=3.11
conda activate applied-ai

# Core libraries
pip install langchain langchain-community langchain-openai
pip install opencv-python opencv-contrib-python
pip install torch torchvision
pip install diffusers transformers accelerate
pip install fastapi uvicorn pydantic

# Vector store for RAG
pip install chromadb

# Visualization
pip install matplotlib jupyter
```

## 1.5 Responsible AI Checklist

```python
responsible_ai = {
    "Fairness": "Evaluate model performance across demographic groups",
    "Transparency": "Document model limitations, training data, and expected accuracy",
    "Privacy": "Do not send sensitive data to third-party APIs without anonymization",
    "Robustness": "Test with adversarial examples and edge cases",
    "Accountability": "Log all predictions with input/output pairs for audit",
}

for principle, guideline in responsible_ai.items():
    print(f"{principle}: {guideline}")
```

## 1.6 Tool-Specific Quick Start

### LangChain Quick Start

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
response = llm.invoke([HumanMessage(content="Explain applied AI in 10 words")])
print(response.content)
```

### OpenCV Quick Start

```python
import cv2
import numpy as np

img = np.zeros((300, 300, 3), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (250, 250), (0, 255, 0), 2)
cv2.putText(img, "OpenCV Ready", (60, 280), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
cv2.imwrite("output/test.png", img)
print("OpenCV test image created")
```

### Generative AI Quick Start

```python
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
)
pipe = pipe.to("cuda")

prompt = "A photo of a cat wearing a spacesuit, high quality"
image = pipe(prompt, num_inference_steps=30).images[0]
image.save("output/cat_astronaut.png")
```

## 1.7 Course Roadmap

| Chapter | Tool | What You Will Build |
|---------|------|---------------------|
| 02 | LangChain | RAG chatbot with vector search, document QA, agent with tools |
| 03 | OpenCV | Face detection pipeline, image filter app, video processing |
| 04 | Generative AI | Text-to-image, image-to-image, style transfer demo |

Each chapter contains complete, runnable code. All examples target Python 3.11.

## Summary

- Applied AI is about making models work in production, not just on benchmarks.
- The production AI stack spans data → infrastructure → serving → application layers.
- Choose LangChain for LLM tasks, OpenCV for vision tasks, and generative models for content creation.
- Responsible AI (fairness, transparency, privacy, robustness, accountability) is non-negotiable in production.
- Each chapter in this course builds a complete, deployable project.

## Exercises

1. Install all dependencies and run the three quick-start snippets above. Verify they produce output.
2. For each of the following problems, recommend the right tool: (a) summarize 1000 customer reviews, (b) detect parking lot occupancy from CCTV, (c) generate synthetic product photos.
3. Add a fourth quick-start example for a tool of your choice (e.g., Whisper for speech-to-text, TTS, or CLIP).
4. Set up a FastAPI app with three endpoints that each call one of the three tools from this chapter.
