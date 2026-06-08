# 🤖 STAGE 3D — AI Models & Providers

> **Level:** Beginner → Intermediate | **Duration:** 3 Days

---

## 1. Major AI Providers

| Provider | Models | Best For | Cost |
|----------|--------|----------|------|
| **OpenAI** | GPT-4o, GPT-4o-mini | General, coding | Pay per token |
| **Anthropic** | Claude 3.5 Sonnet | Analysis, safety | Pay per token |
| **Google** | Gemini 2.0 | Multimodal, long context | Pay per token |
| **HuggingFace** | Thousands of models | Free/Open source | Free / Pay |
| **Meta** | Llama 3 | Local/Self-hosted | Free |
| **Mistral** | Mixtral, Mistral | Fast, efficient | Free / Pay |
| **Ollama** | Run any model locally | Privacy, free | Free |

---

## 2. OpenAI API
```python
from openai import OpenAI
client = OpenAI()  # Uses OPENAI_API_KEY env var

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful developer assistant."},
        {"role": "user", "content": "Explain Docker in 3 sentences."}
    ],
    temperature=0.7,
    max_tokens=200,
)

print(response.choices[0].message.content)
```

---

## 3. HuggingFace API
```python
import requests

API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
headers = {"Authorization": f"Bearer {HF_TOKEN}"}

def summarize(text):
    response = requests.post(API_URL, headers=headers, json={"inputs": text})
    return response.json()

# Sentiment analysis
SENTIMENT_URL = "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english"

def analyze_sentiment(text):
    response = requests.post(SENTIMENT_URL, headers=headers, json={"inputs": text})
    return response.json()
```

---

## 4. Ollama (Local AI)
```bash
# Install
curl -fsSL https://ollama.com/install.sh | sh

# Download models
ollama pull llama3
ollama pull codellama
ollama pull mistral

# Run
ollama run llama3 "Explain React hooks"
```

### Python Integration
```python
from langchain_community.llms import Ollama

llm = Ollama(model="llama3")
response = llm.invoke("What is FastAPI?")
print(response)
```

---

## 5. Model Selection Guide

```
Coding → GPT-4o or Claude 3.5 Sonnet
Chat → GPT-4o-mini (cheap) or Claude
Analysis → Claude 3.5 Sonnet
Local → Llama 3 via Ollama
Embeddings → text-embedding-3-small (OpenAI) or all-MiniLM (free)
Summarization → BART (HuggingFace, free)
Classification → DistilBERT (HuggingFace, free)
```

---

## 🎯 Practice Tasks
- [ ] Call OpenAI API from Python
- [ ] Use HuggingFace Inference API
- [ ] Set up Ollama locally
- [ ] Compare responses from different models
- [ ] Build a model switching service

---

*Next: [Prompt Engineering →](../04_llm-engineering/01_PROMPT_ENGINEERING.md)*
