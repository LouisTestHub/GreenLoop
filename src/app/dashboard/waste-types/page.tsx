import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Package } from 'lucide-react'

export default async function WasteTypesPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const wasteStreams = await db.wasteStream.findMany({
    where: { companyId: session.user.companyId },
    orderBy: { ewcCode: 'asc' },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Package className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-3xl font-bold">Waste Types & EWC Codes</h1>
          <p className="text-gray-600">Configure your waste streams, EWC codes & material categories</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold">{wasteStreams.length} Waste Streams</h2>
          <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-medium text-sm">
            + Add Waste Type
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EWC Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hazardous</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {wasteStreams.map((stream) => (
              <tr key={stream.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono font-medium">{stream.ewcCode}</td>
                <td className="px-6 py-4">{stream.description}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{stream.category}</span>
                </td>
                <td className="px-6 py-4">
                  {stream.isHazardous ? (
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Hazardous</span>
                  ) : (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Non-Hazardous</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
