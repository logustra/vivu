<template>
  <div class="v-example">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  onMounted,
} from 'vue'

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

<style lang="scss">
.v-example {
  /**
   * DESC:
   * your style
   */
}
</style>
