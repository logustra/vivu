const routes: {}[] = [
  {
    path: '/example',
    name: 'example.index',
    component: (): Promise<any> => {
      return new Promise((resolve, reject) => {
        resolve(import('./views/exampleIndex.vue'))
        reject(new Error('Failed to load page'))
      })
    }
  }
]

export default routes
