<script setup lang="ts">
import BoxContent from '@/components/layouts/BoxContent.vue'
</script>

<template>
  <BoxContent>
    <div class="d-flex flex-column py-5">
      <div class="d-flex justify-content-center mb-4">
        <h2>Informações gerais</h2>
      </div>

      <div class="d-flex flex-column justify-content-start">
        <p class="sub-title"><strong>Tempo médio de viagem</strong></p>
        <p class="body mt-1">
          O tempo de viagem entre as cidades pode variar conforme a rota, viação, condições de
          trânsito e o tipo de ônibus escolhido. Consulte a estimativa ao selecionar sua passagem.
        </p>

        <p class="sub-title mt-4"><strong>Preço da passagem</strong></p>
        <p class="body mt-1">
          Os preços das passagens variam de acordo com a viação, data, horário e tipo de poltrona.
          Confira os valores atualizados no momento da compra, pois podem sofrer alterações.
        </p>

        <p class="sub-title mt-4"><strong>Tipos de ônibus disponíveis</strong></p>
        <div class="body mt-1">
          <ul>
            <li>
              <strong>Convencional: </strong>ônibus com poltronas do tipo convencional geralmente
              possuem uma inclinação até 45º e banheiro.
            </li>
            <li>
              <strong>Executivo: </strong>poltronas confortáveis, ar-condicionado, sanitário e, em
              alguns casos, água mineral.
            </li>
            <li>
              <strong>Leito ou Leito-cama: </strong>maior inclinação, ideal para viagens mais
              longas, com ar-condicionado, sanitário e, possivelmente, água mineral.
            </li>
          </ul>
        </div>

        <p class="sub-title mt-4"><strong>Como funciona o embarque</strong></p>
        <div class="body mt-1">
          <ul>
            <li>
              <strong>Embarque direto: </strong>algumas viações permitem apresentar o bilhete
              digital, sem necessidade de retirada no guichê.
            </li>
            <li>
              <strong>Retirada no guichê: </strong>em certos casos, é necessário retirar o bilhete
              físico antes do embarque.
            </li>
          </ul>
        </div>

        <p class="mt-4">
          <strong>Recomendação: </strong
          ><span class="body"
            >sempre verifique as regras específicas da viação escolhida, bem como eventuais
            exigências relacionadas ao bilhete.</span
          >
        </p>
      </div>
    </div>
  </BoxContent>
</template>

<style scoped>
h2 {
  font-family: Sora, sans-serif;
  font-size: 1.3rem;
  line-height: 1.4rem;
  font-weight: 700;
}

.sub-title {
  color: #46484d;
}

.body {
  color: #46484d;
}

ul {
  list-style-type: disc;
  list-style-position: inside;
}
</style>
