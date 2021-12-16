import { parseInput, transpose } from './utils'

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]

const transposedMatrix = [
  [1, 6, 11],
  [2, 7, 12],
  [3, 8, 13],
  [4, 9, 14],
  [5, 10, 15],
]

const puzzleInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`

describe('Day 4: Utils', () => {
  describe('Transpose', () => {
    it('should return transposed matrix', () => {
      const transposed = transpose(matrix)
      expect(transposed.length).toBe(matrix[0].length)
      expect(transposed[0].length).toBe(matrix.length)
      expect(transposed).toEqual(transposedMatrix)
      expect(transpose(transposed)).toEqual(matrix)
    })
  })

  describe('Parse input', () => {
    it('should return parsed input', () => {
      const { numbers, boards } = parseInput(puzzleInput.split(/\r?\n/))

      expect(numbers.length).toBe(27)
      expect(numbers[0]).toBe(7)
      expect(numbers[numbers.length - 1]).toBe(1)
      expect(boards.length).toBe(3)
      expect(boards[0][1][0]).toBe(8)
      expect(boards[0][3][2]).toBe(3)
      expect(boards[1][1][0]).toBe(9)
      expect(boards[1][2][1]).toBe(8)
      expect(boards[2][3][3]).toBe(6)
      expect(boards[2][4][1]).toBe(0)
    })
  })
})
