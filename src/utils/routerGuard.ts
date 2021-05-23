import { useNProgress } from '@vueuse/integrations'

const { start, done } = useNProgress(null, {
  showSpinner: false
})

const routerGuard: Function = (router: any) => {
  router.beforeEach((to: any, from: any, next: any) => {
    /**
     * DESC:
     * start progress bar
     */
    if (to.path) start()
    next()
  })

  router.afterEach(() => {
    /**
     * DESC:
     * end progress bar
     */
    done()
  })

  return router
}

export default routerGuard
