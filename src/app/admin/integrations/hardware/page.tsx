'use client'

import { useState } from 'react'
import {
  Radio,
  Scale,
  Navigation,
  Gauge,
  Camera,
  Thermometer,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Settings,
  Plus,
  RefreshCw
} from 'lucide-react'

interface HardwareDevice {
  id: string
  name: string
  type: 'weighbridge' | 'gps' | 'bin-sensor' | 'anpr' | 'temperature-probe'
  status: 'online' | 'offline' | 'warning' | 'maintenance'
  connectionType: 'serial' | 'ip' | 'bluetooth' | 'wifi'
  location: string
  lastSeen: string
  config: {
    ip?: string
    port?: number
    serialPort?: string
    baudRate?: number
    deviceId?: string
  }
  metrics?: {
    uptime?: number
    signalStrength?: number
    batteryLevel?: number
    dataPoints?: number
  }
}

export default function HardwareIntegrationPage() {
  const [devices, setDevices] = useState<HardwareDevice[]>([
    {
      id: 'WB-001',
      name: 'Main Weighbridge',
      type: 'weighbridge',
      status: 'online',
      connectionType: 'serial',
      location: 'Site Entrance',
      lastSeen: new Date().toISOString(),
      config: {
        serialPort: 'COM3',
        baudRate: 9600
      },
      metrics: {
        uptime: 99.8,
        dataPoints: 1247
      }
    },
    {
      id: 'GPS-001',
      name: 'Vehicle GN26 ABC',
      type: 'gps',
      status: 'online',
      connectionType: 'wifi',
      location: 'Fleet Vehicle #1',
      lastSeen: new Date().toISOString(),
      config: {
        deviceId: 'GPS-4567-8901'
      },
      metrics: {
        uptime: 100,
        signalStrength: 85,
        dataPoints: 4521
      }
    },
    {
      id: 'GPS-002',
      name: 'Vehicle GN18 XYZ',
      type: 'gps',
      status: 'online',
      connectionType: 'wifi',
      location: 'Fleet Vehicle #2',
      lastSeen: new Date(Date.now() - 120000).toISOString(),
      config: {
        deviceId: 'GPS-1234-5678'
      },
      metrics: {
        uptime: 98.5,
        signalStrength: 72,
        dataPoints: 3892
      }
    },
    {
      id: 'BIN-001',
      name: 'Smart Bin - Tesco Express',
      type: 'bin-sensor',
      status: 'warning',
      connectionType: 'bluetooth',
      location: 'Tesco Express, High Street',
      lastSeen: new Date(Date.now() - 3600000).toISOString(),
      config: {
        deviceId: 'BIN-SEN-001'
      },
      metrics: {
        batteryLevel: 15,
        signalStrength: 45,
        dataPoints: 892
      }
    },
    {
      id: 'ANPR-001',
      name: 'Site Access Camera',
      type: 'anpr',
      status: 'online',
      connectionType: 'ip',
      location: 'Main Gate',
      lastSeen: new Date().toISOString(),
      config: {
        ip: '192.168.1.100',
        port: 8080
      },
      metrics: {
        uptime: 99.9,
        dataPoints: 2341
      }
    },
    {
      id: 'TEMP-001',
      name: 'Food Waste Probe',
      type: 'temperature-probe',
      status: 'offline',
      connectionType: 'bluetooth',
      location: 'Food Waste Storage',
      lastSeen: new Date(Date.now() - 86400000).toISOString(),
      config: {
        deviceId: 'TEMP-PRO-001'
      },
      metrics: {
        batteryLevel: 5,
        signalStrength: 0,
        dataPoints: 156
      }
    },
    {
      id: 'WB-002',
      name: 'Secondary Weighbridge',
      type: 'weighbridge',
      status: 'maintenance',
      connectionType: 'ip',
      location: 'Loading Bay',
      lastSeen: new Date(Date.now() - 172800000).toISOString(),
      config: {
        ip: '192.168.1.50',
        port: 502
      },
      metrics: {
        uptime: 0,
        dataPoints: 0
      }
    }
  ])

  const stats = {
    total: devices.length,
    online: devices.filter(d => d.status === 'online').length,
    warning: devices.filter(d => d.status === 'warning').length,
    offline: devices.filter(d => d.status === 'offline').length,
    maintenance: devices.filter(d => d.status === 'maintenance').length
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      online: 'bg-green-100 text-green-700 border-green-300',
      warning: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      offline: 'bg-red-100 text-red-700 border-red-300',
      maintenance: 'bg-blue-100 text-blue-700 border-blue-300'
    }

    const icons = {
      online: CheckCircle2,
      warning: AlertCircle,
      offline: XCircle,
      maintenance: Settings
    }

    const Icon = icons[status as keyof typeof icons]

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase border-2 ${styles[status as keyof typeof styles]}`}>
        <Icon className="w-3 h-3" />
        {status}
      </span>
    )
  }

  const getDeviceIcon = (type: string) => {
    const icons = {
      weighbridge: Scale,
      gps: Navigation,
      'bin-sensor': Gauge,
      anpr: Camera,
      'temperature-probe': Thermometer
    }
    return icons[type as keyof typeof icons] || Radio
  }

  const getDeviceTypeName = (type: string) => {
    const names = {
      weighbridge: 'Weighbridge',
      gps: 'GPS Tracker',
      'bin-sensor': 'Bin Fill Sensor',
      anpr: 'ANPR Camera',
      'temperature-probe': 'Temperature Probe'
    }
    return names[type as keyof typeof names] || type
  }

  const getLastSeenText = (lastSeen: string) => {
    const diff = Date.now() - new Date(lastSeen).getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  const devicesByType = devices.reduce((acc, device) => {
    if (!acc[device.type]) acc[device.type] = []
    acc[device.type].push(device)
    return acc
  }, {} as Record<string, HardwareDevice[]>)

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hardware Integration Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor and configure connected hardware devices</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <RefreshCw className="w-5 h-5" />
              Refresh
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <Plus className="w-5 h-5" />
              Add Device
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Devices</p>
              <p className="text-3xl font-bold mt-2">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-1">registered</p>
            </div>
            <Radio className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Online</p>
              <p className="text-3xl font-bold mt-2 text-green-600">{stats.online}</p>
              <p className="text-sm text-gray-500 mt-1">operational</p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Warning</p>
              <p className="text-3xl font-bold mt-2 text-yellow-600">{stats.warning}</p>
              <p className="text-sm text-gray-500 mt-1">need attention</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Offline</p>
              <p className="text-3xl font-bold mt-2 text-red-600">{stats.offline}</p>
              <p className="text-sm text-gray-500 mt-1">disconnected</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Maintenance</p>
              <p className="text-3xl font-bold mt-2 text-blue-600">{stats.maintenance}</p>
              <p className="text-sm text-gray-500 mt-1">scheduled</p>
            </div>
            <Settings className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Alerts */}
      {(stats.warning > 0 || stats.offline > 0) && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900">
                {stats.warning + stats.offline} device{stats.warning + stats.offline > 1 ? 's' : ''} need attention
              </h3>
              <p className="text-sm text-orange-800 mt-1">
                {stats.offline > 0 && `${stats.offline} offline`}
                {stats.offline > 0 && stats.warning > 0 && ', '}
                {stats.warning > 0 && `${stats.warning} warning`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Devices by Type */}
      {Object.entries(devicesByType).map(([type, typeDevices]) => {
        const Icon = getDeviceIcon(type)
        
        return (
          <div key={type} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold">{getDeviceTypeName(type)}</h2>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                {typeDevices.length} device{typeDevices.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {typeDevices.map((device) => {
                const DeviceIcon = getDeviceIcon(device.type)
                
                return (
                  <div
                    key={device.id}
                    className={`bg-white rounded-lg shadow-sm p-6 border-2 transition-colors ${
                      device.status === 'offline' || device.status === 'warning'
                        ? 'border-orange-300'
                        : 'border-gray-200 hover:border-emerald-500'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <DeviceIcon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{device.name}</h3>
                          <p className="text-sm text-gray-600">{device.id}</p>
                        </div>
                      </div>
                      {getStatusBadge(device.status)}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{device.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Connection</p>
                        <p className="font-medium capitalize">{device.connectionType}</p>
                      </div>
                    </div>

                    {/* Configuration Details */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Configuration</p>
                      <div className="space-y-1 text-sm">
                        {device.config.ip && (
                          <p className="text-gray-600">
                            <span className="font-medium">IP:</span> {device.config.ip}:{device.config.port}
                          </p>
                        )}
                        {device.config.serialPort && (
                          <p className="text-gray-600">
                            <span className="font-medium">Port:</span> {device.config.serialPort} @ {device.config.baudRate} baud
                          </p>
                        )}
                        {device.config.deviceId && (
                          <p className="text-gray-600">
                            <span className="font-medium">Device ID:</span> {device.config.deviceId}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    {device.metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {device.metrics.uptime !== undefined && (
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-xs text-gray-600">Uptime</p>
                            <p className="text-lg font-bold text-green-700">{device.metrics.uptime}%</p>
                          </div>
                        )}
                        {device.metrics.signalStrength !== undefined && (
                          <div className={`rounded-lg p-3 ${
                            device.metrics.signalStrength > 70 ? 'bg-green-50' : 
                            device.metrics.signalStrength > 40 ? 'bg-yellow-50' : 'bg-red-50'
                          }`}>
                            <p className="text-xs text-gray-600">Signal</p>
                            <p className={`text-lg font-bold ${
                              device.metrics.signalStrength > 70 ? 'text-green-700' : 
                              device.metrics.signalStrength > 40 ? 'text-yellow-700' : 'text-red-700'
                            }`}>
                              {device.metrics.signalStrength}%
                            </p>
                          </div>
                        )}
                        {device.metrics.batteryLevel !== undefined && (
                          <div className={`rounded-lg p-3 ${
                            device.metrics.batteryLevel > 50 ? 'bg-green-50' : 
                            device.metrics.batteryLevel > 20 ? 'bg-yellow-50' : 'bg-red-50'
                          }`}>
                            <p className="text-xs text-gray-600">Battery</p>
                            <p className={`text-lg font-bold ${
                              device.metrics.batteryLevel > 50 ? 'text-green-700' : 
                              device.metrics.batteryLevel > 20 ? 'text-yellow-700' : 'text-red-700'
                            }`}>
                              {device.metrics.batteryLevel}%
                            </p>
                          </div>
                        )}
                        {device.metrics.dataPoints !== undefined && (
                          <div className="bg-blue-50 rounded-lg p-3">
                            <p className="text-xs text-gray-600">Data Points</p>
                            <p className="text-lg font-bold text-blue-700">{device.metrics.dataPoints}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <p className="text-sm text-gray-500">
                        Last seen: <span className="font-medium">{getLastSeenText(device.lastSeen)}</span>
                      </p>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
