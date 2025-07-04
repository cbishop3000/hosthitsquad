import { Shield, Phone, MapPin, CheckCircle, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-emerald-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
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
            <button className="bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md">
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
              Your Local Contact & On-Call Partner for Airbnb Hosts in Oakhurst & the Yosemite Gateway Region
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We work with independent Airbnb hosts who manage their own bookings and guest communication, but need
              a required local contact to meet county regulations and a reliable in-person backup for emergency guest needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors shadow-lg">
                Start Your Service
              </button>
              <button className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">🎯 Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with independent Airbnb hosts who manage their own bookings and guest communication, but need:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-purple-800 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-purple-200 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-purple-100">Required Local Contact</h3>
              <p className="text-purple-200">To meet county regulations</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-emerald-700 border border-emerald-200 hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-emerald-100">Reliable In-Person Backup</h3>
              <p className="text-emerald-100">For emergency guest needs or rule enforcement</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-purple-800 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <MapPin className="h-12 w-12 text-purple-200 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-purple-100">Professional On-Ground Presence</h3>
              <p className="text-purple-100">When you can&apos;t be there</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-900 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">🔧 Core Services</h2>
            <p className="text-xl text-gray-200">Professional support tailored for independent Airbnb hosts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Local Contact Service */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-800 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">🧙 Local Contact</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Required by Madera County, every STR must have a local contact available to respond within 30–60 minutes (35 miles) to any complaint or emergency.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">We offer:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">24/7 availability as your registered local contact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">Response to county or neighbor complaints (trash, parking, noise, fires)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">On-site visits for guest issues: lockouts, rule violations, fire hazards, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">Incident reporting with photos and time stamps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">Coordination with law enforcement or code enforcement if needed</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-purple-800 pt-6">
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-800">
                  <p className="text-2xl font-semibold text-purple-800">Monthly Retainer: $80</p>
                  <p className="text-sm text-gray-600 mt-1">This covers your legal local contact requirement and keeps us on-call 24/7.</p>
                  <p className="text-sm text-gray-600 mt-2">If a physical response is needed, a visit is billed separately at $75/hour + mileage.</p>
                  <p className="text-xs text-gray-500 mt-1">(Includes up to 15 miles RT. $1/mile after.)</p>
                </div>
              </div>
            </div>

            {/* Emergency Response */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-emerald-800 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">🚨 Guest Emergency Visit (As-Needed)</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                On the ground response when guests call with issues or when you need professional intervention.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Real examples we&apos;ve handled:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">&quot;The power has gone out. Can you bring us fire wood to the cabin?&quot; (True story)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">&quot;There are poisonous spiders everywhere, we can&apos;t stay here&quot; (True story, they were Daddy-Long-Legs)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">&quot;Can we light a fire outside?&quot; (answer: no!) But you think maybe they do anyway</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">Your cleaner shows up but the guests don&apos;t respect the check out time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-800 mr-3 mt-0.5" />
                    <span className="text-gray-700">Neighbors report noise, illegal fires, parking blockages</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl mb-4 border border-emerald-100">
                <p className="text-gray-700 font-medium">We step in. We&apos;re calm, professional, and act as your proxy.</p>
                <p className="text-sm text-gray-600 mt-2">Think of us as your on-call Airbnb bouncer—but polite.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Quality Checks */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">🛋️ Post-Clean or Pre-Guest Quality Checks</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Peace of mind when you&apos;re managing from afar.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Verify that your cleaners did a full and complete job</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Check for any damage or leftover guest mess</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Restage home if needed before arrival</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Take and send photos + fill checklist</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Double-check essentials like toilet paper, paper towels, new sponge, dish soap, etc.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Restock on your behalf or notify you of any low or missing inventory</span>
                </li>
              </ul>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <p className="text-gray-700 text-sm leading-relaxed">
                  If your cleaners have had back-to-back flips, we&apos;ll notice when things like the oven or fridge need a deeper clean and flag that for your attention.
                  We help you stay ahead of wear and tear and maintain the standard your reviews depend on.
                </p>
              </div>
              <div className="border-t border-purple-200 pt-6 mt-6">
                <div className="bg-purple-100 p-6 rounded-xl border border-purple-200">
                  <p className="text-2xl font-semibold text-purple-800">Rate: $60–$70 per visit</p>
                  <p className="text-sm text-gray-600 mt-1">(add-on or standalone)</p>
                </div>
              </div>
            </div>

            {/* New Host Setup */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">🚀 New Host Setup Consulting</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                New to Airbnb? We&apos;ll walk your property with you or on your behalf and help you launch like a pro.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Consultation includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Inventory list & linen calculations (how many sets per bed, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Setup checklist (fire extinguisher, lockbox, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Advice on pricing your cleaning fee and what you should pay your cleaners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Help choosing the right cleaner or crew</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Connect you with local cleaners we&apos;ve vetted and trust</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Provide links and recommendations for linens, inventory, and guest-ready supplies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Optional: photo-ready staging suggestions</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-emerald-200 pt-6">
                <div className="bg-emerald-100 p-6 rounded-xl border border-emerald-200">
                  <p className="text-2xl font-semibold text-emerald-800">One-Time Consulting Package: $150–$300</p>
                  <p className="text-sm text-gray-600 mt-1">depending on size</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add-On Services Table */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">🧾 Add-On Services (Modular)</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 text-slate-700">On-call guest/emergency visit</td>
                    <td className="py-3 px-4 text-slate-700">$75/hr</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-700">Incident photo report</td>
                    <td className="py-3 px-4 text-slate-700">Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-700">Inventory restock</td>
                    <td className="py-3 px-4 text-slate-700">$25 + cost of items</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-700">Hosting hotline (text/call)</td>
                    <td className="py-3 px-4 text-slate-700">Included in retainer</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-700">Pre-guest walkthrough</td>
                    <td className="py-3 px-4 text-slate-700">$60–70</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gradient-to-r purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">🏥 Service Area:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                <p className="font-medium text-gray-800">Oakhurst</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300 hover:border-emerald-300">
                <p className="font-medium text-gray-800">Bass Lake</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                <p className="font-medium text-gray-800">Coarsegold</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300 hover:border-emerald-300">
                <p className="font-medium text-gray-800">Fish Camp</p>
                <p className="text-xs text-gray-500 mt-1">(higher mileage fee)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                <p className="font-medium text-gray-800">North Fork</p>
                <p className="text-xs text-gray-500 mt-1">(case-by-case)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4 text-gray-800">✨ Why Hosts Work with Us</h2>
            <p className="text-xl text-gray-200">We don&apos;t take over your listing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300">
              <Star className="h-12 w-12 text-purple-800 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">You Keep Guest Contact and Control</h3>
              <p className="text-gray-600 leading-relaxed">We&apos;re your trusted local extension.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-emerald-200 hover:shadow-2xl transition-all duration-300">
              <MapPin className="h-12 w-12 text-emerald-800 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">Built for Mountain-Area Properties</h3>
              <p className="text-gray-600 leading-relaxed">We know the terrain, fire risks, and local rules.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300">
              <Shield className="h-12 w-12 text-purple-800 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">We Keep Things Quiet, Clean, and Legal</h3>
              <p className="text-gray-600 leading-relaxed">Even when your guests don&apos;t.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join the growing community of Airbnb hosts who trust Host Hit Squad for their local support needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors shadow-lg">
              Get Your Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Call (559) XXX-XXXX
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-800 mr-2" />
                <h3 className="text-lg font-medium">Host Hit Squad</h3>
              </div>
              <p className="text-gray-50 leading-relaxed">Your trusted local contact and emergency response team for Airbnb hosts.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-neutral-300">Services</h4>
              <ul className="space-y-2 text-gray-50">
                <li>Local Contact</li>
                <li>Emergency Response</li>
                <li>Quality Checks</li>
                <li>New Host Setup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-neutral-300">Service Area</h4>
              <ul className="space-y-2 text-gray-50">
                <li>Oakhurst</li>
                <li>Bass Lake</li>
                <li>Coarsegold</li>
                <li>Fish Camp</li>
                <li>North Fork</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-neutral-300">Contact</h4>
              <ul className="space-y-2 text-gray-50">
                <li>24/7 Emergency Line</li>
                <li>(559) XXX-XXXX</li>
                <li>info@hosthitsquad.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Host Hit Squad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
