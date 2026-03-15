import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Building2, MapPin } from 'lucide-react'

export default async function SitesPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const sites = await db.customerSite.findMany({
    include: {
      customer: true,
      _count: {
        select: { jobs: true },
      },
    },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-8 h-8 text-indigo-500" />
        <div>
          <h1 className="text-3xl font-bold">Customer Sites</h1>
          <p className="text-gray-600">{sites.length} collection points across all customers</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Site Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Postcode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jobs</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {sites.map((site) => (
                <tr key={site.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{site.name}</td>
                  <td className="px-6 py-4">{site.customer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{site.address}</td>
                  <td className="px-6 py-4 font-mono text-sm">{site.postcode}</td>
                  <td className="px-6 py-4 text-sm">
                    {site.contactName && (
                      <div>
                        <p>{site.contactName}</p>
                        <p className="text-gray-500">{site.contactPhone}</p>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {site._count.jobs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
