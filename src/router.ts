import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

import { routerGuard } from '@/utils'

const domainRouterFiles = import.meta.globEager('../src/modules/**/router.ts')
const domainRoutes: RouteRecordRaw[] = []

for (const path in domainRouterFiles) {
  domainRoutes.push(...domainRouterFiles[path].default)
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('./views/notFound.vue')
    },

    ...domainRoutes
  ]
})

export default routerGuard(router)
