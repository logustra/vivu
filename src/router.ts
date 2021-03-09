import { 
  createRouter,
  createWebHashHistory
} from 'vue-router'

const domainRouterFiles = import.meta.globEager('../src/modules/**/router.ts')
const domainRoutes: any = []

for (const path in domainRouterFiles) {
  domainRoutes.push(...domainRouterFiles[path].default)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('./views/notFound.vue')
    },

    ...domainRoutes,
  ]
})

export default router
