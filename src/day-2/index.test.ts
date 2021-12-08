import { part1, part2 } from './index'

const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

describe('Day 2', () => {
  describe('Part 1', () => {
    const pos = part1(input)
    it('should return a horizontal position of 15', () => {
      expect(pos.horizontal).toBe(15)
    })
    it('should return a depth of 10', () => {
      expect(pos.depth).toBe(10)
    })
    it('multiplying these together produces 150', () => {
      expect(pos.horizontal * pos.depth).toBe(150)
    })
  })

  describe('Part 2', () => {
    const pos = part2(input)
    it('should return a horizontal position of 15', () => {
      expect(pos.horizontal).toBe(15)
    })
    it('should return a depth of 60', () => {
      expect(pos.depth).toBe(60)
    })
    it('multiplying these together produces 900', () => {
      expect(pos.horizontal * pos.depth).toBe(900)
    })
  })
})
