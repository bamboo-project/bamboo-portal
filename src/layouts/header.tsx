/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition, Switch } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useDispatch } from 'umi'
import { useLocalStorageState } from 'ahooks'
import './header.scss'

const solutions = [
  {
    name: 'MARKET',
    description: 'Find the NFT you like',
    href: '/market',
    icon: ChartBarIcon,
  },
]
const callsToAction = [{ name: 'About NFT', href: '#', icon: PlayIcon }]
const resources = [
  {
    name: 'Help',
    href: '/help',
    icon: SupportIcon,
  },
]
const recentPosts = [{ id: 1, name: 'TBD', href: '#' }]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderLayout(props: any) {
  const { auth, tabIndex, isGetBalanceSuccess } = props
  console.log('props: ', props)

  const { isLogin, userInfo } = auth
  const [theme, setTheme] = useState('dark')
  const [showBtns, setShowBtns] = useState(false) // 鼠标悬浮钱包地址展示按钮

  const dispatch = useDispatch()

  const connectWallet = () => {
    dispatch({
      type: 'auth/openConnectWalletModal',
    })
  }
  const handleLogout = () => {
    dispatch({
      type: 'auth/logout',
    })
  }

  return (
    <Popover className="relative my-gray-bg bg-opacity-80 dark:header my-header">
      {({ open }) => (
        <>
          <div className="max-w-8xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  py-2 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Bamboo</span>
                  {theme == 'dark' ? (
                    <img
                      className="h-6 w-auto sm:h-8"
                      src="https://imgs.bamboownft.com/temp/main_title_small.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-6 w-auto sm:h-8"
                      src="https://imgs.bamboownft.com/temp/main_title_small.png"
                      alt=""
                    />
                  )}
                </a>
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open Menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-14 flex-1 justify-end">
                <a
                  href="/"
                  className="font-px text-base text-center block relative font-medium text-white dark:text-white hover:text-white"
                >
                  ABOUT BAMBOO
                  {tabIndex == '/' && (
                    <div className="h-0.5 rounded-full z-10 absolute bg-primary text-transparent text-center font-px text-base text-center font-medium">
                      ABOUT BAMBOO
                    </div>
                  )}
                </a>
                <a
                  href={'/market'}
                  className="font-px block text-base relative font-medium text-white dark:text-white hover:text-white"
                >
                  MARKET
                  {tabIndex == '/market' && (
                    <div className="h-0.5 rounded-full z-10 absolute bg-primary text-transparent text-center font-px text-base text-center font-medium">
                      MARKET
                    </div>
                  )}
                </a>
                <a
                  href={
                    isLogin && userInfo.is_twitter === 1 && isGetBalanceSuccess
                      ? `/user/${userInfo.wallet_address}`
                      : '/home'
                  }
                  className="font-px block text-base relative font-medium text-white dark:text-white hover:text-white"
                >
                  MY HOME
                  {(tabIndex == '/home' || tabIndex.indexOf('/user') !== -1) && (
                    <div className="h-0.5 rounded-full z-10 absolute bg-primary text-transparent text-center font-px text-base text-center font-medium">
                      MY HOME
                    </div>
                  )}
                </a>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end ">
                {isLogin ? (
                  <Popover.Group as="nav" className="hidden md:flex space-x-10 flex-1 justify-end">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 ',
                            )}
                          >
                            <div className="header-address font-px text-white">
                              <div className="header-address-info">
                                <div className="header-address-info-avatar relative">
                                  <img src={userInfo.avatar_url} className=" rounded-full" />
                                  <div className="w-2 h-2 bg-green-400 bottom-0 right-0 absolute rounded-full"></div>

                                  {/* <div className="header-address-info-avatar-status"></div> */}
                                </div>
                                <div className="header-address-info-content">
                                  {userInfo.wallet_address.slice(0, 12)}···
                                </div>
                              </div>
                            </div>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600 dark:text-white' : 'text-gray-400 dark:text-gray-100',
                                'ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-white',
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-10 -ml-4 mt-3 transform px-2 w-44 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            >
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                                  <div className="-m-3 cursor-pointer p-3 flex items-start rounded-lg hover:bg-gray-900">
                                    <a
                                      href={`/user/${userInfo.wallet_address}`}
                                      className="text font-medium text-gray-100"
                                    >
                                      Account
                                    </a>
                                  </div>
                                  <div
                                    onClick={() => {
                                      dispatch({
                                        type: 'auth/logout',
                                      })
                                    }}
                                    className="-m-3 p-3 cursor-pointer flex items-start rounded-lg hover:bg-gray-900"
                                  >
                                    <p className="text font-medium text-gray-100">DISCONNECT</p>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                ) : (
                  <></>
                )}
                {!isLogin && (
                  <div
                    onClick={connectWallet}
                    className="ml-8 font-px cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-3xl 
                  shadow-sm text-base font-medium bg-primary text-white hover:text-white  hover:bg-opacity-90"
                  >
                    CONNECT WALLET
                  </div>
                )}
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      IP
                    </a>

                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Mini App
                    </a>
                    {resources.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {isLogin ? (
                    <div className="w-full flex flex-col text-center">
                      <img className="rounded-full w-20 h-20 mx-auto" src={userInfo.avatar_url} />
                      <div className="text-black text-2xl mt-3">{userInfo.nickname}</div>
                      <div
                        className="bg-blue-500 p-3 mt-4 text-white"
                        onClick={() => {
                          handleLogout()
                        }}
                      >
                        Logout
                      </div>
                    </div>
                  ) : (
                    <div>
                      <a
                        href="/login"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white
                       bg-gray-900 dark:text-white hover:text-white hover:bg-gray-700"
                      >
                        Connect Wallet
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
