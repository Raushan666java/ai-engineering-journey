# Tutorial Improvement Script — Setup & Usage

Bulk-improves all **270+ tutorial files** in `ai-engineering-placement` using
**Claude claude-3-5-sonnet** via either:

- **Option A** — Anthropic API (paid, fastest)
- **Option B** — Amazon Bedrock (AWS free tier eligible ✅)

---

## Option A: Anthropic API (Direct)

### 1. Get API Key
Go to → https://console.anthropic.com/keys → Create key

### 2. Install
```bash
pip install anthropic
```

### 3. Run
```bash
# Windows
set ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE
set WORKERS=5
python scripts/improve_tutorials.py
```

---

## Option B: Amazon Bedrock (Free Tier ✅)

Claude on Bedrock has a **free tier** — no Anthropic account needed.

### 1. AWS Setup
- Go to https://aws.amazon.com → Create free account
- Enable Claude in Bedrock: https://console.aws.amazon.com/bedrock → Model access → Enable `Claude 3.5 Sonnet`
- Create IAM user with `AmazonBedrockFullAccess` policy
- Get Access Key ID + Secret

### 2. Install
```bash
pip install boto3
```

### 3. Run
```bash
# Windows
set USE_BEDROCK=1
set AWS_ACCESS_KEY_ID=AKIA...
set AWS_SECRET_ACCESS_KEY=your_secret
set AWS_DEFAULT_REGION=us-east-1
set WORKERS=5
python scripts/improve_tutorials.py
```

---

## Options / Env Vars

| Variable | Default | Description |
|----------|---------|-------------|
| `WORKERS` | `5` | Parallel threads (increase for speed) |
| `DRY_RUN` | `0` | Set `1` to list files without calling API |
| `MODULE_FILTER` | `` | Process only matching module, e.g. `11` for LLMs |
| `SKIP_EXISTING` | `0` | Set `1` to skip already-improved files |
| `USE_BEDROCK` | `0` | Set `1` to use Amazon Bedrock instead |

---

## Examples

```bash
# Test run — no API calls
set DRY_RUN=1
python scripts/improve_tutorials.py

# Improve only module 11 (LLMs) first
set MODULE_FILTER=11
set ANTHROPIC_API_KEY=sk-ant-...
python scripts/improve_tutorials.py

# Full run with 10 parallel workers (fast!)
set WORKERS=10
set SKIP_EXISTING=1
python scripts/improve_tutorials.py
```

---

## What the AI improves per file

Each tutorial gets:
- ✅ Clear learning objectives
- ✅ Deep theory with Mermaid diagrams
- ✅ Production-grade Python + TypeScript code
- ✅ 10 FAANG-style Interview Q&A with model answers
- ✅ 5 MCQ Chapter Quiz with answers
- ✅ Easy / Medium / Hard exercises
- ✅ Summary table + Common Mistakes + Practical Takeaways

---

## Output

- Improved files written in-place (`.md` files updated)
- Log saved to `scripts/improve_tutorials.log`
- Already-improved files marked with `<!-- improved -->` at top
