import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_caching import Cache
import redis

# Global instances
db = SQLAlchemy()
cache = Cache()
redis_client = redis.Redis(host='localhost', port=6379, decode_responses=True)

def create_app():
    """Application factory pattern"""
    app = Flask(__name__)

    # Configuration
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
        'DATABASE_URL',
        'postgresql://postgres:password@localhost:5432/urlshortener'
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['CACHE_TYPE'] = 'redis'
    app.config['CACHE_REDIS_URL'] = os.getenv('REDIS_URL', 'redis://localhost:6379/0')

    # Initialize extensions
    db.init_app(app)
    cache.init_app(app)

    # Register blueprints
    from app.api.routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api/v1')

    # Register routes
    from app.api.routes import register_redirect_route
    register_redirect_route(app)

    # Create tables
    with app.app_context():
        db.create_all()

    return app