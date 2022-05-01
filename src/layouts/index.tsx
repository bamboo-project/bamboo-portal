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
  const [neoline, setNeoline] = useState(null)
  const [neolineN3, setNeolineN3] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')
  const [mintSuccess, setMintSuccess] = useState(false)

  const { pathname } = props.location
  console.log('props.location: ', props.location)
  console.log('props.children', props.children)
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
  // 连接钱包
  // 吊起合约窗口进行交易
  const mintAddress = () => {
    neolineN3
      .AddressToScriptHash({ address: walletAddress })
      .then(result => {
        const { scriptHash } = result
        neolineN3
          .invoke({
            scriptHash: '0x7d65a781d4a06306e75f107150d982fd63a689c7',
            operation: 'mint',
            args: [
              {
                type: 'Hash160',
                value: walletAddress,
              },
              {
                type: 'ByteArray',
                value: '{"foo":"bar"}',
              },
              {
                type: 'ByteArray',
                value: '{}',
              },
              {
                type: 'ByteArray',
                value: '{}',
              },
              {
                type: 'Any',
                value: null,
              },
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
              {
                account: scriptHash,
                scopes: 1,
              },
            ],
          })
          .then(result1 => {
            console.log('Invoke transaction success!')
            console.log('Transaction ID: ' + result1.txid)
            console.log('RPC node URL: ' + result1.nodeURL)
            setMintSuccess(true)
          })
          .catch(error1 => {
            const { type, description, data } = error1
            switch (type) {
              case 'NO_PROVIDER':
                console.log('No provider available.')
                break
              case 'RPC_ERROR':
                console.log('There was an error when broadcasting this transaction to the network.')
                break
              case 'CANCELED':
                console.log('The user has canceled this transaction.')
                break
              default:
                // Not an expected error object.  Just write the error to the console.
                console.error(error1)
                break
            }
          })
        console.log('scriptHash' + scriptHash)
      })
      .catch(error => {
        const { type, description, data } = error
        switch (type) {
          case 'NO_PROVIDER':
            console.log('No provider available.')
            break
          case 'MALFORMED_INPUT':
            console.log('Please check your input')
            break
          default:
            // Not an expected error object.  Just write the error to the console.
            console.error(error)
            break
        }
      })
  }
  // 读取合约
  const readInvoke = () => {
    neolineN3
      .invokeRead({
        scriptHash: '0x7d65a781d4a06306e75f107150d982fd63a689c7',
        operation: 'totalSupply',
        args: [],
        signers: [
          {
            account: '2cab903ff032ac693f8514581665be534beac39f',
            scopes: 1,
          },
        ],
      })
      .then(result => {
        console.log('Read invocation result: ' + JSON.stringify(result))
      })
      .catch(error => {
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
      })
  }
  if (props.global.loading) {
    return <GlobalLoading />
  }
  if (pathname == '/login') {
    return props.children
  }
  // home页面单独配置
  // if (props.location.pathname === '/home') {
  //   return (
  //     <div className="bg-purple dark:bg-dark-bg-1 ">
  //       <Header auth={props.auth} connectWallet={connectWallet} walletAddress={walletAddress} tabIndex={pathname} />
  //       <div className="mx-auto">
  //         {React.cloneElement(props.children, {
  //           walletAddress: walletAddress,
  //           mintAddress: mintAddress,
  //           mintSuccess: mintSuccess,
  //         })}
  //       </div>
  //       <Footer />
  //     </div>
  //   )
  // }
  if (props.global.loading) {
    return <GlobalLoading />
  }
  return (
    <div className="bg-purple dark:bg-dark-bg-1 ">
      <Header auth={props.auth} connectWallet={connectWallet} walletAddress={walletAddress} tabIndex={pathname} />
      <div className="mx-auto my-max-width">{props.children}</div>
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
