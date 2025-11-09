<script setup lang="ts">
  import type IFilterByHour from '@/interfaces/IFilterByHour.ts'
  import router from '@/router'

  const props = defineProps<{
    filterByHour: IFilterByHour
  }>()

  const searchBusTickets = () => {
    router.push({name: 'list-bus-tickets'})
  }
</script>

<template>
  <form @submit.prevent="searchBusTickets">
    <div class="widget-filter p-2">
      <button type="submit" class="button-widget-search">{{ props.filterByHour.text }}</button>
      <i class="clean-filter x uil uil-times typo-bold ms-1"></i>
    </div>
  </form>
</template>

<style scoped>
  .widget-filter {
    font-size: 1.1rem;
    line-height: 1.3rem;
    border: 1px solid #d5d8de;
    border-radius: 24px;
  }

  .clean-filter {
    cursor: pointer;
  }
</style>
