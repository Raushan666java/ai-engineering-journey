# 💻 Secure Coding - Complete Deep Dive

## Input Validation

### Whitelist vs Blacklist
```python
# Bad: Blacklist (can be bypassed)
def validate_username(username):
    forbidden = ['admin', 'root', 'system']
    if username in forbidden:
        return False
    return True
# Bypass: "Admin", "ADMIN", "adm1n"

# Good: Whitelist
import re
def validate_username(username):
    # Only alphanumeric, 3-20 chars
    pattern = r'^[a-zA-Z0-9]{3,20}$'
    return bool(re.match(pattern, username))
```

### Input Sanitization
```python
import html
import bleach

# Escape HTML
user_input = "<script>alert('XSS')</script>"
safe_output = html.escape(user_input)
# Output: &lt;script&gt;alert(&#x27;XSS&#x27;)&lt;/script&gt;

# Allow specific HTML tags
allowed_tags = ['p', 'br', 'strong', 'em']
clean_html = bleach.clean(user_input, tags=allowed_tags, strip=True)

# URL validation
from urllib.parse import urlparse
def is_safe_url(url):
    parsed = urlparse(url)
    return parsed.scheme in ['http', 'https'] and \
           not parsed.netloc.startswith('192.168.')
```

---

## Authentication Security

### Password Storage
```python
import bcrypt
import secrets

# Hash password
def hash_password(password):
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode(), salt)

# Verify password
def verify_password(password, hashed):
    return bcrypt.checkpw(password.encode(), hashed)

# Generate secure random token
def generate_token():
    return secrets.token_urlsafe(32)

# Password strength checker
import re
def is_strong_password(password):
    if len(password) < 12:
        return False, "Too short"
    if not re.search(r'[a-z]', password):
        return False, "Need lowercase"
    if not re.search(r'[A-Z]', password):
        return False, "Need uppercase"
    if not re.search(r'\d', password):
        return False, "Need digit"
    if not re.search(r'[!@#$%^&*]', password):
        return False, "Need special char"
    return True, "Strong"
```

### Session Management
```python
from flask import session
import secrets
import time

# Secure session configuration
app.config['SECRET_KEY'] = secrets.token_hex(32)
app.config['SESSION_COOKIE_SECURE'] = True  # HTTPS only
app.config['SESSION_COOKIE_HTTPONLY'] = True  # No JavaScript access
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'  # CSRF protection
app.config['PERMANENT_SESSION_LIFETIME'] = 3600  # 1 hour

# Session fixation prevention
@app.route('/login', methods=['POST'])
def login():
    user = authenticate(request.form['username'], request.form['password'])
    if user:
        session.clear()  # Clear old session
        session.regenerate()  # New session ID
        session['user_id'] = user.id
        session['login_time'] = time.time()
        return redirect('/dashboard')
    return "Invalid credentials", 401

# Session timeout check
@app.before_request
def check_session_timeout():
    if 'login_time' in session:
        if time.time() - session['login_time'] > 3600:
            session.clear()
            return redirect('/login')
```

### Multi-Factor Authentication
```python
import pyotp
import qrcode

# Generate MFA secret
def setup_mfa(user_id):
    secret = pyotp.random_base32()
    db.save_mfa_secret(user_id, secret)
    
    # Generate QR code
    totp = pyotp.TOTP(secret)
    uri = totp.provisioning_uri(
        name=user.email,
        issuer_name="YourApp"
    )
    
    qr = qrcode.make(uri)
    return qr, secret

# Verify MFA token
def verify_mfa(user_id, token):
    secret = db.get_mfa_secret(user_id)
    totp = pyotp.TOTP(secret)
    return totp.verify(token, valid_window=1)
```

---

## SQL Injection Prevention

### Parameterized Queries
```python
import sqlite3

# Bad: String concatenation
def get_user(username):
    query = f"SELECT * FROM users WHERE username = '{username}'"
    return db.execute(query)
# Vulnerable to: username = "admin' OR '1'='1"

# Good: Parameterized query
def get_user(username):
    query = "SELECT * FROM users WHERE username = ?"
    return db.execute(query, (username,))

# ORM (SQLAlchemy)
from sqlalchemy import select
def get_user(username):
    stmt = select(User).where(User.username == username)
    return session.execute(stmt).scalar()
```

### Stored Procedures
```sql
-- Create stored procedure
CREATE PROCEDURE GetUser(@username VARCHAR(50))
AS
BEGIN
    SELECT * FROM users WHERE username = @username
END

-- Call from Python
cursor.execute("EXEC GetUser ?", (username,))
```

---

## XSS Prevention

### Output Encoding
```python
from flask import Markup
import html

# Template (Jinja2 auto-escapes)
{{ user_input }}  # Automatically escaped

# Manual escaping
safe_output = html.escape(user_input)

# Allow specific HTML (sanitize)
import bleach
clean = bleach.clean(
    user_input,
    tags=['p', 'br', 'strong', 'em'],
    attributes={'a': ['href', 'title']},
    strip=True
)
```

### Content Security Policy
```python
@app.after_request
def set_csp(response):
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self' https://cdn.example.com; "
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: https:; "
        "font-src 'self' https://fonts.gstatic.com; "
        "connect-src 'self' https://api.example.com; "
        "frame-ancestors 'none';"
    )
    return response
```

---

## CSRF Prevention

### CSRF Tokens
```python
from flask_wtf.csrf import CSRFProtect
import secrets

csrf = CSRFProtect(app)

# Generate token
def generate_csrf_token():
    if '_csrf_token' not in session:
        session['_csrf_token'] = secrets.token_hex(32)
    return session['_csrf_token']

# Validate token
@app.route('/transfer', methods=['POST'])
def transfer():
    token = request.form.get('csrf_token')
    if not token or token != session.get('_csrf_token'):
        abort(403)
    # Process transfer
```

### SameSite Cookie
```python
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'
# Strict: Never sent with cross-site requests
# Lax: Sent with top-level navigation (GET)
# None: Always sent (requires Secure flag)
```

---

## File Upload Security

### Secure File Upload
```python
import os
from werkzeug.utils import secure_filename
import magic

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file", 400
    
    file = request.files['file']
    
    # Check filename
    if not allowed_file(file.filename):
        return "Invalid file type", 400
    
    # Check file size
    file.seek(0, os.SEEK_END)
    size = file.tell()
    file.seek(0)
    if size > MAX_FILE_SIZE:
        return "File too large", 400
    
    # Verify file type (magic bytes)
    mime = magic.from_buffer(file.read(1024), mime=True)
    file.seek(0)
    if mime not in ['image/png', 'image/jpeg', 'application/pdf']:
        return "Invalid file type", 400
    
    # Secure filename
    filename = secure_filename(file.filename)
    
    # Generate unique filename
    unique_filename = f"{secrets.token_hex(16)}_{filename}"
    
    # Save outside web root
    upload_folder = '/var/uploads'  # Not /var/www/html
    filepath = os.path.join(upload_folder, unique_filename)
    file.save(filepath)
    
    # Set restrictive permissions
    os.chmod(filepath, 0o644)
    
    return {"filename": unique_filename}, 200
```

---

## API Security

### Rate Limiting
```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

@app.route("/api/data")
@limiter.limit("10 per minute")
def api_data():
    return {"data": "value"}
```

### API Authentication
```python
import jwt
from functools import wraps

SECRET_KEY = os.getenv('JWT_SECRET')

# Generate JWT
def generate_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')

# Verify JWT
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return {'error': 'Token missing'}, 401
        
        try:
            token = token.split()[1]  # Remove 'Bearer '
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            current_user = get_user(payload['user_id'])
        except jwt.ExpiredSignatureError:
            return {'error': 'Token expired'}, 401
        except jwt.InvalidTokenError:
            return {'error': 'Invalid token'}, 401
        
        return f(current_user, *args, **kwargs)
    return decorated

@app.route('/api/protected')
@token_required
def protected(current_user):
    return {'data': 'secret'}
```

---

## Error Handling

### Secure Error Messages
```python
# Bad: Exposes internal details
@app.errorhandler(Exception)
def handle_error(e):
    return str(e), 500
# Shows: "Database connection failed at line 42 in db.py"

# Good: Generic message to user, detailed log
import logging

@app.errorhandler(Exception)
def handle_error(e):
    # Log detailed error
    logging.error(f"Error: {str(e)}", exc_info=True)
    
    # Generic message to user
    return {"error": "An error occurred. Please try again."}, 500
```

---

## Logging & Monitoring

### Security Logging
```python
import logging
import json
from datetime import datetime

# Configure logging
logging.basicConfig(
    filename='security.log',
    level=logging.INFO,
    format='%(message)s'
)

def log_security_event(event_type, user_id, details):
    log_entry = {
        'timestamp': datetime.utcnow().isoformat(),
        'event_type': event_type,
        'user_id': user_id,
        'ip': request.remote_addr,
        'user_agent': request.headers.get('User-Agent'),
        'details': details
    }
    logging.info(json.dumps(log_entry))

# Log important events
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    user = authenticate(username, password)
    if user:
        log_security_event('login_success', user.id, {'username': username})
        return redirect('/dashboard')
    else:
        log_security_event('login_failure', None, {'username': username})
        return "Invalid credentials", 401
```

---

## Dependency Security

### Check Vulnerabilities
```bash
# Python
pip install safety
safety check

# Node.js
npm audit
npm audit fix

# Check specific package
pip show package-name
```

### Dependency Management
```python
# requirements.txt with pinned versions
Flask==2.3.0
SQLAlchemy==2.0.0
cryptography==41.0.0

# Use virtual environment
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Regular updates
pip list --outdated
```

---

## Summary

### Secure Coding Checklist
```
Input Validation:
✅ Whitelist validation
✅ Sanitize output
✅ Parameterized queries
✅ File upload validation

Authentication:
✅ Strong password policy
✅ Bcrypt/Argon2 hashing
✅ MFA implementation
✅ Secure session management

Authorization:
✅ Check permissions on every request
✅ Principle of least privilege
✅ Role-based access control

Data Protection:
✅ HTTPS everywhere
✅ Encrypt sensitive data
✅ Secure key management
✅ Data minimization

Error Handling:
✅ Generic error messages
✅ Detailed logging
✅ Fail securely

Security Headers:
✅ CSP
✅ X-Frame-Options
✅ X-Content-Type-Options
✅ HSTS
```

---

**Next:** [06_Cloud_Security.md](./06_Cloud_Security.md)
