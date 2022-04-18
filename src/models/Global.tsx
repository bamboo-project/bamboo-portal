import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const GlobalModel = {
  namespace: 'global',

  state: {
    loading: false,
  },

  effects: {},
  reducers: {
    openGlobalLoading(state: { loading: boolean }, _: any) {
      state.loading = true
    },
    closeGlobalLoading(state: { loading: boolean }, _: any) {
      state.loading = false
    },
  },
}

export default GlobalModel
