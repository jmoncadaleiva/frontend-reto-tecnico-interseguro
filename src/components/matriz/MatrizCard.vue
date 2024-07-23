<template>
  <v-card min-width="500px" min-height="400px" class="pa-5">

    <matriz-dimension-input
      v-model:rows="rows"
      v-model:cols="cols"
      @change="createMatriz"
    ></matriz-dimension-input>

    <matriz-input
      title="Datos de matriz:"
      v-model:matriz="matriz"
    ></matriz-input>

    <v-btn
      class="mt-4"
      color="success"
      block
      @click="calculate"
      :loading="loading"
    >
      <p>Calcular</p>
    </v-btn>

  </v-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as matrizService from '@/services/matrizService'
import { IFactoredMatrizResponse, IVerificationMatrizResponse, Matriz } from '@/types/matriz'

const rows = ref(2)
const cols = ref(2)
const matriz = ref<number[][]>([])
const loading = ref(false)

const emit = defineEmits(['calculated'])

const createMatriz = () => {
  matriz.value = []
  for (let i = 0; i < rows.value; i++) {
    const tempRow: number[] = []
    for (let j = 0; j < cols.value; j++) {
      tempRow.push(0)
    }
    matriz.value.push(tempRow)
  }
}

const cleanMatriz = (matriz: Matriz) => {
  return matriz.map(row => row.map(Number))
}

const calculate = async () => {
  try {
    const payload = { value: cleanMatriz(matriz.value) }
    const factorizationPromise = matrizService.calculateQRFactorization(payload)
    const isDiagonalPromise = matrizService.verifyIfIsDiagonal(payload)
    loading.value = true
    const response = await Promise.all([factorizationPromise, isDiagonalPromise])
    const factoredMatrizResponse: IFactoredMatrizResponse = response[0]
    const verificationResponse: IVerificationMatrizResponse = response[1]
    emit('calculated', { factoredMatrizResponse, verificationResponse})
    loading.value = false

  } catch (e) {
    alert('Ha ocurrido un error. Inténtelo de nuevo en unos minutos.')
  }
}

onMounted(() => {
  createMatriz()
})

</script>
  