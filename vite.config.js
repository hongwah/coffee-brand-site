import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  base: '/coffee-brand-site/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        portfolio: page('./index.html'),
        coffee: page('./coffee/index.html'),
      },
    },
  },
})
