import { part1 } from './part-1'

export const part2 = (measurements: number[], divider = 3) => {
  const sums: number[] = []

  let i = 0
  while (measurements[i + divider - 1] !== undefined) {
    let sum = 0

    let j = 0
    while (j < divider) {
      sum += measurements[i + j]
      j++
    }

    sums.push(sum)

    i++
  }

  return part1(sums)
}
