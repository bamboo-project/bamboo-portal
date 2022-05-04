import React from 'react'
import { useState, useEffect } from 'react'
import styles from './index.scss'
import Header from './header'
import Footer from './footer'
import GlobalLoading from '@/components/GlobalLoading'
import Modal from '@/components/Modal'
import { connect } from 'umi'
import { message } from 'antd'
import './index.scss'

function IndexLayout(props) {
  const { dispatch, auth, balance } = props
  const { isOpenConnectWalletModal } = auth

  const { isGetBalanceSuccess } = balance
  const { pathname } = props.location
  const connectWallet = walletType => {
    if (walletType === 'NEO') {
      dispatch({
        type: 'auth/connectWallet',
        payload: {
          walletType,
        },
      })
    }
  }
  if (props.global.loading) {
    return <GlobalLoading />
  }
  if (pathname == '/login') {
    return props.children
  }
  if (props.global.loading) {
    return <GlobalLoading />
  }
  return (
    <div className="bg-purple dark:bg-dark-bg-1 ">
      <Header
        isGetBalanceSuccess={isGetBalanceSuccess}
        auth={props.auth}
        connectWallet={connectWallet}
        tabIndex={pathname}
      />
      <div className="mx-auto">{props.children}</div>
      <Footer />
      <Modal
        isOpen={isOpenConnectWalletModal}
        onClose={() => {
          dispatch({
            type: 'auth/closeConnectWalletModal',
          })
        }}>
        <div className="flex flex-col justify-center items-center pb-6">
          <div className="text-3xl font-game text-white">Connect Wallet</div>
          <div
            onClick={() => {
              connectWallet('NEO')
            }}
            className="flex flex-row items-center cursor-pointer mt-8 text-white text-xl font-px">
            <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/logo_neo_2.png" />
            <div className="ml-4 w-36">Neo Line</div>
          </div>
          <div
            onClick={() => {
              message.info('Coming soon')
            }}
            className="flex flex-row items-center cursor-pointer mt-8 text-white text-xl font-px">
            <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/logo_14.png" />
            <div className="ml-4 w-36">Metamask</div>
          </div>
          <div
            onClick={() => {
              message.info('Coming soon')
            }}
            className="flex flex-row items-center cursor-pointer mt-8 text-white text-xl font-px">
            <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/logo_13.png" />
            <div className="ml-4 w-36">Wallet Connect</div>
          </div>
          <div
            onClick={() => {
              message.info('Coming soon')
            }}
            className="flex flex-row items-center cursor-pointer mt-8 text-white text-xl font-px">
            <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/logo_11.png" />
            <div className="ml-4 w-36">CoinBase Wallet</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default connect(({ global, auth, balance }) => ({
  global,
  auth,
  balance,
}))(IndexLayout)
