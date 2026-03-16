'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GL</span>
            </div>
            <span className="font-bold text-xl text-slate-900">GreenLoop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-slate-700 hover:text-emerald-500 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-500 transition-colors">
              Pricing
            </Link>
            <Link href="/edoc" className="text-slate-700 hover:text-emerald-500 transition-colors">
              EDOC Compliance
            </Link>
            <Link href="/case-studies" className="text-slate-700 hover:text-emerald-500 transition-colors">
              Case Studies
            </Link>
            <Link href="/opportunity" className="text-slate-700 hover:text-emerald-500 transition-colors">
              Opportunity
            </Link>
            <Link href="/market" className="text-slate-700 hover:text-emerald-500 transition-colors">
              Market Research
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-500 transition-colors">
              About
            </Link>
            <Link
              href="/login"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/features" className="block py-2 text-slate-700 hover:text-emerald-500">
              Features
            </Link>
            <Link href="/pricing" className="block py-2 text-slate-700 hover:text-emerald-500">
              Pricing
            </Link>
            <Link href="/edoc" className="block py-2 text-slate-700 hover:text-emerald-500">
              EDOC Compliance
            </Link>
            <Link href="/case-studies" className="block py-2 text-slate-700 hover:text-emerald-500">
              Case Studies
            </Link>
            <Link href="/opportunity" className="block py-2 text-slate-700 hover:text-emerald-500">
              Opportunity
            </Link>
            <Link href="/market" className="block py-2 text-slate-700 hover:text-emerald-500">
              Market Research
            </Link>
            <Link href="/about" className="block py-2 text-slate-700 hover:text-emerald-500">
              About
            </Link>
            <Link
              href="/login"
              className="block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold text-center"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
