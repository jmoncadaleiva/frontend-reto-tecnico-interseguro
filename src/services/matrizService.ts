import { IFactoredMatrizResponse, IMatriz, IVerificationMatrizResponse } from "@/types/matriz"
import { baseFetch } from "@/utils/fetch"

export const calculateQRFactorization = (matriz: IMatriz): Promise<IFactoredMatrizResponse> => {
  return baseFetch('matriz/factorize/', 'POST', matriz)
}

export const verifyIfIsDiagonal = (matriz: IMatriz): Promise<IVerificationMatrizResponse> => {
  return baseFetch('matriz/verify/', 'POST', matriz)
}