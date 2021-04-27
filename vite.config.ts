import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteFonts from 'vite-plugin-fonts'
import ViteImport from 'vite-plugin-importer'

export default defineConfig({
  build: {
    manifest: true,
    polyfillDynamicImport: true
  },
  
  plugins: [
    Vue(),

    /**
     * DESC:
     * auto import components
     */
    ViteComponents({
      customComponentResolvers: [
        /**
         * DESC:
         * auto import iconify
         */
        ViteIconsResolver({
          componentPrefix: '',
          enabledCollections: ['cil']
        }),

        /**
         * DESC:
         * auto import element-plus
         */
        ElementPlusResolver()
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
     * on-demand element-plus
     */
    ViteImport({
      libraryName: 'element-plus',
      style: true
    })
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
