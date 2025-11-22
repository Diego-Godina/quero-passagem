<script setup lang="ts">
import type IOptionsSubHeaderBusTickets from '@/interfaces/home-view/IOptionsSubHeaderBusTickets.ts'

const props = defineProps<{
  option: IOptionsSubHeaderBusTickets
}>()
</script>

<template>
  <div class="option d-flex align-items-center">
    <div class="option-image me-3"><i :class="`uil ${props.option.icon}`"></i></div>
    <div class="d-flex flex-column gap-1">
      <div class="option-title">{{ props.option.title }}</div>
      <div class="option-info">{{ props.option.info }}</div>
    </div>
  </div>
</template>

<style scoped>
.option-title {
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 600;
  text-align: left;
  color: #151618;
}

.option-info {
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: left;
  color: #151618;
}

i {
  font-size: 2.3rem;
  color: #81848c;
}
</style>
