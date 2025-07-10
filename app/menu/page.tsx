'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'

// Dummy menu items data (replace with your actual data)
const menuItems = [
  {
    id: 1,
    name: "Signature Latte",
    image: "/d4.png",
    category: "NEW",
    price: "$5.50",
    description: "Our signature blend with steamed milk"
  },
  {
    id: 2,
    name: "Iced Americano",
    image: "/d3.png",
    category: "NEW",
    price: "$4.50",
    description: "Strong and refreshing iced coffee"
  },
  {
    id: 3,
    name: "Matcha Green Tea",
    image: "/d2.png",
    category: "NEW",
    price: "$5.00",
    description: "Premium Japanese matcha with steamed milk"
  },
  {
    id: 4,
    name: "Vanilla Cold Brew",
    image: "/d1.png",
    category: "NEW",
    price: "$5.75",
    description: "Smooth cold brew with vanilla flavor"
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    image: "/cake4.png",
    category: "NEW",
    price: "$5.25",
    description: "Espresso with caramel and steamed milk"
  },
  {
    id: 6,
    name: "Hazelnut Mocha",
    image: "/cake3.png",
    category: "NEW",
    price: "$5.50",
    description: "Chocolate and hazelnut with espresso"
  },
  {
    id: 7,
    name: "Strawberry Smoothie",
    image: "/cake2.png", 
    category: "NEW",
    price: "$6.00",
    description: "Fresh strawberries blended with yogurt"
  },
  {
    id: 8,
    name: "Blueberry Muffin",
    image: "/cake1.png",
    category: "NEW",
    price: "$3.50",
    description: "Freshly baked muffin with blueberries"
  },
  {
    id: 9,
    name: "Chocolate Croissant",
    image: "/cc4.png",
    category: "NEW",
    price: "$3.75",
    description: "Buttery croissant with chocolate filling"
  }
];

// Pagination configuration
const itemsPerPage = 9;
const totalPages = Math.ceil(menuItems.length / itemsPerPage);

export default function MenuPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Get current items for pagination
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return menuItems.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber === currentPage || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentPage(pageNumber);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Toggle mobile item details
  const toggleItemDetails = (index: number) => {
    if (window.innerWidth < 821) {
      setActiveItem(activeItem === index ? null : index);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden"
            >
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-wider"
              >
                MENU
              </motion.h1>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/hero-menu.jpg')" }}></div>
        </div>

        {/* Menu Content */}
        <div className="py-12 md:py-16 px-4">
          <div className="max-w-[1600px] mx-auto">
            {/* Category Navigation */}
            <nav className="mb-12">
              <ul className="flex flex-wrap justify-center gap-2 md:gap-6 text-sm md:text-base font-medium">
                <li className="relative">
                  <Link 
                    href="/menu"
                    className="block px-4 py-2 text-white bg-black rounded-full hover:opacity-90 transition-opacity"
                  >
                    NEW
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/signature"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    SIGNATURE
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/coffee"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    COFFEE
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/noncoffee"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    NON-COFFEE
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/beverage"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    BEVERAGE
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/dessert"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    DESSERT
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Menu Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentItems().map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`menu-item-${item.id}`}
                  className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${activeItem === index ? 'ring-2 ring-green-500' : ''}`}
                  whileHover={{ y: -5 }}
                  onClick={() => toggleItemDetails(index)}
                  style={{ aspectRatio: '2/3' }}
                >
                  <div className="relative h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full">
                      {item.price}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1 drop-shadow-sm">{item.name}</h3>
                      <p className="text-sm text-gray-200 opacity-90 line-clamp-3">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Mobile Details - Only shows when toggled */}
                  <div className={`p-4 bg-gray-900 text-white transition-all duration-300 ${activeItem === index ? 'block sm:hidden' : 'hidden'}`}>
                    <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                    <Button size="sm" className="w-full bg-white text-black hover:bg-gray-200">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                        currentPage === number
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Logo and Description */}
              <div className="space-y-4">
                <div className="mb-4">
                  <svg viewBox="0 0 200 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
                    <g clipPath="url(#clip0_1174_169)" fill="currentColor">
                      <path d="M90.7487 27.5253V30.9336H101.26V34.9463H90.7487V41.3495H85.1582V23.4375H102.172V27.5253H90.7487Z" />
                      <path d="M110.044 27.5253V30.9336H120.555V34.9463H110.044V41.3495H104.453V23.4375H121.467V27.5253H110.044Z" />
                      <path d="M129.363 27.5253V30.312H140.639V34.2428H129.363V37.289H142.029V41.3495H123.745V23.4375H142.029V27.5253H129.363Z" />
                      {/* More SVG paths... */}
                    </g>
                    <defs>
                      <clipPath id="clip0_1174_169">
                        <rect width="200" height="41.6775" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-300">
                  GrayPipple Coffee - A change of mood in a busy daily life. Premium coffee franchise with modern and trendy interior designs.
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Menu Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
                <ul className="space-y-2">
                  <li><Link href="/menu" className="text-gray-300 hover:text-white transition-colors">New Items</Link></li>
                  <li><Link href="/menu/signature" className="text-gray-300 hover:text-white transition-colors">Signature</Link></li>
                  <li><Link href="/menu/coffee" className="text-gray-300 hover:text-white transition-colors">Coffee</Link></li>
                  <li><Link href="/menu/noncoffee" className="text-gray-300 hover:text-white transition-colors">Non-Coffee</Link></li>
                  <li><Link href="/menu/beverage" className="text-gray-300 hover:text-white transition-colors">Beverage</Link></li>
                  <li><Link href="/menu/dessert" className="text-gray-300 hover:text-white transition-colors">Dessert</Link></li>
                </ul>
              </div>
              
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/brand" className="text-gray-300 hover:text-white transition-colors">Brand Story</Link></li>
                  <li><Link href="/store" className="text-gray-300 hover:text-white transition-colors">Store Locations</Link></li>
                  <li><Link href="/franchise" className="text-gray-300 hover:text-white transition-colors">Franchise</Link></li>
                  <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
                  <li><Link href="/brand/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">
                      123 Coffee Street, Seoul<br />
                      South Korea, 10001
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">info@graypipple.com</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-300">+82 02-123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">
                      Monday - Friday: 9:00 - 18:00<br />
                      Saturday, Sunday: Closed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                COPYRIGHT © GRAYPIPPLE COFFEE ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
