<!-- Clear Language: Keep sentences under 50 words -->
# LLM APIs

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Integrate with OpenAI, Anthropic, and Google Gemini APIs using Python |
| LO2 | Implement streaming responses for real-time user experiences |
| LO3 | Handle rate limits, retries, and API errors gracefully |
| LO4 | Manage API keys securely using environment variables and secret managers |
| LO5 | Build cost-tracked API wrappers with logging and monitoring |
| LO6 | Compare API design patterns across providers and abstract them into a unified interface |

## Introduction

Large language models are transforming every industry. Understanding how to prompt, evaluate, and optimize LLMs is a critical skill for AI engineers. This module covers the full LLM lifecycle from API calls to cost optimization.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding llm apis is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how llm apis works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | API Basics | Authentication, endpoints, request/response structure |
| 2.2 | OpenAI API | Chat completions, messages, parameters, token usage |
| 2.3 | Anthropic API | Messages format, system prompts, thinking mode |
| 2.4 | Google Gemini API | Content generation, safety settings, model tuning |
| 2.5 | Streaming | Server-Sent Events, real-time token delivery |
| 2.6 | Error Handling & Retries | Rate limits, backoff, circuit breakers |
| 2.7 | Unified API Wrapper | Abstract interface across providers |

## Chapter Roadmap

```mermaid
flowchart LR
    A[API Key Management] --> B[Provider Selection]
    B --> C[OpenAI API]
    B --> D[Anthropic API]
    B --> E[Gemini API]
    C --> F[Request Construction]
    D --> F
    E --> F
    F --> G[Streaming / Non-Streaming]
    G --> H[Response Parsing]
    H --> I[Error Handling]
    I --> J[Retry Logic]
    J --> K[Cost Tracking & Logging]
```

## 2.1 API Basics

LLM APIs follow a consistent pattern: authenticate with an API key, send a request with messages and parameters, receive a response with generated text and usage metadata.

**Authentication**: API keys are passed via HTTP headers:

```python
import os
from openai import OpenAI

## Never hardcode keys — use environment variables
api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not set")

client = OpenAI(api_key=api_key)
```

**Request structure** includes model selection, messages, and parameters:

```python
response = client.chat.completions.create(
    model="gpt-4o",           # Model identifier
    messages=[                 # Conversation history
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the capital of France?"}
    ],
    temperature=0.7,           # Randomness (0-2)
    max_tokens=500,            # Maximum output length
    top_p=0.9,                 # Nucleus sampling
    frequency_penalty=0,       # Reduce repetition
    presence_penalty=0         # Encourage new topics
)
```

**Response structure** includes the generated message and usage:

```python
message = response.choices[0].message
print(f"Response: {message.content}")
print(f"Role: {message.role}")

## Token usage tracking
usage = response.usage
print(f"Prompt tokens: {usage.prompt_tokens}")
print(f"Completion tokens: {usage.completion_tokens}")
print(f"Total tokens: {usage.total_tokens}")

## Common pricing (per 1K tokens)
OPENAI_PRICING = {
    "gpt-4o":       {"input": 0.0025, "output": 0.01},
    "gpt-4o-mini":  {"input": 0.00015, "output": 0.0006},
    "gpt-4-turbo":  {"input": 0.01, "output": 0.03},
}

def calculate_cost(model, prompt_tokens, completion_tokens):
    pricing = OPENAI_PRICING.get(model)
    if not pricing:
        return 0
    cost = (prompt_tokens / 1000) * pricing["input"]
    cost += (completion_tokens / 1000) * pricing["output"]
    return cost

cost = calculate_cost("gpt-4o", response.usage.prompt_tokens, response.usage.completion_tokens)
print(f"Request cost: ${cost:.6f}")
```

**Secure key management** using environment files:

```python

## .env file (never commit to git)

## OPENAI_API_KEY=sk-...

## ANTHROPIC_API_KEY=sk-ant-...

## GEMINI_API_KEY=AIza...

## .gitignore

## .env

## Load securely
from dotenv import load_dotenv
load_dotenv()

## Or use Python's built-in approach
import os
assert os.environ.get("OPENAI_API_KEY"), "Missing API key"
```

```mermaid
flowchart TD
    A[Application] -->|API Key + Request| B[LLM API Gateway]
    B --> C{Authentication}
    C -->|Invalid Key| D[401 Unauthorized]
    C -->|Valid Key| E[Rate Limit Check]
    E -->|Exceeded| F[429 Too Many Requests]
    E -->|OK| G[Model Inference]
    G --> H[Response + Usage Stats]
    H --> A
```

---

## 2.2 OpenAI API

The OpenAI Python SDK provides the most widely-used interface for LLM APIs.

**Chat completions** with message history:

```python
from openai import OpenAI

client = OpenAI()

def chat_with_history(messages, model="gpt-4o"):
    """Send a conversation with history to OpenAI."""
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        temperature=0.7,
        max_tokens=1024
    )
    return response

## Multi-turn conversation
conversation = [
    {"role": "system", "content": "You are a Python tutor. Be concise and provide code examples."},
    {"role": "user", "content": "What is a decorator?"},
]

resp1 = chat_with_history(conversation)
conversation.append({"role": "assistant", "content": resp1.choices[0].message.content})
conversation.append({"role": "user", "content": "Show me a practical example with @timer"})

resp2 = chat_with_history(conversation)
print(resp2.choices[0].message.content)
```

**JSON mode** for structured output:

```python
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "Extract the information as JSON with fields: name, age, city, occupation."},
        {"role": "user", "content": "John is a 32-year-old software engineer from San Francisco."}
    ],
    response_format={"type": "json_object"},
    temperature=0
)

import json
data = json.loads(response.choices[0].message.content)
print(data)

## {'name': 'John', 'age': 32, 'city': 'San Francisco', 'occupation': 'software engineer'}
```

**Function calling** for tool integration:

```python
def get_weather(city: str) -> str:
    """Mock weather function."""
    weather_data = {
        "Tokyo": "22°C, partly cloudy",
        "London": "15°C, light rain",
        "New York": "28°C, sunny"
    }
    return weather_data.get(city, "Weather data not available")

tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {"type": "string", "description": "City name"}
                },
                "required": ["city"]
            }
        }
    }
]

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "What's the weather in Tokyo?"}],
    tools=tools,
    tool_choice="auto"
)

## Execute function call
tool_call = response.choices[0].message.tool_calls[0]
if tool_call.function.name == "get_weather":
    args = json.loads(tool_call.function.arguments)
    result = get_weather(**args)
    print(f"Weather in {args['city']}: {result}")
```

**Token counting** before sending:

```python
import tiktoken

def count_tokens(text: str, model: str = "gpt-4o") -> int:
    """Count tokens in a text string for a given model."""
    encoding = tiktoken.encoding_for_model(model)
    tokens = encoding.encode(text)
    return len(tokens)

def estimate_cost(messages, model="gpt-4o"):
    """Estimate cost before sending a request."""
    total_input = 0
    for msg in messages:
        total_input += count_tokens(msg["content"], model)

    pricing = OPENAI_PRICING[model]
    input_cost = (total_input / 1000) * pricing["input"]
    # Estimate output (typically ~2x input for chat)
    estimated_output = total_input * 2
    output_cost = (estimated_output / 1000) * pricing["output"]

    return {
        "input_tokens": total_input,
        "estimated_output": estimated_output,
        "estimated_cost": input_cost + output_cost
    }

messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Write a detailed explanation of quantum computing."}
]
estimate = estimate_cost(messages)
print(f"Estimated cost: ${estimate['estimated_cost']:.6f}")
```

```mermaid
flowchart TD
    A[User Input] --> B[Tokenize with tiktoken]
    B --> C[Build Messages Array]
    C --> D[Select Model & Parameters]
    D --> E[POST /v1/chat/completions]
    E --> F{API Response}
    F -->|200 OK| G[Parse Response]
    F -->|Error| H[Handle Error]
    G --> I[Extract Message]
    G --> J[Extract Usage]
    J --> K[Track Cost]
```

---

## 2.3 Anthropic API

Anthropic's API uses a different message format with dedicated system prompt support.

**Basic usage**:

```python
from anthropic import Anthropic

client = Anthropic()

response = client.messages.create(
    model="claude-3-sonnet-20241022",
    max_tokens=1024,
    system="You are an expert AI engineer. Provide detailed technical answers.",
    messages=[
        {"role": "user", "content": "Explain the difference between TCP and UDP."}
    ]
)

print(response.content[0].text)
print(f"Input tokens: {response.usage.input_tokens}")
print(f"Output tokens: {response.usage.output_tokens}")
```

**Multi-turn conversations**:

```python
def claude_conversation(messages, system_prompt="You are helpful."):
    """Wrapper for Claude API calls."""
    response = client.messages.create(
        model="claude-3-sonnet-20241022",
        max_tokens=1024,
        system=system_prompt,
        messages=messages
    )
    return response

## Building a conversation
history = [
    {"role": "user", "content": "What is the capital of Japan?"},
    {"role": "assistant", "content": "The capital of Japan is Tokyo."},
    {"role": "user", "content": "What is its population?"},
]

resp = claude_conversation(history)
print(resp.content[0].text)
```

**Claude's extended thinking** for complex reasoning:

```python
from anthropic.types import ThinkingConfigEnabled

response = client.messages.create(
    model="claude-3-sonnet-20241022",
    max_tokens=4096,
    thinking=ThinkingConfigEnabled(
        type="enabled",
        budget_tokens=2048
    ),
    messages=[
        {"role": "user", "content": "Solve this step by step: A farmer has 17 cows. All but 9 die. How many cows does the farmer have left?"}
    ]
)

## Extended thinking block
for block in response.content:
    if block.type == "thinking":
        print("Thinking:", block.thinking)
    elif block.type == "text":
        print("Answer:", block.text)
```

**Image understanding** with Claude:

```python
import base64

with open("diagram.png", "rb") as f:
    image_data = base64.b64encode(f.read()).decode()

response = client.messages.create(
    model="claude-3-sonnet-20241022",
    max_tokens=500,
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Explain this system architecture diagram."},
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data
                    }
                }
            ]
        }
    ]
)

print(response.content[0].text)
```

```mermaid
flowchart LR
    A[Anthropic SDK] --> B{Message Type}
    B -->|Text| C[Text Content Block]
    B -->|Image| D[Image Content Block]
    B -->|Thinking| E[Thinking Config]
    C --> F[Messages API]
    D --> F
    E --> F
    F --> G[Response]
    G --> H[Content Blocks List]
    H --> I[Extract Text / Thinking]
```

---

## 2.4 Google Gemini API

Gemini uses a different paradigm with content-based generation.

**Basic usage**:

```python
import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel("gemini-1.5-pro")
response = model.generate_content(
    "Explain the concept of attention in transformers.",
    generation_config={
        "temperature": 0.7,
        "max_output_tokens": 500,
        "top_p": 0.95,
        "top_k": 40
    }
)

print(response.text)

## Safety ratings
for rating in response.prompt_feedback.safety_ratings:
    print(f"{rating.category}: {rating.probability}")
```

**Chat sessions** for multi-turn:

```python
chat = model.start_chat(history=[])

response = chat.send_message("What is Python?")
print(response.text)

response = chat.send_message("What are its main use cases?")
print(response.text)

## Access full history
for entry in chat.history:
    print(f"{entry.role}: {entry.parts[0].text[:50]}...")
```

**Multimodal input**:

```python
import PIL.Image

image = PIL.Image.open("architecture.png")
prompt = "Describe this architecture diagram in detail."

response = model.generate_content([prompt, image])
print(response.text)
```

**Safety settings** customization:

```python
from google.generativeai.types import HarmCategory, HarmBlockThreshold

model = genai.GenerativeModel(
    "gemini-1.5-pro",
    safety_settings={
        HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    }
)

response = model.generate_content("Tell me about historical warfare tactics.")
print(response.text)
```

```mermaid
flowchart TD
    A[Gemini SDK] --> B[GenerativeModel]
    B --> C{Generation Mode}
    C -->|Single| D[generate_content]
    C -->|Multi-turn| E[start_chat]
    C -->|Stream| F[generate_content_async]
    D --> G[GenerateContentResponse]
    E --> H[ChatSession]
    H --> I[send_message]
    G --> J[Extract Text]
    G --> K[Safety Feedback]
    G --> L[Usage Metadata]
```

---

## 2.5 Streaming

Streaming delivers tokens one at a time via Server-Sent Events (SSE), enabling real-time display.

**OpenAI streaming**:

```python
from openai import OpenAI

client = OpenAI()

stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Write a poem about AI."}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="", flush=True)
    # Last chunk has usage info
    if chunk.choices[0].finish_reason == "stop":
        print(f"\n\nReason: {chunk.choices[0].finish_reason}")
```

**Anthropic streaming**:

```python
from anthropic import Anthropic

client = Anthropic()

with client.messages.stream(
    model="claude-3-sonnet-20241022",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain quantum computing in simple terms."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

**Gemini streaming**:

```python
model = genai.GenerativeModel("gemini-1.5-pro")
response = model.generate_content(
    "Tell me a story about a robot learning to paint.",
    stream=True
)

for chunk in response:
    print(chunk.text, end="", flush=True)
```

**Building a streaming proxy**:

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from openai import OpenAI
import asyncio

app = FastAPI()
client = OpenAI()

async def stream_llm_response(messages):
    """Async generator for streaming LLM response."""
    stream = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        stream=True
    )

    for chunk in stream:
        if chunk.choices[0].delta.content:
            yield f"data: {chunk.choices[0].delta.content}\n\n"
        await asyncio.sleep(0)

@app.post("/chat/stream")
async def chat_stream(messages: list):
    return StreamingResponse(
        stream_llm_response(messages),
        media_type="text/event-stream"
    )

## Client-side

## fetch('/chat/stream', { method: 'POST', body: JSON.stringify(messages) })

##   .then(response => {

##     const reader = response.body.getReader();

##     // Read chunks incrementally

##   })
```

```mermaid
flowchart LR
    A[Client] -->|POST /chat/stream| B[FastAPI Proxy]
    B --> C[OpenAI Streaming API]
    C -->|Token 1| B
    C -->|Token 2| B
    C -->|Token N| B
    B -->|SSE: data: token\n\n| A
    A -->[Update UI Incrementally]
```

---

## 2.6 Error Handling & Retries

Robust production code must handle API errors gracefully.

**Common error types**:

```python
from openai import (
    APIConnectionError,
    RateLimitError,
    APITimeoutError,
    BadRequestError,
    AuthenticationError
)
import time

def safe_api_call(client, messages, model="gpt-4o", max_retries=3):
    """Robust API call with exponential backoff."""
    last_error = None

    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model=model,
                messages=messages,
                timeout=30
            )
            return response

        except RateLimitError as e:
            wait = min(2 ** attempt * 5, 60)
            print(f"Rate limited. Waiting {wait}s (attempt {attempt + 1})")
            time.sleep(wait)
            last_error = e

        except APITimeoutError as e:
            wait = 2 ** attempt
            print(f"Timeout. Retrying in {wait}s (attempt {attempt + 1})")
            time.sleep(wait)
            last_error = e

        except APIConnectionError as e:
            wait = 5 * (attempt + 1)
            print(f"Connection error. Retrying in {wait}s")
            time.sleep(wait)
            last_error = e

        except BadRequestError as e:
            print(f"Bad request (likely too many tokens): {e}")
            raise  # Don't retry client errors

        except AuthenticationError as e:
            print(f"Authentication failed: {e}")
            raise  # Don't retry auth errors

    raise Exception(f"All {max_retries} attempts failed. Last error: {last_error}")
```

**Circuit breaker pattern** for preventing cascading failures:

```python
import datetime

class CircuitBreaker:
    """Circuit breaker for API calls."""

    def __init__(self, failure_threshold=5, recovery_timeout=60):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failure_count = 0
        self.last_failure_time = None
        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN

    def call(self, func, *args, **kwargs):
        if self.state == "OPEN":
            if (datetime.datetime.now() - self.last_failure_time).seconds > self.recovery_timeout:
                self.state = "HALF_OPEN"
                print("Circuit half-open — trying request")
            else:
                raise Exception("Circuit breaker OPEN — request blocked")

        try:
            result = func(*args, **kwargs)
            if self.state == "HALF_OPEN":
                self.state = "CLOSED"
                self.failure_count = 0
                print("Circuit closed — recovery successful")
            return result

        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = datetime.datetime.now()
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
                print(f"Circuit OPEN — {self.failure_count} failures")
            raise e

breaker = CircuitBreaker(failure_threshold=3, recovery_timeout=30)

def make_request():
    return safe_api_call(client, [{"role": "user", "content": "Hello"}])

## for i in range(10):

##     try:

##         result = breaker.call(make_request)

##     except Exception as e:

##         print(f"Request {i} failed: {e}")
```

**Rate limit handling with token bucket**:

```python
import time
from collections import deque

class TokenBucket:
    """Token bucket rate limiter."""

    def __init__(self, tokens_per_minute=5000, max_burst=500):
        self.rate = tokens_per_minute / 60.0  # tokens per second
        self.max_burst = max_burst
        self.tokens = max_burst
        self.last_refill = time.time()

    def consume(self, tokens=1):
        """Wait until tokens are available, then consume them."""
        while True:
            self._refill()
            if self.tokens >= tokens:
                self.tokens -= tokens
                return
            sleep_time = (tokens - self.tokens) / self.rate
            time.sleep(min(sleep_time, 0.1))

    def _refill(self):
        now = time.time()
        elapsed = now - self.last_refill
        self.tokens = min(self.max_burst, self.tokens + elapsed * self.rate)
        self.last_refill = now

## Usage
rate_limiter = TokenBucket(tokens_per_minute=5000, max_burst=500)

def rate_limited_api_call(client, messages):
    rate_limiter.consume(1)  # Consume 1 token per request
    return safe_api_call(client, messages)

## for i in range(100):

##     response = rate_limited_api_call(client, messages)
```

```mermaid
flowchart TD
    A[API Request] --> B{Circuit Breaker State}
    B -->|OPEN| C[Block Request]
    B -->|CLOSED| D{Token Bucket}
    B -->|HALF_OPEN| D
    D -->|Has Tokens| E[Send Request]
    D -->|No Tokens| F[Wait for Refill]
    E --> G{Response}
    G -->|200 OK| H[Return Response]
    G -->|429| I[Backoff & Retry]
    G -->|5xx| J[Check Retry Count]
    J -->|Retries Left| I
    J -->|Exhausted| K[Raise Error]
    I --> E
```

---

## 2.7 Unified API Wrapper

Abstracting across providers enables switching without code changes.

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Optional

@dataclass
class LLMResponse:
    content: str
    input_tokens: int
    output_tokens: int
    model: str
    provider: str
    latency_ms: float

class LLMProvider(ABC):
    @abstractmethod
    def generate(
        self,
        messages: list,
        temperature: float = 0.7,
        max_tokens: int = 1024,
        stream: bool = False
    ) -> LLMResponse:
        pass

    @abstractmethod
    def count_tokens(self, text: str) -> int:
        pass

class OpenAIProvider(LLMProvider):
    def __init__(self, model="gpt-4o"):
        self.client = OpenAI()
        self.model = model
        import tiktoken
        self.encoding = tiktoken.encoding_for_model(model)

    def generate(self, messages, temperature=0.7, max_tokens=1024, stream=False):
        import time
        start = time.time()
        response = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            temperature=temperature,
            max_tokens=max_tokens,
            stream=stream
        )
        latency = (time.time() - start) * 1000

        if stream:
            content = ""
            for chunk in response:
                if chunk.choices[0].delta.content:
                    content += chunk.choices[0].delta.content
            return LLMResponse(
                content=content,
                input_tokens=0,  # Streaming doesn't return usage
                output_tokens=0,
                model=self.model,
                provider="openai",
                latency_ms=latency
            )

        return LLMResponse(
            content=response.choices[0].message.content,
            input_tokens=response.usage.prompt_tokens,
            output_tokens=response.usage.completion_tokens,
            model=self.model,
            provider="openai",
            latency_ms=latency
        )

    def count_tokens(self, text):
        return len(self.encoding.encode(text))

class AnthropicProvider(LLMProvider):
    def __init__(self, model="claude-3-sonnet-20241022"):
        self.client = Anthropic()
        self.model = model

    def generate(self, messages, temperature=0.7, max_tokens=1024, stream=False):
        import time
        start = time.time()

        # Separate system prompt if present
        system = ""
        filtered_messages = []
        for msg in messages:
            if msg["role"] == "system":
                system += msg["content"] + "\n"
            else:
                filtered_messages.append(msg)

        response = self.client.messages.create(
            model=self.model,
            max_tokens=max_tokens,
            system=system.strip(),
            messages=filtered_messages
        )
        latency = (time.time() - start) * 1000

        return LLMResponse(
            content=response.content[0].text,
            input_tokens=response.usage.input_tokens,
            output_tokens=response.usage.output_tokens,
            model=self.model,
            provider="anthropic",
            latency_ms=latency
        )

    def count_tokens(self, text):
        # Anthropic doesn't provide a public tokenizer
        # Estimate: ~4 chars per token
        return len(text) // 4

class LLMRouter:
    """Route requests to optimal provider based on task."""

    def __init__(self):
        self.providers = {
            "openai": OpenAIProvider("gpt-4o"),
            "openai-cheap": OpenAIProvider("gpt-4o-mini"),
            "anthropic": AnthropicProvider("claude-3-sonnet-20241022"),
        }

    def route(self, messages, preferred_provider="openai", temperature=0.7):
        provider = self.providers.get(preferred_provider, self.providers["openai"])
        return provider.generate(messages, temperature=temperature)

    def generate_all(self, messages):
        """Get responses from all providers for comparison."""
        results = {}
        for name, provider in self.providers.items():
            try:
                results[name] = provider.generate(messages)
            except Exception as e:
                results[name] = f"Error: {e}"
        return results

router = LLMRouter()
messages = [{"role": "user", "content": "What is the fastest bird?"}]
response = router.route(messages, "openai")
print(f"[{response.provider}] {response.content[:100]}...")
print(f"Cost: ${calculate_cost('gpt-4o', response.input_tokens, response.output_tokens):.6f}")
print(f"Latency: {response.latency_ms:.0f}ms")
```

```mermaid
flowchart TD
    A[Application Code] --> B[LLMRouter]
    B --> C{Provider Selection}
    C -->|Cost-optimized| D[OpenAIProvider]
    C -->|Reasoning| E[AnthropicProvider]
    C -->|Multimodal| F[GeminiProvider]
    D --> G[Unified LLMResponse]
    E --> G
    F --> G
    G --> H[Content + Usage + Latency]
```

---

## TypeScript Parallel

TypeScript LLM API wrappers leverage type safety and async/await:

```typescript
interface LLMConfig {
  provider: "openai" | "anthropic" | "gemini";
  apiKey: string;
  model: string;
}

interface LLMMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

async function callLLM(
  config: LLMConfig,
  messages: LLMMessage[],
  options?: { temperature?: number; maxTokens?: number }
): Promise<string> {
  const headers = { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" };
  const body = {
    model: config.model,
    messages,
    temperature: options?.temperature ?? 0.7,
    max_tokens: options?.maxTokens ?? 1024,
  };
  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST", headers, body: JSON.stringify(body),
  });
  const data = await res.json();
  return data.choices[0].message.content;
}
```

---

## Summary

- OpenAI API uses a messages array with system/user/assistant roles and returns usage statistics
- Anthropic API separates system prompts and supports extended thinking for complex reasoning
- Gemini API uses a content-based generation model with built-in safety settings
- Streaming delivers tokens incrementally via SSE for real-time user experiences
- Rate limits require exponential backoff with jitter for robust retry logic
- Circuit breaker patterns prevent cascading failures from API outages
- Token bucket algorithms smooth out request rates to stay within API limits
- Unified abstract providers allow switching LLM backends without application changes
- Cost tracking per request enables budget management and model selection optimization
- Secure key management via environment variables or secret managers is essential

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Production API calls | Implement retry with exponential backoff | Retrying immediately on rate limit |
| Real-time UI | Use streaming with Server-Sent Events | Waiting for full response |
| Multi-provider | Build abstract LLMProvider interface | Hardcoding provider SDK calls everywhere |
| Cost management | Track tokens per request and log costs | Using expensive models for simple tasks |
| Rate limits | Implement token bucket rate limiter | Sending requests as fast as possible |
| Error handling | Separate retryable from non-retryable errors | Retrying 400 BadRequest errors |

## Interview Q&A

<details class="tp-qa-card" data-qid="llm-s02-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How do you handle rate limiting when calling LLM APIs in production?
  </summary>
  <div class="tp-qa-answer">
    <p>Rate limiting is handled through multiple strategies:</p>
    <ol>
      <li><strong>Token bucket algorithm</strong>: Maintains a bucket of tokens that refills at a fixed rate. Each request consumes tokens. If tokens are depleted, requests wait.</li>
      <li><strong>Exponential backoff with jitter</strong>: On 429 responses, wait 2^attempt * base_delay seconds + random jitter</li>
      <li><strong>Queue-based processing</strong>: Use a message queue (Redis, SQS) to buffer and throttle requests</li>
      <li><strong>Circuit breaker</strong>: After N consecutive failures, stop sending requests for a recovery period</li>
    </ol>
    <p>Most providers also return Retry-After headers. Always respect these headers over client-side calculations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What is the difference between streaming and non-streaming API calls?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Non-streaming</strong>: The API returns the complete response after generation finishes. The client waits for the entire response before displaying anything. Time to first token is higher, but the response includes full usage metadata.</p>
    <p><strong>Streaming</strong>: The API returns tokens as they're generated via Server-Sent Events. The client can display tokens incrementally, providing a better user experience. However, usage metadata typically comes only in the final chunk.</p>
    <p>Use streaming for chat interfaces and real-time applications. Use non-streaming when you need accurate token counts immediately or when processing responses programmatically.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you securely manage LLM API keys in production?
  </summary>
  <div class="tp-qa-answer">
    <p>API key security follows these best practices:</p>
    <ul>
      <li><strong>Never hardcode</strong> keys in source code or commit them to version control</li>
      <li><strong>Environment variables</strong> for local development (.env files that are .gitignored)</li>
      <li><strong>Secret manager services</strong> in production (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault)</li>
      <li><strong>Key rotation</strong> — rotate keys regularly and use separate keys for development and production</li>
      <li><strong>Usage quotas</strong> — set spending limits in provider dashboards to prevent runaway costs</li>
      <li><strong>Restrict by IP/domain</strong> when possible in provider settings</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Explain the difference between OpenAI's function calling and Anthropic's tool use.
  </summary>
  <div class="tp-qa-answer">
    <p>Both achieve similar goals but with different API design:</p>
    <p><strong>OpenAI function calling</strong>:</p>
    <ul>
      <li>Define tools with JSON Schema in the request</li>
      <li>Model responds with tool_calls containing function name and arguments</li>
      <li>You execute the function and return the result in a "tool" role message</li>
      <li>tool_choice = "auto" lets the model decide; "required" forces a call</li>
    </ul>
    <p><strong>Anthropic tool use</strong>:</p>
    <ul>
      <li>Similar concept but uses "tool_use" content blocks in the response</li>
      <li>Tools can be defined inline in the request</li>
      <li>User provides tool_result content blocks for the next turn</li>
      <li>No separate "required" mode — uses auto by default</li>
    </ul>
    <p>The core pattern (model decides to call tool → you execute → feed back) is identical.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the purpose of the system message in LLM APIs?
  </summary>
  <div class="tp-qa-answer">
    <p>The system message sets the behavior and persona of the assistant. It's typically placed at the start of the conversation and persists throughout all turns:</p>
    <ul>
      <li>Defines the assistant's role, tone, and constraints</li>
      <li>Sets formatting preferences (e.g., "Respond in JSON")</li>
      <li>Establishes safety guardrails and content policies</li>
      <li>Provides context about the task or domain</li>
    </ul>
    <p>In OpenAI API, system messages are part of the messages array. In Anthropic API, system prompts are a separate parameter. System messages are more influential than user messages and should be used to shape model behavior consistently.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you track and optimize LLM API costs?
  </summary>
  <div class="tp-qa-answer">
    <p>Cost tracking involves multiple layers:</p>
    <ol>
      <li><strong>Per-request tracking</strong>: Log prompt_tokens, completion_tokens, model, and calculate cost from provider pricing</li>
      <li><strong>Aggregated dashboards</strong>: Use tools like LangSmith, Weights & Biases, or custom Grafana dashboards</li>
      <li><strong>Model routing</strong>: Route simple tasks to cheaper models (e.g., GPT-4o-mini for translation)</li>
      <li><strong>Prompt optimization</strong>: Shorter prompts = fewer tokens = lower cost</li>
      <li><strong>Caching</strong>: Cache identical requests (Redis, in-memory) to avoid redundant API calls</li>
      <li><strong>Budget alerts</strong>: Set provider-level spending limits and monitor with alerts</li>
    </ol>
    <p>Typical cost ratio: GPT-4o is ~40x more expensive than GPT-4o-mini for output tokens.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the JSON mode in OpenAI API and when would you use it?
  </summary>
  <div class="tp-qa-answer">
    <p>JSON mode ensures the model always returns valid JSON. Enabled by setting <code>response_format={"type": "json_object"}</code>:</p>
    <pre><code>response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "Extract data as JSON with fields: name, age."},
        {"role": "user", "content": "Alice is 30 years old."}
    ],
    response_format={"type": "json_object"}
)</code></pre>
    <p><strong>When to use</strong>: Extracting structured data, API response formatting, database inserts, function call arguments parsing. The system message must explicitly request JSON output — the model will error if not instructed to return JSON.</p>
    <p><strong>Limitation</strong>: The model may still return strings that don't match your expected schema even if they're valid JSON. Always validate with Pydantic or Zod after receiving.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How does Anthropic's extended thinking mode work?
  </summary>
  <div class="tp-qa-answer">
    <p>Extended thinking (or "thinking mode") allows Claude to reason step-by-step before generating a final answer. When enabled:</p>
    <ul>
      <li>Claude outputs a <code>thinking</code> content block with its internal reasoning</li>
      <li>This is followed by a <code>text</code> content block with the final answer</li>
      <li>You can set a budget for thinking tokens (e.g., budget_tokens=2048)</li>
      <li>Extended thinking improves performance on math, logic, and multi-step reasoning</li>
    </ul>
    <p>The thinking content is not visible to the end user by default (it's used internally or for debugging). This is similar to OpenAI's chain-of-thought but integrated at the API level rather than through prompting.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is tiktoken and why is it important for LLM API usage?
  </summary>
  <div class="tp-qa-answer">
    <p>tiktoken is OpenAI's fast tokenizer library. It's important because:</p>
    <ul>
      <li><strong>Cost estimation</strong>: Count tokens before sending to estimate API costs</li>
      <li><strong>Context window management</strong>: Ensure prompts fit within model limits (e.g., 128K for GPT-4o)</li>
      <li><strong>Truncation logic</strong>: Precisely truncate messages when approaching token limits</li>
      <li><strong>Accurate counting</strong>: Different models use different tokenizers (cl100k_base for GPT-4, p50k_base for GPT-3)</li>
    </ul>
    <p>Example: <code>len(tiktoken.encoding_for_model("gpt-4o").encode("Hello world"))</code> returns 2 tokens. A 1000-word document is roughly 1330 tokens.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s02-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How would you design a multi-provider LLM abstraction layer?
  </summary>
  <div class="tp-qa-answer">
    <p>A clean abstraction layer would include:</p>
    <ol>
      <li><strong>Abstract base class</strong>: Define an LLMProvider interface with methods like generate(), count_tokens(), and stream()</li>
      <li><strong>Concrete implementations</strong>: One class per provider (OpenAIProvider, AnthropicProvider, GeminiProvider)</li>
      <li><strong>Unified response type</strong>: Standard data class containing content, token counts, model name, latency, and any errors</li>
      <li><strong>Provider routing</strong>: Strategy pattern to select provider based on task complexity, cost budget, or availability</li>
      <li><strong>Fallback chain</strong>: Try primary provider, fall back to secondary if unavailable</li>
      <li><strong>Middleware stack</strong>: Retry logic, rate limiting, logging, cost tracking as composable middleware</li>
    </ol>
    <p>This design enables switching providers without application code changes and makes it easy to add new providers.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which HTTP status code indicates a rate limit has been exceeded?

a) 401 Unauthorized
b) 403 Forbidden
c) 429 Too Many Requests
d) 500 Internal Server Error

<details class="tp-qa-card" data-qid="llm-s02-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 429 Too Many Requests</strong></p><p>When you exceed API rate limits, the provider returns HTTP 429. This is a retryable error that should trigger exponential backoff.</p></div></details>

**Q2**: What does SSE stand for in streaming APIs?

a) Secure Socket Extension
b) Server-Sent Events
c) Stream Socket Engine
d) Simple Serial Encoding

<details class="tp-qa-card" data-qid="llm-s02-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Server-Sent Events</strong></p><p>SSE is a standard for servers to push data to clients over HTTP, used by LLM APIs to stream tokens incrementally.</p></div></details>

**Q3**: Which of these is NOT a recommended practice for API key management?

a) Using environment variables
b) Hardcoding keys in source code
c) Using a secret manager in production
d) Rotating keys regularly

<details class="tp-qa-card" data-qid="llm-s02-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Hardcoding keys in source code</strong></p><p>Hardcoding API keys in source code is dangerous because keys can be exposed through version control, leaks, or code reviews.</p></div></returns></details>

**Q4**: In OpenAI's API, what does the `tool_choice: "auto"` parameter do?

a) Forces the model to always call a tool
b) Prevents the model from calling any tool
c) Lets the model decide whether to call a tool
d) Automatically executes the tool on the server

<details class="tp-qa-card" data-qid="llm-s02-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Lets the model decide whether to call a tool</strong></p><p>tool_choice="auto" lets the model decide when to use tools. "required" forces a tool call, and "none" prevents tool calls.</p></div></details>

**Q5**: Which tiktoken encoding is used by GPT-4o?

a) r50k_base
b) p50k_base
c) cl100k_base
d) o200k_base

<details class="tp-qa-card" data-qid="llm-s02-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) cl100k_base</strong></p><p>GPT-4, GPT-4o, GPT-4-turbo, and GPT-3.5-turbo all use the cl100k_base encoding. The o200k_base encoding is used by newer models like o1.</p></div></details>

## Exercises

**Easy** — Write a Python script that calls the OpenAI API to summarize a news article. Print the response and the total token usage.

**Easy** — Extend the script to support streaming: display tokens as they arrive from the API.

**Medium** — Build a `UnifiedLLMClient` class that supports OpenAI and Anthropic through a common interface. Implement `generate()` and `count_tokens()` for both providers.

**Medium** — Implement a circuit breaker decorator for API calls that trips after 3 failures and recovers after 30 seconds. Test it by temporarily using an invalid API key.

**Hard** — Build a rate-limited proxy server using FastAPI that forwards requests to OpenAI with a token bucket limiter (100 requests per minute). Include request logging and cost tracking.

---

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of LLM APIs in under 60 seconds, then give a real-world analogy.** â€” Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates LLM APIs.** â€” Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** â€” List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding LLM APIs. How did you diagnose and fix it?** â€” STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on LLM APIs from 10 users to 10 million?** â€” Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare LLM APIs with the closest alternative approach. When would you choose each?** â€” Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on LLM APIs.** â€” Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does LLM APIs behave differently at scale â€” memory, throughput, or precision-wise?** â€” Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of LLM APIs run faster on GPU hardware?** â€” Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of LLM APIs that is production-quality.** â€” Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name LLM APIs explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using LLM APIs").
- Add a bullet describing a project that applies LLM APIs to real data, with numbers.
- Mention the tools and libraries you used alongside LLM APIs (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of LLM APIs and one real-world analogy.
- Prepare one STAR story about debugging a LLM APIs-related production issue.
- Review complexity and edge cases for the classic LLM APIs interview problem.
- Have questions ready: how does the team apply LLM APIs in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** LLM APIs builds directly on the fundamentals covered in the earlier chapters of this module. â€” **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for LLM APIs before moving to the next chapter. â€” **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for LLM APIs is the same regardless of input size. â€” **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for LLM APIs in production. â€” **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the LLM APIs chapter content once and never review it again. â€” **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers LLM APIs is Chapter ___ of this module. â€” Answer: check the module's table of contents.
2. The time complexity of the standard approach to LLM APIs is ___. â€” Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing LLM APIs is ___. â€” Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug LLM APIs issues are ___ and ___. â€” Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to LLM APIs in the next chapter is ___. â€” Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving LLM APIs that breaks production at 3 AM. â€” Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of LLM APIs is correct but too slow for the required latency. â€” Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain LLM APIs in five minutes before a customer demo. â€” Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for LLM APIs and you must standardize. â€” Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of LLM APIs on an empty input?** â€” Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** â€” Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** â€” With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** â€” Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** â€” Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain LLM APIs to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of LLM APIs from memory before opening the chapter â€” active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered LLM APIs when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining LLM APIs twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own LLM APIs snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of LLM APIs listed in the Chapter at a Glance table.
- **Story**: link LLM APIs to a familiar story â€” the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of LLM APIs by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain LLM APIs to an imaginary junior engineer for 2 minutes â€” gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of LLM APIs
- The classic textbook chapter on LLM APIs (check the Research References below)
- Two blog posts from engineers who debugged real LLM APIs problems in production
- The repository of the open-source project that implements LLM APIs

## Related Topics

- The previous chapter in this module (see table of contents) â€” foundational for LLM APIs
- The next chapter (see Next Topic below) â€” builds on LLM APIs
- The system design chapters in Module 07 â€” how LLM APIs fits into production architectures
- The interview preparation module â€” how LLM APIs is asked in screening rounds
- The capstone project â€” where LLM APIs is applied end-to-end

## FAQs

1. **Do I need to memorize all of LLM APIs, or understand the big picture?** â€” Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** â€” Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** â€” Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is LLM APIs asked in interviews?** â€” Yes â€” the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** â€” Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- LLM APIs is a core requirement for the rest of this module â€” do not skip the examples.
- Always analyze complexity (time and space) when working with LLM APIs.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- LLM APIs emerged as a standard practice because early systems failed without it â€” understanding why helps you explain it in interviews.
- The tools used for LLM APIs today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about LLM APIs â€” it shows genuine interest, not just cramming.
- The library/tooling ecosystem around LLM APIs changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing LLM APIs.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- LLM APIs appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding LLM APIs helps you debug why a model misbehaves â€” most ML bugs are data bugs, not model bugs.
- In production ML, the LLM APIs concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, LLM APIs skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply LLM APIs to a dataset of 10 million records? â€” Batching and vectorization.

## Analogies

- **LLM APIs is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm â€” build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) â€” this chapter contributes the LLM APIs skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="11llmspromptengineering-02llmapis-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which HTTP status code indicates a rate limit has been exceeded?
  </summary>
  <div class="tp-qa-answer">
    <p>c) 429 Too Many Requests</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="11llmspromptengineering-02llmapis-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What does SSE stand for in streaming APIs?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Server-Sent Events</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="11llmspromptengineering-02llmapis-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which of these is NOT a recommended practice for API key management?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Hardcoding keys in source code</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="11llmspromptengineering-02llmapis-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    In OpenAI's API, what does the tool_choice: "auto" parameter do?
  </summary>
  <div class="tp-qa-answer">
    <p>c) Lets the model decide whether to call a tool</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="11llmspromptengineering-02llmapis-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which tiktoken encoding is used by GPT-4o?
  </summary>
  <div class="tp-qa-answer">
    <p>c) cl100k_base</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for LLM APIs (linked in Further Reading)
- The classic paper or textbook chapter introducing LLM APIs (see References below)
- The standard library reference for LLM APIs-related functions
- Engineering blog posts from companies running LLM APIs in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of LLM APIs code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on LLM APIs

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in LLM APIs code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes â€” most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the LLM APIs example code.

## Mock Interview Section

**Round 1 â€” Screening (15 min)**
- Explain LLM APIs in 60 seconds.
- Write a minimal working example of LLM APIs.
- What is the complexity of your example?

**Round 2 â€” Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 â€” Behavioral + System (30 min)**
- Tell me about a time you debugged a LLM APIs problem in a project.
- How would you design a system where LLM APIs is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for LLM APIs.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core LLM APIs logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain LLM APIs without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses LLM APIs daily in their data pipeline â€” the chapter's examples mirror their code.
- **E-commerce**: LLM APIs patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: LLM APIs principles apply to transaction validation and fraud detection flows.
- **ML platform**: LLM APIs shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect LLM APIs to the business outcome, not just the code.

## Next Topic

[Zero-Shot & Few-Shot Prompting](03-zero-shot-and-few-shot.md)

## Limitations

- LLM APIs, like any technique, is not a silver bullet â€” it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of LLM APIs depends on input size and distribution â€” always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
