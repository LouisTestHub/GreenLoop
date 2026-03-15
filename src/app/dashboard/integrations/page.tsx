import { Settings } from 'lucide-react'

export default function IntegrationsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-8 h-8 text-gray-500" />
        <div>
          <h1 className="text-3xl font-bold">Integrations</h1>
          <p className="text-gray-600">Connect third-party tools: Xero, Sage, GPS providers, Google Maps</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Xero Accounting</h3>
          <p className="text-sm text-gray-600 mb-4">Sync invoices, payments, and customer data with Xero.</p>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Not Connected</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
          <h3 className="font-bold text-lg mb-2">Google Maps API</h3>
          <p className="text-sm text-gray-600 mb-4">Route optimization, geocoding, and live tracking.</p>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Not Connected</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
          <h3 className="font-bold text-lg mb-2">Teletrac Navman GPS</h3>
          <p className="text-sm text-gray-600 mb-4">Vehicle telematics, live tracking, and driver behavior.</p>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Not Connected</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-500">
          <h3 className="font-bold text-lg mb-2">Environment Agency API</h3>
          <p className="text-sm text-gray-600 mb-4">Automated WTN submissions and EDOC compliance.</p>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
        </div>
      </div>
    </div>
  )
}
