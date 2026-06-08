import time
import hashlib
from functools import wraps
from flask import request, jsonify
from app import redis_client

class RateLimiter:
    """Rate limiting implementation"""

    def __init__(self, redis_client):
        self.redis = redis_client

    def is_rate_limited(self, identifier: str, limit: int = 100,
                       window: int = 3600) -> bool:
        """Check if request is rate limited"""
        key = f'rate_limit:{identifier}:{int(time.time() / window)}'
        current_count = self.redis.get(key)

        if current_count and int(current_count) >= limit:
            return True

        # Increment counter
        self.redis.incr(key)
        self.redis.expire(key, window)

        return False

class SecurityManager:
    """Security and validation utilities"""

    def __init__(self):
        self.rate_limiter = RateLimiter(redis_client)

    def validate_url(self, url: str) -> bool:
        """Validate URL format and safety"""
        from urllib.parse import urlparse

        try:
            parsed = urlparse(url)

            # Check scheme
            if parsed.scheme not in ['http', 'https']:
                return False

            # Check for malicious patterns
            malicious_patterns = [
                'javascript:', 'data:', 'vbscript:',
                '<script', 'onclick=', 'onload=',
                'onerror=', 'onmouseover='
            ]

            url_lower = url.lower()
            for pattern in malicious_patterns:
                if pattern in url_lower:
                    return False

            # Check length
            if len(url) > 2048:
                return False

            return bool(parsed.netloc)

        except Exception:
            return False

    def generate_api_key(self, user_id: str) -> str:
        """Generate API key for user"""
        import secrets
        api_key = secrets.token_urlsafe(32)

        # Hash for storage (optional, depending on security requirements)
        hashed_key = hashlib.sha256(api_key.encode()).hexdigest()

        return api_key

    def validate_api_key(self, api_key: str) -> bool:
        """Validate API key format"""
        # Basic validation - should be 43 characters for urlsafe base64
        return len(api_key) == 43 and api_key.replace('-', '').replace('_', '').isalnum()

    def rate_limit_decorator(self, limit: int = 100, window: int = 3600):
        """Decorator for rate limiting"""
        def decorator(f):
            @wraps(f)
            def wrapped(*args, **kwargs):
                # Get client identifier (IP address for anonymous users)
                client_id = request.remote_addr

                if self.rate_limiter.is_rate_limited(client_id, limit, window):
                    return jsonify({
                        'error': 'Rate limit exceeded',
                        'retry_after': window
                    }), 429

                return f(*args, **kwargs)
            return wrapped
        return decorator

    def sanitize_input(self, input_string: str, max_length: int = 1000) -> str:
        """Sanitize user input"""
        if not input_string:
            return ""

        # Remove potentially dangerous characters
        dangerous_chars = ['<', '>', '"', "'", ';', '--', '/*', '*/']
        sanitized = input_string

        for char in dangerous_chars:
            sanitized = sanitized.replace(char, "")

        # Truncate if too long
        return sanitized[:max_length].strip()

# Global security manager instance
security_manager = SecurityManager()