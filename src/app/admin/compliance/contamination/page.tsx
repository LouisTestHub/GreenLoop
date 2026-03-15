'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  Camera,
  Save,
  Mail,
  TrendingUp,
  MapPin,
  User,
  Package,
  BarChart3,
  FileText
} from 'lucide-react'

interface ContaminationIncident {
  id: string
  date: string
  customer: string
  location: string
  wasteType: string
  contaminant: string
  severity: 'low' | 'medium' | 'high'
  photo: boolean
  notified: boolean
  notes: string
  repeatOffender: boolean
  incidentCount: number
}

export default function ContaminationPage() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    customer: '',
    location: '',
    wasteType: '',
    contaminant: '',
    severity: 'medium' as 'low' | 'medium' | 'high',
    notes: '',
    photoTaken: false
  })

  const [incidents, setIncidents] = useState<ContaminationIncident[]>([
    {
      id: 'CONT-001',
      date: '2026-03-15T10:30:00Z',
      customer: 'Tesco Express',
      location: '45 High Street, SW1A 1AA',
      wasteType: 'Recycling',
      contaminant: 'Food waste in recycling bin',
      severity: 'medium',
      photo: true,
      notified: true,
      notes: 'Customer reminded of contamination policy',
      repeatOffender: true,
      incidentCount: 3
    },
    {
      id: 'CONT-002',
      date: '2026-03-14T14:15:00Z',
      customer: 'Costa Coffee',
      location: '12 Station Road, SW1A 2BB',
      wasteType: 'Food Waste',
      contaminant: 'Plastic bags mixed with food waste',
      severity: 'low',
      photo: true,
      notified: true,
      notes: 'First incident, warning issued',
      repeatOffender: false,
      incidentCount: 1
    },
    {
      id: 'CONT-003',
      date: '2026-03-13T09:00:00Z',
      customer: 'BuildCo Ltd',
      location: '89 Industrial Estate, SW1A 6FF',
      wasteType: 'Construction Waste',
      contaminant: 'Hazardous materials (paint tins)',
      severity: 'high',
      photo: true,
      notified: true,
      notes: 'Load rejected. Customer invoiced for additional handling',
      repeatOffender: false,
      incidentCount: 1
    },
    {
      id: 'CONT-004',
      date: '2026-03-12T11:45:00Z',
      customer: 'Premier Inn',
      location: '78 Park Lane, SW1A 3CC',
      wasteType: 'Recycling',
      contaminant: 'General waste contamination',
      severity: 'medium',
      photo: false,
      notified: true,
      notes: 'Photo not available',
      repeatOffender: true,
      incidentCount: 2
    },
    {
      id: 'CONT-005',
      date: '2026-03-10T16:20:00Z',
      customer: 'Sainsbury\'s Local',
      location: '23 Bridge Street, SW1A 4DD',
      wasteType: 'Cardboard',
      contaminant: 'Wet/soiled cardboard',
      severity: 'low',
      photo: true,
      notified: false,
      notes: 'Minor contamination',
      repeatOffender: false,
      incidentCount: 1
    }
  ])

  const stats = {
    totalIncidents: incidents.length,
    thisMonth: incidents.filter(i => {
      const incidentDate = new Date(i.date)
      const now = new Date()
      return incidentDate.getMonth() === now.getMonth() && 
             incidentDate.getFullYear() === now.getFullYear()
    }).length,
    highSeverity: incidents.filter(i => i.severity === 'high').length,
    repeatOffenders: [...new Set(incidents.filter(i => i.repeatOffender).map(i => i.customer))].length,
    contaminationRate: 8.5 // % of total collections
  }

  const getSeverityBadge = (severity: string) => {
    const styles = {
      low: 'bg-yellow-100 text-yellow-700',
      medium: 'bg-orange-100 text-orange-700',
      high: 'bg-red-100 text-red-700'
    }
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${styles[severity as keyof typeof styles]}`}>
        {severity}
      </span>
    )
  }

  const handleSubmit = () => {
    if (!formData.customer || !formData.wasteType || !formData.contaminant) {
      alert('Please fill in all required fields')
      return
    }

    const newIncident: ContaminationIncident = {
      id: `CONT-${String(incidents.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString(),
      customer: formData.customer,
      location: formData.location,
      wasteType: formData.wasteType,
      contaminant: formData.contaminant,
      severity: formData.severity,
      photo: formData.photoTaken,
      notified: false,
      notes: formData.notes,
      repeatOffender: incidents.filter(i => i.customer === formData.customer).length > 0,
      incidentCount: incidents.filter(i => i.customer === formData.customer).length + 1
    }

    setIncidents([newIncident, ...incidents])
    setFormData({
      customer: '',
      location: '',
      wasteType: '',
      contaminant: '',
      severity: 'medium',
      notes: '',
      photoTaken: false
    })
    setShowForm(false)
    alert('Contamination incident logged successfully!')
  }

  const sendNotification = (incidentId: string) => {
    const newIncidents = incidents.map(inc => 
      inc.id === incidentId ? { ...inc, notified: true } : inc
    )
    setIncidents(newIncidents)
    alert('Customer notification sent!')
  }

  const repeatOffendersList = incidents
    .filter(i => i.repeatOffender)
    .reduce((acc, inc) => {
      if (!acc.find(item => item.customer === inc.customer)) {
        acc.push({
          customer: inc.customer,
          location: inc.location,
          count: incidents.filter(i => i.customer === inc.customer).length
        })
      }
      return acc
    }, [] as Array<{ customer: string; location: string; count: number }>)
    .sort((a, b) => b.count - a.count)

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contamination Tracking</h1>
            <p className="text-gray-600 mt-1">Monitor and manage waste contamination incidents</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <AlertTriangle className="w-5 h-5" />
            {showForm ? 'Cancel' : 'Log Incident'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Incidents</p>
              <p className="text-3xl font-bold mt-2">{stats.totalIncidents}</p>
              <p className="text-sm text-gray-500 mt-1">all time</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-3xl font-bold mt-2">{stats.thisMonth}</p>
              <p className="text-sm text-gray-500 mt-1">incidents</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">High Severity</p>
              <p className="text-3xl font-bold mt-2">{stats.highSeverity}</p>
              <p className="text-sm text-gray-500 mt-1">critical</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Repeat Offenders</p>
              <p className="text-3xl font-bold mt-2">{stats.repeatOffenders}</p>
              <p className="text-sm text-gray-500 mt-1">customers</p>
            </div>
            <User className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Contamination Rate</p>
              <p className="text-3xl font-bold mt-2">{stats.contaminationRate}%</p>
              <p className="text-sm text-gray-500 mt-1">of collections</p>
            </div>
            <BarChart3 className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* New Incident Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-2 border-emerald-500">
          <h2 className="text-xl font-bold mb-6">Log New Contamination Incident</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer *
              </label>
              <input
                type="text"
                value={formData.customer}
                onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Customer name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Waste Type *
              </label>
              <select
                value={formData.wasteType}
                onChange={(e) => setFormData({ ...formData, wasteType: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select waste type</option>
                <option value="Recycling">Recycling</option>
                <option value="Food Waste">Food Waste</option>
                <option value="General Waste">General Waste</option>
                <option value="Cardboard">Cardboard</option>
                <option value="Construction Waste">Construction Waste</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Severity *
              </label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value as 'low' | 'medium' | 'high' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contaminant *
              </label>
              <input
                type="text"
                value={formData.contaminant}
                onChange={(e) => setFormData({ ...formData, contaminant: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Describe the contamination"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Additional details..."
              />
            </div>

            <div className="col-span-2">
              <button
                onClick={() => setFormData({ ...formData, photoTaken: !formData.photoTaken })}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 border-2 rounded-lg transition-colors ${
                  formData.photoTaken
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 hover:border-emerald-500'
                }`}
              >
                <Camera className="w-6 h-6" />
                <span className="font-medium">
                  {formData.photoTaken ? 'Photo Evidence Captured ✓' : 'Capture Photo Evidence'}
                </span>
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Save className="w-5 h-5" />
              Log Incident
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Incident List */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Recent Incidents</h2>
          
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div key={incident.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg">{incident.customer}</h3>
                      {incident.repeatOffender && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                          REPEAT ({incident.incidentCount}x)
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{incident.location}</p>
                    <p className="text-xs text-gray-500">{incident.id} • {new Date(incident.date).toLocaleString('en-GB')}</p>
                  </div>
                  {getSeverityBadge(incident.severity)}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <p className="text-gray-500">Waste Type</p>
                    <p className="font-medium">{incident.wasteType}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contaminant</p>
                    <p className="font-medium">{incident.contaminant}</p>
                  </div>
                </div>

                {incident.notes && (
                  <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded mb-3">{incident.notes}</p>
                )}

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-4 text-sm">
                    {incident.photo ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <Camera className="w-4 h-4" />
                        Photo Evidence
                      </span>
                    ) : (
                      <span className="text-gray-400">No Photo</span>
                    )}
                    
                    {incident.notified ? (
                      <span className="flex items-center gap-1 text-blue-600">
                        <Mail className="w-4 h-4" />
                        Customer Notified
                      </span>
                    ) : (
                      <button
                        onClick={() => sendNotification(incident.id)}
                        className="flex items-center gap-1 text-orange-600 hover:text-orange-700"
                      >
                        <Mail className="w-4 h-4" />
                        Send Notification
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repeat Offenders */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Repeat Offenders</h2>
          
          <div className="space-y-3">
            {repeatOffendersList.map((offender, idx) => (
              <div key={idx} className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{offender.customer}</h3>
                  <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                    {offender.count}x
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{offender.location}</p>
                <button className="w-full px-3 py-2 border border-red-300 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium text-red-700">
                  View History
                </button>
              </div>
            ))}

            {repeatOffendersList.length === 0 && (
              <p className="text-gray-500 text-center py-8">No repeat offenders</p>
            )}
          </div>

          {/* Contamination by Area */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-bold mb-3">Top Contamination Areas</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">SW1A Area</span>
                <span className="font-bold text-sm">42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }} />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm">SW2B Area</span>
                <span className="font-bold text-sm">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '28%' }} />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm">SW3C Area</span>
                <span className="font-bold text-sm">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '18%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
