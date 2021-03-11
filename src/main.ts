import { createApp } from 'vue'

import app from './app.vue'
import store from './store'
import router from './router'

import 'virtual:windi.css'
import './styles/index.scss'

createApp(app)
  .use(store)
  .use(router)
  .mount('#app')
