import createService from './createService'

export const httpService = createService(
  String(import.meta.env.VITE_API_URL),
  Number(import.meta.env.VITE_TIMEOUT),
)
