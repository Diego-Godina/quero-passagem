<script setup lang="ts">
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { computed, ref } from 'vue'
  import type IBreadcrumb from '@/interfaces/list-view/IBreadcrumb.ts'
  import BreadcrumbWebsite from '@/components/layouts/navigation/BreadcrumbWebsite.vue'
  import type IFilterByHour from '@/interfaces/list-view/IFilterByHour.ts'
  import BoxFilterByHour from '@/components/bus/list/BoxFilterByHour.vue'
  import type IOrder from '@/interfaces/orders/IOrder.ts'
  import OrderInfo from '@/components/bus/list/OrderInfo.vue'
  import { useStore } from '@/stores'
  import { useDates } from '@/composables/useDates'
  import { FILTERS_BY_HOURS } from '@/constants/filtersByHours'
  import { BREADCRUMBS } from '@/constants/breadcrumbs'

  const store = useStore()
  const { timeToSeconds, isInRangeSameDay } = useDates()
  const selectedFilter = ref<IFilterByHour | null>(null)

  const breadcrumbs = BREADCRUMBS as IBreadcrumb[]
  const filtersByHours = FILTERS_BY_HOURS as IFilterByHour[]

  const title = computed<string>(() => {
    return (
      'Passagem de ônibus de ' +
      store.state.order.form.origin.name +
      ' para ' +
      store.state.order.form.destiny.name
    )
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

    return all.filter((order) => {
      const depTime = order?.departure?.time ?? null
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
