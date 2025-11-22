<script setup lang="ts">
const props = defineProps<{
  link: string
  icon: string
  title: string
}>()
</script>

<template>
  <RouterLink :to="`${props.link}`" aria-current="page" class="nav-link">
    <img
      :src="`../../../../src/assets/img/icons/${props.icon}`"
      :alt="`${props.title}`"
      class="icon-link"
    />
    <span class="title-link">{{ props.title }}</span>
  </RouterLink>
</template>

<style scoped></style>
