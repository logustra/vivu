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
   */
  public post (url: string, data: {}): any {
    try {
      return this.axios.request({
        method: 'post',
        url,
        data
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   * @param  {{}} data
   */
  public put (url: string, data: {}): any {
    try {
      return this.axios.request({
        method: 'put',
        url,
        data
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   * @param  {{}} data
   */
  public patch (url: string, data: {}): any {
    try {
      return this.axios.request({
        method: 'patch',
        url,
        data
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @param  {string} url
   */
  public delete (url: string): any {
    try {
      return this.axios.request({
        method: 'delete',
        url
      })
    } catch (error) {
      throw error
    }
  }
}
