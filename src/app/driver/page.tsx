import { MapPin, Clock, CheckCircle2, Truck, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function DriverDashboard() {
  const todayRoute = {
    name: 'Route A - North London',
    totalJobs: 8,
    completedJobs: 3,
    vehicle: 'AB21 XYZ',
    estimatedEnd: '16:30',
  }

  const nextJob = {
    id: 'JOB-2026-0456',
    customer: 'Smith & Sons Ltd',
    address: '45 High Street, London N1 2AB',
    type: 'General Waste Collection',
    container: '1100L Bin x2',
    scheduledTime: '10:30',
    notes: 'Access via rear car park. Gate code: 1234',
  }

  return (
    <div className="p-4 space-y-4">
      {/* Today's Route Summary */}
      <div className="bg-emerald-500 text-white rounded-xl p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-sm text-emerald-100">Today&apos;s Route</p>
            <h2 className="text-xl font-bold">{todayRoute.name}</h2>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
            {todayRoute.vehicle}
          </span>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm">{todayRoute.completedJobs}/{todayRoute.totalJobs} jobs</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Est. finish {todayRoute.estimatedEnd}</span>
          </div>
        </div>
        <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all"
            style={{ width: `${(todayRoute.completedJobs / todayRoute.totalJobs) * 100}%` }}
          />
        </div>
      </div>

      {/* Next Job */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-500 text-sm uppercase">Next Job</h3>
          <span className="text-xs text-gray-400">{nextJob.id}</span>
        </div>
        <h2 className="text-lg font-bold mb-1">{nextJob.customer}</h2>
        <div className="flex items-start gap-2 text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{nextJob.address}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
          <Clock className="w-4 h-4" />
          <span>Scheduled: {nextJob.scheduledTime}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
          <Truck className="w-4 h-4" />
          <span>{nextJob.type} · {nextJob.container}</span>
        </div>
        {nextJob.notes && (
          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800 mb-4">
            <span className="font-semibold">Note:</span> {nextJob.notes}
          </div>
        )}
        <Link
          href="/driver/job"
          className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-3 rounded-lg font-semibold transition-colors"
        >
          Start Job
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-emerald-500">3</p>
          <p className="text-xs text-gray-500">Completed</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-blue-500">5</p>
          <p className="text-xs text-gray-500">Remaining</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-orange-500">0</p>
          <p className="text-xs text-gray-500">Exceptions</p>
        </div>
      </div>
    </div>
  )
}
