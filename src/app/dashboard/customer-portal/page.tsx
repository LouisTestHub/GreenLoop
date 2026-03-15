import { User } from 'lucide-react'

export default function CustomerPortalPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold">Customer Portal</h1>
          <p className="text-gray-600">Self-service dashboard for customers to view their waste records</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <User className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Self-Service Portal</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Give customers 24/7 access to their waste transfer notes, invoices, collection schedules, and environmental reports.
          Branded portal with secure login, automatic WTN email delivery, and real-time job tracking.
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-1">View WTNs</p>
            <p className="text-sm text-gray-600">Download 2-year archive</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-1">Track Collections</p>
            <p className="text-sm text-gray-600">Real-time job status</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-1">Invoices & Payments</p>
            <p className="text-sm text-gray-600">Billing history & PDFs</p>
          </div>
        </div>
      </div>
    </div>
  )
}
