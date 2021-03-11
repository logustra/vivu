import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteWindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    Vue(),

    /**
     * NOTE:
     * auto import components
     */
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
          enabledCollections: ['cil']
        }),
      ],
    }),

    ViteIcons(),

    /**
     * NOTE:
     * on-demand tailwindcss
     */
    ViteWindiCSS(),
  ],

  /**
   * NOTE:
   * dependency pre-bundling
   */
  optimizeDeps: {
    include: [
      'vue',
      'vuex',
      'vue-router'
    ],
  },

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
