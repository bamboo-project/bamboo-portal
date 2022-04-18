import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
// import * as AuthService from '@/services/Auth'
// import * as AuthUtils from '@/utils/auth'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const IndexModel = {
  namespace: 'auth',

  state: {
    isLogin: false,
    userInfo: {},
  },

  effects: {
    /**
     * 微信授权登录
     * @param param0
     * @param param1
     */
    *mpLogin({ payload }, { call, put }) {
      try {
        const { code } = payload

        const res = yield call(AuthService.doMpLogin, { code })

        if (res.code === 200) {
          const { user_id, access_token, expires_in, jti, refresh_token, scope } = res.data
          AuthUtils.setAuth({ userId: user_id, token: access_token, tokenRf: refresh_token, expires: expires_in })

          // 登录成功跳转
          console.log('登录成功跳转: ')

          window.location.href = '/'
        }
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * 自动登录
     * @param _
     * @param param1
     */
    *login(_, { call, put }) {
      /**
       * 检查本地Token
       */

      const { userId } = AuthUtils.getAuth()
      if (!userId) {
        return
      }
      /**
       * 使用Token登录
       */

      /**
       * 获取用户信息
       */
      put({
        type: 'refreshUser',
      })
    },
    /**
     * 刷新登录用户信息
     * @param _
     * @param param1
     */
    *refreshUser(_, { call, put, select }) {
      try {
        const response = yield call(AuthService.getUserInfo)
        if (response && response.code === 200) {
          yield put({
            type: 'refreshUserSuccess',
            payload: { userData: response.data },
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
    /**
     * 退出登录
     * @param _
     * @param param1
     */
    *logout(_, { call, put, select }) {
      AuthUtils.clearAuth()

      window.location.href = '/'
    },
  },
  reducers: {
    loginSuccess(state, { payload }) {
      const { userData } = payload
      state.userInfo = userData.userInfo
      state.chainWallet = userData.chainWallet
      state.isLogin = true
    },
    refreshUserSuccess(state, { payload }) {
      const { userData } = payload
      state.userInfo = userData.userInfo
      state.chainWallet = userData.chainWallet
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
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname }) => {
    //     if (localStorage.theme == '"light"') {
    //       document.querySelector('html').classList.remove('dark')
    //     } else {
    //       document.querySelector('html').classList.add('dark')
    //     }
    //     // console.log('pathname: ', pathname)
    //     // 排除不需要自动登录的页面
    //     const pagePaths = ['/login', '/404']
    //     let is = false
    //     pagePaths.map(path => {
    //       if (path === pathname) {
    //         is = true
    //         return
    //       }
    //     })
    //     if (!is) {
    //       const { AUTH_TOKEN } = AuthUtils.getAuth()

    //       if (AUTH_TOKEN && AUTH_TOKEN.length > 0) {
    //         // 开始loading
    //         dispatch({
    //           type: 'global/openGlobalLoading',
    //         })
    //         dispatch({
    //           type: 'refreshUser',
    //         })
    //       }
    //     }
    //   })
    // },
  },
}

export default IndexModel
