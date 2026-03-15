import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate, formatCurrency } from '@/lib/utils'
import { Wrench } from 'lucide-react'

export default async function MaintenancePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const logs = await db.maintenanceLog.findMany({
    include: { vehicle: true },
    orderBy: { date: 'desc' },
    take: 100,
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="w-8 h-8 text-orange-500" />
        <div>
          <h1 className="text-3xl font-bold">Vehicle Maintenance</h1>
          <p className="text-gray-600">Service history, defect tracking, and maintenance scheduling</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">Maintenance Log</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mileage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{formatDate(log.date)}</td>
                <td className="px-6 py-4 font-medium">{log.vehicle.registration}</td>
                <td className="px-6 py-4 text-sm">{log.type}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{log.description}</td>
                <td className="px-6 py-4 text-sm">{log.mileage?.toLocaleString() || '-'} mi</td>
                <td className="px-6 py-4 font-medium">{log.cost ? formatCurrency(log.cost) : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
