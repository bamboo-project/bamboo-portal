import React from 'react'
import { useState, useEffect } from 'react'
import styles from './index.scss'
import Header from './header'
import Footer from './footer'
import GlobalLoading from '@/components/GlobalLoading'
import Modal from '@/components/Modal'
import { connect } from 'umi'
import './index.scss'

function IndexLayout(props) {
  const { dispatch, auth } = props
  const { isOpenConnectWalletModal } = auth

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
      <Header auth={props.auth} connectWallet={connectWallet} tabIndex={pathname} />
      <div className="mx-auto">{props.children}</div>
      <Footer />
      <Modal
        isOpen={isOpenConnectWalletModal}
        onClose={() => {
          dispatch({
            type: 'auth/closeConnectWalletModal',
          })
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl font-game text-white">Connect Wallet</div>
          <div
            onClick={() => {
              connectWallet('NEO')
            }}
            className=" cursor-pointer mt-8 text-white text-xl font-px"
          >
            Nel Line
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default connect(({ global, auth }) => ({
  global,
  auth,
}))(IndexLayout)
