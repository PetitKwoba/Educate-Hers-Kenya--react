# Deployment Guide - GitHub & Hostinger

## 📋 Pre-Deployment Checklist

- [x] `.gitignore` configured (protects `.env` file)
- [x] Environment variables set up
- [x] Forms configured with Web3Forms
- [x] All pages created and working
- [ ] Build the project
- [ ] Push to GitHub
- [ ] Deploy to Hostinger

---

## 🚀 Part 1: Push to GitHub

### Step 1: Initialize Git (if not already done)

```powershell
# Check if git is initialized
git status

# If not initialized, run:
git init
git branch -M main
```

### Step 2: Add All Files

```powershell
# Add all files to staging
git add .

# Check what will be committed (verify .env is NOT listed)
git status
```

**IMPORTANT:** Make sure `.env` is NOT in the list! It should be ignored.

### Step 3: Commit Your Changes

```powershell
git commit -m "Initial commit: EducateHers Kenya website"
```

### Step 4: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository name: `Educate-Hers-Kenya--react` (or your preferred name)
4. Description: "Official website for EducateHers Kenya - Empowering girls through education"
5. Choose: **Private** or **Public**
6. **DO NOT** initialize with README, .gitignore, or license (you already have these)
7. Click **"Create repository"**

### Step 5: Push to GitHub

```powershell
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/PetitKwoba/Educate-Hers-Kenya--react.git

# Push to GitHub
git push -u origin main
```

If prompted for credentials:
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Get token at: https://github.com/settings/tokens

---

## 🌐 Part 2: Deploy to Hostinger

### Step 1: Build Your Project

```powershell
# Create production build
npm run build
```

This creates a `dist` folder with optimized files.

### Step 2: Prepare Environment Variables for Hostinger

Create a file called `.env.production` for production settings:

```env
VITE_WEB3FORMS_ACCESS_KEY=b748c57c-61ad-4d84-a4cc-42ee20d806d3
```

### Step 3: Upload to Hostinger

#### Option A: Using File Manager (Easiest)

1. **Login to Hostinger**
   - Go to https://www.hostinger.com
   - Click "Login" → Enter credentials

2. **Go to File Manager**
   - In hPanel, click "File Manager"
   - Navigate to `public_html` folder

3. **Upload Files**
   - Delete any existing files in `public_html`
   - Upload **everything from your `dist` folder**
   - **Important:** Upload the contents of `dist`, not the `dist` folder itself

4. **Set Environment Variables**
   - In hPanel, go to "Advanced" → "Environment Variables"
   - Add: `VITE_WEB3FORMS_ACCESS_KEY` = `b748c57c-61ad-4d84-a4cc-42ee20d806d3`

#### Option B: Using FTP (Recommended)

1. **Get FTP Credentials**
   - In Hostinger hPanel → "FTP Accounts"
   - Note: Host, Username, Password, Port

2. **Use FileZilla or WinSCP**
   - Download FileZilla: https://filezilla-project.org/
   - Connect using your FTP credentials
   - Upload contents of `dist` folder to `public_html`

#### Option C: Using Git Deployment (Advanced)

1. **In Hostinger hPanel:**
   - Go to "Git" section
   - Click "Create new repository"
   - Connect to your GitHub repository
   - Set branch: `main`
   - Set deployment path: `public_html`

2. **Add Build Commands:**
   - Build command: `npm install && npm run build`
   - Output directory: `dist`

### Step 4: Configure Domain & SSL

1. **Point Domain:**
   - In Hostinger, go to "Domains"
   - Point your domain (e.g., educateherskenya.net) to your hosting

2. **Enable SSL (HTTPS):**
   - In hPanel → "SSL"
   - Install free Let's Encrypt certificate
   - Enable "Force HTTPS"

3. **Configure .htaccess for React Router:**
   Create `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Part 3: Testing Deployment

1. **Visit Your Website**
   - Go to your domain (e.g., https://educateherskenya.net)
   - Or use temporary Hostinger URL

2. **Test All Pages**
   - Home, Events, Donate, Contact, etc.
   - Check all links work

3. **Test Forms**
   - Newsletter subscription (footer)
   - Contact form
   - Check if emails arrive at info@educateherskenya.net

4. **Test on Mobile**
   - Check responsive design
   - Test form submissions

---

## 📝 Quick Commands Summary

```powershell
# Build for production
npm run build

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/PetitKwoba/Educate-Hers-Kenya--react.git
git push -u origin main

# For future updates
git add .
git commit -m "Update description"
git push
```

---

## ⚠️ Important Notes

1. **Never commit `.env` file** - It's in `.gitignore` ✅
2. **Set environment variables in Hostinger** separately
3. **Use HTTPS** - Enable SSL certificate
4. **Test forms** after deployment
5. **Backup regularly** - Download site files periodically

---

## 🆘 Troubleshooting

### Forms not working on Hostinger?
- Check environment variables are set in Hostinger
- Verify Web3Forms API key is correct
- Check browser console for errors

### Pages show 404 error?
- Add `.htaccess` file for React Router
- Check file upload completed successfully

### Site not loading?
- Clear browser cache
- Check DNS propagation (can take up to 48 hours)
- Verify files are in `public_html`, not a subdirectory

---

## 🎉 You're Ready!

Follow the steps above and your website will be live on Hostinger! 

**Need help?** 
- Hostinger Support: 24/7 live chat
- GitHub Docs: https://docs.github.com
