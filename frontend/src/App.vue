<script setup lang="ts">
import NotificationMessage from '@/components/layouts/NotificationMessage.vue'
</script>

<template>
  <main>
    <NotificationMessage />
    <router-view></router-view>
  </main>
</template>

<style>
main {
  --primary-bg: #fff;
  --primary-text: #0d2240;
  --title-font: 'Sora';

  color: var(--primary-text);
  font-family: 'Inter', sans-serif;
  max-width: 1280px;
  margin: 0 auto;
}

html {
  font-size: 10px !important;
}
</style>
