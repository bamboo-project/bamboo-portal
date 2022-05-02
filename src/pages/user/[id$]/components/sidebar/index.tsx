function Sidebar() {
  var recommendUserList = [
    {
      userId: 1,
      nickname: 'Netus amet',
      avatar: '',
    },
    {
      userId: 2,
      nickname: 'Massa nulla',
      avatar: '',
    },
    {
      userId: 3,
      nickname: 'Diam pulvinor',
      avatar: '',
    },
  ]
  return (
    <div>
      <div className="flex-row flex items-center py-4 pl-4">
        <div className="bg-primary h-4 w-2"></div>
        <div className="font-px text-white text-base ml-2">Friends</div>
      </div>
      <div className="flex justify-center items-center">
          <img src='' />
          <div className="text-gray-400 font-px uppercase text-2xl">
              NONE
          </div>
      </div>
      <div className="mb-4 mt-4 border border-gray-500 mx-4" />
      <div className="flex-row flex items-center py-4 pl-4">
        <div className="bg-primary h-4 w-2"></div>
        <div className="font-px text-white text-base ml-2">Recommend neighbors</div>
      </div>
      <div className=" px-4">
        {recommendUserList.map(item => {
          return (
            <div className="bg-gray-400 py-2 px-2 mt-4" key={item.userId}>
              <img src="" />
              <div className="text-2xl font-px text-white">{item.nickname}</div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mt-6">
        <div className=" cursor-pointer border-4 flex justify-center items-center border-gray-500 w-10/12 text-gray-500 text-2xl font-px uppercase py-2 pl-2">
          Go to the community
        </div>
      </div>
    </div>
  )
}
export default Sidebar
