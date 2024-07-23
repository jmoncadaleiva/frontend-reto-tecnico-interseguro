<template>
  
  <div class="d-flex flex-column justify-center align-center" style="height: 100%; width: 100%;">
    <p class="mb-10 text-h3">Calculadora de factorización QR</p>
    <div class="d-flex" style="justify-content: space-evenly; width: 100%;">

      <matriz-card @calculated="setResponses"></matriz-card>
      
      <matriz-results 
        :factoredMatrizResponse="factoredMatrizResponse"
        :verificationResponse="verificationResponse"
      ></matriz-results>

    </div>
    <logout-button class="mt-5 "></logout-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IFactoredMatrizResponse, IVerificationMatrizResponse } from '@/types/matriz'

const factoredMatrizResponse = ref<IFactoredMatrizResponse | null>(null)
const verificationResponse = ref<IVerificationMatrizResponse | null>(null)

const setResponses = (event: {factoredMatrizResponse: IFactoredMatrizResponse, verificationResponse: IVerificationMatrizResponse}) => {
  factoredMatrizResponse.value = event.factoredMatrizResponse
  verificationResponse.value = event.verificationResponse
}
</script>
  