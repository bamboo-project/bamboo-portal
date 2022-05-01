import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
import * as UserService from '@/services/User'
import * as ConnectUtils from '@/utils/connect'
import { encode, decode } from 'js-base64'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
import { message } from 'antd'

const BalanceModel = {
  namespace: 'balance',

  state: {
    isGetBalanceSuccess: false,
    balance: {},
  },

  effects: {
    *getBalance({ payload }, { take, put }) {
      console.log('payload: ', payload)
      try {
        const { scriptHash } = yield window.neolineN3Instance.AddressToScriptHash({ address: payload.walletId })
        console.log('scriptHash: ', scriptHash, payload.walletId)
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
        console.log('result: ', result, encode('{"foo":"bar"}'))
        if (!result || result.state === 'FAULT') {
          //
        }
        var token = ''
        if (result.stack && result.stack.length > 0) {
          token = result.stack[0].iterator[0].value
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
        }
        console.log('innovationResult: ', innovationResult)
        const propertiesIterator = innovationResult.stack[0].value

        console.log('propertiesIterator: ', Buffer.from(propertiesIterator, "base64").toString("ascii"))
        const tokenProperties = {}
        //   propertiesIterator.forEach((tokenProperty) => {
        //     const objectPropertyName = Buffer.from(tokenProperty.key.value, "base64").toString("ascii")
        //     const objectPropertyValue = Buffer.from(tokenProperty.value.value, "base64").toString("ascii")
        //     tokenProperties[objectPropertyName] = objectPropertyValue
        //   })
        yield put({
          type: 'getBalanceSuccess',
          payload: {
            balance: result,
          },
        })
      } catch (error) {
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
      console.log('payload: ', payload)
      state.isGetBalanceSuccess = true
      state.balance = payload.balance
    },
  },
  subscriptions: {},
}

export default BalanceModel
