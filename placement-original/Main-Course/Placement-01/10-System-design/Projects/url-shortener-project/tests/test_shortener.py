import pytest
from app.core.shortener import URLShortener
from app.core.security import SecurityManager

def test_generate_short_code():
    """Test short code generation."""
    shortener = URLShortener()

    code1 = shortener.generate_short_code()
    code2 = shortener.generate_short_code()

    assert len(code1) == 6
    assert len(code2) == 6
    assert code1 != code2  # Should be unique

    # Test custom length
    code3 = shortener.generate_short_code(8)
    assert len(code3) == 8

def test_url_validation():
    """Test URL validation."""
    shortener = URLShortener()

    # Valid URLs
    assert shortener._is_valid_url('https://www.example.com')
    assert shortener._is_valid_url('http://example.com/path?query=value')

    # Invalid URLs
    assert not shortener._is_valid_url('not-a-url')
    assert not shortener._is_valid_url('javascript:alert("xss")')
    assert not shortener._is_valid_url('data:text/html,<script>alert("xss")</script>')

def test_security_validation():
    """Test security manager validation."""
    security = SecurityManager()

    # Valid URLs
    assert security.validate_url('https://www.example.com')
    assert security.validate_url('http://example.com')

    # Invalid URLs
    assert not security.validate_url('javascript:alert(1)')
    assert not security.validate_url('data:text/html,<script>')
    assert not security.validate_url('vbscript:msgbox("xss")')

def test_rate_limiting():
    """Test rate limiting functionality."""
    from app import redis_client
    security = SecurityManager()

    # Clear any existing rate limit data
    redis_client.flushall()

    # Should not be rate limited initially
    assert not security.rate_limiter.is_rate_limited('test_client', limit=2, window=60)

    # Should still not be rate limited after first call
    assert not security.rate_limiter.is_rate_limited('test_client', limit=2, window=60)

    # Should be rate limited after exceeding limit
    assert security.rate_limiter.is_rate_limited('test_client', limit=2, window=60)