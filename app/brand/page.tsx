'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'

export default function BrandPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const storySection = document.getElementById('story-section')
      if (storySection) {
        const rect = storySection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.7) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-screen bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden text-center"
            >
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-8xl md:text-9xl font-bold tracking-wider mb-8 text-white"
              >
                ABOUT US
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl max-w-4xl mx-auto text-white"
              >
                A change of mood in a busy daily life
              </motion.p>
            </motion.div>
          </div>
          <div 
            className="absolute inset-0 bg-center bg-cover" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
        </div>

        {/* Brand Story Section */}
        <section id="story-section" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Stop Thinking Just Drink */}
            <article className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                      STOP THINKING<br />
                      JUST DRINK
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Gray Peeple is a place where 'people these days', who live busy lives in modern society, 
                      stop all their worries and concerns for a moment and enjoy coffee. It started with the hope 
                      that we could enjoy a free break together. A comfortable and sophisticated space and mood so 
                      that when you need a change of mood from your routine, you can fill it with great energy with 
                      a carefully brewed cup of coffee. We want to provide you with a good experience.
                    </p>
                  </motion.div>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                      alt="Coffee brewing process"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </article>

            {/* Brand Competitiveness */}
            <article className="mb-32">
              <div className="text-center mb-16">
                <motion.h2 
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                  Gray pipple<br className="md:hidden" /> Brand competitiveness
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-2xl font-bold text-gray-100 mb-4">GOOD PLACE, GOOD COFFEE, GOOD PEOPLE!</p>
                  <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                    Value beyond the coffee pursued by Gray Pipple! Gray Peeple, with great spaces, 
                    delicious coffee, and great people, creates a culture that is more than just a cafe.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "01",
                    title: "GOOD PLACE",
                    subtitle: "Nice space",
                    description: "So that everyone can enjoy relaxation comfortably and freely, it provides an open and sensual space.",
                    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    number: "02",
                    title: "GOOD COFFEE",
                    subtitle: "Good coffee",
                    description: "Made with fresh and high quality coffee beans, coffee is provided at a reasonable price.",
                    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    number: "03",
                    title: "GOOD PEOPLE",
                    subtitle: "Good person",
                    description: "Do your best every moment with a cup of coffee, full of passionate and attractive people.",
                    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-sm font-bold mb-2">DIFFERENCE {item.number}</div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-lg text-white">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </article>

            {/* Interior Design */}
            <article className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Taking advantage of trendy and modernity<br />
                    Interior with two concepts
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The black concept interior, which emphasizes luxury and sophistication, completes the open space 
                    and sensuous atmosphere with sophisticated black color, stainless steel frame with curved finish, 
                    and glass folding.<br /><br />
                    
                    Emphasizing a modern and comfortable feel, the light gray concept interior adds energetic points 
                    to the light gray color, creating a bright and bold atmosphere.
                  </p>
                </motion.div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                    alt="Modern coffee shop interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                    alt="Black concept interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">Black Concept</h3>
                    <p>Luxury & Sophistication</p>
                  </div>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80"
                    alt="Light gray concept interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">Light Gray Concept</h3>
                    <p>Modern & Comfortable</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Coffee Beans */}
            <article className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Only on Gray Peeple<br />
                    Special coffee beans to taste
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Gray Pipple's coffee is blended with special coffee beans, including the highest grade Arabica 
                    green coffee beans, to achieve optimal balance. Gray Pipple's special coffee has been created 
                    with the optimal roasting point tailored to the coffee beans and the best espresso extraction technology.<br /><br />
                    
                    A savory taste with the deep sweetness of cacao and the scent of grilled nuts. Experience a special 
                    blend that finishes with a heavy yet balanced softness and clean finish.
                  </p>
                </motion.div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
                    alt="Coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { country: "Brazil", type: "Cerrado NY.2", description: "By natural drying\nCharacterized by a savory sweetness" },
                  { country: "Colombia", type: "Huila Supremo", description: "It has a nice body and is fragrant\nSoft acidity" },
                  { country: "Ethiopia", type: "Sidamo G4", description: "With balanced acidity\nCharacterized by fruity scent" },
                  { country: "El Salvador", type: "SHG", description: "Nutty nuts and sweet\nCharacterized by the flavor of chocolate" }
                ].map((bean, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gray-50 rounded-2xl"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {bean.country}<br />{bean.type}
                    </h3>
                    <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600 whitespace-pre-line">{bean.description}</p>
                  </motion.div>
                ))}
              </div>
            </article>

            {/* We Are GrayPipple */}
            <motion.div className="mb-32 relative">
              <motion.div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
                  alt="Coffee background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </motion.div>
              <motion.div className="relative z-10 py-24 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-7xl font-bold tracking-wider mb-8 text-white"
                  >
                    WE ARE GRAYPIPPLE
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white"
                  >
                    Gray pipple means 'people these days'. A bold and modern image indicative 'Gray' and a harmonious 
                    collection of diverse people meaning 'pipple' combined, living in today's modern society represented people.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Final CTA */}
            <article className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  STOP THINKING<br />
                  JUST DRINK
                </h2>
                <Button className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg">
                  CONTACT US
                </Button>
              </motion.div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Logo and Description */}
              <div className="space-y-4">
                <div className="mb-4">
                  <svg viewBox="0 0 200 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
                    <g clipPath="url(#clip0_1174_169)" fill="currentColor">
                      <path d="M90.7487 27.5253V30.9336H101.26V34.9463H90.7487V41.3495H85.1582V23.4375H102.172V27.5253H90.7487Z" />
                      <path d="M110.044 27.5253V30.9336H120.555V34.9463H110.044V41.3495H104.453V23.4375H121.467V27.5253H110.044Z" />
                      <path d="M129.363 27.5253V30.312H140.639V34.2428H129.363V37.289H142.029V41.3495H123.745V23.4375H142.029V27.5253H129.363Z" />
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
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-2.427.465c-1.024.047-1.378.06-3.808.06-2.43 0-2.784-.013-3.808-.06a4.902 4.902 0 01-2.427-.465 4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427A4.902 4.902 0 013.637 2.465 4.902 4.902 0 015.064 2c1.024-.047 1.378-.06 3.808-.06zM12 0C8.736 0 8.293.013 7.04.06 5.736.11 4.736.293 3.94.637A6.902 6.902 0 00.637 3.94C.293 4.736.11 5.736.06 7.04.013 8.293 0 8.736 0 12c0 3.264.013 3.707.06 5.96.05 1.304.233 2.304.577 3.064.344.76.83 1.433 1.464 2.068.634.634 1.308 1.02 2.068 1.364.76.344 1.76.527 3.064.577 2.253.047 2.696.06 5.96.06s3.707-.013 5.96-.06c1.304-.05 2.304-.233 3.064-.577.76-.344 1.433-.83 2.068-1.464.634-.634 1.02-1.308 1.364-2.068.344-.76.527-1.76.577-3.064.047-2.253.06-2.696.06-5.96s-.013-3.707-.06-5.96a6.902 6.902 0 00-.577-3.064 6.902 6.902 0 00-1.364-2.068 6.902 6.902 0 00-2.068-1.464 6.902 6.902 0 00-3.064-.577C15.707 8.293 15.264 7.736 12 7.736c-3.264 0-3.707.013-5.96.06-1.304.05-2.304.233-3.064.577a6.902 6.902 0 00-2.068 1.464A6.902 6.902 0 00.637 8.94C.293 8.176.11 7.504.06 6.84 0 6.397 0 5.954 0 2.687 0 1.194.013.949.06.637.11.305.293.176.637A6.902 6.902 0 00.637 3.94C.293 4.736.11 5.736.06 7.04.013 8.293 0 8.736 0 12c0 3.264.013 3.707.06 5.96.05 1.304.233 2.304.577 3.064.344.76.83 1.433 1.464 2.068.634.634 1.308 1.02 2.068 1.364.76.344 1.76.527 3.064.577 2.253.047 2.696.06 5.96.06s3.707-.013 5.96-.06c1.304-.05 2.304-.233 3.064-.577.76-.344 1.433-.83 2.068-1.464.634-.634 1.02-1.308 1.364-2.068.344-.76.527-1.76.577-3.064.047-2.253.06-2.696.06-5.96s-.013-3.707-.06-5.96a6.902 6.902 0 00-.577-3.064 6.902 6.902 0 00-1.364-2.068 6.902 6.902 0 00-2.068-1.464 6.902 6.902 0 00-3.064-.577C15.707 8.293 15.264 7.736 12 7.736c-3.264 0-3.707.013-5.96.06-1.304.05-2.304.233-3.064.577a6.902 6.902 0 00-2.068 1.464A6.902 6.902 0 00.637 8.94C.293 8.176.11 7.504.06 6.84 0 6.397 0 5.954 0 2.687 0 1.194.013.949.06.637.11.305.293.176.637A6.902 6.902 0 00.637 3.94C.293 4.736.11 5.736.06 7.04.013 8.293 0 8.736 0 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M23.643 4.937a10.97 10.97 0 01-3.128.855 4.48 4.48 0 001.963-2.475 9.034 9.034 0 01-2.827 1.078 4.48 4.48 0 00-7.633 4.07A12.74 12.74 0 011.671 3.149 4.48 4.48 0 003.1 8.29a4.458 4.458 0 01-2.033-.56v.057a4.48 4.48 0 003.584 4.405 4.48 4.48 0 01-2.028.077 4.48 4.48 0 004.18 3.107A9.036 9.036 0 010 19.542a12.742 12.742 0 006.91 2.028c8.27 0 12.78-6.853 12.78-12.78 0-.195-.004-.389-.013-.582A9.128 9.128 0 0024 4.49a8.977 8.977 0 01-2.566.703 4.48 4.48 0 001.963-2.475z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/brand" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/menu" className="hover:text-white transition-colors">
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link href="/brand/contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <Link href="/franchise" className="hover:text-white transition-colors">
                      Franchise
                    </Link>
                  </li>
                  <li>
                    <Link href="/store" className="hover:text-white transition-colors">
                      Store Locations
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="hover:text-white transition-colors">
                      News & Events
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Newsletter</h3>
                <p className="text-gray-300">
                  Subscribe to our newsletter to stay updated on the latest news, offers, and events at GrayPipple Coffee.
                </p>
                <form className="flex flex-col gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <Button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2023 GrayPipple Coffee. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}