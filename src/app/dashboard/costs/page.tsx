import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatCurrency } from '@/lib/utils'
import { Package } from 'lucide-react'

export default async function CostsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const maintenanceCosts = await db.maintenanceLog.aggregate({
    _sum: { cost: true },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Package className="w-8 h-8 text-red-500" />
        <div>
          <h1 className="text-3xl font-bold">Cost Tracking</h1>
          <p className="text-gray-600">Operational costs, fuel, maintenance & profitability analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Maintenance Costs (All Time)</p>
          <p className="text-3xl font-bold mt-2">{formatCurrency(maintenanceCosts._sum.cost || 0)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Cost Management</p>
          <p className="text-gray-600 mt-2">Track fuel, disposal fees, labour costs & overhead allocation by job.</p>
        </div>
      </div>
    </div>
  )
}
