import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'

export default async function WTNsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.companyId) {
    return <div>Loading...</div>
  }

  const wtns = await db.wTN.findMany({
    where: { companyId: session.user.companyId },
    include: {
      customer: true,
      wasteStream: true,
      job: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Waste Transfer Notes</h1>
          <p className="text-gray-600 mt-1">{wtns.length} WTNs in archive (2-year retention)</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EWC Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waste Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EA Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {wtns.map((wtn) => (
              <tr key={wtn.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">{wtn.reference}</td>
                <td className="px-6 py-4">{wtn.customer.name}</td>
                <td className="px-6 py-4 font-mono text-sm">{wtn.ewcCode}</td>
                <td className="px-6 py-4 text-sm">{wtn.wasteDescription}</td>
                <td className="px-6 py-4">
                  {wtn.quantity ? `${wtn.quantity.toFixed(2)} ${wtn.quantityUnit}` : '-'}
                </td>
                <td className="px-6 py-4">{formatDate(wtn.createdAt)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      wtn.eaStatus === 'ACCEPTED'
                        ? 'bg-green-100 text-green-700'
                        : wtn.eaStatus === 'PENDING'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {wtn.submittedToEA ? wtn.eaStatus : 'Not Submitted'}
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
