<div class="module-hero">
<div class="module-icon">🤖</div>
<h1>AI &amp; ML — Machine Learning se Agentic AI tak</h1>
<p>AI/ML kaafi broad hai. Placement ke liye basics strong rakh, aur advanced topics (Agentic AI, LangChain) mein expertise bana. Sab content <code>original/Main-Course/Placement-01/05-AI-ML/</code>, <code>original/Learning-Techniques/Learning_Course/</code>, aur <code>original/Agentic-AI-Course/</code> mein hai.</p>
<div class="module-meta">ML/DL/Agentic AI · Real Projects</div>
</div>

**Complete Source**: `original/Main-Course/Placement-01/05-AI-ML/AI-ML-Complete.md` (1073 lines) — Complete AI/ML content.

## Learning Roadmap

<div class="roadmap-path">
<div class="roadmap-step" data-step="1">
<h4>Python for ML</h4>
<p>NumPy, Pandas, Matplotlib — data handling ka foundation</p>
</div>
<div class="roadmap-step" data-step="2">
<h4>Machine Learning</h4>
<p>Supervised + Unsupervised algorithms, evaluation, feature engineering</p>
</div>
<div class="roadmap-step" data-step="3">
<h4>Deep Learning</h4>
<p>Neural Networks, CNN, RNN, Transfer Learning</p>
</div>
<div class="roadmap-step" data-step="4">
<h4>Agentic AI</h4>
<p>LangChain, AI Agents, RAG pipelines — current market ka USP</p>
</div>
<div class="roadmap-step" data-step="5">
<h4>Projects</h4>
<p>End-to-end ML pipelines, deployment, portfolio-ready demos</p>
</div>
</div>

## Python for ML

### Core Libraries

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```

Tutorials `original/Main-Course/Placement-01/05-AI-ML/Week-03-NumPy-Complete.md` aur `Week-04-Pandas-Complete.md` mein hain.

### NumPy — Numerical Computing

NumPy ka core feature hai **vectorized operations** — loops ke bina array pe operations apply karna.

```python
# Array creation — different ways
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.arange(0, 10, 0.5)          # 0 se 10 tak step 0.5
arr3 = np.linspace(0, 1, 20)          # 20 evenly spaced points
arr4 = np.random.randn(1000)          # Normal distribution se 1000 samples

# 2D arrays (matrices)
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
identity = np.eye(3)                  # Identity matrix
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
random_mat = np.random.random((3, 3))

# Array operations — vectorized (fast, no loops)
print(f"Sum: {np.sum(matrix)}")
print(f"Mean: {np.mean(matrix)}")
print(f"Std: {np.std(matrix)}")

# Matrix operations
result = np.dot(matrix, random_mat)   # Matrix multiplication
element_wise = matrix * random_mat    # Element-wise multiplication

# Linear algebra
A = np.array([[2, 1], [1, 1]])
b = np.array([3, 2])
x = np.linalg.solve(A, b)            # Solve Ax = b
eigenvalues, eigenvectors = np.linalg.eig(matrix)

# Reshaping & broadcasting
arr = np.arange(12).reshape(3, 4)    # 3 rows, 4 cols
broadcasted = arr + 5                 # Broadcast scalar to all elements

# Statistical operations
data = np.random.normal(100, 15, 1000)
print(f"Mean: {np.mean(data):.2f}, 95th percentile: {np.percentile(data, 95):.2f}")
```

### Pandas — Data Manipulation

Pandas ka power **DataFrame** mein hai — table-like structure jisme rows/columns handle karna aasan hai.

```python
# Creating DataFrame
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 70000, 55000],
    'Department': ['IT', 'HR', 'IT', 'Finance']
})

# Basic exploration
print(df.shape, df.dtypes, df.describe())
print(df['Department'].value_counts())

# Filtering — SQL-like
it_employees = df[df['Department'] == 'IT']
high_earners = df[df['Salary'] > 55000]

# Groupby — aggregation ka best friend
dept_stats = df.groupby('Department').agg({
    'Salary': ['mean', 'min', 'max'],
    'Age': 'mean'
})

# Handling missing data
messy_data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, 4, np.nan]
})
print(f"Missing values:\n{messy_data.isnull().sum()}")

messy_data['A'] = messy_data['A'].fillna(messy_data['A'].mean())  # Mean imputation
messy_data['B'] = messy_data['B'].fillna(method='ffill')          # Forward fill

# Merge & Join — SQL joins ki tarah
df1 = pd.DataFrame({'id': [1, 2, 3], 'name': ['A', 'B', 'C']})
df2 = pd.DataFrame({'id': [2, 3, 4], 'score': [85, 90, 95]})
inner = pd.merge(df1, df2, on='id', how='inner')   # Common records
left = pd.merge(df1, df2, on='id', how='left')      # All from left

# Pivot table — Excel-style
pivot = df.pivot_table(
    values='Salary',
    index='Department',
    aggfunc='mean'
)
```

### Python Data Analysis — Full Flow

```python
import numpy as np
import pandas as pd

def clean_data(data_list):
    """Remove None values and convert to numeric"""
    return [float(x) for x in data_list if x is not None]

def calculate_statistics(numbers):
    if not numbers:
        return None
    return {
        'mean': sum(numbers) / len(numbers),
        'median': sorted(numbers)[len(numbers) // 2],
        'min': min(numbers),
        'max': max(numbers),
        'count': len(numbers)
    }

class DataAnalyzer:
    def __init__(self, data):
        self.data = data
        self.processed_data = None

    def preprocess(self):
        self.processed_data = clean_data(self.data)
        return self

    def analyze(self):
        stats = calculate_statistics(self.processed_data)
        return {
            'statistics': stats,
            'outliers': self.find_outliers(),
            'distribution': self.get_distribution()
        }

    def find_outliers(self, threshold=2):
        mean = sum(self.processed_data) / len(self.processed_data)
        std_dev = (sum((x - mean)**2 for x in self.processed_data) / len(self.processed_data))**0.5
        return [x for x in self.processed_data if abs(x - mean) > threshold * std_dev]

    def get_distribution(self):
        sorted_data = sorted(self.processed_data)
        n = len(sorted_data)
        return {
            'q1': sorted_data[n // 4],
            'median': sorted_data[n // 2],
            'q3': sorted_data[3 * n // 4],
            'iqr': sorted_data[3 * n // 4] - sorted_data[n // 4]
        }

# Usage
analyzer = DataAnalyzer([1, 2, 3, 100, 4, 5, None, 6])
results = analyzer.preprocess().analyze()
```

## Course Structure

<div class="phase-section">
<div class="phase-header">
<span class="tag tag-hot">Phase 1</span> Python Foundation
</div>
<div class="phase-body">

| Module | Topic | File |
|--------|-------|------|
| Python | Basics (variables, types, control flow) | `Week-01-Python-Basics-Complete.md` |
| Advanced | OOP, generators, file I/O | `Week-02-Advanced-Python-Complete.md` |
| NumPy | Arrays, broadcasting, linear algebra | `Week-03-NumPy-Complete.md` |
| Pandas | DataFrame, groupby, merge, pivot | `Week-04-Pandas-Complete.md` |

</div>
</div>

<div class="phase-section">
<div class="phase-header">
<span class="tag tag-hot">Phase 2</span> Machine Learning
</div>
<div class="phase-body">

| Module | Topics |
|--------|-------|
| ML Introduction | Core concepts, types of ML, workflow |
| Supervised Learning | Regression + Classification |
| Unsupervised Learning | Clustering + Dimensionality Reduction |

</div>
</div>

<div class="phase-section">
<div class="phase-header">
<span class="tag tag-hot">Phase 3</span> Deep Learning &amp; Advanced
</div>
<div class="phase-body">

| Module | Topics |
|--------|-------|
| Deep Learning | Neural Networks, CNN, RNN |
| Advanced Topics | NLP, Transformers, Transfer Learning |

</div>
</div>

<div class="phase-section">
<div class="phase-header">
<span class="tag tag-hot">Phase 4</span> Capstone Projects
</div>
<div class="phase-body">

| Module | Topics |
|--------|-------|
| Capstone Projects | End-to-end ML pipeline |

</div>
</div>

## Machine Learning

### ML Fundamentals with Scikit-learn

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.svm import SVC
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.metrics import (accuracy_score, classification_report, confusion_matrix,
                             mean_squared_error, r2_score, precision_recall_fscore_support)

# Train/Test split — ML workflow ka pehla step
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature scaling — distance-based models ke liye zaroori
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Only transform, NOT fit on test data
```

### Supervised Learning

<div class="topic-grid">
<div class="topic-card">
<h4>Linear Regression</h4>
<p>Continuous values prediction</p>
<span class="tag tag-method">MSE · Gradient Descent · R-squared</span>
</div>
<div class="topic-card">
<h4>Polynomial Regression</h4>
<p>Non-linear trends</p>
<span class="tag tag-method">Feature engineering · Overfitting</span>
</div>
<div class="topic-card">
<h4>Ridge / Lasso</h4>
<p>High-dimensional data</p>
<span class="tag tag-method">L1/L2 regularization · Bias-variance tradeoff</span>
</div>
<div class="topic-card">
<h4>Logistic Regression</h4>
<p>Binary classification</p>
<span class="tag tag-method">Sigmoid · Cross-entropy loss · Decision boundary</span>
</div>
<div class="topic-card">
<h4>Decision Trees</h4>
<p>Interpretable models</p>
<span class="tag tag-method">Gini impurity · Information gain · Pruning</span>
</div>
<div class="topic-card">
<h4>Random Forest</h4>
<p>Robust classification</p>
<span class="tag tag-method">Bagging · Feature importance · Out-of-bag error</span>
</div>
<div class="topic-card">
<h4>SVM</h4>
<p>Complex boundaries</p>
<span class="tag tag-method">Kernel trick · Support vectors · Margin</span>
</div>
<div class="topic-card">
<h4>KNN</h4>
<p>Instance-based learning</p>
<span class="tag tag-method">Distance metrics · K value selection</span>
</div>
</div>

#### Regression — Detailed Code

```python
# LINEAR REGRESSION — simple and interpretable
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + 0.1 * np.random.randn(100)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

lr_model = LinearRegression()
lr_model.fit(X_train, y_train)
y_pred = lr_model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
# r² = proportion of variance explained by model
# Range: 0 to 1 (higher = better)
print(f"MSE: {mse:.4f}, R²: {r2:.4f}")
print(f"Coefficient: {lr_model.coef_[0]:.4f}, Intercept: {lr_model.intercept_:.4f}")

# POLYNOMIAL REGRESSION — non-linear trends capture karta hai
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

poly_model = Pipeline([
    ('poly', PolynomialFeatures(degree=2, include_bias=False)),
    ('linear', LinearRegression())
])
poly_model.fit(X_train, y_train)

# REGULARIZATION — overfitting rokta hai
from sklearn.linear_model import Ridge, Lasso

ridge = Ridge(alpha=1.0)    # L2: weights ko small but non-zero rakhta hai
lasso = Lasso(alpha=1.0)    # L1: weights ko zero karta hai (feature selection!)
elastic_net = ElasticNet(alpha=1.0, l1_ratio=0.5)
```

#### Classification — Detailed Code

```python
# LOGISTIC REGRESSION — binary classification ka go-to
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Multiple models compare karo
models = {
    'Logistic Regression': LogisticRegression(max_iter=200),
    'Random Forest': RandomForestClassifier(n_estimators=100),
    'SVM': SVC(kernel='rbf')
}

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"{name}: Accuracy = {acc:.4f}")
    print(classification_report(y_test, y_pred, target_names=iris.target_names))

# Hyperparameter tuning — GridSearchCV
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42), param_grid,
    cv=5, scoring='accuracy', n_jobs=-1
)
grid_search.fit(X_train, y_train)
print(f"Best params: {grid_search.best_params_}")
print(f"Best CV score: {grid_search.best_score_:.4f}")

# Cross-validation — model generalization check
cv_scores = cross_val_score(RandomForestClassifier(n_estimators=100), X, y, cv=5)
print(f"CV scores: {cv_scores}")
print(f"Mean CV accuracy: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")
```

### Unsupervised Learning

<div class="topic-grid">
<div class="topic-card">
<h4>K-Means</h4>
<p>Customer segmentation</p>
<span class="tag tag-method">Elbow method · Silhouette score</span>
</div>
<div class="topic-card">
<h4>Hierarchical</h4>
<p>Biology, taxonomy</p>
<span class="tag tag-method">Dendrogram · Agglomerative vs Divisive</span>
</div>
<div class="topic-card">
<h4>DBSCAN</h4>
<p>Anomaly detection</p>
<span class="tag tag-method">Epsilon · MinPts · Noise points</span>
</div>
<div class="topic-card">
<h4>PCA</h4>
<p>Dimensionality reduction</p>
<span class="tag tag-method">Eigenvalues · Explained variance · Feature reduction</span>
</div>
<div class="topic-card">
<h4>t-SNE</h4>
<p>Visualization</p>
<span class="tag tag-method">Perplexity · Non-linear embedding</span>
</div>
</div>

#### Clustering & Dimensionality Reduction — Detailed Code

```python
# K-MEANS CLUSTERING — elbow method for optimal k
from sklearn.datasets import make_blobs

X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=42)

kmeans = KMeans(n_clusters=4, random_state=42)
labels = kmeans.fit_predict(X)
print(f"Inertia: {kmeans.inertia_:.2f}")  # Within-cluster sum of squares

# Elbow Method — optimal k find karne ka tamatar tareeka
inertias = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X)
    inertias.append(kmeans.inertia_)

# PCA — high-dimensional data ko 2D/3D mein visualize karna
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
print(f"Explained variance ratio: {pca.explained_variance_ratio_}")
print(f"Total variance preserved: {sum(pca.explained_variance_ratio_):.4f}")
# Agar 95%+ variance 2 components mein preserve ho raha hai, PCA effective hai
```

#### Model Evaluation — Complete Class

```python
class ModelEvaluator:
    """Model comparison aur evaluation ka reusable class"""
    def __init__(self, model, X_train, X_test, y_train, y_test):
        self.model = model
        self.X_train = X_train
        self.X_test = X_test
        self.y_train = y_train
        self.y_test = y_test
        self.y_pred = None

    def train_and_predict(self):
        self.model.fit(self.X_train, self.y_train)
        self.y_pred = self.model.predict(self.X_test)
        return self

    def evaluate_classification(self):
        if self.y_pred is None:
            self.train_and_predict()
        return {
            'accuracy': accuracy_score(self.y_test, self.y_pred),
            'confusion_matrix': confusion_matrix(self.y_test, self.y_pred),
            'classification_report': classification_report(self.y_test, self.y_pred)
        }

    def evaluate_regression(self):
        if self.y_pred is None:
            self.train_and_predict()
        mse = mean_squared_error(self.y_test, self.y_pred)
        rmse = np.sqrt(mse)
        r2 = r2_score(self.y_test, self.y_pred)
        return {'mse': mse, 'rmse': rmse, 'r2_score': r2}

# Usage
evaluator = ModelEvaluator(
    RandomForestClassifier(n_estimators=100),
    X_train, X_test, y_train, y_test
)
results = evaluator.evaluate_classification()
```

### Key ML Interview Questions

1. **Bias-Variance Tradeoff** — underfitting (high bias) vs overfitting (high variance). Regularization + more data se fix hota hai.
2. **Regularization** — L1 (Lasso) useless features ka weight zero karta hai; L2 (Ridge) weights ko small rakhta hai
3. **Cross-validation** — K-Fold (random split), Stratified (class balance maintain), Leave-One-Out (small datasets)
4. **Feature Scaling** — StandardScaler (z-score), MinMaxScaler (0-1 range). Tree models scaling se unaffected
5. **Handling missing data** — mean/median imputation, KNN imputation, model-based imputation
6. **Classification metrics** — Accuracy (balanced data), Precision (spam detection), Recall (disease detection), F1 (harmonic mean), ROC-AUC
7. **Imbalanced dataset** — SMOTE (synthetic samples), class weights, undersampling majority, oversampling minority
8. **Gradient Descent vs SGD** — GD uses full batch, SGD uses one sample, Mini-batch GD uses batch of 32/64
9. **Decision Tree vs Random Forest** — DT prone to overfitting, RF uses bagging + feature randomness
10. **Precision vs Recall** — Precision = TP/(TP+FP), Recall = TP/(TP+FN). High precision = few false positives, high recall = few false negatives

### Practice

- `original/Main-Course/Placement-01/05-AI-ML/Practice-Questions-Bank.md`
- `original/Main-Course/Placement-01/05-AI-ML/Code-Examples-Library.py`

## Deep Learning

### Neural Networks Basics

| Component | Role |
|-----------|------|
| Perceptron | Basic unit — weighted sum + activation |
| Activation Functions | ReLU (hidden), Sigmoid (binary), Softmax (multi-class) |
| Loss Functions | MSE (regression), Cross-entropy (classification) |
| Optimizers | SGD, Adam, RMSprop |
| Backpropagation | Chain rule — gradients calculate karna |

### TensorFlow/Keras — Neural Network Code

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# BASIC NEURAL NETWORK FOR MNIST CLASSIFICATION
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train = x_train.astype('float32') / 255.0   # Normalize 0-1
x_test = x_test.astype('float32') / 255.0
x_train_flat = x_train.reshape(-1, 28*28)      # Flatten 28x28 → 784

# Sequential API — layer by layer model
model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),                        # Overfitting prevention
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')      # 10 classes
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

history = model.fit(x_train_flat, y_train,
                    batch_size=32, epochs=5,
                    validation_split=0.1)

test_loss, test_acc = model.evaluate(x_test, y_test, verbose=0)
print(f"Test accuracy: {test_acc:.4f}")

# CALLBACKS — training ko smart banate hain
early_stopping = keras.callbacks.EarlyStopping(
    monitor='val_loss', patience=5, restore_best_weights=True)
reduce_lr = keras.callbacks.ReduceLROnPlateau(
    monitor='val_loss', factor=0.2, patience=3)
checkpoint = keras.callbacks.ModelCheckpoint(
    'best_model.h5', monitor='val_accuracy', save_best_only=True)

model.fit(x_train_flat, y_train, epochs=50,
          validation_split=0.1,
          callbacks=[early_stopping, reduce_lr, checkpoint])
```

### CNN — Image Classification

Convolutional layers feature extract karte hain — edges, textures, shapes. Pooling dimensionality reduce karta hai.

```python
# CNN MODEL — images ke 2D structure ko preserve karta hai
cnn_model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),                    # 14x14
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),                    # 7x7
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

cnn_model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])

x_train_cnn = x_train.reshape(-1, 28, 28, 1)
x_test_cnn = x_test.reshape(-1, 28, 28, 1)
cnn_model.fit(x_train_cnn, y_train, batch_size=32, epochs=5, validation_split=0.1)
```

- Convolution layers: feature extraction (filters/kernels)
- Pooling: MaxPooling — dimensionality reduce + translation invariance
- Fully Connected: classification head
- Popular architectures: VGG16 (deep, 138M params), ResNet (skip connections), MobileNet (lightweight)

### RNN/LSTM — Sequence Data

```python
# LSTM for sequence prediction
model = keras.Sequential([
    layers.LSTM(64, return_sequences=True, input_shape=(timesteps, features)),
    layers.Dropout(0.2),
    layers.LSTM(32),
    layers.Dropout(0.2),
    layers.Dense(1)
])
model.compile(optimizer='adam', loss='mse')
```

- RNN: sequential data, but vanishing gradient problem
- LSTM: forget gate (kaunsi info discard karni hai), input gate (naya info store), output gate (kya output dena hai)
- Applications: time series forecasting, text generation, stock price prediction

### Transfer Learning

Pretrained models (VGG16, ResNet, MobileNet) ko apne data pe fine-tune karna — kam data mein bhi achha result.

```python
# TRANSFER LEARNING WITH VGG16
base_model = keras.applications.VGG16(
    weights='imagenet',        # Trained on 14M images
    include_top=False,          # Remove classifier head
    input_shape=(224, 224, 3)
)
base_model.trainable = False   # Freeze base layers

transfer_model = keras.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')  # Your classes
])

transfer_model.compile(optimizer='adam',
                       loss='sparse_categorical_crossentropy',
                       metrics=['accuracy'])
print(f"Total params: {transfer_model.count_params()}")
```

```
Pretrained model (VGG16/ResNet)
        ↓
Remove last layer (classifier head)
        ↓
Add custom classifier for your problem
        ↓
Freeze base, train head first
        ↓
Fine-tune last few layers
```

### Custom Training Loop — Advanced Control

```python
class CustomTrainer:
    def __init__(self, model, loss_fn, optimizer):
        self.model = model
        self.loss_fn = loss_fn
        self.optimizer = optimizer
        self.train_losses = []
        self.val_losses = []

    @tf.function
    def train_step(self, x, y):
        with tf.GradientTape() as tape:
            predictions = self.model(x, training=True)
            loss = self.loss_fn(y, predictions)
        gradients = tape.gradient(loss, self.model.trainable_variables)
        self.optimizer.apply_gradients(zip(gradients, self.model.trainable_variables))
        return loss

    def train(self, train_ds, val_ds, epochs):
        for epoch in range(epochs):
            for x_batch, y_batch in train_ds:
                loss = self.train_step(x_batch, y_batch)
            print(f"Epoch {epoch}: Loss = {loss:.4f}")

# Usage — when you need custom logic (GANs, adversarial training)
trainer = CustomTrainer(
    model=model,
    loss_fn=keras.losses.SparseCategoricalCrossentropy(),
    optimizer=keras.optimizers.Adam(learning_rate=0.001)
)
```

## AI Projects

### 1. House Price Prediction (Regression)
End-to-end ML pipeline — data se lekar deployment tak.
- Data: Kaggle House Prices dataset
- Preprocessing: missing values, feature engineering, log transform
- Models: Linear Regression, Random Forest, XGBoost
- Deployment: Flask/FastAPI API, Streamlit dashboard

### 2. Image Classification System (CNN)
Custom image classifier with transfer learning.
- CNN architecture ya pretrained model (MobileNet/ResNet)
- Data augmentation (rotation, flip, zoom) — overfitting rokta hai
- Web interface: upload image → predict class
- Tech: TensorFlow/Keras, OpenCV, FastAPI

### 3. Sentiment Analysis (NLP)
Text classification — review/tweet ka sentiment predict karna.
```python
# Basic sentiment analysis pipeline
from transformers import pipeline

classifier = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased-finetuned-sst-2-english"
)
result = classifier("This product is amazing!")
# [{'label': 'POSITIVE', 'score': 0.9998}]

# Traditional approach with scikit-learn
from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer(max_features=5000, stop_words='english')
X = vectorizer.fit_transform(reviews)
model = LogisticRegression().fit(X, labels)
```

### 4. RAG Chatbot
Retrieval-Augmented Generation — apne documents ke basis pe answer de.
- **Ingestion**: documents → chunk → embeddings → vector store
- **Retrieval**: user query → same embedding → semantic search
- **Generation**: retrieved context + query → LLM

### 5. Recommendation System
Collaborative filtering ya content-based recommendations.
- User-item interaction matrix
- Matrix factorization (SVD)
- A/B testing framework

### 6. Customer Churn Prediction (Classification)
Business problem — predict which customer will leave.
- Features: usage patterns, support tickets, payment history
- Models: Logistic Regression, Random Forest, XGBoost
- Imbalanced data handling: SMOTE, class weights

## Agentic AI

**Location**: `original/Agentic-AI-Course/`

<div class="tip-banner">
<span class="tip-badge">🔥 Hot Take</span>
Agentic AI aaj ka hottest topic hai. Ye tera USP ho sakta hai — LangChain + RAG seekhna current market mein sabse valuable skill hai. Har company AI agents integrate kar rahi hai.
</div>

| Concept | Description |
|---------|-------------|
| **LangChain** | Chains, Agents, Memory, Tools — LLM applications ka framework |
| **AI Agents** | Autonomous agents, tool use, reasoning loops (ReAct pattern) |
| **LangGraph** | State graphs, multi-agent systems, conditional workflows |
| **RAG Pipeline** | Embedding → Vector Store → Retrieval → Generation |
| **Tool Usage** | Function calling, API integration, web search, calculator |

### LangChain — Basic Code

```python
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferMemory
from langchain.agents import create_react_agent, Tool
from langchain.tools import tool

# Basic Chain — prompt → LLM → output
prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} in simple hinglish."
)
chain = LLMChain(llm=OpenAI(), prompt=prompt)
print(chain.run("machine learning"))

# With Memory — conversation context preserve karta hai
memory = ConversationBufferMemory()
conversation = LLMChain(llm=OpenAI(), prompt=prompt, memory=memory)

# Tools & Agents — LLM decide karta hai kaunsa tool use karna hai
@tool
def search_web(query: str) -> str:
    """Search the web for information"""
    # Implement web search API call
    return f"Results for: {query}"

tools = [Tool(name="WebSearch", func=search_web, description="Search web")]

agent = create_react_agent(llm=OpenAI(), tools=tools)
```

### RAG Pipeline Architecture

```
User Query → Embedding Model (text-embedding-ada-002)
                  ↓
          Vector Search (Pinecone/Chroma/Weaviate)
                  ↓
    Relevant Chunks + Original Query → LLM (GPT-4/Claude)
                  ↓
               Answer
```

### LangGraph — Multi-Agent Systems

```python
from langgraph.graph import StateGraph, MessageGraph

# State graph with conditional edges
graph = StateGraph(MyState)
graph.add_node("agent", call_agent)
graph.add_node("tools", call_tool)
graph.add_conditional_edges("agent", should_continue, {
    "continue": "tools",
    "end": END
})
graph.set_entry_point("agent")
app = graph.compile()
```

### RAG Pipeline — Detailed

```python
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter

# 1. Document loading & chunking
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)

# 2. Embedding & Vector Store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# 3. Retrieval + Generation
from langchain.chains import RetrievalQA

qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3})
)
answer = qa_chain.run("What is the refund policy?")
```

## AI-Enhanced Learning

`original/Learning-Techniques/Learning_Course/`:

- Course structure: `COURSE_INDEX.md`
- AI Tools setup: `01_AI_Setup/AI_Tools_Configuration.md`
- Prompt Engineering: `03_Advanced_AI_Learning/Prompt_Engineering_Complete.md`
- Learning science + AI: `Learning_How_to_Learn_CS.md`

```bash
# Learning_Course structure
Learning_Course/
├── 01_AI_Setup/
├── 02_AI_Learning_Basics/
├── 03_Advanced_AI_Learning/
├── 04_AI_System_Mastery/
├── 05_AI_Practice/
├── 06_AI_Templates/
├── 06_Resources/
└── Modules/
```

## Study Tips (Hinglish)

<div class="tip-banner">
<span class="tip-badge">📌 Study Tip</span>
<strong>Study Sequence:</strong> Pehle Python + libraries, phir ML algorithms, phir Deep Learning, finally Advanced + Projects.
</div>

<div class="tip-banner">
<span class="tip-badge">🧮 Math Basics</span>
Linear algebra (matrices, eigenvalues), calculus (derivatives), statistics (mean, variance, Bayes) — ML interview mein puchte hain, lekin har formula na ratto, intuition samajh.
</div>

<div class="tip-banner">
<span class="tip-badge">💻 Practice > Theory</span>
ML theory 30% time, coding 70%. Kaggle datasets lo aur real models train karo.
</div>

<div class="tip-banner">
<span class="tip-badge">📊 Project Portfolio</span>
2-3 solid projects rakho jo deployment tak gaye hain. Kaggle notebooks bhi kaam aate hain.
</div>

<div class="tip-banner">
<span class="tip-badge">🤖 Agentic AI USP</span>
LangChain + RAG seekhna is current market mein sabse valuable skill hai. Har company AI agents integrate kar rahi hai.
</div>

<div class="tip-banner">
<span class="tip-badge">🗣️ Prompt Engineering</span>
LLM se kaam lena seekho. Placement mein bhi AI tools ka use puchte hain.
</div>

## Checklist

- [ ] Python basics complete (NumPy, Pandas, Matplotlib)
- [ ] ML supervised algorithms practice kiye
- [ ] ML unsupervised algorithms samjhe
- [ ] ML evaluation metrics clear hain
- [ ] Deep Learning (CNN, RNN) basics clear hain
- [ ] AI project banaya (image classification / sentiment analysis)
- [ ] RAG Pipeline implement kiya
- [ ] LangChain + AI Agents seekhe
- [ ] Prompt Engineering complete kiya
- [ ] Learning_Course ka structure follow kiya
- [ ] Kaggle pe 2-3 competitions participate kiya

---

## 📂 Original Deep Content

Original AI-ML content — 58+ files covering the full spectrum:

- [AI-ML Complete Guide](../original/05-AI-ML/AI-ML-Complete.md)
- [Deep Learning](../original/05-AI-ML/Deep-Learning/)
- [Machine Learning](../original/05-AI-ML/Machine-Learning/)
- [Agentic AI / LangChain](../original/05-AI-ML/Agentic-AI/)

---

## Notes

<div id="page-notes"></div>
