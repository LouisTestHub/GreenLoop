import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { MapPin, Clock, Truck, CheckCircle2 } from 'lucide-react'

export default async function RoutesPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const companyId = session.user.companyId

  const [routes, stats] = await Promise.all([
    db.route.findMany({
      where: { companyId },
      include: {
        driver: true,
        vehicle: true,
        _count: {
          select: { jobs: true },
        },
      },
      orderBy: { date: 'desc' },
      take: 30,
    }),
    db.route.aggregate({
      where: { companyId },
      _sum: {
        actualDistance: true,
        actualDuration: true,
      },
      _count: true,
    }),
  ])

  const completedRoutes = routes.filter((r) => r.status === 'COMPLETED').length
  const totalDistance = stats._sum.actualDistance || 0
  const totalDuration = stats._sum.actualDuration || 0
  const avgDistance = stats._count > 0 ? totalDistance / stats._count : 0
  const avgDuration = stats._count > 0 ? totalDuration / stats._count : 0

  const statusColors = {
    PLANNED: 'bg-blue-100 text-blue-700',
    IN_PROGRESS: 'bg-yellow-100 text-yellow-700',
    COMPLETED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-red-100 text-red-700',
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Route Planning</h1>
        <p className="text-gray-600 mt-1">
          Route optimisation, scheduling & real-time tracking
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{stats._count}</p>
              <p className="text-sm text-gray-600">Total Routes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{completedRoutes}</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{totalDistance.toFixed(0)}</p>
              <p className="text-sm text-gray-600">Total Miles</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-2xl font-bold">{Math.round(totalDuration / 60)}</p>
              <p className="text-sm text-gray-600">Total Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Efficiency Metrics */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Efficiency Metrics</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600">Average Distance per Route</p>
            <p className="text-2xl font-bold">{avgDistance.toFixed(1)} miles</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Average Duration per Route</p>
            <p className="text-2xl font-bold">{Math.round(avgDuration)} minutes</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Average Jobs per Route</p>
            <p className="text-2xl font-bold">
              {routes.length > 0
                ? (routes.reduce((sum, r) => sum + r._count.jobs, 0) / routes.length).toFixed(1)
                : '0'}
            </p>
          </div>
        </div>
      </div>

      {/* Routes List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold">All Routes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jobs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Distance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {routes.map((route) => (
                <tr key={route.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium font-mono text-sm">{route.reference}</td>
                  <td className="px-6 py-4">{route.name}</td>
                  <td className="px-6 py-4">{formatDate(route.date)}</td>
                  <td className="px-6 py-4">{route.driver?.name || 'Unassigned'}</td>
                  <td className="px-6 py-4 font-medium">{route.vehicle?.registration || 'N/A'}</td>
                  <td className="px-6 py-4 text-center">{route._count.jobs}</td>
                  <td className="px-6 py-4">
                    {route.actualDistance
                      ? `${route.actualDistance.toFixed(1)} mi`
                      : route.estimatedDistance
                      ? `~${route.estimatedDistance.toFixed(1)} mi`
                      : '-'}
                  </td>
                  <td className="px-6 py-4">
                    {route.actualDuration
                      ? `${Math.round(route.actualDuration)} min`
                      : route.estimatedDuration
                      ? `~${Math.round(route.estimatedDuration)} min`
                      : '-'}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        statusColors[route.status as keyof typeof statusColors]
                      }`}
                    >
                      {route.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
