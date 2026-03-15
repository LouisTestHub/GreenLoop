import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { TrendingUp } from 'lucide-react'

export default async function KpisPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const [jobs, routes, invoices] = await Promise.all([
    db.job.count({ where: { companyId: session.user.companyId } }),
    db.route.count({ where: { companyId: session.user.companyId } }),
    db.invoice.count({ where: { companyId: session.user.companyId } }),
  ])

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-purple-500" />
        <div>
          <h1 className="text-3xl font-bold">Key Performance Indicators</h1>
          <p className="text-gray-600">Business KPIs, benchmarking & performance dashboards</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Total Jobs</p>
          <p className="text-3xl font-bold mt-2">{jobs}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Routes Completed</p>
          <p className="text-3xl font-bold mt-2">{routes}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Invoices Issued</p>
          <p className="text-3xl font-bold mt-2">{invoices}</p>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm p-12 text-center">
        <TrendingUp className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Custom KPI Dashboards</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Configure KPIs relevant to your business: jobs per vehicle per day, revenue per customer, driver productivity, invoice collection time, WTN accuracy rate, and customer satisfaction scores.
        </p>
      </div>
    </div>
  )
}
