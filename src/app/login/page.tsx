'use client'

import { signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Loader2, Recycle, Shield, FileCheck, Truck, ArrowRight, User, UserCog, Scale, Navigation } from 'lucide-react'

function EdocCountdown() {
  const [days, setDays] = useState(0)
  useEffect(() => {
    const target = new Date('2026-10-01T00:00:00Z').getTime()
    const update = () => setDays(Math.max(0, Math.ceil((target - Date.now()) / 86400000)))
    update()
    const i = setInterval(update, 60000)
    return () => clearInterval(i)
  }, [])
  return (
    <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium">
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span>EDOC mandatory in <strong className="text-white">{days} days</strong></span>
    </div>
  )
}

function WasteIllustration() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      {/* Background circles */}
      <circle cx="200" cy="160" r="140" fill="#10b981" opacity="0.06" />
      <circle cx="200" cy="160" r="100" fill="#10b981" opacity="0.08" />

      {/* Recycling truck */}
      <rect x="80" y="170" width="160" height="80" rx="8" fill="#1e293b" />
      <rect x="85" y="175" width="100" height="50" rx="4" fill="#10b981" opacity="0.9" />
      <rect x="190" y="185" width="45" height="40" rx="4" fill="#334155" />
      {/* Windscreen */}
      <rect x="193" y="188" width="39" height="20" rx="2" fill="#94a3b8" opacity="0.5" />
      {/* Wheels */}
      <circle cx="115" cy="255" r="14" fill="#0f172a" />
      <circle cx="115" cy="255" r="8" fill="#334155" />
      <circle cx="210" cy="255" r="14" fill="#0f172a" />
      <circle cx="210" cy="255" r="8" fill="#334155" />
      {/* Recycling symbol on truck */}
      <path d="M125 195 L135 185 L145 195 M135 185 L135 210" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M120 210 L135 210 L150 210" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="135" cy="200" r="12" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 3" />

      {/* Digital tablet floating above */}
      <rect x="240" y="80" width="100" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <rect x="248" y="92" width="84" height="110" rx="4" fill="#0f172a" />
      {/* Screen content - checklist */}
      <rect x="256" y="100" width="60" height="4" rx="2" fill="#10b981" />
      <rect x="256" y="112" width="68" height="3" rx="1.5" fill="#475569" />
      <rect x="256" y="120" width="50" height="3" rx="1.5" fill="#475569" />
      {/* Checkmarks */}
      <circle cx="262" cy="136" r="5" fill="#10b981" opacity="0.2" />
      <path d="M259 136 L261 138 L265 134" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="272" y="134" width="40" height="3" rx="1.5" fill="#475569" />
      <circle cx="262" cy="150" r="5" fill="#10b981" opacity="0.2" />
      <path d="M259 150 L261 152 L265 148" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="272" y="148" width="35" height="3" rx="1.5" fill="#475569" />
      <circle cx="262" cy="164" r="5" fill="#f59e0b" opacity="0.2" />
      <rect x="272" y="162" width="45" height="3" rx="1.5" fill="#475569" />
      {/* Progress bar */}
      <rect x="256" y="178" width="68" height="6" rx="3" fill="#1e293b" />
      <rect x="256" y="178" width="48" height="6" rx="3" fill="#10b981" />
      {/* Notch */}
      <rect x="275" y="83" width="30" height="4" rx="2" fill="#0f172a" />

      {/* Connection lines */}
      <path d="M185 200 Q220 150 248 140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      
      {/* Waste bins */}
      <rect x="40" y="200" width="28" height="35" rx="3" fill="#10b981" opacity="0.7" />
      <rect x="37" y="196" width="34" height="6" rx="2" fill="#10b981" />
      <text x="54" y="222" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">♻</text>
      
      <rect x="320" y="210" width="28" height="35" rx="3" fill="#f59e0b" opacity="0.7" />
      <rect x="317" y="206" width="34" height="6" rx="2" fill="#f59e0b" />
      
      {/* Document/WTN floating */}
      <rect x="60" y="100" width="55" height="70" rx="4" fill="white" opacity="0.1" />
      <rect x="67" y="112" width="35" height="3" rx="1.5" fill="white" opacity="0.3" />
      <rect x="67" y="120" width="28" height="3" rx="1.5" fill="white" opacity="0.2" />
      <rect x="67" y="128" width="40" height="3" rx="1.5" fill="white" opacity="0.2" />
      <rect x="67" y="145" width="20" height="8" rx="2" fill="#10b981" opacity="0.4" />
      <text x="68" y="107" fill="#10b981" fontSize="8" fontWeight="bold">WTN</text>
    </svg>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDemoLogin = async (demoEmail: string) => {
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email: demoEmail,
        password: 'password123',
        redirect: false,
      })

      if (result?.error) {
        setError('Demo login failed')
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white flex-col justify-between p-12">
        <div>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">GreenLoop</span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center -mt-12">
          <WasteIllustration />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Digital Waste Tracking,<br />EDOC-Ready</h2>
            <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
              Manage waste transfer notes, fleet operations, compliance reporting, and invoicing — all from one platform.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto">
            <div className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs text-slate-400">Digital WTNs</span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Truck className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs text-slate-400">Fleet Tracking</span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs text-slate-400">EDOC Ready</span>
            </div>
          </div>
        </div>

        <div>
          <EdocCountdown />
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">GreenLoop</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
              <p className="text-gray-500 mt-1">Sign in to your GreenLoop account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder="you@company.co.uk"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <button type="button" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">
                    Forgot password?
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* One-Click Demo Login Buttons */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-gray-500 font-medium uppercase tracking-wide">Quick Demo Login</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleDemoLogin('sarah@greenloop-demo.co.uk')}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  <UserCog className="w-4 h-4" />
                  <span>Ops Manager</span>
                </button>

                <button
                  onClick={() => handleDemoLogin('driver@greenloop-demo.co.uk')}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg text-orange-700 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Driver</span>
                </button>

                <button
                  onClick={() => handleDemoLogin('weighbridge@greenloop-demo.co.uk')}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg text-purple-700 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  <Scale className="w-4 h-4" />
                  <span>Weighbridge</span>
                </button>

                <button
                  onClick={() => handleDemoLogin('customer@greenloop-demo.co.uk')}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg text-green-700 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  <User className="w-4 h-4" />
                  <span>Customer</span>
                </button>
              </div>
            </div>

            {/* Demo credentials */}
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Manual Login</p>
              <div className="space-y-1">
                <p className="text-sm text-slate-700">
                  <span className="text-slate-400">Email:</span>{' '}
                  <code className="bg-white px-2 py-0.5 rounded text-xs font-mono border border-slate-200">sarah@greenloop-demo.co.uk</code>
                </p>
                <p className="text-sm text-slate-700">
                  <span className="text-slate-400">Password:</span>{' '}
                  <code className="bg-white px-2 py-0.5 rounded text-xs font-mono border border-slate-200">password123</code>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Start free trial
              </Link>
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gray-600">Terms</Link>
            <span>·</span>
            <Link href="/" className="hover:text-gray-600">← Back to homepage</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
