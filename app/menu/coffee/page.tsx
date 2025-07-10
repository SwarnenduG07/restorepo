'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'

// Dummy coffee menu items data (replace with your actual data)
const menuItems = [
  {
    id: 1,
    name: "Cold Brew Supreme",
    image: "/d4.png",
    category: "COFFEE",
    price: "$5.50",
    description: "18-hour cold brew with nitrogen infusion"
  },
  {
    id: 2,
    name: "Espresso Romano",
    image: "/d3.png",
    category: "COFFEE",
    price: "$4.80",
    description: "Traditional espresso with lemon twist"
  },
  {
    id: 3,
    name: "French Press Classic",
    image: "/d2.png",
    category: "COFFEE",
    price: "$5.20",
    description: "Full-bodied coffee with deep flavor notes"
  },
  {
    id: 4,
    name: "Cappuccino Deluxe",
    image: "/d1.png",
    category: "COFFEE",
    price: "$5.80",
    description: "Perfect cappuccino with artistic foam design"
  },
  {
    id: 5,
    name: "Vanilla Latte",
    image: "/cake4.png",
    category: "COFFEE",
    price: "$5.50",
    description: "Smooth espresso with vanilla and steamed milk"
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    image: "/cake3.png",
    category: "COFFEE",
    price: "$5.80",
    description: "Espresso with caramel and foamed milk"
  },
  {
    id: 7,
    name: "Hazelnut Coffee",
    image: "/cake2.png",
    category: "COFFEE",
    price: "$5.50",
    description: "Rich coffee with hazelnut flavoring"
  },
  {
    id: 8,
    name: "Mocha",
    image: "/cake1.png",
    category: "COFFEE",
    price: "$5.90",
    description: "Espresso with chocolate and steamed milk"
  }
];

// Pagination configuration
const itemsPerPage = 9;
const totalPages = Math.ceil(menuItems.length / itemsPerPage);

export default function CoffeeMenuPage() {
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
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
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
                    className="block px-4 py-2 text-white bg-black rounded-full hover:opacity-90 transition-opacity"
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
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentItems().map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`coffee-item-${item.id}`}
                  className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${activeItem === index ? 'ring-2 ring-green-500' : ''}`}
                  whileHover={{ y: -5 }}
                  onClick={() => toggleItemDetails(index)}
                >
                  <div className="relative h-64 bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
                      {item.price}
                    </div>
                  </div>
                  
                  {/* Mobile Details - Only shows when toggled */}
                  <div className={`p-4 transition-all duration-300 ${activeItem === index ? 'block sm:hidden' : 'hidden'}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
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
      </main>
    </>
  );
}
