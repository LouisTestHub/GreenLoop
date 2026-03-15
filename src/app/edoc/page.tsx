import Link from 'next/link'
import Image from 'next/image'
import { CountdownWidget } from '@/components/countdown-widget'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, CheckCircle2, AlertTriangle, FileCheck, Shield } from 'lucide-react'

export default function EDOCPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80"
            alt="Waste management"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚠️ MANDATORY OCTOBER 2026
          </div>
          <h1 className="text-5xl font-bold mb-6">
            EDOC: Electronic Duty of Care
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Digital waste tracking becomes mandatory in October 2026 for waste sites and October 2027 for carriers. 
            Are you ready?
          </p>
          <CountdownWidget targetDate="2026-10-01" label="EDOC Mandatory for Waste Sites" />
        </div>
      </section>

      {/* What is EDOC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">What is EDOC?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>EDOC (Electronic Duty of Care)</strong> is the UK government&apos;s digital waste tracking system. 
              It requires all waste producers, carriers, and sites to record waste movements electronically and submit 
              data to DEFRA via a central API.
            </p>
            <p>
              Paper Waste Transfer Notes (WTNs) will no longer be acceptable for compliance. All waste movements must 
              be recorded digitally and submitted to the EDOC system.
            </p>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Dates You Need to Know</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-500">
              <div className="text-orange-500 font-bold text-2xl mb-2">October 2026</div>
              <h3 className="font-bold text-lg mb-2">Waste Sites Go Live</h3>
              <p className="text-gray-700">
                All permitted waste sites, transfer stations, and treatment facilities must use EDOC to receive waste. 
                Paper WTNs will no longer be accepted.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <div className="text-red-500 font-bold text-2xl mb-2">October 2027</div>
              <h3 className="font-bold text-lg mb-2">Waste Carriers Go Live</h3>
              <p className="text-gray-700">
                All registered waste carriers must use EDOC. Paper WTNs will be phased out completely. 
                Non-compliance = penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need to Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">What You Need to Do</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1611284446317-1a5c87861c64?w=800&q=80"
                alt="Digital compliance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Register with DEFRA</h3>
                    <p className="text-gray-600">
                      All waste businesses must register on the EDOC portal (gov.uk). GreenLoop can help with this.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Use EDOC-Compliant Software</h3>
                    <p className="text-gray-600">
                      You need software that can create digital WTNs and submit them to DEFRA&apos;s API. 
                      GreenLoop is fully EDOC-ready.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Train Your Team</h3>
                    <p className="text-gray-600">
                      Drivers, office staff, and managers need to understand the new digital workflow. 
                      GreenLoop provides full training.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Go Live Before Deadline</h3>
                    <p className="text-gray-600">
                      Don't wait until the last minute. Test your system, iron out any issues, and be confident 
                      you're compliant well ahead of October 2026.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Penalties for Non-Compliance</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold flex-shrink-0">❌</span>
                <span><strong>£300 Fixed Penalty Notice</strong> for failing to produce digital WTNs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold flex-shrink-0">❌</span>
                <span><strong>Prosecution</strong> by the Environment Agency for repeated non-compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold flex-shrink-0">❌</span>
                <span><strong>Loss of waste carrier licence</strong> in severe cases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold flex-shrink-0">❌</span>
                <span><strong>Reputational damage</strong> — customers and sites won't work with non-compliant carriers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How GreenLoop Helps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How GreenLoop Makes EDOC Compliance Easy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <FileCheck className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Auto-Submit to DEFRA</h3>
              <p className="text-sm text-gray-700">
                Every digital WTN is automatically submitted to the EDOC system. No manual uploads. No missed submissions.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <Shield className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Full Compliance Guarantee</h3>
              <p className="text-sm text-gray-700">
                We track all regulatory changes and update the platform automatically. You're always compliant.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Driver-Friendly Mobile App</h3>
              <p className="text-sm text-gray-700">
                Drivers capture signatures, photos, and GPS location on-site. WTNs are generated in 60 seconds.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-center">What&apos;s Included:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Digital WTN creation (EDOC-compliant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Auto-submit to DEFRA API</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>E-signatures (driver + customer)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Photo proof + GPS location</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>EWC code library + search</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Hazardous waste consignments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Duty of care chain tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>EA quarterly returns (auto-generated)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            EDOC FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do I need to register on the DEFRA EDOC portal?',
                a: 'Yes. All waste businesses must register. GreenLoop can guide you through the process, but registration is done directly with DEFRA.',
              },
              {
                q: 'Can I still use paper WTNs after October 2026?',
                a: 'No. Paper WTNs will not be accepted for compliance. You must use digital WTNs submitted via EDOC.',
              },
              {
                q: 'What if my customers don\'t want to sign digitally?',
                a: 'EDOC is mandatory — they have no choice. Most customers prefer digital once they see how easy it is (instant WTN access, no lost paperwork).',
              },
              {
                q: 'Does GreenLoop integrate with the DEFRA API?',
                a: 'Yes. GreenLoop is fully EDOC-compliant and auto-submits all waste movements to the DEFRA API.',
              },
              {
                q: 'What happens if I miss the deadline?',
                a: '£300 FPN per offence, potential prosecution, and loss of waste carrier licence. Don\'t risk it — start now.',
              },
              {
                q: 'How long does it take to get EDOC-ready with GreenLoop?',
                a: 'Most operators are live within 1-2 weeks. We provide training, onboarding support, and DEFRA registration guidance.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Don't Wait Until the Last Minute</h2>
          <p className="text-xl mb-2">Get EDOC-ready today. Start your 14-day free trial.</p>
          <p className="text-emerald-100 mb-8">Join 500+ waste operators already compliant with GreenLoop.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-emerald-100">No credit card required • Full EDOC compliance in 1-2 weeks</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
