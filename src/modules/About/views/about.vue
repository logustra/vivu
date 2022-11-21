<script lang="ts" setup>
import { onMounted } from 'vue'

import { useCommon } from '@/composable'

const { setTitle } = useCommon()

onMounted(() => {
  setTitle('about')
})
</script>

<template>
  <div class="text-center">
    about
  </div>
</template>
