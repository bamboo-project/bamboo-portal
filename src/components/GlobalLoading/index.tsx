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
      <div className="bg-purple fixed z-10 overflow-hidden left-0 top-0 h-screen w-screen flex justify-center items-center">
        <Spin className='text-primary text-2xl' size='large' indicator={antIcon} />
      </div>
    </>
  )
}
export default GlobalLoading
