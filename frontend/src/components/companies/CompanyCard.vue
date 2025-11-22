<script setup lang="ts">
import type IBusCompany from '@/interfaces/companies/IBusCompany.ts'

const props = defineProps<{
  company: IBusCompany
}>()
</script>

<template>
  <div class="card-bus-company d-flex justify-content-center align-items-center bg-white">
    <RouterLink :to="`${props.company.link}`" class="link">
      <img
        class="img-card"
        :src="`../../../../src/assets/img/companies/${props.company.icon}`"
        :alt="`${props.company.name}`"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.card-bus-company {
  flex: 1 2 15%;
  padding: 16px 24px;
  border: 2px solid #f4f7fc;
  border-radius: 8px;
}

.img-card {
  max-width: 140px;
}
</style>
