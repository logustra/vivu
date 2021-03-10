import Http from '@/services/Http'

export default class ExampleService {
  protected http: Http

  public constructor (http: Http) {
    this.http = http
  }

  public async get (url: string, params?: {}, responseType?: string) {
    try {
      return await this.http.get(url, params, responseType)
    } catch (error) {
      throw error
    }
  }
}
