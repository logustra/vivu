/**
 * TODO:
 * dynamically read file inside modules
 * using require.context. https://github.com/vitejs/vite/issues/77
 */

import { 
  createRouter,
  createWebHashHistory
} from 'vue-router'

import home from '@@/Home/router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('./views/notFound.vue')
    },

    ...home,
  ]
})

export default router
