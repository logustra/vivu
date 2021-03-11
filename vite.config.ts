import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteIcons from 'vite-plugin-icons'

export default defineConfig({
  plugins: [
    Vue(),
    ViteIcons(),
  ],

  resolve: {
    alias: [
      {
        find: '~~',
        replacement: path.resolve(__dirname, '../..')
      },
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
