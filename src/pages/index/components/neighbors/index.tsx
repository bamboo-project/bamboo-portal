function Neighbors() {
  var items = []

  for (let index = 0; index < 20; index++) {
    items.push(
      <div
        key={index}
        className="flex flex-row items-center pl-4 mb-4 shadow-md py-4 bg-black bg-opacity-10 rounded-lg"
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gray-100"></div>
          <div className="w-2 h-2 absolute bottom-0 right-0 bg-green-400 rounded-full"></div>
        </div>
        <div className="ml-4">
          <div className="text-white font-px">Taloy Kitchase</div>
          <div className="text-white font-px">CEO OF BAMBOO</div>
        </div>
      </div>,
    )
  }
  return (
    <div className="warp-5 container mx-auto mt-14">
      <div className="font-px text-primary text-2xl uppercase">Already settled Star neighbors</div>
      <div className="grid grid-cols-6 grid-flow-row gap-4 mt-5">{items}</div>
    </div>
  )
}
export default Neighbors
