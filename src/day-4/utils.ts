export const transpose = (matrix: Array<any[]>) => {
  const rows = matrix.length
  const cols = (matrix[0] ?? []).length
  const transposed = []

  for (let j = 0; j < cols; j++) {
    transposed[j] = Array(rows)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }
  return transposed
}

export const parseInput = (lines: string[]) => {
  const res = {
    numbers: (lines[0] ?? []).trim().split(',').map(Number),
    boards: [] as Array<number[][]>,
  }
  const linesCount = lines.length
  let lineIdx = 1
  while (lineIdx < linesCount) {
    if (lines[lineIdx].trim().length === 0) {
      res.boards.push([])
    } else {
      res.boards[res.boards.length - 1].push(
        lines[lineIdx].split(/(\s+)/).reduce((a, v) => {
          if (v.trim().length > 0) {
            a.push(Number(v))
          }
          return a
        }, [] as number[])
      )
    }

    lineIdx++
  }

  return res
}
