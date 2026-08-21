import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages / custom domains:
  // When deploying to a custom domain or to a user/org root site (https://<user>.github.io/ or a custom domain),
  // base should be '/' so built asset URLs are rooted at the domain root.
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: true,
  },
})
