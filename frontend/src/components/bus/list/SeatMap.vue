<script setup lang="ts">
  import BlueButton from '@/components/buttons/BlueButton.vue'
  import BusSeat from '@/components/bus/list/BusSeat.vue'
  import { computed, ref } from 'vue'
  import type ISeats from '@/interfaces/ISeats.ts'
  import { SeatsAvailability } from '@/enums/SeatsAvailability.ts'
  import type ISeat from '@/interfaces/ISeat.ts'
  import { SeatsType } from '@/enums/SeatsType.ts'

  const selectedSeats = ref<ISeat[]>([])

  const props = defineProps<{
    orderId: string
  }>()

  const getAvailabilitySeat = (occupied: boolean | undefined): string => {
    if (occupied) return SeatsAvailability.OCCUPIED

    return SeatsAvailability.AVAILABLE
  }

  const seats = computed<ISeats>(() => {
    return {
      orientation: 'horizontal',
      floor: 0,
      seatsLayout: 'numbered',
      seats: [
        [
          {
            seat: '03',
            position: {
              x: 0,
              y: 4,
              z: 0,
            },
            occupied: true,
            type: 'seat',
          },
          {
            seat: null,
            position: {
              x: 1,
              y: 0,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 2,
              y: 0,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: '11',
            position: {
              x: 3,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '15',
            position: {
              x: 4,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '19',
            position: {
              x: 5,
              y: 4,
              z: 0,
            },
            occupied: true,
            type: 'seat',
          },
          {
            seat: '23',
            position: {
              x: 6,
              y: 4,
              z: 0,
            },
            occupied: true,
            type: 'seat',
          },
          {
            seat: '27',
            position: {
              x: 7,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '31',
            position: {
              x: 8,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '35',
            position: {
              x: 9,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '40',
            position: {
              x: 10,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '43',
            position: {
              x: 11,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '47',
            position: {
              x: 14,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '51',
            position: {
              x: 15,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '55',
            position: {
              x: 16,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '59',
            position: {
              x: 17,
              y: 4,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
        ],
        [
          {
            seat: '04',
            position: {
              x: 0,
              y: 3,
              z: 0,
            },
            occupied: true,
            type: 'seat',
          },
          {
            seat: null,
            position: {
              x: 1,
              y: 1,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 2,
              y: 1,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: '12',
            position: {
              x: 3,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '16',
            position: {
              x: 4,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '20',
            position: {
              x: 5,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '24',
            position: {
              x: 6,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '28',
            position: {
              x: 7,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '32',
            position: {
              x: 8,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '36',
            position: {
              x: 9,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '39',
            position: {
              x: 10,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '44',
            position: {
              x: 11,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '48',
            position: {
              x: 14,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '52',
            position: {
              x: 15,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '56',
            position: {
              x: 16,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '60',
            position: {
              x: 17,
              y: 3,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
        ],
        [
          {
            seat: null,
            position: {
              x: 0,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 1,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 2,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 3,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 4,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 5,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 6,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 7,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 8,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 9,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 10,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 11,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 14,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 15,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 16,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
          {
            seat: null,
            position: {
              x: 17,
              y: 2,
              z: 0,
            },
            type: 'emptyOrReservedSpace',
          },
        ],
        [
          {
            seat: '02',
            position: {
              x: 0,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '06',
            position: {
              x: 1,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '08',
            position: {
              x: 2,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '10',
            position: {
              x: 3,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '14',
            position: {
              x: 4,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '18',
            position: {
              x: 5,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '22',
            position: {
              x: 6,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '26',
            position: {
              x: 7,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '30',
            position: {
              x: 8,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '34',
            position: {
              x: 9,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '38',
            position: {
              x: 10,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '42',
            position: {
              x: 11,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '46',
            position: {
              x: 14,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '50',
            position: {
              x: 15,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '54',
            position: {
              x: 16,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '58',
            position: {
              x: 17,
              y: 1,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
        ],
        [
          {
            seat: '01',
            position: {
              x: 0,
              y: 0,
              z: 0,
            },
            occupied: true,
            type: 'seat',
          },
          {
            seat: '05',
            position: {
              x: 1,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '07',
            position: {
              x: 2,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '09',
            position: {
              x: 3,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '13',
            position: {
              x: 4,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '17',
            position: {
              x: 5,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '21',
            position: {
              x: 6,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '25',
            position: {
              x: 7,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '29',
            position: {
              x: 8,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '33',
            position: {
              x: 9,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '37',
            position: {
              x: 10,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '41',
            position: {
              x: 11,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '45',
            position: {
              x: 14,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '49',
            position: {
              x: 15,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '53',
            position: {
              x: 16,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
          {
            seat: '57',
            position: {
              x: 17,
              y: 0,
              z: 0,
            },
            occupied: false,
            type: 'seat',
          },
        ],
      ],
    }
  })

  const onSelectedSeat = (seat: ISeat): void => {
    if (seat.type !== SeatsType.SEAT) return

    if (selectedSeats.value.some(s => s.seat === seat.seat)) {
      selectedSeats.value = selectedSeats.value.filter(s => s.seat !== seat.seat)
    } else {
      selectedSeats.value.push(seat)
    }

    selectedSeats.value.sort((a, b) => Number(a.seat) - Number(b.seat))
  }
</script>

<template>
  <div class="box-seats-map d-flex justify-content-between pt-4">
    <div class="info-seats-map d-flex flex-column align-items-center gap-3">
      <div class="info-seats-header">
        <i class="uil uil-info-circle me-1"></i>
        <span>Selecione a quantidade de passageiros marcando as poltronas desejadas:</span>
      </div>

      <div class="seats-map d-flex flex-column">
        <div class="bus d-flex gap-3 p-5">
          <div class="driver d-flex align-items-end">
            <img src="@/assets/img/icons/volante-poltrona.svg" alt="Ícone do volante do ônibus" />
          </div>

          <div class="bus-layout gap-3">
            <div
              v-for="(seat, i) in seats.seats.flat()"
              :key="i"
              class="seat"
              :style="{
                gridColumnStart: seat.position.x + 2,
                gridColumnEnd: seat.position.x + 3,
                gridRowStart: seat.position.y + 1,
                gridRowEnd: seat.position.y + 2,
              }"
            >
              <BusSeat
                :type="getAvailabilitySeat(seat.occupied)"
                :number="seat.seat"
                :showNumber="true"
                :seat="seat"
                @selectedSeat="onSelectedSeat"
                :selected="selectedSeats.some(s => s.seat === seat.seat)"
                v-if="seat.type === SeatsType.SEAT"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="options-seat-map d-flex gap-5">
        <BusSeat :type="SeatsAvailability.AVAILABLE" :text="true" />
        <BusSeat :type="SeatsAvailability.SELECTED" :text="true" />
        <BusSeat :type="SeatsAvailability.OCCUPIED" :text="true" />
      </div>
    </div>

    <div class="box-selected-seats d-flex flex-column justify-content-between gap-3 ps-3 pt-4">
      <div class="d-flex flex-column gap-3">
        <div class="d-flex">
          <span class="seats-selected-text">Poltronas selecionadas</span>
        </div>

        <div class="selected-seats d-flex flex-wrap gap-3">
          <div
            v-for="(selectedSeat, i) in selectedSeats"
            :key="i"
          >
            <BusSeat
              :type="SeatsAvailability.AVAILABLE"
              :number="selectedSeat.seat"
              :showNumber="true"
              :seat="selectedSeat"
              @selectedSeat="onSelectedSeat"
            />
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <BlueButton title="Ir para pagamento" link="/onibus" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .seat {
    transform: rotateX(180deg);
  }

  .bus-layout {
    display: grid;
    grid-template-columns: repeat(16, 24px);
    grid-template-rows: repeat(5, 1fr);
    height: 100%;
    width: fit-content;
    transform: rotateX(180deg);
  }

  .driver {
    width: 32px;
    padding-bottom: 1.7rem;
  }

  .bus {
    border-radius: 56px 24px 24px 56px;
    height: 200px;
    overflow: hidden;
    transition: 0.5s;
    border: 1px solid #d5d8de;
  }

  .box-selected-seats {
    max-width: 200px;
    border-left: 1px solid #d5d8de;
    padding-right: 1.5rem;
    padding-bottom: 1.8rem;
    margin-top: -1rem;
    margin-bottom: -1rem;
  }

  .box-seats-map {
    border-top: 1px solid #d5d8de;
    margin-left: -1rem;
    margin-right: -1.5rem;
  }

  .info-seats-map {
    margin: 0 auto;
  }

  .seats-selected-text {
    font-weight: 500;
    color: #151618;
  }
</style>
