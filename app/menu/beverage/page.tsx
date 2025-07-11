'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'

// Updated beverage menu items data with proper images from public/menuItems
const menuItems = [
  {
    id: 1,
    name: "Tropical Refresh",
    image: "/menuItems/Ice Americano.png",
    category: "BEVERAGE",
    price: "$5.80",
    description: "Fresh tropical fruits with sparkling water"
  },
  {
    id: 2,
    name: "Berry Smoothie Bowl",
    image: "/menuItems/Iced Tea.png",
    category: "BEVERAGE",
    price: "$7.20",
    description: "Mixed berries with granola and honey"
  },
  {
    id: 3,
    name: "Green Detox Juice",
    image: "/menuItems/Lemon Ade.png",
    category: "BEVERAGE",
    price: "$6.50",
    description: "Spinach, apple, and cucumber blend"
  },
  {
    id: 4,
    name: "Iced Lemonade",
    image: "/menuItems/Lemon Tea.png",
    category: "BEVERAGE",
    price: "$4.80",
    description: "Fresh squeezed lemons with mint"
  },
  {
    id: 5,
    name: "Passion Fruit Soda",
    image: "/menuItems/Mango Ade.png",
    category: "BEVERAGE",
    price: "$5.50",
    description: "Passion fruit syrup with sparkling water"
  },
  {
    id: 6,
    name: "Raspberry Lemonade",
    image: "/menuItems/Mango Gelato.png",
    category: "BEVERAGE",
    price: "$5.20",
    description: "Fresh raspberries with lemonade"
  },
  {
    id: 7,
    name: "Mango Smoothie",
    image: "/menuItems/Matcha Latte.png",
    category: "BEVERAGE",
    price: "$6.00",
    description: "Fresh mangoes blended with yogurt"
  },
  {
    id: 8,
    name: "Peach Iced Tea",
    image: "/menuItems/Milk Tea.png",
    category: "BEVERAGE",
    price: "$4.80",
    description: "Fresh brewed tea with peach syrup"
  }
];

// Pagination configuration
const itemsPerPage = 9;
const totalPages = Math.ceil(menuItems.length / itemsPerPage);

export default function BeverageMenuPage() {
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
        <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
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
                className="text-5xl md:text-7xl font-bold tracking-wider text-white"
              >
                MENU
              </motion.h1>
            </motion.div>
          </div>
          
          <div 
            className="absolute inset-0 bg-center bg-cover z-0"
            style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp9277799.jpg')" }}
          ></div>
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
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    NON-COFFEE
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu/beverage"
                    className="block px-4 py-2 text-white bg-black rounded-full hover:opacity-90 transition-opacity"
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

            {/* Menu Grid - Updated to match main menu design */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentItems().map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`beverage-item-${item.id}`}
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
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full">
                      {item.price}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1 drop-shadow-sm text-white">{item.name}</h3>
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
      </main>
    </>
  );
}
