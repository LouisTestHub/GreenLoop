import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatCurrency } from '@/lib/utils'
import { DollarSign } from 'lucide-react'

export default async function PricingPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const overrides = await db.priceOverride.findMany({
    include: {
      customer: true,
      wasteStream: true,
    },
    orderBy: { validFrom: 'desc' },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold">Pricing Management</h1>
          <p className="text-gray-600">Customer-specific rates, waste stream pricing & price overrides</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">Customer Price Overrides</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waste Stream</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Per Lift</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Per Tonne</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valid From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valid Until</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {overrides.map((override) => (
              <tr key={override.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{override.customer.name}</td>
                <td className="px-6 py-4 text-sm">{override.wasteStream?.description || 'All'}</td>
                <td className="px-6 py-4 font-bold">{override.pricePerLift ? formatCurrency(override.pricePerLift) : '-'}</td>
                <td className="px-6 py-4 font-bold">{override.pricePerTonne ? formatCurrency(override.pricePerTonne) : '-'}</td>
                <td className="px-6 py-4 text-sm">{new Date(override.validFrom).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-sm">{override.validUntil ? new Date(override.validUntil).toLocaleDateString() : 'Open-ended'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
