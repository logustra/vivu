import { acceptHMRUpdate, defineStore } from 'pinia'
import { API_EXAMPLE } from '../constants/exampleConstant'
import { exampleService } from '../services/exampleService'

export const useExampleStore = defineStore('exampleStore', () => {
  /**
   * DESC:
   * example states and actions
   */
  const example = reactive({
    data: [],
    isFetching: false,
    isError: false,
    errorMessage: '',
  })

  async function exampleRequest(id: number) {
    example.isFetching = true

    try {
      const data = await exampleService.get(API_EXAMPLE + id)

      example.data = data
      example.isFetching = false
      example.isError = false
    }
    catch (error) {
      example.isError = true
      example.errorMessage = (error as any).response.data.message
    }
  }

  return {
    example,
    exampleRequest,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot))
