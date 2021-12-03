import { readFileSync } from 'fs'

export const readInputFromFile = (filePath: string) => readFileSync(filePath)

export const readLinesFromFile = (filePath: string) =>
  readInputFromFile(filePath).toString().split(/\r?\n/)

export const readNumbersFromFile = (filePath: string) => readLinesFromFile(filePath).map(Number)
