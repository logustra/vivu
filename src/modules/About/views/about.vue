<template>
  <div class="text-center">
    about
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

import { useCommon } from '@/composable'

const {
  common,
  setTitle
} = useCommon()

onMounted(() => {
  setTitle('about')
  console.log(common.title)
})
</script>
