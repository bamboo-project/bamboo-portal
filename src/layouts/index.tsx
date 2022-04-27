import React from 'react'
import { useState, useEffect } from 'react'
import styles from './index.scss'
import Header from './header'
import Footer from './footer'
import GlobalLoading from '@/components/GlobalLoading'
import { connect } from 'umi'
function IndexLayout(props) {
  const [neoline, setNeoline] = useState(null)
  const [neolineN3, setNeolineN3] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')
  const [mintSuccess, setMintSuccess] = useState(false)

  const { pathname } = props.location
  console.log('props.location: ', props.location)
  console.log('props.children', props.children)

  const initDapi = () => {
    const initCommonDapi = new Promise((resolve, reject) => {
      window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
        let data = new NEOLine.Init()
        setNeoline(data)
        if (data) {
          resolve(data)
        } else {
          reject('common dAPI method failed to load.')
        }
      })
    })
    const initN3Dapi = new Promise((resolve, reject) => {
      window.addEventListener('NEOLine.N3.EVENT.READY', () => {
        let data = new NEOLineN3.Init()
        setNeolineN3(data)
        if (data) {
          resolve(data)
        } else {
          reject('N3 dAPI method failed to load.')
        }
      })
    })
    initCommonDapi
      .then(() => {
        console.log('The common dAPI method is loaded.')
        return initN3Dapi
      })
      .then(() => {
        console.log('The N3 dAPI method is loaded.')
      })
      .catch(err => {
        console.log(err)
      })
  }
  const checkConnection = () => {
    // 未挂载好退出
    if (!neoline) {
      return
    }
    neoline
      .getAccount()
      .then(account => {
        const { address, label } = account
        setWalletAddress(address)
        console.log('Provider address: ' + address)
        console.log('Provider account label (Optional): ' + label)
      })
      .catch(error => {
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
      })
  }
  useEffect(() => {
    initDapi()
  }, [])
  useEffect(() => {
    checkConnection()
  }, [neoline])
  const connectWallet = () => {
    // 未挂载好退出
    if (!neolineN3) {
      return
    }
    neolineN3
      .pickAddress()
      .then((result: { label: any; address: any }) => {
        const { label, address } = result
        setWalletAddress(address)
        console.log('label：' + label)
        console.log('address：' + address)
      })
      .catch((error: { type: any; description: any; data: any }) => {
        const { type, description, data } = error
        switch (type) {
          case 'NO_PROVIDER':
            console.log('No provider available.')
            break
          case 'CANCELED':
            console.log('The user cancels, or refuses the dapps request')
            break
          default:
            // Not an expected error object.  Just write the error to the console.
            console.error(error)
            break
        }
      })
  }
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
  if (pathname == '/login') {
    return props.children
  }
  // home页面单独配置
  if (props.location.pathname === '/home') {
    return (
      <div className="bg-purple dark:bg-dark-bg-1 ">
        <Header auth={props.auth} />
        <div className="mx-auto">
          {React.cloneElement(props.children, {
            walletAddress: walletAddress,
            mintAddress: mintAddress,
            mintSuccess: mintSuccess,
          })}
        </div>
        <Footer />
      </div>
    )
  }
  if (props.global.loading) {
    return <GlobalLoading />
  }
  if (/^\/aaa|goods\/(\d+)/.test(pathname) || '/create/nft' == pathname) {
    return (
      <div className="bg-white overflow-hidden lg:h-screen w-screen flex flex-col dark:bg-dark-bg-1 ">
        <Header auth={props.auth} />
        <div className="mx-auto flex container flex-1  flex-shrink-0 overflow-hidden ">{props.children}</div>
      </div>
    )
  }

  return (
    <div className="bg-purple dark:bg-dark-bg-1 ">
      <Header auth={props.auth} />
      <div className="mx-auto">{props.children}</div>
      <Footer />
    </div>
  )
}
export default connect(({ global, auth }) => ({
  global,
  auth,
}))(IndexLayout)
