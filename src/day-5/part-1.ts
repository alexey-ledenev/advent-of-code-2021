import { Coords, Graph, GraphRow, Line } from './types'
import { parseInput } from './utils'

export class SimpleChart {
  private _graph: Graph = []

  constructor(maxX?: number, maxY?: number) {
    this._graph = SimpleChart.getEmptyGraph(maxX, maxY)
  }

  get graph() {
    return this._graph
  }

  drawLines(lines: Line[] = []) {
    const drawLine = this.drawLine.bind(this)
    lines.forEach(drawLine)
  }

  calcOverlapsCount(): number {
    return this._graph.reduce(this.getOverlapsCount, 0)
  }

  protected drawLine(l: Line) {
    if (SimpleChart.isHorizontalOrVerticalLine(l) === true) {
      let [[x1, y1], [x2, y2]] = l
      if (x1 === x2) {
        return this.drawStraightLine(x1, [y1, y2])
      }
      // y1 === y2
      return this.drawStraightLine([x1, x2], y1)
    }
  }

  private drawStraightLine(x: number | Coords, y: number | Coords) {
    if (typeof x === 'number') {
      if (Array.isArray(y) === false) {
        throw new Error('`y` must be an array of coordinates')
      }
      const draw = (_y: number) => this.incPoint(x, _y)
      this.forEachCoords(y as Coords, draw)
    } else if (typeof y === 'number') {
      if (Array.isArray(x) === false) {
        throw new Error('`x` must be an array of coordinates')
      }
      const draw = (_x: number) => this.incPoint(_x, y)
      this.forEachCoords(x as Coords, draw)
    } else {
      throw new Error('`x` or `y` coordinate must be a constant')
    }
  }

  private forEachCoords(c: Coords, cb: (current: number) => void) {
    let [from, to] = c.sort((a, b) => a - b)
    while (from <= to) {
      cb(from)
      from++
    }
  }

  protected incPoint(x: number, y: number) {
    this._graph[y][x] = (this._graph[y][x] ?? 0) + 1
  }

  private getOverlapsCount = (initialCount: number, row: GraphRow) => {
    return row.reduce(this.getOverlapsCountInRow, initialCount)
  }

  private getOverlapsCountInRow = (initialCount: number, itm: GraphRow[number]) => {
    if (itm !== null && itm > 1) {
      return initialCount + 1
    }
    return initialCount
  }

  static isHorizontalOrVerticalLine([[x1, y1], [x2, y2]]: Line) {
    return x1 === x2 || y1 === y2
  }

  static getEmptyGraph(cols = 10, rows?: number): Graph {
    if (rows === undefined) rows = cols

    const createPoint = () => null
    const createRow = () => Array.from({ length: cols }, createPoint)
    return Array.from({ length: rows }, createRow)
  }

  static getMaxCoords(lines: Line[]): Coords {
    return lines.reduce(
      (max, [[x1, y1], [x2, y2]]) => {
        max[0] = Math.max(x1 + 1, x2 + 1, max[0])
        max[1] = Math.max(y1 + 1, y2 + 1, max[1])
        return max
      },
      [(lines[0]?.length ?? 0) + 1, lines.length + 1] as Coords
    )
  }
}

export const part1 = (ventPositions: string[], Chart: typeof SimpleChart = SimpleChart) => {
  const lines = parseInput(ventPositions) as Line[]

  const [maxX, maxY] = Chart.getMaxCoords(lines)

  const chart = new Chart(maxX, maxY)
  chart.drawLines(lines)

  return chart.calcOverlapsCount()
}
