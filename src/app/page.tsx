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
  Star,
  Play,
  Globe,
  Scale,
  Route,
  Monitor,
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

      {/* Trust Stats Bar */}
      <section className="bg-slate-800 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { value: '100+', label: 'Waste Operators' },
              { value: '500,000+', label: 'WTNs Processed' },
              { value: 'EDOC Ready', label: 'Full Compliance' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 tabular-nums">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Badges */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by waste operators. Rated by the industry.</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: 'Capterra', rating: '4.8/5' },
              { name: 'G2', rating: '4.8/5' },
              { name: 'Software Advice', rating: '4.9/5' },
              { name: 'GetApp', rating: '4.8/5' },
            ].map((badge) => (
              <div key={badge.name} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-900">{badge.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">on {badge.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unlimited Messaging */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">No Limits. No Surprises.</h2>
          <p className="text-emerald-100 text-lg mb-8">Scale your operations without scaling your costs.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📄', label: 'Unlimited WTNs' },
              { icon: '🚛', label: 'Unlimited Drivers' },
              { icon: '📍', label: 'Unlimited Sites' },
            ].map((item) => (
              <div key={item.label} className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-xl font-bold text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Product Demo</p>
          <h2 className="text-3xl font-bold mb-4">See GreenLoop in 2 Minutes</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Watch how UK waste operators manage WTNs, track drivers, and stay EDOC-compliant.</p>
          <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-emerald-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-3 gap-4 p-8 h-full">
                  <div className="bg-white/10 rounded-lg" />
                  <div className="bg-white/10 rounded-lg col-span-2" />
                  <div className="bg-white/10 rounded-lg col-span-2" />
                  <div className="bg-white/10 rounded-lg" />
                </div>
              </div>
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-10">2:12</div>
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

      {/* New Features Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              New Features
            </span>
            <h2 className="text-3xl font-bold">
              Just Launched — Built for EDOC Compliance
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              New tools designed to get you EDOC-ready, streamline your operations, and give your customers a better experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'EDOC Compliance Suite',
                desc: 'Full DEFRA EDOC integration. Auto-submit digital duty of care records, track waste movements end-to-end, and generate compliance reports for EA audits.',
                badge: 'EDOC',
              },
              {
                icon: Monitor,
                title: 'Customer Portal',
                desc: 'Branded self-service portal for your customers. Download WTNs, view job history, request collections, and access compliance documents 24/7.',
                badge: 'Portal',
              },
              {
                icon: Smartphone,
                title: 'Driver App',
                desc: 'Purpose-built mobile app for drivers. E-signatures, photo proof, GPS tracking, offline capability. No more paper rounds sheets.',
                badge: 'Mobile',
              },
              {
                icon: Route,
                title: 'Route Optimisation',
                desc: 'AI-powered route planning. Reduce fuel costs by 20%, fit more jobs per day, and minimise empty running with smart scheduling.',
                badge: 'AI',
              },
              {
                icon: Globe,
                title: 'EA Integration',
                desc: 'Direct integration with Environment Agency systems. Automated permit checks, waste carrier licence validation, and exemption monitoring.',
                badge: 'Integration',
              },
              {
                icon: Scale,
                title: 'Weighbridge Integration',
                desc: 'Connect your weighbridge directly to GreenLoop. Auto-capture weights, generate WTNs on exit, and eliminate manual data entry at the gate.',
                badge: 'Hardware',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-5 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">{feature.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Up and Running in 3 Steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your free account in 2 minutes. No credit card needed. Import your customer and site data.', icon: '🚀' },
              { step: '2', title: 'Set Up Your Operations', desc: 'Add your vehicles, drivers, waste streams, and sites. Configure your EDOC submission settings.', icon: '⚙️' },
              { step: '3', title: 'Start Managing', desc: 'Create digital WTNs, track collections, optimise routes, and submit EDOC records — all from one platform.', icon: '📊' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">{item.step}</div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by UK Waste Operators</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'GreenLoop saved us 10 hours a week on admin. The EDOC integration is flawless.',
                author: 'John Smith',
                role: 'Operations Director',
                company: 'Essex Skip Hire Ltd',
                initials: 'JS',
                result: '10 hours/week saved',
                stars: 5,
              },
              {
                quote: 'We were panicking about the Oct 2026 deadline. GreenLoop got us compliant in 2 weeks.',
                author: 'Sarah Jones',
                role: 'Compliance Manager',
                company: 'Metro Waste Services',
                initials: 'SJ',
                result: 'EDOC ready in 2 weeks',
                stars: 5,
              },
              {
                quote: 'Best £149/month we\'ve ever spent. The driver app is a game-changer for our team.',
                author: 'Dave Brown',
                role: 'Managing Director',
                company: 'London Commercial Waste',
                initials: 'DB',
                result: '20% fuel savings',
                stars: 5,
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="mb-4">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">{testimonial.result}</span>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">{testimonial.initials}</div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
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

      {/* Final CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get EDOC-Ready?</h2>
          <p className="text-emerald-100 font-semibold mb-2">Start your free 14-day trial — no credit card required</p>
          <p className="text-xl mb-8">Join 100+ waste operators already using GreenLoop</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
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
