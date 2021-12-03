export const part1 = (measurements: number[]) => {
  const measurementCount = measurements.length
  let measurementIncreaseCount = 0

  if (measurementCount > 1) {
    let i = 1
    while (i < measurementCount) {
      if (measurements[i] > measurements[i - 1]) {
        measurementIncreaseCount++
      }
      i++
    }
  }

  return measurementIncreaseCount
}
