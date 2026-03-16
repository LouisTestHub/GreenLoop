import Link from 'next/link'
import { ArrowLeft, Shield, User, FileText, Scale, Settings } from 'lucide-react'

const auditEntries = [
  { id: 1, timestamp: '16 Mar 2026, 09:45', user: 'Sarah Johnson', action: 'Created WTN', entity: 'WTN-2026-0234', entityType: 'WTN', details: 'New WTN for Smith & Sons Ltd — 0.8t General Waste' },
  { id: 2, timestamp: '16 Mar 2026, 09:30', user: 'System', action: 'EA Submission Sent', entity: 'EA-2026-0018', entityType: 'EA Submission', details: 'Q1 2026 quarterly return submitted (198 records, 1,567.3t)' },
  { id: 3, timestamp: '16 Mar 2026, 08:15', user: 'Dave Brown', action: 'Completed Job', entity: 'JOB-2026-0456', entityType: 'Job', details: 'Job completed with signature and 2 photos' },
  { id: 4, timestamp: '15 Mar 2026, 16:30', user: 'Sarah Johnson', action: 'Updated Customer', entity: 'Metro Office Supplies', entityType: 'Customer', details: 'Updated billing address and payment terms' },
  { id: 5, timestamp: '15 Mar 2026, 14:22', user: 'System', action: 'Weighbridge Reading', entity: 'WB-2026-0089', entityType: 'Weighbridge', details: 'Net weight: 2,450 kg — AB21 XYZ inbound' },
  { id: 6, timestamp: '15 Mar 2026, 11:00', user: 'Sarah Johnson', action: 'Generated Invoice', entity: 'INV-2026-0089', entityType: 'Invoice', details: '£485.00 invoice for Essex Skip Hire Ltd' },
  { id: 7, timestamp: '15 Mar 2026, 09:00', user: 'System', action: 'Route Optimised', entity: 'R-2026-0089', entityType: 'Route', details: 'Route A optimised: 18% distance reduction' },
  { id: 8, timestamp: '14 Mar 2026, 17:00', user: 'Sarah Johnson', action: 'EA Settings Updated', entity: 'EA Config', entityType: 'Settings', details: 'Changed auto-submit frequency to quarterly' },
  { id: 9, timestamp: '14 Mar 2026, 15:45', user: 'Mike Rogers', action: 'Contamination Flagged', entity: 'JOB-2026-0451', entityType: 'Job', details: 'Contamination found: non-recyclable plastics in recycling bin' },
  { id: 10, timestamp: '14 Mar 2026, 10:00', user: 'System', action: 'Certificate Expiry Alert', entity: 'Waste Carrier Reg', entityType: 'Certificate', details: 'Waste carrier registration expires in 28 days' },
]

const iconMap: Record<string, typeof FileText> = {
  WTN: FileText,
  'EA Submission': Shield,
  Job: User,
  Customer: User,
  Weighbridge: Scale,
  Invoice: FileText,
  Route: FileText,
  Settings: Settings,
  Certificate: Shield,
}

export default function AuditTrailPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/admin/compliance/ea-submissions" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Compliance Audit Trail</h1>
      </div>
      <p className="text-gray-600 mb-8 ml-9">Complete log of all compliance-related actions.</p>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b px-6 py-3 bg-gray-50 flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-600">Showing {auditEntries.length} entries</span>
          <div className="flex gap-2">
            <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Actions</option>
              <option>WTN</option>
              <option>EA Submission</option>
              <option>Job</option>
              <option>Weighbridge</option>
            </select>
            <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Users</option>
              <option>Sarah Johnson</option>
              <option>Dave Brown</option>
              <option>System</option>
            </select>
          </div>
        </div>

        <div className="divide-y">
          {auditEntries.map((entry) => {
            const Icon = iconMap[entry.entityType] || FileText
            return (
              <div key={entry.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{entry.action}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-emerald-600 font-medium">{entry.entity}</span>
                    </div>
                    <p className="text-sm text-gray-600">{entry.details}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                      <span>{entry.timestamp}</span>
                      <span>·</span>
                      <span>{entry.user}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
