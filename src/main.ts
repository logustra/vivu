import { createApp } from 'vue'

import app from './app.vue'
import store from './store'
import router from './router'

import './styles/vendors/tailwind.scss'
import './styles/vendors/nprogress.scss'
import './styles/index.scss'

createApp(app)
  .use(store)
  .use(router)
  .mount('#app')
