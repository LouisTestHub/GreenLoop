'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Scale, Truck, Clock, CheckCircle2, AlertTriangle, Settings } from 'lucide-react'

interface Reading {
  id: string
  vehicleReg: string
  direction: string
  grossWeight: number | null
  tareWeight: number | null
  netWeight: number | null
  wasteType: string
  customer: string
  timestamp: string
  status: string
}

const demoReadings: Reading[] = [
  { id: 'WB-001', vehicleReg: 'AB21 XYZ', direction: 'IN', grossWeight: 18500, tareWeight: null, netWeight: null, wasteType: 'General Waste', customer: 'Smith & Sons Ltd', timestamp: '09:45', status: 'weighing' },
  { id: 'WB-002', vehicleReg: 'CD22 ABC', direction: 'OUT', grossWeight: 18200, tareWeight: 15800, netWeight: 2400, wasteType: 'Mixed Recycling', customer: 'Metro Office Supplies', timestamp: '09:30', status: 'complete' },
  { id: 'WB-003', vehicleReg: 'EF23 DEF', direction: 'OUT', grossWeight: 19100, tareWeight: 15600, netWeight: 3500, wasteType: 'General Waste', customer: 'Johnson & Co', timestamp: '09:15', status: 'complete' },
  { id: 'WB-004', vehicleReg: 'GH24 GHI', direction: 'OUT', grossWeight: 17800, tareWeight: 15900, netWeight: 1900, wasteType: 'Cardboard', customer: 'ABC Catering Ltd', timestamp: '08:45', status: 'complete' },
]

export default function WeighbridgeDashboard() {
  const [liveWeight, setLiveWeight] = useState(18500)
  const [isStable, setIsStable] = useState(false)

  // Simulate live weight fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.random() * 20 - 10
      setLiveWeight(prev => Math.round(prev + fluctuation))
      setIsStable(Math.random() > 0.3)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/weighbridge" className="text-gray-400 hover:text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Weighbridge Dashboard</h1>
            <p className="text-gray-600 mt-1">Live weighbridge monitoring and ticket management.</p>
          </div>
        </div>
        <Link
          href="/admin/weighbridge/settings"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm"
        >
          <Settings className="w-4 h-4" /> Settings
        </Link>
      </div>

      {/* Live Weight Display */}
      <div className="bg-slate-900 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-semibold">Live Weight</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isStable ? 'bg-emerald-400' : 'bg-yellow-400 animate-pulse'}`} />
            <span className="text-sm text-gray-400">{isStable ? 'Stable' : 'Stabilising...'}</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-7xl font-bold font-mono tracking-wider text-emerald-400">
            {liveWeight.toLocaleString()}
          </div>
          <div className="text-2xl text-gray-400 mt-2">kg</div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Record Gross Weight
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Record Tare Weight
          </button>
        </div>
      </div>

      {/* Current Vehicle */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Truck className="w-4 h-4" /> Current Vehicle
          </div>
          <p className="text-2xl font-bold">AB21 XYZ</p>
          <p className="text-sm text-gray-500 mt-1">Direction: INBOUND</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Scale className="w-4 h-4" /> Gross Weight
          </div>
          <p className="text-2xl font-bold">{liveWeight.toLocaleString()} kg</p>
          <p className="text-sm text-gray-500 mt-1">Recorded: 09:45</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Scale className="w-4 h-4" /> Net Weight
          </div>
          <p className="text-2xl font-bold text-gray-300">Awaiting tare</p>
          <p className="text-sm text-gray-500 mt-1">Auto-calculated on exit</p>
        </div>
      </div>

      {/* Recent Readings */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Today&apos;s Readings</h2>
          <span className="text-sm text-gray-500">{demoReadings.length} tickets</span>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Ticket</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Vehicle</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Direction</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Gross (kg)</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Tare (kg)</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Net (kg)</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Waste Type</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Customer</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Time</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {demoReadings.map((r) => (
              <tr key={r.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">{r.id}</td>
                <td className="px-6 py-4 text-sm font-mono">{r.vehicleReg}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded font-semibold ${
                    r.direction === 'IN' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {r.direction}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{r.grossWeight?.toLocaleString() || '—'}</td>
                <td className="px-6 py-4 text-sm">{r.tareWeight?.toLocaleString() || '—'}</td>
                <td className="px-6 py-4 text-sm font-semibold">{r.netWeight?.toLocaleString() || '—'}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{r.wasteType}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{r.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{r.timestamp}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${
                    r.status === 'complete' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {r.status === 'complete' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {r.status === 'complete' ? 'Complete' : 'Weighing'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
