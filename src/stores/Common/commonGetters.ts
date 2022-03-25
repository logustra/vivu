import type { CommonState } from '@/typings/commonTypings'

const getters: Record<string, Function> = {
  common: (state: CommonState) => state,
}

export default getters
