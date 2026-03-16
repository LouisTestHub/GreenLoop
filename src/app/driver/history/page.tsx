import { CheckCircle2, AlertTriangle, Calendar } from 'lucide-react'

const history = [
  {
    date: '15 Mar 2026',
    route: 'Route A — North London',
    jobs: 8,
    completed: 8,
    exceptions: 0,
    distance: '42 miles',
  },
  {
    date: '14 Mar 2026',
    route: 'Route B — East London',
    jobs: 10,
    completed: 10,
    exceptions: 1,
    distance: '38 miles',
  },
  {
    date: '13 Mar 2026',
    route: 'Route A — North London',
    jobs: 8,
    completed: 8,
    exceptions: 0,
    distance: '41 miles',
  },
  {
    date: '12 Mar 2026',
    route: 'Route C — South London',
    jobs: 12,
    completed: 11,
    exceptions: 1,
    distance: '55 miles',
  },
  {
    date: '11 Mar 2026',
    route: 'Route A — North London',
    jobs: 8,
    completed: 8,
    exceptions: 0,
    distance: '43 miles',
  },
]

export default function DriverHistory() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-xl font-bold">Job History</h1>
        <p className="text-sm text-gray-500">Your completed routes and jobs</p>
      </div>

      <div className="space-y-3">
        {history.map((day, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  {day.date}
                </div>
                <h3 className="font-semibold">{day.route}</h3>
              </div>
              <span className="text-xs text-gray-400">{day.distance}</span>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-1 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{day.completed}/{day.jobs} completed</span>
              </div>
              {day.exceptions > 0 && (
                <div className="flex items-center gap-1 text-sm text-orange-500">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{day.exceptions} exception{day.exceptions > 1 ? 's' : ''}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
