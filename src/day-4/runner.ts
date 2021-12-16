import { join } from 'path'
import { readLinesFromFile } from '../utils/input'
import { part1 } from './part-1'
import { part2 } from './part-2'
import { parseInput } from './utils'

const { numbers, boards } = parseInput(readLinesFromFile(join(__dirname, 'input.txt')))
console.log(`Part 1 (the score of the first winner): ${part1(numbers, boards)}`)
console.log(`Part 2 (the score of the last winner): ${part2(numbers, boards)}`)
