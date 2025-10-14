#!/bin/bash

# Stamina Gym Landing Page - Replit Deployment Script
echo "🏋️ Setting up Stamina Fitness Center Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install additional dependencies for Tailwind CSS
echo "🎨 Setting up Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer

# Build the project
echo "🔨 Building project..."
npm run build

# Start development server
echo "🚀 Starting development server..."
npm start

echo "✅ Setup complete! Your gym landing page is ready!"
echo "🌐 The app should be running on the provided URL"
echo "📱 Features included:"
echo "   - Indonesian translation"
echo "   - Local assets (no external dependencies)"
echo "   - SEO optimized"
echo "   - Mobile responsive"
echo "   - Tailwind CSS styling"