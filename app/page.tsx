import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollNavigation from "@/components/ScrollNavigation";
import AnimatedMenuSection from "@/components/AnimatedMenuSection";
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
          {/* Left Side - Image/Visual */}
          <div className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-amber-50 flex items-center justify-center">
            {/* Coffee Cup Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-b from-amber-600 via-orange-500 to-amber-700 rounded-t-full rounded-b-lg shadow-2xl transform rotate-12">
                {/* Coffee foam effect */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-r from-white via-gray-50 to-white rounded-full opacity-90"></div>
                {/* Latte art effect */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-amber-800 to-amber-900 rounded-full opacity-70"></div>
              </div>
              {/* Hand holding coffee */}
              <div className="absolute -bottom-8 -left-12 w-32 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl transform -rotate-12 shadow-lg"></div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-amber-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-32 right-24 w-6 h-6 bg-orange-400 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 right-16 w-3 h-3 bg-amber-500 rounded-full opacity-50"></div>
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

          {/* Right Side - Image/Visual */}
          <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 flex items-center justify-center">
            {/* Franchise Store Illustration */}
            <div className="relative">
              {/* Store Front */}
              <div className="w-96 h-80 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-2xl">
                {/* Store Window */}
                <div className="absolute top-8 left-8 right-8 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg border-4 border-gray-300">
                  {/* Window Frame */}
                  <div className="absolute inset-4 border-2 border-gray-400 rounded">
                    {/* Store Interior View */}
                    <div className="h-full bg-gradient-to-r from-amber-100 to-orange-100 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-2"></div>
                        <div className="w-8 h-2 bg-gray-600 rounded mx-auto mb-1"></div>
                        <div className="w-6 h-2 bg-gray-500 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Store Sign */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GRAYPIPPLE</span>
                </div>
                
                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-16 right-2"></div>
                </div>
              </div>
              
              {/* Success Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✓</span>
              </div>
              
              <div className="absolute -bottom-4 -left-8 w-20 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">SUCCESS</span>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-16 left-16 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-24 right-20 w-4 h-4 bg-indigo-400 rounded-full opacity-50"></div>
            <div className="absolute top-1/3 right-12 w-8 h-8 bg-blue-300 rounded-full opacity-40"></div>
            
            {/* Floating money/profit icons */}
            <div className="absolute top-20 right-32 text-2xl">💰</div>
            <div className="absolute bottom-32 left-20 text-2xl">📈</div>
            <div className="absolute top-1/2 left-16 text-2xl">🏪</div>
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="h-32 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-1"></div>
                      <span className="text-orange-600 text-xs">Menu {index + 1}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">
              VIEW MORE
            </Button>
          </div>
        </div>
      </section>

      {/* News & Notice Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Notice */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-medium text-gray-800">NOTICE</h3>
                <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                  VIEW MORE
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { title: "GrayPipple surpasses $800,000 monthly revenue, franchise inquiries increase", date: "2025.02.19." },
                  { title: "GrayPipple's successful participation in Busan startup expo - 'Full consultations for 3 days'", date: "2024.12.04." },
                  { title: "'First month rent support' GrayPipple participates in 'KFA Franchise Startup Expo 2024 Busan'", date: "2024.11.26." }
                ].map((notice, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 hover:bg-gray-50 p-3 rounded transition-colors cursor-pointer">
                    <h4 className="text-gray-800 hover:text-gray-600 transition-colors text-sm leading-relaxed">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2">{notice.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-medium text-gray-800">NEWS</h3>
                <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                  VIEW MORE
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { title: "GrayPipple Coffee launches '3 peach beverages' and signature dessert 'New York Cheesecake' for summer season", date: "2025.06.19." },
                  { title: "GrayPipple successfully concludes Daegu startup expo - 'Daegu Store #1' confirmed and additional openings announced", date: "2025.05.16." },
                  { title: "GrayPipple participates in 'KFA Franchise Startup Expo 2025 Daegu' - Provides startup benefits worth $52,500", date: "2025.04.12." }
                ].map((news, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 hover:bg-gray-50 p-3 rounded transition-colors cursor-pointer">
                    <h4 className="text-gray-800 hover:text-gray-600 transition-colors text-sm leading-relaxed">
                      {news.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2">{news.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-4">GRAYPIPPLE</h3>
              <p className="text-gray-300 mb-6 text-lg">
                A change of mood in a busy daily life
              </p>
              <p className="text-gray-400 text-sm">
                Premium coffee for your daily moments
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6">Site Map</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#brand" className="hover:text-white transition-colors">Brand</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#store" className="hover:text-white transition-colors">Stores</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#franchise" className="hover:text-white transition-colors">Franchise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6">Contact Us</h4>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 mb-4 py-3">
                Franchise Inquiry
              </Button>
              <p className="text-gray-400 text-sm">
                Monday - Friday: 9:00 - 18:00<br />
                Saturday, Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
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
