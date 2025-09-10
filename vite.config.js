
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Auto-set correct base path for GitHub Pages builds.
// For user/organization sites (repo ends with .github.io) base stays '/'.
// For project sites, base becomes '/<repo-name>/'.
function resolveBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  if (!repo) return '/'
  if (repo.endsWith('.github.io')) return '/'
  return `/${repo}/`
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
})
