import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
  ],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.tsx$/],
    },
    include: [
      'src/components/**/**/*.test.tsx',
      'src/modules/**/components/**/*.test.tsx',
      'src/modules/**/tests/*.test.tsx',
    ],
    coverage: {
      reporter: [
        'text',
        'text-summary',
        'lcov',
      ],
    },
  },
})
