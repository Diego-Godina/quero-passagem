<script setup lang="ts">
  import SelectDate from '@/components/layouts/search/SelectDate.vue'
  import { computed } from 'vue'

  const props = defineProps<{
    startDate: string,
    endDate: string
  }>()

  const emit = defineEmits<{
    (e: 'update:startDate', value: string): void
    (e: 'update:endDate', value: string): void
  }>()

  const startDateProxy = computed({
    get: () => props.startDate,
    set: (val: string) => emit('update:startDate', val)
  })

  const endDateProxy = computed({
    get: () => props.endDate,
    set: (val: string) => emit('update:endDate', val)
  })
</script>

<template>
  <div class="d-flex gap-2">
    <SelectDate id="dt-go" label="Data Saída" v-model:date="startDateProxy"/>
    <SelectDate id="dt-back" label="Data Retorno" v-model:date="endDateProxy"/>
  </div>
</template>

<style scoped></style>
