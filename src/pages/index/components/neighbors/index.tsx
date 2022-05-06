function Neighbors() {
  var items = []
  let neighborsInfo = [
    { name: 'Elon Musk', pro: 'CEO of SpaceX', avatar: 'https://imgs.bamboownft.com/temp/index_avatar1.png' },
    { name: 'Zuckerberg', pro: 'CEO of Facebook', avatar: 'https://imgs.bamboownft.com/temp/index_avatar2.png' },
    { name: 'Lisa Su', pro: 'CEO of AMD', avatar: 'https://imgs.bamboownft.com/temp/index_avatar3.png' },
    { name: 'Bill Gates', pro: 'Founder of Microsoft', avatar: 'https://imgs.bamboownft.com/temp/index_avatar4.png' },
    { name: 'Tim Cook', pro: 'CEO of Apple', avatar: 'https://imgs.bamboownft.com/temp/index_avatar5.png' },
    { name: 'Page', pro: 'Founder of Google', avatar: 'https://imgs.bamboownft.com/temp/index_avatar6.png' },
    { name: 'Jensen Huang', pro: 'CEO of NVIDIA', avatar: 'https://imgs.bamboownft.com/temp/index_avatar7.png' },
    { name: 'Stven W', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/avatar_5.png' },
    { name: 'Allennn', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/index_avatar9.png' },
    { name: 'Nikkor', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/avatar_6.png' },
    { name: 'ToddyKQM', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/index_avatar11.png' },
    { name: 'MrQiuuuu', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/index_avatar12.png' },
    { name: 'Morbi', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/index_avatar13.png' },
    { name: 'Magna', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/index_avatar14.png' },
    { name: 'IMorbi', pro: 'Star of Bamboo', avatar: 'https://imgs.bamboownft.com/temp/index_avatar15.png' },
  ]

  for (let index = 0; index < neighborsInfo.length; index++) {
    items.push(
      <div
        key={index}
        className="w-56 flex flex-row items-center pl-4 mb-4 shadow-md py-4 bg-black bg-opacity-10 rounded-lg bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url(https://imgs.bamboownft.com/temp/index_ner_bg.png)' }}>
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full bg-center bg-contain"
            style={{ backgroundImage: `url(https://imgs.bamboownft.com/temp/index_avatar${index + 1}.png)` }}></div>
          <div className="w-2 h-2 absolute bottom-0 right-0 bg-green-400 rounded-full"></div>
        </div>
        <div className="ml-4">
          <div className="text-white font-px">{neighborsInfo[index].name}</div>
          <div className="text-white font-px">{neighborsInfo[index].pro}</div>
        </div>
      </div>,
    )
  }
  return (
    <div className="warp-5 container mx-auto mt-28">
      <div className="font-px text-primary text-2xl uppercase">Already settled Star neighbors</div>
      <div className="grid grid-cols-5 grid-flow-row gap-4 mt-5">{items}</div>
    </div>
  )
}
export default Neighbors
