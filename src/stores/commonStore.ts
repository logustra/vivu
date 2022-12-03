import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  /**
   * DESC:
   * common states and actions
   */
  const usedTitle = ref('')

  function setTitle(title: string) {
    usedTitle.value = title
    document.title = title
  }

  return {
    usedTitle,
    setTitle,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
