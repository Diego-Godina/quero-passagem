<script setup lang="ts">
import NavItem from '@/components/layouts/navigation/NavItem.vue'
import type INavItem from '@/interfaces/INavItem.ts'
import AButton from '@/components/buttons/AButton.vue'
import BlueButton from '@/components/buttons/BlueButton.vue'
import BoxContent from '@/components/layouts/BoxContent.vue'
import { NAV_ITEMS } from '@/constants/navItems'

const navItems = NAV_ITEMS as INavItem[]
</script>

<template>
  <BoxContent>
    <nav class="d-flex flex-row align-items-center justify-content-between pt-2 bg-white">
      <div class="d-flex flex-row">
        <RouterLink to="/" class="navbar-brand p-0 me-4">
          <img
            src="../../../assets/img/logos/logo_nova_grande.png"
            alt="Logo Quero Passagem"
            width="115"
          />
        </RouterLink>
        <div id="navbarNav">
          <ul class="navbar-nav d-flex flex-row">
            <NavItem v-for="navItem in navItems" :key="navItem.title" :navItem="navItem" />
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <div class="me-5">
          <AButton
            title="Central de ajuda"
            link="/atendimento"
            icon="icon_atendimento-online_ajuda.svg"
          />
        </div>
        <div>
          <blue-button title="Entrar" link="/login" />
        </div>
      </div>
    </nav>
  </BoxContent>
</template>

<style scoped></style>
