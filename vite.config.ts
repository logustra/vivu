import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteFonts from 'vite-plugin-fonts'
import ViteImport from 'vite-plugin-importer'
import ViteVisualizer from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const isLocal = mode === 'localhost'
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  const isReport = mode === 'report'

  let build = {}
  if (isDev || isProd) {
    build = {
      manifest: true,
      polyfillDynamicImport: true
    }
  }

  const plugins = [
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
      ]
    }),

    ViteIcons(),

    /**
     * DESC:
     * auto injection fonts
     */
    ViteFonts({
      google: {
        families: ['Source Sans Pro']
      }
    }),

    /**
     * DESC:
     * on-demand element-plus
     */
    ViteImport({
      libraryName: 'element-plus',
      style: true
    })
  ]

  if (isReport) {
    plugins.push(
      /**
       * DESC:
       * visualize bundle
       */
      ViteVisualizer({
        filename: './dist/report.html',
        open: true,
        brotliSize: true
      })
    )
  }

  let optimizeDeps = {}
  if (isLocal) {
    /**
     * DESC:
     * dependency pre-bundling
     */
    optimizeDeps = {
      include: [
        'vue',
        'vuex',
        'vue-router',
        '@vueuse/integrations'
      ]
    }
  }

  return {
    build,
    plugins,
    optimizeDeps,
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
        }
      ]
    }
  }
})
