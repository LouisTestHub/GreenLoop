import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Map, Truck, MapPin } from 'lucide-react'

export default async function LiveMapPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const vehicles = await db.vehicle.findMany({
    where: {
      companyId: session.user.companyId,
      status: 'ACTIVE',
    },
  })

  const activeJobs = await db.job.findMany({
    where: {
      companyId: session.user.companyId,
      status: { in: ['EN_ROUTE', 'ARRIVED'] },
    },
    include: {
      vehicle: true,
      driver: true,
      customer: true,
    },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Map className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold">Live Map</h1>
          <p className="text-gray-600">Real-time vehicle tracking & job locations</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{vehicles.filter(v => v.gpsEnabled).length}</p>
              <p className="text-sm text-gray-600">GPS-Enabled Vehicles</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{activeJobs.length}</p>
              <p className="text-sm text-gray-600">Active Jobs</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Map className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{vehicles.filter(v => v.lastGPSUpdate).length}</p>
              <p className="text-sm text-gray-600">Vehicles Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <Map className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Live vehicle tracking with Google Maps / Mapbox integration. Shows real-time vehicle positions, job locations, and optimized routes.
        </p>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 max-w-lg mx-auto">
          <p className="text-sm text-blue-800">
            <strong>Integration Required:</strong> Connect Google Maps API or Mapbox to enable live tracking. Configure in Settings → Integrations.
          </p>
        </div>
      </div>

      {/* Active Jobs List */}
      <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">Active Jobs</h2>
        </div>
        <div className="divide-y">
          {activeJobs.map((job) => (
            <div key={job.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{job.reference} — {job.customer.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{job.siteAddress}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{job.driver?.name || 'Unassigned'}</p>
                  <p className="text-xs text-gray-500">{job.vehicle?.registration || 'No vehicle'}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs ${
                    job.status === 'EN_ROUTE' ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {job.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
