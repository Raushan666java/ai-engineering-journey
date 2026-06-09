# Chapter 15: Applications of Theory of Computation

## Learning Objectives

By the end of this chapter, you should be able to: explain how finite automata and regular expressions are used in compiler lexing; describe how context-free grammars and PDAs parse programming languages; outline the role of model checking in hardware and software verification; describe DNA computing and its theoretical limits; understand quantum computing models (quantum TM, quantum circuits); explain the role of complexity in modern cryptography.

## Theory

### Compiler Design: Lexical Analysis

The first phase of compilation is **lexical analysis** (lexing), which converts a stream of characters into a stream of tokens. Lexers are based on finite automata and regular expressions.

A typical lexer specification consists of patterns (regular expressions) for each token type:
- Identifiers: $[a-zA-Z\_][a-zA-Z0-9\_]^*$
- Numbers: $[0-9]+(\.[0-9]+)?$
- Keywords: `if`, `while`, `return`, etc.
- Operators: `+`, `-`, `*`, `/`, etc.
- Whitespace and comments (discarded)

**Implementation**: Each pattern is converted to an NFA via Thompson construction, then to a DFA via subset construction. The DFA is typically minimized. The lexer runs the DFA on the input, tracking the longest match (greedy algorithm). When no transition is possible, the longest matched token is emitted.

**Tools**: Lex, Flex, and their descendants generate lexers automatically from regular expression specifications.

### Compiler Design: Parsing

The second phase is **parsing** (syntax analysis), which builds a parse tree from the token stream. This is grounded in context-free grammars and pushdown automata.

**LL parsing** (top-down): The parser predicts which production to apply based on the current token. An LL(1) grammar allows prediction with one lookahead token. The parser uses a **parse table** mapping $(A, a)$ pairs to productions:

$$\text{Table}[A, a] = A \to \alpha \text{ if } a \in FIRST(\alpha) \text{ or } (\epsilon \in FIRST(\alpha) \text{ and } a \in FOLLOW(A))$$

**LR parsing** (bottom-up): The parser shifts tokens onto a stack and reduces when the right-hand side of a production appears. LR(1) parsers handle a larger class of grammars than LL(1) and are the foundation of tools like Yacc and Bison.

**Tools**: Yacc, Bison, ANTLR, and parser combinators.

### Model Checking

**Model checking** is an automated technique for verifying that a finite-state system satisfies a given temporal logic specification. It is widely used in hardware verification, protocol validation, and software verification.

**System modeling**: The system is modeled as a **Kripke structure**: a finite set of states with labeled propositions and a transition relation. This is equivalent to a DFA where states have atomic propositions.

**Specification**: Properties are expressed in **temporal logic**:

- **LTL (Linear Temporal Logic)**: Formulas using $G$ (always), $F$ (eventually), $X$ (next), $U$ (until). Example: $G(request \to F grant)$ — every request is eventually granted.
- **CTL (Computation Tree Logic)**: Branching-time formulas with path quantifiers $A$ (all paths) and $E$ (exists a path). Example: $AG(request \to AF grant)$.

**Verification algorithm**: Given a Kripke structure $M$ and a temporal formula $\phi$, the model checker computes the set of states satisfying $\phi$ using fixpoint algorithms (e.g., Tarjan's algorithm for fairness, or BDD-based symbolic model checking by McMillan, 1993).

The state explosion problem is the fundamental challenge: the number of states grows exponentially with the number of components. Techniques to manage this include:
- Symbolic model checking (BDDs)
- Abstraction and refinement (CEGAR)
- Bounded model checking (SAT-based)
- Compositional reasoning

**Theorem 15.1**: The model checking problem for LTL is PSPACE-complete. The model checking problem for CTL is P-complete.

### DNA Computing

**DNA computing** (Adleman, 1994) uses DNA molecules to perform computation. The key idea: DNA strands encode data, and biochemical operations (hybridization, ligation, PCR, gel electrophoresis) perform computation in parallel.

**Theoretical model**: A **splicing system** (Head, 1987) uses restriction enzymes to cut and recombine DNA strands at specific sites. The set of all strings obtainable from an initial set by repeated cutting and recombination is a language.

**Theorem 15.2**: Splicing systems with finite initial sets and finite rule sets generate a subclass of regular languages. With certain extensions, they can generate all RE languages.

**Adleman's experiment** (Hamiltonian path for 7 vertices): Each vertex is encoded as a random 20-base DNA sequence. Edges are encoded as complementary sequences linking two vertices. After ligation (joining), PCR (amplifying paths that start and end correctly), and gel electrophoresis (filtering by length), the solution is a DNA molecule encoding the Hamiltonian path. The computation exploits massive parallelism: approximately $10^{14}$ molecules participated.

**Limitations**: DNA computing is massively parallel but slow per operation (hours per step), error-prone, and requires extensive laboratory work. Universal DNA computers remain impractical.

### Quantum Computing

**Quantum computing** exploits quantum mechanical phenomena (superposition, entanglement, interference) to perform computation.

**Quantum bit (qubit)**: Unlike a classical bit (0 or 1), a qubit can be in a superposition $\alpha|0\rangle + \beta|1\rangle$ where $\alpha, \beta \in \mathbb{C}$ and $|\alpha|^2 + |\beta|^2 = 1$.

**Quantum TM**: A quantum Turing machine (Deutsch, 1985) generalizes the classical TM by allowing the state to be a superposition of configurations. The transition function defines a unitary transformation on the Hilbert space of configurations.

**Quantum circuits**: A quantum circuit consists of quantum gates (unitary transformations on qubits). Key gates:
- Hadamard ($H$): creates superposition
- CNOT: controlled-NOT for entanglement
- Pauli gates ($X, Y, Z$)
- Phase gates

**Complexity classes**:

- **BQP** (Bounded-error Quantum Polynomial Time): problems solvable by a quantum computer in polynomial time with error $\leq 1/3$.
- **QMA** (Quantum Merlin-Arthur): quantum analog of $NP$.

Relationships: $P \subseteq BQP \subseteq PSPACE$. It is known that $BQP \subseteq PP$. Shor's algorithm (1994) for integer factorization is in $BQP$ but not known to be in $P$, demonstrating a potential separation. However, Grover's algorithm provides only a quadratic speedup for unstructured search, and it is believed that $NP \not\subseteq BQP$ (quantum computers cannot solve NP-complete problems efficiently).

### Cryptography and Complexity

Modern cryptography is built on complexity-theoretic assumptions:

1. **One-way functions**: Functions that are easy to compute but hard to invert. If $P \neq NP$, one-way functions may exist, but this is not proven. Most cryptographic protocols assume the existence of specific one-way functions (e.g., integer multiplication is one-way: factoring is believed hard).

2. **Public-key cryptography**: The RSA cryptosystem relies on the hardness of factoring large integers. The Diffie-Hellman protocol relies on the discrete logarithm problem. Both are believed to be outside $P$.

3. **Zero-knowledge proofs**: A prover can convince a verifier of a statement's truth without revealing any additional information. It is known that $NP \subseteq ZK$ (the Goldreich-Micali-Wigderson theorem): every NP statement has a zero-knowledge proof protocol.

4. **Post-quantum cryptography**: Shor's algorithm breaks RSA and elliptic-curve cryptography. Post-quantum cryptosystems rely on problems believed hard even for quantum computers: lattice-based cryptography (Learning With Errors — LWE), code-based cryptography (McEliece), and multivariate-quadratic systems.

**Theorem 15.3**: If $P = NP$, then all public-key cryptography fails (one-way functions cannot exist). This connects the $P$ vs $NP$ problem directly to practical security.

## Examples

### Example 1: Lexer for Arithmetic Expressions

Regular expression patterns:
- NUM: $[0-9]+$
- PLUS: $+$
- MINUS: $-$
- TIMES: $*$
- LPAREN: $($
- RPAREN: $)$

The DFA for this lexer handles the longest match: "123" is matched as NUM, not as "1" then "2" then "3".

### Example 2: Model Checking a Traffic Light

States: $\{ \text{Green}, \text{Yellow}, \text{Red} \}$.
Transitions: Green $\to$ Yellow $\to$ Red $\to$ Green.

LTL property: $G(\text{Green} \to X(\text{Green} \, U \, \text{Red}))$ — green is always followed by red eventually, and nothing else happens in between (no direct green-to-green).

Model checking confirms this holds for the given specification.

### Example 3: Shor's Algorithm Overview

Input: integer $N = pq$ (product of two primes).

1. Choose random $a < N$. Compute $g = \gcd(a, N)$. If $g \neq 1$, we found a factor.
2. Use a quantum circuit to find the **order** $r$ of $a$ modulo $N$ (the smallest $r$ with $a^r \equiv 1 \pmod N$). This uses quantum phase estimation: create a superposition of powers of $a$, apply the unitary $U_a|x\rangle = |ax \bmod N\rangle$, and measure the phase.
3. If $r$ is even and $a^{r/2} \not\equiv \pm 1 \pmod N$, then $\gcd(a^{r/2} \pm 1, N)$ gives a nontrivial factor.

The quantum speedup comes from step 2: finding the order classically requires subexponential time; Shor's algorithm finds it in $O((\log N)^3)$ time.

## Summary

- Finite automata and regular expressions power lexical analysis in compilers.
- Context-free grammars and PDAs power syntax analysis (parsing).
- Model checking verifies temporal properties of finite-state systems against specifications.
- DNA computing uses biomolecular reactions for massive parallelism but faces practical limitations.
- Quantum computing offers polynomial and exponential speedups for specific problems (factoring, search).
- Cryptographic security rests on complexity assumptions, especially $P \neq NP$ and the hardness of specific problems like factoring and LWE.
- The theory of computation provides the foundational limits that drive practical tool design.

## Exercises

### Review Questions

1. Why are regular languages sufficient for lexing but insufficient for parsing?
2. Explain the state explosion problem in model checking and three approaches to mitigate it.
3. What is the relationship between quantum computing and the Church-Turing thesis?
4. Why would $P = NP$ break most modern cryptography?

### Application Problems

5. Design a DFA for a lexer that recognizes tokens: identifiers (letter followed by letters/digits), numbers (non-empty digit strings), and the keywords "if", "then", "else".
6. Write a context-free grammar for a simple programming language with if-then-else statements, while loops, and arithmetic expressions.
7. Model a 2-bit counter as a Kripke structure and verify using CTL that it never reaches state 11 from state 00 by a direct transition.
8. Show how a zero-knowledge proof for graph 3-colorability works.

### Challenge Problem

9. The **Learning With Errors (LWE)** problem: given samples $(a_i, b_i = \langle a_i, s \rangle + e_i \pmod q)$ where $e_i$ are small random errors, recover $s$. Show how LWE can be used to construct a public-key encryption scheme. Explain why lattice problems are believed to be post-quantum secure (resistant to quantum attacks).
