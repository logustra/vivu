import { Module } from 'vuex'

import state from './exampleState'
import getters from './exampleGetters'
import mutations from './exampleMutations'
import actions from './exampleActions'

const module: Module<any, any> = {
  state,
  getters,
  mutations,
  actions
}

export default module
