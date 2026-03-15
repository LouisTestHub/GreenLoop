import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { PieChart } from 'lucide-react'

export default async function WasteAnalyticsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const wasteBreakdown = await db.wasteStream.findMany({
    where: { companyId: session.user.companyId },
    select: {
      description: true,
      ewcCode: true,
      category: true,
      _count: {
        select: { jobs: true },
      },
    },
    orderBy: {
      jobs: {
        _count: 'desc',
      },
    },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <PieChart className="w-8 h-8 text-indigo-500" />
        <div>
          <h1 className="text-3xl font-bold">Waste Analytics</h1>
          <p className="text-gray-600">Waste stream breakdown, tonnage reports & material flow analysis</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">Waste Stream Distribution</h2>
        </div>
        <div className="p-6 space-y-4">
          {wasteBreakdown.map((stream, idx) => (
            <div key={idx} className="pb-4 border-b last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium">{stream.description}</p>
                  <p className="text-sm text-gray-500">EWC: {stream.ewcCode} — {stream.category}</p>
                </div>
                <p className="text-2xl font-bold">{stream._count.jobs}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full"
                  style={{
                    width: `${
                      wasteBreakdown[0]._count.jobs > 0
                        ? (stream._count.jobs / wasteBreakdown[0]._count.jobs) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
