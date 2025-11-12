<script setup lang="ts">
  import NavBar from '@/components/layouts/navigation/NavBar.vue'
  import MainContent from '@/components/MainContent.vue'
  import HeaderSearch from '@/components/layouts/search/HeaderSearch.vue'
  import SubHeaderBusTickes from '@/components/bus/home/SubHeaderBusTickes.vue'
  import BusCompanies from '@/components/bus/home/BusCompanies.vue'
  import AboveFooter from '@/components/layouts/footer/AboveFooter.vue'
  import FooterPage from '@/components/layouts/footer/FooterPage.vue'
  import FooterCopyright from '@/components/layouts/footer/FooterCopyright.vue'
  import TopDestinies from '@/components/bus/TopDestinies.vue'
  import BannerApp from '@/components/bus/home/BannerApp.vue'
  import ContactNewsletter from '@/components/bus/home/ContactNewsletter.vue'

</script>

<template>
  <NavBar></NavBar>

  <MainContent>
    <HeaderSearch/>

    <SubHeaderBusTickes/>

    <BusCompanies/>

    <BannerApp/>

    <ContactNewsletter />

    <TopDestinies/>
  </MainContent>

  <AboveFooter/>

  <FooterPage/>

  <FooterCopyright/>
</template>

<style scoped>

</style>
