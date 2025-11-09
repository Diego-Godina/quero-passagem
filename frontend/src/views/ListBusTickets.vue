<script setup lang="ts">

import NavBar from '@/components/layouts/navigation/NavBar.vue'
import AboveFooter from '@/components/layouts/footer/AboveFooter.vue'
import FooterPage from '@/components/layouts/footer/FooterPage.vue'
import FooterCopyright from '@/components/layouts/footer/FooterCopyright.vue'
import SmallHeaderSearch from '@/components/layouts/search/SmallHeaderSearch.vue'
import HeaderList from '@/components/bus/list/HeaderList.vue'
import TopDestinies from '@/components/layouts/TopDestinies.vue'
</script>

<template>
  <NavBar></NavBar>

  <SmallHeaderSearch/>

  <div class="bg-gray">
    <HeaderList/>
  </div>

  <TopDestinies/>

  <AboveFooter/>

  <FooterPage/>

  <FooterCopyright/>
</template>

<style scoped>
  .bg-gray {
    background-color: #f5f5f7;
  }
</style>
