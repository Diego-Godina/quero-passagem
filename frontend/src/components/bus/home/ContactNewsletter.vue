<script setup lang="ts">
import BlueButton from '@/components/buttons/BlueButton.vue'
</script>

<template>
  <form class="form">
    <div class="box-newsletter d-flex flex-column align-items-center justify-content-center">
      <div class="mb-6">
        <h2>Deseja receber e-mails com novidades e descontos exclusivos?</h2>
      </div>

      <div class="form-inputs d-flex flex-row justify-content-between align-items-center gap-3">
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input has-background-white is-medium custom-autocomplete"
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
            />

            <span class="icon is-small is-left">
              <img
                src="@/assets/img/icons/icon_pessoa_outline.png"
                alt="Ícone de usuário"
                width="15"
              />
            </span>
          </div>
        </div>

        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input has-background-white is-medium custom-autocomplete"
              type="text"
              id="email"
              name="email"
              placeholder="Seu e-mail"
            />

            <span class="icon is-small is-left">
              <img
                src="@/assets/img/icons/icon_mail_outline.png"
                alt="Ícone de usuário"
                width="15"
              />
            </span>
          </div>
        </div>

        <div>
          <BlueButton title="Inscreva-se" link="/" />
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form {
  padding: 70px 0;
  background: #f8f8f8;
}

h2 {
  color: #101828;
  font-family: Sora, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: normal;
}

.field {
  margin-bottom: 0 !important;
}
</style>
