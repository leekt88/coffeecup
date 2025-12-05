import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment và thay 'coffee' bằng tên repository của bạn nếu repo không phải root
  // base: '/coffee/',
})

