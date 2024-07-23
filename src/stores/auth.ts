import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import type { ICredentials } from '@/types/auth'
import * as authService from '@/services/authService'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token') || null)

  const login = async (credentials: ICredentials): Promise<any> => {
    try {
      const response = await authService.login(credentials)
      token.value = response.token
      localStorage.setItem('token', response.token)
    } catch (err: any) {
      throw new Error(err.error)
    }
  }

  const register = async (credentials: ICredentials): Promise<any> => {
      return await authService.register(credentials)
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
  }

  const isAuthenticated = computed(() => {
    return token.value !== 'undefined' && !!token.value
  })

  return { login, register, logout, isAuthenticated, token }
})
