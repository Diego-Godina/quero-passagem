<script setup lang="ts">
  import BlueButton from '@/components/buttons/BlueButton.vue'
  import BusSeat from '@/components/bus/list/BusSeat.vue'
  import { computed, ref } from 'vue'
  import type ISeats from '@/interfaces/ISeats.ts'
  import { SeatsAvailability } from '@/enums/SeatsAvailability.ts'
  import type ISeat from '@/interfaces/ISeat.ts'
  import { SeatsType } from '@/enums/SeatsType.ts'
  import { useStore } from "@/stores";

  const selectedSeats = ref<ISeat[]>([])
  const store = useStore()

  const props = defineProps<{
    orderId: string,
  }>()

  const getAvailabilitySeat = (occupied: boolean | undefined): string => {
    if (occupied) return SeatsAvailability.OCCUPIED

    return SeatsAvailability.AVAILABLE
  }

  const seats = computed<ISeats>(() => {
    return store.state.order.seats[props.orderId]
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
                gridColumnStart: seat.position.x + 1,
                gridColumnEnd: seat.position.x + 2,
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
