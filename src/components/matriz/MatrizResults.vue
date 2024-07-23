<template>
  <v-card min-width="500px" class="pa-5" min-height="400px">
    <div v-if="factoredMatrizResponse">
      <p class="text-center">Factorización QR:</p>
      <matriz-input
        title="Resultado de Q:"
        v-model:matriz="factoredMatrizResponse.factoredMatriz.Q"
        :read-only="true"
      ></matriz-input>

      <matriz-input 
        title="Resultado de R:"
        v-model:matriz="factoredMatrizResponse.factoredMatriz.R"
        :read-only="true"
      ></matriz-input>

      <p>La matriz {{ !!verificationResponse?.isDiagonal ? 'SI': 'NO' }} es diagonal.</p>
    </div>
    <p v-else class="text-justify" style="max-width: 400px;">
      La factorización QR es una técnica utilizada en álgebra lineal para descomponer una matriz en el producto de dos matrices: una matriz ortogonal (Q) y una matriz triangular superior (R). Esta descomposición es útil en varios contextos matemáticos y de programación debido a sus propiedades y aplicaciones.
    </p>
  </v-card>
</template>

<script lang="ts" setup>
import { IFactoredMatrizResponse, IVerificationMatrizResponse } from '@/types/matriz'

interface Props {
  factoredMatrizResponse: IFactoredMatrizResponse,
  verificationResponse: IVerificationMatrizResponse,
}
defineProps<Props>()
</script>
  