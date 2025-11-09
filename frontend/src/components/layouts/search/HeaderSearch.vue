<script setup lang="ts">

import WidgetSearch from '@/components/layouts/search/WidgetSearch.vue'
</script>

<template>
  <section class="banner d-flex align-items-center">
      <WidgetSearch title="Comprar Passagens de Ônibus" button-text="Buscar passagem"/>
  </section>
</template>

<style scoped>
  .banner {
    background-image: url('../../../assets/img/home_fundo_1.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 310px;
    padding: 0 40px;
  }
</style>
