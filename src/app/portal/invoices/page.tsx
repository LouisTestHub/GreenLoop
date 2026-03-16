import { Download, Eye } from 'lucide-react'

const invoices = [
  { id: 1, ref: 'INV-2026-0089', date: '01 Mar 2026', due: '31 Mar 2026', amount: '£485.00', status: 'Outstanding' },
  { id: 2, ref: 'INV-2026-0072', date: '01 Feb 2026', due: '03 Mar 2026', amount: '£520.00', status: 'Overdue' },
  { id: 3, ref: 'INV-2026-0055', date: '01 Jan 2026', due: '31 Jan 2026', amount: '£485.00', status: 'Paid' },
  { id: 4, ref: 'INV-2025-0312', date: '01 Dec 2025', due: '31 Dec 2025', amount: '£485.00', status: 'Paid' },
  { id: 5, ref: 'INV-2025-0298', date: '01 Nov 2025', due: '01 Dec 2025', amount: '£450.00', status: 'Paid' },
]

export default function PortalInvoices() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
        <p className="text-gray-600 mt-1">View and download your invoices.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Total Outstanding</p>
          <p className="text-2xl font-bold text-orange-500 mt-1">£1,005.00</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Overdue</p>
          <p className="text-2xl font-bold text-red-500 mt-1">£520.00</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500">Paid (Last 6 Months)</p>
          <p className="text-2xl font-bold text-emerald-500 mt-1">£1,420.00</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Reference</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Invoice Date</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Due Date</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">{inv.ref}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{inv.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{inv.due}</td>
                <td className="px-6 py-4 text-sm font-semibold">{inv.amount}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    inv.status === 'Paid' ? 'bg-green-100 text-green-700' :
                    inv.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {inv.status}
                  </span>
                </td>
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
