import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteFonts from 'vite-plugin-fonts'
import ViteWindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    Vue(),

    /**
     * DESC:
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
     * DESC:
     * auto injection fonts
     */
    ViteFonts({
      google: {
        families: ['Source Sans Pro']
      },
    }),

    /**
     * DESC:
     * on-demand tailwindcss
     */
    ViteWindiCSS(),
  ],

  /**
   * DESC:
   * dependency pre-bundling
   */
  optimizeDeps: {
    include: [
      'vue',
      'vuex',
      'vue-router',
      '@vueuse/integrations'
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
