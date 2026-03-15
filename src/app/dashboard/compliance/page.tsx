import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, FileText, CalendarClock } from 'lucide-react'

export default async function CompliancePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const companyId = session.user.companyId

  const [certificates, company, hazardousConsignments, eprSubmissions] = await Promise.all([
    db.complianceCertificate.findMany({
      where: { companyId },
      orderBy: { expiryDate: 'asc' },
    }),
    db.company.findUnique({
      where: { id: companyId },
    }),
    db.hazardousConsignment.count({
      where: { companyId },
    }),
    db.ePRSubmission.count({
      where: { companyId },
    }),
  ])

  const now = new Date()
  const expiringSoon = certificates.filter(
    (cert) => cert.expiryDate <= new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)
  )
  const expired = certificates.filter((cert) => cert.expiryDate < now)
  const valid = certificates.filter(
    (cert) => cert.expiryDate >= new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)
  )

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Compliance Hub</h1>
        <p className="text-gray-600 mt-1">
          EPR, Simpler Recycling, EA reporting, certificates & regulatory obligations
        </p>
      </div>

      {/* Alerts */}
      {expiringSoon.length > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900">
                {expiringSoon.length} certificate{expiringSoon.length > 1 ? 's' : ''} expiring soon
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-orange-800">
                {expiringSoon.map((cert) => (
                  <li key={cert.id}>
                    {cert.type} expires {formatDate(cert.expiryDate)} ({cert.reference})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {expired.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-red-900">
                {expired.length} certificate{expired.length > 1 ? 's' : ''} EXPIRED
              </h3>
              <p className="text-sm text-red-800 mt-1">Immediate action required to maintain compliance</p>
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{valid.length}</p>
              <p className="text-sm text-gray-600">Valid Certificates</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <CalendarClock className="w-8 h-8 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{expiringSoon.length}</p>
              <p className="text-sm text-gray-600">Expiring Soon</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{hazardousConsignments}</p>
              <p className="text-sm text-gray-600">Hazardous Notes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-2xl font-bold">{eprSubmissions}</p>
              <p className="text-sm text-gray-600">EPR Submissions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Waste Carrier Licence */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Waste Carrier Licence</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Licence Number</p>
            <p className="font-medium">{company?.wasteCarrierLicence || 'Not Set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Expiry Date</p>
            <p className="font-medium">
              {company?.licenceExpiryDate ? formatDate(company.licenceExpiryDate) : 'Not Set'}
            </p>
          </div>
        </div>
      </div>

      {/* All Certificates */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">All Certificates</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issuer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issued</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expires</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {certificates.map((cert) => {
                const isExpired = cert.expiryDate < now
                const isExpiringSoon = cert.expiryDate <= new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)
                
                return (
                  <tr key={cert.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{cert.type.replace(/_/g, ' ')}</td>
                    <td className="px-6 py-4 font-mono text-sm">{cert.reference || '-'}</td>
                    <td className="px-6 py-4">{cert.issuer || '-'}</td>
                    <td className="px-6 py-4 text-sm">
                      {cert.issuedDate ? formatDate(cert.issuedDate) : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm">{formatDate(cert.expiryDate)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          isExpired
                            ? 'bg-red-100 text-red-700'
                            : isExpiringSoon
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {isExpired ? 'Expired' : isExpiringSoon ? 'Expiring Soon' : 'Valid'}
                      </span>
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
