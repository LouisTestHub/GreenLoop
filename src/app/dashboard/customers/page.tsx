import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function CustomersPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.companyId) {
    return <div>Loading...</div>
  }

  const customers = await db.customer.findMany({
    where: { companyId: session.user.companyId },
    include: {
      _count: {
        select: {
          jobs: true,
          invoices: true,
        },
      },
    },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customers</h1>
      </div>

      <div className="grid gap-4">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{customer.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{customer.contactName}</p>
                <p className="text-gray-500 text-sm">{customer.email}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <span className="text-gray-600">{customer._count.jobs} jobs</span>
                  <span className="text-gray-600">{customer._count.invoices} invoices</span>
                  <span className="text-gray-600">Rating: {customer.rating}/5 ⭐</span>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    customer.isActive
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {customer.isActive ? 'Active' : 'Inactive'}
                </span>
                {customer.wasteContractSigned && (
                  <p className="text-xs text-gray-500 mt-1">✓ Contract signed</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
