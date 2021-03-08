import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: '@@',
        replacement: path.resolve(__dirname, './src/modules')
      },
      {
        find: 'atoms',
        replacement: path.resolve(__dirname, './src/components/atoms')
      },
      {
        find: 'molecules',
        replacement: path.resolve(__dirname, './src/components/molecules')
      },
      {
        find: 'organisms',
        replacement: path.resolve(__dirname, './src/components/organisms')
      },
      {
        find: 'templates',
        replacement: path.resolve(__dirname, './src/components/templates')
      },
    ]
  }
})
