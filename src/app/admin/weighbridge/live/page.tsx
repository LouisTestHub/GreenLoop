'use client'

import { useState, useEffect } from 'react'
import { 
  Scale, 
  TrendingUp, 
  TrendingDown,
  Camera,
  Printer,
  Save,
  RefreshCw,
  ArrowRight
} from 'lucide-react'

interface WeighbridgeReading {
  id: string
  timestamp: string
  vehicleReg: string
  direction: 'in' | 'out'
  grossWeight: number
  tareWeight?: number
  netWeight?: number
  wasteType: string
  customer: string
  status: 'weighing' | 'complete'
}

export default function WeighbridgeLivePage() {
  const [currentReading, setCurrentReading] = useState<number>(0)
  const [isStable, setIsStable] = useState(false)
  const [activeDirection, setActiveDirection] = useState<'in' | 'out'>('in')
  const [selectedWasteType, setSelectedWasteType] = useState('')
  const [vehicleReg, setVehicleReg] = useState('')
  const [customer, setCustomer] = useState('')
  
  const [readings, setReadings] = useState<WeighbridgeReading[]>([
    {
      id: 'WB-001',
      timestamp: new Date().toISOString(),
      vehicleReg: 'GN26 ABC',
      direction: 'in',
      grossWeight: 18.5,
      tareWeight: 12.0,
      netWeight: 6.5,
      wasteType: 'Mixed Recycling',
      customer: 'Tesco Express',
      status: 'complete'
    },
    {
      id: 'WB-002',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      vehicleReg: 'GN18 XYZ',
      direction: 'out',
      grossWeight: 14.2,
      tareWeight: 12.0,
      netWeight: 2.2,
      wasteType: 'General Waste',
      customer: 'Sainsbury\'s Local',
      status: 'complete'
    },
    {
      id: 'WB-003',
      timestamp: new Date(Date.now() - 600000).toISOString(),
      vehicleReg: 'GN12 DEF',
      direction: 'in',
      grossWeight: 22.8,
      tareWeight: 15.5,
      netWeight: 7.3,
      wasteType: 'Construction Waste',
      customer: 'BuildCo Ltd',
      status: 'complete'
    }
  ])

  const wasteTypes = [
    'Mixed Recycling',
    'General Waste',
    'Food Waste',
    'Cardboard',
    'Construction Waste',
    'Green Waste',
    'Hazardous Waste',
    'WEEE'
  ]

  // Simulate live weight reading
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isStable) {
        setCurrentReading(prev => {
          const variation = (Math.random() - 0.5) * 0.5
          return Math.max(0, prev + variation)
        })
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [isStable])

  const handleWeigh = () => {
    setIsStable(true)
    // Round to 1 decimal place
    setCurrentReading(prev => Math.round(prev * 10) / 10)
  }

  const handleReset = () => {
    setIsStable(false)
    setCurrentReading(0)
    setVehicleReg('')
    setCustomer('')
    setSelectedWasteType('')
  }

  const handleSaveTicket = () => {
    const newReading: WeighbridgeReading = {
      id: `WB-${String(readings.length + 1).padStart(3, '0')}`,
      timestamp: new Date().toISOString(),
      vehicleReg,
      direction: activeDirection,
      grossWeight: currentReading,
      wasteType: selectedWasteType,
      customer,
      status: 'complete'
    }

    // Calculate net weight if this is an outbound weigh
    if (activeDirection === 'out') {
      const inboundReading = readings.find(
        r => r.vehicleReg === vehicleReg && r.direction === 'in' && !r.netWeight
      )
      if (inboundReading) {
        newReading.tareWeight = currentReading
        newReading.netWeight = inboundReading.grossWeight - currentReading
      }
    }

    setReadings([newReading, ...readings])
    handleReset()
    alert('Weighbridge ticket saved!')
  }

  const dailyTonnage = readings
    .filter(r => r.netWeight)
    .reduce((sum, r) => sum + (r.netWeight || 0), 0)

  const todaysReadings = readings.filter(r => {
    const readingDate = new Date(r.timestamp).toDateString()
    const today = new Date().toDateString()
    return readingDate === today
  }).length

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Weighbridge Live Feed</h1>
        <p className="text-gray-600 mt-1">Real-time weighbridge monitoring and ticket generation</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Weight</p>
              <p className="text-3xl font-bold mt-2">{currentReading.toFixed(1)}</p>
              <p className="text-sm text-gray-500 mt-1">tonnes</p>
            </div>
            <Scale className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              isStable ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {isStable ? 'STABLE' : 'WEIGHING'}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Readings</p>
              <p className="text-3xl font-bold mt-2">{todaysReadings}</p>
              <p className="text-sm text-gray-500 mt-1">transactions</p>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Daily Tonnage</p>
              <p className="text-3xl font-bold mt-2">{dailyTonnage.toFixed(1)}</p>
              <p className="text-sm text-gray-500 mt-1">tonnes processed</p>
            </div>
            <TrendingDown className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Net Weight</p>
              <p className="text-3xl font-bold mt-2">
                {readings.length > 0 
                  ? (dailyTonnage / readings.filter(r => r.netWeight).length).toFixed(1)
                  : '0.0'
                }
              </p>
              <p className="text-sm text-gray-500 mt-1">tonnes per load</p>
            </div>
            <Scale className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Live Weighing Panel */}
        <div className="col-span-2 space-y-6">
          {/* Weight Display */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg p-8 text-white">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">Live Weight Reading</h2>
                <p className="text-slate-400 mt-1">Bridge status: {isStable ? 'Stable' : 'Active'}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveDirection('in')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeDirection === 'in'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <TrendingDown className="w-4 h-4" />
                  Inbound
                </button>
                <button
                  onClick={() => setActiveDirection('out')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeDirection === 'out'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  Outbound
                </button>
              </div>
            </div>

            {/* Digital Display */}
            <div className="bg-black rounded-lg p-12 mb-6">
              <div className="text-center">
                <div className="text-8xl font-mono font-bold text-emerald-400 tracking-wider">
                  {currentReading.toFixed(1)}
                </div>
                <div className="text-3xl text-emerald-400 mt-4">TONNES</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button
                onClick={handleWeigh}
                disabled={isStable}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:bg-slate-700 disabled:text-slate-500 text-lg font-semibold"
              >
                <Scale className="w-6 h-6" />
                Stabilize Weight
              </button>
              
              <button
                onClick={handleReset}
                className="px-6 py-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                <RefreshCw className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Ticket Details Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Ticket Details</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Registration
                </label>
                <input
                  type="text"
                  value={vehicleReg}
                  onChange={(e) => setVehicleReg(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., GN26 ABC"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer
                </label>
                <input
                  type="text"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Customer name"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Waste Type
                </label>
                <select
                  value={selectedWasteType}
                  onChange={(e) => setSelectedWasteType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select waste type</option>
                  {wasteTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Photo Capture Placeholder */}
            <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Photo Capture</p>
              <p className="text-sm text-gray-500 mt-1">Click to capture vehicle photo</p>
              <button className="mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
                Capture Photo
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveTicket}
                disabled={!isStable || !vehicleReg || !customer || !selectedWasteType}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:text-gray-500"
              >
                <Save className="w-5 h-5" />
                Save Ticket
              </button>
              
              <button
                disabled={!isStable}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:bg-gray-100 disabled:text-gray-400"
              >
                <Printer className="w-5 h-5" />
                Print
              </button>
            </div>
          </div>
        </div>

        {/* Recent Readings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Recent Readings</h2>
          
          <div className="space-y-3">
            {readings.slice(0, 10).map((reading) => (
              <div key={reading.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold">{reading.vehicleReg}</p>
                    <p className="text-xs text-gray-500">{reading.id}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    reading.direction === 'in'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {reading.direction === 'in' ? (
                      <span className="flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" />
                        IN
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        OUT
                      </span>
                    )}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 mb-1">{reading.customer}</p>
                <p className="text-xs text-gray-500 mb-2">{reading.wasteType}</p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">Gross</p>
                    <p className="font-bold">{reading.grossWeight} t</p>
                  </div>
                  {reading.netWeight && (
                    <div>
                      <p className="text-gray-500 text-xs">Net</p>
                      <p className="font-bold text-emerald-600">{reading.netWeight} t</p>
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(reading.timestamp).toLocaleTimeString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
