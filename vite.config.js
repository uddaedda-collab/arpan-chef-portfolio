import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/arpan-chef-portfolio/',
  server: {
    port: 3000
  }
})
