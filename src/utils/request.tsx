import { extend } from 'umi-request'
// import * as AuthService from '@/utils/auth'
const request = extend({
  prefix: 'https://api.bamboownft.com',
  timeout: 10000,
  headers: {
    // Authorization: 'Basic YXBwOmFwcF9zZWNyZXQ=',
    // 'Tenant-Id': '000000',
  },
  errorHandler: e => {
    console.log('e: ', e)
  },
})
// request.interceptors.request.use((url, options) => {
//   const { AUTH_TOKEN } = AuthService.getAuth()
//   // 获取Cookie
//   return {
//     url,
//     options: {
//       ...options,
//       interceptors: true,
//       headers: {
//         ...options.headers,
//         'yw-auth': AUTH_TOKEN ? `bearer ${AUTH_TOKEN}` : '',
//       },
//     },
//   }
// })

export default request
