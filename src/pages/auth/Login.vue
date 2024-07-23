<template>
  <div class="d-flex flex-column justify-center align-center mb-5" style="height: 100%">
    <label class="text-center mb-5" style="font-size: 40px;">Login</label>
    
    <v-sheet class="pa-10 mx-auto" width="400">
      <v-form ref="form">
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="Email"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          :rules="[rules.required]"
          label="Password"
          required
          type="password"
        ></v-text-field>
  
        <div class="d-flex flex-column">
          <v-btn
            class="mt-4"
            color="success"
            block
            @click="doLogin"
            :loading="loading"
          >
            Iniciar sesión
          </v-btn>
          <v-btn
            class="mt-4"
            color="danger"
            block
            @click="router.push({name: 'Register'})"
          >
            Registrate
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { required, email as emailValidation } from '@/utils/rules';
import type { VForm } from 'vuetify/components';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const rules = ref({
    required,
    email: emailValidation,
})

const email = ref('')
const password = ref('')
const loading = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const form = ref<InstanceType<typeof VForm> | null>()

const doLogin = async () => {
  if (!form.value) { return }
  const { valid } = await form.value.validate()
  if (valid ) {
    loading.value = true
    try {
      email.value = email.value.toLowerCase().trim()
      const payload = { email: email.value, password: password.value }
      await authStore.login(payload)
      loading.value = false
      router.push({ name: 'Home' })
    } catch (e: any) {
      loading.value = false
      const message = e || 'Ha ocurrido un error. Inténtelo de nuevo en unos minutos.'
      await confirm(message)
    }
  }
}

</script>
