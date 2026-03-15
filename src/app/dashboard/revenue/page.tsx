import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatCurrency } from '@/lib/utils'
import { TrendingUp } from 'lucide-react'

export default async function RevenuePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const now = new Date()
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  const [thisMonth, lastMonth, ytd] = await Promise.all([
    db.invoice.aggregate({
      where: {
        companyId: session.user.companyId,
        status: 'PAID',
        paidDate: { gte: thisMonthStart },
      },
      _sum: { total: true },
    }),
    db.invoice.aggregate({
      where: {
        companyId: session.user.companyId,
        status: 'PAID',
        paidDate: {
          gte: new Date(now.getFullYear(), now.getMonth() - 1, 1),
          lt: thisMonthStart,
        },
      },
      _sum: { total: true },
    }),
    db.invoice.aggregate({
      where: {
        companyId: session.user.companyId,
        status: 'PAID',
        paidDate: { gte: new Date(now.getFullYear(), 0, 1) },
      },
      _sum: { total: true },
    }),
  ])

  const thisMonthRevenue = thisMonth._sum.total || 0
  const lastMonthRevenue = lastMonth._sum.total || 0
  const ytdRevenue = ytd._sum.total || 0

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold">Revenue Reports</h1>
          <p className="text-gray-600">Financial performance, growth trends & revenue forecasting</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-3xl font-bold mt-2">{formatCurrency(thisMonthRevenue)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Last Month</p>
          <p className="text-3xl font-bold mt-2">{formatCurrency(lastMonthRevenue)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Year to Date</p>
          <p className="text-3xl font-bold mt-2">{formatCurrency(ytdRevenue)}</p>
        </div>
      </div>
    </div>
  )
}
