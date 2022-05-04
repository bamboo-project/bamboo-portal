import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言
var duration = require('dayjs/plugin/duration')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.locale('en') // 使用本地化语言
dayjs.extend(duration)
dayjs.extend(customParseFormat)
