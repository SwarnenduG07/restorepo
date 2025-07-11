'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SlideImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const slideImages: SlideImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
    alt: "Modern Cafe Interior",
    title: "Premium Coffee Experience",
    description: "Elegant seating area with modern design and natural lighting"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
    alt: "Coffee Counter Bar",
    title: "Artisanal Coffee Bar",
    description: "Professional barista station with premium equipment and craftsmanship"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    alt: "Cozy Cafe Atmosphere", 
    title: "Relaxing Atmosphere",
    description: "Warm and inviting space perfect for coffee lovers and conversations"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Bustling Coffee Shop",
    title: "Community Hub",
    description: "A vibrant gathering place where coffee culture comes alive"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
    alt: "Outdoor Cafe Terrace",
    title: "Outdoor Seating",
    description: "Fresh air dining with the perfect coffee companion"
  }
]

const CafeSlideshowSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Background Images */}
      <div className="relative h-full w-full">
        {slideImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentIndex
                ? 'translate-x-0'
                : index === (currentIndex - 1 + slideImages.length) % slideImages.length
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            {/* Actual SVG Images */}
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-transparent bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div key={currentIndex} className="animate-fadeIn">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              {slideImages[currentIndex].title}
            </h2>
            <p className="text-xl md:text-2xl font-semibold drop-shadow-md leading-relaxed">
              {slideImages[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Sliding Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <div 
          className="h-full bg-white transition-all duration-4000 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / slideImages.length) * 100}%`,
            transition: 'width 4s linear'
          }}
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + slideImages.length) % slideImages.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % slideImages.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

export default CafeSlideshowSection
