<template>
    <p class="mb-3" for="">Dimensiones de matriz:</p>
    <div class="d-flex justify-center align-center">
      <v-text-field
        v-model="rows"
        max-width="100px"
        type="number" 
        step="1"
        @change="emit('change')"
      >
      </v-text-field>
      <v-icon class="mx-4">mdi-close</v-icon>
      <v-text-field
        v-model="cols"
        max-width="100px"
        type="number"
        step="1"
        @change="emit('change')"
      >
      </v-text-field>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['change'])
const rows = defineModel('rows')
const cols = defineModel('cols')
</script>
  