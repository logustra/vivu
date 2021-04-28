const routes: {}[] = [
  {
    path: '/example',
    name: 'example.index',
    component: () => import('./views/exampleIndex.vue')
  }
]

export default routes
