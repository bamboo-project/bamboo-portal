import { useEffect, useState } from 'react'
import styles from './index.scss'
function GetNft(props: any) {
  const { userInfo, userNft } = props
  const [step, setStep] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setStep(1)
    }, 1000)
    setTimeout(() => {
      setStep(2)
    }, 1500)
  }, [])
  return (
    <div className="w-screen fixed bg-purple h-screen z-10 overflow-hidden top-0 left-0">
      <div className="w-full h-full relative">
        {(step == 0 || step == 1) && (
          <div className="flex justify-center h-full w-full items-center">
            <img className="z-10" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/egg2.gif" />
          </div>
        )}
        {step == 0 && (
          <img
            className=" mix-blend-color-dodge absolute top-0 left-0"
            src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/get_pet_bg_1.webp"
          />
        )}
        {step == 1 && (
          <img
            className=" mix-blend-color-dodge absolute top-0 left-0"
            src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/get_pet_bg_2.webp"
          />
        )}
        {step == 2 && (
          <div className="w-full h-full flex-col flex justify-center items-center relative">
            <div className="">
              <img src={userNft.image} />
            </div>
            <div className="for-egg-minted-title mt-8 text-white font-game text-3xl">{userNft.name}</div>
            <div className="flex flex-row mt-8 items-center justify-center">
              <img
                onClick={() => {
                  console.log('location: ', location)
                  location.href = `/user/${userInfo.wallet_address}`
                }}
                className="w-64 mr-6 cursor-pointer"
                src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_start_btn.png"
              />
              <img
                className="w-14 -mt-4"
                src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/home_color_arrow.gif"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default GetNft
