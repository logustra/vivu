import * as types from './exampleTypes'
import { 
  ExampleState,
  ExampleDataModel
} from '~~/typings/exampleTypings'

const mutations: {[key: string]: Function} = {
  [types.EXAMPLE_REQUEST]: (state: ExampleState) => {
    state.isFetching = true
  },

  [types.EXAMPLE_SUCCESS]: (state: ExampleState, response: ExampleDataModel[]) => {
    state.data = response
  },

  [types.EXAMPLE_ERROR]: (state: ExampleState, response: boolean) => {
    state.data = []
    state.isFetching = false
    state.isError = response
  }
}

export default mutations
