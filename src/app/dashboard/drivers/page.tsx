import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function DriversPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.companyId) return <div>Loading...</div>

  const drivers = await db.user.findMany({
    where: {
      companyId: session.user.companyId,
      role: 'DRIVER',
    },
  })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Drivers</h1>
      <div className="grid gap-4">
        {drivers.map((driver) => (
          <div key={driver.id} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-bold text-lg">{driver.name}</h3>
            <p className="text-gray-600">{driver.email}</p>
            <p className="text-sm text-gray-500 mt-2">Driver Licence: {driver.driverLicence || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
