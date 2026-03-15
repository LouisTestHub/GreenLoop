import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { ClipboardList, CheckCircle2, AlertTriangle } from 'lucide-react'

export default async function DutyOfCarePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const customers = await db.customer.findMany({
    where: { companyId: session.user.companyId },
    orderBy: { name: 'asc' },
  })

  const withDutyOfCare = customers.filter(c => c.dutyOfCareReceived).length
  const withContracts = customers.filter(c => c.wasteContractSigned).length

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <ClipboardList className="w-8 h-8 text-purple-500" />
        <div>
          <h1 className="text-3xl font-bold">Duty of Care Chain</h1>
          <p className="text-gray-600">Customer compliance documentation & waste contracts</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Total Customers</p>
          <p className="text-3xl font-bold mt-2">{customers.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Duty of Care Received</p>
          <p className="text-3xl font-bold mt-2 text-green-600">{withDutyOfCare}</p>
          <p className="text-xs text-gray-500 mt-1">{((withDutyOfCare / customers.length) * 100).toFixed(0)}% compliance</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Waste Contracts Signed</p>
          <p className="text-3xl font-bold mt-2 text-blue-600">{withContracts}</p>
          <p className="text-xs text-gray-500 mt-1">{((withContracts / customers.length) * 100).toFixed(0)}% signed</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold">Customer Compliance Status</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duty of Care</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waste Contract</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contract Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {customers.map((customer) => {
                const compliant = customer.dutyOfCareReceived && customer.wasteContractSigned
                return (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{customer.name}</td>
                    <td className="px-6 py-4">
                      {customer.dutyOfCareReceived ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {customer.wasteContractSigned ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.wasteContractDate ? new Date(customer.wasteContractDate).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        compliant ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {compliant ? 'Compliant' : 'Action Required'}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
