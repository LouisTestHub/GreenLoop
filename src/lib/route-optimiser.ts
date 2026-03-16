/**
 * Route Optimisation Utilities
 * Haversine distance + Nearest-Neighbour + 2-opt improvement
 */

export interface RoutePoint {
  id: string
  lat: number
  lng: number
  address: string
  customerName?: string
  jobType?: string
  estimatedMinutes?: number
}

/**
 * Haversine distance between two points in kilometres
 */
export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371 // Earth radius in km
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180)
}

/**
 * Calculate total route distance in km
 */
export function totalRouteDistance(points: RoutePoint[]): number {
  let total = 0
  for (let i = 0; i < points.length - 1; i++) {
    total += haversineDistance(
      points[i].lat, points[i].lng,
      points[i + 1].lat, points[i + 1].lng
    )
  }
  return total
}

/**
 * Nearest-neighbour heuristic for initial route construction
 */
export function nearestNeighbour(
  start: { lat: number; lng: number },
  points: RoutePoint[]
): RoutePoint[] {
  if (points.length <= 1) return [...points]

  const remaining = [...points]
  const route: RoutePoint[] = []
  let current = start

  while (remaining.length > 0) {
    let nearestIdx = 0
    let nearestDist = Infinity

    for (let i = 0; i < remaining.length; i++) {
      const dist = haversineDistance(
        current.lat, current.lng,
        remaining[i].lat, remaining[i].lng
      )
      if (dist < nearestDist) {
        nearestDist = dist
        nearestIdx = i
      }
    }

    route.push(remaining[nearestIdx])
    current = { lat: remaining[nearestIdx].lat, lng: remaining[nearestIdx].lng }
    remaining.splice(nearestIdx, 1)
  }

  return route
}

/**
 * 2-opt improvement: iteratively reverse segments to reduce total distance
 */
export function twoOpt(points: RoutePoint[], maxIterations = 100): RoutePoint[] {
  if (points.length <= 2) return [...points]

  let route = [...points]
  let improved = true
  let iterations = 0

  while (improved && iterations < maxIterations) {
    improved = false
    iterations++

    for (let i = 0; i < route.length - 1; i++) {
      for (let j = i + 2; j < route.length; j++) {
        const d1 = haversineDistance(route[i].lat, route[i].lng, route[i + 1].lat, route[i + 1].lng)
        const d2 = j + 1 < route.length
          ? haversineDistance(route[j].lat, route[j].lng, route[j + 1].lat, route[j + 1].lng)
          : 0

        const newD1 = haversineDistance(route[i].lat, route[i].lng, route[j].lat, route[j].lng)
        const newD2 = j + 1 < route.length
          ? haversineDistance(route[i + 1].lat, route[i + 1].lng, route[j + 1].lat, route[j + 1].lng)
          : 0

        if (newD1 + newD2 < d1 + d2) {
          // Reverse the segment between i+1 and j
          const segment = route.slice(i + 1, j + 1).reverse()
          route = [...route.slice(0, i + 1), ...segment, ...route.slice(j + 1)]
          improved = true
        }
      }
    }
  }

  return route
}

/**
 * Full optimisation: nearest-neighbour + 2-opt
 */
export function optimiseRoute(
  depot: { lat: number; lng: number },
  stops: RoutePoint[],
  options?: { maxCapacityKg?: number; vehicleCapacityKg?: number }
): {
  optimisedStops: RoutePoint[]
  totalDistanceKm: number
  estimatedDurationMinutes: number
  savings: {
    distanceKm: number
    percentImproved: number
  }
} {
  // Step 1: nearest-neighbour
  const nnRoute = nearestNeighbour(depot, stops)
  const nnDistance = totalRouteDistance(nnRoute)

  // Step 2: 2-opt improvement
  const optimised = twoOpt(nnRoute)
  const optimisedDistance = totalRouteDistance(optimised)

  // Original (unoptimised) distance
  const originalDistance = totalRouteDistance(stops)

  // Estimate duration: ~30 km/h average in urban areas + 15 min per stop
  const drivingMinutes = (optimisedDistance / 30) * 60
  const stopMinutes = optimised.reduce((sum, s) => sum + (s.estimatedMinutes || 15), 0)

  return {
    optimisedStops: optimised,
    totalDistanceKm: Math.round(optimisedDistance * 10) / 10,
    estimatedDurationMinutes: Math.round(drivingMinutes + stopMinutes),
    savings: {
      distanceKm: Math.round((originalDistance - optimisedDistance) * 10) / 10,
      percentImproved: originalDistance > 0
        ? Math.round(((originalDistance - optimisedDistance) / originalDistance) * 100)
        : 0,
    },
  }
}
