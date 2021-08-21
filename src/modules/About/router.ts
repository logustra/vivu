const routes: {}[] = [
  {
    path: '/about',
    name: 'about.index',
    component: () => import('./views/about.vue')
  }
]

export default routes
