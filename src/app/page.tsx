import Link from 'next/link'
import Image from 'next/image'
import { CountdownWidget } from '@/components/countdown-widget'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
  FileCheck,
  Smartphone,
  MapPin,
  Users,
  Truck,
  Shield,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  BarChart3,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80"
            alt="Waste management truck"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                ⚠️ EDOC Mandatory October 2026
              </div>
              <h1 className="text-5xl font-bold mb-4">
                UK&apos;s #1 Waste Management Platform for EDOC Compliance
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Digital Waste Tracking becomes mandatory in 596 days. Is your business ready?
              </p>
              
              <CountdownWidget targetDate="2026-10-01" />
              
              <div className="flex gap-4 mt-8">
                <Link
                  href="/login"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
                >
                  Book Demo
                </Link>
              </div>

              <div className="mt-8 flex gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611284446317-1a5c87861c64?w=800&q=80"
                  alt="Recycling facility with waste management equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-sm text-gray-600">
            <div>
              <div className="text-3xl font-bold text-emerald-500">500+</div>
              <div>Waste Operators</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-emerald-500">1M+</div>
              <div>WTNs Processed</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-emerald-500">100%</div>
              <div>EA Compliant</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-emerald-500">Zero</div>
              <div>Compliance Failures</div>
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
              Non-compliance = £300 Fixed Penalty Notice + prosecution risk + potential loss of waste carrier licence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <div className="text-red-500 font-bold mb-2 text-lg">❌ The Problem</div>
              <p className="text-gray-700">
                Manual paperwork, filing cabinets full of WTNs, lost documents, EA audit nightmares, driver delays
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <div className="text-orange-500 font-bold mb-2 text-lg">⏰ The Deadline</div>
              <p className="text-gray-700">
                Oct 2026 (waste sites), Oct 2027 (carriers) — mandatory digital tracking via EDOC system
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-500">
              <div className="text-emerald-500 font-bold mb-2 text-lg">✅ The Solution</div>
              <p className="text-gray-700">
                GreenLoop makes EDOC compliance painless — digital WTNs in 60 seconds, auto-submitted to DEFRA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Comply and Grow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete waste management platform built for UK operators
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: 'Digital Waste Tracking (EDOC)',
                description: 'Auto-submit to DEFRA API. Digital WTNs in 60 seconds. Full duty of care chain.',
              },
              {
                icon: Smartphone,
                title: 'Driver Mobile App',
                description: 'E-signatures, photo proof, GPS location. No paperwork. Works offline.',
              },
              {
                icon: MapPin,
                title: 'Route Optimisation',
                description: 'AI-powered routing. Save 20% on fuel costs. Reduce empty runs.',
              },
              {
                icon: Users,
                title: 'Customer Portal',
                description: 'Self-service access. Customers download WTNs instantly. Zero admin calls.',
              },
              {
                icon: Truck,
                title: 'Fleet Management',
                description: 'MOT, tax, O-licence tracking. DVSA-compliant. Automated reminders.',
              },
              {
                icon: Shield,
                title: 'Compliance Hub',
                description: 'EPR, Simpler Recycling, EA reporting. All compliance in one place.',
              },
              {
                icon: TrendingUp,
                title: 'Weighbridge Integration',
                description: 'Automated weight capture. Real-time tonnage reporting. Invoice accuracy.',
              },
              {
                icon: Clock,
                title: 'Job Scheduling',
                description: 'Drag-and-drop planning. Driver app sync. Customer notifications.',
              },
              {
                icon: BarChart3,
                title: 'Reporting & Analytics',
                description: 'Revenue tracking, waste stream analysis, compliance dashboards.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-emerald-500 transition-all group">
                <feature.icon className="w-12 h-12 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-emerald-500 font-semibold hover:gap-3 transition-all"
            >
              View All Features <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image + Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80"
                alt="Waste sorting facility with recycling equipment"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Built for the UK Waste Industry</h2>
              <p className="text-gray-300 mb-8">
                GreenLoop is designed specifically for UK waste carriers, skip hire companies, 
                scrap metal recyclers, and waste transfer stations. We understand your compliance 
                challenges because we&apos;ve built this platform with waste operators.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">EDOC Compliance Built In</div>
                    <div className="text-sm text-gray-400">Auto-submit to DEFRA. Meet Oct 2026 deadline.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Environment Agency Ready</div>
                    <div className="text-sm text-gray-400">Quarterly returns, hazardous waste consignments.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">DVSA & O-Licence Tracking</div>
                    <div className="text-sm text-gray-400">MOT, tax, driver hours compliance.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by 500+ UK Waste Carriers</h2>
            <p className="text-gray-600">From single-vehicle operators to 50+ fleet businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'GreenLoop saved us 10 hours a week on admin. The EDOC integration is flawless. We got compliant in under 2 weeks.',
                author: 'John Mitchell',
                company: 'Essex Skip Hire Ltd',
                role: 'Managing Director',
              },
              {
                quote: 'We were panicking about the Oct 2026 deadline. GreenLoop made it easy. The driver app is brilliant — our lads love it.',
                author: 'Sarah Thompson',
                company: 'Metro Waste Services',
                role: 'Operations Manager',
              },
              {
                quote: 'Best £149/month we\'ve ever spent. Cut invoice errors by 90%. Customers can download WTNs themselves. Game-changer.',
                author: 'David Patel',
                company: 'London Commercial Waste',
                role: 'Finance Director',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t pt-4 mt-4">
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-emerald-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">No hidden fees. Cancel anytime. 14-day free trial.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { plan: 'Starter', price: '£49', users: '3', jobs: '100', vehicles: '2', popular: false },
              { plan: 'Professional', price: '£149', users: '10', jobs: '500', vehicles: '5', popular: true },
              { plan: 'Business', price: '£299', users: '25', jobs: '2,000', vehicles: '15', popular: false },
              { plan: 'Enterprise', price: '£499', users: 'Unlimited', jobs: 'Unlimited', vehicles: 'Unlimited', popular: false },
            ].map((tier, idx) => (
              <div key={idx} className={`p-6 rounded-lg border-2 ${tier.popular ? 'border-emerald-500 shadow-lg relative' : 'border-gray-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                )}
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
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Driver mobile app</span>
                  </li>
                </ul>
                <Link
                  href="/login"
                  className={`block text-center py-2 rounded-lg font-semibold ${
                    tier.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-emerald-500 font-semibold hover:gap-3 transition-all"
            >
              See Full Pricing Details <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1611284446317-1a5c87861c64?w=1600&q=80"
            alt="Recycling facility"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Get EDOC-Ready?</h2>
          <p className="text-xl mb-2">Join 500+ waste carriers already using GreenLoop</p>
          <p className="text-emerald-100 mb-8">October 2026 is closer than you think. Start your compliance journey today.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-emerald-100">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
