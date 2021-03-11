<template>
  <div>
    Bismillah, Hello Vue
    <IconAccessibility />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted
} from 'vue'
import { useStore } from 'vuex'

import { SET_TITLE } from '@/stores/Common/commonTypes'

import IconAccessibility from '/@vite-icons/cil/globe-alt'

export default defineComponent({
  name: 'Home',

  components: {
    IconAccessibility
  },

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
