import { Truck, CheckCircle2, Clock, Calendar } from 'lucide-react'

const collections = [
  { id: 1, date: '20 Mar 2026', time: '08:00-12:00', type: 'General Waste', container: '1100L Bin x2', status: 'Scheduled', driver: 'TBC' },
  { id: 2, date: '18 Mar 2026', time: '08:00-12:00', type: 'Mixed Recycling', container: '1100L Bin x1', status: 'Scheduled', driver: 'TBC' },
  { id: 3, date: '15 Mar 2026', time: '09:15', type: 'General Waste', container: '1100L Bin x2', status: 'Completed', driver: 'Dave B.' },
  { id: 4, date: '14 Mar 2026', time: '10:30', type: 'Mixed Recycling', container: '1100L Bin x1', status: 'Completed', driver: 'Sarah T.' },
  { id: 5, date: '11 Mar 2026', time: '08:45', type: 'General Waste', container: '1100L Bin x2', status: 'Completed', driver: 'Dave B.' },
  { id: 6, date: '7 Mar 2026', time: '11:00', type: 'Cardboard', container: '660L Bin x1', status: 'Completed', driver: 'Mike R.' },
  { id: 7, date: '4 Mar 2026', time: '09:00', type: 'General Waste', container: '1100L Bin x2', status: 'Completed', driver: 'Dave B.' },
]

export default function PortalCollections() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
        <p className="text-gray-600 mt-1">View your upcoming and past waste collections.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Time</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Waste Type</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Container</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Driver</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((c) => (
              <tr key={c.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">{c.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{c.time}</td>
                <td className="px-6 py-4 text-sm">{c.type}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{c.container}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{c.driver}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${
                    c.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {c.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
