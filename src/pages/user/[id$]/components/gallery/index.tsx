import Modal from '@/components/DefaultModal'
import { useEffect, useState } from 'react'
import * as NftService from './nft_service'
import styles from './index.scss'
import classnames from 'classnames'
import nftList from './nft.json'

function NftGallery({ isOpen, onClose }) {
  //   const [nftList, setNftList] = useState([])
  //   console.log('nftList: ', nftList)
  //   const getNftList = async () => {
  //     try {
  //       const resp = await NftService.GetNftList()
  //       if (resp.code === 200) {
  //         setNftList(JSON.parse(resp.data).assets)
  //       }
  //     } catch (error) {
  //       console.error('error: ', error)
  //     }
  //   }
  //   useEffect(() => {
  //     getNftList()
  //   }, [])
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-3xl text-white font-game">Welcome to my NFT GAllery</div>
        <div className="grid grid-cols-4 grid-flow-row relative">
          {nftList.map(item => {
            return (
              <div key={item.name} className="w-full justify-center items-center flex relative z-10">
                <a
                  target="_blank"
                  href={item.url}
                  className={classnames(styles.box, 'border-4 cursor-pointer w-40 h-40 mt-6 border-primary')}>
                  <img className="w-full h-full" src={item.image} />
                </a>
              </div>
            )
          })}
        </div>
        <div
          onClick={onClose}
          style={{ backgroundImage: 'url(https://imgs.bamboownft.com/temp/img_733.png)', backgroundSize: '100% 100%' }}
          className="h-14 relative mt-14 z-10 w-40 mx-auto cursor-pointer bg-contain  flex -top-4 font-px justify-center items-center">
          <div className="text-white text-xl -mt-2">Go Back</div>
        </div>
        <img src="https://imgs.bamboownft.com/temp/img_722.png" className=" absolute bottom-0 left-0" />
        <div
          className=" absolute left-3/4 -bottom-8 -mb-4 px-4 py-4 pl-10 flex justify-center items-center text-white font-game z-50"
          style={{
            backgroundImage: 'url(https://imgs.bamboownft.com/temp/img_212.png)',
            backgroundSize: '100% 100%',
          }}>
          Graffiti feature is coming soon...
        </div>
        <img src="https://imgs.bamboownft.com/temp/img_721.png" className=" absolute -bottom-20 ml-32 left-2/4 z-50" />
      </Modal>
    </>
  )
}
export default NftGallery
