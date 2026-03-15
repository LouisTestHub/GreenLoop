'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FileText,
  Download,
  Calendar,
  Plus,
  Leaf,
  TrendingUp,
  Package,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export default function CustomerPortalPage() {
  const [customer] = useState({
    name: 'Tesco Express - High Street',
    accountNumber: 'CUST-2024-1234',
    contact: 'John Manager',
    email: 'john.manager@tesco.com'
  })

  const collections = [
    {
      id: 'COL-001',
      date: '2026-03-20',
      time: '08:00-10:00',
      wasteType: 'Mixed Recycling',
      status: 'scheduled',
      weight: null
    },
    {
      id: 'COL-002',
      date: '2026-03-17',
      time: '08:00-10:00',
      wasteType: 'Food Waste',
      status: 'completed',
      weight: 0.3
    },
    {
      id: 'COL-003',
      date: '2026-03-15',
      time: '08:00-10:00',
      wasteType: 'Mixed Recycling',
      status: 'completed',
      weight: 0.5
    },
    {
      id: 'COL-004',
      date: '2026-03-13',
      time: '08:00-10:00',
      wasteType: 'General Waste',
      status: 'completed',
      weight: 0.4
    },
    {
      id: 'COL-005',
      date: '2026-03-10',
      time: '08:00-10:00',
      wasteType: 'Cardboard',
      status: 'completed',
      weight: 0.2
    }
  ]

  const wtns = [
    {
      id: 'WTN-20260315-001',
      date: '2026-03-15',
      wasteType: 'Mixed Recycling',
      quantity: 0.5,
      carrier: 'GreenLoop Transport',
      destination: 'Recycling Centre A'
    },
    {
      id: 'WTN-20260313-002',
      date: '2026-03-13',
      wasteType: 'General Waste',
      quantity: 0.4,
      carrier: 'GreenLoop Transport',
      destination: 'Waste Transfer Station'
    },
    {
      id: 'WTN-20260310-003',
      date: '2026-03-10',
      wasteType: 'Cardboard',
      quantity: 0.2,
      carrier: 'GreenLoop Transport',
      destination: 'Paper Mill'
    }
  ]

  const environmentalImpact = {
    totalDiverted: 12.5,
    recycled: 8.3,
    landfill: 4.2,
    recyclingRate: 66,
    co2Saved: 2.8,
    treesEquivalent: 42
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      scheduled: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700'
    }
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-700'}`}>
        {status.toUpperCase()}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-emerald-600">GreenLoop</h1>
              <p className="text-sm text-gray-600 mt-1">Customer Portal</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-gray-500">{customer.accountNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Next Collection</p>
                <p className="text-2xl font-bold mt-2">Mar 20</p>
                <p className="text-sm text-gray-500 mt-1">08:00-10:00</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold mt-2">{collections.filter(c => c.status === 'completed').length}</p>
                <p className="text-sm text-gray-500 mt-1">collections</p>
              </div>
              <Package className="w-8 h-8 text-emerald-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Recycling Rate</p>
                <p className="text-2xl font-bold mt-2">{environmentalImpact.recyclingRate}%</p>
                <p className="text-sm text-gray-500 mt-1">this month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">CO₂ Saved</p>
                <p className="text-2xl font-bold mt-2">{environmentalImpact.co2Saved}</p>
                <p className="text-sm text-gray-500 mt-1">tonnes</p>
              </div>
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Upcoming Collections */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Upcoming Collections</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                  <Plus className="w-4 h-4" />
                  Request Pickup
                </button>
              </div>

              <div className="space-y-3">
                {collections.filter(c => c.status === 'scheduled').map((collection) => (
                  <div key={collection.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="font-bold">
                              {new Date(collection.date).toLocaleDateString('en-GB', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                            <p className="text-sm text-gray-600">{collection.time}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 ml-8">{collection.wasteType}</p>
                      </div>
                      {getStatusBadge(collection.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collection History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Collection History</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Waste Type</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Weight</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collections.filter(c => c.status === 'completed').map((collection) => (
                      <tr key={collection.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm">
                          {new Date(collection.date).toLocaleDateString('en-GB')}
                        </td>
                        <td className="py-3 px-4 text-sm">{collection.wasteType}</td>
                        <td className="py-3 px-4 text-sm">
                          {collection.weight ? `${collection.weight} tonnes` : '-'}
                        </td>
                        <td className="py-3 px-4">
                          {getStatusBadge(collection.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Waste Transfer Notes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Waste Transfer Notes</h2>
              
              <div className="space-y-3">
                {wtns.map((wtn) => (
                  <div key={wtn.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-emerald-500" />
                          <div>
                            <p className="font-bold">{wtn.id}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(wtn.date).toLocaleDateString('en-GB')}
                            </p>
                          </div>
                        </div>
                        <div className="ml-8 space-y-1 text-sm">
                          <p className="text-gray-700">
                            <span className="font-medium">Waste Type:</span> {wtn.wasteType}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Quantity:</span> {wtn.quantity} tonnes
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Destination:</span> {wtn.destination}
                          </p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-500 transition-colors text-left">
                  <Plus className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">Request Additional Pickup</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-500 transition-colors text-left">
                  <Download className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">Download All WTNs</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-500 transition-colors text-left">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">View Impact Report</span>
                </button>
              </div>
            </div>

            {/* Environmental Impact Summary */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg shadow-sm p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <h3 className="font-bold">Your Environmental Impact</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-green-100">Total Waste Diverted</p>
                  <p className="text-3xl font-bold">{environmentalImpact.totalDiverted}</p>
                  <p className="text-sm text-green-100">tonnes from landfill</p>
                </div>

                <div className="border-t border-green-500 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-100">Recycled</span>
                    <span className="font-bold">{environmentalImpact.recycled}t</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-100">Recycling Rate</span>
                    <span className="font-bold">{environmentalImpact.recyclingRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-100">CO₂ Saved</span>
                    <span className="font-bold">{environmentalImpact.co2Saved}t</span>
                  </div>
                </div>

                <div className="bg-white/20 rounded-lg p-3 mt-4">
                  <p className="text-sm text-center">
                    <span className="text-2xl font-bold block">{environmentalImpact.treesEquivalent}</span>
                    trees worth of CO₂ saved
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is here to assist you with any questions.
              </p>
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
