<script setup lang="ts">
  import { computed } from 'vue'
  import type IBusCompany from '@/interfaces/companies/IBusCompany.ts'
  import CompanyCard from '@/components/companies/CompanyCard.vue'
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { COMPANIES_TO_SHOW_ON_HOME } from '@/constants/companiesToShowOnHome'

  const companies = COMPANIES_TO_SHOW_ON_HOME as IBusCompany[]
</script>

<template>
  <BoxContent>
    <section class="bus-companies d-flex flex-column">
      <h2 class="h2-title">Passagens de Ônibus Baratas: Viações de Ônibus</h2>
      <span class="sub-title">A passagem de ônibus na viação de sua preferência</span>

      <div class="companies d-flex gap-5 mt-5">
        <CompanyCard
          v-for="company in companies"
          :key="company.name"
          :company="company"
        />
      </div>

      <RouterLink to="/auto-viacoes" class="link show-more-companies mt-6">
        Mostre-me todas as viações
      </RouterLink>
    </section>
  </BoxContent>
</template>

<style scoped>
  .show-more-companies {
    text-transform: uppercase;
    color: #2f7de1;
    text-align: end;
    text-decoration: none;
    margin: 0;
    flex-shrink: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .companies {
    flex-wrap: wrap;
  }

  .bus-companies {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .h2-title {
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: Sora, sans-serif;
    font-size: 1.8rem;
    color: #0D2240;
    text-align: center;
  }

  .sub-title {
    text-align: center;
    margin-top: 2px;
    color: #0D2240;
    font-size: 1.1rem;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.7px;
  }
</style>
