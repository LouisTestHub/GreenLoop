import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const customerId = searchParams.get('customerId')

    if (!customerId) {
      return NextResponse.json({ error: 'Customer ID required' }, { status: 400 })
    }

    const wtns = await db.wTN.findMany({
      where: { customerId },
      orderBy: { collectionDate: 'desc' },
      take: 50,
      select: {
        id: true,
        reference: true,
        collectionDate: true,
        ewcCode: true,
        wasteDescription: true,
        quantity: true,
        quantityUnit: true,
        carrierName: true,
        receiverName: true,
        pdfUrl: true,
        submittedToEA: true,
      },
    })

    return NextResponse.json(wtns)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
