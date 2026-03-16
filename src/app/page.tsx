import Link from 'next/link'
import { CountdownWidget } from '@/components/countdown-widget'
import {
  FileCheck,
  Smartphone,
  MapPin,
  Users,
  Truck,
  Shield,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* EDOC Urgency Banner */}
      <div className="bg-red-600 text-white py-2 text-center text-sm font-semibold">
        <span className="mr-2">⚠️</span>
        EDOC mandatory digital waste tracking starts October 2026 — 
        <Link href="/edoc-checker" className="underline ml-1 hover:text-red-200">Check your compliance free →</Link>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/edoc" className="text-orange-400 font-semibold hover:text-orange-300">🔥 EDOC 2026</Link>
            <Link href="/edoc-checker" className="hover:text-emerald-400">Free Checker</Link>
            <Link href="/customer-portal" className="hover:text-emerald-400">Customer Portal</Link>
            <Link href="/pricing" className="hover:text-emerald-400">Pricing</Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                The UK&apos;s #1 Waste Management Platform for EDOC Compliance
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Digital Waste Tracking goes mandatory October 2026. Are you ready?
              </p>
              
              <CountdownWidget targetDate="2026-10-01" />
              
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mt-4">
                <BadgeCheck className="w-5 h-5" />
                EDOC Ready — Full Compliance Built In
              </div>
              
              <div className="flex gap-4 mt-8">
                <Link
                  href="/login"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/pricing"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* Hero illustration placeholder */}
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="300" height="200" rx="10" fill="white" opacity="0.1"/>
                  <circle cx="200" cy="150" r="50" fill="#10b981" opacity="0.3"/>
                  <path d="M150 150 L200 100 L250 150 L200 200 Z" fill="#10b981"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              70% of UK Waste Carriers Still Use Paper WTNs. The Clock Is Ticking.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Non-compliance = £300 FPN + prosecution + loss of waste carrier licence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-red-500 font-bold mb-2">The Problem</div>
              <p className="text-gray-700">
                Manual paperwork, filing cabinets, lost WTNs, EA audit nightmares
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-orange-500 font-bold mb-2">The Deadline</div>
              <p className="text-gray-700">
                Oct 2026 (sites), Oct 2027 (carriers) — mandatory digital tracking
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-emerald-500 font-bold mb-2">The Solution</div>
              <p className="text-gray-700">
                GreenLoop makes EDOC compliance painless — digital WTNs in 60 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Comply and Grow</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: 'Digital Waste Tracking (EDOC)',
                description: 'Auto-submit to DEFRA API. WTNs in 60 seconds.',
              },
              {
                icon: Smartphone,
                title: 'Driver Mobile App',
                description: 'E-signatures, photo proof, GPS location. No paperwork.',
              },
              {
                icon: MapPin,
                title: 'Route Optimisation',
                description: 'AI-powered routing. Save 20% on fuel costs.',
              },
              {
                icon: Users,
                title: 'Customer Portal',
                description: 'Zero-friction access. Customers download WTNs instantly.',
              },
              {
                icon: Truck,
                title: 'Fleet Management',
                description: 'MOT, tax, O-licence tracking. DVSA-compliant.',
              },
              {
                icon: Shield,
                title: 'Compliance Hub',
                description: 'EPR, Simpler Recycling, EA reporting. All in one place.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by 300+ UK Waste Carriers</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'GreenLoop saved us 10 hours a week on admin. The EDOC integration is flawless.',
                author: 'John Smith',
                company: 'Essex Skip Hire Ltd',
              },
              {
                quote: 'We were panicking about the Oct 2026 deadline. GreenLoop got us compliant in 2 weeks.',
                author: 'Sarah Jones',
                company: 'Metro Waste Services',
              },
              {
                quote: 'Best £149/month we\'ve ever spent. The driver app is a game-changer.',
                author: 'Dave Brown',
                company: 'London Commercial Waste',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { plan: 'Starter', price: '£49', users: '3', jobs: '100', vehicles: '2' },
              { plan: 'Professional', price: '£149', users: '10', jobs: '500', vehicles: '5' },
              { plan: 'Business', price: '£299', users: '25', jobs: '2,000', vehicles: '15' },
              { plan: 'Enterprise', price: '£499', users: 'Unlimited', jobs: 'Unlimited', vehicles: 'Unlimited' },
            ].map((tier, idx) => (
              <div key={idx} className={`p-6 rounded-lg border-2 ${idx === 1 ? 'border-emerald-500 shadow-lg' : 'border-gray-200'}`}>
                <div className="text-lg font-bold mb-2">{tier.plan}</div>
                <div className="text-3xl font-bold mb-4">{tier.price}<span className="text-sm text-gray-500">/mo</span></div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Up to {tier.users} users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{tier.jobs} jobs/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{tier.vehicles} vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>EDOC compliance</span>
                  </li>
                </ul>
                <Link
                  href="/login"
                  className={`block text-center py-2 rounded-lg font-semibold ${
                    idx === 1
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  Start Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get EDOC-Ready?</h2>
          <p className="text-xl mb-8">Join 300+ waste carriers already using GreenLoop</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-emerald-100">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/edoc">EDOC Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Skip Hire</li>
                <li>Commercial Waste</li>
                <li>Scrap Metal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Blog</li>
                <li>Guides</li>
                <li>API Docs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 GreenLoop by Data & Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
