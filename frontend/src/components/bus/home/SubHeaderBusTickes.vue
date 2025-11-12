<script setup lang="ts">
  import OptionSubHeader from '@/components/bus/home/OptionSubHeader.vue'
  import type IOptionsSubHeaderBusTickets from '@/interfaces/home-view/IOptionsSubHeaderBusTickets.ts'
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { OPTIONS_SUB_HEADER_BUS_TICKETS } from '@/constants/optionsSubHeaderBusTickets'

  const optionsSubHeaderBusTickets = OPTIONS_SUB_HEADER_BUS_TICKETS as IOptionsSubHeaderBusTickets[]
</script>

<template>
  <section class="sub-header">
    <BoxContent>
      <div class="d-flex justify-content-between">
        <OptionSubHeader
          v-for="option in optionsSubHeaderBusTickets"
          :key="option.title"
          :option="option"
        />
      </div>
    </BoxContent>
  </section>
</template>

<style scoped>
  .sub-header {
    padding-top: 8px;
    padding-bottom: 8px;
    background: #F5F5F7;
  }
</style>
