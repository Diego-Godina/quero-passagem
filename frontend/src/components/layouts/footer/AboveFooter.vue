<script setup lang="ts">
import BoxContent from '@/components/layouts/BoxContent.vue'
</script>

<template>
  <BoxContent>
    <div class="box-above-footer d-flex flex-column gap-5">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column pe-5 w-50">
          <RouterLink to="/" class="link p-0 me-4">
            <img
              src="@/assets/img/logos/logo_nova_grande.png"
              alt="Logo Quero Passagem"
              width="115"
            />
          </RouterLink>
          <p class="mt-5">Na Quero Passagem sua compra é totalmente segura!</p>
          <p class="mt-5">
            Para garantirmos que seus dados estejam sempre protegidos, não armazenamos nenhuma
            informação do cartão de crédito utilizado, seguindo os protocolos de criptografia e de
            segurança das principais instituições bancárias do Brasil.
          </p>
        </div>
        <div class="d-flex flex-row justify-content-end gap-5">
          <div class="d-flex flex-column">
            <ul>
              <li class="p-2"><RouterLink to="/sobre" class="link">Sobre nós</RouterLink></li>
              <li class="p-2">
                <RouterLink to="/termo-de-uso" class="link">Termos de uso</RouterLink>
              </li>
              <li class="p-2">
                <RouterLink to="/politica-de-privacidade" class="link"
                  >Política de privacidade</RouterLink
                >
              </li>
              <li class="p-2">
                <RouterLink to="/termo-de-uso-louge-vip" class="link"
                  >Termos de Uso Louge Vip</RouterLink
                >
              </li>
              <li class="p-2"><RouterLink to="/imprensa" class="link">Imprensa</RouterLink></li>
              <li class="p-2">
                <RouterLink to="/minha-conta" class="link">Minha Conta</RouterLink>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column">
            <ul>
              <li class="p-2">
                <RouterLink to="/atendimento" class="link">Atendimento Online</RouterLink>
              </li>
              <li class="p-2">
                <RouterLink to="/vagas" class="link">Trabalhe Conosco</RouterLink>
              </li>
              <li class="p-2"><RouterLink to="/gratuidade" class="link">Gratuidade</RouterLink></li>
              <li class="p-2">
                <RouterLink to="/auto-viacoes" class="link">Auto Viações</RouterLink>
              </li>
              <li class="p-2">
                <RouterLink to="/rodoviarias" class="link">Rodoviárias</RouterLink>
              </li>
              <li class="p-2"><RouterLink to="/destinos" class="link">Destinos</RouterLink></li>
            </ul>
          </div>
          <div class="d-flex flex-column">
            <ul>
              <li class="p-2"><RouterLink to="/afiliados" class="link">Afiliados</RouterLink></li>
              <li class="p-2"><RouterLink to="/mobile" class="link">Versão Mobile</RouterLink></li>
              <li class="p-2"><RouterLink to="/rodomilhas" class="link">Rodomilhas</RouterLink></li>
              <li class="p-2"><RouterLink to="/" class="link">Viajo Mucho</RouterLink></li>
              <li class="p-2">
                <RouterLink to="/" class="link">La terminal Costa Rica</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <h3>Siga nossas redes sociais:</h3>
          <div class="social-medias d-flex flex-row gap-3">
            <a href="https://www.instagram.com/queropassagem"><i class="uil uil-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCV9uFupk50da_JOeooO5KSA"
              ><i class="uil uil-youtube"></i
            ></a>
            <a href="https://www.facebook.com/queroPassagem"><i class="uil uil-facebook"></i></a>
            <a href="https://www.linkedin.com/company/queropassagem/posts/?feedView=all"
              ><i class="uil uil-linkedin"></i
            ></a>
          </div>
        </div>

        <div class="d-flex flex-column">
          <h3>Conheça o grupo QP:</h3>
          <div class="social-medias d-flex flex-row gap-5 align-items-center">
            <a href="https://rodoviariaonline.com.br/">
              <img
                src="@/assets/img/logos/rodoviaria-online.svg"
                alt="Rodoviária online"
                width="120"
              />
            </a>
            <a href="https://viajomucho.com.mx/">
              <img src="@/assets/img/logos/viajo-mucho.svg" alt="Viajo Mucho" width="120" />
            </a>
            <a href="https://www.laterminalcostarica.com/">
              <img src="@/assets/img/logos/la-terminal.svg" alt="La Terminal" width="120" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </BoxContent>
</template>

<style scoped>
.box-above-footer {
  padding-top: 24px;
  padding-bottom: 24px;
}

.link,
p {
  color: #0d2240;
  font-size: 1.1rem;
  text-decoration: none;
}

.social-medias .uil {
  color: #0d2240;
  font-size: 32px;
}
</style>
