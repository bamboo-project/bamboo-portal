import styles from './index.scss'
import Message from './components/messages'
import Sidebar from './components/sidebar'
import { connect } from 'umi'
function User(props) {
  const { auth, balance } = props
  const { userInfo } = auth
  const { userNft } = balance
  const walletId = props.match.params['id']
  const isSelf = userInfo.wallet_address == walletId
  console.log('userInfo: ', userInfo)
  return (
    <div className="flex flex-row" style={{ backgroundColor: '#453559' }}>
      <div className="w-9/12 flex flex-col items-center px-20">
        <div className="bg-purple p-10 w-full rounded-3xl flex flex-row mt-16">
          <div className="text-white font-px text-xl w-3/12">Hi, {walletId} Welcome Home!</div>
          <div className="w-9/12 flex flex-col items-end">
            <div className="text-white font-px text-base ">{userInfo.following} Followers</div>
            <div className="mt-2">
              <a href={userInfo.twitter_url} target="_blank">
                <img className="w-6 h-6" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_355.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row space-x-12">
          <div className="w-6/12">
            <div className="mt-6 ml-16">
              <div className="text-base font-game text-white">{userNft.name}</div>
              {/* <div className="text-white font-game">{userNft.}...</div> */}
              <div className=" relative">
                <img className="w-96" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_117.png" />
                <img className="w-40 absolute top-0 left-0" src={userNft.image} />
              </div>
            </div>
            <div className="bg-purple rounded-xl text-base text-white font-px flex flex-row py-2 px-4 items-center">
              <div className="text-white">Lv.{userNft.level}</div>
              <div className="border-white border w-1/3 h-4 relative ml-2">
                <div className="text-white w-full text-center text-xs">140/140</div>
                <div className="bg-primary h-4 absolute top-0 left-0" style={{ width: '30%' }}></div>
              </div>
              <div className="border border-primary ml-2 text-primary px-2 rounded-md">exp</div>
              <div className="ml-2">+1 Day</div>
              <img
                className="w-4 h-4 ml-2"
                src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_263.png"
              />
              <div className="ml-2">-3 Day</div>
              <div className="ml-2 bg-gray-600 text-gray-300 shadow-md py-1 px-2 rounded-lg">Level Up</div>
            </div>
            <div className="flex flex-row space-x-10 mt-6 font-px">
              <div className="bg-purple cursor-pointer rounded-full border-0 px-4 py-2 flex-1 flex flex-row justify-center items-center">
                <img className="w-6 h-6" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_263.png" />
                <div className="text-white ml-2">129</div>
              </div>
              <div className="bg-purple rounded-full cursor-pointer px-4 py-2 flex-1 flex flex-row justify-center items-center">
                <img
                  className="w-6 h-6"
                  src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_bamboo.png"
                />
                <div className="text-white ml-2">3</div>
              </div>
              <div className="bg-purple rounded-full px-4 py-2 flex-1 flex flex-row justify-center items-center">
                <img className="w-4 h-4" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_399.png" />
              </div>
            </div>
          </div>

          <div className="w-6/12 mt-6">
            <div className=" py-4 flex flex-row items-center rounded-2xl" style={{ backgroundColor: '#002e5a' }}>
              <div className="flex-1 pl-6">
                <div className="text-white font-game text-3xl">
                  NFT
                  <br />
                  GALLERY
                </div>
                <div className="text-white mt-2">
                  <div className="font-px">13,341</div>
                </div>
              </div>
              <img className="h-32" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_260.png" />
            </div>
            <div className="mt-6 py-4 flex flex-row items-center rounded-2xl" style={{ backgroundColor: '#4d8405' }}>
              <div className="flex-1 pl-6">
                <div className="text-white font-game text-3xl">
                  Bamboo
                  <br /> Garden
                </div>
                <div className="text-white mt-2">
                  <div className="font-px">00:23:34</div>
                </div>
              </div>
              <img className="h-32" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_259.png" />
            </div>
            <div className="flex flex-row space-x-8 mt-4">
              <div className="flex-1 rounded-full flex flex-row py-2 bg-black  justify-center items-center">
                <img className="h-6" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_371.png" />
                <div className="text-white font-px ml-2">Out for a Walk</div>
              </div>
              <div className="flex-1 rounded-full flex flex-row py-2 bg-black  justify-center items-center">
                <img className="h-8" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_372.png" />
                <div className="text-white font-px ml-2">Bamboo project</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Message myAvatarUrl={userInfo.avatar_url} walletId={walletId} myWalletId={userInfo.wallet_address} isSelf={isSelf} />
        </div>
        <div className="h-10 relative">
          <div className="absolute bottom-0">
            <img src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_jianbian.png" />
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
