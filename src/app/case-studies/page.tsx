import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            Real Results from Real Waste Operators
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See how UK waste carriers are using GreenLoop to save time, cut costs, and stay compliant.
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?w=800&q=80"
                alt="Skip hire trucks and containers"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Skip Hire
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Essex Skip Hire Ltd: 10 Hours/Week Saved on Admin
              </h2>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div>
                  <strong>Industry:</strong> Skip Hire
                </div>
                <div>
                  <strong>Fleet Size:</strong> 8 vehicles
                </div>
                <div>
                  <strong>Location:</strong> Essex, UK
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-2">The Challenge</h3>
                <p className="text-gray-700">
                  Essex Skip Hire was managing 300+ jobs per month using paper WTNs. Office staff 
                  spent 10+ hours weekly chasing signatures, filing paperwork, and manually entering 
                  data into QuickBooks. With EDOC looming, they knew paper wasn't sustainable.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>10 hours/week saved</strong> on admin tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Zero lost WTNs</strong> since switching to digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>EDOC-compliant</strong> 18 months ahead of deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Customer complaints down 40%</strong> (instant WTN access)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Invoice accuracy improved 95%</strong></span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 mb-6">
                "GreenLoop transformed our business. We were drowning in paperwork. Now everything is 
                digital, drivers love the app, and customers download WTNs themselves. Best £149/month 
                we've ever spent."
                <div className="mt-2 font-semibold not-italic">
                  — John Mitchell, Managing Director
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Divider */}
      <section className="py-12 bg-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-sm">Operators Trust GreenLoop</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">1M+</div>
              <div className="text-sm">Digital WTNs Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">10 hrs</div>
              <div className="text-sm">Average Admin Saved/Week</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm">EDOC Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Commercial Waste
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Metro Waste Services: EDOC-Ready in 2 Weeks
              </h2>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div>
                  <strong>Industry:</strong> Commercial Waste
                </div>
                <div>
                  <strong>Fleet Size:</strong> 15 vehicles
                </div>
                <div>
                  <strong>Location:</strong> Greater Manchester
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <h3 className="font-bold mb-2">The Challenge</h3>
                <p className="text-gray-700">
                  Metro Waste was panicking. October 2026 was approaching fast, and they had no 
                  digital WTN system. They'd tried spreadsheets and a generic CRM — neither worked 
                  for waste compliance. They needed something purpose-built, fast.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Live in 2 weeks</strong> from signup to first digital WTN</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>800+ jobs/month</strong> now fully digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Driver adoption: 100%</strong> within 1 week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Fuel costs down 18%</strong> (route optimisation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>EA audit: zero issues</strong> (full compliance)</span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
                "We were terrified about EDOC. GreenLoop made it easy. The onboarding was seamless, 
                drivers picked it up instantly, and we passed our EA audit with flying colours. 
                Can't recommend them enough."
                <div className="mt-2 font-semibold not-italic">
                  — Sarah Thompson, Operations Manager
                </div>
              </blockquote>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80"
                alt="Waste sorting and recycling facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Outcomes We See
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">8-12 Hours/Week Saved</h3>
              <p className="text-sm text-gray-700">
                Less admin, fewer phone calls, no filing paperwork
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">15-20% Fuel Savings</h3>
              <p className="text-sm text-gray-700">
                AI route optimisation cuts miles and empty runs
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <CheckCircle2 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">100% Compliance</h3>
              <p className="text-sm text-gray-700">
                EDOC-ready, EA audit-proof, zero lost WTNs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Similar Results?</h2>
          <p className="text-xl mb-8">Join 500+ waste operators already using GreenLoop.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-emerald-100">14-day free trial • No credit card required</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
