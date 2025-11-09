<script setup lang="ts">
  import type ISeat from '@/interfaces/ISeat.ts'
  import { SeatsAvailability } from '@/enums/SeatsAvailability.ts'

  const emit = defineEmits(['selectedSeat'])

  const props = defineProps<{
    type: string
    number?: string | null,
    showNumber?: boolean,
    text?: boolean
    seat?: ISeat
    selected?: boolean
  }>()

  const classSeat = ():string => {
    if (props.selected) return 'seat-selected'
    if (props.type === SeatsAvailability.AVAILABLE) return 'seat-available'
    if (props.type === SeatsAvailability.OCCUPIED) return 'seat-not-available'

    return 'seat-selected'
  }

  const selectedSeat = ():void => {
    if (props.text) return
    if (props.seat?.occupied ?? true) return

    emit('selectedSeat', props.seat)
  }
</script>

<template>
  <div class="box-seat d-flex align-items-center gap-2" @click="selectedSeat()">
    <div class="seat d-flex justify-content-center align-items-center" :class="[classSeat(), {'no-cursor': props.text}]" >
      <i class="uil uil-times"></i>
      <span class="number-seat" v-if="props.type !== SeatsAvailability.OCCUPIED">{{ props.number }}</span>
    </div>
    <span class="info-gray" v-if="props.text">{{ props.type }}</span>
  </div>
</template>

<style scoped>
  .seat {
    border-radius: 4px;
    padding: 4px;
    font-size: 1.1rem;
    line-height: 1.3rem;
    border: 1px solid #d5d8de;
    width: 24px;
    height: 24px;
  }

  .seat-selected {
    background-color: #2764c0;
  }

  .seat-selected .number-seat {
    color: #fff
  }

  .seat-available .uil-times,
  .seat-selected .uil-times {
    display: none;
  }

  .seat-available,
  .seat-selected {
    cursor: pointer;
  }

  .seat-not-available {
    background-color: #edf0f7;
  }

  .no-cursor {
    cursor: auto;
  }
</style>
