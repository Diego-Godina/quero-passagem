export function useDates() {
  const timeToSeconds = (time?: string | null): number => {
    if (!time) return NaN
    const parts = time.split(':').map(p => parseInt(p, 10))
    if (parts.length < 2 || parts.some(isNaN)) return NaN
    const hours = parts[0] ?? 0
    const minutes = parts[1] ?? 0
    const seconds = parts[2] ?? 0
    return hours * 3600 + minutes * 60 + seconds
  }

  const isInRangeSameDay = (t: number, start: number, end: number): boolean => {
    if (isNaN(t) || isNaN(start) || isNaN(end)) return false
    return t >= start && t <= end
  }

  return {
    timeToSeconds,
    isInRangeSameDay
  }
}