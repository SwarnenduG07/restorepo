'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

const franchiseData = [
	{
		id: '1',
		title: 'Why GrayPipple',
		subtitle: 'Join a Growing Coffee Brand',
		description:
			'Discover why GrayPipple is the perfect franchise opportunity for passionate entrepreneurs looking to enter the specialty coffee market.',
		image:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // coffee shop
		stats: [
			{ value: '250+', label: 'Locations Worldwide' },
			{ value: '94%', label: 'Franchisee Satisfaction' },
			{ value: '15 Years', label: 'Industry Experience' },
		],
	},
	{
		id: '2',
		title: 'Investment Details',
		subtitle: 'Financial Requirements & Returns',
		description:
			'Understand the investment needed to open your own GrayPipple franchise and the potential returns you can expect.',
		image:
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // money/investment
		stats: [
			{ value: '$250K-385K', label: 'Initial Investment' },
			{ value: '15-20%', label: 'Average ROI' },
			{ value: '24-36 mo', label: 'Average Breakeven' },
		],
	},
	{
		id: '3',
		title: 'Support & Training',
		subtitle: 'Comprehensive Assistance for Success',
		description:
			'Learn about the extensive training and ongoing support we provide to every franchise owner in the GrayPipple network.',
		image:
			'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=800&q=80', 
		stats: [
			{ value: '3 Weeks', label: 'Initial Training' },
			{ value: '24/7', label: 'Operational Support' },
			{ value: 'Quarterly', label: 'Business Reviews' },
		],
	},
	{
		id: '4',
		title: 'Application Process',
		subtitle: 'Your Journey to Ownership',
		description:
			'Understand the steps to becoming a GrayPipple franchise owner, from initial inquiry to grand opening.',
		image:
			'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', // process/journey
		stats: [
			{ value: '6-9', label: 'Months to Opening' },
			{ value: '100%', label: 'Site Selection Support' },
			{ value: '10+', label: 'Markets Available' },
		],
	},
	{
		id: '5',
		title: 'Success Stories',
		subtitle: 'Hear from Our Franchise Owners',
		description:
			'Read testimonials and success stories from current GrayPipple franchise owners who have built thriving businesses.',
		image:
			'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // success/people
		stats: [
			{ value: '85%', label: 'Multi-Unit Owners' },
			{ value: '92%', label: 'Would Invest Again' },
			{ value: '8 Years', label: 'Avg. Ownership' },
		],
	},
];

export default function FranchisePage() {
	return (
		<div className="min-h-screen bg-white text-black flex flex-col">
			<Header />

			{/* Hero section */}
			<div className="relative w-full h-[500px] bg-green-700">
				<div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent z-10"></div>
				<div className="container mx-auto px-4 h-full flex items-center relative z-20">
					<div className="max-w-xl">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
							Own a GrayPipple Franchise
						</h1>
						<p className="text-xl text-white/90 mb-8">
							Join our growing family of successful franchise owners and bring
							premium coffee experiences to your community.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/franchise/1"
								className="bg-white text-green-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors"
							>
								Learn More
							</Link>
							<Link
								href="/franchise/4"
								className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors"
							>
								Apply Now
							</Link>
						</div>
					</div>
				</div>
				{/* Hero image */}
				<div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden md:block overflow-hidden">
					<div className="relative w-full h-full">
						<Image
							src="/franchise-why.jpg"
							alt="GrayPipple franchise opportunity"
							fill
							className="object-cover object-center"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-l from-transparent via-green-800/30 to-green-700"></div>
					</div>
				</div>
			</div>

			{/* Main content and sidebar */}
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
					{/* Main Content */}
					<div className="lg:col-span-3">
						{/* Why Franchise Section */}
						<div className="mb-16 text-center">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Why Franchise with GrayPipple?
							</h2>
							<p className="text-gray-600 max-w-2xl mx-auto mb-10">
								GrayPipple offers a unique franchise opportunity with a proven
								business model, comprehensive support, and an established brand that
								customers love.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-8 w-8 text-green-700"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-2">Strong ROI</h3>
									<p className="text-gray-600">
										Competitive investment with excellent return potential and
										multiple revenue streams.
									</p>
								</div>
								<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-8 w-8 text-green-700"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-2">Proven System</h3>
									<p className="text-gray-600">
										A tested business model with operational excellence and
										streamlined processes.
									</p>
								</div>
								<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-8 w-8 text-green-700"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
									<p className="text-gray-600">
										Comprehensive training, marketing assistance, and dedicated
										franchise support team.
									</p>
								</div>
							</div>
						</div>

						{/* Franchise Options */}
						<div className="mt-16">
							<h2 className="text-3xl font-bold mb-8 text-center">
								Franchise Information
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{franchiseData.map((item) => (
									<Link
										href={`/franchise/${item.id}`}
										key={item.id}
										className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 hover:border-green-700 transition-all"
									>
										<div className="relative h-48 overflow-hidden">
											<Image
												src={item.image}
												alt={item.title}
												fill
												className="object-cover transition-transform group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
											<div className="absolute bottom-0 left-0 right-0 p-4">
												<h3 className="text-xl font-bold text-white">
													{item.title}
												</h3>
												<p className="text-white/80">{item.subtitle}</p>
											</div>
										</div>
										<div className="flex-1 p-5 bg-white">
											<p className="text-gray-600 mb-4">{item.description}</p>
											<div className="mt-4 flex justify-between items-center">
												<span className="text-green-700 font-medium">
													Learn More
												</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-green-700 transform group-hover:translate-x-1 transition-transform"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>

						{/* CTA Section */}
						<div className="mt-20 bg-green-700 text-white rounded-xl overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-10 lg:p-16 flex flex-col justify-center">
									<h2 className="text-3xl font-bold mb-6">
										Ready to Join the GrayPipple Family?
									</h2>
									<p className="text-white/90 text-lg mb-8">
										Take the first step toward owning your own thriving coffee
										business. Our franchise team is ready to answer your questions
										and guide you through the process.
									</p>
									<div className="flex flex-wrap gap-4">
										<Link
											href="/franchise/4"
											className="bg-white text-green-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors"
										>
											Apply Now
										</Link>
										<Link
											href="#"
											className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors"
										>
											Request Information
										</Link>
									</div>
								</div>
								<div className="relative h-64 lg:h-auto">
									<Image
										src="/franchise-process.jpg"
										alt="GrayPipple franchise process"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>

						{/* Testimonial Section */}
						<div className="container mx-auto px-0 py-16 bg-gray-50 mt-16">
							<h2 className="text-3xl font-bold mb-12 text-center">
								What Our Franchise Owners Say
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
											<span className="text-green-700 font-bold">MT</span>
										</div>
										<div>
											<h3 className="font-bold">Mark Thompson</h3>
											<p className="text-sm text-gray-500">
												Seattle, WA • Owner since 2019
											</p>
										</div>
									</div>
									<p className="text-gray-600">
										"After 15 years in corporate America, opening a GrayPipple
										franchise gave us the perfect blend of independence and
										support. Three years in, we're exceeding our financial goals
										and planning to open a second location."
									</p>
								</div>
								<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
											<span className="text-green-700 font-bold">JW</span>
										</div>
										<div>
											<h3 className="font-bold">Jennifer Williams</h3>
											<p className="text-sm text-gray-500">
												Chicago, IL • Owner since 2018
											</p>
										</div>
									</div>
									<p className="text-gray-600">
										"As an owner of three locations, I can attest to the strength
										of the GrayPipple business model and the power of the brand in
										attracting loyal customers. The support team has been incredible
										throughout my journey."
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Sidebar/Resources */}
					<div className="space-y-6">
						<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
							<h3 className="text-xl font-bold mb-4">Ready to Join GrayPipple?</h3>
							<p className="mb-4">
								Take the first step toward owning your own GrayPipple franchise
								today.
							</p>
							<button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-4 rounded-lg transition-colors">
								Request Information
							</button>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
							<h3 className="text-xl font-bold mb-4">Franchise Resources</h3>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="text-green-700 hover:text-green-900 hover:underline"
									>
										Franchise Brochure (PDF)
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-green-700 hover:text-green-900 hover:underline"
									>
										Frequently Asked Questions
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-green-700 hover:text-green-900 hover:underline"
									>
										Meet Our Franchise Team
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-green-700 hover:text-green-900 hover:underline"
									>
										Available Territories
									</Link>
								</li>
							</ul>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
							<h3 className="text-xl font-bold mb-4">Contact Us</h3>
							<p className="mb-2">
								Having questions about franchising with GrayPipple?
							</p>
							<p className="mb-4">
								Our franchise development team is here to help.
							</p>
							<Link
								href="#"
								className="inline-block text-green-700 hover:text-green-900 hover:underline"
							>
								franchise@graypipple.com
							</Link>
							<br />
							<Link
								href="#"
								className="inline-block text-green-700 hover:text-green-900 hover:underline"
							>
								(555) 123-4567
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="mt-auto bg-gray-900 text-white py-12 px-4">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-bold mb-4">GrayPipple</h3>
						<p className="text-gray-400 mb-4">
							Passionate about great coffee and exceptional service since 2008.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								aria-label="Facebook"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">Facebook</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">Instagram</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-bold mb-4">Menu</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/menu/signature"
									className="text-gray-400 hover:text-white"
								>
									Signature Drinks
								</Link>
							</li>
							<li>
								<Link
									href="/menu/coffee"
									className="text-gray-400 hover:text-white"
								>
									Coffee
								</Link>
							</li>
							<li>
								<Link
									href="/menu/noncoffee"
									className="text-gray-400 hover:text-white"
								>
									Non-Coffee
								</Link>
							</li>
							<li>
								<Link
									href="/menu/beverage"
									className="text-gray-400 hover:text-white"
								>
									Beverages
								</Link>
							</li>
							<li>
								<Link
									href="/menu/dessert"
									className="text-gray-400 hover:text-white"
								>
									Desserts
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-bold mb-4">Franchise</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/franchise/1"
									className="text-gray-400 hover:text-white"
								>
									Why GrayPipple
								</Link>
							</li>
							<li>
								<Link
									href="/franchise/2"
									className="text-gray-400 hover:text-white"
								>
									Investment Details
								</Link>
							</li>
							<li>
								<Link
									href="/franchise/3"
									className="text-gray-400 hover:text-white"
								>
									Support & Training
								</Link>
							</li>
							<li>
								<Link
									href="/franchise/4"
									className="text-gray-400 hover:text-white"
								>
									Application Process
								</Link>
							</li>
							<li>
								<Link
									href="/franchise/5"
									className="text-gray-400 hover:text-white"
								>
									Success Stories
								</Link>
							</li>
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
					<p className="text-gray-500 text-center">
						&copy; {new Date().getFullYear()} GrayPipple Coffee. All rights
						reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
