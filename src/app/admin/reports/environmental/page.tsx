'use client'

import { useState } from 'react'
import {
  Leaf,
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  Target,
  Award
} from 'lucide-react'

export default function EnvironmentalDashboardPage() {
  const [timePeriod, setTimePeriod] = useState('month')

  const stats = {
    totalProcessed: 245.8,
    recycled: 178.3,
    landfill: 67.5,
    diversionRate: 72.5,
    recyclingRate: 72.5,
    co2Saved: 54.2,
    treesEquivalent: 813,
    energySaved: 142500,
    waterSaved: 892000
  }

  const wasteStreams = [
    { type: 'Mixed Recycling', recycled: 82.5, landfill: 12.3, color: 'bg-blue-500' },
    { type: 'Cardboard', recycled: 45.2, landfill: 2.1, color: 'bg-green-500' },
    { type: 'Food Waste', recycled: 28.4, landfill: 0, color: 'bg-emerald-500' },
    { type: 'General Waste', recycled: 0, landfill: 35.8, color: 'bg-gray-500' },
    { type: 'Construction Waste', recycled: 18.7, landfill: 8.9, color: 'bg-orange-500' },
    { type: 'WEEE', recycled: 3.5, landfill: 0.4, color: 'bg-purple-500' },
    { type: 'Green Waste', recycled: 0, landfill: 8.0, color: 'bg-lime-500' }
  ]

  const monthlyData = [
    { month: 'Sep', recycled: 165, landfill: 78 },
    { month: 'Oct', recycled: 172, landfill: 71 },
    { month: 'Nov', recycled: 168, landfill: 75 },
    { month: 'Dec', recycled: 175, landfill: 68 },
    { month: 'Jan', recycled: 170, landfill: 73 },
    { month: 'Feb', recycled: 178, landfill: 67 },
    { month: 'Mar', recycled: 178, landfill: 68 }
  ]

  const targets = [
    {
      name: '80% Recycling Rate',
      current: 72.5,
      target: 80,
      deadline: '2026-12-31',
      status: 'on-track'
    },
    {
      name: '50% Waste Reduction',
      current: 32,
      target: 50,
      deadline: '2027-06-30',
      status: 'needs-attention'
    },
    {
      name: 'Zero Food to Landfill',
      current: 100,
      target: 100,
      deadline: '2026-03-31',
      status: 'achieved'
    },
    {
      name: '90% Diversion Rate',
      current: 72.5,
      target: 90,
      deadline: '2027-12-31',
      status: 'on-track'
    }
  ]

  const getTargetColor = (status: string) => {
    switch (status) {
      case 'achieved':
        return 'bg-green-100 text-green-700 border-green-300'
      case 'on-track':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      case 'needs-attention':
        return 'bg-orange-100 text-orange-700 border-orange-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Environmental Impact Dashboard</h1>
            <p className="text-gray-600 mt-1">Track sustainability metrics and environmental performance</p>
          </div>
          <div className="flex gap-3">
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg shadow-sm p-6 text-white">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-green-100">Recycling Rate</p>
              <p className="text-4xl font-bold mt-2">{stats.recyclingRate}%</p>
            </div>
            <Leaf className="w-10 h-10 opacity-80" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="text-green-100">+3.2% vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Processed</p>
              <p className="text-3xl font-bold mt-2">{stats.totalProcessed}</p>
              <p className="text-sm text-gray-500 mt-1">tonnes</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">CO₂ Saved</p>
              <p className="text-3xl font-bold mt-2">{stats.co2Saved}</p>
              <p className="text-sm text-gray-500 mt-1">tonnes</p>
            </div>
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">To Landfill</p>
              <p className="text-3xl font-bold mt-2">{stats.landfill}</p>
              <p className="text-sm text-gray-500 mt-1">tonnes</p>
            </div>
            <TrendingDown className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Waste Stream Breakdown */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Recycling by Waste Stream</h2>
          
          <div className="space-y-4">
            {wasteStreams.map((stream, idx) => {
              const total = stream.recycled + stream.landfill
              const recycledPercent = (stream.recycled / total * 100).toFixed(0)
              
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${stream.color}`} />
                      <span className="font-medium">{stream.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{recycledPercent}%</span>
                      <span className="text-sm text-gray-500 ml-2">
                        ({stream.recycled}t recycled / {total}t total)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${stream.color} h-3 transition-all duration-300`}
                      style={{ width: `${recycledPercent}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Environmental Impact Summary */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-sm p-6 text-white">
          <h2 className="text-xl font-bold mb-6">Environmental Savings</h2>
          
          <div className="space-y-6">
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-1">Carbon Offset</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{stats.co2Saved}</p>
                <span className="text-sm">tonnes CO₂</span>
              </div>
              <p className="text-xs text-blue-100 mt-2">
                Equivalent to planting <span className="font-bold">{stats.treesEquivalent}</span> trees
              </p>
            </div>

            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-1">Energy Saved</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{(stats.energySaved / 1000).toFixed(0)}</p>
                <span className="text-sm">MWh</span>
              </div>
              <p className="text-xs text-blue-100 mt-2">
                Powers <span className="font-bold">95</span> homes for a year
              </p>
            </div>

            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-1">Water Saved</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{(stats.waterSaved / 1000).toFixed(0)}</p>
                <span className="text-sm">m³</span>
              </div>
              <p className="text-xs text-blue-100 mt-2">
                <span className="font-bold">892,000</span> litres conserved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Monthly Recycling Trend</h2>
        
        <div className="flex items-end justify-between gap-4 h-64">
          {monthlyData.map((data, idx) => {
            const total = data.recycled + data.landfill
            const recycledHeight = (data.recycled / total * 100).toFixed(0)
            const landfillHeight = (data.landfill / total * 100).toFixed(0)
            
            return (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col-reverse items-center gap-1 mb-3" style={{ height: '200px' }}>
                  <div
                    className="w-full bg-red-400 rounded-t relative group"
                    style={{ height: `${landfillHeight}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.landfill}t
                    </span>
                  </div>
                  <div
                    className="w-full bg-emerald-500 rounded-t relative group"
                    style={{ height: `${recycledHeight}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.recycled}t
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">{data.month}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-500 rounded" />
            <span>Recycled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-400 rounded" />
            <span>Landfill</span>
          </div>
        </div>
      </div>

      {/* Sustainability Targets */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Sustainability Targets</h2>
          <Target className="w-6 h-6 text-emerald-600" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {targets.map((target, idx) => {
            const progress = (target.current / target.target * 100).toFixed(0)
            
            return (
              <div key={idx} className={`border-2 rounded-lg p-6 ${getTargetColor(target.status)}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{target.name}</h3>
                    <p className="text-sm mt-1">
                      Deadline: {new Date(target.deadline).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                  {target.status === 'achieved' && (
                    <Award className="w-8 h-8" />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-3xl font-bold">{target.current}%</span>
                    <span className="text-sm">Target: {target.target}%</span>
                  </div>
                  
                  <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-current h-3 transition-all duration-300"
                      style={{ width: `${Math.min(Number(progress), 100)}%` }}
                    />
                  </div>

                  <p className="text-sm font-medium capitalize mt-2">
                    Status: {target.status.replace('-', ' ')}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
