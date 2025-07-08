import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollNavigation from "@/components/ScrollNavigation";
import AnimatedInteriorSection from "@/components/AnimatedInteriorSection";
import CafeSlideshowSection from "@/components/CafeSlideshowSection";
import AnimatedBestMenuSection from "@/components/AnimatedBestMenuSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Navigation */}
      <ScrollNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-lg md:text-xl text-gray-600 mb-4 font-light tracking-wide">
              A CHANGE OF MOOD IN A BUSY DAILY LIFE
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-tight mb-6">
              Premium Coffee<br />
              <span className="text-gray-600">For Your</span><br />
              <span className="font-medium">Daily Moments</span>
            </h1>
          </div>
          <div className="flex justify-center mb-12">
            <Button variant="outline" className="rounded-full px-8 py-3 text-gray-600 border-gray-300 hover:bg-gray-50">
              SCROLL ↓
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Animated Interior Design Section */}
      <AnimatedInteriorSection />

      {/* Cafe Slideshow Section */}
      <CafeSlideshowSection />

    

      {/* Animated Best Menu Section */}
      <AnimatedBestMenuSection />

      {/* Brand Story Section */}
      <section id="brand" className="relative h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhZmV8ZW58MHx8MHx8fDA%3D"
              alt="Coffee Cup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          

          {/* Right Side - Dark Content */}
          <div className="bg-gray-900 flex items-center justify-center px-8 lg:px-16">
            <div className="max-w-lg">
              <div className="mb-6">
                <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-4">
                  BRAND STORY
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                  WHO<br />
                  WE ARE
                </h1>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                For modern people who need a change of mood from their busy daily life, 
                we deliver freedom and unique joy contained in a cup of coffee.
              </p>
              
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 transition-all duration-300">
                VIEW MORE
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons - positioned absolutely */}
        <div className="absolute top-8 right-8 flex flex-col space-y-4">
          <button className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="sr-only">Top</span>
          </button>
          <button className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
            <span className="text-sm font-bold">문의</span>
          </button>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="relative h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Side - Dark Content */}
          <div className="bg-gray-900 flex items-center justify-center px-8 lg:px-16">
            <div className="max-w-lg">
              <div className="mb-6">
                <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
                  FRANCHISE OPPORTUNITY
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                  JOIN<br />
                  OUR FAMILY
                </h1>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                GrayPipple ensures your success through differentiated branding 
                and consistent, continuous menu development.
              </p>
              
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Start your own coffee business with our proven franchise model 
                and comprehensive support system.
              </p>
              
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 transition-all duration-300">
                VIEW MORE
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1655968692023-21cf3f021054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyZWFkJTIwaW4lMjBjYWZlfGVufDB8fDB8fHww"
              alt="Cafe Bread and Pastries"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Floating Action Elements */}
        <div className="absolute bottom-8 left-8 flex space-x-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <span className="text-gray-800 text-sm font-medium">Investment: $50K+</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <span className="text-gray-800 text-sm font-medium">ROI: 6-12 months</span>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Success Stories
            </h2>
            <h3 className="text-2xl font-medium text-gray-600 mb-6">INTERVIEW</h3>
            <p className="text-lg text-gray-600">
              Meet our special franchise owners and their success stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="Coffee shop owner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-green-600 text-xs font-medium">SUCCESS STORY</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Owner who decided to open a second store in just 6 months
                  </h4>
                  <p className="text-gray-600">GrayPipple Changwon Store</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1723773731793-79fbc649a9c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZmUlMjB3YWl0ZXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Young entrepreneur cafe owner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-purple-600 text-xs font-medium">SUCCESS STORY</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    29-year-old entrepreneur earning $80,000 monthly
                  </h4>
                  <p className="text-gray-600">GrayPipple Seomyeon Store</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section id="store" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              GrayPipple Stores
            </h2>
            <h3 className="text-2xl font-medium text-gray-600 mb-6">OUR STORES</h3>
            <p className="text-lg text-gray-600">
              Find the nearest GrayPipple store near you!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-1"></div>
                      <span className="text-gray-500 text-xs">Store {index + 1}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              New Beverages & Desserts
            </h2>
            <h3 className="text-2xl font-medium text-gray-600 mb-6">PROMOTION</h3>
            <p className="text-lg text-gray-600">
              Introducing the new menu items launched by GrayPipple.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Cookie Choux Card */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-black">
              <CardContent className="p-0 relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-orange-300 text-sm font-medium uppercase tracking-wider mb-2">CRISPY AND CREAMY</p>
                    <h3 className="text-4xl font-bold text-orange-200 mb-2">COOKIE</h3>
                    <h3 className="text-4xl font-bold text-orange-200 mb-4">CHOUX</h3>
                    <p className="text-orange-300 italic text-lg">Sweet Delight</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white text-xs mb-1">바닐라 쿠키슈</p>
                      <p className="text-gray-300 text-xs">Vanilla Cookie Choux</p>
                      <p className="text-white text-xs mt-2">초코 쿠키슈</p>
                      <p className="text-gray-300 text-xs">Chocolate Cookie Choux</p>
                    </div>
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-orange-300 rounded-full flex items-center justify-center">
                        <span className="text-xs text-gray-800 font-bold">CHOUX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Winter Delights Card */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-green-800"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-pink-300 text-sm font-medium uppercase tracking-wider mb-2">HOLIDAY SPECIALS</p>
                    <h3 className="text-4xl font-bold text-pink-200 mb-2">COZY WINTER</h3>
                    <h3 className="text-4xl font-bold text-pink-200 mb-4">DELIGHTS</h3>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                        <p className="text-white text-xs font-medium">Red Velvet</p>
                        <p className="text-pink-200 text-xs">Cheesecake Latte</p>
                        <p className="text-gray-200 text-xs">레드벨벳치즈케이크라떼</p>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-gradient-to-b from-green-300 to-green-500 rounded-full"></div>
                      <div className="w-16 h-16 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Signature Latte Card */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-2">TASTE THE EXCLUSIVE FLAVORS</p>
                    <h3 className="text-4xl font-bold text-white mb-2">SIGNATURE</h3>
                    <h3 className="text-4xl font-bold text-white mb-4">LATTE</h3>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-blue-200 text-xs">ICED / HOT</p>
                        <p className="text-white text-xs font-medium">스트로베리크림라떼</p>
                        <p className="text-gray-300 text-xs">Strawberry Cream Latte</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-blue-200 text-xs">ICED</p>
                        <p className="text-white text-xs font-medium">캐러멜리조또</p>
                        <p className="text-gray-300 text-xs">Caramel Risotto</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-20 h-20 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg transform rotate-12"></div>
                      <div className="w-16 h-16 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg transform -rotate-6"></div>
                    </div>
                  </div>
                  
                  {/* Hand illustration */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-200 rounded-full opacity-70"></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full">
              VIEW MORE
            </Button>
          </div>
        </div>
      </section>

      {/* News & Notice Section */}
      <section id="news" className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Latest Updates
            </h2>
            <p className="text-green-200 text-lg">
              Stay informed with our latest news and announcements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Notice */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-medium text-white">NOTICE</h3>
                <Button variant="outline" className="bg-blue-500 text-white border-white/30 hover:bg-white/10 hover:text-white">
                  VIEW MORE
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    title: "GrayPipple surpasses $800,000 monthly revenue, franchise inquiries increase", 
                    date: "2025.02.19.",
                    content: "Our franchise program has reached a new milestone with record-breaking revenue. We're now accepting applications for new franchise locations nationwide. Contact us for exclusive territory opportunities."
                  },
                  { 
                    title: "GrayPipple's successful participation in Busan startup expo - 'Full consultations for 3 days'", 
                    date: "2024.12.04.",
                    content: "Our team provided comprehensive franchise consultations at the Busan startup expo. Over 200 potential franchisees showed interest in our proven business model and support system."
                  },
                  { 
                    title: "'First month rent support' GrayPipple participates in 'KFA Franchise Startup Expo 2024 Busan'", 
                    date: "2024.11.26.",
                    content: "We're offering first month rent support for new franchisees. This limited-time promotion includes comprehensive training and ongoing business support to ensure your success."
                  }
                ].map((notice, index) => (
                  <div key={index} className="group border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer">
                    <div className="p-4 hover:bg-white/10 transition-colors">
                      <h4 className="text-white group-hover:text-green-100 transition-colors text-sm leading-relaxed font-medium">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-green-200 mt-2">{notice.date}</p>
                    </div>
                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="p-4 pt-0 bg-white/5">
                        <p className="text-green-100 text-sm leading-relaxed">
                          {notice.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-medium text-white">NEWS</h3>
                <Button variant="outline" className="bg-blue-500 text-white border-white/30 hover:bg-white/10 hover:text-white">
                  VIEW MORE
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    title: "GrayPipple Coffee launches '3 peach beverages' and signature dessert 'New York Cheesecake' for summer season", 
                    date: "2025.06.19.",
                    content: "Our summer menu features three refreshing peach beverages and our signature New York Cheesecake. These seasonal offerings have been crafted to provide the perfect balance of flavor and refreshment during the warmer months."
                  },
                  { 
                    title: "GrayPipple successfully concludes Daegu startup expo - 'Daegu Store #1' confirmed and additional openings announced", 
                    date: "2025.05.16.",
                    content: "Following our successful participation in the Daegu startup expo, we've confirmed the opening of our first Daegu location. Additional store openings are planned for the region based on overwhelming response from local entrepreneurs."
                  },
                  { 
                    title: "GrayPipple participates in 'KFA Franchise Startup Expo 2025 Daegu' - Provides startup benefits worth $52,500", 
                    date: "2025.04.12.",
                    content: "We're offering comprehensive startup benefits including equipment financing, training programs, and marketing support. This package is designed to ensure new franchisees have everything needed for a successful launch."
                  }
                ].map((news, index) => (
                  <div key={index} className="group border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer">
                    <div className="p-4 hover:bg-white/10 transition-colors">
                      <h4 className="text-white group-hover:text-green-100 transition-colors text-sm leading-relaxed font-medium">
                        {news.title}
                      </h4>
                      <p className="text-xs text-green-200 mt-2">{news.date}</p>
                    </div>
                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="p-4 pt-0 bg-white/5">
                        <p className="text-green-100 text-sm leading-relaxed">
                          {news.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-black">GRAYPIPPLE</h3>
              <p className="text-gray-900 mb-6 text-lg">
                A change of mood in a busy daily life
              </p>
              <p className="text-gray-600 text-sm">
                Premium coffee for your daily moments
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 text-black">Site Map</h4>
              <ul className="space-y-3 text-gray-700">
                <li><a href="#brand" className="hover:text-black transition-colors">Brand</a></li>
                <li><a href="#menu" className="hover:text-black transition-colors">Menu</a></li>
                <li><a href="#store" className="hover:text-black transition-colors">Stores</a></li>
                <li><a href="#news" className="hover:text-black transition-colors">News</a></li>
                <li><a href="#franchise" className="hover:text-black transition-colors">Franchise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 text-black">Contact Us</h4>
              <Button className="w-full bg-black text-white hover:bg-gray-800 mb-4 py-3">
                Franchise Inquiry
              </Button>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 - 18:00<br />
                Saturday, Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              COPYRIGHT © GRAYPIPPLE COFFEE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button - Top */}
      <FloatingActionButton />
    </div>
  );
}
