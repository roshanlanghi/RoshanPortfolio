#!/bin/bash

# This script prepares the portfolio for GitHub Pages deployment

echo "Preparing portfolio for GitHub Pages deployment..."

# 1. Replace the main.tsx with main-github.tsx (temporarily for build)
echo "Backing up original main.tsx..."
cp client/src/main.tsx client/src/main.tsx.bak

echo "Using GitHub Pages version of main.tsx..."
cp client/src/main-github.tsx client/src/main.tsx

# 2. Build the project
echo "Building the project for GitHub Pages..."
npx vite build --config vite.github.config.ts

# 3. Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# 4. Restore the original main.tsx
echo "Restoring original main.tsx..."
mv client/src/main.tsx.bak client/src/main.tsx

echo ""
echo "Build complete! Files are in the 'dist' directory."
echo ""
echo "Next steps to deploy to GitHub:"
echo "1. Create a repository on GitHub named 'portfolio' if you haven't already"
echo "2. Initialize git in this project (if not already done)"
echo "3. Connect to your GitHub repository"
echo "4. Deploy using gh-pages package"
echo ""
echo "Quick commands:"
echo "git init"
echo "git remote add origin https://github.com/roshanlanghi/portfolio.git"
echo "git add ."
echo "git commit -m 'Initial commit'"
echo "git push -u origin main"
echo ""
echo "For the dist folder deployment:"
echo "npx gh-pages -d dist"