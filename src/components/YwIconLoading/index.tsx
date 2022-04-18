import React, { useEffect, useState } from 'react'
import styles from './index.scss'
import { HeartIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

/**
 *
 * @returns
 */
const YwIconLoading = ({ fontSize, color }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: fontSize || 30 }} spin />

  return <Spin style={{ color: color || '#1890ff' }} indicator={antIcon} />
}
export default YwIconLoading
