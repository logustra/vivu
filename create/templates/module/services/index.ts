import ExampleService from './exampleService'
import { httpService } from '@/services'

export const exampleService = new ExampleService(httpService)
