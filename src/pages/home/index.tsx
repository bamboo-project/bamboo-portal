import styles from './index.scss'

function Home() {
  return (
    <div className="flex flex-row" style={{ backgroundColor: '#453559' }}>
      <div className="w-2/3 flex flex-col items-center">
        <div className='bg-purple p-10 w-10/12 rounded-3xl'>
          <div className="text-white font-game">Hi, 0xC109acbRa45csd63... Welcome Home!</div>
          <div>
            <div className='text-white'>2400 followed</div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>BLUE Ghost</div>
            <div>0P8zs63dac...</div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-1/3 bg-black">
        <div className="">
          <div className="font-game uppercase">Friends</div>
        </div>
        <div>
          <div className="font-game uppercase">recommend neighbors</div>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <div>Go to the community</div>
        </div>
      </div>
    </div>
  )
}

export default Home
