import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import favicons from '@peterek/vite-plugin-favicons'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
})
