import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'

export default async function FleetPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const vehicles = await db.vehicle.findMany({
    where: { companyId: session.user.companyId },
  })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Fleet Management</h1>
      <div className="grid gap-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{vehicle.registration}</h3>
                <p className="text-gray-600">{vehicle.type} - {vehicle.make} {vehicle.model}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <p>MOT: {vehicle.motExpiry ? formatDate(vehicle.motExpiry) : 'N/A'}</p>
                  <p>Mileage: {vehicle.currentMileage?.toLocaleString()} miles</p>
                </div>
              </div>
              <span className={`px-3 py-1 h-fit rounded-full text-xs ${
                vehicle.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {vehicle.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
