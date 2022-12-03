<script lang="ts" setup>
import { useExampleStore } from '../stores/exampleStore'

const exampleStore = useExampleStore()
const { example } = storeToRefs(exampleStore)
const { exampleRequest } = exampleStore

onMounted(() => {
  exampleRequest(1)

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
