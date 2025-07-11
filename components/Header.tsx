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
  const logoTextColor = isScrolled ? 'text-black' : 'text-white'
  const menuBarColor = isScrolled ? 'bg-gray-900' : 'bg-white'
  
  // Dropdown text colors (always dark since dropdown has white background)
  const dropdownTextColor = 'text-gray-800'

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={headerStyle}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="relative z-10">
          <Link href="/">
            <p className={`text-4xl font-bold transition-colors duration-300 ${logoTextColor}`}>
              GRAYPIPPLE
            </p>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block gnb">
          <ul className="flex space-x-8 text-lg font-medium">
            {/* BRAND Menu */}
            <li 
              className="relative group" 
              onMouseEnter={() => handleMenuHover(0)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/brand/" className={`block py-2 hover:text-green-600 transition-colors duration-300 ${textColor}`}>
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
              className="relative group" 
              onMouseEnter={() => handleMenuHover(1)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/menu/" className={`block py-2 hover:text-green-600 transition-colors duration-300 ${textColor}`}>
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
              className="relative group" 
              onMouseEnter={() => handleMenuHover(2)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/store/" className={`block py-2 hover:text-green-600 transition-colors duration-300 ${textColor}`}>
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
              className="relative group" 
              onMouseEnter={() => handleMenuHover(3)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/news/" className={`block py-2 hover:text-green-600 transition-colors duration-300 ${textColor}`}>
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
              className="relative group" 
              onMouseEnter={() => handleMenuHover(4)}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/franchise" className={`block py-2 hover:text-green-600 transition-colors duration-300 ${textColor}`}>
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
                <p className="text-black text-2xl font-bold">GRAYPIPPLE</p>
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
                    Brand
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/brand/" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Brand Story
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/brand/contact" 
                        className="text-gray-600 hover:text-green-600"
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
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
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
                   Store
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/store/" 
                        className="text-gray-600 hover:text-green-600"
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
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                   News
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/news/" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/news/event" 
                        className="text-gray-600 hover:text-green-600"
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
                    className="text-xl font-medium text-gray-900 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Franchise
                  </Link>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/franchise/1" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Startup competitiveness
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/2" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Startup Guide
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/3" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        startup Benefits
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/4" 
                        className="text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                       Startup Costs
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/franchise/5" 
                        className="text-gray-600 hover:text-green-600"
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

export default Header