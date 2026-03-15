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
  Calendar,
  Map,
  TrendingUp,
  DollarSign,
  Building2,
  UserPlus,
  Package,
  Gauge,
  FileCheck,
  ClipboardList,
  Wrench,
  Radio,
  AlertTriangle,
  Leaf,
  PieChart,
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

  // Menu structure with groups
  const menuGroups = [
    {
      label: 'Overview',
      items: [
        { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      ],
    },
    {
      label: 'Operations',
      items: [
        { href: '/dashboard/jobs', label: 'Jobs', icon: FileText },
        { href: '/dashboard/schedule', label: 'Schedule', icon: Calendar },
        { href: '/dashboard/routes', label: 'Route Planner', icon: MapPin },
        { href: '/dashboard/routes/optimiser', label: 'Route Optimiser', icon: TrendingUp },
        { href: '/dashboard/live-map', label: 'Live Map', icon: Map },
        { href: '/dashboard/driver', label: 'Driver App', icon: Radio },
      ],
    },
    {
      label: 'Waste Tracking',
      items: [
        { href: '/dashboard/wtns', label: 'Waste Transfer Notes', icon: FileText },
        { href: '/dashboard/edoc', label: 'EDOC Submissions', icon: FileCheck },
        { href: '/admin/edoc/submit', label: 'Submit EDOC', icon: FileCheck },
        { href: '/dashboard/duty-of-care', label: 'Duty of Care', icon: ClipboardList },
        { href: '/dashboard/consignments', label: 'Consignment Notes', icon: FileText },
      ],
    },
    {
      label: 'Customers',
      items: [
        { href: '/dashboard/customers', label: 'Directory', icon: Users },
        { href: '/dashboard/sites', label: 'Sites', icon: Building2 },
        { href: '/dashboard/contracts', label: 'Contracts', icon: FileCheck },
        { href: '/dashboard/customer-portal', label: 'Customer Portal', icon: UserPlus },
        { href: '/portal', label: 'Self-Service Portal', icon: UserPlus },
      ],
    },
    {
      label: 'Fleet',
      items: [
        { href: '/dashboard/fleet', label: 'Vehicles', icon: Truck },
        { href: '/dashboard/drivers', label: 'Drivers', icon: Users },
        { href: '/dashboard/maintenance', label: 'Maintenance', icon: Wrench },
        { href: '/dashboard/gps-tracking', label: 'GPS Tracking', icon: Radio },
      ],
    },
    {
      label: 'Weighbridge',
      items: [
        { href: '/dashboard/weighbridge', label: 'Weighbridge Records', icon: Scale },
        { href: '/admin/weighbridge/live', label: 'Live Feed', icon: Radio },
        { href: '/dashboard/tickets', label: 'Tickets', icon: Receipt },
        { href: '/dashboard/calibration', label: 'Calibration', icon: Gauge },
      ],
    },
    {
      label: 'Compliance',
      items: [
        { href: '/dashboard/compliance', label: 'EDOC Dashboard', icon: Shield },
        { href: '/dashboard/ea-reports', label: 'EA Reports', icon: FileText },
        { href: '/dashboard/permits', label: 'Permits', icon: AlertTriangle },
        { href: '/admin/compliance/permits', label: 'Permit Management', icon: Shield },
        { href: '/admin/compliance/contamination', label: 'Contamination Tracking', icon: AlertTriangle },
        { href: '/dashboard/audits', label: 'Audits', icon: ClipboardList },
      ],
    },
    {
      label: 'Finance',
      items: [
        { href: '/dashboard/invoices', label: 'Invoices', icon: Receipt },
        { href: '/dashboard/pricing', label: 'Pricing', icon: DollarSign },
        { href: '/admin/pricing', label: 'Pricing & Contracts', icon: DollarSign },
        { href: '/dashboard/revenue', label: 'Revenue Reports', icon: TrendingUp },
        { href: '/dashboard/costs', label: 'Costs', icon: Package },
      ],
    },
    {
      label: 'Reports',
      items: [
        { href: '/dashboard/reports', label: 'Operations Dashboard', icon: BarChart3 },
        { href: '/dashboard/waste-analytics', label: 'Waste Analytics', icon: PieChart },
        { href: '/dashboard/environmental', label: 'Environmental Impact', icon: Leaf },
        { href: '/admin/reports/environmental', label: 'Environmental Dashboard', icon: Leaf },
        { href: '/dashboard/kpis', label: 'KPIs', icon: TrendingUp },
      ],
    },
    {
      label: 'Settings',
      items: [
        { href: '/dashboard/settings', label: 'Company', icon: Building2 },
        { href: '/dashboard/users', label: 'Users', icon: Users },
        { href: '/dashboard/waste-types', label: 'Waste Types', icon: Package },
        { href: '/dashboard/integrations', label: 'Integrations', icon: Settings },
        { href: '/admin/integrations/hardware', label: 'Hardware Integrations', icon: Radio },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex-shrink-0 flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-emerald-400">GreenLoop</h1>
          <p className="text-sm text-gray-400 mt-1 truncate">{session.user.companyId}</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="mb-6">
              <div className="px-4 mb-2">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {group.label}
                </h3>
              </div>
              <div>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800 transition-colors text-gray-300 hover:text-white"
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm truncate">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-800 p-3 rounded-lg text-sm">
            <p className="text-gray-400 text-xs">Signed in as</p>
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
