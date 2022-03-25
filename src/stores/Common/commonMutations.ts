import * as types from './commonTypes'
import type { CommonState } from '@/typings/commonTypings'

const mutations: Record<string, Function> = {
  /**
   * @param  {CommonState} state
   * @param  {string} response
   */
  [types.SET_TITLE]: (state: CommonState, response: string) => {
    document.title = response
    state.title = response
  },
}

export default mutations
