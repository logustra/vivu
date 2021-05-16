import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteFonts from 'vite-plugin-fonts'
import ViteImport from 'vite-plugin-importer'
import ViteI18n from '@intlify/vite-plugin-vue-i18n'
import ViteYaml from '@rollup/plugin-yaml'
import ViteVisualizer from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  const isReport = mode === 'report'

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
    }),

    /**
     * DESC:
     * localization
     */
    ViteI18n({
      include: [resolve(__dirname, 'locales/**')],
      runtimeOnly: false
    }),

    /**
     * DESC:
     * converts YAML files to ES6 modules
     */
    ViteYaml()
  ]

  let build = {}
  if (isProd) {
    build = {
      manifest: true
    }

    plugins.push(
      /**
       * DESC:
       * provides support for legacy browsers 
       * that do not support native ESM
       */
      ViteLegacy({
        targets: [
          'defaults', 
          'not IE 11'
        ]
      })
    )
  }

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
  if (isDev) {
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
