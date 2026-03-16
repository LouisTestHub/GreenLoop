import { User, Building2, Bell, Lock } from 'lucide-react'

export default function PortalSettings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your portal account and preferences.</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" defaultValue="John Smith" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" defaultValue="john@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" defaultValue="07700 900000" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Notifications</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Collection reminders', desc: 'Get notified 24 hours before scheduled collections', checked: true },
              { label: 'Invoice alerts', desc: 'Receive email when new invoices are generated', checked: true },
              { label: 'WTN ready', desc: 'Notification when WTNs are available to download', checked: true },
              { label: 'Monthly reports', desc: 'Receive monthly recycling performance reports', checked: false },
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

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold">Change Password</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
