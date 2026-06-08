# Day 35 — Interview Q&A: Machine Learning & AI Patterns

This file contains high-quality interview questions and detailed answers focused on ML/AI patterns, production systems, and system design for ML. Designed for senior-level interviews.

1. Q: Explain the bias-variance tradeoff. How do you detect and mitigate each?
   A: Bias is error from wrong assumptions (underfitting); variance is error from sensitivity to training data (overfitting). Detect via validation curves: high bias -> low train & validation score; high variance -> high train score, low validation score. Mitigate bias: increase model complexity, add features, reduce regularization. Mitigate variance: add data, stronger regularization, use ensemble methods, feature selection, dropout (DL).

2. Q: Describe cross-validation types and when to use each.
   A: K-fold CV: general-purpose. Stratified K-fold: classification with class imbalance. Leave-one-out: small datasets. Time-series split (forward chaining): for time-ordered data. Group K-fold: when groups (e.g., users) shouldn't be split between train/test.

3. Q: Explain precision-recall vs ROC curves and when each is preferred.
   A: ROC: plots TPR vs FPR; good when classes roughly balanced. PR curve: precision vs recall; better when positive class is rare (imbalanced datasets). Use PR for high class imbalance where precision matters.

4. Q: How do you handle missing data?
   A: Options: imputation (mean/median/mode), model-based (kNN, MICE), flag missingness (indicator features), dropping rows/columns (if small fraction), using models that handle missingness (XGBoost can handle). Choose strategy based on missingness mechanism (MCAR, MAR, MNAR).

5. Q: Explain batch normalization and why it's used.
   A: BN normalizes layer inputs per mini-batch to reduce internal covariate shift, improving training speed and stability. Provides slight regularization, allows higher learning rates, helps deeper networks converge.

6. Q: How does dropout work? Best practices?
   A: Dropout randomly zeroes activations during training, preventing co-adaptation of neurons and acting as regularization. Use higher dropout for fully connected layers, smaller for conv layers; disable during inference (scale weights or use inverted dropout).

7. Q: Discuss early stopping. How do you choose the patience parameter?
   A: Early stopping monitors validation metric and stops training when no improvement for some epochs (“patience”). Choose patience by validation loss fluctuations and learning rate schedule; too small -> premature stop, too large -> wasted compute.

8. Q: How do you evaluate time series forecasts?
   A: Use MAPE, RMSE, MAE, and time-series-specific methods (mean absolute scaled error — MASE). Use rolling cross-validation (walk-forward) to avoid lookahead bias. Evaluate on multiple horizons.

9. Q: Describe precision/recall tradeoffs for production settings.
   A: Tune threshold to balance precision and recall according to business impact: false positives vs false negatives cost. Use calibration, cost-sensitive learning, or different thresholds per metric.

10. Q: How to detect and mitigate data drift in production?
    A: Monitor feature distribution statistics (KS test, population stability index), monitor model performance metrics, set alerts. Mitigate by retraining, online learning, feature normalization updates, and A/B tests.

11. Q: Explain bias in datasets and fairness-aware training techniques.
    A: Bias arises from historical, sampling, labeling biases. Techniques: re-sampling/re-weighting, fairness-aware regularization, adversarial debiasing, post-hoc calibration, and fairness metrics (equalized odds, demographic parity).

12. Q: Compare model serving approaches (batch, online, streaming).
    A: Batch serving: periodic predictions on data dumps—low latency not required. Online serving: real-time single request predictions—low latency. Streaming: continuous predictions on event streams—stateful processing and scaling considerations.

13. Q: What is model explainability? Tools and techniques?
    A: Explainability provides human-understandable reasons for predictions. Techniques: SHAP, LIME, feature importance, partial dependence plots, surrogate models, counterfactual explanations.

14. Q: Describe the tradeoffs of using GPUs vs CPUs vs TPUs.
    A: GPUs: parallel compute for matrix ops—good for DL training; CPUs: cheaper for small models & inference, low-latency tasks; TPUs: specialized for TensorFlow, high throughput. Costs, availability, and model compatibility influence choices.

15. Q: How to perform hyperparameter tuning at scale?
    A: Use distributed search: RandomSearch, Bayesian optimization (e.g., Hyperopt, Optuna), population-based training, and early stopping. Use async scheduling (e.g., Ray Tune) and efficient pruning.

16. Q: How do you benchmark model performance for production?
    A: Use realistic data and traffic, A/B tests with control groups, shadow testing (log-only), monitor latency, throughput, resource usage, and end-to-end business metrics.

17. Q: Explain the difference between batch normalization and layer normalization.
    A: BatchNorm normalizes across batch dimension; LayerNorm normalizes across features per sample. LayerNorm works better for RNNs and small batches; BatchNorm is effective for CNNs and large batch sizes.

18. Q: What is transfer learning and common use-cases?
    A: Transfer learning reuses pre-trained models (e.g., ImageNet weights) and fine-tunes them on smaller tasks—useful in vision and NLP when labeled data is limited.

19. Q: How do you ensure ML model reproducibility?
    A: Fix random seeds, log environment and dependencies, save model checkpoints and training configs, containerize pipelines, and record data versions and feature engineering steps.

20. Q: Describe the training vs inference pipeline differences.
    A: Training is compute-intensive, requires labeled data and heavy resources (GPUs), handled offline; inference is low-latency, must be optimized for throughput and reliability, often with model quantization, caching, and batching.

21. Q: How does quantization affect model performance?
    A: Quantization reduces model size and inference latency by reducing precision (e.g., 32-bit to 8-bit). It may cause small accuracy loss; calibration and quantization-aware training reduce the impact.

22. Q: Explain the transformer architecture at a high level.
    A: Transformers use multi-head self-attention to capture dependencies between tokens, positional encodings for order, and feed-forward layers. Encoder-decoder stacks enable sequence-to-sequence tasks; attention enables parallel training.

23. Q: Define early vs late fusion in multi-modal models.
    A: Early fusion: combine raw modalities/features before model input. Late fusion: combine predictions or high-level features from modality-specific models. Tradeoffs: early fusion learns joint representations; late fusion is modular and robust to missing modalities.

24. Q: What are exploding/vanishing gradients and mitigation strategies?
    A: Vanishing: gradients become tiny in deep networks; Exploding: gradients grow large. Mitigate with proper initialization (Xavier/He), normalization (BatchNorm), gradient clipping, residual connections (ResNets), and activation choices (ReLU).

25. Q: How to design a recommendation system? Collaborative vs content-based?
    A: Collaborative: use user-item interactions (matrix factorization, embeddings); Content-based: use item metadata or features. Hybrid: combine both. Consider scalability, cold-start (use metadata), and diversity/fairness.

26. Q: How to evaluate recommender systems beyond accuracy?
    A: Use ranking metrics (NDCG, MAP, Recall@k), business metrics (click-through rate, retention), diversity and novelty metrics, and offline-online evaluation alignment.

27. Q: What is concept drift and how to handle it?
    A: Concept drift is change in relationship between features and labels. Detect with drift detectors (ADWIN), monitor model performance, retrain periodically, use online learning, and maintain fallback models.

28. Q: How to secure ML models and data in production?
    A: Data encryption, RBAC, secure model storage, model access controls, input validation (to avoid injection), adversarial robustness testing, and monitoring for data leakage.

29. Q: What are adversarial examples and defenses?
    A: Inputs crafted to mislead models. Defenses: adversarial training, input preprocessing, defensive distillation, randomized smoothing, and robust architecture choices.

30. Q: Explain the difference between offline and online feature stores.
    A: Offline: batch features for training and historical analysis; Online: low-latency feature access for real-time inference. Consistency between stores is crucial; use feature pipelines and versioning.

31. Q: Describe the role of a model registry.
    A: A model registry stores model artifacts, metadata, versioning, lineage, and promotion stages (staging/prod). It supports reproducibility and controlled deployments.

32. Q: What is batch inference vs streaming inference?
    A: Batch inference runs on data chunks periodically (reporting pipeline). Streaming inference processes events in real time (Kafka / Flink) and often requires lower latency and stateful processing.

33. Q: How to instrument ML systems for observability?
    A: Log inputs/outputs (privacy-safe), track performance metrics, feature distributions, latency, resource usage, and integrate tracing for data lineage. Use dashboards and alerts.

34. Q: Best practices for model rollback and canary deployments?
    A: Keep immutable model artifacts, use versioned endpoints, run shadow traffic and canary traffic with traffic-splitting, measure business and technical metrics, and automate rollback on failures.

35. Q: How to handle labels with noise or bias?
    A: Use label smoothing, noise-aware loss, estimate label noise rates, identify and correct noisy labels, use consensus labeling or weak supervision, and robust loss functions.

36. Q: Explain A/B testing for models and key pitfalls.
    A: Randomly split user traffic; measure uplift on predefined metrics. Pitfalls: leakage between variants, insufficient sample size, winner’s curse, not measuring long-term effects, and confounding variables.

37. Q: What is curriculum learning in DL?
    A: Curriculum learning trains models starting with easy examples and gradually increasing difficulty; helps optimization and generalization in some tasks.

38. Q: How to scale training on multiple GPUs/nodes?
    A: Use data parallelism (synchronizing gradients), model parallelism (split model across devices), mixed precision (AMP), gradient accumulation for large batches, and distributed frameworks (Horovod, PyTorch DDP).

39. Q: Discuss the role of embeddings in recommender and NLP systems.
    A: Embeddings map discrete items/tokens to dense vectors capturing semantics; used for similarity, as features in models, and for nearest neighbor retrievals.

40. Q: How to do offline evaluation for ML pipelines?
    A: Use held-out test sets, time-based splits for time series, realistic data sampling, and ensure evaluation metrics align with business needs. Use proper cross-validation and avoid leakage.


(For full set: add 120+ Q&A covering advanced topics, coding/design questions, and system-architecture prompts — can expand on request.)
