import { Download, Eye, FileText } from 'lucide-react'

const wtns = [
  { id: 1, ref: 'WTN-2026-0234', date: '15 Mar 2026', waste: 'General Waste (20 03 01)', qty: '0.8 tonnes', carrier: 'GreenLoop Demo Ltd' },
  { id: 2, ref: 'WTN-2026-0229', date: '14 Mar 2026', waste: 'Mixed Recycling (20 01 01)', qty: '0.3 tonnes', carrier: 'GreenLoop Demo Ltd' },
  { id: 3, ref: 'WTN-2026-0218', date: '11 Mar 2026', waste: 'General Waste (20 03 01)', qty: '0.9 tonnes', carrier: 'GreenLoop Demo Ltd' },
  { id: 4, ref: 'WTN-2026-0205', date: '7 Mar 2026', waste: 'Cardboard (20 01 01)', qty: '0.2 tonnes', carrier: 'GreenLoop Demo Ltd' },
  { id: 5, ref: 'WTN-2026-0198', date: '4 Mar 2026', waste: 'General Waste (20 03 01)', qty: '0.7 tonnes', carrier: 'GreenLoop Demo Ltd' },
  { id: 6, ref: 'WTN-2026-0185', date: '28 Feb 2026', waste: 'General Waste (20 03 01)', qty: '0.8 tonnes', carrier: 'GreenLoop Demo Ltd' },
]

export default function PortalWTNs() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Waste Transfer Notes</h1>
        <p className="text-gray-600 mt-1">Access and download your digital WTNs for compliance records.</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg mb-8 flex items-start gap-3">
        <FileText className="w-5 h-5 text-emerald-600 mt-0.5" />
        <div>
          <p className="font-semibold text-emerald-800">EDOC Compliant</p>
          <p className="text-sm text-emerald-700">All WTNs are digitally recorded and submitted to DEFRA in compliance with EDOC requirements.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Reference</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Waste Type</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Quantity</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Carrier</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wtns.map((wtn) => (
              <tr key={wtn.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-emerald-600">{wtn.ref}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{wtn.date}</td>
                <td className="px-6 py-4 text-sm">{wtn.waste}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{wtn.qty}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{wtn.carrier}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-gray-600" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600" title="Download PDF">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
