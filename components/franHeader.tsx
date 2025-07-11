'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const HeaderFran = () => {
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

  // Determine if header should be scrolled (white background)
  const isScrolled = scrollPosition > 50

  // Dynamic header styling based on scroll position
  const headerStyle = {
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease'
  }

  // Dynamic text colors based on scroll position
  const textColor = isScrolled ? 'text-gray-900' : 'text-white'
  const logoTextColor = isScrolled ? 'text-black' : 'text-black'
  const menuBarColor = isScrolled ? 'bg-gray-900' : 'bg-white'
  
  // Dropdown text colors (always dark since dropdown has white background)
  const dropdownTextColor = 'text-gray-800'

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4"
      style={headerStyle}
    >
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="relative z-10">
          <Link href="/">
            <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300 text-black`}>
              GRAYPIPPLE
            </p>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block gnb">
          <ul className="flex space-x-6 xl:space-x-8 text-base lg:text-lg font-medium">
            {/* BRAND Menu */}
            <li 
              className="relative group text-black" 
              onMouseEnter={() => handleMenuHover(0)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/brand/" className={`block py-2 hover:text-green-600 transition-colors duration-300 text-black`}>
                BRAND
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/brand/" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Brand</Link></li>
                  <li><Link href="/brand/contact" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Contact</Link></li>
                </ul>
              </div>
            </li>

            {/* MENU Menu */}
            <li 
              className="relative group text-black" 
              onMouseEnter={() => handleMenuHover(1)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/menu/" className={`block py-2 hover:text-green-600 transition-colors duration-300 text-black`}>
                MENU
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 1 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/menu/" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>NEW</Link></li>
                  <li><Link href="/menu/signature" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>SIGNATURE</Link></li>
                  <li><Link href="/menu/coffee" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>COFFEE</Link></li>
                  <li><Link href="/menu/noncoffee" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>NON-COFFEE</Link></li>
                  <li><Link href="/menu/beverage" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>BEVERAGE</Link></li>
                  <li><Link href="/menu/dessert" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>DESSERT</Link></li>
                </ul>
              </div>
            </li>

            {/* STORE Menu */}
            <li 
              className="relative group text-black" 
              onMouseEnter={() => handleMenuHover(2)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/store/" className={`block py-2 hover:text-green-600 transition-colors duration-300 text-black`}>
                STORE
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 2 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/store/" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Store</Link></li>
                </ul>
              </div>
            </li>

            {/* NEWS Menu */}
            <li 
              className="relative group text-black" 
              onMouseEnter={() => handleMenuHover(3)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/news/" className={`block py-2 hover:text-green-600 transition-colors duration-300 text-black`}>
                NEWS
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 3 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
              >
                <ul className="py-2">
                  <li><Link href="/news/" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>News</Link></li>
                </ul>
              </div>
            </li>

            {/* FRANCHISE Menu */}
            <li 
              className="relative group text-black" 
              onMouseEnter={() => handleMenuHover(4)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/franchise" className={`block py-2 hover:text-green-600 transition-colors duration-300 text-black`}>
                FRANCHISE
              </Link>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                  activeMenu === 4 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '250px' }}
              >
                <ul className="py-2">
                  <li><Link href="/franchise/1" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Why GrayPipple</Link></li>
                  <li><Link href="/franchise/2" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Investment Details</Link></li>
                  <li><Link href="/franchise/3" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Support & Training</Link></li>
                  <li><Link href="/franchise/4" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Application Process</Link></li>
                  <li><Link href="/franchise/5" className={`block px-5 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors ${dropdownTextColor}`}>Success Stories</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 z-50 relative touch-manipulation"
          aria-label="Toggle menu"
        >
          <div className={`w-5 sm:w-6 h-0.5 ${menuBarColor} mb-1 sm:mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`}></div>
          <div className={`w-5 sm:w-6 h-0.5 ${menuBarColor} mb-1 sm:mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-5 sm:w-6 h-0.5 ${menuBarColor} transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 sm:p-6 border-b">
            <div className="menuLogo">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <p className="text-black text-xl sm:text-2xl font-bold">GRAYPIPPLE</p>
              </Link>
            </div>
          </div>

          <nav className="p-4 sm:p-6 overflow-y-auto max-h-screen">
            <ul className="space-y-4 sm:space-y-6">
              {/* BRAND Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/brand/" 
                    className="text-lg sm:text-xl font-medium text-gray-900 mb-2 py-2 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Brand
                  </Link>
                  <ul className="ml-3 sm:ml-4 space-y-1 sm:space-y-2">
                    <li>
                      <Link 
                        href="/brand/" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Brand Story
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/brand/contact" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Direction
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
                    className="text-lg sm:text-xl font-medium text-gray-900 mb-2 py-2 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
                  </Link>
                  <ul className="ml-3 sm:ml-4 space-y-1 sm:space-y-2">
                    <li>
                      <Link 
                        href="/menu/" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        NEW
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/signature" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        SIGNATURE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/coffee" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        COFFEE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/noncoffee" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        NON-COFFEE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/beverage" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        BEVERAGE
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/menu/dessert" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
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
                    className="text-lg sm:text-xl font-medium text-gray-900 mb-2 py-2 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                   Store
                  </Link>
                  <ul className="ml-3 sm:ml-4 space-y-1 sm:space-y-2">
                    <li>
                      <Link 
                        href="/store/" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Store 
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
                    className="text-lg sm:text-xl font-medium text-gray-900 mb-2 py-2 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                   News
                  </Link>
                  <ul className="ml-3 sm:ml-4 space-y-1 sm:space-y-2">
                    <li>
                      <Link 
                        href="/news/" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/news#events" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Event
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* FRANCHISE Menu */}
              <li>
                <div className="flex flex-col">
                  <Link 
                    href="/franchise" 
                    className="text-lg sm:text-xl font-medium text-gray-900 mb-2 py-2 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Franchise
                  </Link>
                  <ul className="ml-3 sm:ml-4 space-y-1 sm:space-y-2">
                    <li>
                      <Link 
                        href="/franchise/1" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Startup competitiveness
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/2" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Startup Guide
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/3" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        startup Benefits
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/4" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                       Startup Costs
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/5" 
                        className="text-sm sm:text-base text-gray-600 hover:text-green-600 py-1 block touch-manipulation"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Startup Inquiry
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

export default HeaderFran