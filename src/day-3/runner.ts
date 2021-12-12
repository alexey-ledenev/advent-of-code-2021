import { join } from 'path'
import { readLinesFromFile } from '../utils/input'
import { part1 } from './part-1'
import { part2 } from './part-2'

const input = readLinesFromFile(join(__dirname, 'input.txt'))
console.log(`Part 1 (the power consumption): ${part1(input)}`)
console.log(`Part 2 (the life support rating): ${part2(input)}`)
