<script setup lang="ts">
  import InputSearchDestinies from '@/components/layouts/search/InputSearchDestinies.vue'
  import { useRouter } from 'vue-router'
  import SelectDate from '@/components/layouts/search/SelectDate.vue'

  const router = useRouter()

  const searchBusTickets = () => {
    router.push({name: 'list-tickets'})
  }
</script>

<template>
  <form @submit.prevent="searchBusTickets">
    <div class="widget-search d-flex justify-content-between is-horizontal">
      <div class="d-flex gap-3 justify-content-between">
        <InputSearchDestinies id="search_origin" icon="icon_circle-desativado.svg" placeholder="Partindo de"/>

        <div class="exchange"></div>

        <InputSearchDestinies id="search_destiny" icon="icon_pin_outline-desativado.svg" placeholder="Indo para"/>
      </div>

      <div class="d-flex gap-3 justify-content-between">
        <div>
          <SelectDate id="dt-go" label="Data Saída"/>
        </div>

        <div>
          <SelectDate id="dt-back" label="Data Retorno"/>
        </div>
      </div>

      <button type="submit" class="button-widget-search"><i class="uil uil-search"></i></button>
    </div>
  </form>
</template>

<style scoped>
  .widget-search {
    border-radius: 8px;
    padding: 16px 0;
  }

  form {
    width: 100%;
  }

  .button-widget-search {
    background-color: #1b4a88;
    border-color: #1b4a88;
    border-radius: 4px;
    color: #f5f5f7;
    cursor: pointer;
    line-height: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 12px 24px;
    width: fit-content;
    height: 38px;
  }

  .exchange {
    background-image: url('../../../assets/img/icons/up_down_circle.svg');
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    color: #fff;
    cursor: pointer;
    height: 38px;
    width: 38px;
    z-index: 2;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    rotate: 90deg;
  }
</style>
