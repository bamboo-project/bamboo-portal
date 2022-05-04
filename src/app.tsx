import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言
var duration = require('dayjs/plugin/duration')

dayjs.locale('zh-cn') // 使用本地化语言
dayjs.extend(duration)
