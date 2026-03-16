'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send, CheckCircle2, Clock, AlertTriangle, XCircle, RefreshCw } from 'lucide-react'

const demoSubmissions = [
  { id: 'EA-2026-0012', type: 'Quarterly Return', period: 'Q4 2025', status: 'ACCEPTED', submittedAt: '15 Jan 2026', records: 245, tonnage: 1842.5 },
  { id: 'EA-2026-0018', type: 'Quarterly Return', period: 'Q1 2026', status: 'PENDING', submittedAt: '12 Mar 2026', records: 198, tonnage: 1567.3 },
  { id: 'EA-2025-0042', type: 'Annual Return', period: '2025', status: 'ACCEPTED', submittedAt: '28 Feb 2026', records: 890, tonnage: 7125.8 },
  { id: 'EA-2025-0038', type: 'Quarterly Return', period: 'Q3 2025', status: 'ACCEPTED', submittedAt: '15 Oct 2025', records: 267, tonnage: 2015.1 },
  { id: 'EA-2025-0029', type: 'Quarterly Return', period: 'Q2 2025', status: 'REJECTED', submittedAt: '14 Jul 2025', records: 231, tonnage: 1789.4 },
]

export default function EASubmissionsPage() {
  const [submitting, setSubmitting] = useState(false)

  const handleNewSubmission = () => {
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 2000)
  }

  const statusStyles: Record<string, { bg: string; text: string; icon: typeof CheckCircle2 }> = {
    ACCEPTED: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle2 },
    PENDING: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: Clock },
    REJECTED: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle },
    SUBMITTED: { bg: 'bg-blue-100', text: 'text-blue-700', icon: Send },
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/dashboard/compliance" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">EA Submissions</h1>
      </div>
      <p className="text-gray-600 mb-8 ml-9">Manage Environment Agency data submissions.</p>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Total Submissions</p>
          <p className="text-3xl font-bold mt-1">{demoSubmissions.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Accepted</p>
          <p className="text-3xl font-bold text-emerald-500 mt-1">{demoSubmissions.filter(s => s.status === 'ACCEPTED').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-3xl font-bold text-yellow-500 mt-1">{demoSubmissions.filter(s => s.status === 'PENDING').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Rejected</p>
          <p className="text-3xl font-bold text-red-500 mt-1">{demoSubmissions.filter(s => s.status === 'REJECTED').length}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Submission History</h2>
        <div className="flex gap-2">
          <Link
            href="/admin/compliance/ea-settings"
            className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2"
          >
            ⚙ EA Settings
          </Link>
          <Link
            href="/admin/compliance/audit"
            className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2"
          >
            📋 Audit Trail
          </Link>
          <button
            onClick={handleNewSubmission}
            disabled={submitting}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
          >
            {submitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {submitting ? 'Submitting...' : 'New Submission'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Reference</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Type</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Period</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Submitted</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Records</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Tonnage</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {demoSubmissions.map((sub) => {
              const style = statusStyles[sub.status] || statusStyles.PENDING
              const StatusIcon = style.icon
              return (
                <tr key={sub.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">{sub.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.period}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.submittedAt}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.records}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.tonnage.toLocaleString()}t</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${style.bg} ${style.text}`}>
                      <StatusIcon className="w-3 h-3" /> {sub.status}
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
