<script setup lang="ts">

</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
  main {
    --primary-bg: #fff;
    --primary-text: #0D2240;
    --title-font: 'Sora';

    color: var(--primary-text);
    font-family: 'Inter', sans-serif;
  }

  html {
    font-size: 10px !important;
  }
</style>
