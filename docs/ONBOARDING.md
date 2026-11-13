# ECC SHPE Website Onboarding Guide (Mac + Windows + VS Code)

Welcome to the **SHPE at El Camino College website project** 👋  
This guide is written for brand-new developers (even if this is your first project).

---

## 1) What you are working on

This is a **React + Vite** website (React 19, React Router 8, Vite 8).

- **React** is the UI library (how pages/components are built).
- **Vite** is the development server + build tool (runs your app locally and creates production builds).
- **Node.js + npm** are required to install dependencies and run scripts.

---

## 2) Install everything from scratch

> Do this once on your laptop.

### A) Install Git

#### Windows
1. Download **Git for Windows**: https://git-scm.com/download/win
2. Run installer with default settings.
3. Open **Git Bash** and confirm install:
   ```bash
   git --version
   ```

#### Mac
1. Option 1: Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```
2. Option 2: Install from https://git-scm.com/download/mac
3. Confirm install:
   ```bash
   git --version
   ```

---

### B) Install Node.js (includes npm)

1. Download the **LTS version** from https://nodejs.org/ (version 22.22 or newer is required)
2. Install it.
3. Confirm install:
   ```bash
   node -v
   npm -v
   ```

---

### C) Install VS Code

1. Download from https://code.visualstudio.com/
2. Install and open it.
3. Recommended extensions:
   - ESLint
   - Prettier - Code formatter
   - GitLens
   - Error Lens (optional)

---

## 3) First-time Git + GitHub setup

### A) Create your GitHub account
If you don't have one, create it: https://github.com/

### B) Configure Git identity (one-time)
Run in terminal (Git Bash, PowerShell, or Mac Terminal):
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### C) Set up authentication
Use GitHub Desktop OR GitHub CLI OR browser login when prompted by Git.
(Ask lead if the team has a preferred method.)

---

## 4) Clone and run the project locally

1. Open terminal.
2. Clone repository:
   ```bash
   git clone <REPO_URL>
   ```
3. Enter folder:
   ```bash
   cd eccshpe-website
   ```
4. Install all dependencies:
   ```bash
   npm install
   ```
5. Start development server:
   ```bash
   npm run dev
   ```
6. Open the local URL shown in terminal (usually `http://localhost:5173`).

To stop server: press `Ctrl + C`.

---

## 5) VS Code workflow for this repo

1. In terminal inside repo:
   ```bash
   code .
   ```
   (If this command fails, open VS Code manually and choose **File > Open Folder**.)

2. Use VS Code terminal (**Terminal > New Terminal**).

3. Common commands:
   ```bash
   npm run dev      # run locally
   npm run lint     # check linting issues
   npm run build    # ensure production build works
   ```

---

## 6) Git workflow (simple + safe)

### A) Always pull latest before coding
```bash
git checkout main
git pull origin main
```

### B) Create your own branch
Use a branch name like `feature/your-name-onboarding-card`:
```bash
git checkout -b feature/your-name-onboarding-card
```

### C) Make changes and check status
```bash
git status
```

### D) Commit your changes
```bash
git add .
git commit -m "Add <your name> to Website Team grid"
```

### E) Push branch
```bash
git push -u origin feature/your-name-onboarding-card
```

### F) Open pull request on GitHub
- Compare your branch to `main`
- Add a clear title and description
- Request review

---

## 7) Project structure explained

```text
eccshpe-website/
├─ public/
│  └─ images/               # static images (brand, headshots, gallery, placeholders)
├─ src/
│  ├─ components/           # reusable UI pieces (menu, footer, cards, page wrapper)
│  ├─ data/                 # site content: people, gallery albums, links
│  ├─ pages/                # one file per route, named <Name>Page.jsx
│  ├─ styles/
│  │  ├─ base.css           # document-level defaults
│  │  └─ app.css            # all page and component styles
│  ├─ App.jsx               # app shell + route map
│  └─ main.jsx              # entry point: router + Vercel analytics
├─ index.html               # root HTML (title, meta tags, fonts, favicon)
├─ package.json             # scripts + dependencies
├─ vite.config.js           # Vite config
└─ eslint.config.js         # linting rules
```

### How routing works
- `src/main.jsx` wraps the app in `BrowserRouter` (from `react-router`).
- `src/App.jsx` maps URLs to pages:
  - `/` Home
  - `/about`
  - `/leadershpe`
  - `/website-team`
  - `/events`
  - `/gallery`
  - `/alumni`
  - `/join`
  - anything else shows the "Page not found" page
- Menu and footer links come from `NAV_ITEMS` in `src/data/site.js`. Add a page there and in `App.jsx`.
- Use `<Link to="/page">` from `react-router` for links inside the site, not `<a href>`. A plain `<a>` reloads the whole site.

### How pages are built
Each file in `src/pages/` exports one page component. Most pages wrap their content in `PageSection`, which provides
the title, the intro paragraph and the page width. The people, photos and links that pages show live in `src/data/`,
so routine content updates rarely need you to touch JSX.

### How static images work
Anything in `public/` is served from the site root:
```jsx
<img src="/images/headshots/juan-ventura-romero.jpg" alt="Juan Ventura-Romero" />
```
Always start the path with `/`. Use lowercase, hyphenated file names, because Vercel treats `Photo.JPG` and
`photo.jpg` as different files.

---

## 8) Final onboarding task: add yourself to Website Team grid

Your task is to add your card to the **Website Team** page.

### Step 1: Add your photo
1. Resize a square-ish photo to about 400x400.
2. Save it as `public/images/headshots/first-last.jpg` (example: `jane-doe.jpg`).

### Step 2: Add yourself in `src/data/websiteTeam.js`
Add a new object to `WEBSITE_TEAM`:

```js
{
  name: 'Jane Doe',
  handle: '@janedoe',
  link: 'https://github.com/janedoe',
  role: 'Frontend Contributor',
  contributions: [
    'Added reusable UI updates',
    'Improved page spacing and layout',
    'Fixed small visual bugs',
  ],
  highlights: 'Passionate about creating clear, friendly interfaces for members.',
  img: '/images/headshots/jane-doe.jpg',
},
```

### Step 3: Run checks locally
```bash
npm run dev
npm run lint
npm run build
```

### Step 4: Commit + open PR
Use the Git workflow section above.

---

## 9) Common issues and fixes

### `npm` or `node` not recognized
- Restart terminal after installing Node.
- Reinstall Node LTS.

### Port already in use
- Vite may choose a new port automatically.
- Or stop the other process using that port.

### `npm install` fails
- Delete `node_modules` and `package-lock.json`, then retry:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
  (Windows PowerShell alternative: `rd /s /q node_modules` then delete `package-lock.json`.)

### Lint/build errors after pulling
- Run:
  ```bash
  npm install
  npm run lint
  npm run build
  ```
- Ask in team chat with screenshot + full terminal error.

---

## 10) Team habits that help everyone

- Pull latest `main` before starting new work.
- Keep PRs small and focused.
- Write clear commit messages.
- Never commit secrets/tokens.
- Ask questions early — especially if blocked > 30 minutes.

Welcome to the team 🚀
