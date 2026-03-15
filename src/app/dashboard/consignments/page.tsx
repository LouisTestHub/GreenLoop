import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { FileText, AlertTriangle } from 'lucide-react'

export default async function ConsignmentsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const hazardous = await db.hazardousConsignment.findMany({
    where: { companyId: session.user.companyId },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-red-500" />
        <div>
          <h1 className="text-3xl font-bold">Hazardous Consignment Notes</h1>
          <p className="text-gray-600">Special waste tracking & Environment Agency pre-notifications</p>
        </div>
      </div>

      {hazardous.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Hazardous Consignments</h3>
          <p className="text-gray-600">Hazardous waste requires special handling, pre-notification to the EA, and consignment notes.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-bold">{hazardous.length} Hazardous Consignments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EWC Code</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">UN Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Consignor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Collection</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EA Notified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {hazardous.map((consignment) => (
                  <tr key={consignment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono text-sm">{consignment.reference}</td>
                    <td className="px-6 py-4 font-mono text-sm">{consignment.ewcCode}</td>
                    <td className="px-6 py-4 font-mono text-sm">{consignment.unNumber || '-'}</td>
                    <td className="px-6 py-4">{consignment.consignorName}</td>
                    <td className="px-6 py-4 text-sm">{formatDate(consignment.collectionDate)}</td>
                    <td className="px-6 py-4">
                      {consignment.preNotificationSent ? (
                        <span className="text-green-600 text-sm">✓ {formatDate(consignment.preNotifiedAt!)}</span>
                      ) : (
                        <span className="text-orange-600 text-sm">Not sent</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        consignment.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                        consignment.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {consignment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
