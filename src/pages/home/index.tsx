import styles from './index.scss'
import './index.scss'
import classnames from 'classnames'
function Home() {
  return (
    <>
      <div className={classnames(styles.marketWrap, 'h-screen w-screen ')}>
        <div className="flex flex-row items-center container mx-auto mb-24 mt-40">
          <div className="pr-20">
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
        </div>
        <div className="flex flex-row pr-40 pl-40 items-center">
          <div className="relative">
            <div className="home-radius-btn taohong-bg w-52 text-center text-white font-game text-base">
              CONNECT WALLET
            </div>
            <div className="absolute right-0 -bottom-3">
              <img className="w-7" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_done.png" />
            </div>
          </div>
          <div>
            <div className="w-20 grey-line"></div>
          </div>
          <div className="relative">
            <div className="home-radius-btn taohong-bg w-72 text-center text-white font-game text-base">
              Connect Social account
            </div>
            <div className="absolute right-0 -bottom-3">
              <img className="w-7" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_done.png" />
            </div>
          </div>
          <div>
            <div className="w-20 grey-line"></div>
          </div>
          <div>
            <img className="w-64" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_mint.png" />
          </div>
          <div className="px-5">
            <img className="w-14" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_arrow.png" />
          </div>
          <div className="">
            <img className="w-20" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_gray_egg.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
