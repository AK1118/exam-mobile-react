import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const _path=require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':_path.resolve(__dirname,'./src'),
    }
  }
})
