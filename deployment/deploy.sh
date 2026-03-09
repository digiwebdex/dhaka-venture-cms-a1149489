#!/bin/bash
# Dhaka Venture - Quick Deploy Script
# Usage: ./deploy.sh

set -e

echo "=== Dhaka Venture Deployment ==="

# Build
echo "Building project..."
npm install
npm run build

# Setup directory
DEPLOY_DIR="/var/www/dhaka-venture"
echo "Deploying to $DEPLOY_DIR..."
sudo mkdir -p "$DEPLOY_DIR/dist"
sudo cp -r dist/* "$DEPLOY_DIR/dist/"

# Nginx config
echo "Setting up Nginx..."
sudo cp deployment/nginx.conf /etc/nginx/sites-available/dhaka-venture
sudo ln -sf /etc/nginx/sites-available/dhaka-venture /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

echo "=== Deployment complete! ==="
echo "Update server_name in /etc/nginx/sites-available/dhaka-venture with your domain."
