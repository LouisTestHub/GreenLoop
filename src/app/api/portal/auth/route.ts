import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const portalUser = await db.portalUser.findUnique({
      where: { email },
      include: { customer: true },
    })

    if (!portalUser || !portalUser.isActive) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const valid = await bcrypt.compare(password, portalUser.passwordHash)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Update last login
    await db.portalUser.update({
      where: { id: portalUser.id },
      data: { lastLoginAt: new Date() },
    })

    return NextResponse.json({
      id: portalUser.id,
      name: portalUser.name,
      email: portalUser.email,
      customerId: portalUser.customerId,
      customerName: portalUser.customer.name,
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
