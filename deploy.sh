#!/bin/bash

# This script runs the preparation script and deploys to GitHub Pages

# 1. Run the preparation script
./prepare-for-github.sh

# 2. Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo ""
echo "Deployment complete!"
echo "Your portfolio should be available at: https://roshanlanghi.github.io/portfolio/"
echo ""
echo "Note: It may take a few minutes for the changes to be visible on GitHub Pages."