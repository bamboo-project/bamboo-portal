import { useEffect, useState } from 'react'
import * as MessageService from '@/services/Message'
import Modal from '@/components/Modal'
import dayjs from 'dayjs'
import { message } from 'antd'
import IconLoading from '@/components/IconLoading'
function Message(props) {
  const { walletId, isSelf, myWalletId, myAvatarUrl } = props
  console.log('myAvatarUrl: ', myAvatarUrl)
  const [messageList, setMessageList] = useState([])
  const [messageCount, setMessageCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [postLoading, setPostLoading] = useState(false)
  const [messageContext, setMessageContext] = useState('')
  const [isOpenPostMessageModal, setIsOpenPostMessageModal] = useState(false)
  const getMessageList = async () => {
    try {
      setLoading(true)
      const res = await MessageService.getMessageList({ walletId })
      if (res.code === 200) {
        setMessageList(res.data.msg_list)
        setMessageCount(res.data.msg_len)
      }
    } catch (err) {
      console.log('err: ', err)
    } finally {
      setLoading(false)
    }
  }
  const PostMessage = async () => {
    if (postLoading) {
      return
    }
    try {
      setPostLoading(true)
      if (messageContext.length < 5) {
        message.error('Minimum length 5 characters')
        return
      }
      const res = await MessageService.createMessage({
        toWalletId: walletId,
        fromWalletId: myWalletId,
        content: messageContext,
        fromAddressAvatarURL: myAvatarUrl,
        toAddressAvatarURL: '',
      })
      console.log('res: ', res)
    } catch (err) {
      console.log('err: ', err)
    } finally {
      setPostLoading(false)
    }
  }
  useEffect(() => {
    getMessageList()
  }, [])
  return (
    <div
      style={{ backgroundImage: 'url(https://imgs.bamboownft.com/temp/bg_321.png)', backgroundSize: '100% 100%' }}
      className="w-full py-4 bg-contain">
      <Modal
        isOpen={isOpenPostMessageModal}
        onClose={() => {
          setIsOpenPostMessageModal(false)
        }}>
        <div className="mt-4">
          <div>
            <textarea
              onChange={e => {
                setMessageContext(e.target.value)
              }}
              className="w-full h-32 text-white bg-gray-600 border-0"
              placeholder=""
            />
          </div>
          <div
            onClick={() => {
              PostMessage()
            }}
            className="py-2 font-px mx-auto w-20 flex justify-center items-center mt-4 px-6 text-1xl bg-primary text-white cursor-pointer shadow-xl">
            {postLoading ? <IconLoading fontSize={20} color="#fff" /> : 'Send'}
          </div>
        </div>
      </Modal>
      <div className="text-white flex flex-row py-2 pl-8  items-center">
        <div className="flex-1 flex-row items-center flex">
          <img className="w-8 h-8" src="https://imgs.bamboownft.com/temp/img_370.png" />
          <div className="font-px text-base ml-4 mt-1">{messageCount} MESSAGE</div>
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
                <img className="rounded-full w-10 h-10" src={item.from_wallet_avatar_url} />
                <div className="ml-2 flex flex-col">
                  <div className="text-white">{item.from_wallet}</div>
                  <div className="text-white">
                    {dayjs(item.create_at, 'YYYY-MM-DDTHH:mm:ss.000ZZ').format('MM.DD HH:mm')}
                  </div>
                </div>
              </div>
              <div className="text-white mt-4">{item.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Message
