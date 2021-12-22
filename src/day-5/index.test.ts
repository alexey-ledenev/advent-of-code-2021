import { part1, part2 } from './index'

const input = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2',
]

describe('Day 5', () => {
  describe('Part 1: only consider horizontal and vertical lines', () => {
    it('should return 5', () => {
      expect(part1(input)).toBe(5)
    })
  })

  describe('Part 2: also consider diagonal lines', () => {
    it('should return 12', () => {
      expect(part2(input)).toBe(12)
    })
  })
})
