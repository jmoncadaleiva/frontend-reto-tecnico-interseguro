<template>
    <p class="mb-3" for="">{{ title }}</p>
    <div class="d-flex justify-center align-center">
      <div class="matrix-row" v-for="(row, rowIndex) in matriz">
        <div class="matrix-row" v-for="(_, colIndex) in row">
          <v-text-field
            class="ma-5"
            v-model="matriz[rowIndex][colIndex]"
            max-width="100px"
            type="number" 
            step="1"
            :readonly="props.readOnly"
          >
          </v-text-field>
        </div>

      </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title','readOnly']);
const matriz = defineModel('matriz', {required: true, type: Array<Array<Number>> })

</script>
  