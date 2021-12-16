export type Row<T> = T[]
export type Board<S> = Row<Row<S>>

export type BingoBoard = Board<number>
export type PlayerBoard = Board<[number, boolean]>
export type PlayerRow = Row<[number, boolean]>
