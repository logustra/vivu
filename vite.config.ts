import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteUnocss from 'unocss/vite'
import ViteUnimport from 'unimport/unplugin'
import ViteComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ViteIcons from 'unplugin-icons/vite'
import ViteIconsResolver from 'unplugin-icons/resolver'
import ViteFonts from 'vite-plugin-fonts'
import ViteI18n from '@intlify/unplugin-vue-i18n/vite'
import ViteYaml from '@rollup/plugin-yaml'
import ViteVisualizer from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod'
  const isDev = mode === 'dev'
  const isReport = mode === 'report'

  const plugins = [
    /**
     * DESC:
     * auto import APIs
     */
    ViteUnimport.vite({
      dirs: [
        'src/components/**/**/*.{vue,ts}',
        'src/composables',
        'src/services',
        'src/stores/**',
        'src/utils',
        'src/modules/components/**/**/*.{vue,ts}',
        'src/modules/composables',
        'src/modules/services',
        'src/modules/stores/**',
        'src/modules/utils',
      ],
      dts: 'src/typings/auto-imports.d.ts',
      addons: {
        vueTemplate: true,
      },
      presets: [
        'vue',
        'vuex',
        'vue-router',
        'vue-i18n',
      ],
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
    }),

    /**
     * DESC:
     * converts YAML files to ES6 modules
     */
    ViteYaml(),
  ]

  if (
    isProd
    || isDev
    || isReport
  ) plugins.push(Vue())

  let build = {}
  if (isProd) {
    build = {
      target: 'es2015',
      manifest: true,
    }
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
        'vue-i18n',
      ],
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

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/styles/vendors/element.scss';
            @use '@/styles/vendors/nprogress.scss';
            @use '@/styles/index.scss';
          `,
        },
      },
    },

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
