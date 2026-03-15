import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
  FileCheck,
  Smartphone,
  MapPin,
  Users,
  Truck,
  Shield,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  BarChart3,
  Scale,
  FileText,
  Zap,
  Lock,
  Cloud,
  Bell,
} from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            Complete Waste Management Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Everything you need to run a modern, compliant waste business — EDOC ready, EA approved, driver loved.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Waste Transfer Notes & EDOC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Digital compliance dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Core Feature
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Digital Waste Transfer Notes (EDOC Ready)
              </h2>
              <p className="text-gray-600 mb-6">
                Generate compliant WTNs in 60 seconds. Auto-submit to DEFRA&apos;s EDOC system. 
                Full duty of care chain tracking. Zero paperwork.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Auto-submit to DEFRA API (Oct 2026 compliant)',
                  'Driver e-signatures on mobile',
                  'Photo proof of waste (AI waste stream detection)',
                  'GPS location stamping',
                  'Customer WTN portal (self-service download)',
                  'Hazardous waste consignment notes',
                  'EWC code library + search',
                  'Quarterly EA reporting automation',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Mobile App */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Driver Favourite
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Mobile App (iOS + Android)
              </h2>
              <p className="text-gray-600 mb-6">
                Your drivers will actually want to use this. No more paperwork. No more lost WTNs. 
                Works offline. Syncs when back online.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Job list with route optimisation',
                  'E-signature capture (customer + driver)',
                  'Photo uploads (waste, site, vehicle damage)',
                  'GPS location tracking',
                  'Offline mode (syncs when online)',
                  'Real-time job updates',
                  'Driver timesheets + breaks',
                  'Two-way messaging with office',
                  'Voice notes for special instructions',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
                alt="Mobile app on smartphone"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Route Optimisation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Route planning map"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                AI-Powered
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Route Optimisation
              </h2>
              <p className="text-gray-600 mb-6">
                AI-powered routing saves 15-20% on fuel costs. Drag-and-drop scheduling. 
                Real-time traffic updates. Reduce empty runs.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'AI route optimisation (multi-stop)',
                  'Drag-and-drop job scheduling',
                  'Real-time traffic integration',
                  'Driver workload balancing',
                  'Time window constraints',
                  'Vehicle capacity planning',
                  'Estimated arrival times (customer SMS)',
                  'Historical route analysis',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Management */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">
                Customer Portal & Management
              </h2>
              <p className="text-gray-600 mb-6">
                Give customers self-service access. They download WTNs themselves. Zero admin calls. 
                Better customer experience = better retention.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Customer self-service portal',
                  'WTN download (PDF + digital)',
                  'Job history + invoices',
                  'Service address management',
                  'Custom pricing per customer',
                  'Credit limit tracking',
                  'Automated invoice reminders',
                  'Customer communications log',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                alt="Customer service and management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weighbridge Integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80"
                alt="Weighbridge and waste processing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Weighbridge Integration
              </h2>
              <p className="text-gray-600 mb-6">
                Automated weight capture from your weighbridge. Real-time tonnage reporting. 
                Accurate invoicing. No manual data entry.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Direct weighbridge integration',
                  'Automated tare/gross/net weights',
                  'Tonnage-based invoicing',
                  'Real-time waste stream tracking',
                  'Contamination flagging',
                  'Landfill tax calculations',
                  'EA quarterly returns (tonnage)',
                  'Custom pricing per waste type',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Duty of Care Chain */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">
                Duty of Care Chain Tracking
              </h2>
              <p className="text-gray-600 mb-6">
                Full cradle-to-grave tracking. Know exactly where every load goes. 
                EA audit-ready documentation. Zero compliance gaps.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Full chain-of-custody tracking',
                  'Multi-site transfer tracking',
                  'Waste broker integration',
                  'Final disposal documentation',
                  'Treatment facility verification',
                  'EA quarterly returns (waste destinations)',
                  'Export documentation (if applicable)',
                  'Audit trail + document vault',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
                alt="Waste collection truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="Waste collection fleet"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Fleet Management
              </h2>
              <p className="text-gray-600 mb-6">
                MOT, tax, insurance, O-licence tracking. Automated reminders. DVSA-compliant. 
                Never miss a deadline.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Vehicle MOT, tax, insurance tracking',
                  'O-licence compliance monitoring',
                  'Service schedules + reminders',
                  'Defect reporting (driver app)',
                  'Mileage + fuel tracking',
                  'Driver CPC + licence expiry',
                  'Tacho integration (driver hours)',
                  'Vehicle utilisation reporting',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Analytics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">
                Reporting & Analytics
              </h2>
              <p className="text-gray-600 mb-6">
                Revenue dashboards, waste stream analysis, compliance reporting, driver performance. 
                Make data-driven decisions.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Revenue + profit dashboards',
                  'Waste stream analysis (tonnage by type)',
                  'Customer profitability reports',
                  'Driver performance metrics',
                  'Fleet utilisation + costs',
                  'Compliance status overview',
                  'EA quarterly returns (automated)',
                  'Custom report builder',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Analytics dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Plus Everything Else You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Invoicing & Payments',
                description: 'Auto-generate invoices. Xero/QuickBooks integration. Payment tracking.',
              },
              {
                icon: Zap,
                title: 'API Access',
                description: 'RESTful API. Integrate with your existing systems. Webhooks.',
              },
              {
                icon: Lock,
                title: 'Security & Compliance',
                description: 'ISO 27001 infrastructure. GDPR compliant. Data encrypted at rest + in transit.',
              },
              {
                icon: Cloud,
                title: 'Cloud-Based',
                description: 'Access anywhere. Automatic updates. 99.9% uptime SLA.',
              },
              {
                icon: Bell,
                title: 'Notifications',
                description: 'SMS + email alerts. Job reminders. Compliance deadline warnings.',
              },
              {
                icon: Users,
                title: 'Multi-User Access',
                description: 'Role-based permissions. Office, drivers, managers. Activity logs.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernise Your Waste Business?</h2>
          <p className="text-xl mb-8">Start your 14-day free trial. No credit card required.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
