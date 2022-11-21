import { extend } from 'umi-request'

function createService(
  baseUrl: string,
  timeout: number,
) {
  const STATUS_CODES = {
    401: 'Unauthorized',
    404: 'Page not found',
  }

  const request = extend({
    prefix: baseUrl,
    timeout,
    errorHandler(error) {
      if (error.response) {
        /**
         * DESC:
         * the request was made and the server responded with a status code
         * that falls out of the range of 2xx
         */
        console.error(STATUS_CODES[error.response.status])
      }
      else {
        /**
         * DESC:
         * the request was made but no response was received
         * or error occurs when setting up the request.
         */
        console.error(error.message)
      }

      return error
    },
  })

  request.interceptors.response.use((response) => {
    return response
  })

  return request
}

export default createService
