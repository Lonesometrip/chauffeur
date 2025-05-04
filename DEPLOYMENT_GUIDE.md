# Deployment Guide for Premium Chauffeur Website

This guide will walk you through deploying your React Vite application to GitHub Pages using GitHub Desktop.

## Prerequisites

- [GitHub Desktop](https://desktop.github.com/) installed on your computer
- A GitHub account
- Your React Vite project files

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "premium-chauffeur-website")
4. Choose whether to make it public or private
5. Click "Create repository"

## Step 2: Set Up GitHub Desktop

1. Open GitHub Desktop
2. If you haven't already, sign in to your GitHub account
3. Go to File > Clone Repository
4. Select your newly created repository
5. Choose a local path where you want to store the repository
6. Click "Clone"

## Step 3: Copy Your Project Files

1. Copy all your project files to the local repository folder
2. Make sure to include the following files we've set up:
   - Modified `vite.config.js`
   - Modified `package.json` with gh-pages configuration
   - `public/CNAME` file with your custom domain
   - `.github/workflows/deploy.yml` for automated deployment

## Step 4: Commit and Push Your Changes

1. In GitHub Desktop, you'll see all the files you've added
2. Add a summary for your commit (e.g., "Initial commit")
3. Add a description if needed
4. Click "Commit to main"
5. Click "Push origin" to push your changes to GitHub

## Step 5: Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Automated)

The workflow file we created (`.github/workflows/deploy.yml`) will automatically deploy your site whenever you push to the main branch. Just wait a few minutes after pushing your changes.

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Open a terminal or command prompt
2. Navigate to your project directory
3. Run the following commands:
   ```bash
   npm install
   npm run deploy
   ```

## Step 6: Configure Custom Domain

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Custom domain", enter your domain name: `www.premium-chauffeur.de`
4. Click "Save"

## Step 7: DNS Configuration

To point your domain to GitHub Pages, you need to configure your DNS settings:

1. Log in to your domain registrar's website
2. Find the DNS settings for your domain
3. Add the following records:
   - A record: Point `@` to the following IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME record: Point `www` to `<your-github-username>.github.io`

## Step 8: Verify Deployment

1. Wait for DNS propagation (can take up to 48 hours)
2. Visit your custom domain: `https://www.premium-chauffeur.de`
3. Verify that your website is working correctly

## Troubleshooting

If you encounter issues:

1. Check the Actions tab in your GitHub repository to see if there are any workflow errors
2. Verify that your CNAME file is correctly set up
3. Make sure your DNS settings are correct
4. Check that your `homepage` in package.json matches your custom domain
5. Ensure your `base` in vite.config.js is set correctly

## Updating Your Website

To update your website:

1. Make changes to your local files
2. Commit the changes in GitHub Desktop
3. Push to GitHub
4. The GitHub Actions workflow will automatically deploy the updates

For manual updates:
1. Make changes to your local files
2. Run `npm run deploy` to deploy the updates
