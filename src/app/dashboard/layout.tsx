import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  MapPin,
  Truck,
  Users,
  Receipt,
  Shield,
  Scale,
  BarChart3,
  Settings,
} from 'lucide-react'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/jobs', label: 'Jobs', icon: FileText },
    { href: '/dashboard/routes', label: 'Routes', icon: MapPin },
    { href: '/dashboard/wtns', label: 'Waste Tracking', icon: FileText },
    { href: '/dashboard/fleet', label: 'Fleet', icon: Truck },
    { href: '/dashboard/drivers', label: 'Drivers', icon: Users },
    { href: '/dashboard/customers', label: 'Customers', icon: Users },
    { href: '/dashboard/invoices', label: 'Invoices', icon: Receipt },
    { href: '/dashboard/compliance', label: 'Compliance', icon: Shield },
    { href: '/dashboard/weighbridge', label: 'Weighbridge', icon: Scale },
    { href: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-emerald-400">GreenLoop</h1>
          <p className="text-sm text-gray-400 mt-1">{session.user.companyId}</p>
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

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-800 p-3 rounded-lg text-sm">
            <p className="text-gray-400">Signed in as</p>
            <p className="font-semibold truncate">{session.user.email}</p>
            <p className="text-xs text-gray-500 mt-1">{session.user.role}</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
