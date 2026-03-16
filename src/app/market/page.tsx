"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

function DataCard({ title, value, source }: { title: string; value: string; source?: string }) {
  return (
    <div className="bg-white rounded-xl border p-5 hover:shadow-md transition-shadow">
      <div className="text-sm text-gray-500 mb-1">{title}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      {source && <div className="text-xs text-gray-400 mt-2">📎 {source}</div>}
    </div>
  )
}

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-8 pb-12 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-emerald-300 mb-6">
            🔬 Industry Research Report
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            UK Waste Management<br />
            <span className="text-emerald-400">Market Intelligence</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Comprehensive research into the UK waste management sector — market size, regulatory changes, 
            digital waste tracking mandate, and the circular economy transition. Updated March 2026.
          </p>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">♻️ Industry Size & Scale</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">The UK waste management industry is one of the largest environmental sectors in the country.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <DataCard title="Market Size (2024)" value="$40.2B" source="Grand View Research" />
            <DataCard title="Projected (2025)" value="$42.5B" source="Spherical Insights" />
            <DataCard title="Projected (2033)" value="$66.2B" source="IMARC Group" />
            <DataCard title="CAGR" value="5.7%" source="2025–2033" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Market Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: "Collection services", note: "Largest revenue share (2024)", highlight: true },
                  { label: "Disposal services", note: "Fastest-growing segment (2025–2035)", highlight: true },
                  { label: "Industrial waste", note: "Largest waste type segment (2024)", highlight: false },
                  { label: "Recycling & recovery", note: "Growing with circular economy targets", highlight: false },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${item.highlight ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Growth Drivers</h3>
              <ul className="space-y-3">
                {[
                  "Increasingly stringent environmental legislation",
                  "Heightened recycling targets and circular economy push",
                  "Growing public environmental awareness",
                  "Government initiatives promoting sustainable disposal",
                  "Digital Waste Tracking mandate creating software demand",
                  "Simpler Recycling regulations (from March 2025)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 mt-1">▸</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Carriers, Brokers, Dealers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">🏢 Waste Carriers, Brokers & Dealers</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">All waste carriers, brokers, and dealers must be registered with the Environment Agency — and from 2027, must use digital waste tracking.</p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Registration Categories</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-medium text-sm text-slate-900">Upper Tier Registration</div>
                    <div className="text-xs text-gray-600 mt-1">For businesses that transport, buy, sell, or dispose of waste as their main business activity. Must register with the EA.</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-medium text-sm text-slate-900">Lower Tier Registration</div>
                    <div className="text-xs text-gray-600 mt-1">For businesses that only transport their own waste. Free registration. Still subject to DWT requirements.</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-medium text-sm text-slate-900">Waste Brokers & Dealers</div>
                    <div className="text-xs text-gray-600 mt-1">Businesses that arrange waste disposal for others. Must register and maintain digital records.</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Key Compliance Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Duty of Care: ensure waste is handled properly throughout the chain",
                    "Waste Transfer Notes: currently paper, moving to digital (DWT)",
                    "Hazardous Waste Consignment Notes: stricter tracking requirements",
                    "Environment Agency registration renewal",
                    "Site permits and exemptions management",
                    "Annual returns and waste data reporting",
                    "Contamination monitoring and recording",
                    "Vehicle and driver compliance documentation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-emerald-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDOC / DWT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">📱 Digital Waste Tracking (DWT) Mandate</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">The biggest regulatory change in UK waste management history. Paper waste transfer notes are being replaced by mandatory digital tracking.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border p-6">
              <h3 className="font-bold text-slate-900 mb-4">What is DWT?</h3>
              <p className="text-sm text-gray-600 mb-4">
                DEFRA&apos;s Digital Waste Tracking service replaces the previous voluntary EDOC system with a 
                mandatory digital platform for recording all waste movements in the UK. It creates a single 
                digital record for every waste movement, visible to regulators in real-time.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-sm">✅ Replaces paper Waste Transfer Notes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-sm">✅ Single digital record per waste movement</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-sm">✅ Real-time regulator visibility</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-sm">✅ 48-hour recording deadline</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border p-6">
              <h3 className="font-bold text-slate-900 mb-4">Implementation Timeline</h3>
              <div className="space-y-4">
                {[
                  { date: "March 2025", event: "Simpler Recycling regulations begin in England", status: "✅ Active" },
                  { date: "October 2026", event: "DWT mandatory for permitted waste-receiving sites (England, Wales, NI)", status: "🔴 Phase 1" },
                  { date: "January 2027", event: "DWT mandatory for receiving sites in Scotland", status: "🟡 Phase 1b" },
                  { date: "Spring 2027", event: "DWT publicly available for all waste collectors", status: "🟡 Phase 2" },
                  { date: "April 2027", event: "DWT mandatory for all carriers, brokers, and dealers", status: "🔴 Phase 2" },
                ].map((m) => (
                  <div key={m.date} className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <div className="w-28 flex-shrink-0">
                      <div className="text-xs font-bold text-emerald-700">{m.date}</div>
                      <div className="text-xs text-gray-400">{m.status}</div>
                    </div>
                    <div className="text-sm text-gray-700">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="font-bold text-red-800 mb-2">⚠️ Non-Compliance Penalties</h3>
            <p className="text-sm text-red-700">
              Non-compliance with DWT will carry penalties similar to current waste duty of care offences — 
              including fines and potential criminal prosecution for persistent offenders. With real-time 
              regulator visibility, enforcement will be significantly easier than with paper records.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Regulations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">⚖️ Environmental Regulations & Trends</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">The UK waste sector operates under extensive environmental legislation — and it&apos;s getting stricter.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Environmental Permitting Regulations",
                items: ["Waste operations require EA permits", "Strict conditions on storage, treatment, and disposal", "Regular inspections and compliance assessments", "Permit variations needed for operational changes"],
              },
              {
                title: "Waste (England and Wales) Regulations 2011",
                items: ["Duty of care requirements for all waste handlers", "Waste hierarchy: prevent, reuse, recycle, recover, dispose", "Separate collection obligations for recyclable materials", "Written descriptions of waste required"],
              },
              {
                title: "Hazardous Waste Regulations",
                items: ["Classification, packaging, and labelling requirements", "Consignment note system for tracking", "Pre-notification of movements", "Annual returns to the EA", "Mixing prohibition"],
              },
              {
                title: "Landfill Regulations",
                items: ["Landfill tax: £103.70/tonne (standard rate)", "Waste acceptance criteria and testing", "Pre-treatment requirements before landfilling", "Banned waste types (liquids, tyres, etc.)", "Progressive ban on biodegradable waste to landfill"],
              },
            ].map((reg) => (
              <div key={reg.title} className="bg-gray-50 rounded-2xl border p-6">
                <h3 className="font-bold text-sm text-slate-900 mb-4">{reg.title}</h3>
                <ul className="space-y-2">
                  {reg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-emerald-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">🔄 Circular Economy & Recycling Targets</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">The UK is transitioning towards a circular economy — creating new requirements and opportunities for waste operators.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Recycling Rate Targets",
                desc: "UK target: 65% municipal waste recycling by 2035. Current rate: ~44%. Significant gap requires infrastructure investment and better tracking.",
                stat: "65%",
                statLabel: "2035 target",
              },
              {
                title: "Extended Producer Responsibility",
                desc: "EPR for packaging started 2024. Producers pay full cost of managing packaging waste. Creates new revenue streams for waste collectors.",
                stat: "EPR",
                statLabel: "Active from 2024",
              },
              {
                title: "Deposit Return Scheme",
                desc: "DRS for drinks containers in development. Will create new collection and processing requirements for waste operators.",
                stat: "DRS",
                statLabel: "In development",
              },
              {
                title: "Simpler Recycling",
                desc: "From March 2025, larger businesses must separate dry recyclables, food waste, and general waste. Creates demand for multi-stream collection.",
                stat: "Mar 2025",
                statLabel: "Started",
              },
              {
                title: "Resources & Waste Strategy",
                desc: "Government's 25-year plan to minimise waste, promote resource efficiency, and move towards a circular economy. Digital tracking is central.",
                stat: "25yr",
                statLabel: "Strategic plan",
              },
              {
                title: "Net Zero by 2050",
                desc: "Waste sector contributes ~5% of UK greenhouse gas emissions. Methane reduction from landfill and energy recovery are key focus areas.",
                stat: "5%",
                statLabel: "Of UK emissions",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">{item.stat}</div>
                    <div className="text-xs text-gray-400">{item.statLabel}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📚 Sources & References</h2>
          <div className="bg-gray-50 rounded-2xl border p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              {[
                "Grand View Research — UK Waste Management Market Report",
                "Spherical Insights — UK Waste Management Market Analysis",
                "IMARC Group — UK Waste Management Industry Forecast",
                "DEFRA — Digital Waste Tracking Service Documentation",
                "GOV.UK — Digital Waste Tracking Mandate Details",
                "Environment Agency — Waste Carrier Registration Data",
                "CIWM — Chartered Institution of Wastes Management Reports",
                "Wasteproof.co.uk — DWT Timeline and Compliance Guide",
                "DEFRA — Resources and Waste Strategy",
                "Legislation.gov.uk — Waste Regulations and Amendments",
              ].map((source) => (
                <div key={source} className="flex items-start gap-2 py-1">
                  <span className="text-gray-400 mt-0.5">📎</span>
                  <span>{source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t wait for the deadline
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            GreenLoop is purpose-built for the DWT mandate. Get compliant before October 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/login" className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Free Trial →
            </Link>
            <Link href="/opportunity" className="inline-flex items-center justify-center px-8 py-3 border border-white text-white text-lg rounded-lg hover:bg-white/10 transition-colors">
              View Business Plan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
