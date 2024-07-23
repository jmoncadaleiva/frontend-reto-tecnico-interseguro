<template>
  <div class="d-flex flex-column justify-center align-center mb-5" style="height: 100%">
    <label class="text-center mb-5" style="font-size: 40px;">Register</label>
    
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
          :rules="[rules.required, rules.min(8)]"
          label="Contraseña"
          required
          type="password"
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          :rules="[rules.required, rules.min(8), rules.equalTo('contraseña', password)]"
          label="Confirmar contraseña"
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
            Registrarse
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { required, email as emailValidation, min, equalTo } from '@/utils/rules';
import type { VForm } from 'vuetify/components';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const rules = ref({
    required,
    email: emailValidation,
    min,
    equalTo
})

const email = ref('')
const password = ref('')
const confirmPassword= ref('')
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
      await authStore.register(payload)
      loading.value = false
      router.push({ name: 'Login' })
    } catch (e: any) {
      loading.value = false
      const message = e || 'Ha ocurrido un error. Inténtelo de nuevo en unos minutos.'
      await confirm(message)
    }
  }
}

</script>
