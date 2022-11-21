<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps({
  example: {
    type: String,
    required: true,
    default: '',
  },
})

onMounted(() => {
  // eslint-disable-next-line no-console
  console.log(props.example)
})
</script>

<template>
  <div class="v-example">
    <slot />
  </div>
</template>

<style lang="scss">
.v-example {
  /**
   * DESC:
   * your style
   */
}
</style>
