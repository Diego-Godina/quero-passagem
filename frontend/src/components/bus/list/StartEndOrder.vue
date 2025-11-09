<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    departure: string,
    arrival: string
  }>()

  const getHourAndMinutes = (time: string):string => {
    return time.slice(0, 5)
  }
</script>

<template>
  <div class="hours-minutes d-flex">
    <span>{{ getHourAndMinutes(props.departure) }}</span>
    <i class="uil uil-arrow-right c-gray-800"></i>
    <span>{{ getHourAndMinutes(props.arrival) }}</span>
  </div>
</template>

<style scoped>
  .hours-minutes * {
    font-family: Sora, sans-serif;
    font-size: 1.3rem;
    line-height: 1.4rem;
    font-weight: 600;
    color: #2d2e30;
  }
</style>
