<script setup lang="ts">
import { CARDS_TRAVEL_BENEFITS } from '@/constants/cardsTravelBenefits'
import ICardTravelBenefits from '@/interfaces/home-view/ICardTravelBenefits'
import BoxContent from '@/components/layouts/BoxContent.vue'

const cards = CARDS_TRAVEL_BENEFITS as ICardTravelBenefits[]
</script>

<template>
  <BoxContent>
    <div class="d-flex flex-column align-items-center py-7">
      <div class="header-travel-benefits d-flex flex-column align-items-center mb-6">
        <h2 class="mb-5">Viajar de ônibus é rápido e fácil com a Quero Passagem</h2>
        <p class="text-travel-benefits">
          A Quero Passagem é o maior Portal de Passagens de Ônibus do Brasil - sua Central de
          Passagens Rodoviárias online. Pesquise viações, compare horários, preços e compre
          passagens rodoviárias sem sair de casa. São mais de 5 mil destinos em todo o país,
          conectando cidades como Belo Horizonte, Curitiba, Brasília, São Paulo, Rio de Janeiro,
          Salvador, Goiânia e muito mais.
        </p>
      </div>

      <div class="cards d-flex gap-5">
        <div
          v-for="card in cards"
          :key="card.image"
          class="card-travel-benefits d-flex flex-column pb-6"
        >
          <img
            class="img-card"
            :src="`../../../../src/assets/img/travel-benefits/${card.image}`"
            :alt="card.image"
          />
          <p class="text-card mt-4 px-4">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </BoxContent>
</template>

<style scoped>
  .card-travel-benefits {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #0D2240;
    font-family: Sora, sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  .header-travel-benefits {
    padding: 0 100px;
  }

  .text-travel-benefits {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  .py-7 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .text-card {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .img-card {
    height: 236px;
  }

  @media screen and (max-width: 768px) {
    .cards {
      flex-direction: column;
    }

    .card-travel-benefits {
      width: 260px;
    }
  }
</style>
