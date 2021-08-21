import { Router } from 'vue-router'
import { useNProgress } from '@vueuse/integrations'
import {
  setErrorPage,
  getErrorPage,
  delErrorPage
} from './storage'

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
     * navigate to the page that is
     * defined after router.onError
     */
    const errorPage = getErrorPage()
    if (errorPage.length) {
      router.push({ name: errorPage })
      delErrorPage()
    }

    /**
     * DESC:
     * end progress bar
     */
    done()
  })

  router.onError((error, to) => {
    /**
     * DESC:
     * force users to reload their browser and
     * navigate it to the page that they want to visit
     * to achieve smooth code update after release
     */
    console.error(error)
    setErrorPage(String(to.name))
    location.reload()
  })

  return router
}

export default routerGuard
