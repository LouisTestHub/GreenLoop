import Link from 'next/link'
import { ArrowLeft, Shield, Key, Globe, Bell } from 'lucide-react'

export default function EASettingsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/admin/compliance/ea-submissions" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">EA Configuration</h1>
      </div>
      <p className="text-gray-600 mb-8 ml-9">Configure your Environment Agency integration settings.</p>

      <div className="max-w-2xl space-y-6">
        {/* API Credentials */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Key className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">API Credentials</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EA API Key</label>
              <input
                type="password"
                defaultValue="sk-ea-xxxxxxxxxxxxxxxxxxxx"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EA Organisation ID</label>
              <input
                type="text"
                defaultValue="EA-ORG-12345"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Environment</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                <option>Sandbox (Testing)</option>
                <option>Production</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submission Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Submission Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Auto-Submit Frequency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                <option>Manual Only</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Return Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                <option>Quarterly Return</option>
                <option>Annual Return</option>
                <option>Ad-hoc Submission</option>
              </select>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              <div>
                <p className="font-medium text-sm">Include weighbridge data</p>
                <p className="text-xs text-gray-500">Automatically attach weighbridge readings to submissions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              <div>
                <p className="font-medium text-sm">Validate before submission</p>
                <p className="text-xs text-gray-500">Run data validation checks before submitting to EA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Permit Details */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Permit Details</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EA Permit Number</label>
              <input
                type="text"
                defaultValue="EPR/AB1234CD"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waste Carrier Registration</label>
              <input
                type="text"
                defaultValue="CBDU123456"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Notifications</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Submission accepted', desc: 'Email when EA accepts a submission', checked: true },
              { label: 'Submission rejected', desc: 'Email when EA rejects a submission', checked: true },
              { label: 'Deadline reminder', desc: 'Reminder 7 days before submission deadline', checked: true },
              { label: 'Auto-submit confirmation', desc: 'Confirm when auto-submissions are sent', checked: false },
            ].map((n, idx) => (
              <div key={idx} className="flex items-start justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium text-sm">{n.label}</p>
                  <p className="text-xs text-gray-500">{n.desc}</p>
                </div>
                <input type="checkbox" defaultChecked={n.checked} className="mt-1 h-4 w-4 text-emerald-500 rounded" />
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  )
}
