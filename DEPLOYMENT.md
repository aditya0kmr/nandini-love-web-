# 🚀 GitHub Pages Deployment Guide

## 🎯 Quick Start (Automated)

Your project is already configured for automated deployment! Every push to `main` will automatically build and deploy to GitHub Pages.

**Your live site:** `https://aditya0kmr.github.io/nandini-love-web-/`

---

## 📋 Step-by-Step Deployment Setup

### Step 1: Enable GitHub Pages

1. Go to your repository Settings
2. Click **Pages** in the left sidebar
3. Under "Build and deployment" → "Source", select **Deploy from a branch**
4. Under "Branch", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

*Note: The GitHub Actions workflow will create the `gh-pages` branch automatically on first deployment.*

### Step 2: GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml` which:

✅ Triggers on every push to `main`
✅ Installs dependencies (`npm install`)
✅ Builds the Vite project (`npm run build`)
✅ Deploys the `dist/` folder to GitHub Pages
✅ Creates/updates the `gh-pages` branch automatically

### Step 3: Vite Configuration

Your `vite.config.js` already has the correct base path:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/nandini-love-web-/',  // ← Correct for repo-level GitHub Pages
})
```

---

## 🔄 How to Deploy

### Automatic Deployment (Recommended)

1. Make changes to your code
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add new features"
   git push origin main
   ```
3. Watch the GitHub Actions workflow run automatically
4. Your site updates within 1-2 minutes!

**Check deployment status:**
- Go to your repo → **Actions** tab
- See the latest workflow run
- Green checkmark = ✅ Successfully deployed
- Red X = ❌ Build failed (check logs)

### Manual Deployment (If needed)

If you want to deploy locally:

```bash
# 1. Build the project
npm run build

# 2. Deploy using gh-pages package (optional setup)
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# 4. Run deployment
npm run deploy
```

---

## 🌐 Your Live Site URL

**Primary URL:** `https://aditya0kmr.github.io/nandini-love-web-/`

- Home: `https://aditya0kmr.github.io/nandini-love-web-/#/`
- Future pages: `https://aditya0kmr.github.io/nandini-love-web-/#/letters`, etc.

---

## ✨ Features Already Set Up

✅ **Automated CI/CD**: GitHub Actions runs tests and builds on every push
✅ **Glass Morphism Design**: Beautiful romantic theme deployed
✅ **HashRouter**: Client-side routing works perfectly on GitHub Pages
✅ **Responsive Design**: Mobile-optimized layout
✅ **Animated Background**: Floating hearts animation
✅ **Global Design System**: Consistent styling across pages

---

## 🔧 Troubleshooting

### Issue: White screen on GitHub Pages

**Solution:** Ensure vite.config.js has correct base path:
```javascript
base: '/nandini-love-web-/',  // with trailing slash
```

### Issue: Routes not working (404 errors)

**Solution:** Make sure you're using HashRouter (already configured in `src/main.jsx`)
- URLs should look like: `domain/#/page-name`
- NOT: `domain/page-name`

### Issue: GitHub Actions workflow failed

**Check logs:**
1. Go to **Actions** tab
2. Click the failed workflow
3. Click **Build** job
4. Look for error messages
5. Common issues:
   - Missing dependencies: Add to `package.json`
   - Build errors: Check console output
   - Node version: Workflow uses Node 18.x

---

## 📝 Adding New Pages

1. Create page file: `src/pages/YourPage.jsx`
2. Create style file: `src/pages/YourPage.css`
3. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/your-page" element={<YourPage />} />
   ```
4. Push to GitHub - automatic deployment!
5. Access at: `domain/#/your-page`

---

## 📊 Build & Deploy Status

**Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** Every push to `main`
- **Duration:** ~1-2 minutes
- **Status:** Check **Actions** tab

---

## 🎉 You're All Set!

Your `nandini-love-web-` project is now live on GitHub Pages with:
- Automatic deployment on every push
- Beautiful romantic glass morphism design
- Fully responsive layout
- Smooth animations and transitions

Enjoy building your love website! 💕

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [React Router v6 Guide](https://reactrouter.com/)
