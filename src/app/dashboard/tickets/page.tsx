import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { Receipt } from 'lucide-react'

export default async function TicketsPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const tickets = await db.weighbridgeTicket.findMany({
    where: { companyId: session.user.companyId },
    include: {
      customer: true,
      wasteStream: true,
    },
    orderBy: { timeIn: 'desc' },
    take: 50,
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Receipt className="w-8 h-8 text-indigo-500" />
        <div>
          <h1 className="text-3xl font-bold">Weighbridge Tickets</h1>
          <p className="text-gray-600">Printable PDF tickets for customer records</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net Weight</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PDF</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm">{ticket.reference}</td>
                <td className="px-6 py-4 text-sm">{formatDate(ticket.timeIn)}</td>
                <td className="px-6 py-4">{ticket.customer?.name || 'N/A'}</td>
                <td className="px-6 py-4 font-medium">{ticket.vehicleReg}</td>
                <td className="px-6 py-4 font-bold">{ticket.netWeight ? (ticket.netWeight / 1000).toFixed(2) + ' t' : '-'}</td>
                <td className="px-6 py-4">
                  {ticket.ticketPdfUrl ? (
                    <a href={ticket.ticketPdfUrl} className="text-blue-600 hover:underline text-sm">Download</a>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
