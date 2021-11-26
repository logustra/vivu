import { useStore } from 'vuex'

import { SET_TITLE } from '@/stores/Common/commonTypes'

export default function (): any {
  const store = useStore()
  const common = store.getters.common
  const setTitle = (title: string) => store.dispatch(SET_TITLE, title)

  return {
    common,
    setTitle
  }
}
