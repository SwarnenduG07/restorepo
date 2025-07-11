'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

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
    subtitle: "Two Interior Concepts that Combine Trendiness and Modernity",
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
  const [direction, setDirection] = useState(0) // Track animation direction

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interiorContents.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentContent = interiorContents[currentIndex]

  // Enhanced animation variants
  const containerVariants: Variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      rotateX: direction >= 0 ? 15 : -15,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1], // Custom easing for smooth motion
        staggerChildren: 0.1
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      rotateX: direction >= 0 ? -15 : 15,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.43, 0, 0.17, 0.99]
      }
    })
  }

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotateY: -5,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] // Smooth cubic bezier
      }
    }
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-white overflow-hidden perspective">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentContent.id}
              custom={direction}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl  md:text-2xl lg:text-6xl font-bold text-green-800 mb-6 tracking-wide"
              >
                {currentContent.title}
              </motion.h2>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-medium text-amber-600 mb-4"
              >
                {currentContent.subtitle}
              </motion.h3>
             

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 inset-0 opacity-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 0.1,
                  rotate: [0, 90],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <div className="w-full h-full border-2 border-amber-500 rounded-full" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced indicator with hover effects */}
        <motion.div 
          className="flex justify-center mt-12 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {interiorContents.map((_, index) => (
            <motion.div
              key={index}
              className={`relative group`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDotClick(index)}
            >
              <motion.div
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                }`}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                  backgroundColor: index === currentIndex ? '#f59e0b' : '#d1d5db'
                }}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute -inset-2 rounded-full bg-amber-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add global styles */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}

export default AnimatedInteriorSection
