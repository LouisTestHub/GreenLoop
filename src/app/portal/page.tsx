import { Truck, Receipt, FileText, BarChart3, CheckCircle2, Clock, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function PortalDashboard() {
  // Demo data for the portal
  const stats = [
    { label: 'Upcoming Collections', value: '3', icon: Truck, color: 'text-blue-500', href: '/portal/collections' },
    { label: 'Outstanding Invoices', value: '2', icon: Receipt, color: 'text-orange-500', href: '/portal/invoices' },
    { label: 'WTNs This Month', value: '12', icon: FileText, color: 'text-emerald-500', href: '/portal/wtns' },
    { label: 'Recycling Rate', value: '78%', icon: BarChart3, color: 'text-purple-500', href: '/portal/reports' },
  ]

  const recentCollections = [
    { id: 1, date: '15 Mar 2026', type: 'General Waste', status: 'Completed', driver: 'Dave B.' },
    { id: 2, date: '14 Mar 2026', type: 'Mixed Recycling', status: 'Completed', driver: 'Sarah T.' },
    { id: 3, date: '18 Mar 2026', type: 'General Waste', status: 'Scheduled', driver: 'TBC' },
    { id: 4, date: '20 Mar 2026', type: 'Cardboard', status: 'Scheduled', driver: 'TBC' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600 mt-1">Here&apos;s an overview of your waste management account.</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <Link key={idx} href={stat.href} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">Recent & Upcoming Collections</h2>
          <div className="space-y-3">
            {recentCollections.map((c) => (
              <div key={c.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium text-sm">{c.type}</p>
                  <p className="text-xs text-gray-500">{c.date} · {c.driver}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  c.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/portal/wtns" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Download Latest WTNs</span>
            </Link>
            <Link href="/portal/invoices" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Receipt className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">View Outstanding Invoices</span>
            </Link>
            <Link href="/portal/reports" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium">Generate Recycling Report</span>
            </Link>
            <Link href="/portal/collections" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Truck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">View Collection Schedule</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
