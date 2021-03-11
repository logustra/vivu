import { resolve } from 'path'
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
        replacement: resolve(__dirname, '../..')
      },
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      },
      {
        find: '@@',
        replacement: resolve(__dirname, './src/modules')
      },
      {
        find: 'atoms',
        replacement: resolve(__dirname, './src/components/atoms')
      },
      {
        find: 'molecules',
        replacement: resolve(__dirname, './src/components/molecules')
      },
      {
        find: 'organisms',
        replacement: resolve(__dirname, './src/components/organisms')
      },
      {
        find: 'templates',
        replacement: resolve(__dirname, './src/components/templates')
      },
    ]
  }
})
