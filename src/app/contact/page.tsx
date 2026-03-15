'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    fleet_size: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    alert('Thanks for your inquiry! We\'ll be in touch within 24 hours.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      fleet_size: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Questions about EDOC? Need a custom quote? Want to book a demo? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:hello@greenloop.uk" className="text-emerald-600 hover:underline">
                        hello@greenloop.uk
                      </a>
                      <div className="text-sm text-gray-500 mt-1">Response within 2 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:08001234567" className="text-emerald-600 hover:underline">
                        0800 123 4567
                      </a>
                      <div className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm GMT</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-gray-700">London, United Kingdom</div>
                      <div className="text-sm text-gray-500 mt-1">Remote-first team</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <Calendar className="w-8 h-8 text-emerald-500 mb-3" />
                <h3 className="font-bold mb-2">Book a Demo</h3>
                <p className="text-sm text-gray-700 mb-4">
                  See GreenLoop in action. 30-minute personalised demo tailored to your business.
                </p>
                <Link
                  href="/login"
                  className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Support Hours</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Email:</strong> 24/7 (2-hour response)</li>
                  <li><strong>Chat:</strong> Mon-Fri, 9am-6pm</li>
                  <li><strong>Phone:</strong> Mon-Fri, 9am-6pm</li>
                  <li><strong>Emergency:</strong> Enterprise only (24/7)</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Essex Skip Hire Ltd"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="07700 900000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fleet_size" className="block text-sm font-semibold mb-1">
                      Fleet Size
                    </label>
                    <select
                      id="fleet_size"
                      name="fleet_size"
                      value={formData.fleet_size}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select fleet size</option>
                      <option value="1-2">1-2 vehicles</option>
                      <option value="3-5">3-5 vehicles</option>
                      <option value="6-10">6-10 vehicles</option>
                      <option value="11-20">11-20 vehicles</option>
                      <option value="21-50">21-50 vehicles</option>
                      <option value="50+">50+ vehicles</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours (usually much faster!)
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does onboarding take?',
                a: 'Most customers are live within 1-2 weeks. We provide training, data migration support, and a dedicated onboarding specialist.',
              },
              {
                q: 'Do you offer training?',
                a: 'Yes! Live training sessions (online or on-site), video tutorials, documentation, and ongoing support.',
              },
              {
                q: 'Can you migrate data from our old system?',
                a: 'Yes. We can import customers, vehicles, job history, and historical WTNs from most systems (CSV, Excel, or API).',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fee for Starter and Professional. Business and Enterprise include free onboarding and data migration.',
              },
              {
                q: 'What if I need help after I\'ve signed up?',
                a: 'Email, chat, and phone support. Most queries answered within 2 hours. Enterprise customers get 24/7 phone support.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
