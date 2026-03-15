import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import { Calendar } from 'lucide-react'

export default async function SchedulePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const today = new Date()
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

  const jobs = await db.job.findMany({
    where: {
      companyId: session.user.companyId,
      scheduledDate: {
        gte: today,
        lte: nextWeek,
      },
    },
    include: {
      customer: true,
      driver: true,
      vehicle: true,
    },
    orderBy: { scheduledDate: 'asc' },
  })

  // Group by date
  const jobsByDate = jobs.reduce((acc, job) => {
    const dateKey = formatDate(job.scheduledDate)
    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(job)
    return acc
  }, {} as Record<string, typeof jobs>)

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-gray-600">Upcoming jobs for the next 7 days</p>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(jobsByDate).map(([date, dateJobs]) => (
          <div key={date} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h2 className="font-bold text-lg">{date}</h2>
              <p className="text-sm text-gray-600">{dateJobs.length} jobs scheduled</p>
            </div>
            <div className="p-6 space-y-4">
              {dateJobs.map((job) => (
                <div key={job.id} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{job.reference}</span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">{job.jobType}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{job.customer.name} — {job.siteAddress}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{job.driver?.name || 'Unassigned'}</p>
                    <p className="text-xs text-gray-500">{job.vehicle?.registration || 'No vehicle'}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    job.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                    job.status === 'EN_ROUTE' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
