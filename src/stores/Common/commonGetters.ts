import { CommonState } from '@/typings/commonTypings'

const getters: {[key: string]: Function} = {
  common: (state: CommonState) => state
}

export default getters
