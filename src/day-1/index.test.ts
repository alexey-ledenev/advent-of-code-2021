import { part1, part2 } from './index'

const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return 7', () => {
      expect(part1(input)).toBe(7)
    })
  })

  describe('Part 2', () => {
    it('should return 5', () => {
      expect(part2(input)).toBe(5)
    })
  })
})
