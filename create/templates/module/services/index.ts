import { httpService } from '@/services'
import ExampleService from './exampleService'

export const exampleService = new ExampleService(httpService)
