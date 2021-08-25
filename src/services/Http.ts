import axios, {
  AxiosInstance,
  AxiosResponse
} from 'axios'

export default class Http {
  protected axios: AxiosInstance

  /**
   * @param  {{}} axiosConfig
   */
  public constructor (axiosConfig: {}) {
    this.axios = axios.create(axiosConfig)
  }

  /**
  * @returns any
  */
  public interceptors (): any {
    this.axios.interceptors.response.use(response => {
      return response
    }, error => {
      throw error
    })
  }

  /**
   * @param  {string} url
   * @param  {{}} params?
   * @param  {{}} config?
   * @returns Promise
   */
  public get (url: string, params?: {}, config?: {}): Promise<AxiosResponse<any>> {
    this.interceptors()

    try {
      return this.axios.request({
        method: 'get',
        url,
        params,
        ...config
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   * @param  {{}} data
   * @param  {{}} config?
   * @returns Promise
   */
  public post (url: string, data: {}, config?: {}): Promise<AxiosResponse<any>> {
    this.interceptors()

    try {
      return this.axios.request({
        method: 'post',
        url,
        data,
        ...config
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   * @param  {{}} data
   * @param  {{}} config?
   * @returns Promise
   */
  public put (url: string, data: {}, config?: {}): Promise<AxiosResponse<any>> {
    this.interceptors()

    try {
      return this.axios.request({
        method: 'put',
        url,
        data,
        ...config
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   * @param  {{}} data
   * @param  {{}} config?
   * @returns Promise
   */
  public patch (url: string, data: {}, config?: {}): Promise<AxiosResponse<any>> {
    this.interceptors()

    try {
      return this.axios.request({
        method: 'patch',
        url,
        data,
        ...config
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   * @param  {{}} config?
   * @returns Promise
   */
  public delete (url: string, config?: {}): Promise<AxiosResponse<any>> {
    this.interceptors()

    try {
      return this.axios.request({
        method: 'delete',
        url,
        ...config
      })
    } catch (error) {
      throw error
    }
  }
}
