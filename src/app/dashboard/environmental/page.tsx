import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Leaf } from 'lucide-react'

export default async function EnvironmentalPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const routes = await db.route.aggregate({
    where: { companyId: session.user.companyId, status: 'COMPLETED' },
    _sum: { actualDistance: true },
  })

  const totalMiles = routes._sum.actualDistance || 0

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Leaf className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold">Environmental Impact</h1>
          <p className="text-gray-600">Carbon footprint, recycling rates & sustainability reporting</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Fleet Miles (Total)</p>
          <p className="text-3xl font-bold mt-2">{totalMiles.toFixed(0)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Est. CO₂ (tonnes)</p>
          <p className="text-3xl font-bold mt-2">{(totalMiles * 0.27 / 1000).toFixed(1)}</p>
          <p className="text-xs text-gray-500 mt-1">Based on HGV average</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Sustainability Reporting</p>
          <p className="text-gray-600 mt-2 text-sm">Waste diversion, recycling rates, carbon reduction targets</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <Leaf className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Reporting & ESG Metrics</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track recycling rates, landfill diversion, carbon intensity per tonne, and ESG KPIs. Generate reports for ISO 14001, ESOS, and Streamlined Energy & Carbon Reporting (SECR) compliance.
        </p>
      </div>
    </div>
  )
}
