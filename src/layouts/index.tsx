import React from 'react'
import styles from './index.scss'
import Header from './header'
import Footer from './footer'
import GlobalLoading from '@/components/GlobalLoading'
import { connect } from 'umi'
function IndexLayout(props) {
  const { pathname } = props.location
  console.log('props.location: ', props.location);
  if (pathname == '/login') {
    return props.children
  }

  if (props.global.loading) {
    return <GlobalLoading />
  }
  if (/^\/aaa|goods\/(\d+)/.test(pathname) || '/create/nft' == pathname) {
    return (
      <div className="bg-white overflow-hidden lg:h-screen w-screen flex flex-col dark:bg-dark-bg-1 ">
        <Header auth={props.auth} />
        <div className="mx-auto flex container flex-1  flex-shrink-0 overflow-hidden ">{props.children}</div>
      </div>
    )
  }
 
  return (
    <div className="bg-purple dark:bg-dark-bg-1 ">
      <Header auth={props.auth} />
      <div className="mx-auto">{props.children}</div>
      <Footer />
    </div>
  )
}
export default connect(({ global, auth }) => ({
  global,
  auth,
}))(IndexLayout)
