<template>
  <div class="flex justify-center items-center flex-col">
    <div>
      {{ t('hello') }}
      <CilGlobeAlt class="inline" />
    </div>
    <ElButton @click="toggleLocales">
      👋
    </ElButton>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

import { SET_TITLE } from '@/stores/Common/commonTypes'

export default defineComponent({
  name: 'Home',

  setup () {
    const { t, availableLocales, locale } = useI18n()

    const store = useStore()
    const common = store.getters.common
    const setTitle = (title) => store.dispatch(SET_TITLE, title)

    function toggleLocales () {
      const locales = availableLocales
      locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }

    onMounted(() => {
      setTitle('home')
      console.log(common.title)
      console.log(import.meta.env.VITE_APP_ENV)
    })

    return {
      t,
      toggleLocales
    }
  }
})
</script>
