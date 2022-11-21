<script lang="ts" setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import { EXAMPLE_REQUEST } from '@/stores/Example/exampleTypes'

const store = useStore()
const example = store.getters.example
const exampleRequest = () => store.dispatch(EXAMPLE_REQUEST)

onMounted (() => {
  exampleRequest()
  // eslint-disable-next-line no-console
  console.log(example)
})
</script>

<template>
  <div>Bismillah, Hello World!</div>
</template>

<style lang="scss" scoped>
  /**
   * DESC:
   * your style
   */
</style>
