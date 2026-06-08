import random
import string
from urllib.parse import urlparse
from app import redis_client
from app.models import URL, db

class URLShortener:
    """Core URL shortening logic"""

    BASE62_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    def __init__(self):
        self.redis = redis_client

    def generate_short_code(self, length: int = 6) -> str:
        """Generate a unique short code"""
        while True:
            # Generate random code
            code = ''.join(random.choices(self.BASE62_CHARS, k=length))

            # Check if code exists in cache or database
            if not self._code_exists(code):
                return code

    def _code_exists(self, code: str) -> bool:
        """Check if short code already exists"""
        # Check cache first
        if self.redis.exists(f'url:{code}'):
            return True

        # Check database
        return URL.query.filter_by(short_code=code).first() is not None

    def shorten_url(self, original_url: str, custom_alias: str = None,
                   expires_at=None, user_id=None) -> str:
        """Shorten a URL and save to database"""

        # Validate URL
        if not self._is_valid_url(original_url):
            raise ValueError("Invalid URL format")

        # Use custom alias or generate new code
        short_code = custom_alias or self.generate_short_code()

        # Check custom alias availability
        if custom_alias and self._code_exists(custom_alias):
            raise ValueError("Custom alias already exists")

        # Create URL record
        url_record = URL(
            short_code=short_code,
            original_url=original_url,
            user_id=user_id,
            expires_at=expires_at
        )

        # Save to database
        db.session.add(url_record)
        db.session.commit()

        # Cache the URL
        self._cache_url(short_code, original_url)

        return short_code

    def get_original_url(self, short_code: str) -> str:
        """Get original URL from short code"""

        # Check cache first
        cached_url = self.redis.get(f'url:{short_code}')
        if cached_url:
            return cached_url

        # Check database
        url_record = URL.query.filter_by(short_code=short_code).first()
        if not url_record or not url_record.is_active or url_record.is_expired:
            return None

        # Cache for future requests
        self._cache_url(short_code, url_record.original_url)

        return url_record.original_url

    def increment_click_count(self, short_code: str):
        """Increment click count for analytics"""
        # Update database asynchronously
        url_record = URL.query.filter_by(short_code=short_code).first()
        if url_record:
            url_record.click_count += 1
            db.session.commit()

        # Update cache
        self.redis.incr(f'clicks:{short_code}')

    def _cache_url(self, short_code: str, original_url: str, ttl: int = 3600):
        """Cache URL in Redis"""
        self.redis.setex(f'url:{short_code}', ttl, original_url)

    def _is_valid_url(self, url: str) -> bool:
        """Validate URL format and safety"""
        try:
            parsed = urlparse(url)

            # Check scheme
            if parsed.scheme not in ['http', 'https']:
                return False

            # Check for malicious patterns
            malicious_patterns = [
                'javascript:', 'data:', 'vbscript:',
                '<script', 'onclick=', 'onload='
            ]

            url_lower = url.lower()
            for pattern in malicious_patterns:
                if pattern in url_lower:
                    return False

            return bool(parsed.netloc)  # Must have a domain

        except Exception:
            return False

    def get_url_stats(self, short_code: str) -> dict:
        """Get URL statistics"""
        url_record = URL.query.filter_by(short_code=short_code).first()
        if not url_record:
            return None

        # Get cached click count
        cached_clicks = self.redis.get(f'clicks:{short_code}')
        click_count = int(cached_clicks) if cached_clicks else url_record.click_count

        return {
            'short_code': short_code,
            'original_url': url_record.original_url,
            'created_at': url_record.created_at.isoformat(),
            'click_count': click_count,
            'is_active': url_record.is_active,
            'expires_at': url_record.expires_at.isoformat() if url_record.expires_at else None
        }