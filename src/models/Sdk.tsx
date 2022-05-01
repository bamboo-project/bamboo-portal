import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const SdkModel = {
  namespace: 'sdk',

  state: {
    NeoLineN3: false,
  },

  effects: {
    
  },
  reducers: {
    initNeoLineN3Success(state: any, _: any) {
      state.NeoLineN3 = true
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        window.addEventListener('NEOLine.N3.EVENT.READY', aa => {
          window.neolineN3Instance = new NEOLineN3.Init()
          dispatch({
            type: 'initNeoLineN3Success',
          })
        })
      })
    },
  },
}

export default SdkModel
