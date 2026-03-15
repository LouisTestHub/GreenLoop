import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate, formatCurrency } from '@/lib/utils'
import { FileCheck } from 'lucide-react'

export default async function ContractsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const contracts = await db.contract.findMany({
    where: { companyId: session.user.companyId },
    include: {
      customer: true,
      wasteStream: true,
    },
    orderBy: { startDate: 'desc' },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileCheck className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold">Waste Service Contracts</h1>
          <p className="text-gray-600">{contracts.length} active and historic customer agreements</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm">{contract.reference}</td>
                <td className="px-6 py-4 font-medium">{contract.customer.name}</td>
                <td className="px-6 py-4 text-sm">{contract.serviceType}</td>
                <td className="px-6 py-4 text-sm">{formatDate(contract.startDate)}</td>
                <td className="px-6 py-4 text-sm">{contract.endDate ? formatDate(contract.endDate) : 'Open-ended'}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  {contract.monthlyFee ? formatCurrency(contract.monthlyFee) + '/mo' :
                   contract.pricePerLift ? formatCurrency(contract.pricePerLift) + '/lift' :
                   contract.pricePerTonne ? formatCurrency(contract.pricePerTonne) + '/t' : '-'}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    contract.status === 'ACTIVE' ? 'bg-green-100 text-green-700' :
                    contract.status === 'EXPIRED' ? 'bg-gray-100 text-gray-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {contract.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
