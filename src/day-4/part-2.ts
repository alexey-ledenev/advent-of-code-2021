import { BingoBoard } from './types'
import { Player } from './player.class'

/** returns the score of the last winner's board */
export const part2 = (numbers: number[], boards: BingoBoard[]): number => {
  let players = boards.map(Player.create)

  const roundsCount = numbers.length
  let round = 0

  while (players.length > 0 && round < roundsCount) {
    if (players.length === 1) {
      if (players[0].newNumber(numbers[round]) === true) break
    } else {
      players = players.filter((p) => p.newNumber(numbers[round]) !== true)
    }
    round++
  }

  const [lastPlayer] = players
  return (lastPlayer?.getUnmarkedSum() ?? 0) * numbers[round]
}
