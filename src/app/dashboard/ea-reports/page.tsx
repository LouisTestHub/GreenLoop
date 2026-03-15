import { FileText } from 'lucide-react'

export default function EaReportsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold">Environment Agency Reports</h1>
          <p className="text-gray-600">Quarterly returns, waste data summaries & regulatory submissions</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <FileText className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">EA Quarterly Returns</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Automated waste data returns for permit holders. Tonnage breakdowns by EWC code, destination facility reporting, and EA portal API integration. Generate pre-filled returns based on WTNs and weighbridge data.
        </p>
      </div>
    </div>
  )
}
