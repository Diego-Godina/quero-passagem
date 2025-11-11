<script setup lang="ts">

</script>

<template>
  <div class="banner-app limit-height">
    <div class="box-banner-app d-flex justify-content-center">
      <div>
        <img src="@/assets/img/banner_download_app.png" alt="Banner para download do app" class="limit-height">
      </div>

      <a class="link link-android" target="_blank" href="https://play.google.com/store/apps/details?id=br.com.queropassagem" title="Android link"></a>
      <a class="link link-iphone" target="_blank" href="https://apps.apple.com/br/app/quero-passagem/id1121775076" title="Iphone link"></a>
    </div>
  </div>
</template>

<style scoped>
  .banner-app {
    background: #6BCBDB;
  }

  .limit-height {
    height: 270px;
  }

  .box-banner-app {
    padding: 0 40px;
    position: relative;
  }

  .link {
    height: 6%;
    width: 5%;
    position: absolute;
    z-index: 2;
  }

  .link-iphone {
    left: 51%;
    top: 80%;
  }

  .link-android {
    left: 45%;
    top: 80%;
  }
</style>
