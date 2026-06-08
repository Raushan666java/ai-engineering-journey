# 🤖 Complete AI/ML Course - Placement Ready (90 Days)

## 📋 Course Overview

**Duration**: 12 Weeks (90 Days)  
**Daily Time**: 4-6 hours  
**Goal**: Job-ready AI/ML Engineer  
**Focus**: Practical implementation + Interview preparation

---

## 🎯 PHASE 1: FOUNDATIONS (Weeks 1-4)

### **Week 1: Python Programming Mastery**

#### Day 1-2: Python Basics
- Variables, data types, operators
- Control flow (if/else, loops)
- Functions and scope
- **Practice**: 10 Python problems on HackerRank

#### Day 3-4: Data Structures
- Lists, tuples, dictionaries, sets
- List comprehensions
- String manipulation
- **Practice**: Build a contact management system

#### Day 5-6: Advanced Python
- Object-oriented programming (classes, inheritance)
- File I/O operations
- Exception handling
- **Project**: Create a student grade management system

#### Day 7: Assessment
- **Quiz**: Python fundamentals
- **Mini-Project**: Text file analyzer with statistics

---

### **Week 2: NumPy - Numerical Computing**

#### Day 1-2: NumPy Fundamentals
```python
import numpy as np

# Array creation
arr = np.array([1, 2, 3, 4, 5])
matrix = np.random.rand(3, 4)

# Basic operations
mean = np.mean(arr)
std = np.std(arr)

# Reshaping
reshaped = arr.reshape(5, 1)
```

#### Day 3-4: Advanced Array Operations
- Broadcasting and vectorization
- Boolean indexing and fancy indexing
- Array manipulation (stack, concatenate, split)
- **Lab**: Image processing with NumPy arrays

#### Day 5-6: Linear Algebra with NumPy
```python
# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Dot product
C = np.dot(A, B)

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

# Matrix inverse
inv_A = np.linalg.inv(A)
```

#### Day 7: Project
- **Build**: Matrix calculator with operations (add, multiply, inverse, eigenvalues)
- **Dataset**: Use NumPy to analyze numerical datasets

---

### **Week 3: Pandas - Data Manipulation**

#### Day 1-2: Pandas Basics
```python
import pandas as pd

# Creating DataFrames
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Salary': [50000, 60000, 70000]
})

# Basic operations
print(df.head())
print(df.describe())
print(df.info())
```

#### Day 3-4: Data Cleaning & Manipulation
```python
# Handling missing data
df.dropna()
df.fillna(0)

# Filtering
high_salary = df[df['Salary'] > 55000]

# Sorting
sorted_df = df.sort_values('Age', ascending=False)

# Grouping
grouped = df.groupby('Department').mean()
```

#### Day 5-6: Advanced Pandas
- Merging and joining DataFrames
- Pivot tables and cross-tabulation
- Time series operations
- **Lab**: Analyze stock market data

#### Day 7: Real Dataset Project
- **Dataset**: Titanic or Housing dataset from Kaggle
- **Tasks**: Clean, analyze, visualize insights
- **Deliverable**: Jupyter notebook with complete analysis

---

### **Week 4: Data Visualization**

#### Day 1-3: Matplotlib & Seaborn
```python
import matplotlib.pyplot as plt
import seaborn as sns

# Line plot
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Simple Plot')
plt.show()

# Histogram
plt.hist(data, bins=20)

# Scatter plot
plt.scatter(x, y)

# Seaborn advanced plots
sns.heatmap(correlation_matrix, annot=True)
sns.pairplot(df)
```

#### Day 4-6: Interactive Visualizations
- Plotly for interactive charts
- Dashboards with Plotly Dash basics
- **Project**: Create an interactive sales dashboard

#### Day 7: Comprehensive EDA Project
- **Dataset**: Any real-world dataset (e.g., COVID-19, E-commerce)
- **Tasks**: Complete exploratory data analysis with visualizations
- **Deliverable**: Professional analysis report

---

## 🧠 PHASE 2: MACHINE LEARNING (Weeks 5-8)

### **Week 5: ML Fundamentals**

#### Day 1-2: Introduction to ML
```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load data
X, y = load_data()

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
```

#### Day 3-4: Linear Regression
```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"MSE: {mse}, R²: {r2}")
```

#### Day 5-6: Polynomial & Ridge/Lasso Regression
- Feature engineering and polynomial features
- Regularization techniques
- Cross-validation
- **Project**: House price prediction

#### Day 7: Assessment
- **Kaggle Competition**: House Prices - Advanced Regression Techniques
- **Submission**: Make your first Kaggle submission

---

### **Week 6: Classification Algorithms**

#### Day 1-2: Logistic Regression
```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Train model
log_reg = LogisticRegression()
log_reg.fit(X_train, y_train)

# Predictions
y_pred = log_reg.predict(X_test)

# Evaluation
print(f"Accuracy: {accuracy_score(y_test, y_pred)}")
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

#### Day 3-4: Decision Trees & Random Forest
```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

# Decision Tree
dt = DecisionTreeClassifier(max_depth=5)
dt.fit(X_train, y_train)

# Random Forest
rf = RandomForestClassifier(n_estimators=100)
rf.fit(X_train, y_train)

# Feature importance
importances = rf.feature_importances_
```

#### Day 5-6: Support Vector Machines & KNN
```python
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier

# SVM
svm = SVC(kernel='rbf', C=1.0, gamma='scale')
svm.fit(X_train, y_train)

# KNN
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
```

#### Day 7: Project
- **Dataset**: Credit card fraud detection or customer churn
- **Task**: Compare multiple classification algorithms
- **Deliverable**: Model comparison report

---

### **Week 7: Advanced ML Techniques**

#### Day 1-3: Ensemble Methods
```python
from sklearn.ensemble import GradientBoostingClassifier
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier

# XGBoost
xgb = XGBClassifier(
    n_estimators=100,
    max_depth=5,
    learning_rate=0.1
)
xgb.fit(X_train, y_train)

# LightGBM
lgbm = LGBMClassifier()
lgbm.fit(X_train, y_train)
```

#### Day 4-5: Hyperparameter Tuning
```python
from sklearn.model_selection import GridSearchCV, RandomizedSearchCV

# Grid Search
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [3, 5, 7],
    'learning_rate': [0.01, 0.1, 0.3]
}

grid_search = GridSearchCV(
    XGBClassifier(),
    param_grid,
    cv=5,
    scoring='accuracy'
)
grid_search.fit(X_train, y_train)

print(f"Best parameters: {grid_search.best_params_}")
```

#### Day 6-7: Model Deployment Basics
```python
import pickle
import joblib

# Save model
joblib.dump(model, 'model.pkl')

# Load model
loaded_model = joblib.load('model.pkl')

# Make predictions
new_predictions = loaded_model.predict(new_data)
```

---

### **Week 8: Unsupervised Learning**

#### Day 1-3: Clustering
```python
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering

# K-Means
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X)

# Visualize clusters
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], 
           kmeans.cluster_centers_[:, 1], 
           c='red', marker='X', s=200)
```

#### Day 4-5: Dimensionality Reduction
```python
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

# PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

# Explained variance
print(f"Explained variance: {pca.explained_variance_ratio_}")

# t-SNE
tsne = TSNE(n_components=2, random_state=42)
X_tsne = tsne.fit_transform(X)
```

#### Day 6-7: Project
- **Dataset**: Customer segmentation (e.g., mall customers)
- **Task**: Cluster customers and create personas
- **Deliverable**: Business insights report

---

## 🔥 PHASE 3: DEEP LEARNING (Weeks 9-10)

### **Week 9: Neural Networks with TensorFlow/Keras**

#### Day 1-2: Neural Network Basics
```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Build model
model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(input_dim,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(num_classes, activation='softmax')
])

# Compile
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)
```

#### Day 3-4: Convolutional Neural Networks (CNN)
```python
# CNN for image classification
model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Train on MNIST or CIFAR-10
model.fit(train_images, train_labels, epochs=10)
```

#### Day 5-7: CNN Projects
- **Project 1**: MNIST digit recognition (99%+ accuracy)
- **Project 2**: Custom image classifier (cats vs dogs)
- **Project 3**: Face mask detection

---

### **Week 10: NLP & Advanced Deep Learning**

#### Day 1-3: Natural Language Processing
```python
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Text preprocessing
tokenizer = Tokenizer(num_words=10000, oov_token='<OOV>')
tokenizer.fit_on_texts(texts)

# Convert to sequences
sequences = tokenizer.texts_to_sequences(texts)
padded = pad_sequences(sequences, maxlen=100, padding='post')

# Build NLP model
model = keras.Sequential([
    layers.Embedding(10000, 128, input_length=100),
    layers.LSTM(64, return_sequences=True),
    layers.LSTM(32),
    layers.Dense(1, activation='sigmoid')
])
```

#### Day 4-5: Transfer Learning
```python
from tensorflow.keras.applications import VGG16, ResNet50

# Load pre-trained model
base_model = VGG16(weights='imagenet', include_top=False, 
                   input_shape=(224, 224, 3))

# Freeze base model
base_model.trainable = False

# Add custom layers
model = keras.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(num_classes, activation='softmax')
])
```

#### Day 6-7: NLP Project
- **Project**: Sentiment analysis on movie reviews
- **Dataset**: IMDB reviews
- **Goal**: 85%+ accuracy with LSTM/GRU

---

## 🚀 PHASE 4: DEPLOYMENT & INTERVIEW PREP (Weeks 11-12)

### **Week 11: Model Deployment**

#### Day 1-3: Flask API for ML
```python
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = data['features']
    prediction = model.predict([features])
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
```

#### Day 4-5: Streamlit Dashboard
```python
import streamlit as st
import pandas as pd

st.title('ML Model Dashboard')

# File upload
uploaded_file = st.file_uploader("Choose a CSV file")

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    st.write(df.head())
    
    # Make predictions
    if st.button('Predict'):
        predictions = model.predict(df)
        st.write(predictions)
```

#### Day 6-7: Complete Deployment
- **Deploy**: One project on Heroku/Streamlit Cloud
- **GitHub**: Professional README with setup instructions
- **Demo**: Working live link

---

### **Week 12: Capstone Project & Interview Prep**

#### Day 1-5: Capstone Project
**Choose one end-to-end project:**

1. **Recommendation System**
   - Collaborative filtering
   - Content-based filtering
   - Hybrid approach
   - Deploy as web app

2. **Image Classification App**
   - Custom CNN model
   - Transfer learning
   - Web interface with file upload
   - Real-time predictions

3. **Customer Churn Prediction**
   - Feature engineering
   - Multiple ML models
   - Model comparison
   - Business insights dashboard

**Requirements:**
- Complete data pipeline
- Model training & evaluation
- Deployment (Flask/Streamlit)
- Professional documentation
- GitHub repository

#### Day 6-7: Interview Preparation

**ML Theory Questions** (Practice 50+):
1. Explain bias-variance tradeoff
2. Difference between L1 and L2 regularization
3. How does Random Forest work?
4. Explain gradient descent
5. What is cross-validation?
6. Overfitting vs underfitting
7. Precision vs Recall
8. How does backpropagation work?
9. Explain CNN architecture
10. What is transfer learning?

**Coding Questions** (Practice 30+):
1. Implement linear regression from scratch
2. K-means clustering implementation
3. Decision tree from scratch
4. Gradient descent implementation
5. Neural network forward pass

**Case Studies**:
- How to reduce model training time?
- Handling imbalanced datasets
- Feature selection techniques
- Model evaluation metrics selection

---

## 📊 Weekly Progress Tracker

```markdown
### Week 1: Python ☐
- [ ] Day 1-2: Basics completed
- [ ] Day 3-4: Data structures mastered
- [ ] Day 5-6: OOP project done
- [ ] Day 7: Assessment passed

### Week 2: NumPy ☐
- [ ] Day 1-2: Fundamentals
- [ ] Day 3-4: Advanced operations
- [ ] Day 5-6: Linear algebra
- [ ] Day 7: Project completed

... (continue for all weeks)
```

---

## 🎯 Success Metrics (90 Days)

### Minimum Requirements:
- ✅ **5 GitHub projects** with complete documentation
- ✅ **1 deployed application** (live link)
- ✅ **2 Kaggle competitions** participated
- ✅ **Resume** with ML projects highlighted
- ✅ **LinkedIn** with AI/ML skills showcased
- ✅ **50+ ML interview questions** practiced

### Bonus Achievements:
- 🏆 Kaggle bronze medal
- 🏆 Blog post about ML project
- 🏆 Contribute to open-source ML project
- 🏆 Complete a research paper implementation

---

## 📚 Essential Resources

### Online Platforms:
- **Coursera**: Andrew Ng's Machine Learning
- **Kaggle**: Datasets + competitions
- **Google Colab**: Free GPU
- **Fast.ai**: Practical deep learning

### Books:
- "Hands-On Machine Learning" - Aurélien Géron
- "Deep Learning with Python" - François Chollet
- "The Hundred-Page Machine Learning Book" - Andriy Burkov

### Practice:
- LeetCode (ML problems)
- HackerRank (Data Science track)
- StrataScratch (ML interview prep)

---

## ⚡ Quick Start Checklist

**Today (Day 1):**
- [ ] Set up Python environment (Anaconda)
- [ ] Install Jupyter Notebook
- [ ] Create GitHub account
- [ ] Set up Kaggle account
- [ ] Complete first 5 Python problems

**This Week:**
- [ ] Complete Week 1 content
- [ ] Build contact management system
- [ ] Start daily coding habit (2 hours minimum)

**This Month:**
- [ ] Finish Python + NumPy + Pandas
- [ ] Complete first data analysis project
- [ ] Upload to GitHub with README

---

## 🎓 Career Preparation

### Resume Building:
```markdown
## Machine Learning Engineer

**Skills:**
- Programming: Python, SQL
- ML Libraries: scikit-learn, TensorFlow, Keras, XGBoost
- Data: NumPy, Pandas, Matplotlib, Seaborn
- Tools: Jupyter, Git, Docker (optional)

**Projects:**
1. **House Price Prediction** | [GitHub] | [Demo]
   - Implemented regression models (Linear, Ridge, Lasso)
   - Achieved R² score of 0.85 on test set
   - Tech: Python, scikit-learn, Pandas

2. **Image Classifier** | [GitHub] | [Demo]
   - Built CNN for 10-class image classification
   - 92% accuracy using transfer learning (VGG16)
   - Tech: TensorFlow, Keras, Flask

3. **Customer Segmentation** | [GitHub] | [Demo]
   - K-means clustering on customer data
   - Identified 5 distinct customer personas
   - Tech: Python, scikit-learn, Plotly
```

### Interview Preparation:
- Practice explaining projects clearly
- Prepare for coding challenges (30 min time limit)
- Mock interviews on Pramp/Interviewing.io
- Study company-specific case studies

---

## 🚨 Common Pitfalls to Avoid

1. **Tutorial Hell**: Don't just watch—code along
2. **No Projects**: Theory without practice = No job
3. **Tool Overload**: Master Python + scikit-learn + TensorFlow first
4. **Weak GitHub**: Empty repos won't impress recruiters
5. **No Networking**: Connect on LinkedIn, attend meetups
6. **Ignoring Math**: Understand the "why" behind algorithms
7. **Perfectionism**: Ship projects, iterate later

---

**START TODAY!** Complete Week 1, Day 1 Python basics and solve 3 problems. Build momentum, stay consistent, and you'll be job-ready in 90 days! 🚀
