# Week 2 — CI/CD & Monitoring

**Goal:** AI apps ke liye CI/CD pipelines + monitoring setup karo

Yeh week kaafi critical hai. Hum ab tak 3 projects bana chuke hain (Document AI, ApexERP, Flow Studio). Ab inhe production mein daalna hai aur ensure karna hai ki yeh reliably chalein. Laravel mein aap Forge/Envoyer use karte the — GitHub Actions + Docker utna hi powerful hai, balki zyada.

Is week mein hum seekhenge:
- **CI/CD pipelines** — code push → auto test → auto deploy
- **Testing in CI** — AI specific testing strategies
- **Monitoring** — Prometheus + Grafana
- **Logging** — Loki + structured logging
- **Alerting** — jab kuch toot-ta hai tab aapko pata chale
- **Backup + Security** — disaster recovery real hai
- **Full deploy** — teeno projects ek saath production mein

---

## Day 1 — CI/CD Pipelines for AI Applications

### Why CI/CD is Different for AI

Laravel mein CI/CD mostly hota hai: tests chalao, assets build karo, deploy kar do. AI apps mein zyada layers hain:

| Layer | Laravel | AI App |
|-------|---------|--------|
| Code | PHP | Python |
| Dependencies | Composer | pip/poetry |
| Model weights | None | GBs of model files |
| Vector DB | None | Qdrant/Pinecone |
| LLM API keys | None | OpenAI/Anthropic |
| Prompt changes | None | Versioned prompts |
| Testing | PHPUnit | pytest + RAG quality |

**Caution:** AI CI/CD mein ek naya dimension aata hai — model quality testing. Sirf "test pass" kaafi nahi, "answer relevant hai?" bhi check karna padta hai.

### Complete CI/CD Flow

```
Developer Push (main)
     │
     ▼
┌──────────────────────────┐
│ 1. CI Pipeline           │ ← GitHub Actions
│    ├─ Lint (ruff)        │   Code quality check
│    ├─ Type Check (mypy)  │   Python type safety
│    ├─ Unit Tests         │   Fast, isolated tests
│    ├─ Integration Tests  │   DB, Redis, Qdrant
│    └─ RAG Quality Tests  │   Relevance, latency, accuracy
└──────────┬───────────────┘
           │ (tests pass)
           ▼
┌──────────────────────────┐
│ 2. Build + Push          │
│    ├─ Docker build        │   Multi-stage, cached
│    ├─ Security scan       │   Trivy for CVEs
│    ├─ SBOM generation     │   Software Bill of Materials
│    └─ Push to registry    │   Docker Hub / GHCR
└──────────┬───────────────┘
           │
           ▼
┌──────────────────────────┐
│ 3. Staging Deploy        │
│    ├─ Deploy to staging   │   Isolated env
│    ├─ Smoke tests         │   Sanity checks
│    ├─ Load test (opt.)    │   Performance gate
│    └─ Approval gate       │   Manual or auto
└──────────┬───────────────┘
           │
           ▼
┌──────────────────────────┐
│ 4. Production Deploy     │
│    ├─ Pull new image      │
│    ├─ Health check        │
│    ├─ Traffic switch      │
│    └─ Rollback on fail    │
└──────────┬───────────────┘
           │
     Production Live!
```

**Laravel类比:** Laravel Envoyer mein aap "Deployment Plan" banate the jo steps define karta tha. GitHub Actions wahi kaam karta hai but as code — version controlled, reviewable, repeatable.

### Understanding GitHub Actions Structure

Pehle ek simple workflow ka structure samajhte hain:

```yaml
name: Deploy AI App  # Workflow ka naam

on:  # Kab trigger hoga?
  push:
    branches: [main]  # Sirf main branch push par
  pull_request:
    branches: [main]  # PR bana ne par bhi

env:  # Global variables
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:  # Kaam ka division
  test:  # Pehla job
    runs-on: ubuntu-latest
    steps:
      - run: echo "Testing..."
  
  deploy:  # Doosra job
    needs: test  # Test ke baad hi chalega
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying..."
```

**Key concept — Jobs run in parallel by default!** Isliye `needs:` use karte hain dependency define karne ke liye. Laravel queues ki tarah sochiye — Job B ko Job A ke result chahiye.

### Advanced CI Pipeline (with Rollback)

Ab dekhte hain full production-grade workflow:

```yaml
name: Deploy AI App

on:
  push:
    branches: [main]
  workflow_dispatch:  # Manual trigger bhi allow karo
    inputs:
      environment:
        description: 'Target environment'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # ============ JOB 1: TEST ============
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 15  # Safety: zyada time lage to fail

    services:
      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      qdrant:
        image: qdrant/qdrant:latest
        options: >-
          --health-cmd "curl -f http://localhost:6333/health"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    strategy:
      matrix:
        python-version: ['3.11', '3.12']  # Multiple versions par test

    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
          cache: 'pip'  # pip cache enable

      - name: Cache pip packages
        uses: actions/cache@v4
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-

      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov ruff mypy pytest-asyncio

      - name: Lint (ruff)
        run: ruff check app/ tests/ --output-format=github

      - name: Type check (mypy)
        run: mypy app/ --strict

      - name: Unit tests
        run: pytest tests/unit/ -v --cov=app --cov-report=xml --cov-report=term
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}

      - name: Integration tests
        run: pytest tests/integration/ -v --timeout=60
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REDIS_URL: redis://localhost:6379
          QDRANT_URL: http://localhost:6333

      - name: RAG quality tests
        run: pytest tests/rag/ -v --timeout=120
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          QDRANT_URL: http://localhost:6333

      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          file: ./coverage.xml

  # ============ JOB 2: BUILD + SCAN ============
  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    timeout-minutes: 15

    steps:
      - uses: actions/checkout@v4

      - name: Log in to registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
          build-args: |
            BUILDKIT_INLINE_CACHE=1

      - name: Security scan (Trivy)
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'HIGH,CRITICAL'

      - name: Upload Trivy results
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: 'trivy-results.sarif'

  # ============ JOB 3: STAGING DEPLOY ============
  deploy-staging:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.event_name == 'push'  # Auto on push
    environment: staging

    steps:
      - name: Deploy to staging
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USER }}
          key: ${{ secrets.STAGING_SSH_KEY }}
          script: |
            cd /opt/document-ai
            docker compose pull api
            docker compose up -d api --force-recreate
            
            # Health check
            for i in {1..10}; do
              if curl -sf http://localhost:8000/health; then
                echo "✅ Staging health check passed"
                exit 0
              fi
              echo "Waiting... ($i)"
              sleep 2
            done
            echo "❌ Failed"
            exit 1

  # ============ JOB 4: PRODUCTION DEPLOY ============
  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    environment: production

    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.HETZNER_HOST }}
          username: ${{ secrets.HETZNER_USER }}
          key: ${{ secrets.HETZNER_SSH_KEY }}
          script: |
            cd /opt/document-ai
            
            # Backup current DB state
            docker compose exec -T postgres pg_dump -U user db > \
              /backups/pre_deploy_$(date +%Y%m%d_%H%M%S).sql
            
            # Pull new image
            docker compose pull api
            
            # Restart with new image (zero-downtime)
            docker compose up -d api --force-recreate --wait
            
            # Health check (30 second window)
            for i in {1..30}; do
              if curl -sf http://localhost:8000/health; then
                echo "✅ Health check passed"
                exit 0
              fi
              echo "Waiting... ($i)"
              sleep 1
            done
            
            # Health check failed → rollback
            echo "❌ Health check failed, rolling back..."
            docker compose stop api
            docker compose up -d api --force-recreate
            
            exit 1

  # ============ JOB 5: NOTIFY ============
  notify:
    needs: [deploy-staging, deploy-production]
    if: always()  # Success ya fail, hamesha chalega
    runs-on: ubuntu-latest
    steps:
      - name: Slack notification
        uses: rtCamp/action-slack-notify@v2
        env:
          SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
          SLACK_MESSAGE: |
            Deploy ${{ job.status }}
            Commit: ${{ github.sha }}
            Author: ${{ github.actor }}
            Environment: production
```

**Workflow structure explain karte hain:**

```
test → build-and-push → deploy-staging → deploy-production
                                                 ↓
                                           notify (always)
```

Har job ek dependency chain hai. Laravel queues mein bhi aap yehi pattern dekhte hain — ek job ke result doosre par depend karta hai.

### Docker Layer Caching Strategy

AI apps mein Docker images bade hote hain (500MB-2GB). Layer caching critical hai:

```dockerfile
# Dockerfile — Cache optimized for AI apps

# Stage 1: Base — system deps (rarely changes)
FROM python:3.12-slim AS base
RUN apt-get update && apt-get install -y \
    curl build-essential && \
    rm -rf /var/lib/apt/lists/*

# Stage 2: Dependencies — changes with requirements.txt
FROM base AS deps
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Stage 3: Code — changes most often
FROM deps AS runner
WORKDIR /app
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**Cache hierarchy:**
| Layer | Changes | Cache hit rate |
|-------|---------|----------------|
| Python base | Monthly | ~99% |
| apt packages | Rarely | ~100% |
| pip install | Requirements change | ~80% |
| Copy code | Every commit | ~0% |

**Docker BuildKit caching in CI:**
```yaml
# Cache from previous workflow runs
cache-from: type=gha
cache-to: type=gha,mode=max
```

Yeh GitHub Actions ke internal cache ko use karta hai. Build time 2-3 minute se ghata kar 30-40 seconds kar sakta hai.

### Environment-Specific Deployments

Har environment ke alag configs hote hain:

```yaml
# docker-compose.override.yml — local dev
services:
  api:
    environment:
      - ENVIRONMENT=development
      - DEBUG=true
      - OPENAI_MODEL=gpt-4o-mini  # Cheap model for dev

# docker-compose.staging.yml — staging
services:
  api:
    environment:
      - ENVIRONMENT=staging
      - DEBUG=false
      - OPENAI_MODEL=gpt-4o  # Real model but smaller users

# docker-compose.prod.yml — production
services:
  api:
    environment:
      - ENVIRONMENT=production
      - DEBUG=false  
      - OPENAI_MODEL=gpt-4o
      - QDRANT_URL=http://qdrant:6333
    deploy:
      resources:
        limits:
          memory: 4G
    restart: unless-stopped
```

**Laravel类比:** Laravel mein aap `.env.development`, `.env.production` rakhte the. Docker Compose mein bhi yahi pattern hai but file-level segregation ke saath.

### Secrets Management in CI

GitHub Actions mein secrets set karo → `Settings → Secrets and variables → Actions`:

```
HETZNER_HOST         → VPS IP address
HETZNER_USER         → SSH username
HETZNER_SSH_KEY      → Private SSH key (base64)
OPENAI_API_KEY       → LLM API key
SLACK_WEBHOOK        → Slack notification URL
```

**Production-grade approach:** GitHub Actions secrets + AWS Secrets Manager / HashiCorp Vault for rotation.

### Deployment Strategies

**Rolling Update:** Naye container ek-ek karke aate hain, purane ek-ek karke jate hain.

```
Before: [api_v1] [api_v1] [api_v1]
During: [api_v2] [api_v1] [api_v1] → [api_v2] [api_v2] [api_v1]
After:  [api_v2] [api_v2] [api_v2]
```

**Blue-Green:** Do identical environments. Ek live (blue), ek idle (green). Switch karo DNS ya load balancer.

```yaml
# Traefik blue-green routing
services:
  api-blue:
    image: api:latest
    labels:
      - "traefik.http.routers.api.rule=Host(`doc.ai`)"
      # Blue handles traffic

  api-green:
    image: api:${NEW_VERSION}
    labels:
      - "traefik.http.routers.api-green.rule=Host(`doc.ai`) && Headers(`X-Canary`, `true`)"
      # Green only gets canary traffic
```

**Laravel类比:** Blue-green = do alag Laravel installations, ek live ek staging. Switch karna = .env pointing change karna.

### Day 1 Exercise

```
GitHub Actions workflow banao for your project:

1. CI: lint + type check + unit tests + integration tests
2. Build: Docker build with layer caching + security scan
3. CD: build Docker → push to registry → SSH deploy
4. Rollback on health check failure
5. Slack notification on deploy status
6. Environment-specific configs (staging vs production)

Push to main → auto-deploy trigger karo.

Bonus: Matrix testing for Python 3.11 + 3.12
```

---

## Day 2 — Testing in CI

### Why AI Testing is Hard

Laravel testing straightforward hai — database save karo, API call karo, response check karo. AI testing mein uncertainty hai:

| Traditional Test | AI Test |
|------------------|---------|
| `assertEqual(2+2, 4)` | `assertRelevant(answer, question)` |
| Always same result | May vary by model version |
| Deterministic | Probabilistic |
| Fast (ms) | Slow (seconds — LLM call) |
| No cost | Per-test API costs |

**Core principle:** AI tests = deterministic tests + statistical tests. Dono ko CI mein chalao.

### Test Pyramid for AI

```
           ┌────────────────────────────┐
           │      Manual / E2E          │  ← Human review
           │   (expensive, slow)        │    QA team
           ├────────────────────────────┤
           │    RAG Quality Tests       │  ← Statistical
           │   (RAGAS, relevance,       │    Assertions
           │    faithfulness, latency)  │
           ├────────────────────────────┤
           │    Integration Tests       │  ← Component
           │   (DB, Redis, Qdrant,      │    Interaction
           │    LLM API mocking)        │
           ├────────────────────────────┤
           │    Unit Tests (fast!)      │  ← Deterministic
           │   (prompts, parsers,       │    Assertions
           │    utils, chunkers)        │
           └────────────────────────────┘
```

**Pareto principle:** 70% unit + 20% integration + 10% RAG quality. Hamesha bottom-heavy rakho.

### Unit Tests — Deterministic Components

Ye sabse easy hain. Input → expected output test karo:

```python
# tests/unit/test_chunker.py
import pytest
from app.chunker import TextChunker

class TestTextChunker:
    def test_basic_chunking(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        text = "A" * 500
        chunks = chunker.split(text)
        assert len(chunks) > 1
        assert all(len(c) <= 100 for c in chunks)

    def test_overlap_content(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        text = "The quick brown fox jumps over the lazy dog. " * 30
        chunks = chunker.split(text)
        
        # Check adjacent chunks share content
        for i in range(len(chunks) - 1):
            assert chunks[i][-20:] == chunks[i+1][:20], \
                f"Overlap missing between chunk {i} and {i+1}"

    def test_empty_text(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        assert chunker.split("") == []

    def test_small_text(self):
        chunker = TextChunker(chunk_size=100, chunk_overlap=20)
        text = "Small text"
        chunks = chunker.split(text)
        assert len(chunks) == 1
        assert chunks[0] == "Small text"


# tests/unit/test_tools.py
from app.tools import SearchTool, CalculatorTool
import pytest

class TestTools:
    def test_calculator_add(self):
        tool = CalculatorTool()
        result = tool.execute("2 + 2")
        assert result == "4"

    def test_calculator_divide_by_zero(self):
        tool = CalculatorTool()
        result = tool.execute("1 / 0")
        assert "error" in result.lower()

    def test_search_tool_url_building(self):
        tool = SearchTool()
        url = tool._build_url("AI engineering 2026")
        assert "q=AI+engineering+2026" in url

    def test_search_tool_empty_query(self):
        tool = SearchTool()
        with pytest.raises(ValueError, match="empty"):
            tool.execute("")


# tests/unit/test_prompt_parser.py
from app.prompts import PromptTemplate

class TestPromptTemplate:
    def test_basic_render(self):
        template = PromptTemplate("Hello {{ name }}!")
        result = template.render(name="World")
        assert result == "Hello World!"

    def test_missing_variable(self):
        template = PromptTemplate("Hello {{ name }}!")
        with pytest.raises(KeyError):
            template.render()

    def test_template_with_few_shot(self):
        template = PromptTemplate(
            "Classify: {{ text }}\n\nExamples:\n{{ examples }}",
            default_examples="Good → positive\nBad → negative"
        )
        result = template.render(text="Great product!")
        assert "Classify: Great product!" in result
        assert "Examples:" in result
```

### Unit Tests — Pydantic Models

```python
# tests/unit/test_models.py
from app.models import (
    RAGQuery, RAGResponse, AgentAction, 
    ChatMessage, DocumentChunk
)
import pytest
from pydantic import ValidationError

class TestModels:
    def test_rag_query_valid(self):
        query = RAGQuery(text="What is AI?", top_k=5)
        assert query.text == "What is AI?"
        assert query.top_k == 5

    def test_rag_query_defaults(self):
        query = RAGQuery(text="Test")
        assert query.top_k == 3  # Default value

    def test_rag_query_empty_text(self):
        with pytest.raises(ValidationError):
            RAGQuery(text="", top_k=5)

    def test_rag_response_with_sources(self):
        response = RAGResponse(
            answer="AI is...",
            sources=[DocumentChunk(
                id="doc1", content="AI is artificial intelligence",
                metadata={"page": 1}, score=0.95
            )],
            confidence=0.92
        )
        assert len(response.sources) == 1
        assert response.confidence > 0.9

    def test_agent_action_serialization(self):
        action = AgentAction(
            tool="search",
            input="latest AI news",
            output="Results here",
            duration_ms=450
        )
        data = action.model_dump()
        assert data["tool"] == "search"
        assert data["duration_ms"] == 450
```

### Integration Tests — Component Interaction

Integration tests mein actual services connect karte hain:

```python
# tests/integration/test_rag_pipeline.py
import pytest
from app.rag import RAGPipeline

@pytest.mark.asyncio
class TestRAGPipeline:
    async def test_full_rag_flow(self, test_document, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)
        
        # Index a test document
        await pipeline.index(test_document)
        
        # Query
        result = await pipeline.query("What is this about?")
        
        assert result["answer"] is not None
        assert len(result["sources"]) > 0
        assert result["confidence"] > 0.5

    async def test_empty_query(self, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)
        result = await pipeline.query("")
        assert "error" in result

    async def test_relevance_low_for_unrelated(self, test_document, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)
        await pipeline.index(test_document)
        
        result = await pipeline.query("Completely unrelated topic about cooking")
        assert result["confidence"] < 0.3

    async def test_multiple_documents(self, vector_store):
        pipeline = RAGPipeline(vector_store=vector_store)
        docs = [
            {"id": "1", "content": "Python is a programming language"},
            {"id": "2", "content": "JavaScript is for web development"},
            {"id": "3", "content": "Rust is for systems programming"},
        ]
        for doc in docs:
            await pipeline.index(doc)
        
        result = await pipeline.query("Which language for web?")
        assert result["answer"] is not None
        # Should find JavaScript document
        js_sources = [s for s in result["sources"] if "JavaScript" in s["content"]]
        assert len(js_sources) > 0
```

### Test Containers (for CI)

GitHub Actions mein services section ya test containers:

```python
# conftest.py — fixtures for integration tests
import pytest
import uuid
import pytest_asyncio
import redis.asyncio as redis
from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams

@pytest_asyncio.fixture
async def vector_store():
    """Qdrant in Docker for tests"""
    client = QdrantClient(
        host="localhost",
        port=6333,
        prefer_grpc=True
    )
    # Create temp collection
    collection_name = f"test_{uuid.uuid4().hex[:8]}"
    client.recreate_collection(
        collection_name=collection_name,
        vectors_config=VectorParams(size=384, distance=Distance.COSINE)
    )
    yield client
    # Cleanup
    client.delete_collection(collection_name)

@pytest_asyncio.fixture
async def redis_client():
    """Redis for caching tests"""
    client = redis.from_url("redis://localhost:6379", decode_responses=True)
    await client.flushdb()
    yield client
    await client.flushdb()
    await client.aclose()

@pytest.fixture
def test_document():
    return {
        "id": "test_001",
        "content": "AI Engineering involves designing systems...",
        "metadata": {"source": "test", "date": "2026-01-01"}
    }

@pytest.fixture
def sample_messages():
    return [
        {"role": "user", "content": "Hello"},
        {"role": "assistant", "content": "Hi there!"},
        {"role": "user", "content": "What is AI?"},
    ]
```

**Important — fixture scopes:** `function` (har test ke liye naya), `module` (ek module mein ek baar), `session` (poori test run mein ek baar). Integration fixtures usually `function` scope.

### Mocking LLM API Calls

LLM calls slow aur expensive hain. Mock karo in tests mein:

```python
# tests/mocks/llm_mock.py
from unittest.mock import AsyncMock, patch
import pytest

@pytest.fixture
def mock_llm():
    """Mock LLM responses for fast testing"""
    with patch("app.llm.client.chat.completions.create") as mock:
        # Create a mock response
        mock_response = AsyncMock()
        mock_response.choices = [
            Mock(  # noqa
                message=Mock(
                    content="This is a test response"
                )
            )
        ]
        mock_response.usage = Mock(
            prompt_tokens=10,
            completion_tokens=5,
            total_tokens=15
        )
        mock.return_value = mock_response
        yield mock

class TestLLMClient:
    async def test_basic_call(self, mock_llm):
        from app.llm import LLMClient
        client = LLMClient()
        
        response = await client.generate("Hello")
        assert response == "This is a test response"
        mock_llm.assert_called_once()

    async def test_tokens_tracked(self, mock_llm):
        from app.llm import LLMClient
        client = LLMClient()
        
        await client.generate("Hello")
        assert client.total_tokens == 15
```

**Laravel类比:** Laravel mein aap HTTP client mock karte the `Http::fake()` ke saath. Python mein `unittest.mock.patch` wahi kaam karta hai.

### RAG Quality Tests (Slow, Statistical)

Ye sabse important tests hain — actual response quality measure karte hain:

```python
# tests/rag/test_quality.py
import pytest
from app.rag import RAGPipeline
from ragas import evaluate
from datasets import Dataset

class TestRAGQuality:
    """Quality tests — may use real LLM calls"""
    
    @pytest.mark.slow
    async def test_answer_relevance(self, vector_store):
        """Check if answers are relevant to questions"""
        pipeline = RAGPipeline(vector_store=vector_store)
        
        # Pre-index some documents
        docs = [
            {"id": "1", "content": "Machine learning is a subset of AI..."},
            {"id": "2", "content": "Deep learning uses neural networks..."},
        ]
        for doc in docs:
            await pipeline.index(doc)
        
        # Test questions
        questions = [
            "What is machine learning?",
            "How do neural networks work?",
        ]
        
        for question in questions:
            result = await pipeline.query(question)
            assert result["answer"], f"No answer for: {question}"
            assert result["confidence"] > 0.3, \
                f"Low confidence for: {question}"
            
    @pytest.mark.slow
    async def test_response_consistency(self, vector_store):
        """Same question should give similar answers"""
        pipeline = RAGPipeline(vector_store=vector_store)
        
        doc = {"id": "1", "content": "Paris is the capital of France..."}
        await pipeline.index(doc)
        
        result1 = await pipeline.query("What is the capital of France?")
        result2 = await pipeline.query("What is the capital of France?")
        
        assert result1["answer"] == result2["answer"], \
            "Answers should be consistent for same question"

    @pytest.mark.benchmark
    async def test_latency_sla(self, vector_store):
        """RAG queries should complete within SLA"""
        pipeline = RAGPipeline(vector_store=vector_store)
        
        import time
        times = []
        for _ in range(5):
            start = time.time()
            await pipeline.query("What is AI?")
            times.append(time.time() - start)
        
        avg_latency = sum(times) / len(times)
        assert avg_latency < 2.0, \
            f"Average latency {avg_latency:.2f}s exceeds 2s SLA"
```

### Test Execution Tips

```bash
# Run only fast tests (default)
pytest tests/ -v --timeout=30

# Run all tests including slow
pytest tests/ -v --slow

# Run with coverage
pytest tests/ --cov=app --cov-report=html

# Run specific test file
pytest tests/integration/test_rag_pipeline.py -v

# Run tests matching pattern
pytest -k "quality or benchmark" --slow

# Parallel execution (use pytest-xdist)
pytest tests/unit/ -n auto  # All CPU cores

# Stop on first failure (fast feedback)
pytest tests/ -x
```

### Test Configuration File

```ini
# setup.cfg
[tool:pytest]
testpaths = tests
timeout = 30
timeout_method = thread
markers =
    slow: Slow tests that call LLM APIs
    benchmark: Performance measurement tests
    smoke: Quick sanity checks for deployment

[tool:pytest.ini_options]
asyncio_mode = auto
filterwarnings =
    ignore::DeprecationWarning

[tool:coverage.run]
source = app
branch = true
omit = tests/*, app/main.py

[tool:coverage.report]
show_missing = true
fail_under = 80
```

### Day 2 Exercise

```
Apne project mein tests add karo:

1. Unit tests: chunker, parser, tools, utils (at least 10)
2. Integration tests: RAG pipeline, agent execution (at least 5)
3. Fixtures setup for DB, Redis, Qdrant
4. Mock LLM calls in unit tests
5. RAG quality tests (at least 2)
6. GitHub Actions CI mein sab tests pass hone chahiye

Run: pytest tests/ --cov=app --cov-report=term

Coverage goal: minimum 80%
```

---

## Day 3 — Monitoring with Prometheus + Grafana

### Why Monitoring Matters for AI

Laravel app mein monitoring simple hoti hai — error rate, response time, DB queries. AI apps mein yeh bhi chahiye:

| Metric | Why |
|--------|-----|
| LLM latency | Slow responses = bad UX |
| Token usage | Cost tracking |
| Embedding quality | Drift detection |
| Cache hit ratio | Cost optimization |
| Model error rate | API failures |
| Queue depth | Request backpressure |

**The Four Golden Signals for AI Apps** (Google SRE inspired):

1. **Latency** — LLM response time (p50/p95/p99)
2. **Traffic** — Requests per second per endpoint
3. **Errors** — LLM API errors, validation errors, timeouts
4. **Saturation** — Queue depth, memory, GPU utilization

### Prometheus Setup

```yaml
# docker-compose.monitoring.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - ./prometheus-alerts.yml:/etc/prometheus/alerts.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"
    restart: unless-stopped
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=30d'
      - '--storage.tsdb.retention.size=10GB'

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
      - GF_INSTALL_PLUGINS=grafana-piechart-panel
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/dashboards:/etc/grafana/provisioning/dashboards
      - ./grafana/datasources:/etc/grafana/provisioning/datasources
    depends_on:
      - prometheus
    restart: unless-stopped

  node_exporter:
    image: prom/node-exporter:latest
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--path.rootfs=/rootfs'
    restart: unless-stopped

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    restart: unless-stopped

  alertmanager:
    image: prom/alertmanager:latest
    volumes:
      - ./alertmanager.yml:/etc/alertmanager/alertmanager.yml
    ports:
      - "9093:9093"
    restart: unless-stopped

volumes:
  prometheus_data:
  grafana_data:
```

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s  # For alert rules

rule_files:
  - /etc/prometheus/alerts.yml

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node'
    static_configs:
      - targets: ['node_exporter:9100']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'api'
    static_configs:
      - targets: ['api:8000']
    metrics_path: '/metrics'

  - job_name: 'qdrant'
    static_configs:
      - targets: ['qdrant:6333']
    metrics_path: '/metrics'
```

### Custom Metrics for AI App

```python
# app/monitoring.py
from prometheus_client import Counter, Histogram, Gauge, Summary
import time
from functools import wraps

# ============ COUNTERS ============
llm_calls_total = Counter(
    'llm_calls_total', 'Total LLM API calls',
    ['model', 'provider', 'status']  # success, error, timeout
)

rag_queries_total = Counter(
    'rag_queries_total', 'Total RAG queries',
    ['status']  # success, error, timeout
)

agent_actions_total = Counter(
    'agent_actions_total', 'Total agent actions',
    ['tool', 'status']
)

cache_hits_total = Counter(
    'cache_hits_total', 'Cache operations',
    ['type', 'result']  # semantic_cache / response_cache, hit / miss
)

embedding_requests = Counter(
    'embedding_requests_total', 'Embedding API calls',
    ['model']
)

# ============ HISTOGRAMS ============
llm_latency_seconds = Histogram(
    'llm_latency_seconds', 'LLM API latency',
    ['model'],
    buckets=[0.1, 0.5, 1.0, 2.0, 5.0, 10.0, 30.0]
)

rag_query_duration = Histogram(
    'rag_query_duration_seconds', 'RAG query duration',
    ['stage'],  # retrieval, generation, total
    buckets=[0.1, 0.5, 1.0, 2.0, 5.0]
)

token_usage = Histogram(
    'llm_token_usage', 'Tokens per LLM call',
    ['model', 'type'],  # prompt, completion
    buckets=[100, 500, 1000, 2000, 4000, 8000]
)

http_request_duration = Histogram(
    'http_request_duration_seconds', 'HTTP request duration',
    ['method', 'endpoint', 'status'],
    buckets=[0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0]
)

# ============ GAUGES ============
active_users = Gauge('active_users', 'Currently active users')
queue_size = Gauge('llm_queue_size', 'LLM request queue size')
vector_db_size = Gauge('vector_db_size', 'Number of vectors in DB')
daily_cost = Gauge('daily_llm_cost', 'Daily LLM API cost in USD')
model_accuracy = Gauge('model_accuracy', 'Current model accuracy score')
db_connection_pool = Gauge('db_connection_pool_size', 'DB connection pool')
last_llm_error_time = Gauge('last_llm_error_timestamp', 'Last LLM error timestamp')

# ============ SUMMARIES ============
request_size = Summary('request_size_bytes', 'Request size in bytes')
response_size = Summary('response_size_bytes', 'Response size in bytes')


# ============ DECORATORS ============

def monitor_llm_call(model: str, provider: str = "openai"):
    """Decorator to monitor LLM API calls"""
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            start = time.time()
            status = "success"
            try:
                result = await func(*args, **kwargs)
                return result
            except Exception as e:
                status = "error"
                last_llm_error_time.set(time.time())
                raise
            finally:
                duration = time.time() - start
                llm_calls_total.labels(
                    model=model, provider=provider, status=status
                ).inc()
                llm_latency_seconds.labels(model=model).observe(duration)
        return wrapper
    return decorator


def monitor_rag_query():
    """Decorator to monitor RAG queries"""
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            start = time.time()
            status = "success"
            try:
                result = await func(*args, **kwargs)
                return result
            except Exception as e:
                status = "error"
                raise
            finally:
                duration = time.time() - start
                rag_queries_total.labels(status=status).inc()
                rag_query_duration.labels(stage="total").observe(duration)
        return wrapper
    return decorator


# ============ FASTAPI INTEGRATION ============
from fastapi import FastAPI, Request
from prometheus_fastapi_instrumentator import Instrumentator
import time

app = FastAPI()

# Auto-instrument FastAPI endpoints
Instrumentator().instrument(app).expose(app)

@app.middleware("http")
async def track_metrics(request: Request, call_next):
    """Custom middleware for additional metrics"""
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    
    http_request_duration.labels(
        method=request.method,
        endpoint=request.url.path,
        status=response.status_code
    ).observe(duration)
    
    return response
```

### PromQL — Deep Dive with Examples

PromQL (Prometheus Query Language) se data query karte hain. Kuch useful queries:

```promql
# ============ RATE QUERIES ============

# LLM calls per second (rate)
rate(llm_calls_total{status="success"}[5m])

# Error rate percentage
rate(llm_calls_total{status="error"}[5m]) 
/ 
rate(llm_calls_total{}[5m]) * 100

# ============ LATENCY QUERIES ============

# Average LLM latency
avg(llm_latency_seconds)

# P95 latency
histogram_quantile(0.95, rate(llm_latency_seconds_bucket[5m]))

# P99 latency
histogram_quantile(0.99, rate(llm_latency_seconds_bucket[5m]))

# ============ HISTOGRAM QUERIES ============

# Requests per bucket
rate(llm_latency_seconds_bucket[5m])

# ============ GAUGE QUERIES ============

# Active users over time
active_users

# Vector DB growth
vector_db_size

# Daily cost
daily_llm_cost

# Memory usage (from node_exporter)
(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100

# CPU usage
100 - (avg by(instance) (rate(node_cpu_seconds_total{ mode="idle"}[5m])) * 100)

# ============ COMPLEX QUERIES ============

# SLO: LLM success rate > 99.5% over 30d
(
  sum(rate(llm_calls_total{status!="error"}[30d]))
  /
  sum(rate(llm_calls_total[30d]))
) > 0.995

# Cost projection (per hour → daily)
sum(rate(daily_llm_cost[1h])) * 24

# Cache efficiency
rate(cache_hits_total{result="hit"}[5m])
/
rate(cache_hits_total{}[5m])
```

### Grafana Dashboard Setup

Grafana dashboards ko code ke saath provision karo:

```yaml
# grafana/datasources/datasources.yml
apiVersion: 1

datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090
    isDefault: true

  - name: Loki
    type: loki
    access: proxy
    url: http://loki:3100
```

### Recommended Grafana Panels

```
Panel 1: System Overview
  - CPU usage (node_exporter)
  - Memory usage (node_exporter)
  - Disk usage (node_exporter)
  - Network I/O (node_exporter)
  Type: Stat / Time series
  Color: Green < 70%, Yellow < 90%, Red > 90%

Panel 2: Docker Containers
  - Container CPU/Memory (cadvisor)
  - Container restart count
  - Container uptime
  Type: Table

Panel 3: AI Metrics
  - LLM call count (rate per minute)
  - LLM latency (p50, p95, p99)
  - RAG query duration
  - Active users
  - Vector DB size
  Type: Time series + Stat

Panel 4: Token Usage
  - Prompt tokens per minute
  - Completion tokens per minute
  - Total tokens per day
  Type: Time series (area)

Panel 5: Costs
  - Daily LLM cost (gauge)
  - Estimated monthly cost
  - Cost per user
  - Cost by model (gpt-4o vs gpt-4o-mini)
  Type: Gauge + Bar chart

Panel 6: Cache Performance
  - Cache hit ratio (%)
  - Cache miss rate
  - Cache size
  Type: Time series

Panel 7: Errors
  - Error rate (4xx, 5xx)
  - LLM error rate
  - Queue size
  - Rate limit hits
  Type: Time series (red threshold)
```

### Grafana Dashboard Variables

Variables use karo taaki ek dashboard multiple environments par kaam kare:

```
Variable: $environment
Type: Query
Query: label_values(node_uname_info, environment)
Values: staging, production

Variable: $model
Type: Query
Query: label_values(llm_calls_total, model)
Values: gpt-4o, gpt-4o-mini, claude-3-haiku
```

Phir queries mein `$environment` aur `$model` use karo:

```promql
rate(llm_calls_total{model="$model"}[5m])
```

### Alertmanager Configuration

```yaml
# alertmanager.yml
global:
  resolve_timeout: 5m
  slack_api_url: 'https://hooks.slack.com/services/YOUR_WEBHOOK'

route:
  receiver: 'default'
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
  routes:
    - match:
        severity: critical
      receiver: 'critical'
      repeat_interval: 1h
    - match:
        severity: warning
      receiver: 'warning'
      repeat_interval: 4h

receivers:
  - name: 'default'
    slack_configs:
      - channel: '#alerts'
        title: '{{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.summary }}'

  - name: 'critical'
    slack_configs:
      - channel: '#critical-alerts'
        title: '🚨 CRITICAL: {{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.summary }}'
        send_resolved: true

  - name: 'warning'
    slack_configs:
      - channel: '#alerts'
        title: '⚠️ {{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.summary }}'
```

### The RED Method for AI Monitoring

**RED = Rate, Errors, Duration.** Har service ke liye teen metrics:

| Service | Rate | Errors | Duration |
|---------|------|--------|----------|
| LLM API | calls/s | 4xx/5xx | p50/p95 |
| RAG | queries/s | retrieval fails | total time |
| Embedding | docs/s | API errors | encode time |
| Agent | actions/s | tool fails | execution |

**Laravel类比:** Laravel Telescope ki tarah sochiye — jo har request ka record rakhata hai. Prometheus + Grafana utna hi powerful hai but production-grade.

### Day 3 Exercise

```
1. Prometheus + Grafana setup with Docker Compose
2. Custom metrics in your FastAPI app (counters, histograms, gauges)
3. PromQL queries for: rate, latency (p95), error percentage
4. Grafana dashboard with at least 4 panels
5. Alertmanager configuration
6. Test: make some API calls, verify metrics show up
7. Set up RED method metrics for LLM, RAG, Embedding

Pro tip: Grafana dashboard ko JSON export karo aur git mein commit karo
```

---

## Day 4 — Logging with Loki

### Why Structured Logging?

Laravel mein aap `Log::info()` karte the. Python mein bhi logging hoti hai but hum structured logging karenge — JSON format mein, jo machines bhi padh sakein.

**Unstructured log (bad):**
```
INFO: User 123 made a query
```

**Structured log (good):**
```json
{
  "event": "rag_query",
  "user_id": 123,
  "query": "What is AI?",
  "latency_ms": 450,
  "chunks_retrieved": 3,
  "confidence": 0.92,
  "timestamp": "2026-01-15T10:30:00Z"
}
```

Structured logs ko filter karna, query karna, aur alert banana easy hota hai.

### Structlog Setup

```python
# app/logging_config.py
import structlog
import logging
from datetime import datetime
import uuid

# Request context — har request ka unique ID
_request_context = {}

def get_request_id():
    return _request_context.get("request_id", "unknown")

def add_request_context(logger, method_name, event_dict):
    """Add request context to every log"""
    event_dict["request_id"] = get_request_id()
    event_dict["environment"] = "production"  # or staging
    event_dict["service"] = "document-ai"
    return event_dict

structlog.configure(
    processors=[
        structlog.contextvars.merge_contextvars,
        structlog.stdlib.filter_by_level,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        add_request_context,  # Custom processor
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.dev.ConsoleRenderer() if __debug__
        else structlog.processors.JSONRenderer()
    ],
    context_class=dict,
    logger_factory=structlog.stdlib.LoggerFactory(),
    wrapper_class=structlog.stdlib.BoundLogger,
    cache_logger_on_first_use=True,
)

logger = structlog.get_logger()


# FastAPI middleware for request context
from fastapi import FastAPI, Request
import time as time_module

app = FastAPI()

@app.middleware("http")
async def logging_middleware(request: Request, call_next):
    """Attach request ID and timing to every request"""
    request_id = uuid.uuid4().hex[:12]
    _request_context["request_id"] = request_id
    
    start = time_module.time()
    response = await call_next(request)
    duration_ms = (time_module.time() - start) * 1000
    
    logger.info(
        "http_request",
        method=request.method,
        path=request.url.path,
        status=response.status_code,
        duration_ms=round(duration_ms, 2),
        user_agent=request.headers.get("user-agent", ""),
    )
    
    return response
```

**Usage throughout the app:**

```python
# Anywhere in your code
from app.logging_config import logger

# Simple info
logger.info("llm_call", model="gpt-4", tokens=150, duration_ms=1200)

# Error with details
try:
    result = await llm_client.generate(prompt)
except Exception as e:
    logger.error(
        "llm_call_failed",
        model="gpt-4",
        error=str(e),
        prompt_length=len(prompt),
        exc_info=True  # Stack trace included
    )

# Slow query warning
if duration > 2000:
    logger.warning(
        "slow_rag_query",
        query=query[:100],  # Truncate for privacy
        duration_ms=duration,
        chunks_retrieved=len(chunks)
    )
```

### Loki + Promtail Setup

```yaml
# Add to docker-compose.monitoring.yml
services:
  loki:
    image: grafana/loki:3.0
    ports:
      - "3100:3100"
    volumes:
      - ./loki-config.yml:/etc/loki/local-config.yaml
      - loki_data:/loki
    command: -config.file=/etc/loki/local-config.yaml
    restart: unless-stopped

  promtail:
    image: grafana/promtail:3.0
    volumes:
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/log:/var/log:ro
      - ./promtail-config.yml:/etc/promtail/config.yml
    command: -config.file=/etc/promtail/config.yml
    restart: unless-stopped

volumes:
  loki_data:
```

```yaml
# loki-config.yml
auth_enabled: false

server:
  http_listen_port: 3100

ingester:
  lifecycler:
    ring:
      kvstore:
        store: inmemory
  chunk_idle_period: 15m
  max_chunk_age: 1h

schema_config:
  configs:
    - from: 2024-01-01
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

storage_config:
  boltdb_shipper:
    active_index_directory: /loki/index
    shared_store: filesystem
  filesystem:
    directory: /loki/chunks

limits_config:
  ingestion_rate_mb: 10
  max_line_size: 256kb
```

```yaml
# promtail-config.yml
server:
  http_listen_port: 9080

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  - job_name: docker
    docker_sd_configs:
      - host: "unix:///var/run/docker.sock"
        refresh_interval: 15s
    relabel_configs:
      - source_labels: ['__meta_docker_container_name']
        target_label: 'container'
      - source_labels: ['__meta_docker_container_log_stream']
        target_label: 'stream'
```

### Log Queries in Grafana

Loki mein log queries LogQL (PromQL-like) mein likhi jati hain:

```logql
# All logs from api container
{container="api"}

# Errors only
{container="api"} |= "error"

# JSON field filter
{container="api"} |= "llm_call" | json | duration_ms > 2000

# Rate of errors per 5 minutes
rate({container="api"} |= "error"[5m])

# Top 5 slowest queries
{container="api"} |= "rag_query" | json 
| topk(5, duration_ms)

# Count by level
count by (level) ({container="api"})

# Cost tracking per model
{container="api"} |= "llm_call" | json 
| sum by (model) (tokens)

# Latency histogram
quantile by (model) (0.95, {container="api"} 
| json | duration_ms > 0)
```

### Correlation IDs Across Services

Jab multiple services ek saath kaam karein (API → RAG → LLM), to correlation ID se trace karo:

```python
# Request starts — generate correlation ID
import uuid

class CorrelationIDMiddleware:
    async def __call__(self, request, call_next):
        correlation_id = request.headers.get(
            "X-Correlation-ID", 
            uuid.uuid4().hex[:16]
        )
        _request_context["correlation_id"] = correlation_id
        
        response = await call_next(request)
        response.headers["X-Correlation-ID"] = correlation_id
        return response

# Pass to downstream services
async def call_llm(prompt: str):
    headers = {
        "X-Correlation-ID": get_request_id()
    }
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json={"model": "gpt-4o", "messages": [...]}
        )
```

### Log Levels Best Practices

```
ERROR:   App cannot recover — LLM API down, DB connection lost
WARNING: App can recover — slow query, rate limit near, retry
INFO:    Normal operations — request served, LLM called, cache hit
DEBUG:   Development only — detailed internal state
```

**Production mein DEBUG mat chalao.** Bahut zyada logs generate hote hain aur cost badh jati hai.

### Log Sampling for High Volume

Jab bahut zyada logs ho (1000+ req/s), to sample karo:

```python
import random

SAMPLE_RATE = {
    "info": 0.1,     # 10% of info logs
    "debug": 0.01,   # 1% of debug
    "warning": 1.0,  # 100% of warnings
    "error": 1.0,    # 100% of errors
}

def should_log(level: str) -> bool:
    return random.random() < SAMPLE_RATE.get(level, 1.0)

# Usage
if should_log("info"):
    logger.info("llm_call", ...)
```

### ELK Stack Alternative

Loki ke alawa ELK (Elasticsearch, Logstash, Kibana) bhi use kar sakte ho:

| Feature | Loki | ELK |
|---------|------|-----|
| Storage cost | Cheap (no indexing) | Expensive (full text index) |
| Query speed | Medium | Fast (full text search) |
| Setup complexity | Simple | Complex |
| Best for | Operational logs | Full text search |
| Resource usage | Light | Heavy |

**Recommendation:** AI apps ke liye Loki better hai — logs par full text search rarely chahiye hota hai, mostly filtering kaam aata hai.

### Day 4 Exercise

```
1. structlog setup in your FastAPI app
2. Loki + Promtail configuration in Docker Compose
3. Add correlation IDs to all requests
4. Grafana datasource for Loki
5. Log queries in Grafana Explore:

Example Loki queries:
  {container="api"} |= "error"
  {container="api"} |= "llm_call" | json | duration_ms > 2000
  rate({container="api"} |= "error"[5m])
  
6. Set up log level sampling (errors always, info 10%)

Pro tip: Grafana Explore mein Loki datasource select karo
aur "Live" mode mein real-time logs dekh sakte ho!
```

---

## Day 5 — Alerting + Model Monitoring + Cost Monitoring

### Why Alerting Matters

Monitoring se aap pata karte ho ki kya ho raha hai. Alerting se aapko pata chalta hai ki kab kuch gadbad hai. Dono zaroori hain.

**Alerting philosophy:**
- Har alert actionable hona chahiye
- False alerts se bacho (alert fatigue)
- Critical alerts → immediate attention
- Warning alerts → working hours mein dekho
- Info alerts → dashboard mein dekh lo

### Prometheus Alerting Rules

```yaml
# prometheus-alerts.yml
groups:
  - name: ai_app_alerts
    interval: 30s
    rules:
      # ============ CRITICAL ALERTS ============
      
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
          team: backend
        annotations:
          summary: "Error rate > 5% for 2 minutes"
          description: |
            HTTP 5xx rate is {{ $value | humanizePercentage }}
            over the last 5 minutes.
            Action: Check application logs for errors.

      - alert: HighLLMLatency
        expr: histogram_quantile(0.95, 
              rate(llm_latency_seconds_bucket[5m])) > 5
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "P95 LLM latency > 5s"
          description: |
            LLM API is slow (P95: {{ $value }}s)
            Action: Check OpenAI/Anthropic status page

      - alert: LLMErrorRate
        expr: rate(llm_calls_total{status="error"}[5m]) 
              / rate(llm_calls_total[5m]) > 0.1
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "LLM error rate > 10%"
          description: "LLM failures: {{ $value }}%"

      - alert: LowDiskSpace
        expr: (node_filesystem_avail_bytes 
              / node_filesystem_size_bytes) < 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Disk space < 10%"
          description: "Disk {{ $labels.mountpoint }} has {{ $value }}% free"

      # ============ WARNING ALERTS ============

      - alert: DailyBudgetExceeded
        expr: daily_llm_cost > 40
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "Daily LLM cost > $40 (budget: $50)"
          description: "Current cost: ${{ $value }}"

      - alert: HighCacheMissRate
        expr: rate(cache_hits_total{result="miss"}[5m]) 
              / rate(cache_hits_total[5m]) > 0.7
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "Cache miss rate > 70%"
          description: "Cache is not effective. Check cache warming logic."

      - alert: RAGConfidenceDrop
        expr: avg(model_accuracy[1h]) < 0.6
        for: 15m
        labels:
          severity: warning
        annotations:
          summary: "RAG confidence dropped below 0.6"
          description: "Average confidence: {{ $value }}. Check data quality."

      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes 
              - node_memory_MemAvailable_bytes) 
              / node_memory_MemTotal_bytes > 0.9
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "Memory usage > 90%"
          description: "Consider scaling up or optimizing"

      - alert: ContainerRestarting
        expr: rate(container_restarts[10m]) > 1
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Container restarting frequently"
          description: "Container {{ $labels.name }} has restarted {{ $value }} times"
```

### Alertmanager Routing

Alerts ko different channels par bhejo based on severity:

```yaml
# alertmanager.yml
global:
  resolve_timeout: 5m
  slack_api_url: 'https://hooks.slack.com/services/...'

route:
  receiver: 'default'
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
  routes:
    - match:
        severity: critical
      receiver: 'critical'
      repeat_interval: 1h
      routes:
        - match:
            team: backend
          receiver: 'critical-backend'
          
    - match:
        severity: warning
      receiver: 'warning'
      repeat_interval: 4h

receivers:
  - name: 'default'
    slack_configs:
      - channel: '#alerts'
        title: '{{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.description }}'
        send_resolved: true

  - name: 'critical'
    slack_configs:
      - channel: '#critical-alerts'
        title: '🚨 CRITICAL: {{ .GroupLabels.alertname }}'
        text: |
          *Description:* {{ .CommonAnnotations.description }}
          *Severity:* {{ .Labels.severity }}
          *Time:* {{ .StartsAt }}
        send_resolved: true
    email_configs:
      - to: 'oncall@team.com'
        send_resolved: true

  - name: 'critical-backend'
    slack_configs:
      - channel: '#backend-alerts'
        title: '🛑 Backend: {{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.description }}'
    pagerduty_configs:
      - routing_key: 'YOUR_PAGERDUTY_KEY'
        severity: 'critical'

  - name: 'warning'
    slack_configs:
      - channel: '#alerts'
        title: '⚠️ {{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.description }}'
```

### Slack/Discord Alerts

Programmatic alerts bhi bhej sakte ho:

```python
# app/alerting.py
import httpx
import os
from datetime import datetime

class AlertManager:
    def __init__(self):
        self.slack_webhook = os.getenv("SLACK_WEBHOOK")
        self.discord_webhook = os.getenv("DISCORD_WEBHOOK")
        self.pagerduty_key = os.getenv("PAGERDUTY_KEY")

    async def send_alert(
        self, 
        level: str, 
        title: str, 
        message: str,
        tags: dict = None
    ):
        """Send alert to all configured channels"""
        timestamp = datetime.now().isoformat()
        
        slack_payload = {
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text", 
                        "text": f"{level}: {title}"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn", 
                        "text": message
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn", 
                            "text": f"Time: {timestamp}"
                        }
                    ]
                }
            ]
        }
        
        if tags:
            tag_text = " | ".join(f"{k}: {v}" for k, v in tags.items())
            slack_payload["blocks"].append({
                "type": "context",
                "elements": [{"type": "mrkdwn", "text": tag_text}]
            })

        async with httpx.AsyncClient(timeout=10.0) as client:
            if self.slack_webhook:
                await client.post(self.slack_webhook, json=slack_payload)
            if self.discord_webhook:
                discord_payload = {
                    "embeds": [{
                        "title": f"{level}: {title}",
                        "description": message,
                        "color": 16711680 if level == "CRITICAL" else 16776960,
                        "timestamp": timestamp
                    }]
                }
                await client.post(self.discord_webhook, json=discord_payload)
            if self.pagerduty_key and level == "CRITICAL":
                await self._send_pagerduty(title, message, tags)

    async def _send_pagerduty(self, title, message, tags):
        """Send critical alerts to PagerDuty"""
        payload = {
            "routing_key": self.pagerduty_key,
            "event_action": "trigger",
            "payload": {
                "summary": title,
                "source": "document-ai",
                "severity": "critical",
                "custom_details": {"message": message, "tags": tags}
            }
        }
        async with httpx.AsyncClient() as client:
            await client.post(
                "https://events.pagerduty.com/v2/enqueue",
                json=payload
            )
```

### Model Monitoring (Drift Detection)

Model drift tab hota hai jab model ka performance degrade ho jaye over time:

```python
# app/monitoring/model_drift.py
import numpy as np
from typing import List, Optional
from datetime import datetime, timedelta
from collections import deque
from scipy import stats  # For statistical tests

class ModelMonitor:
    """Monitor model performance over time"""

    def __init__(self, window_size: int = 100):
        self.window_size = window_size
        self.recent_scores = deque(maxlen=window_size)
        self.baseline_mean: Optional[float] = None
        self.baseline_std: Optional[float] = None
        self.drift_threshold = 2.0  # Z-score threshold

    def record_query(
        self, 
        query: str, 
        chunks: List[dict],
        relevance_scores: List[float]
    ):
        """Record retrieval relevance scores"""
        avg_score = float(np.mean(relevance_scores)) if relevance_scores else 0.0
        self.recent_scores.append({
            "timestamp": datetime.now(),
            "query_length": len(query),
            "avg_relevance": avg_score,
            "num_chunks": len(chunks),
            "top_score": max(relevance_scores) if relevance_scores else 0.0,
        })

    def check_drift(self) -> dict:
        """Check if model performance has drifted"""
        if len(self.recent_scores) < 30:
            return {
                "drift_detected": False, 
                "reason": "insufficient_data",
                "samples": len(self.recent_scores)
            }

        scores = [s["avg_relevance"] for s in self.recent_scores]
        current_mean = np.mean(scores)

        if self.baseline_mean is None:
            self.baseline_mean = current_mean
            self.baseline_std = np.std(scores)
            return {
                "drift_detected": False, 
                "reason": "establishing_baseline",
                "baseline_mean": current_mean
            }

        # Z-score based drift detection
        z_score = abs(current_mean - self.baseline_mean) / (self.baseline_std + 1e-8)

        if z_score > self.drift_threshold:
            drift = {
                "drift_detected": True,
                "z_score": round(z_score, 2),
                "previous_mean": round(self.baseline_mean, 3),
                "current_mean": round(current_mean, 3),
                "direction": "up" if current_mean > self.baseline_mean else "down",
                "suggestion": "Check embedding model or data quality",
                "timestamp": datetime.now().isoformat()
            }
            
            # Send alert if drift detected
            alert_manager.send_alert(
                level="WARNING",
                title="Model Drift Detected",
                message=(
                    f"Z-score: {drift['z_score']:.2f}\n"
                    f"Previous mean: {drift['previous_mean']:.3f}\n"
                    f"Current mean: {drift['current_mean']:.3f}\n"
                ),
                tags={"model": "embedding", "drift_z": str(z_score)}
            )
            
            return drift

        return {
            "drift_detected": False, 
            "z_score": round(z_score, 2),
            "current_mean": round(current_mean, 3)
        }

    def weekly_report(self) -> dict:
        """Generate weekly model performance report"""
        if len(self.recent_scores) < 7:
            return {"error": "insufficient_data"}
        
        recent_week = list(self.recent_scores)[-7:]
        scores = [s["avg_relevance"] for s in recent_week]
        
        return {
            "report_period": {
                "start": recent_week[0]["timestamp"].isoformat(),
                "end": recent_week[-1]["timestamp"].isoformat(),
            },
            "mean_score": round(np.mean(scores), 3),
            "std_score": round(np.std(scores), 3),
            "min_score": round(min(scores), 3),
            "max_score": round(max(scores), 3),
            "total_queries": len(recent_week),
            "drift_events": sum(
                1 for s in scores if s < (self.baseline_mean - 2 * self.baseline_std)
            ) if self.baseline_mean else 0,
        }
```

### Cost Monitoring — Deep Dive

```python
# app/monitoring/cost_tracker.py
from datetime import datetime, date
from typing import Dict, Optional
from collections import defaultdict

class CostTracker:
    """Track, budget, and alert on LLM API costs"""

    def __init__(self, daily_budget: float = 50.0, monthly_budget: float = 1000.0):
        self.daily_budget = daily_budget
        self.monthly_budget = monthly_budget
        self.daily_cost = 0.0
        self.monthly_cost = 0.0
        self.last_reset = datetime.now().date()
        self.last_month_reset = datetime.now().month
        
        # Per-user tracking
        self.user_costs: Dict[str, float] = defaultdict(float)
        
        # Model pricing (per 1K tokens)
        self.model_pricing = {
            "gpt-4": {"input": 0.03, "output": 0.06},
            "gpt-4o": {"input": 0.01, "output": 0.03},
            "gpt-4o-mini": {"input": 0.00015, "output": 0.0006},
            "claude-3-haiku": {"input": 0.00025, "output": 0.00125},
            "claude-3-sonnet": {"input": 0.003, "output": 0.015},
            "claude-3-opus": {"input": 0.015, "output": 0.075},
            "text-embedding-3-small": {"input": 0.00002, "output": 0.0},
            "text-embedding-3-large": {"input": 0.00013, "output": 0.0},
        }

    def track(
        self, 
        model: str, 
        input_tokens: int, 
        output_tokens: int,
        user_id: Optional[str] = None
    ) -> float:
        """Record LLM API usage and calculate cost"""
        today = datetime.now().date()
        
        # Reset daily counter
        if today != self.last_reset:
            self.daily_cost = 0.0
            self.last_reset = today
        
        # Reset monthly counter
        if datetime.now().month != self.last_month_reset:
            self.monthly_cost = 0.0
            self.last_month_reset = datetime.now().month

        pricing = self.model_pricing.get(model, {"input": 0, "output": 0})
        cost = (
            (input_tokens * pricing["input"]) +
            (output_tokens * pricing["output"])
        ) / 1000

        self.daily_cost += cost
        self.monthly_cost += cost
        daily_cost.set(self.daily_cost)  # Prometheus gauge
        
        # Per-user tracking
        if user_id:
            self.user_costs[user_id] += cost

        # Budget alerts
        if self.daily_cost > self.daily_budget * 0.8:
            alert_manager.send_alert(
                level="WARNING",
                title="Daily Budget 80% Used",
                message=(
                    f"Daily cost: ${self.daily_cost:.2f}\n"
                    f"Budget: ${self.daily_budget:.2f}\n"
                    f"Model: {model}"
                )
            )

        if self.daily_cost > self.daily_budget:
            alert_manager.send_alert(
                level="CRITICAL",
                title="Daily Budget Exceeded",
                message=(
                    f"Daily cost: ${self.daily_cost:.2f}\n"
                    f"Budget: ${self.daily_budget:.2f}"
                )
            )

        return cost

    def get_user_report(self, user_id: str) -> dict:
        """Get cost report for a specific user"""
        return {
            "user_id": user_id,
            "total_cost": round(self.user_costs.get(user_id, 0), 4),
            "percentage": round(
                (self.user_costs.get(user_id, 0) / max(self.daily_cost, 0.01)) * 100, 
                1
            ) if self.daily_cost > 0 else 0,
        }

    def get_summary(self) -> dict:
        """Get full cost summary"""
        top_users = sorted(
            self.user_costs.items(), 
            key=lambda x: x[1], 
            reverse=True
        )[:5]
        
        return {
            "daily_cost": round(self.daily_cost, 2),
            "monthly_cost": round(self.monthly_cost, 2),
            "daily_budget": self.daily_budget,
            "monthly_budget": self.monthly_budget,
            "budget_remaining": round(
                self.daily_budget - self.daily_cost, 2
            ),
            "top_users": [
                {"user_id": uid, "cost": round(cost, 2)}
                for uid, cost in top_users
            ],
        }
```

### Dashboard as Code

Grafana dashboards ko provisioning files ke through manage karo:

```json
{
  "apiVersion": 1,
  "providers": [
    {
      "name": "default",
      "orgId": 1,
      "folder": "AI Apps",
      "type": "file",
      "options": {
        "path": "/etc/grafana/provisioning/dashboards"
      }
    }
  ]
}
```

Dashboard JSON ko git mein commit karo. Yeh Infrastructure as Code ka part hai.

### Day 5 Exercise

```
1. Prometheus alerting rules for AI app:
   - High error rate (>5%)
   - High LLM latency (>5s)
   - Low disk space (<10%)
   - Budget exceeded

2. Alertmanager setup with Slack webhook integration
3. Model drift detection monitor (Z-score based)
4. Cost tracking with daily + monthly budget
5. Per-user cost tracking
6. Test: manually trigger an alert and verify Slack notification
7. Dashboard-as-code in Grafana provisioning

Pro tip: Alerts ko production deploy se pehle staging mein test karo
```

---

## Day 6 — Backup + Security

### Why Backup Matters for AI Apps

AI apps mein data critical hai. Document AI ke vector embeddings, ApexERP ke customer data, Flow Studio ke sessions — yeh sab valuable hai.

**Laravel类比:** Laravel mein aap database backups lagate the (mysqldump). AI apps mein zyada layers hain — PostgreSQL, Qdrant, Redis, model files. Sabka backup chahiye.

### Database Backups — Production Grade

```bash
#!/bin/bash
# backup.sh — Automated daily backups

set -euo pipefail

BACKUP_DIR="/backups"
DB_NAME="documentai"
DB_USER="user"
RETENTION_DAYS=7
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SLACK_WEBHOOK="${SLACK_WEBHOOK:-}"

echo "[$(date)] Starting backup..."

# ========================================
# 1. PostgreSQL Backup
# ========================================
echo "Backing up PostgreSQL..."
docker compose exec -T postgres \
  pg_dump -U $DB_USER $DB_NAME | gzip > \
  "$BACKUP_DIR/postgres_${TIMESTAMP}.sql.gz"

# Verify backup integrity
gunzip -t "$BACKUP_DIR/postgres_${TIMESTAMP}.sql.gz"
echo "✅ PostgreSQL backup: ${BACKUP_DIR}/postgres_${TIMESTAMP}.sql.gz"
echo "   Size: $(du -h "$BACKUP_DIR/postgres_${TIMESTAMP}.sql.gz" | cut -f1)"

# ========================================
# 2. Qdrant Snapshot
# ========================================
echo "Creating Qdrant snapshot..."
curl -sf -X POST \
  "http://localhost:6333/collections/documents/snapshot" && \
  echo "✅ Qdrant snapshot created" || \
  echo "❌ Qdrant snapshot failed"

# ========================================
# 3. Redis Backup (RDB)
# ========================================
echo "Backing up Redis..."
docker compose exec -T redis redis-cli SAVE
docker compose cp redis:/data/dump.rdb \
  "$BACKUP_DIR/redis_${TIMESTAMP}.rdb"
echo "✅ Redis backup: ${BACKUP_DIR}/redis_${TIMESTAMP}.rdb"

# ========================================
# 4. Clean Old Backups
# ========================================
echo "Cleaning backups older than ${RETENTION_DAYS} days..."
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "*.rdb" -mtime +$RETENTION_DAYS -delete

# ========================================
# 5. Upload to Off-site Storage
# ========================================
if command -v rclone &> /dev/null; then
  echo "Uploading to S3-compatible storage..."
  rclone sync "$BACKUP_DIR" "s3:document-ai-backups/$(date +%Y/%m)/" \
    --progress
  echo "✅ Off-site backup complete"
else
  echo "⚠️  rclone not installed — skipping off-site backup"
fi

echo "[$(date)] Backup complete!"

# Slack notification
if [ -n "$SLACK_WEBHOOK" ]; then
  curl -sf -X POST -H "Content-Type: application/json" \
    -d "{\"text\":\"✅ Backup complete: $TIMESTAMP\"}" \
    "$SLACK_WEBHOOK"
fi
```

**Cron setup for daily backups:**

```yaml
# docker-compose.backup.yml
services:
  backup:
    image: alpine:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./backups:/backups
      - ./backup.sh:/backup.sh:ro
    environment:
      - SLACK_WEBHOOK=${SLACK_WEBHOOK}
    command: >
      sh -c "
        apk add --no-cache docker-cli postgresql-client curl &&
        chmod +x /backup.sh &&
        echo '0 3 * * * /backup.sh' | crontab - &&
        crond -f -l 2
      "
    restart: unless-stopped
```

### Restore Procedure

```bash
#!/bin/bash
# restore.sh — Disaster recovery

set -euo pipefail

BACKUP_FILE="${1:-}"

if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: $0 <backup-file>"
  echo "Available backups:"
  ls -1 /backups/*.sql.gz
  exit 1
fi

echo "🚨 Starting restore from: $BACKUP_FILE"
echo "WARNING: This will OVERWRITE current data!"
read -p "Continue? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
  echo "Cancelled"
  exit 0
fi

# Stop services
docker compose stop api
echo "Services stopped"

# Restore PostgreSQL
echo "Restoring PostgreSQL..."
gunzip -c "$BACKUP_FILE" | docker compose exec -T postgres \
  psql -U user documentai
echo "✅ PostgreSQL restored"

# Restore Redis
echo "Restoring Redis..."
docker compose cp "$(dirname $BACKUP_FILE)/redis_*.rdb" redis:/data/dump.rdb
docker compose restart redis
echo "✅ Redis restored"

# Restart services
docker compose up -d api
echo "✅ Services restarted"

# Health check
sleep 5
curl -sf http://localhost:8000/health && \
  echo "✅ Health check passed" || \
  echo "❌ Health check failed — manual intervention needed"
```

### Docker Volume Backups

```bash
# Backup named Docker volumes
docker run --rm \
  -v qdrant_data:/source:ro \
  -v ./backups:/backups \
  alpine tar czf "/backups/qdrant_$(date +%Y%m%d).tar.gz" \
  -C /source .

# Restore volume backup
docker run --rm \
  -v qdrant_data:/target \
  -v ./backups:/backups:ro \
  alpine tar xzf /backups/qdrant_20260115.tar.gz \
  -C /target
```

### Security Checklist — Production Hardening

```bash
#!/bin/bash
# security-hardening.sh

set -euo pipefail

echo "🔒 Starting security hardening..."

# ========================================
# 1. Firewall (UFW)
# ========================================
echo "Configuring firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp       # SSH
ufw allow 80/tcp       # HTTP
ufw allow 443/tcp      # HTTPS
ufw allow 51820/udp    # WireGuard VPN (optional)
ufw --force enable
echo "✅ Firewall configured"

# ========================================
# 2. Fail2Ban
# ========================================
echo "Installing Fail2Ban..."
apt-get update -qq && apt-get install -y -qq fail2ban

cat > /etc/fail2ban/jail.local << 'EOF'
[sshd]
enabled = true
maxretry = 3
bantime = 3600
findtime = 600

[nginx-http-auth]
enabled = true
maxretry = 5
bantime = 600
findtime = 300

[nginx-botsearch]
enabled = true
maxretry = 10
bantime = 3600
findtime = 600
EOF

systemctl restart fail2ban
echo "✅ Fail2Ban configured"

# ========================================
# 3. SSL (Let's Encrypt)
# ========================================
echo "Configuring SSL..."
certbot --nginx -d document-ai.apexpillar.tech --non-interactive \
  --agree-tos --email admin@apexpillar.tech

# Auto-renewal
systemctl enable certbot.timer
echo "✅ SSL configured"

# ========================================
# 4. SSH Hardening
# ========================================
echo "Hardening SSH..."
cat >> /etc/ssh/sshd_config << 'EOF'

# Security hardening
PermitRootLogin prohibit-password
PasswordAuthentication no
PubkeyAuthentication yes
Port 2222
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
EOF

systemctl restart sshd
echo "✅ SSH hardened (port changed to 2222)"

# ========================================
# 5. Docker Security
# ========================================
echo "Configuring Docker security..."
# Run containers non-root
# Use read-only filesystem where possible
# Limit capabilities

echo ""
echo "🔒 Security hardening complete!"
echo ""
echo "Next steps:"
echo "  1. Test SSH on port 2222 before closing session"
echo "  2. Run: docker run --rm aquasec/trivy image your-image:latest"
echo "  3. Run: docker run --rm docker/docker-bench-security"
```

### Docker Security Best Practices

```dockerfile
# Dockerfile — Secure version
FROM python:3.12-slim

# Create non-root user
RUN addgroup --system app && \
    adduser --system --ingroup app app

WORKDIR /app

# Copy only what's needed
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app/ ./app/
COPY --chown=app:app models/ ./models/

# Switch to non-root user
USER app

# Read-only root filesystem
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# docker-compose.prod.yml — Secure config
services:
  api:
    build: .
    user: app  # Non-root
    read_only: true  # Read-only filesystem
    tmpfs:
      - /tmp  # Temp storage for runtime
    cap_drop:
      - ALL  # Drop all capabilities
    cap_add:
      - NET_BIND_SERVICE  # Only needed capability
    security_opt:
      - no-new-privileges:true  # Prevent privilege escalation
    environment:
      - PYTHONUNBUFFERED=1
    restart: unless-stopped
```

### Container Security Scanning in CI

```yaml
# Add to GitHub Actions
- name: Scan Docker image
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
    format: 'table'
    severity: 'HIGH,CRITICAL'
    exit-code: '1'  # Fail on vulnerabilities
  
- name: Docker Bench Security
  run: |
    docker run --rm \
      --pid=host \
      -v /var/run/docker.sock:/var/run/docker.sock \
      -v /etc:/etc:ro \
      docker/docker-bench-security
```

### SAST (Static Analysis) in CI

```yaml
- name: Security scan (Semgrep)
  uses: semgrep/semgrep-action@v1
  with:
    config: p/python
    severity: WARNING,ERROR
  
- name: Security scan (Bandit)
  run: |
    pip install bandit
    bandit -r app/ -f json -o bandit-report.json
```

### Secrets Rotation

```bash
#!/bin/bash
# rotate-secrets.sh — Rotate API keys every 90 days

# Generate new API key
NEW_KEY=$(openssl rand -base64 32)

# Update Docker secret
echo "$NEW_KEY" | docker secret create openai_api_key_v2 -

# Update service to use new secret
docker service update \
  --secret-rm openai_api_key_v1 \
  --secret-add openai_api_key_v2 \
  document-api

# Revoke old key at OpenAI
curl -X POST https://api.openai.com/v1/api-keys/revoke \
  -H "Authorization: Bearer $OLD_KEY"

echo "✅ Secrets rotated"
```

### Day 6 Exercise

```
1. Automated backup script (PostgreSQL + Redis + Qdrant)
2. Crontab setup for daily backups at 3 AM
3. Test backup restore in staging environment
4. Firewall rules (UFW) — only SSH, HTTP, HTTPS
5. Fail2Ban setup for SSH + Nginx
6. SSH hardening (port change, key-only auth)
7. Docker security hardening (non-root, read-only)
8. Container vulnerability scan (Trivy in CI)
9. Off-site backup (S3-compatible storage)

Pro tip: Disaster recovery drill karo — ek random day par backup restore karo
```

---

## Day 7 — Full Deploy: All 3 Projects Live

### Production Deployment Strategy

Teeno projects ko ek saath deploy karna hai. Strategy yeh hai:

```
Document AI     → document-ai.apexpillar.tech
ApexERP         → apexerp.apexpillar.tech
Flow Studio     → flow.apexpillar.tech

Sab ek hi VPS par — Traefik reverse proxy ke saath
```

### Deployment Script — Production Grade

```bash
#!/bin/bash
# deploy-all.sh — Deploy all 3 projects with rollback

set -euo pipefail

SLACK_WEBHOOK="${SLACK_WEBHOOK:-}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="/var/log/deploy_${TIMESTAMP}.log"

log() {
  echo "[$(date '+%H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

notify_slack() {
  if [ -n "$SLACK_WEBHOOK" ]; then
    curl -sf -X POST -H "Content-Type: application/json" \
      -d "{\"text\":\"$1\"}" "$SLACK_WEBHOOK" &>/dev/null
  fi
}

deploy_project() {
  local NAME=$1
  local DIR=$2
  local PORT=$3
  local HEALTH_URL=$4

  log "========================================"
  log "🚀 Deploying $NAME..."
  log "========================================"

  cd "$DIR"

  # 1. Pull latest code
  log "Pulling latest code..."
  git pull origin main

  # 2. Build new image
  log "Building Docker image..."
  docker compose -f docker-compose.prod.yml build --pull

  # 3. Backup current state
  log "Creating database backup..."
  docker compose exec -T postgres pg_dump -U user db | gzip > \
    "/backups/${NAME}_pre_deploy_${TIMESTAMP}.sql.gz" || true

  # 4. Deploy new version
  log "Deploying new version..."
  docker compose -f docker-compose.prod.yml up -d --force-recreate --wait

  # 5. Health check
  log "Running health check..."
  for i in {1..30}; do
    if curl -sf "$HEALTH_URL" > /dev/null 2>&1; then
      log "✅ $NAME health check passed (attempt $i)"
      notify_slack "✅ $NAME deployed successfully"
      return 0
    fi
    log "  Waiting... ($i/30)"
    sleep 1
  done

  # 6. Rollback on failure
  log "❌ $NAME health check failed! Rolling back..."
  
  # Revert to previous Docker image
  docker compose -f docker-compose.prod.yml down
  docker compose -f docker-compose.prod.yml up -d --force-recreate
  
  # Notify
  notify_slack "🚨 $NAME deployment FAILED — rolled back"
  
  return 1
}

log "🎯 Starting deployment at $TIMESTAMP"
notify_slack "🚀 Deployment started: $TIMESTAMP"

# ========================================
# Deploy Document AI
# ========================================
deploy_project \
  "Document AI" \
  "/opt/document-ai" \
  "8000" \
  "http://localhost:8000/health"

# ========================================
# Deploy ApexERP
# ========================================
deploy_project \
  "ApexERP" \
  "/opt/apexerp" \
  "8001" \
  "http://localhost:8001/health"

# ========================================
# Deploy Flow Studio
# ========================================
deploy_project \
  "Flow Studio" \
  "/opt/flow-studio" \
  "8002" \
  "http://localhost:8002/health"

log ""
log "========================================"
log "🎉 All projects deployed successfully!"
log "========================================"

# Final verification
log ""
log "📄 Document AI: https://document-ai.apexpillar.tech"
log "🏪 ApexERP:     https://apexerp.apexpillar.tech"
log "🎵 Flow Studio: https://flow.apexpillar.tech"
log ""
log "Deployment log: $LOG_FILE"

notify_slack "🎉 All 3 projects deployed successfully!"
```

### Blue-Green Deployment with Traefik

```yaml
# docker-compose.prod.yml — Blue-green setup
services:
  api-blue:
    build: .
    container_name: api-blue
    expose:
      - "8000"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.api.rule=Host(`document-ai.apexpillar.tech`)"
      - "traefik.http.routers.api.service=api-blue"
      - "traefik.http.services.api-blue.loadbalancer.server.port=8000"
    restart: unless-stopped

  api-green:
    build: .
    container_name: api-green
    expose:
      - "8000"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.api-green.rule=Host(`document-ai.apexpillar.tech`)"
      - "traefik.http.routers.api-green.service=api-green"
      - "traefik.http.services.api-green.loadbalancer.server.port=8000"
    restart: unless-stopped
```

Switch karna:
```bash
# Switch from blue to green
docker compose stop api-blue
docker compose up -d api-green
# Update Traefik routing (via labels)
docker compose exec traefik traefik reload
```

### Canary Releases

Canary release = naya version pehle 10% users ko, phir dheere-dheere badhao:

```yaml
# Traefik canary routing
http:
  routers:
    api-canary:
      rule: "Host(`document-ai.apexpillar.tech`)"
      service: "api-canary"
      weight: 10  # 10% traffic

  services:
    api:
      loadBalancer:
        servers:
          - url: "http://api-blue:8000"
        weight: 90  # 90% traffic

    api-canary:
      loadBalancer:
        servers:
          - url: "http://api-green:8000"
        weight: 10  # 10% traffic
```

**Laravel类比:** Laravel Forge mein bhi aap "Quick Deploy" karte the jisme naye version ko turant deploy karte ho. Canary usse safer hai — dheere-dheere traffic badhao, agar koi issue ho to turant wapas lao.

### Post-Deployment Verification

```bash
#!/bin/bash
# post-deploy-check.sh — Verify deployment

set -euo pipefail

echo "🔍 Post-deployment verification..."
FAILED=0

check() {
  local DESC=$1
  local URL=$2
  local EXPECTED=$3
  
  response=$(curl -sf -o /dev/null -w "%{http_code}" "$URL" 2>&1 || echo "failed")
  
  if [ "$response" = "$EXPECTED" ]; then
    echo "  ✅ $DESC ($response)"
  else
    echo "  ❌ $DESC — expected $EXPECTED, got $response"
    FAILED=1
  fi
}

echo ""
echo "📄 Document AI:"
check "Health endpoint" "https://document-ai.apexpillar.tech/health" "200"
check "RAG endpoint" "https://document-ai.apexpillar.tech/api/rag" "200"
check "SSL certificate" "https://document-ai.apexpillar.tech" "200"

echo ""
echo "🏪 ApexERP:"
check "Health endpoint" "https://apexerp.apexpillar.tech/health" "200"
check "Products list" "https://apexerp.apexpillar.tech/api/products" "200"

echo ""
echo "🎵 Flow Studio:"
check "Health endpoint" "https://flow.apexpillar.tech/health" "200"

echo ""
if [ "$FAILED" -eq 0 ]; then
  echo "🎉 All checks passed!"
else
  echo "⚠️  Some checks failed — investigate!"
  exit 1
fi
```

### Rollback Strategies

| Strategy | Time | Complexity | Best For |
|----------|------|------------|----------|
| **Git revert** | 2 min | Low | Code issues |
| **Docker image revert** | 1 min | Low | Build issues |
| **DB restore** | 5-30 min | High | Data corruption |
| **DNS switch** | 5 min | Medium | Blue-green |

**Quick rollback script:**

```bash
#!/bin/bash
# rollback.sh — Quick rollback to previous version

set -euo pipefail

PROJECT=$1  # document-ai, apexerp, flow

echo "🚨 Rolling back $PROJECT..."

cd "/opt/$PROJECT"

# Get previous image tag
PREVIOUS_TAG=$(docker images --format "{{.Tag}}" | \
  grep -v "latest" | sort -r | sed -n '2p')

if [ -z "$PREVIOUS_TAG" ]; then
  echo "❌ No previous version found"
  exit 1
fi

echo "Rolling back to: $PREVIOUS_TAG"

# Pull previous version
docker compose pull api
docker tag "api:$PREVIOUS_TAG" "api:latest"

# Restart
docker compose up -d api --force-recreate

# Verify
for i in {1..15}; do
  if curl -sf http://localhost:8000/health; then
    echo "✅ Rollback successful"
    exit 0
  fi
  sleep 2
done

echo "❌ Rollback failed — manual intervention needed"
exit 1
```

### Final Architecture — All 3 Projects

```
                          ┌──────────────────────────┐
                          │       Cloudflare          │
                          │   (CDN, DDoS, SSL)        │
                          └────────────┬─────────────┘
                                       │
                          ┌────────────▼─────────────┐
                          │       Hetzner VPS         │
                          │     (8 vCPU, 32GB RAM)    │
                          ├──────────────────────────┤
                          │        Traefik             │
                          │    (Reverse Proxy + SSL)   │
                          ├──────┬──────┬──────┬──────┤
                          │ doc  │ apex │ flow │ mon  │
                          │ .ai  │ .ai  │ .ai  │ itor │
                          │ Port │ Port │ Port │ ing  │
                          │ 8000 │ 8001 │ 8002 │      │
                          ├──────┼──────┼──────┼──────┤
                          │                               │
                          │  ┌─────────────────────────┐  │
                          │  │     Shared Services      │  │
                          │  │  ┌─────┐ ┌──────┐       │  │
                          │  │  │Redis│ │Qdrant│       │  │
                          │  │  └─────┘ └──────┘       │  │
                          │  │  ┌──────────────────┐   │  │
                          │  │  │  Monitoring       │   │  │
                          │  │  │  Prometheus       │   │  │
                          │  │  │  Grafana          │   │  │
                          │  │  │  Loki             │   │  │
                          │  │  │  Alertmanager     │   │  │
                          │  │  └──────────────────┘   │  │
                          │  └─────────────────────────┘  │
                          └──────────────────────────────┘
```

### Day 7 — Week 2 Checklist

```
FINAL CHECKLIST — Production Ready:

CI/CD:
  ☐ GitHub Actions CI pipeline (lint + test + build)
  ☐ Security scan (Trivy) in CI
  ☐ Staging + production environments
  ☐ Automatic rollback on health check failure
  ☐ Slack notification for deploy status

Testing:
  ☐ Unit tests (chunkers, parsers, tools, models)
  ☐ Integration tests (RAG, agent, DB)
  ☐ RAG quality tests (relevance, latency)
  ☐ Coverage > 80%

Monitoring:
  ☐ Prometheus + Grafana setup
  ☐ Custom metrics (LLM calls, latency, tokens, cost)
  ☐ Grafana dashboard (5+ panels)
  ☐ RED method metrics for all services

Logging:
  ☐ Structured logging (structlog)
  ☐ Loki + Promtail setup
  ☐ Correlation IDs in all logs
  ☐ Log queries in Grafana Explore

Alerting:
  ☐ Alerting rules (error rate, latency, budget)
  ☐ Alertmanager with Slack integration
  ☐ Model drift detection
  ☐ Cost tracking with budget alerts

Backup:
  ☐ Automated database backups (daily)
  ☐ Off-site backup (S3-compatible)
  ☐ Restore procedure documented
  ☐ Disaster recovery drill completed

Security:
  ☐ Firewall (UFW)
  ☐ Fail2Ban
  ☐ SSL for all 3 domains
  ☐ SSH hardening
  ☐ Docker non-root, read-only
  ☐ Container vulnerability scanning

Deployment:
  ☐ deploy-all.sh script ready
  ☐ Rollback procedure tested
  ☐ Post-deployment verification script
  ☐ All 3 projects accessible via SSL

🎉 CELEBRATE: All 3 projects production-ready!
```

### Production Readiness Tips

```
1. Load testing: Deploy se pehle karo (locust/vegeta)
2. Rate limiting: LLM APIs par rate limit laga do
3. Graceful degradation: Agar LLM down ho, to fallback response do
4. Feature flags: Naye features ko flag ke peeche rakho
5. Runbook: Har common issue ka solution likh do
6. On-call rotation: Kaun uth ke fix karega?
7. Cost budget: LLM API cost par monthly limit laga do
8. Capacity planning: Kitne users handle kar sakte ho?
9. Disaster recovery: Agar server crash ho to kya hoga?
10. Monitoring SLA: Kitni der mein alert generate hoga?
```

---

## Resources

- **Prometheus:** [prometheus.io/docs](https://prometheus.io/docs)
- **Grafana:** [grafana.com/docs](https://grafana.com/docs)
- **Loki:** [grafana.com/docs/loki](https://grafana.com/docs/loki)
- **GitHub Actions:** [docs.github.com/actions](https://docs.github.com/actions)
- **Prometheus FastAPI:** [github.com/trallnag/prometheus-fastapi-instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator)
- **structlog:** [structlog.org](https://structlog.org)
- **RAGAS (RAG evaluation):** [docs.ragas.io](https://docs.ragas.io)
- **Trivy (container scan):** [github.com/aquasecurity/trivy](https://github.com/aquasecurity/trivy)
- **Docker Bench Security:** [github.com/docker/docker-bench-security](https://github.com/docker/docker-bench-security)
- **Alertmanager:** [prometheus.io/docs/alerting/latest/alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/)
- **Traefik:** [doc.traefik.io/traefik](https://doc.traefik.io/traefik/)
- **Locust (load testing):** [locust.io](https://locust.io)
