'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeMenu, setActiveMenu] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuHover = (index: number) => {
    setActiveMenu(index)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  // Dynamic header styling based on scroll position
  const headerStyle = {
    backgroundColor: scrollPosition > 50 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: scrollPosition > 50 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease'
  }

  // Text color based on scroll position
  const textColor = scrollPosition > 50 ? 'text-gray-900' : 'text-white'

  // Hamburger menu bar color
  const menuBarColor = scrollPosition > 50 ? 'bg-gray-900' : 'bg-white'

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={headerStyle}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="relative z-10">
          <Link href="/">
            <svg viewBox="0 0 200 42" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className="h-8 md:h-10" style={{ fill: scrollPosition > 50 ? 'rgb(19, 19, 19)' : 'white' }}>
              <g clipPath="url(#clip0_1174_169)" style={{ fill: scrollPosition > 50 ? 'rgb(19, 19, 19)' : 'white' }}>
                <path d="M90.7487 27.5253V30.9336H101.26V34.9463H90.7487V41.3495H85.1582V23.4375H102.172V27.5253H90.7487Z" fill="currentColor" />
                <path d="M110.044 27.5253V30.9336H120.555V34.9463H110.044V41.3495H104.453V23.4375H121.467V27.5253H110.044Z" fill="currentColor" />
                <path d="M129.363 27.5253V30.312H140.639V34.2428H129.363V37.289H142.029V41.3495H123.745V23.4375H142.029V27.5253H129.363Z" fill="currentColor" />
                <path d="M149.928 27.5253V30.312H161.205V34.2428H149.928V37.289H162.595V41.3495H144.311V23.4375H162.595V27.5253H149.928Z" fill="currentColor" />
                <path d="M79.5535 25.5722C77.5045 24.0012 74.6666 23.1338 71.535 23.1338C68.4033 23.1338 65.5483 24.0012 63.5096 25.5722C62.4737 26.384 61.636 27.4207 61.06 28.604C60.4839 29.7874 60.1846 31.0862 60.1846 32.4023C60.1846 33.7184 60.4839 35.0172 61.06 36.2005C61.636 37.3838 62.4737 38.4206 63.5096 39.2324C65.5586 40.8102 68.3965 41.6742 71.535 41.6742C74.6734 41.6742 77.5147 40.8102 79.5535 39.2324C80.5894 38.4206 81.4271 37.3838 82.0031 36.2005C82.5792 35.0172 82.8785 33.7184 82.8785 32.4023C82.8785 31.0862 82.5792 29.7874 82.0031 28.604C81.4271 27.4207 80.5894 26.384 79.5535 25.5722ZM75.633 36.2135C74.4479 37.0934 73.011 37.5685 71.535 37.5685C70.0589 37.5685 68.622 37.0934 67.4369 36.2135C66.9036 35.7331 66.4773 35.1461 66.1854 34.4905C65.8936 33.8348 65.7428 33.1251 65.7428 32.4074C65.7428 31.6897 65.8936 30.98 66.1854 30.3244C66.4773 29.6687 66.9036 29.0817 67.4369 28.6013C68.622 27.7214 70.0589 27.2463 71.535 27.2463C73.011 27.2463 74.4479 27.7214 75.633 28.6013C76.1663 29.0817 76.5926 29.6687 76.8845 30.3244C77.1763 30.98 77.3271 31.6897 77.3271 32.4074C77.3271 33.1251 77.1763 33.8348 76.8845 34.4905C76.5926 35.1461 76.1663 35.7331 75.633 36.2135Z" fill="currentColor" />
                <path d="M42.7835 32.4055C42.7609 33.1218 42.8963 33.8344 43.1802 34.4925C43.4642 35.1507 43.8895 35.7381 44.4262 36.2133C45.548 37.1292 46.9603 37.6137 48.4081 37.5793C51.2119 37.5793 53.1892 36.2406 53.4624 34.1642V34.1369H58.4484V34.1711C58.4484 36.3191 57.3829 38.2691 55.4637 39.6352C53.6093 40.9534 51.106 41.6842 48.4047 41.6842C45.1536 41.6842 42.4181 40.8748 40.4988 39.3449C38.4703 37.733 37.4014 35.3356 37.4014 32.4123C37.4014 29.5573 38.4259 27.1975 40.3725 25.5822C42.3191 23.9668 45.0716 23.1506 48.3945 23.1506C51.0958 23.1506 53.599 23.878 55.4534 25.1997C57.3727 26.5657 58.4382 28.5191 58.4382 30.6638H53.4522C53.1858 28.5908 51.2017 27.2487 48.3979 27.2487C46.9496 27.211 45.5361 27.6959 44.4159 28.6147C43.8825 29.0882 43.4597 29.6732 43.1776 30.3283C42.8955 30.9834 42.761 31.6926 42.7835 32.4055Z" fill="currentColor" />
                <path d="M60.86 0.471194V0.454102H54.5114L46.1274 18.4891L46.1035 18.5335H51.9091L53.2137 15.4599H61.9289L63.1754 18.4959V18.5198H69.2747L60.86 0.471194ZM54.8837 11.5394L57.6464 5.05079L60.3068 11.5394H54.8837Z" fill="currentColor" />
                <path d="M87.2033 0.454102L87.1657 0.505328L78.6349 11.3926V18.5335H73.0205V11.3926L64.4248 0.454102H71.0398L75.8721 6.56024H76.0224L80.9127 0.454102H87.2033Z" fill="currentColor" />
                <path d="M159.385 3.15543C158.186 1.4479 156.123 0.556554 153.237 0.454102H140.766V18.5335H146.407V12.8235H153.418C154.325 12.8342 155.227 12.7028 156.092 12.4342C160.027 11.1638 160.453 7.91945 160.453 6.58757C160.451 5.36202 160.078 4.16584 159.385 3.15543ZM146.407 4.57609H152.845C153.128 4.55407 153.413 4.59057 153.682 4.68333C153.95 4.77609 154.197 4.92315 154.407 5.11532C154.616 5.3075 154.784 5.54068 154.899 5.80042C155.015 6.06016 155.076 6.34087 155.078 6.62513C155.078 7.10666 154.918 8.70149 152.841 8.73906H146.407V4.57609Z" fill="currentColor" />
                <path d="M116.177 0.454102H110.535V18.5335H116.177V0.454102Z" fill="currentColor" />
                <path d="M107.52 3.06677C106.335 1.35924 104.296 0.454244 101.458 0.334717H89.123V18.5165H94.6964V12.7895H101.629C102.524 12.7998 103.415 12.6684 104.269 12.4002C108.159 11.1195 108.579 7.86152 108.579 6.5194C108.572 5.28966 108.203 4.08909 107.52 3.06677ZM101.055 8.6743H94.6964V4.49427H101.055C101.337 4.47566 101.619 4.51472 101.885 4.60903C102.151 4.70334 102.395 4.85091 102.602 5.04273C102.808 5.23456 102.974 5.4666 103.088 5.72462C103.202 5.98264 103.262 6.26121 103.265 6.54331C103.265 7.03508 103.108 8.63332 101.055 8.6743Z" fill="currentColor" />
                <path d="M137.627 3.15543C136.432 1.4479 134.373 0.556554 131.501 0.454102H119.012V18.5335H124.653V12.8235H131.668C132.574 12.8342 133.476 12.7028 134.342 12.4342C138.273 11.1638 138.7 7.91945 138.7 6.58757C138.696 5.36166 138.322 4.16545 137.627 3.15543ZM124.65 4.57609H131.087C131.371 4.55409 131.656 4.59058 131.925 4.68331C132.194 4.77604 132.441 4.92303 132.651 5.11516C132.86 5.30728 133.028 5.54044 133.144 5.80019C133.26 6.05994 133.321 6.34072 133.324 6.62513C133.324 7.10666 133.16 8.70149 131.087 8.73906H124.653L124.65 4.57609Z" fill="currentColor" />
                <path d="M179.427 14.1212V18.5335H162.687V0.454102H168.325V14.1212H179.427Z" fill="currentColor" />
                <path d="M187.217 4.5795V7.39352H198.6V11.3584H187.217V14.4388H200V18.5335H181.552V0.454102H200V4.5795H187.217Z" fill="currentColor" />
                <path d="M22.6319 8.42496V18.6702H19.2168V18.6428L18.8207 16.0098C17.5912 17.9564 14.7977 18.9912 10.7269 18.9912C7.25041 18.9912 4.76766 18.233 2.91327 16.6006C0.997421 14.9272 -0.00661461 12.4718 -0.00661461 9.49046C-0.0296647 8.06477 0.28022 6.65337 0.898387 5.36847C1.81362 3.54141 3.41187 2.1105 5.64191 1.12354C7.37676 0.358566 9.33018 -0.00342663 11.789 -0.00342663C13.209 -0.0103951 14.6255 0.137316 16.0135 0.43711C18.3425 1.03133 20.1935 2.17539 21.3649 3.75315C22.0817 4.65948 22.5153 5.75711 22.6114 6.90867V6.94281H17.3727V6.92232C16.9321 5.1055 14.8353 4.53178 13.9576 4.35078C12.4447 4.08455 10.8933 4.12988 9.39848 4.48398C8.69476 4.66059 8.0331 4.97516 7.45189 5.40945C6.93351 5.81737 6.5231 6.34623 6.25662 6.94965C5.97864 7.62992 5.84155 8.35953 5.85364 9.09432V9.88659C5.81516 10.8612 6.05186 11.827 6.53666 12.6733C7.00305 13.4045 7.68939 13.9689 8.49691 14.2852C9.51971 14.675 10.6096 14.8584 11.7037 14.8248C12.8579 14.8248 16.3003 14.3125 16.9697 12.0483H11.2392V8.42496H22.6319Z" fill="currentColor" />
                <path d="M42.2482 11.6282C43.2365 11.1495 44.0663 10.3967 44.6387 9.45963C45.2007 8.50289 45.4889 7.41013 45.472 6.30069C45.4411 5.14094 45.0562 4.0184 44.3689 3.08371C43.1566 1.44448 41.1349 0.563384 38.3516 0.454102H25.1729V18.5335H30.8145V12.5366H36.6202L39.6937 18.5164V18.5335H45.7999L42.2482 11.6282ZM39.6766 7.53013C39.5188 7.78881 39.3043 8.00832 39.0493 8.17217C38.7944 8.33601 38.5056 8.43995 38.2047 8.47611L37.9554 8.51367H37.9315H37.9145C37.7949 8.51367 37.6891 8.51367 37.573 8.51367H30.8214V4.54878H37.6754C37.9764 4.54331 38.276 4.59188 38.5599 4.69221C38.9474 4.81365 39.2872 5.05299 39.5321 5.37685C39.777 5.70071 39.9147 6.09291 39.9259 6.49877C39.9282 6.85189 39.8438 7.20017 39.6801 7.51306L39.6766 7.53013Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_1174_169">
                  <rect width="200" height="41.6775" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:block gnb ${textColor}`}>
          <ul className="flex space-x-8 text-lg font-medium">
            {/* BRAND Menu */}
            <li 
              className="relative group" 
              onMouseEnter={() => handleMenuHover(0)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/brand/" className="block py-2 hover:text-green-600 transition-colors duration-300">
                BRAND
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/brand/" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">브랜드 스토리</Link></li>
                  <li><Link href="/brand/contact" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">오시는 길</Link></li>
                </ul>
              </div>
            </li>

            {/* MENU Menu */}
            <li 
              className="relative group" 
              onMouseEnter={() => handleMenuHover(1)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/menu/" className="block py-2 hover:text-green-600 transition-colors duration-300">
                MENU
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 1 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/menu/" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">NEW</Link></li>
                  <li><Link href="/menu/signature" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">SIGNATURE</Link></li>
                  <li><Link href="/menu/coffee" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">COFFEE</Link></li>
                  <li><Link href="/menu/noncoffee" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">NON-COFFEE</Link></li>
                  <li><Link href="/menu/beverage" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">BEVERAGE</Link></li>
                  <li><Link href="/menu/dessert" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">DESSERT</Link></li>
                </ul>
              </div>
            </li>

            {/* STORE Menu */}
            <li 
              className="relative group" 
              onMouseEnter={() => handleMenuHover(2)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/store/" className="block py-2 hover:text-green-600 transition-colors duration-300">
                STORE
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 2 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/store/" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">매장찾기</Link></li>
                </ul>
              </div>
            </li>

            {/* NEWS Menu */}
            <li 
              className="relative group" 
              onMouseEnter={() => handleMenuHover(3)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/news/" className="block py-2 hover:text-green-600 transition-colors duration-300">
                NEWS
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 3 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/news/" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">새소식</Link></li>
                  <li><Link href="/news/event" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">이벤트</Link></li>
                </ul>
              </div>
            </li>

            {/* FRANCHISE Menu */}
            <li 
              className="relative group" 
              onMouseEnter={() => handleMenuHover(4)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/franchise/" className="block py-2 hover:text-green-600 transition-colors duration-300">
                FRANCHISE
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 4 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/franchise/?idx=1" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">창업경쟁력</Link></li>
                  <li><Link href="/franchise/?idx=2" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">창업안내</Link></li>
                  <li><Link href="/franchise/?idx=3" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">창업혜택</Link></li>
                  <li><Link href="/franchise/?idx=4" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">창업비용</Link></li>
                  <li><Link href="/franchise/?idx=5" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors">창업문의</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 ${menuBarColor} mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 ${menuBarColor} mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 ${menuBarColor} transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <div className="menuLogo">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image 
                  src="/asset/img/common/logo_black.svg" 
                  alt="GrayPipple Coffee" 
                  width={120} 
                  height={35}
                />
              </Link>
            </div>
          </div>

          <nav className="p-6">
            <ul className="space-y-6">
              {/* BRAND Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/brand/" 
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    브랜드
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/brand/" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        브랜드 스토리
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/brand/contact" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        오시는 길
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* MENU Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/menu/" 
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    메뉴
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/menu/" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        NEW
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/signature" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        SIGNATURE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/coffee" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        COFFEE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/noncoffee" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        NON-COFFEE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/beverage" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        BEVERAGE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/dessert" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        DESSERT
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* STORE Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/store/" 
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    매장
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/store/" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        매장찾기
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* NEWS Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/news/" 
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    뉴스
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/news/" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        새소식
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/news/event" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        이벤트
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* FRANCHISE Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/franchise/" 
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    창업
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/franchise/?idx=1" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        창업경쟁력
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/?idx=2" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        창업안내
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/?idx=3" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        창업혜택
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/?idx=4" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        창업비용
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/?idx=5" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        창업문의
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
