'use client'

import { useState } from 'react'
import {
  DollarSign,
  FileText,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Plus,
  Edit,
  Copy
} from 'lucide-react'

interface Contract {
  id: string
  customer: string
  contractType: 'per-lift' | 'per-tonne' | 'monthly-fixed' | 'annual'
  startDate: string
  endDate: string
  reviewDate?: string
  status: 'active' | 'pending-review' | 'expired' | 'draft'
  pricing: {
    perLift?: number
    perTonne?: number
    monthlyFee?: number
    annualFee?: number
  }
  terms: {
    minimumTerm: number
    noticePeriod: number
    autoRenew: boolean
    priceReviewCycle: number // months
  }
  sla: {
    collectionFrequency: string
    responseTime: number // hours
    penaltyClause: string
  }
  revenue: number
}

export default function PricingPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [contracts, setContracts] = useState<Contract[]>([
    {
      id: 'CONT-001',
      customer: 'Tesco Express',
      contractType: 'per-lift',
      startDate: '2024-01-01',
      endDate: '2027-01-01',
      reviewDate: '2026-01-01',
      status: 'active',
      pricing: {
        perLift: 45.00
      },
      terms: {
        minimumTerm: 36,
        noticePeriod: 3,
        autoRenew: true,
        priceReviewCycle: 12
      },
      sla: {
        collectionFrequency: '3x weekly',
        responseTime: 24,
        penaltyClause: '£50 per missed collection'
      },
      revenue: 14040
    },
    {
      id: 'CONT-002',
      customer: 'BuildCo Ltd',
      contractType: 'per-tonne',
      startDate: '2025-06-01',
      endDate: '2026-06-01',
      status: 'active',
      pricing: {
        perTonne: 85.00
      },
      terms: {
        minimumTerm: 12,
        noticePeriod: 1,
        autoRenew: false,
        priceReviewCycle: 12
      },
      sla: {
        collectionFrequency: 'On-demand',
        responseTime: 48,
        penaltyClause: 'N/A'
      },
      revenue: 8925
    },
    {
      id: 'CONT-003',
      customer: 'Costa Coffee',
      contractType: 'monthly-fixed',
      startDate: '2024-03-01',
      endDate: '2026-03-01',
      reviewDate: '2025-09-01',
      status: 'pending-review',
      pricing: {
        monthlyFee: 850.00
      },
      terms: {
        minimumTerm: 24,
        noticePeriod: 2,
        autoRenew: true,
        priceReviewCycle: 6
      },
      sla: {
        collectionFrequency: '5x weekly',
        responseTime: 12,
        penaltyClause: '10% monthly fee reduction for SLA breach'
      },
      revenue: 10200
    },
    {
      id: 'CONT-004',
      customer: 'Premier Inn',
      contractType: 'annual',
      startDate: '2025-01-01',
      endDate: '2028-01-01',
      status: 'active',
      pricing: {
        annualFee: 18500.00
      },
      terms: {
        minimumTerm: 36,
        noticePeriod: 6,
        autoRenew: false,
        priceReviewCycle: 12
      },
      sla: {
        collectionFrequency: 'Daily',
        responseTime: 6,
        penaltyClause: '£100 per day for service failure'
      },
      revenue: 18500
    },
    {
      id: 'CONT-005',
      customer: 'Sainsbury\'s Local',
      contractType: 'per-lift',
      startDate: '2023-09-01',
      endDate: '2025-09-01',
      status: 'pending-review',
      pricing: {
        perLift: 38.50
      },
      terms: {
        minimumTerm: 24,
        noticePeriod: 2,
        autoRenew: true,
        priceReviewCycle: 12
      },
      sla: {
        collectionFrequency: '2x weekly',
        responseTime: 24,
        penaltyClause: '£30 per missed collection'
      },
      revenue: 8008
    }
  ])

  const stats = {
    total: contracts.length,
    active: contracts.filter(c => c.status === 'active').length,
    pendingReview: contracts.filter(c => c.status === 'pending-review').length,
    totalRevenue: contracts.reduce((sum, c) => sum + c.revenue, 0),
    avgContractValue: contracts.reduce((sum, c) => sum + c.revenue, 0) / contracts.length
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      'pending-review': 'bg-orange-100 text-orange-700',
      expired: 'bg-red-100 text-red-700',
      draft: 'bg-gray-100 text-gray-700'
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${styles[status as keyof typeof styles]}`}>
        {status.replace('-', ' ')}
      </span>
    )
  }

  const getContractTypeLabel = (type: string) => {
    const labels = {
      'per-lift': 'Per Lift',
      'per-tonne': 'Per Tonne',
      'monthly-fixed': 'Monthly Fixed',
      annual: 'Annual'
    }
    return labels[type as keyof typeof labels]
  }

  const formatCurrency = (amount: number) => {
    return `£${amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pricing & Contract Management</h1>
            <p className="text-gray-600 mt-1">Manage customer contracts and pricing structures</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            {showAddForm ? 'Cancel' : 'New Contract'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Contracts</p>
              <p className="text-3xl font-bold mt-2">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-1">{stats.active} active</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-3xl font-bold mt-2">{stats.pendingReview}</p>
              <p className="text-sm text-gray-500 mt-1">need attention</p>
            </div>
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total ARR</p>
              <p className="text-3xl font-bold mt-2">{formatCurrency(stats.totalRevenue)}</p>
              <p className="text-sm text-gray-500 mt-1">annual recurring</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Contract Value</p>
              <p className="text-3xl font-bold mt-2">{formatCurrency(stats.avgContractValue)}</p>
              <p className="text-sm text-gray-500 mt-1">per customer</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Price Review Alerts */}
      {stats.pendingReview > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900">
                {stats.pendingReview} contract{stats.pendingReview > 1 ? 's' : ''} pending review
              </h3>
              <p className="text-sm text-orange-800 mt-1">
                Price reviews are due. Review and update pricing before the review date.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add Contract Form */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-2 border-emerald-500">
          <h2 className="text-xl font-bold mb-6">New Contract</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer *</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Customer name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contract Type *</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">Select type</option>
                <option value="per-lift">Per Lift</option>
                <option value="per-tonne">Per Tonne</option>
                <option value="monthly-fixed">Monthly Fixed Fee</option>
                <option value="annual">Annual Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
              <input
                type="number"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Collection Frequency *</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., 3x weekly"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Term (months) *</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="12"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notice Period (months) *</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="1"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">SLA Response Time (hours) *</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="24"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Penalty Clause</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., £50 per missed collection"
              />
            </div>

            <div className="col-span-2 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="autoRenew" className="w-4 h-4 text-emerald-600 rounded" />
                <label htmlFor="autoRenew" className="text-sm font-medium text-gray-700">
                  Auto-renew contract
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <FileText className="w-5 h-5" />
              Create Contract
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

      {/* Contracts List */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">All Contracts</h2>

        <div className="space-y-4">
          {contracts.map((contract) => (
            <div key={contract.id} className="border-2 border-gray-200 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{contract.customer}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">
                      {getContractTypeLabel(contract.contractType)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{contract.id}</p>
                </div>
                {getStatusBadge(contract.status)}
              </div>

              <div className="grid grid-cols-4 gap-6 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Contract Period</p>
                  <p className="font-medium">
                    {new Date(contract.startDate).toLocaleDateString('en-GB')} - {new Date(contract.endDate).toLocaleDateString('en-GB')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pricing</p>
                  <p className="font-bold text-lg">
                    {contract.pricing.perLift && formatCurrency(contract.pricing.perLift) + ' /lift'}
                    {contract.pricing.perTonne && formatCurrency(contract.pricing.perTonne) + ' /tonne'}
                    {contract.pricing.monthlyFee && formatCurrency(contract.pricing.monthlyFee) + ' /month'}
                    {contract.pricing.annualFee && formatCurrency(contract.pricing.annualFee) + ' /year'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Collection Frequency</p>
                  <p className="font-medium">{contract.sla.collectionFrequency}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Annual Revenue</p>
                  <p className="font-bold text-lg text-emerald-600">{formatCurrency(contract.revenue)}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Minimum Term</p>
                  <p className="font-medium">{contract.terms.minimumTerm} months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Notice Period</p>
                  <p className="font-medium">{contract.terms.noticePeriod} month{contract.terms.noticePeriod > 1 ? 's' : ''}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price Review Cycle</p>
                  <p className="font-medium">Every {contract.terms.priceReviewCycle} months</p>
                </div>
              </div>

              {contract.reviewDate && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <p className="text-sm font-medium text-orange-900">
                      Price review due: {new Date(contract.reviewDate).toLocaleDateString('en-GB')}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-gray-500" />
                    <span>SLA: {contract.sla.responseTime}h response</span>
                  </div>
                  {contract.terms.autoRenew && (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Auto-renewal enabled</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                    <Copy className="w-4 h-4" />
                    Duplicate
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                    View Full Contract
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
