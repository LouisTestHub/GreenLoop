import Link from 'next/link'
import {
  LayoutDashboard,
  Truck,
  Receipt,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { href: '/portal', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/portal/collections', label: 'Collections', icon: Truck },
    { href: '/portal/invoices', label: 'Invoices', icon: Receipt },
    { href: '/portal/wtns', label: 'WTNs', icon: FileText },
    { href: '/portal/reports', label: 'Recycling Reports', icon: BarChart3 },
    { href: '/portal/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-emerald-400">GreenLoop</h1>
          <p className="text-xs text-gray-400 mt-1">Customer Portal</p>
        </div>

        <nav className="mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors text-gray-300 hover:text-white"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-4">
          <Link
            href="/portal-login"
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors text-gray-400 hover:text-white"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
