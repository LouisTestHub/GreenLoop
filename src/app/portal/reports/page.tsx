import { BarChart3, TrendingUp, Leaf, Download } from 'lucide-react'

export default function PortalReports() {
  const wasteBreakdown = [
    { type: 'General Waste', tonnes: 4.2, pct: 45, color: 'bg-gray-500' },
    { type: 'Mixed Recycling', tonnes: 2.8, pct: 30, color: 'bg-blue-500' },
    { type: 'Cardboard', tonnes: 1.4, pct: 15, color: 'bg-yellow-500' },
    { type: 'Food Waste', tonnes: 0.9, pct: 10, color: 'bg-green-500' },
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recycling Reports</h1>
          <p className="text-gray-600 mt-1">Track your waste volumes and recycling performance.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          <Download className="w-4 h-4" /> Export PDF
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <BarChart3 className="w-4 h-4" /> Total Waste (This Quarter)
          </div>
          <p className="text-3xl font-bold">9.3 tonnes</p>
          <p className="text-sm text-gray-500 mt-1">↓ 12% vs last quarter</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <Leaf className="w-4 h-4" /> Recycling Rate
          </div>
          <p className="text-3xl font-bold text-emerald-500">78%</p>
          <p className="text-sm text-gray-500 mt-1">↑ 5% vs last quarter</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <TrendingUp className="w-4 h-4" /> Landfill Diversion
          </div>
          <p className="text-3xl font-bold text-blue-500">92%</p>
          <p className="text-sm text-gray-500 mt-1">↑ 3% vs last quarter</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">Waste Stream Breakdown</h2>
          <div className="space-y-4">
            {wasteBreakdown.map((w, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{w.type}</span>
                  <span className="text-gray-500">{w.tonnes}t ({w.pct}%)</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${w.color} rounded-full`} style={{ width: `${w.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">Monthly Trend</h2>
          <div className="space-y-3">
            {[
              { month: 'March 2026', total: 3.2, recycled: 2.5 },
              { month: 'February 2026', total: 3.4, recycled: 2.6 },
              { month: 'January 2026', total: 2.7, recycled: 2.0 },
              { month: 'December 2025', total: 3.8, recycled: 2.8 },
              { month: 'November 2025', total: 3.1, recycled: 2.3 },
              { month: 'October 2025', total: 3.0, recycled: 2.1 },
            ].map((m, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-sm font-medium">{m.month}</span>
                <div className="text-right text-sm">
                  <span className="text-gray-600">{m.total}t total</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-emerald-600">{m.recycled}t recycled</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
