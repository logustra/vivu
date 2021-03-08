import * as types from './commonTypes'

export default {
  /**
   * @param  {{commit:Function}} {commit}
   * @param  {string} response
   */
  [types.SET_TITLE]: ({ commit }: { commit: Function }, response: string) => {
    commit(types.SET_TITLE, response)
  },
}
