<script setup lang="ts">

  import InputSearchDestinies from '@/components/layouts/search/InputSearchDestinies.vue'
  import SelectDates from '@/components/layouts/search/SelectDates.vue'
  import { useRouter } from 'vue-router'
  import BoxContent from '@/components/layouts/BoxContent.vue'

  const props = defineProps<{
    title: string,
    buttonText: string
  }>()

  const router = useRouter()

  const searchBusTickets = () => {
    router.push({name: 'list-bus-tickets'})
  }
</script>

<template>
  <BoxContent>
    <form @submit.prevent="searchBusTickets">
      <div class="widget-search">
        <h1 class="title-widget-search">{{ props.title }}</h1>

        <InputSearchDestinies id="search_origin" icon="icon_circle-desativado.svg" placeholder="Partindo de"/>
        <InputSearchDestinies id="search_destiny" icon="icon_pin_outline-desativado.svg" placeholder="Indo para"/>

        <SelectDates/>
        <button type="submit" class="button-widget-search">{{ buttonText }}</button>
      </div>
    </form>
  </BoxContent>
</template>

<style scoped>
  .widget-search {
    background-color: #0D2240;
    box-shadow: 3px 3px 6px #00000059;
    border-radius: 8px;
    width: 480px;
    padding: 8px;
  }

  .title-widget-search {
    position: relative;
    color: white;
    font-family: 'Sora', sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
    margin: 10px 0 10px;
  }

  .button-widget-search {
    background: #2764c0;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    height: 35px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
  }
</style>
