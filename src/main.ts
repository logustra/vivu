import { createApp } from 'vue'

import app from './app.vue'
import store from './store'
import router from './router'
import locales from './locales'

import './styles/vendors/tailwind.scss'
import './styles/vendors/nprogress.scss'
import './styles/index.scss'

createApp(app)
  .use(store)
  .use(router)
  .use(locales)
  .mount('#app')
