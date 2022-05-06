console.log('process.env: ', process.env)
const { NODE_ENV } = process.env

export default {
  nftVersion: 15,
  requestApiUrl: NODE_ENV == 'development' ? 'http://api.bamboownft.com' : 'https://api.bamboownft.com',
}
