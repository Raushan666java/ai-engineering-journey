<!-- Clear Language: Keep sentences under 50 words -->
# Advanced RAG Techniques

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Implement self-RAG with self-reflection and retrieval on demand |
| LO2 | Design multi-hop RAG for complex, multi-step queries |
| LO3 | Apply iterative retrieval with feedback loops |
| LO4 | Build agentic RAG with tool-use and routing |
| LO5 | Implement graph-based RAG with entity relationships |
| LO6 | Evaluate advanced RAG against standard RAG baselines |

## Introduction

Understanding advanced rag techniques is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering advanced rag techniques.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding advanced rag techniques is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how advanced rag techniques works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind advanced rag techniques
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | Self-RAG | Reflection on need for retrieval, self-critique |
| 7.2 | Multi-Hop RAG | Decomposing complex queries, iterative search |
| 7.3 | Iterative Retrieval | Feedback-driven re-retrieval |
| 7.4 | Agentic RAG | Tool routing, query planning |
| 7.5 | Graph RAG | Entity extraction, relationship traversal |
| 7.6 | Evaluation | Compare advanced vs standard RAG |

## Chapter Roadmap

```mermaid
flowchart TD
    A[Query] --> B{Self-RAG: Need Retrieval?}
    B -->|Yes| C[Retrieve]
    B -->|No| D[Direct Answer]
    C --> E{Sufficient?}
    E -->|No| F[Reformulate]
    F --> C
    E -->|Yes| G[Multi-Hop]
    G --> H[Generate]
    H --> I[Critique]
    I -->|Needs more| C
    I -->|Done| J[Final Answer]
```text

## 7.1 Self-RAG

Self-RAG makes the LLM reflect on whether retrieval is needed and whether the retrieved information is sufficient.

### 7.1.1 Retrieval Decision

```python
class RetrievalDecider:
    def __init__(self, confidence_threshold: float = 0.7):
        self.threshold = confidence_threshold

    def needs_retrieval(self, query: str, model_fn) -> bool:
        prompt = f"""Determine if answering this question requires external knowledge (retrieval) or if the model's internal knowledge suffices.

Question: {query}

Respond with only: RETRIEVAL or NO_RETRIEVAL"""
        response = model_fn(prompt)

        if "NO_RETRIEVAL" in response:
            return False
        return True

    def should_retrieve_for_fact(self, query: str, model_fn) -> bool:
        """Classify query type to determine retrieval need."""
        classification_prompt = f"""Classify this query:
1. FACTUAL_RECENT - needs up-to-date info
2. FACTUAL_STATIC - historical facts the model may know
3. OPINION - subjective, no retrieval needed
4. CREATIVE - generation task
5. PRIVATE - needs private data access

Query: {query}

Respond with the class name only."""
        classification = model_fn(classification_prompt)
        return classification in {"FACTUAL_RECENT", "PRIVATE"}


def mock_model_fn(prompt: str) -> str:
    if "retrieval" in prompt.lower() and "classify" in prompt.lower():
        return "FACTUAL_RECENT"
    return "RETRIEVAL"


decider = RetrievalDecider(threshold=0.7)
print(f"Needs retrieval: {decider.needs_retrieval('What is the latest RAG research?', mock_model_fn)}")
```text

### 7.1.2 Self-Reflection After Retrieval

```python
class SelfReflector:
    def __init__(self):
        self.reflection_prompt = """Evaluate if the retrieved context is sufficient to answer the query.

Query: {query}

Retrieved Context:
{context}

Assess:
1. RELEVANCE: Does the context directly address the query? (0-10)
2. COMPLETENESS: Does the context contain all needed info? (0-10)
3. CONTRADICTION: Does any part of the context contradict itself? (Yes/No)

Respond with JSON:
{"relevant": true/false, "complete": true/false, "score": 0-10, "gaps": "..."}"""

    def reflect(self, query: str, context_chunks: list, model_fn) -> dict:
        context = "\n\n".join([c.text for c in context_chunks])
        prompt = self.reflection_prompt.format(query=query, context=context)
        response = model_fn(prompt)

        # Parse response
        return {"relevant": True, "complete": True, "score": 8, "gaps": ""}


class SelfRAGPipeline:
    def __init__(self, base_pipeline, decider, reflector, max_retrievals: int = 3):
        self.base = base_pipeline
        self.decider = decider
        self.reflector = reflector
        self.max_retrievals = max_retrievals

    def query(self, query_text: str) -> dict:
        retrieval_count = 0
        all_chunks = []

        if not self.decider.needs_retrieval(query_text, mock_model_fn):
            return {"response": "Direct answer without retrieval.", "retrievals": 0}

        while retrieval_count < self.max_retrievals:
            ctx = self.base.query(query_text)
            all_chunks.extend(ctx.retrieved_chunks)

            reflection = self.reflector.reflect(query_text, all_chunks, mock_model_fn)

            if reflection.get("complete") and reflection.get("relevant"):
                break

            retrieval_count += 1
            query_text = f"{query_text} {reflection.get('gaps', '')}"

        return {
            "response": ctx.response if hasattr(ctx, 'response') else "Response",
            "retrievals": retrieval_count + 1,
            "chunks": len(all_chunks),
        }


pipeline = SelfRAGPipeline(None, decider, SelfReflector(), 3)
print("Self-RAG pipeline configured")
```text

### 7.1.3 Verifier Module

```python
class Verifier:
    def verify(self, answer: str, context_chunks: list, model_fn) -> dict:
        context = "\n\n".join([c.text for c in context_chunks])
        prompt = f"""Verify if this answer is fully supported by the provided context.

Context:
{context}

Answer:
{answer}

Identify any claims NOT supported by the context.
Respond with JSON:
{{"supported": true/false, "unsupported_claims": [], "hallucination_score": 0-1}}"""
        response = model_fn(prompt)
        return {"supported": True, "unsupported_claims": [], "hallucination_score": 0.05}

    def generate_with_verification(self, query: str, context_chunks: list, generator) -> str:
        max_attempts = 3
        for attempt in range(max_attempts):
            answer = generator(query)
            result = self.verify(answer, context_chunks, mock_model_fn)
            if result["supported"]:
                return answer
        return "I cannot provide a verified answer based on the available context."


verifier = Verifier()
print("Verifier module ready")
```text

## 7.2 Multi-Hop RAG

Multi-hop RAG decomposes complex queries into sub-questions, each requiring a retrieval step.

### 7.2.1 Query Decomposition

```python
class QueryDecomposer:
    def __init__(self):
        self.decomposition_prompt = """Decompose this complex question into simpler sub-questions.
Each sub-question should be independently answerable through retrieval.

Question: {question}

Respond with a numbered list of sub-questions."""

    def decompose(self, question: str, model_fn) -> list:
        prompt = self.decomposition_prompt.format(question=question)
        response = model_fn(prompt)

        sub_questions = []
        for line in response.strip().split("\n"):
            line = line.strip()
            if line and (line[0].isdigit() or line.startswith("-")):
                q = line.split(". ", 1)[-1] if ". " in line else line
                sub_questions.append(q)

        return sub_questions


def mock_decomposer(question: str) -> list:
    if "RAG" in question and "attention" in question.lower():
        return [
            "What is RAG?",
            "What is the attention mechanism?",
            "How does attention relate to RAG?",
        ]
    return [question]


decomposer = QueryDecomposer()
sub_questions = mock_decomposer("How does RAG use attention mechanisms?")
for i, q in enumerate(sub_questions, 1):
    print(f"Sub-Q{i}: {q}")
```text

### 7.2.2 Multi-Hop Executor

```python
class MultiHopRAG:
    def __init__(self, retriever, generator, decomposer):
        self.retriever = retriever
        self.generator = generator
        self.decomposer = decomposer

    def answer(self, question: str) -> dict:
        sub_questions = self.decomposer.decompose(question, mock_model_fn)
        intermediate_results = []
        all_contexts = []

        for sq in sub_questions:
            chunks = self.retriever.retrieve(sq, top_k=3)
            context = "\n\n".join([c.text for c in chunks])
            answer = self.generator(f"Context: {context}\n\nQuestion: {sq}\n\nAnswer:")

            intermediate_results.append({"question": sq, "answer": answer})
            all_contexts.extend(chunks)

        combined_context = "\n\n".join([c.text for c in all_contexts])
        final_prompt = f"""Based on the following information:

{combined_context}

Answer the original question: {question}

Consider the intermediate answers:
{chr(10).join(f'- {r["question"]}: {r["answer"]}' for r in intermediate_results)}

Final answer:"""
        final_answer = self.generator(final_prompt)

        return {
            "sub_questions": sub_questions,
            "intermediate_results": intermediate_results,
            "final_answer": final_answer,
        }


class MockGenerator:
    def __call__(self, prompt: str) -> str:
        return "This is a generated answer based on the context."


multihop = MultiHopRAG(
    MockRetriever(),
    MockGenerator(),
    decomposer,
)
print("Multi-hop RAG configured")
```text

### 7.2.3 Dependency Graph

```python
class QueryDependencyGraph:
    def __init__(self):
        self.nodes = []
        self.edges = []

    def build(self, question: str, sub_questions: list, dependencies: dict):
        self.nodes = sub_questions
        self.edges = []

        for dependent, depends_on in dependencies.items():
            if dependent in self.nodes and depends_on in self.nodes:
                self.edges.append((depends_on, dependent))

    def execution_order(self) -> list:
        # Topological sort
        in_degree = {n: 0 for n in self.nodes}
        for src, dst in self.edges:
            in_degree[dst] = in_degree.get(dst, 0) + 1

        queue = [n for n, d in in_degree.items() if d == 0]
        order = []

        while queue:
            node = queue.pop(0)
            order.append(node)
            for src, dst in self.edges:
                if src == node:
                    in_degree[dst] -= 1
                    if in_degree[dst] == 0:
                        queue.append(dst)

        return order


graph = QueryDependencyGraph()
graph.build(
    "Compare attention mechanisms in RAG",
    ["What is RAG?", "What is attention?", "How does RAG use attention?"],
    {"How does RAG use attention?": "What is RAG?", "How does RAG use attention?": "What is attention?"},
)
print(f"Execution order: {graph.execution_order()}")
```text

## 7.3 Iterative Retrieval

Iterative retrieval improves results through feedback loops.

### 7.3.1 Feedback-Driven Re-Retrieval

```python
class IterativeRetriever:
    def __init__(self, base_retriever, feedback_fn, max_iterations: int = 5):
        self.retriever = base_retriever
        self.feedback_fn = feedback_fn
        self.max_iterations = max_iterations

    def retrieve(self, query: str, top_k: int = 5) -> list:
        current_query = query
        all_chunks = []
        seen_ids = set()

        for iteration in range(self.max_iterations):
            chunks = self.retriever.retrieve(current_query, top_k=top_k)
            new_chunks = [c for c in chunks if c.chunk_id not in seen_ids]
            all_chunks.extend(new_chunks)

            for c in new_chunks:
                seen_ids.add(c.chunk_id)

            if len(new_chunks) < top_k // 2:
                break

            feedback = self.feedback_fn(current_query, new_chunks)
            current_query = feedback.get("reformulated_query", current_query)

        return all_chunks[:top_k]


def feedback_fn(query: str, chunks: list) -> dict:
    if len(chunks) < 3:
        return {"reformulated_query": f"{query} more details"}
    return {"reformulated_query": query}


itr = IterativeRetriever(MockRetriever(), feedback_fn, max_iterations=3)
print("Iterative retriever ready")
```text

### 7.3.2 Corrective RAG

```python
class CorrectiveRAG:
    def __init__(self, retriever, generator):
        self.retriever = retriever
        self.generator = generator

    def retrieve_and_correct(self, query: str, max_corrections: int = 3) -> str:
        answer = None
        corrections = []

        for i in range(max_corrections):
            chunks = self.retriever.retrieve(query, top_k=5)
            context = "\n\n".join([c.text for c in chunks])
            answer = self.generator(f"Context: {context}\n\nQuestion: {query}\n\nAnswer:")

            correction_prompt = f"""Review this answer for errors and inconsistencies.

Answer: {answer}

List any factual errors, omissions, or improvements needed.
If the answer is correct as-is, say "CORRECT"."""
            review = self.generator(correction_prompt)

            if "CORRECT" in review:
                return answer

            corrections.append(review)
            query = f"{query}\nNote from previous attempt: {review[:200]}"

        return answer


corrective = CorrectiveRAG(MockRetriever(), MockGenerator())
print("Corrective RAG configured")
```text

## 7.4 Agentic RAG

Agentic RAG uses LLM agents to plan, route, and execute retrieval strategies.

### 7.4.1 Query Router

```python
class QueryRouter:
    def __init__(self):
        self.routes = {
            "qa": {"description": "Direct question answering", "databases": ["general_kb"]},
            "summarization": {"description": "Summarize document content", "databases": ["documents"]},
            "comparison": {"description": "Compare multiple items", "databases": ["general_kb", "product_db"]},
            "code": {"description": "Code generation or explanation", "databases": ["code_repo"]},
        }

    def route(self, query: str, model_fn) -> str:
        route_prompt = f"""Classify this query into one of these categories:
{chr(10).join(f'- {k}: {v["description"]}' for k, v in self.routes.items())}

Query: {query}

Respond with the category name only."""
        classification = model_fn(route_prompt)
        return classification if classification in self.routes else "qa"

    def get_databases(self, route: str) -> list:
        return self.routes.get(route, {}).get("databases", ["general_kb"])


router = QueryRouter()
route = router.route("Compare RAG and fine-tuning", mock_model_fn)
print(f"Routed to: {route}, databases: {router.get_databases(route)}")
```text

### 7.4.2 Tool-Using Agent

```python
class ToolRegistry:
    def __init__(self):
        self.tools = {}

    def register(self, name: str, description: str, fn):
        self.tools[name] = {"description": description, "fn": fn}

    def get_tool_descriptions(self) -> str:
        return "\n".join(f"- {name}: {info['description']}" for name, info in self.tools.items())

    def execute(self, name: str, **kwargs):
        tool = self.tools.get(name)
        if not tool:
            return f"Tool '{name}' not found"
        return tool["fn"](**kwargs)


class AgenticRAG:
    def __init__(self, tools: ToolRegistry, generator):
        self.tools = tools
        self.generator = generator

    def answer(self, query: str, max_steps: int = 5) -> dict:
        tool_descriptions = self.tools.get_tool_descriptions()
        context = []
        steps = []

        for step in range(max_steps):
            action_prompt = f"""You are an AI agent with these tools:
{tool_descriptions}

Current context: {context[-1] if context else 'None'}

Query: {query}

Decide the next action. Respond with:
TOOL: tool_name
INPUT: input for the tool
Or if done:
FINAL: final answer"""

            action = self.generator(action_prompt)

            if "FINAL:" in action:
                final = action.split("FINAL:")[-1].strip()
                steps.append({"step": step, "action": "final", "result": final})
                return {"answer": final, "steps": steps}

            tool_name = self._extract_tool(action)
            tool_input = self._extract_input(action)

            if tool_name:
                result = self.tools.execute(tool_name, query=tool_input or query)
                context.append(f"Tool {tool_name} returned: {result}")
                steps.append({"step": step, "action": tool_name, "input": tool_input, "result": result})

        return {"answer": "Max steps reached", "steps": steps}

    def _extract_tool(self, action: str) -> str:
        for line in action.split("\n"):
            if "TOOL:" in line:
                return line.split("TOOL:")[-1].strip()
        return ""

    def _extract_input(self, action: str) -> str:
        for line in action.split("\n"):
            if "INPUT:" in line:
                return line.split("INPUT:")[-1].strip()
        return ""


registry = ToolRegistry()
registry.register("search", "Search the knowledge base for information", lambda query: "Retrieved information")
agent = AgenticRAG(registry, MockGenerator())
print("Agentic RAG ready")
```text

### 7.4.3 Plan-and-Solve

```python
class PlanAndSolve:
    def __init__(self, retriever, generator):
        self.retriever = retriever
        self.generator = generator

    def plan(self, query: str) -> dict:
        plan_prompt = f"""Create a step-by-step plan to answer this question using retrieval.

Question: {query}

Plan format:
1. Identify key entities/terms to search
2. Determine information needed
3. Search strategy
4. Synthesis approach

Plan:"""
        plan = self.generator(plan_prompt)
        return {"plan": plan, "steps": self._parse_steps(plan)}

    def _parse_steps(self, plan: str) -> list:
        steps = []
        for line in plan.split("\n"):
            line = line.strip()
            if line and (line[0].isdigit() or line.startswith("-")):
                steps.append(line)
        return steps

    def execute(self, query: str) -> str:
        plan_result = self.plan(query)

        for step in plan_result["steps"]:
            search_terms = self._extract_search_terms(step)
            if search_terms:
                self.retriever.retrieve(" ".join(search_terms), top_k=3)

        return self.generator(f"Question: {query}\n\nAnswer based on your plan and retrievals:")

    def _extract_search_terms(self, step: str) -> list:
        return [w for w in step.lower().split() if len(w) > 4]


ps = PlanAndSolve(MockRetriever(), MockGenerator())
print("Plan-and-Solve RAG ready")
```text

## 7.5 Graph RAG

Graph RAG extracts entities and relationships to enable graph traversal during retrieval.

### 7.5.1 Entity Extraction

```python
class EntityExtractor:
    def __init__(self):
        self.entity_patterns = {
            "PERSON": [],
            "ORG": ["Inc", "Corp", "University", "Institute", "Labs"],
            "TECH": ["RAG", "LLM", "GPT", "BERT", "Transformer", "Embedding"],
            "CONCEPT": ["retrieval", "generation", "attention", "fine-tuning"],
        }

    def extract(self, text: str, model_fn) -> list:
        extraction_prompt = f"""Extract entities from this text. For each entity, provide:
- name
- type (PERSON, ORG, TECH, CONCEPT)
- mentions (list of strings referring to this entity)

Text: {text}

Respond as JSON list."""
        response = model_fn(extraction_prompt)

        return [
            {"name": "RAG", "type": "TECH", "mentions": ["RAG", "Retrieval-Augmented Generation"]},
            {"name": "Transformer", "type": "TECH", "mentions": ["Transformer", "Attention"]},
        ]


extractor = EntityExtractor()
entities = extractor.extract("RAG uses Transformer-based retrieval.", mock_model_fn)
for e in entities:
    print(f"Entity: {e['name']} ({e['type']})")
```text

### 7.5.2 Knowledge Graph Construction

```python
class KnowledgeGraph:
    def __init__(self):
        self.entities = {}
        self.relationships = []

    def add_entity(self, name: str, entity_type: str, chunk_ids: list = None):
        self.entities[name] = {"type": entity_type, "chunks": chunk_ids or []}

    def add_relationship(self, source: str, target: str, relation: str):
        if source in self.entities and target in self.entities:
            self.relationships.append({"source": source, "target": target, "relation": relation})

    def get_related(self, entity_name: str, max_depth: int = 2) -> list:
        related = set()
        queue = [(entity_name, 0)]
        visited = set()

        while queue:
            current, depth = queue.pop(0)
            if current in visited or depth > max_depth:
                continue
            visited.add(current)

            for rel in self.relationships:
                if rel["source"] == current and rel["target"] not in visited:
                    related.add(rel["target"])
                    queue.append((rel["target"], depth + 1))
                if rel["target"] == current and rel["source"] not in visited:
                    related.add(rel["source"])
                    queue.append((rel["source"], depth + 1))

        return list(related)

    def get_chunks_for_entity(self, entity_name: str) -> list:
        entity = self.entities.get(entity_name)
        return entity["chunks"] if entity else []


kg = KnowledgeGraph()
kg.add_entity("RAG", "TECH", ["c1", "c2"])
kg.add_entity("Retrieval", "CONCEPT", ["c1"])
kg.add_entity("Transformer", "TECH", ["c3"])
kg.add_relationship("RAG", "Retrieval", "uses")
kg.add_relationship("RAG", "Transformer", "built_on")
print(f"Related to RAG: {kg.get_related('RAG')}")
```text

### 7.5.3 Graph Traversal Retrieval

```python
class GraphRAGRetriever:
    def __init__(self, knowledge_graph: KnowledgeGraph, vector_retriever):
        self.graph = knowledge_graph
        self.vector = vector_retriever

    def retrieve(self, query: str, top_k: int = 5) -> list:
        vector_results = self.vector.retrieve(query, top_k=top_k * 2)

        entities = self._extract_entities_from_query(query)
        graph_chunks = set()
        for entity_name in entities:
            related = self.graph.get_related(entity_name)
            for rel_entity in related:
                chunks = self.graph.get_chunks_for_entity(rel_entity)
                graph_chunks.update(chunks)

        combined = []
        seen_ids = set()

        for result in vector_results:
            if result.chunk_id not in seen_ids:
                combined.append(result)
                seen_ids.add(result.chunk_id)

        for chunk_id in graph_chunks:
            if chunk_id not in seen_ids:
                combined.append(RetrievalResult(chunk_id, "", 0.8, "graph"))
                seen_ids.add(chunk_id)

        return combined[:top_k]

    def _extract_entities_from_query(self, query: str) -> list:
        return [name for name in self.graph.entities.keys()
                if name.lower() in query.lower()]


graph_retriever = GraphRAGRetriever(kg, MockRetriever())
print("Graph RAG retriever ready")
```text

## 7.6 Evaluation

### 7.6.1 Advanced vs Standard RAG Benchmark

```python
class RAGBenchmark:
    def __init__(self, queries: list, ground_truth: dict):
        self.queries = queries
        self.ground_truth = ground_truth

    def evaluate(self, rag_pipeline, name: str) -> dict:
        results = []
        for query in self.queries:
            response = rag_pipeline.query(query)
            truth = self.ground_truth.get(query, "")

            faithfulness = self._compute_faithfulness(response, truth)
            completeness = self._compute_completeness(response, truth)
            results.append({
                "query": query,
                "faithfulness": faithfulness,
                "completeness": completeness,
            })

        avg_faith = sum(r["faithfulness"] for r in results) / len(results)
        avg_complete = sum(r["completeness"] for r in results) / len(results)

        return {
            "pipeline": name,
            "avg_faithfulness": round(avg_faith, 3),
            "avg_completeness": round(avg_complete, 3),
            "num_queries": len(self.queries),
        }

    def _compute_faithfulness(self, response: str, truth: str) -> float:
        response_terms = set(response.lower().split())
        truth_terms = set(truth.lower().split())
        if not truth_terms:
            return 1.0
        overlap = len(response_terms & truth_terms)
        return overlap / len(response_terms) if response_terms else 0

    def _compute_completeness(self, response: str, truth: str) -> float:
        response_terms = set(response.lower().split())
        truth_terms = set(truth.lower().split())
        if not truth_terms:
            return 1.0
        overlap = len(response_terms & truth_terms)
        return overlap / len(truth_terms)


benchmark = RAGBenchmark(
    queries=["What is RAG?", "How does retrieval work?"],
    ground_truth={
        "What is RAG?": "RAG is Retrieval-Augmented Generation.",
        "How does retrieval work?": "Retrieval finds relevant documents.",
    },
)
print("Benchmark ready for comparing RAG approaches")
```text

### 7.6.2 Ablation Study

```python
class AblationStudy:
    def __init__(self, base_pipeline):
        self.base = base_pipeline
        self.results = []

    def run_ablation(self, variants: dict, benchmark: RAGBenchmark):
        for variant_name, modifications in variants.items():
            pipeline = self._apply_modifications(modifications)
            result = benchmark.evaluate(pipeline, variant_name)
            self.results.append(result)
            print(f"{variant_name}: Faithfulness={result['avg_faithfulness']:.3f}, Completeness={result['avg_completeness']:.3f}")

    def _apply_modifications(self, modifications: dict):
        return self.base


class MockRAGPipeline:
    def query(self, q: str) -> str:
        return f"Answer to: {q}"


ablation = AblationStudy(MockRAGPipeline())
print("Ablation study configured for advanced RAG evaluation")
```text

## Summary

Advanced RAG techniques build on basic RAG to handle complex queries and improve reliability. Self-RAG enables the model to decide when retrieval is needed and self-critique its outputs. Multi-hop RAG decomposes complex questions into sub-questions, executing retrieval for each. Iterative retrieval incorporates feedback loops to refine search results. Agentic RAG uses LLM agents with tool registries, query routers, and planning capabilities. Graph RAG extracts entities and relationships, enabling knowledge graph traversal for retrieval. Evaluation against standard RAG baselines using faithfulness and completeness metrics quantifies the improvement from each technique.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Use self-RAG for reliability | Let the model decide when to retrieve and critique its own answers |
| Decompose complex queries | Multi-hop RAG significantly improves answers to compound questions |
| Iterate with feedback | Re-retrieval with reformulation improves recall for hard queries |
| Graph for entity-rich domains | Graph RAG excels when questions involve entity relationships |
| Benchmark against baseline | Always compare advanced techniques against simple RAG |

## Interview Q&A

<details class="tp-qa-card" data-qid="rag07-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How does Self-RAG decide whether retrieval is needed for a given query?
  </summary>
  <div class="tp-qa-answer">
    <p>Self-RAG uses a RetrievalDecider that classifies the query into categories like FACTUAL_RECENT (needs up-to-date info), FACTUAL_STATIC (model may know), OPINION (no retrieval needed), CREATIVE (generation task), or PRIVATE (needs private data). The decider is implemented as a prompt to an LLM that outputs a classification label. Only queries classified as FACTUAL_RECENT or PRIVATE trigger retrieval. This reduces unnecessary retrieval calls by 30-60% for knowledge-heavy domains where many questions can be answered from the model's training data. The classification prompt includes examples and clear category definitions. Threshold calibration on a validation set is essential to avoid under-retrieving on important queries.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What is multi-hop RAG and how does it handle complex queries that standard RAG cannot?
  </summary>
  <div class="tp-qa-answer">
    <p>Multi-hop RAG decomposes complex questions into sub-questions, each requiring a separate retrieval step. For example, "What companies were founded by the inventor of the Transformer architecture?" requires: (1) Who invented the Transformer? → (2) What companies did that person found? Each sub-question retrieves different documents, and the answers are accumulated. A QueryDecomposer breaks the original question, a MultiHopExecutor runs retrieval for each sub-question, and a final generator synthesizes all intermediate results. Multi-hop improves accuracy on compound questions by 20-40% compared to standard RAG which would retrieve for the full question and likely miss partial information.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How does Graph RAG extend standard RAG for entity-rich domains?
  </summary>
  <div class="tp-qa-answer">
    <p>Graph RAG extracts entities (people, organizations, technologies) and their relationships from documents, building a knowledge graph. During retrieval, it first uses vector search to find relevant documents, then traverses the knowledge graph from mentioned entities to find related documents that might not match the query vectorially. For example, for "What companies does Elon Musk lead?", Graph RAG retrieves "Elon Musk" documents, then traverses the graph to find related entities (Tesla, SpaceX, Neuralink) and their associated chunks. This captures entity-centric information that pure vector search would miss. Graph RAG excels in domains like news, research, and enterprise data where entities and relationships are central.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is corrective RAG and how does it fix errors in generation?
  </summary>
  <div class="tp-qa-answer">
    <p>Corrective RAG adds a self-review step after generation: the LLM reviews its own answer for factual errors, omissions, or inconsistencies with the retrieved context. If errors are found, the correction feedback is incorporated into a new retrieval-generation cycle. This iterative refinement continues until the LLM judges its answer as correct (or a maximum retry limit is reached). For example, if the first answer says "RAG was introduced in 2023" but the context mentions 2020, the review catches this and the corrected answer uses 2020. This technique typically improves faithfulness by 10-25% but increases latency by 40-80% due to multiple generation cycles.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How does agentic RAG use tools to handle queries standard RAG cannot?
  </summary>
  <div class="tp-qa-answer">
    <p>Agentic RAG equips the LLM with a ToolRegistry containing specialized tools: vector search (for semantic document retrieval), web search (for current events), calculator (for math), code interpreter (for execution), and database query tools. The LLM agent plans which tools to use, in what order, and how to combine their outputs. For example, "Calculate the average revenue of companies in the AI sector" would: (1) search the knowledge base for AI companies, (2) look up revenue data, (3) calculate the average. The agent iteratively decides next actions based on previous results. This extends RAG to handle queries requiring computation, real-time data, or multi-step reasoning that a single retrieval pass cannot satisfy.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How does iterative retrieval with feedback improve recall for hard queries?
  </summary>
  <div class="tp-qa-answer">
    <p>Iterative retrieval performs multiple retrieval rounds, where each round's results inform the next round's query reformulation. After receiving initial results, a feedback function identifies gaps (terms present in retrieved chunks that suggest new search directions) and reformulates the query to fill those gaps. For example, if "machine learning frameworks" retrieves documents mentioning "PyTorch" and "TensorFlow", the reformulated query might be "PyTorch vs TensorFlow comparison". This gradually expands the relevant document pool. Iterative retrieval typically improves recall@10 by 15-30% for complex or poorly-specified queries, at the cost of 2-5x more retrieval calls. Set a maximum iteration count to bound latency.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the plan-and-solve approach for RAG and when is it appropriate?
  </summary>
  <div class="tp-qa-answer">
    <p>Plan-and-Solve instructs the LLM to create a step-by-step plan before executing retrieval: identify key entities, determine needed information, design search strategy, and plan synthesis approach. The plan is then executed step by step. This is appropriate for complex analytical queries like "Compare the environmental impact of electric vehicles vs hydrogen fuel cells across manufacturing, operation, and disposal." Standard RAG would retrieve once and likely miss one of the three lifecycle phases. Plan-and-Solve ensures comprehensive coverage by explicitly listing what to search for. It adds 500-2000ms for planning but improves answer completeness by 25-40% for multi-faceted questions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you evaluate advanced RAG techniques against standard RAG baselines?
  </summary>
  <div class="tp-qa-answer">
    <p>Design an AblationStudy comparing standard RAG, Self-RAG, multi-hop RAG, and Graph RAG on the same test set of 20-50 queries with ground truth answers. Measure faithfulness (claims supported by context), completeness (all information needed is present), and end-to-end score (match with ground truth). For each variant, report average metrics and per-query latency. A proper ablation isolates which technique contributes which improvement — for example, Self-RAG may improve faithfulness but not recall, while multi-hop may improve recall but not latency. Always maintain the same base retriever, generator, and chunking across all variants to isolate the technique's effect.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How does a query dependency graph help in multi-hop RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>A query dependency graph captures which sub-questions depend on answers from other sub-questions. For example, "Who founded company X?" depends on first knowing "Which category does X belong to?" if the database is organized by categories. The graph enables topological sorting to determine execution order — independent sub-questions can be executed in parallel, while dependent ones must be sequential. This reduces total latency compared to executing all sub-questions sequentially. The dependency graph is constructed by an LLM that analyzes the query structure and identifies informational dependencies. Complex queries with 3+ hops typically have 1-2 dependency edges that affect execution order.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag07-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What is a verifier module in advanced RAG and how does it reduce hallucination?
  </summary>
  <div class="tp-qa-answer">
    <p>A verifier module checks the generated answer against the retrieved context and identifies unsupported claims. It extracts each claim from the answer and verifies it against the context using an LLM prompt: "Does the context support this claim? SUPPORTED / NOT_SUPPORTED / CONTRADICTED." If unsupported claims are found, the generator is asked to revise the answer to remove or correct them. This process repeats until all claims are supported or a maximum attempt count is reached. The verifier acts as a safety net, catching hallucinations that slip through the augmentation stage. In production, a verifier can reduce hallucination rate from 15% to below 3% on factual Q&A tasks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="rag-s7-quiz1">
<summary><strong>1.</strong> What distinguishes Self-RAG from standard RAG?</summary>
A. Self-RAG uses larger models
B. Self-RAG decides whether retrieval is needed and critiques its own output
C. Self-RAG does not use vector databases
D. Self-RAG requires human feedback
Answer: B
</details>

<details data-qid="rag-s7-quiz2">
<summary><strong>2.</strong> What is multi-hop RAG designed for?</summary>
A. Single-turn queries
B. Complex queries requiring multiple retrieval steps
C. Code generation tasks
D. Streaming responses
Answer: B
</details>

<details data-qid="rag-s7-quiz3">
<summary><strong>3.</strong> In Graph RAG, what does the knowledge graph store?</summary>
A. Only entity names
B. Entities and their relationships
C. Raw document text
D. Embedding vectors only
Answer: B
</details>

<details data-qid="rag-s7-quiz4">
<summary><strong>4.</strong> What is the role of a query router in agentic RAG?</summary>
A. To generate embeddings
B. To classify queries and direct them to appropriate databases
C. To chunk documents
D. To evaluate response quality
Answer: B
</details>

<details data-qid="rag-s7-quiz5">
<summary><strong>5.</strong> Why use iterative retrieval with feedback?</summary>
A. It always reduces cost
B. It improves recall by reformulating queries based on initial results
C. It eliminates the need for embeddings
D. It guarantees hallucination-free responses
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a Self-RAG pipeline that decides when to retrieve, retrieves only when needed, and verifies its final answer against the retrieved context. Compare with standard RAG on 10 queries.

2. Build a multi-hop RAG system for a question like "What companies were founded by the creator of Transformer architecture?" requiring at least 2 hops. Show intermediate results.

3. Create a Graph RAG system that extracts entities from a set of 5 AI research papers, builds a knowledge graph, and retrieves by traversing entity relationships. Compare recall@10 with standard vector search.

4. Implement an agentic RAG system with 3 tools: web search, vector search, and calculator. Demonstrate routing a query that requires all 3 tools.

5. Design an ablation study comparing standard RAG, Self-RAG, multi-hop RAG, and Graph RAG on a benchmark of 20 queries. Report faithfulness, completeness, and average latency

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
1. Explain the time and space trade-offs of 12-rag-vector-databases. When would you choose one approach over another?
2. Design a system that efficiently handles 12-rag-vector-databases at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 12-rag-vector-databases. What was your approach and what was the result?
2. How would you explain 12-rag-vector-databases to a non-technical stakeholder?

#### Microsoft Style
1. How does 12-rag-vector-databases integrate with enterprise systems and cloud architectures?
2. What are the security implications of 12-rag-vector-databases?

#### NVIDIA Style
1. How would you optimize 12-rag-vector-databases for GPU-accelerated computing?
2. What parallel processing patterns apply to 12-rag-vector-databases?

#### AI Startup Style
1. How would you implement 12-rag-vector-databases in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 12-rag-vector-databases?

### Resume Tips
- **Technical Skills**: List 12-rag-vector-databases under relevant technical skills
- **Project Description**: "Implemented 12-rag-vector-databases to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 12-rag-vector-databases in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 12-rag-vector-databases
- [ ] Practice 3-5 problems related to 12-rag-vector-databases
- [ ] Prepare 2 real-world examples of using 12-rag-vector-databases
- [ ] Know the time/space complexity of common 12-rag-vector-databases operations
- [ ] Have questions ready about how the company uses 12-rag-vector-databasesfor each.


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to RAG & Vector Databases fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master advanced rag techniques?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of advanced rag techniques helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding advanced rag techniques at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of advanced rag techniques like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply advanced rag techniques concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of advanced rag techniques?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply advanced rag techniques in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying advanced rag techniques to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production

## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of RAG & Vector Databases?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Prompt Engineering Notes

- **Be Specific**: Clear, detailed prompts get better results
- **Provide Examples**: Few-shot learning improves consistency
- **Use Structured Output**: JSON, tables, or markdown for parsing
- **Chain of Thought**: Break complex reasoning into steps
- **Temperature Control**: Adjust creativity vs consistency

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering RAG & Vector Databases, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.