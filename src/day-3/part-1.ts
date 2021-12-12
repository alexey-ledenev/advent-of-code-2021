export const zeroBit = '0'
export const oneBit = '1'

const calcGammaRate = (binaries: string[]): string => {
  const binaryCount = binaries.length
  const bitCount = (binaries[0] ?? '').length

  let gammaRate = ''

  const calcZeroBits = (zeroBitCount: number, bits: string): number => {
    if (bits[gammaRate.length] === zeroBit) {
      return zeroBitCount + 1
    }
    return zeroBitCount
  }

  while (gammaRate.length < bitCount) {
    const zeroBitCount = binaries.reduce(calcZeroBits, 0)
    gammaRate += zeroBitCount > binaryCount - zeroBitCount ? zeroBit : oneBit
  }

  return gammaRate
}

const calcEpsilonRateByGammaRate = (gammaBinary: string): string => {
  let epsilonRate = ''
  while (epsilonRate.length < gammaBinary.length) {
    epsilonRate += gammaBinary[epsilonRate.length] === zeroBit ? oneBit : zeroBit
  }

  return epsilonRate
}

const calcPowerConsumption = (gammaBinary: string, epsilonBinary: string): number => {
  return parseInt(gammaBinary, 2) * parseInt(epsilonBinary, 2)
}

/**
 *
 * @param reports list of binary numbers
 * @returns power consumption
 */
export const part1 = (reports: string[]): number => {
  const gammaRate = calcGammaRate(reports)
  const epsilonRate = calcEpsilonRateByGammaRate(gammaRate)

  return calcPowerConsumption(gammaRate, epsilonRate)
}
