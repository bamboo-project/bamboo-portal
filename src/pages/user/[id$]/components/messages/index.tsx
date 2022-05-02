import { useEffect, useState } from 'react'
import * as MessageService from '@/services/Message'
function Message(props) {
  const { walletId } = props
  const [messageList, setMessageList] = useState([])
  const [messageCount, setMessageCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const getMessageList = async () => {
    try {
      const res = await MessageService.getMessageList({ walletId })
      if (res.code === 200) {
        setMessageList(res.data.msg_list)
        setMessageCount(res.data.msg_len)
      }
    } catch (err) {}
  }
  useEffect(() => {
    getMessageList()
  }, [])
  return (
    <div className="bg-purple w-full py-4">
      <div className="text-white flex flex-row py-4 pl-4  items-center">
        <img className="w-6 h-6" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_370.png" />
        <div className="font-px text-base ml-2">{messageCount} MESSAGE</div>
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-4 px-4">
        {messageList.map(item => {
          return (
            <div key={item.id} className="bg-green-100 bg-opacity-10 px-4 py-4">
              <div className="font-px flex flex-row">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_370.png"
                />
                <div className="ml-2">
                  <div className="text-white">{item.from_wallet}</div>
                  <div className="text-white">{item.create_at}</div>
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
