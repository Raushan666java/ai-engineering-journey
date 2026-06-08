#!/usr/bin/env python3
"""
Lab 1.1: Python Environment Setup
Verify Python installation and test basic functionality
"""

import sys
import os
import datetime
import math
import random

def check_python_version():
    """Check Python version and installation"""
    print("=" * 50)
    print("PYTHON ENVIRONMENT CHECK")
    print("=" * 50)
    
    print(f"Python version: {sys.version}")
    print(f"Python executable: {sys.executable}")
    print(f"Platform: {sys.platform}")
    
    # Check if Python version is 3.8+
    if sys.version_info >= (3, 8):
        print("✅ Python version is compatible")
    else:
        print("❌ Python version should be 3.8 or higher")

def test_basic_operations():
    """Test basic Python operations"""
    print("\n" + "=" * 50)
    print("BASIC OPERATIONS TEST")
    print("=" * 50)
    
    # Math operations
    print(f"2 + 3 = {2 + 3}")
    print(f"10 / 3 = {10 / 3}")
    print(f"10 // 3 = {10 // 3}")
    print(f"2 ** 8 = {2 ** 8}")
    print(f"Square root of 16: {math.sqrt(16)}")
    
    # String operations
    name = "AI/ML Student"
    print(f"Hello, {name}!")
    print(f"Name length: {len(name)}")
    print(f"Uppercase: {name.upper()}")
    
    # List operations
    numbers = [1, 2, 3, 4, 5]
    print(f"Numbers: {numbers}")
    print(f"Sum: {sum(numbers)}")
    print(f"Average: {sum(numbers) / len(numbers)}")

def test_environment_info():
    """Display environment information"""
    print("\n" + "=" * 50)
    print("ENVIRONMENT INFORMATION")
    print("=" * 50)
    
    print(f"Current working directory: {os.getcwd()}")
    print(f"Current date and time: {datetime.datetime.now()}")
    print(f"Random number (1-100): {random.randint(1, 100)}")
    
    # Check available modules
    try:
        import json
        print("✅ json module available")
    except ImportError:
        print("❌ json module not available")
    
    try:
        import csv
        print("✅ csv module available")
    except ImportError:
        print("❌ csv module not available")

def main():
    """Main function to run all tests"""
    print("🚀 Starting Python Environment Setup Lab")
    
    check_python_version()
    test_basic_operations()
    test_environment_info()
    
    print("\n" + "=" * 50)
    print("LAB COMPLETION")
    print("=" * 50)
    print("✅ Environment setup lab completed successfully!")
    print("\nNext steps:")
    print("1. Create virtual environment: python -m venv ai_ml_env")
    print("2. Activate environment:")
    print("   - Linux/Mac: source ai_ml_env/bin/activate")
    print("   - Windows: ai_ml_env\\Scripts\\activate")
    print("3. Install packages: pip install jupyter numpy pandas matplotlib")

if __name__ == "__main__":
    main()