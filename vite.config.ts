import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// Укажите путь к вашему репозиторию на GitHub
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  base: '/fuse8Test/',  // Это важная настройка для GitHub Pages, где fuse8Test — это имя вашего репозитория
})
