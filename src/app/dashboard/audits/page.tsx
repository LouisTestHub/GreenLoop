import { ClipboardList } from 'lucide-react'

export default function AuditsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <ClipboardList className="w-8 h-8 text-purple-500" />
        <div>
          <h1 className="text-3xl font-bold">Compliance Audits</h1>
          <p className="text-gray-600">Internal checks, EA inspections & audit trail logs</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <ClipboardList className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Audit & Inspection Management</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track EA site inspections, internal compliance audits, duty of care checks, and ISO 14001 reviews. Store findings, corrective actions, and evidence. Generate audit reports for management and regulators.
        </p>
      </div>
    </div>
  )
}
