import { AxiosError } from 'axios'
import * as types from './exampleTypes'
import {
  ExampleState,
  ExampleDataModel
} from '../../typings/exampleTypings'

const mutations: {[key: string]: Function} = {
  /**
   * @param  {ExampleState} state
   */
  [types.EXAMPLE_REQUEST]: (state: ExampleState) => {
    state.isFetching = true
    state.isError = false
  },

  /**
   * @param  {ExampleState} state
   * @param  {ExampleDataModel[]} response
   */
  [types.EXAMPLE_SUCCESS]: (state: ExampleState, response: ExampleDataModel[]) => {
    state.data = response
    state.isFetching = false
  },

  /**
   * @param  {ExampleState} state
   * @param  {AxiosError} response
   */
  [types.EXAMPLE_ERROR]: (state: ExampleState, response: AxiosError) => {
    state.isFetching = false
    state.isError = response
  }
}

export default mutations
