import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 相对路径 base：推送到 GitHub Pages 子路径也能正常加载静态资源
  base: './',
  server: {
    port: 5173,
    host: true
  }
})
