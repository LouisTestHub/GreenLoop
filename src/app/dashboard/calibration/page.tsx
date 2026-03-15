import { Gauge } from 'lucide-react'

export default function CalibrationPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Gauge className="w-8 h-8 text-purple-500" />
        <div>
          <h1 className="text-3xl font-bold">Weighbridge Calibration</h1>
          <p className="text-gray-600">Trading Standards compliance & calibration certificates</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <Gauge className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Weighbridge Calibration Management</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Track annual calibration certificates, trading standards inspections, and accuracy verification. Schedule reminders, store certificates, and maintain audit trail for legal compliance.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900">Last Calibrated</p>
            <p className="text-2xl font-bold mt-2">15 Jan 2025</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900">Next Due</p>
            <p className="text-2xl font-bold mt-2">15 Jan 2026</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900">Status</p>
            <p className="text-2xl font-bold mt-2 text-green-600">Valid</p>
          </div>
        </div>
      </div>
    </div>
  )
}
