const routes: {}[] = [
  {
    path: '/about',
    name: 'about.index',
    component: (): Promise<any> => {
      return new Promise((resolve, reject) => {
        resolve(import('./views/about.vue'))
        reject(new Error('Failed to load page'))
      })
    }
  }
]

export default routes
