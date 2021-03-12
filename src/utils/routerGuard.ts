import { useNProgress } from '@vueuse/integrations'

const { start, done } = useNProgress(null, {
  showSpinner: false
})

const routerGuard: Function = (router: any) => {
  router.beforeResolve((to: any, from: any, next: any) => {
    if (to.path) start()
    next()
  })

  router.afterEach(() => {
    done()
  })

  return router
}

export default routerGuard
