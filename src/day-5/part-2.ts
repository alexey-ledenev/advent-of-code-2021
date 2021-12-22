import { part1, SimpleChart } from './part-1'
import { Line } from './types'

class ChartWithDiagonals extends SimpleChart {
  protected drawLine(l: Line) {
    super.drawLine(l)

    if (ChartWithDiagonals.isDiagonalLine(l) === true) {
      return this.drawDiagonalLine(l)
    }
  }

  private drawDiagonalLine = ([from, to]: Line) => {
    if (from[0] > to[0]) [from, to] = [to, from]
    let [x1, y1] = from
    const [x2, y2] = to
    const multiplierForY = y1 > y2 ? -1 : 1

    while (x1 <= x2) {
      this.incPoint(x1, y1)
      x1 += 1
      y1 += 1 * multiplierForY
    }
  }

  static isDiagonalLine([[x1, y1], [x2, y2]]: Line) {
    return Math.abs(x1 - x2) === Math.abs(y1 - y2)
  }
}

export const part2 = (ventPositions: string[]) => part1(ventPositions, ChartWithDiagonals)
