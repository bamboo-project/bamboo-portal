import { useInterval } from 'ahooks'
import { useState } from 'react'
import dayjs from 'dayjs'
function CountDown() {
  const [countdown, setCountdown] = useState(2000)

  useInterval(() => {
    setCountdown(countdown - 1)
  }, 1000)
  return (
    <>
      {dayjs.duration(countdown * 1000).hours()}:{dayjs.duration(countdown * 1000).minutes()}:
      {dayjs.duration(countdown * 1000).seconds()}
    </>
  )
}
export default CountDown
