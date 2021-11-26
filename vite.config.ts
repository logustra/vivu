import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ViteIcons from 'unplugin-icons/vite'
import ViteIconsResolver from 'unplugin-icons/resolver'
import ViteFonts from 'vite-plugin-fonts'
import ViteImport from 'vite-plugin-style-import'
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
      resolvers: [
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
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name: string) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`
        },
        resolveComponent: (name: string) => {
          return `element-plus/lib/${name}`
        }
      }]
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
        'vue-router'
      ]
    }
  }

  return {
    build,
    plugins,
    optimizeDeps,

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/styles/vendors/element.scss";
            @import "@/styles/vendors/tailwind.scss";
            @import "@/styles/vendors/nprogress.scss";
            @import "@/styles/index.scss";
          `
        }
      }
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
        }
      ]
    }
  }
})
