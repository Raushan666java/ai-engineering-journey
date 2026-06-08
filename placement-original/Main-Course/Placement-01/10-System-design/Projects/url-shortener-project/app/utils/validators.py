def validate_url_format(url: str) -> bool:
    """Validate basic URL format"""
    from urllib.parse import urlparse

    try:
        parsed = urlparse(url)
        return bool(parsed.scheme and parsed.netloc)
    except:
        return False

def sanitize_string(input_str: str, max_length: int = 1000) -> str:
    """Sanitize string input"""
    if not input_str:
        return ""

    # Remove dangerous characters
    dangerous = ['<', '>', '"', "'", ';', '--']
    sanitized = input_str

    for char in dangerous:
        sanitized = sanitized.replace(char, "")

    return sanitized[:max_length].strip()

def is_valid_short_code(code: str) -> bool:
    """Validate short code format"""
    if not code or len(code) < 3 or len(code) > 10:
        return False

    # Only allow alphanumeric characters
    return code.replace('_', '').replace('-', '').isalnum()