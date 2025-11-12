<script setup lang="ts">

import OptionSubHeader from '@/components/bus/home/OptionSubHeader.vue'
import { computed } from 'vue'
import type IOptionsSubHeaderBusTickets from '@/interfaces/home-view/IOptionsSubHeaderBusTickets.ts'
import BoxContent from '@/components/layouts/BoxContent.vue'

const optionsSubHeaderBusTickets = computed<IOptionsSubHeaderBusTickets[]>(() => {
  return [
    {
      'icon': 'uil-trophy',
      'title': 'Viagens seguras',
      'info': 'Mais de 30 milhões de compras',
    },
    {
      'icon': 'uil-credit-card',
      'title': 'Pagamento',
      'info': 'Pague com Pix, Nupay ou em até 12x',
    },
    {
      'icon': 'uil-shield-check',
      'title': 'Cancelamento',
      'info': 'Passagens flexíveis e atendimento personalizado',
    },
  ]
})

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
