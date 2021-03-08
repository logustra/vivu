import axios, { AxiosInstance } from 'axios'

export default class Http {
  protected axios: AxiosInstance
  
  /**
   * @param  {object} axiosConfig
   */
  public constructor (axiosConfig: object) {
    this.axios = axios.create(axiosConfig)
  }

  /**
   * @param  {string} url
   * @param  {object} params?
   * @param  {object} config?
   */
  public get (url: string, params?: object, config?: object) {
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
   * @param  {object} data
   */
  public post (url: string, data: object) {
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
   * @param  {object} data
   */
  public put (url: string, data: object) {
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
   * @param  {object} data
   */
  public patch (url: string, data: object) {
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
  public delete (url: string) {
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
