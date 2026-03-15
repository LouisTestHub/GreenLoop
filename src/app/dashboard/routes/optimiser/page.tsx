'use client'

import { useState } from 'react'
import { 
  MapPin, 
  Truck, 
  Clock, 
  Fuel, 
  User, 
  Printer, 
  RotateCw,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Navigation
} from 'lucide-react'

interface Stop {
  id: string
  order: number
  customer: string
  address: string
  postcode: string
  wasteType: string
  estimatedWeight: number
  timeWindow: string
  driveTime: number
  completed: boolean
}

export default function RouteOptimiserPage() {
  const [selectedDriver, setSelectedDriver] = useState('driver-1')
  const [selectedVehicle, setSelectedVehicle] = useState('vehicle-1')
  const [stops, setStops] = useState<Stop[]>([
    {
      id: 'stop-1',
      order: 1,
      customer: 'Tesco Express',
      address: '45 High Street',
      postcode: 'SW1A 1AA',
      wasteType: 'Mixed Recycling',
      estimatedWeight: 0.5,
      timeWindow: '08:00-10:00',
      driveTime: 15,
      completed: false
    },
    {
      id: 'stop-2',
      order: 2,
      customer: 'Costa Coffee',
      address: '12 Station Road',
      postcode: 'SW1A 2BB',
      wasteType: 'Food Waste',
      estimatedWeight: 0.3,
      timeWindow: '08:00-12:00',
      driveTime: 8,
      completed: false
    },
    {
      id: 'stop-3',
      order: 3,
      customer: 'Premier Inn',
      address: '78 Park Lane',
      postcode: 'SW1A 3CC',
      wasteType: 'General Waste',
      estimatedWeight: 1.2,
      timeWindow: '09:00-11:00',
      driveTime: 12,
      completed: false
    },
    {
      id: 'stop-4',
      order: 4,
      customer: 'Sainsbury\'s Local',
      address: '23 Bridge Street',
      postcode: 'SW1A 4DD',
      wasteType: 'Cardboard',
      estimatedWeight: 0.8,
      timeWindow: '10:00-14:00',
      driveTime: 10,
      completed: false
    },
    {
      id: 'stop-5',
      order: 5,
      customer: 'McDonald\'s',
      address: '5 Market Square',
      postcode: 'SW1A 5EE',
      wasteType: 'Mixed Waste',
      estimatedWeight: 0.6,
      timeWindow: '11:00-15:00',
      driveTime: 7,
      completed: false
    }
  ])

  const drivers = [
    { id: 'driver-1', name: 'John Smith', status: 'available' },
    { id: 'driver-2', name: 'Sarah Jones', status: 'on-route' },
    { id: 'driver-3', name: 'Mike Brown', status: 'available' }
  ]

  const vehicles = [
    { id: 'vehicle-1', registration: 'GN26 ABC', type: '26T RCV', capacity: 12 },
    { id: 'vehicle-2', registration: 'GN18 XYZ', type: '18T RCV', capacity: 8 },
    { id: 'vehicle-3', registration: 'GN12 DEF', type: 'Flatbed', capacity: 5 }
  ]

  const moveStop = (index: number, direction: 'up' | 'down') => {
    const newStops = [...stops]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    
    if (targetIndex < 0 || targetIndex >= stops.length) return
    
    [newStops[index], newStops[targetIndex]] = [newStops[targetIndex], newStops[index]]
    
    // Update order numbers
    newStops.forEach((stop, idx) => {
      stop.order = idx + 1
    })
    
    setStops(newStops)
  }

  const toggleComplete = (stopId: string) => {
    setStops(stops.map(stop => 
      stop.id === stopId ? { ...stop, completed: !stop.completed } : stop
    ))
  }

  const totalDistance = stops.reduce((sum, stop) => sum + stop.driveTime, 0)
  const totalWeight = stops.reduce((sum, stop) => sum + stop.estimatedWeight, 0)
  const fuelCost = (totalDistance * 0.35).toFixed(2) // £0.35 per minute estimate
  const completionPercent = (stops.filter(s => s.completed).length / stops.length * 100).toFixed(0)

  const optimizeRoute = () => {
    // Simple optimization - sort by postcode
    const optimized = [...stops].sort((a, b) => a.postcode.localeCompare(b.postcode))
    optimized.forEach((stop, idx) => {
      stop.order = idx + 1
    })
    setStops(optimized)
  }

  const printRouteSheet = () => {
    window.print()
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Route Optimisation Dashboard</h1>
        <p className="text-gray-600 mt-1">Plan and optimise daily collection routes</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Stops</p>
              <p className="text-3xl font-bold mt-2">{stops.length}</p>
              <p className="text-sm text-gray-500 mt-1">{stops.filter(s => s.completed).length} completed</p>
            </div>
            <MapPin className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Est. Drive Time</p>
              <p className="text-3xl font-bold mt-2">{totalDistance}</p>
              <p className="text-sm text-gray-500 mt-1">minutes</p>
            </div>
            <Clock className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Est. Fuel Cost</p>
              <p className="text-3xl font-bold mt-2">£{fuelCost}</p>
              <p className="text-sm text-gray-500 mt-1">based on time</p>
            </div>
            <Fuel className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Completion</p>
              <p className="text-3xl font-bold mt-2">{completionPercent}%</p>
              <p className="text-sm text-gray-500 mt-1">{totalWeight.toFixed(1)} tonnes</p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Route Planning */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Today's Route</h2>
            <div className="flex gap-2">
              <button
                onClick={optimizeRoute}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <RotateCw className="w-4 h-4" />
                Auto-Optimize
              </button>
              <button
                onClick={printRouteSheet}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                <Printer className="w-4 h-4" />
                Print Route Sheet
              </button>
            </div>
          </div>

          {/* Stops List */}
          <div className="space-y-3">
            {stops.map((stop, index) => (
              <div
                key={stop.id}
                className={`border rounded-lg p-4 ${
                  stop.completed ? 'bg-green-50 border-green-200' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Order Number */}
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      stop.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {stop.order}
                    </div>
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveStop(index, 'up')}
                        disabled={index === 0}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => moveStop(index, 'down')}
                        disabled={index === stops.length - 1}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Stop Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{stop.customer}</h3>
                        <p className="text-sm text-gray-600">{stop.address}</p>
                        <p className="text-sm text-gray-500">{stop.postcode}</p>
                      </div>
                      <button
                        onClick={() => toggleComplete(stop.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          stop.completed 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {stop.completed ? 'Completed' : 'Mark Complete'}
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-3 text-sm">
                      <div>
                        <p className="text-gray-500">Waste Type</p>
                        <p className="font-medium">{stop.wasteType}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Est. Weight</p>
                        <p className="font-medium">{stop.estimatedWeight} tonnes</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Time Window</p>
                        <p className="font-medium">{stop.timeWindow}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Drive Time</p>
                        <p className="font-medium">{stop.driveTime} min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assignment & Controls */}
        <div className="space-y-6">
          {/* Driver Assignment */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Assign Driver</h2>
            <div className="space-y-2">
              {drivers.map((driver) => (
                <button
                  key={driver.id}
                  onClick={() => setSelectedDriver(driver.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                    selectedDriver === driver.id
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-xs text-gray-500">{driver.status}</p>
                    </div>
                  </div>
                  {selectedDriver === driver.id && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Assignment */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Assign Vehicle</h2>
            <div className="space-y-2">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                    selectedVehicle === vehicle.id
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">{vehicle.registration}</p>
                      <p className="text-xs text-gray-500">
                        {vehicle.type} • {vehicle.capacity}t capacity
                      </p>
                    </div>
                  </div>
                  {selectedVehicle === vehicle.id && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Route Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Route Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b">
                <span className="text-gray-600">Total Stops</span>
                <span className="font-bold">{stops.length}</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span className="text-gray-600">Total Weight</span>
                <span className="font-bold">{totalWeight.toFixed(1)} tonnes</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span className="text-gray-600">Drive Time</span>
                <span className="font-bold">{totalDistance} min</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span className="text-gray-600">Est. Fuel Cost</span>
                <span className="font-bold">£{fuelCost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Capacity Used</span>
                <span className="font-bold">
                  {((totalWeight / vehicles.find(v => v.id === selectedVehicle)!.capacity) * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
