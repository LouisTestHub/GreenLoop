'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Send,
} from 'lucide-react'

const questions = [
  {
    id: 1,
    question: 'Do you currently use digital software to create and manage Waste Transfer Notes (WTNs)?',
    options: [
      { label: 'Yes — all WTNs are digital', score: 3 },
      { label: 'Partially — some digital, some paper', score: 1 },
      { label: 'No — we still use paper WTNs', score: 0 },
    ],
  },
  {
    id: 2,
    question: 'Are your waste streams categorised with correct EWC (European Waste Catalogue) codes?',
    options: [
      { label: 'Yes — all waste streams have correct EWC codes', score: 3 },
      { label: 'Some are coded, but not all', score: 1 },
      { label: 'We don\'t currently use EWC codes', score: 0 },
    ],
  },
  {
    id: 3,
    question: 'Do you capture digital signatures from waste producers, carriers, and receivers?',
    options: [
      { label: 'Yes — digital e-signatures on every transfer', score: 3 },
      { label: 'Sometimes — depends on the job', score: 1 },
      { label: 'No — we use wet signatures on paper', score: 0 },
    ],
  },
  {
    id: 4,
    question: 'Can your current system submit waste data electronically to the Environment Agency or DEFRA?',
    options: [
      { label: 'Yes — API-connected or electronic submission', score: 3 },
      { label: 'We can export data but submit manually', score: 1 },
      { label: 'No — we have no electronic submission capability', score: 0 },
    ],
  },
  {
    id: 5,
    question: 'Do you record GPS coordinates and photographic evidence of waste collections?',
    options: [
      { label: 'Yes — GPS and photos captured on every job', score: 3 },
      { label: 'Sometimes — when drivers remember', score: 1 },
      { label: 'No — we don\'t capture location or photo data', score: 0 },
    ],
  },
  {
    id: 6,
    question: 'Is your waste carrier registration and Duty of Care documentation up to date?',
    options: [
      { label: 'Yes — all registrations current and tracked', score: 3 },
      { label: 'Mostly — but we occasionally miss renewals', score: 1 },
      { label: 'Not sure — we don\'t have a tracking system', score: 0 },
    ],
  },
  {
    id: 7,
    question: 'Do your drivers have a mobile app or device for completing waste documentation on-site?',
    options: [
      { label: 'Yes — purpose-built mobile app for waste tracking', score: 3 },
      { label: 'They use generic apps (photos, notes) but not waste-specific', score: 1 },
      { label: 'No — drivers complete paperwork back at the office', score: 0 },
    ],
  },
  {
    id: 8,
    question: 'Do you have a process for tracking waste from collection to final disposal/recovery?',
    options: [
      { label: 'Yes — full chain of custody tracked digitally', score: 3 },
      { label: 'Partially — we track some stages but not all', score: 1 },
      { label: 'No — we lose visibility after collection', score: 0 },
    ],
  },
  {
    id: 9,
    question: 'Can you produce a complete audit trail of all waste movements within 24 hours if requested by the EA?',
    options: [
      { label: 'Yes — instant digital reports available', score: 3 },
      { label: 'We could, but it would take days to compile', score: 1 },
      { label: 'No — our records are scattered and incomplete', score: 0 },
    ],
  },
  {
    id: 10,
    question: 'Have you started planning or budgeting for EDOC compliance?',
    options: [
      { label: 'Yes — we have a plan and timeline in place', score: 3 },
      { label: 'We\'re aware of EDOC but haven\'t started planning', score: 1 },
      { label: 'This is the first I\'ve heard of EDOC', score: 0 },
    ],
  },
]

function getResult(score: number) {
  const pct = (score / 30) * 100
  if (pct >= 70) {
    return {
      band: 'GREEN' as const,
      title: 'Looking Good — Minor Gaps to Close',
      color: 'emerald',
      icon: CheckCircle2,
      summary: 'You\'re well on your way to EDOC compliance. A few tweaks and you\'ll be fully ready.',
      recommendations: [
        'Ensure all waste streams have correct EWC codes mapped',
        'Test your electronic submission capability with DEFRA\'s sandbox API',
        'Set up automated compliance certificate tracking and renewal alerts',
        'Train all drivers on the mobile app and digital signature process',
        'Run a mock EA audit to verify your audit trail is complete',
      ],
    }
  }
  if (pct >= 40) {
    return {
      band: 'AMBER' as const,
      title: 'At Risk — Significant Work Needed',
      color: 'orange',
      icon: AlertTriangle,
      summary: 'You have some foundations in place but major gaps remain. Act now to avoid last-minute panic.',
      recommendations: [
        'Switch from paper to digital WTNs immediately — every day on paper is wasted time',
        'Implement a waste management platform with EWC code management',
        'Deploy a driver mobile app for on-site documentation and signatures',
        'Set up GPS tracking and photographic evidence capture',
        'Begin API integration planning for DEFRA electronic submission',
        'Create a compliance calendar with key deadlines and milestones',
        'Budget for software, training, and potentially new devices for drivers',
      ],
    }
  }
  return {
    band: 'RED' as const,
    title: 'Not Ready — Urgent Action Required',
    color: 'red',
    icon: XCircle,
    summary: 'You are significantly behind on EDOC preparation. Without immediate action, you risk fines, prosecution, and licence revocation.',
    recommendations: [
      'URGENT: Adopt a digital waste management platform like GreenLoop immediately',
      'Digitise all current paper WTN records for audit trail continuity',
      'Map all your waste streams to correct EWC codes',
      'Equip all drivers with smartphones and a waste tracking mobile app',
      'Implement digital signature capture for all waste transfers',
      'Set up GPS and photo evidence on every collection',
      'Register for DEFRA\'s EDOC early adopter programme',
      'Book a compliance consultation to create your EDOC readiness plan',
      'Budget for significant operational changes — this is not optional',
    ],
  }
}

export default function EdocCheckerPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0)
  const result = getResult(totalScore)
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers({ ...answers, [questionId]: score })
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSubmitted(true)
  }

  if (showResults) {
    const ResultIcon = result.icon
    const bgMap: Record<string, string> = { emerald: 'bg-emerald-50 border-emerald-300', orange: 'bg-orange-50 border-orange-300', red: 'bg-red-50 border-red-300' }
    const textMap: Record<string, string> = { emerald: 'text-emerald-700', orange: 'text-orange-700', red: 'text-red-700' }
    const iconMap: Record<string, string> = { emerald: 'text-emerald-500', orange: 'text-orange-500', red: 'text-red-500' }
    const badgeMap: Record<string, string> = { emerald: 'bg-emerald-500', orange: 'bg-orange-500', red: 'bg-red-500' }

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-slate-900 text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
            <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
            <Link href="/edoc" className="text-sm hover:text-emerald-400">← Back to EDOC Info</Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className={`${bgMap[result.color]} border-2 rounded-xl p-8 mb-8`}>
            <div className="flex items-start gap-4">
              <ResultIcon className={`w-12 h-12 ${iconMap[result.color]} flex-shrink-0`} />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`${badgeMap[result.color]} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {result.band}
                  </span>
                  <span className="text-gray-500 text-sm">Score: {totalScore}/30</span>
                </div>
                <h1 className={`text-2xl font-bold ${textMap[result.color]} mb-2`}>{result.title}</h1>
                <p className="text-gray-700">{result.summary}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Your Personalised Recommendations</h2>
            <ul className="space-y-3">
              {result.recommendations.map((rec, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lead Capture */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-bold mb-2">Get Your Full EDOC Readiness Report</h2>
            <p className="text-gray-600 mb-4">
              Enter your email to receive a detailed PDF report with your results, 
              personalised action plan, and EDOC compliance timeline.
            </p>
            {emailSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-700">Thanks! We&apos;ll send your report to <strong>{email}</strong> shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send Report
                </button>
              </form>
            )}
          </div>

          <div className="text-center">
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              Start Your Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-2">14-day free trial. No credit card required.</p>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-emerald-400">GreenLoop</Link>
          <Link href="/edoc" className="text-sm hover:text-emerald-400">← Back to EDOC Info</Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">EDOC Compliance Checker</h1>
          <p className="text-gray-600">Answer 10 quick questions to assess your EDOC readiness</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold mb-6">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(q.id, option.score)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[q.id] === option.score
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
            {answers[q.id] !== undefined && currentQuestion < questions.length - 1 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {answers[q.id] !== undefined && currentQuestion === questions.length - 1 && (
              <button
                onClick={() => setShowResults(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                See Results <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
