import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react'

export default function EssexSkipHireCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?w=1600&q=80"
            alt="Skip hire trucks"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>
          <div className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
            Skip Hire
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Essex Skip Hire: EDOC Compliant 18 Months Early, 2 Hours/Day Saved
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-white/80">
            <span>Sarah Matthews, Office Manager</span>
            <span>Chelmsford, Essex</span>
            <span>30 skip trucks</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">2 hrs/day</div>
              <div className="text-sm text-gray-600 mt-1">Admin time saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-gray-600 mt-1">Digital compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">Zero</div>
              <div className="text-sm text-gray-600 mt-1">Lost WTNs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">£0</div>
              <div className="text-sm text-gray-600 mt-1">EA penalties</div>
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
                  Essex Skip Hire operates 30 skip trucks across Essex and East London. Office manager Sarah 
                  Matthews was spending 2 hours every afternoon chasing drivers for signed Waste Transfer Notes, 
                  manually filing paper copies, and entering data into QuickBooks.
                </p>
                <p className="text-gray-700 mb-4">
                  With the EDOC (Electronic Duty of Care) deadline approaching in October 2026, the paper-based 
                  system was clearly unsustainable. An Environment Agency spot check the previous year had 
                  caught them without WTNs for 3 loads — resulting in a £2,400 penalty and a formal warning.
                </p>
                <p className="text-gray-700">
                  Drivers were the bottleneck. Paper WTNs got lost, wet, or illegible. Some drivers would 
                  return with unsigned notes, meaning Sarah had to chase customers for signatures days after 
                  the collection — a compliance nightmare.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <ul className="space-y-3">
                  {[
                    'Digital WTNs — drivers complete Waste Transfer Notes on their phone at point of collection. Customer signs on screen. Auto-filed instantly.',
                    'EDOC compliance — every waste movement recorded with carrier, origin, destination, waste type, and EWC code. Full digital audit trail.',
                    'Automated QuickBooks sync — WTN data flows into invoicing automatically. No double-entry.',
                    'Customer portal — commercial clients can download their own WTN copies and duty of care documentation 24/7.',
                    'EA audit dashboard — pull up any WTN by date, customer, driver, or waste type in seconds.',
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
                    { value: '2 hrs/day', label: 'Admin time saved (10 hrs/week)' },
                    { value: '100%', label: 'Digital compliance on every load' },
                    { value: 'Zero', label: 'Lost WTNs since switching' },
                    { value: 'EDOC ready', label: '18 months ahead of deadline' },
                    { value: '£0', label: 'EA penalties (down from £2,400)' },
                  ].map((r) => (
                    <div key={r.label} className="bg-emerald-600 text-white p-5 rounded-xl text-center">
                      <div className="text-2xl font-bold mb-1">{r.value}</div>
                      <div className="text-sm text-emerald-100">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 bg-white p-6 rounded-r-xl">
                &quot;Before GreenLoop, I was chasing drivers every afternoon for their WTNs. Half the time 
                they&apos;d lost them or they were illegible. Now everything&apos;s digital, customers can 
                download their own copies, and I&apos;ve got my afternoons back. When the EA inspector came 
                last month, I pulled up every WTN in 30 seconds. We&apos;re EDOC compliant 18 months before 
                the deadline — that gives us a massive competitive advantage.&quot;
                <div className="mt-3 font-semibold not-italic">— Sarah Matthews, Office Manager</div>
              </blockquote>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24 space-y-6 shadow-sm">
                <h3 className="font-bold text-gray-900">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div><div className="text-gray-500">Company</div><div className="font-semibold">Essex Skip Hire</div></div>
                  <div><div className="text-gray-500">Contact</div><div className="font-semibold">Sarah Matthews</div></div>
                  <div><div className="text-gray-500">Location</div><div className="font-semibold">Chelmsford, Essex</div></div>
                  <div><div className="text-gray-500">Fleet</div><div className="font-semibold">30 skip trucks</div></div>
                  <div><div className="text-gray-500">Sector</div><div className="font-semibold">Skip Hire</div></div>
                  <div><div className="text-gray-500">Key Challenge</div><div className="font-semibold">Paper WTNs &amp; EDOC compliance</div></div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Get Similar Results</h4>
                  <p className="text-sm text-gray-600 mb-4">Get EDOC-ready with GreenLoop.</p>
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
