import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link href="/edoc" className="hover:text-emerald-400 transition-colors">EDOC Compliance</Link></li>
              <li><Link href="/comparison" className="hover:text-emerald-400 transition-colors">Comparison</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Skip Hire</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Commercial Waste</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Scrap Metal Recycling</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Waste Transfer Stations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</Link></li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">EDOC Guide</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">API Docs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/opportunity" className="hover:text-emerald-400 transition-colors">Opportunity</Link></li>
              <li><Link href="/market" className="hover:text-emerald-400 transition-colors">Market Research</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@greenloop.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0800 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-semibold">
              ✓ EDOC Ready
            </span>
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-semibold">
              ✓ EA Compliant
            </span>
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-semibold">
              ✓ 500+ Waste Operators
            </span>
          </div>

          <div className="text-center text-sm text-gray-400 pt-4">
            © {new Date().getFullYear()} GreenLoop by Data & Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
