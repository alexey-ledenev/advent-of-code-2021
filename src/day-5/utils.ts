const COORDS_DIVIDER = '->'
const parseCoordinate = (c: string) => c.replace(/\s+/g, '').split(',').map(Number)
const parsePosition = (coords: string) =>
  coords.replace(/\s+/g, '').split(COORDS_DIVIDER).map(parseCoordinate)

export const parseInput = (lines: string[]) => lines.map(parsePosition)
