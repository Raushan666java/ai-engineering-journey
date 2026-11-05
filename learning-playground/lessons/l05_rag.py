"""Lesson 5 — RAG with citations.

    python lessons/l05_rag.py "how do I evaluate an agent?"
    python lessons/l05_rag.py --live "what is MCP?"

Runs offline (lexical BM25 retrieval + extractive answer). Add an API key and
--live to get a generated answer -- the retrieval and citation logic is identical.

The point of this lesson:
    RAG is a SEARCH problem wearing an LLM costume.
    If retrieval is bad, generation cannot save you.
"""

import json
import math
import re
import sys
from collections import Counter
from pathlib import Path

from common import MODEL, ROOT, make_client

# The corpus: your own agent-engineering course. Change this to your docs.
CORPUS = ROOT.parent / "site" / "docs" / "courses" / "ai-agent-engineer"

STOP = {
    "the", "a", "an", "and", "or", "of", "to", "in", "is", "are", "was", "were",
    "for", "on", "with", "as", "at", "by", "it", "this", "that", "be", "from",
    "you", "your", "we", "can", "will", "how", "what", "why", "when", "do", "does",
}

# ---------------------------------------------------------------- 1. Chunking

CHUNK_CHARS = 700
OVERLAP_CHARS = 100


def tokenize(text: str) -> list[str]:
    words = re.findall(r"[a-z0-9_]+", text.lower())
    return [w for w in words if w not in STOP and len(w) > 1]


def build_chunks(root: Path) -> list[dict]:
    """Split each markdown file into overlapping chunks, keeping line numbers."""
    chunks: list[dict] = []
    for path in sorted(root.rglob("*.md")):
        try:
            lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
        except OSError:
            continue

        buf: list[str] = []
        start_line = 1
        size = 0

        for i, line in enumerate(lines, 1):
            if not buf:
                start_line = i
            buf.append(line)
            size += len(line) + 1

            if size >= CHUNK_CHARS:
                text = "\n".join(buf).strip()
                if text:
                    chunks.append(_chunk(path, root, start_line, i, text))
                # keep an overlap tail so answers aren't cut in half
                tail, tail_size = [], 0
                for prev in reversed(buf):
                    if tail_size >= OVERLAP_CHARS:
                        break
                    tail.insert(0, prev)
                    tail_size += len(prev) + 1
                buf = tail
                size = tail_size
                start_line = max(1, i - len(tail) + 1)

        if buf:
            text = "\n".join(buf).strip()
            if len(text) > 80:
                chunks.append(_chunk(path, root, start_line, len(lines), text))

    return chunks


def _chunk(path: Path, root: Path, start: int, end: int, text: str) -> dict:
    rel = path.relative_to(root).as_posix()
    return {
        "id": f"{rel}:{start}",
        "source": rel,
        "start": start,
        "end": end,
        "text": text,
        "terms": Counter(tokenize(text)),
        "length": max(1, len(tokenize(text))),
    }


# ---------------------------------------------------------------- 2. BM25

class BM25:
    """Lexical retrieval. No embeddings, no API, no dependencies.

    Baseline first: BM25 beats dense retrieval on exact terms (error codes,
    API names, product IDs). Always measure before reaching for a vector DB.
    """

    def __init__(self, chunks: list[dict], k1: float = 1.5, b: float = 0.75):
        self.chunks = chunks
        self.k1, self.b = k1, b
        self.avg_len = sum(c["length"] for c in chunks) / max(1, len(chunks))

        df: Counter = Counter()
        for c in chunks:
            df.update(c["terms"].keys())
        n = len(chunks)
        self.idf = {t: math.log((n - f + 0.5) / (f + 0.5) + 1) for t, f in df.items()}

    def search(self, query: str, k: int = 5) -> list[tuple[float, dict]]:
        terms = tokenize(query)
        unique = list(dict.fromkeys(terms))
        scored = []
        for c in self.chunks:
            score = 0.0
            matched = 0
            for t in unique:
                tf = c["terms"].get(t, 0)
                if not tf:
                    continue
                matched += 1
                denom = tf + self.k1 * (1 - self.b + self.b * c["length"] / self.avg_len)
                score += self.idf.get(t, 0.0) * (tf * (self.k1 + 1)) / denom
            if score > 0:
                # Coverage penalty: a chunk that matches 1 of 3 query terms is a
                # weaker answer than one that matches all 3. BM25 alone ignores
                # this, which is how "weather on Mars" finds your weather demo.
                coverage = matched / max(1, len(unique))
                scored.append((score * coverage, c))
        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[:k]


# ---------------------------------------------------------------- 3. Grounded answer

SYSTEM = """Answer ONLY from the numbered context. Rules:
1. Cite every claim like [1] or [2].
2. If the context does not contain the answer, say: "The docs don't cover that."
3. Never use outside knowledge."""


def build_context(hits: list[tuple[float, dict]]) -> str:
    blocks = []
    for i, (_, c) in enumerate(hits, 1):
        blocks.append(f"[{i}] {c['source']} (lines {c['start']}-{c['end']})\n{c['text']}")
    return "\n\n".join(blocks)


def extractive_answer(hits: list[tuple[float, dict]]) -> str:
    """Offline fallback: quote the best passage instead of generating."""
    if not hits:
        return "The docs don't cover that."
    best = hits[0][1]["text"]
    sentences = re.split(r"(?<=[.!?])\s+", best.strip())
    body = " ".join(sentences[:3])[:400]
    return f"{body} [1]"


def generate(question: str, hits: list[tuple[float, dict]]) -> str:
    client = make_client()
    resp = client.chat.completions.create(
        model=MODEL,
        temperature=0,
        messages=[
            {"role": "system", "content": SYSTEM},
            {"role": "user", "content": f"Context:\n{build_context(hits)}\n\nQuestion: {question}"},
        ],
    )
    return resp.choices[0].message.content or ""


def verify_citations(answer: str, hits: list[tuple[float, dict]]) -> tuple[bool, str]:
    """Every [n] must point at a passage that was actually retrieved."""
    cited = {int(n) for n in re.findall(r"\[(\d+)\]", answer)}
    if not cited:
        return False, "no citations"
    invalid = {n for n in cited if n < 1 or n > len(hits)}
    if invalid:
        return False, f"citations out of range: {sorted(invalid)}"
    return True, f"cites {sorted(cited)}"


# ---------------------------------------------------------------- 4. Pipeline

class RAG:
    def __init__(self, corpus: Path = CORPUS):
        self.chunks = build_chunks(corpus)
        self.index = BM25(self.chunks)

    def ask(self, question: str, k: int = 5, live: bool = False,
            min_score: float = 5.0) -> dict:
        hits = self.index.search(question, k)

        if not hits or hits[0][0] < min_score:
            return {"answer": "The docs don't cover that.", "hits": hits,
                    "grounded": True, "reason": "below retrieval threshold"}

        answer = generate(question, hits) if live else extractive_answer(hits)
        grounded, reason = verify_citations(answer, hits)

        return {"answer": answer, "hits": hits, "grounded": grounded, "reason": reason}


if __name__ == "__main__":
    if "--eval" in sys.argv:
        cases = [
            json.loads(line)
            for line in (ROOT / "evals" / "rag_cases.jsonl").read_text(encoding="utf-8").splitlines()
            if line.strip()
        ]
        rag = RAG()
        hits, refusal_ok, refusal_total = 0, 0, 0

        for case in cases:
            result = rag.ask(case["question"], live=False)
            sources = [c["source"] for _, c in result["hits"]]

            if case["expect_source"] is None:
                refusal_total += 1
                ok = result["reason"] == "below retrieval threshold"
                refusal_ok += ok
                print(f"  {'PASS' if ok else 'FAIL'}  refusal  {case['question']!r}")
            else:
                ok = any(case["expect_source"] in s for s in sources)
                hits += ok
                print(f"  {'PASS' if ok else 'FAIL'}  hit@5    {case['question']!r}"
                      f"{'' if ok else '  -> ' + str(sources[:2])}")

        answerable = len(cases) - refusal_total
        print(f"\n  hit@5: {hits}/{answerable} = {hits / answerable:.0%}")
        print(f"  refusal: {refusal_ok}/{refusal_total}")
        sys.exit(0 if hits == answerable and refusal_ok == refusal_total else 1)

    args = [a for a in sys.argv[1:] if a != "--live"]
    question = " ".join(args) or "how do I evaluate an agent?"

    rag = RAG()
    print(f"\nIndexed {len(rag.chunks)} chunks from {CORPUS.name}/\n")
    print(f"Q: {question}\n")

    result = rag.ask(question, live="--live" in sys.argv)

    for i, (score, c) in enumerate(result["hits"], 1):
        print(f"  [{i}] {score:5.2f}  {c['source']}:{c['start']}")

    print(f"\nA: {result['answer']}\n")
    print(f"citation check: {'OK' if result['grounded'] else 'FAIL'} ({result['reason']})")

# ---------------------------------------------------------------- Exercises
# 1. Ask something the docs do NOT cover. Confirm the refusal path fires.
# 2. Ask an exact-term question ("ROS 2", "MCP", "LangGraph"). Watch BM25 win.
# 3. Lower min_score to 0.0 and re-ask the off-topic question. Watch it hallucinate
#    a citation. That is the failure mode you are being paid to prevent.
# 4. Add embeddings as a SECOND retriever and rank-fuse the two lists.
#    Do not replace BM25 -- fuse it. Measure hit@5 before and after.
