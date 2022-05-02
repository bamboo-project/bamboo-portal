import request from '@/utils/request'

export async function getMessageList({ walletId }: any) {
  return request.get(`/api/user/message/v1?toAddress=${walletId}`, {
    data: {},
  })
}

export async function createMessage({
  fromWalletId,
  toWalletId,
  fromAddressAvatarURL,
  toAddressAvatarURL,
  content,
}: any) {
  return request.post(`/api/user/message/v1`, {
    data: {
      fromAddress: fromWalletId,
      content,
      toAddress: toWalletId,
      fromAddressAvatarURL,
      toAddressAvatarURL,
    },
  })
}
