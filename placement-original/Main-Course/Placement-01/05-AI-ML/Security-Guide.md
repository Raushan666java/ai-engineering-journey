# 🔒 AI/ML Course Security Guide

## 🚨 Security Updates Applied

### Critical Vulnerabilities Fixed:
- **TensorFlow**: Updated to 2.15.0+ (fixes arbitrary code injection)
- **PyTorch**: Updated to 2.1.0+ (fixes RCE vulnerability)
- **NLTK**: Updated to 3.8.2+ (fixes remote code execution)
- **MLflow**: Updated to 2.8.0+ (fixes local file inclusion)
- **Joblib**: Updated to 1.3.0+ (fixes arbitrary code execution)

### High Priority Updates:
- **Scikit-learn**: 1.3.0+ (denial of service fix)
- **LightGBM**: 4.0.0+ (RCE vulnerability fix)
- **Pillow**: 10.0.0+ (ReDoS vulnerability fix)
- **Flask**: 3.0.0+ (session caching fix)
- **Requests**: 2.31.0+ (certificate verification fix)

## 🛡️ Security Best Practices

### 1. Environment Security
```bash
# Always use virtual environments
python -m venv ai_ml_secure_env
source ai_ml_secure_env/bin/activate  # Linux/Mac
ai_ml_secure_env\Scripts\activate     # Windows

# Install from secure requirements
pip install -r requirements.txt
```

### 2. Package Management
- Always use pinned versions
- Regular security audits: `pip audit`
- Update packages regularly
- Use trusted package sources only

### 3. Data Security
- Never commit sensitive data
- Use environment variables for secrets
- Validate all input data
- Sanitize file paths

### 4. Model Security
- Validate model files before loading
- Use `weights_only=True` with PyTorch
- Scan pickled models for malicious code
- Implement model versioning

## 🔧 Installation Commands

```bash
# Secure installation
pip install --upgrade pip
pip install -r requirements.txt

# Verify installations
python -c "import tensorflow; print(tensorflow.__version__)"
python -c "import torch; print(torch.__version__)"
```