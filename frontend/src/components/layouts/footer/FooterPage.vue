<script setup lang="ts"></script>

<template>
  <footer>
    <div class="d-flex flex-row justify-content-between">
      <div class="group-payments-methods d-flex flex-column">
        <h3>Formas de pagamento</h3>
        <div class="payments-methods d-flex flex-row gap-3 mt-2">
          <img src="@/assets/img/logos/payments/mastercard.svg" alt="Mastercard Logo" />
          <img src="@/assets/img/logos/payments/visa.svg" alt="Visa Logo" />
          <img src="@/assets/img/logos/payments/hipercard.svg" alt="Hipercard Logo" />
          <img src="@/assets/img/logos/payments/american.svg" alt="American Logo" />
          <img src="@/assets/img/logos/payments/elo.svg" alt="Elo Logo" />
          <img src="@/assets/img/logos/payments/pix.svg" alt="Pix Logo" />
          <img src="@/assets/img/logos/payments/mercado-pago.svg" alt="Mercado pago Logo" />
          <img src="@/assets/img/logos/payments/boleto.png" alt="Boleto Logo" />
          <img src="@/assets/img/logos/payments/nupay.svg" alt="Nupay Logo" />
        </div>
      </div>

      <div class="group-security-methods d-flex flex-column">
        <h3>Segurança</h3>
        <div class="security-methods d-flex flex-row gap-3 mt-2">
          <img src="@/assets/img/logos/security/cadastur.svg" alt="Cadastur Logo" />
          <img
            src="@/assets/img/logos/security/compra-segura.png"
            alt="Compra segura Logo"
            width="66"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid #0d2240;
  padding: 40px 40px;
}

img {
  height: 24px;
}
</style>
