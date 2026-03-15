import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatCurrency, formatDate } from '@/lib/utils'
import { CountdownWidget } from '@/components/countdown-widget'
import {
  FileText,
  Users,
  Truck,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  Clock,
  DollarSign,
} from 'lucide-react'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.companyId) {
    return <div>Loading...</div>
  }

  const companyId = session.user.companyId

  // Fetch dashboard data
  const [
    jobsToday,
    jobsThisMonth,
    completedJobsToday,
    customers,
    vehicles,
    activeVehicles,
    wtnsThisMonth,
    invoices,
    overdueInvoices,
    certificates,
  ] = await Promise.all([
    db.job.count({
      where: {
        companyId,
        scheduledDate: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
          lt: new Date(new Date().setHours(23, 59, 59, 999)),
        },
      },
    }),
    db.job.count({
      where: {
        companyId,
        scheduledDate: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    }),
    db.job.count({
      where: {
        companyId,
        status: 'COMPLETED',
        completedDate: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    }),
    db.customer.count({ where: { companyId } }),
    db.vehicle.count({ where: { companyId } }),
    db.vehicle.count({ where: { companyId, status: 'ACTIVE' } }),
    db.wTN.count({
      where: {
        companyId,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    }),
    db.invoice.findMany({
      where: { companyId },
      orderBy: { invoiceDate: 'desc' },
      take: 5,
      include: { customer: true },
    }),
    db.invoice.count({
      where: {
        companyId,
        status: 'OVERDUE',
      },
    }),
    db.complianceCertificate.findMany({
      where: {
        companyId,
        expiryDate: {
          lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Next 30 days
        },
      },
      orderBy: { expiryDate: 'asc' },
      take: 5,
    }),
  ])

  // Calculate revenue
  const totalRevenue = invoices
    .filter((inv) => inv.status === 'PAID')
    .reduce((sum, inv) => sum + inv.total, 0)

  const outstandingRevenue = invoices
    .filter((inv) => ['SENT', 'VIEWED', 'OVERDUE'].includes(inv.status))
    .reduce((sum, inv) => sum + inv.total, 0)

  const stats = [
    {
      label: 'Jobs Today',
      value: `${completedJobsToday}/${jobsToday}`,
      subtext: 'completed',
      icon: FileText,
      color: 'text-blue-500',
    },
    {
      label: 'Active Vehicles',
      value: `${activeVehicles}/${vehicles}`,
      subtext: 'on road',
      icon: Truck,
      color: 'text-emerald-500',
    },
    {
      label: 'Revenue (MTD)',
      value: formatCurrency(totalRevenue),
      subtext: 'paid',
      icon: DollarSign,
      color: 'text-green-500',
    },
    {
      label: 'Outstanding',
      value: formatCurrency(outstandingRevenue),
      subtext: `${overdueInvoices} overdue`,
      icon: AlertTriangle,
      color: 'text-orange-500',
    },
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {session.user.name}</p>
        </div>
        
        <div>
          <CountdownWidget 
            targetDate="2026-10-01" 
            label="EDOC Deadline (Waste Sites)"
          />
        </div>
      </div>

      {/* Compliance Alerts */}
      {certificates.length > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900">
                {certificates.length} certificate{certificates.length > 1 ? 's' : ''} expiring soon
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-orange-800">
                {certificates.map((cert) => (
                  <li key={cert.id}>
                    {cert.type} expires {formatDate(cert.expiryDate)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">Jobs This Month</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Total Jobs</span>
              <span className="font-bold">{jobsThisMonth}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">WTNs Generated</span>
              <span className="font-bold">{wtnsThisMonth}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Customers Served</span>
              <span className="font-bold">{customers}</span>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4">Recent Invoices</h2>
          <div className="space-y-2">
            {invoices.slice(0, 5).map((invoice) => (
              <div
                key={invoice.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium text-sm">{invoice.customer.name}</p>
                  <p className="text-xs text-gray-500">{invoice.reference}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">{formatCurrency(invoice.total)}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      invoice.status === 'PAID'
                        ? 'bg-green-100 text-green-700'
                        : invoice.status === 'OVERDUE'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Create Job', href: '/dashboard/jobs/new' },
            { label: 'View WTNs', href: '/dashboard/wtns' },
            { label: 'Manage Fleet', href: '/dashboard/fleet' },
            { label: 'Run Report', href: '/dashboard/reports' },
          ].map((action, idx) => (
            <a
              key={idx}
              href={action.href}
              className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium text-sm"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
