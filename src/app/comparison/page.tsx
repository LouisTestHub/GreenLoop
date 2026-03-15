import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, X, ArrowRight } from 'lucide-react'

export default function ComparisonPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            How GreenLoop Compares
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Spreadsheets, legacy systems, or enterprise platforms — see why UK waste operators choose GreenLoop.
          </p>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            GreenLoop vs. The Competition
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-center p-4 font-bold bg-emerald-50">GreenLoop</th>
                  <th className="text-center p-4 font-bold">Spreadsheets</th>
                  <th className="text-center p-4 font-bold">Legacy Systems</th>
                  <th className="text-center p-4 font-bold">AMCS/ISB Global</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'EDOC Compliance',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: 'partial',
                    enterprise: true,
                  },
                  {
                    feature: 'Price (per month)',
                    greenloop: '£49-£499',
                    spreadsheets: 'Free',
                    legacy: '£200-£800',
                    enterprise: '£1,000+',
                  },
                  {
                    feature: 'Setup Time',
                    greenloop: '1-2 weeks',
                    spreadsheets: 'Instant',
                    legacy: '4-8 weeks',
                    enterprise: '3-6 months',
                  },
                  {
                    feature: 'Digital WTNs',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: 'partial',
                    enterprise: true,
                  },
                  {
                    feature: 'Driver Mobile App',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: 'partial',
                    enterprise: true,
                  },
                  {
                    feature: 'Route Optimisation',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: false,
                    enterprise: true,
                  },
                  {
                    feature: 'Customer Portal',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: false,
                    enterprise: 'partial',
                  },
                  {
                    feature: 'Weighbridge Integration',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: 'partial',
                    enterprise: true,
                  },
                  {
                    feature: 'UK-Based Support',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: 'partial',
                    enterprise: 'partial',
                  },
                  {
                    feature: 'Ease of Use',
                    greenloop: '⭐⭐⭐⭐⭐',
                    spreadsheets: '⭐⭐',
                    legacy: '⭐⭐',
                    enterprise: '⭐⭐⭐',
                  },
                  {
                    feature: 'Training Required',
                    greenloop: 'Minimal',
                    spreadsheets: 'None',
                    legacy: 'Extensive',
                    enterprise: 'Extensive',
                  },
                  {
                    feature: 'API Access',
                    greenloop: true,
                    spreadsheets: false,
                    legacy: false,
                    enterprise: true,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-emerald-50">
                      {typeof row.greenloop === 'boolean' ? (
                        row.greenloop ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-emerald-600">{row.greenloop}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.spreadsheets === 'boolean' ? (
                        row.spreadsheets ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600">{row.spreadsheets}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.legacy === 'boolean' ? (
                        row.legacy ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : row.legacy === 'partial' ? (
                        <span className="text-orange-500 font-semibold">Partial</span>
                      ) : (
                        <span className="text-gray-600">{row.legacy}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : row.enterprise === 'partial' ? (
                        <span className="text-orange-500 font-semibold">Partial</span>
                      ) : (
                        <span className="text-gray-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Detailed Breakdown
          </h2>

          <div className="space-y-8">
            {/* vs Spreadsheets */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">GreenLoop vs. Spreadsheets</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Why GreenLoop Wins:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>EDOC compliant</strong> — spreadsheets won't meet Oct 2026 deadline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>No manual data entry</strong> — drivers capture data on mobile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Zero lost WTNs</strong> — everything is backed up in the cloud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Automated reporting</strong> — EA returns generated automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Route optimisation</strong> — save 15-20% on fuel</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3">Spreadsheet Problems:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>❌ Not EDOC compliant (non-compliant by Oct 2026)</li>
                    <li>❌ Manual data entry (time-consuming + error-prone)</li>
                    <li>❌ Lost WTNs (filing cabinet chaos)</li>
                    <li>❌ No driver mobile access</li>
                    <li>❌ No customer portal</li>
                    <li>❌ EA audit nightmares</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* vs Legacy Systems */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">GreenLoop vs. Legacy Waste Software</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Why GreenLoop Wins:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Modern UX</strong> — drivers and staff actually want to use it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Fast setup</strong> — live in 1-2 weeks (not months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Lower cost</strong> — £49-£499/mo vs £200-£800/mo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Cloud-first</strong> — access anywhere, automatic updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>UK-based support</strong> — we answer within 2 hours</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-600 mb-3">Legacy System Problems:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>⚠️ Outdated UX (hard to use, drivers hate it)</li>
                    <li>⚠️ Long implementation (4-8 weeks minimum)</li>
                    <li>⚠️ Expensive (£200-£800/mo + setup fees)</li>
                    <li>⚠️ Partial EDOC compliance (bolt-on, not native)</li>
                    <li>⚠️ Slow updates (bug fixes take months)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* vs Enterprise (AMCS/ISB) */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">GreenLoop vs. Enterprise Platforms (AMCS, ISB Global)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Why GreenLoop Wins (for SMEs):</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Affordable</strong> — £49-£499/mo vs £1,000+/mo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>No bloat</strong> — simple, focused, waste-specific features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Fast to deploy</strong> — 1-2 weeks vs 3-6 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>No contracts</strong> — cancel anytime, no lock-in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>UK-first</strong> — built for UK regulations, not US imports</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-3">When Enterprise Makes Sense:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ 50+ vehicle fleets</li>
                    <li>✓ Multi-site operations (10+ locations)</li>
                    <li>✓ Complex integrations (ERP, finance systems)</li>
                    <li>✓ Custom workflows + dedicated account team</li>
                    <li>✓ Budget &gt; £12,000/year for software</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    For most waste carriers (1-20 vehicles), GreenLoop offers 80% of the features at 20% of the cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Recommendation Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Which Solution Is Right for You?
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold mb-2">❌ Spreadsheets → Not Recommended</h3>
              <p className="text-sm text-gray-700">
                Will not meet EDOC compliance by Oct 2026. Switch to digital WTNs now.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="font-bold mb-2">✅ GreenLoop → Best for Most Operators</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Ideal for:</strong> Skip hire, commercial waste, scrap metal, 1-20 vehicle fleets
              </p>
              <p className="text-sm text-gray-700">
                <strong>Why:</strong> Affordable, EDOC-ready, fast setup, driver-loved, UK support
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold mb-2">🏢 Enterprise (AMCS/ISB) → Large Fleets Only</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Ideal for:</strong> 50+ vehicles, multi-site operations, complex integrations
              </p>
              <p className="text-sm text-gray-700">
                <strong>Why:</strong> Full feature set, dedicated support, but expensive and slow to implement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
          <p className="text-xl mb-8">Join 500+ UK waste operators who've chosen GreenLoop.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-emerald-100">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
