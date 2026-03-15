import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { Building2, Users, CreditCard, Bell, FileText, Shield } from 'lucide-react'

export default async function SettingsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const companyId = session.user.companyId

  const [company, users, certificates] = await Promise.all([
    db.company.findUnique({
      where: { id: companyId },
    }),
    db.user.findMany({
      where: { companyId },
      orderBy: { name: 'asc' },
    }),
    db.complianceCertificate.findMany({
      where: { companyId },
      orderBy: { expiryDate: 'asc' },
      take: 3,
    }),
  ])

  if (!company) return <div>Company not found</div>

  const roleLabels: Record<string, string> = {
    ADMIN: 'Administrator',
    OPERATOR: 'Operator',
    DISPATCHER: 'Dispatcher',
    DRIVER: 'Driver',
    COMPLIANCE_OFFICER: 'Compliance Officer',
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600 mt-1">
          Company profile, team management, subscription & system configuration
        </p>
      </div>

      {/* Company Information */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Company Information</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600">Company Name</p>
            <p className="font-medium">{company.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Registration Number</p>
            <p className="font-medium">{company.registrationNumber || 'Not Set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">VAT Number</p>
            <p className="font-medium">{company.vatNumber || 'Not Set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Waste Carrier Licence</p>
            <p className="font-medium font-mono">{company.wasteCarrierLicence}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Address</p>
            <p className="font-medium">{company.address}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Postcode</p>
            <p className="font-medium">{company.postcode}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium">{company.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium">{company.email}</p>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-green-500" />
          <h2 className="text-xl font-bold">Subscription</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600">Current Plan</p>
            <p className="font-bold text-lg">{company.subscriptionPlan}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                company.subscriptionStatus === 'ACTIVE'
                  ? 'bg-green-100 text-green-700'
                  : company.subscriptionStatus === 'TRIAL'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {company.subscriptionStatus}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-600">Stripe Customer ID</p>
            <p className="font-medium font-mono text-xs">
              {company.stripeCustomerId || 'Not Connected'}
            </p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-purple-500" />
          <h2 className="text-xl font-bold">Team Members</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                      {roleLabels[user.role] || user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.phone || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.lastLoginAt ? formatDate(user.lastLoginAt) : 'Never'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Compliance Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-bold">Quick Compliance Overview</h2>
        </div>
        <div className="space-y-3">
          {certificates.map((cert) => (
            <div key={cert.id} className="flex justify-between items-center pb-3 border-b last:border-b-0">
              <div>
                <p className="font-medium">{cert.type.replace(/_/g, ' ')}</p>
                <p className="text-sm text-gray-500">{cert.reference}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Expires: {formatDate(cert.expiryDate)}</p>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${
                    new Date(cert.expiryDate) < new Date()
                      ? 'bg-red-100 text-red-700'
                      : new Date(cert.expiryDate) <=
                        new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {new Date(cert.expiryDate) < new Date()
                    ? 'Expired'
                    : new Date(cert.expiryDate) <= new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
                    ? 'Expiring Soon'
                    : 'Valid'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Preferences */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-bold">System Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive alerts for jobs, WTNs, and compliance</p>
            </div>
            <div className="text-green-600 font-medium">Enabled</div>
          </div>
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="font-medium">SMS Alerts</p>
              <p className="text-sm text-gray-500">Urgent notifications via text message</p>
            </div>
            <div className="text-gray-400 font-medium">Disabled</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Automatic WTN Generation</p>
              <p className="text-sm text-gray-500">Generate WTNs on job completion</p>
            </div>
            <div className="text-green-600 font-medium">Enabled</div>
          </div>
        </div>
      </div>
    </div>
  )
}
