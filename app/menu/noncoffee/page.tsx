'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'

// Dummy non-coffee menu items data (replace with your actual data)
const menuItems = [
  {
    id: 1,
    name: "Matcha Fusion Latte",
    image: "/d5.png",
    category: "NON-COFFEE",
    price: "$6.00",
    description: "Premium Japanese matcha with steamed milk"
  },
  {
    id: 2,
    name: "Chai Spice Latte",
    image: "/ncc3.png",
    category: "NON-COFFEE",
    price: "$5.70",
    description: "Traditional chai spices with creamy milk"
  },
  {
    id: 3,
    name: "Golden Turmeric Latte",
    image: "/ncc2.png",
    category: "NON-COFFEE",
    price: "$6.20",
    description: "Healthy turmeric blend with coconut milk"
  },
  {
    id: 4,
    name: "Hot Chocolate Deluxe",
    image: "/ncc1.png",
    category: "NON-COFFEE",
    price: "$5.50",
    description: "Premium cocoa with whipped cream"
  },
  {
    id: 5,
    name: "London Fog Tea Latte",
    image: "/cake4.png",
    category: "NON-COFFEE",
    price: "$5.30",
    description: "Earl Grey tea with vanilla and steamed milk"
  },
  {
    id: 6,
    name: "Honey Citrus Mint Tea",
    image: "/cake3.png",
    category: "NON-COFFEE",
    price: "$4.80",
    description: "Mint tea with honey and lemon"
  },
  {
    id: 7,
    name: "Steamed Apple Cider",
    image: "/cake2.png",
    category: "NON-COFFEE",
    price: "$4.50",
    description: "Hot apple cider with cinnamon"
  }
];

// Pagination configuration
const itemsPerPage = 9;
const totalPages = Math.ceil(menuItems.length / itemsPerPage);

export default function NonCoffeeMenuPage() {
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
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    COFFEE
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/noncoffee"
                    className="block px-4 py-2 text-white bg-black rounded-full hover:opacity-90 transition-opacity"
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
                  layoutId={`noncoffee-item-${item.id}`}
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
