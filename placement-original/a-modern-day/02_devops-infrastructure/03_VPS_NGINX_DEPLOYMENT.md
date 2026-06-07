# 🌐 STAGE 2C — VPS, Nginx, SSL & Deployment

> **Level:** Intermediate | **Duration:** 1 Week

---

## 📋 Topics
1. VPS Setup (Ubuntu)
2. Server Security Hardening
3. Nginx Configuration
4. SSL with Let's Encrypt
5. Production Deployment Checklist
6. Monitoring & Logging

---

## 1. VPS Setup

### Initial Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Create deploy user
sudo adduser deploy
sudo usermod -aG sudo deploy
sudo usermod -aG docker deploy

# SSH key authentication
ssh-copy-id deploy@your_server_ip

# Disable password auth
sudo nano /etc/ssh/sshd_config
# PasswordAuthentication no
sudo systemctl restart sshd
```

### Install Essential Software
```bash
# Docker & Docker Compose
curl -fsSL https://get.docker.com | sh
sudo apt install docker-compose-plugin

# Node.js (if needed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Certbot (SSL)
sudo apt install certbot python3-certbot-nginx
```

---

## 2. Server Security

```bash
# Firewall (UFW)
sudo ufw allow 22/tcp      # SSH
sudo ufw allow 80/tcp      # HTTP
sudo ufw allow 443/tcp     # HTTPS
sudo ufw enable

# Fail2ban (brute force protection)
sudo apt install fail2ban
sudo systemctl enable fail2ban

# Automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

---

## 3. Nginx Configuration

### Laravel + AI Service Reverse Proxy
```nginx
# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    # Laravel app
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # AI Service API
    location /ai/ {
        proxy_pass http://localhost:8000/;
        proxy_set_header Host $host;
        proxy_read_timeout 120s;
    }

    # Static files
    location /static/ {
        alias /var/www/html/public/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    gzip_min_length 1000;
}
```

### Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo nginx -t          # Test config
sudo systemctl reload nginx
```

---

## 4. SSL with Let's Encrypt

```bash
# Get SSL certificate (free)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (already set up by certbot)
sudo certbot renew --dry-run

# Cron for renewal
sudo crontab -e
0 0 1 * * certbot renew --quiet
```

---

## 5. Production Deployment Checklist

```
✅ .env file configured (APP_ENV=production)
✅ APP_DEBUG=false
✅ Database migrated
✅ Config cached (php artisan config:cache)
✅ Routes cached (php artisan route:cache)
✅ Views cached (php artisan view:cache)
✅ Queue workers running (Supervisor)
✅ Scheduler configured (cron)
✅ SSL certificate active
✅ Firewall enabled
✅ Backups configured
✅ Monitoring set up
✅ Error logging (Sentry/Bugsnag)
```

---

## 6. Monitoring

### Basic Health Check Script
```bash
#!/bin/bash
# /usr/local/bin/health-check.sh
URLS=("https://yourdomain.com" "https://yourdomain.com/ai/health")

for url in "${URLS[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" != "200" ]; then
        echo "ALERT: $url returned $status" | mail -s "Health Check Failed" admin@example.com
    fi
done
```

### Process Monitoring
```bash
# Check Docker containers
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Disk usage
df -h

# Memory usage
free -h

# CPU load
htop
```

---

## 🎯 Practice Tasks
- [ ] Set up a VPS with Docker
- [ ] Configure Nginx reverse proxy
- [ ] Get SSL certificate with Let's Encrypt
- [ ] Deploy Laravel + AI service
- [ ] Set up basic monitoring

---

*Next: [Kubernetes & Scaling →](./04_KUBERNETES_SCALING.md)*
