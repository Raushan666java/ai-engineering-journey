from datetime import datetime
from app import db

class URL(db.Model):
    """URL model for storing shortened URLs"""
    __tablename__ = 'urls'

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    short_code = db.Column(db.String(10), unique=True, nullable=False, index=True)
    original_url = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.BigInteger, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    expires_at = db.Column(db.DateTime, nullable=True, index=True)
    is_active = db.Column(db.Boolean, default=True)
    click_count = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f'<URL {self.short_code} -> {self.original_url[:50]}>'

    def to_dict(self):
        """Convert to dictionary for API responses"""
        return {
            'id': self.id,
            'short_code': self.short_code,
            'original_url': self.original_url,
            'created_at': self.created_at.isoformat(),
            'expires_at': self.expires_at.isoformat() if self.expires_at else None,
            'is_active': self.is_active,
            'click_count': self.click_count
        }

    @property
    def is_expired(self):
        """Check if URL has expired"""
        return self.expires_at and datetime.utcnow() > self.expires_at

class URLClick(db.Model):
    """Model for tracking URL clicks"""
    __tablename__ = 'url_clicks'

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    short_code = db.Column(db.String(10), nullable=False, index=True)
    clicked_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    ip_address = db.Column(db.String(45))
    user_agent = db.Column(db.Text)
    referrer = db.Column(db.String(500))
    country_code = db.Column(db.String(2), index=True)
    city = db.Column(db.String(100))

    def __repr__(self):
        return f'<URLClick {self.short_code} at {self.clicked_at}>'

    def to_dict(self):
        """Convert to dictionary"""
        return {
            'id': self.id,
            'short_code': self.short_code,
            'clicked_at': self.clicked_at.isoformat(),
            'ip_address': self.ip_address,
            'user_agent': self.user_agent,
            'referrer': self.referrer,
            'country_code': self.country_code,
            'city': self.city
        }