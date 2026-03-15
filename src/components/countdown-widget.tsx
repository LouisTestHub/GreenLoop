'use client'

import { useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'

export function CountdownWidget({ targetDate, label }: { targetDate: string; label?: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const target = new Date(targetDate)
      
      setTimeLeft({
        days: differenceInDays(target, now),
        hours: differenceInHours(target, now) % 24,
        minutes: differenceInMinutes(target, now) % 60,
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="bg-orange-500 rounded-lg p-6 inline-block shadow-lg">
      <p className="text-white text-sm font-semibold mb-2">
        ⚠️ {label || 'EDOC Mandatory Compliance Deadline'}
      </p>
      <div className="flex gap-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs text-white/80">DAYS</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs text-white/80">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs text-white/80">MINUTES</div>
        </div>
      </div>
    </div>
  )
}
