import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, Target, Users, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80"
            alt="Waste management"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Built for the UK Waste Industry
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're on a mission to make waste management simpler, cleaner, and more compliant 
            for every UK operator — from single-truck skip hire to 50+ vehicle fleets.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              GreenLoop was born from a simple observation: the UK waste industry was drowning in paperwork. 
              Waste Transfer Notes piled up in filing cabinets. Drivers juggled clipboards while trying to 
              steer skip lorries. Office staff spent hours chasing signatures. And the looming EDOC deadline 
              created panic.
            </p>
            <p>
              We knew there had to be a better way.
            </p>
            <p>
              So we built GreenLoop — a platform designed specifically for UK waste operators. Not a 
              one-size-fits-all CRM. Not a generic logistics tool. A purpose-built waste management system 
              that understands EWC codes, duty of care chains, Environment Agency reporting, and the unique 
              challenges of running a waste business in the UK.
            </p>
            <p>
              Today, 500+ waste carriers trust GreenLoop to handle their compliance, operations, and customer 
              experience. We've processed over 1 million digital WTNs. We've helped operators save thousands 
              of hours on admin. And we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Target className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                Empower every UK waste operator to run a modern, compliant, profitable business — 
                without drowning in paperwork.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Zap className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A UK waste industry where compliance is effortless, data flows seamlessly, 
                and sustainability is measurable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Heart className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Simplicity, compliance, customer obsession, environmental responsibility, 
                and relentless improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why We're Different</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1611284446317-1a5c87861c64?w=800&q=80"
                alt="Recycling facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold text-lg mb-1">🇬🇧 UK-First, Always</h3>
                  <p className="text-gray-600">
                    Built for UK regulations (EDOC, EA, DVSA, O-licence). Not a US import with bolt-on compliance.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-lg mb-1">♻️ Waste-Specific</h3>
                  <p className="text-gray-600">
                    We speak your language: EWC codes, hazardous consignments, duty of care, tonnage tracking.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-lg mb-1">📱 Driver-Loved</h3>
                  <p className="text-gray-600">
                    Our mobile app works offline, loads fast, and your drivers will actually use it.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-lg mb-1">🤝 Customer Obsessed</h3>
                  <p className="text-gray-600">
                    UK-based support team. We answer within 2 hours. We care about your success.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-lg mb-1">🚀 Always Improving</h3>
                  <p className="text-gray-600">
                    New features every month. Customer feedback drives our roadmap.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Environmental Commitment</h2>
              <p className="text-gray-700 mb-4">
                We're not just a software company — we're part of the circular economy. 
                Every digital WTN we process is one less piece of paper. Every optimised 
                route is less CO₂ in the atmosphere.
              </p>
              <p className="text-gray-700 mb-4">
                GreenLoop helps UK waste operators:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Eliminate paper WTNs (500k+ sheets saved annually)</li>
                <li>✅ Reduce fuel consumption (route optimisation saves 15-20%)</li>
                <li>✅ Track recycling rates and waste diversion from landfill</li>
                <li>✅ Provide data for sustainability reporting (ESG, carbon accounting)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We're carbon neutral, hosted on renewable energy infrastructure, and donate 1% 
                of revenue to UK environmental charities.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Green environmental landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're a remote-first team of developers, waste industry experts, and customer success 
            specialists — all based in the UK, all passionate about modernising waste management.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <Users className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <p className="text-lg text-gray-700">
              Founded in 2024 by <strong>Data & Digital</strong> — a UK-based software development 
              company with a track record of building compliance-focused SaaS for regulated industries.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Join 500+ UK Waste Operators on GreenLoop</h2>
          <p className="text-xl mb-8">Start your 14-day free trial today.</p>
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
