import Link from 'next/link'
import { ArrowLeft, Scale, Wifi, Printer, Bell } from 'lucide-react'

export default function WeighbridgeSettingsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/admin/weighbridge" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Weighbridge Settings</h1>
      </div>
      <p className="text-gray-600 mb-8 ml-9">Configure weighbridge hardware and preferences.</p>

      <div className="max-w-2xl space-y-6">
        {/* Connection */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wifi className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Connection</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weighbridge Model</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                <option>Avery Weigh-Tronix ZM301</option>
                <option>Rice Lake 920i</option>
                <option>Mettler Toledo IND570</option>
                <option>Generic Serial (RS232)</option>
                <option>Generic TCP/IP</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Connection Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                <option>TCP/IP (Network)</option>
                <option>Serial (COM Port)</option>
                <option>USB</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IP Address / Port</label>
                <input
                  type="text"
                  defaultValue="192.168.1.100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Port Number</label>
                <input
                  type="text"
                  defaultValue="3001"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-mono"
                />
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-sm text-emerald-700 flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full" />
              Connected — Last reading: 2 seconds ago
            </div>
          </div>
        </div>

        {/* Scale Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Scale Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                  <option>Kilograms (kg)</option>
                  <option>Tonnes (t)</option>
                  <option>Pounds (lbs)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Capacity</label>
                <input
                  type="number"
                  defaultValue={60000}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation (d)</label>
                <input
                  type="number"
                  defaultValue={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stability Threshold</label>
                <input
                  type="number"
                  defaultValue={20}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              <div>
                <p className="font-medium text-sm">Auto-calculate net weight</p>
                <p className="text-xs text-gray-500">Automatically calculate net = gross - tare when both weights are recorded</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              <div>
                <p className="font-medium text-sm">Auto-attach to WTN</p>
                <p className="text-xs text-gray-500">Automatically link weighbridge readings to matching WTNs by vehicle registration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Printer className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Ticket & Printing</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              <div>
                <p className="font-medium text-sm">Auto-print tickets</p>
                <p className="text-xs text-gray-500">Print weighbridge ticket automatically when net weight is calculated</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              <div>
                <p className="font-medium text-sm">Include digital signature on ticket</p>
                <p className="text-xs text-gray-500">Add operator signature to printed tickets</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Reference Prefix</label>
              <input
                type="text"
                defaultValue="WB"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
          </div>
        </div>

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  )
}
