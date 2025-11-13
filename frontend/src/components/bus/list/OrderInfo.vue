<script setup lang="ts">
  import type IOrder from '@/interfaces/orders/IOrder.ts'
  import StartEndOrder from '@/components/bus/list/StartEndOrder.vue'
  import OrderInfoFooter from '@/components/bus/list/OrderInfoFooter.vue'
  import { computed, ref } from 'vue'
  import SeatMap from '@/components/bus/list/SeatMap.vue'
  import { useStore } from "@/stores";
  import { GET_SEATS } from '@/stores/actions'

  const props = defineProps<{
    order: IOrder,
  }>()

  const showSeatMap = ref(false)
  const isLoading = ref(false)
  const store = useStore()

  const companyLogo = computed(() => {
    const companyDetails = store.state.company.companyDetails[props.order.company.id]
    return companyDetails?.logo?.svg ?? companyDetails?.logo?.jpg
  })

  const calcDuration = (): string => {
    const duration = props.order.travelDuration

    if (!duration || isNaN(duration)) return '—'

    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration % 3600) / 60)

    if (hours > 0 && minutes > 0) return `${hours}h ${minutes}min`
    if (hours > 0) return `${hours}h`
    return `${minutes}min`
  }

  const priceFormatted = (): string => {
    const p = props.order.price
    const price = (
      (p?.seatPrice ?? 0) +
      (p?.taxPrice ?? 0) +
      (p?.price ?? 0) +
      (p?.ccTaxPrice ?? 0)
    ).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })

    return 'R$ ' + price;
  }

  const toggleTemplateSeatMap = async (): void => {
    showSeatMap.value = !showSeatMap.value

    if (!showSeatMap.value || store.state.order.seats[props.order.id]) {
      return
    }

    isLoading.value = true
    try {
      await store.dispatch(GET_SEATS, props.order.id)
    } finally {
      isLoading.value = false
    }
  }
</script>

<template>
  <div class="box-order d-flex flex-column py-4 ps-3 pe-4 bg-white">
    <div class="d-flex justify-content-between align-items-center pb-3">
      <div class="pointer d-flex gap-5 align-items-center" @click="toggleTemplateSeatMap">
        <div>
          <img :src="companyLogo" :alt="`${ props.order.company.name }`" class="company-logo"/>
        </div>

        <div class="d-flex gap-4">
          <div class="d-flex flex-column">
            <StartEndOrder :departure="props.order.departure.time" :arrival="props.order.arrival.time"/>
            <span class="info-gray">Duração: {{ calcDuration() }}</span>
          </div>

          <div class="stops d-flex flex-column gap-2">
            <div class="departure d-flex">
              <i class="uil uil-circle me-1"></i>
              <span>{{ props.order.from.name }}</span>
            </div>

            <div class="departure d-flex">
              <i class="uil uil-map-marker me-1"></i>
              <span>{{ props.order.to.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center is-gap-8">
        <div class="seat-class">{{ props.order.seatClass }}</div>

        <div class="d-flex gap-3 align-items-center">
          <div class="pointer price-ticket d-flex flex-column align-items-end" @click="toggleTemplateSeatMap">
            <span class="price">{{ priceFormatted() }}</span>
            <span class="info-gray">por pessoa</span>
          </div>
          <div>
            <button class="pointer button button-choose" type="button" v-if="!showSeatMap" @click="toggleTemplateSeatMap">Escolher ida</button>
            <button class="pointer button button-close" type="button" v-if="showSeatMap" @click="toggleTemplateSeatMap">
              <img class="me-3" v-if="isLoading" src="@/assets/img/loading.gif" alt="Carregando..." width="10"/>
              <span>Fechar</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <SeatMap v-if="showSeatMap" :orderId="props.order.id"/>
    <OrderInfoFooter v-else/>
  </div>
</template>

<style scoped>
  .box-order {
    border-radius: 8px;
    font-size: 1.1rem;
    line-height: 1.3rem;
    border: 1px solid #d5d8de;
  }

  .pointer {
    cursor: pointer;
  }

  .stops {
    font-size: 0.9rem;
    line-height: 1rem;
    color: #2d2e30;
    position: relative;
  }

  .stops::before {
    content: '';
    position: absolute;
    left: 3.9px;
    top: 9.3px;
    background-color: #81848c;
    width: 1px;
    height: 5.5px;
  }

  .company-logo {
    max-width: 120px;
    width: 120px;
  }

  .price {
    font-family: Sora, sans-serif;
    font-size: 1.3rem;
    line-height: 1.4rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .button {
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.05rem;
    text-transform: uppercase;
    padding: 10px 18px;
    cursor: pointer;
  }

  .button-choose {
    background-color: #046133;
    border-color: #046133;
    color: #f5f5f7;
  }

  .button-close {
    background-color: #fff;
    border-color: #2764c0;
    color: #2764c0;
  }
</style>
