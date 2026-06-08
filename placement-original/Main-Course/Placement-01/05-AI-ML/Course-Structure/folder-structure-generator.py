#!/usr/bin/env python3
"""
AI/ML Course Folder Structure Generator
Creates complete directory structure for the 20-week AI/ML course
"""

import os
from pathlib import Path

def create_week_structure(base_path, week_name):
    """Create standard structure for each week"""
    week_path = base_path / week_name
    
    # Standard folders for each week
    folders = [
        "Lectures",
        "Labs", 
        "Assignments",
        "Projects",
        "Datasets",
        "Solutions",
        "Resources",
        "Quizzes"
    ]
    
    for folder in folders:
        (week_path / folder).mkdir(parents=True, exist_ok=True)
    
    # Create standard files
    files = {
        "README.md": f"# {week_name}\n\n## Overview\n\n## Learning Objectives\n\n## Materials\n",
        "requirements.txt": "# Week-specific Python packages\n",
        "environment.yml": f"name: {week_name.lower()}\nchannels:\n  - defaults\ndependencies:\n  - python=3.8\n"
    }
    
    for filename, content in files.items():
        with open(week_path / filename, 'w') as f:
            f.write(content)

def create_course_structure():
    """Create complete AI/ML course structure"""
    
    base_dir = Path("AI-ML-Course")
    base_dir.mkdir(exist_ok=True)
    
    # Phase 1: Foundations
    phase1_weeks = [
        "Week-01-Python-Basics",
        "Week-02-Advanced-Python", 
        "Week-03-NumPy",
        "Week-04-Pandas"
    ]
    
    phase1_path = base_dir / "Phase-1-Foundations"
    for week in phase1_weeks:
        create_week_structure(phase1_path, week)
    
    # Phase 2: Machine Learning
    phase2_weeks = [
        "Week-05-ML-Introduction",
        "Week-06-Regression",
        "Week-07-Classification", 
        "Week-08-Unsupervised-Learning",
        "Week-09-Model-Evaluation",
        "Week-10-Feature-Engineering",
        "Week-11-Ensemble-Methods",
        "Week-12-Time-Series"
    ]
    
    phase2_path = base_dir / "Phase-2-Machine-Learning"
    for week in phase2_weeks:
        create_week_structure(phase2_path, week)
    
    # Phase 3: Deep Learning
    phase3_weeks = [
        "Week-13-Neural-Networks",
        "Week-14-TensorFlow-Keras",
        "Week-15-CNNs",
        "Week-16-RNNs"
    ]
    
    phase3_path = base_dir / "Phase-3-Deep-Learning"
    for week in phase3_weeks:
        create_week_structure(phase3_path, week)
    
    # Phase 4: Advanced Topics
    phase4_weeks = [
        "Week-17-NLP",
        "Week-18-Computer-Vision",
        "Week-19-MLOps",
        "Week-20-Capstone-Project"
    ]
    
    phase4_path = base_dir / "Phase-4-Advanced-Topics"
    for week in phase4_weeks:
        create_week_structure(phase4_path, week)
    
    # Additional directories
    additional_dirs = [
        "Course-Materials/Syllabus",
        "Course-Materials/Schedule", 
        "Course-Materials/Assessment-Rubrics",
        "Course-Materials/Learning-Objectives",
        "Code-Examples/Python-Basics",
        "Code-Examples/Machine-Learning",
        "Code-Examples/Deep-Learning",
        "Code-Examples/Advanced-Topics",
        "Datasets/Sample-Data",
        "Datasets/Project-Data",
        "Tools-Setup/Environment-Files",
        "Tools-Setup/Installation-Guides",
        "Assignments/Weekly-Assignments",
        "Assignments/Solutions",
        "Projects/Mini-Projects",
        "Projects/Major-Projects",
        "Resources/Books",
        "Resources/Papers",
        "Resources/Videos",
        "Resources/External-Links",
        "Assessments/Quizzes",
        "Assessments/Exams",
        "Assessments/Rubrics",
        "Certification/Requirements",
        "Certification/Templates"
    ]
    
    for dir_path in additional_dirs:
        (base_dir / dir_path).mkdir(parents=True, exist_ok=True)
    
    print("✅ AI/ML Course structure created successfully!")
    print(f"📁 Base directory: {base_dir.absolute()}")

if __name__ == "__main__":
    create_course_structure()