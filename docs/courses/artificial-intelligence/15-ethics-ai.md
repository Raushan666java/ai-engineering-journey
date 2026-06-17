# Chapter 15: Ethics of Artificial Intelligence

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) identify sources of bias in AI systems; (2) apply interpretability techniques to explain model decisions; (3) analyze privacy implications of AI deployment; (4) explain the AI alignment problem and its significance; (5) describe major regulatory frameworks governing AI.

## 15.1 Fairness and Bias

![Ethics and Modern AI](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch15-ethics-modern.png)

**Algorithmic bias** occurs when an AI system systematically produces outcomes that disadvantage particular groups. Bias can enter the system at multiple points:

- **Data bias:** Training data may undersample or misrepresent certain populations. Historical discrimination encoded in data (e.g., biased hiring decisions) is learned and perpetuated by models.
- **Label bias:** Subjective labels may reflect annotator prejudice.
- **Measurement bias:** Proxy variables may correlate imperfectly with target constructs.
- **Deployment bias:** Model predictions may be applied in contexts different from training.

### 15.1.1 Fairness Definitions

Multiple mathematical definitions of fairness exist, and they are mutually incompatible in general (Kleinberg et al., 2016):

- **Demographic parity:** $P(\hat{Y} = 1 \mid A = a) = P(\hat{Y} = 1)$ across groups.
- **Equal opportunity:** $P(\hat{Y} = 1 \mid Y = 1, A = a) = P(\hat{Y} = 1 \mid Y = 1)$ --- equal true positive rates.
- **Equalized odds:** Both false positive and true positive rates are equal across groups.
- **Individual fairness:** Similar individuals receive similar predictions (requires a similarity metric).

The impossibility theorem: unless base rates are equal or the predictor is perfect, demographic parity and equalized odds cannot both be satisfied simultaneously.

### 15.1.2 Bias Mitigation Strategies

**Pre-processing:** Transform training data to remove bias (reweighing, relabeling, data generation).

**In-processing:** Incorporate fairness constraints into model training (adversarial debiasing, regularized loss functions).

**Post-processing:** Adjust model outputs to satisfy fairness criteria (threshold modification, calibration).

## 15.2 Interpretability

Interpretability is the degree to which a human can understand the reasoning behind a model's predictions. As models grow more complex, interpretability becomes more challenging.

**LIME (Local Interpretable Model-Agnostic Explanations):** Approximates a complex model locally with a simple, interpretable surrogate model. For a given prediction, LIME perturbs the input, observes prediction changes, and fits a linear model.

$$ \xi(x) = \arg\min_{g \in \mathcal{G}} \mathcal{L}(f, g, \pi_x) + \Omega(g) $$

where $\pi_x$ is a proximity measure and $\mathcal{G}$ is the class of interpretable models.

**SHAP (SHapley Additive exPlanations):** Uses Shapley values from cooperative game theory to assign feature importance. Each feature's contribution is its average marginal contribution across all possible feature subsets.

**Integrated Gradients:** For vision models, attributes prediction to each pixel by integrating gradients along the path from a baseline to the input.

## 15.3 Privacy

AI systems raise significant privacy concerns:
- **Training data leakage:** Models may memorize and expose sensitive training examples.
- **Inference attacks:** Adversaries can determine whether a specific individual was in the training set (membership inference) or infer sensitive attributes.
- **Surveillance:** Facial recognition and behavior tracking enable mass surveillance.

**Differential privacy** provides a formal guarantee: an algorithm $\mathcal{M}$ is $\epsilon$-differentially private if for any datasets $D$ and $D'$ differing by one element and any output $S$:

$$P(\mathcal{M}(D) \in S) \leq e^\epsilon \cdot P(\mathcal{M}(D') \in S)$$

## 15.4 Accountability and Transparency

Accountability requires that responsibility for AI system outcomes can be assigned. Key principles:

- **Auditability:** System decisions should be logged and reviewable.
- **Contestability:** Affected individuals should be able to challenge automated decisions.
- **Human oversight:** Meaningful human review of high-stakes AI decisions.

## 15.5 AI Safety

**AI safety** addresses the risk of harm from AI systems, both accidental and intentional.

### 15.5.1 The Alignment Problem

The **alignment problem** (Russell, 2019) asks: how can we ensure that AI systems reliably pursue the objectives intended by their designers, even as capabilities increase?

**Reward hacking:** The agent finds unintended ways to maximize its reward function (e.g., a cleaning robot that hides dirt rather than collecting it).

**Goal misgeneralization:** The agent pursues a proxy objective that diverges from the designer's true intent.

**Specification gaming:** The agent exploits ambiguities in the reward specification.

### 15.5.2 Existential Risk

Superintelligent AI could pose existential risks (Bostrom, 2014):
- **Orthogonality thesis:** Intelligence and final goals are independent -- a highly intelligent system could pursue harmful objectives.
- **Instrumental convergence:** Any sufficiently intelligent agent would have instrumental reasons to acquire resources, resist shutdown, and increase its capabilities.

**Control approaches:** Boxed AI (containment), motivation selection (value learning), capability control (limiting capabilities).

## 15.6 Regulation

**GDPR (General Data Protection Regulation):** EU regulation granting individuals rights over their data (right to explanation, right to be forgotten, data portability).

**EU AI Act (2024):** Risk-based regulation classifying AI systems into prohibited, high-risk, limited-risk, and minimal-risk categories. High-risk systems require conformity assessments, transparency, and human oversight.

**US Executive Order on AI (2023):** Requires safety testing of powerful AI models, sets standards for AI security, and addresses algorithmic discrimination.

## 15.7 Summary

AI ethics encompasses fairness, interpretability, privacy, accountability, safety, and regulation. These considerations are not secondary to technical development but constitute essential design requirements for responsible AI systems.

## Exercises

### Review Questions

1. Why are demographic parity and equalized odds fundamentally incompatible?
2. Distinguish LIME and SHAP. Under what conditions might one be preferred?
3. Explain the alignment problem. Why does it become more pressing as AI capabilities increase?

### Application Problems

4. Train a logistic regression classifier on the COMPAS recidivism dataset. Evaluate demographic parity and equal opportunity across racial groups. Propose a mitigation strategy.
5. Apply LIME to explain three predictions from a black-box classifier. Evaluate the stability of the explanations across perturbations of the input.

### Challenge Problem

6. Implement a differentially private version of stochastic gradient descent for logistic regression. Evaluate the trade-off between privacy budget $\epsilon$ and model accuracy on a binary classification task.
