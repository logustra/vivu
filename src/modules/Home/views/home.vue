<script lang="ts" setup>
import {
  computed,
  onMounted,
  reactive,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import { VFormItem } from 'molecules'
import { useCommon } from '@/composables'

const {
  t,
  availableLocales,
  locale,
} = useI18n()

const { setTitle } = useCommon()

function toggleLocales() {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

onMounted(() => {
  setTitle('home')
})

const form = reactive({
  name: '',
})

const formRules = computed(() => ({
  name: { required },
}))

const v$ = useVuelidate(formRules, form)
</script>

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
