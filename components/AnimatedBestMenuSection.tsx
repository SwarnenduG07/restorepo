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

const categories = ["ALL", "SIGNATURE", "COFFEE", "NON-COFFEE", "BEVERAGE", "DESSERT"]

const AnimatedBestMenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL")

  const getVisibleItems = () => {
    const filtered = selectedCategory === "ALL" 
      ? bestMenuItems 
      : bestMenuItems.filter(item => item.category === selectedCategory)
    
    // Return different amounts based on screen size
    return filtered.slice(0, 8) // Show 8 items maximum
  }

  const filteredItems = getVisibleItems()

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wider">
              BEST MENU
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-3 sm:mb-4 leading-tight">
            POPULAR<br />
            <span className="text-black">SELECTIONS</span>
          </h2>
          <p className="text-black text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-semibold px-4">
            Discover our customers' favorite beverages and treats, 
            carefully crafted with premium ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 touch-manipulation ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Price Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    {item.price}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-black/60 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="mb-2 sm:mb-3">
                  <p className="text-green-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>
                
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 leading-tight group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {item.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-gray-800 hover:bg-green-600 text-white py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 border border-gray-700 hover:border-green-600 group-hover:shadow-lg touch-manipulation">
                  Add to Cart
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-green-500/50 transition-all duration-300 rounded-xl sm:rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More / View All Button */}
        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 touch-manipulation">
            VIEW FULL MENU
          </Button>
        </div>

        {/* Featured Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20">
          {[
            { number: "50+", label: "Menu Items", color: "text-green-400" },
            { number: "98%", label: "Customer Satisfaction", color: "text-blue-400" },
            { number: "24/7", label: "Fresh Preparation", color: "text-yellow-400" },
            { number: "100%", label: "Premium Quality", color: "text-purple-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              <h4 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 ${stat.color}`}>
                {stat.number}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedBestMenuSection
