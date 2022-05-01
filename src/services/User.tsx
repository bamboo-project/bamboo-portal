import request from '@/utils/request'

export async function getUser({ walletId }: any) {
  return request.get(`/api/user`, {
    headers: {
      walletId,
    },
    data: {},
  })
}
