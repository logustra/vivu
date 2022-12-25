import { createApp } from 'vue'

import App from './app.vue'
import store from './store'
import router from './router'
import locales from './locales'

import '@unocss/reset/tailwind.css'
import '@/styles/vendors/element.scss'
import 'uno.css'
import '@/styles/vendors/nprogress.scss'
import '@/styles/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(locales)
  .mount('#app')
