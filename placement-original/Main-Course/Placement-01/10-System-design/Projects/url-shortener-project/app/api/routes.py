from flask import Blueprint, request, jsonify, redirect, abort
from datetime import datetime, timedelta
from app.core.shortener import URLShortener
from app.core.cache import AnalyticsManager
from app.core.security import security_manager
from app.models import URL
from app import db

api_bp = Blueprint('api', __name__)

shortener = URLShortener()
analytics_manager = AnalyticsManager()

@api_bp.route('/shorten', methods=['POST'])
@security_manager.rate_limit_decorator(limit=50)  # 50 requests per hour
def shorten_url():
    """Shorten a URL"""
    try:
        data = request.get_json()

        if not data or 'original_url' not in data:
            return jsonify({'error': 'original_url is required'}), 400

        original_url = data['original_url']
        custom_alias = data.get('custom_alias')
        expires_in = data.get('expires_in')  # e.g., "7d", "30d", "1h"

        # Validate URL
        if not security_manager.validate_url(original_url):
            return jsonify({'error': 'Invalid URL format'}), 400

        # Parse expiration
        expires_at = None
        if expires_in:
            expires_at = parse_expiration(expires_in)

        # Shorten URL
        short_code = shortener.shorten_url(
            original_url=original_url,
            custom_alias=custom_alias,
            expires_at=expires_at
        )

        # Build response
        base_url = request.host_url.rstrip('/')
        short_url = f"{base_url}/{short_code}"

        response = {
            'short_url': short_url,
            'short_code': short_code,
            'original_url': original_url,
            'expires_at': expires_at.isoformat() if expires_at else None
        }

        return jsonify(response), 201

    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@api_bp.route('/analytics/<short_code>', methods=['GET'])
def get_analytics(short_code):
    """Get URL analytics"""
    try:
        analytics = analytics_manager.get_analytics(short_code)

        if not analytics:
            return jsonify({'error': 'URL not found'}), 404

        return jsonify(analytics), 200

    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@api_bp.route('/url/<short_code>', methods=['GET'])
def get_url_info(short_code):
    """Get URL information"""
    try:
        stats = shortener.get_url_stats(short_code)

        if not stats:
            return jsonify({'error': 'URL not found'}), 404

        return jsonify(stats), 200

    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@api_bp.route('/url/<short_code>', methods=['DELETE'])
def delete_url(short_code):
    """Delete a URL (soft delete)"""
    try:
        url_record = URL.query.filter_by(short_code=short_code).first()

        if not url_record:
            return jsonify({'error': 'URL not found'}), 404

        # Soft delete
        url_record.is_active = False
        db.session.commit()

        # Remove from cache
        shortener._cache_url(short_code, "", ttl=1)  # Expire immediately

        return jsonify({'message': 'URL deleted successfully'}), 200

    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

def register_redirect_route(app):
    """Register the redirect route with the main app"""

    @app.route('/<short_code>')
    def redirect_url(short_code):
        """Redirect to original URL"""
        try:
            original_url = shortener.get_original_url(short_code)

            if not original_url:
                abort(404, "URL not found or expired")

            # Track click asynchronously
            request_data = {
                'ip_address': request.remote_addr,
                'user_agent': request.headers.get('User-Agent'),
                'referrer': request.headers.get('Referer')
            }

            # Update click count
            shortener.increment_click_count(short_code)

            # Track analytics (fire and forget)
            try:
                analytics_manager.track_click(short_code, request_data)
            except Exception:
                pass  # Don't fail redirect if analytics fails

            return redirect(original_url, code=302)

        except Exception as e:
            abort(500, "Internal server error")

def parse_expiration(expires_in: str) -> datetime:
    """Parse expiration string like '7d', '30d', '1h'"""
    now = datetime.utcnow()

    if expires_in.endswith('h'):
        hours = int(expires_in[:-1])
        return now + timedelta(hours=hours)
    elif expires_in.endswith('d'):
        days = int(expires_in[:-1])
        return now + timedelta(days=days)
    elif expires_in.endswith('w'):
        weeks = int(expires_in[:-1])
        return now + timedelta(weeks=weeks)
    else:
        raise ValueError("Invalid expiration format. Use '1h', '7d', '1w', etc.")