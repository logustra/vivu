import * as types from './commonTypes'
import { CommonState } from '/@/typings/commonTypings'

export default {
  /**
   * @param  {CommonState} state
   * @param  {string} response
   */
  [types.SET_TITLE]: (state: CommonState, response: string) => {
    document.title = response
    state.title = response
  }
}
