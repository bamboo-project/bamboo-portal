import React, { useEffect, useState } from 'react'
import styles from './index.scss'
import { HeartIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import { LoadingOutlined } from '@ant-design/icons'
const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />
import { Spin } from 'antd';

/**
 *
 * @returns
 */
const GlobalLoading = () => {
  return (
    <>
      <div className="dark:bg-dark-bg-1 fixed z-10 overflow-hidden left-0 top-0 h-screen w-screen bg-white flex justify-center items-center">
        <Spin indicator={antIcon} />
      </div>
    </>
  )
}
export default GlobalLoading
