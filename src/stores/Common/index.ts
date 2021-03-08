
import { Module } from 'vuex'

import state from './commonState'
import getters from './commonGetters'
import mutations from './commonMutations'
import actions from './commonActions'

const common: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default common