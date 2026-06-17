# Chapter 12: Natural Language Processing

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) define language models and evaluate them using perplexity; (2) implement n-gram models with smoothing; (3) apply HMMs and CRFs for sequence labeling; (4) implement the CKY algorithm for parsing; (5) use modern NLP toolkits for standard tasks.

## 12.1 Language Models

![Natural Language Processing](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch12-nlp.png)

A **language model** assigns a probability $P(w_1, w_2, \ldots, w_n)$ to a sequence of words. By the chain rule:

$$P(w_{1:n}) = \prod_{i=1}^n P(w_i \mid w_{1:i-1})$$

### 12.1.1 N-Gram Models

N-gram models approximate $P(w_i \mid w_{1:i-1})$ by conditioning only on the preceding $n-1$ words:

$$P(w_i \mid w_{i-n+1:i-1}) = \frac{\text{Count}(w_{i-n+1:i})}{\text{Count}(w_{i-n+1:i-1})}$$

Maximum likelihood estimation computes counts from a training corpus. Unseen n-grams receive zero probability, which is undesirable.

**Smoothing techniques** assign non-zero probability to unseen n-grams:
- **Laplace (add-1) smoothing:** Add 1 to all counts. Simple but biases probabilities.
- **Kneser-Ney smoothing:** Interpolate higher-order with lower-order models, discounting seen counts.
- **Stupid backoff:** Use a simpler model for unseen n-grams without normalized probability.

### 12.1.2 Perplexity

**Perplexity** measures language model quality:

$$\text{Perplexity}(w_{1:n}) = P(w_{1:n})^{-1/n} = \sqrt[n]{\prod_{i=1}^n \frac{1}{P(w_i \mid w_{1:i-1})}}$$

Lower perplexity indicates better modeling. Perplexity of human text typically ranges from 50--1000 depending on the domain.

## 12.2 Text Classification

Text classification assigns a document to one or more predefined categories.

**Naive Bayes:** Assumes word independence given the class:

$$P(c \mid d) \propto P(c) \prod_{i=1}^n P(w_i \mid c)$$

Despite its strong independence assumption, Naive Bayes performs well for many text classification tasks.

**Logistic regression** learns weights $\theta$ for feature vector $\phi(d)$:

$$P(c \mid d) = \frac{\exp(\theta_c^\top \phi(d))}{\sum_{c'} \exp(\theta_{c'}^\top \phi(d))}$$

## 12.3 Part-of-Speech Tagging

Part-of-speech (POS) tagging assigns a grammatical tag (e.g., noun, verb, adjective) to each word in a sentence.

### 12.3.1 HMM-Based Tagging

An HMM for POS tagging models the joint probability of word sequence $w_{1:n}$ and tag sequence $t_{1:n}$:

$$P(w_{1:n}, t_{1:n}) = \prod_{i=1}^n P(t_i \mid t_{i-1}) \, P(w_i \mid t_i)$$

The Viterbi algorithm finds the most likely tag sequence.

### 12.3.2 Conditional Random Fields (CRFs)

A CRF models the conditional probability $P(t_{1:n} \mid w_{1:n})$ directly, allowing arbitrary overlapping features:

$$P(t \mid w) = \frac{1}{Z(w)} \exp\left(\sum_{j=1}^m \sum_{i=1}^n \lambda_j f_j(t_{i-1}, t_i, w, i)\right)$$

Feature functions $f_j$ can capture word shape, capitalization, prefixes, suffixes, and context. CRFs avoid the label bias problem of HMMs.

## 12.4 Named Entity Recognition

Named Entity Recognition (NER) identifies proper nouns and classifies them into categories (person, organization, location, date, etc.). NER is typically formulated as sequence labeling (BIO encoding: Beginning, Inside, Outside of an entity).

## 12.5 Parsing

### 12.5.1 Context-Free Grammars (CFG)

A CFG $G = (N, \Sigma, R, S)$ consists of nonterminals $N$, terminals $\Sigma$, production rules $R$, and start symbol $S$.

**Chomsky Normal Form (CNF):** All rules have the form $A \to BC$ or $A \to w$, where $B, C \in N$ and $w \in \Sigma$.

### 12.5.2 CKY Parsing

The CKY algorithm (Cocke-Kasami-Younger) parses CNF grammars in $O(n^3 |G|)$ time.

```
function CKY-PARSE(words, grammar) returns parse table
    n ← len(words)
    table ← n × n array of sets
    for j = 0 to n-1 do
        for each rule (A → words[j]) do
            table[j][j] ← table[j][j] ∪ {A}
        for i = j-1 down to 0 do
            for k = i to j-1 do
                for each rule (A → B C) do
                    if B ∈ table[i][k] and C ∈ table[k+1][j] then
                        table[i][j] ← table[i][j] ∪ {A}
    return table
```

### 12.5.3 Statistical Parsing

**Probabilistic Context-Free Grammars (PCFG)** assign probabilities to productions. The probability of a parse tree is the product of its rule probabilities. The **CKY+** algorithm finds the most probable parse.

**Lexicalized PCFGs** condition on head words, improving attachment accuracy. The Collins parser (1999) demonstrated that lexicalization dramatically improves parsing performance.

## 12.6 Lexical Semantics

**WordNet** is a lexical database organizing words into synsets (sets of synonyms) with semantic relations including hypernymy (is-a), hyponymy (kind-of), meronymy (part-of), and antonymy.

**Word sense disambiguation (WSD)** determines which sense of a polysemous word is used in context. Supervised WSD uses sense-annotated corpora.

## 12.7 Discourse Processing

Discourse analysis examines how sentences connect to form coherent text. **Discourse relations** (e.g., Elaboration, Contrast, Explanation) connect discourse units. The Penn Discourse TreeBank provides an annotated corpus.

## 12.8 NLP Toolkits

**NLTK (Natural Language Toolkit):** Educational toolkit with corpora, tokenizers, stemmers, taggers, parsers, and classifiers. Suitable for learning and prototyping.

**spaCy:** Industrial-strength NLP library with pre-trained models for tokenization, POS tagging, NER, dependency parsing, and word vectors. Optimized for performance.

**Hugging Face Transformers:** Library providing pre-trained transformer models (BERT, GPT, RoBERTa, T5) with unified interfaces for transfer learning.

## 12.9 Summary

NLP spans language modeling, text classification, sequence labeling, parsing, and semantics. Statistical and neural approaches dominate modern NLP. Available toolkits provide production-quality implementations for standard tasks.

## Exercises

### Review Questions

1. Explain the relationship between n-gram order and model quality. What are the practical limits on n-gram order?
2. Why do CRFs often outperform HMMs for sequence labeling tasks?
3. How does lexicalization improve PCFG parsing accuracy?

### Application Problems

4. Train a trigram language model with Kneser-Ney smoothing on a 100K-word corpus. Compute perplexity on a held-out test set of 10K words.
5. Implement an HMM-based POS tagger with 10 tags using the Viterbi algorithm. Evaluate accuracy on the Brown corpus.

### Challenge Problem

6. Implement the CKY algorithm for a PCFG in Chomsky Normal Form. Apply it to the ATIS (Airline Travel Information System) corpus. Report the most probable parse for a test sentence containing at least 8 words.
