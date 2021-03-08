import { createApp } from 'vue'

import app from './app.vue'
import store from './store'
import router from './router'

/**
 * NOTE:
 * not support HMR yet. https://github.com/vitejs/vite/issues/9
 */
import './styles/index.scss'

createApp(app)
  .use(store)
  .use(router)
  .mount('#app')
