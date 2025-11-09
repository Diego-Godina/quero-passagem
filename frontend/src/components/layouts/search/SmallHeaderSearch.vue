<script setup lang="ts">
  import SmallWidgetSearch from '@/components/layouts/search/SmallWidgetSearch.vue'

</script>

<template>
  <div class="widget-search d-flex">
    <SmallWidgetSearch title="Comprar Passagens de Ônibus" button-text="Buscar passagem"/>
  </div>
</template>

<style scoped>
  .widget-search {
    padding: 0 40px;
    background-color: #0D2240;
    box-shadow: 3px 3px 6px #00000059;
  }
</style>
