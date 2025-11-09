<script setup lang="ts">

</script>

<template>
  <div class="info-footer d-flex justify-content-between pt-3">
    <div class="card-gray py-1 px-2 d-flex align-items-center">
      <img src="@/assets/img/icons/icon-star-rating-green.svg" alt="Ícone de estrela">
      <span class="info-gray ms-1">8,0</span>
    </div>

    <div class="direct-boarding card-gray py-1 px-2 d-flex align-items-center">
      <i class="uil uil-qrcode-scan c-gray-700"></i>
      <span class="info-gray ms-1">Embarque direto</span>
    </div>
  </div>
</template>

<style scoped>
  .card-gray {
    border-radius: 4px;
    background-color: #edf0f7;
  }

  .info-footer {
    border-top: 1px solid #d5d8de;
    cursor: pointer;
  }
</style>
