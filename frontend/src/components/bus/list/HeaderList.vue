<script setup lang="ts">
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { computed, ref } from 'vue'
  import type IBreadcrumb from '@/interfaces/IBreadcrumb.ts'
  import BreadcrumbWebsite from '@/components/layouts/navigation/BreadcrumbWebsite.vue'
  import type IFilterByHour from '@/interfaces/IFilterByHour.ts'
  import BoxFilterByHour from '@/components/bus/list/BoxFilterByHour.vue'
  import type IOrder from '@/interfaces/IOrder.ts'
  import OrderInfo from '@/components/bus/list/OrderInfo.vue'
  import { useStore } from '@/stores'
  import { useDates } from '@/composables/useDates'

  const store = useStore()
  const { timeToSeconds, isInRangeSameDay } = useDates()
  const selectedFilter = ref<IFilterByHour | null>(null)

  const breadcrumbs = computed<IBreadcrumb[]>(() => {
    return [
      {
        name: 'Passagem de ida',
        link: '/',
        active: true,
      },
      {
        name: 'Passagem de volta',
        link: '/',
        active: false,
      },
      {
        name: 'Pagamento',
        link: '/',
        active: false,
      },
    ]
  })

  const title = computed<string>(() => {
    return (
      'Passagem de ônibus de ' +
      store.state.order.form.origin.name +
      ' para ' +
      store.state.order.form.destiny.name
    )
  })

  const filtersByHours = computed<IFilterByHour[]>(() => {
    return [
      {
        text: '00h00 - 05h59',
        start: '00:00:00',
        end: '05:59:59',
      },
      {
        text: '06h00 - 11h59',
        start: '06:00:00',
        end: '11:59:59',
      },
      {
        text: '12h00 - 17h59',
        start: '12:00:00',
        end: '17:59:59',
      },
      {
        text: '18h00 - 23h59',
        start: '18:00:00',
        end: '23:59:59',
      },
    ]
  })

  const orders = computed<IOrder[]>(() => {
    return store.state.order.orders
  })

  const filteredOrders = computed<IOrder[]>(() => {
    const all = orders.value ?? []

    if (!selectedFilter.value) return all

    const startSec = timeToSeconds(selectedFilter.value.start)
    const endSec = timeToSeconds(selectedFilter.value.end)

    if (isNaN(startSec) || isNaN(endSec)) return all

    return all.filter((o) => {
      const depTime = o?.departure?.time ?? null
      const tDep = timeToSeconds(depTime)

      return isInRangeSameDay(tDep, startSec, endSec)
    })
  })

  const onFilterOrders = (filter: IFilterByHour): void => {
    if (selectedFilter.value?.text === filter.text) {
      selectedFilter.value = null
    } else {
      selectedFilter.value = filter
    }
  }
</script>

<template>
  <BoxContent>
    <div class="py-5" v-if="orders.length > 0">
      <BreadcrumbWebsite :breadcrumbs="breadcrumbs" />

      <h1 class="mt-5 mb-6">{{ title }}</h1>

      <div class="d-flex gap-3">
        <BoxFilterByHour
          v-for="filterByHour in filtersByHours"
          :key="filterByHour.text"
          :filter-by-hour="filterByHour"
          @onFilterOrders="onFilterOrders"
          :active="selectedFilter?.text === filterByHour.text"
        />
      </div>

      <div class="block-tickets-options d-flex flex-column gap-3 py-3">
        <OrderInfo v-for="order in filteredOrders" :key="order.id" :order="order" />
      </div>
    </div>

    <div v-else class="empty-orders">
      <h1>Não foi possível encontrar resultados com os filtros selecionados...</h1>
    </div>
  </BoxContent>
</template>

<style scoped>
  h1 {
    font-family: Sora, sans-serif;
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 700;
  }

  .empty-orders {
    padding: 100px 0;
    text-align: center;
  }
</style>
