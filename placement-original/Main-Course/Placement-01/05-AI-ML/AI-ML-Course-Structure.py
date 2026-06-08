#!/usr/bin/env python3
"""
AI/ML Course Structure Generator
Creates complete organized course structure
"""

import os
from pathlib import Path

def create_course_structure():
    """Create complete AI/ML course structure"""
    
    base_dir = Path("AI-ML-Complete-Course")
    base_dir.mkdir(exist_ok=True)
    
    # Course structure
    structure = {
        "00-Course-Overview": [
            "README.md",
            "Course-Syllabus.md", 
            "Prerequisites.md",
            "Learning-Objectives.md"
        ],
        
        "01-Python-Foundations": {
            "Week-01-Python-Basics": [
                "01-Variables-DataTypes.md",
                "02-Control-Structures.md", 
                "03-Functions.md",
                "04-Data-Structures.md",
                "labs/lab-01-basics.py",
                "assignments/assignment-01.py",
                "projects/calculator-project/"
            ],
            "Week-02-Advanced-Python": [
                "01-OOP-Concepts.md",
                "02-File-Handling.md",
                "03-Error-Handling.md", 
                "04-Modules-Packages.md",
                "labs/lab-02-oop.py",
                "assignments/assignment-02.py"
            ],
            "Week-03-NumPy": [
                "01-Array-Operations.md",
                "02-Linear-Algebra.md",
                "03-Statistical-Functions.md",
                "labs/lab-03-numpy.py",
                "assignments/assignment-03.py"
            ],
            "Week-04-Pandas": [
                "01-DataFrames.md",
                "02-Data-Cleaning.md", 
                "03-Data-Analysis.md",
                "labs/lab-04-pandas.py",
                "assignments/assignment-04.py"
            ]
        },
        
        "02-Machine-Learning": {
            "Week-05-ML-Introduction": [
                "01-ML-Concepts.md",
                "02-Scikit-Learn.md",
                "03-First-Models.md",
                "labs/lab-05-first-ml.py"
            ],
            "Week-06-Regression": [
                "01-Linear-Regression.md",
                "02-Polynomial-Regression.md",
                "03-Regularization.md",
                "labs/lab-06-regression.py"
            ],
            "Week-07-Classification": [
                "01-Logistic-Regression.md",
                "02-Decision-Trees.md",
                "03-SVM.md",
                "labs/lab-07-classification.py"
            ],
            "Week-08-Unsupervised": [
                "01-Clustering.md",
                "02-PCA.md",
                "03-Anomaly-Detection.md",
                "labs/lab-08-clustering.py"
            ]
        },
        
        "03-Deep-Learning": {
            "Week-09-Neural-Networks": [
                "01-Perceptron.md",
                "02-MLP.md",
                "03-Backpropagation.md",
                "labs/lab-09-neural-nets.py"
            ],
            "Week-10-TensorFlow": [
                "01-TensorFlow-Basics.md",
                "02-Keras-API.md",
                "03-Model-Training.md",
                "labs/lab-10-tensorflow.py"
            ],
            "Week-11-CNNs": [
                "01-Convolution.md",
                "02-CNN-Architecture.md",
                "03-Transfer-Learning.md",
                "labs/lab-11-cnn.py"
            ],
            "Week-12-RNNs": [
                "01-RNN-Basics.md",
                "02-LSTM-GRU.md",
                "03-Sequence-Models.md",
                "labs/lab-12-rnn.py"
            ]
        },
        
        "04-Advanced-Topics": {
            "Week-13-NLP": [
                "01-Text-Processing.md",
                "02-Word-Embeddings.md",
                "03-Transformers.md",
                "labs/lab-13-nlp.py"
            ],
            "Week-14-Computer-Vision": [
                "01-Image-Processing.md",
                "02-Object-Detection.md",
                "03-GANs.md",
                "labs/lab-14-cv.py"
            ],
            "Week-15-MLOps": [
                "01-Model-Deployment.md",
                "02-Monitoring.md",
                "03-CI-CD.md",
                "labs/lab-15-mlops.py"
            ],
            "Week-16-Capstone": [
                "01-Project-Planning.md",
                "02-Implementation.md",
                "03-Presentation.md",
                "projects/capstone-project/"
            ]
        },
        
        "05-Resources": [
            "datasets/",
            "code-examples/",
            "cheat-sheets/",
            "additional-reading.md"
        ],
        
        "06-Assessments": [
            "quizzes/",
            "assignments/", 
            "projects/",
            "final-exam/"
        ],
        
        "07-Tools-Setup": [
            "requirements.txt",
            "environment.yml",
            "installation-guide.md"
        ]
    }
    
    # Create structure
    def create_structure(path, items):
        for item in items:
            if isinstance(item, dict):
                for key, value in item.items():
                    folder_path = path / key
                    folder_path.mkdir(exist_ok=True)
                    create_structure(folder_path, value)
            elif isinstance(item, str):
                if item.endswith('/'):
                    (path / item).mkdir(exist_ok=True)
                else:
                    file_path = path / item
                    file_path.parent.mkdir(parents=True, exist_ok=True)
                    if not file_path.exists():
                        file_path.touch()
    
    for folder, contents in structure.items():
        folder_path = base_dir / folder
        folder_path.mkdir(exist_ok=True)
        if isinstance(contents, list):
            create_structure(folder_path, contents)
        elif isinstance(contents, dict):
            create_structure(folder_path, [contents])
    
    print(f"✅ Course structure created at: {base_dir.absolute()}")
    return base_dir

if __name__ == "__main__":
    create_course_structure()