"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

function StatCard({ value, label, emoji }: { value: string; label: string; emoji: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all hover:border-emerald-300">
      <div className="text-3xl mb-3">{emoji}</div>
      <div className="text-3xl font-bold text-emerald-600 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

export default function OpportunityPage() {
  const competitors = [
    { name: "PaperRoute", pricing: "£220–500/mo", strengths: "Waste collection focused", weaknesses: "Limited compliance features", target: "Small collectors" },
    { name: "Waste Portal", pricing: "£99/mo", strengths: "Affordable, unlimited jobs", weaknesses: "Basic features, no EDOC", target: "Small operators" },
    { name: "ISB Global (WR1)", pricing: "Enterprise", strengths: "SAP integration, comprehensive", weaknesses: "Very expensive, complex", target: "Large enterprises" },
    { name: "AMCS Platform", pricing: "$149/user/mo", strengths: "Route optimisation, scale", weaknesses: "Enterprise pricing, slow setup", target: "Large fleets" },
    { name: "WasteWorks", pricing: "£22K+/year", strengths: "Local authority focused", weaknesses: "Not for private sector", target: "Councils" },
    { name: "KodaWaste", pricing: "3% per transaction", strengths: "Transaction-based model", weaknesses: "Costs scale unpredictably", target: "Mid-size operators" },
  ]

  const projections = [
    { customers: "500", mrr: "£37,500", arr: "£450,000" },
    { customers: "1,000", mrr: "£75,000", arr: "£900,000" },
    { customers: "5,000", mrr: "£375,000", arr: "£4,500,000" },
    { customers: "10,000", mrr: "£750,000", arr: "£9,000,000" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-emerald-300 mb-6">
            📊 Business Plan & Market Opportunity
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A £40B Industry.<br />
            <span className="text-emerald-400">Facing Mandatory Digital Tracking.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            The UK waste management market is worth over £40 billion. From October 2026, every waste 
            movement must be digitally tracked. Paper waste transfer notes are being abolished. 
            GreenLoop is ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/login" className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 text-white text-lg font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
              Start Your Free Trial →
            </Link>
            <Link href="/market" className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white text-lg rounded-lg hover:bg-white/10 transition-colors">
              View Market Research
            </Link>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Market Size</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The UK waste management market is massive — and regulatory changes are creating unprecedented demand for digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="$40.2B" label="UK Waste Market (2024)" emoji="♻️" />
            <StatCard value="$66.2B" label="Projected Market (2033)" emoji="📈" />
            <StatCard value="5.7%" label="Market CAGR" emoji="📊" />
            <StatCard value="Oct 2026" label="DWT Mandate Deadline" emoji="⏰" />
          </div>
          <div className="mt-12 bg-white rounded-2xl border p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">TAM → SAM → SOM</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-emerald-50">
                <div className="text-sm font-semibold text-emerald-600 mb-2">Total Addressable Market</div>
                <div className="text-4xl font-bold text-slate-900">£1.2B</div>
                <div className="text-sm text-gray-600 mt-2">Waste management software & digital tracking across all UK operators</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-blue-50">
                <div className="text-sm font-semibold text-blue-600 mb-2">Serviceable Addressable Market</div>
                <div className="text-4xl font-bold text-slate-900">£340M</div>
                <div className="text-sm text-gray-600 mt-2">Private waste carriers, brokers, and dealers needing DWT compliance</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-orange-50">
                <div className="text-sm font-semibold text-orange-600 mb-2">Serviceable Obtainable Market</div>
                <div className="text-4xl font-bold text-slate-900">£17M</div>
                <div className="text-sm text-gray-600 mt-2">5% capture within 5 years — 3,000 paying waste operators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">The Problem</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The UK waste industry is about to face the biggest regulatory change in decades — and most operators aren&apos;t ready.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "📋", title: "Paper Waste Transfer Notes", desc: "Millions of paper WTNs processed annually. They're lost, illegible, and impossible to audit. Waste crime thrives on poor record-keeping." },
              { emoji: "⏰", title: "DWT Deadline Approaching", desc: "From October 2026, all permitted waste sites must record digitally. By April 2027, all carriers must comply. Most operators haven't started preparing." },
              { emoji: "🏭", title: "Weighbridge Disconnection", desc: "Weighbridge systems don't talk to invoicing systems, which don't talk to compliance systems. Data is siloed and manual." },
              { emoji: "🚛", title: "Route Inefficiency", desc: "Most waste collection routes are planned manually or by habit. Fuel costs, missed collections, and inefficient routes cost thousands weekly." },
              { emoji: "⚖️", title: "Compliance Risk", desc: "EA inspections, duty of care breaches, and waste crime penalties are increasing. Operators need real-time compliance visibility." },
              { emoji: "💷", title: "Revenue Leakage", desc: "Without integrated weighbridge-to-invoice systems, operators lose revenue on every load. Manual data entry creates billing gaps." },
            ].map((p) => (
              <div key={p.title} className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDOC / DWT Mandate */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">The DWT Mandate — A Game Changer</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            DEFRA&apos;s Digital Waste Tracking service replaces paper waste transfer notes with a mandatory digital system.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border p-8">
              <div className="space-y-6">
                {[
                  { date: "October 2026", event: "DWT mandatory for permitted waste-receiving sites in England, Wales & NI", status: "🔴 7 months away" },
                  { date: "January 2027", event: "DWT mandatory for receiving site operators in Scotland", status: "🟡 10 months away" },
                  { date: "April 2027", event: "DWT mandatory for all waste carriers, brokers, and dealers", status: "🟡 13 months away" },
                ].map((milestone) => (
                  <div key={milestone.date} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-32 flex-shrink-0">
                      <div className="text-sm font-bold text-emerald-700">{milestone.date}</div>
                      <div className="text-xs">{milestone.status}</div>
                    </div>
                    <div className="text-sm text-gray-700">{milestone.event}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-100 rounded-xl">
                <p className="text-sm text-emerald-800 font-medium">
                  💡 Every waste operator in the UK will need digital waste tracking software by April 2027. 
                  This is a once-in-a-generation regulatory tailwind for waste management SaaS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Target Customer</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-4">♻️ Primary: Waste Operators</h3>
                  <ul className="space-y-3">
                    {[
                      "Waste carriers and collection companies",
                      "Skip hire operators",
                      "Waste transfer station operators",
                      "Recycling businesses",
                      "Waste brokers and dealers",
                      "Scrap metal merchants",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-emerald-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-4">📊 Market Numbers</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-600">£75/mo</div>
                      <div className="text-sm text-gray-600">Average target price point</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-600">100%</div>
                      <div className="text-sm text-gray-600">Must comply with DWT by 2027</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-600">Oct 2026</div>
                      <div className="text-sm text-gray-600">First DWT deadline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Competitive Landscape</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Most solutions are either enterprise-priced, local authority-focused, or missing DWT compliance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 text-sm font-semibold">Competitor</th>
                  <th className="text-left p-4 text-sm font-semibold">Pricing</th>
                  <th className="text-left p-4 text-sm font-semibold">Strengths</th>
                  <th className="text-left p-4 text-sm font-semibold">Weaknesses</th>
                  <th className="text-left p-4 text-sm font-semibold">Target</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-medium text-sm">{c.name}</td>
                    <td className="p-4 text-sm text-gray-600">{c.pricing}</td>
                    <td className="p-4 text-sm text-green-600">{c.strengths}</td>
                    <td className="p-4 text-sm text-red-500">{c.weaknesses}</td>
                    <td className="p-4 text-sm text-gray-600">{c.target}</td>
                  </tr>
                ))}
                <tr className="bg-emerald-50 border-t-2 border-emerald-400">
                  <td className="p-4 font-bold text-sm text-emerald-600">GreenLoop ✦</td>
                  <td className="p-4 text-sm font-medium">£49–149/mo</td>
                  <td className="p-4 text-sm text-green-600">DWT-ready, weighbridge integration, EA compliant</td>
                  <td className="p-4 text-sm text-gray-400">New entrant, building brand</td>
                  <td className="p-4 text-sm font-medium">UK waste SMEs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why GreenLoop */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why GreenLoop Wins</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "📱", title: "DWT-Ready from Day One", desc: "Built specifically for the Digital Waste Tracking mandate. Automatic compliance when deadlines hit." },
              { emoji: "⚖️", title: "EA Compliance Built In", desc: "Environment Agency reporting, permit management, and duty of care — all automated." },
              { emoji: "🏗️", title: "Weighbridge Integration", desc: "Connect your weighbridge directly to invoicing and compliance. Zero manual data entry." },
              { emoji: "🚛", title: "Route Optimisation", desc: "AI-powered collection route planning. Reduce fuel costs and increase collections per day." },
              { emoji: "💷", title: "SME Pricing", desc: "Starting at £49/month. Not enterprise pricing dressed up as 'contact us'. Transparent, affordable." },
              { emoji: "📊", title: "Full Audit Trail", desc: "Every waste movement tracked from collection to final destination. Regulators love it." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-300 transition-colors">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Revenue Projections</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Based on average revenue of £75/customer/month across blended plans.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projections.map((p) => (
              <div key={p.customers} className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-sm text-emerald-300 font-medium mb-1">{p.customers} Customers</div>
                <div className="text-3xl font-bold text-white mb-2">{p.arr}</div>
                <div className="text-sm text-gray-400">ARR ({p.mrr} MRR)</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go-to-Market */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Go-to-Market Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { emoji: "⏰", title: "DWT Deadline Marketing", desc: "Clock is ticking. 'Are you ready for October 2026?' — urgency-driven content marketing, webinars, and compliance guides." },
              { emoji: "🤝", title: "EA & Industry Body Partnerships", desc: "Partner with Environment Agency, CIWM (Chartered Institution of Wastes Management), and ESA for credibility and reach." },
              { emoji: "🔍", title: "SEO & Content", desc: "Own search terms: 'digital waste tracking software', 'EDOC compliance', 'waste management software UK'. Education-first." },
              { emoji: "🏗️", title: "Weighbridge Channel", desc: "Partner with weighbridge manufacturers to bundle GreenLoop with new installations. Built-in distribution." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get DWT-ready before the deadline
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            October 2026 is closer than you think. Start your digital waste tracking journey today.
          </p>
          <Link href="/login" className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Free Trial →
          </Link>
          <p className="text-sm text-emerald-200 mt-4">No credit card required • Free 14-day trial • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
