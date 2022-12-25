import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'
import ViteUnocss from 'unocss/vite'
import ViteUnimport from 'unimport/unplugin'
import ViteComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ViteIcons from 'unplugin-icons/vite'
import ViteIconsResolver from 'unplugin-icons/resolver'
import ViteFonts from 'vite-plugin-fonts'
import ViteI18n from '@intlify/unplugin-vue-i18n/vite'
import ViteVisualizer from 'rollup-plugin-visualizer'
import { dependencies } from './package.json'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod'
  const isDev = mode === 'dev'
  const isReport = mode === 'report'

  const PRESETS = [
    'vue',
    'pinia',
    'vue-router',
    'vue-i18n',
  ]

  const plugins = [
    Vue(),
    VueJSX(),

    /**
     * DESC:
     * auto import APIs
     */
    ViteUnimport.vite({
      dirs: [
        'src/components/**/**/*.vue',
        'src/composables',
        'src/services',
        'src/stores',
        'src/utils',
        'src/modules/components/**/**/*.vue',
        'src/modules/composables',
        'src/modules/services',
        'src/modules/stores',
        'src/modules/utils',
      ],
      dts: 'src/typings/auto-imports.d.ts',
      addons: {
        vueTemplate: true,
      },
      presets: PRESETS,
    }),

    /**
     * DESC:
     * auto import components
     */
    ViteComponents({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/typings/components.d.ts',
      resolvers: [
        /**
         * DESC:
         * auto import iconify
         */
        ViteIconsResolver({
          componentPrefix: '',
          enabledCollections: ['cil'],
        }),

        /**
         * DESC:
         * auto import element-plus
         */
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),

    /**
     * DESC:
     * on-demand icons
     */
    ViteIcons(),

    /**
     * DESC:
     * css utilities
     */
    ViteUnocss(),

    /**
     * DESC:
     * auto injection fonts
     */
    ViteFonts({
      google: {
        families: ['Source Sans Pro'],
      },
    }),

    /**
     * DESC:
     * localization
     */
    ViteI18n({
      defaultSFCLang: 'yaml',
      include: resolve(__dirname, './src/locales/*.yaml'),
    }),
  ]

  const VENDORS = [
    '@vuelidate/core',
    '@vuelidate/validators',
    'element-plus',
  ]

  function vendorChunks(deps: Record<string, string>) {
    const chunks = {}

    Object.keys(deps).forEach((dep) => {
      if (VENDORS.includes(dep))
        chunks[`vendor.${dep}`] = [dep]
    })

    return chunks
  }

  let build = {}
  if (isProd) {
    build = {
      target: 'es2015',
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: {
            /**
             * DESC:
             * split 3rd party libraries
             */
            ...vendorChunks(dependencies),
          },
        },
      },
    }
  }

  let optimizeDeps = {}
  if (isDev) {
    /**
     * DESC:
     * dependency pre-bundling
     */
    optimizeDeps = {
      include: PRESETS,
    }
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
        brotliSize: true,
      }),
    )
  }

  return {
    plugins,
    optimizeDeps,
    build,

    /**
     * DESC:
     * defining aliases
     */
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
        {
          find: '@@',
          replacement: resolve(__dirname, './src/modules'),
        },
        {
          find: 'atoms',
          replacement: resolve(__dirname, './src/components/atoms'),
        },
        {
          find: 'molecules',
          replacement: resolve(__dirname, './src/components/molecules'),
        },
        {
          find: 'organisms',
          replacement: resolve(__dirname, './src/components/organisms'),
        },
        {
          find: 'templates',
          replacement: resolve(__dirname, './src/components/templates'),
        },
      ],
    },
  }
})
