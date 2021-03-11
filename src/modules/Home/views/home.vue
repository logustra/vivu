<template>
  <div>
    Bismillah, Hello World!
    <CilGlobeAlt class="inline" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted
} from 'vue'
import { useStore } from 'vuex'

import { SET_TITLE } from '@/stores/Common/commonTypes'

export default defineComponent({
  name: 'Home',

  setup () {
    const store = useStore()
    const common = store.getters.common
    const setTitle = (title) => store.dispatch(SET_TITLE, title)

    onMounted(() => {
      setTitle('home')
      console.log(common.title)
      console.log(import.meta.env.VITE_APP_ENV)
    })
  }
})
</script>
