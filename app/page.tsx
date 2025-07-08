import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollNavigation from "@/components/ScrollNavigation";

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

      {/* Interior Design Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              MODERN TRENDY INTERIOR
            </h2>
            <p className="text-lg text-gray-600">
              Sophisticated and trendy designs<br />
              with two distinctive interior concepts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/modern-interior.svg" 
                    alt="Modern Interior Design" 
                    width={400} 
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Modern Concept</h3>
                  <p className="text-gray-600">Clean and minimalist design with modern aesthetics</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/trendy-interior.svg" 
                    alt="Trendy Interior Design" 
                    width={400} 
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Trendy Concept</h3>
                  <p className="text-gray-600">Vibrant and energetic atmosphere with contemporary style</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coffee & Dessert Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              NICE COFFEE, SWEET DESSERT
            </h2>
            <p className="text-lg text-gray-600">
              GrayPipple's exclusive package<br />
              makes coffee and desserts special!
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/coffee-logo.svg" 
              alt="Coffee Logo" 
              width={300} 
              height={200}
              className="opacity-60"
            />
          </div>
        </div>
      </section>

      {/* Best Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              GrayPipple Popular Menu
            </h2>
            <h3 className="text-2xl font-medium text-gray-600 mb-8">BEST MENU</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <button className="text-gray-800 font-medium border-b-2 border-gray-800 pb-2 px-2">SIGNATURE</button>
              <button className="text-gray-500 hover:text-gray-800 transition-colors pb-2 px-2">COFFEE</button>
              <button className="text-gray-500 hover:text-gray-800 transition-colors pb-2 px-2">NON-COFFEE</button>
              <button className="text-gray-500 hover:text-gray-800 transition-colors pb-2 px-2">BEVERAGE</button>
              <button className="text-gray-500 hover:text-gray-800 transition-colors pb-2 px-2">DESSERT</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Pistachio Latte\nPISTACHIO LATTE",
              "Butter Cream Latte\nBUTTER CREAM LATTE", 
              "Special Milk Latte\nSPECIAL MILK LATTE",
              "Gray Latte\nGRAY LATTE"
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                    <span className="text-amber-700 text-sm text-center px-2 whitespace-pre-line font-medium">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="brand" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                OUR BRAND
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For modern people who need a change of mood from their busy daily life,<br />
                we deliver freedom and unique joy contained in a cup of coffee.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">
                VIEW MORE
              </Button>
            </div>
            <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Brand Story Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-lg">Franchise Opportunity</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                Franchise Information
              </h2>
              <h3 className="text-2xl font-medium text-gray-600 mb-6">OUR FRANCHISE</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                GrayPipple ensures your success through differentiated branding<br />
                and consistent, continuous menu development.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">
                VIEW MORE
              </Button>
            </div>
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
                <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <span className="text-green-600 text-sm">Interview Video</span>
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
                <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <span className="text-purple-600 text-sm">Interview Video</span>
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
