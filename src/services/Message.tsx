import request from '@/utils/request'

export async function getMessageList({ walletId }: any) {
  return request.get(`/api/user/message/v1?toAddress=${walletId}`, {
    data: {},
  })
}
