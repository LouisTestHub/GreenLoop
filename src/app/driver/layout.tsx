import Link from 'next/link'
import {
  LayoutDashboard,
  MapPin,
  FileText,
  Clock,
} from 'lucide-react'

export default function DriverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-first top nav */}
      <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-emerald-400">GreenLoop Driver</h1>
        <span className="text-xs text-gray-400">v1.0</span>
      </header>

      <main className="pb-20">
        {children}
      </main>

      {/* Bottom nav bar (mobile-style) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-50">
        {[
          { href: '/driver', label: 'Dashboard', icon: LayoutDashboard },
          { href: '/driver/route', label: 'Route', icon: MapPin },
          { href: '/driver/job', label: 'Jobs', icon: FileText },
          { href: '/driver/history', label: 'History', icon: Clock },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-500 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
