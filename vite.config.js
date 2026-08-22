import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages: a GitHub Pages *project* site (as opposed to
  // a user/org site) is served from https://<user>.github.io/<repo-name>/,
  // not from the domain root. Vite needs to know this so every built asset
  // path (JS, CSS, images) is prefixed correctly — otherwise the browser
  // requests /assets/... instead of /<repo-name>/assets/..., those 404, and
  // the page renders blank because React never mounts.
  //
  // Set this to match your repository name exactly (case-sensitive), with
  // leading and trailing slashes. If you deploy to a custom domain or to a
  // user/org root site (https://<user>.github.io/) instead, change this
  // back to '/'.
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: true,
  },
})
