import Link from 'next/link'
import { CheckCircle2, ArrowRight, Shield, FileText, BarChart3, Receipt, Users, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Portal — GreenLoop Waste Management Platform',
  description: 'Give your customers self-service access to collections, invoices, WTNs, and recycling reports. Zero phone calls, zero admin.',
}

export default function CustomerPortalMarketingPage() {
  return (
    <div className="min-h-screen">
      <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/edoc" className="hover:text-emerald-400">EDOC 2026</Link>
            <Link href="/pricing" className="hover:text-emerald-400">Pricing</Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Customer Portal</h1>
            <p className="text-xl text-gray-300 mb-8">
              Give your customers 24/7 self-service access to their waste data. 
              Collections, invoices, WTNs, recycling reports — all in one place.
            </p>
            <div className="flex gap-4">
              <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portal-login" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Portal Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything Your Customers Need</h2>
            <p className="text-gray-600">Reduce admin calls by 80%. Improve customer satisfaction. Win more contracts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Collection Schedule', desc: 'Customers see upcoming and past collections with real-time status updates.' },
              { icon: Receipt, title: 'Invoice Management', desc: 'View, download, and track invoice payments. No more chasing PDFs by email.' },
              { icon: Shield, title: 'WTN Access', desc: 'Instant access to all Waste Transfer Notes. Downloadable PDFs for compliance audits.' },
              { icon: BarChart3, title: 'Recycling Reports', desc: 'Interactive recycling rate reports and waste stream breakdowns for ESG reporting.' },
              { icon: Users, title: 'Multi-User Access', desc: 'Customers can invite their own team members with controlled permissions.' },
              { icon: Clock, title: '24/7 Self-Service', desc: 'No waiting for office hours. Everything available instantly, any time.' },
            ].map((f, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <f.icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">80%</div>
              <div className="text-gray-600">Fewer admin phone calls</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">24/7</div>
              <div className="text-gray-600">Self-service access</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">5 min</div>
              <div className="text-gray-600">Setup per customer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Give Your Customers the Portal They Deserve</h2>
          <p className="text-xl mb-8">Included in Professional plans and above. Start your free trial today.</p>
          <Link href="/login" className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
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
