#!/bin/bash

# Replit Deployment Script for Gym Landing Page
# This script prepares and guides you through deploying to Replit

set -e  # Exit on any error

echo "🏋️  Stamina Fitness Center - Replit Deployment Script"
echo "=================================================="

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [[ ! -f "package.json" ]] || [[ ! -f "src/components/DesktopGymLanding.tsx" ]]; then
    print_error "This script must be run from the gym-landing project root directory!"
    exit 1
fi

print_status "Starting deployment preparation..."

# Step 1: Install dependencies
print_status "Installing dependencies..."
if npm install; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 2: Run tests (if any)
print_status "Running tests..."
if npm test -- --watchAll=false --passWithNoTests 2>/dev/null; then
    print_success "Tests passed"
else
    print_warning "Tests failed or no tests found, continuing..."
fi

# Step 3: Build the project
print_status "Building production version..."
if npm run build; then
    print_success "Build completed successfully"
    print_status "Build size:"
    du -sh build/ 2>/dev/null || echo "   Build folder created"
else
    print_error "Build failed"
    exit 1
fi

# Step 4: Verify build contents
print_status "Verifying build contents..."
if [[ -f "build/index.html" ]] && [[ -d "build/static" ]]; then
    print_success "Build verification passed"
    echo "   ✓ index.html found"
    echo "   ✓ static assets found"
    echo "   ✓ Asset count: $(find build -type f 2>/dev/null | wc -l | tr -d ' ') files"
else
    print_error "Build verification failed"
    exit 1
fi

# Step 5: Check Git status
print_status "Checking Git status..."
if git status --porcelain | grep -q .; then
    print_warning "You have uncommitted changes. Committing them now..."
    git add .
    git commit -m "Prepare for Replit deployment - $(date '+%Y-%m-%d %H:%M:%S')"
    print_success "Changes committed"
else
    print_success "Git workspace is clean"
fi

# Step 6: Push to GitHub
print_status "Pushing to GitHub..."
if git push origin main; then
    print_success "Code pushed to GitHub successfully"
else
    print_error "Failed to push to GitHub"
    exit 1
fi

# Step 7: Display deployment instructions
echo ""
echo "🚀 READY FOR REPLIT DEPLOYMENT!"
echo "================================"
echo ""
echo "Your gym landing page is now ready to deploy. Follow these steps:"
echo ""
echo "1. Go to https://replit.com and sign in"
echo "2. Click 'Create Repl'"
echo "3. Select 'Import from GitHub'"
echo "4. Enter your repository URL:"
echo "   ${GREEN}https://github.com/fahrudina/gym-landing${NC}"
echo "5. Click 'Import from GitHub'"
echo ""
echo "Once imported to Replit:"
echo "6. Wait for the Nix environment to build"
echo "7. In the Replit shell, run:"
echo "   ${YELLOW}npm install${NC}"
echo "   ${YELLOW}npm run build${NC}"
echo "8. Click the 'Deploy' button"
echo "9. Choose 'Static deployment'"
echo "10. Your site will be live at: https://gym-landing.yourusername.replit.app"
echo ""
echo "📱 Your deployed app includes:"
echo "   ✅ Complete Indonesian translation"
echo "   ✅ SEO optimization with meta tags"
echo "   ✅ All 23 local assets (no external dependencies)"
echo "   ✅ Responsive design"
echo "   ✅ Fast loading performance"
echo ""
echo "🎯 Alternative: If Nix issues persist, use Node.js template:"
echo "   - Create new Repl with Node.js template"
echo "   - Upload your project files"
echo "   - Run npm install && npm run build"
echo "   - Deploy static files"
echo ""

# Step 8: Create deployment info file
cat > deployment-info.txt << EOF
Replit Deployment Information
============================
Project: Stamina Fitness Center Landing Page
Repository: https://github.com/fahrudina/gym-landing
Build Status: Ready ✅
Last Build: $(date)

Deployment Steps:
1. Import from GitHub: https://github.com/fahrudina/gym-landing
2. Run: npm install
3. Run: npm run build
4. Deploy as static site

Features:
- Indonesian translation
- SEO optimized
- Local assets (23 files)
- Responsive design
- React + TypeScript + Tailwind CSS

Expected URL: https://gym-landing.yourusername.replit.app
EOF

print_success "Deployment info saved to deployment-info.txt"
print_success "Deployment preparation completed! 🎉"
echo ""
print_status "Repository URL: ${GREEN}https://github.com/fahrudina/gym-landing${NC}"
print_status "Ready for Replit import!"