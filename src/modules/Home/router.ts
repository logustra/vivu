const routes: {}[] = [
  {
    path: '/',
    name: 'home.index',
    component: (): Promise<any> => {
      return new Promise((resolve, reject) => {
        resolve(import('./views/home.vue'))
        reject(new Error('Failed to load page'))
      })
    }
  }
]

export default routes
