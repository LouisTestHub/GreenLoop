import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function CleanSweepWasteCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80"
            alt="Skip hire and waste management operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>
          <div className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
            Skip Hire &amp; Waste Collection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CleanSweep Waste: EDOC Compliant 6 Months Early, £800/Month Fuel Savings
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-white/80">
            <span>Mike Brennan, Operations Director</span>
            <span>Manchester</span>
            <span>30 skips, 5 drivers</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">6 months</div>
              <div className="text-sm text-gray-600 mt-1">EDOC compliant early</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">£800/month</div>
              <div className="text-sm text-gray-600 mt-1">Fuel savings from route optimisation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">Zero</div>
              <div className="text-sm text-gray-600 mt-1">Compliance incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-700 mb-4">
                  Mike Brennan runs CleanSweep Waste — a Manchester skip hire and waste collection operation 
                  with 30 skips and 5 drivers covering Greater Manchester and parts of Lancashire. The business 
                  had grown steadily through word of mouth, but operationally it was held together with duct 
                  tape and WhatsApp.
                </p>
                <p className="text-gray-700 mb-4">
                  Routes were planned by drivers themselves — often inefficiently, with trucks doubling back 
                  across Manchester. Fuel costs had hit £3,200/month and were climbing. Nobody knew where 
                  trucks were at any given time, and customers calling for ETAs got vague answers.
                </p>
                <p className="text-gray-700">
                  The EDOC deadline was the wake-up call. Mike knew paper WTNs weren&apos;t going to cut it 
                  after October 2026, but he also knew that a piecemeal approach — one tool for routes, 
                  another for compliance, another for invoicing — would create more problems. He needed an 
                  all-in-one platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <ul className="space-y-3">
                  {[
                    'Route optimisation — AI-powered route planning considering skip locations, drop-off sites, and tipping facilities. Drivers get optimised daily routes on their phone.',
                    'Digital WTNs with EDOC compliance — every skip collection and delivery generates a compliant digital Waste Transfer Note with full chain of custody.',
                    'GPS tracking — live fleet map showing every truck. Customer service can give accurate ETAs. Geofence alerts at tipping sites.',
                    'Automated invoicing — WTN completion triggers invoicing. No more chasing drivers for paperwork before billing.',
                    'Skip inventory management — real-time view of which skips are on-site, which are full, and which need collecting. Maximise skip utilisation.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Results</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { value: 'EDOC ready', label: '6 months ahead of Oct 2026 deadline' },
                    { value: '£800/month', label: 'Fuel savings from route optimisation' },
                    { value: 'Zero', label: 'Compliance incidents since go-live' },
                    { value: '+18%', label: 'More collections per day (same fleet)' },
                    { value: '100%', label: 'Skip utilisation visibility' },
                  ].map((r) => (
                    <div key={r.label} className="bg-emerald-600 text-white p-5 rounded-xl text-center">
                      <div className="text-2xl font-bold mb-1">{r.value}</div>
                      <div className="text-sm text-emerald-100">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-white p-6 rounded-r-xl">
                &quot;The route optimisation paid for GreenLoop in the first month. We&apos;re saving £800/month 
                on fuel — drivers are doing more collections with less mileage. But the real win is EDOC compliance. 
                We&apos;re ready 6 months early. Competitors are still on paper WTNs. When October 2026 hits, 
                we&apos;ll be the ones winning contracts because we can prove compliance from day one. Zero 
                incidents since we switched — that&apos;s the stat I care about most.&quot;
                <div className="mt-3 font-semibold not-italic">— Mike Brennan, Operations Director</div>
              </blockquote>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24 space-y-6 shadow-sm">
                <h3 className="font-bold text-gray-900">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div><div className="text-gray-500">Company</div><div className="font-semibold">CleanSweep Waste Ltd</div></div>
                  <div><div className="text-gray-500">Director</div><div className="font-semibold">Mike Brennan</div></div>
                  <div><div className="text-gray-500">Location</div><div className="font-semibold">Manchester</div></div>
                  <div><div className="text-gray-500">Fleet</div><div className="font-semibold">30 skips, 5 drivers</div></div>
                  <div><div className="text-gray-500">Sector</div><div className="font-semibold">Skip Hire &amp; Waste</div></div>
                  <div><div className="text-gray-500">Key Challenge</div><div className="font-semibold">EDOC compliance &amp; route efficiency</div></div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Get Similar Results</h4>
                  <p className="text-sm text-gray-600 mb-4">Get EDOC-ready and cut fuel costs with GreenLoop.</p>
                  <Link href="/login" className="block bg-emerald-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
