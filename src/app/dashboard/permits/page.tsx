import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'

export default async function PermitsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const certificates = await db.complianceCertificate.findMany({
    where: { companyId: session.user.companyId },
    orderBy: { expiryDate: 'asc' },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-8 h-8 text-red-500" />
        <div>
          <h1 className="text-3xl font-bold">Permits & Licences</h1>
          <p className="text-gray-600">Waste carrier licence, EA permits, exemptions & registrations</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">All Permits & Certificates</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issuer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {certificates.map((cert) => {
              const isExpired = new Date(cert.expiryDate) < new Date()
              const expiringSoon = new Date(cert.expiryDate) <= new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
              return (
                <tr key={cert.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{cert.type.replace(/_/g, ' ')}</td>
                  <td className="px-6 py-4 font-mono text-sm">{cert.reference || '-'}</td>
                  <td className="px-6 py-4">{cert.issuer || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{formatDate(cert.expiryDate)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      isExpired ? 'bg-red-100 text-red-700' :
                      expiringSoon ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {isExpired ? 'Expired' : expiringSoon ? 'Expiring Soon' : 'Valid'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
