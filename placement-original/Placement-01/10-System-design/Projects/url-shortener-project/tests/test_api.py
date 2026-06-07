import pytest
from app import create_app
from app.models import URL
from app.core.shortener import URLShortener

@pytest.fixture
def app():
    """Create and configure a test app instance."""
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

    with app.app_context():
        from app import db
        db.create_all()
        yield app

@pytest.fixture
def client(app):
    """A test client for the app."""
    return app.test_client()

@pytest.fixture
def shortener(app):
    """URL shortener instance."""
    return URLShortener()

def test_shorten_url(client, shortener):
    """Test URL shortening functionality."""
    response = client.post('/api/v1/shorten', json={
        'original_url': 'https://www.example.com'
    })

    assert response.status_code == 201
    data = response.get_json()
    assert 'short_url' in data
    assert 'short_code' in data
    assert data['original_url'] == 'https://www.example.com'

def test_redirect_url(client, shortener):
    """Test URL redirection."""
    # First shorten a URL
    response = client.post('/api/v1/shorten', json={
        'original_url': 'https://www.example.com'
    })
    short_code = response.get_json()['short_code']

    # Then test redirect
    response = client.get(f'/{short_code}')
    assert response.status_code == 302
    assert response.headers['Location'] == 'https://www.example.com'

def test_invalid_url(client):
    """Test invalid URL handling."""
    response = client.post('/api/v1/shorten', json={
        'original_url': 'not-a-valid-url'
    })

    assert response.status_code == 400
    data = response.get_json()
    assert 'error' in data

def test_custom_alias(client, shortener):
    """Test custom alias functionality."""
    response = client.post('/api/v1/shorten', json={
        'original_url': 'https://www.example.com',
        'custom_alias': 'my-link'
    })

    assert response.status_code == 201
    data = response.get_json()
    assert data['short_code'] == 'my-link'

def test_duplicate_custom_alias(client, shortener):
    """Test duplicate custom alias handling."""
    # Create first URL with custom alias
    client.post('/api/v1/shorten', json={
        'original_url': 'https://www.example.com',
        'custom_alias': 'my-link'
    })

    # Try to create another with same alias
    response = client.post('/api/v1/shorten', json={
        'original_url': 'https://www.google.com',
        'custom_alias': 'my-link'
    })

    assert response.status_code == 400
    data = response.get_json()
    assert 'error' in data

def test_url_not_found(client):
    """Test handling of non-existent short codes."""
    response = client.get('/nonexistent')
    assert response.status_code == 404

def test_analytics_endpoint(client, shortener):
    """Test analytics endpoint."""
    # Create a URL
    response = client.post('/api/v1/shorten', json={
        'original_url': 'https://www.example.com'
    })
    short_code = response.get_json()['short_code']

    # Get analytics
    response = client.get(f'/api/v1/analytics/{short_code}')
    assert response.status_code == 200
    data = response.get_json()
    assert 'basic_stats' in data
    assert 'total_clicks' in data