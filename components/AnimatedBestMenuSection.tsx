'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface BestMenuCard {
  id: number
  title: string
  subtitle: string
  price: string
  description: string
  image: string
  category: string
}

const bestMenuItems: BestMenuCard[] = [
  // SIGNATURE Category
  {
    id: 1,
    title: "Gray Signature Latte",
    subtitle: "SIGNATURE BLEND",
    price: "$6.50",
    description: "Our premium house blend with silky steamed milk",
    image: "/cake4.png",
    category: "SIGNATURE"
  },
  {
    id: 2,
    title: "Pistachio Cloud Latte",
    subtitle: "NUTTY PREMIUM",
    price: "$7.20",
    description: "Creamy pistachio with cloud-like foam art",
    image: "/cake3.png",
    category: "SIGNATURE"
  },
  {
    id: 3,
    title: "Butter Cream Special",
    subtitle: "RICH & SMOOTH",
    price: "$6.80",
    description: "Luxurious butter cream with espresso perfection",
    image: "/cake2.png",
    category: "SIGNATURE"
  },
  {
    id: 4,
    title: "Gray Supreme Blend",
    subtitle: "HOUSE SPECIAL",
    price: "$7.50",
    description: "Exclusive signature blend with premium beans",
    image: "/cake1.png",
    category: "SIGNATURE"
  },
  // COFFEE Category
  {
    id: 5,
    title: "Cold Brew Supreme",
    subtitle: "ICED PERFECTION",
    price: "$5.50",
    description: "18-hour cold brew with nitrogen infusion",
    image: "/d4.png",
    category: "COFFEE"
  },
  {
    id: 6,
    title: "Espresso Romano",
    subtitle: "ITALIAN STYLE",
    price: "$4.80",
    description: "Traditional espresso with lemon twist",
    image: "/d3.png",
    category: "COFFEE"
  },
  {
    id: 7,
    title: "French Press Classic",
    subtitle: "BOLD & RICH",
    price: "$5.20",
    description: "Full-bodied coffee with deep flavor notes",
    image: "/d2.png",
    category: "COFFEE"
  },
  {
    id: 8,
    title: "Cappuccino Deluxe",
    subtitle: "FOAM ART",
    price: "$5.80",
    description: "Perfect cappuccino with artistic foam design",
    image: "/d1.png",
    category: "COFFEE"
  },
  // NON-COFFEE Category
  {
    id: 9,
    title: "Matcha Fusion Latte",
    subtitle: "GREEN HARMONY",
    price: "$6.00",
    description: "Premium Japanese matcha with steamed milk",
    image: "/d5.png",
    category: "NON-COFFEE"
  },
  {
    id: 10,
    title: "Chai Spice Latte",
    subtitle: "AROMATIC BLEND",
    price: "$5.70",
    description: "Traditional chai spices with creamy milk",
    image: "/ncc3.png",
    category: "NON-COFFEE"
  },
  {
    id: 11,
    title: "Golden Turmeric Latte",
    subtitle: "WELLNESS DRINK",
    price: "$6.20",
    description: "Healthy turmeric blend with coconut milk",
    image: "/ncc2.png",
    category: "NON-COFFEE"
  },
  {
    id: 12,
    title: "Hot Chocolate Deluxe",
    subtitle: "RICH INDULGENCE",
    price: "$5.50",
    description: "Premium cocoa with whipped cream",
    image: "/ncc1.png",
    category: "NON-COFFEE"
  },
  // BEVERAGE Category
  {
    id: 13,
    title: "Tropical Refresh",
    subtitle: "FRUIT BLEND",
    price: "$5.80",
    description: "Fresh tropical fruits with sparkling water",
    image: "/cc4.png",
    category: "BEVERAGE"
  },
  {
    id: 14,
    title: "Berry Smoothie Bowl",
    subtitle: "ANTIOXIDANT RICH",
    price: "$7.20",
    description: "Mixed berries with granola and honey",
    image: "/cc3.png",
    category: "BEVERAGE"
  },
  {
    id: 15,
    title: "Green Detox Juice",
    subtitle: "HEALTHY CHOICE",
    price: "$6.50",
    description: "Spinach, apple, and cucumber blend",
    image: "/cc2.png",
    category: "BEVERAGE"
  },
  {
    id: 16,
    title: "Iced Lemonade",
    subtitle: "CLASSIC REFRESH",
    price: "$4.80",
    description: "Fresh squeezed lemons with mint",
    image: "/cc1.png",
    category: "BEVERAGE"
  },
  // DESSERT Category
  {
    id: 17,
    title: "Tiramisu Delight",
    subtitle: "ITALIAN CLASSIC",
    price: "$8.50",
    description: "Authentic tiramisu with coffee-soaked layers",
    image: "/d1.png",
    category: "DESSERT"
  },
  {
    id: 18,
    title: "Chocolate Soufflé",
    subtitle: "WARM INDULGENCE",
    price: "$9.20",
    description: "Decadent chocolate soufflé served warm",
    image: "/d3.png",
    category: "DESSERT"
  },
  {
    id: 19,
    title: "Crème Brûlée",
    subtitle: "FRENCH ELEGANCE",
    price: "$7.80",
    description: "Vanilla custard with caramelized sugar",
    image: "/d2.png",
    category: "DESSERT"
  },
  {
    id: 20,
    title: "New York Cheesecake",
    subtitle: "CREAMY PERFECTION",
    price: "$8.20",
    description: "Rich cheesecake with berry compote",
    image: "/d1.png",
    category: "DESSERT"
  }
]

const categories = ["SIGNATURE", "COFFEE", "NON-COFFEE", "BEVERAGE", "DESSERT"]

const AnimatedBestMenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("SIGNATURE")

  const getVisibleItems = () => {
    const categoryItems = bestMenuItems.filter(item => item.category === selectedCategory)
    return categoryItems.slice(0, 4) // Show only first 4 items of selected category
  }

  return (
    <section id="best-menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          {/* Title and Categories Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
            <div className="text-left mb-8 lg:mb-0">
              <h2 className="text-7xl md:text-7xl font-bold text-gray-800 mb-2">
                BEST MENU
              </h2>
             
            </div>
            
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                  }}
                  className={`font-medium pb-2 px-4 py-2 transition-all duration-300 text-sm md:text-base rounded-full ${
                    selectedCategory === category
                      ? 'bg-black text-white '
                      : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {getVisibleItems().map((item, displayIndex) => (
            <div
              key={`${item.id}-${selectedCategory}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fadeIn"
              style={{ animationDelay: `${displayIndex * 100}ms` }}
            >
              <div className="h-56 bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-white/40"></div>
                <div className="relative z-10 w-48 h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain scale-110 hover:scale-125 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-amber-600 font-medium uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-gray-800 ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full">
            VIEW FULL MENU
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AnimatedBestMenuSection
