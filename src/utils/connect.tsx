export const WALLET_IS_CONNECT = 'WALLET_IS_CONNECT'
export const WALLET_CONNECT_TYPE = 'CONNECT_TYPE'
import Cookies from 'js-cookie'

export function clearConnect() {
  console.log('clearConnect: ')
  Cookies.remove(WALLET_IS_CONNECT)
  Cookies.remove(WALLET_CONNECT_TYPE)
  window.sessionStorage.clear()
}

export function setConnect({ isConnect, connectType }) {
  Cookies.set(WALLET_IS_CONNECT, isConnect)
  Cookies.set(WALLET_CONNECT_TYPE, connectType)
}

export function getConnect() {
  const _a = Cookies.get(WALLET_IS_CONNECT)
  const _b = Cookies.get(WALLET_CONNECT_TYPE)
  return {
    WALLET_IS_CONNECT: _a,
    WALLET_CONNECT_TYPE: _b,
  }
}
