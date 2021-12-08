export enum Direction {
  FORWARD = 'forward', // increases the horizontal position
  DOWN = 'down', // increases the depth
  UP = 'up', // decreases the depth
}

export interface IPosition {
  horizontal: number // x
  depth: number // y
}

export class Submarine {
  protected position: IPosition = {
    horizontal: 0,
    depth: 0,
  }

  exec(command: string): void {
    try {
      const [direction, x] = this.parseCommand(command)
      this.move(direction, x)
    } catch (error) {
      console.warn('Submarine command error', error)
    }
  }

  getPosition(): IPosition {
    return this.position
  }

  protected move(direction: Direction, x: number) {
    switch (direction) {
      case Direction.FORWARD:
        this.position.horizontal += x
        break
      case Direction.DOWN:
        this.position.depth += x
        break
      case Direction.UP:
        this.position.depth -= x
        break
      default:
        const n: never = direction
        throw new Error(`Unknown direction: ${n}`)
    }
  }

  protected parseCommand(c: string): [Direction, number] {
    const [direction, x] = c.split(' ')

    if (Object.values(Direction).includes(direction as Direction) !== true || !x) {
      throw new Error(`Invalid command: ${c}`)
    }

    return [direction as Direction, parseInt(x)]
  }
}

export const part1 = (commands: string[]): IPosition => {
  const submarine = new Submarine()

  commands.forEach((c) => submarine.exec(c))

  return submarine.getPosition()
}
