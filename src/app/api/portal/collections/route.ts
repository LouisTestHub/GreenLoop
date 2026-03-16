import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const customerId = searchParams.get('customerId')

    if (!customerId) {
      return NextResponse.json({ error: 'Customer ID required' }, { status: 400 })
    }

    const jobs = await db.job.findMany({
      where: { customerId },
      orderBy: { scheduledDate: 'desc' },
      take: 50,
      select: {
        id: true,
        reference: true,
        scheduledDate: true,
        scheduledTime: true,
        completedDate: true,
        jobType: true,
        status: true,
        containerType: true,
        containerQuantity: true,
        tonnage: true,
        siteAddress: true,
      },
    })

    return NextResponse.json(jobs)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
