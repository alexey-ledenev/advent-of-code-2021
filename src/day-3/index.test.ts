import { part1, part2 } from './index'

const input = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
]

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return 198', () => {
      expect(part1(input)).toBe(198)
    })
  })

  describe('Part 2', () => {
    it('should return 230', () => {
      expect(part2(input)).toBe(230)
    })
  })
})
