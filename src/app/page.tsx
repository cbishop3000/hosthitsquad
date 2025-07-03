import { Shield, Phone, Clock, MapPin, CheckCircle, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">Host Hit Squad</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Your Local Contact & On-Call Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional support for Airbnb hosts in Oakhurst & the Yosemite Gateway Region.
              We handle compliance, emergencies, and guest issues so you can focus on hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors shadow-lg">
                Start Your Service
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600">Always on-call for emergencies and compliance issues</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">Local Expertise</h3>
              <p className="text-gray-600">We know the terrain, fire risks, and local regulations</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">Compliance Ready</h3>
              <p className="text-gray-600">Meet Madera County requirements with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-25 to-green-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Professional support tailored for independent Airbnb hosts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Local Contact Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Local Contact (Compliance)</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Required by Madera County - we serve as your registered local contact with 24/7 availability
                for complaints and emergencies within 30-60 minutes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 availability as registered contact</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Response to county/neighbor complaints</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Incident reporting with photos</span>
                </li>
              </ul>
              <div className="border-t border-purple-100 pt-6">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-2xl font-semibold text-purple-700">$95/month</p>
                  <p className="text-sm text-purple-600 mt-1">First response FREE as welcome gift!</p>
                  <p className="text-sm text-green-600 font-medium mt-1">Pay yearly: $855 (25% OFF)</p>
                </div>
              </div>
            </div>

            {/* Emergency Response */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Guest Emergency Response</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                On-the-ground response when guests need immediate help or when rules need enforcement.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Power outages & utility issues</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Guest lockouts & access problems</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Rule violations & noise complaints</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Fire safety enforcement</span>
                </li>
              </ul>
              <div className="border-t border-green-100 pt-6">
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-2xl font-semibold text-green-700">$75/hour</p>
                  <p className="text-sm text-green-600 mt-1">+ mileage (15 miles included)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-purple-100 rounded-2xl bg-purple-25 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-gray-800">Quality Checks</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Post-clean inspections and pre-guest walkthroughs</p>
              <p className="text-lg font-semibold text-purple-600">$60-70/visit</p>
            </div>
            <div className="text-center p-6 border border-green-100 rounded-2xl bg-green-25 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-gray-800">New Host Setup</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Complete consultation and launch support</p>
              <p className="text-lg font-semibold text-green-600">$150-300</p>
            </div>
            <div className="text-center p-6 border border-purple-100 rounded-2xl bg-purple-25 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-gray-800">Inventory Restock</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Keep your property guest-ready</p>
              <p className="text-lg font-semibold text-purple-600">$25 + items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Service Area</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">Oakhurst</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">Bass Lake</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">Coarsegold</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">Fish Camp</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">North Fork</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4 text-gray-800">Why Hosts Choose Us</h2>
            <p className="text-xl text-gray-600">We don&apos;t take over your listing - we&apos;re your trusted local extension</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <Star className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">You Stay in Control</h3>
              <p className="text-gray-600 leading-relaxed">Keep guest contact and control - we&apos;re your local backup</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-green-100">
              <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">Mountain Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Built for mountain properties - we know the unique challenges</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">Quiet & Professional</h3>
              <p className="text-gray-600 leading-relaxed">We keep things clean, quiet, and legal - even when guests don&apos;t</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join the growing community of Airbnb hosts who trust Host Hit Squad for their local support needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors shadow-lg">
              Get Your Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-800 transition-colors">
              Call (559) XXX-XXXX
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-300 mr-2" />
                <h3 className="text-lg font-medium">Host Hit Squad</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Your trusted local contact and emergency response team for Airbnb hosts.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-purple-200">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Local Contact</li>
                <li>Emergency Response</li>
                <li>Quality Checks</li>
                <li>New Host Setup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-green-200">Service Area</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Oakhurst</li>
                <li>Bass Lake</li>
                <li>Coarsegold</li>
                <li>Fish Camp</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-purple-200">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>24/7 Emergency Line</li>
                <li>(559) XXX-XXXX</li>
                <li>info@hosthitsquad.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Host Hit Squad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
