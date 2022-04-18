function Mint() {
  return (
    <div
      className="h-screen w-screen bg-bottom bg-no-repeat bg-contain"
      style={{ backgroundImage: 'url(https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_jb_1.png)' }}>
      <div className="container mx-auto mt-20">
        <div className="flex flex-row ">
          <div className="w-2/3">
            <div className="font-game text-4xl text-primary w-5/6 leading-snug">
              Connect social account TO Mint A Blockchain Pet ！
            </div>
            <div className="text-white font-px text-base mt-10 w-5/6">
              Connect your social accounts, and you will create your own growable NFT pet based on your own social
              graph!
              <br />
              <br />
              Everyone has only one chance to mint a pet. After you complete connecting the blockchain wallet and at
              least one social account, you will get the chance to mint a pet. More social accounts you have bound,
              Greater possibility of the rare pets will be had. Get started now!
            </div>
          </div>
          <div className="flex w-1/3 justify-center items-center">
            <img className="w-full " src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/bg_11.png" />
          </div>
        </div>

        <div className="flex flex-row mt-24 items-center">
          <div className="text-white h-14 px-10 bg-primary font-px rounded-full cursor-pointer flex justify-center items-center">Connect Wallet</div>
          <div className="w-40 border-b-2 border-dashed border-gray-400" />
          <div className="text-white h-14 px-10 bg-primary font-px rounded-full cursor-pointer flex justify-center items-center">
            Connect Social Account
          </div>
          <div className="w-40 border-b-2 border-dashed border-gray-400" />
          <div className="text-white h-14 px-10 bg-primary font-px rounded-full cursor-pointer flex justify-center items-center">
            Mint A Pet And Start Web3.0
          </div>
          <img className="h-14 mr-10 ml-10" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/arrow_right.png" />
          <img className="h-24" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/egg_gray.png" />
        </div>
      </div>
    </div>
  )
}
export default Mint
