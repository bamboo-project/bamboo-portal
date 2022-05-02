import { useEffect, useState } from 'react'
import * as MessageService from '@/services/Message'
import Modal from '@/components/Modal'
function Message(props) {
  const { walletId, isSelf } = props
  console.log('isSelf: ', isSelf)
  const [messageList, setMessageList] = useState([])
  const [messageCount, setMessageCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isOpenPostMessageModal, setIsOpenPostMessage] = useState(false)
  const getMessageList = async () => {
    try {
      const res = await MessageService.getMessageList({ walletId })
      if (res.code === 200) {
        setMessageList(res.data.msg_list)
        setMessageCount(res.data.msg_len)
      }
    } catch (err) {}
  }
  const PostMessage = () => {}
  useEffect(() => {
    getMessageList()
  }, [])
  return (
    <div className="bg-purple w-full py-4">
      <Modal
        isOpen={true}
        onClose={() => {
          setIsOpenPostMessage
        }}>
        <div>
          <div>
            <textarea />
          </div>
          <div
            onClick={() => {}}
            className="py-2 mx-auto flex justify-center items-center mt-4 px-6 text-1xl bg-primary text-white cursor-pointer w-60">
            Send
          </div>
        </div>
      </Modal>
      <div className="text-white flex flex-row py-4 pl-4  items-center">
        <div className="flex-1 flex-row items-center flex">
          <img className="w-6 h-6" src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/img_370.png" />
          <div className="font-px text-base ml-2">{messageCount} MESSAGE</div>
        </div>
        <div className="pr-8">
          {!isSelf && (
            <div className=" bg-primary px-12 rounded-lg cursor-pointer py-4 font-game text-white text-1xl justify-center items-center flex">
              + MESSAGE
            </div>
          )}
        </div>
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
