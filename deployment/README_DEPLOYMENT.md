# Dhaka Venture - VPS Deployment Guide

## Prerequisites
- Hostinger KVM VPS with Ubuntu 22.04+
- Nginx installed
- Node.js 18+ installed (for building)

## Step 1: Build the Project

On your local machine or on the VPS:

```bash
npm install
npm run build
```

This creates a `dist/` folder with the production-ready static files.

## Step 2: Upload to VPS

```bash
# Create the directory on VPS
ssh user@your-vps-ip "mkdir -p /var/www/dhaka-venture"

# Upload the dist folder
scp -r dist/* user@your-vps-ip:/var/www/dhaka-venture/dist/
```

Or clone the repo on VPS and build there:

```bash
cd /var/www/dhaka-venture
git clone <your-repo-url> .
npm install
npm run build
```

## Step 3: Configure Nginx

```bash
# Copy nginx config
sudo cp deployment/nginx.conf /etc/nginx/sites-available/dhaka-venture

# Edit the config - replace yourdomain.com with your actual domain
sudo nano /etc/nginx/sites-available/dhaka-venture

# Enable the site
sudo ln -s /etc/nginx/sites-available/dhaka-venture /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Step 4: SSL with Let's Encrypt (Recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Step 5: Avoiding Port Conflicts

Since another website runs on this VPS, ensure:
- Each site has its own `server` block in Nginx
- Use different `server_name` directives for each domain
- Nginx listens on port 80/443 and routes by domain name — no conflicts

## Updating the Site

```bash
cd /var/www/dhaka-venture
git pull
npm install
npm run build
# The dist/ folder is updated — Nginx serves it automatically
```

## Architecture Notes

- **No backend required** — this is a fully static React SPA
- **Data storage** — uses browser `localStorage` for CMS content
- **No database needed** — all default content is bundled in the build
- Admin panel changes persist per-browser via localStorage
