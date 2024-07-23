import type { ICredentials } from "@/types/auth"
import { baseFetch } from "@/utils/fetch"

export const login = (credentials: ICredentials): Promise<any> => {
  return baseFetch('auth/login/', 'POST', credentials)
}

export const register = (credentials: ICredentials): Promise<any> => {
  return baseFetch('auth/register/', 'POST', credentials)
}