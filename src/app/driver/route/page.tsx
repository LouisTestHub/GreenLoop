import { MapPin, CheckCircle2, Clock, Navigation } from 'lucide-react'
import Link from 'next/link'

const stops = [
  { id: 1, seq: 1, customer: 'ABC Catering Ltd', address: '12 Baker St, N1 3AB', time: '08:30', status: 'completed', type: 'Food Waste' },
  { id: 2, seq: 2, customer: 'Metro Office Supplies', address: '88 York Way, N7 9AG', time: '09:15', status: 'completed', type: 'Mixed Recycling' },
  { id: 3, seq: 3, customer: 'Smith & Sons Ltd', address: '45 High St, N1 2AB', time: '10:30', status: 'completed', type: 'General Waste' },
  { id: 4, seq: 4, customer: 'The Green Cafe', address: '23 Camden Rd, NW1 9LR', time: '11:15', status: 'current', type: 'Food Waste' },
  { id: 5, seq: 5, customer: 'Bright Dental', address: '5 Holloway Rd, N7 8JG', time: '12:00', status: 'pending', type: 'Clinical Waste' },
  { id: 6, seq: 6, customer: 'Johnson & Co', address: '156 Upper St, N1 1QY', time: '13:00', status: 'pending', type: 'General Waste' },
  { id: 7, seq: 7, customer: 'North London Motors', address: '89 Seven Sisters Rd, N4 3BG', time: '14:00', status: 'pending', type: 'Mixed Recycling' },
  { id: 8, seq: 8, customer: 'Highbury Primary School', address: '20 Highbury Grove, N5 2EQ', time: '15:00', status: 'pending', type: 'General Waste' },
]

export default function DriverRoutePage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Today&apos;s Route</h1>
          <p className="text-sm text-gray-500">Route A — North London · 8 stops</p>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-lg" title="Open in Maps">
          <Navigation className="w-5 h-5" />
        </button>
      </div>

      {/* Map placeholder */}
      <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-500">
        <div className="text-center">
          <MapPin className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Route Map View</p>
          <p className="text-xs text-gray-400">8 stops · Est. 42 miles</p>
        </div>
      </div>

      {/* Stops List */}
      <div className="space-y-2">
        {stops.map((stop) => (
          <Link
            key={stop.id}
            href={stop.status === 'current' ? '/driver/job' : '#'}
            className={`block bg-white rounded-xl shadow-sm p-4 ${
              stop.status === 'current' ? 'ring-2 ring-emerald-500' : ''
            } ${stop.status === 'completed' ? 'opacity-60' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                stop.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                stop.status === 'current' ? 'bg-emerald-500 text-white' :
                'bg-gray-100 text-gray-500'
              }`}>
                {stop.status === 'completed' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-bold">{stop.seq}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-sm truncate">{stop.customer}</h3>
                  <span className="text-xs text-gray-400 flex items-center gap-1 ml-2 flex-shrink-0">
                    <Clock className="w-3 h-3" /> {stop.time}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate">{stop.address}</p>
                <p className="text-xs text-gray-400 mt-1">{stop.type}</p>
              </div>
            </div>
            {stop.status === 'current' && (
              <div className="mt-2 bg-emerald-50 text-emerald-700 text-xs font-semibold py-1 px-2 rounded text-center">
                CURRENT STOP — Tap to start job
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
