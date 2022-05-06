import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
import * as UserService from '@/services/User'
import * as ConnectUtils from '@/utils/connect'
import { encode, decode } from 'js-base64'
import config from '@/config'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
import { message } from 'antd'

const BalanceModel = {
  namespace: 'balance',

  state: {
    isGetBalanceSuccess: false,
    userNft: {},
    user: {},
  },

  effects: {
    *getBalance({ payload }, { take, put, select }) {
      const { walletId, isSelf } = payload
      try {
        const NeoLineN3InitStatus = yield select(state => state['sdk'].NeoLineN3)
        if (!NeoLineN3InitStatus) {
          yield take('sdk/initNeoLineN3Success')
        }
        const { scriptHash } = yield window.neolineN3Instance.AddressToScriptHash({ address: walletId })
        const result = yield window.neolineN3Instance.invokeRead({
          scriptHash: '0x7d65a781d4a06306e75f107150d982fd63a689c7',
          operation: 'tokensOf',
          args: [
            {
              type: 'Hash160',
              value: scriptHash,
            },
          ],
          signers: [
            {
              account: payload.walletId,
              scopes: 1,
            },
          ],
        })
        if (!result || result.state === 'FAULT') {
          //
        }
        var token = ''
        if (result.stack && result.stack.length > 0) {
          if (result.stack[0].iterator.length > 0) {
            token = result.stack[0].iterator[result.stack[0].iterator.length - 1].value
          } else {
            if (isSelf) {
              location.href = '/home'
            }
            return
          }
        } else {
          if (isSelf) {
            location.href = '/home'
          }
        }
        const innovationResult = yield window.neolineN3Instance.invokeRead({
          scriptHash: '0x7d65a781d4a06306e75f107150d982fd63a689c7',
          operation: 'propertiesJson',
          args: [
            {
              type: 'ByteArray',
              value: token,
            },
          ],
          signers: [
            {
              account: scriptHash,
              scopes: 1,
            },
          ],
        })

        if (innovationResult == null && innovationResult.result === 'FAULT') {
          if (isSelf) {
            location.href = '/home'
          }
          return
        }
        const propertiesIterator = innovationResult.stack[0].value

        const nftInfo = JSON.parse(decode(propertiesIterator))
        const buffer = Buffer.from(token, 'base64')
        const bufString = buffer.toString('hex')

        nftInfo.tokenId = parseInt(bufString, 16)
        if (nftInfo.version >= config.nftVersion) {
          yield put({
            type: 'getBalanceSuccess',
            payload: {
              balance: nftInfo,
              walletAddress: payload.walletId,
            },
          })
        } else {
          if (isSelf) {
            location.href = '/home'
          }
        }
      } catch (error) {
        console.log('error: ', error)
        const { type, description, data } = error
        switch (type) {
          case 'NO_PROVIDER':
            console.log('No provider available.')
            break
          case 'CONNECTION_REFUSED':
            console.log('Connection dApp not connected. Please call the "connect" function.')
            break
          case 'RPC_ERROR':
            console.log('There was an error when broadcasting this transaction to the network.')
            break
          default:
            // Not an expected error object.  Just write the error to the console.
            console.error(error)
            break
        }
      }
    },
  },
  reducers: {
    getBalanceSuccess(state: any, { payload }) {
      console.log('payload333: ', payload)
      state.isGetBalanceSuccess = true
      state.user[payload.walletAddress] = {}
      state.user[payload.walletAddress].userNft = payload.balance
      state.user[payload.walletAddress].success = true
    },
  },
  subscriptions: {},
}

export default BalanceModel
