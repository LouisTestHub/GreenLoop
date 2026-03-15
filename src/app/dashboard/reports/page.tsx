import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatCurrency } from '@/lib/utils'
import { BarChart3, TrendingUp, FileText, Calendar, DollarSign, Users } from 'lucide-react'

export default async function ReportsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const companyId = session.user.companyId
  const now = new Date()
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)

  const [
    thisMonthJobs,
    lastMonthJobs,
    thisMonthRevenue,
    lastMonthRevenue,
    thisMonthWTNs,
    topCustomers,
    wasteBreakdown,
    vehicleUtilization,
  ] = await Promise.all([
    db.job.count({
      where: {
        companyId,
        scheduledDate: { gte: thisMonthStart },
      },
    }),
    db.job.count({
      where: {
        companyId,
        scheduledDate: { gte: lastMonthStart, lt: thisMonthStart },
      },
    }),
    db.invoice.aggregate({
      where: {
        companyId,
        status: 'PAID',
        paidDate: { gte: thisMonthStart },
      },
      _sum: { total: true },
    }),
    db.invoice.aggregate({
      where: {
        companyId,
        status: 'PAID',
        paidDate: { gte: lastMonthStart, lt: thisMonthStart },
      },
      _sum: { total: true },
    }),
    db.wTN.count({
      where: {
        companyId,
        createdAt: { gte: thisMonthStart },
      },
    }),
    db.customer.findMany({
      where: { companyId },
      select: {
        name: true,
        _count: {
          select: { jobs: true },
        },
      },
      orderBy: {
        jobs: {
          _count: 'desc',
        },
      },
      take: 5,
    }),
    db.wasteStream.findMany({
      where: { companyId },
      select: {
        description: true,
        _count: {
          select: { jobs: true },
        },
      },
      orderBy: {
        jobs: {
          _count: 'desc',
        },
      },
      take: 5,
    }),
    db.vehicle.findMany({
      where: { companyId },
      select: {
        registration: true,
        type: true,
        _count: {
          select: { jobs: true },
        },
      },
      orderBy: {
        jobs: {
          _count: 'desc',
        },
      },
      take: 5,
    }),
  ])

  const thisMonthRevenueValue = thisMonthRevenue._sum.total || 0
  const lastMonthRevenueValue = lastMonthRevenue._sum.total || 0

  const jobsGrowth = lastMonthJobs > 0 ? ((thisMonthJobs - lastMonthJobs) / lastMonthJobs) * 100 : 0
  const revenueGrowth =
    lastMonthRevenueValue > 0
      ? ((thisMonthRevenueValue - lastMonthRevenueValue) / lastMonthRevenueValue) * 100
      : 0

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <p className="text-gray-600 mt-1">
          Business intelligence, KPIs, profitability analysis & performance trends
        </p>
      </div>

      {/* Month-on-Month Comparison */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-blue-500" />
            <p className="text-sm text-gray-600">Jobs This Month</p>
          </div>
          <p className="text-3xl font-bold">{thisMonthJobs}</p>
          <p
            className={`text-sm mt-1 ${
              jobsGrowth >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {jobsGrowth >= 0 ? '+' : ''}
            {jobsGrowth.toFixed(1)}% vs last month
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6 text-green-500" />
            <p className="text-sm text-gray-600">Revenue This Month</p>
          </div>
          <p className="text-3xl font-bold">{formatCurrency(thisMonthRevenueValue)}</p>
          <p
            className={`text-sm mt-1 ${
              revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {revenueGrowth >= 0 ? '+' : ''}
            {revenueGrowth.toFixed(1)}% vs last month
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-purple-500" />
            <p className="text-sm text-gray-600">WTNs Generated</p>
          </div>
          <p className="text-3xl font-bold">{thisMonthWTNs}</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-orange-500" />
            <p className="text-sm text-gray-600">Avg Revenue/Job</p>
          </div>
          <p className="text-3xl font-bold">
            {thisMonthJobs > 0 ? formatCurrency(thisMonthRevenueValue / thisMonthJobs) : '£0'}
          </p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Top Customers */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold">Top Customers (by Jobs)</h2>
          </div>
          <div className="space-y-3">
            {topCustomers.map((customer, idx) => (
              <div key={idx} className="flex justify-between items-center pb-3 border-b last:border-b-0">
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-gray-500">{customer._count.jobs} jobs</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-blue-600">#{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Waste Stream Breakdown */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-green-500" />
            <h2 className="text-xl font-bold">Top Waste Streams</h2>
          </div>
          <div className="space-y-3">
            {wasteBreakdown.map((stream, idx) => (
              <div key={idx} className="pb-3 border-b last:border-b-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-medium text-sm">{stream.description}</p>
                  <p className="font-bold">{stream._count.jobs}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
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

      {/* Vehicle Utilization */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-bold">Fleet Utilization</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Jobs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utilization</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {vehicleUtilization.map((vehicle, idx) => {
                const utilizationPercent =
                  vehicleUtilization[0]._count.jobs > 0
                    ? (vehicle._count.jobs / vehicleUtilization[0]._count.jobs) * 100
                    : 0

                return (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{vehicle.registration}</td>
                    <td className="px-6 py-4">{vehicle.type}</td>
                    <td className="px-6 py-4 font-bold">{vehicle._count.jobs}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${utilizationPercent}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{utilizationPercent.toFixed(0)}%</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
