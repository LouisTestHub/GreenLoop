import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default async function JobsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.companyId) {
    return <div>Loading...</div>
  }

  const jobs = await db.job.findMany({
    where: { companyId: session.user.companyId },
    include: {
      customer: true,
      driver: true,
      vehicle: true,
      wasteStream: true,
    },
    orderBy: { scheduledDate: 'desc' },
    take: 50,
  })

  const statusColors = {
    SCHEDULED: 'bg-blue-100 text-blue-700',
    EN_ROUTE: 'bg-yellow-100 text-yellow-700',
    ARRIVED: 'bg-orange-100 text-orange-700',
    COMPLETED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-red-100 text-red-700',
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Jobs</h1>
        <Link
          href="/dashboard/jobs/new"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Create Job
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scheduled</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waste</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">{job.reference}</td>
                <td className="px-6 py-4">{job.customer.name}</td>
                <td className="px-6 py-4">{job.jobType}</td>
                <td className="px-6 py-4">{formatDate(job.scheduledDate)}</td>
                <td className="px-6 py-4">{job.driver?.name || 'Unassigned'}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColors[job.status as keyof typeof statusColors]}`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {job.wasteStream?.description.substring(0, 30)}...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
