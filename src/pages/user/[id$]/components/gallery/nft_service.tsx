import request from '@/utils/request'

export async function GetNftList() {
  return request.get(`/api/gallery/list/v1`, {
    data: {},
  })
}
