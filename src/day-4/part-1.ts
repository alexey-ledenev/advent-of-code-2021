import { Player } from './player.class'
import { BingoBoard } from './types'

/** returns the score of the first winner's board */
export const part1 = (numbers: number[], boards: BingoBoard[]): number => {
  const players = boards.map(Player.create)
  const playersCount = players.length
  const roundsCount = numbers.length

  let round = 0
  let winnerScore: number | null = null

  while (winnerScore === null && round < roundsCount) {
    let i = 0
    while (winnerScore === null && i < playersCount) {
      if (players[i].newNumber(numbers[round]) === true) {
        winnerScore = players[i].getUnmarkedSum() * numbers[round]
      }
      i++
    }

    round++
  }

  return winnerScore ?? 0
}
