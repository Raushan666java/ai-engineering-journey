---
id: 13-knowledge-graph-rag
slug: /ai-engineering-placement/12-rag-vector-databases/13-knowledge-graph-rag
title: "Knowledge Graph RAG"
sidebar_label: "Knowledge Graph RAG"
sidebar_position: 164
---
<!-- Clear Language: Keep sentences under 50 words -->
# Knowledge Graph RAG

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand knowledge graph fundamentals — entities, relations, triples, RDF, property graphs, SPARQL |
| LO2 | Implement entity extraction pipelines using NER, relation extraction, entity resolution, and coreference resolution |
| LO3 | Design graph-enhanced retrieval with entity linking, graph traversal, and subgraph extraction |
| LO4 | Build a KG construction pipeline covering schema design, extraction, storage, and querying |
| LO5 | Implement a KG + Vector hybrid system combining entity vector search with graph traversal for enriched context |

## Introduction

Knowledge Graph RAG (KG-RAG) augments traditional vector retrieval with structured knowledge from knowledge graphs. Vector databases capture semantic similarity through embeddings. Knowledge graphs capture structured relationships between entities through typed edges.

The key insight: vectors tell you "what documents are similar" but graphs tell you "how entities connect." By combining both, KG-RAG answers multi-hop questions that pure vector search cannot handle — like "Which drugs target the same proteins as Drug X, but were developed by competitors of Pfizer?"

This chapter covers the full stack: from constructing knowledge graphs to hybrid retrieval that fuses vector similarity with graph traversal.

## Prerequisites

- Basic understanding of RAG pipelines (Chapter 1 of this module)
- Familiarity with embeddings and vector search (Chapters 2-3)
- Python programming experience
- Basic SQL knowledge (helpful for SPARQL analogies)

## Key Terminology

**Knowledge Graph**: A structured representation of entities (nodes) and their relationships (edges), where both nodes and edges have typed attributes.

**Triple**: The atomic unit of a knowledge graph: (subject, predicate, object) e.g., (Pfizer, develops, Paxlovid).

**RDF**: Resource Description Framework — a W3C standard for representing triples as subject-predicate-object statements.

**SPARQL**: A query language for RDF graphs, analogous to SQL for relational databases.

**Property Graph**: An extension of RDF where nodes and edges can have arbitrary key-value properties.

**Entity Linking**: Mapping text mentions to canonical entities in a knowledge base (e.g., "Apple" → company, not fruit).

**Subgraph Extraction**: Selecting a connected portion of a KG relevant to a query, usually via traversal from seed entities.

**Graph Traversal**: Walking edges from a starting node to find connected nodes within N hops.

## Theory

Knowledge Graph RAG bridges two worlds: unstructured text retrieval (vector search) and structured knowledge representation (graphs). This section covers the core concepts, mathematical foundations, and practical implementation of each layer in the KG-RAG stack.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 13.1 | Knowledge Graph Basics | Entities, relations, triples, RDF, property graphs, SPARQL |
| 13.2 | Entity Extraction | NER, relation extraction, entity resolution, coreference |
| 13.3 | Graph-Enhanced Retrieval | Entity linking, graph traversal, subgraph extraction, fusion |
| 13.4 | KG Construction Pipeline | Schema design, extraction, storage, querying with Neo4j/NetworkX |
| 13.5 | KG + Vector Hybrid | Vector search for entities, graph traversal for context, combined ranking |

## Chapter Roadmap

```mermaid
flowchart TB
    subgraph Input
        A[Raw Documents] --> B[Chunker]
        B --> C[Text Chunks]
    end

    subgraph KG_Construction
        C --> D[Entity Extractor]
        D --> E[Relation Extractor]
        E --> F[Entity Resolver]
        F --> G[KG Builder]
        G --> H[Knowledge Graph]
    end

    subgraph Vector_Index
        C --> I[Embedder]
        I --> J[Vector Index]
    end

    subgraph Query
        K[User Query] --> L[Entity Linker]
        K --> M[Query Embedder]
        L --> H
        M --> J
    end

    subgraph Fusion
        H --> N[Subgraph Extractor]
        N --> O[Context Formatter]
        J --> O
        O --> P[LLM]
        P --> Q[Answer]
    end

    style H fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
    style J fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style O fill:#fff3e0,stroke:#f57c00,stroke-width:2px
```

## 13.1 Knowledge Graph Basics

Knowledge graphs represent information as networks of entities connected by typed relationships. Unlike flat document stores, KGs capture the structure of knowledge — who did what, where, when, and how.

### 13.1.1 Entities, Relations, and Triples

The fundamental unit of a KG is the **triple**: (subject, predicate, object). Each triple asserts a fact:

```
(Albert_Einstein, bornIn, Germany)
(Paxlovid, treats, COVID-19)
(OpenAI, developed, GPT-4)
```

Entities are real-world objects (people, places, companies, drugs). Relations define the type of connection between entities.

```python
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple, Any, Set
from collections import defaultdict
import json
import math

@dataclass
class Triple:
    subject: str
    predicate: str
    object: str
    confidence: float = 1.0
    metadata: Dict[str, Any] = field(default_factory=dict)

    def __repr__(self) -> str:
        return f"({self.subject}, {self.predicate}, {self.object})"

    def to_rdf(self) -> str:
        """Serialize triple as Turtle RDF."""
        return f"<{self.subject}> <{self.predicate}> <{self.object}> .\n"

    def to_dict(self) -> Dict:
        return {
            "subject": self.subject,
            "predicate": self.predicate,
            "object": self.object,
            "confidence": self.confidence,
        }

triples = [
    Triple("Albert_Einstein", "bornIn", "Germany"),
    Triple("Albert_Einstein", "developed", "Theory_of_Relativity"),
    Triple("Theory_of_Relativity", "field", "Physics"),
    Triple("Albert_Einstein", "wonAward", "Nobel_Prize_in_Physics"),
]

for t in triples:
    print(f"Triple: {t}")
```

### 13.1.2 RDF and Property Graphs

Two dominant data models for KGs exist:

**RDF (Resource Description Framework)** treats everything as triples with URIs for global identifiers. It is the W3C standard used in linked data and the Semantic Web. SPARQL is the query language.

**Property Graphs** extend RDF by allowing key-value properties on both nodes and edges. Neo4j is the most popular property graph database with Cypher as its query language.

```python
@dataclass
class PropertyGraphNode:
    id: str
    labels: List[str] = field(default_factory=list)
    properties: Dict[str, Any] = field(default_factory=dict)

@dataclass
class PropertyGraphEdge:
    source_id: str
    target_id: str
    relationship_type: str
    properties: Dict[str, Any] = field(default_factory=dict)

class PropertyGraph:
    def __init__(self):
        self.nodes: Dict[str, PropertyGraphNode] = {}
        self.edges: List[PropertyGraphEdge] = []
        self._adjacency: Dict[str, List[PropertyGraphEdge]] = defaultdict(list)

    def add_node(self, node: PropertyGraphNode) -> None:
        self.nodes[node.id] = node

    def add_edge(self, edge: PropertyGraphEdge) -> None:
        self.edges.append(edge)
        self._adjacency[edge.source_id].append(edge)

    def get_neighbors(self, node_id: str, rel_type: Optional[str] = None) -> List[str]:
        neighbors = []
        for edge in self._adjacency.get(node_id, []):
            if rel_type is None or edge.relationship_type == rel_type:
                neighbors.append(edge.target_id)
        return neighbors

    def query_cypher(self, match_pattern: str) -> List[Dict]:
        """Simulate a basic Cypher query by pattern matching node labels."""
        results = []
        for node in self.nodes.values():
            for label in node.labels:
                if label in match_pattern:
                    results.append({"node": node.id, "labels": node.labels, "properties": node.properties})
        return results

    def to_dict(self) -> Dict:
        return {
            "nodes": {nid: {"labels": n.labels, "properties": n.properties} for nid, n in self.nodes.items()},
            "edges": [
                {"source": e.source_id, "target": e.target_id, "type": e.relationship_type, "props": e.properties}
                for e in self.edges
            ],
        }

pg = PropertyGraph()
pg.add_node(PropertyGraphNode("e1", ["Person", "Scientist"], {"name": "Einstein", "birthYear": 1879}))
pg.add_node(PropertyGraphNode("e2", ["Theory"], {"name": "Relativity", "year": 1915}))
pg.add_node(PropertyGraphNode("e3", ["Award"], {"name": "Nobel Prize", "year": 1922}))
pg.add_edge(PropertyGraphEdge("e1", "e2", "DEVELOPED", {"confidence": 1.0}))
pg.add_edge(PropertyGraphEdge("e1", "e3", "WON", {"year": 1922}))

print(f"Neighbors of e1: {pg.get_neighbors('e1')}")
print(f"Neighbors via DEVELOPED: {pg.get_neighbors('e1', 'DEVELOPED')}")
```

### 13.1.3 SPARQL Query Basics

SPARQL is the standard query language for RDF knowledge graphs. It uses graph pattern matching — you describe the pattern of triples you want to find.

```python
class SimpleSPARQLEngine:
    """Simulates a minimal SPARQL query engine over a list of triples."""

    def __init__(self):
        self.triples: List[Triple] = []

    def load(self, triples: List[Triple]) -> None:
        self.triples = triples

    def query(self, sparql_string: str) -> List[Dict[str, str]]:
        """Parse and execute a simplified SPARQL SELECT query.

        Supports patterns like:
        SELECT ?person ?theory WHERE {
            ?person <developed> ?theory .
            ?person <bornIn> "Germany" .
        }
        """
        results = []
        # Parse variables from SELECT clause
        select_vars = self._parse_select(sparql_string)
        # Parse triple patterns from WHERE clause
        patterns = self._parse_where(sparql_string)

        # Bind variables to matching triples
        bindings = self._match_patterns(patterns)

        for binding in bindings:
            row = {}
            for var in select_vars:
                row[var] = binding.get(var, "")
            results.append(row)

        return results

    def _parse_select(self, query: str) -> List[str]:
        start = query.find("SELECT") + 6
        end = query.find("WHERE")
        vars_part = query[start:end].strip()
        return [v.strip() for v in vars_part.split() if v.startswith("?")]

    def _parse_where(self, query: str) -> List[Tuple[str, str, str]]:
        start = query.find("{") + 1
        end = query.find("}")
        block = query[start:end].strip()

        patterns = []
        for line in block.split("."):
            line = line.strip()
            if not line:
                continue
            parts = line.strip().split()
            if len(parts) >= 3:
                # Normalize: remove angle brackets and quotes
                s = parts[0].strip("<>\"")
                p = parts[1].strip("<>\"")
                o = " ".join(parts[2:]).strip("<>\" .")
                patterns.append((s, p, o))
        return patterns

    def _match_patterns(self, patterns: List[Tuple]) -> List[Dict[str, str]]:
        """Brute-force join over triples to match graph patterns."""
        partials: List[Dict[str, str]] = [{}]

        for pattern in patterns:
            new_partials = []
            for triple in self.triples:
                for partial in partials:
                    binding = self._match_pattern(triple, pattern, partial)
                    if binding is not None:
                        new_partials.append(binding)
            if not new_partials:
                return []
            partials = new_partials

        return partials

    def _match_pattern(self, triple: Triple, pattern: Tuple, binding: Dict) -> Optional[Dict]:
        """Check if a triple matches a pattern given existing variable bindings."""
        s_pattern, p_pattern, o_pattern = pattern
        new_binding = dict(binding)

        # Check subject match
        if s_pattern.startswith("?"):
            var = s_pattern
            if var in new_binding:
                if new_binding[var] != triple.subject:
                    return None
            else:
                new_binding[var] = triple.subject
        elif s_pattern != triple.subject:
            return None

        # Check predicate match
        if p_pattern.startswith("?"):
            var = p_pattern
            if var in new_binding:
                if new_binding[var] != triple.predicate:
                    return None
            else:
                new_binding[var] = triple.predicate
        elif p_pattern != triple.predicate:
            return None

        # Check object match
        if o_pattern.startswith("?"):
            var = o_pattern
            if var in new_binding:
                if new_binding[var] != triple.object:
                    return None
            else:
                new_binding[var] = triple.object
        elif o_pattern != triple.object:
            return None

        return new_binding

sparql_engine = SimpleSPARQLEngine()
sparql_engine.load(triples)

query = """SELECT ?person ?theory WHERE {
    ?person <developed> ?theory .
    ?person <bornIn> "Germany" .
}"""

results = sparql_engine.query(query)
print("SPARQL results:", results)
```

## 13.2 Entity Extraction

Before you can build a knowledge graph, you must extract entities and their relationships from raw text. This pipeline has four stages: Named Entity Recognition, Relation Extraction, Entity Resolution, and Coreference Resolution.

### 13.2.1 Named Entity Recognition (NER)

NER identifies typed entities in text: people, organizations, locations, dates, drugs, proteins, etc.

```python
import re

class NamedEntity:
    def __init__(self, text: str, entity_type: str, start: int, end: int, confidence: float = 1.0):
        self.text = text
        self.entity_type = entity_type
        self.start = start
        self.end = end
        self.confidence = confidence

    def __repr__(self) -> str:
        return f"{self.text} [{self.entity_type}] ({self.confidence:.2f})"

class SimpleNER:
    """A rule-based NER for biomedical/scientific text (for educational purposes)."""

    def __init__(self):
        self.patterns: Dict[str, List[str]] = {
            "PERSON": ["Einstein", "Newton", "Darwin", "Turing", "Hinton"],
            "ORGANIZATION": ["OpenAI", "Google", "DeepMind", "Pfizer", "Moderna", "Meta", "Microsoft"],
            "DRUG": ["Paxlovid", "Remdesivir", "Ibuprofen", "Metformin"],
            "DISEASE": ["COVID-19", "Diabetes", "Cancer", "Alzheimer"],
            "PROTEIN": ["ACE2", "Spike", "BRCA1", "TP53", "EGFR"],
            "LOCATION": ["Germany", "USA", "UK", "China", "India"],
            "THEORY": ["Relativity", "Evolution", "Quantum Mechanics"],
        }

    def extract(self, text: str) -> List[NamedEntity]:
        entities = []
        for entity_type, terms in self.patterns.items():
            for term in terms:
                for match in re.finditer(re.escape(term), text, re.IGNORECASE):
                    entity = NamedEntity(
                        text=match.group(),
                        entity_type=entity_type,
                        start=match.start(),
                        end=match.end(),
                        confidence=0.95,
                    )
                    # Deduplicate overlapping entities — keep longer matches
                    if not self._is_overlapping(entity, entities):
                        entities.append(entity)
        entities.sort(key=lambda e: e.start)
        return entities

    def _is_overlapping(self, new: NamedEntity, existing: List[NamedEntity]) -> bool:
        for e in existing:
            if new.start < e.end and new.end > e.start:
                return True
        return False

ner = SimpleNER()
text = "Pfizer developed Paxlovid to treat COVID-19. The drug targets the Spike protein."
entities = ner.extract(text)
for e in entities:
    print(f"  {e}")
```

### 13.2.2 Relation Extraction

After finding entities, we need to determine which relations exist between them. Relation extraction identifies typed connections between entity pairs.

```python
@dataclass
class RelationExtraction:
    subject: str
    subject_type: str
    relation: str
    object: str
    object_type: str
    confidence: float
    evidence: str

class SimpleRelationExtractor:
    """Extracts relations using pattern matching on dependency-like patterns."""

    def __init__(self):
        self.relation_patterns: List[Tuple[str, str, str]] = [
            # (relation, trigger_word, expected_object_type)
            ("developed", r"\b(developed|created|invented|designed)\b", "ORGANIZATION"),
            ("treats", r"\b(treats|targets|inhibits|blocks)\b", "DRUG"),
            ("wonAward", r"\b(won|received|awarded)\b", "ORGANIZATION"),
            ("locatedIn", r"\b(based|located|headquartered)\b", "LOCATION"),
            ("discovered", r"\b(discovered|found|identified)\b", "DISEASE"),
            ("binds", r"\b(binds|interacts|attaches)\b", "PROTEIN"),
        ]

    def extract(self, text: str, entities: List[NamedEntity]) -> List[RelationExtraction]:
        relations = []
        sentences = text.replace("!", ".").replace("?", ".").split(".")

        for sentence in sentences:
            sentence_entities = [e for e in entities if e.start >= 0]
            sent_entities_in_range = [e for e in entities if e.start < len(sentence)]

            for e1 in sent_entities_in_range:
                for e2 in sent_entities_in_range:
                    if e1.text == e2.text:
                        continue
                    for rel_name, trigger, expected_type in self.relation_patterns:
                        if trigger in sentence.lower():
                            if e2.entity_type == expected_type or expected_type == "":
                                rel = RelationExtraction(
                                    subject=e1.text,
                                    subject_type=e1.entity_type,
                                    relation=rel_name,
                                    object=e2.text,
                                    object_type=e2.entity_type,
                                    confidence=0.85,
                                    evidence=sentence.strip(),
                                )
                                relations.append(rel)
        return relations

# Use the entities from the previous example
rel_extractor = SimpleRelationExtractor()
relations = rel_extractor.extract(text, entities)
for r in relations:
    print(f"  ({r.subject}) --[{r.relation}]--> ({r.object})  [conf={r.confidence}]")
```

### 13.2.3 Entity Resolution

Entity resolution (also called entity linking or deduplication) connects extracted text mentions to their canonical IDs in a knowledge base. For example, "AI" and "Artificial Intelligence" should resolve to the same entity.

```python
class EntityResolver:
    def __init__(self):
        self.canonical_map: Dict[str, str] = {
            "AI": "Artificial_Intelligence",
            "ML": "Machine_Learning",
            "NLP": "Natural_Language_Processing",
            "COVID-19": "Coronavirus_Disease_2019",
            "SARS-CoV-2": "Coronavirus_Disease_2019",
            "Pfizer": "Pfizer_Inc",
            "BioNTech": "BioNTech_SE",
            "GPT-4": "GPT_4",
            "GPT4": "GPT_4",
        }
        self.synonym_map: Dict[str, List[str]] = defaultdict(list)
        # Build reverse mapping: canonical -> aliases
        for alias, canonical in self.canonical_map.items():
            self.synonym_map[canonical].append(alias)

    def resolve(self, mention: str) -> Tuple[str, float]:
        mention_clean = mention.strip().lower()
        # Direct match
        if mention in self.canonical_map:
            return self.canonical_map[mention], 1.0
        # Case-insensitive check
        for alias, canonical in self.canonical_map.items():
            if alias.lower() == mention_clean:
                return canonical, 0.95
        # Fuzzy match: check substring containment
        for alias, canonical in self.canonical_map.items():
            if alias.lower() in mention_clean or mention_clean in alias.lower():
                return canonical, 0.7
        # Return the mention itself as canonical (no resolution)
        return mention, 0.5

    def get_aliases(self, canonical_id: str) -> List[str]:
        return self.synonym_map.get(canonical_id, [canonical_id])

    def resolve_batch(self, mentions: List[str]) -> List[Tuple[str, str, float]]:
        return [(m, *self.resolve(m)) for m in mentions]

resolver = EntityResolver()
test_mentions = ["AI", "COVID-19", "Pfizer", "GPT4", "machine learning"]
for mention in test_mentions:
    resolved, confidence = resolver.resolve(mention)
    print(f"  {mention:20s} -> {resolved:40s} (conf={confidence:.2f})")
```

### 13.2.4 Coreference Resolution

Coreference resolution connects pronouns ("he", "it", "they") to their antecedent entities. This is critical for extracting complete triples from multi-sentence text.

```python
@dataclass
class CoreferenceCluster:
    """A group of mentions that refer to the same entity."""
    representative: str
    mentions: List[str] = field(default_factory=list)
    sentences: List[int] = field(default_factory=list)

class SimpleCoreferenceResolver:
    """Rule-based coreference resolver for educational purposes."""

    def __init__(self):
        self.pronouns = {"he", "she", "it", "they", "him", "her", "them", "his", "hers", "its", "their"}

    def resolve(self, sentences: List[str], entities: List[NamedEntity]) -> List[CoreferenceCluster]:
        clusters: Dict[str, CoreferenceCluster] = {}
        last_entities: Dict[str, str] = {}  # entity_type -> last entity text

        for sent_idx, sentence in enumerate(sentences):
            sentence_lower = sentence.lower()

            # Find entities in this sentence
            sent_entities = [e for e in entities if e.start < len(sentence) and e.end <= len(sentence)]

            for e in sent_entities:
                last_entities[e.entity_type] = e.text
                if e.text not in clusters:
                    clusters[e.text] = CoreferenceCluster(
                        representative=e.text,
                        mentions=[e.text],
                        sentences=[sent_idx],
                    )

            # Resolve pronouns
            words = sentence_lower.split()
            for word in words:
                word_clean = word.strip(",.!?;:")
                if word_clean not in self.pronouns:
                    continue

                # Find the most recent entity of likely type
                antecedent = None
                if word_clean in {"he", "him", "his"}:
                    antecedent = last_entities.get("PERSON")
                elif word_clean in {"she", "her", "hers"}:
                    antecedent = last_entities.get("PERSON")
                elif word_clean in {"it", "its"}:
                    antecedent = last_entities.get("ORGANIZATION") or last_entities.get("DRUG") or last_entities.get("DISEASE")
                elif word_clean in {"they", "them", "their"}:
                    antecedent = last_entities.get("ORGANIZATION")

                if antecedent and antecedent in clusters:
                    clusters[antecedent].mentions.append(word_clean)
                    clusters[antecedent].sentences.append(sent_idx)

        return list(clusters.values())

sentences = [
    "Pfizer developed a new drug. It treats COVID-19 effectively.",
    "The company also produces vaccines. They are distributed globally.",
]
all_entities = []
for sent in sentences:
    all_entities.extend(ner.extract(sent))

coref = SimpleCoreferenceResolver()
clusters = coref.resolve(sentences, all_entities)
for cl in clusters:
    print(f"  Cluster: {cl.representative} -> mentions={cl.mentions}")
```

### 13.2.5 Full Extraction Pipeline

Combining all extraction steps into a single pipeline that converts raw text into knowledge graph triples.

```python
class KGExtractionPipeline:
    def __init__(self):
        self.ner = SimpleNER()
        self.relation_extractor = SimpleRelationExtractor()
        self.resolver = EntityResolver()
        self.coref = SimpleCoreferenceResolver()

    def process_document(self, text: str) -> List[Triple]:
        # 1. Split into sentences
        sentences = [s.strip() for s in text.replace("!", ".").replace("?", ".").split(".") if len(s.strip()) > 10]

        # 2. Extract entities
        entities = self.ner.extract(text)

        # 3. Resolve coreferences
        clusters = self.coref.resolve(sentences, entities)

        # 4. Extract relations
        raw_relations = self.relation_extractor.extract(text, entities)

        # 5. Resolve entities to canonical IDs and build triples
        triples = []
        for rel in raw_relations:
            subject_canon, _ = self.resolver.resolve(rel.subject)
            obj_canon, _ = self.resolver.resolve(rel.object)
            triple = Triple(
                subject=subject_canon,
                predicate=rel.relation,
                object=obj_canon,
                confidence=rel.confidence,
                metadata={"evidence": rel.evidence[:100]},
            )
            triples.append(triple)

        return triples

doc = """
Pfizer developed Paxlovid to treat COVID-19. The drug targets the Spike protein.
Pfizer is based in USA. The company also developed a vaccine with BioNTech.
"""

pipeline = KGExtractionPipeline()
extracted_triples = pipeline.process_document(doc)
print("Extracted Triples:")
for t in extracted_triples:
    print(f"  {t}")
```

## 13.3 Graph-Enhanced Retrieval

Graph-enhanced retrieval uses the knowledge graph to enrich the context returned to the LLM. Instead of retrieving only text chunks via vector similarity, we also retrieve subgraphs from entities mentioned in the query.

### 13.3.1 Entity Linking for Queries

The first step is to identify which entities in the user query correspond to nodes in our KG.

```python
class QueryEntityLinker:
    def __init__(self, kg_nodes: Dict[str, PropertyGraphNode]):
        self.kg_node_names = {n.properties.get("name", "").lower(): nid for nid, n in kg_nodes.items()}
        self.kg_node_ids = set(kg_nodes.keys())

    def link(self, query: str) -> List[Tuple[str, str, float]]:
        """Find KG nodes that match entities in the query."""
        query_lower = query.lower()
        matches = []

        for name, node_id in self.kg_node_names.items():
            if name and name in query_lower:
                matches.append((node_id, name, 1.0))

        if not matches:
            # Fallback: extract capitalized phrases as candidate entities
            candidates = re.findall(r'\b[A-Z][a-zA-Z]+\b', query)
            for cand in candidates:
                cand_lower = cand.lower()
                for name, node_id in self.kg_node_names.items():
                    if name and (cand_lower in name or name in cand_lower):
                        matches.append((node_id, name, 0.6))
                        break

        return matches

# Build a small KG for testing
test_nodes = {
    "n1": PropertyGraphNode("n1", ["Drug"], {"name": "Paxlovid"}),
    "n2": PropertyGraphNode("n2", ["Company"], {"name": "Pfizer"}),
    "n3": PropertyGraphNode("n3", ["Protein"], {"name": "ACE2"}),
    "n4": PropertyGraphNode("n4", ["Disease"], {"name": "COVID-19"}),
}

linker = QueryEntityLinker(test_nodes)
query = "How does Paxlovid treat COVID-19?"
linked = linker.link(query)
print("Linked entities:", linked)
```

### 13.3.2 Graph Traversal and Subgraph Extraction

Once we have seed entities, we traverse the graph to extract a relevant subgraph. BFS traversal collects nodes within N hops.

```python
class GraphTraversalEngine:
    def __init__(self, graph: PropertyGraph):
        self.graph = graph

    def bfs_traverse(self, seed_ids: List[str], max_hops: int = 2, max_nodes: int = 20) -> Dict[str, Set[str]]:
        """BFS traversal from seed entities, returning nodes and edges."""
        visited_nodes: Set[str] = set(seed_ids)
        visited_edges: Set[Tuple[str, str, str]] = set()
        frontier = list(seed_ids)

        for hop in range(max_hops):
            if not frontier:
                break
            next_frontier = []
            for node_id in frontier:
                for edge in self.graph._adjacency.get(node_id, []):
                    edge_key = (edge.source_id, edge.relationship_type, edge.target_id)
                    if edge_key not in visited_edges:
                        visited_edges.add(edge_key)
                        if edge.target_id not in visited_nodes:
                            visited_nodes.add(edge.target_id)
                            next_frontier.append(edge.target_id)
                    # Also check reverse direction
                    for edge2 in self.graph._adjacency.get(edge.target_id, []):
                        ekey2 = (edge2.source_id, edge2.relationship_type, edge2.target_id)
                        if ekey2 not in visited_edges:
                            visited_edges.add(ekey2)
                            if edge2.target_id not in visited_nodes and len(visited_nodes) < max_nodes:
                                visited_nodes.add(edge2.target_id)
                                next_frontier.append(edge2.target_id)
            frontier = next_frontier
            if len(visited_nodes) >= max_nodes:
                break

        return {
            "nodes": visited_nodes,
            "edges": visited_edges,
        }

    def extract_subgraph_text(self, seed_ids: List[str], max_hops: int = 2) -> str:
        subgraph = self.bfs_traverse(seed_ids, max_hops)
        lines = []
        for edge in subgraph["edges"]:
            s, rel, t = edge
            s_name = self.graph.nodes.get(s, PropertyGraphNode(s)).properties.get("name", s)
            t_name = self.graph.nodes.get(t, PropertyGraphNode(t)).properties.get("name", t)
            lines.append(f"({s_name}) --[{rel}]--> ({t_name})")
        return "\n".join(lines)

# Build a richer KG
traversal_kg = PropertyGraph()
for nid, node in {
    "p1": PropertyGraphNode("p1", ["Drug"], {"name": "Paxlovid"}),
    "p2": PropertyGraphNode("p2", ["Company"], {"name": "Pfizer"}),
    "p3": PropertyGraphNode("p3", ["Drug"], {"name": "Remdesivir"}),
    "p4": PropertyGraphNode("p4", ["Company"], {"name": "Gilead"}),
    "p5": PropertyGraphNode("p5", ["Protein"], {"name": "ACE2"}),
    "p6": PropertyGraphNode("p6", ["Protein"], {"name": "Spike"}),
    "p7": PropertyGraphNode("p7", ["Disease"], {"name": "COVID-19"}),
}.items():
    traversal_kg.add_node(node)

edges = [
    PropertyGraphEdge("p1", "p5", "targets"),
    PropertyGraphEdge("p1", "p7", "treats"),
    PropertyGraphEdge("p2", "p1", "develops"),
    PropertyGraphEdge("p3", "p7", "treats"),
    PropertyGraphEdge("p4", "p3", "develops"),
    PropertyGraphEdge("p1", "p6", "targets"),
]
for e in edges:
    traversal_kg.add_edge(e)

traversal = GraphTraversalEngine(traversal_kg)
subgraph_text = traversal.extract_subgraph_text(["p1"], max_hops=2)
print("Subgraph from Paxlovid (2 hops):")
print(subgraph_text)
```

### 13.3.3 Combining Vector Search with Graph Context

The hybrid approach: use vector search to find relevant text chunks AND relevant entities, then traverse the graph from those entities to add structured context.

```python
@dataclass
class HybridKGResult:
    vector_chunks: List[Dict]
    graph_context: str
    entities_found: List[str]
    fusion_text: str

class HybridKGRetriever:
    def __init__(self, vector_store, graph: PropertyGraph, entity_linker: QueryEntityLinker,
                 traversal_engine: GraphTraversalEngine):
        self.vector_store = vector_store
        self.graph = graph
        self.entity_linker = entity_linker
        self.traversal = traversal_engine

    def retrieve(self, query: str, top_k_chunks: int = 3, max_graph_hops: int = 2) -> HybridKGResult:
        # 1. Vector search for text chunks
        vector_results = self.vector_store.search(query, top_k_chunks)

        # 2. Link entities in the query
        linked_entities = self.entity_linker.link(query)
        entity_ids = [eid for eid, _, _ in linked_entities]

        # 3. Traverse graph from linked entities
        graph_context = ""
        if entity_ids:
            graph_context = self.traversal.extract_subgraph_text(entity_ids, max_graph_hops)

        # 4. Fusion: combine vector chunks with graph context
        chunk_text = "\n\n".join([r.get("text", "") for r in vector_results])
        if graph_context:
            fusion = f"""Retrieved Documents:
{chunk_text}

Knowledge Graph Context:
{graph_context}"""
        else:
            fusion = chunk_text

        return HybridKGResult(
            vector_chunks=vector_results,
            graph_context=graph_context,
            entities_found=[name for _, name, _ in linked_entities],
            fusion_text=fusion,
        )

class MockVectorStore:
    def __init__(self):
        self.docs = [
            {"id": "d1", "text": "Paxlovid is an antiviral drug developed by Pfizer for COVID-19.", "score": 0.92},
            {"id": "d2", "text": "The drug targets the SARS-CoV-2 main protease enzyme.", "score": 0.85},
            {"id": "d3", "text": "Clinical trials showed 89% reduction in hospitalization risk.", "score": 0.78},
            {"id": "d4", "text": "Gilead Sciences developed Remdesivir as another treatment option.", "score": 0.45},
        ]

    def search(self, query: str, top_k: int) -> List[Dict]:
        return self.docs[:top_k]

mock_vector_store = MockVectorStore()
hybrid_kv_retriever = HybridKGRetriever(
    vector_store=mock_vector_store,
    graph=traversal_kg,
    entity_linker=QueryEntityLinker(traversal_kg.nodes),
    traversal_engine=traversal,
)

hybrid_result = hybrid_kv_retriever.retrieve("How does Paxlovid work against COVID-19?")
print(f"Entities found: {hybrid_result.entities_found}")
print(f"Vector chunks: {len(hybrid_result.vector_chunks)}")
print(f"Graph context:\n{hybrid_result.graph_context[:200]}...")
print(f"\nFusion text (first 300 chars):\n{hybrid_result.fusion_text[:300]}...")
```

## 13.4 KG Construction Pipeline

Building a production knowledge graph requires careful schema design, extraction at scale, efficient storage, and low-latency querying.

### 13.4.1 Schema Design

A KG schema defines the entity types, relation types, and property constraints — analogous to a database schema but for graphs.

```python
@dataclass
class KGEntityType:
    name: str
    properties: Dict[str, str]  # property_name -> data_type
    required_properties: List[str] = field(default_factory=list)

@dataclass
class KGRelationType:
    name: str
    domain: str  # source entity type
    range: str   # target entity type
    properties: Dict[str, str] = field(default_factory=dict)

class KGSchema:
    def __init__(self):
        self.entity_types: Dict[str, KGEntityType] = {}
        self.relation_types: List[KGRelationType] = {}
        self._relation_index: Dict[str, List[KGRelationType]] = defaultdict(list)

    def register_entity_type(self, entity_type: KGEntityType) -> None:
        self.entity_types[entity_type.name] = entity_type

    def register_relation_type(self, relation_type: KGRelationType) -> None:
        self.relation_types[relation_type] = relation_type
        self._relation_index[relation_type.domain].append(relation_type)

    def validate_triple(self, triple: Triple) -> Tuple[bool, str]:
        """Validate a triple against the schema."""
        # Check if subject/object entity types are registered (simplified)
        return True, ""

    def to_mermaid(self) -> str:
        """Generate a Mermaid ER diagram of the schema."""
        lines = ["erDiagram"]
        for et_name, et in self.entity_types.items():
            lines.append(f"    {et_name} {{")
            for prop, dtype in et.properties.items():
                lines.append(f"        {dtype} {prop}")
            lines.append(f"    }}")

        for rt in self.relation_types:
            label = rt.name
            lines.append(f"    {rt.domain} ||--o{{ {rt.range} : \"{label}\"")
        return "\n".join(lines)

schema = KGSchema()
schema.register_entity_type(KGEntityType("Drug", {"name": "string", "smiles": "string", "molecular_weight": "float"}, ["name"]))
schema.register_entity_type(KGEntityType("Company", {"name": "string", "headquarters": "string", "founded": "int"}, ["name"]))
schema.register_entity_type(KGEntityType("Protein", {"name": "string", "uniprot_id": "string"}, ["name"]))
schema.register_entity_type(KGEntityType("Disease", {"name": "string", "icd_code": "string"}, ["name"]))

schema.register_relation_type(KGRelationType("develops", "Company", "Drug"))
schema.register_relation_type(KGRelationType("treats", "Drug", "Disease"))
schema.register_relation_type(KGRelationType("targets", "Drug", "Protein"))

print("Schema registered with 4 entity types and 3 relation types")
```

```mermaid
erDiagram
    Drug {
        string name
        string smiles
        float molecular_weight
    }
    Company {
        string name
        string headquarters
        int founded
    }
    Protein {
        string name
        string uniprot_id
    }
    Disease {
        string name
        string icd_code
    }
    Company ||--o{ Drug : "develops"
    Drug ||--o{ Disease : "treats"
    Drug ||--o{ Protein : "targets"
```

### 13.4.2 Storage with NetworkX

NetworkX is a Python library for graph analytics. While not a production database, it is excellent for prototyping KG-RAG systems.

```python
import networkx as nx

class NetworkXKG:
    """A knowledge graph backed by NetworkX with typed nodes and edges."""

    def __init__(self):
        self.graph = nx.MultiDiGraph()

    def add_triple(self, triple: Triple) -> None:
        self.graph.add_node(triple.subject, label="entity")
        self.graph.add_node(triple.object, label="entity")
        self.graph.add_edge(
            triple.subject,
            triple.object,
            key=triple.predicate,
            predicate=triple.predicate,
            confidence=triple.confidence,
            metadata=triple.metadata,
        )

    def load_triples(self, triples: List[Triple]) -> None:
        for t in triples:
            self.add_triple(t)

    def get_entity_properties(self, entity: str) -> Dict:
        """Return properties of an entity node."""
        if entity not in self.graph:
            return {}
        return dict(self.graph.nodes[entity])

    def get_neighbors(self, entity: str, relation: Optional[str] = None) -> List[Tuple[str, str, Dict]]:
        """Get all neighbors connected by an optional relation type."""
        neighbors = []
        for _, target, data in self.graph.edges(entity, data=True):
            if relation is None or data.get("predicate") == relation:
                neighbors.append((target, data.get("predicate", ""), data))
        return neighbors

    def get_subgraph(self, seed_entities: List[str], max_hops: int = 2, max_nodes: int = 50) -> nx.MultiDiGraph:
        """Extract k-hop subgraph around seed entities using BFS."""
        nodes_to_include = set(seed_entities)
        frontier = list(seed_entities)

        for _ in range(max_hops):
            if not frontier or len(nodes_to_include) >= max_nodes:
                break
            next_frontier = []
            for node in frontier:
                for neighbor in self.graph.neighbors(node):
                    if neighbor not in nodes_to_include and len(nodes_to_include) < max_nodes:
                        nodes_to_include.add(neighbor)
                        next_frontier.append(neighbor)
                # Also check predecessors
                for pred in self.graph.predecessors(node):
                    if pred not in nodes_to_include and len(nodes_to_include) < max_nodes:
                        nodes_to_include.add(pred)
                        next_frontier.append(pred)
            frontier = next_frontier

        return self.graph.subgraph(nodes_to_include).copy()

    def shortest_path(self, source: str, target: str) -> List[str]:
        """Find shortest path between two entities."""
        try:
            return nx.shortest_path(self.graph, source=source, target=target)
        except (nx.NetworkXNoPath, nx.NodeNotFound):
            return []

    def page_rank(self, top_k: int = 10) -> List[Tuple[str, float]]:
        """Compute PageRank to find the most important entities."""
        pr = nx.pagerank(self.graph)
        return sorted(pr.items(), key=lambda x: x[1], reverse=True)[:top_k]

    def community_detection(self) -> Dict[str, int]:
        """Detect communities using label propagation."""
        from networkx.algorithms.community import label_propagation_communities
        communities = label_propagation_communities(self.graph)
        result = {}
        for i, community in enumerate(communities):
            for node in community:
                result[node] = i
        return result

    def stats(self) -> Dict:
        return {
            "nodes": self.graph.number_of_nodes(),
            "edges": self.graph.number_of_edges(),
            "density": nx.density(self.graph),
            "is_connected": nx.is_weakly_connected(self.graph) if self.graph.number_of_nodes() > 0 else False,
        }

# Build a small biomedical KG
biomed_kg = NetworkXKG()
biomed_triples = [
    Triple("Paxlovid", "treats", "COVID-19", 0.95),
    Triple("Paxlovid", "targets", "SARS-CoV-2_Mpro", 0.90),
    Triple("Pfizer", "develops", "Paxlovid", 0.99),
    Triple("Remdesivir", "treats", "COVID-19", 0.85),
    Triple("Gilead", "develops", "Remdesivir", 0.99),
    Triple("ACE2", "binds", "Spike_Protein", 0.95),
    Triple("SARS-CoV-2", "uses", "ACE2", 0.98),
    Triple("SARS-CoV-2", "causes", "COVID-19", 0.99),
    Triple("mRNA_Vaccine", "targets", "Spike_Protein", 0.95),
    Triple("BioNTech", "develops", "mRNA_Vaccine", 0.90),
    Triple("Moderna", "develops", "mRNA_Vaccine", 0.90),
    Triple("WHO", "declared", "COVID-19_Pandemic", 0.95),
]
biomed_kg.load_triples(biomed_triples)

# Analyze the graph
subgraph = biomed_kg.get_subgraph(["Paxlovid"], max_hops=2)
print(f"Paxlovid subgraph: {subgraph.number_of_nodes()} nodes, {subgraph.number_of_edges()} edges")
print(f"KG stats: {biomed_kg.stats()}")
print(f"PageRank top-3: {biomed_kg.page_rank(3)}")

# Find connection between two entities
path = biomed_kg.shortest_path("Paxlovid", "ACE2")
print(f"Shortest path Paxlovid -> ACE2: {' -> '.join(path) if path else 'No path'}")
```

### 13.4.3 SPARQL Querying with Graph Data

Even though we use NetworkX, we can implement SPARQL-like queries over the graph for integration with RDF-based systems.

```python
class SPARQLOnNetworkX:
    """Execute SPARQL-like queries on a NetworkX-backed KG."""

    def __init__(self, kg: NetworkXKG):
        self.kg = kg

    def select(self, select_vars: List[str], where_clause: Dict) -> List[Dict]:
        """Simulate a SELECT query with a simple WHERE filter.

        where_clause example:
        {"predicate": "treats", "object": "COVID-19"}
        """
        results = []
        for s, t, data in self.kg.graph.edges(data=True):
            matches = True
            if "subject" in where_clause and s != where_clause["subject"]:
                matches = False
            if "predicate" in where_clause and data.get("predicate") != where_clause["predicate"]:
                matches = False
            if "object" in where_clause and t != where_clause["object"]:
                matches = False

            if matches:
                row = {}
                for var in select_vars:
                    if var == "?subject":
                        row[var] = s
                    elif var == "?predicate":
                        row[var] = data.get("predicate", "")
                    elif var == "?object":
                        row[var] = t
                    elif var == "?confidence":
                        row[var] = data.get("confidence", 1.0)
                results.append(row)
        return results

    def query_drugs_treating(self, disease: str) -> List[Dict]:
        """Find all drugs that treat a given disease."""
        return self.select(
            select_vars=["?subject", "?predicate", "?object", "?confidence"],
            where_clause={"predicate": "treats", "object": disease},
        )

    def query_competitors(self, drug: str) -> List[Dict]:
        """Find competing drugs developed by different companies."""
        # Step 1: Find which disease this drug treats
        disease_results = self.select(
            select_vars=["?object"],
            where_clause={"subject": drug, "predicate": "treats"},
        )
        diseases = [r["?object"] for r in disease_results]

        # Step 2: Find all drugs that treat the same disease
        competitors = []
        for disease in diseases:
            other_drugs = self.select(
                select_vars=["?subject"],
                where_clause={"predicate": "treats", "object": disease},
            )
            for r in other_drugs:
                if r["?subject"] != drug:
                    competitors.append(r)
        return competitors

sparql_nx = SPARQLOnNetworkX(biomed_kg)
treating_covid = sparql_nx.query_drugs_treating("COVID-19")
print("Drugs treating COVID-19:")
for r in treating_covid:
    print(f"  {r['?subject']}")

competitors = sparql_nx.query_competitors("Paxlovid")
print("\nCompetitors to Paxlovid:")
for r in competitors:
    print(f"  {r['?subject']}")
```

### 13.4.4 Neo4j Integration

For production systems, Neo4j provides ACID-compliant graph storage with the Cypher query language.

```python
class Neo4jClientMock:
    """Mock Neo4j client simulating Cypher query execution."""

    def __init__(self):
        self.nodes: Dict[str, Dict] = {}
        self.edges: List[Dict] = []

    def create_node(self, node_id: str, labels: List[str], properties: Dict) -> None:
        self.nodes[node_id] = {"labels": labels, "properties": properties}

    def create_relationship(self, source_id: str, target_id: str, rel_type: str, properties: Dict = None) -> None:
        self.edges.append({
            "source": source_id,
            "target": target_id,
            "type": rel_type,
            "properties": properties or {},
        })

    def run_cypher(self, query: str) -> List[Dict]:
        """Simulate Cypher queries for common patterns."""
        results = []

        # MATCH (d:Drug)-[:treats]->(dis:Disease) WHERE dis.name = $disease RETURN d
        if "MATCH" in query and "WHERE" in query:
            disease_match = re.search(r"name\s*=\s*['\"](.+?)['\"]", query)
            if disease_match:
                disease = disease_match.group(1)
                for edge in self.edges:
                    if edge["type"] == "treats":
                        source = self.nodes.get(edge["source"])
                        target = self.nodes.get(edge["target"])
                        if target and target["properties"].get("name") == disease:
                            results.append({"drug": source["properties"] if source else {}})

        # MATCH (c:Company)-[:develops]->(d:Drug)-[:treats]->(dis:Disease {name: $disease}) RETURN c, d
        match_dis = re.search(r"Disease\s*\{[^}]*name\s*:\s*['\"](.+?)['\"]", query)
        if match_dis and not results:
            disease = match_dis.group(1)
            for edge in self.edges:
                if edge["type"] == "treats":
                    drug_target = self.nodes.get(edge["target"])
                    if drug_target and drug_target["properties"].get("name") == disease:
                        drug_id = edge["source"]
                        # Find companies developing this drug
                        for e2 in self.edges:
                            if e2["type"] == "develops" and e2["target"] == drug_id:
                                company = self.nodes.get(e2["source"])
                                drug = self.nodes.get(drug_id)
                                if company and drug:
                                    results.append({
                                        "company": company["properties"],
                                        "drug": drug["properties"],
                                    })

        return results

# Populate mock Neo4j
neo4j = Neo4jClientMock()
neo4j.create_node("d1", ["Drug"], {"name": "Paxlovid", "smiles": "C1CC(=O)NC(=O)C1"})
neo4j.create_node("d2", ["Drug"], {"name": "Remdesivir", "smiles": "C1CC(=O)NC(=O)C2"})
neo4j.create_node("c1", ["Company"], {"name": "Pfizer", "headquarters": "New York"})
neo4j.create_node("c2", ["Company"], {"name": "Gilead", "headquarters": "Foster City"})
neo4j.create_node("dis1", ["Disease"], {"name": "COVID-19", "icd_code": "U07.1"})
neo4j.create_node("prot1", ["Protein"], {"name": "ACE2", "uniprot_id": "Q9BYF1"})

neo4j.create_relationship("d1", "dis1", "treats", {"stage": "approved"})
neo4j.create_relationship("d2", "dis1", "treats", {"stage": "approved"})
neo4j.create_relationship("c1", "d1", "develops", {"year": 2021})
neo4j.create_relationship("c2", "d2", "develops", {"year": 2020})
neo4j.create_relationship("d1", "prot1", "targets", {"mechanism": "protease_inhibitor"})

results = neo4j.run_cypher("MATCH (d:Drug)-[:treats]->(dis:Disease) WHERE dis.name = 'COVID-19' RETURN d")
print("Neo4j query results:")
for r in results:
    print(f"  Drug: {r.get('drug', r)}")

# Multi-hop query
results2 = neo4j.run_cypher("MATCH (c:Company)-[:develops]->(d:Drug)-[:treats]->(dis:Disease {name: 'COVID-19'}) RETURN c, d")
print("\nCompanies developing COVID-19 drugs:")
for r in results2:
    print(f"  {r.get('company', {}).get('name')} -> {r.get('drug', {}).get('name')}")
```

## 13.5 KG + Vector Hybrid Architecture

The true power of KG-RAG comes from combining vector search with graph traversal in a unified retrieval pipeline.

### 13.5.1 Architecture Overview

```mermaid
flowchart TB
    subgraph Vector_Path
        A[Query] --> B[Embedding Model]
        B --> C[Vector Similarity Search]
        C --> D[Top-K Text Chunks]
    end

    subgraph Graph_Path
        A --> E[Entity Linker]
        E --> F[KG Node Lookup]
        F --> G[Graph Traversal BFS]
        G --> H[Subgraph Extraction]
    end

    subgraph Fusion
        D --> I[Context Fuser]
        H --> I
        I --> J[Structured + Unstructured Context]
        J --> K[LLM]
        K --> L[Answer]
    end

    style C fill:#f3e5f5,stroke:#7b1fa2
    style G fill:#e1f5fe,stroke:#0288d1
    style I fill:#fff3e0,stroke:#f57c00
```

### 13.5.2 Unified Retriever Implementation

```python
@dataclass
class UnifiedKGVectorResult:
    query: str
    text_context: str
    graph_context: str
    entities: List[str]
    relationships: List[str]
    final_prompt: str

class UnifiedKGVectorRetriever:
    def __init__(self, vector_db, kg: NetworkXKG, entity_linker: QueryEntityLinker,
                 max_hops: int = 2, top_k_text: int = 3):
        self.vector_db = vector_db
        self.kg = kg
        self.entity_linker = entity_linker
        self.max_hops = max_hops
        self.top_k_text = top_k_text

    def retrieve(self, query: str) -> UnifiedKGVectorResult:
        # 1. Vector search for text
        text_results = self.vector_db.search(query, self.top_k_text)
        text_context = "\n\n".join([r.get("text", "") for r in text_results])

        # 2. Entity linking
        linked = self.entity_linker.link(query)
        entity_ids = [eid for eid, _, _ in linked]
        entity_names = [self.kg.graph.nodes.get(eid, {}).get("label", eid) for eid in entity_ids]

        # 3. Graph traversal
        graph_context = ""
        relationships = []
        if entity_ids:
            subgraph = self.kg.get_subgraph(entity_ids, self.max_hops)
            lines = []
            for s, t, data in subgraph.edges(data=True):
                rel = data.get("predicate", "related_to")
                relationships.append(f"({s})-{rel}->({t})")
                lines.append(f"  - {s} --[{rel}]--> {t}")
            if lines:
                graph_context = "Knowledge Graph Context:\n" + "\n".join(lines)

        # 4. Build final prompt with both contexts
        parts = []
        if text_context:
            parts.append(f"Retrieved Documents:\n{text_context}")
        if graph_context:
            parts.append(graph_context)
        if not parts:
            parts.append("No context retrieved.")

        final_prompt = "\n\n".join(parts)

        return UnifiedKGVectorResult(
            query=query,
            text_context=text_context,
            graph_context=graph_context,
            entities=entity_names,
            relationships=relationships,
            final_prompt=final_prompt,
        )

class RichVectorStore:
    def __init__(self):
        self.docs = [
            {"id": "d1", "text": "Paxlovid is an oral antiviral developed by Pfizer. It inhibits the SARS-CoV-2 main protease.",
             "score": 0.92, "embedding": [0.1] * 128},
            {"id": "d2", "text": "Remdesivir is a broad-spectrum antiviral by Gilead Sciences. It is a nucleotide analog.",
             "score": 0.88, "embedding": [0.2] * 128},
            {"id": "d3", "text": "ACE2 is the cellular entry receptor for SARS-CoV-2. The Spike protein binds to ACE2.",
             "score": 0.85, "embedding": [0.15] * 128},
            {"id": "d4", "text": "mRNA vaccines encode the Spike protein to trigger immune response.",
             "score": 0.72, "embedding": [0.12] * 128},
            {"id": "d5", "text": "Clinical trials showed 89% reduction in COVID-19 hospitalization with Paxlovid.",
             "score": 0.68, "embedding": [0.09] * 128},
        ]

    def search(self, query: str, top_k: int) -> List[Dict]:
        return self.docs[:top_k]

# Build entity linker for our KG
class NetworkXEntityLinker:
    def __init__(self, kg: NetworkXKG):
        self.entities = {}  # lowercase_name -> node_id
        for node in kg.graph.nodes():
            self.entities[node.lower()] = node

    def link(self, query: str) -> List[Tuple[str, str, float]]:
        query_lower = query.lower()
        results = []
        for name_lower, node_id in self.entities.items():
            if name_lower in query_lower:
                results.append((node_id, name_lower, 1.0))
        # Also extract capitalized phrases
        for match in re.findall(r'\b[A-Z][a-zA-Z0-9_-]+\b', query):
            ml = match.lower()
            if ml in self.entities:
                entry = (self.entities[ml], ml, 0.9)
                if entry not in results:
                    results.append(entry)
        return results

# Build the full system
rich_vector_db = RichVectorStore()
kg_for_unified = NetworkXKG()
kg_for_unified.load_triples(biomed_triples)
entity_linker_nx = NetworkXEntityLinker(kg_for_unified)

unified_retriever = UnifiedKGVectorRetriever(
    vector_db=rich_vector_db,
    kg=kg_for_unified,
    entity_linker=entity_linker_nx,
    max_hops=2,
    top_k_text=3,
)

# Test the unified retriever
test_queries = [
    "How does Paxlovid treat COVID-19?",
    "What proteins are involved in SARS-CoV-2 infection?",
    "Which companies developed treatments for COVID-19?",
]

for q in test_queries:
    print(f"\n{'='*60}")
    print(f"Query: {q}")
    result = unified_retriever.retrieve(q)
    print(f"  Entities found: {result.entities}")
    print(f"  Relationships ({len(result.relationships)}):")
    for rel in result.relationships[:5]:
        print(f"    {rel}")
    print(f"  Final prompt length: {len(result.final_prompt)} chars")
```

### 13.5.3 Graph-Guided Re-Ranking

The graph can also re-rank vector search results by comparing entities in the query with entities in retrieved documents.

```python
class GraphGuidedReranker:
    def __init__(self, kg: NetworkXKG):
        self.kg = kg

    def extract_document_entities(self, doc_text: str) -> Set[str]:
        """Extract entities from document text that exist in KG."""
        found = set()
        for node in self.kg.graph.nodes():
            if node.lower() in doc_text.lower():
                found.add(node)
        return found

    def rerank(self, query: str, documents: List[Dict], top_k: int = 5) -> List[Dict]:
        query_entities = self.extract_document_entities(query)

        scored = []
        for doc in documents:
            doc_entities = self.extract_document_entities(doc.get("text", ""))

            # Graph relevance score: shared entities + entity proximity in KG
            shared_entities = query_entities & doc_entities
            entity_overlap = len(shared_entities) / max(len(query_entities | doc_entities), 1)

            # Count graph connections between query and doc entities
            cross_connections = 0
            for qe in query_entities:
                for de in doc_entities:
                    if qe != de:
                        path = self.kg.shortest_path(qe, de)
                        if path:
                            cross_connections += 1.0 / len(path)

            original_score = doc.get("score", 0)
            graph_score = 0.3 * entity_overlap + 0.7 * min(cross_connections / 5.0, 1.0)
            combined_score = 0.6 * original_score + 0.4 * graph_score

            scored.append({
                **doc,
                "original_score": original_score,
                "graph_score": round(graph_score, 3),
                "combined_score": round(combined_score, 3),
                "shared_entities": list(shared_entities),
            })

        scored.sort(key=lambda x: x["combined_score"], reverse=True)
        return scored[:top_k]

reranker = GraphGuidedReranker(kg_for_unified)
query = "How does Paxlovid work?"
reranked = reranker.rerank(query, rich_vector_db.docs, top_k=3)
print("Graph-guided re-ranking results:")
for r in reranked:
    print(f"  Score: {r['combined_score']:.3f} (orig={r['original_score']:.2f}, graph={r['graph_score']:.3f})")
    print(f"  Text: {r['text'][:80]}...")
    print(f"  Shared entities: {r['shared_entities']}")
```

### 13.5.4 Multi-Hop Question Answering

The graph enables answering questions that require multi-hop reasoning — traversing multiple relationships to connect entities.

```python
class MultiHopQA:
    def __init__(self, kg: NetworkXKG, vector_store):
        self.kg = kg
        self.vector_store = vector_store
        self.entity_linker = NetworkXEntityLinker(kg)

    def answer(self, query: str, max_hops: int = 3) -> Dict:
        # 1. Extract entities from query
        linked = self.entity_linker.link(query)
        if not linked:
            return {"answer": "No entities found in query.", "paths": []}

        # 2. Identify target (the unknown we're looking for)
        # Simple heuristic: the last noun phrase or capitalized term not linked
        targets = self._identify_target(query, linked)

        # 3. Find paths from linked entities to target entities
        paths = []
        source_ids = [eid for eid, _, _ in linked]
        for target in targets:
            for source in source_ids:
                path = self.kg.shortest_path(source, target)
                if path and len(path) <= max_hops + 1:
                    paths.append(path)

        # 4. Generate answer from paths
        if paths:
            path_strs = [" -> ".join(p) for p in paths]
            return {
                "answer": f"Found {len(paths)} connection paths.",
                "paths": path_strs,
                "entities_found": [eid for eid, _, _ in linked],
            }
        else:
            return {
                "answer": "No direct paths found. Try a broader query.",
                "paths": [],
                "entities_found": [eid for eid, _, _ in linked],
            }

    def _identify_target(self, query: str, linked: List) -> List[str]:
        """Identify potential target entities not yet linked."""
        linked_set = set(eid for eid, _, _ in linked)
        candidates = re.findall(r'\b[A-Z][a-zA-Z0-9_-]+\b', query)
        targets = []
        for c in candidates:
            c_lower = c.lower()
            for node in self.kg.graph.nodes():
                if node.lower() == c_lower and node not in linked_set:
                    targets.append(node)
        # If no targets found, return empty
        return targets

multi_hop = MultiHopQA(kg_for_unified, rich_vector_db)
result = multi_hop.answer("How is Pfizer connected to COVID-19?")
print("Multi-hop answer:", result["answer"])
print("Paths found:")
for p in result["paths"]:
    print(f"  {p}")
```

### 13.5.5 Complete KG-RAG Pipeline

Putting everything together into a single end-to-end pipeline.

```python
class CompleteKGRAGPipeline:
    def __init__(self):
        self.kg = NetworkXKG()
        self.vector_store = RichVectorStore()
        self.entity_linker = NetworkXEntityLinker(self.kg)
        self.extraction_pipeline = KGExtractionPipeline()
        self.reranker = GraphGuidedReranker(self.kg)
        self.unified_retriever = UnifiedKGVectorRetriever(
            vector_db=self.vector_store,
            kg=self.kg,
            entity_linker=self.entity_linker,
            max_hops=2,
            top_k_text=3,
        )
        self.multi_hop = MultiHopQA(self.kg, self.vector_store)

    def ingest_documents(self, documents: List[str]) -> Dict:
        """Extract triples from documents and load into KG."""
        all_triples = []
        for doc in documents:
            triples = self.extraction_pipeline.process_document(doc)
            all_triples.extend(triples)

        self.kg.load_triples(all_triples)
        return {
            "documents_processed": len(documents),
            "triples_extracted": len(all_triples),
            "kg_nodes": self.kg.graph.number_of_nodes(),
            "kg_edges": self.kg.graph.number_of_edges(),
        }

    def query(self, user_query: str, mode: str = "hybrid") -> Dict:
        """Query the KG-RAG system with different modes."""
        if mode == "kg_only":
            # Direct graph traversal
            linked = self.entity_linker.link(user_query)
            if linked:
                subgraph = self.kg.get_subgraph([eid for eid, _, _ in linked], max_hops=2)
                edges_info = []
                for s, t, data in subgraph.edges(data=True):
                    edges_info.append(f"{s} --[{data.get('predicate', '?')}]--> {t}")
                return {
                    "mode": "kg_only",
                    "entities": [eid for eid, _, _ in linked],
                    "relationships": edges_info,
                    "context": "\n".join(edges_info),
                }

        elif mode == "vector_only":
            # Pure vector search
            results = self.vector_store.search(user_query, 3)
            return {
                "mode": "vector_only",
                "documents": [r["text"] for r in results],
                "context": "\n\n".join([r["text"] for r in results]),
            }

        else:  # hybrid (default)
            unified = self.unified_retriever.retrieve(user_query)
            # Re-rank using graph
            reranked = self.reranker.rerank(user_query, self.vector_store.search(user_query, 5), top_k=3)
            multi_hop_result = self.multi_hop.answer(user_query)

            return {
                "mode": "hybrid",
                "entities_found": unified.entities,
                "text_context": unified.text_context,
                "graph_context": unified.graph_context,
                "reranked_docs": reranked,
                "multi_hop_paths": multi_hop_result["paths"],
                "context": unified.final_prompt,
            }

# Test the complete pipeline
pipeline = CompleteKGRAGPipeline()

# Ingest some documents
ingest_result = pipeline.ingest_documents([
    "Pfizer developed Paxlovid to treat COVID-19. The drug targets the SARS-CoV-2 main protease.",
    "Gilead Sciences created Remdesivir for COVID-19 treatment. It is a nucleotide analog.",
    "ACE2 is the cellular receptor that SARS-CoV-2 uses to enter human cells.",
])
print("Ingestion stats:", ingest_result)

# Query in different modes
for mode in ["kg_only", "vector_only", "hybrid"]:
    print(f"\n{'='*60}")
    print(f"Mode: {mode}")
    result = pipeline.query("How does Paxlovid treat COVID-19?", mode=mode)
    if mode == "hybrid":
        print(f"  Entities: {result['entities_found']}")
        print(f"  Multi-hop paths: {result['multi_hop_paths']}")
        print(f"  Context length: {len(result['context'])} chars")
    else:
        print(f"  Result keys: {list(result.keys())}")
```

## Summary

Knowledge Graph RAG combines structured knowledge (entities and their typed relationships) with unstructured text retrieval (vector similarity). This hybrid approach handles multi-hop questions that pure vector search cannot answer.

The key components are: (1) a knowledge graph storing entities as nodes and relations as typed edges in RDF or property graph format; (2) an extraction pipeline using NER, relation extraction, entity resolution, and coreference resolution; (3) graph-enhanced retrieval that links query entities to KG nodes, traverses edges, and extracts relevant subgraphs; and (4) a fusion layer that combines vector chunks with structured graph context for the LLM.

KG-RAG systems deliver higher precision on questions involving entity relationships, competitive analysis, drug discovery pathways, and any domain where structured connections between entities matter.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Graphs complement vectors | Vectors find similarity, graphs find structure — use both |
| Entity linking is critical | Without linking query to KG nodes, the graph is invisible to retrieval |
| Limit traversal depth | 2-3 hops maximum — deeper traversal adds noise and latency |
| Schema design upfront | Define entity and relation types before building the KG |
| Normalize graph+vector scores | Graph traversal scores and vector similarity scores need calibrated fusion |
| Prefer property graphs | Property graphs are more flexible than pure RDF for RAG applications |

## Interview Q&A

<details class="tp-qa-card" data-qid="kgrag01">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How does Knowledge Graph RAG differ from standard RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>Standard RAG retrieves text chunks via vector similarity and feeds them to the LLM. This captures semantic similarity but misses structured relationships between entities. KG-RAG adds a knowledge graph layer: it links entities in the user query to nodes in the graph, traverses edges to extract a relevant subgraph, and fuses that structured context with vector-retrieved text. This enables answering multi-hop questions like "Which drugs target the same protein as Drug X but were developed by different companies?" — a query that requires traversing three relationships (drug-targets-protein, company-develops-drug) that no single text chunk captures.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag02">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are the main components of a KG-RAG pipeline?
  </summary>
  <div class="tp-qa-answer">
    <p>A KG-RAG pipeline has four stages: (1) KG Construction — extract entities via NER, extract relations via pattern matching or LLM, resolve entities to canonical IDs, and load triples into a graph database (Neo4j) or in-memory graph (NetworkX). (2) Entity Linking — at query time, identify which KG entities appear in the user query using string matching, embedding similarity, or LLM-based linking. (3) Graph Traversal — from linked seed entities, perform BFS traversal for 2-3 hops to extract a relevant subgraph, optionally pruning low-confidence edges. (4) Fusion — combine the structured subgraph with vector-retrieved text chunks into a single context for the LLM. Some systems also incorporate graph-guided re-ranking, where graph relevance scores adjust vector search ranking.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag03">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you extract a knowledge graph from unstructured text?
  </summary>
  <div class="tp-qa-answer">
    <p>Extraction follows a pipeline: (1) Named Entity Recognition (NER) identifies typed spans like Person, Organization, Drug, Disease using models like spaCy, Stanford NER, or LLM-based extraction. (2) Relation Extraction identifies connections between entity pairs using pattern matching ("developed by", "treats"), dependency parsing, or fine-tuned models like REBEL or LLM prompt-based extraction. (3) Entity Resolution normalizes surface forms to canonical IDs: "Pfizer" and "Pfizer Inc." map to the same node. (4) Coreference Resolution links pronouns ("it", "they") to their antecedents. The output is a set of triples (subject, predicate, object) loaded into a graph store. Quality depends heavily on domain-specific NER models and high-confidence relation extraction thresholds — noisy extraction produces unreliable KGs.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag04">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What are the trade-offs between RDF and property graphs for KG-RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>RDF (Resource Description Framework) uses triples with global URIs, is W3C-standard, and queries via SPARQL. It excels in linked data integration and semantic reasoning (inference over subclass hierarchies). However, RDF is verbose and has no native property support on edges — you need reification patterns. Property graphs (Neo4j, ArangoDB) support key-value properties on both nodes and edges, making them more natural for RAG applications where you need confidence scores, timestamps, or evidence text on each relationship. Property graphs query via Cypher (declarative, SQL-like) which is easier for developers. For KG-RAG, property graphs are generally preferred because of their flexibility and lower complexity for the traversal-heavy workloads common in retrieval.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag05">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you combine vector similarity scores with graph traversal scores?
  </summary>
  <div class="tp-qa-answer">
    <p>This is the central fusion problem in KG-RAG. Three approaches exist: (1) Sequential — run vector search first, extract entities from top chunks, then traverse the graph from those entities. The final context contains both sources. (2) Weighted — compute a normalized graph relevance score (overlap between query entities and document entities, or shortest-path distance) and combine with vector similarity as: combined_score = alpha * vec_score + (1-alpha) * graph_score. (3) Graph-guided re-ranking — use vector search for initial candidate retrieval, then re-rank using graph-based features like entity overlap count, path length, or graph PageRank score. The optimal alpha depends on the domain; biomedical literature works well with alpha=0.6 (favor vector search) while competitive intelligence favors graph scores more heavily.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag06">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is entity resolution and why is it critical for KG-RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>Entity resolution (also called entity linking or deduplication) maps text mentions to their canonical entity IDs in the knowledge graph. For example, "Pfizer", "Pfizer Inc.", and "Pfizer, Inc." should all resolve to the same node. Without resolution, the graph fragments — a query mentioning "AI" matches nothing if the graph stores "Artificial Intelligence". Resolution techniques range from dictionary-based exact match (fast, high precision but low recall), through fuzzy string matching (Levenshtein, Jaro-Winkler for typos), to embedding-based matching where both mention and entity names are embedded and compared via cosine similarity. Production systems use a tiered approach: exact-match cache first, then fuzzy dictionary, then embedding model as a fallback. Resolution accuracy directly determines KG-RAG quality — missed links mean empty graph traversal, while wrong links inject irrelevant context.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag07">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you handle large-scale knowledge graphs in production?
  </summary>
  <div class="tp-qa-answer">
    <p>For production KG-RAG with millions of entities, use a native graph database: Neo4j (Cypher), Amazon Neptune (SPARQL/Gremlin), or ArangoDB (AQL). Key optimizations: (1) Index critical properties — create indexes on entity names, types, and frequently queried properties to avoid full graph scans. (2) Pre-compute entity embeddings — store vector embeddings for each entity node and use vector similarity for entity linking at query time. (3) Limit BFS depth — hard-cap traversal to 2-3 hops with configurable edge type filtering to avoid fan-out explosion (a "Person" node might connect to thousands of "Publication" nodes). (4) Cache frequent subgraphs — if certain entity neighborhoods are repeatedly queried, cache the subgraph structure. (5) Partition the graph by domain — biomedical, legal, and technical KGs should be separate to keep traversal focused. Latency targets: entity linking < 50ms, graph traversal < 100ms, total fusion < 200ms.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag08">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you evaluate a KG-RAG system?
  </summary>
  <div class="tp-qa-answer">
    <p>Evaluation covers both retrieval and generation quality. For retrieval: measure entity linking accuracy (precision and recall of linked entities), subgraph relevance (whether extracted subgraph contains the answer entities), and retrieval recall (does combining vector + graph retrieve the relevant information?). For generation: use standard RAG metrics — answer faithfulness (is the answer grounded in context?), answer relevance (does it address the query?), and context precision. A KG-RAG-specific metric is multi-hop accuracy: the fraction of multi-hop questions answered correctly. Create a test set of 100+ questions grouped by complexity: single-hop (1 relation), two-hop (2 relations), and three-hop. Compare KG-RAG vs pure vector RAG on each group — KG-RAG should dramatically outperform on multi-hop questions (2-3x improvement) while matching vector RAG on simple factoid questions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag09">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What are the common failure modes of KG-RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>Six common failure modes: (1) Entity linking misses — query entities are not in the KG or the linker fails, resulting in zero graph context. Mitigation: maintain an alias dictionary and use embedding-based linking. (2) Incomplete KG — the graph only covers part of the domain, making traversal useless for out-of-KG topics. Mitigation: clearly define KG scope and fall back to pure vector search. (3) Traversal explosion — BFS from a high-degree entity (e.g., "COVID-19" connected to thousands of papers) produces an enormous subgraph that overwhelms the LLM context. Mitigation: limit max nodes, require minimum edge confidence, and prune by relevance. (4) Noisy extraction — erroneous triples from poor NER/relation extraction poison the graph. Mitigation: set high confidence thresholds and include manual curation. (5) Stale graph — the KG reflects outdated knowledge. Mitigation: refresh triples from new documents periodically. (6) Context formatting — the LLM cannot effectively use structured graph data in its text prompt. Mitigation: format subgraphs as natural language sentences ("Pfizer develops Paxlovid") rather than raw triples.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="kgrag10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How does KG-RAG scale to real-world enterprise knowledge bases?
  </summary>
  <div class="tp-qa-answer">
    <p>Enterprise KG-RAG requires a distributed architecture. The KG itself runs on a clustered graph database (Neo4j Aura, Amazon Neptune) with read replicas for query scalability. Entity linking uses a dedicated vector index over entity embeddings (stored in Pinecone or Qdrant) with sharding by entity type for low latency. The fusion layer is a stateless microservice that accepts a query, fans out to both vector and graph stores, merges results, and returns a unified context. Caching is critical — cache entity linking results for frequent query terms (cache hit rate > 60% reduces p95 latency from 300ms to 80ms). For very large graphs (100M+ nodes), use graph partitioning and limit each query to a single partition based on entity type (e.g., only traverse the "drug-disease" subgraph, not the entire graph). Incremental ingestion — new documents are processed in micro-batches (every 5 minutes) to update both the vector index and the KG with newly extracted triples.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="kgrag-s13-quiz1">
<summary><strong>1.</strong> What is the atomic unit of a knowledge graph?</summary>
A. Document
B. Triple (subject, predicate, object)
C. Embedding vector
D. Chunk of text
Answer: B
</details>

<details data-qid="kgrag-s13-quiz2">
<summary><strong>2.</strong> Which component maps text mentions to canonical entities in a knowledge base?</summary>
A. Named Entity Recognition
B. Relation Extraction
C. Entity Resolution
D. Coreference Resolution
Answer: C
</details>

<details data-qid="kgrag-s13-quiz3">
<summary><strong>3.</strong> What is the main advantage of KG-RAG over standard RAG?</summary>
A. Lower latency
B. Structured multi-hop reasoning over entity relationships
C. Lower storage cost
D. Simpler architecture
Answer: B
</details>

<details data-qid="kgrag-s13-quiz4">
<summary><strong>4.</strong> Which query language is associated with RDF knowledge graphs?</summary>
A. SQL
B. Cypher
C. SPARQL
D. GraphQL
Answer: C
</details>

<details data-qid="kgrag-s13-quiz5">
<summary><strong>5.</strong> What is a recommended maximum traversal depth for subgraph extraction in KG-RAG?</summary>
A. 1 hop
B. 2-3 hops
C. 10 hops
D. Unlimited
Answer: B
</details>

## Exercises

1. **Build a Mini KG**: Create a NetworkX knowledge graph with 15 triples about your favorite domain (sports, movies, science). Implement functions for entity linking, 2-hop BFS traversal, and subgraph-to-text conversion. Test with 5 queries.

2. **Entity Extraction Pipeline**: Write a pipeline that processes 10 news articles, extracts entities and relations using spaCy or regex patterns, resolves aliases, and loads triples into a NetworkX graph. Report the number of unique entities and triples extracted.

3. **Multi-Hop Comparison**: Build 10 multi-hop questions and compare answer quality: standard vector RAG vs KG-RAG vs hybrid. For each question, record whether the correct answer appears in the top-3 retrieved chunks for each method.

4. **Graph-Guided Reranker**: Implement a reranker that takes vector search results and re-scores them based on shared entities with the query. Use PageRank or degree centrality as a node importance signal. Measure MRR improvement over pure vector search on 20 test queries.

5. **Neo4j Integration Setup**: Write a script that connects to Neo4j (or its mock), loads a schema with 3 entity types and 3 relation types, inserts 20 triples, and executes 5 Cypher queries. Convert results into natural language context for an LLM.

## Common Mistakes

1. Entity linking fails silently — query entities not in the KG produce zero graph context with no warning
2. BFS traversal depth too deep — 4+ hops produces enormous, noisy subgraphs that exceed LLM context windows
3. Schema-less KG construction — without typed entities and relations, traversal becomes unpredictable
4. Ignoring graph sparsity — if the KG has low coverage, hybrid mode degrades to pure vector search anyway
5. Not normalizing graph scores — graph traversal produces unbounded scores that cannot fuse with bounded vector similarity scores

## Revision Notes

- **Core principle**: Knowledge Graph RAG adds structured entity-relationship context to vector retrieval
- **Implementation pattern**: NER -> relation extraction -> entity resolution -> triple loading -> entity linking -> traversal -> fusion
- **Complexity**: Entity linking O(E) for dictionary, O(N log N) for BFS traversal, O(K log K) for fusion
- **Application**: Drug discovery, legal research, competitive intelligence, scientific literature QA
- **Interview**: Frequently asked in AI engineering roles at biotech, pharma, and enterprise search companies
- **Edge cases**: Empty KG, high-degree nodes (hub entities), missing entity links
- **Related concepts**: Graph neural networks, SPARQL, Cypher, semantic web, linked data

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Knowledge Graph RAG in under 60 seconds, then give a real-world analogy.** — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Knowledge Graph RAG.** — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Knowledge Graph RAG. How did you diagnose and fix it?** — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Knowledge Graph RAG from 10 users to 10 million?** — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Knowledge Graph RAG with the closest alternative approach. When would you choose each?** — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Knowledge Graph RAG.** — Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Knowledge Graph RAG behave differently at scale — memory, throughput, or precision-wise?** — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Knowledge Graph RAG run faster on GPU hardware?** — Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Knowledge Graph RAG that is production-quality.** — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Knowledge Graph RAG explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Knowledge Graph RAG").
- Add a bullet describing a project that applies Knowledge Graph RAG to real data, with numbers.
- Mention the tools and libraries you used alongside Knowledge Graph RAG (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Knowledge Graph RAG and one real-world analogy.
- Prepare one STAR story about debugging a Knowledge Graph RAG-related production issue.
- Review complexity and edge cases for the classic Knowledge Graph RAG interview problem.
- Have questions ready: how does the team apply Knowledge Graph RAG in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Knowledge Graph RAG builds directly on the fundamentals covered in the earlier chapters of this module. — **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Knowledge Graph RAG before moving to the next chapter. — **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Knowledge Graph RAG is the same regardless of input size. — **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Knowledge Graph RAG in production. — **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Knowledge Graph RAG chapter content once and never review it again. — **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Knowledge Graph RAG is Chapter ___ of this module. — Answer: check the module's table of contents.
2. The time complexity of the standard approach to Knowledge Graph RAG is ___. — Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Knowledge Graph RAG is ___. — Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Knowledge Graph RAG issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Knowledge Graph RAG in the next chapter is ___. — Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Knowledge Graph RAG that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Knowledge Graph RAG is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Knowledge Graph RAG in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Knowledge Graph RAG and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Knowledge Graph RAG on an empty input?** — Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** — With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** — Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Knowledge Graph RAG to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Knowledge Graph RAG from memory before opening the chapter — active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Knowledge Graph RAG when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Knowledge Graph RAG twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Knowledge Graph RAG snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Knowledge Graph RAG listed in the Chapter at a Glance table.
- **Story**: link Knowledge Graph RAG to a familiar story — the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Knowledge Graph RAG by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Knowledge Graph RAG to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Knowledge Graph RAG
- The classic textbook chapter on Knowledge Graph RAG (check the Research References below)
- Two blog posts from engineers who debugged real Knowledge Graph RAG problems in production
- The repository of the open-source project that implements Knowledge Graph RAG

## Related Topics

- The previous chapter in this module (see table of contents) — foundational for Knowledge Graph RAG
- The next chapter (see Next Topic below) — builds on Knowledge Graph RAG
- The system design chapters in Module 07 — how Knowledge Graph RAG fits into production architectures
- The interview preparation module — how Knowledge Graph RAG is asked in screening rounds
- The capstone project — where Knowledge Graph RAG is applied end-to-end

## FAQs

1. **Do I need to memorize all of Knowledge Graph RAG, or understand the big picture?** — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Knowledge Graph RAG asked in interviews?** — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Knowledge Graph RAG is a core requirement for the rest of this module — do not skip the examples.
- Always analyze complexity (time and space) when working with Knowledge Graph RAG.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Knowledge Graph RAG emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews.
- The tools used for Knowledge Graph RAG today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Knowledge Graph RAG — it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Knowledge Graph RAG changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Knowledge Graph RAG.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Knowledge Graph RAG appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Knowledge Graph RAG helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs.
- In production ML, the Knowledge Graph RAG concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Knowledge Graph RAG skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Knowledge Graph RAG to a dataset of 10 million records? — Batching and vectorization.

## Analogies

- **Knowledge Graph RAG is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm — build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) — this chapter contributes the Knowledge Graph RAG skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="12ragvectordatabases-13knowledgegraphrag-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the core concept of Knowledge Graph RAG in one sentence?
  </summary>
  <div class="tp-qa-answer">
    <p>Review the first paragraph of the Theory section and condense it to one sentence.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-13knowledgegraphrag-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the most common mistake engineers make with 
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Common Mistakes section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-13knowledgegraphrag-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the time and space complexity of the standard Knowledge Graph RAG approach?
  </summary>
  <div class="tp-qa-answer">
    <p>Refer to the theory and complexity analysis in this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-13knowledgegraphrag-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    When is Knowledge Graph RAG NOT the right choice?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Limitations section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="12ragvectordatabases-13knowledgegraphrag-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    How is Knowledge Graph RAG applied in a real production system?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Real-World Examples section of this chapter.</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Knowledge Graph RAG (linked in Further Reading)
- The classic paper or textbook chapter introducing Knowledge Graph RAG (see References below)
- The standard library reference for Knowledge Graph RAG-related functions
- Engineering blog posts from companies running Knowledge Graph RAG in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Knowledge Graph RAG code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Knowledge Graph RAG

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Knowledge Graph RAG code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes — most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Knowledge Graph RAG example code.

## Mock Interview Section

**Round 1 — Screening (15 min)**
- Explain Knowledge Graph RAG in 60 seconds.
- Write a minimal working example of Knowledge Graph RAG.
- What is the complexity of your example?

**Round 2 — Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 — Behavioral + System (30 min)**
- Tell me about a time you debugged a Knowledge Graph RAG problem in a project.
- How would you design a system where Knowledge Graph RAG is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Knowledge Graph RAG.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Knowledge Graph RAG logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Knowledge Graph RAG without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Knowledge Graph RAG daily in their data pipeline — the chapter's examples mirror their code.
- **E-commerce**: Knowledge Graph RAG patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Knowledge Graph RAG principles apply to transaction validation and fraud detection flows.
- **ML platform**: Knowledge Graph RAG shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Knowledge Graph RAG to the business outcome, not just the code.

## Next Topic

[Microsoft GraphRAG](14-graphrag.md)

## Limitations

- Knowledge Graph RAG, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Knowledge Graph RAG depends on input size and distribution — always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
