import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    slug: 'essex-skip-hire',
    company: 'Essex Skip Hire',
    location: 'Chelmsford, Essex',
    sector: 'Skip Hire',
    tagColor: 'bg-emerald-100 text-emerald-700',
    headline: 'EDOC compliant 18 months early, 2 hours/day saved, zero lost WTNs',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?w=800&q=80',
    stats: [
      { value: '2 hrs/day', label: 'Saved' },
      { value: '100%', label: 'Compliant' },
      { value: '£0', label: 'EA penalties' },
    ],
  },
  {
    slug: 'cleansweep-waste',
    company: 'CleanSweep Waste',
    location: 'Manchester',
    sector: 'Skip Hire & Waste Collection',
    tagColor: 'bg-amber-100 text-amber-700',
    headline: 'EDOC compliant 6 months early, £800/month fuel savings, zero compliance incidents',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    stats: [
      { value: '£800/mo', label: 'Fuel saved' },
      { value: 'Zero', label: 'Incidents' },
      { value: '+18%', label: 'Collections' },
    ],
  },
  {
    slug: 'ecorecycle-ltd',
    company: 'EcoRecycle Ltd',
    location: 'Bristol',
    sector: 'MRF Operator',
    tagColor: 'bg-blue-100 text-blue-700',
    headline: 'Weighbridge automation saved 2 FTE, EA audit passed with zero findings',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    stats: [
      { value: '2 FTE', label: 'Saved' },
      { value: 'Auto', label: 'EA reports' },
      { value: 'Passed', label: 'EA audit' },
    ],
  },
]

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
            See how UK waste carriers are using GreenLoop to save time, cut costs, and stay EDOC compliant.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className={`inline-block ${study.tagColor} px-3 py-1 rounded-full text-xs font-semibold mb-2`}>
                      {study.sector}
                    </div>
                    <h2 className="text-xl font-bold">{study.company}</h2>
                    <p className="text-sm text-gray-300">{study.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4">&ldquo;{study.headline}&rdquo;</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-emerald-600">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-emerald-600 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read full story <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </Link>
            ))}
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

      {/* Key Outcomes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Outcomes We See
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">8-12 Hours/Week Saved</h3>
              <p className="text-sm text-gray-700">Less admin, fewer phone calls, no filing paperwork</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">15-20% Fuel Savings</h3>
              <p className="text-sm text-gray-700">AI route optimisation cuts miles and empty runs</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <CheckCircle2 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">100% EDOC Compliance</h3>
              <p className="text-sm text-gray-700">EDOC-ready, EA audit-proof, zero lost WTNs</p>
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
