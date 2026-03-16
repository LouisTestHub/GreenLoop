import Link from 'next/link'
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — GreenLoop Waste Management Platform',
  description: 'Simple, transparent pricing for UK waste carriers. EDOC compliance included in every plan. Start your 14-day free trial.',
}

const tiers = [
  {
    plan: 'Starter',
    price: '£49',
    desc: 'For small operators getting started with digital waste tracking.',
    users: '3',
    jobs: '100',
    vehicles: '2',
    features: [
      'Digital WTNs',
      'EDOC compliance',
      'Driver mobile app',
      'Basic reporting',
      'Email support',
    ],
    highlighted: false,
  },
  {
    plan: 'Professional',
    price: '£149',
    desc: 'For growing waste carriers who need route optimisation and customer tools.',
    users: '10',
    jobs: '500',
    vehicles: '5',
    features: [
      'Everything in Starter',
      'Route optimisation',
      'Customer portal',
      'Invoice generation',
      'Fleet management',
      'Compliance dashboard',
      'Priority support',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    plan: 'Business',
    price: '£299',
    desc: 'For established operators with multiple vehicles and complex operations.',
    users: '25',
    jobs: '2,000',
    vehicles: '15',
    features: [
      'Everything in Professional',
      'Weighbridge integration',
      'EA electronic submission',
      'Contract management',
      'Advanced analytics',
      'API access',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
  {
    plan: 'Enterprise',
    price: '£499',
    desc: 'For large operators needing unlimited scale and white-glove support.',
    users: 'Unlimited',
    jobs: 'Unlimited',
    vehicles: 'Unlimited',
    features: [
      'Everything in Business',
      'Unlimited users & jobs',
      'Custom integrations',
      'Multi-site management',
      'SLA guarantee',
      'On-site training',
      'Custom reporting',
    ],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/edoc" className="hover:text-emerald-400">EDOC 2026</Link>
            <Link href="/edoc-checker" className="hover:text-emerald-400">Free Checker</Link>
            <Link href="/pricing" className="text-emerald-400 font-semibold">Pricing</Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 mb-6">No hidden fees. No setup charges. Cancel anytime.</p>
          {/* EDOC Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-6 py-2 rounded-full font-semibold">
            <Shield className="w-5 h-5" />
            EDOC Compliance Included in Every Plan
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 relative ${
                  tier.highlighted
                    ? 'border-2 border-emerald-500 shadow-xl ring-2 ring-emerald-500/20'
                    : 'border border-gray-200 shadow-sm'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}
                <div className="text-lg font-bold mb-1">{tier.plan}</div>
                <p className="text-sm text-gray-500 mb-4">{tier.desc}</p>
                <div className="text-4xl font-bold mb-1">
                  {tier.price}<span className="text-base text-gray-500 font-normal">/mo</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">+ VAT</p>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">Users</span>
                    <span className="font-semibold">{tier.users}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">Jobs/month</span>
                    <span className="font-semibold">{tier.jobs}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">Vehicles</span>
                    <span className="font-semibold">{tier.vehicles}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* EDOC Badge */}
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-xs font-semibold mb-4">
                  <Shield className="w-4 h-4" />
                  EDOC Compliance Included
                </div>

                <Link
                  href="/login"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I change plans later?', a: 'Yes. You can upgrade or downgrade at any time. Changes take effect on your next billing date.' },
              { q: 'Is there a long-term contract?', a: 'No. All plans are month-to-month. You can cancel anytime with no penalties.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards and direct debit (GoCardless). Enterprise customers can pay by invoice.' },
              { q: 'Do you offer discounts for annual billing?', a: 'Yes — pay annually and get 2 months free (equivalent to ~17% discount).' },
              { q: 'Is EDOC compliance really included?', a: 'Yes. EDOC features are included in every plan at no extra charge. This includes digital WTNs, DEFRA API submission, and compliance reporting.' },
            ].map((faq, idx) => (
              <details key={idx} className="border border-gray-200 rounded-lg group">
                <summary className="p-4 font-semibold cursor-pointer hover:bg-gray-50">{faq.q}</summary>
                <div className="px-4 pb-4 text-gray-600 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Start Your Free Trial Today</h2>
          <p className="text-xl mb-8">Join 300+ UK waste carriers. 14 days free, no credit card required.</p>
          <Link href="/login" className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
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
