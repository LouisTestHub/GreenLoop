import Link from 'next/link'
import { CountdownWidget } from '@/components/countdown-widget'
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete EDOC Compliance Guide 2026 | Electronic Duty of Care | GreenLoop',
  description: 'The definitive guide to EDOC (Electronic Duty of Care) compliance for UK waste carriers. Everything you need to know about the October 2026 mandatory digital waste tracking deadline.',
}

export default function EdocGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/edoc" className="hover:text-emerald-400">EDOC 2026</Link>
            <Link href="/edoc-checker" className="hover:text-emerald-400">Free Checker</Link>
            <Link href="/edoc-guide" className="text-emerald-400 font-semibold">EDOC Guide</Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> Complete Guide — Updated March 2026
          </div>
          <h1 className="text-5xl font-bold mb-6">The Complete Guide to EDOC Compliance</h1>
          <p className="text-xl text-gray-300 mb-8">
            Everything UK waste carriers need to know about Electronic Duty of Care — 
            from legislation and deadlines to practical implementation steps.
          </p>
          <CountdownWidget targetDate="2026-10-01" />
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-bold mb-4">Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              '1. What is EDOC?',
              '2. The Legal Framework',
              '3. Who Must Comply?',
              '4. Key Deadlines',
              '5. What Data Must Be Recorded?',
              '6. Technical Requirements',
              '7. Implementation Checklist',
              '8. Common Challenges & Solutions',
              '9. Penalties for Non-Compliance',
              '10. How GreenLoop Helps',
            ].map((item, idx) => (
              <a key={idx} href={`#section-${idx + 1}`} className="text-emerald-600 hover:text-emerald-700 hover:underline py-1">
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-gray">
          <section id="section-1" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">1. What is EDOC?</h2>
            <p className="text-gray-700 mb-4">
              EDOC stands for <strong>Electronic Duty of Care</strong> — the UK Government&apos;s initiative to digitise 
              waste tracking across England. Announced as part of the Environment Act 2021 and subsequently detailed in 
              DEFRA&apos;s Resources and Waste Strategy, EDOC replaces the longstanding paper-based Waste Transfer Note 
              (WTN) system with a fully digital, centrally-managed tracking platform.
            </p>
            <p className="text-gray-700 mb-4">
              Under EDOC, every waste movement — from production to final disposal or recovery — must be recorded 
              digitally and submitted to DEFRA&apos;s central waste tracking service. This creates an unbroken chain 
              of custody for all controlled waste in England, dramatically improving transparency, accountability, 
              and environmental protection.
            </p>
            <p className="text-gray-700 mb-4">
              The system is designed to combat waste crime (estimated to cost the UK economy £1 billion annually), 
              reduce administrative burden on legitimate operators, and provide regulators with real-time visibility 
              of waste movements across the country.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-800 font-semibold mb-1">Key Point</p>
              <p className="text-blue-700 text-sm">
                EDOC is not optional. It is a legal requirement that will be enforced by the Environment Agency. 
                Failure to comply will result in penalties, prosecution, and potential loss of your waste carrier licence.
              </p>
            </div>
          </section>

          <section id="section-2" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">2. The Legal Framework</h2>
            <p className="text-gray-700 mb-4">
              EDOC compliance is underpinned by several pieces of legislation:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Environment Act 2021</strong> — Provides the primary legal basis for mandatory digital waste tracking in England.</li>
              <li><strong>Environmental Protection Act 1990, Section 34</strong> — Establishes the Duty of Care for waste, which EDOC digitalises.</li>
              <li><strong>Waste (England and Wales) Regulations 2011</strong> — Sets out the requirements for Waste Transfer Notes and waste carrier registration.</li>
              <li><strong>Controlled Waste Regulations 2012</strong> — Defines what constitutes controlled waste subject to Duty of Care requirements.</li>
              <li><strong>Hazardous Waste Regulations 2005</strong> — Additional requirements for hazardous waste consignment notes, also being digitised under EDOC.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              DEFRA has published detailed technical specifications for the EDOC API and data standards. Software 
              providers like GreenLoop must meet these specifications to be approved for electronic submission.
            </p>
          </section>

          <section id="section-3" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">3. Who Must Comply?</h2>
            <p className="text-gray-700 mb-4">
              EDOC applies to everyone in the waste management chain in England:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { title: 'Waste Producers', desc: 'Any business or organisation producing controlled waste' },
                { title: 'Waste Carriers', desc: 'Registered waste carriers (upper and lower tier)' },
                { title: 'Waste Brokers & Dealers', desc: 'Those who arrange waste transfer without handling it' },
                { title: 'Permitted Waste Sites', desc: 'Transfer stations, MRFs, landfills, incinerators' },
                { title: 'Skip Hire Companies', desc: 'Operating as waste carriers with skip/container services' },
                { title: 'Scrap Metal Dealers', desc: 'Licensed scrap metal dealers and motor salvage operators' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
              <p className="text-orange-800 font-semibold mb-1">Important</p>
              <p className="text-orange-700 text-sm">
                Even small operators with a single vehicle must comply. There are no exemptions based on company size. 
                Household waste collections by local authorities are also included.
              </p>
            </div>
          </section>

          <section id="section-4" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">4. Key Deadlines</h2>
            <div className="space-y-4 my-6">
              <div className="bg-emerald-50 border-2 border-emerald-300 p-6 rounded-lg">
                <div className="font-bold text-emerald-800">Now — Early 2026</div>
                <div className="text-emerald-700">Voluntary adoption period. Adopt digital waste tracking now to get ahead.</div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
                <div className="font-bold text-blue-800">Q1-Q2 2026</div>
                <div className="text-blue-700">DEFRA API sandbox testing. Software providers validate integrations.</div>
              </div>
              <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                <div className="font-bold text-red-800">1 October 2026 — PHASE 1</div>
                <div className="text-red-700">Mandatory for all permitted waste sites (transfer stations, MRFs, landfills, etc.). Paper WTNs no longer accepted at compliant sites.</div>
              </div>
              <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                <div className="font-bold text-red-800">1 October 2027 — PHASE 2</div>
                <div className="text-red-700">Mandatory for all waste carriers, brokers, and dealers. Full enforcement across the entire waste chain.</div>
              </div>
            </div>
          </section>

          <section id="section-5" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">5. What Data Must Be Recorded?</h2>
            <p className="text-gray-700 mb-4">
              Each digital waste transfer record must include:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-bold mb-3">Waste Producer Information</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Business name and registered address</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> SIC code (Standard Industrial Classification)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Contact name and details</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Site address where waste was produced</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-bold mb-3">Waste Description</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> EWC (European Waste Catalogue) code</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Written description of waste</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Quantity (weight or volume)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Container type and number</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Whether waste is hazardous</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-bold mb-3">Carrier & Transfer Information</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Carrier name, address, and registration number</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Vehicle registration used</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Date and time of collection</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> GPS coordinates of collection point</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Digital signatures from all parties</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-bold mb-3">Receiving Facility</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Facility name and address</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Environmental permit number</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> Acceptance confirmation and date</li>
              </ul>
            </div>
          </section>

          <section id="section-6" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">6. Technical Requirements</h2>
            <p className="text-gray-700 mb-4">
              To comply with EDOC, your waste management software must:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>API Integration</strong> — Connect to DEFRA&apos;s central waste tracking API for real-time data submission.</li>
              <li><strong>Data Validation</strong> — Validate EWC codes, permit numbers, and carrier registrations against DEFRA&apos;s reference data.</li>
              <li><strong>Digital Signatures</strong> — Capture legally-binding electronic signatures from waste producers, carriers, and receivers.</li>
              <li><strong>Offline Capability</strong> — Function in areas with poor mobile signal, syncing data when connectivity returns.</li>
              <li><strong>Audit Trail</strong> — Maintain a tamper-proof log of all waste records, amendments, and submissions.</li>
              <li><strong>Data Retention</strong> — Store records for a minimum of 2 years (3 years for hazardous waste).</li>
              <li><strong>Security</strong> — Implement appropriate data security measures including encryption and access controls.</li>
            </ul>
          </section>

          <section id="section-7" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">7. Implementation Checklist</h2>
            <p className="text-gray-700 mb-4">
              Use this checklist to plan your EDOC implementation:
            </p>
            <div className="space-y-3 my-6">
              {[
                'Audit current waste documentation processes',
                'Identify all waste streams and map to EWC codes',
                'Choose EDOC-compliant software (e.g., GreenLoop)',
                'Migrate customer, vehicle, and waste stream data',
                'Set up digital WTN templates with auto-populated fields',
                'Deploy mobile app to all drivers and field staff',
                'Train staff on digital waste tracking workflows',
                'Configure API connection to DEFRA sandbox for testing',
                'Run parallel testing (paper + digital) for 4-6 weeks',
                'Switch to fully digital WTNs before the mandatory date',
                'Set up compliance monitoring and alert system',
                'Document procedures and create staff reference guides',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="section-8" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">8. Common Challenges & Solutions</h2>
            <div className="space-y-6">
              {[
                {
                  challenge: 'Driver resistance to new technology',
                  solution: 'Choose intuitive software with minimal training required. GreenLoop\'s driver app is designed for non-technical users — most drivers are proficient within a single day.',
                },
                {
                  challenge: 'Poor mobile signal at rural collection sites',
                  solution: 'Use software with offline capability. GreenLoop works offline and automatically syncs when signal returns — no data is ever lost.',
                },
                {
                  challenge: 'Migrating years of paper records',
                  solution: 'Focus on migrating active customers and recent records first. Historical paper records can be retained as-is — only new transfers need to be digital.',
                },
                {
                  challenge: 'Cost of implementation',
                  solution: 'EDOC-compliant software typically saves money by reducing admin time by 10+ hours per week. ROI is usually achieved within the first month.',
                },
                {
                  challenge: 'Getting customers to sign digitally',
                  solution: 'Most customers prefer digital signatures once they try it. The convenience of instant WTN delivery via email is a strong selling point.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-red-50 px-6 py-3">
                    <h4 className="font-bold text-red-800">Challenge: {item.challenge}</h4>
                  </div>
                  <div className="bg-emerald-50 px-6 py-3">
                    <h4 className="font-bold text-emerald-800">Solution: {item.solution}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="section-9" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">9. Penalties for Non-Compliance</h2>
            <p className="text-gray-700 mb-4">
              The Environment Agency has confirmed the following enforcement approach for EDOC non-compliance:
            </p>
            <div className="bg-red-50 p-6 rounded-lg my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <span className="font-bold text-red-700 w-32 flex-shrink-0">First Offence:</span>
                <span className="text-red-700">Advisory notice with 28-day compliance window</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-red-700 w-32 flex-shrink-0">Repeat Offence:</span>
                <span className="text-red-700">Fixed Penalty Notice of up to £300 per offence</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-red-700 w-32 flex-shrink-0">Persistent:</span>
                <span className="text-red-700">Criminal prosecution with unlimited fines</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-red-700 w-32 flex-shrink-0">Severe:</span>
                <span className="text-red-700">Suspension or revocation of waste carrier registration</span>
              </div>
            </div>
            <p className="text-gray-700">
              Beyond formal penalties, non-compliance can also result in loss of contracts with local authorities 
              and commercial customers who require compliant waste carriers, reputational damage, and increased 
              scrutiny from regulators.
            </p>
          </section>

          <section id="section-10" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">10. How GreenLoop Makes EDOC Simple</h2>
            <p className="text-gray-700 mb-4">
              GreenLoop is built from the ground up to make EDOC compliance effortless:
            </p>
            <div className="space-y-4 my-6">
              {[
                { title: 'One-Click Digital WTNs', desc: 'Create EDOC-compliant Waste Transfer Notes in under 60 seconds with auto-populated fields.' },
                { title: 'DEFRA API Integration', desc: 'Automatic submission to DEFRA\'s central waste tracking system with real-time confirmation.' },
                { title: 'Driver Mobile App', desc: 'Purpose-built app for waste collection — signatures, photos, GPS, and offline capability.' },
                { title: 'EWC Code Library', desc: 'Complete European Waste Catalogue with smart search. Never enter the wrong code again.' },
                { title: 'Compliance Dashboard', desc: 'Real-time view of your compliance status, upcoming renewals, and audit readiness.' },
                { title: 'Instant Audit Reports', desc: 'Generate complete audit trails in seconds. Be ready for any EA inspection.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get EDOC-Compliant?</h2>
          <p className="text-xl mb-8">Start your free trial today and be ready months before the deadline.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/edoc-checker" className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Check Your Compliance <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2026 GreenLoop by Data & Digital. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
