<script setup lang="ts">
  import type IFilterByHour from '@/interfaces/list-view/IFilterByHour.ts'
  import router from '@/router'

  const emit = defineEmits(['onFilterOrders'])

  const props = defineProps<{
    filterByHour: IFilterByHour
    active?: boolean
  }>()

  const onFilterOrders = ():void => {
    emit('onFilterOrders', props.filterByHour)
  }
</script>

<template>
  <div>
    <div class="widget-filter p-2" @click="onFilterOrders" :class="{ 'active': props.active }">
      <button type="submit" class="button-widget-search">{{ props.filterByHour.text }}</button>
      <i class="clean-filter x uil uil-times typo-bold ms-1" v-if="props.active"></i>
    </div>
  </div>
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
  .active {
    background-color: #e6f1ff;
    border-color: #0d2240;
  }
</style>
