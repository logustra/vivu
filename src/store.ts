import { createStore } from 'vuex'
import globalStores from './stores'

const domainStoreFiles = import.meta.globEager('../src/modules/**/store.ts')
const domainStores = {}

for (const path in domainStoreFiles) {
  for (const key in domainStoreFiles[path]) {
    domainStores[key] = domainStoreFiles[path][key]
  }
}

const store = createStore({
  strict: import.meta.env.DEV,
  modules: {
    ...globalStores,
    ...domainStores
  }
})

export default store
