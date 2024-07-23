<template>
  <v-btn @click="logout">Cerrar sesión</v-btn>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  const isConfirm = await confirm('¿Confirmas que deseas cerrar la sesión?')
  if (!isConfirm) { return }

  authStore.logout()
  await router.push({name: 'Login'})
}
</script>
  