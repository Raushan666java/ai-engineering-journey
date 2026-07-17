# ML Foundations Interview

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Explain supervised, unsupervised, and reinforcement learning with examples |
| LO2 | Master bias-variance tradeoff, underfitting vs overfitting, and regularization |
| LO3 | Understand classification metrics: accuracy, precision, recall, F1, ROC-AUC, log loss |
| LO4 | Implement feature engineering, selection, and extraction techniques |
| LO5 | Explain tree-based models, SVMs, and ensemble methods |
| LO6 | Design ML pipelines from data ingestion to model deployment and monitoring |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | Learning Paradigms | Supervised, unsupervised, RL, semi-supervised, self-supervised |
| 4.2 | Bias-Variance Tradeoff | Underfitting, overfitting, regularization, cross-validation |
| 4.3 | Evaluation Metrics | Accuracy, precision, recall, F1, ROC-AUC, confusion matrix |
| 4.4 | Feature Engineering | Encoding, scaling, interaction features, polynomial features |
| 4.5 | Feature Selection | Filter, wrapper, embedded methods, PCA, mutual information |
| 4.6 | Tree-Based Models | Decision trees, random forest, gradient boosting, XGBoost |
| 4.7 | Support Vector Machines | Margins, kernels, soft margin, kernel trick |
| 4.8 | ML Pipeline Design | Data ingestion, preprocessing, training, deployment, monitoring |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Learning Paradigms] --> B[Bias-Variance Tradeoff]
    B --> C[Evaluation Metrics]
    C --> D[Feature Engineering]
    D --> E[Feature Selection]
    E --> F[Tree-Based Models]
    F --> G[SVMs]
    G --> H[ML Pipeline Design]
```

## 4.1 Learning Paradigms

Machine learning is broadly categorized into three main paradigms, with emerging hybrid approaches.

**Supervised learning**: Model learns from labeled data (input → output mapping). Tasks: regression (predict continuous values) and classification (predict discrete labels). Algorithms: linear regression, logistic regression, decision trees, random forest, SVM, neural networks.

**Unsupervised learning**: Model finds patterns in unlabeled data. Tasks: clustering (group similar data), dimensionality reduction (compress data), density estimation, anomaly detection. Algorithms: K-means, DBSCAN, PCA, t-SNE, Gaussian mixture models.

**Reinforcement learning**: Agent learns by interacting with an environment, receiving rewards/penalties. Tasks: game playing, robotics, resource optimization. Algorithms: Q-learning, deep Q-networks, policy gradients, PPO.

**Semi-supervised learning**: Combines a small amount of labeled data with a large amount of unlabeled data. Useful when labeling is expensive. Self-training, pseudo-labeling, consistency regularization.

**Self-supervised learning**: Generates labels from the data itself (pretext tasks). Used for pre-training large models (BERT, GPT, SimCLR). The model learns useful representations without manual labels.

```python
# Supervised learning example — classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

def train_classifier(X, y):
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    model = RandomForestClassifier(n_estimators=100, max_depth=10)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    print(classification_report(y_test, y_pred))
    return model

# Unsupervised learning example — clustering
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

def cluster_data(X, n_clusters=5):
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init="auto")
    clusters = kmeans.fit_predict(X_scaled)
    return clusters, kmeans.cluster_centers_
```

---

## 4.2 Bias-Variance Tradeoff

The bias-variance tradeoff is fundamental to understanding model performance.

**Bias**: Error from incorrect assumptions in the learning algorithm. High bias leads to underfitting — the model is too simple and misses relevant patterns.

**Variance**: Error from sensitivity to small fluctuations in the training set. High variance leads to overfitting — the model captures noise instead of signal.

**Total error** = Bias² + Variance + Irreducible error.

```python
# Visualizing bias-variance with polynomial regression
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

def bias_variance_demo():
    np.random.seed(42)
    n_samples = 50
    X = np.linspace(-3, 3, n_samples)
    y_true = np.sin(X)
    y = y_true + np.random.normal(0, 0.3, n_samples)

    X = X.reshape(-1, 1)
    degrees = [1, 3, 15]
    for degree in degrees:
        poly = PolynomialFeatures(degree=degree)
        X_poly = poly.fit_transform(X)
        model = LinearRegression()
        model.fit(X_poly, y)
        y_pred = model.predict(X_poly)
        mse = mean_squared_error(y, y_pred)
        print(f"Degree {degree}: MSE = {mse:.4f}")
        # Degree 1: high bias (underfitting)
        # Degree 3: balanced
        # Degree 15: high variance (overfitting)
```

**Regularization** reduces overfitting by adding a penalty for complex models:

- **L1 (Lasso)**: Adds |weight| penalty. Produces sparse models (feature selection).
- **L2 (Ridge)**: Adds weight² penalty. Shrinks weights toward zero but doesn't eliminate features.
- **ElasticNet**: Combines L1 and L2 penalties.

**Cross-validation techniques**: K-fold (most common), stratified K-fold (preserves class proportions), leave-one-out (small datasets), time series split (temporal data).

---

## 4.3 Evaluation Metrics

Choosing the right metric is critical. The same model can look very different depending on the metric.

**Classification metrics**:

| Metric | Formula | When to Use |
|--------|---------|-------------|
| Accuracy | (TP + TN) / (TP + TN + FP + FN) | Balanced classes |
| Precision | TP / (TP + FP) | Minimize false positives (spam detection) |
| Recall | TP / (TP + FN) | Minimize false negatives (disease detection) |
| F1-Score | 2 * (P * R) / (P + R) | Imbalanced classes, want balance |
| ROC-AUC | Area under TPR vs FPR curve | Rank-based evaluation, threshold-independent |
| Log Loss | -Σ(y*log(p) + (1-y)*log(1-p)) | Probabilistic predictions |

```python
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, log_loss, confusion_matrix, ConfusionMatrixDisplay
)

def evaluate_classifier(y_true, y_pred, y_proba=None):
    print(f"Accuracy:  {accuracy_score(y_true, y_pred):.4f}")
    print(f"Precision: {precision_score(y_true, y_pred):.4f}")
    print(f"Recall:    {recall_score(y_true, y_pred):.4f}")
    print(f"F1-Score:  {f1_score(y_true, y_pred):.4f}")
    if y_proba is not None:
        print(f"ROC-AUC:   {roc_auc_score(y_true, y_proba):.4f}")
        print(f"Log Loss:  {log_loss(y_true, y_proba):.4f}")

    cm = confusion_matrix(y_true, y_pred)
    print(f"Confusion Matrix:\n{cm}")

# Regression metrics
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

def evaluate_regression(y_true, y_pred):
    mse = mean_squared_error(y_true, y_pred)
    rmse = np.sqrt(mse)
    mae = mean_absolute_error(y_true, y_pred)
    r2 = r2_score(y_true, y_pred)
    print(f"MSE:  {mse:.4f}, RMSE: {rmse:.4f}")
    print(f"MAE:  {mae:.4f}")
    print(f"R²:   {r2:.4f}")
```

**Important considerations**: For imbalanced datasets (fraud detection, rare disease), accuracy is misleading. Use precision-recall curves, F1, or weighted metrics. For ranking problems (recommendation systems), use NDCG, MAP, or MRR.

---

## 4.4 Feature Engineering

Feature engineering is the process of transforming raw data into features that better represent the underlying problem.

**Numerical features**: Scaling (StandardScaler, MinMaxScaler), transformations (log, Box-Cox, Yeo-Johnson), binning (discretization), interaction features (multiplying or dividing columns).

**Categorical features**: One-hot encoding (for nominal categories), label encoding (for ordinal categories), target encoding (replace with mean of target), frequency encoding, embeddings for high-cardinality features.

**Text features**: Bag of words, TF-IDF, word embeddings (Word2Vec, GloVe), sentence embeddings (SBERT), character n-grams.

**Temporal features**: Day of week, hour, month, is_weekend, days since last event, rolling statistics, time since a reference point.

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder

def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    # Numerical transformations
    df["price_log"] = np.log1p(df["price"])
    df["area_squared"] = df["area"] ** 2
    df["price_per_area"] = df["price"] / (df["area"] + 1)

    # Temporal features
    df["date"] = pd.to_datetime(df["date"])
    df["day_of_week"] = df["date"].dt.dayofweek
    df["month"] = df["date"].dt.month
    df["is_weekend"] = df["day_of_week"].isin([5, 6]).astype(int)
    df["hour"] = df["date"].dt.hour

    # Rolling statistics
    df["price_rolling_mean_7d"] = (
        df.sort_values("date")["price"]
        .rolling(window=7, min_periods=1)
        .mean()
    )

    # Categorical encoding
    df["city_encoded"] = LabelEncoder().fit_transform(df["city"])
    df["category_freq"] = df["category"].map(df["category"].value_counts())

    # Interaction features
    df["rooms_times_area"] = df["rooms"] * df["area"]

    return df

# Feature scaling
scaler = StandardScaler()
numerical_cols = ["price", "area", "rooms", "price_per_area"]
df[numerical_cols] = scaler.fit_transform(df[numerical_cols])
```

**Feature engineering rules**: Start simple, validate with cross-validation, don't leak information from the future, create features that encode domain knowledge.

---

## 4.5 Feature Selection

Feature selection reduces dimensionality, improves model performance, reduces overfitting, and speeds up training.

**Filter methods**: Rank features independently of the model. Fast but ignore feature interactions.

| Method | Description | When to Use |
|--------|-------------|-------------|
| Variance threshold | Remove constant/quasi-constant features | Initial cleanup |
| Correlation | Remove highly correlated features | Multicollinearity |
| Mutual information | Measure dependency between feature and target | Non-linear relationships |
| Chi-squared test | Test independence for categorical features | Classification |
| ANOVA F-test | Compare means across groups | Numerical features, classification |

**Wrapper methods**: Train a model with subsets of features. Compute-intensive but account for feature interactions.

**Embedded methods**: Feature selection happens during model training. L1 regularization (Lasso), tree-based feature importance, permutation importance.

```python
from sklearn.feature_selection import (
    SelectKBest, mutual_info_classif, f_classif,
    VarianceThreshold, RFE
)
from sklearn.ensemble import RandomForestClassifier

# Variance threshold — remove low-variance features
def remove_low_variance(X, threshold=0.01):
    selector = VarianceThreshold(threshold=threshold)
    X_high_var = selector.fit_transform(X)
    kept = selector.get_support(indices=True)
    return X_high_var, kept

# Mutual information — select top K features
def select_by_mutual_info(X, y, k=20):
    selector = SelectKBest(mutual_info_classif, k=k)
    X_selected = selector.fit_transform(X, y)
    scores = selector.scores_
    return X_selected, scores

# Recursive feature elimination (wrapper)
def select_by_rfe(model, X, y, n_features=10):
    selector = RFE(model, n_features_to_select=n_features)
    X_selected = selector.fit_transform(X, y)
    ranking = selector.ranking_
    return X_selected, ranking

# Tree-based feature importance (embedded)
def select_by_importance(X, y, threshold=0.01):
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X, y)
    importances = model.feature_importances_
    mask = importances >= threshold
    return X[:, mask], importances[mask]
```

**Dimensionality reduction**: PCA (linear, unsupervised), t-SNE (non-linear, visualization), UMAP (non-linear, fast), LDA (linear, supervised).

---

## 4.6 Tree-Based Models

Tree-based models are the most popular family of algorithms for structured data. They handle non-linear relationships, feature interactions, and missing data naturally.

**Decision trees**: Split data recursively on feature thresholds. Maximize information gain (classification) or variance reduction (regression). Prone to overfitting without depth/leaf constraints.

**Random Forest**: Ensemble of decision trees trained on bootstrap samples with random feature subsets. Reduces variance while maintaining low bias. Bagging (bootstrap aggregating).

**Gradient Boosting**: Sequential training where each new tree corrects the errors of the previous ensemble. XGBoost, LightGBM, and CatBoost are popular implementations.

```python
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
import xgboost as xgb
import lightgbm as lgb

# Decision tree
dt = DecisionTreeClassifier(max_depth=5, min_samples_leaf=10, random_state=42)
dt.fit(X_train, y_train)

# Random forest
rf = RandomForestClassifier(
    n_estimators=200,
    max_depth=10,
    min_samples_leaf=5,
    max_features="sqrt",
    random_state=42
)
rf.fit(X_train, y_train)
feature_importance = pd.Series(rf.feature_importances_, index=feature_names)

# XGBoost
xgb_model = xgb.XGBClassifier(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8,
    reg_lambda=1.0,
    reg_alpha=0.0,
    random_state=42
)
xgb_model.fit(X_train, y_train)

# LightGBM
lgb_model = lgb.LGBMClassifier(
    n_estimators=100,
    max_depth=-1,          # no limit
    num_leaves=31,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42
)
lgb_model.fit(X_train, y_train)
```

**Key hyperparameters**: n_estimators (more is better but diminishing returns), learning_rate (lower = better generalization), max_depth (control overfitting), subsample (row sampling), colsample_bytree (column sampling), reg_lambda/alpha (regularization).

**When to use each**: Decision trees for interpretability (small trees). Random forest when you need robustness with minimal tuning. Gradient boosting when you need maximum predictive performance.

---

## 4.7 Support Vector Machines

SVMs find the hyperplane that maximally separates classes. They work well for high-dimensional spaces and are memory-efficient.

**Key concepts**:

- **Margin**: Distance between the hyperplane and the closest data points (support vectors). SVM maximizes this margin.
- **Support vectors**: The critical data points that define the margin. Only these influence the model.
- **Soft margin**: Allows misclassifications with a penalty parameter C. Low C = wider margin (more tolerance), high C = narrower margin (less tolerance).
- **Kernel trick**: Map data to higher dimensions without explicit transformation. Common kernels: linear, polynomial, RBF (Gaussian), sigmoid.

```python
from sklearn.svm import SVC, SVR
from sklearn.preprocessing import StandardScaler

# SVM classification with RBF kernel
def train_svm(X_train, y_train, X_test):
    # SVMs require feature scaling
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    svm = SVC(
        kernel="rbf",
        C=1.0,           # Regularization (lower = softer margin)
        gamma="scale",   # Kernel coefficient
        probability=True,
        random_state=42
    )
    svm.fit(X_train_scaled, y_train)

    y_pred = svm.predict(X_test_scaled)
    y_proba = svm.predict_proba(X_test_scaled)[:, 1]

    return svm, y_pred, y_proba

# Hyperparameter tuning
from sklearn.model_selection import GridSearchCV

param_grid = {
    "C": [0.1, 1.0, 10.0],
    "gamma": ["scale", "auto", 0.1, 0.01],
    "kernel": ["rbf", "poly", "sigmoid"],
}

grid_search = GridSearchCV(
    SVC(random_state=42),
    param_grid,
    cv=5,
    scoring="f1",
    n_jobs=-1,
    verbose=1
)
grid_search.fit(X_train_scaled, y_train)
print(f"Best params: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_:.4f}")
```

**SVM tradeoffs**: Works well for small-to-medium datasets. Training is O(n²) to O(n³). Sensitive to feature scaling. RBF kernel is a good default. For large datasets, use LinearSVC or SGDClassifier with hinge loss.

---

## 4.8 ML Pipeline Design

A production ML pipeline spans from data to deployment. Be prepared to discuss the end-to-end architecture.

**Pipeline stages**:

1. **Data ingestion**: Batch (scheduled jobs) or streaming (Kafka, Kinesis). Store raw data in data lake (S3, GCS).
2. **Data validation**: Schema validation, data quality checks, drift detection. Tools: Great Expectations, Deequ.
3. **Feature engineering**: Transform raw data into features. Store in feature store (Feast, Tecton) for reusability.
4. **Training**: Experiment tracking (MLflow, Weights & Biases), hyperparameter tuning (Optuna), model selection.
5. **Model evaluation**: Holdout set, cross-validation, sliced evaluation (by segment), fairness checks.
6. **Deployment**: REST API (FastAPI, Flask), batch inference (Spark), edge deployment (ONNX, TensorRT).
7. **Monitoring**: Data drift, concept drift, model performance decay, prediction distribution shifts.
8. **Retraining**: Scheduled (weekly/monthly) or triggered by performance degradation.

```python
# Complete ML pipeline with scikit-learn
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer

def build_pipeline(categorical_cols: list, numerical_cols: list):
    numerical_transformer = Pipeline(steps=[
        ("imputer", SimpleImputer(strategy="median")),
        ("scaler", StandardScaler()),
    ])

    categorical_transformer = Pipeline(steps=[
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("onehot", OneHotEncoder(handle_unknown="ignore", sparse_output=False)),
    ])

    preprocessor = ColumnTransformer(
        transformers=[
            ("num", numerical_transformer, numerical_cols),
            ("cat", categorical_transformer, categorical_cols),
        ]
    )

    pipeline = Pipeline(steps=[
        ("preprocessor", preprocessor),
        ("classifier", GradientBoostingClassifier(n_estimators=100, random_state=42)),
    ])

    return pipeline

pipeline = build_pipeline(categorical_cols=["city", "category"], numerical_cols=["price", "area"])
pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)

# MLflow experiment tracking
import mlflow

def train_with_tracking(X_train, X_test, y_train, y_test, params: dict):
    with mlflow.start_run():
        # Log parameters
        mlflow.log_params(params)

        # Train model
        model = GradientBoostingClassifier(**params)
        model.fit(X_train, y_train)

        # Evaluate
        y_pred = model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)

        # Log metrics
        mlflow.log_metrics({"accuracy": accuracy, "f1": f1})

        # Log model
        mlflow.sklearn.log_model(model, "model")

        return model
```

**Model serving**: For real-time inference, wrap the model in a REST API with input validation and monitoring. For batch inference, use Spark or Dask. Consider model quantization and ONNX for latency-sensitive applications.

---

## Summary

- Supervised learning needs labels; unsupervised finds hidden structure; RL learns from rewards
- Bias-variance tradeoff: high bias = underfitting, high variance = overfitting; regularization balances both
- Choose metrics based on business context: F1 for imbalanced classification, RMSE for regression, ROC-AUC for ranking
- Feature engineering is the highest-leverage activity — domain knowledge and creativity matter more than complex models
- Filter methods are fast but ignore interactions; wrapper methods find interactions but are slow; embedded methods balance both
- Tree-based models dominate structured data; random forest for robustness, gradient boosting for peak performance
- SVMs work well for high-dimensional data with clear margin separation; require careful tuning
- Production ML pipelines need validation, monitoring, and retraining — not just model training

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Imbalanced classes | Use class weights, SMOTE, or stratified sampling | Relying on accuracy alone |
| High-dimensional sparse data | Use linear models or tree-based with feature selection | Using KNN or SVMs (curse of dimensionality) |
| Missing values | Impute with median (numerical) or most frequent (categorical) | Dropping rows with missing values |
| Feature scaling | StandardScaler for SVMs, neural networks, KNN | Applying scaling to tree-based models |
| Model selection | Start simple (linear), then increase complexity | Starting with the most complex model |
| Overfitting | Reduce complexity, increase regularization, more data | Adding more features indiscriminately |
| Deployment | Containerize with Docker, version model artifacts | Manually copying model files to servers |

## Interview Q&A

<details class="tp-qa-card" data-qid="ip-s04-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Explain the bias-variance tradeoff with examples.
  </summary>
  <div class="tp-qa-answer">
    <p>The bias-variance tradeoff describes the relationship between a model's ability to fit training data (low bias) and its sensitivity to noise in the training data (low variance).</p>
    <p><strong>High bias (underfitting)</strong>: Linear regression on a quadratic relationship. The model is too simple and misses the pattern. Performs poorly on both training and test data.</p>
    <p><strong>High variance (overfitting)</strong>: A deep decision tree with no pruning. It memorizes noise in the training data. Perfect training score but poor test score.</p>
    <p><strong>Balanced</strong>: A regularized decision tree with max_depth=5 and min_samples_leaf=10. Performs well on both training and test — the model captures the signal without fitting noise.</p>
    <p><strong>Total error</strong> = Bias² + Variance + Irreducible error. The goal is to find the sweet spot that minimizes total error on unseen data.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: When would you use precision vs recall vs F1?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Precision</strong> (TP / (TP + FP)) answers: "Of the positive predictions, how many were correct?" Use precision when false positives are costly.</p>
    <p><strong>Recall</strong> (TP / (TP + FN)) answers: "Of the actual positives, how many did we catch?" Use recall when false negatives are costly.</p>
    <p><strong>F1-Score</strong> (harmonic mean of precision and recall) balances both. Use F1 when you need a single metric and the class distribution is imbalanced.</p>
    <p><strong>Examples</strong>:</p>
    <ul>
      <li><strong>Spam detection</strong>: Optimize precision (few false positives — don't mark important emails as spam)</li>
      <li><strong>Cancer screening</strong>: Optimize recall (few false negatives — don't miss a cancer case)</li>
      <li><strong>Search ranking</strong>: F1 or NDCG — balance relevance and coverage</li>
    </ul>
    <p>For imbalanced datasets, avoid accuracy. A model that predicts "no disease" for everyone achieves high accuracy but zero recall for the positive class.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How does Random Forest reduce overfitting?
  </summary>
  <div class="tp-qa-answer">
    <p>Random Forest reduces overfitting through two complementary randomization strategies:</p>
    <ol>
      <li><strong>Bootstrap sampling (row sampling)</strong>: Each tree is trained on a different random subset of the data (sampled with replacement). This decorrelates the trees — different trees see different data patterns.</li>
      <li><strong>Feature subsampling (column sampling)</strong>: At each split, only a random subset of features is considered (typically sqrt(p) for classification, p/3 for regression). This further decorrelates trees and prevents strong features from dominating all trees.</li>
    </ol>
    <p>The ensemble prediction averages over many diverse trees. Individual trees may overfit, but their errors cancel out in the aggregate. More formally, the variance of an ensemble of n uncorrelated trees with variance σ² is σ²/n. Random Forest also adds bagging (bootstrap aggregating) which reduces variance without increasing bias.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Explain the difference between Bagging and Boosting.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Bagging</strong> (Bootstrap Aggregating): Trains multiple models in parallel on bootstrap samples of the data. Aggregates by averaging (regression) or majority voting (classification). Reduces variance without increasing bias. Random Forest is the prime example.</p>
    <p><strong>Boosting</strong>: Trains models sequentially. Each new model focuses on the mistakes of previous models. Reduces both bias and variance but can overfit if not regularized. Examples: AdaBoost, Gradient Boosting, XGBoost.</p>
    <p><strong>Key differences</strong>:</p>
    <table>
      <tr><th>Aspect</th><th>Bagging</th><th>Boosting</th></tr>
      <tr><td>Training</td><td>Parallel</td><td>Sequential</td></tr>
      <tr><td>Goal</td><td>Reduce variance</td><td>Reduce bias</td></tr>
      <tr><td>Overfitting risk</td><td>Low</td><td>Higher (needs regularization)</td></tr>
      <tr><td>Training speed</td><td>Fast (parallel)</td><td>Slower (sequential)</td></tr>
      <tr><td>Interpretability</td><td>Poor</td><td>Better (feature importance, SHAP)</td></tr>
    </table>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the kernel trick in SVMs?
  </summary>
  <div class="tp-qa-answer">
    <p>The kernel trick allows SVMs to find non-linear decision boundaries without explicitly computing the transformation to higher-dimensional space.</p>
    <p><strong>The problem</strong>: Many datasets aren't linearly separable in the original feature space. We could map data to higher dimensions (e.g., polynomial features) but computing this transformation explicitly is expensive.</p>
    <p><strong>The trick</strong>: SVMs only need dot products between data points. Kernel functions compute dot products in a high-dimensional space implicitly, using only the original coordinates. This is O(n²) instead of O(n^d) for explicit transformation.</p>
    <p><strong>Common kernels</strong>:</p>
    <ul>
      <li><strong>Linear</strong>: K(x, y) = x · y — no transformation</li>
      <li><strong>Polynomial</strong>: K(x, y) = (x · y + c)^d — polynomial decision boundary</li>
      <li><strong>RBF (Gaussian)</strong>: K(x, y) = exp(-γ||x - y||²) — infinite-dimensional mapping</li>
      <li><strong>Sigmoid</strong>: K(x, y) = tanh(κx · y + c) — like a neural network layer</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you handle missing values in a dataset?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Understand the mechanism first</strong>: MCAR (missing completely at random), MAR (missing at random — depends on observed data), MNAR (missing not at random — depends on the missing value itself). The approach depends on the mechanism.</p>
    <p><strong>Deletion methods</strong>:</p>
    <ul>
      <li><strong>Listwise deletion</strong>: Drop rows with any missing values. Simple but can lose a lot of data.</li>
      <li><strong>Pairwise deletion</strong>: Use available data for each calculation. Inconsistent sample sizes across features.</li>
    </ul>
    <p><strong>Imputation methods</strong>:</p>
    <ul>
      <li><strong>Mean/median imputation</strong>: Simple, doesn't change variance. Can distort relationships.</li>
      <li><strong>Mode imputation</strong>: For categorical features.</li>
      <li><strong>Forward/backward fill</strong>: For time series data.</li>
      <li><strong>KNN imputation</strong>: Impute based on similar samples. More accurate but slower.</li>
      <li><strong>Model-based imputation</strong>: Use a model (regression, MICE) to predict missing values.</li>
    </ul>
    <p><strong>Tree-based models</strong> (Random Forest, XGBoost) handle missing values natively by learning surrogate splits.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: Explain ROC-AUC and when it's useful.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>ROC curve</strong>: Plots True Positive Rate (sensitivity) against False Positive Rate (1 — specificity) at various classification thresholds. Each point represents a different decision threshold.</p>
    <p><strong>AUC (Area Under the Curve)</strong>: Aggregates the ROC curve into a single number. AUC = probability that a randomly chosen positive instance is ranked higher than a randomly chosen negative instance.</p>
    <p><strong>Interpretation</strong>: AUC = 1.0 (perfect classifier), AUC = 0.5 (random guessing), AUC < 0.5 (worse than random — reverse predictions).</p>
    <p><strong>When to use</strong>: ROC-AUC is threshold-independent — good for comparing models when the operating threshold is unknown. Useful for ranking problems (ad click prediction, credit scoring).</p>
    <p><strong>When NOT to use</strong>: For highly imbalanced datasets, ROC-AUC can be misleadingly optimistic (large TN count inflates FPR denominator). Use Precision-Recall AUC instead for imbalanced problems.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is the difference between L1 and L2 regularization?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>L1 regularization (Lasso)</strong>: Adds |weight| penalty to the loss function. Produces sparse models by driving some weights to exactly zero. Acts as an embedded feature selection method.</p>
    <p><strong>L2 regularization (Ridge)</strong>: Adds weight² penalty to the loss function. Shrinks all weights toward zero but doesn't zero them out. Maintains all features with reduced impact.</p>
    <p><strong>ElasticNet</strong>: Combines L1 and L2 with a mixing parameter ρ. L1 penalty = ρ * Σ|w|, L2 penalty = (1-ρ) * Σw²/2.</p>
    <p><strong>Geometric interpretation</strong>: L1 has a diamond-shaped constraint region (corners coincide with axes, leading to sparsity). L2 has a circular constraint region (smooth shrinkage).</p>
    <p><strong>When to use which</strong>:</p>
    <ul>
      <li>L1: When you suspect many features are irrelevant and want automatic feature selection</li>
      <li>L2: When all features contribute but you want to prevent any single feature from dominating</li>
      <li>ElasticNet: When features are correlated (L1 picks one arbitrarily; ElasticNet picks groups)</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: Explain cross-validation and why it's better than a single train-test split.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>K-fold cross-validation</strong>: Split data into K folds. Train on K-1 folds, evaluate on the held-out fold. Repeat K times, average results.</p>
    <p><strong>Advantages over single split</strong>:</p>
    <ul>
      <li><strong>Lower variance</strong>: A single split depends heavily on which data points land in the test set. CV averages performance across K different splits, producing more reliable estimates.</li>
      <li><strong>More data for training</strong>: Each model trains on (K-1)/K of the data — better use of limited data.</li>
      <li><strong>Less overfitting to the test split</strong>: Prevents tuning hyperparameters to exploit the randomness of a single split.</li>
    </ul>
    <p><strong>Variants</strong>:</p>
    <ul>
      <li><strong>Stratified K-fold</strong>: Preserves class proportions in each fold — essential for imbalanced classification</li>
      <li><strong>Group K-fold</strong>: Ensures data from the same group doesn't appear in both train and test</li>
      <li><strong>Time series split</strong>: Respects temporal order — train on past, test on future</li>
      <li><strong>Leave-one-out</strong>: K = n samples — extremely high variance, high computational cost</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you detect and prevent data leakage?
  </summary>
  <div class="tp-qa-answer">
    <p>Data leakage occurs when information from outside the training set (including the test set or future data) influences the model, creating unrealistically good performance.</p>
    <p><strong>Common causes</strong>:</p>
    <ol>
      <li><strong>Scaling before splitting</strong>: Using global mean/std computed on the full dataset. Solution: fit scaler on training data only, transform test data.</li>
      <li><strong>Feature leakage</strong>: Using features that wouldn't be available at prediction time (e.g., target-encoded features using the entire dataset).</li>
      <li><strong>Temporal leakage</strong>: Training on data from the future relative to test data. Solution: time-based split.</li>
      <li><strong>Duplicate data</strong>: Same rows appearing in both train and test sets (data contamination).</li>
      <li><strong>Imputation using test data</strong>: Filling missing values using statistics from the full dataset.</li>
    </ol>
    <pre><code># WRONG — scaling before split
scaler = StandardScaler()
X_all_scaled = scaler.fit_transform(X)
X_train, X_test = train_test_split(X_all_scaled)  # test data influences scaling

# CORRECT — scale after split
X_train, X_test = train_test_split(X)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: Compare PCA and t-SNE for dimensionality reduction.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>PCA (Principal Component Analysis)</strong>:</p>
    <ul>
      <li>Linear method — finds orthogonal axes that maximize variance</li>
      <li>Deterministic — same result every run</li>
      <li>Fast — O(min(n³, p³)) for eigendecomposition</li>
      <li>Interpretable — principal components are linear combinations of original features</li>
      <li>Preserves global structure (distances between far-apart points)</li>
      <li>Used for: dimensionality reduction, noise reduction, multicollinearity handling</li>
    </ul>
    <p><strong>t-SNE (t-Distributed Stochastic Neighbor Embedding)</strong>:</p>
    <ul>
      <li>Non-linear method — preserves local structure (neighbors remain neighbors)</li>
      <li>Stochastic — different runs produce different results</li>
      <li>Slow — O(n²) for pairwise distance computation</li>
      <li>Not interpretable — axes have no meaning</li>
      <li>Primarily used for visualization (2D or 3D)</li>
      <li>Perplexity parameter controls balance between local and global structure</li>
    </ul>
    <p><strong>Recommendation</strong>: Use PCA for preprocessing (before ML models), use t-SNE for exploratory visualization. UMAP is a faster, more scalable alternative to t-SNE.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: How do you handle imbalanced datasets for classification?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Data-level methods</strong> — modify the training distribution:</p>
    <ul>
      <li><strong>Random undersampling</strong>: Remove samples from majority class. Simple but loses information.</li>
      <li><strong>Random oversampling</strong>: Duplicate minority class samples. Can cause overfitting.</li>
      <li><strong>SMOTE</strong>: Generate synthetic minority samples by interpolating between existing minority points. More effective than naive oversampling.</li>
      <li><strong>ADASYN</strong>: Adaptive synthetic sampling — generates more samples for harder-to-learn instances.</li>
    </ul>
    <p><strong>Algorithm-level methods</strong> — modify the learning algorithm:</p>
    <ul>
      <li><strong>Class weights</strong>: Penalize misclassifications of minority class more heavily. Most sklearn models support `class_weight="balanced"`.</li>
      <li><strong>Focal loss</strong>: Down-weights well-classified examples, focusing training on hard examples.</li>
      <li><strong>Threshold tuning</strong>: Adjust the decision threshold from 0.5 to maximize F1 or other metrics.</li>
    </ul>
    <p><strong>Ensemble methods</strong>: Balanced Random Forest (bootstrap with balanced sampling), EasyEnsemble (multiple undersampled subsets), RUSBoost (undersampling + boosting).</p>
    <p>Always use appropriate metrics (precision-recall curve, F1, Matthews correlation coefficient) and stratified cross-validation for imbalanced data.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q13">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q13: Explain gradient boosting and how XGBoost improves upon it.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Gradient Boosting</strong> builds an ensemble of weak learners (typically decision trees) sequentially. Each new tree fits the negative gradient (residuals) of the loss function with respect to the current prediction.</p>
    <p><strong>Algorithm sketch</strong>:</p>
    <ol>
      <li>Start with a constant prediction: F₀(x) = argmin Σ L(yᵢ, γ)</li>
      <li>For m = 1 to M: compute pseudo-residuals rᵢₘ = -∂L/∂F, fit a tree to residuals, update Fₘ = Fₘ₋₁ + η * treeₘ</li>
      <li>η (learning rate) scales each tree's contribution — smaller η requires more trees but generalizes better</li>
    </ol>
    <p><strong>XGBoost improvements</strong>:</p>
    <ul>
      <li><strong>Regularization</strong>: L1 and L2 regularization on leaf weights — prevents overfitting</li>
      <li><strong>Second-order gradients</strong>: Uses both first and second derivatives (Newton boosting) — converges faster</li>
      <li><strong>Column subsampling</strong>: Random feature subsampling (like Random Forest)</li>
      <li><strong>Weighted quantile sketch</strong>: Efficient handling of weighted data</li>
      <li><strong>Sparsity-aware split finding</strong>: Handles missing values/distributed efficiently</li>
      <li><strong>Cache-aware access</strong>: Optimized memory access patterns for speed</li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q14">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q14: What is model drift and how do you detect it?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Data drift</strong> (covariate shift): The distribution of input features changes over time. Detection: compare feature distributions using statistical tests (Kolmogorov-Smirnov, chi-squared) or population stability index (PSI).</p>
    <p><strong>Concept drift</strong>: The relationship between input features and target changes. The model learned P(y|x) but now P(y|x) is different. Detection: monitor prediction distribution, accuracy on a validation set, or residual patterns.</p>
    <p><strong>Monitoring approach</strong>:</p>
    <pre><code>from scipy.stats import ks_2samp

def detect_data_drift(reference_data, current_data, threshold=0.05):
    drift_detected = {}
    for col in reference_data.columns:
        stat, p_value = ks_2samp(reference_data[col], current_data[col])
        drift_detected[col] = {
            "drifted": p_value < threshold,
            "p_value": p_value,
            "statistic": stat
        }
    return drift_detected

def detect_concept_drift(model, X_validation, y_validation, threshold=0.1):
    baseline_accuracy = model.baseline_accuracy  # stored from training
    current_accuracy = model.score(X_validation, y_validation)
    drift = (baseline_accuracy - current_accuracy) > threshold
    return drift, current_accuracy</code></pre>
    <p>Remediation: Retrain on recent data, use online/adaptive learning, or deploy a new model version. Set up automated alerting when drift exceeds thresholds.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s04-q15">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q15: Design an ML system for fraud detection.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: Real-time fraud detection on credit card transactions. Extremely imbalanced (0.1% fraud), highly skewed features, adversarial adaptation.</p>
    <p><strong>Data pipeline</strong>:</p>
    <ul>
      <li>Streaming ingestion from transaction events (Kafka) — ~10K TPS</li>
      <li>Feature store (Feast) with features: transaction amount, merchant category, user velocity (transactions in last hour), device fingerprint, IP geolocation, time since last transaction</li>
      <li>Window aggregations: average amount in last 24h, count of transactions per merchant</li>
    </ul>
    <p><strong>Model</strong>:</p>
    <ul>
      <li>First layer: LightGBM or XGBoost — handles tabular transactional data well, fast inference</li>
      <li>Second layer: Graph neural network — captures merchant-user relationship network</li>
      <li>Final: Ensemble with logistic regression meta-learner</li>
      <li>Train with focal loss or weighted loss to handle imbalance</li>
    </ul>
    <p><strong>Deployment</strong>:</p>
    <ul>
      <li>Real-time API with FastAPI, sub-50ms inference per transaction</li>
      <li>Batch scoring daily for non-real-time signals</li>
      <li>Shadow scoring for new model validation before production</li>
      <li>A/B testing framework for model comparison</li>
    </ul>
    <p><strong>Monitoring</strong>: Hourly drift detection on features (KS test), daily accuracy monitoring (with delayed labels from disputes), adversarial retraining trigger when model accuracy drops.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which metric is most appropriate for an imbalanced classification problem?

a) Accuracy
b) F1-Score
c) Mean Squared Error
d) R²

<details class="tp-qa-card" data-qid="ip-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) F1-Score</strong></p><p>F1 balances precision and recall, making it suitable for imbalanced classes where accuracy would be misleading.</p></div></details>

**Q2**: What is the primary effect of L1 regularization?

a) Shrinks all weights toward zero uniformly
b) Drives some weights to exactly zero (sparsity)
c) Increases model complexity
d) Removes correlated features

<details class="tp-qa-card" data-qid="ip-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Drives some weights to exactly zero (sparsity)</strong></p><p>L1 regularization (Lasso) can zero out feature weights, acting as an automatic feature selection method.</p></div></details>

**Q3**: Which ensemble method trains models sequentially to correct previous errors?

a) Random Forest
b) Bagging
c) Gradient Boosting
d) Voting Classifier

<details class="tp-qa-card" data-qid="ip-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Gradient Boosting</strong></p><p>Gradient boosting trains trees sequentially, each new tree fitting the residuals of the current ensemble.</p></div></details>

**Q4**: What does ROC-AUC measure?

a) Accuracy at threshold 0.5
b) The probability that a random positive is ranked higher than a random negative
c) Precision at a fixed recall
d) The area under the precision-recall curve

<details class="tp-qa-card" data-qid="ip-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) The probability that a random positive is ranked higher than a random negative</strong></p><p>ROC-AUC measures the model's ability to rank positive instances higher than negative instances, averaged over all classification thresholds.</p></div></details>

**Q5**: What is the main advantage of the kernel trick in SVMs?

a) Reduces training time
b) Computes non-linear decision boundaries without explicit feature transformation
c) Handles missing values automatically
d) Works without labeled data

<details class="tp-qa-card" data-qid="ip-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Computes non-linear decision boundaries without explicit feature transformation</strong></p><p>The kernel trick computes dot products in a high-dimensional space using only the original feature coordinates, enabling non-linear classification efficiently.</p></div></details>

## Exercises

**Easy** — Load the UCI Iris dataset and train a logistic regression model. Compute accuracy, precision, recall, F1, and confusion matrix for each class. Compare results with a decision tree.

**Easy** — Implement k-fold cross-validation from scratch (without sklearn). Use it to evaluate a Random Forest on a dataset of your choice. Compare the mean CV score with a single train-test split.

**Medium** — Train an XGBoost model on a real-world tabular dataset. Perform hyperparameter tuning using GridSearchCV for: n_estimators, max_depth, learning_rate, subsample. Report the best parameters and test set performance.

**Medium** — Build a complete ML pipeline for a binary classification problem: ingest data, handle missing values, scale features, encode categories, train an ensemble model, evaluate with ROC-AUC and precision-recall curves, and save the pipeline for deployment.

**Hard** — Implement a streaming anomaly detection system: generate a synthetic time series with periodic anomalies. Use a sliding window to compute features. Train an isolation forest on historical data. Implement real-time scoring with drift detection and automatic retraining.

---

> **Next**: [05 — Deep Learning Interview →](05-deep-learning-interview.md)
