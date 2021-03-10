import * as types from './commonTypes'

const actions: {[key: string]: Function} = {
  /**
   * @param  {{commit:Function}} {commit}
   * @param  {string} response
   */
  [types.SET_TITLE]: ({ commit }: { commit: Function }, response: string) => {
    commit(types.SET_TITLE, response)
  }
}

export default actions
