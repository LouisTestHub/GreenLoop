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

      {/* Case Study 1: Essex Skip Hire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?w=800&q=80"
                alt="Skip hire trucks at depot"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Skip Hire
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Essex Skip Hire: 100% Digital Compliance, 2 Hours/Day Saved
              </h2>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div>
                  <strong>Industry:</strong> Skip Hire
                </div>
                <div>
                  <strong>Fleet Size:</strong> 30 vehicles
                </div>
                <div>
                  <strong>Location:</strong> Chelmsford, Essex
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-2">The Challenge</h3>
                <p className="text-gray-700">
                  Essex Skip Hire was running 30 skip trucks with paper Waste Transfer Notes. Office manager 
                  Sarah spent 2 hours every day chasing drivers for signed WTNs, manually filing them, and 
                  entering data into QuickBooks. With the EDOC deadline approaching (October 2026), they knew 
                  paper wasn&apos;t sustainable. During an Environment Agency spot check, they couldn&apos;t produce 
                  WTNs for 3 loads from the previous month — £2,400 penalty.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>2 hours/day saved</strong> on admin tasks (10 hours/week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>100% digital compliance</strong> — every WTN captured, signed, and stored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Zero lost WTNs</strong> since switching to GreenLoop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>EDOC-ready</strong> 18 months ahead of the October 2026 deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>£0 in EA penalties</strong> (down from £2,400 in previous year)</span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 mb-6">
                &quot;Before GreenLoop, I was chasing drivers every afternoon for their WTNs. Half the time 
                they&apos;d lost them or they were illegible. Now everything&apos;s digital, customers can 
                download their own copies, and I&apos;ve got my afternoons back. When the EA inspector came 
                last month, I pulled up every WTN in 30 seconds. Game changer.&quot;
                <div className="mt-2 font-semibold not-italic">
                  — Sarah Matthews, Office Manager
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

      {/* Case Study 2: Metro Waste Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Commercial Waste
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Metro Waste Services: 23% Fuel Reduction, 15% More Collections
              </h2>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div>
                  <strong>Industry:</strong> Commercial Waste Collection
                </div>
                <div>
                  <strong>Fleet Size:</strong> 45 vehicles
                </div>
                <div>
                  <strong>Location:</strong> Leeds, West Yorkshire
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <h3 className="font-bold mb-2">The Challenge</h3>
                <p className="text-gray-700">
                  Metro Waste was running 45 commercial waste collection vehicles with inefficient routing. 
                  Drivers planned their own routes, often doubling back across Leeds. Fuel costs were £18k/month 
                  and climbing. They had no real-time visibility into where trucks were or which collections were 
                  complete. EDOC compliance was a nightmare — they were still using paper WTNs and had no plan 
                  for going digital before the October 2026 deadline.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>23% fuel cost reduction</strong> — from £18k/month to £13.8k/month (£50k annual saving)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>15% more collections per day</strong> with the same fleet (route optimisation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>100% EDOC compliance</strong> — digital WTNs across all 45 vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Real-time fleet visibility</strong> — live map showing every truck and job status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span><strong>EA audit: zero issues</strong> — full digital audit trail passed inspection</span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
                &quot;The route optimisation alone paid for GreenLoop in the first 3 months. We&apos;re doing 
                15% more collections with the same number of trucks, fuel costs are down £4k/month, and we 
                passed our EA audit without a single issue. The live map means I can answer customer queries 
                in real-time instead of calling drivers. Absolute game-changer.&quot;
                <div className="mt-2 font-semibold not-italic">
                  — James O&apos;Brien, Operations Director
                </div>
              </blockquote>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80"
                alt="Commercial waste collection trucks and recycling facility"
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
