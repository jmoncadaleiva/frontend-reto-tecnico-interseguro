export type Matriz = number[][]

export interface IMatriz {
    value: Matriz
}

export interface IFactoredMatrizResponse {
    factoredMatriz: {
        Q: Matriz,
        R: Matriz,
    }
}

export interface IVerificationMatrizResponse {
    isDiagonal: boolean
}