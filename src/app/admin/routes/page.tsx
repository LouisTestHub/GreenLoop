'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Zap, Plus, GripVertical, Truck, Clock, ArrowLeft } from 'lucide-react'

interface Stop {
  id: string
  seq: number
  customer: string
  address: string
  postcode: string
  jobType: string
  estimatedMinutes: number
}

const demoStops: Stop[] = [
  { id: '1', seq: 1, customer: 'ABC Catering Ltd', address: '12 Baker St', postcode: 'N1 3AB', jobType: 'Food Waste', estimatedMinutes: 15 },
  { id: '2', seq: 2, customer: 'Metro Office Supplies', address: '88 York Way', postcode: 'N7 9AG', jobType: 'Mixed Recycling', estimatedMinutes: 20 },
  { id: '3', seq: 3, customer: 'Smith & Sons Ltd', address: '45 High St', postcode: 'N1 2AB', jobType: 'General Waste', estimatedMinutes: 15 },
  { id: '4', seq: 4, customer: 'The Green Cafe', address: '23 Camden Rd', postcode: 'NW1 9LR', jobType: 'Food Waste', estimatedMinutes: 10 },
  { id: '5', seq: 5, customer: 'Bright Dental', address: '5 Holloway Rd', postcode: 'N7 8JG', jobType: 'Clinical Waste', estimatedMinutes: 20 },
  { id: '6', seq: 6, customer: 'Johnson & Co', address: '156 Upper St', postcode: 'N1 1QY', jobType: 'General Waste', estimatedMinutes: 15 },
  { id: '7', seq: 7, customer: 'North London Motors', address: '89 Seven Sisters Rd', postcode: 'N4 3BG', jobType: 'Mixed Recycling', estimatedMinutes: 25 },
  { id: '8', seq: 8, customer: 'Highbury Primary School', address: '20 Highbury Grove', postcode: 'N5 2EQ', jobType: 'General Waste', estimatedMinutes: 15 },
]

const drivers = [
  { id: 'd1', name: 'Dave Brown', vehicle: 'AB21 XYZ' },
  { id: 'd2', name: 'Sarah Turner', vehicle: 'CD22 ABC' },
  { id: 'd3', name: 'Mike Rogers', vehicle: 'EF23 DEF' },
]

export default function AdminRoutesPage() {
  const [stops, setStops] = useState(demoStops)
  const [selectedDriver, setSelectedDriver] = useState('')
  const [optimised, setOptimised] = useState(false)
  const [dragIdx, setDragIdx] = useState<number | null>(null)

  const handleOptimise = () => {
    // Simulate optimisation by shuffling to a "better" order
    const optimisedOrder = [...stops].sort((a, b) => {
      // Simple demo sort by postcode prefix
      return a.postcode.localeCompare(b.postcode)
    }).map((s, i) => ({ ...s, seq: i + 1 }))
    setStops(optimisedOrder)
    setOptimised(true)
  }

  const handleDragStart = (idx: number) => {
    setDragIdx(idx)
  }

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault()
    if (dragIdx === null || dragIdx === idx) return
    const newStops = [...stops]
    const [moved] = newStops.splice(dragIdx, 1)
    newStops.splice(idx, 0, moved)
    setStops(newStops.map((s, i) => ({ ...s, seq: i + 1 })))
    setDragIdx(idx)
  }

  const totalMinutes = stops.reduce((s, st) => s + st.estimatedMinutes, 0)

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/dashboard/routes" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Route Planning</h1>
      </div>
      <p className="text-gray-600 mb-8 ml-9">Plan and optimise routes for your drivers.</p>

      <div className="grid grid-cols-3 gap-6">
        {/* Route Builder */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Route Stops ({stops.length})</h2>
            <div className="flex gap-2">
              <button
                onClick={handleOptimise}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <Zap className="w-4 h-4" /> Auto-Optimise
              </button>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Plus className="w-4 h-4" /> Add Stop
              </button>
            </div>
          </div>

          {optimised && (
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg mb-4 text-sm text-emerald-700">
              ✓ Route optimised! Estimated savings: <strong>8.2 km (18%)</strong> reduction in total distance.
            </div>
          )}

          <div className="space-y-2">
            {stops.map((stop, idx) => (
              <div
                key={stop.id}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragEnd={() => setDragIdx(null)}
                className={`flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-move ${
                  dragIdx === idx ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                }`}
              >
                <GripVertical className="w-4 h-4 text-gray-300 flex-shrink-0" />
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {stop.seq}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{stop.customer}</p>
                  <p className="text-xs text-gray-500">{stop.address}, {stop.postcode}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{stop.jobType}</span>
                <span className="text-xs text-gray-400 flex-shrink-0 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {stop.estimatedMinutes}m
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MapPin className="w-6 h-6 mx-auto mb-1" />
              <p className="text-sm">Route Map</p>
            </div>
          </div>

          {/* Assign Driver */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Truck className="w-5 h-5 text-gray-500" /> Assign Driver
            </h3>
            <select
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select driver...</option>
              {drivers.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.vehicle})
                </option>
              ))}
            </select>
          </div>

          {/* Route Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-bold mb-3">Route Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Stops</span>
                <span className="font-semibold">{stops.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Est. Duration</span>
                <span className="font-semibold">{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Est. Distance</span>
                <span className="font-semibold">{optimised ? '37.8 km' : '46.0 km'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Capacity</span>
                <span className="font-semibold">65% used</span>
              </div>
            </div>
          </div>

          {/* Save */}
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors">
            Save Route
          </button>
          <Link
            href="/admin/routes/history"
            className="block text-center text-sm text-emerald-600 hover:text-emerald-700"
          >
            View Route History →
          </Link>
        </div>
      </div>
    </div>
  )
}
