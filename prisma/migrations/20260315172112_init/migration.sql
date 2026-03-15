-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT,
    "vatNumber" TEXT,
    "cisUTR" TEXT,
    "wasteCarrierLicence" TEXT NOT NULL,
    "licenceExpiryDate" DATETIME,
    "eaPermitNumber" TEXT,
    "address" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "logo" TEXT,
    "subscriptionPlan" TEXT NOT NULL DEFAULT 'STARTER',
    "subscriptionStatus" TEXT NOT NULL DEFAULT 'TRIAL',
    "trialEndsAt" DATETIME,
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "role" TEXT NOT NULL,
    "phone" TEXT,
    "avatar" TEXT,
    "cscsNumber" TEXT,
    "cscsExpiry" DATETIME,
    "driverLicence" TEXT,
    "driverCPCExpiry" DATETIME,
    "lastLoginAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "customerSiteId" TEXT,
    "siteAddress" TEXT NOT NULL,
    "sitePostcode" TEXT NOT NULL,
    "lat" REAL,
    "lng" REAL,
    "jobType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "scheduledDate" DATETIME NOT NULL,
    "scheduledTime" TEXT,
    "completedDate" DATETIME,
    "driverId" TEXT,
    "vehicleId" TEXT,
    "wasteStreamId" TEXT,
    "containerType" TEXT,
    "containerQuantity" INTEGER,
    "tonnage" REAL,
    "photos" TEXT,
    "routeId" TEXT,
    "sequenceInRoute" INTEGER,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "recurringJobId" TEXT,
    "estimatedDuration" INTEGER,
    "actualStartTime" DATETIME,
    "actualEndTime" DATETIME,
    "skipId" TEXT,
    "customerNotified" BOOLEAN NOT NULL DEFAULT false,
    "customerNotifiedAt" DATETIME,
    "hasException" BOOLEAN NOT NULL DEFAULT false,
    "exceptionReason" TEXT,
    "exceptionNotes" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Job_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Job_customerSiteId_fkey" FOREIGN KEY ("customerSiteId") REFERENCES "CustomerSite" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_recurringJobId_fkey" FOREIGN KEY ("recurringJobId") REFERENCES "RecurringJob" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_skipId_fkey" FOREIGN KEY ("skipId") REFERENCES "Skip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecurringJob" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "siteAddress" TEXT NOT NULL,
    "sitePostcode" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "wasteStreamId" TEXT NOT NULL,
    "containerType" TEXT NOT NULL,
    "containerQuantity" INTEGER NOT NULL,
    "frequency" TEXT NOT NULL,
    "dayOfWeek" INTEGER,
    "dayOfMonth" INTEGER,
    "interval" INTEGER NOT NULL DEFAULT 1,
    "preferredTime" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "generateDaysInAdvance" INTEGER NOT NULL DEFAULT 7,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RecurringJob_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RecurringJob_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecurringJob_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "driverId" TEXT,
    "vehicleId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PLANNED',
    "estimatedDistance" REAL,
    "estimatedDuration" INTEGER,
    "actualDistance" REAL,
    "actualDuration" INTEGER,
    "optimisedAt" DATETIME,
    "optimisationMethod" TEXT,
    "startLat" REAL,
    "startLng" REAL,
    "endLat" REAL,
    "endLng" REAL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Route_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Route_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Route_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "assetNumber" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DEPOT',
    "currentCustomerId" TEXT,
    "currentLocation" TEXT,
    "currentLat" REAL,
    "currentLng" REAL,
    "hireStartDate" DATETIME,
    "hireEndDate" DATETIME,
    "condition" TEXT,
    "lastMaintenance" DATETIME,
    "rfidTag" TEXT,
    "gpsTrackerEnabled" BOOLEAN NOT NULL DEFAULT false,
    "purchaseDate" DATETIME,
    "purchaseCost" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Skip_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Skip_currentCustomerId_fkey" FOREIGN KEY ("currentCustomerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "companyNumber" TEXT,
    "vatNumber" TEXT,
    "sicCode" TEXT,
    "website" TEXT,
    "billingAddress" TEXT,
    "billingPostcode" TEXT,
    "billingEmail" TEXT,
    "paymentTerms" INTEGER NOT NULL DEFAULT 30,
    "creditLimit" REAL,
    "currentBalance" REAL NOT NULL DEFAULT 0,
    "accountManagerId" TEXT,
    "customerType" TEXT,
    "industry" TEXT,
    "source" TEXT,
    "referredBy" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "rating" INTEGER DEFAULT 5,
    "dutyOfCareReceived" BOOLEAN NOT NULL DEFAULT false,
    "wasteContractSigned" BOOLEAN NOT NULL DEFAULT false,
    "wasteContractDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Customer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Customer_accountManagerId_fkey" FOREIGN KEY ("accountManagerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CustomerSite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "lat" REAL,
    "lng" REAL,
    "contactName" TEXT,
    "contactPhone" TEXT,
    "accessNotes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CustomerSite_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "minimumTerm" INTEGER,
    "noticePeriod" INTEGER,
    "autoRenew" BOOLEAN NOT NULL DEFAULT false,
    "serviceType" TEXT NOT NULL,
    "wasteStreamId" TEXT,
    "containerType" TEXT,
    "containerQuantity" INTEGER,
    "frequency" TEXT,
    "pricing" TEXT NOT NULL,
    "pricePerLift" REAL,
    "pricePerTonne" REAL,
    "monthlyFee" REAL,
    "terms" TEXT,
    "signedDate" DATETIME,
    "signedBy" TEXT,
    "documentUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Contract_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Contract_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Contract_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PriceOverride" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "wasteStreamId" TEXT,
    "jobType" TEXT,
    "containerType" TEXT,
    "pricePerLift" REAL,
    "pricePerTonne" REAL,
    "validFrom" DATETIME NOT NULL,
    "validUntil" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PriceOverride_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PriceOverride_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER,
    "vin" TEXT,
    "capacity" REAL,
    "capacityUnit" TEXT,
    "fuelType" TEXT,
    "emissionsStandard" TEXT,
    "oLicenceNumber" TEXT,
    "oLicenceAuthority" TEXT,
    "oLicenceExpiry" DATETIME,
    "motExpiry" DATETIME,
    "taxExpiry" DATETIME,
    "insuranceExpiry" DATETIME,
    "tachoCalibration" DATETIME,
    "lolerExpiry" DATETIME,
    "lastServiceDate" DATETIME,
    "lastServiceMiles" INTEGER,
    "nextServiceDate" DATETIME,
    "nextServiceMiles" INTEGER,
    "currentMileage" INTEGER,
    "gpsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "gpsDeviceId" TEXT,
    "lastGPSUpdate" DATETIME,
    "currentLat" REAL,
    "currentLng" REAL,
    "purchaseDate" DATETIME,
    "purchasePrice" REAL,
    "currentValue" REAL,
    "isFinanced" BOOLEAN NOT NULL DEFAULT false,
    "financeProvider" TEXT,
    "monthlyPayment" REAL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Vehicle_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MaintenanceLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vehicleId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "mileage" INTEGER,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" REAL,
    "supplier" TEXT,
    "invoiceNumber" TEXT,
    "nextServiceMiles" INTEGER,
    "nextServiceDate" DATETIME,
    "performedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MaintenanceLog_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DefectReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vehicleId" TEXT NOT NULL,
    "reportedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportedBy" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photos" TEXT,
    "status" TEXT NOT NULL DEFAULT 'REPORTED',
    "resolvedDate" DATETIME,
    "resolvedBy" TEXT,
    "resolutionNotes" TEXT,
    "cost" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DefectReport_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DailyVehicleCheck" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vehicleId" TEXT NOT NULL,
    "checkDate" DATETIME NOT NULL,
    "checkedBy" TEXT NOT NULL,
    "mileageReading" INTEGER,
    "tyres" TEXT NOT NULL,
    "lights" TEXT NOT NULL,
    "brakes" TEXT NOT NULL,
    "fluidLevels" TEXT NOT NULL,
    "mirrors" TEXT NOT NULL,
    "horn" TEXT NOT NULL,
    "bodywork" TEXT NOT NULL,
    "defectsFound" BOOLEAN NOT NULL DEFAULT false,
    "defectNotes" TEXT,
    "signatureUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DailyVehicleCheck_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Timesheet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "weekEnding" DATETIME NOT NULL,
    "monday" REAL,
    "tuesday" REAL,
    "wednesday" REAL,
    "thursday" REAL,
    "friday" REAL,
    "saturday" REAL,
    "sunday" REAL,
    "totalHours" REAL,
    "overtimeHours" REAL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "submittedAt" DATETIME,
    "approvedAt" DATETIME,
    "approvedBy" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Timesheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WasteStream" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "ewcCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isHazardous" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WasteStream_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WTN" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "wasteStreamId" TEXT,
    "producerName" TEXT NOT NULL,
    "producerAddress" TEXT NOT NULL,
    "producerPostcode" TEXT NOT NULL,
    "producerContactName" TEXT,
    "producerContactEmail" TEXT,
    "producerSICCode" TEXT,
    "carrierName" TEXT NOT NULL,
    "carrierAddress" TEXT NOT NULL,
    "carrierLicence" TEXT NOT NULL,
    "carrierContactName" TEXT NOT NULL,
    "carrierContactEmail" TEXT NOT NULL,
    "receiverName" TEXT,
    "receiverAddress" TEXT,
    "receiverPermit" TEXT,
    "receiverEWCCode" TEXT,
    "ewcCode" TEXT NOT NULL,
    "wasteDescription" TEXT NOT NULL,
    "quantity" REAL,
    "quantityUnit" TEXT,
    "containerType" TEXT,
    "numberOfContainers" INTEGER,
    "producerSignature" TEXT,
    "producerSignedAt" DATETIME,
    "producerSignedBy" TEXT,
    "carrierSignature" TEXT,
    "carrierSignedAt" DATETIME,
    "carrierSignedBy" TEXT,
    "receiverSignature" TEXT,
    "receiverSignedAt" DATETIME,
    "collectionDate" DATETIME NOT NULL,
    "transferDate" DATETIME,
    "photos" TEXT,
    "gpsLatitude" REAL,
    "gpsLongitude" REAL,
    "submittedToEA" BOOLEAN NOT NULL DEFAULT false,
    "eaSubmissionId" TEXT,
    "eaSubmittedAt" DATETIME,
    "eaStatus" TEXT,
    "eaErrorMessage" TEXT,
    "pdfUrl" TEXT,
    "customerNotified" BOOLEAN NOT NULL DEFAULT false,
    "customerNotifiedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WTN_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WTN_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WTN_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WTN_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HazardousConsignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "consignorName" TEXT NOT NULL,
    "consignorAddress" TEXT NOT NULL,
    "consignorPostcode" TEXT NOT NULL,
    "consignorPermit" TEXT,
    "consignorContactName" TEXT,
    "consignorContactEmail" TEXT,
    "ewcCode" TEXT NOT NULL,
    "wasteDescription" TEXT NOT NULL,
    "processCode" TEXT NOT NULL,
    "unNumber" TEXT,
    "classCode" TEXT,
    "packGroup" TEXT,
    "quantity" REAL NOT NULL,
    "quantityUnit" TEXT NOT NULL,
    "packagingType" TEXT NOT NULL,
    "numberOfPackages" INTEGER,
    "carrierName" TEXT NOT NULL,
    "carrierLicence" TEXT NOT NULL,
    "carrierContactName" TEXT NOT NULL,
    "carrierContactEmail" TEXT NOT NULL,
    "vehicleReg" TEXT NOT NULL,
    "collectionDate" DATETIME NOT NULL,
    "consigneeName" TEXT NOT NULL,
    "consigneeAddress" TEXT NOT NULL,
    "consigneePostcode" TEXT NOT NULL,
    "consigneePermit" TEXT NOT NULL,
    "consigneeContactName" TEXT,
    "consigneeContactEmail" TEXT,
    "receivedDate" DATETIME,
    "preNotificationSent" BOOLEAN NOT NULL DEFAULT false,
    "preNotifiedAt" DATETIME,
    "eaReferenceNumber" TEXT,
    "eaStatus" TEXT,
    "specialHandling" TEXT,
    "emergencyContact" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "pdfUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "HazardousConsignment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "invoiceDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATETIME NOT NULL,
    "subtotal" REAL NOT NULL,
    "vatRate" REAL NOT NULL DEFAULT 20,
    "vatAmount" REAL NOT NULL,
    "vatReverseCharge" BOOLEAN NOT NULL DEFAULT false,
    "cisDeduction" REAL,
    "total" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "paidDate" DATETIME,
    "paymentMethod" TEXT,
    "paymentReference" TEXT,
    "wtnAttached" BOOLEAN NOT NULL DEFAULT false,
    "pdfUrl" TEXT,
    "notes" TEXT,
    "terms" TEXT,
    "sentAt" DATETIME,
    "viewedAt" DATETIME,
    "reminderSentAt" DATETIME,
    "xeroInvoiceId" TEXT,
    "sageInvoiceId" TEXT,
    "syncedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Invoice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Invoice_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InvoiceLineItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceId" TEXT NOT NULL,
    "jobId" TEXT,
    "description" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "unitPrice" REAL NOT NULL,
    "total" REAL NOT NULL,
    "taxable" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "InvoiceLineItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "InvoiceLineItem_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplianceCertificate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "reference" TEXT,
    "issuer" TEXT,
    "issuedDate" DATETIME,
    "expiryDate" DATETIME NOT NULL,
    "documentUrl" TEXT,
    "alerts" BOOLEAN NOT NULL DEFAULT true,
    "alertSent30Days" BOOLEAN NOT NULL DEFAULT false,
    "alertSent7Days" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ComplianceCertificate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EPRSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "submittedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedBy" TEXT NOT NULL,
    "totalTonnage" REAL NOT NULL,
    "totalFee" REAL NOT NULL,
    "packUKSubmissionId" TEXT,
    "packUKStatus" TEXT,
    "reportPdfUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EPRSubmission_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PackagingRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "productName" TEXT,
    "sku" TEXT,
    "material" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "recyclability" TEXT,
    "ramScore" INTEGER,
    "period" DATETIME NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalWeight" REAL NOT NULL,
    "feePerTonne" REAL,
    "totalFee" REAL,
    "wasteStreamId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PackagingRecord_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PackagingRecord_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeighbridgeTicket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "siteId" TEXT,
    "customerId" TEXT,
    "vehicleReg" TEXT NOT NULL,
    "driverId" TEXT,
    "weightIn" REAL,
    "weightOut" REAL,
    "netWeight" REAL,
    "wasteStreamId" TEXT,
    "ewcCode" TEXT,
    "materialGrade" TEXT,
    "timeIn" DATETIME NOT NULL,
    "timeOut" DATETIME,
    "direction" TEXT NOT NULL,
    "isContaminated" BOOLEAN NOT NULL DEFAULT false,
    "contaminationLevel" TEXT,
    "contaminationNotes" TEXT,
    "contaminationPhotos" TEXT,
    "isRejected" BOOLEAN NOT NULL DEFAULT false,
    "rejectionReason" TEXT,
    "pricePerTonne" REAL,
    "totalValue" REAL,
    "jobId" TEXT,
    "invoiceId" TEXT,
    "operatorId" TEXT NOT NULL,
    "ticketPdfUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WeighbridgeTicket_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WeighbridgeTicket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "WeighbridgeTicket_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "WeighbridgeTicket_wasteStreamId_fkey" FOREIGN KEY ("wasteStreamId") REFERENCES "WasteStream" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "WeighbridgeTicket_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "WeighbridgeTicket_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Job_reference_key" ON "Job"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Route_reference_key" ON "Route"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Skip_assetNumber_key" ON "Skip"("assetNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_reference_key" ON "Contract"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_registration_key" ON "Vehicle"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "WTN_reference_key" ON "WTN"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "WTN_jobId_key" ON "WTN"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "HazardousConsignment_reference_key" ON "HazardousConsignment"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_reference_key" ON "Invoice"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "WeighbridgeTicket_reference_key" ON "WeighbridgeTicket"("reference");
