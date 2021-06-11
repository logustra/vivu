import { createApp } from 'vue'

import app from './app.vue'
import store from './store'
import router from './router'
import locales from './locales'

createApp(app)
  .use(store)
  .use(router)
  .use(locales)
  .mount('#app')
