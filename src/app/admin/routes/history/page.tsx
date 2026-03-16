import Link from 'next/link'
import { ArrowLeft, CheckCircle2, AlertTriangle, Clock, MapPin } from 'lucide-react'

const routeHistory = [
  {
    id: 'R-2026-0089',
    date: '15 Mar 2026',
    name: 'Route A — North London',
    driver: 'Dave Brown',
    vehicle: 'AB21 XYZ',
    planned: { stops: 8, distance: '42 km', duration: '5h 30m' },
    actual: { stops: 8, distance: '44 km', duration: '5h 45m' },
    status: 'Completed',
    variance: '+4.8%',
  },
  {
    id: 'R-2026-0088',
    date: '14 Mar 2026',
    name: 'Route B — East London',
    driver: 'Sarah Turner',
    vehicle: 'CD22 ABC',
    planned: { stops: 10, distance: '38 km', duration: '6h' },
    actual: { stops: 10, distance: '41 km', duration: '6h 30m' },
    status: 'Completed',
    variance: '+7.9%',
  },
  {
    id: 'R-2026-0087',
    date: '13 Mar 2026',
    name: 'Route A — North London',
    driver: 'Dave Brown',
    vehicle: 'AB21 XYZ',
    planned: { stops: 8, distance: '42 km', duration: '5h 30m' },
    actual: { stops: 8, distance: '40 km', duration: '5h 15m' },
    status: 'Completed',
    variance: '-4.8%',
  },
  {
    id: 'R-2026-0086',
    date: '12 Mar 2026',
    name: 'Route C — South London',
    driver: 'Mike Rogers',
    vehicle: 'EF23 DEF',
    planned: { stops: 12, distance: '55 km', duration: '7h' },
    actual: { stops: 11, distance: '52 km', duration: '7h 15m' },
    status: 'Partial',
    variance: '-5.5%',
  },
]

export default function RouteHistoryPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/admin/routes" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Route History</h1>
      </div>
      <p className="text-gray-600 mb-8 ml-9">Compare planned vs actual route performance.</p>

      <div className="space-y-4">
        {routeHistory.map((route) => (
          <div key={route.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{route.name}</h3>
                <p className="text-sm text-gray-500">{route.date} · {route.driver} · {route.vehicle}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  route.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {route.status}
                </span>
                <span className="text-xs text-gray-400">{route.id}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">📋 Planned</h4>
                <div className="space-y-1 text-sm text-blue-700">
                  <div className="flex justify-between"><span>Stops:</span><span className="font-semibold">{route.planned.stops}</span></div>
                  <div className="flex justify-between"><span>Distance:</span><span className="font-semibold">{route.planned.distance}</span></div>
                  <div className="flex justify-between"><span>Duration:</span><span className="font-semibold">{route.planned.duration}</span></div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-emerald-800 mb-2">✅ Actual</h4>
                <div className="space-y-1 text-sm text-emerald-700">
                  <div className="flex justify-between"><span>Stops:</span><span className="font-semibold">{route.actual.stops}</span></div>
                  <div className="flex justify-between"><span>Distance:</span><span className="font-semibold">{route.actual.distance}</span></div>
                  <div className="flex justify-between"><span>Duration:</span><span className="font-semibold">{route.actual.duration}</span></div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-gray-500">Distance variance:</span>
              <span className={`font-semibold ${route.variance.startsWith('-') ? 'text-emerald-600' : 'text-orange-600'}`}>
                {route.variance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
