# 🚀 Quick Deploy Commands

## First Time Setup

```powershell
# 1. Push to GitHub (main branch)
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/PetitKwoba/Educate-Hers-Kenya--react.git
git push -u origin main

# 2. Create build branch
git checkout -b build
git push -u origin build
git checkout main
```

## Add GitHub Secrets
Go to: **GitHub Repo → Settings → Secrets and variables → Actions**

Add 4 secrets:
1. `FTP_SERVER` - Your Hostinger FTP host
2. `FTP_USERNAME` - Your FTP username  
3. `FTP_PASSWORD` - Your FTP password
4. `VITE_WEB3FORMS_ACCESS_KEY` - Your Web3Forms key

---

## Daily Workflow - Deploy to Production

```powershell
# Make changes on main
git checkout main
git add .
git commit -m "Update description"
git push origin main

# Deploy: Merge to build branch
git checkout build
git merge main
git push origin build

# Back to development
git checkout main
```

**That's it!** GitHub Actions auto-deploys to Hostinger in ~5 minutes! ✅

---

## Monitor Deployment
- Go to: **GitHub Repo → Actions tab**
- See real-time deployment progress
- Green ✅ = Success
- Red ❌ = Check logs for errors

---

## Branch Strategy
- **main** = Development branch (work here)
- **build** = Deployment branch (auto-deploys to Hostinger)

Never work directly on `build` - always merge from `main`!
