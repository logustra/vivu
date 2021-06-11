<template>
  <div>Bismillah, Hello World!</div>
</template>

<script lang="ts">
import { 
  defineComponent, 
  onMounted 
} from 'vue'
import { useStore } from 'vuex'

import { EXAMPLE_REQUEST } from '@/stores/Example/exampleTypes'

export default defineComponent({
  name: 'Example',
  setup () {
    const store = useStore()
    const example = store.getters.example
    const exampleRequest = () => store.dispatch(EXAMPLE_REQUEST)

    onMounted (() => {
      exampleRequest()
      console.log(example)
    })
  }
})
</script>

<style lang="scss" scoped>
  /**
   * DESC:
   * your style
   */
</style>
