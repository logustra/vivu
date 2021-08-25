<template>
  <ElFormItem
    class="v-form-item"
    :class="{'-error': error}"
  >
    <slot />

    <transition name="el-zoom-in-top">
      <div
        v-if="error"
        class="el-form-item__error"
      >
        <slot name="error" />
      </div>
    </transition>
  </ElFormItem>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

/* eslint-disable-next-line */
const props = defineProps({
  error: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>

<style lang="scss">
.v-form-item {
  &.-error {
    /* stylelint-disable-next-line */
    .el-input__inner,
    .el-textarea__inner {
      border: 1px solid theme('colors.red.400');
    }
  }
}
</style>
