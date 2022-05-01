import styles from './index.scss'
import './index.scss'
import classnames from 'classnames'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { connect } from 'umi'
import { message } from 'antd'
import { encode, decode } from 'js-base64'

import Modal from '@/components/Modal'
function Home(props) {
  const { mintAddress, mintSuccess, socialAccount = true, auth, dispatch } = props
  const { userInfo, isLogin } = auth
  const { wallet_address } = userInfo
  let intervalFlag = useRef(false)
  let [newMint, setNewMint] = useState(false)
  let [isOpenBindSocialModal, setIsOpenBindSocialModal] = useState(false)

  const mintNft = async () => {
    try {
      const { scriptHash } = await window.neolineN3Instance.AddressToScriptHash({ address: wallet_address })
      console.log('scriptHash: ', wallet_address, scriptHash)
      try {
        const result = await window.neolineN3Instance.invoke({
          scriptHash: '0x7d65a781d4a06306e75f107150d982fd63a689c7',
          operation: 'mint',
          args: [
            {
              type: 'Hash160',
              value: wallet_address,
            },
            // {
            //   type: 'ByteArray',
            //   value: 'eyJmb28iOiJiYXIifQ==',
            // },
            {
              type: 'ByteArray',
              // value: encode(`{name:"${a}","avatar_url":"https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_jianbian.png", "level": 1}`),
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
      console.log('error: ', error)
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

  useEffect(() => {
    // setInerval
    if (mintSuccess && !intervalFlag.current) {
      intervalFlag.current = true
      setInterval(() => {
        setNewMint(true)
      }, 5000)
    }
  }, [mintSuccess])
  return (
    <div className="relative">
      <Modal
        isOpen={isOpenBindSocialModal}
        onClose={() => {
          setIsOpenBindSocialModal(false)
        }}>
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl font-game text-white">Connect Your Social Account</div>
          <div
            onClick={() => {
              location.href = `http://api.bamboownft.com/api/login/twitter/auth?walletId=${
                userInfo.wallet_address
              }&callback_url=${window.location.href}&timestamp=${Date.parse(new Date())}`
            }}
            className=" cursor-pointer mt-8 text-white text-xl font-px">
            Twitter
          </div>
        </div>
      </Modal>
      <div className={classnames(styles.marketWrap, 'h-screen w-full relative')}>
        <div className="flex flex-row items-center container mx-auto mb-24 pt-40 relative">
          <div className="pr-96">
            <div className="text-primary text-8xl flex items-center flex-row font-extrabold">
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
            <img src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/bg_11.png" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full overflow-hidden">
          <div className="relative">
            <div
              onClick={() => {
                if (!isLogin) {
                  console.log('isLogin: ', isLogin)
                  dispatch({
                    type: 'auth/openConnectWalletModal',
                  })
                }
              }}
              className={classnames(
                !isLogin ? 'huise-bg' : 'taohong-bg',
                !isLogin ? 'animate-bounce' : '',
                'home-radius-btn px-3 py-3 cursor-pointer text-center text-white font-game text-base whitespace-nowrap',
              )}
            >
              CONNECT WALLET
            </div>
            {isLogin && (
              <div className="absolute right-0 -bottom-3">
                <img className="w-7" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_done.png" />
              </div>
            )}
          </div>

          <div>{!isLogin ? <div className="w-20 grey-line"></div> : <div className="w-20 pink-line"></div>}</div>
          <div
            className="relative"
            onClick={() => {
              setIsOpenBindSocialModal(true)
            }}>
            <div
              className={classnames(

                userInfo.is_twitter !== 1 ? 'huise-bg' : 'taohong-bg',
                'home-radius-btn px-3 py-3 cursor-pointer text-center text-white font-game text-base whitespace-nowrap',
              )}>
              Connect Social account
            </div>
            {isLogin && userInfo.is_twitter === 1 && (
              <div className="absolute right-0 -bottom-3">
                <img className="w-7" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_done.png" />
              </div>
            )}
          </div>
          <div>{!socialAccount ? <div className="w-20 grey-line"></div> : <div className="w-20 pink-line"></div>}</div>

          {isLogin && userInfo.isTwitter === 1 ? (
            <img
              className="w-64"
              onClick={socialAccount && walletAddress !== '' ? mintAddress : () => {}}
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_color_mint.png"
            />
          ) : (
            <img className="w-64" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_mint.png" />
          )}

          {socialAccount && walletAddress !== '' ? (
            <img
              className="w-14 pl-4"
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_color_arrow.gif"
            />
          ) : (
            <img
              className="w-14 pl-4"
              src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_arrow.png"
            />
          )}

          {socialAccount && walletAddress !== '' ? (
            <img className="w-40" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_color_egg.gif" />
          ) : (
            <img className="w-20" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_egg.png" />
          )}
        </div>
        <div className="absolute bottom-0">
          <img src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_jianbian.png" />
        </div>
      </div>
      {mintSuccess && (
        <div className="for-egg">
          {!newMint && (
            <>
              <div className="for-egg-pic">
                <img src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_color_egg.gif" />
              </div>
              <div className="for-egg-bg"></div>
            </>
          )}
          {newMint && (
            <>
              <div className="for-egg-minted">
                <div className="for-egg-minted-pic">
                  <img src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_pet_blue.gif" />
                </div>

                <div className="for-egg-minted-title text-white font-game text-3xl">BLUE GHOST</div>
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="w-64 mr-6"
                    src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_start_btn.png"
                  />
                  <img
                    className="w-14 -mt-4"
                    src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_color_arrow.gif"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default connect(({ auth }) => {
  return { auth }
})(Home)
