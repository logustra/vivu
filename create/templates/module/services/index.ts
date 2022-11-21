import createService from '@/services/createService'

export const exampleService = createService(
  String(import.meta.env.VITE_API_URL),
  Number(import.meta.env.VITE_TIMEOUT),
)
