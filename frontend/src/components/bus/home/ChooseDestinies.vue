<script setup lang="ts">
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { CHOOSE_DESTINIES } from '@/constants/chooseDestinies'
  import IDestiniesOptions from '@/interfaces/home-view/IDestiniesOptions'

  const destinies = CHOOSE_DESTINIES as IDestiniesOptions[]
</script>

<template>
  <div class="box-top-destinies py-7">
    <BoxContent>
      <div class="d-flex flex-column justify-content-center gap-5">
        <div class="d-flex flex-column align-items-center">
          <h2>Escolha seu destino</h2>
          <p class="sub-title">São mais de 5 mil destinos em todo o país para escolher sem sair de casa.</p>
        </div>

        <div class="cards-destinies d-flex gap-4">
          <div
            v-for="destiny in destinies"
            :key="destiny.name"
            class="card-destinies d-fex flex-column"
          >
            <img :src="`../../../../src/assets/img/cities/${destiny.image}`" :alt="destiny.name">
            <div class="d-flex flex-column gap-3 p-4 pb-5">
              <div>
                <h3>{{ destiny.name }}</h3>
              </div>

              <div class="d-flex flex-column gap-2">
                <div class="d-flex justify-content-between">
                  <div>
                    <span>Partindo de </span>
                  </div>
                  <div>
                    <span>A partir de </span>
                  </div>
                </div>

                <div
                  v-for="option in destiny.options"
                  :key="option.city+option.price"
                  class="d-flex justify-content-between"
                >
                  <div>
                    <RouterLink :to="option.link" class="link"><span>{{ option.city }}</span></RouterLink>
                  </div>
                  <div>
                    <RouterLink :to="option.link" class="link"><span>R$ {{ option.price }}</span></RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RouterLink to="/auto-viacoes" class="link show-more">
          Mostre-me mais destinos
        </RouterLink>
      </div>
    </BoxContent>
  </div>
</template>

<style scoped>
  .box-top-destinies {
    background: #F8F8F8;
  }

  h2 {
    font-weight: 700;
    line-height: normal;
    font-family: Sora, sans-serif;
    font-size: 1.8rem;
    color: #0D2240;
  }

  h3 {
    font-family: Sora, sans-serif;
    font-size: 1.3rem;
    border-bottom: 2px solid #F8F8F8;
    text-transform: none;
    color: #0D2240;
  }

  .py-7 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .sub-title {
    color: #0D2240;
    font-size: 1.2rem;
  }

  .card-destinies {
    font-weight: 500;
    border: 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  }

  .card-destinies img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .link {
    color: #000;
  }

  .show-more {
    text-transform: uppercase;
    color: #2f7de1;
    text-align: end;
    text-decoration: none;
    margin: 0;
    flex-shrink: 0;
    font-size: 1rem;
    font-weight: 600;
  }
</style>
