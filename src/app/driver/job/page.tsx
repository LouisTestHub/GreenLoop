'use client'

import { useState } from 'react'
import { Camera, PenTool, AlertTriangle, CheckCircle2, MapPin, Upload } from 'lucide-react'

export default function DriverJobPage() {
  const [photos, setPhotos] = useState<string[]>([])
  const [signature, setSignature] = useState(false)
  const [contamination, setContamination] = useState(false)
  const [contaminationNotes, setContaminationNotes] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'complete'>('pending')

  const job = {
    id: 'JOB-2026-0456',
    customer: 'Smith & Sons Ltd',
    address: '45 High Street, London N1 2AB',
    type: 'General Waste Collection',
    container: '1100L Bin x2',
    ewcCode: '20 03 01',
    wasteDesc: 'Mixed municipal waste',
  }

  const handlePhotoUpload = () => {
    setPhotos([...photos, `photo_${photos.length + 1}.jpg`])
  }

  const handleComplete = () => {
    setStatus('complete')
  }

  return (
    <div className="p-4 space-y-4">
      {/* Job Header */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-xl font-bold">{job.customer}</h1>
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
            status === 'complete' ? 'bg-green-100 text-green-700' :
            status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {status === 'complete' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Pending'}
          </span>
        </div>
        <div className="flex items-start gap-2 text-gray-600 text-sm mb-1">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{job.address}</span>
        </div>
        <p className="text-sm text-gray-500">{job.type} · {job.container}</p>
        <p className="text-xs text-gray-400 mt-1">EWC: {job.ewcCode} — {job.wasteDesc}</p>
      </div>

      {status === 'complete' ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-emerald-800">Job Complete</h2>
          <p className="text-emerald-600 text-sm mt-1">WTN has been generated and submitted.</p>
        </div>
      ) : (
        <>
          {/* Photo Upload */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5 text-gray-500" /> Photo Evidence
            </h3>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {photos.map((p, idx) => (
                <div key={idx} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                  📷 {p}
                </div>
              ))}
              <button
                onClick={handlePhotoUpload}
                className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors"
              >
                <Upload className="w-6 h-6 mb-1" />
                <span className="text-xs">Add Photo</span>
              </button>
            </div>
          </div>

          {/* Signature */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <PenTool className="w-5 h-5 text-gray-500" /> Customer Signature
            </h3>
            {signature ? (
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-sm text-emerald-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Signature captured
              </div>
            ) : (
              <button
                onClick={() => setSignature(true)}
                className="w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-8 text-gray-400 hover:bg-gray-100 transition-colors"
              >
                Tap to capture signature
              </button>
            )}
          </div>

          {/* Contamination Flag */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-gray-500" /> Contamination Check
            </h3>
            <div className="flex gap-3 mb-3">
              <button
                onClick={() => setContamination(false)}
                className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  !contamination ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                ✓ No Contamination
              </button>
              <button
                onClick={() => setContamination(true)}
                className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  contamination ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                ⚠ Contamination Found
              </button>
            </div>
            {contamination && (
              <textarea
                value={contaminationNotes}
                onChange={(e) => setContaminationNotes(e.target.value)}
                placeholder="Describe the contamination..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={3}
              />
            )}
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold mb-3">Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional notes..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={2}
            />
          </div>

          {/* Complete Button */}
          <button
            onClick={handleComplete}
            disabled={!signature}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Job & Generate WTN
          </button>
        </>
      )}
    </div>
  )
}
