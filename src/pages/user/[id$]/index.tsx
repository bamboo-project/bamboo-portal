import styles from './index.scss'
import Message from './components/messages'
import Sidebar from './components/sidebar'
import { connect } from 'umi'
import dayjs from 'dayjs'
import { useInterval } from 'ahooks'
import { message } from 'antd'
import classnames from 'classnames'
import { useState } from 'react'

function User(props) {
  const { auth, balance } = props
  const { userInfo } = auth
  console.log('userInfo: ', userInfo)
  const { userNft } = balance
  const walletId = props.match.params['id']
  const isSelf = userInfo.wallet_address == walletId
  const [countdown, setCountdown] = useState(2000)
  useInterval(() => {
    setCountdown(countdown - 1)
  }, 1000)
  return (
    <div className="flex flex-row" style={{ backgroundColor: '#453559' }}>
      <div className="w-9/12 flex flex-col items-center px-20">
        <div
          style={{ backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_121.png)' }}
          className="p-10 bg-center bg-no-repeat bg-contain w-full rounded-3xl flex flex-row mt-16">
          <div className="text-white font-px text-2xl w-5/12">
            Hi, <span style={{ color: '#00ffd1' }}>{walletId.slice(0, 14)}...</span>
            <br /> Welcome Home!
          </div>
          <div className="w-7/12 flex flex-col items-end">
            <div className="text-white font-px text-2xl ">{userInfo.following} Followers</div>
            <div className="mt-2">
              <a href={userInfo.twitter_url} target="_blank">
                <img className="w-8 h-8" src="https://imgs.bamboownft.com/temp/img_355.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full -mt-4 pl-20">
          <img src="https://imgs.bamboownft.com/temp/bg_122.png" className="w-40 left-20 " />
        </div>
        <div className="w-full flex flex-row space-x-12">
          <div className="w-6/12">
            <div className="mt-6 ml-16">
              <div className="text-base font-game text-white">{userNft.name}</div>
              <div className="text-white  items-center font-px flex flex-row">
                TokenID：{userNft.name}...
                <img className="w-4 h-4 ml-4 cursor-pointer" src="https://imgs.bamboownft.com/temp/iocn_copy.png" />
              </div>
              <div className=" relative">
                <img className="w-96" src="https://imgs.bamboownft.com/temp/img_117.png" />
                <img className="w-40 absolute top-0 left-0" src={userNft.image} />
              </div>
            </div>
            <div
              style={{
                backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_216.png)',
                backgroundSize: '100% 100%',
              }}
              className=" rounded-xl h-16 text-base text-white font-px flex flex-row py-2 px-4 items-center">
              <div className="text-white ml-4">Lv.{userNft.level}</div>
              <div className="border-white border w-1/3 h-6 relative ml-2">
                <div className="text-white w-full h-full text-center text-xs flex justify-center items-center">
                  0/100
                </div>
                <div className="bg-primary h-full absolute top-0 left-0" style={{ width: '10%' }}></div>
              </div>
              <div className="border border-primary ml-2 text-primary px-2 rounded-md">exp</div>
              <div className="ml-2">+1 Day</div>
              <img className="w-4 h-4 ml-2" src="https://imgs.bamboownft.com/temp/img_263.png" />
              <div className="ml-2">-3 Day</div>
              <div
                className="ml-4 cursor-pointer hover:bg-blend-color-dodge   text-gray-300 shadow-md py-1 px-2 rounded-lg"
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_271.png)',
                  backgroundSize: '100% 100%',
                }}>
                Level Up
              </div>
            </div>
            <div className="flex flex-row space-x-10 mt-6 font-px">
              <div
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_192.png)',
                  backgroundSize: '100% 100%',
                }}
                className={classnames(
                  'cursor-pointer h-12 bg-contain border-0 px-4 py-2 flex-1 flex flex-row justify-center items-center',
                )}>
                <img className="w-6 h-6" src="https://imgs.bamboownft.com/temp/img_263.png" />
                <div className="text-white text-base ml-2">129</div>
              </div>
              <div
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_192.png)',
                  backgroundSize: '100% 100%',
                }}
                className="bg-contain cursor-pointer px-4 py-2 flex-1 flex flex-row justify-center items-center">
                <img className="w-6 h-6" src="https://imgs.bamboownft.com/temp/img_bamboo.png" />
                <div className="text-white ml-2">3</div>
              </div>
              <div
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_192.png)',
                  backgroundSize: '100% 100%',
                }}
                className="bg-contain cursor-pointer px-4 py-2 flex-1 flex flex-row justify-center items-center">
                <img className="w-4 h-4" src="https://imgs.bamboownft.com/temp/img_399.png" />
              </div>
            </div>
          </div>

          <div className="w-6/12 mt-6">
            <div
              className={classnames(
                styles.card,
                'text-gray-300 h-40 hover:text-primary transition-all duration-1000 cursor-pointer bg-contain py-4 flex flex-row items-center rounded-2xl',
              )}
              onClick={() => {
                message.info('Coming soon')
              }}
              style={{
                backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_b11.png)',
                backgroundSize: '100% 100%',
              }}>
              <div className="flex-1 pl-8">
                <div className="font-game text-3xl">
                  NFT
                  <br />
                  GALLERY
                </div>
                <div className="text-white mt-2 flex flex-row items-center">
                  <img className="w-6 h-6" src="https://imgs.bamboownft.com/temp/icon_499.png" />
                  <div className="font-px ml-4 mt-1 h-6 text-base flex leading-6 justify-center items-center">
                    13,341
                  </div>
                </div>
              </div>
              <img
                className={classnames(styles.arrow, 'h-8 mr-20 transform duration-700 transition-all')}
                src="https://imgs.bamboownft.com/temp/icon_219.png"
              />
              <img
                className={classnames(styles.img, 'h-32 transform duration-500')}
                src="https://imgs.bamboownft.com/temp/img_122.png"
              />
            </div>
            <div
              className={classnames(
                styles.card,
                'text-gray-300 h-40 hover:text-primary transition-all duration-1000 cursor-pointer mt-6 py-4 flex flex-row items-center rounded-2xl',
              )}
              onClick={() => {
                message.info('Coming soon')
              }}
              style={{
                backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_g10.png)',
                backgroundSize: '100% 100%',
              }}>
              <div className="flex-1 pl-8">
                <div className=" font-game text-3xl">
                  Bamboo
                  <br /> Garden
                </div>
                <div className="text-white mt-2 flex flex-row items-center">
                  <img className="w-6 h-6 " src="https://imgs.bamboownft.com/temp/icon_501.png" />
                  <div className="font-px mt-1 ml-4 h-6 text-base flex justify-center items-center">
                    {dayjs.duration(countdown * 1000).hours()}:{dayjs.duration(countdown * 1000).minutes()}:
                    {dayjs.duration(countdown * 1000).seconds()}
                  </div>
                </div>
              </div>
              <img
                className={classnames(styles.arrow, 'h-8 mr-20 transform duration-700 transition-all')}
                src="https://imgs.bamboownft.com/temp/icon_219.png"
              />
              <img
                className={classnames(styles.img, 'h-32 transform transition-all duration-500')}
                src="https://imgs.bamboownft.com/temp/img_121.png"
              />
            </div>
            <div className="flex flex-row space-x-8 mt-4">
              <div
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_b22.png)',
                  backgroundSize: '100% 100%',
                }}
                onClick={() => {
                  message.info('Coming soon')
                }}
                className={classnames(
                  styles.btn1,
                  'flex-1 text-white h-14 hover:text-primary transform transition-all duration-500 cursor-pointer bg-contain flex flex-row py-3 justify-center items-center',
                )}>
                <img
                  className={classnames(styles.icon, 'h-8 transform transition-all duration-500 absolute left-6')}
                  src="https://imgs.bamboownft.com/temp/icon_247.png"
                />
                <div className="font-px text-base ml-2">Out for a Walk</div>
              </div>
              <div
                style={{
                  backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_b22.png)',
                  backgroundSize: '100% 100%',
                }}
                onClick={() => {
                  message.info('Coming soon')
                }}
                className={classnames(
                  styles.btn1,
                  'flex-1 text-white relative hover:text-primary transform transition-all duration-500 cursor-pointer bg-contain flex flex-row py-3 justify-center items-center',
                )}>
                <img
                  className={classnames(styles.icon, 'h-8 transform transition-all duration-500 absolute left-6')}
                  src="https://imgs.bamboownft.com/temp/icon_228.png"
                />
                <div className=" font-px text-base ml-2">Bamboo project</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Message
            myAvatarUrl={userInfo.avatar_url}
            walletId={walletId}
            myWalletId={userInfo.wallet_address}
            isSelf={isSelf}
          />
        </div>
        <div className="h-10 relative">
          <div className="absolute bottom-0">
            <img src="https://imgs.bamboownft.com/temp/home_jianbian.png" />
          </div>
        </div>
      </div>
      <div className="w-3/12 mt-12 bg-black" style={{ backgroundColor: '#353535' }}>
        <Sidebar />
      </div>
    </div>
  )
}

export default connect(({ auth, balance }) => {
  return { auth, balance }
})(User)
