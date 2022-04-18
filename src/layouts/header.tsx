/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Popover, Transition, Switch } from '@headlessui/react';
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
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useDispatch } from 'umi';

import { useLocalStorageState } from 'ahooks';

const solutions = [
  {
    name: 'MARKET',
    description: 'Find the NFT you like',
    href: '/market',
    icon: ChartBarIcon,
  },
];
const callsToAction = [{ name: 'About NFT', href: '#', icon: PlayIcon }];
const resources = [
  {
    name: 'Help',
    href: '/help',
    icon: SupportIcon,
  },
];
const recentPosts = [{ id: 1, name: 'TBD', href: '#' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderLayout(props) {
  const { auth } = props;
  const { isLogin, userInfo } = auth;

  const dispatch = useDispatch();

  const [theme, setTheme] = useLocalStorageState('theme', 'dark');

  const handleLogout = () => {
    dispatch({
      type: 'auth/logout',
    });
  };
  return (
    <Popover className="relative bg-gray-700 bg-opacity-50 dark:header">
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
                      src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_title_small.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-6 w-auto sm:h-8"
                      src="https://bamboo-imgs.s3.ap-southeast-1.amazonaws.com/temp/main_title_small.png"
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
              <Popover.Group
                as="nav"
                className="hidden md:flex space-x-14 flex-1 justify-end"
              >
                <a
                  href="/"
                  className="font-px text-base text-center block relative font-medium text-white dark:text-white hover:text-white"
                >
                  About Bamboo
                  <div className=" h-1.5 rounded-full left-1/2 -ml-7 z-10 -bottom-3 absolute bg-primary w-14"></div>
                </a>
                <a
                  href={'/market'}
                  className="font-px block text-base font-medium text-white dark:text-white hover:text-white"
                >
                  MARKET
                </a>
                <a
                  href="/home"
                  className="font-px block text-base font-medium text-white dark:text-white hover:text-white"
                >
                  My Home
                </a>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end ">
                {isLogin ? (
                  <Popover.Group
                    as="nav"
                    className="hidden md:flex space-x-10 flex-1 justify-end"
                  >
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 ',
                            )}
                          >
                            <div>
                              <img
                                src={userInfo.avatar}
                                className="w-10 h-10 rounded-full"
                              />
                            </div>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? 'text-gray-600 dark:text-white'
                                  : 'text-gray-400 dark:text-gray-100',
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
                              className="absolute z-10 -ml-4 mt-3 transform px-2 w-80 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            >
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  <a href={`/profile/${userInfo.userId}`}>
                                    <div className="p-3 text-black font-bold text-2xl">
                                      {userInfo.nickname}
                                    </div>
                                  </a>
                                  <hr />
                                  <a
                                    href="/order/buy/list"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Orders
                                      </p>
                                    </div>
                                  </a>
                                  <a
                                    href="/wallet"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Wallet
                                      </p>
                                    </div>
                                  </a>
                                  <a
                                    href="/profile/edit"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Setting
                                      </p>
                                    </div>
                                  </a>
                                  <a className="-m-3 p-3 flex content-between justify-between rounded-lg hover:bg-gray-50">
                                    <div className="ml-4 ">
                                      <p className="text-base font-medium text-gray-900">
                                        Dark Theme
                                      </p>
                                    </div>
                                    <Switch
                                      checked={theme == 'dark'}
                                      onChange={() => {
                                        if (theme == 'dark') {
                                          document
                                            .querySelector('html')
                                            .classList.remove('dark');
                                          setTheme('light');
                                        } else {
                                          document
                                            .querySelector('html')
                                            .classList.add('dark');
                                          setTheme('dark');
                                        }
                                      }}
                                      className={`${
                                        theme == 'dark'
                                          ? 'bg-second'
                                          : 'bg-gray-400'
                                      } relative inline-flex items-center h-6 rounded-full w-11`}
                                    >
                                      <span className="sr-only">
                                        Enable notifications
                                      </span>
                                      <span
                                        className={`${
                                          theme == 'dark'
                                            ? 'translate-x-6'
                                            : 'translate-x-1'
                                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                                      />
                                    </Switch>
                                  </a>
                                  <a
                                    onClick={() => {
                                      dispatch({
                                        type: 'auth/logout',
                                      });
                                    }}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Logout
                                      </p>
                                    </div>
                                  </a>
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
                <div
                  // href={isLogin ? '/create/nft' : '/login'}
                  className="ml-8 font-px cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md 
                  shadow-sm text-base font-medium bg-primary text-white hover:text-white  hover:bg-opacity-90"
                >
                  Connect Wallet
                </div>
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
                    <div>
                      {theme == 'dark' ? (
                        <img
                          className="h-6 w-auto sm:h-8"
                          src="https://yuanwu-imgs.oss-cn-shanghai.aliyuncs.com/attachments/2021-07-17/logo_white.png"
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-6 w-auto sm:h-8"
                          src="https://yuanwu-imgs.oss-cn-shanghai.aliyuncs.com/attachments/2021-07-17/logo_dark.png"
                          alt=""
                        />
                      )}
                      {/* <img className="h-8 w-auto" src="https://imgs.yuanwuapp.com/assets/logo%203.png" alt="Workflow" /> */}
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">关闭菜单</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-primary-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      IP
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Mini App
                    </a>
                    {resources.map((item) => (
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
                      <img
                        className="rounded-full w-20 h-20 mx-auto"
                        src={userInfo.avatar}
                      />
                      <div className="text-black text-2xl mt-3">
                        {userInfo.nickname}
                      </div>
                      <div
                        className="bg-blue-500 p-3 mt-4 text-white"
                        onClick={() => {
                          handleLogout();
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
  );
}
