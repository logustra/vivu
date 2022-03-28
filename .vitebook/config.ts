import vue from '@vitejs/plugin-vue';
import { defineConfig, clientPlugin } from '@vitebook/client/node';
import { vuePlugin } from '@vitebook/vue/node';
import { vueMarkdownPlugin } from '@vitebook/markdown-vue/node';
import { shikiMarkdownPlugin } from '@vitebook/markdown-shiki/node';
import {
  DefaultThemeConfig,
  defaultThemePlugin,
} from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
  include: [
    'src/components/**/**/*.md', 
    'src/components/**/**/*.story.vue', 
    'src/modules/**/components/**/*.md',
    'src/modules/**/components/**/*.story.vue',
    'src/styles/**/*.md',
  ],
  /**
   * DESC:
   * override vite.config.ts
   */
  vite: {
    plugins: [],
    optimizeDeps: {},
    build: {},
    test: {}
  },
  plugins: [
    shikiMarkdownPlugin(),
    vueMarkdownPlugin(),
    vuePlugin({ appFile: 'app.vue' }),
    clientPlugin(),
    defaultThemePlugin(),
    vue({ include: /\.(md|vue)/ }),
  ],
  site: {
    title: 'Vivu',
    description: 'Opinionated scalable vue boilerplate using vite.',
    theme: {
      remoteGitRepo: {
        url: 'logustra/vivu',
      },
    },
  },
});
