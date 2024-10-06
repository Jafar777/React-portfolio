import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",  // Use "/" to indicate the root of your custom domain
  plugins: [react()],
})