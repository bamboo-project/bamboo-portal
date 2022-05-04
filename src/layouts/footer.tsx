import React from 'react'
import styles from './footer.scss'
import classnames from 'classnames'
export default function Footer(props) {
  return (
    <div className={classnames(styles.wrap, 'p-14 bg-black mx-auto')}>
      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="w-full lg:w-6/12">
          <div className="flex flex-col justify-center items-center pr-24">
            <img
              src="https://imgs.bamboownft.com/temp/main_title_small.png"
              className=" w-52 rounded-2xl"
            />
            <div className="text-center text-white hidden md:block md:mt-5 font-game">
              New STYLE to explore the Web3.0 social network{' '}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 flex flex-col mt-5 md:mt-0 font-px">
          <div className="font-bold text-xl mr-5 text-white ">About</div>
          <div className="flex flex-col mt-5">
            <div className="h-10 text-white">Documentation</div>
            <div className="h-10 text-white ">Brand Asset</div>
            <div className="h-10 text-white ">Contact</div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 flex flex-col font-px">
          <div className="font-bold text-xl mr-5 text-white">Community</div>
          <div className="flex flex-col mt-5">
            <div className="h-10 text-white">Twitter</div>
            <div className="h-10 text-white">Telegram</div>
            <div className="h-10 text-white">Medium</div>
            <div className="h-10 text-white">Discord</div>
            <div className="h-10 text-white">Github</div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center text-gray-500 mt-5 font-px">© 2022 Bamboo Studios</div>
    </div>
  )
}
