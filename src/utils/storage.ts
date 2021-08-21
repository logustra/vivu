import cookie from 'js-cookie'
import { isUndefined } from './filters'

const expired = Number(import.meta.env.VITE_EXPIRED)
const storageErrorPage = String(import.meta.env.VITE_STORAGE_ERROR_PAGE)

export const setErrorPage = (
  name: string,
  expires = expired
): void => {
  if (!isUndefined(name)) {
    cookie.set(storageErrorPage, name, { expires })
  }
}

export const getErrorPage = (): string => {
  return cookie.get(storageErrorPage) || ''
}

export const delErrorPage = (): void => {
  cookie.remove(storageErrorPage)
}
