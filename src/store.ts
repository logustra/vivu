import { createStore } from 'vuex'
import globalStores from './stores'

const domainStoreFiles = import.meta.globEager('../src/modules/**/store.ts')
let domainStores = {}

for (const path in domainStoreFiles) {
  for (const key in domainStoreFiles[path]) {
    domainStores[key] = domainStoreFiles[path][key]
  }
}

const store = createStore({
  strict: import.meta.env.VITE_APP_ENV !== 'production',
  modules: { 
    ...globalStores,
    ...domainStores
  }
})

export default store
