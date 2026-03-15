'use client'

import { useState } from 'react'
import { 
  FileText, 
  Save, 
  Send, 
  Check, 
  AlertCircle, 
  Loader2,
  Upload,
  Trash2 
} from 'lucide-react'

type SubmissionStatus = 'draft' | 'submitted' | 'accepted' | 'rejected'

interface EDOCSubmission {
  id: string
  reference: string
  status: SubmissionStatus
  wasteDescription: string
  ewcCode: string
  quantity: number
  carrierName: string
  destinationPermit: string
  createdAt: string
  submittedAt?: string
  errors?: string[]
}

export default function EDOCSubmitPage() {
  const [formData, setFormData] = useState({
    wasteDescription: '',
    ewcCode: '',
    quantity: '',
    unit: 'tonnes',
    carrierName: '',
    carrierLicense: '',
    brokerName: '',
    brokerLicense: '',
    destinationSite: '',
    destinationPermit: '',
    collectionDate: '',
    notes: ''
  })

  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissions, setSubmissions] = useState<EDOCSubmission[]>([
    {
      id: 'EDOC-2026-001',
      reference: 'WTN-20260315-001',
      status: 'accepted',
      wasteDescription: 'Mixed Commercial Waste',
      ewcCode: '20 03 01',
      quantity: 2.5,
      carrierName: 'ABC Transport Ltd',
      destinationPermit: 'EPR/XX1234YY',
      createdAt: '2026-03-14T09:00:00Z',
      submittedAt: '2026-03-14T09:15:00Z'
    },
    {
      id: 'EDOC-2026-002',
      reference: 'WTN-20260315-002',
      status: 'submitted',
      wasteDescription: 'Construction & Demolition Waste',
      ewcCode: '17 09 04',
      quantity: 8.0,
      carrierName: 'Fast Haulage Co',
      destinationPermit: 'EPR/ZZ5678AA',
      createdAt: '2026-03-15T08:30:00Z',
      submittedAt: '2026-03-15T08:45:00Z'
    },
    {
      id: 'EDOC-2026-003',
      reference: 'WTN-20260315-003',
      status: 'draft',
      wasteDescription: 'Recyclable Paper & Cardboard',
      ewcCode: '20 01 01',
      quantity: 1.2,
      carrierName: 'Green Logistics',
      destinationPermit: 'EPR/BB9876CC',
      createdAt: '2026-03-15T10:00:00Z'
    },
    {
      id: 'EDOC-2026-004',
      reference: 'WTN-20260315-004',
      status: 'rejected',
      wasteDescription: 'Hazardous Paint Waste',
      ewcCode: '08 01 11',
      quantity: 0.5,
      carrierName: 'Hazmat Transport',
      destinationPermit: 'EPR/HH4321DD',
      createdAt: '2026-03-14T14:00:00Z',
      submittedAt: '2026-03-14T14:20:00Z',
      errors: ['Invalid destination permit format', 'Carrier license expired']
    }
  ])

  const ewcCodes = [
    { code: '20 03 01', description: 'Mixed municipal waste' },
    { code: '20 01 01', description: 'Paper and cardboard' },
    { code: '17 09 04', description: 'Mixed construction & demolition waste' },
    { code: '08 01 11', description: 'Waste paint and varnish containing organic solvents' },
    { code: '15 01 01', description: 'Paper and cardboard packaging' },
    { code: '16 01 03', description: 'End-of-life tyres' },
    { code: '19 12 12', description: 'Other wastes from mechanical treatment' }
  ]

  const validateForm = () => {
    const newErrors: string[] = []
    
    if (!formData.wasteDescription) newErrors.push('Waste description is required')
    if (!formData.ewcCode) newErrors.push('EWC code is required')
    if (!formData.quantity || parseFloat(formData.quantity) <= 0) newErrors.push('Valid quantity is required')
    if (!formData.carrierName) newErrors.push('Carrier name is required')
    if (!formData.carrierLicense) newErrors.push('Carrier license is required')
    if (!formData.destinationSite) newErrors.push('Destination site is required')
    if (!formData.destinationPermit) newErrors.push('Destination permit is required')
    if (!formData.destinationPermit.match(/^EPR\/[A-Z]{2}\d{4}[A-Z]{2}$/)) {
      newErrors.push('Destination permit must be in format EPR/XX1234YY')
    }
    if (!formData.collectionDate) newErrors.push('Collection date is required')

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSaveDraft = () => {
    console.log('Saving draft...', formData)
    alert('Draft saved successfully!')
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      alert('EDOC submitted successfully to Environment Agency!')
      setFormData({
        wasteDescription: '',
        ewcCode: '',
        quantity: '',
        unit: 'tonnes',
        carrierName: '',
        carrierLicense: '',
        brokerName: '',
        brokerLicense: '',
        destinationSite: '',
        destinationPermit: '',
        collectionDate: '',
        notes: ''
      })
      setErrors([])
      setIsSubmitting(false)
    }, 2000)
  }

  const getStatusBadge = (status: SubmissionStatus) => {
    const styles = {
      draft: 'bg-gray-100 text-gray-700',
      submitted: 'bg-blue-100 text-blue-700',
      accepted: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700'
    }
    
    const icons = {
      draft: FileText,
      submitted: Send,
      accepted: Check,
      rejected: AlertCircle
    }
    
    const Icon = icons[status]
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        <Icon className="w-3 h-3" />
        {status.toUpperCase()}
      </span>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">EDOC Digital Submission Portal</h1>
        <p className="text-gray-600 mt-1">Create and submit digital waste transfer notes to the Environment Agency</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">New EDOC Submission</h2>

          {errors.length > 0 && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900">Validation Errors</h3>
                  <ul className="mt-2 space-y-1 text-sm text-red-800">
                    {errors.map((error, idx) => (
                      <li key={idx}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Waste Details */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Waste Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Waste Description *
                  </label>
                  <input
                    type="text"
                    value={formData.wasteDescription}
                    onChange={(e) => setFormData({ ...formData, wasteDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., Mixed Commercial Waste"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    EWC Code *
                  </label>
                  <select
                    value={formData.ewcCode}
                    onChange={(e) => setFormData({ ...formData, ewcCode: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select EWC Code</option>
                    {ewcCodes.map((code) => (
                      <option key={code.code} value={code.code}>
                        {code.code} - {code.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unit
                    </label>
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="tonnes">Tonnes</option>
                      <option value="cubic_metres">Cubic Metres</option>
                      <option value="litres">Litres</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Carrier Details */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Carrier Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Carrier Name *
                  </label>
                  <input
                    type="text"
                    value={formData.carrierName}
                    onChange={(e) => setFormData({ ...formData, carrierName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., ABC Transport Ltd"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Carrier License *
                  </label>
                  <input
                    type="text"
                    value={formData.carrierLicense}
                    onChange={(e) => setFormData({ ...formData, carrierLicense: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="CBDU123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Broker Name (if applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.brokerName}
                    onChange={(e) => setFormData({ ...formData, brokerName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Broker License
                  </label>
                  <input
                    type="text"
                    value={formData.brokerLicense}
                    onChange={(e) => setFormData({ ...formData, brokerLicense: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Destination Details */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Destination Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Destination Site *
                  </label>
                  <input
                    type="text"
                    value={formData.destinationSite}
                    onChange={(e) => setFormData({ ...formData, destinationSite: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., Greenfield Recycling Centre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Destination Permit *
                  </label>
                  <input
                    type="text"
                    value={formData.destinationPermit}
                    onChange={(e) => setFormData({ ...formData, destinationPermit: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="EPR/XX1234YY"
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: EPR/XX1234YY</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Collection Date *
                  </label>
                  <input
                    type="date"
                    value={formData.collectionDate}
                    onChange={(e) => setFormData({ ...formData, collectionDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Any additional information..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <button
                onClick={handleSaveDraft}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Draft
              </button>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit to EA
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
          
          <div className="space-y-3">
            {submissions.map((submission) => (
              <div key={submission.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-sm">{submission.reference}</p>
                    <p className="text-xs text-gray-500">{submission.id}</p>
                  </div>
                  {getStatusBadge(submission.status)}
                </div>
                
                <p className="text-sm text-gray-700 mb-1">{submission.wasteDescription}</p>
                <p className="text-xs text-gray-500">EWC: {submission.ewcCode}</p>
                <p className="text-xs text-gray-500">{submission.quantity} tonnes</p>
                
                {submission.errors && submission.errors.length > 0 && (
                  <div className="mt-2 text-xs text-red-600">
                    {submission.errors.map((error, idx) => (
                      <p key={idx}>• {error}</p>
                    ))}
                  </div>
                )}
                
                <p className="text-xs text-gray-400 mt-2">
                  Created: {new Date(submission.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
