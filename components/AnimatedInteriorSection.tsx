'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

interface InteriorContent {
  id: number
  title: string
  subtitle: string
  description: string
}

const interiorContents: InteriorContent[] = [
  {
    id: 1,
    title: "MODERN TRENDY INTERIOR",
    subtitle: "Contemporary Excellence",
    description: "Sophisticated and trendy designs with two distinctive interior concepts"
  },
  {
    id: 2,
    title: "PREMIUM COFFEE ATMOSPHERE",
    subtitle: "Luxurious Experience", 
    description: "Carefully crafted spaces that enhance your coffee experience and comfort"
  },
  {
    id: 3,
    title: "INNOVATIVE SPACE DESIGN",
    subtitle: "Future-Forward Concepts",
    description: "Cutting-edge interior solutions that blend functionality with aesthetic appeal"
  },
  {
    id: 4,
    title: "COZY URBAN SANCTUARY",
    subtitle: "Metropolitan Comfort",
    description: "Warm and inviting spaces designed for the modern urban lifestyle"
  },
  {
    id: 5,
    title: "ARTISANAL COFFEE LOUNGE",
    subtitle: "Handcrafted Elegance",
    description: "Thoughtfully designed interiors that celebrate the art of coffee making"
  }
]

const AnimatedInteriorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interiorContents.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const currentContent = interiorContents[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div key={currentContent.id} className="animate-fadeIn">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 tracking-wide">
              {currentContent.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-amber-600 mb-4">
              {currentContent.subtitle}
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {currentContent.description}
            </p>
          </div>
        </div>
        
  

        {/* Animation indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {interiorContents.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-500 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedInteriorSection
