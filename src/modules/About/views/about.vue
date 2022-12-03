<script lang="ts" setup>
import { onMounted } from 'vue'

import { useCommonStore } from '@/stores/commonStore'

const commonStore = useCommonStore()

onMounted(() => {
  commonStore.setTitle('About')
})
</script>

<template>
  <div class="text-center">
    about
  </div>
</template>
