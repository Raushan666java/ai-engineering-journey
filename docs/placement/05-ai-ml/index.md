# AI & ML — Machine Learning se Agentic AI tak

AI/ML kaafi broad hai. Placement ke liye basics strong rakh, aur advanced topics (Agentic AI, LangChain) mein expertise bana. Sab content `placement-original/Main-Course/Placement-01/05-AI-ML/`, `placement-original/Learning-Techniques/Learning_Course/`, aur `placement-original/Agentic-AI-Course/` mein hai.

**Complete Source**: `placement-original/Main-Course/Placement-01/05-AI-ML/AI-ML-Complete.md` (1073 lines) — 16-week AI/ML mastery plan.

## Python for ML

### Core Libraries

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```

Tutorials `placement-original/Main-Course/Placement-01/05-AI-ML/Week-03-NumPy-Complete.md` aur `Week-04-Pandas-Complete.md` mein hain.

### 16-Week Course Structure (from `AI-ML-Complete.md`)

| Week | Topic | File |
|------|-------|------|
| 1 | Python Basics (variables, types, control flow) | `Week-01-Python-Basics-Complete.md` |
| 2 | Advanced Python (OOP, generators, file I/O) | `Week-02-Advanced-Python-Complete.md` |
| 3 | NumPy (arrays, broadcasting, linear algebra) | `Week-03-NumPy-Complete.md` |
| 4 | Pandas (DataFrame, groupby, merge, pivot) | `Week-04-Pandas-Complete.md` |
| 5 | ML Introduction | `Week-05-ML-Introduction-Complete.md` |
| 6-8 | Supervised Learning | Regression + Classification |
| 9-10 | Unsupervised Learning | Clustering + Dimensionality Reduction |
| 11-12 | Deep Learning | Neural Networks, CNN, RNN |
| 13-14 | Advanced Topics | NLP, Transformers, Transfer Learning |
| 15-16 | Capstone Projects | End-to-end ML pipeline |

### Python Data Analysis Example

```python
# Data preprocessing class pattern — interview mein bhi puchte hain
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
        self.processed_data = None

    def preprocess(self):
        self.processed_data = [float(x) for x in self.data if x is not None]
        return self

    def analyze(self):
        stats = {
            'mean': sum(self.processed_data) / len(self.processed_data),
            'median': sorted(self.processed_data)[len(self.processed_data) // 2],
            'min': min(self.processed_data),
            'max': max(self.processed_data)
        }
        return stats

analyzer = DataAnalyzer([1, 2, 3, 100, 4, 5])
results = analyzer.preprocess().analyze()
```

## Machine Learning

### Supervised Learning

| Algorithm | Use Case | Key Concept |
|-----------|----------|-------------|
| Linear Regression | Continuous values | MSE, Gradient Descent, R-squared |
| Polynomial Regression | Non-linear trends | Feature engineering, overfitting |
| Ridge / Lasso | High-dimensional data | L1/L2 regularization, bias-variance tradeoff |
| Logistic Regression | Binary classification | Sigmoid, Cross-entropy loss, Decision boundary |
| Decision Trees | Interpretable models | Gini impurity, Information gain, Pruning |
| Random Forest | Robust classification | Bagging, Feature importance, Out-of-bag error |
| SVM | Complex boundaries | Kernel trick, Support vectors, Margin |
| KNN | Instance-based learning | Distance metrics, K value selection |

### Unsupervised Learning

| Algorithm | Application | Key Concept |
|-----------|-------------|-------------|
| K-Means | Customer segmentation | Elbow method, Silhouette score |
| Hierarchical | Biology, taxonomy | Dendrogram, Agglomerative vs Divisive |
| DBSCAN | Anomaly detection | Epsilon, MinPts, Noise points |
| PCA | Dimensionality reduction | Eigenvalues, Explained variance, Feature reduction |
| t-SNE | Visualization | Perplexity, Non-linear embedding |

### Key ML Interview Questions

1. Bias-Variance Tradeoff — overfitting kaise detect aur fix karein?
2. Regularization — L1 vs L2 (L1 feature selection karta hai, L2 weights ko chota karta hai)
3. Cross-validation — K-Fold, Stratified, Leave-One-Out
4. Feature Scaling — StandardScaler vs MinMaxScaler (tree-based models ko scaling nahi chahiye)
5. Handling missing data — mean/median imputation, model-based imputation
6. Classification metrics — Accuracy vs Precision vs Recall vs F1 vs ROC-AUC
7. Imbalanced dataset — SMOTE, class weights, undersampling/oversampling

### Practice

- `placement-original/Main-Course/Placement-01/05-AI-ML/Practice-Questions-Bank.md`
- `placement-original/Main-Course/Placement-01/05-AI-ML/Code-Examples-Library.py`

## Deep Learning

### Neural Networks Basics

| Component | Role |
|-----------|------|
| Perceptron | Basic unit — weighted sum + activation |
| Activation Functions | ReLU (hidden), Sigmoid (binary), Softmax (multi-class) |
| Loss Functions | MSE (regression), Cross-entropy (classification) |
| Optimizers | SGD, Adam, RMSprop |
| Backpropagation | Chain rule — gradients calculate karna |

### CNN — Image Classification

- Convolution layers: feature extraction (filters/kernels)
- Pooling: MaxPooling, AveragePooling — dimensionality reduce
- Fully Connected: classification head
- Popular architectures: VGG16, ResNet, MobileNet

### RNN/LSTM — Sequence Data

- RNN: vanishing gradient problem
- LSTM: forget gate, input gate, output gate
- Applications: time series, text generation, stock prediction

### Transfer Learning

```
Pretrained model (VGG16/ResNet)
        ↓
Remove last layer
        ↓
Add custom classifier
        ↓
Fine-tune on your dataset
```

## AI Projects

1. **Image Classification**: CNN-based, using TensorFlow/PyTorch, deploy with FastAPI
2. **Sentiment Analysis**: NLP pipeline (tokenization → embedding → LSTM/BERT), deploy with Streamlit
3. **Chatbot**: Seq2Seq with attention, Transformers (HuggingFace), RAG-based
4. **House Price Prediction**: End-to-end — data collection → feature engineering → model training → API deployment
5. **Customer Churn Prediction**: Classification project — Logistic Regression, Random Forest, XGBoost

## Agentic AI

**Location**: `placement-original/Agentic-AI-Course/`

Agentic AI aaj ka hottest topic hai. Ye tera USP ho sakta hai:

| Concept | Description |
|---------|-------------|
| **LangChain** | Chains, Agents, Memory, Tools — LLM applications ka framework |
| **AI Agents** | Autonomous agents, tool use, reasoning loops (ReAct pattern) |
| **LangGraph** | State graphs, multi-agent systems, conditional workflows |
| **RAG Pipeline** | Embedding → Vector Store → Retrieval → Generation |
| **Tool Usage** | Function calling, API integration, web search, calculator |

### RAG Pipeline Architecture

```
User Query → Embedding Model → Vector Search (Pinecone/Chroma)
                                      ↓
Relevant Chunks + Query → LLM (GPT-4/Claude) → Answer
```

## AI-Enhanced Learning

`placement-original/Learning-Techniques/Learning_Course/`:

- 21-day course structure: `COURSE_INDEX.md`
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

- **📅 16-Week Plan**: Weeks 1-4 Python + libraries, 5-10 ML algorithms, 11-12 Deep Learning, 13-16 Advanced + Projects.
- **🧮 Math Basics**: Linear algebra (matrices, eigenvalues), calculus (derivatives), statistics (mean, variance, Bayes) — ML interview mein puchte hain, lekin har formula na ratto, intuition samajh.
- **💻 Practice > Theory**: ML theory 30% time, coding 70%. Kaggle datasets lo aur real models train karo.
- **📊 Project Portfolio**: 2-3 solid projects rakho jo deployment tak gaye hain. Kaggle notebooks bhi kaam aate hain.
- **🤖 Agentic AI USP**: LangChain + RAG seekhna is current market mein sabse valuable skill hai. Har company AI agents integrate kar rahi hai.
- **🗣️ Prompt Engineering**: LLM se kaam lena seekho. Placement mein bhi AI tools ka use puchte hain.

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
- [ ] Learning_Course ka 21-day structure follow kiya
- [ ] Kaggle pe 2-3 competitions participate kiya

---

## Notes

<div id="page-notes"></div>
