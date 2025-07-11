'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HeaderFran from '@/components/franHeader';

const franchiseData = [
  {
    id: '1',
    title: 'Why GrayPipple',
    subtitle: 'Join a Growing Coffee Brand',
    description: 'Discover why GrayPipple is the perfect franchise opportunity for passionate entrepreneurs looking to enter the specialty coffee market.',
    mainContent: `
      <p>As a GrayPipple franchise owner, you'll join a rapidly growing brand that prioritizes quality coffee, exceptional service, and community engagement. Our proven business model has helped entrepreneurs across the country establish successful coffee shops that become neighborhood favorites.</p>
      
      <h3>The GrayPipple Advantage</h3>
      <ul>
        <li>Recognized and respected brand identity</li>
        <li>Premium quality coffee and food products</li>
        <li>Comprehensive training and ongoing support</li>
        <li>Optimized operations and supply chain</li>
        <li>Marketing and digital presence support</li>
        <li>Site selection and lease negotiation assistance</li>
      </ul>
      
      <p>Our franchise owners benefit from a business model refined through years of experience in the competitive coffee industry, allowing you to hit the ground running with confidence.</p>
    `,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
    stats: [
      { value: '250+', label: 'Locations Worldwide' },
      { value: '94%', label: 'Franchisee Satisfaction' },
      { value: '15 Years', label: 'Industry Experience' }
    ]
  },
  {
    id: '2',
    title: 'Investment Details',
    subtitle: 'Financial Requirements & Returns',
    description: 'Understand the investment needed to open your own GrayPipple franchise and the potential returns you can expect.',
    mainContent: `
      <p>Starting a GrayPipple franchise requires a reasonable investment that provides excellent value compared to other food and beverage franchise opportunities.</p>
      
      <h3>Initial Investment</h3>
      <ul>
        <li>Initial Franchise Fee: $30,000</li>
        <li>Equipment and Fixtures: $85,000 - $120,000</li>
        <li>Leasehold Improvements: $100,000 - $180,000</li>
        <li>Initial Inventory: $8,000 - $12,000</li>
        <li>Training Expenses: $5,000 - $8,000</li>
        <li>Additional Funds (3 months): $25,000 - $35,000</li>
      </ul>
      
      <p>Total estimated investment: $250,000 - $385,000</p>
      
      <h3>Ongoing Fees</h3>
      <ul>
        <li>Royalty Fee: 5% of gross sales</li>
        <li>Marketing Fund: 2% of gross sales</li>
        <li>Technology Fee: $250/month</li>
      </ul>
      
      <p>Qualified candidates should have a net worth of at least $350,000 with liquid assets of $120,000 or more.</p>
    `,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
    stats: [
      { value: '$250K-385K', label: 'Initial Investment' },
      { value: '15-20%', label: 'Average ROI' },
      { value: '24-36 mo', label: 'Average Breakeven' }
    ]
  },
  {
    id: '3',
    title: 'Support & Training',
    subtitle: 'Comprehensive Assistance for Success',
    description: 'Learn about the extensive training and ongoing support we provide to every franchise owner in the GrayPipple network.',
    mainContent: `
      <p>We're committed to your success and provide industry-leading training and support throughout your journey as a GrayPipple franchise owner.</p>
      
      <h3>Initial Training Program</h3>
      <ul>
        <li>3-week comprehensive training at our headquarters</li>
        <li>Hands-on coffee preparation and equipment operation</li>
        <li>Business management and POS system training</li>
        <li>Customer service and staff management</li>
        <li>Marketing and community engagement strategies</li>
      </ul>
      
      <h3>Ongoing Support</h3>
      <ul>
        <li>Pre-opening support and on-site training</li>
        <li>Regular field visits from dedicated franchise consultants</li>
        <li>Continued education through online learning platform</li>
        <li>National and regional marketing campaigns</li>
        <li>Product innovation and menu development</li>
        <li>Annual franchise conference and regional meetings</li>
      </ul>
      
      <p>Our support team includes experts in operations, training, marketing, supply chain, and real estate to help you overcome challenges and maximize opportunities.</p>
    `,
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
    stats: [
      { value: '3 Weeks', label: 'Initial Training' },
      { value: '24/7', label: 'Operational Support' },
      { value: 'Quarterly', label: 'Business Reviews' }
    ]
  },
  {
    id: '4',
    title: 'Application Process',
    subtitle: 'Your Journey to Ownership',
    description: 'Understand the steps to becoming a GrayPipple franchise owner, from initial inquiry to grand opening.',
    mainContent: `
      <p>Our streamlined application process is designed to ensure mutual fit and set you up for success as a GrayPipple franchise owner.</p>
      
      <h3>The GrayPipple Franchise Process</h3>
      <ol>
        <li><strong>Initial Inquiry</strong> - Submit your interest through our online form</li>
        <li><strong>Qualification Call</strong> - Initial discussion about your background and goals</li>
        <li><strong>Franchise Disclosure Document (FDD) Review</strong> - Receive and review our FDD</li>
        <li><strong>Discovery Day</strong> - Visit our headquarters to meet the team</li>
        <li><strong>Validation</strong> - Speak with existing franchise owners</li>
        <li><strong>Approval & Agreement</strong> - Receive approval and sign franchise agreement</li>
        <li><strong>Site Selection & Development</strong> - Find and develop your location</li>
        <li><strong>Training</strong> - Complete comprehensive training program</li>
        <li><strong>Grand Opening</strong> - Launch your GrayPipple franchise</li>
      </ol>
      
      <p>The typical timeframe from application to opening is 6-9 months, depending on real estate availability and construction timelines.</p>
      
      <p>Ready to take the next step? Complete our <a href="#">Franchise Application Form</a> to begin your journey.</p>
    `,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
    stats: [
      { value: '6-9', label: 'Months to Opening' },
      { value: '100%', label: 'Site Selection Support' },
      { value: '10+', label: 'Markets Available' }
    ]
  },
  {
    id: '5',
    title: 'Success Stories',
    subtitle: 'Hear from Our Franchise Owners',
    description: 'Read testimonials and success stories from current GrayPipple franchise owners who have built thriving businesses.',
    mainContent: `
      <p>Our franchise owners come from diverse backgrounds but share a passion for quality coffee and entrepreneurship. Here are some of their stories:</p>
      
      <div class="testimonial">
        <h3>Mark & Sarah Thompson - Seattle, WA</h3>
        <p>"After 15 years in corporate America, we wanted to build something of our own. Opening a GrayPipple franchise gave us the perfect blend of independence and support. Three years in, we're exceeding our financial goals and planning to open a second location."</p>
      </div>
      
      <div class="testimonial">
        <h3>David Chen - Austin, TX</h3>
        <p>"As a first-time business owner, the training and support from GrayPipple was invaluable. From site selection to our grand opening and beyond, the team has been there every step of the way. Our store has become a neighborhood hub, and sales have grown 20% year over year."</p>
      </div>
      
      <div class="testimonial">
        <h3>Jennifer Williams - Chicago, IL</h3>
        <p>"I was a loyal GrayPipple customer before becoming a franchise owner. The brand's commitment to quality and community aligned perfectly with my values. Now, as an owner of three locations, I can attest to the strength of the business model and the power of the brand in attracting loyal customers."</p>
      </div>
      
      <div class="testimonial">
        <h3>Robert & Lisa Martinez - Denver, CO</h3>
        <p>"We researched many franchise opportunities before choosing GrayPipple. The return on investment and level of corporate support stood out from the competition. Four years later, we've never looked back. Our GrayPipple franchise has provided our family with financial security and work-life balance we never had in our previous careers."</p>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
    stats: [
      { value: '85%', label: 'Multi-Unit Owners' },
      { value: '92%', label: 'Would Invest Again' },
      { value: '8 Years', label: 'Avg. Ownership' }
    ]
  }
];

export default function FranchiseDetailPage() {
  const params = useParams();
  const idx = typeof params.idx === 'string' ? params.idx : '1';
  
  const franchiseItem = franchiseData.find(item => item.id === idx) || franchiseData[0];
  
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeaderFran />
      
      <div className="container mx-auto px-4 mt-16 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/franchise" className="inline-flex items-center text-green-700 hover:text-green-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className='text-black font-medium'>All Franchise Information</span>
          </Link>
        </div>
        
        {/* Hero section */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 ">{franchiseItem.title}</h1>
            <p className="text-xl text-white mb-4">{franchiseItem.subtitle}</p>
            <p className="text-lg text-white max-w-2xl">{franchiseItem.description}</p>
          </div>
          <div className="absolute inset-0 z-0">
            <Image 
              src={franchiseItem.image} 
              alt={franchiseItem.title} 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {franchiseItem.stats.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-3xl font-bold text-green-700 mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
           <div 
            className="lg:col-span-2 prose prose-lg max-w-none [&_*]:text-black [&_h3]:text-black [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mb-4 [&_h3]:mt-6 [&_p]:text-black [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:text-black [&_li]:mb-2 [&_ul]:mb-6 [&_ol]:mb-6 [&_strong]:text-black [&_strong]:font-bold [&_a]:text-green-700 [&_a]:underline hover:[&_a]:text-green-900" 
            dangerouslySetInnerHTML={{ __html: franchiseItem.mainContent }}
          ></div>          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-black">Ready to Join GrayPipple?</h3>
              <p className="mb-4 text-black">Take the first step toward owning your own GrayPipple franchise today.</p>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                Request Information
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-black">Franchise Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-green-700 hover:text-green-900 hover:underline">Franchise Brochure (PDF)</Link></li>
                <li><Link href="#" className="text-green-700 hover:text-green-900 hover:underline">Frequently Asked Questions</Link></li>
                <li><Link href="#" className="text-green-700 hover:text-green-900 hover:underline">Meet Our Franchise Team</Link></li>
                <li><Link href="#" className="text-green-700 hover:text-green-900 hover:underline">Available Territories</Link></li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-black">Contact Us</h3>
              <p className="mb-2 text-black">Have questions about franchising with GrayPipple?</p>
              <p className="mb-4 text-black">Our franchise development team is here to help.</p>
              <Link href="#" className="inline-block text-green-700 hover:text-green-900 hover:underline">franchise@graypipple.com</Link><br />
              <Link href="#" className="inline-block text-green-700 hover:text-green-900 hover:underline">(555) 123-4567</Link>
            </div>
          </div>
        </div>
        
        {/* Other franchise options */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">More Franchise Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {franchiseData.map((item) => (
              <Link 
                href={`/franchise/${item.id}`} 
                key={item.id}
                className={`block p-6 rounded-lg transition-all ${
                  item.id === idx 
                    ? 'bg-green-700 text-white' 
                    : 'bg-white border border-gray-200 hover:border-green-700 text-black'
                }`}
              >
                <h3 className="font-medium text-lg text-black">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GrayPipple</h3>
            <p className="text-gray-400 mb-4">Passionate about great coffee and exceptional service since 2008.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/menu/signature" className="text-gray-400 hover:text-white">Signature Drinks</Link></li>
              <li><Link href="/menu/coffee" className="text-gray-400 hover:text-white">Coffee</Link></li>
              <li><Link href="/menu/noncoffee" className="text-gray-400 hover:text-white">Non-Coffee</Link></li>
              <li><Link href="/menu/beverage" className="text-gray-400 hover:text-white">Beverages</Link></li>
              <li><Link href="/menu/dessert" className="text-gray-400 hover:text-white">Desserts</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Franchise</h3>
            <ul className="space-y-2">
              <li><Link href="/franchise/1" className="text-gray-400 hover:text-white">Why GrayPipple</Link></li>
              <li><Link href="/franchise/2" className="text-gray-400 hover:text-white">Investment Details</Link></li>
              <li><Link href="/franchise/3" className="text-gray-400 hover:text-white">Support & Training</Link></li>
              <li><Link href="/franchise/4" className="text-gray-400 hover:text-white">Application Process</Link></li>
              <li><Link href="/franchise/5" className="text-gray-400 hover:text-white">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Coffee Street</p>
              <p>Seattle, WA 98101</p>
              <p className="mt-4">info@graypipple.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="container mx-auto border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-500 text-center">&copy; {new Date().getFullYear()} GrayPipple Coffee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
