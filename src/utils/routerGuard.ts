import { Router } from 'vue-router'
import { useNProgress } from '@vueuse/integrations'

const { start, done } = useNProgress(null, {
  showSpinner: false
})

const routerGuard: Function = (router: Router) => {
  router.beforeEach((to, from, next) => {
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

  router.onError(() => {
    location.reload()
  })

  return router
}

export default routerGuard
