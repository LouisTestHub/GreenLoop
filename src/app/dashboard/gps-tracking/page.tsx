import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Radio, Truck } from 'lucide-react'

export default async function GpsTrackingPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const vehicles = await db.vehicle.findMany({
    where: { companyId: session.user.companyId },
  })

  const gpsEnabled = vehicles.filter(v => v.gpsEnabled).length

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Radio className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold">GPS Fleet Tracking</h1>
          <p className="text-gray-600">Real-time vehicle location, route history, and geofencing</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{vehicles.length}</p>
              <p className="text-sm text-gray-600">Total Fleet</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Radio className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{gpsEnabled}</p>
              <p className="text-sm text-gray-600">GPS Enabled</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Coverage</p>
          <p className="text-2xl font-bold">{vehicles.length > 0 ? ((gpsEnabled / vehicles.length) * 100).toFixed(0) : 0}%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <Radio className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">GPS Telematics Integration</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Integrate with Teletrac Navman, Geotab, Quartix, or similar providers. Live tracking, breadcrumb trails, driver behavior monitoring, fuel efficiency reporting, and automated mileage capture.
        </p>
      </div>
    </div>
  )
}
