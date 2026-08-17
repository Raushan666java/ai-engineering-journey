---
id: 01-introduction
slug: /machine-learning/01-introduction
title: "Chapter 1: Introduction to Machine Learning"
sidebar_label: "Chapter 1: Introduction to Machine Learning"
sidebar_position: 1
---
# Chapter 1: Introduction to Machine Learning

> **Previous:** None | **Next:** [Linear Regression](./02-linear-regression.md)

---

## Learning Objectives

- Define machine learning formally and distinguish it from traditional programming paradigms
- Categorize machine learning problems into supervised, unsupervised, reinforcement, and hybrid variants
- Explain the formal components of a learning problem: task T, experience E, performance measure P
- Describe the hypothesis space and the role of inductive bias in generalization
- Understand the No Free Lunch theorem and its implications for algorithm selection
- Walk through the complete ML pipeline from data collection to production deployment

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Definition of ML | ML learns patterns from data without explicit rules | Start with data, not rules |
| Supervised Learning | Learns mapping from labeled inputs to outputs | Use when you have labeled historical data |
| Unsupervised Learning | Discovers hidden patterns in unlabeled data | Great for exploration and segmentation |
| Reinforcement Learning | Agent learns via trial-and-error rewards | Best for sequential decision-making |
| Hypothesis Space | The set of all possible models the algorithm can represent | Larger spaces require more data or stronger inductive bias |
| Inductive Bias | Assumptions the learner makes to generalize beyond training data | Without bias, learning from finite data is impossible |
| No Free Lunch | No single algorithm dominates all problem distributions | Match algorithm to problem structure, not fashion |
| ML Pipeline | Structured workflow from data to deployment | Follow the pipeline to avoid costly mistakes |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Problem Definition] --> B[Data Collection]
    B --> C[Data Preparation]
    C --> D[Model Selection]
    D --> E[Training]
    E --> F[Evaluation]
    F --> G[Deployment]
    G --> H[Monitor & Maintain]
    H -.-> A
```

```mermaid
flowchart TD
    Q{Problem Type?} --> Q1[Prediction?]
    Q --> Q2[Structure Discovery?]
    Q --> Q3[Sequential Decisions?]
    Q1 -->|Labels available| S1[Supervised]
    Q1 -->|No labels| S2[Unsupervised]
    S1 -->|Continuous target| REG[Regression]
    S1 -->|Discrete target| CLF[Classification]
    S2 -->|Groups| CLUST[Clustering]
    S2 -->|Simplify| DR[Dimensionality Reduction]
    Q3 --> RL[Reinforcement Learning]
    REG --> D1[Linear Regression, RF, XGBoost]
    CLF --> D2[Logistic Regression, SVM, Neural Nets]
    CLUST --> D3[K-Means, DBSCAN, Hierarchical]
    DR --> D4[PCA, t-SNE, Autoencoders]
    RL --> D5[Q-Learning, Policy Gradients]
```

---

## Theory

### What is Machine Learning?


Machine learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. In traditional programming, a developer writes explicit if-then-else logic to process data. In machine learning, an algorithm uses data and statistical techniques to infer the underlying rules.

**Arthur Samuel** (1959): "The field of study that gives computers the ability to learn without being explicitly programmed."

**Tom Mitchell** (1997) ? a more precise, formal definition: "A computer program is said to learn from experience $E$ with respect to some class of tasks $T$ and performance measure $P$, if its performance at tasks in $T$, as measured by $P$, improves with experience $E$."

### Formal Problem Definition


Every machine learning problem consists of three components:

- **Task $T$**: What the system should do (e.g., classify emails as spam/ham, predict housing prices)
- **Experience $E$**: The data the system sees (e.g., 10,000 labeled emails, 5,000 housing records)
- **Performance Measure $P$**: How we evaluate success (e.g., accuracy, MSE, F1-score)

A learning algorithm takes experience $E$ as input and outputs a hypothesis $h \in \mathcal{H}$ (the hypothesis space) that performs task $T$. The goal is to find $h$ that maximizes $P$ on unseen data, not just the training set.

### Hypothesis Space and Inductive Bias


The **hypothesis space** $\mathcal{H}$ is the set of all functions the learning algorithm can possibly produce. For linear regression, $\mathcal{H}$ contains all linear functions. For neural networks, it contains an enormous family of non-linear functions.

A larger $\mathcal{H}$ means the algorithm can represent more complex patterns, but it also increases the risk of overfitting (memorizing noise).

**Inductive Bias** is the set of assumptions a learner uses to select one hypothesis over another when multiple hypotheses fit the training data equally well. There are two main types:

1. **Sebe's Bias (Preference Bias)**: The learner prefers simpler hypotheses (e.g., Occam's razor ? shorter decision trees, smaller weights)
2. **Mitchell's Bias (Language Bias)**: The hypothesis space itself restricts what concepts can be learned (e.g., a linear classifier cannot represent XOR)

Without inductive bias, learning from finite data is impossible ? an unbiased learner would treat all hypotheses consistent with the data as equally valid, resulting in no basis for choosing one over another on unseen examples.

```mermaid
flowchart LR
    subgraph Input
        D[Training Data]
    end
    subgraph Learning
        A[Learning Algorithm] --> H[Hypothesis Space H]
        D --> A
        B[Inductive Bias] --> A
    end
    subgraph Output
        H --> h[Selected Hypothesis h*]
    end
    h --> P[Prediction on New Data]
```

### Types of Machine Learning


Machine learning algorithms fall into three primary categories based on the nature of the learning signal available:

| Type | Signal | Goal | Example Algorithms |
|------|--------|------|-------------------|
| Supervised Learning | Labeled pairs $(x, y)$ | Learn mapping $f: X \to Y$ | Linear regression, logistic regression, SVM, neural nets |
| Unsupervised Learning | Unlabeled inputs $x$ alone | Discover hidden structure $p(x)$ | K-means, PCA, DBSCAN, autoencoders |
| Reinforcement Learning | Reward signal $r$ from environment | Learn policy $\pi(s) \to a$ that maximizes cumulative reward | Q-learning, Policy gradients, DQN |

**Hybrid paradigms** also exist:

- **Semi-Supervised Learning**: Combines a small set of labeled data with a large set of unlabeled data. Common when labeling is expensive (medical imaging, web page classification).
- **Self-Supervised Learning**: The model generates its own labels from the data structure (e.g., predicting masked words in a sentence, predicting the next frame in a video). This powers modern LLMs like GPT and BERT.
- **Multi-Task Learning**: A single model is trained on multiple related tasks simultaneously, sharing representations across tasks.
- **Active Learning**: The algorithm selectively queries a human annotator for labels on the most informative examples.

### Types of Supervised Learning Problems


| Problem Type | Target $y$ | Loss Function | Evaluation Metric |
|---|---|---|---|
| Regression | Continuous ($\mathbb{R}$) | MSE, MAE, Huber | $R^2$, RMSE, MAE |
| Binary Classification | $\{0, 1\}$ | Binary cross-entropy, hinge | Accuracy, precision, recall, F1, AUC-ROC |
| Multi-class Classification | $\{1, 2, \dots, K\}$ | Categorical cross-entropy | Accuracy, macro-F1, confusion matrix |
| Multi-label Classification | $\{0, 1\}^K$ | Binary cross-entropy per label | Precision@K, label-ranking average precision |
| Ordinal Regression | Ordered categories | Cumulative logit | Quadratic-weighted kappa, MAE |
| Ranking | Ordered lists | Pairwise ranking hinge | NDCG, MAP, MRR |

### The Inductive Learning Hypothesis


A fundamental assumption in machine learning:

> Any hypothesis found to approximate the target function well over a sufficiently large set of training examples will also approximate the target function well over other unobserved examples.

This assumption is what makes generalization possible ? but it only holds when:

1. The training data is representative (drawn i.i.d. from the same distribution as the test data)
2. The hypothesis space is appropriately sized (not too large, not too small)
3. The inductive bias is aligned with the true underlying function

### No Free Lunch Theorem


The No Free Lunch (NFL) theorem (Wolpert, 1996) states:

> Averaged over all possible data distributions, no learning algorithm performs better than any other.

In other words, if an algorithm performs exceptionally well on one class of problems, it must perform correspondingly worse on others. There is no universal best learner.

**Practical implications**:
- Algorithm performance is problem-dependent ? always match the algorithm to the data characteristics
- Domain knowledge (feature engineering, choice of inductive bias) is what distinguishes successful ML projects
- Ensemble of diverse algorithms can hedge against NFL ? if one fails on a distribution shift, another may succeed
- The theorem motivates the need for cross-validation and empirical comparison on your specific dataset

### The Machine Learning Pipeline


A typical ML project follows a structured workflow with feedback loops:

**1. Problem Definition**
- Translate business objectives into ML tasks
- Define success metrics ($P$)
- Determine feasibility: do we have enough data? Is the signal strong enough?

**2. Data Collection**
- Identify data sources: databases, APIs, logs, sensors
- Consider quantity (how many examples needed?) and quality (noise, bias, missing values)
- Legal and ethical considerations: privacy, consent, fairness

**3. Data Preparation (often 60-80% of project time)**
- Cleaning: handle missing values, remove duplicates, fix data-type errors
- Transformation: scaling, normalization, encoding categorical variables
- Feature engineering: create new features from domain knowledge
- Splitting: training / validation / test sets

**4. Model Selection**
- Start with a simple baseline (mean predictor, linear model)
- Iterate toward more complex models as needed
- Use cross-validation to compare candidates

**5. Training**
- Feed prepared data into the learning algorithm
- Optimize parameters to minimize the loss function
- Monitor for convergence and overfitting

**6. Evaluation**
- Assess performance on the held-out test set
- Compute multiple metrics relevant to the problem
- Error analysis: where does the model fail? Are failures systematic?

**7. Deployment**
- Integrate model into production system
- Set up API endpoints, batch prediction jobs, or edge deployment
- Build monitoring for data drift, concept drift, and performance degradation

**8. Monitor & Maintain**
- Track prediction distributions vs. training distributions
- Retrain on fresh data periodically
- Roll back if metrics degrade

### TypeScript: ML Pipeline

```typescript
interface Dataset<T, U> { features: T[]; labels: U[]; }

abstract class MLModel<T, U> {
  abstract train(data: Dataset<T, U>): void;
  abstract predict(input: T): U;
  evaluate(test: Dataset<T, U>): { accuracy: number } {
    let correct = 0;
    for (let i = 0; i < test.features.length; i++)
      if (this.predict(test.features[i]) === test.labels[i]) correct++;
    return { accuracy: correct / test.features.length };
  }
}

class KNN extends MLModel<number[], number> {
  private data: Dataset<number[], number> = { features: [], labels: [] };
  constructor(private k = 3) { super(); }
  train(data: Dataset<number[], number>): void { this.data = data; }
  predict(input: number[]): number {
    const dists = this.data.features
      .map((f, i) => ({ d: Math.sqrt(f.reduce((s, v, j) => s + (v - input[j]) ** 2, 0)), l: this.data.labels[i] }))
      .sort((a, b) => a.d - b.d);
    const votes = new Map<number, number>();
    for (let i = 0; i < this.k; i++) votes.set(dists[i].l, (votes.get(dists[i].l) ?? 0) + 1);
    return [...votes.entries()].sort((a, b) => b[1] - a[1])[0][0];
  }
}

function trainTestSplit<T, U>(data: Dataset<T, U>, ratio = 0.2): { train: Dataset<T, U>; test: Dataset<T, U> } {
  const idx = Array.from({ length: data.features.length }, (_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  const split = Math.floor(idx.length * (1 - ratio));
  return {
    train: { features: idx.slice(0, split).map(i => data.features[i]), labels: idx.slice(0, split).map(i => data.labels[i]) },
    test: { features: idx.slice(split).map(i => data.features[i]), labels: idx.slice(split).map(i => data.labels[i]) },
  };
}
```

```mermaid
flowchart TD
    subgraph "Phase 1: Problem"
        A[Business Understanding] --> B[ML Problem Formulation]
        B --> C[Feasibility Check]
    end
    subgraph "Phase 2: Data"
        D[Data Collection] --> E[Data Cleaning]
        E --> F[Feature Engineering]
        F --> G[Train/Val/Test Split]
    end
    subgraph "Phase 3: Modeling"
        G --> H[Baseline Model]
        H --> I[Algorithm Selection]
        I --> J[Hyperparameter Tuning]
        J --> K[Ensemble / Refine]
    end
    subgraph "Phase 4: Production"
        K --> L[Final Evaluation]
        L --> M[Deployment]
        M --> N[Monitoring]
        N -.->|Data Drift Detected| D
        N -.->|Model Degradation| I
    end
```

> **One-Sentence Takeaway:** Machine learning systems improve through experience by identifying patterns in data, following a structured pipeline from problem definition to deployment.

> **Remember:** The ML pipeline is iterative, not linear ? you will often loop back to data preparation after evaluating your first model.

---

## Examples

### Example 1: Email Spam Filter (Supervised Learning)

This example demonstrates a classic binary classification problem.

- **Task $T$**: Classify an incoming email as "Spam" or "Not Spam" (Ham).
- **Experience $E$**: A collection of 50,000 emails, each labeled by a human reader.
- **Performance $P$**: F1-score on a held-out test set of 10,000 emails.
- **Approach**: The model learns that certain words ("free," "winner," "urgent") occur more frequently in spam. The decision boundary separates spam from ham in the feature space of word frequencies.

**Walkthrough**:
1. Collect historical emails with labels
2. Extract features: bag-of-words or TF-IDF vectors from email body and subject
3. Train a classifier (logistic regression, Naive Bayes, or Random Forest)
4. Evaluate on held-out set: precision, recall, false positive rate
5. Deploy as an email server plugin that moves suspected spam to a separate folder

### Example 2: Customer Segmentation (Unsupervised Learning)

This example shows how to group data without predefined labels.

- **Task $T$**: Group customers into distinct segments for targeted marketing.
- **Experience $E$**: Purchase history, time spent on site, demographics for 100,000 users.
- **Performance $P$**: Silhouette score; business validation via A/B testing of marketing campaigns.
- **Approach**: A clustering algorithm (K-means) identifies groups with similar behavior.

**Walkthrough**:
1. Preprocess: normalize features (income and age have different scales)
2. Run K-means with $K=4$ clusters
3. Interpret segments: "High-spenders," "Bargain hunters," "Window shoppers," "Loyalists"
4. Validate by designing targeted campaigns and measuring lift in conversion rate

### Example 3: ML Problem Setup Runner (TypeScript)

```typescript
/**
 * Formal ML problem definition and hypothesis space exploration
 */
interface MLProblem {
    name: string;
    taskType: 'regression' | 'binary_classification' | 'multiclass' | 'clustering';
    features: number;
    samples: number;
    task: string;
    experience: string;
    performance: string;
}

class HypothesisSpace {
    private capacity: number;
    private bias: string;

    constructor(capacity: number, bias: string) {
        this.capacity = capacity;
        this.bias = bias;
    }

    fitsProblem(problem: MLProblem): boolean {
        return this.capacity >= problem.features;
    }

    describe(): string {
        return `Hypothesis space: capacity=${this.capacity}, inductive bias="${this.bias}"`;
    }
}

function evaluateLearning(problem: MLProblem, hypothesis: HypothesisSpace): string {
    const dataRatio = problem.samples / problem.features;
    let verdict: string;

    if (dataRatio < 10) {
        verdict = `HIGH RISK: Only ${dataRatio.toFixed(1)} samples per feature. Strong inductive bias required.`;
    } else if (dataRatio < 50) {
        verdict = `MODERATE: ${dataRatio.toFixed(1)} samples per feature. Moderate regularization recommended.`;
    } else {
        verdict = `LOW RISK: ${dataRatio.toFixed(1)} samples per feature. Sufficient data for complex hypothesis spaces.`;
    }

    return `Problem: ${problem.name} (${problem.taskType})\n` +
           `Samples: ${problem.samples}, Features: ${problem.features}\n` +
           `Task: ${problem.task}\n` +
           `Performance measure: ${problem.performance}\n` +
           hypothesis.describe() + '\n' +
           `Veridct: ${verdict}`;
}

const spamFilter: MLProblem = {
    name: 'Email Spam Detection',
    taskType: 'binary_classification',
    features: 50000,
    samples: 50000,
    task: 'Classify email as spam or ham',
    experience: '50,000 labeled emails with word frequency features',
    performance: 'F1-score on held-out test set'
};

const housingPrice: MLProblem = {
    name: 'House Price Prediction',
    taskType: 'regression',
    features: 15,
    samples: 5000,
    task: 'Predict median house price from features',
    experience: '5,000 housing records with 15 features each',
    performance: 'RMSE and R-squared on test set'
};

const linearHypothesis = new HypothesisSpace(100, 'Linear relationships between features and target');
const neuralHypothesis = new HypothesisSpace(1000000, 'Complex non-linear feature interactions');

console.log(evaluateLearning(spamFilter, linearHypothesis));
console.log('---');
console.log(evaluateLearning(housingPrice, neuralHypothesis));
```

**Expected Output**: Shows how sample-to-feature ratio and hypothesis space capacity determine the learning strategy.

> **One-Sentence Takeaway:** Real-world ML applications span both supervised tasks like spam filtering and unsupervised tasks like customer segmentation, with the choice of algorithm guided by problem structure and data availability.

> **Pro Tip:** Start with a simple model before trying complex algorithms. A baseline model gives you a benchmark to measure whether sophisticated methods actually add value.

---

## Practical Takeaways

1. **Problem structure determines algorithm choice** ? match the learning paradigm (supervised, unsupervised, RL) to the available signal
2. **Hypothesis spaces interact with data quantity** ? larger hypothesis spaces need more data or stronger inductive bias
3. **No Free Lunch is real** ? test multiple algorithms on your specific data rather than relying on default choices
4. **Pipeline discipline prevents failures** ? skipping data preparation or evaluation leads to models that fail in production
5. **Monitoring is not optional** ? data distributions shift over time; production models require continuous validation

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|------------|-----------------|----------|
| Supervised Learning | Learns from labeled (x, y) pairs | Requires ground-truth labels | Spam detection, price prediction |
| Unsupervised Learning | Finds patterns in unlabeled data | No labels needed | Customer segmentation, anomaly detection |
| Reinforcement Learning | Learns via rewards from environment | Sequential decisions with delayed feedback | Game playing, robotics, autonomous driving |
| Traditional Programming | Explicit rules coded by developer | No learning; static behavior | Payroll calculation, inventory management |
| Semi-Supervised Learning | Combines few labels with much unlabeled data | Reduces labeling cost | Medical imaging, web page classification |
| Self-Supervised Learning | Generates labels from data structure | Scales to massive unlabeled corpora | LLM pretraining (GPT, BERT) |
| Generalization | Model performs well on new unseen data | Ultimate goal of all ML | All deployment scenarios |

## Quick Reference

| Term | Definition |
|------|------------|
| **Feature** | Individual measurable property of a data point |
| **Label** | The output value (target) to be predicted |
| **Training Set** | Data used to fit the model's parameters |
| **Validation Set** | Data used for hyperparameter tuning and model selection |
| **Test Set** | Held-out data for evaluating final performance |
| **Hypothesis Space** | Set of all possible models the algorithm can produce |
| **Inductive Bias** | Assumptions made to generalize beyond training data |
| **Overfitting** | Model memorizes training data, fails on new data |
| **Underfitting** | Model is too simple to capture underlying patterns |
| **Bias** | Error from incorrect assumptions in the learning algorithm |
| **Variance** | Error from sensitivity to small fluctuations in training data |
| **Hyperparameter** | Configuration set before training begins |
| **Cross-Validation** | Technique for assessing model stability across data splits |
| **Generalization** | Ability to perform well on unseen data |

## Cross-Application Matrix

| ML Paradigm | Healthcare | Finance | E-Commerce | Autonomous Systems |
|---|---|---|---|---|
| Supervised | Disease diagnosis | Fraud detection | Product recommendation | Object recognition |
| Unsupervised | Patient clustering | Market segmentation | Customer profiling | Anomaly in sensor data |
| Reinforcement | Treatment policy optimization | Trading strategy | Dynamic pricing | Path planning and control |
| Self-Supervised | Protein folding prediction | -- | Product representation learning | Scene representation learning |

## Chapter Quiz

1. Which component of Tom Mitchell's formal definition refers to the training data fed to the algorithm?
   A) Task T
   B) Experience E
   C) Performance measure P
   D) Hypothesis space H

<details><summary>Answer&lt;/summary&gt;**B)** Experience E represents the data the system sees during learning.
</details>

2. What is the primary implication of the No Free Lunch theorem?
   A) All ML algorithms are equally computationally expensive
   B) No single algorithm is best for all problem distributions
   C) Free lunch refers to the cost of training data
   D) The theorem only applies to unsupervised learning

<details><summary>Answer&lt;/summary&gt;**B)** Averaged over all possible problems, no learner outperforms any other ? algorithm choice must be problem-specific.
</details>

3. A dataset has 200 samples and 200 features. What is the primary concern?
   A) The model will underfit
   B) The ratio of samples to features is dangerously low
   C) The data is perfectly balanced
   D) Feature scaling is impossible

<details><summary>Answer&lt;/summary&gt;**B)** With a 1:1 sample-to-feature ratio, the model can easily memorize the data (overfit) without learning generalizable patterns.
</details>

4. Why is inductive bias necessary for machine learning?
   A) It eliminates the need for training data
   B) Without it, all hypotheses consistent with data are equally valid
   C) It guarantees the global optimum
   D) It reduces the computational cost of training

<details><summary>Answer&lt;/summary&gt;**B)** Inductive bias provides the assumptions needed to select one hypothesis over another, enabling generalization beyond training data.
</details>

5. In the ML pipeline, which step typically consumes the most time?
   A) Model Selection
   B) Training
   C) Data Preparation
   D) Deployment

<details><summary>Answer&lt;/summary&gt;**C)** Data preparation (cleaning, transformation, feature engineering) commonly accounts for 60-80% of project time.
</details>

---

### TypeScript: Model Evaluation Metrics

```typescript
/**
 * Comprehensive model evaluation metrics implementation
 */
interface ClassificationMetrics {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    specificity: number;
    mcc: number;
}

class ConfusionMatrix {
    constructor(
        public tp: number,
        public fp: number,
        public tn: number,
        public fn: number
    ) {}

    accuracy(): number {
        const total = this.tp + this.tn + this.fp + this.fn;
        return total === 0 ? 0 : (this.tp + this.tn) / total;
    }

    precision(): number {
        return this.tp + this.fp === 0 ? 0 : this.tp / (this.tp + this.fp);
    }

    recall(): number {
        return this.tp + this.fn === 0 ? 0 : this.tp / (this.tp + this.fn);
    }

    f1Score(): number {
        const p = this.precision();
        const r = this.recall();
        return p + r === 0 ? 0 : 2 * (p * r) / (p + r);
    }

    specificity(): number {
        return this.tn + this.fp === 0 ? 0 : this.tn / (this.tn + this.fp);
    }

    mcc(): number {
        const num = this.tp * this.tn - this.fp * this.fn;
        const den = Math.sqrt(
            (this.tp + this.fp) * (this.tp + this.fn) *
            (this.tn + this.fp) * (this.tn + this.fn)
        );
        return den === 0 ? 0 : num / den;
    }
}

function binaryConfusionMatrix(
    actual: number[],
    predicted: number[]
): ConfusionMatrix {
    let tp = 0, fp = 0, tn = 0, fn = 0;
    for (let i = 0; i < actual.length; i++) {
        if (predicted[i] === 1 && actual[i] === 1) tp++;
        else if (predicted[i] === 1 && actual[i] === 0) fp++;
        else if (predicted[i] === 0 && actual[i] === 0) tn++;
        else if (predicted[i] === 0 && actual[i] === 1) fn++;
    }
    return new ConfusionMatrix(tp, fp, tn, fn);
}

function multiclassReport(
    actual: number[],
    predicted: number[],
    numClasses: number
): Map<number, ClassificationMetrics> {
    const report = new Map<number, ClassificationMetrics>();
    for (let c = 0; c < numClasses; c++) {
        const ba = actual.map(a => a === c ? 1 : 0);
        const bp = predicted.map(p => p === c ? 1 : 0);
        const cm = binaryConfusionMatrix(ba, bp);
        report.set(c, {
            accuracy: cm.accuracy(),
            precision: cm.precision(),
            recall: cm.recall(),
            f1Score: cm.f1Score(),
            specificity: cm.specificity(),
            mcc: cm.mcc()
        });
    }
    return report;
}

function kFoldCrossValidation(
    modelFactory: new () => MLModel<number[], number>,
    data: Dataset<number[], number>,
    k: number = 5
): { folds: ConfusionMatrix[]; mean: ClassificationMetrics; std: ClassificationMetrics } {
    const indices = Array.from({ length: data.features.length }, (_, i) => i)
        .sort(() => Math.random() - 0.5);
    const foldSize = Math.floor(indices.length / k);
    const folds: ConfusionMatrix[] = [];

    for (let i = 0; i < k; i++) {
        const testSet = new Set(indices.slice(i * foldSize, (i + 1) * foldSize));
        const train: Dataset<number[], number> = { features: [], labels: [] };
        const test: Dataset<number[], number> = { features: [], labels: [] };

        for (let j = 0; j < data.features.length; j++) {
            if (testSet.has(j)) {
                test.features.push(data.features[j]);
                test.labels.push(data.labels[j]);
            } else {
                train.features.push(data.features[j]);
                train.labels.push(data.labels[j]);
            }
        }

        const model = new modelFactory();
        model.train(train);
        const predicted = test.features.map(f => model.predict(f));
        folds.push(binaryConfusionMatrix(test.labels, predicted));
    }

    const allMetrics = folds.map(f => ({
        accuracy: f.accuracy(), precision: f.precision(),
        recall: f.recall(), f1Score: f.f1Score(),
        specificity: f.specificity(), mcc: f.mcc()
    }));

    const avg = (vals: number[]) =>
        vals.reduce((s, v) => s + v, 0) / vals.length;
    const stdDev = (vals: number[], m: number) =>
        Math.sqrt(vals.reduce((s, v) => s + (v - m) ** 2, 0) / vals.length);

    const mean: ClassificationMetrics = {
        accuracy: avg(allMetrics.map(m => m.accuracy)),
        precision: avg(allMetrics.map(m => m.precision)),
        recall: avg(allMetrics.map(m => m.recall)),
        f1Score: avg(allMetrics.map(m => m.f1Score)),
        specificity: avg(allMetrics.map(m => m.specificity)),
        mcc: avg(allMetrics.map(m => m.mcc)),
    };

    const std: ClassificationMetrics = {
        accuracy: stdDev(allMetrics.map(m => m.accuracy), mean.accuracy),
        precision: stdDev(allMetrics.map(m => m.precision), mean.precision),
        recall: stdDev(allMetrics.map(m => m.recall), mean.recall),
        f1Score: stdDev(allMetrics.map(m => m.f1Score), mean.f1Score),
        specificity: stdDev(allMetrics.map(m => m.specificity), mean.specificity),
        mcc: stdDev(allMetrics.map(m => m.mcc), mean.mcc),
    };

    return { folds, mean, std };
}

function standardize(features: number[][]): number[][] {
    const n = features.length;
    if (n === 0) return features;
    const dim = features[0].length;
    const means = new Array(dim).fill(0);
    const stds = new Array(dim).fill(0);

    for (let j = 0; j < dim; j++) {
        for (let i = 0; i < n; i++) means[j] += features[i][j];
        means[j] /= n;
    }

    for (let j = 0; j < dim; j++) {
        for (let i = 0; i < n; i++) stds[j] += (features[i][j] - means[j]) ** 2;
        stds[j] = Math.sqrt(stds[j] / n);
    }

    return features.map(row =>
        row.map((val, j) => stds[j] === 0 ? 0 : (val - means[j]) / stds[j])
    );
}

// Example usage
const sampleData: Dataset<number[], number> = {
    features: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11]],
    labels: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
};
const scaled = standardize(sampleData.features);
const cvResult = kFoldCrossValidation(KNN, { features: scaled, labels: sampleData.labels }, 5);
console.log(`Mean F1: ${cvResult.mean.f1Score.toFixed(3)} ? ${cvResult.std.f1Score.toFixed(3)}`);
console.log(`Mean Accuracy: ${cvResult.mean.accuracy.toFixed(3)} ? ${cvResult.std.accuracy.toFixed(3)}`);
```

---

## TypeScript Implementation: Linear Regression from Scratch

```typescript
// Gradient Descent Linear Regression ? demonstrates core ML concepts
type TrainTestSplit<T> = { train: T[]; test: T[] };

function trainTestSplit<T>(data: T[], testRatio: number = 0.2): TrainTestSplit<T> {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    const splitIdx = Math.floor(data.length * (1 - testRatio));
    return { train: shuffled.slice(0, splitIdx), test: shuffled.slice(splitIdx) };
}

function meanSquaredError(actual: number[], predicted: number[]): number {
    return actual.reduce((sum, a, i) => sum + (a - predicted[i]) ** 2, 0) / actual.length;
}

function rootMeanSquaredError(actual: number[], predicted: number[]): number {
    return Math.sqrt(meanSquaredError(actual, predicted));
}

function meanAbsoluteError(actual: number[], predicted: number[]): number {
    return actual.reduce((sum, a, i) => sum + Math.abs(a - predicted[i]), 0) / actual.length;
}

class LinearRegressionGD {
    private weights: number[] = [];
    private bias: number = 0;
    private learningRate: number;
    private epochs: number;

    constructor(learningRate: number = 0.01, epochs: number = 1000) {
        this.learningRate = learningRate;
        this.epochs = epochs;
    }

    fit(features: number[][], targets: number[]): void {
        const n = features.length;
        const d = features[0].length;
        this.weights = new Array(d).fill(0);
        this.bias = 0;

        for (let epoch = 0; epoch < this.epochs; epoch++) {
            let gradW = new Array(d).fill(0);
            let gradB = 0;

            for (let i = 0; i < n; i++) {
                const pred = this.predict(features[i]);
                const error = pred - targets[i];
                for (let j = 0; j < d; j++) {
                    gradW[j] += (2 / n) * error * features[i][j];
                }
                gradB += (2 / n) * error;
            }

            for (let j = 0; j < d; j++) {
                this.weights[j] -= this.learningRate * gradW[j];
            }
            this.bias -= this.learningRate * gradB;
        }
    }

    predict(features: number[]): number {
        return features.reduce((sum, f, i) => sum + f * this.weights[i], this.bias);
    }

    predictBatch(samples: number[][]): number[] {
        return samples.map(s => this.predict(s));
    }

    score(features: number[][], targets: number[]): number {
        const preds = this.predictBatch(features);
        const ssRes = targets.reduce((sum, t, i) => sum + (t - preds[i]) ** 2, 0);
        const meanTarget = targets.reduce((a, b) => a + b, 0) / targets.length;
        const ssTot = targets.reduce((sum, t) => sum + (t - meanTarget) ** 2, 0);
        return 1 - ssRes / ssTot;
    }
}

class PolynomialRegression {
    private degree: number;
    private model: LinearRegressionGD;

    constructor(degree: number = 2, lr: number = 0.01, epochs: number = 1000) {
        this.degree = degree;
        this.model = new LinearRegressionGD(lr, epochs);
    }

    private polynomialFeatures(x: number[]): number[][] {
        return x.map(v => {
            const features: number[] = [];
            for (let d = 1; d <= this.degree; d++) {
                features.push(v ** d);
            }
            return features;
        });
    }

    fit(x: number[], y: number[]): void {
        const features = this.polynomialFeatures(x);
        this.model.fit(features, y);
    }

    predict(x: number[]): number[] {
        const features = this.polynomialFeatures(x);
        return this.model.predictBatch(features);
    }
}

// Demo
const houseSizes = [600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400];
const housePrices = [150, 180, 210, 245, 290, 330, 370, 415, 460, 500];
const { train: xTrain, test: xTest } = trainTestSplit(houseSizes, 0.2);
const { train: yTrain, test: yTest } = trainTestSplit(housePrices, 0.2);

const lrModel = new LinearRegressionGD(0.0000001, 2000);
lrModel.fit(xTrain.map(s => [s]), yTrain);
const lrPreds = lrModel.predictBatch(xTest.map(s => [s]));
console.log("Linear Regression RMSE:", rootMeanSquaredError(yTest, lrPreds).toFixed(2));
console.log("Linear Regression MAE:", meanAbsoluteError(yTest, lrPreds).toFixed(2));

const polyModel = new PolynomialRegression(2, 0.0000001, 5000);
polyModel.fit(xTrain, yTrain);
const polyPreds = polyModel.predict(xTest);
console.log("Polynomial Regression RMSE:", rootMeanSquaredError(yTest, polyPreds).toFixed(2));
console.log("Polynomial Regression R?:", (1 - yTest.reduce((s, t, i) => s + (t - polyPreds[i]) ** 2, 0) / yTest.reduce((s, t) => s + (t - yTest.reduce((a, b) => a + b, 0) / yTest.length) ** 2, 0)).toFixed(4));
```


// introduction
// ml-supervised-unsupervised implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit&lt;Task, "status"&gt;): Promise&lt;void&gt; {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise&lt;void&gt; {
    const running: Promise&lt;void&gt;[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise&lt;void&gt; {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'introduction', data: { topic: 'ml-supervised-unsupervised' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// introduction - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map&lt;string, CacheEntry&gt; = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record&lt;string, unknown&gt;): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record&lt;string, unknown&gt;): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i &lt; input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise&lt;void&gt; {
  const cache = new Cache(5000)
  cache.set('key1', 'ml-algorithms demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'machine-learning', chapter: 'introduction' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('ml-algorithms'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- Machine learning enables computers to learn from data instead of following static rules, formalized by Mitchell's definition $(T, E, P)$.
- The three primary paradigms are supervised, unsupervised, and reinforcement learning, with hybrid variants (semi-supervised, self-supervised) bridging gaps.
- Hypothesis space size and inductive bias jointly determine what a learner can represent and how it generalizes.
- The No Free Lunch theorem reminds us that algorithm choice must be problem-specific.
- The ML pipeline is an iterative process from problem definition through monitoring, with data preparation as the most time-consuming phase.
- Generalization ? performance on unseen data ? is the ultimate goal, achieved through careful evaluation and inductive bias alignment.

> **One-Sentence Takeaway:** Understanding the three ML paradigms, hypothesis spaces, inductive bias, and the end-to-end pipeline is the foundation for applying machine learning effectively.

---

## Exercises

### Review Questions
1. How does the definition of "experience" in Tom Mitchell's formal definition apply to a weather prediction system?
2. What is the key difference between a classification task and a regression task?
3. In which scenario would you prefer unsupervised learning over supervised learning?
4. Why is data preparation often considered the most time-consuming part of the ML pipeline?
5. Explain why an unbiased learner cannot generalize beyond the training data.
6. Provide two examples of inductive bias in common ML algorithms.

### Application Problems
1. Categorize the following as supervised or unsupervised learning:
   - Predicting the price of a house based on its square footage
   - Grouping news articles by topic without knowing the topics beforehand
   - Identifying credit card transactions as fraudulent or legitimate
   - Generating captions for images (hint: consider the supervision signal)

2. Design a high-level ML pipeline for a system that predicts whether a student will pass a course based on their previous grades and attendance.

3. For each of the following scenarios, estimate the minimum number of training samples needed if you have 50 features and plan to use:
   - A linear model (low capacity hypothesis space)
   - A deep neural network (high capacity hypothesis space)

### Challenge Problem
1. Discuss the "No Free Lunch" theorem in the context of model selection. Why is it impossible to have a single machine learning algorithm that is the best for every possible problem? How does the theorem guide practical ML workflow decisions?
