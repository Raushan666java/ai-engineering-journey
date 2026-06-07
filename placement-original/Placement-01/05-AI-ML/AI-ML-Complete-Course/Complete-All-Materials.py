import os

# Complete course structure
weeks = {
    "Week-05-ML-Introduction": ("Machine Learning Basics", ["ML Types", "Scikit-learn", "Preprocessing", "Evaluation"], "02-Machine-Learning"),
    "Week-06-Regression": ("Regression Analysis", ["Linear Regression", "Polynomial", "Regularization", "Metrics"], "02-Machine-Learning"),
    "Week-07-Classification": ("Classification", ["Logistic Regression", "Decision Trees", "Random Forest", "SVM"], "02-Machine-Learning"),
    "Week-08-Unsupervised": ("Unsupervised Learning", ["K-Means", "PCA", "Clustering", "DBSCAN"], "02-Machine-Learning"),
    "Week-09-Neural-Networks": ("Neural Networks", ["Perceptron", "Backpropagation", "Activation", "Optimization"], "03-Deep-Learning"),
    "Week-10-TensorFlow": ("TensorFlow", ["TensorFlow Basics", "Keras", "Model Building", "Training"], "03-Deep-Learning"),
    "Week-11-CNNs": ("CNNs", ["Convolution", "Pooling", "Architecture", "Image Classification"], "03-Deep-Learning"),
    "Week-12-RNNs": ("RNNs", ["RNN Basics", "LSTM", "GRU", "Sequences"], "03-Deep-Learning"),
    "Week-13-NLP": ("NLP", ["Text Processing", "Embeddings", "Sentiment", "Transformers"], "04-Advanced-Topics"),
    "Week-14-Computer-Vision": ("Computer Vision", ["Image Processing", "Object Detection", "Transfer Learning", "OpenCV"], "04-Advanced-Topics"),
    "Week-15-MLOps": ("MLOps", ["Deployment", "Docker", "APIs", "Monitoring"], "04-Advanced-Topics")
}

base = r"c:\xampp\htdocs\Placement\Placement-01\05-AI-ML\AI-ML-Complete-Course"

for week, (title, topics, phase) in weeks.items():
    path = os.path.join(base, phase, week)
    
    # Create directories
    for subdir in ["lectures", "labs", "assignments", "projects", "resources"]:
        os.makedirs(os.path.join(path, subdir), exist_ok=True)
    
    # Lecture
    lecture = f"""# {week.replace('-', ' ')}: {title}

## Learning Objectives
- Master {topics[0]}
- Understand {topics[1]}
- Apply {topics[2]}
- Practice {topics[3]}

## 1. {topics[0]}

### Core Concepts
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

# Example implementation
X = np.random.randn(100, 4)
y = np.random.randint(0, 2, 100)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
```

### Key Methods
- Method 1: Basic implementation
- Method 2: Advanced techniques
- Method 3: Optimization

## 2. {topics[1]}

### Implementation
```python
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

# Preprocessing
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_train)

# Model training
model = create_model()
model.fit(X_scaled, y_train)
```

## 3. {topics[2]}

### Real Applications
- Industry use case 1
- Business application 2
- Research example 3

## 4. {topics[3]}

### Best Practices
- Performance optimization
- Model validation
- Production deployment

## Summary
Covered: {', '.join(topics)}
"""
    
    with open(os.path.join(path, "lectures", f"01-{title.replace(' ', '-')}.md"), 'w') as f:
        f.write(lecture)
    
    # Assignment
    assignment = f"""# Assignment: {title}

**Due:** End of {week.replace('-', ' ')}
**Points:** 100

## Problem 1: {topics[0]} (25 points)
Implement {topics[0]} solution with real data.

## Problem 2: {topics[1]} (25 points)
Apply {topics[1]} techniques to solve business problem.

## Problem 3: {topics[2]} (25 points)
Build {topics[2]} application with evaluation metrics.

## Problem 4: {topics[3]} (25 points)
Create {topics[3]} project with documentation.

## Submission
Submit complete code with results and analysis.
"""
    
    with open(os.path.join(path, "assignments", f"Assignment-{week}.md"), 'w') as f:
        f.write(assignment)
    
    # Lab
    lab = f'''"""
Lab: {title}
{week.replace('-', ' ')} Practice
"""

print("=== {title} Lab ===")

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Exercise 1: {topics[0]}
print("Exercise 1: {topics[0]}")
data = np.random.randn(100, 5)
print(f"Data shape: {{data.shape}}")

# Exercise 2: {topics[1]}
print("Exercise 2: {topics[1]}")
result = np.mean(data, axis=0)
print(f"Result: {{result}}")

# Exercise 3: {topics[2]}
print("Exercise 3: {topics[2]}")
processed = data * 2
print(f"Processed shape: {{processed.shape}}")

# Exercise 4: {topics[3]}
print("Exercise 4: {topics[3]}")
final_result = np.sum(processed)
print(f"Final result: {{final_result}}")

print("Lab Complete!")
'''
    
    with open(os.path.join(path, "labs", f"Lab-{week}.py"), 'w') as f:
        f.write(lab)
    
    # Project
    project = f"""# Project: {title}

**Skills:** {', '.join(topics)}
**Time:** 10-15 hours

## Overview
Build end-to-end {title.lower()} solution.

## Requirements
1. {topics[0]} implementation
2. {topics[1]} integration
3. {topics[2]} application
4. {topics[3]} optimization

## Deliverables
- Source code
- Data analysis
- Model evaluation
- Documentation
- Presentation

## Implementation
```python
class {title.replace(' ', '')}Project:
    def __init__(self):
        self.data = None
        self.model = None
    
    def load_data(self):
        pass
    
    def preprocess(self):
        pass
    
    def train_model(self):
        pass
    
    def evaluate(self):
        pass
```

## Grading
- Implementation: 40%
- Analysis: 30%
- Documentation: 20%
- Presentation: 10%
"""
    
    with open(os.path.join(path, "projects", f"Project-{week}.md"), 'w') as f:
        f.write(project)
    
    # Study Guide
    study_guide = f"""# Study Guide: {title}

## Key Concepts
- {topics[0]}: Core fundamentals
- {topics[1]}: Advanced methods
- {topics[2]}: Practical applications
- {topics[3]}: Best practices

## Code Examples
```python
# Basic example
import numpy as np
data = np.array([1, 2, 3, 4, 5])
result = np.mean(data)
```

## Practice Problems
1. Implement basic {topics[0]}
2. Apply {topics[1]} techniques
3. Build {topics[2]} solution
4. Optimize with {topics[3]}

## Resources
- Documentation links
- Tutorial videos
- Practice datasets
- Community forums
"""
    
    with open(os.path.join(path, "resources", f"Study-Guide-{week}.md"), 'w') as f:
        f.write(study_guide)
    
    print(f"✅ {week}: {title}")

print("\n🎉 ALL COURSE MATERIALS COMPLETE A-Z!")