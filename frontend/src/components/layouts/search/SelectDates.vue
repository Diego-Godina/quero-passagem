<script setup lang="ts">
import SelectDate from '@/components/layouts/search/SelectDate.vue'
</script>

<template>
  <div class="d-flex gap-2">
    <SelectDate id="dt-go" label="Data Saída"/>
    <SelectDate id="dt-back" label="Data Retorno"/>
  </div>
</template>

<style scoped></style>
