import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const customerId = searchParams.get('customerId')

    if (!customerId) {
      return NextResponse.json({ error: 'Customer ID required' }, { status: 400 })
    }

    const invoices = await db.invoice.findMany({
      where: { customerId },
      orderBy: { invoiceDate: 'desc' },
      take: 50,
      select: {
        id: true,
        reference: true,
        invoiceDate: true,
        dueDate: true,
        subtotal: true,
        vatAmount: true,
        total: true,
        status: true,
        pdfUrl: true,
      },
    })

    return NextResponse.json(invoices)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
