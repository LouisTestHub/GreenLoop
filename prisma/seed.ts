import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clean existing data
  console.log('Cleaning existing data...')
  await prisma.weighbridgeTicket.deleteMany()
  await prisma.invoiceLineItem.deleteMany()
  await prisma.invoice.deleteMany()
  await prisma.wTN.deleteMany()
  await prisma.job.deleteMany()
  await prisma.recurringJob.deleteMany()
  await prisma.route.deleteMany()
  await prisma.skip.deleteMany()
  await prisma.customerSite.deleteMany()
  await prisma.customer.deleteMany()
  await prisma.timesheet.deleteMany()
  await prisma.dailyVehicleCheck.deleteMany()
  await prisma.defectReport.deleteMany()
  await prisma.maintenanceLog.deleteMany()
  await prisma.vehicle.deleteMany()
  await prisma.wasteStream.deleteMany()
  await prisma.complianceCertificate.deleteMany()
  await prisma.hazardousConsignment.deleteMany()
  await prisma.ePRSubmission.deleteMany()
  await prisma.packagingRecord.deleteMany()
  await prisma.priceOverride.deleteMany()
  await prisma.contract.deleteMany()
  await prisma.user.deleteMany()
  await prisma.company.deleteMany()

  // Create demo company
  console.log('Creating company...')
  const company = await prisma.company.create({
    data: {
      name: 'GreenLoop Demo Ltd',
      registrationNumber: '12345678',
      vatNumber: 'GB123456789',
      wasteCarrierLicence: 'CBDU123456',
      licenceExpiryDate: new Date('2027-12-31'),
      address: '123 Waste Management Way',
      postcode: 'E1 7BD',
      phone: '020 7123 4567',
      email: 'info@greenloop-demo.co.uk',
      subscriptionPlan: 'PROFESSIONAL',
      subscriptionStatus: 'ACTIVE',
    },
  })

  // Create users
  console.log('Creating users...')
  const passwordHash = await bcrypt.hash('password123', 10)

  const operator = await prisma.user.create({
    data: {
      companyId: company.id,
      name: 'Sarah Williams',
      email: 'sarah@greenloop-demo.co.uk',
      passwordHash,
      role: 'OPERATOR',
      phone: '07700 900123',
    },
  })

  const dispatcher = await prisma.user.create({
    data: {
      companyId: company.id,
      name: 'Mike Johnson',
      email: 'mike@greenloop-demo.co.uk',
      passwordHash,
      role: 'DISPATCHER',
      phone: '07700 900124',
    },
  })

  const driver1 = await prisma.user.create({
    data: {
      companyId: company.id,
      name: 'Tom Davies',
      email: 'tom@greenloop-demo.co.uk',
      passwordHash,
      role: 'DRIVER',
      phone: '07700 900125',
      driverLicence: 'DAVIE123456TD9IJ',
      driverCPCExpiry: new Date('2028-06-30'),
    },
  })

  const driver2 = await prisma.user.create({
    data: {
      companyId: company.id,
      name: 'James Brown',
      email: 'james@greenloop-demo.co.uk',
      passwordHash,
      role: 'DRIVER',
      phone: '07700 900126',
      driverLicence: 'BROWN456789JB1AB',
      driverCPCExpiry: new Date('2027-12-31'),
    },
  })

  const compliance = await prisma.user.create({
    data: {
      companyId: company.id,
      name: 'Emma Taylor',
      email: 'emma@greenloop-demo.co.uk',
      passwordHash,
      role: 'COMPLIANCE_OFFICER',
      phone: '07700 900127',
    },
  })

  // Create waste streams
  console.log('Creating waste streams...')
  const wasteStreams = await Promise.all([
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '200301',
        description: 'Mixed municipal waste',
        category: 'GENERAL_WASTE',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '150106',
        description: 'Mixed packaging',
        category: 'DRY_RECYCLABLES',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '200108',
        description: 'Biodegradable kitchen and canteen waste',
        category: 'FOOD_WASTE',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '170107',
        description: 'Mixed construction and demolition waste',
        category: 'CONSTRUCTION',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '150101',
        description: 'Paper and cardboard packaging',
        category: 'DRY_RECYCLABLES',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '170401',
        description: 'Copper, bronze, brass',
        category: 'SCRAP_METAL',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '200136',
        description: 'Discarded electrical and electronic equipment',
        category: 'WEEE',
        isHazardous: false,
      },
    }),
    prisma.wasteStream.create({
      data: {
        companyId: company.id,
        ewcCode: '200201',
        description: 'Biodegradable garden waste',
        category: 'GARDEN_WASTE',
        isHazardous: false,
      },
    }),
  ])

  // Create vehicles
  console.log('Creating vehicles...')
  const vehicles = await Promise.all([
    prisma.vehicle.create({
      data: {
        companyId: company.id,
        registration: 'BD66 ABC',
        type: 'SKIP_LOADER',
        make: 'Mercedes-Benz',
        model: 'Econic',
        year: 2020,
        capacity: 26,
        capacityUnit: 'tonnes',
        fuelType: 'DIESEL',
        motExpiry: new Date('2026-08-15'),
        taxExpiry: new Date('2026-07-31'),
        currentMileage: 45000,
        status: 'ACTIVE',
      },
    }),
    prisma.vehicle.create({
      data: {
        companyId: company.id,
        registration: 'YT19 XYZ',
        type: 'HOOKLIFT',
        make: 'DAF',
        model: 'CF',
        year: 2019,
        capacity: 18,
        capacityUnit: 'cubic_yards',
        fuelType: 'DIESEL',
        motExpiry: new Date('2026-09-20'),
        taxExpiry: new Date('2026-08-31'),
        currentMileage: 62000,
        status: 'ACTIVE',
      },
    }),
    prisma.vehicle.create({
      data: {
        companyId: company.id,
        registration: 'LM21 DEF',
        type: 'TIPPER',
        make: 'Volvo',
        model: 'FM',
        year: 2021,
        capacity: 32,
        capacityUnit: 'tonnes',
        fuelType: 'DIESEL',
        motExpiry: new Date('2027-03-15'),
        taxExpiry: new Date('2027-02-28'),
        currentMileage: 28000,
        status: 'ACTIVE',
      },
    }),
    prisma.vehicle.create({
      data: {
        companyId: company.id,
        registration: 'GH18 JKL',
        type: 'GRAB_LORRY',
        make: 'Scania',
        model: 'P-series',
        year: 2018,
        capacity: 20,
        capacityUnit: 'tonnes',
        fuelType: 'DIESEL',
        motExpiry: new Date('2026-11-30'),
        taxExpiry: new Date('2026-10-31'),
        currentMileage: 78000,
        status: 'ACTIVE',
      },
    }),
    prisma.vehicle.create({
      data: {
        companyId: company.id,
        registration: 'KL22 MNO',
        type: 'COMPACTOR',
        make: 'Dennis',
        model: 'Elite',
        year: 2022,
        capacity: 24,
        capacityUnit: 'cubic_yards',
        fuelType: 'DIESEL',
        motExpiry: new Date('2027-06-15'),
        taxExpiry: new Date('2027-05-31'),
        currentMileage: 15000,
        status: 'ACTIVE',
      },
    }),
  ])

  // Create customers
  console.log('Creating customers...')
  const customerNames = [
    { name: 'ABC Construction Ltd', type: 'CONSTRUCTION' },
    { name: 'Metro Retail Group', type: 'RETAIL' },
    { name: 'City Café Chain', type: 'HOSPITALITY' },
    { name: 'Essex Manufacturing Co', type: 'MANUFACTURING' },
    { name: 'London Office Park', type: 'OFFICE' },
    { name: 'Green Valley School', type: 'EDUCATION' },
    { name: 'St. Mary Hospital', type: 'HEALTHCARE' },
    { name: 'BuildRight Contractors', type: 'CONSTRUCTION' },
    { name: 'Fresh Foods Supermarket', type: 'RETAIL' },
    { name: 'River View Hotel', type: 'HOSPITALITY' },
    { name: 'Tech Innovation Hub', type: 'OFFICE' },
    { name: 'Riverside Academy', type: 'EDUCATION' },
    { name: 'Premier Logistics Ltd', type: 'MANUFACTURING' },
    { name: 'Urban Development Group', type: 'CONSTRUCTION' },
    { name: 'Corner Shop Network', type: 'RETAIL' },
    { name: 'The Grand Restaurant', type: 'HOSPITALITY' },
    { name: 'Precision Engineering', type: 'MANUFACTURING' },
    { name: 'Central Business Centre', type: 'OFFICE' },
    { name: 'Community College', type: 'EDUCATION' },
    { name: 'Healthcare Plus Clinic', type: 'HEALTHCARE' },
  ]

  const customers = []
  for (let i = 0; i < 50; i++) {
    const custData = customerNames[i % customerNames.length]
    const customer = await prisma.customer.create({
      data: {
        companyId: company.id,
        name: `${custData.name} ${i > 19 ? i - 19 : ''}`.trim(),
        contactName: `Contact Person ${i + 1}`,
        email: `contact${i + 1}@customer.example.com`,
        phone: `020 ${7000 + i} ${1000 + i}`,
        billingAddress: `${i + 1} Customer Street`,
        billingPostcode: `E${(i % 20) + 1} ${i}AB`,
        paymentTerms: 30,
        customerType: custData.type,
        rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
        dutyOfCareReceived: true,
        wasteContractSigned: Math.random() > 0.3,
        accountManagerId: dispatcher.id,
      },
    })
    customers.push(customer)

    // Create 2 sites per customer
    await prisma.customerSite.create({
      data: {
        customerId: customer.id,
        name: 'Main Site',
        address: `${i + 1} Main Street`,
        postcode: `E${(i % 20) + 1} ${i}AB`,
        lat: 51.5 + Math.random() * 0.2,
        lng: -0.1 + Math.random() * 0.2,
      },
    })

    if (Math.random() > 0.5) {
      await prisma.customerSite.create({
        data: {
          customerId: customer.id,
          name: 'Warehouse',
          address: `${i + 100} Warehouse Road`,
          postcode: `E${(i % 20) + 1} ${i}WH`,
          lat: 51.5 + Math.random() * 0.2,
          lng: -0.1 + Math.random() * 0.2,
        },
      })
    }
  }

  // Create jobs (500 over last 3 months)
  console.log('Creating 500 jobs...')
  const jobs = []
  const now = new Date()
  
  for (let i = 0; i < 500; i++) {
    const daysAgo = Math.floor(Math.random() * 90)
    const scheduledDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000)
    const customer = customers[Math.floor(Math.random() * customers.length)]
    const wasteStream = wasteStreams[Math.floor(Math.random() * wasteStreams.length)]
    const vehicle = vehicles[Math.floor(Math.random() * vehicles.length)]
    const driver = Math.random() > 0.5 ? driver1 : driver2
    
    const isCompleted = daysAgo > 1
    const status = isCompleted ? 'COMPLETED' : (daysAgo === 0 ? 'SCHEDULED' : 'COMPLETED')

    const job = await prisma.job.create({
      data: {
        companyId: company.id,
        reference: `JOB-2026-${String(i + 1).padStart(4, '0')}`,
        customerId: customer.id,
        siteAddress: `${i + 1} Site Street`,
        sitePostcode: `E${(i % 20) + 1} ${i}XX`,
        lat: 51.5 + Math.random() * 0.2,
        lng: -0.1 + Math.random() * 0.2,
        jobType: ['COLLECTION', 'DELIVERY', 'EXCHANGE'][Math.floor(Math.random() * 3)],
        status,
        scheduledDate,
        completedDate: isCompleted ? scheduledDate : null,
        driverId: driver.id,
        vehicleId: vehicle.id,
        wasteStreamId: wasteStream.id,
        containerType: ['8yd Skip', '12yd Skip', '1100L Bin', 'RoRo'][Math.floor(Math.random() * 4)],
        containerQuantity: Math.floor(Math.random() * 3) + 1,
        tonnage: isCompleted ? Math.random() * 5 + 1 : null,
        notes: `Job ${i + 1} notes`,
      },
    })
    jobs.push(job)
  }

  // Create WTNs for completed jobs (300)
  console.log('Creating 300 WTNs...')
  const completedJobs = jobs.filter(j => j.status === 'COMPLETED' && j.completedDate !== null).slice(0, 300)
  
  for (let i = 0; i < completedJobs.length; i++) {
    const job = completedJobs[i]
    const customer = customers.find(c => c.id === job.customerId)!
    const wasteStream = wasteStreams.find((w: any) => w.id === job.wasteStreamId)!

    await prisma.wTN.create({
      data: {
        companyId: company.id,
        reference: `WTN-2026-${String(i + 1).padStart(6, '0')}`,
        jobId: job.id,
        customerId: customer.id,
        wasteStreamId: wasteStream.id,
        
        producerName: customer.name,
        producerAddress: customer.billingAddress || job.siteAddress,
        producerPostcode: customer.billingPostcode || job.sitePostcode,
        producerContactName: customer.contactName || '',
        producerContactEmail: customer.email || '',
        
        carrierName: company.name,
        carrierAddress: company.address,
        carrierLicence: company.wasteCarrierLicence,
        carrierContactName: operator.name,
        carrierContactEmail: operator.email,
        
        receiverName: 'Essex Transfer Station',
        receiverAddress: '456 Transfer Road',
        receiverPermit: 'EA/EPR/123456',
        
        ewcCode: wasteStream.ewcCode,
        wasteDescription: wasteStream.description,
        quantity: job.tonnage || Math.random() * 5 + 1,
        quantityUnit: 'tonnes',
        containerType: job.containerType,
        numberOfContainers: job.containerQuantity,
        
        producerSignedBy: customer.contactName || 'Customer Rep',
        producerSignedAt: job.completedDate,
        
        carrierSignedBy: job.driverId === driver1.id ? driver1.name : driver2.name,
        carrierSignedAt: job.completedDate,
        
        collectionDate: job.completedDate!,
        
        gpsLatitude: job.lat,
        gpsLongitude: job.lng,
        
        submittedToEA: Math.random() > 0.2,
        eaStatus: Math.random() > 0.2 ? 'ACCEPTED' : 'PENDING',
        eaSubmittedAt: job.completedDate,
        
        customerNotified: true,
        customerNotifiedAt: job.completedDate,
      },
    })
  }

  // Create invoices (50)
  console.log('Creating 50 invoices...')
  for (let i = 0; i < 50; i++) {
    const customer = customers[Math.floor(Math.random() * customers.length)]
    const invoiceDate = new Date(now.getTime() - Math.floor(Math.random() * 60) * 24 * 60 * 60 * 1000)
    const dueDate = new Date(invoiceDate.getTime() + 30 * 24 * 60 * 60 * 1000)
    
    const subtotal = Math.random() * 2000 + 500
    const vatAmount = subtotal * 0.2
    const total = subtotal + vatAmount
    
    const statuses = ['DRAFT', 'SENT', 'PAID', 'OVERDUE']
    const status = statuses[Math.floor(Math.random() * statuses.length)]

    await prisma.invoice.create({
      data: {
        companyId: company.id,
        customerId: customer.id,
        reference: `INV-2026-${String(i + 1).padStart(4, '0')}`,
        invoiceDate,
        dueDate,
        subtotal,
        vatAmount,
        total,
        status,
        paidDate: status === 'PAID' ? new Date(dueDate.getTime() - Math.random() * 10 * 24 * 60 * 60 * 1000) : null,
        sentAt: status !== 'DRAFT' ? invoiceDate : null,
      },
    })
  }

  // Create compliance certificates
  console.log('Creating compliance certificates...')
  await prisma.complianceCertificate.create({
    data: {
      companyId: company.id,
      type: 'WASTE_CARRIER_LICENCE',
      reference: company.wasteCarrierLicence,
      issuer: 'Environment Agency',
      issuedDate: new Date('2024-01-01'),
      expiryDate: new Date('2027-12-31'),
    },
  })

  await prisma.complianceCertificate.create({
    data: {
      companyId: company.id,
      type: 'INSURANCE_PUBLIC_LIABILITY',
      reference: 'PL123456',
      issuer: 'Waste Insurance Ltd',
      issuedDate: new Date('2025-06-01'),
      expiryDate: new Date('2026-05-31'),
    },
  })

  console.log('✅ Seed complete!')
  console.log(`
  📊 Seed Summary:
  - Company: 1 (${company.name})
  - Users: 5 (1 operator, 1 dispatcher, 2 drivers, 1 compliance officer)
  - Customers: 50
  - Waste Streams: 8
  - Vehicles: 5
  - Jobs: 500
  - WTNs: 300
  - Invoices: 50
  - Certificates: 2

  🔐 Login credentials:
  Email: sarah@greenloop-demo.co.uk
  Password: password123
  `)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
