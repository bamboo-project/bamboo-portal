function Sidebar() {
  var recommendUserList = [
    {
      userId: 1,
      nickname: 'Elon Musk',
      avatar: 'https://imgs.bamboownft.com/temp/index_avatar1.png',
    },
    {
      userId: 2,
      nickname: 'Zuckerberg',
      avatar: 'https://imgs.bamboownft.com/temp/index_avatar2.png',
    },
    {
      userId: 3,
      nickname: 'Jensen Huang',
      avatar: 'https://imgs.bamboownft.com/temp/index_avatar7.png',
    },
    {
      userId: 4,
      nickname: 'Bill Gates',
      avatar: 'https://imgs.bamboownft.com/temp/index_avatar4.png',
    },
  ]
  return (
    <div>
      <div className="flex-row flex items-center py-4 pl-4">
        <div className="bg-primary h-4 w-2"></div>
        <div className="font-px text-white text-xl ml-2">Friends</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className="w-10 h-10 mt-4" src="https://imgs.bamboownft.com/temp/icon_351.png" />
        <div className="text-gray-400 mt-4 font-px uppercase text-2xl">NONE</div>
      </div>
      <div className="mb-4 mt-4 border border-gray-500 mx-4" />
      <div className="flex-row flex items-center py-4 pl-4">
        <div className="bg-primary h-4 w-2"></div>
        <div className="font-px text-white text-xl ml-2">Recommend neighbors</div>
      </div>
      <div className=" px-4">
        {recommendUserList.map(item => {
          return (
            <div
              style={{
                backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_317.png)',
                backgroundSize: '100% 100%',
              }}
              className="py-4 px-6 mt-4 flex flex-row items-center"
              key={item.userId}>
              <img className="w-10 h-10 rounded-full" src={item.avatar} />
              <div className="text-2xl ml-6 flex-1 font-px text-white">{item.nickname}</div>
              <img className="w-10 h-10 cursor-pointer" src="https://imgs.bamboownft.com/temp/icon_294.png" />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mt-6">
        <div className=" hover:bg-gray-500 hover:text-gray-300 transform transition-all duration-500 cursor-pointer border-4 flex justify-center items-center border-gray-500 w-10/12 text-gray-500 text-2xl font-px uppercase py-2 pl-2">
          Go to the community
        </div>
      </div>
    </div>
  )
}
export default Sidebar
