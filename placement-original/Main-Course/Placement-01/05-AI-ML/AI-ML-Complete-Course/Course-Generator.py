import os

weeks = {
    "Week-04-Pandas": ("Pandas", ["DataFrames", "Data Cleaning", "Grouping", "Merging"]),
    "Week-06-Regression": ("Regression", ["Linear Regression", "Polynomial", "Regularization", "Metrics"]),
    "Week-07-Classification": ("Classification", ["Logistic Regression", "Decision Trees", "Random Forest", "SVM"]),
    "Week-08-Unsupervised": ("Unsupervised", ["K-Means", "PCA", "Clustering", "DBSCAN"]),
    "Week-10-TensorFlow": ("TensorFlow", ["TensorFlow Basics", "Keras", "Model Building", "Training"]),
    "Week-11-CNNs": ("CNNs", ["Convolution", "Pooling", "Architecture", "Image Classification"]),
    "Week-12-RNNs": ("RNNs", ["RNN Basics", "LSTM", "GRU", "Sequences"]),
    "Week-13-NLP": ("NLP", ["Text Processing", "Embeddings", "Sentiment", "Transformers"]),
    "Week-14-Computer-Vision": ("Computer Vision", ["Image Processing", "Object Detection", "Transfer Learning", "OpenCV"]),
    "Week-15-MLOps": ("MLOps", ["Deployment", "Docker", "APIs", "Monitoring"])
}

phases = {
    "Week-04-Pandas": "01-Python-Foundations",
    "Week-06-Regression": "02-Machine-Learning",
    "Week-07-Classification": "02-Machine-Learning", 
    "Week-08-Unsupervised": "02-Machine-Learning",
    "Week-10-TensorFlow": "03-Deep-Learning",
    "Week-11-CNNs": "03-Deep-Learning",
    "Week-12-RNNs": "03-Deep-Learning",
    "Week-13-NLP": "04-Advanced-Topics",
    "Week-14-Computer-Vision": "04-Advanced-Topics",
    "Week-15-MLOps": "04-Advanced-Topics"
}

base = r"c:\xampp\htdocs\Placement\Placement-01\05-AI-ML\AI-ML-Complete-Course"

for week, (title, topics) in weeks.items():
    phase = phases[week]
    path = os.path.join(base, phase, week)
    
    # Create subdirs
    for subdir in ["lectures", "labs", "assignments", "projects", "resources"]:
        os.makedirs(os.path.join(path, subdir), exist_ok=True)
    
    # README
    readme = f"""# {week.replace('-', ' ')}: {title}

## Topics
{chr(10).join(f"- {topic}" for topic in topics)}

## Materials
- **Lectures**: {title} fundamentals
- **Labs**: Hands-on practice
- **Assignment**: {title} problems
- **Project**: Real application

## Time: 20 hours"""
    
    with open(os.path.join(path, "README.md"), 'w') as f:
        f.write(readme)
    
    # Lecture
    lecture = f"""# {week.replace('-', ' ')}: {title}

## Learning Objectives
- Master {topics[0].lower()}
- Understand {topics[1].lower()}
- Apply {topics[2].lower()}
- Practice {topics[3].lower()}

## 1. {topics[0]}
Basic concepts and implementation.

```python
import numpy as np
import pandas as pd

# Example code
data = [1, 2, 3, 4, 5]
print(f"Data: {{data}}")
```

## 2. {topics[1]}
Advanced techniques and methods.

## 3. {topics[2]}
Practical applications.

## 4. {topics[3]}
Real-world examples."""
    
    with open(os.path.join(path, "lectures", f"01-{title}.md"), 'w') as f:
        f.write(lecture)
    
    # Assignment
    assignment = f"""# Assignment: {title}

**Due:** End of {week.replace('-', ' ')}
**Points:** 100

## Problem 1: {topics[0]} (25 points)
Implement {topics[0].lower()} solution.

## Problem 2: {topics[1]} (25 points)
Apply {topics[1].lower()} techniques.

## Problem 3: {topics[2]} (25 points)
Build {topics[2].lower()} application.

## Problem 4: {topics[3]} (25 points)
Create {topics[3].lower()} project."""
    
    with open(os.path.join(path, "assignments", f"Assignment-{week}.md"), 'w') as f:
        f.write(assignment)
    
    # Lab
    lab = f'''"""
Lab: {title}
{week.replace('-', ' ')} Practice
"""

print("=== {title} Lab ===")

# Exercise 1: {topics[0]}
print("Exercise 1: {topics[0]}")
# Implementation here

# Exercise 2: {topics[1]}
print("Exercise 2: {topics[1]}")
# Implementation here

# Exercise 3: {topics[2]}
print("Exercise 3: {topics[2]}")
# Implementation here

# Exercise 4: {topics[3]}
print("Exercise 4: {topics[3]}")
# Implementation here

print("Lab Complete!")'''
    
    with open(os.path.join(path, "labs", f"Lab-{week}.py"), 'w') as f:
        f.write(lab)
    
    # Project
    project = f"""# Project: {title}

**Duration:** {week.replace('-', ' ')}
**Skills:** {', '.join(topics)}

## Overview
Build comprehensive {title.lower()} application.

## Requirements
1. {topics[0]} implementation
2. {topics[1]} integration
3. {topics[2]} features
4. {topics[3]} optimization

## Deliverables
- Source code
- Documentation
- Test results
- Presentation"""
    
    with open(os.path.join(path, "projects", f"Project-{week}.md"), 'w') as f:
        f.write(project)
    
    print(f"Created {week}: {title}")

print("All weeks generated!")