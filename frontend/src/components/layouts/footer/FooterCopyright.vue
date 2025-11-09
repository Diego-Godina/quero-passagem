<script setup lang="ts">
  import BoxContent from '@/components/layouts/BoxContent.vue'
</script>

<template>
  <BoxContent>
    <div class="copyright d-flex flex-column gap-2">
      <p>Copyright 2025 © QueroPassagem.com.br</p>
      <p>Todos os direitos reservados. CNPJ 18.087.991/0001-57</p>
    </div>
  </BoxContent>
</template>

<style scoped>
  .copyright {
    border-top: 1px solid #0d2240;
    text-align: center;
    color: #0d2240;
    font-size: 1.1rem;
    margin-left: -40px;
    margin-right: -40px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
</style>
