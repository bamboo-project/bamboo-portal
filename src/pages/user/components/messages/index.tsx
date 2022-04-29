function Message() {
  var list = [
    {
      id: 1,
      avatar: '',
      date: '3.31 12:22',
      nickname: 'Et Allen',
      content:
        'Sed fermentum mauris vestibulum eget morbi. Et habitant pellentesque gravida nullam. Lectus etiam dignissim aenean proin ut a nibh tincidunt.',
    },
    {
      id: 2,
      avatar: '',
      date: '3.31 12:22',
      nickname: 'Et Allen',
      content:
        'Sed fermentum mauris vestibulum eget morbi. Et habitant pellentesque gravida nullam. Lectus etiam dignissim aenean proin ut a nibh tincidunt.',
    },
    {
      id: 3,
      avatar: '',
      date: '3.31 12:22',
      nickname: 'Et Allen',
      content:
        'Sed fermentum mauris vestibulum eget morbi. Et habitant pellentesque gravida nullam. Lectus etiam dignissim aenean proin ut a nibh tincidunt.',
    },
  ]
  return (
    <div className="bg-purple w-full py-4">
      <div className="text-white flex flex-row py-4 pl-4  items-center">
        <img className="w-6 h-6" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_370.png" />
        <div className="font-px text-base ml-2">234 MESSAGE</div>
      </div>
      <div className="flex flex-row space-x-4 px-4">
        {list.map(item => {
          return (
            <div key={item.id} className="bg-green-100 w-1/2 bg-opacity-10 px-4 py-4">
              <div className="font-px flex flex-row">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_370.png"
                />
                <div className="ml-2">
                  <div className="text-white">{item.nickname}</div>
                  <div className="text-white">{item.date}</div>
                </div>
              </div>
              <div className="text-white">{item.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Message
