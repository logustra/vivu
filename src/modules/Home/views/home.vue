<template>
  <div class="flex justify-center items-center flex-col">
    <div>
      {{ t('hello') }}
      <CilGlobeAlt class="inline" />
    </div>
    <ElButton @click="toggleLocales">
      👋
    </ElButton>

    <ElForm>
      <VFormItem :error="v$.name.$error">
        <ElInput
          v-model="form.name"
          placeholder="Name"
          @input="v$.name.$touch"
        />

        <template #error>
          <div v-if="v$.name.required.$invalid">
            Name field is required
          </div>
        </template>
      </VFormItem>
    </ElForm>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  onMounted
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import { SET_TITLE } from '@/stores/Common/commonTypes'

import { VFormItem } from 'molecules'

export default defineComponent({
  name: 'Home',
  components: { VFormItem },
  setup () {
    const {
      t,
      availableLocales,
      locale
    } = useI18n()

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
    })

    const form = reactive({
      name: ''
    })

    const formRules = computed(() => ({
      name: { required }
    }))

    const v$ = useVuelidate(formRules, form)

    return {
      t,
      toggleLocales,
      v$,
      form
    }
  }
})
</script>
