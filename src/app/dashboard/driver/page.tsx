'use client'

import { useState } from 'react'
import {
  MapPin,
  Navigation,
  CheckCircle2,
  Camera,
  PenTool,
  AlertCircle,
  Clock,
  Phone,
  Scale,
  Package
} from 'lucide-react'

interface Stop {
  id: string
  order: number
  customer: string
  address: string
  postcode: string
  phone: string
  wasteType: string
  notes: string
  status: 'pending' | 'in_progress' | 'completed'
  issues?: string[]
}

export default function DriverAppPage() {
  const [currentStop, setCurrentStop] = useState(0)
  const [weight, setWeight] = useState('')
  const [signature, setSignature] = useState(false)
  const [photoTaken, setPhotoTaken] = useState(false)
  
  const [stops, setStops] = useState<Stop[]>([
    {
      id: 'STOP-1',
      order: 1,
      customer: 'Tesco Express',
      address: '45 High Street',
      postcode: 'SW1A 1AA',
      phone: '020 1234 5678',
      wasteType: 'Mixed Recycling',
      notes: 'Collection point: rear entrance',
      status: 'completed'
    },
    {
      id: 'STOP-2',
      order: 2,
      customer: 'Costa Coffee',
      address: '12 Station Road',
      postcode: 'SW1A 2BB',
      phone: '020 2345 6789',
      wasteType: 'Food Waste',
      notes: 'Ask for manager if gate locked',
      status: 'in_progress'
    },
    {
      id: 'STOP-3',
      order: 3,
      customer: 'Premier Inn',
      address: '78 Park Lane',
      postcode: 'SW1A 3CC',
      phone: '020 3456 7890',
      wasteType: 'General Waste',
      notes: 'Ring doorbell for access',
      status: 'pending'
    },
    {
      id: 'STOP-4',
      order: 4,
      customer: 'Sainsbury\'s Local',
      address: '23 Bridge Street',
      postcode: 'SW1A 4DD',
      phone: '020 4567 8901',
      wasteType: 'Cardboard',
      notes: '',
      status: 'pending'
    },
    {
      id: 'STOP-5',
      order: 5,
      customer: 'McDonald\'s',
      address: '5 Market Square',
      postcode: 'SW1A 5EE',
      phone: '020 5678 9012',
      wasteType: 'Mixed Waste',
      notes: 'Collection point: loading bay at back',
      status: 'pending'
    }
  ])

  const driver = {
    name: 'John Smith',
    vehicle: 'GN26 ABC',
    route: 'Route A - Central'
  }

  const completedCount = stops.filter(s => s.status === 'completed').length
  const progressPercent = (completedCount / stops.length * 100).toFixed(0)

  const markComplete = () => {
    if (!weight || !signature || !photoTaken) {
      alert('Please complete all required fields: weight, photo, and signature')
      return
    }

    const newStops = [...stops]
    newStops[currentStop].status = 'completed'
    setStops(newStops)
    
    // Move to next stop
    if (currentStop < stops.length - 1) {
      setCurrentStop(currentStop + 1)
      newStops[currentStop + 1].status = 'in_progress'
    }
    
    // Reset form
    setWeight('')
    setSignature(false)
    setPhotoTaken(false)
    
    alert('Collection completed successfully!')
  }

  const reportIssue = (issue: string) => {
    const newStops = [...stops]
    if (!newStops[currentStop].issues) {
      newStops[currentStop].issues = []
    }
    newStops[currentStop].issues!.push(issue)
    setStops(newStops)
    alert(`Issue reported: ${issue}`)
  }

  const currentStopData = stops[currentStop]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Fixed Header */}
      <div className="bg-emerald-600 text-white p-4 sticky top-0 z-10 shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className="text-xl font-bold">{driver.name}</h1>
            <p className="text-sm text-emerald-100">{driver.vehicle} • {driver.route}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{completedCount}/{stops.length}</p>
            <p className="text-xs text-emerald-100">completed</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-emerald-700 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-white h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="p-4">
        {/* Current Stop Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              {currentStopData.order}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{currentStopData.customer}</h2>
              <p className="text-gray-600">{currentStopData.wasteType}</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">{currentStopData.address}</p>
                <p className="text-gray-600">{currentStopData.postcode}</p>
              </div>
            </div>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => window.open(`https://maps.google.com/?q=${currentStopData.postcode}`, '_blank')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4 text-lg font-semibold"
          >
            <Navigation className="w-6 h-6" />
            Navigate to Location
          </button>

          {/* Contact & Notes */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentStopData.phone && (
              <a
                href={`tel:${currentStopData.phone}`}
                className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">{currentStopData.phone}</span>
              </a>
            )}
            
            {currentStopData.notes && (
              <div className="flex items-start gap-3 px-4 py-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <p className="text-sm font-medium text-yellow-900">{currentStopData.notes}</p>
              </div>
            )}
          </div>

          {/* Collection Form */}
          {currentStopData.status === 'in_progress' && (
            <div className="border-t-2 border-gray-200 pt-6 mt-6 space-y-4">
              <h3 className="font-bold text-lg mb-4">Complete Collection</h3>
              
              {/* Weight Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (tonnes) *
                </label>
                <div className="relative">
                  <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    step="0.01"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Photo Capture */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Evidence *
                </label>
                <button
                  onClick={() => setPhotoTaken(!photoTaken)}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 border-2 rounded-lg transition-colors ${
                    photoTaken
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-emerald-500'
                  }`}
                >
                  <Camera className="w-6 h-6" />
                  <span className="font-medium">
                    {photoTaken ? 'Photo Captured ✓' : 'Capture Photo'}
                  </span>
                </button>
              </div>

              {/* Customer Signature */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Signature *
                </label>
                <button
                  onClick={() => setSignature(!signature)}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 border-2 rounded-lg transition-colors ${
                    signature
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-emerald-500'
                  }`}
                >
                  <PenTool className="w-6 h-6" />
                  <span className="font-medium">
                    {signature ? 'Signature Captured ✓' : 'Get Signature'}
                  </span>
                </button>
              </div>

              {/* Complete Button */}
              <button
                onClick={markComplete}
                disabled={!weight || !signature || !photoTaken}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:text-gray-500 text-lg font-bold mt-6"
              >
                <CheckCircle2 className="w-6 h-6" />
                Mark Collection Complete
              </button>
            </div>
          )}

          {/* Issue Reporting */}
          <div className="border-t-2 border-gray-200 pt-6 mt-6">
            <h3 className="font-bold text-lg mb-3">Report Issue</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => reportIssue('Blocked Access')}
                className="px-4 py-3 border-2 border-red-200 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
              >
                Blocked Access
              </button>
              <button
                onClick={() => reportIssue('Contamination')}
                className="px-4 py-3 border-2 border-orange-200 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium"
              >
                Contamination
              </button>
              <button
                onClick={() => reportIssue('Customer Not Available')}
                className="px-4 py-3 border-2 border-yellow-200 text-yellow-700 rounded-lg hover:bg-yellow-50 transition-colors text-sm font-medium"
              >
                No Customer
              </button>
              <button
                onClick={() => reportIssue('Equipment Issue')}
                className="px-4 py-3 border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors text-sm font-medium"
              >
                Equipment Issue
              </button>
            </div>
          </div>

          {/* Issues Reported */}
          {currentStopData.issues && currentStopData.issues.length > 0 && (
            <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <h4 className="font-bold text-red-900 mb-2">Issues Reported:</h4>
              <ul className="space-y-1">
                {currentStopData.issues.map((issue, idx) => (
                  <li key={idx} className="text-sm text-red-700">• {issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Remaining Stops */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg mb-4">Remaining Stops</h3>
          
          <div className="space-y-3">
            {stops.slice(currentStop + 1).map((stop) => (
              <div
                key={stop.id}
                className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg"
              >
                <div className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold">
                  {stop.order}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{stop.customer}</p>
                  <p className="text-sm text-gray-600">{stop.address}</p>
                </div>
                <Package className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>

          {currentStop === stops.length - 1 && completedCount === stops.length && (
            <div className="mt-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Route Complete!</h3>
              <p className="text-green-700">All collections have been completed successfully.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
