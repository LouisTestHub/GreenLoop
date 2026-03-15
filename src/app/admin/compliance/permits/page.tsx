'use client'

import { useState } from 'react'
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  FileText,
  Download,
  Upload,
  Plus,
  Bell
} from 'lucide-react'

interface Permit {
  id: string
  type: string
  number: string
  holder: string
  issueDate: string
  expiryDate: string
  status: 'active' | 'expiring-soon' | 'expired' | 'pending-renewal'
  authority: string
  documents: string[]
  autoRenewal: boolean
  notes: string
}

export default function PermitsPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [permits, setPermits] = useState<Permit[]>([
    {
      id: 'PERM-001',
      type: 'Waste Carrier License',
      number: 'CBDU123456',
      holder: 'GreenLoop Waste Management Ltd',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15',
      status: 'active',
      authority: 'Environment Agency',
      documents: ['carrier-license.pdf', 'insurance-cert.pdf'],
      autoRenewal: true,
      notes: 'Upper tier license - covers all waste types'
    },
    {
      id: 'PERM-002',
      type: 'Environmental Permit',
      number: 'EPR/GW2345/A001',
      holder: 'GreenLoop Waste Management Ltd',
      issueDate: '2023-06-01',
      expiryDate: '2026-06-01',
      status: 'active',
      authority: 'Environment Agency',
      documents: ['environmental-permit.pdf', 'site-plan.pdf'],
      autoRenewal: false,
      notes: 'Waste transfer station permit - 75,000 tonnes per year'
    },
    {
      id: 'PERM-003',
      type: 'Waste Exemption',
      number: 'T11-Repair-2024-0123',
      holder: 'GreenLoop Waste Management Ltd',
      issueDate: '2024-02-10',
      expiryDate: '2026-04-30',
      status: 'expiring-soon',
      authority: 'Environment Agency',
      documents: ['exemption-cert.pdf'],
      autoRenewal: false,
      notes: 'T11 - Repairing or refurbishing WEEE. Renewal reminder set for March 2026'
    },
    {
      id: 'PERM-004',
      type: 'Hazardous Waste License',
      number: 'HWL-789456',
      holder: 'GreenLoop Waste Management Ltd',
      issueDate: '2023-09-15',
      expiryDate: '2026-09-15',
      status: 'active',
      authority: 'Environment Agency',
      documents: ['hazwaste-license.pdf', 'training-certs.pdf'],
      autoRenewal: true,
      notes: 'Covers storage and transport of hazardous waste'
    },
    {
      id: 'PERM-005',
      type: 'Driver CPC',
      number: 'CPC-4567-8901',
      holder: 'John Smith (Driver)',
      issueDate: '2021-03-20',
      expiryDate: '2026-03-20',
      status: 'expiring-soon',
      authority: 'DVSA',
      documents: ['cpc-card-scan.pdf'],
      autoRenewal: false,
      notes: 'Driver periodic training required before renewal'
    },
    {
      id: 'PERM-006',
      type: 'Waste Broker License',
      number: 'CBDB654321',
      holder: 'GreenLoop Waste Management Ltd',
      issueDate: '2025-01-10',
      expiryDate: '2028-01-10',
      status: 'active',
      authority: 'Environment Agency',
      documents: ['broker-registration.pdf'],
      autoRenewal: true,
      notes: 'Brokerage services for third-party waste'
    }
  ])

  const stats = {
    total: permits.length,
    active: permits.filter(p => p.status === 'active').length,
    expiringSoon: permits.filter(p => p.status === 'expiring-soon').length,
    expired: permits.filter(p => p.status === 'expired').length
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-300',
      'expiring-soon': 'bg-orange-100 text-orange-700 border-orange-300',
      expired: 'bg-red-100 text-red-700 border-red-300',
      'pending-renewal': 'bg-blue-100 text-blue-700 border-blue-300'
    }

    const icons = {
      active: CheckCircle2,
      'expiring-soon': AlertTriangle,
      expired: AlertTriangle,
      'pending-renewal': Calendar
    }

    const Icon = icons[status as keyof typeof icons]

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase border-2 ${styles[status as keyof typeof styles]}`}>
        <Icon className="w-3 h-3" />
        {status.replace('-', ' ')}
      </span>
    )
  }

  const getDaysUntilExpiry = (expiryDate: string) => {
    const expiry = new Date(expiryDate)
    const today = new Date()
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Permit & License Management</h1>
            <p className="text-gray-600 mt-1">Track all operator permits, licenses, and certifications</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            {showAddForm ? 'Cancel' : 'Add Permit'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Permits</p>
              <p className="text-3xl font-bold mt-2">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-1">registered</p>
            </div>
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-3xl font-bold mt-2">{stats.active}</p>
              <p className="text-sm text-gray-500 mt-1">in good standing</p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Expiring Soon</p>
              <p className="text-3xl font-bold mt-2">{stats.expiringSoon}</p>
              <p className="text-sm text-gray-500 mt-1">within 60 days</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Auto-Renewal</p>
              <p className="text-3xl font-bold mt-2">{permits.filter(p => p.autoRenewal).length}</p>
              <p className="text-sm text-gray-500 mt-1">enabled</p>
            </div>
            <Bell className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Expiry Alerts */}
      {stats.expiringSoon > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900">
                {stats.expiringSoon} permit{stats.expiringSoon > 1 ? 's' : ''} expiring soon
              </h3>
              <p className="text-sm text-orange-800 mt-1">
                Action required to renew permits before expiry. Check the list below for details.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add Permit Form */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-2 border-emerald-500">
          <h2 className="text-xl font-bold mb-6">Add New Permit</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Permit Type *</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">Select type</option>
                <option value="carrier">Waste Carrier License</option>
                <option value="environmental">Environmental Permit</option>
                <option value="exemption">Waste Exemption</option>
                <option value="hazardous">Hazardous Waste License</option>
                <option value="broker">Waste Broker License</option>
                <option value="driver">Driver CPC</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Permit Number *</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., CBDU123456"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Holder *</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Company or individual name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Authority *</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., Environment Agency"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date *</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date *</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Additional information..."
              />
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <input type="checkbox" id="autoRenewal" className="w-4 h-4 text-emerald-600 rounded" />
              <label htmlFor="autoRenewal" className="text-sm font-medium text-gray-700">
                Enable automatic renewal reminders
              </label>
            </div>

            <div className="col-span-2">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Upload permit documents</p>
                <button className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
                  Choose Files
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <Shield className="w-5 h-5" />
              Add Permit
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Permits List */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">All Permits & Licenses</h2>

        <div className="space-y-4">
          {permits.map((permit) => {
            const daysUntilExpiry = getDaysUntilExpiry(permit.expiryDate)
            
            return (
              <div
                key={permit.id}
                className={`border-2 rounded-lg p-6 transition-colors ${
                  permit.status === 'expiring-soon'
                    ? 'border-orange-300 bg-orange-50'
                    : permit.status === 'expired'
                    ? 'border-red-300 bg-red-50'
                    : 'border-gray-200 hover:border-emerald-500'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-emerald-600" />
                      <h3 className="text-xl font-bold">{permit.type}</h3>
                    </div>
                    <p className="text-sm text-gray-600 font-mono">{permit.number}</p>
                  </div>
                  {getStatusBadge(permit.status)}
                </div>

                <div className="grid grid-cols-4 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Holder</p>
                    <p className="font-medium">{permit.holder}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Authority</p>
                    <p className="font-medium">{permit.authority}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Issue Date</p>
                    <p className="font-medium">{new Date(permit.issueDate).toLocaleDateString('en-GB')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expiry Date</p>
                    <p className="font-medium">
                      {new Date(permit.expiryDate).toLocaleDateString('en-GB')}
                      {daysUntilExpiry <= 60 && daysUntilExpiry > 0 && (
                        <span className="ml-2 text-orange-600 text-xs">
                          ({daysUntilExpiry} days left)
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {permit.notes && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">{permit.notes}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span>{permit.documents.length} document{permit.documents.length !== 1 ? 's' : ''}</span>
                    </div>
                    
                    {permit.autoRenewal && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Bell className="w-4 h-4" />
                        <span>Auto-renewal enabled</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
