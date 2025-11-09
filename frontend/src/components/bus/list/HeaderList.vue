<script setup lang="ts">
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { computed } from 'vue'
  import type IBreadcrumb from '@/interfaces/IBreadcrumb.ts'
  import BreadcrumbWebsite from '@/components/layouts/navigation/BreadcrumbWebsite.vue'
  import type IFilterByHour from '@/interfaces/IFilterByHour.ts'
  import BoxFilterByHour from '@/components/bus/list/BoxFilterByHour.vue'
  import type IOrder from '@/interfaces/IOrder.ts'
  import OrderInfo from '@/components/bus/list/OrderInfo.vue'

  const breadcrumbs = computed<IBreadcrumb[]>(() => {
    return [
      {
        'name': 'Passagem de ida',
        'link': '/',
        'active': true
      },
      {
        'name': 'Passagem de volta',
        'link': '/',
        'active': false
      },
      {
        'name': 'Pagamento',
        'link': '/',
        'active': false
      },
    ]
  })

  const title = computed<string>(() => {
    return "Passagem de ônibus de São Paulo, SP - TODOS para Patos De Minas, MG - TODOS"
  })

  const filtersByHours = computed<IFilterByHour[]>(() => {
    return [
      {
        'text': '00h00 - 05h59',
        'start': '00:00:00',
        'end': '05:59:59'
      },
      {
        'text': '06h00 - 11h59',
        'start': '06:00:00',
        'end': '11:59:59'
      },
      {
        'text': '12h00 - 17h59',
        'start': '12:00:00',
        'end': '17:59:59'
      },
      {
        'text': '18h00 - 23h59',
        'start': '18:00:00',
        'end': '23:59:59'
      },
    ]
  })

  const orders = computed<IOrder[]>(() => {
    return [
      {
        'id': '1_1ebb8120607b600a436a7488f2853922',
        'company': {
          'id': '12',
          'name': 'Garcia',
          'icon': 'viacao-cometa.svg'
        },
        'from': {
          'id': 'ROD_3',
          'name': 'Campinas, SP - Terminal Ramos de Azevedo'
        },
        'to': {
          'id': 'ROD_3',
          'name': 'Campinas, SP - Terminal Ramos de Azevedo'
        },
        'availableSeats': 0,
        'seatsLayout': 'numbered',
        'withBPE': false,
        'departure': {
          'date': '2025-08-26',
          'time': '19:00:00'
        },
        'arrival': {
          'date': '2025-08-26',
          'time': '19:00:00'
        },
        'travelDuration': 27000,
        'travelDistance': '487.501',
        'seatClass': 'LEITO CAMA',
        'price': {
          'seatPrice': 18.67,
          'taxPrice': 3.73,
          'price': 22.4,
          'ccTaxPrice': 2.02
        },
        'insurance': 18,
        'allowCanceling': true,
        'travelCancellationLimitDate': '2025-08-20 19:30:00',
        'travelCancellationFee': 0,
        'manualConfirmation': false,
        'CPFRequired': false,
        'loungeVipAvailable': false,
        'maximumAllowedPassengers': null,
        'connection': {
          'node': {
            'id': 'ROD_3',
            'name': 'Campinas, SP - Terminal Ramos de Azevedo'
          },
          'waitingInformation': {
            'arrival': '2025-08-21 07:00:00',
            'departure': {
              'date': '2025-08-26',
              'time': '19:00:00'
            }
          },
          'company': {
            'id': '12',
            'name': 'Garcia',
            'icon': 'viacao-cometa.svg'
          },
          'seatClass': 'CONVENCIONAL',
          'availableSeats': 44,
          'seatsLayout': 'numbered',
          'withBPE': false,
          'loungeVipAvailable': false
        }
      },
      {
        'id': '1_1ebb8120607b600a436a7488f28539sfdfd2',
        'company': {
          'id': '12',
          'name': 'Garcia'
        },
        'from': {
          'id': 'ROD_3',
          'name': 'Campinas, SP - Terminal Ramos de Azevedo'
        },
        'to': {
          'id': 'ROD_3',
          'name': 'Campinas, SP - Terminal Ramos de Azevedo'
        },
        'availableSeats': 0,
        'seatsLayout': 'numbered',
        'withBPE': false,
        'departure': {
          'date': '2025-08-26',
          'time': '19:00:00'
        },
        'arrival': {
          'date': '2025-08-26',
          'time': '19:00:00'
        },
        'travelDuration': 27000,
        'travelDistance': '487.501',
        'seatClass': 'LEITO CAMA',
        'price': {
          'seatPrice': 18.67,
          'taxPrice': 3.73,
          'price': 22.4,
          'ccTaxPrice': 2.02
        },
        'insurance': 18,
        'allowCanceling': true,
        'travelCancellationLimitDate': '2025-08-20 19:30:00',
        'travelCancellationFee': 0,
        'manualConfirmation': false,
        'CPFRequired': false,
        'loungeVipAvailable': false,
        'maximumAllowedPassengers': null,
        'connection': {
          'node': {
            'id': 'ROD_3',
            'name': 'Campinas, SP - Terminal Ramos de Azevedo'
          },
          'waitingInformation': {
            'arrival': '2025-08-21 07:00:00',
            'departure': {
              'date': '2025-08-26',
              'time': '19:00:00'
            }
          },
          'company': {
            'id': '12',
            'name': 'Garcia'
          },
          'seatClass': 'CONVENCIONAL',
          'availableSeats': 44,
          'seatsLayout': 'numbered',
          'withBPE': false,
          'loungeVipAvailable': false
        }
      }
    ]
  })
</script>

<template>
  <BoxContent>
    <div class="py-5">
      <BreadcrumbWebsite :breadcrumbs="breadcrumbs"/>

      <h1 class="mt-5 mb-6">{{ title }}</h1>

      <div class="d-flex gap-3">
        <BoxFilterByHour
          v-for="filterByHour in filtersByHours"
          :key="filterByHour.text"
          :filter-by-hour="filterByHour"
        />
      </div>

      <div class="block-tickets-options d-flex flex-column gap-3 py-3">
        <OrderInfo
          v-for="order in orders"
          :key="order.id"
          :order="order"
        />
      </div>
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
</style>
