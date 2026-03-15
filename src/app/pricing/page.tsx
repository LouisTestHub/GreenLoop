import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, X, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '£49',
      description: 'Perfect for single-vehicle operators or small skip hire businesses',
      users: '3 users',
      jobs: '100 jobs/month',
      vehicles: '2 vehicles',
      features: [
        'Digital Waste Transfer Notes',
        'EDOC compliance + auto-submit',
        'Driver mobile app (iOS + Android)',
        'Customer portal',
        'Basic reporting',
        'Email support',
      ],
      notIncluded: [
        'Route optimisation',
        'Weighbridge integration',
        'Advanced analytics',
        'API access',
        'Dedicated account manager',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '£149',
      description: 'Most popular — for growing waste carriers with 5-10 vehicles',
      users: '10 users',
      jobs: '500 jobs/month',
      vehicles: '5 vehicles',
      features: [
        'Everything in Starter, plus:',
        'Route optimisation (AI-powered)',
        'Weighbridge integration',
        'Fleet management (MOT, tax, insurance)',
        'Advanced reporting + analytics',
        'Customer communications log',
        'Xero/QuickBooks integration',
        'Priority email + chat support',
      ],
      notIncluded: [
        'API access',
        'Custom integrations',
        'Dedicated account manager',
      ],
      popular: true,
    },
    {
      name: 'Business',
      price: '£299',
      description: 'For established operators managing 10-20 vehicles',
      users: '25 users',
      jobs: '2,000 jobs/month',
      vehicles: '15 vehicles',
      features: [
        'Everything in Professional, plus:',
        'API access (RESTful + webhooks)',
        'Custom report builder',
        'Multi-site support',
        'Waste broker integration',
        'Export documentation',
        'Dedicated account manager',
        'Phone + priority support',
      ],
      notIncluded: [
        'Custom integrations (available as add-on)',
      ],
      popular: false,
    },
    {
      name: 'Enterprise',
      price: '£499',
      description: 'For large fleets (20+ vehicles) and waste transfer stations',
      users: 'Unlimited users',
      jobs: 'Unlimited jobs',
      vehicles: 'Unlimited vehicles',
      features: [
        'Everything in Business, plus:',
        'Unlimited everything',
        'Custom integrations included',
        'White-label customer portal (optional)',
        'Advanced security (SSO, SAML)',
        'SLA guarantees (99.9% uptime)',
        'Dedicated account manager + onboarding',
        '24/7 phone support',
      ],
      notIncluded: [],
      popular: false,
    },
  ]

  const addons = [
    { name: 'Additional vehicles', price: '£5/vehicle/month' },
    { name: 'Extra users', price: '£10/user/month' },
    { name: 'SMS notifications (customer alerts)', price: '£20/month (500 SMS)' },
    { name: 'Custom integration', price: 'From £500 one-time' },
    { name: 'Data migration from old system', price: 'From £250 one-time' },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            No hidden fees. No long-term contracts. Cancel anytime. 14-day free trial on all plans.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-6 ${
                  plan.popular
                    ? 'border-2 border-emerald-500 shadow-xl relative'
                    : 'border border-gray-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">/mo</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="text-sm text-gray-700 space-y-1">
                    <div className="font-semibold">{plan.users}</div>
                    <div className="font-semibold">{plan.jobs}</div>
                    <div className="font-semibold">{plan.vehicles}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, fidx) => (
                    <li key={`not-${fidx}`} className="flex items-start gap-2 text-sm text-gray-400">
                      <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Full Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-center p-4 font-bold">Starter</th>
                  <th className="text-center p-4 font-bold bg-emerald-50">Professional</th>
                  <th className="text-center p-4 font-bold">Business</th>
                  <th className="text-center p-4 font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Digital WTNs + EDOC', starter: true, pro: true, business: true, enterprise: true },
                  { feature: 'Driver mobile app', starter: true, pro: true, business: true, enterprise: true },
                  { feature: 'Customer portal', starter: true, pro: true, business: true, enterprise: true },
                  { feature: 'Fleet management', starter: false, pro: true, business: true, enterprise: true },
                  { feature: 'Route optimisation', starter: false, pro: true, business: true, enterprise: true },
                  { feature: 'Weighbridge integration', starter: false, pro: true, business: true, enterprise: true },
                  { feature: 'Advanced analytics', starter: false, pro: true, business: true, enterprise: true },
                  { feature: 'API access', starter: false, pro: false, business: true, enterprise: true },
                  { feature: 'Multi-site support', starter: false, pro: false, business: true, enterprise: true },
                  { feature: 'Custom integrations', starter: false, pro: false, business: false, enterprise: true },
                  { feature: 'Dedicated account manager', starter: false, pro: false, business: true, enterprise: true },
                  { feature: 'White-label portal', starter: false, pro: false, business: false, enterprise: true },
                  { feature: 'SLA guarantees', starter: false, pro: false, business: false, enterprise: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="p-4">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.starter ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center bg-emerald-50">
                      {row.pro ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.business ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.enterprise ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Optional Add-Ons
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
            {addons.map((addon, idx) => (
              <div key={idx} className="p-4 flex justify-between items-center">
                <div className="font-medium">{addon.name}</div>
                <div className="text-emerald-600 font-bold">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I switch plans later?',
                a: 'Yes! You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'What happens after the 14-day trial?',
                a: 'Your card will be charged automatically unless you cancel. No surprises — we send reminders 3 days before.',
              },
              {
                q: 'Do you offer annual billing?',
                a: 'Yes — save 15% with annual billing. Contact us for a quote.',
              },
              {
                q: 'Can I add extra vehicles or users?',
                a: 'Absolutely. Extra vehicles are £5/month each. Extra users are £10/month each.',
              },
              {
                q: 'Is implementation included?',
                a: 'Professional and above include onboarding support. Data migration and custom integrations are available as add-ons.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'Credit/debit card (Visa, Mastercard, Amex), direct debit (UK only), or invoice for Enterprise customers.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Start your 14-day free trial today. No credit card required.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
