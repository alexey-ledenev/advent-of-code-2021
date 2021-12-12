import { zeroBit } from './part-1'

const enum RatingType {
  MOST_COMMON,
  LEAST_COMMON,
}

const calcRating = (binaries: string[], type: RatingType): string => {
  let result: string[] = binaries

  let currentBit = 0
  while (result.length !== 1) {
    const { zero, one } = result.reduce(
      (stats, binary) => {
        stats[binary[currentBit] === zeroBit ? 'zero' : 'one'].push(binary)
        return stats
      },
      { zero: [] as string[], one: [] as string[] }
    )

    result =
      (type === RatingType.MOST_COMMON && zero.length > one.length) ||
      (type === RatingType.LEAST_COMMON && one.length >= zero.length)
        ? zero
        : one

    currentBit += 1
  }

  return result[0]
}

/**
 *
 * @param reports list of binary numbers
 * @returns life support rating
 */
export const part2 = (reports: string[]): number => {
  const oxygenGeneratorRating = calcRating(reports, RatingType.MOST_COMMON)
  const CO2ScrubberRating = calcRating(reports, RatingType.LEAST_COMMON)

  return parseInt(oxygenGeneratorRating, 2) * parseInt(CO2ScrubberRating, 2)
}
