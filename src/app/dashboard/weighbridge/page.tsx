import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate, formatCurrency } from '@/lib/utils'
import { Scale, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react'

export default async function WeighbridgePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const companyId = session.user.companyId

  const [tickets, stats] = await Promise.all([
    db.weighbridgeTicket.findMany({
      where: { companyId },
      include: {
        customer: true,
        wasteStream: true,
      },
      orderBy: { timeIn: 'desc' },
      take: 50,
    }),
    db.weighbridgeTicket.aggregate({
      where: { companyId },
      _sum: {
        netWeight: true,
        totalValue: true,
      },
      _count: true,
    }),
  ])

  const contaminated = tickets.filter((t) => t.isContaminated).length
  const rejected = tickets.filter((t) => t.isRejected).length
  const totalTonnage = (stats._sum.netWeight || 0) / 1000
  const totalValue = stats._sum.totalValue || 0

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Weighbridge Operations</h1>
        <p className="text-gray-600 mt-1">
          Tonnage tracking, material flows, contamination monitoring & quality control
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{stats._count}</p>
              <p className="text-sm text-gray-600">Total Tickets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{totalTonnage.toFixed(1)}</p>
              <p className="text-sm text-gray-600">Total Tonnes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{contaminated}</p>
              <p className="text-sm text-gray-600">Contaminated Loads</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
              <p className="text-sm text-gray-600">Total Value</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contamination Alert */}
      {contaminated > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900">
                {contaminated} contaminated load{contaminated > 1 ? 's' : ''} detected
              </h3>
              <p className="text-sm text-orange-800 mt-1">
                Review material quality and notify customers where necessary
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Recent Tickets */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold">Recent Weighbridge Tickets</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date/Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium font-mono text-sm">{ticket.reference}</td>
                  <td className="px-6 py-4 text-sm">
                    {formatDate(ticket.timeIn)}
                    <br />
                    <span className="text-gray-500">{new Date(ticket.timeIn).toLocaleTimeString()}</span>
                  </td>
                  <td className="px-6 py-4">{ticket.customer?.name || 'N/A'}</td>
                  <td className="px-6 py-4 font-medium">{ticket.vehicleReg}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="font-medium">{ticket.wasteStream?.description.substring(0, 30)}...</p>
                      <p className="text-gray-500 font-mono text-xs">{ticket.ewcCode}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold">
                    {ticket.netWeight ? `${(ticket.netWeight / 1000).toFixed(2)} t` : '-'}
                  </td>
                  <td className="px-6 py-4">
                    {ticket.totalValue ? formatCurrency(ticket.totalValue) : '-'}
                  </td>
                  <td className="px-6 py-4">
                    {ticket.isRejected ? (
                      <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">
                        Rejected
                      </span>
                    ) : ticket.isContaminated ? (
                      <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-700">
                        Contaminated
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                        Accepted
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Material Breakdown */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Material Flow Summary</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600">Average Load Weight</p>
            <p className="text-2xl font-bold">
              {stats._count > 0 ? (totalTonnage / stats._count).toFixed(2) : '0'} tonnes
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Contamination Rate</p>
            <p className="text-2xl font-bold">
              {stats._count > 0 ? ((contaminated / stats._count) * 100).toFixed(1) : '0'}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Rejection Rate</p>
            <p className="text-2xl font-bold">
              {stats._count > 0 ? ((rejected / stats._count) * 100).toFixed(1) : '0'}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
