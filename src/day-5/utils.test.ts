import { parseInput } from './utils'

const input = ['0, 9 -> 5,9 ', ' 8,0 -> 0,8', '9,4 ->  3,4', '2,2  -> 2,1', '7,0 -> 7,4']

describe('Day 5: Utils', () => {
  describe('Parse input', () => {
    it('should return parsed input', () => {
      const lines = parseInput(input)
      expect(lines.length).toBe(5)
      expect(lines[0][0][0]).toBe(0)
      expect(lines[0][0][1]).toBe(9)
      expect(lines[0][1][1]).toBe(9)
      expect(lines[1][0][0]).toBe(8)
      expect(lines[1][0][1]).toBe(0)
      expect(lines[1][1][1]).toBe(8)
      expect(lines[2][0][1]).toBe(4)
      expect(lines[2][1][0]).toBe(3)
      expect(lines[3][0][1]).toBe(2)
      expect(lines[3][1][1]).toBe(1)
      expect(lines[4][0][1]).toBe(0)
      expect(lines[4][1][1]).toBe(4)
    })
  })
})
