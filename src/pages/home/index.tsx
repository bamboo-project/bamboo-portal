import styles from './index.scss'
import './index.scss'
import classnames from 'classnames'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { connect } from 'umi'
import { useInterval } from 'ahooks'
import { message } from 'antd'
import { encode, decode } from 'js-base64'
import GetNft from './components/GetNft'
import Modal from '@/components/Modal'
import config from '@/config'
import IconLoading from '@/components/IconLoading'
const nfts = require('./nfts.json')
function Home(props) {
  const { mintAddress, auth, dispatch, balance } = props
  const { userInfo, isLogin } = auth
  const { isGetBalanceSuccess } = balance
  const { wallet_address } = userInfo
  const { userNft } = balance.user[wallet_address] ? balance.user[wallet_address] : {}

  const [interval, setInterval] = useState<number | undefined>(undefined)

  let [isOpenBindSocialModal, setIsOpenBindSocialModal] = useState(false)
  let [mintSuccess, setMintSuccess] = useState(false)
  let [mintLoading, setMintLoading] = useState(false)

  useInterval(() => {
    console.log('interval: ', interval)
    dispatch({
      type: 'balance/getBalance',
      payload: {
        walletId: wallet_address,
      },
    })
  }, interval)

  useEffect(() => {
    if (isGetBalanceSuccess) {
      setMintLoading(false)
      setInterval(undefined)
    }
  }, [isGetBalanceSuccess])

  const step1 = isLogin
  const step2 = step1 && userInfo.is_twitter === 1
  console.log('userInfo: ', userInfo)
  const step3 = step2 && isGetBalanceSuccess

  useEffect(() => {
    if (step3) {
      console.log('step3: ', step3)
      // location.replace(`/user/${userInfo.wallet_address}`)
    }
  }, [])
  const mintNft = async () => {
    if (mintLoading) {
      return
    }
    try {
      const { scriptHash } = await window.neolineN3Instance.AddressToScriptHash({ address: wallet_address })
      try {
        const nft = nfts[Math.round(Math.random() * nfts.length) - 1]
        nft.version = config.nftVersion
        const result = await window.neolineN3Instance.invoke({
          scriptHash: '0x7d65a781d4a06306e75f107150d982fd63a689c7',
          operation: 'mint',
          args: [
            {
              type: 'Hash160',
              value: wallet_address,
            },
            {
              type: 'ByteArray',
              value: encode(JSON.stringify(nft)),
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
        //
        dispatch({
          type: 'balance/getBalance',
          payload: {
            walletId: wallet_address,
          },
        })
        setMintLoading(true)
        setInterval(1000)
        console.log('Invoke transaction success!')
        console.log('Transaction ID: ' + result.txid)
        console.log('RPC node URL: ' + result.nodeURL)
        // setMintSuccess(true)
      } catch (error) {
        console.log('error: ', error)
        const { type, description, data } = error
        switch (type) {
          case 'NO_PROVIDER':
            message.error('No provider available.')
            break
          case 'RPC_ERROR':
            message.error('There was an error when broadcasting this transaction to the network.')
            break
          case 'CANCELED':
            message.error('The user has canceled this transaction.')
            break
          default:
            // Not an expected error object.  Just write the error to the console.
            console.error(error)
            break
        }
      }
    } catch (error) {
      const { type, description, data } = error
      switch (type) {
        case 'NO_PROVIDER':
          message.error('No provider available.')
          break
        case 'MALFORMED_INPUT':
          message.error('Please check your input')
          break
        default:
          // Not an expected error object.  Just write the error to the console.
          console.error(error)
          break
      }
    }
  }
  return (
    <div className="relative">
      <Modal
        isOpen={isOpenBindSocialModal}
        onClose={() => {
          setIsOpenBindSocialModal(false)
        }}>
        <div className="flex flex-col justify-center items-center pb-10">
          <div className="text-2xl font-game text-white mt-4">Connect Your Social Account</div>
          <div className="flex flex-row space-x-8">
            <div
              onClick={() => {
                location.href = `${config.requestApiUrl}/api/login/twitter/auth?walletId=${
                  userInfo.wallet_address
                }&callback_url=${window.location.href}&timestamp=${Date.parse(new Date())}`
              }}
              className=" cursor-pointer mt-8 text-white text-xl font-px">
              <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/icon_265.png" />
            </div>
            <div
              onClick={() => {
                message.info('coming soon')
              }}
              className=" cursor-pointer mt-8 text-white text-xl font-px">
              <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/icon_262.png" />
            </div>
            <div
              onClick={() => {
                message.info('coming soon')
              }}
              className=" cursor-pointer mt-8 text-white text-xl font-px">
              <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/icon_263.png" />
            </div>
            <div
              onClick={() => {
                message.info('coming soon')
              }}
              className=" cursor-pointer mt-8 text-white text-xl font-px">
              <img className="w-10 h-10" src="https://imgs.bamboownft.com/temp/icon_264.png" />
            </div>
          </div>
        </div>
      </Modal>
      <div className={classnames(styles.marketWrap, 'min-h-screen w-full relative')}>
        <div className="flex flex-row items-center container mx-auto mb-24 pt-40 relative">
          <div className="pr-96">
            <div className="text-primary text-8xl flex items-center flex-row font-extrabold mb-8">
              <div className="font-px text-5xl">Connect social account TO Mint A Blockchain Pet ！</div>
            </div>
            <div>
              <div className="font-px text-lg text-white mt-4">
                Connect your social accounts, and you will create your own growable NFT pet based on your own social
                graph!
              </div>
              <div className="font-px text-lg text-white mt-4">
                Everyone has only one chance to mint a pet. After you complete connecting the blockchain wallet and at
                least one social account, you will get the chance to mint a pet. More social accounts you have bound,
                Greater possibility of the rare pets will be had. Get started now!
              </div>
            </div>
          </div>
          <div className="home-xinxi w-96">
            <img src="https://imgs.bamboownft.com/temp/bg_11.png" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full overflow-hidden">
          <div className="relative">
            <div
              onClick={() => {
                if (!step1) {
                  dispatch({
                    type: 'auth/openConnectWalletModal',
                  })
                }
              }}
              className={classnames(
                !step1 ? 'taohong-bg' : 'huise-bg',
                'home-radius-btn px-6 py-3 cursor-pointer text-center text-white font-game text-base whitespace-nowrap',
              )}>
              CONNECT WALLET
            </div>
            {step1 && (
              <div className="absolute right-0 -bottom-3">
                <img className="w-7" src="https://imgs.bamboownft.com/temp/home_done.png" />
              </div>
            )}
          </div>

          <div>{!step1 ? <div className="w-20 grey-line"></div> : <div className="w-20 pink-line"></div>}</div>
          <div
            className="relative"
            onClick={() => {
              if (step1 && !step2) {
                setIsOpenBindSocialModal(true)
              }
            }}>
            <div
              className={classnames(
                !step2 ? 'taohong-bg' : 'huise-bg',
                'home-radius-btn px-6 py-3 cursor-pointer text-center text-white font-game text-base whitespace-nowrap',
              )}>
              Connect Social account
            </div>
            {step2 && (
              <div className="absolute right-0 -bottom-3">
                <img className="w-7" src="https://imgs.bamboownft.com/temp/home_done.png" />
              </div>
            )}
          </div>
          <div>{!step2 ? <div className="w-20 grey-line"></div> : <div className="w-20 pink-line"></div>}</div>
          {step3 ? (
            <div className="relative">
              <div
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/mint_gray_bg.png	)',
                  backgroundSize: '100% 100%',
                }}
                className="w-64 cursor-pointer h-16 w-30">
                <div className="flex mt-1 text-white font-game justify-center items-center">
                  MINT A PET
                  <br />
                  AND START WEB3.0
                </div>
              </div>
              <div className="absolute right-0 -bottom-3">
                <img className="w-7" src="https://imgs.bamboownft.com/temp/home_done.png" />
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundImage: 'url(https://imgs.bamboownft.com/temp/mint_color_bg.png	)',
                backgroundSize: '100% 100%',
              }}
              onClick={async () => {
                if (step2) {
                  mintNft()
                }
              }}
              className="w-64 cursor-pointer h-16 w-30">
              {mintLoading ? (
                <div className="flex mt-4 font-game text-white justify-center items-center">
                  <div className="mr-2">in transaction</div>
                  <IconLoading fontSize={20} color="#fff" />
                </div>
              ) : (
                <div className="flex mt-1 text-white font-game justify-center items-center">
                  MINT A PET
                  <br />
                  AND START WEB3.0
                </div>
              )}
            </div>
          )}
          {step3 ? (
            <div>
              <img className="w-14 pl-4" src="https://imgs.bamboownft.com/temp/home_color_arrow.gif" />
            </div>
          ) : (
            <div>
              <img
                className="w-14 mx-4"
                src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_arrow.png"
              />
            </div>
          )}
          {isLogin && userInfo.is_twitter === 1 && isGetBalanceSuccess ? (
            <img
              onClick={() => {
                setMintSuccess(true)
              }}
              className="w-40"
              src="https://imgs.bamboownft.com/temp/home_color_egg.gif"
            />
          ) : (
            <img className="w-20" src="https://imgs.bamboownft.com/temp/home_gray_egg.png" />
          )}
        </div>
        <div className="">
          <img src="https://imgs.bamboownft.com/temp/home_jianbian.png" />
        </div>
      </div>
      {mintSuccess && <GetNft userInfo={userInfo} userNft={userNft} />}
    </div>
  )
}

export default connect(({ auth, balance }) => {
  return { auth, balance }
})(Home)
