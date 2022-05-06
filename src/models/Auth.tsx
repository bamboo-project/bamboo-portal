import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
import * as UserService from '@/services/User'
import * as ConnectUtils from '@/utils/connect'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
import { message } from 'antd'

const IndexModel = {
  namespace: 'auth',

  state: {
    isLogin: false,
    userInfo: {},
    wallet: {},
    isOpenConnectWalletModal: false,
  },

  effects: {
    *connectWallet({ payload }, { call, put, select }) {
      const NeoLineN3InitStatus = yield select(state => state['sdk'].NeoLineN3)
      if (!NeoLineN3InitStatus) {
        return
      }
      try {
        const result = yield window.neolineN3Instance.getAccount()
        const { label, address } = result
        yield put({
          type: 'refreshUser',

          payload: {
            walletId: address,
          },
        })
      } catch (error) {
        const { type, description, data } = error
        switch (type) {
          case 'NO_PROVIDER':
            message.warning('No provider available')
            break
          case 'CANCELED':
            message.warning('The user cancels, or refuses the dapps request')
            break
          default:
            console.error(error)
            break
        }
      }
    },
    *getNeoAccount({ payload }, { call, take, put, race }) {
      try {
        yield take('sdk/initNeoLineN3Success')
        console.log('init ne3 success')
        const { account } = yield race({
          account: call(window.neolineN3Instance.getAccount),
          timeout: call(delay, 3000),
        })
        if (!account) {
          yield put({
            type: 'logout',
            payload: {},
          })
          return
        }
        yield put({
          type: 'refreshUser',
          payload: {
            walletId: account.address,
          },
        })
      } catch (error) {
        console.log('error: ', error)
        const { type, description, data } = error
        switch (type) {
          case 'NO_PROVIDER':
            console.log('No provider available.')
            break
          case 'CONNECTION_DENIED':
            console.log('The user rejected the request to connect with your dApp')
            break
          case 'CHAIN_NOT_MATCH':
            console.log(
              'The currently opened chain does not match the type of the call chain, please switch the chain.',
            )
            break
          default:
            // Not an expected error object.  Just write the error to the console.
            console.error(error)
            break
        }
      }
    },
    *refreshUser({ payload }: any, { call, put, select }) {
      try {
        const response = yield call(UserService.getUser, { walletId: payload.walletId })
        if (response && response.code === 0) {
          ConnectUtils.setConnect({ isConnect: true, connectType: 'NEO3' })
          yield put({
            type: 'refreshUserSuccess',
            payload: { userData: response.data },
          })
          yield put({
            type: 'balance/getBalance',
            payload: {
              walletId: payload.walletId,
            },
          })
          yield put({
            type: 'closeConnectWalletModal',
          })
        } else {
          yield put({
            type: 'logout',
          })
        }
      } catch (e) {
        console.error(e)
      } finally {
        yield delay(300)
        yield put({
          type: 'global/closeGlobalLoading',
        })
      }
    },
    *logout(_, { call, put, select }) {
      ConnectUtils.clearConnect()
      window.location.href = '/'
    },
  },
  reducers: {
    openConnectWalletModal(state: any, _) {
      state.isOpenConnectWalletModal = true
    },
    closeConnectWalletModal(state: any, _) {
      state.isOpenConnectWalletModal = false
    },
    loginSuccess(state, { payload }) {
      const { userData } = payload
      state.userInfo = userData.userInfo
      state.chainWallet = userData.chainWallet
      state.isLogin = true
    },
    refreshUserSuccess(state, { payload }) {
      const { userData } = payload
      state.userInfo = userData
      state.isLogin = true
    },
    logoutSuccess(state, { payload }) {
      state.isLogin = false
      state.userInfo = {
        user: {},
        userId: '', // 用户ID
      }
      state.autoLoginFailed = true
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const pagePaths = ['/login', '/404']
        let is = false
        pagePaths.map(path => {
          if (path === pathname) {
            is = true
            return
          }
        })
        if (!is) {
          const connectInfo = ConnectUtils.getConnect()
          if (connectInfo[ConnectUtils.WALLET_IS_CONNECT]) {
            dispatch({
              type: 'global/openGlobalLoading',
            })
            dispatch({
              type: 'getNeoAccount',
            })
          }
        }
      })
    },
  },
}

export default IndexModel
