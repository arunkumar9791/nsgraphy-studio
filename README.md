# nsGraphy Studio

Portfolio website for nsGraphy photography, built with React 19, Vite 8 and Tailwind CSS 4.

It is a static single-page site: no backend, database or environment variables are needed.

## Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** (bundled with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## Run locally (development)

```bash
# 1. Go to the project folder
cd nsgraphy-studio

# 2. Install dependencies (first time, or after package.json changes)
npm install

# 3. Start the dev server with hot reload
npm run dev
```

Open the URL printed in the terminal, usually <http://localhost:5173>.

To open it from another device on the same network (e.g. your phone), run:

```bash
npm run dev -- --host
```

## Available scripts

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Starts the development server with hot reload         |
| `npm run build`   | Builds the production site into the `dist/` folder    |
| `npm run preview` | Serves the built `dist/` folder locally for a check   |
| `npm run lint`    | Runs ESLint over the project                          |

## Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # optional: test the build at http://localhost:4173
```

The `dist/` folder contains everything needed to host the site (`index.html` plus the `assets/` folder). Upload or deploy that folder to any static host.

## Deploy

Use these settings on any host:

- **Build command:** `npm run build`
- **Output / publish directory:** `dist`
- **Node version:** 20.19+ or 22.12+

### Option 1: Netlify

- **Drag and drop:** run `npm run build`, then drag the `dist/` folder onto <https://app.netlify.com/drop>.
- **From Git:** push the repo to GitHub, choose "Add new site → Import from Git" in Netlify, and enter the build command and publish directory above.
- **CLI:**

  ```bash
  npm install -g netlify-cli
  npm run build
  netlify deploy --prod --dir=dist
  ```

### Option 2: Vercel

Import the GitHub repo at <https://vercel.com/new>. Vercel detects Vite automatically. Or use the CLI:

```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages

If the site is served from a sub-path such as `https://<user>.github.io/nsgraphy-studio/`, set `base` in [vite.config.js](vite.config.js) first so asset paths resolve:

```js
export default defineConfig({
  base: '/nsgraphy-studio/',
  plugins: [react(), tailwindcss()],
})
```

Then publish `dist/` with the `gh-pages` package:

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

In the repo's **Settings → Pages**, set the source to the `gh-pages` branch. Skip the `base` change if you use a custom domain or a `<user>.github.io` repo.

### Option 4: Your own server (Nginx, Apache, etc.)

Copy the contents of `dist/` to the server's web root, for example:

```bash
npm run build
scp -r dist/* user@your-server:/var/www/nsgraphy/
```

Any web server that serves static files will work.

## Updating content

- Contact links (WhatsApp, Instagram): [src/constants/site.js](src/constants/site.js)
- Portfolio images: [src/data/portfolio.js](src/data/portfolio.js)
- Services: [src/data/services.js](src/data/services.js)
- Testimonials: [src/data/testimonials.js](src/data/testimonials.js)
- Page sections and layout: [src/components/](src/components/)

After editing, run `npm run build` again and redeploy the `dist/` folder.
