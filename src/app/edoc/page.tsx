import Link from 'next/link'
import { CountdownWidget } from '@/components/countdown-widget'
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileText,
  Smartphone,
  Upload,
  BarChart3,
  ChevronDown,
  Scale,
  Clock,
  Building2,
} from 'lucide-react'

const faqs = [
  {
    q: 'What is EDOC (Electronic Duty of Care)?',
    a: 'EDOC is the UK Government\'s mandatory digital waste tracking system. It replaces paper-based Waste Transfer Notes (WTNs) and Section 34 Duty of Care documentation with a fully digital, API-connected system managed through DEFRA.',
  },
  {
    q: 'When does EDOC become mandatory?',
    a: 'EDOC is mandatory from 1 October 2026 for waste sites (permitted facilities, transfer stations, landfills) and from 1 October 2027 for waste carriers and brokers. However, early adoption is strongly recommended.',
  },
  {
    q: 'Who needs to comply with EDOC?',
    a: 'All registered waste carriers, brokers, dealers, and permitted waste sites in England must comply. This includes skip hire companies, commercial waste collectors, scrap metal dealers, and recycling facilities.',
  },
  {
    q: 'What are the penalties for non-compliance?',
    a: 'Non-compliance can result in Fixed Penalty Notices (FPNs) of up to £300, prosecution with unlimited fines, suspension or revocation of your waste carrier licence, and enforcement action from the Environment Agency.',
  },
  {
    q: 'Do I need to change my current waste management software?',
    a: 'If your current system doesn\'t support DEFRA API integration for digital waste tracking, yes. GreenLoop is built from the ground up to be EDOC-compliant, so switching now means you\'re ready well before the deadline.',
  },
  {
    q: 'How long does it take to set up GreenLoop for EDOC compliance?',
    a: 'Most companies are fully set up within 2 weeks. This includes data migration, staff training, and testing. Our onboarding team handles the heavy lifting.',
  },
  {
    q: 'Will paper WTNs still be accepted after October 2026?',
    a: 'No. After the mandatory date, all waste transfers must be recorded digitally through the EDOC system. Paper WTNs will no longer be legally valid for new transfers.',
  },
  {
    q: 'What data do I need to submit through EDOC?',
    a: 'EDOC requires waste producer details, carrier information, waste description (EWC codes), quantities, collection/transfer dates, receiving facility details, and digital signatures from all parties.',
  },
  {
    q: 'Does GreenLoop work on mobile devices?',
    a: 'Yes. GreenLoop\'s driver app works on any smartphone or tablet. Drivers can complete digital WTNs, capture signatures, take photos, and submit everything in real-time — even with patchy signal.',
  },
  {
    q: 'How much does EDOC compliance with GreenLoop cost?',
    a: 'EDOC compliance is included in all GreenLoop plans, starting from £49/month. There are no additional charges for EDOC features, API submissions, or digital WTN generation.',
  },
  {
    q: 'What happens to my existing paper records?',
    a: 'You must retain existing paper records for at least 2 years (3 years for hazardous waste). GreenLoop can help digitise historical records during onboarding for a complete audit trail.',
  },
  {
    q: 'Can I try GreenLoop before committing?',
    a: 'Absolutely. We offer a 14-day free trial with full EDOC features enabled. No credit card required. You can also request a personalised demo from our team.',
  },
]

export default function EdocPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/edoc" className="text-emerald-400 font-semibold">EDOC 2026</Link>
            <Link href="/edoc-checker" className="hover:text-emerald-400">Free Checker</Link>
            <Link href="/edoc-guide" className="hover:text-emerald-400">EDOC Guide</Link>
            <Link href="/pricing" className="hover:text-emerald-400">Pricing</Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                <AlertTriangle className="w-4 h-4" /> Mandatory from October 2026
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                EDOC Is Coming.<br />
                <span className="text-emerald-400">Are You Ready?</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Electronic Duty of Care (EDOC) makes digital waste tracking mandatory for every UK waste carrier. 
                Non-compliance means fines, prosecution, and losing your licence.
              </p>
              <div className="flex gap-4">
                <Link href="/edoc-checker" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  Check Your Compliance <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/login" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <CountdownWidget targetDate="2026-10-01" label="EDOC Mandatory Compliance Deadline" />
            </div>
          </div>
        </div>
      </section>

      {/* What is EDOC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What is EDOC?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              EDOC (Electronic Duty of Care) is the UK Government&apos;s new mandatory digital waste tracking system, 
              replacing paper Waste Transfer Notes with real-time digital records submitted to DEFRA.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Digital WTNs</h3>
              <p className="text-gray-600">All waste transfers must be recorded digitally with EWC codes, quantities, and parties involved.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">API Submission</h3>
              <p className="text-gray-600">Records must be submitted electronically to DEFRA&apos;s central system via approved software.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Full Traceability</h3>
              <p className="text-gray-600">End-to-end tracking from waste producer to final destination with digital signatures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-900">The Cost of Non-Compliance</h2>
            <p className="text-red-700 max-w-2xl mx-auto">
              The Environment Agency is serious about EDOC enforcement. Here&apos;s what&apos;s at stake:
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Scale, title: '£300 FPN', desc: 'Fixed Penalty Notice per offence' },
              { icon: AlertTriangle, title: 'Unlimited Fines', desc: 'Criminal prosecution for repeat offenders' },
              { icon: FileText, title: 'Licence Revocation', desc: 'Loss of waste carrier registration' },
              { icon: Building2, title: 'Business Closure', desc: 'Inability to legally operate' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <item.icon className="w-10 h-10 text-red-500 mb-3" />
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How GreenLoop Makes You EDOC Compliant</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Five simple steps to full compliance — we handle the hard part.</p>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                step: 1,
                title: 'Sign Up & Import Your Data',
                desc: 'Create your account, import customers, vehicles, and waste streams. Our onboarding team migrates your existing records.',
                icon: Upload,
              },
              {
                step: 2,
                title: 'Configure Your Waste Streams & EWC Codes',
                desc: 'Set up your waste categories with proper EWC codes. GreenLoop includes the complete EWC directory with smart search.',
                icon: FileText,
              },
              {
                step: 3,
                title: 'Issue Digital WTNs from Day One',
                desc: 'Create compliant digital Waste Transfer Notes in under 60 seconds. Auto-populate producer, carrier, and receiver details.',
                icon: Smartphone,
              },
              {
                step: 4,
                title: 'Capture Digital Signatures & Evidence',
                desc: 'Drivers capture e-signatures on-site, take photos of waste loads, and record GPS coordinates — all from the mobile app.',
                icon: CheckCircle2,
              },
              {
                step: 5,
                title: 'Auto-Submit to DEFRA via API',
                desc: 'GreenLoop automatically submits your waste records to DEFRA\'s EDOC system. Real-time confirmation and audit trail included.',
                icon: BarChart3,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">EDOC Timeline</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { date: 'Now', title: 'Voluntary Early Adoption', desc: 'Start using digital waste tracking today. Get ahead of the curve.', active: true },
              { date: 'Q1 2026', title: 'DEFRA API Testing Opens', desc: 'Software providers begin live testing with the central system.' },
              { date: '1 Oct 2026', title: 'Mandatory for Waste Sites', desc: 'All permitted waste sites must use EDOC. Paper WTNs no longer valid for sites.', critical: true },
              { date: '1 Oct 2027', title: 'Mandatory for Carriers', desc: 'All waste carriers and brokers must use EDOC. Full enforcement begins.' },
            ].map((item, idx) => (
              <div key={idx} className={`flex gap-4 p-6 rounded-lg ${item.critical ? 'bg-red-50 border-2 border-red-300' : item.active ? 'bg-emerald-50 border-2 border-emerald-300' : 'bg-white border border-gray-200'}`}>
                <div className={`font-bold text-sm whitespace-nowrap ${item.critical ? 'text-red-600' : item.active ? 'text-emerald-600' : 'text-gray-500'}`}>
                  {item.date}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">EDOC FAQs</h2>
            <p className="text-gray-600">Everything you need to know about EDOC compliance.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold hover:bg-gray-50">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t Wait Until It&apos;s Too Late</h2>
          <p className="text-xl mb-8">Get EDOC-ready today. Join 300+ UK waste carriers already using GreenLoop.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/edoc-checker" className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Free Compliance Check <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2026 GreenLoop by Data & Digital. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
