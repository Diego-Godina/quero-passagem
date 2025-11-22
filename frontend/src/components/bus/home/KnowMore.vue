<script setup lang="ts">
import BoxContent from '@/components/layouts/BoxContent.vue'
import BlueButton from '@/components/buttons/BlueButton.vue'
</script>

<template>
  <BoxContent>
    <div class="box-know-more d-flex justify-content-evenly py-7 gap-4">
      <div class="d-flex align-items-center">
        <img class="logo" src="@/assets/img/parceiro.png" alt="Seja um parceiro Quero Passagem" />
      </div>

      <div class="d-flex flex-column justify-content-evenly align-items-start gap-5">
        <div class="d-flex align-items-center">
          <div class="me-3">
            <img src="@/assets/img/agencia.png" alt="Ícone de agências" width="45" />
          </div>

          <div class="d-flex flex-column gap-1">
            <h4>Agências de Viagem</h4>
            <p class="text">
              Sistema completo de emissão e venda de passagens rodoviárias para agências de viagens.
            </p>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <div class="me-3">
            <img src="@/assets/img/otas.png" alt="Ícone de OTA's" width="45" />
          </div>

          <div class="d-flex flex-column gap-1">
            <h4>OTA's</h4>
            <p class="text">
              Insira nosso banner (buscador de passagens) em seu site e ganhe comissões por cada
              venda.
            </p>
          </div>
        </div>

        <div class="box-button mb-4">
          <BlueButton title="Saiba mais" link="/afiliados" />
        </div>
      </div>
    </div>
  </BoxContent>
</template>

<style scoped>
h4 {
  color: #0d2240;
  font-family: Sora, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4rem;
}

.text {
  color: #0d2240;
  font-weight: 400;
  line-height: 1.4rem;
}

.box-know-more {
  height: 300px;
}

.py-7 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.logo {
  max-height: 100%;
}
</style>
