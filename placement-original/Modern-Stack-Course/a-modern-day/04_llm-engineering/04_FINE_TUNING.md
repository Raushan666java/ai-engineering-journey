# 🔧 STAGE 4D — Fine-Tuning & Model Customization

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. When to Fine-Tune

```
Use Prompting when: General tasks, quick iteration
Use RAG when:       Company-specific knowledge
Use Fine-Tuning when:
  - Need specific style/format consistently
  - Need to reduce prompt size (encode behavior into model)
  - Need specialized domain expertise
  - Prompting isn't good enough
```

---

## 2. OpenAI Fine-Tuning

### Prepare Training Data (JSONL format)
```json
{"messages": [{"role": "system", "content": "You are a Laravel code reviewer."}, {"role": "user", "content": "Review: $users = User::all();"}, {"role": "assistant", "content": "Issue: Using all() loads entire table into memory. Use pagination: User::paginate(15) or lazy() for processing."}]}
{"messages": [{"role": "system", "content": "You are a Laravel code reviewer."}, {"role": "user", "content": "Review: DB::raw('SELECT * FROM users WHERE id = ' . $id);"}, {"role": "assistant", "content": "CRITICAL: SQL injection vulnerability! Use parameterized query: DB::select('SELECT * FROM users WHERE id = ?', [$id]) or User::find($id)."}]}
```

### Start Fine-Tuning
```python
from openai import OpenAI
client = OpenAI()

# Upload training file
file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)

# Create fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

# Check status
status = client.fine_tuning.jobs.retrieve(job.id)
print(status.status)  # "running" → "succeeded"

# Use fine-tuned model
response = client.chat.completions.create(
    model="ft:gpt-4o-mini-2024-07-18:org::abc123",
    messages=[{"role": "user", "content": "Review: $data = Input::get('name');"}]
)
```

---

## 3. HuggingFace Fine-Tuning (Free, Local)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from trl import SFTTrainer

model_name = "mistralai/Mistral-7B-v0.1"
model = AutoModelForCausalLM.from_pretrained(model_name, load_in_4bit=True)
tokenizer = AutoTokenizer.from_pretrained(model_name)

training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    learning_rate=2e-4,
)

trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    tokenizer=tokenizer,
    max_seq_length=512,
)

trainer.train()
```

---

## 4. LoRA (Low-Rank Adaptation)
Train adapters instead of full model — 100x less memory.

```python
from peft import LoraConfig, get_peft_model

lora_config = LoraConfig(
    r=16,               # Rank
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
)

model = get_peft_model(model, lora_config)
# Only 0.1% of parameters are trainable!
```

---

## 5. Decision Framework

```
Need: Better output format → Fine-tune
Need: Company knowledge → RAG
Need: Both → RAG + Fine-tuned model
Need: Speed → Fine-tune (smaller prompts)
Need: Flexibility → RAG (update knowledge without retraining)
Budget: Low → Use prompting + few-shot
Budget: Medium → RAG
Budget: High → Fine-tune + RAG
```

---

## 🎯 Practice Tasks
- [ ] Create JSONL training data (50+ examples)
- [ ] Fine-tune GPT-4o-mini on custom task
- [ ] Compare fine-tuned vs prompted results
- [ ] Try LoRA fine-tuning locally
- [ ] Build RAG + fine-tuned model combo

---

*Next: [LangChain Core →](../05_ai-agents/01_LANGCHAIN_CORE.md)*
