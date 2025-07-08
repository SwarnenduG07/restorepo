'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'

interface MenuCard {
  id: number
  title: string
  subtitle: string
  price: string
  description: string
  image: string
}

const menuItems: MenuCard[] = [
  {
    id: 1,
    title: "Signature Americano",
    subtitle: "Premium Coffee",
    price: "$4.50",
    description: "Rich, bold coffee with a smooth finish",
    image: "☕"
  },
  {
    id: 2,
    title: "Caramel Macchiato",
    subtitle: "Sweet Delight",
    price: "$5.20",
    description: "Creamy caramel with espresso layers",
    image: "🥛"
  },
  {
    id: 3,
    title: "Vanilla Latte",
    subtitle: "Classic Choice",
    price: "$4.80",
    description: "Smooth vanilla with steamed milk",
    image: "☕"
  },
  {
    id: 4,
    title: "Iced Mocha",
    subtitle: "Chocolate Blend",
    price: "$5.00",
    description: "Rich chocolate coffee over ice",
    image: "🧊"
  },
  {
    id: 5,
    title: "Cappuccino",
    subtitle: "Italian Classic",
    price: "$4.30",
    description: "Perfect foam to espresso ratio",
    image: "☕"
  },
  {
    id: 6,
    title: "Green Tea Latte",
    subtitle: "Healthy Option",
    price: "$4.70",
    description: "Matcha green tea with steamed milk",
    image: "🍵"
  }
]

const AnimatedMenuSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length)
    }, 1000) // Change every second

    return () => clearInterval(interval)
  }, [])

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % menuItems.length
      items.push(menuItems[index])
    }
    return items
  }

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            POPULAR MENU
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved beverages, crafted with premium ingredients
            and served with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {getVisibleItems().map((item, displayIndex) => (
            <div
              key={`${item.id}-${currentIndex}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn"
            >
              <div className="h-48 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                <span className="text-6xl">{item.image}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-amber-600 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-gray-800">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">
            VIEW ALL MENU
          </Button>
        </div>

        {/* Animation indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {menuItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedMenuSection
