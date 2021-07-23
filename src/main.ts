import { createApp } from 'vue'

import App from './app.vue'
import store from './store'
import router from './router'
import locales from './locales'

createApp(App)
  .use(store)
  .use(router)
  .use(locales)
  .mount('#app')
