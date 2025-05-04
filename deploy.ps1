# Deployment script for GitHub Pages

# Add all files to staging
git add .

# Commit changes
git commit -m "Fixed logo loading issues and updated deployment configuration"

# Push to GitHub
git push origin main

Write-Host "Deployment script completed. Please check the output for any errors."
