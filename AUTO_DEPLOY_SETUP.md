# Auto-Deploy Setup Guide - GitHub to Hostinger

This guide will help you set up automatic deployment from GitHub to Hostinger.
Every time you push to the `build` branch, your site will automatically deploy! 🚀

---

## 📋 What You Need

1. GitHub account (you have this ✅)
2. Hostinger hosting account
3. FTP credentials from Hostinger
4. 10 minutes to set up

---

## 🚀 Part 1: Get Your Hostinger FTP Credentials

### Step 1: Login to Hostinger
- Go to https://www.hostinger.com
- Click "Login" and enter your credentials
- You'll be in the hPanel (Hostinger control panel)

### Step 2: Get FTP Details
1. In hPanel, find and click **"FTP Accounts"**
2. You'll see your FTP account details:
   - **FTP Host/Server**: Usually looks like `ftp.yourdomain.com` or an IP address
   - **FTP Username**: Usually your domain or hosting username
   - **FTP Password**: Click "Change Password" if you need to set/reset it
   - **Port**: Usually `21` (default FTP port)

**Write these down! You'll need them in the next step.**

Example:
```
FTP Server: ftp.educateherskenya.net
Username: u123456789
Password: YourSecurePassword123
Port: 21
```

---

## 🔐 Part 2: Add Secrets to GitHub

GitHub Secrets keep your sensitive data secure. They're encrypted and only used during deployment.

### Step 1: Push Your Code to GitHub First

```powershell
# Initialize git (if not done)
git init
git branch -M main

# Add all files
git add .

# Commit
git commit -m "Initial commit: EducateHers Kenya website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/PetitKwoba/Educate-Hers-Kenya--react.git

# Push to main branch
git push -u origin main
```

### Step 2: Add Secrets to GitHub

1. **Go to your GitHub repository**
   - URL: https://github.com/PetitKwoba/Educate-Hers-Kenya--react

2. **Navigate to Settings**
   - Click the "Settings" tab (top right of repo page)

3. **Go to Secrets and Variables**
   - In left sidebar: Click "Secrets and variables" → "Actions"

4. **Add New Repository Secrets**
   Click "New repository secret" and add these **4 secrets**:

   **Secret 1:**
   - Name: `FTP_SERVER`
   - Value: Your FTP host (e.g., `ftp.educateherskenya.net`)
   - Click "Add secret"

   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: Your FTP username (e.g., `u123456789`)
   - Click "Add secret"

   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password
   - Click "Add secret"

   **Secret 4:**
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: `b748c57c-61ad-4d84-a4cc-42ee20d806d3`
   - Click "Add secret"

**✅ You should now have 4 secrets added!**

---

## 🌿 Part 3: Create and Use the Build Branch

### What's a Build Branch?
The `build` branch is your deployment branch. When you push to it, GitHub Actions automatically:
1. Builds your React app
2. Uploads it to Hostinger
3. Your website updates live!

### Create Build Branch

```powershell
# Create build branch from main
git checkout -b build

# Push build branch to GitHub
git push -u origin build

# Switch back to main for development
git checkout main
```

---

## 🎯 Part 4: How to Deploy (Daily Workflow)

### Method 1: Merge Main to Build (Recommended)

When you're ready to deploy:

```powershell
# Make sure you're on main and all changes are committed
git checkout main
git add .
git commit -m "Your update description"
git push origin main

# Switch to build branch
git checkout build

# Merge main into build (this triggers auto-deploy!)
git merge main

# Push to GitHub - deployment starts automatically!
git push origin build

# Switch back to main for continued development
git checkout main
```

### Method 2: Direct Push to Build

```powershell
# Make your changes on main first
git checkout main
git add .
git commit -m "Update"
git push origin main

# Then push directly to build
git push origin main:build
```

### Method 3: Using GitHub Pull Request (Most Professional)

1. Make changes on `main` branch
2. Push to GitHub: `git push origin main`
3. Go to GitHub repository
4. Click "Pull requests" → "New pull request"
5. Base: `build` ← Compare: `main`
6. Create and merge pull request
7. Deployment starts automatically!

---

## 🔍 Part 5: Monitor Deployments

### View Deployment Status

1. Go to your GitHub repository
2. Click the "Actions" tab
3. You'll see deployment runs
4. Click on any run to see:
   - Build process
   - Upload progress
   - Success/failure status
   - Detailed logs

### Deployment Status Badge (Optional)

Add this to your README.md to show deployment status:

```markdown
![Deploy Status](https://github.com/PetitKwoba/Educate-Hers-Kenya--react/actions/workflows/deploy.yml/badge.svg)
```

---

## ⏱️ Deployment Timeline

Once you push to `build` branch:
- ⏰ **0-1 min**: GitHub Actions starts
- ⏰ **1-3 min**: Dependencies install & build
- ⏰ **3-5 min**: Files upload to Hostinger
- ⏰ **5-6 min**: Website is live! ✅

Total: ~5-6 minutes per deployment

---

## 🧪 Testing Your Setup

### Test 1: First Deployment

```powershell
# Make a small change (e.g., edit README.md)
git checkout main
echo "Test deployment" >> README.md
git add README.md
git commit -m "Test: First auto-deployment"
git push origin main

# Trigger deployment
git checkout build
git merge main
git push origin build
```

### Test 2: Check GitHub Actions
- Go to GitHub → Your repo → "Actions" tab
- You should see a workflow running
- Wait for green checkmark ✅

### Test 3: Verify Website
- Visit your website URL
- Changes should appear in ~5-6 minutes
- Check all pages work
- Test forms

---

## 📁 Project Structure for Deployment

```
Your Repository
├── main branch        (development - where you work)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...all your code
│
├── build branch       (deployment - auto-deploys to Hostinger)
│   └── (same as main, but triggers deployment)
│
└── .github/workflows/
    └── deploy.yml     (GitHub Actions config - already created ✅)
```

---

## ⚠️ Important Notes

1. **Never commit `.env` file** - It's in `.gitignore` ✅
2. **Secrets are secure** - Encrypted in GitHub, never visible in logs
3. **Build branch deploys automatically** - Main branch doesn't deploy
4. **Keep branches synced** - Always merge main → build, don't work directly on build
5. **Check Actions tab** - Monitor deployments for errors

---

## 🆘 Troubleshooting

### ❌ Deployment Failed: FTP Connection Error
**Fix:** Check your FTP credentials in GitHub Secrets
- Go to Settings → Secrets → Edit each secret
- Verify FTP_SERVER, FTP_USERNAME, FTP_PASSWORD

### ❌ Deployment Failed: Build Error
**Fix:** Check the build locally first
```powershell
npm run build
```
If it fails locally, fix the errors before pushing

### ❌ Website Not Updating
**Fix:** Check these:
1. Deployment completed successfully (green ✅ in Actions)
2. Files uploaded to correct folder (`/public_html/`)
3. Clear browser cache (Ctrl+F5)
4. Check Hostinger file manager - verify files are there

### ❌ Forms Not Working After Deploy
**Fix:** Add environment variable in Hostinger
1. Hostinger hPanel → "Advanced" → "Environment Variables"
2. Add: `VITE_WEB3FORMS_ACCESS_KEY` = `b748c57c-61ad-4d84-a4cc-42ee20d806d3`

### ❌ Pages Show 404 Error
**Fix:** Verify `.htaccess` file exists in public_html
- The workflow should copy it from `public/.htaccess`
- If missing, manually upload it via Hostinger File Manager

---

## 🎉 You're All Set!

### Quick Reference - Daily Workflow

```powershell
# 1. Work on main branch
git checkout main

# 2. Make your changes, then:
git add .
git commit -m "Your update"
git push origin main

# 3. When ready to deploy:
git checkout build
git merge main
git push origin build

# 4. Switch back to main
git checkout main

# Done! Check GitHub Actions tab to watch deployment
```

---

## 🔄 First Time Setup Checklist

- [ ] GitHub repository created
- [ ] FTP credentials obtained from Hostinger
- [ ] 4 secrets added to GitHub (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, VITE_WEB3FORMS_ACCESS_KEY)
- [ ] Code pushed to main branch
- [ ] Build branch created
- [ ] First deployment tested
- [ ] Website verified working

---

## 📞 Need Help?

- **GitHub Actions Docs**: https://docs.github.com/actions
- **Hostinger Support**: 24/7 live chat in hPanel
- **Check workflow file**: `.github/workflows/deploy.yml`

**Happy Deploying! 🚀**
