import styles from './index.scss'
import './index.scss'
import classnames from 'classnames'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { connect } from 'umi'
function Home(props) {
  const { walletAddress, mintAddress, mintSuccess, socialAccount = true, auth, dispatch } = props
  const { userInfo, isLogin } = auth
  let intervalFlag = useRef(false)
  let [newMint, setNewMint] = useState(false)
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
          <div className="relative">
            <div
              className={classnames(
                socialAccount ? 'huise-bg' : 'taohong-bg',
                'home-radius-btn px-3 py-3 cursor-pointer text-center text-white font-game text-base whitespace-nowrap',
              )}
            >
              Connect Social account
            </div>
            {isLogin && userInfo.isTwitter === 1 && (
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
