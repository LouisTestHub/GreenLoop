import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { CountdownWidget } from '@/components/countdown-widget'
import { FileCheck, CheckCircle2, Clock, AlertTriangle, Send } from 'lucide-react'

export default async function EdocPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const wtns = await db.wTN.findMany({
    where: { companyId: session.user.companyId },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  const submitted = wtns.filter(w => w.submittedToEA).length
  const pending = wtns.filter(w => !w.submittedToEA).length
  const accepted = wtns.filter(w => w.eaStatus === 'ACCEPTED').length
  const rejected = wtns.filter(w => w.eaStatus === 'REJECTED').length

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">EDOC Submissions</h1>
            <p className="text-gray-600 mt-1">Electronic Duty of Care — Environment Agency reporting</p>
          </div>
          <CountdownWidget targetDate="2026-10-01" label="EDOC Mandatory" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Send className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">{submitted}</p>
              <p className="text-sm text-gray-600">Submitted to EA</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">{accepted}</p>
              <p className="text-sm text-gray-600">Accepted</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">{pending}</p>
              <p className="text-sm text-gray-600">Pending Submission</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <div>
              <p className="text-2xl font-bold">{rejected}</p>
              <p className="text-sm text-gray-600">Rejected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Readiness Checklist */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileCheck className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">EDOC Readiness Checklist</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 pb-3 border-b">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <div className="flex-1">
              <p className="font-medium">Digital WTN System</p>
              <p className="text-sm text-gray-600">Paperless waste transfer note generation</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Complete</span>
          </div>
          <div className="flex items-center gap-3 pb-3 border-b">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <div className="flex-1">
              <p className="font-medium">Environment Agency Integration</p>
              <p className="text-sm text-gray-600">API connection for automated submissions</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
          </div>
          <div className="flex items-center gap-3 pb-3 border-b">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <div className="flex-1">
              <p className="font-medium">Data Validation Rules</p>
              <p className="text-sm text-gray-600">EWC codes, waste descriptions, carrier details</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Configured</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-yellow-500" />
            <div className="flex-1">
              <p className="font-medium">Staff Training</p>
              <p className="text-sm text-gray-600">Team onboarding and EDOC compliance procedures</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">In Progress</span>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">Recent WTN Submissions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EWC Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">EA Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {wtns.slice(0, 20).map((wtn) => (
                <tr key={wtn.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm">{wtn.reference}</td>
                  <td className="px-6 py-4 font-mono text-sm">{wtn.ewcCode}</td>
                  <td className="px-6 py-4 text-sm">
                    {wtn.eaSubmittedAt ? new Date(wtn.eaSubmittedAt).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-600">{wtn.eaSubmissionId || '-'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      wtn.eaStatus === 'ACCEPTED' ? 'bg-green-100 text-green-700' :
                      wtn.eaStatus === 'REJECTED' ? 'bg-red-100 text-red-700' :
                      wtn.submittedToEA ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {wtn.eaStatus || (wtn.submittedToEA ? 'Pending' : 'Not Submitted')}
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
