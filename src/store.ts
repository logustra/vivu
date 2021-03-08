/**
 * TODO:
 * dynamically read file inside modules
 * using require.context. https://github.com/vitejs/vite/issues/77
 */

import { createStore } from 'vuex'
import globalStores from './stores'

const store = createStore({
  strict: import.meta.env.VITE_APP_ENV !== 'production',
  modules: { ...globalStores }
})

export default store