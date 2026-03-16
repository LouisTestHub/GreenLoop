import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function EcoRecycleLtdCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80"
            alt="Materials recovery facility and recycling operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>
          <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
            MRF Operator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EcoRecycle Ltd: Weighbridge Automation Saved 2 FTE, EA Audit Passed Clean
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-white/80">
            <span>Karen Ellis, Managing Director</span>
            <span>Bristol</span>
            <span>50 staff, MRF facility</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">2 FTE</div>
              <div className="text-sm text-gray-600 mt-1">Saved via weighbridge automation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">Automated</div>
              <div className="text-sm text-gray-600 mt-1">Recycling &amp; EA reporting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">Passed</div>
              <div className="text-sm text-gray-600 mt-1">EA audit — zero findings</div>
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
                  Karen Ellis runs EcoRecycle Ltd — a Materials Recovery Facility (MRF) in Bristol processing 
                  mixed recyclables from local authority and commercial contracts. With 50 staff across sorting 
                  lines, the weighbridge, transport, and admin, the operation handles 200+ vehicle movements 
                  per day.
                </p>
                <p className="text-gray-700 mb-4">
                  The weighbridge was the critical bottleneck. Two full-time staff were dedicated to manual 
                  weighing — recording gross and tare weights on paper, matching loads to customers, classifying 
                  waste types, and generating Waste Transfer Notes. During peak hours, queues of 15+ vehicles 
                  backed up onto the public road. Data entry errors were frequent, and reconciling weighbridge 
                  records with invoicing was a weekly nightmare.
                </p>
                <p className="text-gray-700">
                  Environment Agency reporting was equally problematic. As a permitted facility, EcoRecycle 
                  must submit quarterly returns detailing exactly what came in, how much was recycled vs 
                  landfilled, contamination rates, and throughput data. Compiling these reports from paper 
                  weighbridge tickets, sorting line records, and outbound waste data took Karen&apos;s team 
                  a full week every quarter. And every time the EA audited, they found discrepancies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <ul className="space-y-3">
                  {[
                    'Automated weighbridge — GreenLoop integrates with the existing weighbridge hardware. Vehicles weigh in and out with automatic gross/tare calculation. Driver scans a QR code, waste type auto-classified, WTN generated instantly.',
                    'EDOC-compliant WTNs — every vehicle movement generates a compliant digital Waste Transfer Note. Full chain of custody from collection to processing to onward disposal.',
                    'Recycling performance tracking — real-time dashboards showing throughput, recycling rates, contamination levels, and landfill diversion. Spot problems as they happen.',
                    'Automated EA reporting — quarterly returns auto-compiled from weighbridge and processing data. One-click generation of statutory returns with full audit trail.',
                    'Customer invoicing integration — weighbridge data flows directly into invoicing. Customers billed accurately by tonnage, waste type, and agreed rates.',
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
                    { value: '2 FTE saved', label: 'Weighbridge fully automated' },
                    { value: 'Automated', label: 'EA quarterly reporting' },
                    { value: 'Passed', label: 'EA audit with zero findings' },
                    { value: '-75%', label: 'Vehicle queue times at weighbridge' },
                    { value: '100%', label: 'Waste traceability from gate to gate' },
                  ].map((r) => (
                    <div key={r.label} className="bg-emerald-600 text-white p-5 rounded-xl text-center">
                      <div className="text-2xl font-bold mb-1">{r.value}</div>
                      <div className="text-sm text-emerald-100">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-white p-6 rounded-r-xl">
                &quot;The weighbridge automation alone justified GreenLoop. We freed up two full-time staff 
                who now work on the sorting line — that&apos;s an immediate productivity gain. Vehicle queues 
                are down 75% because the whole process is automated. But the EA reporting is what lets me 
                sleep at night. Our last audit was the first time we&apos;ve ever had zero findings. The 
                auditor said our traceability data was &apos;exemplary&apos;. That&apos;s a word I never 
                expected to hear about our compliance.&quot;
                <div className="mt-3 font-semibold not-italic">— Karen Ellis, Managing Director</div>
              </blockquote>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24 space-y-6 shadow-sm">
                <h3 className="font-bold text-gray-900">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div><div className="text-gray-500">Company</div><div className="font-semibold">EcoRecycle Ltd</div></div>
                  <div><div className="text-gray-500">Director</div><div className="font-semibold">Karen Ellis</div></div>
                  <div><div className="text-gray-500">Location</div><div className="font-semibold">Bristol</div></div>
                  <div><div className="text-gray-500">Staff</div><div className="font-semibold">50</div></div>
                  <div><div className="text-gray-500">Sector</div><div className="font-semibold">MRF Operator / Recycling</div></div>
                  <div><div className="text-gray-500">Key Challenge</div><div className="font-semibold">Weighbridge bottleneck &amp; EA reporting</div></div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Get Similar Results</h4>
                  <p className="text-sm text-gray-600 mb-4">Automate your weighbridge and EA reporting with GreenLoop.</p>
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
