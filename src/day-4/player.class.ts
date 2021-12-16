import { BingoBoard, PlayerBoard, PlayerRow, Row } from './types'
import { transpose } from './utils'

export class Player {
  static create(board: BingoBoard) {
    return new Player(board)
  }

  private board: PlayerBoard
  private bingo: boolean = false

  constructor(board: BingoBoard) {
    const getNumberForGame = (n: number) => [n, false] as [number, boolean]
    const getRowForGame = (boardRow: Row<number>): PlayerRow => boardRow.map(getNumberForGame)

    this.board = board.map(getRowForGame)
  }

  newNumber(n: number): boolean {
    this.mark(n)
    return this.checkBingo()
  }

  getUnmarkedSum(): number {
    if (this.bingo === false) return 0
    return this.board.reduce(
      (sum, row) =>
        row.reduce((rowSum, [n, isMarked]) => (isMarked === false ? rowSum + n : rowSum), sum),
      0
    )
  }

  hasBingo(): boolean {
    return this.bingo
  }

  private mark(n: number): void {
    const markRowItem = ([num, isMarked]: [number, boolean]) =>
      [num, isMarked || num === n] as [number, boolean]
    const markRow = (row: PlayerRow) => row.map(markRowItem)

    this.board = this.board.map(markRow)
  }

  private checkBingo(): boolean {
    const isNumberMarked = ([_, isMarked]: [number, boolean]) => isMarked === true
    const isRowMarked = (row: PlayerRow) => row.every(isNumberMarked)
    const hasMarkedRow = (board: PlayerBoard) => board.some(isRowMarked)

    this.bingo = hasMarkedRow(this.board) || hasMarkedRow(transpose(this.board))
    return this.bingo
  }
}
