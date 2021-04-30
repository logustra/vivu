import { createI18n } from 'vue-i18n'
import camelCase from 'camelcase'
import { LANGUAGES } from '@/constants'

const messages = {}
const globalLocales = Object.fromEntries(
  Object.entries(import.meta.globEager('./*.yaml'))
    .map(([key, value]) => {
      return [key.slice(9, -5), value.default]
    })
)

const domainLocaleFiles = import.meta.globEager('../modules/**/locale.ts')
const domainLocales = {}

for (const path in domainLocaleFiles) {
  for (const key in domainLocaleFiles[path]) {
    domainLocales[key] = domainLocaleFiles[path][key]
  }
}

LANGUAGES.forEach(language => {
  messages[language] = {
    ...globalLocales[language]
  }

  for (const key in domainLocales) {
    const regLanguage = new RegExp(`${camelCase(language, { pascalCase: true })}$`, 'g')
    const module = key.replace(camelCase(language, { pascalCase: true }), '')

    if (regLanguage.test(key)) {
      messages[language][module] = domainLocales[key]
    }
  }
})

const locales = createI18n({
  legacy: false,
  locale: 'en',
  messages
})

export default locales
