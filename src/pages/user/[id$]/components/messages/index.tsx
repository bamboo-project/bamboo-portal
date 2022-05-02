import { useEffect, useState } from 'react'
import * as MessageService from '@/services/Message'
import Modal from '@/components/Modal'
import IconLoading from '@/components/IconLoading'
function Message(props) {
  const { walletId, isSelf, myWalletId, myAvatarUrl } = props
  const [messageList, setMessageList] = useState([])
  const [messageCount, setMessageCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [messageContext, setMessageContext] = useState('')
  const [isOpenPostMessageModal, setIsOpenPostMessageModal] = useState(false)
  const getMessageList = async () => {
    try {
      const res = await MessageService.getMessageList({ walletId })
      if (res.code === 200) {
        setMessageList(res.data.msg_list)
        setMessageCount(res.data.msg_len)
      }
    } catch (err) {}
  }
  const PostMessage = () => {
    MessageService.createMessage({
      toWalletId: walletId,
      fromWalletId: myWalletId,
      content: messageContext,
      fromAddressAvatarURL: myAvatarUrl,
      toAddressAvatarURL: '',
    })
  }
  useEffect(() => {
    getMessageList()
  }, [])
  return (
    <div className="bg-purple w-full py-4">
      <Modal
        isOpen={isOpenPostMessageModal}
        onClose={() => {
          setIsOpenPostMessageModal(false)
        }}>
        <div>
          <div>
            <textarea
              onChange={e => {
                setMessageContext(e.target.value)
              }}
              className="w-full bg-gray-600 border-0"
              placeholder=""
            />
          </div>
          <div
            onClick={() => {
              PostMessage()
            }}
            className="py-2 font-px mx-auto flex justify-center items-center mt-4 px-6 text-1xl bg-primary text-white cursor-pointer w-60">
            {
              loading ? <IconLoading fontSize={20} color='#fff' /> :'Send'
            }
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
            <div
              onClick={() => {
                setIsOpenPostMessageModal(true)
              }}
              className=" bg-primary px-12 rounded-lg cursor-pointer py-4 font-game text-white text-1xl justify-center items-center flex">
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
