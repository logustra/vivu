const routes: {}[] = [
  {
    path: '/',
    name: 'home.index',
    component: () => import('./views/home.vue')
  }
]

export default routes
