import axios, { AxiosInstance } from 'axios'

export default class Http {
  protected axios: AxiosInstance

  /**
   * @param  {{}} axiosConfig
   */
  public constructor (axiosConfig: {}) {
    this.axios = axios.create(axiosConfig)
  }

  /**
   * @param  {string} url
   * @param  {{}} params?
   * @param  {{}} config?
   * @returns any
   */
  public get (url: string, params?: {}, config?: {}): any {
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
   * @returns any
   */
  public post (url: string, data: {}, config?: {}): any {
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
   * @returns any
   */
  public put (url: string, data: {}, config?: {}): any {
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
   * @returns any
   */
  public patch (url: string, data: {}, config?: {}): any {
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
   * @returns any
   */
  public delete (url: string, config?: {}): any {
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
