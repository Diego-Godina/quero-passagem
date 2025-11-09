<script setup lang="ts">

  import type IBreadcrumb from '@/interfaces/IBreadcrumb.ts'

  const props = defineProps<{
    breadcrumbs: IBreadcrumb[]
  }>()
</script>

<template>
  <div class="d-flex">
    <div
      v-for="(breadcrumb, index) in props.breadcrumbs"
      :key="breadcrumb.link"
      class="d-flex align-items-center"
    >
      <RouterLink
        :to="breadcrumb.link"
        class="breadcrumb-link"
        :class="{ 'active': breadcrumb.active}"
      >
        {{ breadcrumb.name }}
      </RouterLink>

      <span v-if="index < props.breadcrumbs.length - 1" class="mx-2">›</span>
    </div>
  </div>
</template>

<style scoped>
  .breadcrumb-link.active {
    font-weight: 700;
    color: #0d2240;
  }

  .breadcrumb-link {
    font-size: 1.02rem;
    line-height: 1.2rem;
    color: #63656b;
  }
</style>
