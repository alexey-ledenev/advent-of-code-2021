import { join } from 'path'
import { readLinesFromFile } from '../utils/input'
import { part1, IPosition } from './part-1'
import { part2 } from './part-2'

const getResultString = (p: IPosition) =>
  `horizontal ${p.horizontal}, depth ${p.depth}, multiplying ${p.horizontal * p.depth}`

const input = readLinesFromFile(join(__dirname, 'input.txt'))
const p1 = part1(input)
console.log(`Part 1: ${getResultString(p1)}`)

const p2 = part2(input)
console.log(`Part 2: ${getResultString(p2)}`)
