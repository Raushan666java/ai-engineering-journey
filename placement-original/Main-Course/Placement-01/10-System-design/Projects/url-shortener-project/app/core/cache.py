from app import cache
from app.models import URLClick
from app import db
import requests
import json

class CacheManager:
    """Cache management for URL shortener"""

    def __init__(self):
        self.cache = cache

    def get_url(self, short_code: str) -> str:
        """Get URL from cache"""
        return self.cache.get(f'url:{short_code}')

    def set_url(self, short_code: str, original_url: str, timeout: int = 3600):
        """Cache URL with timeout"""
        self.cache.set(f'url:{short_code}', original_url, timeout=timeout)

    def increment_clicks(self, short_code: str):
        """Increment click counter in cache"""
        key = f'clicks:{short_code}'
        current = self.cache.get(key) or 0
        self.cache.set(key, current + 1, timeout=86400)  # 24 hours

    def get_clicks(self, short_code: str) -> int:
        """Get click count from cache"""
        return self.cache.get(f'clicks:{short_code}') or 0

class AnalyticsManager:
    """Analytics and click tracking"""

    def __init__(self):
        self.cache_manager = CacheManager()

    def track_click(self, short_code: str, request_data: dict):
        """Track URL click with metadata"""

        # Extract request data
        ip_address = request_data.get('ip_address')
        user_agent = request_data.get('user_agent')
        referrer = request_data.get('referrer')

        # Get geographic data
        geo_data = self._get_geo_data(ip_address) if ip_address else {}

        # Create click record
        click_record = URLClick(
            short_code=short_code,
            ip_address=ip_address,
            user_agent=user_agent,
            referrer=referrer,
            country_code=geo_data.get('country_code'),
            city=geo_data.get('city')
        )

        # Save to database
        db.session.add(click_record)
        db.session.commit()

        # Update cache
        self.cache_manager.increment_clicks(short_code)

    def _get_geo_data(self, ip_address: str) -> dict:
        """Get geographic data from IP address"""
        try:
            # Using ipapi.co for free geo data (rate limited)
            response = requests.get(f'http://ipapi.co/{ip_address}/json/', timeout=2)
            if response.status_code == 200:
                data = response.json()
                return {
                    'country_code': data.get('country_code'),
                    'city': data.get('city')
                }
        except Exception:
            pass

        return {}

    def get_analytics(self, short_code: str) -> dict:
        """Get comprehensive analytics for URL"""

        # Get basic stats
        from app.core.shortener import URLShortener
        shortener = URLShortener()
        stats = shortener.get_url_stats(short_code)

        if not stats:
            return None

        # Get detailed click analytics
        clicks = URLClick.query.filter_by(short_code=short_code).all()

        # Aggregate by country
        country_stats = {}
        referrer_stats = {}
        daily_clicks = {}

        for click in clicks:
            # Country stats
            country = click.country_code or 'Unknown'
            country_stats[country] = country_stats.get(country, 0) + 1

            # Referrer stats
            referrer = click.referrer or 'Direct'
            referrer_stats[referrer] = referrer_stats.get(referrer, 0) + 1

            # Daily stats
            date_key = click.clicked_at.date().isoformat()
            daily_clicks[date_key] = daily_clicks.get(date_key, 0) + 1

        return {
            'basic_stats': stats,
            'total_clicks': len(clicks),
            'clicks_by_country': country_stats,
            'clicks_by_referrer': referrer_stats,
            'daily_clicks': [{'date': date, 'clicks': count}
                           for date, count in sorted(daily_clicks.items())]
        }