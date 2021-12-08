import { Submarine, Direction, IPosition } from './part-1'

class SubmarineWithAim extends Submarine {
  private aim: number = 0

  protected move(direction: Direction, x: number) {
    switch (direction) {
      case Direction.FORWARD:
        this.position.horizontal += x
        this.position.depth += x * this.aim
        break
      case Direction.DOWN:
        this.aim += x
        break
      case Direction.UP:
        this.aim -= x
        break
      default:
        const n: never = direction
        throw new Error(`Unknown direction: ${n}`)
    }
  }
}

export const part2 = (commands: string[]): IPosition => {
  const submarine = new SubmarineWithAim()

  commands.forEach((c) => submarine.exec(c))

  return submarine.getPosition()
}
